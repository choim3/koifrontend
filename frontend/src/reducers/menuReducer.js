import {FETCH_FOODS, FOOD_RATING} from '../actions/types'

const initialState = {
  items: [],
  rating: []
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOODS:
      return {
        ...state,
        items: action.payload
      }
    case FOOD_RATING:
      return {
        ...state,
        rating: action.payload
      }
    
    default:
      return state
  }
}
export default menuReducer
