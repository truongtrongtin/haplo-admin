import React, { Fragment } from "react";

import css from "./Pagination.module.css";
import { ReactComponent as BackIcon } from "assets/icons/back.svg";
import { ReactComponent as BackHoverIcon } from "assets/icons/back-hover.svg";
import { ReactComponent as ForwardIcon } from "assets/icons/forward.svg";
import { ReactComponent as ForwardHoverIcon } from "assets/icons/forward-hover.svg";
import HoverIcon from "components/HoverIcon";

function Pagination() {
  return (
    <Fragment>
      <span className={css.pagesText}>Showing 1 - 17 out of 20</span>
      <HoverIcon
        component="button"
        normalIcon={BackIcon}
        hoverIcon={BackHoverIcon}
      />
      <HoverIcon
        component="button"
        normalIcon={ForwardIcon}
        hoverIcon={ForwardHoverIcon}
      />
    </Fragment>
  );
}

export default Pagination;
