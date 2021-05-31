import {getHome} from './request'

export function gethomedata(){
  return getHome({url:'/home/multidata'})
}