import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@/redux/features/counter.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
});
export default rootReducer;
