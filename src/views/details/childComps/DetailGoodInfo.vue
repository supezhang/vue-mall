<template>
 <div class="detail-good-info" v-if="detailInfo">
   <p v-if="detailInfo.desc" class="desc">{{detailInfo.desc}}</p>
   <p v-if="detailInfo.detailImage" class="key">{{detailInfo.detailImage[0].key}}</p>
   <div class="imgs-box" v-if="detailInfo.detailImage">
     <img v-for="item in detailInfo.detailImage[0].list" :src="item" alt="" @load="imgLoad"/>
   </div>
 </div>
</template>

<script>
 export default {
  name: 'DetailGoodInfo',
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      counter:0,
      imgsLength:0
    }    
  },
  methods:{
    imgLoad(){
      // console.log('img');
      // if(this.counter == this.detailInfo.detailImage[0].list.length){
      if(++this.counter == this.imgLength){
        // console.log('img');
        this.$emit("imageLoad")
      }
      // this.$emit("imageLoad")
    }
  },
  watch:{
    detailInfo(){
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  }
  
 }
</script>

<style scoped>
 .imgs-box{
   text-align: center;
 }
 .key,
 .desc{
   margin:4px 20px;
   font-size:14px;
   color:#666;
 }
</style>
