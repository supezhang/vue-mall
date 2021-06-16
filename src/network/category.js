import {baseRequest} from './request'

export function category(){
  return baseRequest({
    url:'/category'
  })
}
export function subcategory(maitKey){
  return baseRequest({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}