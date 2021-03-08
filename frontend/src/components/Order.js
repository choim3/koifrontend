import React, { Component } from "react";
import {connect} from 'react-redux';
import {checkoutOrder, deleteItem} from '../actions/orderAction';

class Order extends Component {

  handleCheckout = () => {
    checkoutOrder()
  }
  removeItem = (e, orderMenuId) => {
    e.preventDefault()
    this.props.deleteItem(orderMenuId)
  }
  render() {
    const foodItems = this.props.itemsInCart.map(food => (
      <card key={food.menu_item.id + 1}>
        <h4 className="bold-white">{food.menu_item.name}</h4>
        <h5 className="bold-white">{food.menu_item.price}</h5>
        <p className="text-white">{food.menu_item.desc}</p>
        <button onClick={(e) => this.removeItem(e, food.id)}> Remove Item </button>
      </card>
    ))

    return (
      <div>
        <h3 className='bold-white'> Order </h3>
        {foodItems}
        <button onClick={this.handleCheckout}>Place Order</button>
      </div>
    );
  }
}

export default connect(null, {checkoutOrder, deleteItem})(Order);
