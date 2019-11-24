<template>
  <div class="confirm ">
    <app-header :hasBack='hasBack'> <span class="slot-title" slot="right-btn" >{{homeDetail.title}}</span> </app-header>
    <Title :homeDetail='homeDetail'/>
    <Data :start='my_start' :end='my_end' :days='my_day' @selecte="selecteData"/>
    <Con :days='my_day' />
    <div class="go" @click="orderAction">预定</div>
    <calendar
      :minDate="minDate"
      :dafaultDate="defaultDate"
      @change="onChange"
      mode="during"
      :show.sync="isShow"
    />
  </div>
</template>

<script>
import title from './children/title'
import data from './children/data'
import con from './children/cons'
import {mapState} from 'vuex';
export default {
  components:{
    [title.name]:title,
    [data.name]:data,
    [con.name]:con,
  },
  data(){
    return{
      hasBack:true,
      minDate: new Date(),
      isShow: false,
      defaultDate: [],
      start: "",
      end:"",
      days: "",
      my_day : '',
      my_start:'',
      my_end :'',
    }
  },
  computed:{
    ...mapState({
      homeDetail:state=>state.home.homeDetail,
      flag:state=>state.order.flag,
    })
  },
  methods:{
    onChange(startDate, endDate) {
      this.start = JSON.stringify(startDate.map(item => item.format("YYYY-MM-DD")));
      let days = this.start.substr(23,2) - this.start.substr(10,2)
      if(days<=0){
        days = 1;
      }else{
        this.my_day = days;
      }
      this.my_start = this.start.substr(2,10);
      this.my_end = this.start.substr(15,10);
    },
    selecteData(e){
      this.isShow = true;
    },
    orderAction(){
      let data = this.homeDetail;
      let orderData = {};
      orderData.id = data.listingId;
      orderData.name = data.roomAndPropertyType;
      orderData.pic = data.photos[0].src;
      orderData.startData = this.my_start;
      orderData.endData = this.my_end;
      orderData.allData = this.my_day;
      orderData.money = this.$store.state.home.prince_now.split('￥')[1] * this.my_day;
      this.$store.dispatch('order/orderAdd',orderData);
    }
  },
  watch:{
    'flag'(newVal,oldVal){
      if (newVal) {
        this.$router.push('/order');
        this.$store.commit('order/setFlag',false);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.confirm{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  background: white;
  z-index: 100;
  .slot-title{
    width: 70%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-sizing: border-box;
    padding: 0 50px;
  }
  .go{
    margin: 0 70px;
    background: #FF5B5A;
    height: 152px;
    line-height: 152px;
    text-align: center;
    color: white;
    font-size: 50px;
    margin-top: 50px;
  }


}

</style>