<template>
  <div>
    <s-header :mTitle="'MMall登录'"></s-header>
    <section class="sec-body">
      <div class="line-item" v-for="(item,index) in lineData" @click="selectLine(index)">
        <div class="icon-flag">
          <img src="../../assets/sirius/icon_china_flag.png" />
        </div>
        <span class="line-name">{{item.title}}</span>
        <div class="icon-check">
          <img src="../../assets/sirius/icon_select_un.png" v-if="!item.ischeck" />
          <img src="../../assets/sirius/icon_select_s.png" v-else />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import sHeader from "components/common/s-header";
import { linesData } from "../../service/getData";
import { homeData } from "../../service/getData";

export default {
  data() {
    return {
      lineData: []
    };
  },
  methods: {
    selectLine(index) {
      var lines = this.lineData;
      var vpnModel = lines[index];
      vpnModel.ischeck = !vpnModel.ischeck;
      lines[index] = vpnModel;
    }
  },
  mounted() {
    homeData().then(res => {
      this.lineData = res.data.lineList;
    });
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
  top: 128px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  .line-item {
    position: relative;
    width: 100%;
    height: 100px;
    line-height: 100px;
    @include fj;
    @include boxSizing;
    align-items:center;
    padding: 0 30px;
    border-bottom: 1px solid #e8e8e8;

    .icon-flag {
      font-size: 60px;
    }
    .line-name {
      flex: 1;
      padding: 0 30px;
      font-size: 36px;
      color: #333;
    }
    .icon-check {
      font-size: 60px;
    }
  }
}
</style>