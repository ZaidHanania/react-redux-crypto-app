import { FETCH_CURRENCY_DATA } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CURRENCY_DATA:
      return {[action.payload.data.ticker.base] : action.payload.data.ticker, ...state};
    default:
      return state;
  }
}