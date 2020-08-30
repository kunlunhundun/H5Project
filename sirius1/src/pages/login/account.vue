<template>
  <div>
    <s-header :mTitle="'account'"></s-header>
    <div class="sec-body">
      <div class="unpaid-header">
        <div class="unpain-icon">
          <img src="../../assets/sirius/icon_locations.png" />
        </div>
        <span class="unpaid-title">Unpaid invoice: You have unpaid invoice #2877289 - $120.00.</span>
        <div class="btn-pay">Pay now</div>
      </div>
      <div class="title">Overview</div>
      <div class="regist-info-wrap">
        <div class="title">Account holder</div>
        <div class="info-wrap">
          <div class="desc">Name:</div>
          <div class="name">tianming</div>
        </div>
        <div class="info-wrap">
          <div class="desc">E-mail:</div>
          <div class="email">josubb@corepurchasecom</div>
        </div>
        <div class="info-wrap">
          <div class="desc">Client since:</div>
          <div class="date">2020-07-07</div>
        </div>
        <div class="down-wrap">download software</div>
      </div>

      <div class="detail-info-wrap">
        <div class="title">Account detail</div>
        <div class="info-wrap">
          <div class="desc">Account type::</div>
          <div class="name">tianming</div>
        </div>
        <div class="info-wrap">
          <div class="desc">E-mail:</div>
          <div class="email">josubb@corepurchasecom</div>
        </div>
        <div class="info-wrap">
          <div class="desc">Expiration date：:</div>
          <div class="date">2020-07-07</div>
        </div>
        <div class="down-wrap">Extend now</div>
      </div>
      <div class="extend-wrap">
        <div class="ex-icon">
          <img src="../../assets/sirius/icon_expire.png" />
        </div>
        <span class="ex-content">EXTEND YOUR ACCOUNT NOW!</span>
        <span class="ex-desc">Your account expired on 2020-07-07. Reclaim your privacy!</span>
        <div class="ex-button">Extend now</div>
      </div>
      <div class="blank-wrap"></div>
      <div class="title">Overview</div>
      <span class="all-invo-button">View all invoices</span>
      <div class="invoces-item" :class="{'active' : invoActive}" v-for="invoice in invoceList">
        <div class="invo-wrap">
          <span class="invo-desc">INVOICE NUMBER</span>
          <span class="invo-value">#2165454</span>
        </div>
        <div class="invo-wrap">
          <span class="invo-desc">TOTAL</span>
          <span class="invo-value">$120.00</span>
        </div>
        <div class="invo-wrap">
          <span class="invo-desc">DUE DATE</span>
          <span class="invo-value">2020-02-02</span>
        </div>
        <div class="invo-wrap">
          <span class="invo-desc">STATUS</span>
          <span class="invo-value">paid</span>
        </div>
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
      invoceList: [1, 2, 3],
      invoActive: false
    };
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
  top: 128px;
  left: 0;
  padding: 0 30px;
  background: #e7eff4;
  .unpaid-header {
    margin-top: 30px;
    display: flex;
    height: 60px;
    background: #eb6877;
    line-height: 0;
    font-size: 10;
    @include fj;
    @include boxSizing;
     align-items: center;
    .unpain-icon {
      margin-left: 20px; 
    }
    .unpaid-title{
      margin-left: 10px;
      display: inline-block;
      flex: 1;
      font-size: 16px;
      color: #fff;
      line-height: 30px;
    }
    .btn-pay {
      width: 100px;
      height: 36px;
      font-size: 17px;
      color: #fff;
      background: #f2a2ac;
      line-height: 36px;
      text-align: center;
      margin-right: 20px;
      border-radius: 3px;
    }
  }
  .title {
    padding: 30px 0px;
    height: 50px;
    color: #4e505f;
    font-size: 40px;
    font-weight: 600;
    line-height: 50px;
    text-align: center;
  }
  .regist-info-wrap,
  .detail-info-wrap {
    height: 400px;
    background: #fff;
    padding: 0 30px;
    border-bottom: 2px solid rgba(49, 193, 147, 0.13);

    .title {
      color: #4e505f;
      font-size: 30px;
      line-height: 60px;
      height: 60px;
      text-align: left;
    }
    .info-wrap {
      display: flex;
      font-size: 28px;
      color: #697c93;
      height: 50px;
      .desc {
        flex: 0 0 280px;
        width: 280px;
        display: inline-block;
      }
    }
    .down-wrap {
      width: 280px;
      height: 80px;
      margin-top: 16px;
      background: #31c193;
      border-radius: 6px;
      color: #fff;
      font-size: 28px;
      line-height: 80px;
      text-align: center;
    }
  }
  .extend-wrap {
    padding: 23px 0px;
    height: 207px;
    background: #faee26;
    color: #212121;
    border-radius: 6px;
    .ex-icon {
      text-align: center;
      margin-top: 10px;
    }
    .ex-content {
      display: block;
      height: 30px;
      line-height: 30px;
      font-size: 24px;
      text-align: center;
    }
    .ex-desc {
      display: block;
      height: 28px;
      line-height: 28px;
      font-size: 16px;
      text-align: center;
    }
    .ex-button {
      height: 40px;
      width: 140px;
      margin: 0 auto;
      border-radius: 6px;
      margin-top: 20px;
      font-size: 18px;
      line-height: 40px;
      color: #fff;
      text-align: center;
      background: #393b4c;
    }
  }
  .blank-wrap {
    padding: 20px 0;
    background: #fff;
  }
  .all-invo-button {
    display: block;
    height: 26px;
    line-height: 26px;
    font-size: 22px;
    margin-top: -20px;
    padding-bottom: 20px;
    color: #31c193;
    text-align: center;
    text-decoration: underline;
  }
  .invoces-item {
    height: 320px;
    line-height: 80px;
    .invo-wrap {
      display: flex;
      .invo-desc {
        display: inline;
        padding-left: 20px; 
        width: 280px;
        height: 80px;
        background: #4e505f;
        font-size: 26px;
        color: #fff;
      }
      .invo-value {
        flex: 1;
        height: 80px;
        padding-left: 20px;
        background: #fff;
        color: #697c93;
        font-size: 28px;
      }
    }
  }
  .foot-wrap {
      margin-top: 80px;
      width: 100%;
      padding: 0 30px;
      margin-left: -30px;
      margin-right: -30px;
      height: 80px;
      background: #4E505F;
      text-align: center;
      color: #fff;
      font-size: 22px;
      line-height: 80px;
  }
}
</style>