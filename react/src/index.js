import React from 'react';
import ReactDOM from 'react-dom';
import App from "./laylouts/App"
import {BrowserRouter,Route } from "react-router-dom"
import "./assets/css/App.css";
import date from './api/date';
import {Provider} from "react-redux";
import store from "./store/store";

React.Component.prototype.date=date;

let  local = JSON.parse(localStorage.getItem('rc_user'));
local && store.dispatch({type:'UPDATE_USER',payload:local})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

