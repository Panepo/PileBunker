import {
	MODEL_OPEN,
	MODEL_CLOSE
} from '../constants/ConstActionTypes'

const initialState = {
	modelStatus: false,
	textOutput: []
}

export default function reducerPage(state = initialState, action) {
	switch (action.type) {
	case MODEL_OPEN:
		return Object.assign({}, state, {
			modelStatus: true
		})
	case MODEL_CLOSE:
		return Object.assign({}, state, {
			modelStatus: false
		})
	default:
		return state
	}
}
