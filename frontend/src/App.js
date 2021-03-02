// CSS IMPORTS
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// NAVBAR IMPORTS
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
// COMPONENT IMPORTS
import Home from './components/Home'
import Menu from './components/Menu'
import Order from './components/Order'
import Edit from './components/Edit'
import SignIn from './components/SignIn'
// REDUX IMPORTS
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux' // this lets you output the value of a state
import {toggleLogged} from './actions'
import store from './store'


function App() {

  return (
    <Provider store ={store}>
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/menu' component={Menu} />
            <Route path='/order' component={Order} />
            <Route path='/welcome' component={SignIn} />
            <Route path='/edit' component={Edit} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
