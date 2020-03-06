import React from "react";
import { Route, Redirect } from "react-router-dom";

import css from "./DashboardRoute.module.css";
import SideBar from "../../components/SideBar";
import RecentActivity from "../../components/RecentActivity";

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

const DashboardRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={matchProps =>
      localStorage.getItem("user") ? (
        <DashboardLayout>
          <Component {...matchProps} />
        </DashboardLayout>
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: matchProps.location } }}
        />
      )
    }
  />
);

export default DashboardRoute;
