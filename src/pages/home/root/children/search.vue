<template>
  <div class="search">
    <div class="select">
      <span v-for="item in title" :key="item.id"  
      :class="{active: item.id===selectIndex}"
      @click="checkAction(item.id)" >
      {{item.con}}
      </span>
    </div>

    <div class="city">
      <div class="city-select">
        <span class="iconfont icon-sousu search-icon"></span>
        <p>
          <span>城市</span><span class="iconfont icon-down-hollow"></span>
        </p>
        
      </div>
      <div class="area">
        <span>景点/地址/房源名</span>
        <span>定位</span>
      </div>
    </div>
    <div class="data">
      <span class="icon-data iconfont icon-rili"></span>
      <p>
        <span class="from"><em>11</em>月<em>5</em>日</span>-
        <span class="to"><em>11</em>月<em>6</em>日</span>
      </p>
    </div>
    <div class="search-home">搜索房源</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:[
        {id:1,con:'房源'},
        {id:2,con:'体验'},
      ],
      active:'active',
      selectIndex: 1 ,
    }
  },
  methods:{
    checkAction(id){
      this.selectIndex = id;
    }
  }

}
</script>

<style scoped lang="scss">
.search{
  margin: 0 70px;
  .select{
    display: flex;
    margin-bottom: 44px;
    border-radius: 20px;
    span{
      margin-right: 100px;
      padding: 40px 0;
      font-size: 40px;
      color: #474747;
      font-weight: bold;
    }
    .active{
      color:#008488;
      border-bottom:  7px solid #008488;
    }
  }
  .city{
    width: 100%;
    height: 160px;
    border: 3px solid #F1F1F3;
    box-shadow: 4px 4px 15px #CCCCCC;
    display: flex;
    border-radius: 20px;
    margin-bottom: 20px;
    .city-select{
      width: 306px;
      height: 100%;
      border-right: 3px solid #F1F1F3;
      display: flex;
      align-items: center;
      .search-icon{
        margin: 0 40px;
        font-size: 50px;
        color: #010103;
      }
      p{
        color: #008488;
        span:nth-of-type(1){
          font-size: 38px;
          margin-right: 14px;
        }
        span:nth-of-type(2){
          font-size: 25px;
        }
      }

      
    }
    .area{
      flex: 1;
      display:flex;
      height: 100%;
      align-items: center;
      justify-content: space-around;
      span{
        font-size: 38px;
      }
      span:nth-of-type(1){
        color: #38383A;
        margin-left: 50px;
      }
      span:nth-of-type(2){
        color: #008488;
        margin-right: 50px;
      }
    }
  }
  .data{
    width: 100%;
    height: 160px;
    border: 3px solid #F1F1F3;
    box-shadow: 4px 4px 15px #CCCCCC;
    display: flex;
    align-items: center;
    border-radius: 20px;

    .icon-data{
      font-size: 50px;
      color: #000000;
      padding: 0 50px;
      font-weight: bold;
    }
    p{
      font-size: 42px;
      font-weight: bold;
      color: #474747;
    }
  }
  .search-home{
    width: 100%;
    height: 160px;
    border: 3px solid #F1F1F3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    color: #F6F4F9;
    font-weight: bold;
    background: #028388;
    margin-top: 43px;
    border-radius: 20px;
  }
}

</style>