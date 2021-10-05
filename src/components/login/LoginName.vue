<template>
  <div class="title">福客空间 FolkSPace</div>
  <div class="form-content">
    <IconInput
      icon="man"
      style="width: 100%"
      class="form-row"
      placeholder="请输入用户名"
    />

    <IconInput
      icon="unlock-fill"
      style="width: 100%"
      placeholder="请输入密码"
    >
      <template v-slot:tipText>
        <span>忘记密码？</span>
      </template>
    </IconInput>

    <ColorButton
      color="linear-gradient(to bottom , rgb(228,118,123) 0%,rgb(184,53,63) 100%)"
      textColor="white"
      w="100%"
      h="48px"
      class="color-btn-login"
      >登录</ColorButton
    >
  </div>

  <div class="footer row">
    <label class="cursor-pointer" @click="route('loginByWechat')">
      <Icon w="16px" h="16px" :src="wechat" />
      微信登录
    </label>
    <label class="cursor-pointer"  @click="route('loginByPhone')">
      <Icon w="16px" h="16px" ic="phone" />
      手机验证码登录
    </label>
    <label style="color: rgb(180, 50, 60)" class="cursor-pointer"> 立即注册</label>
  </div>
</template>
<script setup>
import IconInput from "@/components/common/form/IconInput.vue";
import ColorButton from "@/components/common/UI/ColorButton.vue";
import Icon from "@/components/common/UI/Icon.vue";
import wechat from "@img/wechat.png";
import { ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";
let router = useRouter();
let route = (name) => {
  router.push({ name: name });
};
let phone = ref("123456789");

let time = ref(60);
setInterval(() => {
  time.value--;
  if (time.value <= 0) {
    time.value = 60;
  }
}, 1000);
</script>
<style lang="scss" scoped>
.form-content {
  height: 75%;
  margin-top: 12px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
}
.title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  // margin-top: 32px;
}
.icon-input {
  font-size: 18px;
  :deep(.icon) {
    color: grey;
  }
}
.color-btn {
  font-size: 18px;
  border-radius: 24px;
}
.color-btn-login {
  // margin-top: 32px;
  border-radius: 4px;
}
.footer {
  height: 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   margin-top: 12px;
}
</style>
