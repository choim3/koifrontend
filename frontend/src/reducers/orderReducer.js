import {ADD_TO_ORDER, POST_ORDER, LOGOUT, SET_FOOD_IN_ORDER} from '../actions/types'


const initialState = {
  foodInOrder: [],
  order: []
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      return {
        ...state,
        foodInOrder: [...state.foodInOrder, action.payload]
      }
    case POST_ORDER:
      return {
        ...state,
        order: action.payload
      }
    case SET_FOOD_IN_ORDER:
      return {
        ...state,
        foodInOrder: action.payload
      }
    default:
      return state
  }
}
export default orderReducer
