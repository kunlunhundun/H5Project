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
  position: relative;
  left: 0;
  top: 0;
  display: flex;
  z-index: 999;
  justify-content: space-between;
  background: #4e505f;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: #fff;
  font-weight: bold;
  @include boxSizing;
  align-items: center;
  .img-back {
    width: 20px;
    height: 36px;
    margin-left: 30px;
    line-height: 80px;
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
    line-height: 80px;
    margin-right: 30px;
  }
}
</style>
