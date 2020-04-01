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
  
  .help_display_no{
    display: none;
  }
  .help_display_si{
    display: block;
  }
  
  .btn-enviar{
    background-color: #E30D18 !important;
    border: #a20910 !important;
    color: #333434 !important;
  }
  .btn-enviar:hover{
    background-color: #333434 !important;
    color: #E30D18 !important;
  }
  #modal-content-msg{
    width: 100%;
    min-height: 200px;
    background-color: #333434;
    font: 48px 'FTYIRONHORSENCV';
    color: #E30D18;
    text-shadow: 0 0 8px rgba(227, 13, 24, 1);
    
    display: flex;
    align-items: center;
    justify-content: center;
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


