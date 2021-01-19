import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Movement from "./pages/Movement/Movement";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/movement/:data" component={Movement} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
