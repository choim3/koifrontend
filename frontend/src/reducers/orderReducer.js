import {ADD_TO_ORDER} from '../actions/types'

const initialState = {
  itemsInOrder: []
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_ORDER:
      return {
        ...state,
        foodInOrder: action.payload
      }
    default:
      return state
  }
}
export default orderReducer
