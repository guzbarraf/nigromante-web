import React, { Component, Fragment } from 'react';
import { Container, Columns, Column } from 'bloomer';
import { GlobalStyleNavFullscreen, Nav, Link } from "./styles";

import { Logo } from '../Logo/index';

import { IcoMenu } from "./ico-menu";
import { IcoCloseMenu } from "./ico-close-menu";
import { ContIcoCloseMenu } from "./styles";
import { ContLogo } from "../Header/styles";

export default class NavFullscreenOverlay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  handleMenu = () => {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
    //console.log(`State showMenu => ${this.state.showMenu}`);

    let el;
    let cls;

    setTimeout(
      function() {
        el = document.getElementById('nav-fullscreen');
        el.classList.remove("nav-fullscreen-show");
        el.classList.remove("nav-fullscreen-hidden");

        cls = this.state.showMenu ? "nav-fullscreen-show" : "nav-fullscreen-hidden";
        el.classList.add(cls);

        this.state.showMenu ? document.getElementById("nav-fullscreen").style.height = "100%" : document.getElementById("nav-fullscreen").style.height = "0%";

      }
      .bind(this),
      100
    );
  }

  render(){
    return (
      <Fragment>
        <GlobalStyleNavFullscreen/>

        <IcoMenu onClick={this.handleMenu}/>

        <div id="nav-fullscreen" className="nav-fullscreen-hidden">
          <Container className="cont-nav-fullscreen">
            <Columns className="columns-responsive">
              <Column isSize={{mobile: 6, tablet: 6, desktop: 6, widescreen: 6 }}>
                <ContLogo>
                  <Logo/>
                </ContLogo>
              </Column>
              <Column isSize={{mobile: 6, tablet: 6, desktop: 6, widescreen: 6 }}>
                <ContIcoCloseMenu>
                  <IcoCloseMenu onClick={this.handleMenu}/>
                </ContIcoCloseMenu>
              </Column>
            </Columns>
          </Container>
          <Container className="cont-nav-fullscreen">
            <Columns className="columns-responsive">
              <Column isSize={{mobile: 6, tablet: 6, desktop: 6, widescreen: 6 }}>
                <Nav>
                  <Link to="/" onClick={() => this.handleMenu()}>Inicio</Link>
                  <Link to="/posiones" onClick={() => this.handleMenu()}>Posiones</Link>
                  <Link to="/donde" onClick={() => this.handleMenu()}>Donde Estamos</Link>
                  <Link to="/contacto" onClick={() => this.handleMenu()}>Contacto</Link>
                </Nav>
              </Column>
              <Column isSize={{mobile: 6, tablet: 6, desktop: 6, widescreen: 6 }}>

              </Column>
            </Columns>
          </Container>
        </div>
      </Fragment>
    )
  }
}