<template>
  <div class="goods-wrapper">
    <div class="item" v-for="item in goods" @click="detailsPage(item.iid)" :key="item">
      <div class="goods-box">
        <img v-if="item.show" v-lazy="item.show.img" alt="" @load="imageLoad">       
        <img v-if="item.image" v-lazy="item.image" alt="" @load="imageLoad">       
        <div class="aaa" style="width:100%;">
          <p class="title">{{item.title}}</p>
          <span class="price">{{item.price}}元</span>
          <span class="cfav"><span class="mall-icon icon-star-outline"></span> {{item.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script> 
 export default {
  name: 'Goods',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
   return {
    
   }
  },
  components: {

  },
  methods:{
    imageLoad(){
      // console.log('img load finished');
      this.$bus.$emit("goodsImageLoad")
    },
    detailsPage(iid){
      this.$router.push("/details/"+iid)
    }
  },
  computed:{
 
  }
  
 }
</script>

<style scoped lang="scss">
  .goods-wrapper{
    display:flex;
    flex-wrap: wrap;    
    width:100%;
    .item{
      box-sizing: border-box;
      flex:0 0 50%;
      width:50%;
      padding:5px;
      .goods-box{
        color:#333;
        display:block;
        width:100%;
        text-align: center;
        line-height:1;
        font-size:14px;
      }
      img{
        display:block;
        margin:auto;
      }
      .title{        
        margin:5px 0;
        // white-space: nowrap;
        // overflow:hidden;
        // text-overflow: ellipsis;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .price{
        margin-right:5px;
        color:red;
      }
      .icon-star-outline{
        vertical-align: top;
        height:14px;
        height:14px;
      }
    }
  }
 
</style>
