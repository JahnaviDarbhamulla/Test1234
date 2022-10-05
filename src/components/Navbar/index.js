import React from 'react'
import {Nav, NavLink} from './NavbarElements'

const Navbar = () => {
  return (
    <>
    <Nav>
    <NavLink to="/">
    <img src={require('../../images/aivara_logo.png')} alt="Aivara Logo" />
    </NavLink>
    </Nav>
    </>
  )
}
export default Navbar
