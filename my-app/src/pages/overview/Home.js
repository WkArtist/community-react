import React, { Component } from 'react'
import PopulationAnalysis from '../../components/overview/PopulationAnalysis'
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="left-top">
                    <PopulationAnalysis />
                </div>
            </div>
        )
    }
}
