import { createGlobalStyle } from 'styled-components'
import '../fonts/Lato-Regular.ttf';

export const GlobalFonts = createGlobalStyle`
  @font-face {
      font-family: 'Lato-Regular';
      src: url('Lato-Regular.eot');
      src: local('Lato Regular'), local('Lato-Regular'),
          url('Lato-Regular.eot?#iefix') format('embedded-opentype'),
          url('Lato-Regular.woff2') format('woff2'),
          url('Lato-Regular.woff') format('woff'),
          url('Lato-Regular.ttf') format('truetype'),
          url('Lato-Regular.svg#Lato-Regular') format('svg');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
    font-family: 'Lato-Bold';
    src: url('Lato-Bold.eot');
    src: local('Lato Bold'), local('Lato-Bold'),
        url('Lato-Bold.eot?#iefix') format('embedded-opentype'),
        url('Lato-Bold.woff2') format('woff2'),
        url('Lato-Bold.woff') format('woff'),
        url('Lato-Bold.ttf') format('truetype'),
        url('Lato-Bold.svg#Lato-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
      font-family: 'Lato-Black';
      src: url('Lato-Black.eot');
      src: local('Lato Black'), local('Lato-Black'),
          url('Lato-Black.eot?#iefix') format('embedded-opentype'),
          url('Lato-Black.woff2') format('woff2'),
          url('Lato-Black.woff') format('woff'),
          url('Lato-Black.ttf') format('truetype'),
          url('Lato-Black.svg#Lato-Black') format('svg');
      font-weight: 900;
      font-style: normal;
  }
  @font-face {
    font-family: 'FTY-IRONHORSE-NCV';
    src: url('FTYIRONHORSENCV.eot');
    src: local('FTY IRONHORSE NCV'), local('FTYIRONHORSENCV'),
        url('FTYIRONHORSENCV.eot?#iefix') format('embedded-opentype'),
        url('FTYIRONHORSENCV.woff2') format('woff2'),
        url('FTYIRONHORSENCV.woff') format('woff'),
        url('FTYIRONHORSENCV.ttf') format('truetype'),
        url('FTYIRONHORSENCV.svg#FTYIRONHORSENCV') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`