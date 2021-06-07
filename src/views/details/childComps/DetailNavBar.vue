<template>
 <div class="detail-nav-bar-wrapper">
   <div class="left" slot="left" @click="backClick">
     <span class="back-icon"></span>
   </div>
   <div slot="center" class="title">
     <div class="title-item" 
     :class="{active:currentIndex==index}" 
     @click="itemClick(index)"
     v-for="(item,index) in titles" :key="index">{{item}}</div>
   </div>
   <div class="right" slot="right"></div>
 </div>
</template>

<script>
 import TopNav from '@/common/topnav/TopNav'
 export default {
  name: 'DetailNavBar',  
  data () {
   return {
     titles:['商品','参数','评论','推荐'],
     currentIndex:0
   }
  },
  components: {
    TopNav,
  },
  created(){
    
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
    },
    backClick(){
      // this.$router.go(-1)
      this.$router.back()
    }
  }
 }
</script>

<style scoped lang="scss">
  .detail-nav-bar-wrapper{
    display:flex;
    align-items: center;
    border-bottom:1px solid #efefef;
    .left,.right{
      flex: 0 0 40px;
      width: 40px;
      text-align: center;
    }
    .back-icon{
      display:inline-block;
      width:12px;height:12px;
      border-top:1px solid #333;
      border-left:1px solid #333;
      transform:rotate(-45deg);
    }
    .title{
      flex:1;
      display:flex;
      align-items: center;
      line-height: 44px;
      .title-item{
        flex:1;
        text-align: center;
        &.active{
          color:#f00;
        }
      }
    }
  }
  
 
</style>
