<template>
  <div class="comment_item">
    <div class="top">
      <div class="img">
          <img :src="data.reviewer.picture_url" alt="" class="header">
      </div>
      <p class="img_value">
        <span>{{data.reviewer.first_name}}</span>
        <span>{{data.localized_date}}</span>
      </p>
    </div>
    <div class="bottom">
      <p>{{data.comments}}</p>
    </div>
  </div>
</template>

<script>
export default {
name:'comment-item',
props:['data'],
methods:{
  
}
}
</script>

<style scoped lang="scss">
.top{
  display: flex;
  height: 145px;
  align-items: center;
  .img{
    width: 145px;
    height: 100%;
    border-radius: 50%;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background: #eeeeee;
    img{
      width: 100%;
    }
  }
  .img_value{
    margin-left: 50px;
    span{
      display: block;
    }
    span:nth-of-type(1){
      font-size: 35px;
      color: #4A494A;
      margin-bottom: 16px;
      font-weight: bold;
    }
    span:nth-of-type(2){
      font-size: 35px;
      color: #4A494A;
      margin-bottom: 16px;
    }
  }
}
.bottom{
  position: relative;
  p:nth-of-type(1){
    margin-top: 50px;
    font-size: 40px;
    color: #4A494A;
    line-height: 62px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:3;
  }
  p:nth-of-type(2){
    text-align: right;
    margin-top: 30px;
    font-size: 35px;
    color: #40A4A9
  }

 
  
}

</style>