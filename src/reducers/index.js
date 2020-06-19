// This is Root reducer file
import { combineReducers } from 'redux'

// Import Separed Reducers
import logReducer from './logReducer'
import techReducer from './techReducer'

export default combineReducers({
  // States for parts of our app
  log: logReducer,
  tech: techReducer
})