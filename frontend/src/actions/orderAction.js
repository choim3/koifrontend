import {ADD_TO_ORDER, POST_ORDER, DELETE_ORDER} from './types'

// export const addToOrder = (foodData) => {
//   return function(dispatch) {
//     dispatch({
//       type: ADD_TO_ORDER,
//       payload: foodData
//     })
//   }
// }

export const postOrder = (foodData, userId) => {
  let token = sessionStorage.getItem('token')
  let orderObj = {
    menu_item_id: foodData.id,
    user_id: userId
  }
  return function(dispatch) {
    fetch('http://localhost:3000/order_menus', {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderObj)
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

export const deleteItem = (orderMenuId) => {
  return function(dispatch) {
    let token = sessionStorage.getItem('token')
    fetch(`http://localhost:3000/order_menus/${orderMenuId}`, {
      method: "DELETE",
      headers: {
        Authorization: `bearer ${token}`
      },
    })
    .then(res => res.json())
    .then(alertMessage => alert("Removed Item From Order!"))
  }
}

export const checkoutOrder = (foodData) => {
  return function(dispatch) {
    dispatch({
      type: DELETE_ORDER,
      payload: foodData
    })
  }
}
