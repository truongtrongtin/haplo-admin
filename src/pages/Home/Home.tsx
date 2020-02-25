import React from "react";

import css from "./Home.module.css";
import Sidebar from "../../components/SideBar/SideBar";
import RecentActivity from "../../components/RecentActivity/RecentActivity";
import { ReactComponent as ToggleButtonOn } from "../../assets/icons/toggle-on.svg";
import { ReactComponent as ToggleButtonOff } from "../../assets/icons/toggle-off.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-gray.svg";
import { ReactComponent as SearchHoverIcon } from "../../assets/icons/search-black.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as FilterHoverIcon } from "../../assets/icons/filter-on-hover.svg";
import { ReactComponent as CreateIcon } from "../../assets/icons/create.svg";
import { ReactComponent as CreateHoverIcon } from "../../assets/icons/create-hover.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import { ReactComponent as BackHoverIcon } from "../../assets/icons/back-hover.svg";
import { ReactComponent as ForwardIcon } from "../../assets/icons/forward.svg";
import { ReactComponent as ForwardHoverIcon } from "../../assets/icons/forward-hover.svg";

const currentDate = new Date().toLocaleString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
});

function Home() {
  return (
    <div className={css.wrapper}>
      <Sidebar />
      <div className={css.home}>
        <div className={css.welcome}>
          <h1 className={css.welcomeText}>
            Welcome back, <strong>Clement Terrence</strong>
          </h1>
          <span className={css.date}>{currentDate}</span>
        </div>
        <div className={css.breadcrumb}>
          <span className={css.company}>Companies (20)</span>
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
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Code</th>
              <th>Company Name</th>
              <th>Admin</th>
              <th>Amenities</th>
              <th>Portal Access</th>
              <th>Last Modified</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(17)].map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>NG001A</td>
                <td>Microsoft Corporation</td>
                <td>02</td>
                <td>
                  <ToggleButtonOff />
                </td>
                <td>
                  <ToggleButtonOn />
                </td>
                <td>Today, 30 mins ago</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={css.pages}>
          <span className={css.pagesText}>Showing 1 - 17 out of 20</span>
          <button className={css.iconButton}>
            <BackIcon className={css.normalIcon} />
            <BackHoverIcon className={css.hoverIcon} />
          </button>
          <button className={css.iconButton}>
            <ForwardIcon className={css.normalIcon} />
            <ForwardHoverIcon className={css.hoverIcon} />
          </button>
        </div>
      </div>
      <RecentActivity />
    </div>
  );
}

export default Home;
