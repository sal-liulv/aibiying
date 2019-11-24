<template>
  <div class="content-item">
    <div class="order-card border-bottom">
      <div class="head">
        <h3 class="order-name">{{data.name}}</h3>
        <span class="order-rate">待评价</span>
      </div>
      <div class="main">
        <div class="main-left">
          <img :src="data.pic" alt="">
        </div>
        <div class="main-right">
          <span class="days">总共 {{data.allData}} 晚</span>
          <span class="time">{{data.startData+'  ~  '+data.endData}}</span>
          <span class="money">总价：￥{{data.money}}</span>
        </div>
      </div>
      <div class="foot">
        <span class="rate">评价</span>
        <span class="order-agin">再次预订</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['data'],
  data() {
    return {
      days: 1,
      startTime: "2019-11-16",
      endTime: "2019-11-17",
      money: 171.0
    };
  }
};
</script>

<style scoped lang="scss">
.content-item {
  padding: 0 0.64815rem;
  box-sizing: border-box;
  margin-top: 30px;
  .order-card {
    width: 100%;
    margin: 80px 0 20px;
    padding: 20px 20px 40px;
    box-sizing: border-box;
    border-radius: 15px;
    .head {
      display: flex;
      justify-content: space-between;
      padding-bottom: 20px;
      box-sizing: border-box;
      .order-name {
        font-size: 48px;
        font-weight: bold;
      }
    }
    .main {
      display: flex;
      margin: 40px 0;
      align-items: center;
      .main-left {
        width: 250px;
        height: 180px;
        // background: #00868c;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
        img{
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          border-radius: 20px;
        }
      }
      .main-right {
        margin-left: 40px;
        display: flex;
        flex-direction: column;
        line-height: 50px;
        span {
          color: #666;
          font-size: 40px;
          margin-bottom: 20px;
        }
        span:nth-of-type(1){
          color: #000000;
        }
        span:nth-of-type(2){
          font-weight: bold;
        }
        span:nth-of-type(3){
          font-weight: bold;
          color: #00868C;
        }

        
      }
    }
    .foot {
      display: flex;
      justify-content: flex-end;
      span {
        text-align: center;
        line-height: 80px;
        width: 180px;
        height: 80px;
        border: 2px solid #ccc;
        border-radius: 15px;
        margin-left: 40px;
      }
    }
  }
}
</style>