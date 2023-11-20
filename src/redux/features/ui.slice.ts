import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/Store';

interface UiState {
  filterState: boolean;
}

const initialState: UiState = {
  filterState: false,
};

export const uiState = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    filterStateFn: (state, action: PayloadAction<boolean>) => {
      state.filterState = action.payload;
    },
  },
});

export const { filterStateFn } = uiState.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default uiState.reducer;
