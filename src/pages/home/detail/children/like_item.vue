<template>
  <div class="like_item" @click="go_detail(data.id,data.city,data)">
    <div class="img">
      <img :src="data.picture" alt="">
      <span class="icon-like iconfont icon-xin"></span>
    </div>
    <div class="txt">
      <div class="type"><span>{{data.type}}</span>·<span>{{data.city}}</span></div>
      <div class="name">{{data.title}}</div>
      <div class="money"><span></span>{{data.prince_now}}/晚</div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name:'like-item',
  props:['data'],
  methods:{
   go_detail(id,city,people_img){
      this.$router.replace(`home/detail/${id}/${city}`);
      // this.$store.commit('home/setPeople_img',this.data.people_img);
      // this.$store.commit('home/setDevice',this.data.device);
      // this.$store.commit('home/setPrice',[this.data.prince_now, this.data.prince_ago ? this.data.prince_ago.amount_formatted : ''] );
    }

  }
}
</script>

<style scoped lang="scss">
.like_item{
  width: 771px;
  margin-right: 36px;
  .img{
    position: relative;
    width: 100%;
    height: 518px;
    background: #eeeeee;
    overflow: hidden;
    margin-right: 40px;
    img{
      width: 100%;
      border-radius: 30px;
    }
    .icon-like{
      position: absolute;
      top: 45px;
      right: 45px;
      font-size: 46px;
      color: white;
    }
  }
  .txt{
    margin-top: 36px;
    .type{
      font-size: 35px;
      color: #94456B;
      margin-bottom: 30px;
    }
    .name{
      width: 90%;
      font-size: 47px;
      color: #4A494A;
      line-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; //行数
      -webkit-box-orient: vertical;
    }
    .money{
      font-size: 47px;
      color: #00868C;
      margin-top: 30px;
    }


  }
}

</style>