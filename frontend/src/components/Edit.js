import React, { Component } from "react";
import {connect} from 'react-redux'
import {editUser, deleteUser} from '../actions/userAction'


class Edit extends Component {
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

  handleUpdate = (e) => {
    e.preventDefault()
    this.props.editUser(this.state, this.props.userId)
  }

  handleDelete = () => {
    this.props.deleteUser(this.props.userId, this.props.push)
  }

  render() {
    return (
      <div>
        <h3 className='bold-white'> Edit Me </h3>
        <form onSubmit={this.handleUpdate}>
          <label>
            <input type="text" placeholder="email" name="email" defaultValue={this.props.userEmail} onChange={this.handleChange} />
          </label>
          <br/>

          <label>
            <input type="text" placeholder="name" name="name" defaultValue={this.props.userName} onChange={this.handleChange}/>
          </label>
          <br/>

          <label>
            <input type="password" placeholder="new password" name="password" onChange={this.handleChange}/>
          </label>
          <br/>

          <button type="submit"> Save Changes </button>

        </form>
        <button onClick={this.handleDelete}> Delete Account </button>
      </div>
    );
  }
}

export default connect(null, {editUser, deleteUser})(Edit);
