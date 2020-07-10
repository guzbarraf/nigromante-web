import React from 'react';
import { Router, Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from "react-transition-group";


import { GlobalStyle } from './styles/GlobalStyles'
import { GlobalFonts } from './styles/fonts';

import Header from './components/Header';

import { Home } from './pages/Home';
import { Cervezas } from './pages/Cervezas'
import { Cerveza } from './pages/Cerveza';
import { DondeEstamos } from './pages/DondeEstamos';
import { Contacto } from './pages/Contacto';
import { Notfound } from './pages/NotFound'

function App() {
  return (
    <div className="wrapper">
      <GlobalStyle />
      <GlobalFonts />
      <Header/>

      <Location>
        {({ location }) => (
          <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              {/* the only difference between a router animation and
                  any other animation is that you have to pass the
                  location to the router so the old screen renders
                  the "old location" */}

              <Router location={location} className="router">
                <Notfound default />
                <Home path='/' />
                <Cervezas path='/cervezas' />
                <Cerveza path='/cerveza/:idBeer' />
                <DondeEstamos path='/donde' />
                <Contacto path='/contacto' />
              </Router>

            </CSSTransition>
          </TransitionGroup>
        )}
      </Location>




    </div>
  );
}

export default App;