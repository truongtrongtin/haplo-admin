import { combineReducers } from "@reduxjs/toolkit";
import backdropReducer from "../components/Backdrop/backdropSlice";

const rootReducer = combineReducers({
  backdrop: backdropReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
