import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify } from 'quasar'
import { SessionStorage } from "quasar";


function getBaseUrl (name) {
  const xhr = new XMLHttpRequest()
  const okStatus = document.location.protocol === 'file:' ? 0 : 200
  xhr.open('GET', '../../statics/' + name, false)
  xhr.overrideMimeType('text/html; charset=utf-8')
  xhr.send(null)
  return xhr.status === okStatus ? xhr.responseText : null
}

const baseurl = getBaseUrl('baseurl.txt')

const api = axios.create({
  baseURL: baseurl
})

api.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json, charset="utf-8"'
    if (SessionStorage.has('token')) {
      config.headers.token = JSON.parse(SessionStorage.getItem('token')).token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    const defaultNotify = {
      message: 'Unknown Error',
      icon: 'warning',
      color: 'warning',
      position: 'top',
      timeout: 1500
    }
    if (error.code === 'ECONNABORTED' || error.message.indexOf('timeout') !== -1 || error.message === 'Network Error') {
      defaultNotify.message = 'Network Error'
      Notify.create(defaultNotify)
      return Promise.reject(error)
    }
    switch (error.status) {
      case 403:
        defaultNotify.message = '拒绝访问(403)'
        Notify.create(defaultNotify)
        break
      case 404:
        defaultNotify.message = '资源不存在(404)'
        Notify.create(defaultNotify)
        break
      case 408:
        defaultNotify.message = '请求超时(408)'
        Notify.create(defaultNotify)
        break
      case 500:
        defaultNotify.message = '服务器错误(500)'
        Notify.create(defaultNotify)
        break
      case 501:
        defaultNotify.message = '服务未实现(501)'
        Notify.create(defaultNotify)
        break
      case 502:
        defaultNotify.message = '网络错误(502)'
        Notify.create(defaultNotify)
        break
      case 503:
        defaultNotify.message = '服务不可用(503)'
        Notify.create(defaultNotify)
        break
      case 504:
        defaultNotify.message = '网络超时(504)'
        Notify.create(defaultNotify)
        break
      case 505:
        defaultNotify.message = 'HTTP版本不受支持(505)'
        Notify.create(defaultNotify)
        break
      default:
        break
    }
    return Promise.reject(error)
  }
)

export default boot(({ app }) => {

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api

})

export { api }
