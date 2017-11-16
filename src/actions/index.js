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

export function monsChange() {
	return {
		type: types.MONS_CHANGE
	}
}

export function cannonChange() {
	return {
		type: types.CANNON_CHANGE
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

export function refChange(modelId) {
	return {
		type: types.REF_CHANGE,
		modelId
	}
}

export function refSinChange(modelId) {
	return {
		type: types.REF_SIN_CHANGE,
		modelId
	}
}

export function modelOpen(modelId) {
	return {
		type: types.MODEL_OPEN,
		modelId
	}
}

export function modelClose(modelId) {
	return {
		type: types.MODEL_CLOSE,
		modelId
	}
}
