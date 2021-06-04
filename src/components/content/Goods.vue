<template>
  <div class="goods-wrapper">
    <div class="item" v-for="item in goods" :key="item.title">
      <a href="">
        <img :src="item.show.img" alt="" @load="imageLoad">       
        <div>
          <p class="title">{{item.title}}</p>
          <span class="price">{{item.price}}元</span>
          <span class="cfav"><span class="m-icon icon-star-outline"></span> {{item.cfav}}</span>
        </div>
      </a>
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
    }
  }
  
 }
</script>

<style scoped lang="scss">
  .goods-wrapper{
    display:flex;
    flex-wrap: wrap;    
    .item{
      box-sizing: border-box;
      flex:1 1 50%;
      width:50%;
      padding:5px;
      a{
        text-decoration: none;
        color:#333;
        display:block;
        text-align: center;
        line-height:1;
        font-size:14px;
      }
      img{
        display:block;
      }
      .title{
        margin:5px 0;
        white-space: nowrap;
        overflow:hidden;
        text-overflow: ellipsis;
      }
      .price{
        margin-right:5px;
        color:red;
      }
      .icon-star-outline{
        vertical-align: top;
        height:14px;
      }
    }
  }
 
</style>
