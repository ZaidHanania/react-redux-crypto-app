import _ from 'lodash';
import { FETCH_CURRENCY_DATA, REMOVE_CURRENCY } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CURRENCY_DATA:
      return {...state, [action.payload.data.ticker.base] : action.payload.data.ticker};
    case REMOVE_CURRENCY:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}