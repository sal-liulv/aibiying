<template>
  <div class="like">
    <p class="title">猜你喜欢</p>
    <app-scroll :scrollX="scrollX_data" class="scroll" >
      <div class="ul">
       <like-item v-for="(item,index) in homeLike" :key="index" :data="item" />
       <!-- <like-item />
       <like-item />
       <like-item /> -->
      </div>
    </app-scroll>
    
  </div> 
</template>

<script>
import {mapState} from 'vuex';
import item from './like_item'
export default {
name:'like',
components:{
  [item.name]:item,
},
computed:{
  ...mapState({
    homeLike:state=>state.home.homeLike,
  })
},
data(){
  return{
    scrollX_data:true
  }
},
}
</script>

<style scoped lang="scss">
.like{
  margin-left: 70px;
  .title{
    margin-right: 70px;
    font-size: 52px;
    color: #4A494A;
    border-top: 3px solid #eeeeee;
    padding-top: 50px;
    margin-bottom:60px;
  }
  .scroll{
    width: 1007px;
    height: 887px;
    display: flex;

    .ul{
      display: flex;
      flex-wrap: nowrap;
    }
  }
  
  

  
}

</style>