import { useState } from 'react'

import './App.css'
import {Link}from'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> welcome to fronten class in klu</h1>
      <h2>Today's Topic is introduction to react </h2>
      <h3>Today's Date is 23.07.25 </h3>
      <h4> Samyojitha </h4>
      <h5> 2400032211-D samyojitha</h5>
      <Link to="/Page1">Go to Page1</Link>
      <br></br>
      <Link to="/Page2">GO to Page2</Link>
       <br></br>
      <Link to="/Page3">GO to Page3</Link>
    </>
  )
}

export default App
