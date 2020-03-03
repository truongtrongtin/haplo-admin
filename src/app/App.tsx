import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Toast from "../components/Toast";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../components/DashboardLayout";
import SignIn from "../pages/SignIn";
import Company from "../pages/Company";
import Amenity from "../pages/Amenity";
import Backdrop from "../components/Backdrop";

function App() {
  return (
    <Fragment>
      <Toast />
      <Switch>
        <Redirect exact from="/" to="/companies" />
        <Route path="/signin" component={SignIn} />
        <DashboardLayout>
          <PrivateRoute path="/companies" component={Company} />
          <PrivateRoute path="/amenities" component={Amenity} />
        </DashboardLayout>
      </Switch>
      <Backdrop />
    </Fragment>
  );
}

export default App;
