import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Movement from "./pages/Movement/Movement";
import Login from './pages/Login/Login';
import createLogin from './pages/Login/CreateLogin';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login/create" exact component={createLogin} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Landing} />
        <Route path="/movement/:data" component={Movement} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
