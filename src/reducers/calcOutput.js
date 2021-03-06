import { dbWeapon, dbType } from './database'
import { listMelee, listMagic, listPhys } from '../constants/ConstList'
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

export const calcAtk = input => {
  const typeSelected = dbType.findOne({ name: input.type })
  const typeAtk = (typeSelected.atkM - typeSelected.atk) / 1000
  const comAtk = 1 + Math.floor(input.com / 10) / 100
  let charAtk = Math.floor(typeAtk * input.level + typeSelected.atk)
  charAtk = Math.floor((charAtk * input.AtkParm) / 100)
  charAtk = Math.floor(charAtk * comAtk)
  return charAtk
}

export const calcDef = input => {
  const typeSelected = dbType.findOne({ name: input.type })
  const typeDef = (typeSelected.defM - typeSelected.def) / 1000
  const comDef = 1 + Math.floor(input.com / 10) / 100
  let charDef = Math.floor(typeDef * input.level + typeSelected.def)
  charDef = Math.floor((charDef * input.DefParm) / 100)
  charDef = Math.floor(charDef * comDef)
  return charDef
}

export const calcHp = input => {
  const typeSelected = dbType.findOne({ name: input.type })
  const typeHp = (typeSelected.hpM - typeSelected.hp) / 1000
  const comHp = 1 + Math.floor(input.com / 10) / 100
  let charHp = Math.floor(typeHp * input.level + typeSelected.hp)
  charHp = Math.floor((charHp * input.HpParm) / 100)
  charHp = Math.floor(charHp * comHp)
  return charHp
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

export const calcOutput = input => {
  const weaponSelected = dbWeapon
    .chain()
    .find({ type: input.type })
    .data()
  let maxMux = 1
  let paraMux = 1
  let totalDef
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
      paraMux *= parameters.muxFlyBow
    } else {
      if (listMelee.includes(input.type)) {
        paraMux *= parameters.muxFlyMelee
      }
    }
  }

  // ===============================================================
  // 妖怪敵に対する攻撃力ボーナス
  if (input.mons === 'mons') {
    if (listPhys.includes(input.type)) {
      paraMux *= parameters.muxMonsMelee
    }
  }

  // ===============================================================
  // 砲弾が敵に直撃した場合、攻撃力が50%アップ。
  if (input.cannon === 'cannon' && input.type === 'cannon') {
    if (input.skillCanDirUp === 0) {
      paraMux *= 1 + parameters.muxCanDirect
    } else {
      paraMux *= 1 + input.skillCanDirUp / 100
    }
  }

  // ===============================================================
  // 巨大化補正
  maxMux = parameters.muxMax[input.max]

  // ===============================================================
  // 兜防禦力計算
  totalDef =
    input.def *
      (1 - input.skillDefDown / 100) *
      (1 - input.skillMelIgdef / 100) -
    input.skillDefDownInt

  if (totalDef <= 0) {
    totalDef = 0
  } else {
    if (listMagic.includes(input.type)) {
      totalDef = 0
    }
  }

  // ===============================================================
  // 設施攻擊力計算
  charAtk += input.struAtk

  // ===============================================================
  // ダメージ計算
  weaponSelected.map(data => {
    let totalAtk

    if (parameters.weaponAntiFly.includes(data.name) && input.fly === 'fly') {
      let paraMuxTemp = paraMux * 1.5
      totalAtk =
        ((charAtk + data.atk) * maxMux * (1 + input.skillAtkUp / 100) +
          input.skillAtkUpInt) *
        paraMuxTemp
    } else if (
      input.cannon === 'cannon' &&
      input.type === 'hammer' &&
      parameters.weaponAtkUp.includes(data.name)
    ) {
      let paraMuxTemp = paraMux * (1 + parameters.weaponAtkUpValue / 100)
      totalAtk =
        ((charAtk + data.atk) * maxMux * (1 + input.skillAtkUp / 100) +
          input.skillAtkUpInt) *
        paraMuxTemp
    } else {
      totalAtk =
        ((charAtk + data.atk) * maxMux * (1 + input.skillAtkUp / 100) +
          input.skillAtkUpInt) *
        paraMux
    }

    data.damage = calcDam(
      totalAtk,
      totalDef,
      data.name,
      input.skillDamUp,
      input.skillRecDamUp
    )

    data.frame1 = Math.round(data.f1 / (1 + input.skillSpdUpF / 100))
    if (input.skillSpdUpB >= parameters.maxskillSpdUpB) {
      data.frame2 = 0
    } else {
      data.frame2 = Math.round(data.f2 * (1 - input.skillSpdUpB / 100))
    }
    data.dps =
      Math.floor(
        ((data.damage * data.hit * parameters.valueFPS) /
          (data.frame1 + data.frame2)) *
          100
      ) / 100

    return data
  })

  dbWeapon.update(weaponSelected)

  return weaponSelected
}

const calcDam = (totalAtk, totalDef, name, skillDamUp, skillRecDamUp) => {
  if (parameters.weaponIgnoreDef.includes(name)) {
    let tempDef = Math.round(totalDef * parameters.weaponIgnoreDefValue)
    return calcAtkDef(totalAtk, tempDef, skillDamUp, skillRecDamUp)
  } else if (parameters.weaponIgnoreDef2.includes(name)) {
    let tempDef = Math.round(totalDef * parameters.weaponIgnoreDef2Value)
    return calcAtkDef(totalAtk, tempDef, skillDamUp, skillRecDamUp)
  } else if (parameters.weaponIgnoreDef3.includes(name)) {
    let tempDef = Math.round(totalDef * parameters.weaponIgnoreDef3Value)
    return calcAtkDef(totalAtk, tempDef, skillDamUp, skillRecDamUp)
  }
  return calcAtkDef(totalAtk, totalDef, skillDamUp, skillRecDamUp)
}

const calcAtkDef = (atk, def, skillDamUp, skillRecDamUp) => {
  let damage
  if (atk - parameters.valueProDam >= def) {
    damage = Math.floor(
      Math.floor(atk - def) * (1 + skillDamUp / 100) * (1 + skillRecDamUp / 100)
    )
  } else {
    damage = Math.floor(
      parameters.valueProDam *
        (1 + skillDamUp / 100) *
        (1 + skillRecDamUp / 100)
    )
  }
  return damage
}
