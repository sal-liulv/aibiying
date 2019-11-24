<template>
  <div class="room_item" @click="go_detail(data.id,data.city,data)">
    <div class="img">
      <img v-lazy="data.picture" />
      <span class="icon-like iconfont icon-tubiaoshixinxin" :class="{show: show }" @click.stop="likeAction(data.id)"></span>
    </div>
    <div class="type"><span>{{data.type}}</span>·<span>{{data.city}}</span></div>
    <div class="name">{{data.title}}</div>
    <div class="money"><span>{{data.prince_now}}</span><span>{{ data.prince_ago ? data.prince_ago.amount_formatted : '' }}</span><span>/晚</span></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'room-item',
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
  data(){
    return{
      show:false,
      index:'',
      id:'',
    }
  },
  computed: {
    ...mapState({
      // likeList: state=>state.like.likeList,
      listId: state=>state.like.listId,
      tag: state=>state.like.tag,
    })
  },
  methods:{
    go_detail(id,city,people_img){
      this.$router.push(`home/detail/${id}/${city}`);
      this.$store.commit('home/setPeople_img',this.data.people_img);
      this.$store.commit('home/setDevice',this.data.device);
      this.$store.commit('home/setPrice',[this.data.prince_now, this.data.prince_ago ? this.data.prince_ago.amount_formatted : ''] );
    },
    likeAction(id){
      this.id = id;
      this.checkLike(this.listId,this.data.id);
      if (this.index == -1) {
        if (this.tag == 0) {//判断list是否更新
          console.log(this.data.id);
        
          this.$store.dispatch('like/likeAdd',[
            this.data.type,
            this.data.city,
            this.data.id,
            this.data.prince_now,
            this.data.title,
            this.id//判断当前点击的元素
          ])
        }else{
          console.log('您操作太频繁，请稍后再试');
        }
      }else if(this.index == 1){
        if (this.tag == 0) {//判断list是否更新
          console.log(this.data.id);

          this.$store.dispatch('like/likeDelete',[this.data.id,this.id+1])
        }else{
          console.log('您操作太频繁，请稍后再试');
        }
      }
    },
    // 根据房间id判断是否加上红心
    checkLike(listId,dataId){
      if (listId.length) {//forEach如果为空数组的时候不起作用
        for(let i = 0; i < listId.length; i++){
          if (listId[i] == dataId) {
            this.show = true;
            this.index = 1//已收藏过
            break;
          }else{
            this.show = false;
            this.index = -1//没有收藏过
          }
        }
      }else{
        this.index = -1
      }
    },
    freshLike(){
      this.checkLike(this.listId,this.data.id)//详情页数据变换重新渲染数据
    }
  },
  created(){
    this.checkLike(this.listId,this.data.id)
    this.$center.$on('freshLike',this.freshLike)//监听详情页的数据变换
  },

  watch:{
    'data.id'(newVal, oldVal){//当切换tab的时候，数据重新渲染，再次判断是否加上红心
      this.checkLike(this.listId,this.data.id)
    },
    tag:function (newVal, oldVal) {
      if (newVal != 0) {//只有在操作add和delete的时候才进入
        if (newVal == this.id ) {//add
          console.log('add成功');
          this.show = true
          this.$store.dispatch('like/likeFind')
        }else if (newVal == (this.id+1)) {//delete
          console.log('delete成功');
          this.show = false;
          this.$store.dispatch('like/likeFind')
        }else{
        }
      }
    }
  },
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
    .show{
      color: orangered;
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