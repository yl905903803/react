import React from 'react';
import ReactDOM from 'react-dom';
import App from "./laylouts/App"
import {BrowserRouter } from "react-router-dom"
import "./assets/css/App.css";

ReactDOM.render(
<BrowserRouter>
<App></App>
</BrowserRouter>,
  document.getElementById('root')
);

