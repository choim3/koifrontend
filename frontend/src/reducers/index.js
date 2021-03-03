// IMPORT OTHER REDUCER FILES/FUNCTIONS INTO HERE
import {combineReducers} from 'redux'
import loggedReducer from './isLogged'
import menuReducer from './menuReducer'
import orderReducer from './orderReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers ({
  //Create a key and then reducer on other side
  //For example toad: testReducer
  // or
  // testReducer
  // which means testReducer: testReducer
  isLogged: loggedReducer,
  foods: menuReducer,
  order: orderReducer,
  user: userReducer,
  // new_user: userReducer,
  // login_user: userReducer,
  // user_object: userReducer
})
export default rootReducer
