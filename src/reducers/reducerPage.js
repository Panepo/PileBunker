import { MODEL_OPEN, MODEL_CLOSE } from '../constants/ConstActionTypes'

const initialState = {
  modelStatus: '0'
}

export default function reducerPage(state = initialState, action) {
  switch (action.type) {
    case MODEL_OPEN:
      return Object.assign({}, state, {
        modelStatus: action.modelId
      })
    case MODEL_CLOSE:
      return Object.assign({}, state, {
        modelStatus: '0'
      })
    default:
      return state
  }
}
