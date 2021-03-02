import {CURRENT_USER} from '../actions/types'

const initialState = {
  user: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return {
        user: action.payload
      }
    default:
      return state
  }
}
export default userReducer
