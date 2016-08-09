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

export function flyChange() {
	return {
		type: types.FLY_CHANGE
	}
}

export function maxChange(modelId) {
	return {
		type: types.MAX_CHANGE,
		modelId
	}
}

export function inputChange(modelId, modelValue) {
	return {
		type: types.INPUT_CHANGE,
		modelId,
		modelValue
	}
}