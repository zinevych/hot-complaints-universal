import { combineReducers } from 'redux'
import app from './app'
import reports from './reports'
import form from './form'

const rootReducer = combineReducers({
  app,
  reports,
  form
});

export default rootReducer
