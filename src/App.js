import React from 'react';
import './App.css';
// importing the Router and route from 'react-router-dom'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Test from './components/layout/Test';

//load helloworld
import HelloWorld from './components/layout/HelloWord'

// load explre
import Explore from './components/layout/Explore'

//importing store
import {store} from './store/index'
// import Explore from './components/layout/Explore';

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
            <Route path="/explore"
              render={(props)=><Explore {...props} key={2} technologies={["react", "elm", "react-redux"]}/>}
            />
            <Route exact path="/" component={Landing}/>
            </Switch>
            <HelloWorld key={1} tech={store.getState().tech}/>
          </div>
      </Router>
    );
    };
}

export default App;
