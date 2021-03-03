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
import SignUp from './components/SignUp'
import Welcome from './containers/Welcome'
// REDUX IMPORTS
import {createStore, applyMiddleware} from 'redux'
import {toggleLogged} from './actions'
import {useSelector, useDispatch} from 'react-redux' // this lets you output the value of a state


function App() {
  const userEmail = useSelector(state => state.user.user.email);
  const userName = useSelector(state => state.user.user.name);
  const userPassword = useSelector(state => state.user.user.password);
  const userId = useSelector(state => state.user.user.id);


  <Route   exact path="/Home" render={() => {
                  return <Home userInfo={this.state.user} />;
                }}
              />
  return (
      <Router>
        <div className="App">
          <Nav/>
          <h3> g {userId}</h3>
          {/*Add error handling if, I have time.*/}
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/menu' component={Menu} />
            <Route path='/order' component={Order} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/edit' render={ () => {return <Edit userEmail={userEmail} userName={userName} userPassword={userPassword} userId={userId} /> }} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
