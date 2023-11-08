import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@/redux/slices/counter.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
});
export default rootReducer;
