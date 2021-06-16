<template>
 <div class="goods-list">
    <div class="goods-item" v-for="item in $store.state.cartList">
      <div class="item-check checkbox" @click="itemCheck(item)">
        <span v-show="!item.checked" class="mall-icon check-outline"></span>
        <span v-show="item.checked" class="mall-icon icon-checked"></span>
      </div>
      <div class="item-img">
        <img :src="item.image" alt="">
      </div>
      <div class="item-des">
        <p class="title">{{item.title}}</p>
        <p class="des">{{item.desc}}</p>
        <div class="price-count">
          <span class="price">{{item.price}}</span>
          <span class="count">x{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  name: 'CartGoodsList',
  data(){
    return{
      checkedNum:0
    }  
  },
  components: {
  },
  methods:{
    itemCheck(item){
      item.checked = !item.checked
    }
  }
 }
</script>

<style scoped lang="scss">
.only-row{ text-overflow: -o-ellipsis-lastline;  overflow: hidden;  text-overflow: ellipsis;  display: -webkit-box;  -webkit-line-clamp: 1;  line-clamp: 1;  -webkit-box-orient: vertical;}
  .goods-list{
    .goods-item{
      display:flex;
      align-items: center;
      padding:5px 15px;
      margin-bottom:5px;
      + .goods-item{
        border-top:1px solid #ccc;
      }      
      .item-img{
        flex:0 0 80px;
        height:80px;
        border-radius: 4px;
        overflow: hidden;
        img{
          max-width:100%;
          &[lazy='loading']{
            display:block;
            width:150px;height:150px;
            margin:40px auto;
          }
        }
      }
      .item-des{
        flex:1;
        margin-left:15px;
        .title{
          margin:0;
          font-size: 14px;
          color:#333;
          line-height:18px;
          @extend .only-row;
          margin-bottom:15px;
        }
        .des{
          margin:0 0 22px;
          font-size:12px;line-height:14px;
          color:#aaa;
          @extend .only-row;
        }
        .price-count{
          display:flex;
          align-items: center;
          font-size:14px;
          line-height: 1;
          .price{
            color:#f00;            
          }
          .count{
            margin-left:auto;
            color:#333;
          }
        }
      }
    }
  } 
 
</style>
