<template>
 <div class="detail-comment" v-show="commentData.cRate!==0">
   <div class="head">
     <div class="left">评论</div>
     <div class="right">更多 &gt;</div>
   </div>
   <div class="user" v-if="commentData.list">
     <div class="avatar"><img :src="commentData.list[0].user.avatar" alt=""></div>
     <span class="name">{{commentData.list[0].user.uname}}</span>
   </div>
   <div class="comment-content" v-if="commentData.list">{{commentData.list[0].content}}</div>
   <div class="tips" v-if="commentData.list">
     <span>{{commentData.list[0].created | formatTime}}</span>
     <span>{{commentData.list[0].style}}</span>
   </div>
   <div class="comment-imgs"></div>
 </div>
</template>

<script>
 export default {
  name: 'DetailComment',
  props:{
    commentData:{
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

  },
  filters:{
  
  }
 }
</script>

<style scoped lang="scss">
.head{
  display:flex;
  align-items: center;
  padding:8px 0;
  font-size:14px;
  border-bottom:1px solid #eee;
  margin-bottom:5px;
  .right{
    margin-left:auto;    
  }
}
.detail-comment{
  padding:10px 20px;
}
.user{
  display:flex;
  align-items: center;
  margin-bottom:10px;
  .avatar{
    flex:0 0 32px;
    width:32px;height:32px;
    border-radius: 50%;overflow: hidden;
  }
  .name{
    margin-left:8px;
    font-size:14px;
  }
}
.comment-content{font-size: 14px;color:#333;margin-bottom:5px;}
.tips{
  font-size:12px;color:#ccc;
  span + span{
    margin-left:10px;
  }
  } 
</style>
