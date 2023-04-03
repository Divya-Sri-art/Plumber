import React,{useState} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    
} from './NavbarElements';

const Navbar = (props) => {

  return (
    <>
        <Nav>
            <NavLink to='/'>
                <img src="./assests/home.png" alt=" " width={60} />
                <h1>Plumbing X</h1>
            </NavLink>
            <Bars />
            <NavMenu >
                <NavLink to='/home' activeStyle>
                  Home
                </NavLink>
                <NavLink to='/about' activeStyle>
                  About
                </NavLink>
                <NavLink to='/services' activeStyle>
                   Services
                </NavLink>
                <NavLink to='/pages' activeStyle>
                    Pages
                </NavLink>
                <h3 onClick={()=>{props.setCart(true)}} style={{cursor: "pointer" , color: "#182944" , fontWeight: "400" , }}>Cart(0)</h3>
                
            
            </NavMenu>
          
            <NavBtn>
                <NavBtnLink to='/contact'>Get a quote</NavBtnLink>
            </NavBtn>
           
             
        </Nav>
    </>
  );
}

export default Navbar;