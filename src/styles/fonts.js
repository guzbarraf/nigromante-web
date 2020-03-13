import { createGlobalStyle } from 'styled-components'

import LatoRegularEot from '../fonts/Lato-Regular.eot';
import LatoRegularTtf from '../fonts/Lato-Regular.ttf';
import LatoRegularWoff from '../fonts/Lato-Regular.woff';
import LatoRegularWoff2 from '../fonts/Lato-Regular.woff2';
import LatoRegularSvg from '../fonts/Lato-Regular.svg';

import LatoBoldEot from '../fonts/Lato-Bold.eot';
import LatoBoldTtf from '../fonts/Lato-Bold.ttf';
import LatoBoldWoff from '../fonts/Lato-Bold.woff';
import LatoBoldWoff2 from '../fonts/Lato-Bold.woff2';
import LatoBoldSvg from '../fonts/Lato-Bold.svg';

import LatoBlackEot from '../fonts/Lato-Black.eot';
import LatoBlackTtf from '../fonts/Lato-Black.ttf';
import LatoBlackWoff from '../fonts/Lato-Black.woff';
import LatoBlackWoff2 from '../fonts/Lato-Black.woff2';
import LatoBlackSvg from '../fonts/Lato-Black.svg';

import FTYIRONHORSENCVEot from '../fonts/FTYIRONHORSENCV.eot';
import FTYIRONHORSENCVTtf from '../fonts/FTYIRONHORSENCV.ttf';
import FTYIRONHORSENCVWoff from '../fonts/FTYIRONHORSENCV.woff';
import FTYIRONHORSENCVWoff2 from '../fonts/FTYIRONHORSENCV.woff2';
import FTYIRONHORSENCVSvg from '../fonts/FTYIRONHORSENCV.svg';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Lato-Regular';
    src: url(${LatoRegularEot});
    src: local('Lato Regular'), local('Lato-Regular'),
        url(${LatoRegularWoff2}) format('woff2'),
        url(${LatoRegularWoff}) format('woff'),
        url(${LatoRegularTtf}) format('truetype'),
        url('${LatoRegularSvg}#Lato-Regular') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Lato-Bold';
    src: url(${LatoBoldEot});
    src: local('Lato Bold'), local('Lato-Bold'),
        url(${LatoBoldWoff2}) format('woff2'),
        url(${LatoBoldWoff}) format('woff'),
        url(${LatoBoldTtf}) format('truetype'),
        url('${LatoBoldSvg}#Lato-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato-Black';
    src: url(${LatoBlackEot});
    src: local('Lato Black'), local('Lato-Black'),
        url('${LatoBlackEot}?#iefix') format('embedded-opentype'),
        url(${LatoBlackWoff2}) format('woff2'),
        url(${LatoBlackWoff}) format('woff'),
        url(${LatoBlackTtf}) format('truetype'),
        url('${LatoBlackSvg}#Lato-Black') format('svg');
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: 'FTY-IRONHORSE-NCV';
    src: url(${FTYIRONHORSENCVEot});
    src: local('FTY IRONHORSE NCV'), local('FTYIRONHORSENCV'),
        url('${FTYIRONHORSENCVEot}?#iefix') format('embedded-opentype'),
        url(${FTYIRONHORSENCVWoff2}) format('woff2'),
        url('${FTYIRONHORSENCVWoff}') format('woff'),
        url('${FTYIRONHORSENCVTtf}') format('truetype'),
        url('${FTYIRONHORSENCVSvg}#FTYIRONHORSENCV') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`