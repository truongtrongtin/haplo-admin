import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { RootState } from "app/rootReducer";

import { hideToast } from "./toastSlice";

const Toast = () => {
  const dispatch = useDispatch();
  const { open, severity, message }: any = useSelector(
    (state: RootState) => state.toast
  );
  const onClose = () => dispatch(hideToast());

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert variant="filled" severity={severity} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
