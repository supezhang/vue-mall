<template>
 <div class="buy-box">
    <div class="left-count">
      <span class="checkbox-label">全选</span>
      <div class="checkbox" @click="allin">
        <span v-show="!checkAll" class="mall-icon check-outline"></span>
        <span v-show="checkAll" class="mall-icon icon-checked"></span>
      </div>       
      <div class="price-sum">合计：￥{{priceSum}}</div>
    </div>
    <div class="right-buy">去结算（{{checkCount}}）</div>
  </div>
</template>

<script>
 export default {
  name: 'CartBuyBar',
  data () {
   return {
     cartList:this.$store.state.cartList
   }
  },
  components: {

  },
  computed:{
    checkCount(){
     return this.cartList.filter(item=>{
        return item.checked
      }).length
    },
    checkAll(){
      // return this.cartList.find(item=>{return !item.checked})
      return this.checkCount==this.cartList.length
    },
    priceSum(){
      return this.cartList.filter(item=>{
        return item.checked
      }).reduce((pre,item)=>{
        return pre + item.price * item.count
      },0).toFixed(2)
    }
  },
  methods:{
    allin(){
      if(this.checkAll){
        this.cartList.forEach(item=>item.checked = false)
      }else{
        this.cartList.forEach(item=>item.checked = true)
      }
    }
  }
 }
</script>

<style lang="scss" scoped>   
  .buy-box{
    position:fixed;
    left:0;right:0;
    bottom:56px;
    background-color:#fff;
    display:flex;
    align-items: center;
    padding:0 10px;
    border-top:1px solid #ccc;
    .left-count{
      display:flex;
      align-items: center;
      .checkbox-label{
        font-size:14px;
        color:#aaa;
        margin-right:8px;
      }
      .price-sum{
        font-size:14px;
        color:#999;
      }
    }
    .right-buy{
      margin-left:auto;
      color:#fff;
      background-color:#f00;
      font-size: 14px;
      line-height: 30px;
      padding:0 12px;
    }
  }
</style>