import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyleDondeEstamos = createGlobalStyle`
  .layout{
    contain: none !important;
  }
  .donde-estamos{
    contain: content;
    
    @media(min-width: 300px) and (max-width: 1024px){
      contain: unset;
    }
    @media(min-width: 1024px){
      contain: unset;
    }
  }
  .cont-donde-estamos{
    position: relative;
    padding-top: 150px;
    padding-bottom: 50px;
    
    @media(min-width: 300px) and (max-width: 767px){
      padding-top: 130px;
    }
    @media(min-width: 768px) and (max-width: 1024px){
      padding-top: 100px;
    }
  }
  .cont-cliente{
    @media(min-width: 300px) and (max-width: 767px){
      min-height: 375px;
    }
    @media(min-width: 768px) and (max-width: 1023px){
      min-height: 500px;
    }
    @media(min-width: 1024px) and (max-width: 2400px){
      min-height: 300px;
    }
  }
`

export const ContCliente = styled.div`
  position: relative;
  width: auto !important;
  max-width: none;
  height: 50%;
  padding-top: 50px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  vertical-align: center;
  overflow: hidden;
  
  @media(min-width: 300px) and (max-width: 1023px){
    height: 100%;
    padding-top: 50px;
  }
`

export const ImgCliente = styled.img`
  width: 100%;
  height: 100%;
  
  @media(min-width: 300px) and (max-width: 767px){
    width: 100%;
    height: auto;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    width: 100%;
    height: auto;
  }
`

export const TitleCliente = styled.div`
  font: 30px Lato-Bold;
  color: #FFFFFF;
  
  @media(min-width: 300px) and (max-width: 767px){
    font: 14px Lato-Bold;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    font: 20px Lato-Bold;
  }
`
export const DescCliente = styled.div`
  padding-top: 15px;
  font: 18px Lato-Regular;
  color: #FFFFFF;
  
  @media(min-width: 300px) and (max-width: 767px){
    font: 14px Lato-Regular;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    font: 18px Lato-Regular;
  }
`
export const DirCliente = styled.div`
  padding-top: 15px;
  font: 16px Lato-Regular;
  color: #E30D18;
  cursor: pointer;
  
  @media(min-width: 300px) and (max-width: 767px){
    font: 12px Lato-Regular;
  }
  @media(min-width: 768px) and (max-width: 1024px){
    font: 16px Lato-Regular;
  }
`