<template>
  <div>
    <s-header :mTitle="'登录'"></s-header>
    <section class="sec-body">
      <div class="login-page">
        <div class="img-logo">
          <img src="../../assets/sirius/icon_login_logo.png" class="logo" />
        </div>
        <div class="login-text">
          <input
            @mouseenter="focusText"
            @mouseleave="blurText"
            v-model="username"
            type="text"
            class="login-username"
            placeholder="Email address"
          />
          <i
            class="iconfont icon-close"
            data-close="username"
            v-show="!usernameClose"
            @click="clearText"
          ></i>
        </div>
        <div class="login-text">
          <input
            @mouseenter="focusText"
            @mouseleave="blurText"
            v-model="password"
            ref="passwordText"
            type="password"
            class="login-password"
            placeholder="Password"
          />
          <i
            class="iconfont icon-close"
            data-close="password"
            v-show="!passwordClose"
            @click="clearText"
          ></i>

          <img
            src="../../assets/sirius/icon_password_hidden.png"
            class="icon-eye hidden"
            @click="changeType"
            v-if="!passwordType"
          />
          <img
            src="../../assets/sirius/icon_password_show.png"
            class="icon-eye show"
            @click="changeType"
            v-else
          />
        </div>
        <button
          class="login-button"
          :class="{'active' : removeSpace(username)&&removeSpace(password)}"
          @click="loginSubmit"
        >login in</button>
      </div>
    </section>
  </div>
</template>

<script>
import sHeader from "components/common/s-header";
import { removeSpace } from "../../common/js/util";

export default {
  data() {
    return {
      username: "",
      password: "",
      errMsg: "",
      usernameClose: true,
      passwordClose: true,
      passwordType: false
    };
  },
  methods: {
    focusText(e) {
      let $className = e.currentTarget.className;
      $className === "login-username"
        ? (this.usernameClose = false)
        : (this.passwordClose = false);
    },
    blurText(e) {
      let $className = e.currentTarget.className;
      $className === "login-username"
        ? (this.usernameClose = true)
        : (this.passwordClose = true);
    },
    clearText(e) {
      let $close = e.currentTarget.getAttribute("data-close");
      console.log($close);
      this[$close] = "";
    },

    changeType() {
      let $type = this.$refs.passwordText.getAttribute("type"),
        value = "";
      console.log($type);
      $type === "password" ? (value = "text") : (value = "password");
      this.$refs.passwordText.setAttribute("type", value);
      this.passwordType = !this.passwordType;
    },

    removeSpace(value) {
      return removeSpace(value);
    },
    loginSubmit() {
      if (!this.username || !this.password) {
        return;
      }
      this.$router.push("./vpnline");

      userLogin(this.username, this.password).then(res => {
        this.errMsg = "";
        this.$router.push("./vpnline");
      });
    }
  },
  components: {
    sHeader
  }
};
</script>

<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";

.sec-body {
  position: absolute;
  width: 100%;
  top: 128px;
  left: 0;
  bottom: 0;
  background: #4e505f;

  .login-page {
    position: relative;
    width: 900px;
    margin: 0 auto;
    .img-logo {
      width: 100%;
      padding: 50px 0;
      text-align: center;
      img {
        width: 400px;
        height: 80px;
      }
    }
    .login-text {
      width: 100%;
      height: 100px;
      @include fj;
      @include boxSizing;
      margin-top: 40px;
      background: #fff;
      font-size: 40px;
      line-height: 100px;
      padding: 0 30px;
      .iconfont {
        font-size: 26px;
        color: #cccccc;
      }
      input {
        width: 100%;
        height: 100px;
        margin-right: 30px;
        line-height: 100px;
        color: #333;
        font-size: 32px;
        &.login-password {
          width: 85%;
        }
      }
      .icon-eye {
        width: 72px;
        height: 72px;
        margin: 14px 0;
        margin-left: 30px;
      }
    }
    .login-button {
      margin-top: 120px;
      width: 100%;
      height: 100px;
      background: #5ac896;
      text-align: center;
      color: #fff;
      font-size: 44px;
      border-radius: 25px;
    }
  }
}
</style>