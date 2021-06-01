<template>
  <div class="home"> 
    <!-- top-nav -->
    <top-nav><span slot="center">首页</span></top-nav>    
    <b-scroll class="scroll-box" @pullingUp="loadeMore" ref="aaa">
      <!-- banner -->
      <banner-cpt :bannerData="bannerData"></banner-cpt>
      <!-- recommend -->
      <home-recommend :recData="recommend"></home-recommend>
      <!-- 分类 -->
      <category-tab :cateTab="['精选','新款','流行']" @tabClick="tabClick"></category-tab>
      <!-- 列表 -->
      <goods :goods="goodList"></goods>
    </b-scroll> 
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
  import TopNav from '@/common/topnav/TopNav'
  import BScroll from '@/common/bscroll/BScroll'

  import CategoryTab from '@/components/content/CategoryTab'  
  import HomeRecommend from '@/components/content/HomeRecommend'

  import BannerCpt from '@/common/banner/BannerCpt'
  import Goods from '@/components/content/Goods'
  import {gethomemultidata,getGoods} from '@/network/home'
  export default {
    name: 'Home',
    data(){
      return{        
        bannerData:[],
        recommend:[],
        goods:{          
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]}
        },
        goodsType:"pop",
      }
    },
    components: {
      TopNav,
      CategoryTab,
      BScroll,
      BannerCpt,
      HomeRecommend,
      Goods
    },
    computed:{
      goodList(){
        return this.goods[this.goodsType].list
      }
    },
    created(){
      this.homemultidata();

      this.homeGoods("pop");
      this.homeGoods("new");
      this.homeGoods("sell");

      
    },
    mounted(){
 
    },
    methods:{
      tabClick(index){
        switch (index){
          case 0:
            this.goodsType='pop'
            break;
          case 1:
            this.goodsType='new'
            break;
          case 2:
            this.goodsType='sell'
            break;    
        }
      },
      // ----------------------↓getData
      homemultidata(){
        gethomemultidata().then(res=>{
          // console.log(res);
          this.bannerData = res.data.data.banner.list
          this.recommend = res.data.data.recommend.list
        })
      },
      homeGoods(type){
        const page = this.goods[type].page + 1
        getGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page+=1
        })
      },
      loadeMore(){
        this.homeGoods(this.goodsType)
        this.$refs.aaa.scroll.finishPullUp();
        this.$refs.aaa.scroll.refresh();
        console.log('loadMore');
      },      
    },
    
  }
</script>
<style lang="scss" scoped>
  .scroll-box{
    height:calc(100vh - 108px);
    overflow: hidden;
    // position:fixed;
    // top:50px;bottom:50px;
    // left:0;right:0;
  }
</style>
