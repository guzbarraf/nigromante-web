import React from 'react';
import {Link} from "@reach/router";
import { Columns, Column } from 'bloomer';
import { ContBeer, GlobalStyleCervezas, ImgBeer, TitleBeer } from './styles';
import { TextTitle } from "../../styles/GlobalStyles";

import beers from '../../data/beers.json'


export const CervezasComp = () => {
  return (
    <div className="cervezas">
      <GlobalStyleCervezas/>
      <TextTitle>Posiones</TextTitle>

      <Columns isVCentered className="cont-cervezas">
        <Column isSize={{mobile: 0, tablet: 0, desktop: .5 }}>&nbsp;</Column>
        {
          beers.map((beer, i) => {
            return (
              <Column isSize={{mobile: 12, tablet: 12, desktop: "1/4" }} key={i}>
                <ContBeer>
                  <Link to={`/cerveza/${beer.url}`}>
                    <ImgBeer src={require(`../../assets/beers/${beer.img}`)} alt={`${beer.name} - ${beer.style}`} />
                  </Link>
                </ContBeer>
                <TitleBeer>{beer.name}</TitleBeer>
              </Column>
            );
          })
        }
        <Column isSize={{mobile: 0, tablet: 0, desktop: .5 }}>&nbsp;</Column>
      </Columns>

    </div>
  )
}