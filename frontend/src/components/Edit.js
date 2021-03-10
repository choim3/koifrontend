import React, { Component } from "react";
import {connect} from 'react-redux'
import {editUser, deleteUser, logoutUser} from '../actions/userAction'


class Edit extends Component {
  state = {
    email: this.props.userEmail,
    name: this.props.userName,
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleUpdate = (e) => {
    e.preventDefault()
    this.props.editUser(this.state, this.props.userId)
  }

  handleDelete = () => {
    this.props.deleteUser(this.props.userId, this.props.push)
    window.location.replace(`http://localhost:3001/`);
  }

  handleLogout = () => {
    this.props.logoutUser()
    window.location.replace(`http://localhost:3001/`);
  }

  render() {
    return (
      <section className="container-fluid bg3">
      <div className="signup-overlay">
      <section className='row justify-content-center'>
        <section className='col-12 col-sm-6 col-md-3'>
        <form className="form-container2 c-font" onSubmit={this.handleUpdate}>
        <h3 className='bold-white'> Edit Account </h3>
        <div className='form-group'>
          <label>
            <input type="text" placeholder="email" name="email" defaultValue={this.props.userEmail} onChange={this.handleChange} />
          </label>
          </div>
          <div className='form-group'>
          <label>
            <input type="text" placeholder="name" name="name" defaultValue={this.props.userName} onChange={this.handleChange}/>
          </label>
          </div>
          <div className='form-group'>
          <label>
            <input type="password" placeholder="new password" name="password" onChange={this.handleChange}/>
          </label>
          </div>

          <button className='btn btn-outline-danger' type="submit"> Save Changes </button><br/>
          {/*<button className='btn btn-outline-danger up' onClick={this.handleLogout}> Log Out </button><br/>*/}

        </form>
        <button className='btn btn-danger up' onClick={this.handleDelete}> Delete Account </button><br/>
        <div className="edit buttons">
        </div>
        </section>
      </section>
      </div>
      </section>
    );
  }
}

export default connect(null, {editUser, deleteUser, logoutUser})(Edit);
