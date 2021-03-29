import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Dashboard from "../Components/pages/dashboard/dashboard";
import Login from "../Components/pages/login/login";
// import Header from "../header/header"
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ViewActivity from "../Components/pages/view_activity/view_activity";
import Profile from "../Components/pages/profile/profile";

export const history = createHistory();

export const AppRouter = () => (
  <Router history={history}>
    <div>         
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />
        <PrivateRoute path="/Dashboard" component={Dashboard} />
        <PrivateRoute path="/View_Activity" component={ViewActivity} />
        <PrivateRoute path="/Profile" component={Profile} />
      </Switch>
    </div>
  </Router>
);
