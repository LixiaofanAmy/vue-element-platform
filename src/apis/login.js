import request from '@/utils/request'

export const login = params => {
  return request({
    url: '/mock/login.json',
    method: 'get',
    params
  })
}
