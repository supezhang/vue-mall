<template>
 <div class="details-wrapper">
   <!-- 导航 -->
    <detail-nav-bar class="detail-nav" ref="detailnav" @titleclick="titleclick"></detail-nav-bar>
    <b-scroll class="bscrollbox" ref="bscrollbox">
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
      <!-- 参数 -->
      <detail-params-info :itemParams="itemParams" ref="params"></detail-params-info>
      <!-- 评论 -->
      <detail-comment :commentData="commentData" ref="comment"></detail-comment>
      <!-- 推荐 -->
      <goods :goods="recommendData" ref="goods"></goods>
    </b-scroll>
    <!-- 底部导航 -->
    <detail-bottom-bar @click.native="addCart"></detail-bottom-bar>
    <!-- 返回顶部 -->
    <back-top v-show="backTopShow" @click.native="backTop"></back-top>
    <!-- 加入购物车tips -->
    <toast v-show="toastTxt" :toastTxt="toastTxt"></toast>
 </div>
</template>

<script>
 import DetailNavBar from './childComps/DetailNavBar'
 import Banner from '@/common/banner/Banner'
 import Toast from '@/common/toast/Toast'
 import BackTop from '@/common/backtop/BackTop'
 import BannerItem from '@/common/banner/BannerItem'
 import DetailShopInfo from './childComps/DetailShopInfo'
 import DetailBaseInfo from "./childComps/DetailBaseInfo"
 import BScroll from '@/common/bscroll/BScroll'
 import DetailGoodInfo from './childComps/DetailGoodInfo'
 import DetailParamsInfo from './childComps/DetailParamsInfo'
 import DetailComment from './childComps/DetailComment'
 import DetailBottomBar from './childComps/DetailBottomBar'
 import Goods from '@/components/content/Goods'
 import {detailData,Shop,BaseInfo,itemParams,getRecommend} from '@/network/detail'
 export default {
  name: 'Details',  
  data () {
   return {
     iid:"",
     bannerData:[],
     shopInfo:{},
     BaseInfo:{},
     detailInfo:{},
     itemParams:{},
     commentData:{},
     recommendData:[],
     scrollDots:[],
     index:0,
     backTopShow:false,
     toastTxt:'',
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
    DetailParamsInfo,
    DetailComment,
    Goods,
    DetailBottomBar,
    BackTop,
    Toast,
  },
  created(){
    this.iid = this.$route.params.iid
    this.detailData(this.iid)
    this.getRecommend()
   
  },
  methods:{
    detailData(iid){
      detailData(iid).then(res=>{
        let result = res.data.result
        this.bannerData = result.itemInfo.topImages
        this.shopInfo = new Shop(result.shopInfo);
        this.BaseInfo = new BaseInfo(result.itemInfo,result.columns,result.shopInfo.services)
        this.detailInfo = result.detailInfo
        this.itemParams = new itemParams(result.itemParams.info.set,result.itemParams.rule.tables[0])
        if(result.rate.cRate!==0){
          this.commentData = result.rate
        }
        
      })
    },
    imageLoad(){
      this.$refs.detailinfo.refresha;
     
      this.scrollDots=[]
      this.scrollDots.push(0)
      this.scrollDots.push(this.$refs.params.$el.offsetTop)
      this.scrollDots.push(this.$refs.comment.$el.offsetTop)
      this.scrollDots.push(this.$refs.goods.$el.offsetTop)
      // 方便 this.Detailscroll()遍历 比较
      this.scrollDots.push(Number.MAX_VALUE)
      // console.log(this.scrollDots);
    },
    getRecommend(){
      getRecommend().then(res=>{
        this.recommendData = res.data.data.list
      })
    },
    titleclick(index){
      this.$refs.bscrollbox.scroll.scrollTo(0,-this.scrollDots[index],0)
    },
    Detailscroll(){
      this.$refs.bscrollbox.scroll.on("scroll",position=>{
        const positionY = -position.y
        let length = this.scrollDots.length   
        // this.scrollDots 最后追加个对大值 Number.MAX_VALUE         
        for(let i=0;i<length-1;i++){         
          // if(this.index!==i && ((i<length-1 && positionY >= this.scrollDots[i] && positionY<=this.scrollDots[i+1])
          // ||(i===length-1 && positionY >= this.scrollDots[i]))){
          //     this.index = i;
          //     this.$refs.detailnav.currentIndex = this.index
          // }
          if(this.index !== i && (positionY>this.scrollDots[i]&&positionY<this.scrollDots[i+1])){
            this.index = i;
            this.$refs.detailnav.currentIndex = this.index
          }
        }
        this.backTopShow = positionY>1000?true:false
      })
    },
    backTop(){
      this.$refs.bscrollbox.scroll.scrollTo(0,0,200)
    },
    addCart(){
      const product = {}
      product.image = this.bannerData[0]
      product.title = this.BaseInfo.title
      product.price = this.BaseInfo.lowNowPrice
      product.iid = this.iid
      product.desc = this.BaseInfo.desc
      this.$store.dispatch("addCart",product).then(res=>{
        // this.toastTxt = res
        // setTimeout(()=>{
        //   this.toastTxt = ""
        // },1000)
      })
    }
  },
  mounted(){
    this.Detailscroll()
  },
  updated(){
    //  this.scrollDots=[
    //     0,
    //     this.$refs.params.$el.offsetTop,
    //     this.$refs.comment.$el.offsetTop,
    //     this.$refs.goods.$el.offsetTop
    //   ]
    //   console.log(this.scrollDots);
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
  .bscrollbox{
    position:fixed;
    z-index:9;
    top:44px;
    bottom:58px;
    background:#fff;
    overflow: hidden;
  }
</style>
