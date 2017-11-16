import { dbWeapon, dbType } from './database'
import { listButS, listMelee, listMagic, listPhys } from '../constants/ConstList'
import * as parameters from '../constants/ConstParameters'

// ===============================================================================
// calculate basic attack value for the character
// ===============================================================================
// Lv.Xでの城娘の能力値Y算出（※2017/08/08メンテ後）
//
//    計算式 … Y=INT(INT((A-B)/1000*X+B)*a)
//        A … 武器種ごとのLv.1000の基本値
//        B … 武器種ごとのLv.0の基本値
//        a … 城娘ごとの能力値係數
//    計算例：Lv.110の駿府城の攻撃の値（絆ボーナス・武器・施設は無しでの値）
//        INT(INT((1234-50)/1000*110+50)*1.10)=198

export function calcAtk(input) {
	let typeSelected = dbType.findOne({ name: input.type })
	let typeAtk = (typeSelected.atkM - typeSelected.atk) / 1000
	let comAtk = 1 + Math.floor(input.com / 10) / 100
	let charAtk = Math.floor(typeAtk * input.level + typeSelected.atk)
	charAtk = Math.floor(charAtk * input.AtkParm / 100)
	charAtk = Math.floor(charAtk * comAtk)
	return charAtk
}

// ===============================================================================
// calculate dps for each weapon
// ===============================================================================
// 城娘の戦場配置後のステータス計算式
//		耐久・攻撃・防禦・範囲
//		＝(基本値×絆ボーナス×地形ボーナス＋裝備補正)×巨大化補正×最大係數の割合上昇系特技・計略補正＋全ての固定値繫上昇特技・計略補正
//
// 城プロのダメージ計算式
//	自身の攻撃力－対象の防禦力＝ダメージ
//
// 城娘の動作に関して
//		実行フレーム＝基本攻撃フレーム/(攻撃速度上昇割合+1)+隙フレーム/(隙速度上昇割合+1)
//		攻撃・隙 速度上昇割合＝裝備上昇割合＋特技計略上昇割合
//		※計算結果は小數點以下四捨五入

export function calcOutput(input) {
	let weaponSelected = dbWeapon.chain().find({ type: input.type }).data()
	let maxMux = 1
	let flyMux = 1
	let totalAtk
	let totalDef
	let output = []
	let charAtk = calcAtk(input)

	// ===============================================================
	// 地形ボーナス
	if (input.plain === 'plain') {
		charAtk *= parameters.muxPlain
	}

	// ===============================================================
	// 飛行敵に対する攻撃力ボーナス
	if (input.fly === 'fly') {
		if (input.type === 'bow') {
			flyMux *= parameters.muxFlyBow
		} else {
			for (let i = 0; i < listMelee.length; i += 1) {
				if (input.type === listMelee[i]) {
					flyMux *= parameters.muxFlyMelee
					break
				}
			}
		}
	}

	// ===============================================================
	// 妖怪敵に対する攻撃力ボーナス
	if (input.mons === 'mons') {
		for (let i = 0; i < listPhys.length; i += 1) {
			if (input.type === listPhys[i]) {
				flyMux *= parameters.muxMonsMelee
				break
			}
		}
	}

	// ===============================================================
	// 砲弾が敵に直撃した場合、攻撃力が50%アップ。
	if (input.type === 'cannon' && input.cannon === 'cannon') {
		flyMux *= parameters.muxCanDirect
	}

	// ===============================================================
	// 巨大化補正
	switch (input.max) {
	case listButS[1]:
		maxMux = parameters.muxMax[0]
		break
	case listButS[2]:
		maxMux = parameters.muxMax[1]
		break
	case listButS[3]:
		maxMux = parameters.muxMax[2]
		break
	case listButS[4]:
		maxMux = parameters.muxMax[3]
		break
	case listButS[5]:
		maxMux = parameters.muxMax[4]
		break
	default:
		maxMux = 1
	}

	// ===============================================================
	// 魔法攻擊補正
	totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
	for (let i = 0; i < listMagic.length; i += 1) {
		if (input.type === listMagic[i]) {
			totalDef = 0
			break
		}
	}

	// ===============================================================
	// ダメージ計算
	for (let i = 0; i < weaponSelected.length; i += 1) {
		totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
		if ((totalAtk - parameters.valueProDam) >= totalDef) {
			weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
		} else {
			weaponSelected[i].damage = parameters.valueProDam
		}
		weaponSelected[i].frame1 = Math.ceil(weaponSelected[i].f1 * (1 - input.aspdSkill / 100))
		weaponSelected[i].frame2 = Math.ceil(weaponSelected[i].f2 * (1 - input.aspdSpell / 100))
		weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
	}
	dbWeapon.update(weaponSelected)
	output = dbWeapon.chain().find({ type: input.type }).data()

	return output
}
