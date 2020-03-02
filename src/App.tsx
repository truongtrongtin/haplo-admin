import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./layouts/Dashboard";
import SignIn from "./pages/SignIn";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
      </Switch>
      <Backdrop open={false} />
    </Fragment>
  );
}

export default App;
