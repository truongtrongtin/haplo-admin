import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/SideBar";
import Home from "./pages/Home";
import RecentActivity from "./components/RecentActivity";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <RecentActivity />
      <Backdrop open={false} />
    </div>
  );
}

export default App;
