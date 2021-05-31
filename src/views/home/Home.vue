<template>
  <div class="home"> 
    <!-- top-nav -->
    <top-nav><span slot="center">首页</span></top-nav>      
    <!-- banner -->
    <banner-cpt :bannerData="bannerData"></banner-cpt>
    <!-- recommend -->
    <home-recommend :recData="recommend"></home-recommend>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
 import TopNav from '@/common/topnav/TopNav'
  import BannerCpt from '@/common/banner/BannerCpt'
  import HomeRecommend from '@/components/content/HomeRecommend'

  import {gethomedata} from '@/network/home'
  export default {
    name: 'Home',
    data(){
      return{        
        bannerData:[],
        recommend:[]
      }
    },
    components: {
      TopNav,
      BannerCpt,
      HomeRecommend
    },
    methods:{
      getbannerdata(){
        gethomedata().then(res=>{
          this.bannerData = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        })
      }
    },
    created(){
      this.getbannerdata()
    }
  }
</script>
