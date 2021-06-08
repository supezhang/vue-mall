<template>
 <div class="dots">
   <slot class="dot"></slot>
 </div>
</template>

<script>
 export default {
  name: 'BannerDots',
  // props:{
  //   dots:{
  //     type:Number
  //   }
  // },
  data () {
   return {
     currentIndex:0
   }
  },
  components: {

  }
 }
</script>

<style scoped lang="scss">
  .dots{
    display:flex;
    align-content: center;
    align-items: center;
    position:absolute;
    left:0;right:0;
    bottom:15px;
    .dot{
      width:8px;height:8px;border-radius: 50%;
      background-color:rgba(255,255,255,.4);
      &.active{
        background-color:red;
      }
    }
  }
 
</style>
