
import React, { Component } from 'react'
import {Link}from'react-router-dom';
import './css/Page2.css'
export default class   extends Component {
  render() {
    return (
      <div className='main1'> 
        <h1> frontend websites </h1>
        <br/>
        <div id='text1'>
       <h3> Today's Topic is Html & css basic</h3>
      </div>
         <Link to="/">GO to Page1</Link>
         <br/>
         <div className='link2'>
         <Link to="/">GO to Home</Link>
            </div>
          
      </div>
    )
  }
}
