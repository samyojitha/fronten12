import React, { Component } from 'react'
import {Link}from'react-router-dom';
import './css/Page1.css'
export default class   extends Component {
  render() {
    return (
      <div> 
        <h1> india is my country </h1>
        <br> </br>
          <Link to="/Page1">GO to Page1</Link>
        <div className='link2'>
                 <Link to="/">GO to Home</Link>
                    </div>
                    <br> </br>

      </div>
    )
  }
}
