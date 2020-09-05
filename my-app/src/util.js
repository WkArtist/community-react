/* eslint-disable no-undef */

export { webToUe4, ue4ToWeb, dynamicPieChart }

function webToUe4(name, params) {
  try {
    if (typeof ue4 === 'function') {
      console.log('向ue4传递信息', name, params)
      ue4(name, params)
    }
  } catch (error) {
    console.log(error)
  }
}
// 接收ue4消息
function ue4ToWeb(name, fun) {
  try {
    console.log('注册ue4接收函数', name)
    window.ue.interface[name] = fun
  } catch (error) {
    console.log(error)
  }
}
/**
 * 动态饼图控制
 * @param {Object} myChart echarts实例
 */
function dynamicPieChart(myChart, timer) {
  clearInterval(timer)
  timer = null
  function clearCurrent() {
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 0
    })
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: 1
    })
  }
  let i = 1
  function rotation() {
    timer = setTimeout(() => {
      clearCurrent()
      myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: i % 2
      })
      i++
      rotation()
    }, 4000)
  }
  // 轮播饼图
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: 0
  })
  rotation()
  myChart.on('mouseover', (e) => {
    if (e.dataIndex === 1) {
      clearInterval(timer)
      timer = null
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      })
    }
    if (e.dataIndex === 0) {
      clearInterval(timer)
      timer = null
      myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 1
      })
    }
  })
  myChart.on('mouseout', (e) => {
    clearInterval(timer)
    timer = null
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 0
    })
    rotation()
  })
}
