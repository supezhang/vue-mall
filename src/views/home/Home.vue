<template>
  <div class="home"> 
    <!-- top-nav -->
    <top-nav ref="topnav"><span slot="center">首页</span></top-nav>    
     <!-- 分类 -->
    <category-tab ref="categorytab2" v-show="cateTabShow" :cateTab="['精选','新款','流行']" @tabClick="tabClick"></category-tab>      
    <b-scroll class="scroll-box" @pullingUp="loadeMore" ref="aaa" id="abc">
      <!-- banner -->
      <banner-cpt :bannerData="bannerData" @barImgLoad="barImgLoad"></banner-cpt>
      <!-- recommend -->
      <home-recommend :recData="recommend"></home-recommend>
      <!-- 分类 -->
      <category-tab ref="categorytab" v-show="!cateTabShow" :cateTab="['精选','新款','流行']" @tabClick="tabClick"></category-tab>
      <!-- 列表 -->
      <goods :goods="goodList"></goods>
    </b-scroll> 
    <back-top v-show="isShow" @click.native="backTop"></back-top>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
  import TopNav from '@/common/topnav/TopNav'
  import BScroll from '@/common/bscroll/BScroll'
  import BackTop from '@/common/backtop/BackTop'

  import CategoryTab from '@/components/content/CategoryTab'  
  import HomeRecommend from '@/components/content/HomeRecommend'

  import BannerCpt from '@/common/banner/BannerCpt'
  import Goods from '@/components/content/Goods'
  import {gethomemultidata,getGoods} from '@/network/home'
  import {debounce} from '@/common/utils'
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
        isShow:false,//返回顶部
        offsetTopTab:0,//分类 offsetTop
        cateTabShow:false,
        saveY:0,
      }
    },
    components: {
      BackTop,
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
      this.$refs.aaa.scroll.on("scroll",position=>{ 
        this.isShow = (-position.y>=1000?true:false)
        this.cateTabShow = (-position.y>=this.offsetTopTab?true:false)
      })
      // const refresh =this.debounce(this.$refs.aaa.refresha,200)
      const refresh =debounce(this.$refs.aaa.refresha,200)
      this.$bus.$on("goodsImageLoad",()=>{ 
        //刷新30次  请求30次    
        // this.$refs.aaa.refresha();
        //刷新30次
        // this.debounce(this.$refs.aaa.refresha,10)()
        //刷新小于30次 请求次数少
        refresh()    
      })
      // this.barImgLoad();
    },
    methods:{
      barImgLoad(){
        this.offsetTopTab = this.$refs.categorytab.$el.offsetTop-44;
      },
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
      backTop(){       
        this.$refs.aaa.scroll.scrollTo(0,0,300)
      },
      // 防抖
      debounce(func,delay){
        let timer = null
        return function(...args){
          if(timer) clearTimeout(timer)
          timer = setTimeout(()=>{
            func.apply(this,args)
          },delay)
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
        // console.log('loadMore');
      },      
    },
    // 销毁
    destroyed(){
      console.log('home destroyed');
    },
    // 进来
    activated(){
      console.log('进来 activated');
      this.$refs.aaa.scroll.scrollTo(0,this.saveY,0)
      this.$refs.aaa.scroll.refresh() //避免不能滚动
    },
    // 离开
    deactivated(){
      console.log('离开 deactivated');
      this.saveY = this.$refs.aaa.scroll.y
      console.log(this.saveY);
    }
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
