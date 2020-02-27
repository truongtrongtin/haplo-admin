import React from "react";

import css from "./TableAction.module.css";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as FilterHoverIcon } from "../../assets/icons/filter-on-hover.svg";
import { ReactComponent as CreateIcon } from "../../assets/icons/create.svg";
import { ReactComponent as CreateHoverIcon } from "../../assets/icons/create-hover.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-gray.svg";
import { ReactComponent as SearchHoverIcon } from "../../assets/icons/search-black.svg";

function TableAction() {
  return (
    <div>
      <button className={css.iconButton}>
        <FilterIcon className={css.normalIcon} />
        <FilterHoverIcon className={css.hoverIcon} />
      </button>
      <button className={css.iconButton}>
        <SearchIcon className={css.normalIcon} />
        <SearchHoverIcon className={css.hoverIcon} />
      </button>
      <button className={css.iconButton}>
        <CreateIcon className={css.normalIcon} />
        <CreateHoverIcon className={css.hoverIcon} />
      </button>
    </div>
  );
}

export default TableAction;
