import React from "react";
import css from "./RecentActivity.module.css";

import { ReactComponent as RecentAmenitiesIcon } from "../../assets/icons/recentactivities-amenities.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as FilterHoverIcon } from "../../assets/icons/filter-on-hover.svg";
import HoverIcon from "../HoverIcon";

function RecentActivity() {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <span className={css.headerText}>Recent Activity</span>
        <HoverIcon
          component="button"
          normalIcon={FilterIcon}
          hoverIcon={FilterHoverIcon}
        />
        <div className={css.root}>ds</div>
      </div>
      {[...Array(20)].map((item, index) => (
        <div className={css.recentItem} key={index}>
          <span className={css.amenitiesIcon}>
            <RecentAmenitiesIcon />
          </span>
          <div className={css.recentContent}>
            <span className={css.activityName}>1 company added- Microsoft</span>
            <div className={css.user}>
              <UserIcon className={css.userIcon} />
              <span className={css.username}>Suraj Singh</span>
              <span className={css.time}>Just now</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;
