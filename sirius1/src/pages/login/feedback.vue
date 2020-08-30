<template>
  <div>
    <s-header :mTitle="'feed back problem'"></s-header>
    <div class="sec-body">
      <div class="select-feed">
        <div class="select-title">Please select the type of question</div>
        <div class="item-select">
          <div class="name">
            <span class="text">Functional problems</span>
          </div>
          <div class="icon-check">
            <img src="../../assets/sirius/icon_select_un.png" v-if="!ischeck" />
            <img src="../../assets/sirius/icon_select_s.png" v-else />
          </div>
        </div>
        <div class="item-select">
          <div class="name">
            <span class="text">Optimization Suggestions</span>
          </div>
          <div class="icon-check">
            <img src="../../assets/sirius/icon_select_un.png" v-if="!ischeck" />
            <img src="../../assets/sirius/icon_select_s.png" v-else />
          </div>
        </div>
        <div class="item-select">
          <div class="name">
            <span class="text">Other feedback</span>
          </div>
          <div class="icon-check">
            <img src="../../assets/sirius/icon_select_un.png" v-if="!ischeck" />
            <img src="../../assets/sirius/icon_select_s.png" v-else />
          </div>
        </div>
      </div>
      <div class="input-title">Please describe your problem in detail</div>
      <div class="input-wrap">
        <textarea
          class="input-content"
          v-model="content"
          rows="6"
          cols="25"
          placeholder="Enter any comments or Suggestions you want to make..."
        >
        </textarea>
      </div>
    </div>
    <div class="submit-wrap">
      <button class="submit-button">Send</button>
    </div>
  </div>
</template>

<script>
import sHeader from "components/common/s-header";

export default {
  data() {
    return {
      content: "",
      contentClose: false
    };
  },
  methods: {
    focusText(e) {
      let $className = e.currentTarget.className;
      $className === "input-content";
      this.contentClose = false;
    },
    blurText(e) {
      let $className = e.currentTarget.className;
      $className === "input-content";
      this.contentClose = true;
    },
    clearText(e) {
      content = "";
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
  position: relative;
  width: 100%;
  top: 128px;
  background: #fff;
  padding: 0 0;
  .select-title,
  .input-title {
    width: 100%;
    height: 110px;
    line-height: 110px;
    font-size: 28px;
    color: #333;
    background: #f2f2f2;
    padding: 0 30px;
  }
  .item-select {
    width: 100%;
    height: 110px;
    line-height: 110px;
    display: flex;
    justify-content: space-between;
    @include boxSizing;
    align-items: center;
    font-size: 0;
    border-bottom: 2px solid #e8e8e8;
    .name {
      display: inline-block;
      font-size: 28px;
      color: #333;
      margin: 0 30px;
    }
    .icon-check {
      display: inline-block;
      line-height: 0;
      margin-right: 30px;
    }
  }
  .input-wrap {
    height: 400px;
    margin-top: 30px;
    background: #f2f2f2;
    padding:  30px;
    .input-content {
      display: inline-block;
      width: 100%;
      color: #333;
      font-size: 28px;
      background: #f2f2f2;
    }
  }
}
.submit-wrap {
  position: fixed;
  height: 110px;
  left: 0;
  bottom: 0;
  width: 100%;
  .submit-button {
    height: 100%;
    width: 100%;
    font-size: 44px;
    background: #5ac896;
    color: #fff;
  }
}
</style>