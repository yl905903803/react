import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";




let AuthRoute = ({ component: Component, user,...rest }) => (
  <Route {...rest} render={props =>
    user.error=== 0 ?
      <Component {...props} />
      : <Redirect to="/login" />
  }
  />
);


const initMapStateToProps=state=>({
  user:state.user
});



export default connect(
  initMapStateToProps,

)(AuthRoute)