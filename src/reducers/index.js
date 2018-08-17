import { combineReducers } from 'redux'
import { default as reducerCalc } from './reducerCalc'
import { default as reducerLayout } from './reducerLayout'

export default combineReducers({
  reducerCalc,
  reducerLayout
})
