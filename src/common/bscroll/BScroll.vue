<template>
 <div class="wrapper" ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
 </div>
</template>

<script>
 import BScroll from 'better-scroll'
 export default {
  name: 'BScroll',
  data () {
   return {
     scroll:null
   }
  },
  components: {

  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      pullUpLoad:true,
      probeType:3
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit("pullingUp")
      this.scroll.finishPullUp();
      this.scroll.refresh()
    })
  },
  methods:{    
    refresha(){
      return this.scroll.refresh();      
    }
  }
 }
</script>

<style scoped>

 
</style>
