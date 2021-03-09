import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchFoods, foodRating} from '../actions/menuAction'
import { postOrder} from '../actions/orderAction'
import {Modal, Card, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import StarRatings from 'react-star-ratings';

class MenuModal extends Component {
  state = {
    rating: "",
    toggleModal: false,
    selectedItem: {}
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
      selectedItem: food
    })
  }

  handleCloseModal = () => {
    this.setState({
      toggleModal: false
    })
  }

  getAllFoodItems = () => {
    let matchFoods = this.props.allFoods.find(food => food.id === this.selectedFood.id)
    return matchFoods.map (food =>
      <div>
      <Card className="menu_card" onClick={(e) => this.handleOpenModal(e, food)} key={food.id}>
      <h4 className="bold-white">{food.name} Roll</h4>
      <h5 className="bold-white">${food.price}</h5>
      </Card>
      </div>
    )
  }
  render() {
    return (
      <Modal  show={this.state.toggleModal} onHide={this.handleCloseModal} >
        <Modal.Header className="modal-card bold-white" closeButton>
          <Modal.Title>
          {this.pops.selectedFood.name} Roll
          ${this.pops.selectedFood.price}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-card text-white">
          {this.pops.selectedFood.desc}
        </Modal.Body>
        <Modal.Footer className="modal-card text-white">
          <form onSubmit={(e) => this.handleRating(e, this.pops.selectedFood)}>
            <label>Rating: </label>
            <StarRatings numberOfStarts={5} name="rating"

              starRatedColor="green" starEmptyColor="white"
              starHoverColor="#E94B3CFF"
              changeRating={(e) => this.handleRating(e, this.pops.selectedFood)}
            />
            {/*<select name="rating" onChange={(e) => this.handleChange(e)}>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
            </select>
              <button type="submit">Rate</button>*/}
              <button className="btn-primary" onClick = {(e) => this.addToOrder(e, this.pops.selectedFood)}>Add To Order</button>
          </form>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  foods: state.foods.items,
  order: state.orderReducer.foodInOrder,
  rating: state.foods.rating,
  user: state.userReducer.user
})

export default connect(mapStateToProps, {fetchFoods, postOrder, foodRating})(MenuModal);
