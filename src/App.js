import React from 'react';
import './App.css';
// importing the Router and route from 'react-router-dom'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Test from './components/layout/Test';
import reducer from './reducers/index'

// importing redux create store 
import {createStore} from 'redux'
const initialState={
  i_am:"",
  i_like:""
}

const store= createStore(reducer, initialState);
class App extends React.Component{
  state=store.getState();
  render() {
    return(
      <Router>
          <div className="App">
            <Navbar />
            <Switch>
            <Route path="/login" component={Login}/>
            <Route 
                path="/about" 
                render={(props)=><Test {...props} i_am={this.state.i_am} i_like={this.state.i_like}/>}
              />
            <Route path="/register" component={Register}/>
            <Route exact path="/" component={Landing}/>
            </Switch>
           
            
          </div>
      </Router>
    );
    };
}

export default App;
