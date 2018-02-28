import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrencyData } from '../actions';
import CryptoData from './crypto_data';

const TIME_INTERVAL = 30000;

class SelectedCryptoList extends Component {
  constructor(props) {
    super(props);

    this.updatePrices = this.updatePrices.bind(this);
  }

  componentDidMount() {
    this.props.popular.map(c => this.props.fetchCurrencyData(c.code));
    setInterval(this.updatePrices, TIME_INTERVAL);
  }

  updatePrices() {
    _.map(this.props.selected, c => this.props.fetchCurrencyData(c.base));
  }

  renderCurrencyData(currency) {
    return (
      <CryptoData key={currency.base} currency={currency} />
    );
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.error !== nextProps.error) {
      alert(nextProps.error.error);
    }
  }

  render() {
    const ordered = _.sortByOrder(_.values(this.props.selected), ['base']);
    return(
      <div className="dashboard">
        <div className="grid">
          {ordered.map(c => this.renderCurrencyData(c))}
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selected: state.selectedCurrencies,
    popular: state.popularCurrencies,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchCurrencyData })(SelectedCryptoList);