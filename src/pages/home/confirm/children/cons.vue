<template>
  <div class="con">
    <p class="val ">费用明细</p>
    <div class="math border-bottom">
      <p>
        <span>{{this.$store.state.home.prince_now}}</span> ✖ <span>{{days}}</span>晚
      </p>
      <em>{{money}}</em>
    </div>
    <div class="all border-bottom"><span>总价(CNY)</span><span>{{money}}</span></div>
  </div>
</template>

<script>
export default {
name: 'Con',
props:['days'],
computed:{
  money(){
    return this.$store.state.home.prince_now.split('￥')[1] * this.days;
  }
}
}
</script>

<style scoped lang='scss'>
.con{
  margin: 0 70px;
  .val{
    font-size: 42px;
    color: #404040;
    margin-bottom: 88px;
    margin-top: 20px;
  }
  .math{
    display: flex;
    justify-content: space-between;
    height: 150px;
    align-items: center;
    p{
      font-size: 51px;
      color: #4B4B4B;
    }
    em{
      font-size: 51px;
      color: #747474;
    }
  }
  .all{
    display: flex;
    height: 212px;
    justify-content: space-between;
    align-items: center;
    span{
      font-size: 60px;
      color: #444444;
    }
    span:nth-of-type(2){
      color: #0F706A;
    }
  }
}

</style>