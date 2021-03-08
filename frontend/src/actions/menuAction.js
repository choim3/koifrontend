import {FETCH_FOODS, FOOD_RATING} from './types'


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

export const foodRating = (rating, foodData, userId) => {
  let token = sessionStorage.getItem('token')
  let ratingObj = {
    rating: rating,
    menu_item_id: foodData.id,
    user_id: userId
  }
  return function(dispatch) {
    fetch('http://localhost:3000/reviews', {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ratingObj)
    })
    .then(res => res.json())
    .then(rating => {
      dispatch({
        type: FOOD_RATING,
        payload: rating
      })
    })
    .then(alertMessage => alert("Thank you for rating!"))
  }
}
