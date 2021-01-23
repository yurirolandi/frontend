import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Movement from "./pages/Movement/Movement";
import Login from './pages/Login/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Landing} />
        <Route path="/movement/:data" component={Movement} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
