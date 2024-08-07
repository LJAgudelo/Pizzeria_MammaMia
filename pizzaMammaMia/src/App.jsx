import { useState } from 'react'
import './App.css'
import MyNavbar from './components/MyNabvar';
import Home from './components/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar/>
      <Home/>
      
      <Footer/>
    </>
  )
}

export default App
