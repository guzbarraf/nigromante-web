import styled, { createGlobalStyle } from "styled-components";
import { Link as LinkRouter } from '@reach/router'
import { Container as ContainerStyled } from 'bloomer'

export const GlobalStyleNavFullscreen = createGlobalStyle`
  #nav-fullscreen{
    position: fixed;
    width: 100%;
    height: 0%;
    top: 0;
    left: 0;
    background-color: #191919;
    z-index: 99999999;
  }
  .nav-fullscreen-hidden{
    /*display: none;*/
  }
  .nav-fullscreen-show{
    /*display: block;*/
  }
  
  
  #nav-fullscreen {
    overflow-y: hidden;
    transition: 0.5s;
  }
  
  #nav-fullscreen a {
    text-decoration: none;
    font-size: 36px;
    color: #FFFFFF;
    display: block;
    transition: 0.3s;
  }
  
  #nav-fullscreen a:hover, #nav-fullscreen a:focus {
    color: #f1f1f1;
  }
  
  #nav-fullscreen .closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
  }
  
  @media screen and (max-height: 450px) {
    #nav-fullscreen {overflow-y: auto;}
    #nav-fullscreen a {font-size: 20px}
    #nav-fullscreen .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }  
`

export const ContainerNavFullScreen = styled(ContainerStyled)`
  overflow: auto;
`

export const ContIcoCloseMenu = styled.div`
  position: relative;
  top: 20px;
  width: 60px;
  min-width: 60px;
  height: 35px;
  float: right;
  right: 0px;

  @media (min-width: 1024px){
    display: none;
  }
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

  @media (min-width: 320px) and (max-width: 768px){
    font-size: 50px;
    line-height: 60px;
  }
  @media (min-width: 769px) and (max-width: 1024px){
    font-size: 60px;
    line-height: 70px;
  }
`

