import {
	TYPE_CHANGE,
	PLAIN_CHANGE,
	MAX_CHANGE,
	INPUT_CHANGE,
	FLY_CHANGE,
	MONS_CHANGE,
	REF_CHANGE,
	REF_SIN_CHANGE,
	CANNON_CHANGE,
	CHAR_SELECT,
	MODEL_OPEN,
	MODEL_CLOSE
} from '../constants/ConstActionTypes'

import { dbWeapon, dbChar } from './database'
import * as parameters from '../constants/ConstParameters'
import { calcOutput, calcAtk } from './calcOutput'
import { listType, listTypeS } from '../constants/ConstList'

// ===============================================================================
// initial status
// ===============================================================================

const initialState = {
	type: 'sword',
	plain: 'plain',
	fly: '',
	mons: '',
	cannon: 'cannon',
	max: 'max0',
	level: parameters.defaultLevel,
	HPParm: parameters.defaultHPParm,
	AtkParm: parameters.defaultAtkParm,
	DefParm: parameters.defaultDefParm,
	com: parameters.defaultCompanion,
	atk: 0,
	def: parameters.defaultDef,
	atkSkill: 0,
	defSkill: 0,
	aspdSkill: 0,
	aspdSpell: 0,
	atkSkillInt: 0,
	defSkillInt: 0,
	output: [],
	outputChar: dbChar.chain().find({ weapon: '刀' }).data(),
	modelStatus: '0'
}

// ===============================================================================
// reducer main function
// ===============================================================================

export default function reducerCalc(state = initialState, action) {
	let calcTemp = {}
	let weaponSelected = []
	let charTemp = []

	switch (action.type) {
	case MODEL_OPEN:
		return Object.assign({}, state, {
			modelStatus: action.modelId
		})
	case MODEL_CLOSE:
		return Object.assign({}, state, {
			modelStatus: '0'
		})
	// ===============================================================================
	// weapon types change
	// ===============================================================================
	case TYPE_CHANGE:
		calcTemp = state
		calcTemp.type = action.modelId
		for (let i = 0; i < listTypeS.length; i += 1) {
			if (action.modelId === listTypeS[i]) {
				charTemp = dbChar.chain().find({ weapon: listType[i] }).data()
				break
			}
		}
		return Object.assign({}, state, {
			type: action.modelId,
			output: calcOutput(calcTemp),
			atk: calcAtk(calcTemp),
			outputChar: charTemp
		})
	// ===============================================================================
	// plain bonus switch
	// ===============================================================================
	case PLAIN_CHANGE:
		if (state.plain === 'plain') {
			calcTemp = state
			calcTemp.plain = ''
		} else {
			calcTemp = state
			calcTemp.plain = 'plain'
		}
		return Object.assign({}, state, {
			plain: calcTemp.plain,
			output: calcOutput(calcTemp)
		})
	// ===============================================================================
	// enemy fly status switch
	// ===============================================================================
	case FLY_CHANGE:
		if (state.fly === 'fly') {
			calcTemp = state
			calcTemp.fly = ''
		} else {
			calcTemp = state
			calcTemp.fly = 'fly'
		}
		return Object.assign({}, state, {
			fly: calcTemp.fly,
			output: calcOutput(calcTemp)
		})
	// ===============================================================================
	// enemy monster status switch
	// ===============================================================================
	case MONS_CHANGE:
		if (state.mons === 'mons') {
			calcTemp = state
			calcTemp.mons = ''
		} else {
			calcTemp = state
			calcTemp.mons = 'mons'
		}
		return Object.assign({}, state, {
			mons: calcTemp.mons,
			output: calcOutput(calcTemp)
		})
	// ===============================================================================
	// cannon direct hit switch
	// ===============================================================================
	case CANNON_CHANGE:
		if (state.cannon === 'cannon') {
			calcTemp = state
			calcTemp.cannon = ''
		} else {
			calcTemp = state
			calcTemp.cannon = 'cannon'
		}
		return Object.assign({}, state, {
			cannon: calcTemp.cannon,
			output: calcOutput(calcTemp)
		})
	// ===============================================================================
	// maximum level switch
	// ===============================================================================
	case MAX_CHANGE:
		calcTemp = state
		calcTemp.max = action.modelId
		return Object.assign({}, state, {
			max: action.modelId,
			output: calcOutput(calcTemp)
		})
	// ===============================================================================
	// weapons refine change
	// ===============================================================================
	case REF_CHANGE:
		switch (action.modelId) {
		case 'ref0':
			weaponSelected = dbWeapon.chain().data()
			for (let i = 0; i < weaponSelected.length; i += 1) {
				weaponSelected[i].atk -= weaponSelected[i].ref
				weaponSelected[i].ref = 0
				weaponSelected[i].refText = '+0'
			}
			dbWeapon.update(weaponSelected)
			calcTemp = state
			return Object.assign({}, state, {
				output: calcOutput(calcTemp)
			})
		case 'refAll':
			weaponSelected = dbWeapon.chain().data()
			for (let i = 0; i < weaponSelected.length; i += 1) {
				weaponSelected[i].atk -= weaponSelected[i].ref
				weaponSelected[i].atk += parameters.valueMaxRef
				weaponSelected[i].ref = parameters.valueMaxRef
				weaponSelected[i].refText = '+' + parameters.valueMaxRef.toString()
			}
			dbWeapon.update(weaponSelected)
			calcTemp = state
			return Object.assign({}, state, {
				output: calcOutput(calcTemp)
			})
		case 'ref4':
			weaponSelected = dbWeapon.chain().find({ rare: 4 }).data()
			for (let i = 0; i < weaponSelected.length; i += 1) {
				weaponSelected[i].atk -= weaponSelected[i].ref
				weaponSelected[i].atk += parameters.valueMaxRef
				weaponSelected[i].ref = parameters.valueMaxRef
				weaponSelected[i].refText = '+' + parameters.valueMaxRef.toString()
			}
			dbWeapon.update(weaponSelected)
			calcTemp = state
			return Object.assign({}, state, {
				output: calcOutput(calcTemp)
			})
		case 'ref3':
			weaponSelected = dbWeapon.chain().find({ rare: 3 }).data()
			for (let i = 0; i < weaponSelected.length; i += 1) {
				weaponSelected[i].atk -= weaponSelected[i].ref
				weaponSelected[i].atk += parameters.valueMaxRef
				weaponSelected[i].ref = parameters.valueMaxRef
				weaponSelected[i].refText = '+' + parameters.valueMaxRef.toString()
			}
			dbWeapon.update(weaponSelected)
			calcTemp = state
			return Object.assign({}, state, {
				output: calcOutput(calcTemp)
			})
		case 'ref2':
			weaponSelected = dbWeapon.chain().find({ rare: 2 }).data()
			for (let i = 0; i < weaponSelected.length; i += 1) {
				weaponSelected[i].atk -= weaponSelected[i].ref
				weaponSelected[i].atk += parameters.valueMaxRef
				weaponSelected[i].ref = parameters.valueMaxRef
				weaponSelected[i].refText = '+' + parameters.valueMaxRef.toString()
			}
			dbWeapon.update(weaponSelected)
			calcTemp = state
			return Object.assign({}, state, {
				output: calcOutput(calcTemp)
			})
		case 'ref1':
			weaponSelected = dbWeapon.chain().find({ rare: 1 }).data()
			for (let i = 0; i < weaponSelected.length; i += 1) {
				weaponSelected[i].atk -= weaponSelected[i].ref
				weaponSelected[i].atk += parameters.valueMaxRef
				weaponSelected[i].ref = parameters.valueMaxRef
				weaponSelected[i].refText = '+' + parameters.valueMaxRef.toString()
			}
			dbWeapon.update(weaponSelected)
			calcTemp = state
			return Object.assign({}, state, {
				output: calcOutput(calcTemp)
			})
		default:
			return state
		}
	// ===============================================================================
	// weapon refine change toggle
	// ===============================================================================
	case REF_SIN_CHANGE:
		weaponSelected = dbWeapon.findOne({ name: action.modelId })
		if (weaponSelected.ref === parameters.valueMaxRef) {
			weaponSelected.atk -= parameters.valueMaxRef
			weaponSelected.ref = 0
			weaponSelected.refText = '+0'
		} else {
			weaponSelected.atk += 1
			weaponSelected.ref += 1
			weaponSelected.refText = '+' + weaponSelected.ref.toString()
		}
		dbWeapon.update(weaponSelected)
		calcTemp = state
		return Object.assign({}, state, {
			output: calcOutput(calcTemp)
		})
	// ===============================================================================
	// text input change
	// ===============================================================================
	case INPUT_CHANGE:
		switch (action.modelId) {
		case 'level':
			calcTemp = state
			calcTemp.level = action.modelValue
			return Object.assign({}, state, {
				level: action.modelValue,
				atk: calcAtk(calcTemp),
				output: calcOutput(calcTemp)
			})
		case 'AtkParm':
			calcTemp = state
			calcTemp.AtkParm = action.modelValue
			return Object.assign({}, state, {
				AtkParm: action.modelValue,
				atk: calcAtk(calcTemp),
				output: calcOutput(calcTemp)
			})
		case 'com':
			calcTemp = state
			calcTemp.com = action.modelValue
			return Object.assign({}, state, {
				com: action.modelValue,
				atk: calcAtk(calcTemp),
				output: calcOutput(calcTemp)
			})
		case 'atk':
			calcTemp = state
			calcTemp.atk = action.modelValue
			return Object.assign({}, state, {
				atk: action.modelValue,
				output: calcOutput(calcTemp)
			})
		case 'def':
			calcTemp = state
			calcTemp.def = action.modelValue
			return Object.assign({}, state, {
				def: action.modelValue,
				output: calcOutput(calcTemp)
			})
		case 'atkSkill':
			calcTemp = state
			calcTemp.atkSkill = action.modelValue
			return Object.assign({}, state, {
				atkSkill: action.modelValue,
				output: calcOutput(calcTemp)
			})
		case 'atkSkillInt':
			calcTemp = state
			calcTemp.atkSkillInt = action.modelValue
			return Object.assign({}, state, {
				atkSkillInt: action.modelValue,
				output: calcOutput(calcTemp)
			})
		case 'defSkill':
			calcTemp = state
			calcTemp.defSkill = action.modelValue
			return Object.assign({}, state, {
				defSkill: action.modelValue,
				output: calcOutput(calcTemp)
			})
		case 'defSkillInt':
			calcTemp = state
			calcTemp.defSkillInt = action.modelValue
			return Object.assign({}, state, {
				defSkillInt: action.modelValue,
				output: calcOutput(calcTemp)
			})
		case 'aspdSkill':
			calcTemp = state
			if (action.modelValue >= parameters.maxAspdSkill) {
				calcTemp.aspdSkill = parameters.maxAspdSkill
			} else {
				calcTemp.aspdSkill = action.modelValue
			}
			return Object.assign({}, state, {
				aspdSkill: calcTemp.aspdSkill,
				output: calcOutput(calcTemp)
			})
		case 'aspdSpell':
			calcTemp = state
			if (action.modelValue >= parameters.maxAspdSpell) {
				calcTemp.aspdSpell = parameters.maxAspdSpell
			} else {
				calcTemp.aspdSpell = action.modelValue
			}
			return Object.assign({}, state, {
				aspdSpell: calcTemp.aspdSpell,
				output: calcOutput(calcTemp)
			})
		default:
			return state
		}
	// ===============================================================================
	// character select change
	// ===============================================================================
	case CHAR_SELECT:
		calcTemp = state
		charTemp = dbChar.findOne({ name: action.modelId })
		calcTemp.AtkParm = parseFloat(charTemp.atF, 10) * 100
		return Object.assign({}, state, {
			AtkParm: parseFloat(charTemp.atF, 10) * 100,
			output: calcOutput(calcTemp),
			atk: calcAtk(calcTemp),
			modelStatus: '0'
		})
	// ===============================================================================
	// default status
	// ===============================================================================
	default:
		calcTemp = state
		return Object.assign({}, state, {
			atk: calcAtk(calcTemp),
			output: calcOutput(calcTemp)
		})
	}
}

