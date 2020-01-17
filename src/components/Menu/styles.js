import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyleMenu = createGlobalStyle`
  .menu-show{
    width: 100% !important;
  }
  .menu-hidde{
    width: 0% !important;
  }
`

export const Svg = styled.svg`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const ContMenuMobile = styled.div`
  position: absolute;
  width: 50%;
  height: 100vh;
  top: 0;
  background-color: aqua;
  z-index: 99;
`

export const ContIcoXMenu = styled.div`
  position: relative;
  top: 50%;
  margin-top: -30px;
  width: 60px;
  min-width: 60px;
  height: 60px;
  float: right;
  right: 15px;
`