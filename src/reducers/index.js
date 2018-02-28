import { combineReducers } from 'redux';

import popularCurrenciesReducer from './popular_currencies_reducer';
import allCurrenciesReducer from './all_currencies_reducer';
import selectedCurrenciesReducer from './selected_currencies_reducer';
import errorReducer from './error_reducer';

const rootReducer = combineReducers({
  popularCurrencies: popularCurrenciesReducer,
  allCurrencies: allCurrenciesReducer,
  selectedCurrencies: selectedCurrenciesReducer,
  error: errorReducer
});

export default rootReducer;
