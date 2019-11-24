<template>
  <div class="data border-bottom" @click="selectDate">
    <p>
      <span>入住日期</span>
      <span>{{start}}</span>
    </p>
    <p>
      <span>退房日期</span>
      <span>{{end}}</span>
    </p>
    <p>
      <span>晚数</span>
      <span>{{days}} 晚</span>
    </p>
  </div>
</template>

<script>
export default {
  name:'Data',
  props:['start','end','days','selecte'],
  methods:{
    selectDate(){
      this.$emit('selecte',true);
    }
  }

}
</script>

<style scoped lang="scss">
.data{
  height: 235px;
  display: flex;
  align-items: center;
  margin: 0 70px;
  p{
    flex: 1;
    display: flex;
    flex-direction:column;
    align-items: center;
    height: 60%;
    span:nth-of-type(1){
      font-size: 40px;
      color: #474747;
      margin-bottom: 20px;
    }
    span:nth-of-type(2){
      font-size: 50px;
      color: #188078;
    }
  }
  p:nth-of-type(1){
    align-items: flex-start;
  }
  p:nth-of-type(2){
    align-items:center;
    margin-left: 20px;
    margin-left: 20px;
  }
  p:nth-of-type(3){
    box-sizing: border-box;
    align-items:flex-end;
    padding-right: 10px;
  }
  
  
}

</style>