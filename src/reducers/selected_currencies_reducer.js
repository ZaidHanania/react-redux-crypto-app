import { FETCH_CURRENCY_DATA } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_CURRENCY_DATA:
      return {...state, [action.payload.data.ticker.base] : action.payload.data.ticker};
    default:
      return state;
  }
}