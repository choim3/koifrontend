import {FETCH_FOODS} from '../actions/types'

const initialState = {
  items: [],
  item: {}
}

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOODS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state
  }
}
export default menuReducer
