import React, { Component } from 'react'
import {Route, Switch, Redirect } from "react-router-dom"
import Humanroom from "./humanroom/index"
import Garage from "./garage/index"

export default class index extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/complex/humanroom" component={Humanroom}></Route>
                    <Route path="/complex/garage" component={Garage}></Route>
                    <Redirect from="/complex" to="/complex/humanroom"></Redirect>
                </Switch>
                
            </div>
        )
    }
}
