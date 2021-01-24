import React from "react"
import {connect} from "react-redux"
import { Route,Redirect } from "react-router-dom"
import {Header} from "../header/header"


 const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
  }) => (
    <div>
      <Route {...rest} component={(props) => (
        isAuthenticated ? (
          <div>
            <Header />
            <Component {...props} 
            />
          </div>
        ) : (
          <div>
            <Redirect to="/" exact={true}/>
          </div>
          )
      )}
       />
      </div>
    );
    
    const mapStateToProps = (state) => ({
        isAuthenticated: state.Auth
      });
      
      export default connect(mapStateToProps)(PrivateRoute);