import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { showToast } from "../../components/Toast/toastSlice";

import history from "../../app/history";
import { resetPasswordAPI } from "../../api";

type AuthState = {
  loading: boolean;
  success: boolean;
  error: string;
};

const initialState: AuthState = {
  loading: false,
  success: false,
  error: ""
};

const resetSlice = createSlice({
  name: "reset",
  initialState,
  reducers: {
    resetPasswordBegin(state) {
      state.loading = true;
    },
    resetPasswordSuccess(state) {
      state.success = true;
    },
    resetPasswordFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    }
  }
});

export const {
  resetPasswordBegin,
  resetPasswordSuccess,
  resetPasswordFailure
} = resetSlice.actions;
export default resetSlice.reducer;

export const resetPassword = (email: string): AppThunk => async dispatch => {
  try {
    dispatch(resetPasswordBegin());
    await resetPasswordAPI(email);
    dispatch(resetPasswordSuccess());
    history.push("/signin");
    dispatch(showToast({ message: "Sent", severity: "success" }));
  } catch (err) {
    dispatch(resetPasswordFailure(err.message));
    dispatch(showToast({ message: err.message, severity: "error" }));
  }
};
