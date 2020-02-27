import React from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "./components/SideBar/SideBar";
import Home from "./pages/Home/Home";
import RecentActivity from "./components/RecentActivity/RecentActivity";

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
    </div>
  );
}

export default App;
