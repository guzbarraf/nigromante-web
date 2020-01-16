import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'bloomer';
import { Div } from './styles';

export default class Layout extends Component {
//export const Layout = ({ children, title, subtitle }) => {
  constructor(props, context){
    super(props, context);
  }
  componentWillMount(){
    console.log('esto es un componentWillMount');
  }
  render(){
    const title = this.props.title;
    const subtitle = this.props.subtitle;
    const children = this.props.children;

    return (
      <div>
        <Helmet>
          {title && <title>{title} | Nigromante Brewing</title>}
          {subtitle && <meta name='description' content={subtitle} />}
        </Helmet>
        <Container className="wrapper-pages">
          <Div>
            {children}
          </Div>
        </Container>
      </div>
    )
  }
}