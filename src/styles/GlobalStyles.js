import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: #191919;
    overscroll-behavior: none;
  }
  #root{
    height: 100vh;
  }
  .wrapper{
    height: 100%;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }

  .columns {
    margin-top: 0 !important;
  }
  .columns:not(:last-child) {
    margin-bottom: 0 !important;
  }
  .overflow-unset{
    overflow: unset !important;
  }

  @media(min-width: 300px) and (max-width: 1024px){
    .columns {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    .columns:last-child {
      margin-bottom: 0;
    }
  }
  @media(max-width: 768px){
    .column.is-5-mobile,
    .column.is-6-mobile{
      padding-top: .75rem;
      float: left;
    }
  }
  
  @media (max-width: 1023px){
    .columns-responsive{
      
    }
    .no-display-mobile{
      display: none;
    }
  }
  @media (min-width: 1024px){
    .no-display-desk{
      display: none;
    }
  }
`