import { dbWeapon, dbType } from './database'
import { listButS } from '../constants/ConstList'
import * as parameters from '../constants/ConstParameters'

export function calcOutput(input) {
	let weaponSelected = dbWeapon.chain().find({ type: input.type }).data()
	let typeSelected = dbType.findOne({ name: input.type })
	let charAtk = 0
	let maxMux = 1
	let flyMux = 1
	let totalAtk
	let totalDef
	let output = []

	if (input.plain === 'plain') {
		charAtk = input.atk * parameters.muxPlain
	} else {
		charAtk = input.atk
	}

	if (input.fly === 'fly') {
		if (input.type === 'sword' || input.type === 'lance' || input.type === 'hammer' || input.type === 'shield') {
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


	for (let i = 0; i < weaponSelected.length; i += 1) {
		if (input.type === 'spell') {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			weaponSelected[i].damage = Math.floor(totalAtk)
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		} else {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
	}
	dbWeapon.update(weaponSelected)

	switch (input.type) {
	case 'sword':
	case 'hammer':
	case 'lance':
	case 'shield':
	case 'bow':
	case 'spell':
	case 'cannon':
		output = dbWeapon.chain().find({ type: input.type }).data()
		break
	case 'xbow':
		weaponSelected = dbWeapon.chain().find({ type: 'xbow2' }).data()
		typeSelected = dbType.findOne({ name: 'xbow2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'xbow3' }).data()
		typeSelected = dbType.findOne({ name: 'xbow3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ $or: [{ type: 'xbow' }, { type: 'xbow2' }, { type: 'xbow3' }] }).data()
		break
	case 'arqu':
		weaponSelected = dbWeapon.chain().find({ type: 'arqu2' }).data()
		typeSelected = dbType.findOne({ name: 'arqu2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef) * 2
			} else {
				weaponSelected[i].damage = parameters.valueProDam * 2
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		weaponSelected = dbWeapon.chain().find({ type: 'arqu3' }).data()
		typeSelected = dbType.findOne({ name: 'arqu3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef) * 3
			} else {
				weaponSelected[i].damage = parameters.valueProDam * 3
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ $or: [{ type: 'arqu' }, { type: 'arqu2' }, { type: 'arqu3' }] }).data()
		break
	default:
		output = dbWeapon.chain().find({ type: input.type }).data()
	}

	return output
}
