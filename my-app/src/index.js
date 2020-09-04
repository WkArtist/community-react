import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/theme.scss';
import './assets/style/messageBox.scss';
import './index.css';
import moment from 'moment'
import 'moment/locale/zh-cn'
import api from './api'

React.Component.prototype.$moment = moment
React.Component.prototype.$api = api

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
