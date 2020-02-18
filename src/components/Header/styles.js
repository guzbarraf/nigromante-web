import styled  from 'styled-components'

export const ContHeader = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`

export const ContLogo = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  
  @media(min-width: 300px) and (max-width: 768px){
    width: 80px !important;
    height: 80px !important;
  }
  @media (max-width: 768px){
    width: 120px;
    height: 120px;
  }
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

export const IcoMenu = styled.div`
  width: 100%;
  height: 100%;
`