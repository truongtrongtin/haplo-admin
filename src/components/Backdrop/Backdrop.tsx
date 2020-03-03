import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../app/rootReducer";
import css from "./Backdrop.module.css";

function Backdrop() {
  const { open } = useSelector((state: RootState) => state.backdrop);

  return <div className={`${css.backdrop} ${open && css.open}`} />;
}

export default Backdrop;
