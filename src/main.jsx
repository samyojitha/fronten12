import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter basename="fronten12">
<Routes>
  <Route path="/" element ={<App/>}></Route>
  <Route path='/Page1' element={<Page1/>}></Route>
  <Route path='/Page2' element={<Page2/>}></Route>
  <Route path='/Page3' element={<Page3/>}></Route>

</Routes>
</BrowserRouter>
)
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login.jsx'  // Use relative path

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

>>>>>>> e6acc90 (Initial commit with frontend login/signup page)
