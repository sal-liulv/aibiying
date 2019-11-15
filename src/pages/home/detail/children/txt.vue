<template>
  <div class="txt">
    <p class="title">详情</p>
    <div class="con">
      <p class="item" :style="line">{{txt.neighborhood_overview}}</p>
      <p v-show="show" class="item">{{txt.space}}</p>
      <p v-show="show" class="item">{{txt.summary}}</p>
      <p v-show="show" class="item">{{txt.transit}}</p>
    </div>
    <div class="look" @click="active">{{show_txt}}</div>
  </div>
</template>

<script>
export default {
props:['txt'],
data(){
  return{
    show:false,
    show_txt:'查看更多详情',
    line:{"-webkit-line-clamp":3}
  }
},
methods:{
  active(){
    this.show = ! this.show;
    if (this.show) {
      this.show_txt = '收起';
      this.line = {"-webkit-line-clamp":''}
    }else{
      this.show_txt = '查看更多详情';
      this.line = {"-webkit-line-clamp":3}
    }
  }
}
}

</script>

<style scoped lang="scss">
.txt{
  margin: 100px 70px;
  border-top: 3px solid #EFEBEF;
  .title{
    margin-top: 77px;
    font-size: 52px;
    color: #4A494A;
  }
  .con{
    width: 100%;
    .item:nth-of-type(1){
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    .item{
      font-size: 40px;
      line-height: 70px;
      color: #4A494A;
      margin-top: 40px;
    }
  }
  .look{
    margin-top: 40px;
    margin-bottom: 75px;
    font-size: 40px;
    color: #00868C;
  }
  
}

</style>