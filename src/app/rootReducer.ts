import { combineReducers } from "@reduxjs/toolkit";
import backdropReducer from "../components/Backdrop/backdropSlice";
import toastReducer from "../components/Toast/toastSlice";
import resetPasswordReducer from "../pages/ResetPassword/resetPasswordSlice";

const rootReducer = combineReducers({
  backdrop: backdropReducer,
  toast: toastReducer,
  resetPassword: resetPasswordReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
