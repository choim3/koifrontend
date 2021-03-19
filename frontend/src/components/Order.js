import React, { Component } from "react";
import {connect} from 'react-redux';
import {checkoutOrder, deleteItem} from '../actions/orderAction';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Card, Form} from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'

class Order extends Component {

  handleCheckout = () => {
    checkoutOrder(this.props.order[0].order_id)
    window.location.reload(true)
  }

  removeItem = (e, orderMenuId) => {
    e.preventDefault()
    this.props.deleteItem(orderMenuId)
    window.location.reload(true)
  }

  getSubTotalPrice = () => {
    let currentPrice = 0
    let currentOrder = this.props.itemsInCart
    currentOrder.map(foodPrice => (
        currentPrice = currentPrice + foodPrice.menu_item.price
    ))
    return currentPrice
  }

  getTax = (subtotal) => {
    let tax = 0
    tax = (subtotal * .065)
    return tax.toFixed(2)
  }

  getTotalPrice = (subtotal) => {
    let total = 0
    total = (subtotal * .065) + subtotal
    return total.toFixed(2)
  }

  handleToken = (token, addresses) => {
    debugger
    console.log(`${token}`)
  }

  render() {
    const foodItems = this.props.itemsInCart.map(food => (
      <Card className="menu_card" key={food.menu_item.id + 1}>
      <h4 className="bold-white c-font">{food.menu_item.name}</h4>
      <h5 className="bold-white c-font">{food.menu_item.price}</h5>
      <p className="text-white c-font">{food.menu_item.desc}</p>
      <button className="btn btn-outline-danger c-font" onClick={(e) => this.removeItem(e, food.id)}> Remove Item</button>
      </Card>
    ))

    return (
      <div>
        <div> <section className="order">
        </section></div>
        <div className="order-overlay">
          <h3 className='bold-white c-font'> Order </h3>
          {foodItems}
          <Card className="menu_card">
            <Card.Body>
              <Card.Text className="text-white c-font">
                Subtotal: ${this.getSubTotalPrice()}
              </Card.Text>
              <Card.Text className="text-white c-font">
                Tax: ${this.getTax(this.getSubTotalPrice())}
              </Card.Text>
              <Card.Title className='text-white c-font'>
                Total: ${this.getTotalPrice(this.getSubTotalPrice())}
              </Card.Title>
            </Card.Body>
            <StripeCheckout stripeKey={"pk_test_51IW8mYD2YbwCLQ0mGQjqJxmGDqa1TH8y9Zu6arheyVPNi5kmVcl0LjpPR7bjeFCN1zFMxevy2xIRJsUDQ6ghaIwG001JohPIf9"}
            token={this.handleToken}
            amount={this.getTotalPrice(this.getSubTotalPrice()) * 100}/>
            <button className="btn btn-outline-success c-font" onClick={this.handleCheckout}>Place Order</button>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.orderReducer.foodInOrder
})

export default connect(mapStateToProps, {checkoutOrder, deleteItem})(Order);
