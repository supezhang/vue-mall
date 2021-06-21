export default{
  addCounter(state,payload){
    payload.count++
  },
  addTocart(state,payload){
    payload.checked = true
    state.cartList.push(payload)
  },
  changeuserid(state,payload){
    console.log(payload);
    state.userId = payload
  }
}