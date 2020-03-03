import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../app/store";
import { showToast } from "../../components/Toast/toastSlice";

import history from "../../app/history";
import { signInAPI, AuthInfo } from "../../api";

type AuthState = {
  signingIn: boolean;
  hasAccessToken: boolean;
  signInError: string;
};

const initialState: AuthState = {
  signingIn: false,
  hasAccessToken: Boolean(localStorage.getItem("accessToken")),
  signInError: ""
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInBegin(state) {
      state.signingIn = true;
    },
    signInSuccess(state) {
      state.hasAccessToken = true;
    },
    signInFailure(state, action: PayloadAction<string>) {
      state.signInError = action.payload;
    },
    signOut(state) {
      state.hasAccessToken = false;
    }
  }
});

export const {
  signInBegin,
  signInSuccess,
  signInFailure,
  signOut
} = auth.actions;
export default auth.reducer;

export const signIn = (authInfo: AuthInfo): AppThunk => async dispatch => {
  try {
    dispatch(signInBegin());
    const data = await signInAPI(authInfo);
    localStorage.setItem("user", JSON.stringify(data.user));
    dispatch(signInSuccess());
    history.push("/");
    dispatch(showToast({ message: "Success", severity: "success" }));
  } catch (err) {
    dispatch(signInFailure(err.message));
    dispatch(showToast({ message: err.message, severity: "error" }));
  }
};
