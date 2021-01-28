import axios from 'axios'

export const login = (params) => {
  return axios({
    url: '/mock/login.json',
    method: 'get',
    params
  })
}