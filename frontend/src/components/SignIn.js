import React, { Component } from "react";


class SignIn extends Component {
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
              <input type="password" placeholder="password" name="password" />
            </label>
            <br/>

            <button type="submit"> Sign In </button>
          </form>

      </div>
    );
  }
}

export default SignIn;
