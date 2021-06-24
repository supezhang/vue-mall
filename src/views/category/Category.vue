<template>
  <div>
    <top-nav ref="topnav"><span slot="center">分类</span></top-nav>  
    <div class="category">
      <b-scroll class="goods-nav">
        <slide-nav :category="category" @slideClick="slideClick"></slide-nav>
      </b-scroll>
      <b-scroll class="goods-content" ref="rightcontent">
        <!-- <right-content :goodsdata="goods"></right-content> -->
        <goods :goods="goods"></goods>
      </b-scroll>
    </div>
  </div>
 
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BScroll from '@/common/bscroll/BScroll'
import SlideNav from './childComps/SlideNav'
import TopNav from '@/common/topnav/TopNav'
import RightContent from './childComps/RightContent'
import Goods from '@/components/content/Goods'

import {category,subcategory,categorydetail} from '@/network/category'
export default {
  name: 'Category',
  data(){
    return{
      category:[],
      goods:[],
      maitKey:1,
      miniWallkey:''
    }
  },
  components: {
    // HelloWorld
    BScroll,
    SlideNav,
    TopNav,
    RightContent,
    Goods
  },
  created(){
    this.getCategory();
    // this.getSubCategory()
    this.getcategorydetail(this.miniWallkey)
  },
  mounted(){
    
  },
  computed:{
   getdoods(){
    //  this.getSubCategory(this.maitKey)
     this.getcategorydetail(this.miniWallkey)
   }
  },
  methods:{
    getCategory(){
      category().then(res=>{
        this.category = res.data.data.category.list       
        this.maitKey = this.category[0].maitKey
        this.miniWallkey = this.category[0].miniWallkey
      })
    },
    getSubCategory(maitKey=0){
      subcategory(maitKey).then(res=>{
        this.goods = res.data.data.list
      })
    },
    slideClick(maitKey,miniWallkey){
      this.maitKey = maitKey
      this.miniWallkey = miniWallkey
      this.$refs.rightcontent.scroll.scrollTo(0,0,0)
      this.getcategorydetail(miniWallkey)
    },
    getcategorydetail(miniWallkey,type){
      categorydetail(miniWallkey,type).then(res=>{
        this.goods = res.data
      })
    }
  }
}
</script>
<style lang="scss" scope>
  
  .category{
    display:flex;
    height:calc(100vh - 44px - 54px);
    overflow: hidden;
    .goods-nav,
    .goods-content{height:100%;}
    .goods-nav{
      flex:0 0 120px;
      width:120px;
      height:100%;
    }
  }
</style>
