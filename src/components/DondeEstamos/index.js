import React from 'react';
import { Columns, Column } from 'bloomer';
import { GlobalStyleDondeEstamos, ContCliente, ImgCliente, TitleCliente, DescCliente, DirCliente } from './styles';
import { TextTitle } from "../../styles/GlobalStyles";

import clientes from '../../data/donde-estamos.json'

const handleMaps = (url) => {
  window.open(url);
}

export const DondeComp = () => {
  return (
    <div className="donde-estamos">
      <GlobalStyleDondeEstamos/>
      <TextTitle>Donde Estamos</TextTitle>

      <div className="cont-donde-estamos">
        <Columns isMultiline>
          {
            clientes.map((cliente, i) => {
              return (
                <Column isSize={{mobile: 6, tablet: 4, desktop: 3 }} key={i} className="cont-cliente">
                  <ContCliente>
                    <ImgCliente src={require(`../../assets/donde-estamos/${cliente.img}`)} alt={`${cliente.name}`} />
                  </ContCliente>
                  <TitleCliente>{cliente.name}</TitleCliente>
                  <DescCliente>{cliente.desc}</DescCliente>
                  <DirCliente>
                    <div onClick={() => handleMaps(cliente.maps)}>
                      {cliente.dir}
                    </div>
                  </DirCliente>
                </Column>
              );
            })
          }
        </Columns>
      </div>
    </div>
  )
}