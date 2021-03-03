import {ADD_TO_ORDER} from './types'

export const addToOrder = (foodData) => {
  return function(dispatch) {
    fetch('http://localhost:3000/orders', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(foodData)
    })
    .then(res => res.json())
    .then(food => {
        dispatch({
          type: ADD_TO_ORDER,
          payload: food
        })
    })
    .then(alertMessage => alert("Added To Order!"))
  }
}
