import { combineReducers } from 'redux'
import counter from './counter'
import app from './app'
import reports from './reports'

const rootReducer = combineReducers({
  counter,
  app,
  reports
})

export default rootReducer
