<template>
 <div class="slide-nav">
   <ul class="nav-list">
     <li :class="{active:currentIndex==index}" v-for="(item,index) in category">{{item.title}}</li>
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

  }
 }
</script>

<style scoped lang="scss">
  .slide-nav{
    border:1px solid #ddd;
    ul{list-style: none;padding:0;margin:0;}
    .nav-list{      
      li{
        font-size:14px;
        color:#666;
        line-height:1;
        padding:12px 10px;
        text-align: center;
        &.active{
          color:red;
        }
        + li{
          border-top:1px solid #ddd;
        }
      }
    }
  }
 
</style>
