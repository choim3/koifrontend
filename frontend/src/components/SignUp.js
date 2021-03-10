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
    this.props.newUser(this.state, this.props.history.push)
  }

  handleSwitch = () => {
    this.props.history.push('/signin')
  }

  render() {
    return (
      <section className="container-fluid bg1">
      <div className="signup-overlay">
      <section className='row justify-content-center'>
        <section className='col-12 col-sm-6 col-md-3'>
        <form className="form-container1 c-font" onSubmit={this.handleSubmit}>
        <h3 className='bold-white c-font'> Sign Up </h3>
        <div className='form-group'>
          <label>
            <input type="text" placeholder="email" name="email" onChange={this.handleChange} />
          </label>
        </div>
        <div className='form-group'>
          <label>
            <input type="text" placeholder="name" name="name" onChange={this.handleChange}/>
          </label>
          </div>
          <div className='form-group'>
          <label>
            <input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
          </label>
          </div>

          <button className='btn btn-outline-danger' type="submit"> Create Account </button>
          <button className='btn btn-outline-danger up' onClick={this.handleSwitch}> Already Registered? </button>

        </form>
        </section>
      </section>
      </div>
      </section>
    );
  }
}

export default connect(null, {newUser})(SignUp);
