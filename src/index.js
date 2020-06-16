import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// 연동시킬려면 import
//import Login from "./Pages/Login/Login";
//import Main from "./Pages/Main/Main";
import Routes from "./Routes"


ReactDOM.render(
  //<Login />,
  //<Main />,
  <Routes />,
  document.getElementById('root')
);


