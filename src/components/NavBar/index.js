import React from 'react'
import { Nav, Link } from './styles'

export const NavBar = () => {
  return (
    <Nav>
      <Link to='/'>Inicio</Link>
      <Link to='/cervezas'>Posiones</Link>
      <Link to='/donde'>Dónde estamos</Link>
      <Link to='/contacto'>Contacto</Link>
      <Link to='/cerveza/ahypihey'>Ahypihey</Link>
      <Link to='/cerveza/huna-hop'>Huna</Link>
      <Link to='/cerveza/maestro-diablero'>Maestro</Link>
    </Nav>
  )
}