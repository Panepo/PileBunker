import { dbWeapon, dbType } from './database'
import { listButS } from '../constants/ConstList'
import * as parameters from '../constants/ConstParameters'

export function calcOutput(input) {
	let weaponSelected = dbWeapon.chain().find({ type: input.type }).data()
	let typeSelected = dbType.findOne({ name: input.type })
	let maxMux = 1
	let flyMux = 1
	let totalAtk
	let totalDef
	let output = []

	let typeAtk = (typeSelected.atkM - typeSelected.atk) / 1000
	let comAtk = 1 + Math.floor(input.com / 10) / 100
	let charAtk = Math.floor(typeAtk * input.level + typeSelected.atk)
	charAtk = Math.floor(charAtk * input.AtkParm / 100)
	charAtk = Math.floor(charAtk * comAtk)

	if (input.plain === 'plain') {
		charAtk *= parameters.muxPlain
	}

	if (input.fly === 'fly') {
		if (input.type === 'sword' || input.type === 'lance' || input.type === 'hammer' || input.type === 'shield' || input.type === 'fist') {
			flyMux = parameters.muxFlyMelee
		} else if (input.type === 'bow') {
			flyMux = parameters.muxFlyBow
		}
	}

	if (input.type === 'cannon' && input.cannon === 'cannon') {
		flyMux = parameters.muxCanDirect
	}

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

	if (input.type === 'spell' || input.type === 'dance' || input.type === 'staff' || input.type === 'bell') {
		totalDef = 0
	} else {
		totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
	}

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
