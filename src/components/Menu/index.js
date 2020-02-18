import React, { Component } from 'react';
import { GlobalStyleMenu, ContMenuMobile, ContIcoXMenu, Nav, Link } from './styles'
import { Container, Columns, Column } from 'bloomer';
import { Logo } from '../Logo';
import { IcoXMenu } from '../Menu/ico-x-menu';
import { ContLogo } from '../Header/styles';

export default class Menu extends Component {
  handleMenuClose = () => {
    let el = document.getElementById('ContMenuMobile');
    el.classList.remove("menu-show");
    el.classList.add("menu-hidde");
    console.log('handleMenuClose')
  };

  render(){
    return (
      <ContMenuMobile id="ContMenuMobile">
        <GlobalStyleMenu/>
        <Container className="cont-header">
          <Columns className="columns-responsive">
            <Column isSize={{mobile: 6, tablet: 6 }}>
              <ContLogo>
                <Logo/>
              </ContLogo>
            </Column>
            <Column isSize={{ mobile: 6, tablet: 6 }} className="no-display-desk">
              <ContIcoXMenu>
                <IcoXMenu onClick={this.handleMenuClose} />
              </ContIcoXMenu>
            </Column>
          </Columns>
        </Container>
        <Container>
          <Columns>
            <Column>
              <Nav>
                <Link to='/'>Inicio</Link>
                <Link to='/posiones'>Posiones</Link>
                <Link to='/donde'>Dónde estamos</Link>
                <Link to='/contacto'>Contacto</Link>
              </Nav>
            </Column>
          </Columns>
        </Container>
      </ContMenuMobile>
    )
  }
}
