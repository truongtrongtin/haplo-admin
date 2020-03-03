import React from "react";

import css from "./DashboardLayout.module.css";
import SideBar from "../SideBar";
import RecentActivity from "../RecentActivity";

type DashboardLayoutProps = { children: React.ReactNode };

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className={css.container}>
      <SideBar />
      {children}
      <RecentActivity />
    </div>
  );
}

export default DashboardLayout;
