export default{
  addCart(content,payload){
    let product = content.state.cartList.find(item=>{
      return item.iid == payload.iid
    })
    if(product){
      // product.count += 1
      content.commit("addCounter",product)
    }else{
      payload.count = 1;
      // content.state.cartList.push(payload)
      content.commit('addTocart',payload)
    }   
  }
}