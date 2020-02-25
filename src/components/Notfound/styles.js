import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyleNotFound = createGlobalStyle`
  .not-found{
    contain: content;
    @media(min-width: 1024px){
      contain: unset;
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
    margin-top: 20%;
    width: 160%;
    left: 5%;
    font: 42px 'Lato-Regular';
    text-shadow: 0px 0px 10px rgba(255,255,255,1);
  }
  @media(min-width: 1024px) and (max-width: 1215px){
    margin-top: 5%;
    width: 160%;
    left: 5%;
    font: 52px 'Lato-Regular';
    text-shadow: 0px 0px 10px rgba(255,255,255,1);
  }
  @media(min-width: 1216px) and (max-width: 1407px){
    margin-top: 5%;
    width: 130%;
    left: 5%;
    font: 52px 'Lato-Regular';
    text-shadow: 0px 0px 10px rgba(255,255,255,1);
  }
  @media(min-width: 1408px){
    margin-top: 5%;
    width: 110%;
    left: 5%;
    font: 52px 'Lato-Regular';
    text-shadow: 0px 0px 10px rgba(255,255,255,1);
  }
`
