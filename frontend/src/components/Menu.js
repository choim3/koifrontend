import React, { Component } from "react";


class Menu extends Component {
  componentDidMount() {
    fetch('http://localhost:3000/menu_items')
    .then(res => res.json())
    .then(foods => console.log(foods))
  }



  render() {
    return (
      <div>
        <h3 className='bold-white'> Menu </h3>

      </div>

    );
  }
}

export default Menu;
