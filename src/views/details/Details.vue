<template>
 <div class="details-wrapper">
   <!-- 导航 -->
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <b-scroll class="bscroll-box">
      <!-- banner -->
      <banner>
        <banner-item v-for="item in bannerData" class="banner-item" :key='item'>
          <img slot="item-pic" :src="item" />
        </banner-item>
      </banner>
      <!-- 基本信息 -->
      <detail-base-info :BaseInfo="BaseInfo"></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <!-- 详情 -->
      <detail-good-info :detailInfo="detailInfo" @imageLoad="imageLoad" ref="detailinfo"></detail-good-info>      
    </b-scroll>
 </div>
</template>

<script>
 import DetailNavBar from './childComps/DetailNavBar'
 import Banner from '@/common/banner/Banner'
 import BannerItem from '@/common/banner/BannerItem'
 import DetailShopInfo from './childComps/DetailShopInfo'
 import DetailBaseInfo from "./childComps/DetailBaseInfo"
 import BScroll from '@/common/bscroll/BScroll'
 import DetailGoodInfo from './childComps/DetailGoodInfo'

 import {detailData,Shop,BaseInfo} from '@/network/detail'
 export default {
  name: 'Details',  
  data () {
   return {
     iid:"",
     bannerData:[],
     shopInfo:{},
     BaseInfo:{},
     detailInfo:{}
   }
  },
  components: {
    DetailNavBar,
    Banner,
    BannerItem,
    DetailShopInfo,
    DetailBaseInfo,
    BScroll,    
    DetailGoodInfo,
  },
  created(){
    this.iid = this.$route.params.iid
    this.detailData(this.iid)
  },
  methods:{
    detailData(iid){
      detailData(iid).then(res=>{
        let result = res.data.result
        console.log(result);
        this.bannerData = result.itemInfo.topImages
        this.shopInfo = new Shop(result.shopInfo);
        this.BaseInfo = new BaseInfo(result.itemInfo,result.columns,result.shopInfo.services)
        this.detailInfo = result.detailInfo
      })
    },
    imageLoad(){
      this.$refs.detailinfo.refresha;
    }
    
  }
 }
</script>

<style scoped lang="scss">
  .detail-nav{
    position:relative;
    z-index:10;
    background:#fff;
  }
  .banner-item{
    height:300px;
    overflow: hidden;
    img{
      max-width:100%;
    }
  }
  .bscroll-box{
    height:calc(100vh - 44px);
    position:relative;
    z-index:9;
    background:#fff;
  }
</style>
