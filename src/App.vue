<template>
  <div id="app">
    <router-view/>
    <tab-bar-cpt></tab-bar-cpt>
  </div>
</template>
<script>
  
  import TabBarCpt from '@/common/tabbar/TabBarCpt'
  export default {
    name:'App',
    components:{
      TabBarCpt
    }
  }
</script>
<style lang="scss">
  @import './assets/css/base.css';
  #app{
    width:420px;margin:auto;
  }
</style>
