<template>
  <div class="top-nav-placeholder-room">
    <div class="top-nav">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
  </div>
</template>

<script>
 export default {
  name: 'TopNav',
  data () {
   return {

   }
  },
  components: {

  }
 }
</script>

<style scoped lang="scss">
  .top-nav-placeholder-room{
    height:44px;
  }
  .top-nav{
    background-color:pink;
    display:flex;
    align-items: center;
    height:44px;
    position:fixed;
    left:0;
    right:0;
    top:0;
    z-index: 1;
    .left{
      flex:0 0 40px;
      width:40px;
    }
    .center{
      flex:1;
      text-align: center;
      color:#fff;
      font-size:14px;
      line-height:44px;
    }
    .right{
      flex:0 0 40px;
      width:40px;
    }
}
 
</style>
