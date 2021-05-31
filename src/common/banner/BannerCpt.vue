<template>
  <div>
    <banner>
      <banner-item v-for="item in bannerData" :key="item.title">
        <a  slot="item-pic" :href="item.link"><img :src="item.image" alt=""></a>
      </banner-item>
    </banner>
  </div>
</template>

<script>
 import Banner from "./Banner"
 import BannerItem from "./BannerItem"
 export default {
  name: 'BannerCpt',
  props:{
    bannerData:{
      type:Array,
      default:[
        {url:'xxx'}
      ]
    }
  },
  data () {
   return {
   }
  },
  components: {
    Banner,
    BannerItem
  }
 }
</script>

<style scoped>

 
</style>
