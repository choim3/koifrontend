import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchFoods, foodRating} from '../actions/menuAction'
import {addToOrder, postOrder} from '../actions/orderAction'
import {Modal, Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import StarRatings from 'react-star-ratings';

class Menu extends Component {
  componentDidMount(){
    this.props.fetchFoods()
  }

  state = {
    rating: "",
    toggleModal: false,
    data: {}
  }

  addToOrder = (e, food) => {
    e.preventDefault()
    this.props.addToOrder(food)
  }

  handleOrder = (e, food) => {
    e.preventDefault()
    this.props.postOrder(food, this.props.userId)
  }

  handleRating = (e, food) => {
    //e.prevent default
    this.setState({
      rating: e
    })
    this.props.foodRating(e, food, this.props.userId)
  }

  // handleChange = (e) => {
  //   this.setState({
  //     rating: e
  //   })
  // }

  handleOpenModal = (e, food) => {
    this.setState({
      toggleModal: true,
      data: food
    })
  }

  handleCloseModal = () => {
    this.setState({
      toggleModal: false
    })
  }


  render() {
    const foodItems = this.props.foods.map(food => (
    <div>
      <Card className="menu_card" onClick={(e) => this.handleOpenModal(e, food)} key={food.id}>
        <h4 className="bold-white">{food.name} Roll</h4>
        <h5 className="bold-white">${food.price}</h5>
      </Card>

      <Modal  show={this.state.toggleModal} onHide={this.handleCloseModal} >
        <Modal.Header className="modal-card bold-white" closeButton>
          <Modal.Title>
          {food.name} Roll
          ${food.price}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-card text-white">
          {food.desc}
        </Modal.Body>
        <Modal.Footer className="modal-card text-white">
          <form onSubmit={(e) => this.handleRating(e, food)}>
            <label>Rating: </label>
            <StarRatings numberOfStarts={5} name="rating"

              starRatedColor="green" starEmptyColor="white"
              starHoverColor="#E94B3CFF"
              changeRating={(e) => this.handleRating(e, food)}
            />
            {/*<select name="rating" onChange={(e) => this.handleChange(e)}>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
            </select>
              <button type="submit">Rate</button>*/}
              <button className="btn-primary" onClick = {(e) => this.addToOrder(e, food)}>Add To Order</button>
          </form>
        </Modal.Footer>
      </Modal>

      </div>
    ))


    return (
      <div>
        <h3 className='bold-white'> Menu </h3>
        {foodItems}
        <br/>
        <button onClick = {this.handleOrder}>Checkout</button>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  foods: state.foods.items,
  order: state.orderReducer.foodInOrder,
  rating: state.foods.rating,
  user: state.userReducer.user
})

export default connect(mapStateToProps, {fetchFoods, addToOrder, postOrder, foodRating})(Menu);
