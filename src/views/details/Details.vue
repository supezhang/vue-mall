<template>
 <div class="details-wrapper">
   <!-- 导航 -->
    <detail-nav-bar></detail-nav-bar>
 </div>
</template>

<script>
 import DetailNavBar from './childComps/DetailNavBar'
 export default {
  name: 'Details',  
  data () {
   return {
     iid:""
   }
  },
  components: {
    DetailNavBar,
  },
  created(){
    this.iid = this.$route.params.iid
  }
 }
</script>

<style scoped>

 
</style>
