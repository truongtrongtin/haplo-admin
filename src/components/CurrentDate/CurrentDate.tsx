import React from "react";

import css from "./CurrentDate.module.css";

const currentDate = new Date().toLocaleString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function CurrentDate() {
  return <span className={css.date}>{currentDate}</span>;
}

export default CurrentDate;
