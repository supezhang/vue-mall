import {homemultidata} from './request'

export function gethomemultidata(){
  return homemultidata({url:'/home/multidata'})
}

export function getGoods(type,page){
  return homemultidata({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}