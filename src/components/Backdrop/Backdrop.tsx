import React from "react";

import css from "./Backdrop.module.css";

type BackdropProps = {
  open?: boolean;
};

function Backdrop({ open = false }: BackdropProps) {
  return <div className={`${css.backdrop} ${open && css.open}`} />;
}

export default Backdrop;
