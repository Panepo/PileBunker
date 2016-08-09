import {
	TYPE_CHANGE,
	PLAIN_CHANGE,
	MAX_CHANGE,
	INPUT_CHANGE,
	FLY_CHANGE,
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

export default function reducerCalc(state = initialState, action) {
	switch (action.type) {
		case TYPE_CHANGE:
			return Object.assign({}, state, {
				type: action.modelId
			})
		case PLAIN_CHANGE:
			if (state.plain === 'plain') {
				return Object.assign({}, state, {
					plain: ''
				})
			} else {
				return Object.assign({}, state, {
					plain: 'plain'
				})
			}
		case FLY_CHANGE:
			if (state.fly === 'fly') {
				return Object.assign({}, state, {
					fly: ''
				})
			} else {
				return Object.assign({}, state, {
					fly: 'fly'
				})
			}
		case MAX_CHANGE:
			return Object.assign({}, state, {
				max: action.modelId
			})
		case INPUT_CHANGE:
			switch(action.modelId) {
				case "atk":
					return Object.assign({}, state, {
						atk: action.modelValue
					})
				case "def":
					return Object.assign({}, state, {
						def: action.modelValue
					})
				case "atkSkill":
					return Object.assign({}, state, {
						atkSkill: action.modelValue
					})
				case "atkSkillInt":
					return Object.assign({}, state, {
						atkSkillInt: action.modelValue
					})
				case "defSkill":
					return Object.assign({}, state, {
						defSkill: action.modelValue
					})
				case "defSkillInt":
					return Object.assign({}, state, {
						defSkillInt: action.modelValue
					})
				case "aspdSkill":
					return Object.assign({}, state, {
						aspdSkill: action.modelValue
					})
				case "aspdSpell":
					return Object.assign({}, state, {
						aspdSpell: action.modelValue
					})
			}
		default:
			return state
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
		}
	}
	
	switch ( input.max ) {
		case listButS[0]:
			maxMux = 1.16
			break;
		case listButS[1]:
			maxMux = 1.32
			break;
		case listButS[2]:
			maxMux = 1.48
			break;
		case listButS[3]:
			maxMux = 1.64
			break;
		case listButS[4]:
			maxMux = 1.8
			break;
	}
	
	var totalAtk
	var totalDef
	
	for (var i=0; i<weaponSelected.length; i++){
		totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
		totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
		weaponSelected[i].damage = totalAtk - totalDef
		weaponSelected[i].frame1 = typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100)
		weaponSelected[i].frame2 = typeSelected.frame2 * (1 - input.aspdSpell/100)
		weaponSelected[i].dps = weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 )
	}
	dbWeapon.update(weaponSelected)
	
	var output = []
	switch (input.type) {
		case 'sword':
		case 'hammer':
		case 'lance':
		case 'bow':
		case 'spell':
			output = dbWeapon.chain().find({ 'type': input.type }).data()
		
		case 'xbow':
			weaponSelected = dbWeapon.chain().find({ 'type': 'xbow2' }).data()
			typeSelected = dbType.findOne({'name':'xbow2' })
			for (var i=0; i<weaponSelected.length; i++){
				totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
				totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
				weaponSelected[i].damage = totalAtk - totalDef
				weaponSelected[i].frame1 = typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100)
				weaponSelected[i].frame2 = typeSelected.frame2 * (1 - input.aspdSpell/100)
				weaponSelected[i].dps = weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 )
			}
			dbWeapon.update(weaponSelected)
			
			weaponSelected = dbWeapon.chain().find({ 'type': 'xbow3' }).data()
			typeSelected = dbType.findOne({'name':'xbow3' })
			for (var i=0; i<weaponSelected.length; i++){
				totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
				totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
				weaponSelected[i].damage = totalAtk - totalDef
				weaponSelected[i].frame1 = typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100)
				weaponSelected[i].frame2 = typeSelected.frame2 * (1 - input.aspdSpell/100)
				weaponSelected[i].dps = weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 )
			}
			dbWeapon.update(weaponSelected)
			output = dbWeapon.chain().find({ 'type': 'xbow' }).find({ 'type': 'xbow2' }).find({ 'type': 'xbow3' }).data()
			break
		case 'arqu':
			weaponSelected = dbWeapon.chain().find({ 'type': 'arqu2' }).data()
			typeSelected = dbType.findOne({'name':'arqu2' })
			for (var i=0; i<weaponSelected.length; i++){
				totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
				totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
				weaponSelected[i].damage = totalAtk - totalDef
				weaponSelected[i].frame1 = typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100)
				weaponSelected[i].frame2 = typeSelected.frame2 * (1 - input.aspdSpell/100)
				weaponSelected[i].dps = weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 )
			}
			dbWeapon.update(weaponSelected)
			weaponSelected = dbWeapon.chain().find({ 'type': 'arqu3' }).data()
			typeSelected = dbType.findOne({'name':'arqu3' })
			for (var i=0; i<weaponSelected.length; i++){
				totalAtk = (charAtk + weaponSelected[i].atk)*maxMux*flyMux*(1 + input.atkSkill/100 ) + input.atkSkillInt
				totalDef = input.def*(1 - input.defSkill/100) - input.defSkillInt
				weaponSelected[i].damage = totalAtk - totalDef
				weaponSelected[i].frame1 = typeSelected.frame1 * (1 - (input.aspdSkill + input.aspdSpell + weaponSelected[i].aspd)/100)
				weaponSelected[i].frame2 = typeSelected.frame2 * (1 - input.aspdSpell/100)
				weaponSelected[i].dps = weaponSelected[i].damage * 30 / ( weaponSelected[i].frame1 + weaponSelected[i].frame2 )
			}
			dbWeapon.update(weaponSelected)
			output = dbWeapon.chain().find({ 'type': 'arqu' }).find({ 'type': 'arqu2' }).find({ 'type': 'arqu3' }).data()
			break
	}
	
	return output
}