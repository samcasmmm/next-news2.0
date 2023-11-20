import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '@/redux/features/counter.slice';
import modalReducer from '@/redux/features/modal/modal.slice';
import uiStateReducer from './features/ui.slice';

const rootReducer = combineReducers({
  counter: counterReducer,
  modal: modalReducer,
  uiState: uiStateReducer,
});
export default rootReducer;
