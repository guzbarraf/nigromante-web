import styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyleSlide = createGlobalStyle`
  
`
export const Slide = styled.div`
  position: absolute;
  width: 100%;
  top: 73%;
  left: 88%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContBtnsSlide = styled.div`
  width: 50%;
  display: flex;
`

export const BtnSlide = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border-radius: 50%;
  border: 1px solid #E30D18;
  box-shadow: 0 0 8px rgba(227, 13, 24, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover{
    background-color: #E30D18;
  }
`

export const Svg = styled.svg`
  position: relative;
  width: 30%;
`

export const Linea = styled.div`
  position: relative;
  width: 50%;
  height: 1px;
  top: 70%;
  right: 42%;
  background-color: #E30D18;
  box-shadow: 0 0 8px rgba(227, 13, 24, 1);
`