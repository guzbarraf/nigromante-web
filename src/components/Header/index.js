import React, { Component } from 'react';
import { Container, Columns, Column } from 'bloomer';
import { ContLogo, ContNavBar, ContRedes, ContIcoMenu } from './styles';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { Redes } from '../Redes';

import NavFullscreenOverlay from "../NavFullscreenOverlay";

export default class Header extends Component {
//export const Header = () => {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <Container className="cont-header">
        <Columns className="columns-responsive">
          <Column isSize={{mobile: 6, tablet: 6, desktop: 2, widescreen: 2 }}>
            <ContLogo>
              <Logo/>
            </ContLogo>
          </Column>
          <Column isSize={{ mobile: 6, desktop: 0.5, widescreen: 2.5 }} className="no-display-mobile">
            &nbsp;
          </Column>
          <Column isSize={{ desktop: 8, widescreen: 6 }} className="no-display-mobile">
            <ContNavBar>
              <NavBar/>
            </ContNavBar>
          </Column>
          <Column isSize={{ desktop: 1.5, widescreen: 1.5 }} className="no-display-mobile">
            <ContRedes>
              <Redes/>
            </ContRedes>
          </Column>
          <Column isSize={{ mobile: 6, tablet: 6 }} className="no-display-desk">
            <ContIcoMenu>
              <NavFullscreenOverlay />
            </ContIcoMenu>
          </Column>
        </Columns>
      </Container>
    )
  }
}