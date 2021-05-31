<template>
 <div>
   <tab-bar>
     <tab-bar-item path="/home" activeColor="red">
       <img slot="item-icon" src="../../assets/img/tabbar/home.svg" alt="">
       <img slot="item-icon-active" src="../../assets/img/tabbar/home-1.svg" alt="">
       <span slot="item-text">首页</span>
     </tab-bar-item>
     <tab-bar-item path="/category" activeColor="red">
       <img slot="item-icon" src="../../assets/img/tabbar/fenlei.svg" alt="">
       <img slot="item-icon-active" src="../../assets/img/tabbar/fenlei-1.svg" alt="">
       <span slot="item-text">分类</span>
     </tab-bar-item>
     <tab-bar-item path="/cart" activeColor="red">
       <img slot="item-icon" src="../../assets/img/tabbar/shop-cart.svg" alt="">
       <img slot="item-icon-active" src="../../assets/img/tabbar/shop-cart-1.svg" alt="">
       <span slot="item-text">购物车</span>
     </tab-bar-item>
     <tab-bar-item path="profile" activeColor="red">
       <img slot="item-icon" src="../../assets/img/tabbar/profile.svg" alt="">
       <img slot="item-icon-active" src="../../assets/img/tabbar/profile-1.svg" alt="">
       <span slot="item-text">我的</span>
     </tab-bar-item>
   </tab-bar>
 </div>
</template>

<script>
 import TabBar from './TabBar'
 import TabBarItem from './TabBarItem'
 export default {
  name: 'TabBarCpt', 
  data () {
   return {

   }
  },
  components: {
    TabBar,
    TabBarItem
  }
 }
</script>

<style scoped>

 
</style>
