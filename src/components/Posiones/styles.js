import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStylePoisons = createGlobalStyle`
  .poisons{
    contain: content;
    
    @media(min-width: 300px) and (max-width: 1024px){
      contain: unset;
    }
    @media(min-width: 1024px){
      contain: unset;
    }
  }
  .cont-poisons{
    position: relative;
    padding-top: 50px;
    
    @media(min-width: 300px) and (max-width: 1024px){
      padding-top: 0px;
    }
  }
`

export const ContBeer = styled.div`
  position: relative;
  width: auto !important;
  max-width: none;
  height: 100%;
  padding-top: 150px;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  vertical-align: center;
  overflow: hidden;
  
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

export const TitleBeer = styled.div`
  position: relative;
  text-align: center;
  color: #FFFFFF;
  font: 24px FTYIRONHORSENCV;
  
  @media(min-width: 300px) and (max-width: 1024px){
    font: 60px FTYIRONHORSENCV;
  }
`