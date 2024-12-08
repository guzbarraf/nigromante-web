import React from 'react';
import { Columns, Column } from 'bloomer';
import { GlobalStyleHome, ContLema, ContImgBeer, ImgBeer, ContImgHops, ImgHops, ContImgMalt, ImgMalt } from './styles';
import Huna from '../../assets/beers/huna-hop.png';
import Hops from '../../assets/hops.png';
import Malt from '../../assets/malta.png';

export const HomeComp = () => {
  return (
    <div className="home">
      <GlobalStyleHome/>
      <Columns className="cont-home" isVCentered>
        <Column isSize={{mobile: 12, desktop: "1/2" }} className="overflow-unset">
          <ContLema>
            Y regresarán a la vida después de probar nuestra cerveza.
          </ContLema>
        </Column>
        <Column isSize={{mobile: 12, desktop: "1/2" }}>
          <ContImgBeer>
            <ImgBeer src={Huna} />
          </ContImgBeer>
        </Column>
      </Columns>
      <ContImgHops>
        <ImgHops src={Hops} />
      </ContImgHops>
      <ContImgMalt>
        <ImgMalt src={Malt} />
      </ContImgMalt>
    </div>
  )
}