import * as types from '../constants/ConstActionTypes'

export function typeChange(modelId) {
	return {
		type: types.TYPE_CHANGE,
		modelId
	}
}

export function plainChange() {
	return {
		type: types.PLAIN_CHANGE
	}
}

export function maxChange(modelId) {
	return {
		type: types.MAX_CHANGE,
		modelId
	}
}