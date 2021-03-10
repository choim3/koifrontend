import {ADD_TO_ORDER, POST_ORDER, DELETE_ORDER, FETCH_ORDER} from './types'

// export const addToOrder = (foodData) => {
//   return function(dispatch) {
//     dispatch({
//       type: ADD_TO_ORDER,
//       payload: foodData
//     })
//   }
// }

export function fetchOrder(orderId) {
  return function(dispatch) {
  fetch(`http://localhost:3000/orders/${orderId}`)
  .then(res => res.json())
  .then(foods => dispatch({
    type: FETCH_ORDER,
    payload: foods
  }))
  }
}

export const postOrder = (foodData, userId) => {
  let token = sessionStorage.getItem('token')
  let orderObj = {
    menu_item_id: foodData.id,
    //orderId: dont need because of strong params only require ^^ menu items id
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

export const checkoutOrder = (orderId) => {
    let token = sessionStorage.getItem('token')
    fetch(`http://localhost:3000/orders/${orderId}`, {
      method: "PATCH",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({is_ordered: true})
    })
    .then(res => res.json())
    .then(alertMessage => alert("Order Placed!"))
}
