<template>
  <div class="tabbar-placeholder-room">
    <div class="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
 export default {
  name: 'TabBar',
  data () {
   return {

   }
  },
  components: {

  }
 }
</script>

<style scoped>
  .tabbar-placeholder-room{height:54px;}
  .tab-bar{
    display:flex;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    z-index: 1;    
    box-shadow: 10px 12px 10px 13px rgba(0,0,0,.3);
    background-color:#fff;
  }
 
</style>
