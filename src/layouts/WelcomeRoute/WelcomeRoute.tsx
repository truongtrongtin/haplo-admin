import React from "react";
import { Route } from "react-router-dom";

import css from "./WelcomeRoute.module.css";
import girl from "../../assets/images/girl.jpg";
import logo from "../../assets/images/logo-northgate.png";

type WelcomeLayoutProps = { children: React.ReactNode };

function WelcomeLayout({ children }: WelcomeLayoutProps) {
  return (
    <div className={css.root}>
      <div className={css.leftWrapper}>
        <img className={css.signInImg} src={girl} alt="sign-in" />
        <img className={css.logo} src={logo} alt="logo" />
      </div>
      <div className={css.rightWrapper}>{children}</div>
    </div>
  );
}

function DashboardRoute({ component: Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <WelcomeLayout>
          <Component {...matchProps} />
        </WelcomeLayout>
      )}
    />
  );
}

export default DashboardRoute;
