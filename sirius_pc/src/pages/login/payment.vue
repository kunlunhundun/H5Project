<template>
  <div>
    <s-header :mTitle="'MMall登录'"></s-header>
    <div class="sec-body">
      <div class="section-head">
        <div class="bg-banner-img">
          <img src="../../assets/sirius/icon_home_banner.png" >
        </div>
        <div class="title">Choose your personal plan</div>
        <div
          class="title-desc"
        >Connect to virtual locations across 80+ countries and high-speed unlimited bandwidth</div>

      </div>
      <div class="plan-title">Choose plan</div>

      <div class="money-wrap">
        <div
          class="money-item"
          :class="{'active' : isActive}"
          v-for="item in payList"
          @click="selectPayItem(index)"
        >
          <span class="time-desc">1 Year</span>
          <div class="num-type" :class="{'active' : isActive}">
            <div class="money-type">$</div>
            <div class="money-num">10.00</div>
            <div class="month">/month</div>
          </div>
          <div class="line"></div>
          <div class="origin-pay">Pay $240.00</div>
          <div class="every-desc">$120.00 every year</div>
          <div class="select-item" v-show="isActive">
            <img src="../../assets/sirius/icon_home_choose.png"  class="img" />
          </div>
        </div>
      </div>
      <div class="pay-button-wrap">
        <div class="pay-button">Continue to payment</div>
      </div>
      <div class="card-wrap">
          <img class="card-m" src="../../assets/sirius/icon_master_card.png" />
          <img class="card-visa" src="../../assets/sirius/icon_visa.png" />
      </div>
      <div class="foot-wrap">
        <span class="content">©2020. All right reserved</span>
      </div>
    </div>
  </div>
</template>

<script>
import sHeader from "components/common/s-header";

export default {
  data() {
    return {
      islogin: false,
      isActive: false,
      payList: [1, 2, 3,4,5,6,7,]
    };
  },
  methods: {
    selectPayItem(index) {
      this.isActive = !this.isActive;
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
  z-index: 2;
  position: relative;
  background: #e6eff5;
  .section-head {
    position: relative;
    background: #393c4c;
    width: 100%;
    height: 300px;
    color: #fff;
    text-align: center;
     .bg-banner-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      img {
        width: 1440px;
        height: 300px;
      }
    }
    .title {
      position: relative;
      padding-top: 50px;
      height: 80px;
      line-height: 80px;
      font-size: 50px;
      text-align: center;
      font-weight: 700;
    }
    .title-desc {
      position: relative;
      width: 653px;
      height: 100px;
      font-size: 22px;
      line-height: 40px;
      margin: 0 auto;
      margin-top: 30px;
    } 
   
  }
  .plan-title {
    color: #2f3134;
    height: 120px;
    font-size: 48px;
    line-height: 120px;
    font-weight: 700;
    text-align: center;
  }
  .money-wrap {
    position: relative;
    padding: 0 30px;
    width: 1500px;
    margin: 0 auto;
    background: #e6eff5;
    display: flex;
    flex-wrap: wrap;
    .money-item {
      position: relative;
      height: 320px;
      width: 320px;
      padding: 30px;
      margin: 0 50px 50px 0px;
      background: #fff;
      &:first-child {
        margin-top: 0;
      }
      &.active {
        background: #dff8f0;
        border-style: solid;
        border-color: #31c193;
      }
      .time-desc {
        height: 36px;
        font-size: 28px;
        color: #212121;
        font-weight: bold;
      }
      .num-type {
        position: relative;
        margin-top: 20px;
        height: 72px;
        color: #697c93;
        &.active {
          color: #31c193;
        }
        .money-type {
          position: absolute;
          top: 0;
          left: 0;
          height: 40px;
          font-size: 36px;
          line-height: 40px;
        }
        .money-num {
          display: inline-block;
          margin-left: 30px;
          font-size: 70px;
          height: 72px;
          line-height: 72px;
          font-weight: 800;
        }
        .month {
          display: inline-block;
          height: 32px;
          font-size: 24px;
          color: #697c93;
          line-height: 32px;
        }
      }
      .line {
        background: #31c193;
        width: 100%;
        height: 2px;
        margin-top: 26px;
        opacity: 0.13;
      }
      .origin-pay {
        margin-top: 26px;
      }
      .origin-pay,
      .every-desc {
        text-align: center;
        height: 40px;
        line-height: 40px;
        color: #697c93;
        font-size: 22px;
      }
      .select-item {
        position: relative;
        text-align: center;
        margin-top: 10px;
        .img {
          width: 140px;
          height: 60px;
        }
      }
    }
  }
  .pay-button-wrap {
    position: relative;
    height: 110px;
    width: 100%;
    margin-top: 60px;
    .pay-button {
      height: 110px;
      width: 1500px;
      margin: 0 auto;
      background: #3ac094;
      font-size: 44px;
      text-align: center;
      color: #fff;
      line-height: 110px;
    }
  }
  .card-wrap {
    display: flex;
    width: 120px;
    padding: 30px 0;
    margin: 0 auto;
    .card-m {
      width: 52px;
      height: 32px;
    }
    .card-visa {
      width: 52px;
      height: 32px;
      margin-left: 20px;
    }
  }
  .foot-wrap {
    margin-top: 50px;
    width: 100%;
    height: 80px;
    background: #4e505f;
    text-align: center;
    color: #fff;
    font-size: 22px;
    line-height: 80px;
  }
}
</style>

