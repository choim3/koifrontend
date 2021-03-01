import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import './App.css'


class Nav extends Component {
  render() {
    return(
      <nav className="navbar">
        <h1 className="bold-white"> Koibito </h1>
        <ul className ="NavStuff">

          <Link to="/">
            <li className="bold-white nav-text"> Home </li>
          </Link>

          <Link to="/Menu">
            <li className = "bold-white nav-text"> Menu </li>
          </Link>

          <Link to="/Order">
          <li className = "bold-white nav-text"> Online Order</li>
          </Link>

          <Link to="/Edit">
            <li className = "bold-white nav-text"> Edit </li>
          </Link>

          <Link to="/Welcome">
            <li className = "bold-white nav-text"> Sign In </li>
          </Link>

        </ul>
      </nav>
    )
  }
}
export default Nav;
