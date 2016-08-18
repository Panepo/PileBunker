import {
	TYPE_CHANGE,
	PLAIN_CHANGE,
	MAX_CHANGE,
	INPUT_CHANGE,
	FLY_CHANGE,
	REF_CHANGE,
	REF_SIN_CHANGE,
} from '../constants/ConstActionTypes'

import { dbWeapon, dbType } from './database'
import { listButS } from '../constants/ConstList'

const initialState = {
	type: 'sword',
	plain: 'plain',
	fly: '',
	max: "max0",
	atk: 200,
	def: 100,
	atkSkill: 0,
	defSkill: 0,
	aspdSkill: 0,
	aspdSpell: 0,
	atkSkillInt: 0,
	defSkillInt: 0,
	output: [],
}
var calcTemp = {}

export default function reducerCalc(state = initialState, action) {
	switch (action.type) {
		case TYPE_CHANGE:
			calcTemp = state
			calcTemp.type = action.modelId
			return Object.assign({}, state, {
				type: action.modelId,
				output: calcOutput(calcTemp)
			})
		case PLAIN_CHANGE:
			if (state.plain === 'plain') {
				calcTemp = state
				calcTemp.plain = ''
				return Object.assign({}, state, {
					plain: '',
					output: calcOutput(calcTemp)
				})
			} else {
				calcTemp = state
				calcTemp.plain = 'plain'
				return Object.assign({}, state, {
					plain: 'plain',
					output: calcOutput(calcTemp)
				})
			}
		case FLY_CHANGE:
			if (state.fly === 'fly') {
				calcTemp = state
				calcTemp.fly = ''
				return Object.assign({}, state, {
					fly: '',
					output: calcOutput(calcTemp)
				})
			} else {
				calcTemp = state
				calcTemp.fly = 'fly'
				return Object.assign({}, state, {
					fly: 'fly',
					output: calcOutput(calcTemp)
				})
			}
		case MAX_CHANGE:
			calcTemp = state
			calcTemp.max = action.modelId
			return Object.assign({}, state, {
				max: action.modelId,
				output: calcOutput(calcTemp)
			})
		case REF_CHANGE:
			var weaponSelected = []
			switch (action.modelId) {
				case "ref0":
					weaponSelected = dbWeapon.chain().data()
					for (var i=0; i<weaponSelected.length; i++){
						weaponSelected[i].atk -= weaponSelected[i].ref
						weaponSelected[i].ref = 0
						weaponSelected[i].refText = '+0'
					}
					dbWeapon.update(weaponSelected)
					calcTemp = state
					return Object.assign({}, state, {
						output: calcOutput(calcTemp)
					})
				case "refAll":
					weaponSelected = dbWeapon.chain().data()
					for (var i=0; i<weaponSelected.length; i++){
						weaponSelected[i].atk -= weaponSelected[i].ref
						weaponSelected[i].atk += 10
						weaponSelected[i].ref = 10
						weaponSelected[i].refText = '+10'
					}
					dbWeapon.update(weaponSelected)
					calcTemp = state
					return Object.assign({}, state, {
						output: calcOutput(calcTemp)
					})
				case "ref4":
					weaponSelected = dbWeapon.chain().find({ 'rare': 4 }).data()
					for (var i=0; i<weaponSelected.length; i++){
						weaponSelected[i].atk -= weaponSelected[i].ref
						weaponSelected[i].atk += 10
						weaponSelected[i].ref = 10
						weaponSelected[i].refText = '+10'
					}
					dbWeapon.update(weaponSelected)
					calcTemp = state
					return Object.assign({}, state, {
						output: calcOutput(calcTemp)
					})
				case "ref3":
					weaponSelected = dbWeapon.chain().find({ 'rare': 3 }).data()
					for (var i=0; i<weaponSelected.length; i++){
						weaponSelected[i].atk -= weaponSelected[i].ref
						weaponSelected[i].atk += 10
						weaponSelected[i].ref = 10
						weaponSelected[i].refText = '+10'
					}
					dbWeapon.update(weaponSelected)
					calcTemp = state
					return Object.assign({}, state, {
						output: calcOutput(calcTemp)
					})
				case "ref2":
					weaponSelected = dbWeapon.chain().find({ 'rare': 2 }).data()
					for (var i=0; i<weaponSelected.length; i++){
						weaponSelected[i].atk -= weaponSelected[i].ref
						weaponSelected[i].atk += 10
						weaponSelected[i].ref = 10
						weaponSelected[i].refText = '+10'
					}
					dbWeapon.update(weaponSelected)
					calcTemp = state
					return Object.assign({}, state, {
						output: calcOutput(calcTemp)
					})
				case "ref1":
					weaponSelected = dbWeapon.chain().find({ 'rare': 1 }).data()
					for (var i=0; i<weaponSelected.length; i++){
						weaponSelected[i].atk -= weaponSelected[i].ref
						weaponSelected[i].atk += 10
						weaponSelected[i].ref = 10
						weaponSelected[i].refText = '+10'
					}
					dbWeapon.update(weaponSelected)
					calcTemp = state
					return Object.assign({}, state, {
						output: calcOutput(calcTemp)
					})
			}
		case REF_SIN_CHANGE:
			weaponSelected = dbWeapon.findOne({'name': action.modelId })
			if ( weaponSelected.ref === 10 ) {
				weaponSelected.atk -= 10
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
		case INPUT_CHANGE:
			switch(action.modelId) {
				case "atk":
					calcTemp = state
					calcTemp.atk = action.modelValue
					return Object.assign({}, state, {
						atk: action.modelValue,
						output: calcOutput(calcTemp)
					})
				case "def":
					calcTemp = state
					calcTemp.def = action.modelValue
					return Object.assign({}, state, {
						def: action.modelValue,
						output: calcOutput(calcTemp)
					})
				case "atkSkill":
					calcTemp = state
					calcTemp.atkSkill = action.modelValue
					return Object.assign({}, state, {
						atkSkill: action.modelValue,
						output: calcOutput(calcTemp)
					})
				case "atkSkillInt":
					calcTemp = state
					calcTemp.atkSkillInt = action.modelValue
					return Object.assign({}, state, {
						atkSkillInt: action.modelValue,
						output: calcOutput(calcTemp)
					})
				case "defSkill":
					calcTemp = state
					calcTemp.defSkill = action.modelValue
					return Object.assign({}, state, {
						defSkill: action.modelValue,
						output: calcOutput(calcTemp)
					})
				case "defSkillInt":
					calcTemp = state
					calcTemp.defSkillInt = action.modelValue
					return Object.assign({}, state, {
						defSkillInt: action.modelValue,
						output: calcOutput(calcTemp)
					})
				case "aspdSkill":
					calcTemp = state
					calcTemp.aspdSkill = action.modelValue
					return Object.assign({}, state, {
						aspdSkill: action.modelValue,
						output: calcOutput(calcTemp)
					})
				case "aspdSpell":
					calcTemp = state
					calcTemp.aspdSpell = action.modelValue
					return Object.assign({}, state, {
						aspdSpell: action.modelValue,
						output: calcOutput(calcTemp)
					})
			}
		default:
			calcTemp = state
			return Object.assign({}, state, {
				output: calcOutput(calcTemp)
			})
	}
}

function calcOutput(input){
	var weaponSelected = dbWeapon.chain().find({ 'type': input.type }).data()
	var typeSelected = dbType.findOne({'name': input.type })
	var charAtk = 0
	var maxMux = 1
	var flyMux = 1
	
	if ( input.plain === 'plain' ) {
		charAtk = input.atk * 1.2
	} else {
		charAtk = input.atk
	}
	
	if ( input.fly === 'fly' ) {
		if ( input.type === 'sword' || input.type === 'lance' || input.type === 'hammer' ) {
			flyMux = 0.5
		} else if ( input.type === 'bow' ) {
			flyMux = 1.5
		}
	}
	
	switch ( input.max ) {
		case listButS[1]:
			maxMux = 1.16
			break;
		case listButS[2]:
			maxMux = 1.32
			break;
		case listButS[3]:
			maxMux = 1.48
			break;
		case listButS[4]:
			maxMux = 1.64
			break;
		case listButS[5]:
			maxMux = 1.8
			break;
	}
	
	var totalAtk
	var totalDef
	
	for (var i=0; i<weaponSelected.length; i++){
		if ( input.type === 'spell') {
			totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
			weaponSelected[i].damage = Math.floor(totalAtk)
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell/100))
			weaponSelected[i].dps = Math.floor( (weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 ))*100 )/100
		} else {
			totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
			totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
			weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
			weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100))
			weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell/100))
			weaponSelected[i].dps = Math.floor( (weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 ))*100 )/100
		}
	}
	dbWeapon.update(weaponSelected)
	
	var output = []
	switch (input.type) {
		case 'sword':
		case 'hammer':
		case 'lance':
		case 'bow':
		case 'spell':
		case 'cannon':
			output = dbWeapon.chain().find({ 'type': input.type }).data()
			break
		case 'xbow':
			weaponSelected = dbWeapon.chain().find({ 'type': 'xbow2' }).data()
			typeSelected = dbType.findOne({'name':'xbow2' })
			for (var i=0; i<weaponSelected.length; i++){
				totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
				totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
				weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100))
				weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell/100))
				weaponSelected[i].dps = Math.floor( (weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 ))*100 )/100
			}
			dbWeapon.update(weaponSelected)
			
			weaponSelected = dbWeapon.chain().find({ 'type': 'xbow3' }).data()
			typeSelected = dbType.findOne({'name':'xbow3' })
			for (var i=0; i<weaponSelected.length; i++){
				totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
				totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)
				weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100))
				weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell/100))
				weaponSelected[i].dps = Math.floor( (weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 ))*100 )/100
			}
			dbWeapon.update(weaponSelected)
			output = dbWeapon.chain().find({'$or': [{ 'type': 'xbow' },{ 'type': 'xbow2' },{ 'type': 'xbow3' }]}).data()
			break
		case 'arqu':
			weaponSelected = dbWeapon.chain().find({ 'type': 'arqu2' }).data()
			typeSelected = dbType.findOne({'name':'arqu2' })
			for (var i=0; i<weaponSelected.length; i++){
				totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
				totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)*2
				weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100))
				weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell/100))
				weaponSelected[i].dps = Math.floor( (weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 ))*100 )/100
			}
			dbWeapon.update(weaponSelected)
			weaponSelected = dbWeapon.chain().find({ 'type': 'arqu3' }).data()
			typeSelected = dbType.findOne({'name':'arqu3' })
			for (var i=0; i<weaponSelected.length; i++){
				totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
				totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
				weaponSelected[i].damage = Math.floor(totalAtk - totalDef)*3
				weaponSelected[i].frame1 = Math.ceil(typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100))
				weaponSelected[i].frame2 = Math.ceil(typeSelected.frame2 * (1 - input.aspdSpell/100))
				weaponSelected[i].dps = Math.floor( (weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 ))*100 )/100
			}
			dbWeapon.update(weaponSelected)
			output = dbWeapon.chain().find({'$or': [{ 'type': 'arqu' },{ 'type': 'arqu2' },{ 'type': 'arqu3' }]}).data()
			break
	}
	
	return output
}