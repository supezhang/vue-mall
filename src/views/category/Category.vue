<template>
  <div>
    <b-scroll class="box">
      <ul class="content">
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
        <li>2</li>
      </ul>
    </b-scroll>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import BScroll from '@/common/bscroll/BScroll'
export default {
  name: 'Category',
  data(){
    return{
      scroll:null
    }
  },
  components: {
    // HelloWorld
    BScroll
  },
  mounted(){
    
  }
}
</script>
<style lang="scss" scope>
  .box{
    height:100px;
    background:red;
    overflow: hidden;
  }
</style>
