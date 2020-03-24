import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type toastState = {
  open: boolean;
  severity: string;
  message: string;
};

type ToastLoaded = {
  message: string;
  severity: "success" | "error" | "warning" | "info";
};

const initialState: toastState = {
  open: false,
  severity: "",
  message: "",
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastLoaded>) => {
      state.open = true;
      state.severity = action.payload.severity;
      state.message = action.payload.message;
    },
    hideToast: state => {
      state.open = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
