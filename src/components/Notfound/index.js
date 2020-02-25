import React from 'react';
import { Columns, Column } from 'bloomer';
import { GlobalStyleNotFound, ContLema } from './styles';

export const NotFoundComp = () => {
  return (
    <div className="not-found">
      <GlobalStyleNotFound/>
      <Columns className="cont-home" isVCentered>
        <Column isSize={{mobile: 12, desktop: "1/2" }} className="overflow-unset">
          <ContLema>
            No se encuentra la página
          </ContLema>
        </Column>
      </Columns>
    </div>
  )
}