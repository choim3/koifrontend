import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './App.css'
import {logoutUser} from './actions/userAction'
import {connect} from 'react-redux'



class NavTop extends Component {

  handleLogout = () => {
    this.props.logoutUser()
    window.location.replace(`http://localhost:3001/`);
  }

  render() {
    return(
      <Navbar collapseOnSelect expand="lg" variant="light" className="NavBar">
  <Navbar.Brand className="bold-c-font" href="/">Koibito</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link className="bold-c-font" href="/">Home</Nav.Link>
    <Nav.Link className="bold-c-font" href="menu">Menu</Nav.Link>
    <Nav.Link className="bold-c-font" href="order">View Order({this.props.itemsInCart.length})</Nav.Link>
    </Nav>
    <Nav>
    <NavDropdown className="bold-c-font"title="Account" id="collasible-nav-dropdown">
     {this.props.userName ? null : <NavDropdown.Item className="bold-c-font" href="signin">Sign In</NavDropdown.Item>}
     {this.props.userName ? null : <NavDropdown.Item className="bold-c-font" href="signup">Sign Up</NavDropdown.Item>}
    {this.props.userName ? <NavDropdown.Item className="bold-c-font" href="edit">Edit Account</NavDropdown.Item> : null}
    <NavDropdown.Divider />
    {this.props.userName ? <NavDropdown.Item className="bold-c-font" onClick={this.handleLogout}> Logout </NavDropdown.Item> : null}
    </NavDropdown>
    {this.props.userName ? <Nav.Link className="bold-c-font">Welcome {this.props.userName.charAt(0).toUpperCase() + this.props.userName.slice(1)}! </Nav.Link> : <Nav.Link>  </Nav.Link>}
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
  }
}
export default connect(null, {logoutUser})(NavTop);
