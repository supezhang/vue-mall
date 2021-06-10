
<template>
  <div class="cart-wrapper">
    <top-nav><span slot="center">购物车{{$store.state.cartList.length}}</span></top-nav>
    <div class="goods-list">
      <div class="goods-item" v-for="item in $store.state.cartList">
        <div class="item-check" @click="itemCheck">
          <span v-show="!checked" class="mall-icon check-outline"></span>
          <span v-show="checked" class="mall-icon icon-checked"></span>
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
    <!-- 结算 -->
    <div class="buy-box">
      <div class="left-count">
        <div class="checkbox">
           <span v-show="!checked" class="mall-icon check-outline"></span>
          <span v-show="checked" class="mall-icon icon-checked"></span>
        </div>       
        <div class="price-sum">123.3</div>
      </div>
      <div class="right-buy">去结算</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TopNav from '@/common/topnav/TopNav'
export default {
  name: 'Cart',  
  data(){
    return{
      checked:false
    }  
  },
  components: {
    TopNav,    
  },
  methods:{
    itemCheck(){
      this.checked = !this.checked
    }
  }
}
</script>

<style lang="scss" scoped>
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
      .item-check{
        flex:0 0 20px;
        margin-right:10px;
        .check-outline{
          width:20px;height:20px;border:1px solid #ccc;
          border-radius: 50%;
        }
      }
      .item-img{
        flex:0 0 80px;
        height:80px;
        border-radius: 4px;
        overflow: hidden;
        img{
          max-width:100%;
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
