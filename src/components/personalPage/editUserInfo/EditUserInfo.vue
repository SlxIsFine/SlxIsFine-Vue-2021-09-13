<template>
  <div class="edit-user-info">
    <FormHeader class="user-info-header">编辑个人资料</FormHeader>
    <div class="user-info-form">
      <FormRow :gap="'32px'" label="头像" :align="'right'" :verticalAlign="'center'">
        <template v-slot:content>
          <div
            style="
              width: 100px;
              height: 100px;
              border-radius: 50%;
              background-color: black;
            "
          ></div>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="用户名" :align="'right'">
        <template v-slot:content>
          <span>小刘</span>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="密码" :align="'right'">
        <template v-slot:content>
          <span>修改密码</span>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="个人简介" :align="'right'">
        <template v-slot:content>
          <span>
            个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介
            个人简介个人简介个人简介
          </span>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="手机号" :align="'right'">
        <template v-slot:content>
          <span>去绑定</span>
        </template>
      </FormRow>
      <FormRow :gap="'32px'" label="邮箱" :align="'right'">
        <template v-slot:content>
          <span>去绑定</span>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="实名认证" :align="'right'">
        <template v-slot:content>
          <span>已认证</span>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="发行地址" :align="'right'">
        <template v-slot:content>
          <div><span>默认</span> 1234567890</div>
          <div><span>平台</span> 1234567890</div>
          <div><span></span> 1234567890</div>
          <div>+添加地址</div>
        </template>
      </FormRow>

    

      <FormRow :gap="'32px'" label="绑定银行卡" :align="'right'" verticalAlign="middle">
        <template v-slot:content>
          <span>查看已绑定银行卡</span>
          <ColorButton
            class="colorful-btn"
            :textColor="'white'"
            :color="'#c02431'"
            :activeColor="'#c02431'"
            :w="'120px'"
            :h="'60px'"
            style="display:inline-block;margin-left:20px"
          >
            
            添加银行卡
          </ColorButton>
        </template>
      </FormRow>

      <div class="form-footer" style="margin-top:40px">
        <ColorButton
          class="colorful-btn"
          :textColor="'white'"
          :color="'#c02431'"
          :activeColor="'#c02431'"
          :w="'120px'"
          :h="'32px'"
        >
          保存
        </ColorButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import ColorButton from "@/components/common/UI/ColorButton.vue";
import FormHeader from "@/components/common/UI/FormHeader.vue";
import FormRow from "@/components/common/form/FormRow.vue";
import FileUploader from "@/components/common/form/FileUploader.vue";
import { ref } from "vue";
</script>
<style lang="scss" scoped>
.edit-user-info {
  width: 70%;
  margin: 12px auto;
  height: calc(100vh - 120px);
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  .user-info-form {
    width: 100%;
    height: max-content;
    padding: 20px 32px;
    .upload-info {
      color: rgb(163, 162, 162);
      font-size: 14px;
      width: 180px;
      height: 120px;
      // line-height: 120px;
      text-align: left;
      vertical-align: middle;
      padding-top: 40px;
      padding-left: 24px;
      display: inline-block;
      box-sizing: border-box;
    }
    .form-row {
      margin: 12px 0px;
    }
    .form-footer {
      margin-left: 95px;
    }
  }
  .user-info-header {
    margin-top: 32px;
    font-size: 18px !important;
  }
}
</style>
