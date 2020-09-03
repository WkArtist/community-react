import url from '../url'
import axios from '../axios'

export const api = {
  getParkInfo(params) {
    return axios.get(`${url.base}/info/park-info`, {
      params
    })
  },
  getWeatherData() {
    return axios.get(`${url.base}/redirect/electron?name=天气接口`)
  }
}
export default api
