import React from 'react';
import { Router } from '@reach/router';

import { GlobalStyle } from './styles/GlobalStyles'
import { GlobalFonts } from './styles/fonts';

import Header from './components/Header';

import { Home } from './pages/Home';
import { Posiones } from './pages/Posiones';
import { DondeEstamos } from './pages/DondeEstamos';
import { Contacto } from './pages/Contacto';
import { Notfound } from './pages/NotFound'


//function App() {
class App extends React.Component {

  render(){
    return (
      <div className="wrapper">
        <GlobalStyle />
        <GlobalFonts />
        <Header/>
        <Router>
          <Notfound default />
          <Home path='/' />
          <Posiones path='/posiones' />
          <DondeEstamos path='/donde' />
          <Contacto path='/contacto' />
        </Router>
      </div>
    );
  }
}

export default App;