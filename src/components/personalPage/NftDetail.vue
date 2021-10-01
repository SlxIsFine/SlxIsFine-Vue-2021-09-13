<template>
  <div class="nft-detail">
    <div class="row detail-header">
      <div class="cursor-pointer back" @click="back">返回</div>
    </div>
    <div class="row detail-main">
      <div class="half-row product-container">
        <div class="product-img"></div>
      </div>
      <div class="half-row prodtct-info">
        <div class="row">
          <div class="col name">NFT名称</div>
          <div class="col value">{{ nftData.name }}</div>
        </div>
        <div class="row">
          <div class="col name">收藏者</div>
          <div class="col value">{{ nftData.owner }}</div>
        </div>
        <div class="row">
          <div class="col name">哈希值</div>
          <div class="col value">{{ nftData.hash }}</div>
        </div>
        <div class="row">
          <div class="col name">创作者</div>
          <div class="col value">{{ nftData.creator }}</div>
        </div>
        <div class="row">
          <div class="col name">认证时间</div>
          <div class="col value">{{ nftData.time }}</div>
        </div>
      </div>
    </div>
    <div class="row detail-footer">
      <span class="tips">
        温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示温馨提示
      </span>
    </div>
    <div class="share cursor-pointer">分享</div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {useRouter} from "vue-router"
let nftData = ref({
  name: "NFT名称",
  owner: "小刘",
  hash: "asjsjiajsis-akdnnd-as11sssssssssssssssssssssssdddddddddddddddddjsa",
  creator: "小刘",
  time: "2021-09-23",
});
const router=useRouter()
let back=()=>{
    router.back()
}
</script>

<style lang="scss" scoped>
.nft-detail {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: rgb(233, 232, 232);
  .row {
    width: 100%;
  }

  .detail-header {
    height: 10%;
    position: relative;
    .back{
        position: absolute;
        top:40px;
        left: 100px;
        font-size: 28px;
    }
  }
  .detail-main {
    height: 70%;
    display: flex;
    font-size: 20px;
    .half-row {
      width: 50%;
      height: 100%;
    }
    .product-container {
      width: 60%;
      height: 100%;
    }
    .prodtct-info {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      .row {
        margin: 12px 0px;
        height: max-content;
        .name {
          width: 84px;
          text-align: left;
          float: left;
        }
        .value {
          padding-left: 12px;
          text-align: left;
          width: calc(80% - 84px);
          word-break: break-all;
        }
      }
    }
  }
  .share {
    position: absolute;
    top: 150px;
    right: 100px;
  }
  .detail-footer {
    height: 20%;
    text-align: center;
    padding: 16px auto;
  }

  .tips {
    display: inline-block;
    width: 70%;
    margin-top: 100px;
    text-align: center;
    word-break: break-all;
    color: rgb(201, 201, 201);
  }
}
</style>
