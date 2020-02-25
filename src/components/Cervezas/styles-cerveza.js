import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyleCerveza = createGlobalStyle`
  .layout{
    contain: none !important;
  }
  .cerveza{
    contain: content;
    
    @media(min-width: 300px) and (max-width: 1024px){
      contain: unset;
    }
    @media(min-width: 1024px){
      contain: unset;
    }
  }
  .cont-cerveza{
    position: relative;
    padding-top: 50px;
    
    @media(min-width: 300px) and (max-width: 1024px){
      padding-top: 0px;
    }
  }
`


export const TitleBeer = styled.div`
  position: absolute;
  width: 350px;
  top: 50px;
  color: #FFFFFF;
  font: 200px FTYIRONHORSENCV;
  text-shadow: 0 0 8px rgba(255,255,255,1);
  text-align: center;
  
  @media(min-width: 300px) and (max-width: 1023px){
    font: 60px FTYIRONHORSENCV;
  }
  @media(min-width: 1024px) and (max-width: 1215px){
    font: 200px FTYIRONHORSENCV;
  }
`

export const ContBeer = styled.div`
  position: relative;
  width: auto !important;
  max-width: none;
  height: 100%;
  display: flex;
  justify-content: center;
  vertical-align: center;
  
  @media(min-width: 300px) and (max-width: 1024px){
    padding-top: 50px;
  }
`

export const ImgBeer = styled.img`
  width: 80%;
  height: auto;
  
  @media(min-width: 300px) and (max-width: 767px){
    width: 70%;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    width: 50%;
  }
`
export const LabelNumberBeer = styled.div`
  position: relative;
  top: 80%;
  font: 150px FTYIRONHORSENCV;
  color: #FFFFFF;
  text-align: center;
  opacity: 0.1;
`
export const LabelTitle = styled.div`
  position: relative;
  margin-top: 50px;
  font: 60px FTYIRONHORSENCV;
  color: #FFFFFF;
  text-align: center;
`
export const IcoDesc = styled.div`
  position: relative;
  font: 60px FTYIRONHORSENCV;
  color: #FFFFFF;
  text-align: center;
`
export const NameBeer = styled.h1`
  position: relative;
  margin-bottom: 15px;
  font: 38px FTYIRONHORSENCV;
  color: #FFFFFF;
`
export const TextDesc = styled.div`
  position: relative;
  font: 24px Lato-Regular;
  color: #FFFFFF;
`

export const BeerDetails = styled.div`
  position: relative;
  border-top: 1px solid #E30D18;
  border-bottom: 1px solid #E30D18;
`

export const BeerDetailsLabel = styled.div`
  margin-bottom: 15px;
  font: 18px Lato-Regular;
  color: #E30D18;
  text-align: center;
`
export const BeerDetailsText = styled.div`
  margin-bottom: 15px;
  font: 18px Lato-Bold;
  color: #FFFFFF;
  text-align: center;
`
export const BeerDetailsTextGlass = styled.div`
  position: relative;
  top: 20%;
  font: 18px Lato-Bold;
  color: #FFFFFF;
  text-align: center;
`

export const ContImgAvailable = styled.div`
  position: relative;
  bottom: 0;
  text-align: center;
`
export const ContImgGlass = styled.div`
  position: relative;
  top: 16%;
  text-align: center;
`

export const ImgAvailable = styled.img`
  width: 15%;
  height: auto;
  margin-bottom: 15px;
  
  @media(min-width: 300px) and (max-width: 767px){

  }
  @media(min-width: 768px) and (max-width: 1024px){

  }
`
export const ImgGlass = styled.img`
  width: 20%;
  height: auto;
  margin-bottom: 5px;
  
  @media(min-width: 300px) and (max-width: 767px){

  }
  @media(min-width: 768px) and (max-width: 1024px){

  }
`
export const BeerTastingLabel = styled.div`
  margin-bottom: 15px;
  font: 18px Lato-Regular;
  color: #E30D18;
  text-align: left;
`
export const BeerTastingText = styled.div`
  margin-bottom: 15px;
  font: 18px Lato-Bold;
  color: #FFFFFF;
  text-align: left;
`
export const ImgPairing = styled.img`
  width: 100%;
  height: auto;
`
export const LabelPairing = styled.div`
  margin-top: 15px;
  margin-bottom: 50px;
  font: 18px Lato-Bold;
  color: #FFFFFF;
  text-align: center;
`
