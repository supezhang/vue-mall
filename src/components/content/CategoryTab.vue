<template>
 <div class="category-tab">
   <div class="item" :class="{active:index==currentIndex}" v-for="(item,index) in cateTab" :key="item" @click="itemClick(index)">
     <span class="text">{{item}}</span>
   </div>
 </div>
</template>

<script>
 export default {
  name: 'CategoryTab',
  props:{
    cateTab:{
      type:Array,
      default:function(){
        return [1,2,3]
      }
    }
  },
  data () {
   return {
     currentIndex:0
   }
  },
  components: {

  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
 }
</script>

<style scoped lang="scss">
  .category-tab{
    display:flex;
    align-items: center;
    position:sticky;
    top:44px;
    z-index: 9;
    background-color:#fff;
    .item{
      flex:1;
      text-align: center;
      .text{
        display:inline-block;
        padding:0 5px;
        font-size: 14px;
        color:#333;
        line-height:40px;
        border-bottom:2px solid transparent;
      }
      &.active{
        .text{
          color:red;
          border-bottom-color:red;
        }
      }
    }
  }
</style>
