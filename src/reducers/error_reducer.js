import { FETCH_CURRENCY_DATA_FAILURE } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_CURRENCY_DATA_FAILURE:
      return { error:action.payload };
    default:
      return state;
  }
}