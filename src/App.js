import React,{useState} from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services'
import ServicePage from './components/ServicePage/ServicePage'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'


function App() {
  const [cart,setCart]=useState(false)
  return (
    <div>
      { cart && <Cart cart={cart} setCart={setCart} />}
    <Router>
    <Navbar setCart={setCart} />
    <Routes>
        <Route exact path='/home'  element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/servicepage' element={<ServicePage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route element={<Cart />} />
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
