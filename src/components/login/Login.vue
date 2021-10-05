<template>
  <div class="login">
    <LoginHeader :title="title" />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import LoginHeader from "./LoginHeader.vue";
import { computed, ref } from "vue";

let router = useRouter();
let route = ref(router.currentRoute.value.name);
let title = computed(() => routeMap[route.value] || "用户登录");
let routeMap = {
  login: "用户登录",
  register: "用户注册",
};
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  .content {
    width: 100%;
    height: calc(100% - 81px);
  }
}
</style>
