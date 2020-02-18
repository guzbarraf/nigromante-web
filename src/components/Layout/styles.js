import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyleLayout = createGlobalStyle`
  .layout{
    /*contain: content;*/
    @media(min-width: 1024px){
      contain: content;
    }
  }
  .wrapper-pages{
    position: relative;
    padding-top: 15px;
    height: calc(100vh - 132px);
    bottom: 0;
    @media(min-width: 1024px) and (max-width: 1999px){
      height: calc(100vh - 144px);
    }
  }
`

export const Div = styled.div`
  /*padding-top: 16px;*/
`
