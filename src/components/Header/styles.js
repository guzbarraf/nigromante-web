import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyleHeader = createGlobalStyle`
  @media (max-width: 1023px){
    .columns-responsive{
      
    }
    .no-display-mobile{
      display: none;
    }
  }
  @media (min-width: 1024px){
    .no-display-desk{
      display: none;
    }
  }
`

export const ContHeader = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`

export const ContLogo = styled.div`
  position: relative;
  width: 120px;
  height: 120px;

  @media (max-width: 1023px){
    left: 15px;
  }
`

export const ContNavBar = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;

  @media (max-width: 1023px){
    display: none;
  }
`

export const ContRedes = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 1023px){
    display: none;
  }
`

export const ContIcoMenu = styled.div`
  position: relative;
  top: 60%;
  margin-top: -30px;
  width: 60px;
  min-width: 60px;
  height: 40px;
  float: right;
  right: 15px;

  @media (min-width: 1024px){
    display: none;
  }
`

export const IcoMenu = styled.div`
  width: 100%;
  height: 100%;
`