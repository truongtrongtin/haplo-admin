import React from "react";

import { ReactComponent as FilterIcon } from "assets/icons/filter.svg";
import { ReactComponent as FilterHoverIcon } from "assets/icons/filter-on-hover.svg";
import { ReactComponent as CreateIcon } from "assets/icons/create.svg";
import { ReactComponent as CreateHoverIcon } from "assets/icons/create-hover.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search-grey.svg";
import { ReactComponent as SearchHoverIcon } from "assets/icons/search-black.svg";
import HoverIcon from "components/HoverIcon";

function TableAction() {
  return (
    <div>
      <HoverIcon
        component="button"
        normalIcon={FilterIcon}
        hoverIcon={FilterHoverIcon}
      />
      <HoverIcon
        component="button"
        normalIcon={SearchIcon}
        hoverIcon={SearchHoverIcon}
      />
      <HoverIcon
        component="button"
        normalIcon={CreateIcon}
        hoverIcon={CreateHoverIcon}
      />
    </div>
  );
}

export default TableAction;
