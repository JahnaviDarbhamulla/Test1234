import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
  background: #fff;
  height: 200px;
  display:  flex;
  margin-left: 150px;
  justifycontent: space-between;
  padding: 1.5rem calc(100vw - 1000px) /2);
  z-index: 10;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  eight: 100%;
  cursor: pointer;
`
