<template>
  <div class="room_item" @click="go_detail(data.id,data.city,data)">
    <div class="img">
      <img v-lazy="data.picture" />
      <span class="icon-like iconfont icon-xin"></span>
    </div>
    <div class="type"><span>{{data.type}}</span>·<span>{{data.city}}</span></div>
    <div class="name">{{data.title}}</div>
    <div class="money"><span>{{data.prince_now}}</span><span>{{ data.prince_ago ? data.prince_ago.amount_formatted : '' }}</span><span>/晚</span></div>
  </div>
</template>

<script>
export default {
  name:'room-item',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  
  methods:{
    go_detail(id,city,people_img){
      this.$router.push(`home/detail/${id}/${city}`);
      this.$store.commit('home/setPeople_img',this.data.people_img);
      this.$store.commit('home/setDevice',this.data.device);
      this.$store.commit('home/setPrice',[this.data.prince_now, this.data.prince_ago ? this.data.prince_ago.amount_formatted : ''] );
    }
  }
}
</script>

<style scoped lang="scss">
.room_item{
  width: 450px;
  .img{
    height: 300px;
    background: #eeeeee;
    margin-bottom: 40px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    img{
      width: 100%;
    }
    .icon-like{
      position: absolute;
      font-size: 50px;
      color: white;
      top: 46px;
      right: 46px;
    }

  }
  .type{
    font-size: 30px;
    color: #5A4D39;
    margin-bottom: 25px;
  }
  .name{
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; //行数
      -webkit-box-orient: vertical;
      font-size: 40px;
      color: #4A494A;
      line-height: 60px;
      margin-bottom: 20px;
      font-weight: bold;
  }
  .money{
    font-size: 36px;
    margin-bottom: 120px;
    span:nth-of-type(1){
      font-weight: bold;
    }
    span:nth-of-type(2){
      text-decoration: line-through;
    }
  }
  
  
}

</style>