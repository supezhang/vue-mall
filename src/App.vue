<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
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
</style>
