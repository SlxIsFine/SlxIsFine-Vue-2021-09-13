<template>
  <div class="login-header">
    <Logo h="80" w="120" class="logo" />
    <div class="title">{{ title }}</div>
  </div>
</template>
<script setup>
import { defineProps, ref } from "@vue/runtime-core";
import Logo from "../common/UI/Logo.vue";
let { title } = defineProps({
  title: {
    default: "用户登录",
  },
});
</script>
<style lang="scss" scoped>
.login-header {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid rgba(221, 220, 220, 0.849);
  background-color: #fff;
  position: relative;
  .logo {
    position: absolute;
    left: 20%;
  }
  .title {
    position: absolute;
    right: 20%;
    top: 50%;
    font-size: 20px;
    transform: translateY(-50%);
  }
}
</style>
