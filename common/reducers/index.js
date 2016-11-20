import { combineReducers } from 'redux'
import counter from './counter'
import app from './app'

const rootReducer = combineReducers({
  counter,
  app
})

export default rootReducer
