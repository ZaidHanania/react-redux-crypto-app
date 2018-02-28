import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrencies, fetchCurrencyData } from '../actions';

class CryptoList extends Component {
  constructor(props) {
    super(props);

    this.addCurrency = this.addCurrency.bind(this)
  }

  componentDidMount() {
    this.props.fetchCurrencies();
  }

  addCurrency(currency) {
    if (!this.props.selected[currency.code]) {
      this.props.fetchCurrencyData(currency.code);
    }
  }

  renderListItem(currency) {
    const className = `list-group-item list-hover ${this.props.selected[currency.code] ? 'list-active' : ''}`;
    return(
      <li
        className={className}
        key={currency.code}
        currency={currency}
        onClick={() => this.addCurrency(currency)}
      >
        {currency.name} ({currency.code})
      </li>
    );
  }

  render() {
    return(
      <div>
        <ul className="list-group side-list">
          <li className="list-group-item list-title">Popular</li>
          {this.props.popular.map(c => this.renderListItem(c))}
          <li className="list-group-item list-title">All</li>
          {this.props.all.map(c => this.renderListItem(c))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popular: state.popularCurrencies,
    all: state.allCurrencies,
    selected: state.selectedCurrencies
  }
}

export default connect(mapStateToProps, { fetchCurrencies, fetchCurrencyData })(CryptoList);