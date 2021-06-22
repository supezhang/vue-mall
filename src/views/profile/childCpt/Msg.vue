<template>
 <div class="msg-wrapper">
   <div class="msg-box">
     <div class="msg-item">
       <img src="../../../assets/img/profile/message.svg" alt="">
       <p class="msg-des">我的消息</p>
     </div>
     <div class="msg-item">
       <img src="../../../assets/img/profile/pointer.svg" alt="">
       <p class="msg-des">积分商城</p>
     </div>
     <div class="msg-item">
       <img src="../../../assets/img/profile/vip.svg" alt="">
       <p class="msg-des">会员卡</p>
     </div>
   </div>
   <div class="msg-box">
     <div class="msg-item">
       <img src="../../../assets/img/profile/cart.svg" alt="">
       <p class="msg-des">我的购物车</p>
     </div>
     <div class="msg-item">
       <img src="../../../assets/img/profile/shopping.svg" alt="">
       <p class="msg-des">下载购物车App</p>
     </div>
   </div>
   <div class="msg-box">
     <button class="signout" @click="signout">退出登录</button>
   </div>
 </div>
</template>

<script>
 export default {
  name: 'Msg',
  data () {
   return {

   }
  },
  components: {

  },
  methods:{
    signout(){
      this.$emit('signout')
    }
  }
 }
</script>

<style scoped lang="scss">
  .msg-box{
    padding:0 10px;
    + .msg-box{
      border-top:8px solid #eee;
    }
    .msg-item{
      display:grid;
      grid-template-columns: 24px 1fr;
      align-items: center;
      grid-column-gap:8px;
      img{
        width:100%;
      }
      .msg-des{
        margin:0;
        font-size:16px;
        color:#666;
        border-bottom:1px solid #eee;
        padding:10px 0;
      }
    }
    .signout{
      width:100%;
      border:none;
      background:none;
      margin-top:10px;
      padding:14px;
      color:#666;
      border-bottom:1px solid #eee;
      &:active{
        background:pink;
        color:#fff;
      }
    }
  }
 
</style>
