<template>
 <div class="banner-item">
   <slot name="item-pic"></slot>
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

<style scoped lang='scss'>
  .banner-item{
    display:inline-block;
  }
 
</style>
