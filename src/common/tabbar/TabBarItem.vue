<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="item-icon">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-text" :style="styleClass">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
 export default {
  name: 'TabBarItem',
  props:{
    path:String,  
    activeColor:{
      type:String,
      default:"blue"
    }
  },
  data () {
   return {
    //  isActive:false
   }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    styleClass(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path)
    }
  }
 }
</script>

<style lang="scss" scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    cursor: pointer;
    &.active{
      .item-text{
        // color:#f00;
      }
    }
    .item-icon{
      img{
        display:block;
        margin:3px auto;
      }
    }
    .item-text{
      font-size:14px;      
    }
  }

</style>
