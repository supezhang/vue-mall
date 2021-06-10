<template>
 <div class="back-top">
   <span class="icon"></span>
 </div>
</template>

<script>
 export default {
  name: 'BackTop'
 }
</script>

<style scoped lang="scss">
  .back-top{
    position:fixed;
    right:10px;
    bottom:70px;
    z-index: 19;    
    .icon{
      box-shadow: 0 0 8px 8px #ddd;
      display:inline-block;
      width:32px;height:32px;
      border-radius: 50%;
      background-size:contain;
      background-repeat: no-repeat;
      background-position: center;
      background-image:url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjIyNzczNTc2OTkzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM4ODUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMS41IDEwMi41Yy0yMjUuMyAwLTQwOS42IDE4NC4zLTQwOS42IDQwOS42czE4NC4zIDQwOS42IDQwOS42IDQwOS42IDQwOS42LTE4NC4zIDQwOS42LTQwOS42LTE4NC4zLTQwOS42LTQwOS42LTQwOS42eiBtLTU2LjMgNzE2LjhoLTMwLjd2LTMwLjdoMzAuN3YzMC43eiBtMC01MS4yaC0zMC43di0zMC43aDMwLjd2MzAuN3ogbTc2LjggODcuMWgtNDYuMXYtNDFoNDF2NDFoNS4xeiBtMC02MS41aC00Ni4xdi00MWg0MXY0MWg1LjF6IG01Ni4zIDI1LjZoLTMwLjd2LTMwLjdoMzAuN3YzMC43eiBtMC01MS4yaC0zMC43di0zMC43aDMwLjd2MzAuN3ogbTAtMzAyLjF2MjQwLjZINDI0LjRWNDY2SDMwNi43bDIwNC44LTI0NS44TDcxNi4zIDQ2NmgtMTI4eiBtMCAwIiBmaWxsPSIjZmY5OTk5IiBwLWlkPSIzODg2Ij48L3BhdGg+PC9zdmc+');
    }
  }
 
</style>
