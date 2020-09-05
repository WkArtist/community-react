import React, { Component } from 'react'
import BuildingOverview from '../../../components/complex/humanroom/home/BuildingOverview'
import './Home.scss'
import 'animate.css'
import { withRouter } from 'react-router-dom'

export default class Home extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.history  .listen((e) => {
            console.log('-------',e)
        })
    }

    render() {
        return (
            <div className="humanroom-home">
                <withRouter>
                    <div className="building-overview animate__animated animate__fadeInRight">
                        <BuildingOverview />
                    </div> 
                </withRouter>
            </div>
        )
    }
}
