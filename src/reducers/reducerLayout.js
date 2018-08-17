import {
  MODEL_OPEN,
  MODEL_CLOSE,
  CHAR_SELECT
} from '../constants/ConstActionTypes'

const initialState = {
  modelStatus: '0'
}

export default function reducerLayout(state = initialState, action) {
  switch (action.type) {
    case MODEL_OPEN:
      return Object.assign({}, state, {
        modelStatus: action.modelId
      })
    case MODEL_CLOSE:
    case CHAR_SELECT:
      return Object.assign({}, state, {
        modelStatus: '0'
      })
    default:
      return state
  }
}
