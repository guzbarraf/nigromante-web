import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyleHome = createGlobalStyle`
  .home{
    contain: content;
  }
  .cont-home{
    height: calc(100vh - 148px);
  }
  .cont-home > .column{
    height: 100%;
    overflow: hidden;
  }
  @media(min-width: 300px) and (max-width: 767px){
    .cont-home .column{
      position: absolute;
    }
  }
  @media(min-width: 1024px) and (max-width: 1215px){
    .home{
      margin-top: -20px;          
    }
  }
`



export const ContLema = styled.div`
  position: relative;
  margin-top: 20%;
  color: #FFFFFF;
  font: 50px 'Lato-Regular';
  text-shadow: 0px 0px 20px rgba(255, 255, 255, 1);
  
  @media(min-width: 300px) and (max-width: 768px){
    margin-top: 0%;
    width: 65%;
    font: 24px 'Lato-Regular';
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
  }
  @media (min-width: 769px) and (max-width: 1023px){
    margin-top: 0%;
    width: 65%;
    font: 32px 'Lato-Regular';
    text-shadow: 0px 0px 10px rgba(255, 255, 255, 1);
  }
  @media(min-width: 1024px) and (max-width: 1215px){
    width: 150%;
  }
`

export const ContImgBeer = styled.div`
  position: relative;
  top: 20%;
  width: 100%;
  max-width: 500px;
  height: auto;
  display: flex;
  aling-items: center;
  justify-content: center;
  z-index: 2;
  
  @media(min-width: 300px) and (max-width: 768px){
    position: absolute;
    width: auto;
    height: 60%;
    top: auto;
    bottom: 0;
  }
  @media(min-width: 769px) and (max-width: 1023px){
    position: absolute;
    width: auto;
    height: 60%;
    top: auto;
    bottom: 0;
  }
`

export const ImgBeer = styled.img`
  width: 70%;
  height: auto;
  
  @media(min-width: 300px) and (max-width: 1023px){
    width: auto;
    height: 100%;
  }
`

export const ContImgHops = styled.div`
  position: absolute;
  bottom: 0;
  width: 700px;
  height: 300px;
  left: 25%;
  overflow: hidden;
  z-index: 1;
  
  @media(min-width: 300px) and (max-width: 768px){
    width: 100%;
    height: auto;
    left: 30%;
  }
  @media(min-width: 769px) and (max-width: 1023px){
    width: 60%;
    height: auto;
    left: 30%;
  }
  @media(min-width: 1024px) and (max-width: 1215px){
    width: 70%;
    height: auto;
    left: 0%;
  }
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
  
  @media(min-width: 300px) and (max-width: 768px){
    width: 80%;
    height: auto;
    left: 65%;
    bottom: 30%;
  }
  @media(min-width: 769px) and (max-width: 1023px){
    width: 50%;
    height: auto;
    left: 60%;
    bottom: 25%;
  }
  @media(min-width: 1024px) and (max-width: 1215px){
    width: 60%;
    height: auto;
    left: 0%;
    bottom: 20%;
  }
`

export const ImgMalt = styled.img`
  width: 100%;
  height: auto;
`
