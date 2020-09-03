import React, { Component } from 'react'
import './Nav.scss'
import 'animate.css'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: {
                pm: 112,
                skycon: '阴',
                temperature: 30
            },
            time: '10:54:23',
            currentDate: '2019-12-20',
            day: '星期五',
            routerList: [
                {
                  name: '总览',
                  route: 'Overview',
                  toUe4: 'navSummarize',
                  children: []
                }, {
                  name: '综合',
                  children: [
                    {
                      name: '人房',
                      route: 'HumanRoom',
                      toUe4: 'navPeopleAndHouse',
                      children: []
                    }, {
                      name: '车库',
                      route: 'Garage',
                      toUe4: 'navGarage',
                      children: []
                    }, {
                      name: '企业',
                      route: '/',
                      toUe4: 23,
                      children: []
                    }, {
                      name: '视频',
                      route: '/',
                      toUe4: 24,
                      children: []
                    }, {
                      name: '部件',
                      route: '/',
                      toUe4: 25,
                      children: []
                    }, {
                      name: '人员',
                      route: '/',
                      toUe4: 26,
                      children: []
                    }
                  ]
                }, {
                  name: '治理',
                  children: [
                    {
                      name: '网格',
                      route: '/',
                      toUe4: 31,
                      children: []
                    }, {
                      name: '治安',
                      route: '/',
                      toUe4: 32,
                      children: []
                    }, {
                      name: '安防',
                      route: '/',
                      toUe4: 33,
                      children: []
                    }, {
                      name: '能源',
                      route: '/',
                      toUe4: 34,
                      children: []
                    }, {
                      name: '告警',
                      route: '/',
                      toUe4: 35,
                      children: []
                    }
                  ]
                }, {
                  name: '服务',
                  children: [
                    {
                      name: '卫生',
                      route: '/',
                      toUe4: 41,
                      children: []
                    }, {
                      name: '环境',
                      route: '/',
                      toUe4: 42,
                      children: []
                    }, {
                      name: '事件',
                      route: '/',
                      toUe4: 43,
                      children: []
                    }, {
                      name: '生活',
                      route: '/',
                      toUe4: 44,
                      children: []
                    }
                  ]
                }, {
                  name: '便民',
                  children: [
                    {
                      name: '政务',
                      route: '/',
                      toUe4: 51,
                      children: []
                    }, {
                      name: '自治',
                      route: '/',
                      toUe4: 52,
                      children: []
                    }, {
                      name: '调节',
                      route: '/',
                      toUe4: 53,
                      children: []
                    }, {
                      name: '法宣',
                      route: '/',
                      toUe4: 54,
                      children: []
                    }, {
                      name: '文化',
                      route: '/',
                      toUe4: 55,
                      children: []
                    }
                  ]
                }
            ],
        }

        
    }

    async renderWeatherData() {
        const res = await this.$api.common.getWeatherData()
        console.log('天气数据', res)
        if (res.data.success) {
            const data = res.data.data
            this.setState({
                weather: {
                    pm: data['pm2.5'],
                    skycon: data.skycon,
                    temperature: data.temperature.toFixed()
                }
            })
        }
    }

    getCurrentTime() {
        setInterval(() => {
            this.setState({
                time: this.$moment().format('HH:mm:ss'),
                currentDate: this.$moment().format('YYYY-MM-DD'),
                day: this.$moment().format('dddd')
            })
        },1000)
    }

    async componentDidMount() {
        this.getCurrentTime()
        this.renderWeatherData()
    }

    render() {
        return (
            <div className="nav-wrap">
                <div className="logo"></div>

                <div className="router">
                    {
                        this.state.routerList.map((ele) => {
                            <span className="router-link">{ele.name}</span>
                        })
                    }
                    <div className="router-level"></div>
                </div>

                <div className="date">
                    <div className="date-wrap">
                        <p className="date-val">{this.state.weather.temperature}℃</p>
                        <p className="date-text">温度</p>
                    </div>
                    <div className="date-wrap pm-message">
                        <p className="date-val">{this.state.weather.pm}</p>
                        <p className="date-text">PM2.5</p>
                    </div>
                    <div className="line"></div>
                    <div className="date-wrap time">
                        <p className="date-val date-time">{this.state.time}</p>
                        <p className="date-text">{this.state.day} | {this.state.currentDate}</p>
                    </div>
                </div>
                <div className="exit">
                    <i className="icon sqguanji" onClick={() => {
                        alert('关闭网站')
                    }}></i>
                </div>
            </div>
        )
    }
}
