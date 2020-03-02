import React from "react";

import css from "./Dashboard.module.css";
import SideBar from "../../components/SideBar";
import RecentActivity from "../../components/RecentActivity";
import Home from "../../pages/Home";

function Dashboard() {
  return (
    <div className={css.container}>
      <SideBar />
      <Home />
      <RecentActivity />
    </div>
  );
}

export default Dashboard;
