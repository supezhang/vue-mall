<template>
 <div class="banner-wrapper">
   <div class="banner-content">
    <slot></slot>
   </div>
 </div>
</template>

<script>
 export default {
  name: 'Banner',
  data () {
   return {

   }
  },
  components: {

  }
 }
</script>

<style lang="scss" scoped>
  .banner-wrapper{
    width:100%;
    overflow: hidden;
    .banner-content{
      white-space:nowrap;
      animation:remove 8s infinite;
    }
  }
  @keyframes remove {
    0%{
      transform:translateX(0)
    }
    12%{
      transform:translateX(0)
    }
    25%{
      transform:translateX(-100%)
    }
    37%{
      transform:translateX(-100%)
    }
    50%{
      transform:translateX(-200%)
    }
    62%{
      transform:translateX(-200%)
    }
    75%{
      transform:translateX(-300%)
    }
    88%{
      transform:translateX(-300%)
    }

  }
 
</style>
