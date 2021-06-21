<template>
 <div class="right-content">
   <div class="box">
     <div class="item-goods" v-for="item in goodsdata">
       <a :href="item.link">
         <div>
           <img :src="item.image" alt="">
         </div>
         <p class="tit">{{item.title}}</p>
       </a>
     </div>
   </div>
 </div>
</template>

<script>
 export default {
  name: 'RightContent',
  props:{
    goodsdata:Array
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
  .box{
    display:flex;
    flex-wrap:wrap;
    .item-goods{
      flex:0 0 50%;
      width:50%;
      padding:5px;
      text-align: center;
      a{
        text-decoration: none;
      }
      .tit{
        margin:8px;
        font-size:14px;
        color:#666;
      }
    }
  }
 
</style>
