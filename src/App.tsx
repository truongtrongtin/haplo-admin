import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
