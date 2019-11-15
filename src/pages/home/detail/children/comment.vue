<template>
  <div class="comment" >
    <p class="title">评论({{this.$store.state.home.commentNum}})</p>
    <div class="con">
      <comment-item  :class="{active: showTxt==='收起'}" class="item" v-for="(item,index) in homeComment " :key="index" :data="item" />
    </div>
    <div class="loader" @click="loader_comment">{{loaderComment}}</div>
    <div class="som_all" v-show="showActive" @click="showBtn">{{showTxt}}</div>
  </div>
</template>

<script>
import comment_item from './comment_item'
import {mapState} from 'vuex';
export default {
name:'people-comment',
props:['homeComment'],
components:{
  [comment_item.name]:comment_item,
},
data(){
  return{
    offset: 0,
    loaderData:'',
    showActive:false,
    showTxt:'收起',
  }
},
computed:{
  ...mapState({
    loaderComment:state=>state.home.loaderComment,
  }),
  
},
methods:{
  loader_comment(){
    console.log(this.offset,this.$store.state.home.commentNum);
    
    if (! (this.offset > this.$store.state.home.commentNum)) {
      this.$parent.$parent.comment(this.$parent.$parent.id,this.offset,4)
      this.showActive = true
    }else{
      console.log('评论加载完毕');
      this.$store.commit('home/setLoaderComment','评论加载完毕');
    }
    this.offset += 4 ;
  },
  showBtn(){
    if (this.showTxt == '展开') {
      this.showTxt = '收起'
    }else{
      this.showTxt = '展开'
      
    }
  }
}
}
</script>
<style scoped lang="scss">
.comment{
  margin: 100px 70px;
  min-height: 200px;
  border-top: #F2F2F2 solid 3px;
  .title{
    margin-top: 77px;
    margin-bottom: 30px;
    font-size: 52px;
    color: #4A494A;
  }
  .con{
    .item{
      padding-bottom: 80px;
      padding-top: 30px;
      border-top: 3px solid #eeeeee;
      display: none;
    }
    .item:first-child{
      display: block ;
      border-top: none  ;
    }
    .active{
      display: block;
    }
  }

  .loader{
    font-size: 40px;
    color: #00868C;
  }
  .som_all{
    width: 100px;
    position: relative;
    font-size: 40px;
    color: #00868C;
    text-align: right;
    top: -40px;
    left: 90%;
    

  }
}
</style>