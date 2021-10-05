<template>
  <div class="title">福客空间 FolkSPace</div>
  <div class="form-content">
    <Icon w="150px" h="150px" :src="wechat" />
    <div style="margin-top: 16px">请用微信扫码登录</div>
    <div
      style="color: rgb(179, 38, 51); margin-top: 32px; font-size: 14px; cursor: pointer"
    @click="route('loginByName')"
    >
      账号登录
    </div>
  </div>
</template>
<script setup>
import Icon from "@/components/common/UI/Icon.vue";
import wechat from "@img/wechat.jpg";
import { useRouter } from "vue-router";
let router = useRouter();
let route = (name) => {
  router.push({ name: name });
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  // margin-top: 32px;
}
.form-content {
  width: 80%;
  height: 70%;
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
