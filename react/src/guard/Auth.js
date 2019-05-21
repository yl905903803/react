import React from 'react';
import {Redirect,Route} from 'react-router-dom';



//路由守卫 条件 同步    应用场景 配合状态管理

let AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
    localStorage.getItem('rc_user') ?
      <Component {...props} data={JSON.parse(localStorage.getItem('rc_user'))} />
      : <Redirect to="/login" />
  }
  />
);


export default AuthRoute