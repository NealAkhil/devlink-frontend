import React from 'react';
import './App.css';
// importing the Router and route from 'react-router-dom'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
class App extends React.Component{
  render() {
    return(
      <Router>
          <div className="App">
            <Navbar />
            <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route exact path="/" component={Landing}/>
            </Switch>
           
            
          </div>
      </Router>
    );
    };
}

export default App;
