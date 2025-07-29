import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
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
