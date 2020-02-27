import React, { Fragment } from "react";

import css from "./Pagination.module.css";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as BackHoverIcon } from "../../assets/icons/back-hover.svg";
import { ReactComponent as ForwardIcon } from "../../assets/icons/forward.svg";
import { ReactComponent as ForwardHoverIcon } from "../../assets/icons/forward-hover.svg";

function Pagination() {
  return (
    <Fragment>
      <span className={css.pagesText}>Showing 1 - 17 out of 20</span>
      <button className={css.iconButton}>
        <BackIcon className={css.normalIcon} />
        <BackHoverIcon className={css.hoverIcon} />
      </button>
      <button className={css.iconButton}>
        <ForwardIcon className={css.normalIcon} />
        <ForwardHoverIcon className={css.hoverIcon} />
      </button>
    </Fragment>
  );
}

export default Pagination;
