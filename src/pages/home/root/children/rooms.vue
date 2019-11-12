<template>
  <div class="rooms">
    <p class="title">
      <span>{{data.title}}</span>
      <span>{{data.subtitle}}</span>
    </p>
    <app-scroll :scrollX="scrollX_data" class="scroll" >
      <ul>
        <li :class="{active: item.name===selectIndex}" 
          v-for="(item,index) in data.city" :key="index" 
          @click="checkAction(item.name)" >{{item.name}}
        </li>
      </ul>
    </app-scroll>
    <div class="room">

      <room-item class="item"  v-for="(item,index) in showData" :key="index"
      :data="item"
      />

    </div>
    

  </div>
</template>

<script>
import room_item from './room_item'
export default {
  components:{
    [room_item.name]: room_item,
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
      scrollX_data:true,//横向滚动
      selectIndex:this.data.city[0].name,
      
    }
  },
  computed:{
    showData(){
      let data = [];
      this.data.list.forEach(item=>{
        if (this.selectIndex == item.city) {
          data.push(item)
        }
      })
      return data;
      
    }
  },
  methods:{
    checkAction(index){
      this.selectIndex = index;
    }
  },

}
</script>

<style scoped lang="scss">
.rooms{
  margin-top: 130px;
  margin-bottom: 80px;

  .title{
    margin: 0 0 60px 70px;
    span{
      display: block;
    }
    span:nth-of-type(1){
      color: #4A494A;
      font-size: 65px;
      margin-bottom: 43px;
      font-weight: bold;
    }
    span:nth-of-type(2){
      color: #4A494A;
      font-size: 50px;
    }
  }
  .scroll{
    width: 92%;
    height: 135px;
    display: flex;
    margin-left: 70px;
    flex-wrap: nowrap;
    margin-bottom: 82px;
    ul{
      display: flex;
      height: 100%;
      li{
        display: flex;
        box-sizing: border-box;
        width: 225px;
        height: 100%;
        border: 2px solid #DEDBDE;
        box-shadow: 4px 4px 15px #CCCCCC;
        margin-right: 25px;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        color: #4A494A;
        font-size: 40px;
        font-weight: bold;
      }
      .active{
        background: #00868C;
        color: white;
      }
    }
  }
  .room{
    margin: 0 70px;
    display: flex;
    flex-wrap: wrap;
    .item:nth-of-type(odd){
      margin-right: 35px;
    }
  }
}


</style>