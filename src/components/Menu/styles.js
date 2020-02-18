import styled, { createGlobalStyle } from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const GlobalStyleMenu = createGlobalStyle`
  .menu-show{
    width: 100% !important;
    display: block;
  }
  .menu-hidde{
    width: 0 !important;
    display: none;
  }
  @media(min-width: 300px) and (max-width: 768px){
    .cont-header{
      height: 100px;    
    }
  }
`;

export const Svg = styled.svg`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const ContMenuMobile = styled.div`
  position: absolute;
  width: 0;
  height: 100vh;
  top: 0;
  background-color: #191919;
  display: none;
  z-index: 99;
`

export const ContIcoXMenu = styled.div`
  position: relative;
  top: 30px;
  margin-top: -30px;
  width: 60px;
  min-width: 60px;
  height: 60px;
  float: right;
  right: 15px;
`

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 50px;
  background: transparent;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  width: 300px;
  min-width: 320px;
  height: 100%;
  margin-left: 15px;
  font-family: FTY-IRONHORSE-NCV,serif;
  color: #FFFFFF;
  text-shadow: 0 0 8px rgba(255, 255, 255, 1);
  display: inline-flex;
  align-items: center;
  justify-content: left;
  text-decoration: none;

  &:hover{
    color: #E30D18;
    text-shadow: 0 0 8px rgba(227, 13, 24, 1);
  }
  
  &[aria-current]{
    color: #E30D18;
    text-shadow: 0 0 8px rgba(227, 13, 24, 1);
  }

  @media (min-width: 320px) and (max-width: 1768px){
    font-size: 50px;
    line-height: 60px;
  }
  @media (min-width: 768px) and (max-width: 1024px){
    font-size: 60px;
    line-height: 70px;
  }
`