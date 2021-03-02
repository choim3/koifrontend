import {FETCH_FOODS} from './types'


export function fetchFoods() {
  return function(dispatch) {
  fetch('http://localhost:3000/menu_items')
  .then(res => res.json())
  .then(foods => dispatch({
    type: FETCH_FOODS,
    payload: foods
  }))
  }
}
