<template>
  <div class="order-item">
    <div class="order-header">
      <div class="order-time">{{ time }}</div>
      <div class="order-num">订单号{{ ID }}</div>
      <div class="order-status">已完成</div>
    </div>
    <div class="underline"></div>
    <div class="order-content">
      <div class="content-img"></div>
      <div class="content-form">
        <div class="row nft-name">{{ name }}</div>
        <div class="row nft-desc">{{ desc }}</div>
        <div class="row">
          <div class="col name">合约地址:</div>
          <div class="col value">{{ cAddress }}</div>
        </div>
        <div class="row">
          <div class="col name">地址:</div>
          <div class="col value">{{ address }}</div>
        </div>
        <div class="row">
          <div class="col name">完成时间:</div>
          <div class="col value">{{ finishTime }}</div>
        </div>
      </div>
    </div>

    <slot>
      <div class="money">￥{{ money }}</div>
    </slot>
  </div>
</template>
<script setup>
import { toRefs } from "vue";
import moment from "moment";
let { time, ID, name, desc, cAddress, address, finishTime,money } = toRefs({
  time: moment(new Date()).subtract(Math.floor(Math.random() * 24), "hours").format("YYYY-MM-DD"),
  ID: "12345678901",
  name: "NFT名称NFT名称NFT名称NFT名称",
  desc: "NFT简介NFT简介NFT简介NFT简介NFT简介",
  cAddress: "12345678912344",
  address: "812773719138083",
  finishTime: "2021-09-08",
  money:100
});
</script>
<style lang="scss" scoped>
.order-item {
  width: 100%;
  min-height: 200px;
  background-color: #fff;
  border-radius: 12px;
  position: relative;
  text-align: center;
  .order-header {
    width: 100%;
    height: 32px;
    padding-left: 16px;
    line-height: 32px;
    position: relative;
    text-align: left;
    div {
      display: inline-block;
      vertical-align: middle;
    }
    .order-time {
      margin-right: 28px;
    }
    .order-status {
        position: absolute;
        right: 40px;
      color: $rd;
    }
  }
  .order-content{
      display: flex;
      align-items: center;
      padding-left: 12px;
      padding-top: 12px;
      .content-img{
          display: inline-block;
          width: 125px;
          height: 125px;
          vertical-align: middle;
          background-color: red;
      }
      .content-form{
          width: 80%;
          margin-left: 40px;
          text-align: left;
          .value{
              margin-left: 6px;
          }
      }
  }
  
  .money {
    color: $rd;
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    right: 30px;
    bottom: 20px;
  }
}
</style>
