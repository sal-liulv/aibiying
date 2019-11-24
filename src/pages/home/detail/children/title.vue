<template>
  <div class="title">
    
    <div class="text">
      <p class="p1"><span>{{city}}</span> · <span>{{text.roomAndPropertyType}}</span></p>
      <p class="p2">{{text.title}}</p>
      <div class="header-img"><img :src="this.$store.state.home.people_img" alt=""></div>
    </div>
    <ul class="list">
      <li class="item" 
        :class="[{color1 : index == 0},{color2: index == 1}]"
        v-for="(item,index) in text.previewTags" 
        :key="index">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['city','text'],
}
</script>

<style scoped lang="scss">
.title{
  margin: 0 70px;
  .text{
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-bottom: 68px;
    .p1{
      font-size: 40px;
      color: #39556B;
      margin-top: 75px;
      margin-bottom: 10px;
    }
    .p2{
      width: 700px;
      font-size: 50px;
      color: #4A494A;
      font-weight: bold;
      line-height: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; //行数
      -webkit-box-orient: vertical;
    }
    .header-img{
      position: absolute;
      width: 144px;
      height: 144px;
      border-radius: 50%;
      top: 118px;
      right: 17px;
      overflow: hidden;
      img{
        width: 100%;
        background: #eeeeee;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
        
      }
      
    }
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    .item{
      padding: 22px 18px;
      margin-right: 13px;
      margin-bottom: 12px;
      border-radius: 10px;
      background: #F7F3F7;
      color: #4A494A;
    }
    .color1{
      background: #EFF7EF;
      color: #296D00;
    }
    .color2{
      background: #F7F3EF;
      color: #6B4900;
    }
  }
}
</style>