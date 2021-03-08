import React, { Component } from "react";
import {connect} from 'react-redux'
import {loginUser} from '../actions/userAction'

class SignIn extends Component {
  state = {
    email: "",
    password: ""
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
