import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav2 = styled.nav`
  background: #A38BC6;
  box-shadow: 0 0 10px #333;
  display:  flex;
  justifycontent: space-between;
  padding: 1rem ;
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
