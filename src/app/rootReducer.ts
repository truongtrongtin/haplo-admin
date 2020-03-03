import { combineReducers } from "@reduxjs/toolkit";
import backdropReducer from "../components/Backdrop/backdropSlice";
import toastReducer from "../components/Toast/toastSlice";

const rootReducer = combineReducers({
  backdrop: backdropReducer,
  toast: toastReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
