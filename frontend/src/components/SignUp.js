import React, { Component } from "react";
import {connect} from 'react-redux'
import {newUser} from '../actions/userAction'

class SignUp extends Component {
  state = {
    email: "",
    name: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.newUser(this.state, this.props.push)
  }

  render() {
    return (
      <div>
        <h3 className='bold-white'> Sign Up </h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" placeholder="email" name="email" onChange={this.handleChange} />
          </label>
          <br/>

          <label>
            <input type="text" placeholder="name" name="name" onChange={this.handleChange}/>
          </label>
          <br/>

          <label>
            <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
          </label>
          <br/>

          <button type="submit"> Create Account </button>

        </form>
        <button onClick={this.props.toggleButton}> Already Registered? </button>

      </div>
    );
  }
}

export default connect(null, {newUser})(SignUp);
