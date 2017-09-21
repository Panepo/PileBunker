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
	let dataAspdSkill

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

	if (input.aspdSpell >= input.aspdSkill) {
		dataAspdSkill = input.aspdSpell
	} else {
		dataAspdSkill = input.aspdSkill
	}

	switch (input.type) {
	case 'sword':
		weaponSelected = dbWeapon.chain().find({ type: 'sword' }).data()
		typeSelected = dbType.findOne({ name: 'sword' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'sword1' }).data()
		typeSelected = dbType.findOne({ name: 'sword1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'sword2' }).data()
		typeSelected = dbType.findOne({ name: 'sword2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'sword3' }).data()
		typeSelected = dbType.findOne({ name: 'sword3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ $or: [{ type: 'sword' }, { type: 'sword1' }, { type: 'sword2' }, { type: 'sword3' }] }).data()
		break
	case 'hammer':
		weaponSelected = dbWeapon.chain().find({ type: 'hammer' }).data()
		typeSelected = dbType.findOne({ name: 'hammer' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'hammer1' }).data()
		typeSelected = dbType.findOne({ name: 'hammer1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'hammer2' }).data()
		typeSelected = dbType.findOne({ name: 'hammer2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'hammer3' }).data()
		typeSelected = dbType.findOne({ name: 'hammer3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'hammerx1' }).data()
		typeSelected = dbType.findOne({ name: 'hammerx1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ $or: [{ type: 'hammer' }, { type: 'hammer1' }, { type: 'hammer2' }, { type: 'hammer3' }, { type: 'hammerx1' }] }).data()
		break
	case 'lance':
		weaponSelected = dbWeapon.chain().find({ type: 'lance' }).data()
		typeSelected = dbType.findOne({ name: 'lance' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'lance1' }).data()
		typeSelected = dbType.findOne({ name: 'lance1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'lance2' }).data()
		typeSelected = dbType.findOne({ name: 'lance2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'lance3' }).data()
		typeSelected = dbType.findOne({ name: 'lance3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'lancex1' }).data()
		typeSelected = dbType.findOne({ name: 'lancex1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'lancex2' }).data()
		typeSelected = dbType.findOne({ name: 'lancex2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ $or: [{ type: 'lance' }, { type: 'lance1' }, { type: 'lance2' }, { type: 'lance3' }, { type: 'lancex1' }, { type: 'lancex2' }] }).data()
		break
	case 'shield':
		weaponSelected = dbWeapon.chain().find({ type: 'shield' }).data()
		typeSelected = dbType.findOne({ name: 'shield' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ type: input.type }).data()
		break
	case 'bow':
		weaponSelected = dbWeapon.chain().find({ type: 'bow' }).data()
		typeSelected = dbType.findOne({ name: 'bow' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'bow1' }).data()
		typeSelected = dbType.findOne({ name: 'bow1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'bow2' }).data()
		typeSelected = dbType.findOne({ name: 'bow2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'bow3' }).data()
		typeSelected = dbType.findOne({ name: 'bow3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'bowx1' }).data()
		typeSelected = dbType.findOne({ name: 'bowx1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ $or: [{ type: 'bow' }, { type: 'bow1' }, { type: 'bow2' }, { type: 'bow3' }, { type: 'bowx1' }] }).data()
		break
	case 'spell':
		weaponSelected = dbWeapon.chain().find({ type: 'spell' }).data()
		typeSelected = dbType.findOne({ name: 'spell' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			weaponSelected[i].damage = Math.floor(totalAtk)
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'spell1' }).data()
		typeSelected = dbType.findOne({ name: 'spell1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			weaponSelected[i].damage = Math.floor(totalAtk)
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'spell2' }).data()
		typeSelected = dbType.findOne({ name: 'spell2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			weaponSelected[i].damage = Math.floor(totalAtk)
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'spell3' }).data()
		typeSelected = dbType.findOne({ name: 'spell3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			weaponSelected[i].damage = Math.floor(totalAtk)
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ $or: [{ type: 'spell' }, { type: 'spell1' }, { type: 'spell2' }, { type: 'spell3' }] }).data()
		break
	case 'cannon':
		weaponSelected = dbWeapon.chain().find({ type: 'cannon' }).data()
		typeSelected = dbType.findOne({ name: 'cannon' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'cannon1' }).data()
		typeSelected = dbType.findOne({ name: 'cannon1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'cannon2' }).data()
		typeSelected = dbType.findOne({ name: 'cannon2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'cannon3' }).data()
		typeSelected = dbType.findOne({ name: 'cannon3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'cannonx1' }).data()
		typeSelected = dbType.findOne({ name: 'cannonx1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		output = dbWeapon.chain().find({ $or: [{ type: 'cannon' }, { type: 'cannon1' }, { type: 'cannon2' }, { type: 'cannon3' }, { type: 'cannonx1' }] }).data()
		break
	case 'xbow':
		weaponSelected = dbWeapon.chain().find({ type: 'xbow' }).data()
		typeSelected = dbType.findOne({ name: 'xbow' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'xbow1' }).data()
		typeSelected = dbType.findOne({ name: 'xbow1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

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
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
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
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'xbowx3' }).data()
		typeSelected = dbType.findOne({ name: 'xbowx3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'xbowx1' }).data()
		typeSelected = dbType.findOne({ name: 'xbowx1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'xbowx2' }).data()
		typeSelected = dbType.findOne({ name: 'xbowx2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ $or: [{ type: 'xbow' }, { type: 'xbow1' }, { type: 'xbow2' }, { type: 'xbow3' }, { type: 'xbowx1' }, { type: 'xbowx2' }, { type: 'xbowx3' }] }).data()
		break
	case 'arqu':
		weaponSelected = dbWeapon.chain().find({ type: 'arqu' }).data()
		typeSelected = dbType.findOne({ name: 'arqu' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'arqu1' }).data()
		typeSelected = dbType.findOne({ name: 'arqu1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'arqu2' }).data()
		typeSelected = dbType.findOne({ name: 'arqu2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
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
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'arqux3' }).data()
		typeSelected = dbType.findOne({ name: 'arqux3' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			} else {
				weaponSelected[i].damage = parameters.valueProDam
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)

		weaponSelected = dbWeapon.chain().find({ type: 'arqux1' }).data()
		typeSelected = dbType.findOne({ name: 'arqux1' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef) * 2
			} else {
				weaponSelected[i].damage = parameters.valueProDam * 2
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		weaponSelected = dbWeapon.chain().find({ type: 'arqux2' }).data()
		typeSelected = dbType.findOne({ name: 'arqux2' })
		for (let i = 0; i < weaponSelected.length; i += 1) {
			totalAtk = (charAtk + weaponSelected[i].atk) * maxMux * flyMux * (1 + input.atkSkill / 100) + input.atkSkillInt
			totalDef = input.def * (1 - input.defSkill / 100) - input.defSkillInt
			if ((totalAtk - parameters.valueProDam) >= totalDef) {
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef) * 3
			} else {
				weaponSelected[i].damage = parameters.valueProDam * 3
			}
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (dataAspdSkill + weaponSelected[i].aspd) / 100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell / 100))
			weaponSelected[i].dps = Math.floor((weaponSelected[i].damage * weaponSelected[i].hit * parameters.valueFPS / (weaponSelected[i].frame1 + weaponSelected[i].frame2)) * 100) / 100
		}
		dbWeapon.update(weaponSelected)
		output = dbWeapon.chain().find({ $or: [{ type: 'arqu' }, { type: 'arqu1' }, { type: 'arqu2' }, { type: 'arqu3' }, { type: 'arqux1' }, { type: 'arqux2' }, { type: 'arqux3' }] }).data()
		break
	default:
		output = dbWeapon.chain().find({ type: input.type }).data()
	}

	return output
}
