<template>
  <div class="page modal-page" id="login">
    <app-header>
      <van-icon class="right-btn" slot="right-btn" @click="close" name="cross" />
    </app-header>
    <div class="content">
      <h1 class="login-title" v-if="changeTitle">手机动态密码登录</h1>
      <h1 class="login-title" v-else>账号密码登录</h1>
      <p class="login-words" v-if="changeWord">已经注册的手机号直接获取验证码登录，未注册的会自动进行注册</p>
      <p class="login-words" v-else>使用已注册的手机号登录</p>
      <p class="login-tel">手机号码</p>
      <div class="login-telNumber login-con">
        <div class="telDefaul" v-show="changeDefaul">+86</div>
        <input type="tel" v-model="tel"/>
      </div>

      <div v-if="isShowCode">
        <div v-show="showCode">
          <p class="login-tel">验证码</p>
          <div class="login-pwd login-con">
            <input type="text" v-model="code"/>
          </div>
        </div>
      </div>

      <div v-else>
        <p class="login-tel">密码</p>
        <div class="login-code login-con">
          <input type="password" ref="pwd" v-model="psd" />
          <span @click="showPassword" class="iconfont icon-yanjing-bi" v-if="showPwd"></span>
          <span @click="showPassword" class="iconfont icon-yanjing-bihe" v-else></span>
        </div>
      </div>

      <div class="getCode-btn" @click="getCodeAction" v-if="isShow">获取验证码</div>
      <div class="getCode-btn" @click="loginAction" v-else>登录</div>

      <span class="type-one" v-if="changeType" @click="changeAction1">使用账号密码登录</span>
      <span class="type-one" v-else @click="changeAction2">手机动态密码登录</span>
      <div class="foot">
        <div class="type-two">或使用微信登录</div>
        <div class="wechat">
          <div class="iconfont icon-weixin"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mineService from '../../../services/mineService';
const PASSWORD_METHOD = true;
const PHONE_CODE_METHOD = false;
export default {
  data() {
    return {
      loginMethod: PASSWORD_METHOD,
      isShowCode:true,
      changeTitle: true,
      changeWord: true,
      changeDefaul: true,
      changeType: true,
      showCode: false,
      loginAnimate: false,
      showPwd: true,
      isShow: true,
      tel:'',
      psd:'',
      code:'',
      getCode:''
    };
  },
  methods: {
    close() {
      this.$center.$emit("toggleLogin", false);
    },
    changeAction1() {
      this.isShow = false;
      this.isShowCode = !this.isShowCode;
      this.changeTitle = !this.changeTitle;
      this.changeWord = !this.changeWord;
      this.changeDefaul = !this.changeDefaul;
      this.changeType = !this.changeType;
    },
    changeAction2() {
      this.isShow = true;
      this.isShowCode = !this.isShowCode;
      this.changeTitle = !this.changeTitle;
      this.changeWord = !this.changeWord;
      this.changeDefaul = !this.changeDefaul;
      this.changeType = !this.changeType;
    },
    async getCodeAction() {
      this.showCode = true;
      this.isShow = !this.isShow;
      this.loginMethod = false;
      let result = await mineService.requestSendCode(this.tel);
      if(result){
        this.getCode = result;
        // let num = 60;
        
      }else{
        this.$Toast('发送失败，请重试！');
      }
    },
    showPassword() {
      this.showPwd = !this.showPwd;
      if (this.showPwd) {
        this.$refs.pwd.type = "password";
      } else {
        this.$refs.pwd.type = "text";
      }
    },
    //登录事件
    async loginAction(){
      //密码登录
      if(this.loginMethod){
        if(!this.tel||!this.psd){
          this.$Toast.fail('输入不能为空！');
        }else{
          let error = await mineService.requestLoginByPassword(this.tel,this.psd);
          if(error){
            this.$Toast(error);
          }else{
            this.$toast.success('登录成功');
            localStorage.setItem('user',this.tel);
            // this.close();
            this.$store.dispatch('handleLoginAction',true);
            window.location.reload();
          }
        }
      }else{
        //验证码登录
        if(this.code == this.getCode){
          //登录
          let error = await mineService.requestLoginByCode(this.tel);
          if(error){
            this.$Toast(error);
          }else{
            //登录进去了
            this.$toast.success('登录成功');
            localStorage.setItem('user',this.tel);
            this.close();
            this.$store.dispatch('handleLoginAction',true);
            window.location.reload();
          }
        }else{
          //过期了
          this.$Toast('验证码失效，请重新发送');
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  position: absolute;
  top: 180px;
  overflow: auto;
  .login-title {
    font-weight: bold;
    font-size: 103px;
    color: #484848;
    margin-top: 110px;
    margin-left: 70px;
  }
  .login-words {
    font-size: 57px;
    color: #484848;
    margin-left: 70px;
    margin-top: 27px;
    line-height: 80px;
  }
  .login-tel {
    font-size: 50px;
    color: #484848;
    margin-left: 70px;
    margin-top: 115px;
  }
  .login-con {
    width: 940px;
    height: 180px;
    margin: 0 auto;
    border-bottom: 1px solid #ebebeb;
    padding: 40px 10px;
    box-sizing: border-box;
    position: relative;
    .telDefaul {
      float: left;
      width: 140px;
      height: 88px;
      border: 1px solid #484848;
      text-align: center;
      line-height: 88px;
      color: #484848;
      font-weight: bold;
    }
    input {
      width: 750px;
      height: 100%;
      padding-left: 20px;
      box-sizing: border-box;
      border: none;
      font-size: 50px;
    }
    .icon-yanjing-bi {
      position: absolute;
      font-size: 60px;
    }
  }
  .getCode-btn {
    width: 940px;
    height: 150px;
    margin: 70px auto 80px auto;
    background: #008489;
    font-size: 50px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 150px;
    border-radius: 15px;
  }
  .type-one {
    margin-left: 70px;
    font-size: 48px;
    color: #008489;
  }

  .foot {
    width: 100%;
    position: relative;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    .type-two {
      font-size: 48px;
      color: #484848;
      margin: 60px auto 75px auto;
      text-align: center;
      position: relative;
    }
    .type-two::before {
      content: "";
      display: block;
      position: absolute;
      left: 70px;
      top: 20px;
      background: #008489;
      width: 200px;
      height: 2px;
    }
    .type-two::after {
      content: "";
      position: absolute;
      right: 70px;
      top: 20px;
      display: block;
      background: #008489;
      width: 200px;
      height: 2px;
    }
    .wechat {
      width: 164px;
      height: 164px;
      border: 2px solid #1bad19;
      margin: 0 auto;
      border-radius: 50%;
      text-align: center;
      line-height: 164px;
      .icon-weixin {
        font-size: 68px;
        color: #1bad19;
      }
    }
  }
  .van-toast__text{
    width:500px;
    height: 500px;
  }
}
</style>