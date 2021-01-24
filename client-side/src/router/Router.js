import React from "react"
import {Router,Route,Switch} from "react-router-dom"
import createHistory from "history/createBrowserHistory"
import {Dashboard} from "../pages/dashboard/dashboard"
import Login from "../pages/login/login"
import Header from "../header/header"
import PublicRoute from "./PublicRoute"
import PrivateRoute from "./PrivateRoute"

export const  history=createHistory()

export const AppRouter=()=>(
    <Router history={history}>
        <div>
          
            <Switch>
           <PublicRoute path="/" component={Login} exact={true}/>
           <PrivateRoute path="/Dashboard" component={Dashboard}/>
           </Switch>
        </div>
    </Router>
)