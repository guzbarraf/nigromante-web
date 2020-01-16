import styled from 'styled-components'

export const ContLema = styled.div`
  position: relative;
  margin-top: 20%;
  color: #FFFFFF;
  font: 50px 'Lato-Regular';
`

export const ContImgBeer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: auto;
  top: 20%;
  display: flex;
  aling-items: center;
  justify-content: center;
  z-index: 2;
`

export const ImgBeer = styled.img`
  width: 70%;
  height: auto;
`

export const ContImgHops = styled.div`
  position: absolute;
  bottom: 0;
  width: 700px;
  height: 300px;
  left: 25%;
  overflow: hidden;
  z-index: 1;
`

export const ImgHops = styled.img`
  width: 100%;
  height: auto;
`

export const ContImgMalt = styled.div`
  position: absolute;
  bottom: 100px;
  width: 400px;
  height: 300px;
  left: 70%;
  z-index: 1;
`

export const ImgMalt = styled.img`
  width: 100%;
  height: auto;
`
