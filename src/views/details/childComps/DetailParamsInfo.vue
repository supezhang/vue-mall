<template>
 <div class="detail-params-info">
   <div class="table-box">
     <table>
       <tbody>
         <tr v-for="item in itemParams.info">
           <td>{{item.key}}</td>
           <td>{{item.value}}</td>
         </tr>
       </tbody>
     </table>
   </div>
   <div class="table-box">
     <table>
       <tbody>
         <tr v-for="item in itemParams.rule">
           <td v-for="val in item">{{val}}</td>
         </tr>
       </tbody>
     </table>
   </div>
 </div>
</template>

<script>
 export default {
  name: 'DetailParamsInfo',
  props:{
    itemParams:{
      type:Object,
      default(){
        return {}
      }
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

<style scoped lang="scss">
.table-box{
  padding:0 20px;
}
table{
  width:100%;
  margin:20px 0;
  border-collapse: collapse;
  td{
    border:1px solid #eee;
    padding:4px 8px;
    font-size:14px;line-height:20px;
    &:first-child{
      white-space: nowrap;
    }
  }
}
 
</style>
