import React, { Component } from 'react'
import {Route, Switch, Redirect } from "react-router-dom"
import Humanroom from "./humanroom/index"
import Garage from "./garage/index"

export default class index extends Component {
    render() {
        return (
            <div>
                <Route path="/complex/humanroom" exact component={Humanroom}></Route>
                <Route path="/complex/garage" exact component={Garage}></Route>
            </div>
        )
    }
}
