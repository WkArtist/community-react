import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import moment from 'moment'
import 'moment/locale/zh-cn'
import api from './api'

React.Component.prototype.$moment = moment
React.Component.prototype.$api = api

ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);
