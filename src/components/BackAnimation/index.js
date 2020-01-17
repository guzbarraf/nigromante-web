import React, { Component } from 'react'
import { GlobalStyleBackAnimation } from './styles'

export default class BackAnimation extends Component {
  createDivs = () => {
    let divs = [];
    const n = "firefly-";
    for (let j = 0; j < 15; j++) {
      divs.push(<div className="firefly" key={n+j}></div>)
    }
    return divs;
  }
  render() {
    return (
      <div>
        <GlobalStyleBackAnimation/>
        {this.createDivs()}
      </div>
    )
  }
}