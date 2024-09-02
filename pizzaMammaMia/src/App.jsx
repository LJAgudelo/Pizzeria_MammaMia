import { useState } from 'react'
import './App.css'
import MyNavbar from './components/MyNabvar';
import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar/>
    {/*  <Home/> 
     <Register/>
    <Login/>*/}
    <Cart/>
    <Footer/>
    </>
  )
}

export default App
