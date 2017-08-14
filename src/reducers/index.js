import { combineReducers } from 'redux';
import { revenueReducer } from './revenueReducer';
import { expensesReducer } from './expensesReducer';

const rootReducer = combineReducers({
  revenueReducer,
  expensesReducer
});


export default rootReducer;
