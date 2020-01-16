import React from 'react'
import { Link, Nav } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>Inicio</Link>
      <Link to='/posiones'>Posiones</Link>
      <Link to='/donde'>Dónde estamos</Link>
    </Nav>
  )
}