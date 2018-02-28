import axios from 'axios';

export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_CURRENCY_DATA = 'FETCH_CURRENCY_DATA';
export const REMOVE_CURRENCY = 'REMOVE_CURRENCY';

const ROOT_URL = 'https://www.cryptonator.com/api';

export function fetchCurrencies() {
  const request = axios.get(`${ROOT_URL}/currencies`);

  return {
    type: FETCH_CURRENCIES,
    payload: request
  }
}

export function fetchCurrencyData(code) {
  const request = axios.get(`${ROOT_URL}/full/${code}-usd`);

  return {
    type: FETCH_CURRENCY_DATA,
    payload: request
  }
}

export function removeCurrency(code) {
  return {
    type: REMOVE_CURRENCY,
    payload: code
  }
}