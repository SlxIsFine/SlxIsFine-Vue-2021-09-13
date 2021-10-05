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
import { computed, ref, watchEffect } from "vue";

let router = useRouter();
let route = router.currentRoute;
let title=ref("用户登录")

// let title = computed(() => {
//   console.log(routeMap[route.value.name])
//  return routeMap[route.value.name] || "用户登录";
// });
let routeMap = {
  login: "用户登录",
  register: "用户注册",
};
watchEffect(()=>{
title.value=routeMap[route.value.name]
})

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
