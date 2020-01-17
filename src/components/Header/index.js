import React, { Component } from 'react';
import { Container, Columns, Column } from 'bloomer';
import { GlobalStyleHeader, ContLogo, ContNavBar, ContRedes, ContIcoMenu } from './styles';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { Redes } from '../Redes';

import { IcoMenu } from '../Menu/ico-menu';

export default class Header extends Component {
//export const Header = () => {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  handleMenu = () => {
    /*this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
    let cls = this.state.showMenu ? "menu-show" : "menu-hidde";
    let el = document.getElementById('ContMenuMobile');
    el.classList.remove("menu-show");
    el.classList.remove("menu-hidde");
    el.classList.add(cls);
    console.log(`State showMenu => ${this.state.showMenu}`);*/
    let el = document.getElementById('ContMenuMobile');
    el.classList.remove("menu-hidde");
    el.classList.add("menu-show");
    console.log('handleMenu')
  }

  render(){
    return (
      <Container className="cont-header">
        <GlobalStyleHeader/>
        <Columns className="columns-responsive">
          <Column isSize={{mobile: 6, tablet: 6, desktop: 2, widescreen: 2 }}>
            <ContLogo>
              <Logo/>
            </ContLogo>
          </Column>
          <Column isSize={{ mobile: 6, desktop: 2.5, widescreen: 2.5 }} className="no-display-mobile">
            &nbsp;
          </Column>
          <Column isSize={{ desktop: 6, widescreen: 6 }} className="no-display-mobile">
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
              <IcoMenu onClick={this.handleMenu} />
            </ContIcoMenu>
          </Column>
        </Columns>
      </Container>
    )
  }
}