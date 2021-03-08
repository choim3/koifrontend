import {CURRENT_USER, NEW_USER, LOGIN_USER, USER_OBJECT, EDIT_USER, LOGOUT, SET_FOOD_IN_ORDER, ADD_TO_ORDER} from './types'


export const newUser = (userData, historyPush) => {
  return function(dispatch) {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(user => {
      if (user.user) {
        sessionStorage.setItem('token', user.jwt)
        dispatch({
          type: CURRENT_USER,
          payload: user.user
        })
        dispatch({
          type: SET_FOOD_IN_ORDER,
          payload: user.user.order_menus
        })
        historyPush('/')
      } else {
        console.log(user.error)
      }
    })
  }
}

export const loginUser = (userData, historyPush) => {
  return function(dispatch) {
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(user => {
      if (user.user) {
        sessionStorage.setItem('token', user.jwt)
        dispatch({
          type: CURRENT_USER,
          payload: user.user
        })
        dispatch({
          type: SET_FOOD_IN_ORDER,
          payload: user.user.order_menus
        })
        // dispatch({
        //   type: USER_OBJECT,
        //   payload: user.user
        // })
        historyPush('/')
      } else {
        console.log(user.error)
      }
    })
  }
}

export const editUser = (userData, userId) => {
  debugger
  return function(dispatch) {
    let token = sessionStorage.getItem('token')
    fetch(`http://localhost:3000/users/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: `bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(alertMessage => alert("Account Updated"))
    }
  }

  export const deleteUser = (userId, historyPush) => {
    return function(dispatch) {
      let token = sessionStorage.getItem('token')
      fetch(`http://localhost:3000/users/${userId}`, {
        method: "DELETE",
        headers: {
          Authorization: `bearer ${token}`
        },
      })
      .then(res => res.json())
      .then(alertMessage => alert("Account Deleted"))
      sessionStorage.clear()
      }
    }

  export const logoutUser = (historyPush) => {
    return function(dispatch) {
      sessionStorage.clear()
      dispatch({
        type: LOGOUT,
        payload: {}
      })
      dispatch({
        type: ADD_TO_ORDER,
        payload: []
      })
    }
    historyPush('/')
  }
