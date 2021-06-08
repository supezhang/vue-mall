import {baseRequest} from './request'

export function gethomemultidata(){
  return baseRequest({url:'/home/multidata'})
}

export function getGoods(type,page){
  return baseRequest({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}