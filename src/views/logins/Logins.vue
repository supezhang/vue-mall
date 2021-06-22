<template>
 <div class="login-wrapper">
   <form>
    <div class="form-body">
      <div class="row">
        <div class="label">账 号</div>
        <div class="promit"><input type="text" v-model="username"></div>
      </div>
      <div class="row">
        <div class="label">密 码</div>
        <div class="promit"><input type="password" v-model="password"></div>
      </div>
    </div>
    <div class="form-foot">
      <div class="btns">
        <input class="primary btn" @click="logins" value="登录" type="button"/>
        <input class="btn" type="reset" value="取消" @click="$router.go(-1)"/>
      </div>
    </div>     
   </form>
 </div>
</template>

<script>
 import store from '@/store'
 export default {
  name: 'Login',
  data () {
   return {
     username:'',
     password:''
   }
  },
  components: {

  },
  methods:{
    logins(){
      let islogin = this.username == store.state.user.name && this.password == store.state.user.password      
      if(islogin){
        this.$store.commit('changeuserid',1)
        this.$router.push('/home')
        sessionStorage.setItem("token",1)
      }else{
        alert("账号与密码不匹配")
      }      
    }
  }
 }
</script>

<style scoped  lang="scss">
  .login-wrapper{
    padding:10px 20px;
    margin-top:30vh;    
  }
  form,
  .form-body{
    display:grid;
    grid-row-gap:10px;
  }
  .row{
    display:grid;
    grid-template-columns:20% auto;
    grid-row-gap:20px;
    align-items: center;
    .label{
      font-size:14px;
      color:#666;
      line-height:32px;
    }
    .promit{
      input{
        outline:none;
        height:32px;
        line-height:32px;
        padding:0 10px;
        border:1px solid #ccc;
        width:100%;
      }
    }
  }
  .form-foot{
    display:grid;
    justify-content: center;
    padding-top:10px;
    .btn{
      outline: none;
      font-size:14px;
      line-height:32px;
      border:1px solid #ccc;
      background:none;
      border-radius: 4px;
      padding:0 20px;
      line-height: 30px;
      & + .btn{
        margin-left:10px;
      }
      &.primary{
        background-color: #f00;
        border-color: #f00;
        color:#fff;
      }
    }
  }
 
</style>
