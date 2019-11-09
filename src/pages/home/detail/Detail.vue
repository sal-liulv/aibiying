<template>
<div class="page subpage" id="detail">
  <app-header :hasBack='back'/>
</div>
</template>

<script>
export default {
  data(){
    return{
      back:true,
    }
  }

}
</script>

<style scoped lang="scss">
#detail{
  background: #eeeeee;
  
}
</style>