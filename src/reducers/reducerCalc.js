import {
	TYPE_CHANGE,
	PLAIN_CHANGE,
	MAX_CHANGE,
	INPUT_CHANGE,
} from '../constants/ConstActionTypes'


const initialState = {
	type: 'sword',
	plain: 'plain',
	max: "max0",
	atk: 200,
	def: 100,
	atkSkill: 0,
	defSkill: 0,
	aspdSkill: 0,
	aspdSpell: 0,
	atkSkillInt: 0,
	defSkillInt: 0,
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
