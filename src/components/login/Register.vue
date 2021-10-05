<template>
  <div class="register">
    <div class="register-form">
      <div class="title">福客空间 FolkSPace</div>
      <FormRow
        contentWidth="calc(100% - 96px)"
        label="上传头像:"
        verticalAlign="middle"
        gap="32px"
      >
        <template v-slot:content>
          <FileUploader @selectFile="handleSelectFile" ref="avatarUploader">
            <Icon :src="addFile" w="100px" h="100px" />
          </FileUploader>
        </template>
      </FormRow>

      <FormRow
        contentWidth="calc(100% - 96px)"
        label="用户名"
        verticalAlign="middle"
        gap="32px"
      >
        <template v-slot:content>
          <input type="text" class="form-text-input" placeholder="请输入用户名" />
        </template>
      </FormRow>

      <FormRow
        contentWidth="calc(100% - 96px)"
        label="密码"
        verticalAlign="middle"
        gap="32px"
      >
        <template v-slot:content>
          <input type="text" class="form-text-input" placeholder="请输入密码" />
        </template>
      </FormRow>

      <FormRow
        contentWidth="calc(100% - 96px)"
        label="确认密码"
        verticalAlign="middle"
        gap="32px"
      >
        <template v-slot:content>
          <input type="text" class="form-text-input" placeholder="请再次输入密码" />
        </template>
      </FormRow>

      <FormRow
        contentWidth="calc(100% - 96px)"
        label="手机号："
        verticalAlign="middle"
        gap="32px"
      >
        <template v-slot:content>
          <input type="text" class="form-text-input" placeholder="请输入手机号" />
        </template>
      </FormRow>

      <FormRow
        contentWidth="calc(100% - 96px)"
        label=""
        verticalAlign="middle"
        gap="32px"
      >
        <template v-slot:content>
          <input
            type="text"
            class="form-text-input"
            placeholder="请输入验证码"
            style="width: 62%"
          />

          <ColorButton
            color="linear-gradient(to bottom , rgb(228,118,123) 0%,rgb(184,53,63) 100%)"
            textColor="white"
            w="35%"
            h="32px"
            class="color-btn-captcha"
            >获取验证码</ColorButton
          >
        </template>
      </FormRow>

      <FormRow
        contentWidth="calc(100% - 96px)"
        label="邮箱"
        verticalAlign="middle"
        gap="32px"
      >
        <template v-slot:content>
          <input type="text" class="form-text-input" placeholder="请输入邮箱" />
        </template>
      </FormRow>
      <FormRow
        contentWidth="calc(100% - 96px)"
        label="验证码"
        verticalAlign="middle"
        gap="32px"
      >
        <template v-slot:content>
          <input
            type="text"
            class="form-text-input"
            placeholder="请输入验证码"
            style="width: 62%"
          />
          <ColorButton
            color="linear-gradient(to bottom , rgb(228,118,123) 0%,rgb(184,53,63) 100%)"
            textColor="white"
            w="35%"
            h="32px"
            class="color-btn-captcha"
            >获取验证码</ColorButton
          >
        </template>
      </FormRow>

      <div class="footer">
        <ColorButton
          color="linear-gradient(to bottom , rgb(228,118,123) 0%,rgb(184,53,63) 100%)"
          textColor="white"
          w="100%"
          h="32px"
          class="color-btn-captcha"
          >注册</ColorButton
        >
        <div class="row">
          <span class="rd cursor-pointer">手机号一键注册</span>
          <span
            class="rd cursor-pointer"
            style="position: absolute; right: 0px"
            @click="route('loginByWechat')"
            >微信扫码</span
          >
        </div>
        <div class="row">
          <label for="agree-register">
            <input type="checkbox" id="agree-register" />
            <span class="rd cursor-pointer"> 《福客空间网站服务条款》 </span>

            |
            <span class="rd cursor-pointer"> 《法律声明和隐私政策》 </span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import FormRow from "@/components/common/form/FormRow.vue";
import addFile from "@img/addFile.png";
import FileUploader from "@/components/common/form/FileUploader.vue";
import Icon from "@/components/common/UI/Icon.vue";
import ColorButton from "@/components/common/UI/ColorButton.vue";
import { useRouter } from "vue-router";
import { onMounted, ref } from "@vue/runtime-core";

let router = useRouter();
let route = (name) => {
  router.push({ name: name });
};

//头像上传组件
let avatarUploader = ref(null);
//avatarUploader.value.clearFiles 删除所有文件
//选择文件，第一个参数是当前选择的文件，第二个是所有的文件
let handleSelectFile = (file, fileList) => {};
</script>
<style lang="scss" scoped>
.register {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .register-form {
    width: 20%;
    height: 100%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 48px 0px;
    box-sizing: border-box;
    .form-text-input {
      height: 32px;
      box-sizing: border-box;
      vertical-align: middle;
      width: 100%;
    }
    .color-btn-captcha {
      float: right;
    }
  }
  .title {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    // margin-top: 32px;
  }
}
.rd {
  color: rgb(184, 53, 63);
}
.footer {
  width: 100%;
  height: max-content;
}
.row {
  width: 100%;
  height: max-content;
  text-align: left;
  position: relative;
}
</style>
