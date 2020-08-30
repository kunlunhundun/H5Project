<template>
  <div>
    <s-header :mTitle="'change'"></s-header>
    <div class="sec-body">
      <div class="invoice-wrap">
        <div class="invoice-title">Invoice #2155454</div>
        <div class="invoice-content">
          <span class="desc">Due on:</span>
          <span class="value">2020-02-02</span>
        </div>
        <div class="invoice-content">
          <span class="desc">INVOICED TO</span>
          <span class="value">SU DANGL</span>
        </div>
        <div class="invoice-content">
          <span class="desc">PAY TO</span>
          <span class="value">SIRIUS VPN</span>
        </div>
        <div class="invoice-content">
          <span class="desc">ITEMS FOR SALE</span>
          <span class="value">Sirius license for 1 year</span>
        </div>
        <div class="invoice-content">
          <span class="desc">PRICE</span>
          <span class="value">$120.00</span>
        </div>
        <div class="invoice-content">
          <span class="desc"></span>
          <div class="value">
            <span class="total-desc">Total</span>
            <span class="total-price">$120.00</span>
          </div>
        </div>
      </div>
      <span class="pay-methods-title">Choose your payment method</span>
      <div class="card-head">
        <span class="card-name">Credit Card / Debit Card</span>
        <div class="card-img-wrap">
          <img class="card-m" src="../../assets/sirius/icon_master_card.png" />
          <img class="card-visa" src="../../assets/sirius/icon_visa.png" />
        </div>
      </div>
      <div class="input-wrap">
        <span class="input-desc">First name</span>
        <div class="input-container">
          <input
            @mouseenter="focusText"
            @mouseleave="blurText"
            v-model="firstname"
            type="text"
            class="firstname"
            placeholder="Enter your first name"
          />
          <i
            class="iconfont icon-close"
            data-close="fristname"
            v-show="!firstnameClose"
            @click="clearText"
          ></i>
        </div>
      </div>
      <div class="input-wrap">
        <span class="input-desc">First name</span>
        <div class="input-container">
          <input
            @mouseenter="focusText"
            @mouseleave="blurText"
            v-model="firstname"
            type="text"
            class="firstname"
            placeholder="Enter your first name"
          />
          <i
            class="iconfont icon-close"
            data-close="fristname"
            v-show="!firstnameClose"
            @click="clearText"
          ></i>
        </div>
      </div>
      <div class="input-wrap">
        <span class="input-desc">First name</span>
        <div class="input-container">
          <input
            @mouseenter="focusText"
            @mouseleave="blurText"
            v-model="firstname"
            type="text"
            class="firstname"
            placeholder="Enter your first name"
          />
          <i
            class="iconfont icon-close"
            data-close="fristname"
            v-show="!firstnameClose"
            @click="clearText"
          ></i>
        </div>
      </div>
      <div class="expiry-date">Expiry date</div>
      <div class="expiry-wrap">
          <div class="month-wrap">
              <span>Month</span>
              <img  class="down-img" src="../../assets/sirius/icon_pulldown.png">
          </div>
          <div class="year-wrap">
              <span>Year</span>
              <img class="down-img" src="../../assets/sirius/icon_pulldown.png">
          </div>
      </div>

       <div class="input-wrap">
        <span class="input-desc">First name</span>
        <div class="input-container">
          <input
            @mouseenter="focusText"
            @mouseleave="blurText"
            v-model="firstname"
            type="text"
            class="firstname"
            placeholder="Enter CVC/CVV"
          />
          <i
            class="iconfont icon-close"
            data-close="fristname"
            v-show="!firstnameClose"
            @click="clearText"
          ></i>
        </div>
      </div>

      <div class="pay-button-wrap">
          <div class="pay-button">
              Continue to payment | Total $ 120.00
          </div>
      </div>
      <div class="vpn-desc-wrap">
          <img src="../../assets/sirius/icon_encryption.png">
          <span>Encrypt your DNS queries and stay safe from leaks that could ex</span>
      </div>
      <div class="vpn-desc-wrap">
          <img src="../../assets/sirius/icon_encryption.png">
          <span>Encrypt your DNS queries and stay safe from leaks that could ex</span>
      </div>
      <div class="vpn-desc-wrap">
          <img src="../../assets/sirius/icon_encryption.png">
          <span>Encrypt your DNS queries and stay safe from leaks that could ex</span>
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
      fristname: ""
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
  background: #e6eff5;
  .invoice-wrap {
    height: 560px;
    font-size: 28px;
    color: #697c93;
    background: #fafbfc;
    padding: 0 30px;
    margin-top: 80px;
    line-height: 80px;
    .invoice-title {
      height: 80px;
      width: 100%;
      border-bottom: 2px solid rgba(49, 193, 147, 0.13);
    }
    .invoice-content {
      width: 100%;
      height: 80px;
      display: flex;
      .desc {
        flex: 1;
        display: inline-block;
      }
      .value {
        flex: 1;
        color: #212121;
        .total-desc {
          display: inline-block;
          font-size: 30px;
        }
        .total-price {
          font-size: 30px;
          color: #ff6d4b;
        }
      }
    }
  }
  .pay-methods-title {
    display: block;
    height: 100px;
    line-height: 100px;
    font-size: 40px;
    color: #4e505f;
    text-align: center;
  }
  .card-head {
    position: relative;
    height: 80px;
    color: #212121;
    line-height: 0px;
    font-size: 0px;
    background: #bbc3e9;
    display: flex;
    padding: 0 30px;
    @include fj;
    @include boxSizing;
    align-items: center;
    .card-name {
      line-height: 80px;
      font-size: 24px;
    }
    .card-img-wrap {
      display: flex;
      width: 130px;
      height: 32px;
      line-height: 32px;
      .card-m {
        width: 52px;
        height: 32px;
        margin-right: 20px;
      }
      .card-visa {
        width: 52px;
        height: 32px;
      }
    }
  }
  .input-wrap {
    height: 170px;
    background: #fff;
    padding: 0 30px;
    padding-bottom: 10px;
    .input-desc {
      display: block;
      line-height: 70px;
      height: 70px;
      font-size: 28px;
      color: #697c93;
    }
    .input-container {
      display: flex;
      height: 100px;
      line-height: 100px;
      font-size: 28px;
      background: #FAFBFC;
      background:rgba(250,251,252,1);
      border:1px solid rgba(217,228,239,1);
      border-radius:4px;
      padding: 0 20px;
      
      input {
        flex: 1;
      }
      .iconfont {
        font-size: 26px;
        color: #cccccc;
      }
    }
  }
  .expiry-date {
      display: block;
      background: #fff;
      line-height: 70px;
      padding: 0 30px;
      height: 70px;
      font-size: 28px;
      color: #697c93;
  }
  .expiry-wrap {
      display: flex;
      height: 100px;
      background: #fff;
      padding: 0 30px;
      .month-wrap, .year-wrap {
          position: relative;
          flex: 1;
          background: #FAFBFC;
          background:rgba(250,251,252,1);
          border:1px solid rgba(217,228,239,1);
          border-radius:4px;
          display: inline-block;
          font-size: 0px;
          line-height: 0;
          span {
              display: inline-block;
              color: #697C93;
              margin-left: 20px;
              font-size: 28px;
              line-height: 100px; 
          }
          .down-img {
              position: absolute;
              top: 38px;
              right: 20px;
              width: 24px;
              height: 24px;
              line-height: 24px;
              margin-right: 20px;          }
      }
      .year-wrap {
          flex: 1;
           margin-left: 30px;
      }
  }
  .pay-button-wrap {
      height: 100px;
      padding: 60px 30px;
      background: #fff;
      .pay-button {
          height: 100px;
          line-height: 100px;
          font-size: 28px;
          color: #fff;
          text-align: center;
          background: #31C193;
      }
  }
  .vpn-desc-wrap {
      height: 70px;
      background: #fff;
      font-size: 0;
      line-height: 0;
      padding: 0 30px;
      padding-bottom: 60px;
      display: flex;
      img {
          width: 24px;
          height: 24px;
      }
      span {
          margin-left: 15px;
          font-size: 26px;
          line-height: 32px;
          color: #697C93;
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