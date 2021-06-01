<template>
 <div class="recommend-wrapper">
   <div class="rec-content">
     <div class="recommend-item" v-for="item in recData" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
          <p>{{item.title}}</p>
        </a>
      </div>
   </div>   
 </div>
</template>

<script>
 export default {
  name: 'HomeRecommend',
  props:{
    recData:{
      type:Array
    }
  },
  data () {
   return {

   }
  },
  components: {

  }
 }
</script>

<style scoped lang="scss">
 .recommend-wrapper{
   border-bottom:8px solid #eee;
   padding-top:5px;
   .rec-content{
     width:100%;
     display:flex;
     padding:5px;
     .recommend-item{
       flex:1;
       margin:0 5px;
       a{
         display:block;
         text-align: center;
         text-decoration: none;
       }
       p{margin:0;font-size:14px;line-height: 22px;color:#333;}
     }
   }
 }
</style>
