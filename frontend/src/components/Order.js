import React, { Component } from "react";
import {connect} from 'react-redux';
import {checkoutOrder, deleteItem} from '../actions/orderAction';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Card, Form} from 'react-bootstrap'

class Order extends Component {
  state = {
    total: 0
  }

  handleCheckout = () => {
    checkoutOrder(this.props.order[0].order_id)
  }
  removeItem = (e, orderMenuId) => {
    e.preventDefault()
    this.props.deleteItem(orderMenuId)
  }
  render() {
    const foodItems = this.props.itemsInCart.map(food => (
      <Card className="menu_card" key={food.menu_item.id + 1}>
        <h4 className="bold-white">{food.menu_item.name}</h4>
        <h5 className="bold-white">{food.menu_item.price}</h5>
        <p className="text-white">{food.menu_item.desc}</p>
        <button className="learn btn btn-dark" onClick={(e) => this.removeItem(e, food.id)}> Remove Item</button>
      </Card>
    ))

    const totalPrice = this.props.itemsInCart.map(food => (
      <Card className="menu_card" key={food.menu_item.id + 1}>
        <h5 className="bold-white">ADD TOTAL STUFFFFFF</h5>
      </Card>
    ))

    return (
      <div>
        <h3 className='bold-white'> Order </h3>
        {foodItems}
        {totalPrice}

        <button className="btn btn-outline-success" onClick={this.handleCheckout}>Place Order</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.orderReducer.foodInOrder
})

export default connect(mapStateToProps, {checkoutOrder, deleteItem})(Order);
