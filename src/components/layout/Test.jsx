import React, { Component } from 'react'
// importing button groups
import ButtonGroup from '../Buttongrp'
// import Explore from './Explore'
class Test extends Component {
  render() {
    return (
      <div className="container mt-5"> 
        <div className="mt-5">
          <h1> I am : { this.props.i_am}</h1>
          <h1> I like : { this.props.i_like}</h1>
          <br></br>
          <ButtonGroup />
        </div>
      </div>
      
    )
  }
}

export default Test;