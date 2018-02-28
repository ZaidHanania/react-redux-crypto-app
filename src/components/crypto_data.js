import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import { removeCurrency } from '../actions';

class CryptoData extends Component {
  renderArrow() {
    const change = this.props.currency.change;

    if (change > 0) {
      return(
        <FontAwesome
         name='chevron-up' 
         style={{ color: '#8de095' }}
         />
      );
    } else if (change < 0) {
      return(
        <FontAwesome
          name='chevron-down' 
          style={{ color: '#ed5353' }}
          />
      );
    } else {
      return(
        <FontAwesome
          name='ellipsis-h' 
          style={{ color: '#444' }}
          />
      );
    }
  }

  onClose(event) {
    event.preventDefault();
    this.props.removeCurrency(this.props.currency.base);
  }

  render() {
    const currency = this.props.currency;

    return (
      <div className="col crypto-data">
        <a href=""
          onClick={this.onClose.bind(this)}
          >
          <FontAwesome
            className="pull-right"
            name='times' 
            style={{ color: '#444' }}
            />
        </a>
        <h3>{currency.base} {this.renderArrow()}</h3>
        <h5>{_.round(currency.price, 5)} USD</h5>
        <h6 className="change">{_.round(currency.change/currency.price * 100, 3)}% Last Hour</h6>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currency: ownProps.currency
  };
}

export default connect(mapStateToProps, { removeCurrency })(CryptoData);