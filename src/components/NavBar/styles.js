import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
//import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 50px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  width: auto;
  height: 100%;
  margin: 0 15px;
  font: 30px FTY-IRONHORSE-NCV;
  color: #FFFFFF;
  text-shadow: 0 0 8px rgba(255, 255, 255, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover{
    color: #E30D18;
    text-shadow: 0 0 8px rgba(227, 13, 24, 1);
  }
  
  &[aria-current]{
    color: #E30D18;
    text-shadow: 0 0 8px rgba(227, 13, 24, 1);
  }
`