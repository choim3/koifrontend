// CSS IMPORTS
import './App.css';
import './index.css'
import "bootstrap/dist/css/bootstrap.css";
// NAVBAR IMPORTS
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavTop from "./Nav";
// COMPONENT IMPORTS
import Home from './components/Home'
import Menu from './components/Menu'
import Order from './components/Order'
import Edit from './components/Edit'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Welcome from './containers/Welcome'
// REDUX IMPORTS
import {createStore, applyMiddleware} from 'redux'
import {toggleLogged} from './actions'
import {useSelector, useDispatch} from 'react-redux' // this lets you output the value of a state
import {useEffect} from 'react'
import {CURRENT_USER, SET_FOOD_IN_ORDER} from './actions/types'

function App() {
  const userEmail = useSelector(state => state.userReducer.user.email);
  const userName = useSelector(state => state.userReducer.user.name);
  const userPassword = useSelector(state => state.userReducer.user.password);
  const userId = useSelector(state => state.userReducer.user.id);
  const itemsInCart = useSelector(state => state.orderReducer.foodInOrder);
  const dispatch = useDispatch()

  useEffect(() => {
      let token = sessionStorage.getItem('token')
      if (token) {
        fetch('http://localhost:3000/profile', {
          method: "GET",
          headers: {
            Authorization: `bearer ${token}`,
          },
        })
        .then(resp => resp.json())
        .then(user => {
          dispatch({
            type: CURRENT_USER,
            payload: user.user
          })
          dispatch({
            type: SET_FOOD_IN_ORDER,
            payload: user.user.order_menus
          })
        })
      }
  }, [])

  return (
      <Router>
        <div className="App">
          <NavTop userName={userName} itemsInCart={itemsInCart}/>
          {/*Add error handling if, I have time.*/}
          <Switch>
            <Route path='/' exact component={Home} />
            {/*<Route path='/menu' component={Menu} />*/}
            <Route path='/menu' render={ () => {return <Menu userId={userId} itemsInCart={itemsInCart} /> }} />
            <Route path='/order' render={ () => {return <Order itemsInCart={itemsInCart} userId={userId}/> }} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/edit' render={ () => {return <Edit userEmail={userEmail} userName={userName} userPassword={userPassword} userId={userId} /> }} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
