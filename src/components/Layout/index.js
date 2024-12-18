import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'bloomer';
import { GlobalStyleLayout } from './styles';
import Menu from '../Menu';

export default class Layout extends Component {
  render(){
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    const children = this.props.children;

    return (
      <div className="layout">
        <GlobalStyleLayout/>
        <Helmet>
          {title && <title>{title} | Nigromante Brewing</title>}
          {subtitle && <meta name='description' content={subtitle} />}
        </Helmet>
        <Container className="wrapper-pages">
          {children}
        </Container>
        <Menu/>
      </div>
    )
  }
}