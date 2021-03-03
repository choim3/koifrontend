import {CURRENT_USER, NEW_USER, LOGIN_USER, USER_OBJECT, EDIT_USER} from './types'

export const currentUser = () => {
  return {
    type: CURRENT_USER
  }
}

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
          type: NEW_USER,
          payload: user
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
          type: NEW_USER,
          payload: user
        })
        dispatch({
          type: USER_OBJECT,
          payload: user.user
        })
        historyPush('/')
      } else {
        console.log(user.error)
      }
    })
  }
}

export const editUser = (userData, userId) => {
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
