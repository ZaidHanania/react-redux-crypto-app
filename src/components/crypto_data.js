import _ from 'lodash';
import React, { Component } from 'react';

export default class CryptoData extends Component {

  render() {
    const currency = this.props.currency;

    return (
      <div className="col crypto-data">
        <h3>{currency.base}</h3>
        <h5>{_.round(currency.price, 5)} USD</h5>
      </div>
    );
  }
}