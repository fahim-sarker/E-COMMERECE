import './App.css'
import Rootlayout from './components/Rootlayout'
import Home from "./pages/Home"
import Product from "./pages/Product"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Productdetaills from './pages/Productdetaills'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import Myaccount from './pages/Myaccount'


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Rootlayout/>}>
    <Route index element={ <Home/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/product/:id' element={<Productdetaills/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/myaccount' element={<Myaccount/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
  </Route>
))

function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
