<template>
 <div class="detail-base-info">
   <p class="title">{{BaseInfo.title}}</p>
   <div class="price-des">
     <span class="now-pirce">￥{{BaseInfo.lowNowPrice}}</span>
     <s>{{BaseInfo.oldPrice}}</s>     
     <span v-if="BaseInfo.discountDesc" class="tag">{{BaseInfo.discountDesc}}</span>
   </div>
   <div class="columns-des">
     <span v-for="item in BaseInfo.columns">{{item}}</span> 
   </div>
   <div class="services-des">
     <div class="item" v-for="item in BaseInfo.services">
       <img v-if="item.icon"  :src="item.icon" alt="">
       <span>{{item.name}}</span>
     </div>
   </div>
 </div>
</template>

<script>
 export default {
  name: 'DetailBaseInfo',
  props:{
    BaseInfo:Object,
    default(){
      return {}
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
  .detail-base-info{
    padding:0 20px 10px;
    color:#aaa;
    border-bottom:2px solid #eee;
    .title{
      font-size:16px;
      line-height:1.2;
      margin:5px 0;
      color:#333;
    }
    .price-des{
      display:flex;
      align-items: center;
      font-size:14px;
      span + span{
        margin-left:5px;        
      }
      .now-pirce{
        color:#f00;
      }
      .tag{
        color:#fff;
        background-color:#f00;
        padding:2px;
        border-radius: 4px;
      }
    }
    .columns-des{
      margin:8px 0;
      display:flex;
      align-items: center;
      font-size:12px;
      justify-content: space-between;
    }
    .services-des{
      display:flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap:wrap;
      font-size:12px;
      .item{
        display:flex;
        align-items: center;
        img{width:12px;height:12px;}        
      }
    }
  }
 
</style>
