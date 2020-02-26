import React from 'react'
import { Nav, Link } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>Inicio</Link>
      <Link to='/cervezas'>Posiones</Link>
      <Link to='/donde'>Dónde estamos</Link>
      <Link to='/contacto'>Contacto</Link>
    </Nav>
  )
}