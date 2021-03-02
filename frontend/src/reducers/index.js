// IMPORT OTHER REDUCER FILES/FUNCTIONS INTO HERE
import loggedReducer from './isLogged'
import menuReducer from './menuReducer'
import orderReducer from './orderReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers ({
  //Create a key and then reducer on other side
  //For example toad: testReducer
  // or
  // testReducer
  // which means testReducer: testReducer
  isLogged: loggedReducer,
  foods: menuReducer,
  order: orderReducer
})
export default rootReducer
