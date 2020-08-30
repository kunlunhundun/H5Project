<template>
  <div class="header">
    <img src="../../assets/sirius/icon_back_arrow.png" class="img-back" @click="goBack" />
    <p class="title">{{mTitle}}</p>
    <img src="../../assets/sirius/icon_feed_message.png" class="img-right" />
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    mTitle: {
      type: String,
      default: ""
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";
.header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: #4e505f;
  width: 100%;
  height: 128px;
  line-height: 128px;
  color: #fff;
  font-weight: bold;
  padding: 32px 30px;
  @include boxSizing;

  .img-back {
    width: 20px;
    height: 36px;
    line-height: 64px;
    margin-top: 12px;
  }
  .title {
    font-size: 44px;
    width: 60%;
    height: 64px;
    line-height: 64px;
    text-align: center;
  }
  .img-right {
    width: 48px;
    height: 48px;
    line-height: 64px;
    margin-top: 9px;
  }
}
</style>
