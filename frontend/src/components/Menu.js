
import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchFoods, foodRating} from '../actions/menuAction'
import {postOrder} from '../actions/orderAction'
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
    food: ""
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
      food: food
    })
  }

  handleCloseModal = () => {
    this.setState({
      toggleModal: false
    })
  }


  render() {
    return (
      <div>
      <h3 className='bold-white'> Menu </h3>
      <br/>
      {this.props.foods.map(food => (
        <Card className="menu_card" key={food.id}>
        <h4 className="bold-white">{food.name} Roll</h4>
        <h5 className="bold-white">${food.price}</h5>
        <button className="learn btn btn-dark" onClick={(e) => this.handleOpenModal(e, food)}>Learn More</button>
        </Card>
      ))}
        <Modal  show={this.state.toggleModal} onHide={this.handleCloseModal} >
        <Modal.Header className="modal-card bold-white" closeButton>
        <Modal.Title>
        {this.state.food.name} Roll
        ${this.state.food.price}
        </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-card text-white">
        {this.state.food.desc}
        </Modal.Body>
        <Modal.Footer className="modal-card text-white">
        <form onSubmit={(e) => this.handleRating(e, this.state.food)}>
        <label>Rating: </label>
        <StarRatings rating={this.props.rating.rating} numberOfStars={5} name="rating"
        starRatedColor="gold" starEmptyColor="white"
        starHoverColor="#E94B3CFF"
        changeRating={(e) => this.handleRating(e, this.state.food)}
        />
        <button className="btn-primary" onClick = {(e) => this.handleOrder(e, this.state.food)}>Add To Order</button>
        </form>
        </Modal.Footer>
        </Modal>


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

export default connect(mapStateToProps, {fetchFoods, postOrder, foodRating})(Menu);
