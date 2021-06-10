import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  cartList:[]
}
export default new Vuex.Store({
  // state: {
  //   cartList:[]
  // },
  state,
  mutations,
  actions,
  // mutations: {
  //   //mutations唯一的目的就是修改state中状态 
  //   //mutations每个方法尽可能完成得事件比较单一 
  //   addCounter(state,payload){
  //     payload.count++
  //   },
  //   addTocart(state,payload){
  //     state.cartList.push(payload)
  //   },
  //   // addCart(state,payload){
  //   //   let product = state.cartList.find(item=>{
  //   //     return item.iid == payload.iid
  //   //   })
  //   //   if(product){
  //   //     product.count +=1;
  //   //   }else{
  //   //     payload.count = 1;
  //   //     state.cartList.push(payload)
  //   //   }      
  //   // }

  // },
  // actions: {
  //   addCart(content,payload){
  //     let product = content.state.cartList.find(item=>{
  //       return item.iid == payload.iid
  //     })
  //     if(product){
  //       // product.count += 1
  //       content.commit("addCounter",product)
  //     }else{
  //       payload.count = 1;
  //       // content.state.cartList.push(payload)
  //       content.commit('addTocart',payload)
  //     }   
  //   }
  // },
  modules: {
  }
})
