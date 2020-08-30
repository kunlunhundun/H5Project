<template>
  <div>
    <s-header :mTitle="'MMall登录'"></s-header>
    <div class="sec-body">
      <div class="filter-wrap">
        <div class="item-select">
          <div class="name">
            <span class="text">All apps use the VPN</span>
          </div>
          <div class="icon-check">
            <img src="../../assets/sirius/icon_select_un.png" v-if="!ischeck" />
            <img src="../../assets/sirius/icon_select_s.png" v-else />
          </div>
        </div>
        <div class="item-select">
          <div class="name">
            <span class="text">Do not allow selected apps to use the VPN</span>
          </div>
          <div class="icon-check">
            <img src="../../assets/sirius/icon_select_un.png" v-if="!ischeck" />
            <img src="../../assets/sirius/icon_select_s.png" v-else />
          </div>
        </div>
        <div class="item-select">
          <div class="name">
            <span
              class="text"
            >Allow selected apps to use the VPN test mutil line to show dkdkdksllddk</span>
          </div>
          <div class="icon-check">
            <img src="../../assets/sirius/icon_select_un.png" v-if="!ischeck" />
            <img src="../../assets/sirius/icon_select_s.png" v-else />
          </div>
        </div>
        <div class="item-add">
          <span class="add-title">Selected apps</span>
          <div class="button-wrap">
            <div class="button-add">
              <img src="../../assets/sirius/icon_add.png" class="img-add" />
              <span class="add-text">Add apps</span>
            </div>
          </div>
        </div>

        <list-scroll :scroll-data="appList" class="apps-container">
          <ul class="apps-wrap" ref="appswrap">
            <li v-for="(item,index) in appList" class="apps-item" ref="appsList">
              <img src="../../assets/sirius/icon_delete.png" class="app-delete" />
              <img src="../../assets/sirius/icon_facebook.png" class="app-icon" />
              <span class="app-name">{{item.name}}</span>
            </li>
          </ul>
        </list-scroll>
      </div>

    </div>
  </div>
</template>



<script>
import sHeader from "components/common/s-header";
import BScroll from "better-scroll";
import listScroll from '../../components/common/list-scroll'

import { appsData } from "../../service/getData";

export default {
  data() {
    return {
      ischeck: false,
      appList: []
    };
  },
  created() {
    appsData().then(res => {
      this.appList = res.data;
    //   this.$nextTick(() => {
    //      this.initScroll();
    //   });
    });
  },
   mounted() {
    
    },

  methods: {
    initScroll() {
      this.appScroll = new BScroll(this.$refs.appswrap, {
        click: true
      });
    }
  },
  components: {
    sHeader,
    listScroll,
    BScroll
  }
};
</script>

<style lang="scss" scoped="" type="text/scss">
@import "../../common/style/mixin";

.sec-body {
  position: relative;;
  top: 128px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #f2f2f2;
  .filter-wrap {
    position: relative;
    padding: 0 0px;
    .item-select {
      width: 100%;
      height: 110px;
      display: flex;
      background: #fff;
      border-bottom: 2px solid #e8e8e8;
      .name {
        position: relative;
        flex: 1;
        overflow: hidden;
        display: inline-block;
        font-size: 0;
        margin-left: 30px;
        @include boxSizing;
        .text {
          position: absolute;
          overflow: hidden;
          @include ct;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          font-size: 40px;
          color: #333;
          line-height: 44px;
          vertical-align: middle;
        }
      }
      .icon-check {
        width: 40px;
        height: 40px;
        margin-top: 30px;
        margin-right: 30px;
      }
    }
    .item-add {
      position: relative;
      width: 100%;
      height: 110px;
      line-height: 110px;
      background: #fff;
      text-align: left;
      margin: 40px 0;
      font-size: 0;
      .add-title {
        font-size: 40px;
        height: 36px;
        line-height: 36px;
        color: #333;
        vertical-align: middle;
        margin: 0 20px;
      }
      .button-wrap {
        position: absolute;
        right: 30px;
        top: 0;
        bottom: 0;
        width: 240px;
        height: 100%;
        .button-add {
          position: relative;
          width: 100%;
          height: 72px;
          line-height: 72px;
          margin-top: 19px;
          border-radius: 36px;
          background: #5ac896;
          font-size: 0;
          .img-add {
            margin-left: 30px;
            display: inline-block;
            vertical-align: middle;
          }
          .add-text {
            display: inline-block;
            font-size: 30px;
            color: #fff;
            vertical-align: middle;
          }
        }
      }
    }
    .apps-container {
      position: relative;
      background: #fff;
      width: 100%;
      height: 100%;
      .apps-wrap {
        .apps-item {
          position: relative;
          height: 110px;
          width: 100%;
          line-height: 110px;
          overflow: hidden;
          font-size: 0;
          border-bottom: 2px solid #e8e8e8;

          .app-delete {
            display: inline-block;
            vertical-align: middle;
            margin: 0 30px;
          }
          .app-icon {
            display: inline-block;
            width: 60px;
            height: 60px;
            vertical-align: middle;
          }
          .app-name {
            font-size: 36px;
            color: #333;
            height: 36px;
            line-height: 60px;
            margin: 0 30px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>