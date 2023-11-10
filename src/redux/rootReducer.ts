import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@/redux/features/counter.slice';
import modalReducer from '@/redux/features/modal/modal.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  modal: modalReducer,
});
export default rootReducer;
