import React, {Component} from 'react'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'

class Welcome extends Component {

  state = {
    loginSwitch: true
  }

  showLogIn = () => {
    this.setState(prevState => {
      return{
        loginSwitch: !prevState.loginSwitch
      }
    })
  }


  render(){
    return (
      <div>
        {this.state.loginSwitch ? <SignIn toggleButton={this.showLogIn} push={this.props.history.push}/> : <SignUp toggleButton={this.showLogIn} push={this.props.history.push}/>}
      </div>
    );
  }
}

export default Welcome;
