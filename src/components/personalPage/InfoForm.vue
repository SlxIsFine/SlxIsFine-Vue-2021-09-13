<template>
  <div class="info-form-form">
    <div class="user-info-text">
      <span>用户信息</span>
    </div>
    <div class="form-content">
      <div class="row">
        <div class="col name">用户名</div>
        <div class="col value">小刘</div>
      </div>
      <div class="row">
        <div class="col name">手机号</div>
        <div class="col value">13445611254</div>
      </div>
      <div class="row">
        <div class="col name">用户简介</div>
        <div
          class="col value"
        >用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介用户简介</div>
      </div>
      <div class="row">
        <div class="col name">地址管理</div>
        <div class="col value">
          <div class="row">
            <span class="v-middle">123456789000</span>
            <span class="default-address">（默认地址）</span>
          </div>
          <div class="row">
            <span class="v-middle">000123456789</span>
          </div>
          <div class="row">
            <span class="v-middle">000123456789</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col name" style="vertical-align:middle">余额</div>
        <div class="col value" style="vertical-align:middle">
          <span class="money v-middle">￥10</span>
          <span class="to-withdraw v-middle cursor-pointer">去提现>></span>
        </div>
      </div>
      <div class="row status-btn-group">
         <IconTextButton text="已认证" :icon="alipay" :isActive="true" activeColor="#b22631"/>
         <IconTextButton text="未绑定" :icon="wechat"/>
         <IconTextButton text="未绑定" :icon="wechat"/>
      </div>
    </div>
    <div class="underline" />
    <div class="form-footer">
      <span class="cursor-pointer">编辑个人信息></span>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import IconTextButton from "@/components/common/UI/IconTextButton.vue"
import alipay from "@img/alipay.png"
import wechat from "@img/wechat.png"
let userInfo = reactive({
  username: "小刘",
  phone: "13445611254"
});
</script>
<style lang="scss" scoped>
.info-form-form {
  background-color: white;
  border-radius: 4px;
  box-sizing: border-box;
  // 边距折叠
  border: 1px solid transparent;
  .user-info-text {
    // font-family:  sans-serif;
    margin-top: 12px;
    margin-left: 8px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    &::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 20px;
      background-color: $rd;
      vertical-align: middle;
      margin-right: 8px;
      border-radius: 3px;
    }
  }
  .form-content {
    width: 100%;
    height: 80%;
    font-size: 14px;
    > .row {
      margin: 4px 0px;
    }
    .col {
      vertical-align: top;
    }
    .name {
      width: 30%;
      text-align: right;
      // background-color: red;
      &::after {
        content: "：";
      }
    }
    .value {
      // background-color: green;
      width: 50%;
      box-sizing: border-box;
      text-align: left;
      padding-left: 8px;
    }
    .default-address {
      vertical-align: middle;
      color: grey;
    }
    .money {
      font-size: 28px;
      font-weight: bold;
      color: $rd;
    }

    .to-withdraw {
      margin-left: 10px;
      color: $rd;
    }

    .status-btn-group {
      height: 64px;
      display: flex;
      justify-content: space-around;
      .icon{
          width: 48px !important;
          height: 48px !important;
          background-size: 100% 100% !important;
      }
    }
  }
  .underline {
    width: 100%;
    height: 1px;
    background-color: rgba(201, 201, 201, 0.815);
  }
  .form-footer {
    text-align: center;
    line-height: 32px;
    span{
        &:hover{
            color: $rd;
        }
    }
  }
}
</style>