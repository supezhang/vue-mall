<template>
 <div class="toast">
   <slot>{{toastTxt}}</slot>
 </div>
</template>

<script>
 export default {
  name: 'Toast',
  props:{
    toastTxt:{
      type:String,
      default:''
    }
  },
  data () {
   return {

   }
  },
  components: {

  }
 }
</script>

<style scoped>
  .toast{
    position:fixed;
    left:50%;
    top:50%;
    z-index: 29;
    transform:translate(-50%);
    font-size:14px;
    color:#fff;
    background-color:rgba(0,0,0,.8);
    border-radius: 4px;
    padding:8px 20px;
  }
 
</style>
