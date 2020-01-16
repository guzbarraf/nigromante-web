import React from 'react';
import { Container, Columns, Column } from 'bloomer';
import { ContLogo, ContNavBar } from './styles';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { Redes } from '../Redes';

export const Header = () => {
  return (
    <Container className="cont-header">
      <Columns isVCentered>
        <Column isSize={{mobile: 4, desktop: 2 }}>
          <ContLogo>
            <Logo/>
          </ContLogo>
        </Column>
        <Column isSize={{mobile: 0, desktop: 2.5 }}>
          &nbsp;
        </Column>
        <Column isSize={{mobile: 0, desktop: 6 }}>
          <ContNavBar>
            <NavBar/>
          </ContNavBar>
        </Column>
        <Column isSize={{mobile: 0, desktop: 1.5 }}>
          <Redes/>
        </Column>
      </Columns>
    </Container>
  )
}