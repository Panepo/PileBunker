import {
	TYPE_CHANGE,
	PLAIN_CHANGE,
	MAX_CHANGE
} from '../constants/ConstActionTypes'


const initialState = {
	type: 'sword',
	plain: 'plain',
	max: "max0",
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
		default:
			return state
	}
	
	
}
