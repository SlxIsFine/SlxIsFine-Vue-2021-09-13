<template>
  <div class="personal-page">
    <!-- 上方信息框 -->
    <div class="user-bg" :style="{backgroundImage:`url(${userBg})`}">
      <div class="user-wrapper">
        <Avatar size="64" />
        <div>{{username}}</div>
        <div class="release-btn hover-bg-btn" @click="route('release')">
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
            <ColorButton class="color-btn" @click="route('saleOrders')">出售订单</ColorButton>
          </div>
          <div class="col">
            <ColorButton class="color-btn" @click="route('saleOrders')">购买订单</ColorButton>
          </div>
          <div class="col">
            <ColorButton class="color-btn" @click="route('moneyDetail')">提现明细</ColorButton>
          </div>
        </div>
        <!-- 下方详细信息 -->
        <InfoForm />
      </div>
      <!-- 右侧商品列表 -->
      <div class="product-list">
        <TabList :config="tabConfig"/>
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
import { markRaw, reactive, ref } from "vue";
import {useRouter} from "vue-router"
// 我拥有的
import Own from "@/components/personalPage/Own.vue"
// 我发布的
import MyRelease from "@/components/personalPage/MyRelease.vue"
// 我收藏的
import MyFavorite from "@/components/personalPage/MyFavorite.vue"
// 待上架的
import WaitingForSale from "@/components/personalPage/WaitingForSale.vue"
let username = ref("小刘");
const router =useRouter()
const tabConfig=reactive({
  data:[
    {
      name:"我拥有的NFT",
      component:markRaw(Own),
      componentProps:{}

    },
        {
      name:"我发布的NFT",
      component:markRaw(MyRelease),
      componentProps:{}

    },
        {
      name:"我收藏的NFT",
      component:markRaw(MyFavorite),
      componentProps:{}

    },
        {
      name:"待上架的NFT",
      component:markRaw(WaitingForSale),
      componentProps:{}

    },
  ]
})
let route=(name)=>{
  router.push({name:name})
}
</script>
<style lang='scss' scoped>
.personal-page {
  width: 100%;
  height: calc(100vh - 96px);
  overflow: hidden;
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
        border-radius: 0px 0px 6px 6px !important;
        width: 98% !important;
        line-height: 50px !important;
        height: 50px !important;
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
