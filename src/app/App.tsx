import React, { Fragment } from "react";
import { Switch, Redirect } from "react-router-dom";

import Toast from "components/Toast";
import DashboardRoute from "layouts/DashboardRoute";
import WelcomeRoute from "layouts/WelcomeRoute";
import SignIn from "pages/SignIn";
import ResetPassword from "pages/ResetPassword";
import Company from "pages/Company";
import Amenity from "pages/Amenity";
import Backdrop from "components/Backdrop";

function App() {
  return (
    <Fragment>
      <Toast />
      <Switch>
        <Redirect exact from="/" to="/companies" />
        <WelcomeRoute path="/signin" component={SignIn} />
        <WelcomeRoute path="/reset" component={ResetPassword} />
        <DashboardRoute path="/companies" component={Company} />
        <DashboardRoute path="/amenities" component={Amenity} />
      </Switch>
      <Backdrop />
    </Fragment>
  );
}

export default App;
