import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style/theme.scss';
import './index.css';
import moment from 'moment'
import echarts from 'echarts'
import color from 'color'
import 'moment/locale/zh-cn'
import api from './api'
import * as theme from './config/theme'

React.Component.prototype.$moment = moment
React.Component.prototype.$api = api
React.Component.prototype.$echarts = echarts
React.Component.prototype.$theme = theme
React.Component.prototype.$color = color

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
