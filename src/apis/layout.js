import request from '@/utils/request'

export const getMenu = () => {
  return request({
    url: '/mock/menu.json',
    method: 'get'
  })
}