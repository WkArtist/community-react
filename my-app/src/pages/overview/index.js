import React, { Component } from 'react'
import './index.scss'
import Home from './Home'
import { Route, Redirect, Switch } from 'react-router-dom'

export default class index extends Component {
    render() {
        return (
            <div className="outer-box">
                <Switch>
                    <Route path="/overview/home" component={Home}></Route>
                    <Redirect from="/overview" to="/overview/home"></Redirect>
                </Switch>
                
            </div>
        )
    }
}
