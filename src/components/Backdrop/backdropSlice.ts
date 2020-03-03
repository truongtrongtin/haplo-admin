import { createSlice } from "@reduxjs/toolkit";

type backdropState = {
  open: boolean;
};

const initialState: backdropState = {
  open: false
};

const backdropSlice = createSlice({
  name: "backdrop",
  initialState,
  reducers: {
    showBackdrop(state) {
      state.open = true;
    },
    hideBackdrop(state) {
      state.open = false;
    }
  }
});

export const { showBackdrop, hideBackdrop } = backdropSlice.actions;
export default backdropSlice.reducer;
