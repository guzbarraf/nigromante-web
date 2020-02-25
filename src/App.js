import React from 'react';
import { Router } from '@reach/router';

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
      <Router>
        <Notfound default />
        <Home path='/' />
        <Cervezas path='/cervezas' />
        <Cerveza path='/cerveza/:idBeer' />
        <DondeEstamos path='/donde' />
        <Contacto path='/contacto' />
      </Router>
    </div>
  );
}

export default App;