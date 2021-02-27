// CSS IMPORTS
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
// NAVBAR IMPORTS
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
// REDUX IMPORTS
import {createStore} from 'redux'
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux' // this lets you output the value of a state
// IMPORT {actions} from './actions'


function App() {

  const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  const dispatch = useDispatch()
  //for example
  // const counter = useSelector(state => state.counter
  return (
    <Provider store={store}>
      // <h3> Counter {counter} </h3>
      <div className="App">
      <button onClick={() => dispatch(increment)}> </button>

      </div>
    </Provider>
  );
}

export default App;
