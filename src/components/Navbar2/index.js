import React from 'react'
import {Nav2, NavLink, Title} from './Navbar2ELements'

const Navbar2 = () => {
  return (
    <>
    <Nav2>
    <NavLink to="/">
    <img src={require('../../images/AivarA.png')} alt="Aivara Logo" />
    </NavLink>
    </Nav2>
    </>
  )
}
export default Navbar2
