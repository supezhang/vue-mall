<template>
 <div class="shop-info">
   <div class="head">
     <img :src="shopInfo.logo" alt="">
     <span class="name">{{shopInfo.name}}</span>
   </div>
   <div class="goods-data">
     <div class="goods-info">
       <div class="item">
         <p class="num">{{shopInfo.sells}}</p>
         <span>总销量</span>
       </div>
       <div class="item">
         <p class="num">{{shopInfo.goodsCount}}</p>
         <span>全部宝贝</span>
       </div>
     </div>
     <div class="score" v-if="shopInfo.score">
       <div class="item">
         <span class="txt">{{shopInfo.score[0].name}}</span>
         <span class="score-des" :class="{isbetter:shopInfo.score[0].isBetter}"><span class="num">{{shopInfo.score[0].score}}</span> <span class="grade">{{shopInfo.score[0].isBetter?'高':'低'}}</span></span>
       </div>
       <div class="item">
         <span class="txt">{{shopInfo.score[1].name}}</span>
         <span class="score-des" :class="{isbetter:shopInfo.score[1].isBetter}"><span class="num">{{shopInfo.score[1].score}}</span><span class="grade">{{shopInfo.score[1].isBetter?'高':'低'}}</span></span>
       </div>
       <div class="item">
         <span class="txt">{{shopInfo.score[2].name}}</span>
         <span class="score-des" :class="{isbetter:shopInfo.score[2].isBetter}"><span class="num">{{shopInfo.score[2].score}}</span><span class="grade">{{shopInfo.score[2].isBetter?'高':'低'}}</span></span>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
 export default {
  name: 'DetailShopInfo',
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
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
  .shop-info{
    padding:0 20px;
    margin-top:10px;
    .head{
      height:40px;
      display:flex;
      align-items: center;
      img{
        height:40px;
      }
      .name{
        font-size:14px;
        margin-left:5px;
      }
    }
    .goods-data{
      display:flex;
      align-items: center;
      .goods-info{
        display:flex;
        align-items: center;
        border-right:1px solid #ddd;
        flex:0 0 50%;
        .item{
          flex:1;
          text-align: center;
          font-size:14px;
          p{
            margin:0 0 5px;
          }
        }
      }
      .score{
        flex:0 0 50%;
        padding:15px;
        .item{
          display:flex;
          align-items: center;
          margin:5px 0;
          font-size:14px;
          .score-des{
            margin-left:auto;
            display:flex;
            align-items: center;
            &.isbetter{
              .num{
                color:#f00;
              }
              .grade{
                background-color:#f00;
              }
            }
            .num{
              width:30px;
              color:green;
            }
            .grade{
              margin-left:8px;
              color:#fff;
              background-color:green;
            }
          }
        }
      }
    }
  }
 
</style>
