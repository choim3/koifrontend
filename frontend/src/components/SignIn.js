import React, { Component } from "react";
import {connect} from 'react-redux'
import {loginUser} from '../actions/userAction'

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  componentDidMount(){
    this.fetchLoggedInUser()
  }

  fetchLoggedInUser = () => {
    let token = sessionStorage.getItem('token')
    if (token) {
      fetch('http://localhost:3000/profile', {
        method: "GET",
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          userData: user.user
        })}
      )
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginUser(this.state, this.props.push)
  }

  // this.setState({
  //   userObject: user.user
  // })


  render() {
    return (
      <div>
        <h3 className='bold-white'> Sign In </h3>

          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" placeholder="email" name="email" onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
            </label>
            <br/>

            <button type="submit"> Sign In </button>
            <button onClick={this.props.toggleButton}>Click here to sign up </button>
          </form>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.foods.items
})

export default connect(null, {loginUser})(SignIn);
