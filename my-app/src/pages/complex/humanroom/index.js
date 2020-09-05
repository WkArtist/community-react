import React, { Component } from 'react'
import './index.scss'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import RouteGuard from '../../../components/HOC/RouteGuard'

export default class index extends Component {
    render() {
        return (
            <div className="human-room-wrap">
                <div className="back-btn">返回</div>
                <div className="currentBuilding">
                    当前位置：<span>8</span>号楼
                    <div>
                        <span>8</span>层
                    </div>
                    <div>
                        <span>801</span>房
                    </div>
                </div>
                <Switch>
                    {/* <RouteGuard> */}
                        <Route path="/complex/humanroom/home" component={Home}></Route>
                    {/* </RouteGuard> */}
                    <Redirect from="/complex/humanroom" to="/complex/humanroom/home"></Redirect>
                </Switch>
                
            </div>
        )
    }
}
