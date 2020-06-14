import request from './request.js';

export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export function getDetailRecommend(){
  return request({
    url:'recommend'
  })
}