import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyleContacto = createGlobalStyle`
  .contact{
    contain: content;
    height: 100%;
    
    @media(min-width: 300px) and (max-width: 1024px){
      contain: unset;
    }
    @media(min-width: 1024px){
      contain: unset;
    }
  }
  .cont-contact{
    position: relative;
    height: 100%;
    padding-top: 150px;
    
    @media(min-width: 300px) and (max-width: 1024px){
      padding-top: 0px;
    }
  }
  
  .cont-imagen{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
`

export const ContImage = styled.div`
  position: relative;
  width: 60%;
  height: auto;
  bottom: 0;
  
`


export const ContForm = styled.div`
  position: relative;
`


