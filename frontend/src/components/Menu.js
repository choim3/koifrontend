import React, { Component } from "react";
import {connect} from 'react-redux';
import {fetchFoods} from '../actions/menuAction'

class Menu extends Component {
  componentWillMount(){
    this.props.fetchFoods()
  }



  render() {
    const foodItems = this.props.foods.map(food => (
      <card key={food.id}>
        <h4 className="bold-white">{food.name}</h4>
        <h5 className="bold-white">{food.price}</h5>
        <p className="text-white">{food.desc}</p>
        <button>Add To Order</button>
      </card>
    ))


    return (
      <div>
        <h3 className='bold-white'> Menu </h3>
        {foodItems}
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  foods: state.foods.items
})

export default connect(mapStateToProps, {fetchFoods})(Menu);
