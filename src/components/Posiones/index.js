import React from 'react';
import { Columns, Column } from 'bloomer';
import { ContBeer, GlobalStylePoisons, ImgBeer, TitleBeer } from './styles';
import { TextTitle } from "../../styles/GlobalStyles";

import beers from '../../data/beers.json'

export const PoisonsComp = () => {
  return (
    <div className="poisons">
      <GlobalStylePoisons/>
      <TextTitle>Posiones</TextTitle>

      <Columns isVCentered className="cont-poisons">
        <Column isSize={{mobile: 0, tablet: 0, desktop: .5 }}>&nbsp;</Column>
        {
          beers.map((beer, i) => {
            return (
              <Column isSize={{mobile: 12, tablet: 12, desktop: "1/4" }} key={i}>
                <ContBeer>
                  <ImgBeer src={require(`../../assets/beers/${beer.img}`)} alt={`${beer.name} - ${beer.style}`} />
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