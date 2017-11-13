import { combineReducers } from 'redux'
import { default as reducerCalc } from './reducerCalc'
import { default as reducerPage } from './reducerPage'

export default combineReducers({
	reducerCalc,
	reducerPage
})
