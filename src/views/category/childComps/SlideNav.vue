<template>
 <div class="slide-nav">
   <ul class="nav-list">
     <li :class="{active:currentIndex==index}"
      v-for="(item,index) in category"
      @click="itemClick(item.maitKey,item.miniWallkey,index)">{{item.title}}</li>
   </ul>
 </div>
</template>

<script>
 export default {
  name: 'SlideNav',
  props:{
    category:Array,    
  },
   data () {
   return {
     currentIndex:0
   }
  },
  components: {

  },
  methods:{
    itemClick(maitKey,miniWallkey,index){
      this.$emit("slideClick",maitKey,miniWallkey)
      this.currentIndex = index
    }
  }
 }
</script>

<style scoped lang="scss">
  .slide-nav{
    ul{list-style: none;padding:0;margin:0;}
    .nav-list{      
      li{
        font-size:16px;
        color:#666;
        line-height:1;
        padding:12px 10px;
        text-align: center;
        background:#eee;
        border-left:2px solid transparent;
        &.active{
          color:red;
          background:#fff;
          border-left-color:red;
        }
        
      }
    }
  }
 
</style>
