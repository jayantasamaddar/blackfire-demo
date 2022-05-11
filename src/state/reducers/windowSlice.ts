import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WindowState {
  width: number;
}

const initialState: WindowState = {
  width: window.innerWidth,
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    getWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
  },
});

export const windowActions = windowSlice.actions;

export default windowSlice;
