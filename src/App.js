import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
class App extends React.Component{
  render() {
    return(
      <div>
          <Navbar />
          <Landing />
      </div>
    );
    };
}

export default App;
