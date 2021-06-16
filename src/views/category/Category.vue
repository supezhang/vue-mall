<template>
  <div>
    <top-nav ref="topnav"><span slot="center">分类</span></top-nav>  
    <div class="category">
      <div class="goods-nav">
        <slide-nav :category="category"></slide-nav>
      </div>
      <div class="goods-content">
        <goods :goods="goods"></goods>
      </div>
    </div>
  </div>
 
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BScroll from '@/common/bscroll/BScroll'
import SlideNav from './childComps/SlideNav'
import TopNav from '@/common/topnav/TopNav'
import Goods from '@/components/content/Goods'

import {category,subcategory} from '@/network/category'
export default {
  name: 'Category',
  data(){
    return{
      category:[],
      subcategory:{},
      goods:[],
      maitKey:582
    }
  },
  components: {
    // HelloWorld
    BScroll,
    SlideNav,
    TopNav,
    Goods
  },
  created(){
    this.getCategory();
    this.getSubCategory(this.maitKey)
  },
  mounted(){
    
  },
  methods:{
    getCategory(){
      category().then(res=>{
        console.log(res);
        this.category = res.data.data.category.list
      })
    },
    getSubCategory(maitKey){
      subcategory(maitKey).then(res=>{
        console.log(res);
       this.goods = res.data.data.list
      })
    }
  }
}
</script>
<style lang="scss" scope>
  .box{ 
    overflow: hidden;
  }
  .category{
    display:flex;
    .goods-nav{
      flex:0 0 120px;
      width:120px;
      height:100%;
    }
  }
</style>
