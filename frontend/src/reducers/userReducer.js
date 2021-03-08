import {CURRENT_USER, NEW_USER, LOGIN_USER, USER_OBJECT, LOGOUT} from '../actions/types'

const initialState = {
  email: "",
  name: "",
  password: "",
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        user: action.payload
      };
    case NEW_USER:
      return {
        ...state,
        newUser: action.payload
      }
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload
      }
    case USER_OBJECT:
      return {
        ...state,
        user: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}
export default userReducer
