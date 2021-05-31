import axios from 'axios'

export function getHome(config){
  const request = axios.create({
    baseURL:"http://123.207.32.32:8000",
    timeout:5000
  })
  return request(config)
}

