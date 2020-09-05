import React, { Component } from 'react'
import './BuildingOverview.scss'
import { dynamicPieChart } from '../../../../util.js'

export default class BuildingOverview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                areaTotal: 154100, // 占地总面积
                greenArea: 50660, // 绿化面积
                buildingLandOccupationArea: 149034, // 建筑占地面积
                buildingArea: 520850, // 建筑面积
                useBuildingArea: 520850 // 使用面积
            },
            buildingSelectSurveyData: {
                buildingArea: 154100, // 住房部面积
                builingManager: '张子枫', // 楼宇管理员
                buildingtel: '13572738385' // 联系电话
            },
        }
        this.chartRef = React.createRef()
    }


    chartInit() {
        const optionpie = {
            color: [this.$theme.color.$blue, this.$theme.color.$green],
            series: [{
              name: '数量',
              type: 'pie',
              radius: ['80%', '98%'],
              center: ['50%', '50%'],
              data: this.pieData(),
              hoverOffset: 1,
              itemStyle: {
                normal: {
                  borderColor: 'rgba(255,255,255,0.01)',
                  borderWidth: 1
                }
              },
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  formatter: function(param) {
                    return '{number|' + param.percent.toFixed(0) + '}{val|%}'
                  },
                  textStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#fff',
                    rich: {
                      number: {
                        fontSize: 20,
                        color: '#fff'
                      },
                      val: {
                        fontSize: 14,
                        color: '#fff'
                      }
                    }
                  }
                }
              },
              labelLine: {
                show: false
              }
            }]
          }
          const chartPie = this.chartRef.current
          const myChart = this.$echarts.init(chartPie)
          myChart.setOption(optionpie)
          dynamicPieChart(myChart)
    }

    componentDidMount() {
        this.chartInit()
    }

    pieData() {
        return [{
            name: '建筑占地面积',
            value: this.state.data.buildingLandOccupationArea
        }, {
            name: '绿化面积',
            value: this.state.data.greenArea
        }]
    }


    render() {
        return (
            <div className="message-box-wrap">
                <div className="title">
                    <div className="text">建筑概况</div>
                </div>
                <div className="content">
                    <div className="community-wrap">
                        <div className="top">
                            <div className="all-number">
                                总占地面积<span>{this.state.data.areaTotal}</span><div className="unit">M²</div>
                            </div>
                            <div className="chart-wrap">
                                <div className="chart-pie" ref={this.chartRef}></div>
                                <div className="pie-legend">
                                    <div className="legend-item">
                                        <div className="green-icon"></div>
                                        <span className="key">绿化面积</span>
                                        <span className="value">{this.state.data.greenArea}</span><div className="unit">M²</div>
                                    </div>
                                    <div className="legend-item">
                                        <div className="cyan-icon"></div>
                                        <span className="key">建筑占地面积</span>
                                        <span className="value">{this.state.data.buildingLandOccupationArea}</span><div className="unit">M²</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="message-item">
                                建筑面积<span>{this.state.data.buildingArea}</span><div className="unit">M²</div>
                            </div>
                            <div className="message-item">
                                使用面积<span>{this.state.data.useBuildingArea}</span><div className="unit">M²</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
