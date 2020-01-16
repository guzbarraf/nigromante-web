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
  .wrapper-pages{
    position: relative;
    height: calc(100vh - 132px);
    bottom: 0;
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

  .cont-home{
    height: calc(100vh - 148px);
  }
  .cont-home > .column{
    height: 100%;
    overflow: hidden;
  }

`