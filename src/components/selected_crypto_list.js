import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrencyData } from '../actions';
import CryptoData from './crypto_data';


class SelectedCryptoList extends Component {
  componentDidMount() {
    this.props.popular.map(c => this.props.fetchCurrencyData(c.code));
  }

  renderCurrencyData(currency) {
    return (
      <CryptoData key={currency.base} currency={currency} />
    );
  }

  render() {
    return(
      <div className="dashboard">
        <div className="grid">
          {_.map(this.props.selected, c => this.renderCurrencyData(c))}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selected: state.selectedCurrencies,
    popular: state.popularCurrencies
  }
}

export default connect(mapStateToProps, { fetchCurrencyData })(SelectedCryptoList);