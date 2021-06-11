export default{
  addCart(content,payload){
    return new Promise((resolve,reject)=>{
      let product = content.state.cartList.find(item=>{
        return item.iid == payload.iid
      })
      if(product){
        // product.count += 1
        content.commit("addCounter",product)
        resolve('当前的商品数量+1')
      }else{
        payload.count = 1;
        // content.state.cartList.push(payload)
        content.commit('addTocart',payload)
        resolve('加入购物车成功')
      }   
    })    
  }
}
