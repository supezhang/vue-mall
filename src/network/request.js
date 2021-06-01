import axios from 'axios'

export function homemultidata(config){
  const request = axios.create({
    baseURL:"http://152.136.185.210:7878/api/m5",
    timeout:5000
  })
  return request(config)
}

// export function homemultidata(config){
//   const request = axios.create({
//     baseURL:"http://152.136.185.210:7878/api/m5",
//     timeout:5000
//   })
//   return request(config)
// }

