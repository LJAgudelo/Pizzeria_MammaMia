import './App.css'
import Home from './views/Home';
import MyNabvar from './components/MyNabvar.jsx';
import Footer from './components/Footer';
import Register from './views/Register.jsx'
import Login from './views/Login.jsx'
import Cart from './views/Cart.jsx'
import Profile from './views/Profile.jsx';
import NotFound from './views/NotFound.jsx'
import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {


  return (
    <>

    <MyNabvar/>

    <Routes>
      <Route path="home" element= {<Home/>}/>
      <Route path="cart" element= {<Cart/>}/>
      <Route path="registro" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="profile" element={<Profile/>}/>
      <Route path="*" element={<NotFound/>} /> 
     


    </Routes>





    <Footer/>


    </>
  )
}

export default App
