import request from './index'

export function getPostData () {
  return request({
    url: `/post`,
    method: 'get',
    params: {}
  })
}
