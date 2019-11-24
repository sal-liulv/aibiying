<template>
  <div class="page" id="order">
    <div v-if="isLogin">
      <app-scroll class="scroll">
        <h1 class="order-title">
          <span class="order-mount">{{orderData.length}} </span>条订单记录
        </h1>
        <child v-for="(item,index) in orderData" :key="index" :data="item" class="item"></child>
        <!-- <child class="item"></child>
        <child class="item"></child>
        <child class="item"></child>
        <child class="item"></child> -->
    </app-scroll>
    </div>
    <prePage v-else></prePage>
  </div>
</template>

<script>
import { mapState } from "vuex";
import prePage from "../pre/prePage";
import child from "../root/children/children";
export default {
  data() {
    return {
      mount: 0
    };
  },
  computed: {
    ...mapState({
      isLogin: "isLogin",
      orderData:state=>state.order.orderData,
    })
  },
  components: {
    prePage,
    child
  },
  created(){
    this.$store.dispatch('order/findAdd');
  },
   watch: {
    '$route' (to, from) {
      this.$store.dispatch('order/findAdd');
    }
   }
};
</script>

<style lang="scss" scoped>
.order-title {
  margin: 0 70px;
  padding: 120px 0;
  font-size: 70px;
  color: #454545;
  font-weight: bold;
  .order-mount {
    color: #00868c;
  }
}
.scroll{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>