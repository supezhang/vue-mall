<template>
 <div class="bottom-bar">
   <div class="bar-item bar-left">
     <div>
       <i class="mall-icon icon-msg"></i>
       <span class="text">客服</span>
     </div>
     <div>
       <i class="mall-icon icon-shop"></i>
       <span class="text">店铺</span>
     </div>
     <div>
       <i class="mall-icon icon-star"></i>
       <span class="text">收藏</span>
     </div>
   </div>
   <div class="bar-item bar-right">
     <div class="cart" @click="addToCart">加入购物车</div>
     <div class="buy">购买</div>
   </div>
 </div>
</template>

<script>
 export default {
  name: 'DetailBottomBar',
  data () {
   return {

   }
  },
  components: {

  },
  methods:{
    addToCart(){
      this.$emit("addCart")
    }
  }
 }
</script>

<style scoped lang="scss">
  .bottom-bar{
    background-color:#fff;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    z-index: 9;
    display:flex;
    align-items: center;
    border-top:1px solid #ccc;
    .bar-item{
      flex:1;
      display:flex;
      align-items: center;
      text-align: center;      
      font-size:14px;
      color:#333;      
      >div{
        height:54px;
        flex:1;
        padding:5px 0;
        display:flex;
        flex-flow: column;
        align-items: center;
        .mall-icon{
          margin-bottom:4px;
          height:16px;
        }
      }
      .cart{
        background-color:yellow;
        line-height: 44px;
      }
      .buy{
        background-color:pink;
        line-height: 44px;
      }
    }
  }
 
</style>
