import React, { Component } from 'react'
import './PopulationAnalysis.scss'
export default class populationAnalysis extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                total: 8932,
                data: {
                  xAxis: ['0岁', '6岁', '12岁', '18岁', '24岁', '35岁', '60岁', '70岁', '80岁'],
                  yAxis: [
                    [120, 132, 1010, 1740, 400, 2300, 2100, 182, 19],
                    [22, 182, 191, 234, 2900, 330, 310, 2000, 15]
                  ]
                }
              },
              tab: 'all'
        }
        this.chartRef = React.createRef()
    }

    text() {
        if (this.state.tab === 'all') {
            return '全部'
          }
          if (this.state.tab === 'fixed') {
            return '常住'
          }
          if (this.state.tab === 'short') {
            return '流动'
          }
          return '全部'
    }

    chartInit() {
        const line = {
            grid: {
              left: '10%',
              right: '5%',
              top: '40%',
              bottom: '12%'
              // containLabel: true
            },
            tooltip: {
              show: true,
              trigger: 'axis'
    
            },
            legend: {
              show: true,
              x: 'center',
              y: '35',
              icon: 'roundRect',
              itemWidth: 16,
              fontSize: 12,
              itemHeight: 5,
              itemGap: 36,
              textStyle: {
                color: this.$theme.color.$lightGrey,
                padding: [3, 0, 0, 0]
              },
              data: ['男', '女']
            },
            xAxis: [
              {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                  color: this.$theme.color.$lightGrey
                },
                axisLine: {
                  show: true,
                  lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                  }
                },
                axisTick: { show: false },
                data: this.state.data.data.xAxis
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '人',
                // splitNumber: 3,
                // max: 100,
                nameTextStyle: {
                  color: this.$theme.color.$darkGrey,
                  fontSize: 12,
                  padding: [0, 30, 0, 0]
                },
                axisLabel: {
                  formatter: (value, index) => {
                    return (value / 1000) + 'k'
                  },
                  textStyle: {
                    color: this.$theme.color.$darkGrey
                  }
                },
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: ['rgba(217,217,217,0)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)', 'rgba(217,217,217,0.6)'],
                    type: 'dashed'
                  }
                }
              }
            ],
            series: [
              {
                yAxisIndex: 0,
                name: '女',
                type: 'line',
                smooth: true,
    
                symbol: 'circle',
                symbolSize: 2,
                itemStyle: {
                  normal: {
                    color: this.$theme.color.$red,
                    lineStyle: {
                      color: this.$theme.color.$red,
                      width: 2
                    }
                  }
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: this.$color(this.$theme.color.$red).alpha(0).string()
                  }, {
                    offset: 1,
                    color: this.$color(this.$theme.color.$red).alpha(0.3).string()
                  }])
                },
                data: this.state.data.data.yAxis[0]
              },
              {
                name: '男',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 2,
                itemStyle: {
                  normal: {
                    color: this.$theme.color.$cyan,
                    lineStyle: {
                      color: this.$theme.color.$cyan,
                      width: 2
                    }
                  }
                },
                areaStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: this.$color(this.$theme.color.$cyan).alpha(0).string()
                  }, {
                    offset: 1,
                    color: this.$color(this.$theme.color.$cyan).alpha(0.3).string()
                  }])
                },
                data: this.state.data.data.yAxis[1]
              }
            ]
          }
          const chartWrap = this.chartRef.current
          const myChart = this.$echarts.init(chartWrap)
          myChart.setOption(line)
    }

    componentDidMount() {
        this.chartInit()
    }

    tabFun(params) {
        this.setState({
            tab: params
        })
    }

    render() {
        return (
            <div className="message-box-wrap">
                <div className="title">
                    <div className="text">社区人口分析</div>
                    <div className="tab">
                        <span className={this.state.tab==='all'?'active':''} onClick={() => this.tabFun("all")}>全部</span>
                        <span className={this.state.tab==='fixed'?'active':''} onClick={() => this.tabFun("fixed")}>常住</span>
                        <span className={this.state.tab==='short'?'active':''}  onClick={() => this.tabFun("short")}>流动</span>
                    </div>
                </div>
                <div className="content">
                    <div className="content-wrap">
                        <div className="all-number">
                            {this.text()}居民 <span>{this.state.data.total}</span><span className="unit">人</span>
                        </div>
                        <div className="chart" ref={this.chartRef}></div>
                    </div>
                </div>
            </div>
        )
    }
}
