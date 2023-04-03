import { FaBars } from 'react-icons/fa'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
  
export const Nav = styled.nav`
  background: white;
  height: 90px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`
  
export const NavLink = styled(Link)`
  color: #182944;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.15rem;

  &:hover {
    color: #0D70E6;
  }

`

  
export const Bars = styled(FaBars)`
  display: none;
  color: blue;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
  
export const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: #0D70E6;
  padding: 17px 14px;
  color: white;
  font-weight: bold;
 
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  

`;
