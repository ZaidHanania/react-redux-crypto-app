import axios from 'axios';

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_CURRENCY_DATA = 'FETCH_CURRENCY_DATA';
export const FETCH_CURRENCY_DATA_FAILURE = 'FETCH_CURRENCY_DATA_FAILURE';
export const REMOVE_CURRENCY = 'REMOVE_CURRENCY';

const ROOT_URL = 'https://www.cryptonator.com/api';

export function fetchCurrencies() {
  const request = axios.get(`${ROOT_URL}/currencies`);
  
  return function (dispatch) {
    return request.then(
      result => {
        if (result.data.rows) {
          dispatch({
            type: FETCH_CURRENCIES,
            payload: result
          });
        }
      }
    );
  }
}

export function fetchCurrencyData(code) {
  const request = axios.get(`${ROOT_URL}/full/${code}-usd`);

  return function (dispatch) {
    return request.then(
      result => {
        if (result.data.success) {
          dispatch({
            type: FETCH_CURRENCY_DATA,
            payload: result
          });
        } else {
          dispatch({
            type: FETCH_CURRENCY_DATA_FAILURE,
            payload: result.data.error
          });
        }
      }
    );
  }
}

export function removeCurrency(code) {
  return {
    type: REMOVE_CURRENCY,
    payload: code
  }
}