import React, { Component } from 'react';

import CryptoList from './crypto_list';
import SelectedCryptoList from './selected_crypto_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <CryptoList />
        <SelectedCryptoList />
      </div>
    );
  }
}
