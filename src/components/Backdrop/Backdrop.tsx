import React from "react";
import { useSelector } from "react-redux";

import css from "./Backdrop.module.css";
import { RootState } from "../../app/rootReducer";

function Backdrop() {
  const open = useSelector((state: RootState) => state.backdrop.open);

  return <div className={`${css.backdrop} ${open && css.open}`} />;
}

export default Backdrop;
