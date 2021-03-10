import React, { Component } from "react";
import {connect} from 'react-redux'
import {loginUser} from '../actions/userAction'
import {Modal, Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }



  handleSwitch = () => {
    this.props.history.push('/signup')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.loginUser(this.state, this.props.history.push)
  }




  render() {
    return (
      <section className="container-fluid bg2">
      <div className="login-overlay">
        <section className='row justify-content-center'>
          <section className='col-12 col-sm-6 col-md-3'>
            <form className="form-container" onSubmit={this.handleSubmit}>
            <h3 className='bold-white c-font'> Sign In </h3>
              <div className='form-group'>
                <label >
                  <input className="c-font" type="text" placeholder="email" name="email" onChange={this.handleChange}/>
                </label>
              </div>

              <div className='form-group'>
                <label>
                  <input className="c-font" type="password" placeholder="password" name="password" onChange={this.handleChange}/>
                </label>
              </div>


              <button className='btn btn-outline-danger c-font' type="submit"> Sign In </button> <br/>
              <button className='btn btn-outline-danger up c-font' onClick={this.handleSwitch}>Click here to sign up </button>
            </form>
          </section>
        </section>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.foods.items
})

export default connect(null, {loginUser})(SignIn);
