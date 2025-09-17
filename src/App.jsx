import { useState } from 'react'
<<<<<<< HEAD

import './App.css'
import {Link}from'react-router-dom';
=======
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
>>>>>>> e6acc90 (Initial commit with frontend login/signup page)
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
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
=======
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
>>>>>>> e6acc90 (Initial commit with frontend login/signup page)
    </>
  )
}

export default App
