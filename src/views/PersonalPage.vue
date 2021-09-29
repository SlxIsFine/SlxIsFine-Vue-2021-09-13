<template>
  <div class="personal-page">
    <!-- 上方信息框 -->
    <div class="user-bg" :style="{backgroundImage:`url(${userBg})`}">
      <div class="user-wrapper">
        <Avatar size="64" />
        <div>{{username}}</div>
        <div class="release-btn hover-bg-btn">
          <span style="z-inde">点击发布NFT</span>
        </div>
      </div>
    </div>
    <div class="user-info">
      <!-- 左侧信息管理 -->

      <div class="info-form">
        <!-- 上方三个按钮 -->
        <div class="row flex-row-between">
          <div class="col">
            <ColorButton class="color-btn">出售订单</ColorButton>
          </div>
          <div class="col">
            <ColorButton class="color-btn">购买订单</ColorButton>
          </div>
          <div class="col">
            <ColorButton class="color-btn">提现明细</ColorButton>
          </div>
        </div>
        <!-- 下方详细信息 -->
        <InfoForm />
      </div>
      <!-- 右侧商品列表 -->
      <div class="product-list">
        <TabList/>
      </div>
    </div>
  </div>
</template>

<script setup>
import Avatar from "@/components/common/UI/Avatar.vue";
import userBg from "@img/userbg.jpg";
import ColorButton from "@/components/common/UI/ColorButton.vue";
import InfoForm from "@/components/personalPage/InfoForm.vue";
import TabList from "@/components/personalPage/TabList.vue"
import { ref } from "vue";
let username = ref("小刘");
</script>
<style lang='scss' scoped>
.personal-page {
  width: 100%;
  height: calc(100vh - 96px);
  // background-color: blue;
  .user-bg {
    display: flex;
    justify-content: center;
    // background-color: rgb(141, 51, 43);
    align-items: center;
    width: 100%;
    height: 46%;
    background-repeat: no-repeat;
    background-size: contain;
    .user-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin: 0px auto;
      width: 10%;
      height: 180px;
      color: white;
      font-size: 18px;
      .release-btn {
        color: rgb(141, 51, 43);
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        width: 140px;
        height: 32px;
        line-height: 32px;
        background-color: #fff;
        cursor: pointer;
      }
    }
  }
  .user-info {
    width: 100%;
    height: 54%;
    background-color: rgb(245, 245, 245);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    box-sizing: border-box;
    .info-form {
      width: 30%;
      height: 100%;
      .info-form-form{
        width: 100%;
        height: calc(100% - 56px);
        margin-top: 6px;
      }
      .color-btn {
        border-radius: 0px 0px 6px 6px;
        width: 98%;
        line-height: 50px;
        height: 50px;
      }
      .col {
        width: 33%;
      }
    }
    .product-list {
      width: 69.5%;
      height: 100%;
      background-color: #fff;
    }
  }
}
.hover-bg-btn {
  position: relative;
  span {
    position: relative;
  }
  &::before {
    content: "";
    width: 0px;
    height: 100%;
    display: block;
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all ease 0.3s;
    background-color: rgb(144, 119, 188);
  }
  &:hover {
    &::before {
      width: 100%;
    }
    span {
      color: white;
    }
  }
}
</style>
