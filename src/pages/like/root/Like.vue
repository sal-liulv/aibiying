<template>
  <div class="page" id="like">
    <app-scroll class="scroll">
      <div v-if="isLogin">
        <div class="title">
          <span>{{listId.length}}</span>条收藏记录
        </div>
        <Item v-for="(item,index) in likeList" :key="index" :data="item"/>
        <!-- <Item />
        <Item />
        <Item /> -->
      </div>
      <prePage v-else></prePage>
    </app-scroll>
  </div>
</template>

<script>
import { mapState } from "vuex";
import prePage from "../pre/prePage";
import item from "./children/item";

export default {
  components: {
    prePage,
    [item.name]: item
  },
  computed: {
    ...mapState({
      isLogin: "isLogin",
      likeList: state=>state.like.likeList,
      listId: state=>state.like.listId,
    })
  },
  created() {
    this.$store.dispatch('like/likeFind')//首次进入请求收藏的数据
    if (this.$store.state.isLogin) {
      this.isLike = false;
    } else {
      this.isLike = true;
    }
  }
};
</script>
<style scoped lang="scss">
.scroll {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  .title {
    margin: 0 70px;
    padding: 120px 0;
    font-size: 70px;
    color: #454545;
    font-weight: bold;
    span {
      color: #008785;
      margin-right: 20px;
    }
  }
}
</style>