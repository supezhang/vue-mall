<template>
  <div class="profile-wrapper">
    <top-nav><span slot="center">我的</span></top-nav>
    
    <div class="profile-avatar">      
      <div class="avatar">
        <img v-if="user.name" src="../../assets/img/profile/avatar19.svg" alt="1">
        <img v-else src="../../assets/img/profile/avatar.svg" alt="2">
      </div>
      <div class="info" @click="loginClick">
        <p class="username">{{user.name?user.name:'登录/注册'}}</p>
        <img class="mobile-pic" src="../../assets/img/profile/phone.svg" alt="">
        <span class="mobile">{{user.phone?user.phone:'暂无绑定手机'}}</span>
      </div>
      <div class="login-icon"></div>
    </div>
    <div class="user-amount">
      <div class="amount-item">
        <div class="amount-count"><span class="num">{{user.money?user.money:'0.00'}}</span><span>元</span></div>
        <div class="amount-des">我的余额</div>
      </div>
      <div class="amount-item">
        <div class="amount-count"><span class="num">{{user.discount?user.discount:0}}</span><span>个</span></div>
        <div class="amount-des">我的优惠</div>
      </div>
      <div class="amount-item">
        <div class="amount-count"><span class="num">{{user.integral?user.integral:0}}</span><span>分</span></div>
        <div class="amount-des">我的积分</div>
      </div>
    </div>
    <msg @click.native="signout"></msg>    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Msg from "./childCpt/Msg.vue"
import TopNav from '@/common/topnav/TopNav'
export default {
  name: 'Profile',
  data(){
    return {
      user:{},
    }
  },
  components: {
    Msg,
    TopNav
  },
  created(){    
    this.getStore()
  },
  computed:{
    logined(){
      return sessionStorage.getItem('token')==1
    }
  },
  methods:{
    getStore(){
      if(this.logined){
        this.user = this.$store.state.user
      }else{
        this.user = {}
      }
    },
    loginClick(){
      if(!this.logined){
        this.$router.push("/logins")
      }else{
        alert("已经登录")
      }
    },
    signout(){
      sessionStorage.setItem('token',0)
      this.user = {}
    }
  }

}
</script>
<style lang="scss" scoped>
  .profile-avatar{
    display:grid;
    align-items: center;
    grid-template-columns: 60px auto;
    background-color:pink;
    grid-column-gap:20px;
    padding:15px 20px;
    color:#fff;
    border-top:1px solid #eee;
    .avatar{
      height:60px;
      border-radius: 50%;
      overflow: hidden;
      border:1px solid #fcc;
      img{
        width:100%;height:100%;border-radius: 50%;
      }
    }
    .info{
      font-size:14px;      
      .username{
        margin:0 0 5px;
      }
      .mobile-pic{
        width:20px;
        vertical-align: middle;
      }
      .mobile{
        vertical-align: middle;
      }
    }
  }
  .user-amount{
    display:grid;
    align-items: center;
    grid-template-columns: repeat(3,1fr);
    border-bottom:8px solid #eee;
    .amount-item{
      padding:14px 0;
      background:#fff;
      text-align: center;
      + .amount-item{
        border-left:1px solid #eee;
      }
      .amount-count{
        font-size:14px;
        color:#666;
        margin-bottom:5px;
        .num{
          font-weight: bold;
          font-size:24px;
          color:#ff9950;
        }
      }
      .amount-des{
        font-size:14px;
        color:#666;
      }
    }
  }
</style>

