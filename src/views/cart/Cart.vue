
<template>
  <div class="cart-wrapper">
    <top-nav><span slot="center">购物车({{$store.state.cartList.length}})</span></top-nav>
    <!-- 购物车列表 -->
    <b-scroll class="cartgoodsbox" ref="cartgoos">
      <cart-goods-list></cart-goods-list>
    </b-scroll>
    <!-- 结算 -->
    <cart-buy-bar></cart-buy-bar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TopNav from '@/common/topnav/TopNav'
import CartGoodsList from './childComps/CartGoodsList'
import CartBuyBar from './childComps/cartBuyBar'
import BScroll from '../../common/bscroll/BScroll.vue'
export default {
  name: 'Cart',  
  data(){
    return{
      checked:false
    }  
  },
  components: {
    TopNav,
    CartGoodsList,
    CartBuyBar,
    BScroll,    
  },
  methods:{
    itemCheck(){
      this.checked = !this.checked
    }
  },
  mounted(){
    this.$refs.cartgoos.scroll.refresha;
  }
}
</script>

<style lang="scss" scoped>
  .cartgoodsbox{
    position:fixed;
    left:0;
    right:0;
    top:44px;
    bottom:90px;
    background-color: #fff;
    overflow: hidden;
  }
</style>
