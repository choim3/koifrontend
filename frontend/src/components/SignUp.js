import React, { Component } from "react";


class SignUp extends Component {
  render() {
    return (
      <div>
        <h3 className='bold-white'> Sign In or Sign Up </h3>
        <form>
          <label>
            <input type="text" placeholder="email" name="email" />
          </label>
          <br/>

          <label>
            <input type="text" placeholder="name" name="name" />
          </label>
          <br/>

          <label>
            <input type="password" placeholder="password" name="password" />
          </label>
          <br/>

          <button type="submit"> Create Account </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
