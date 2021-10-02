<template>
  <div class="on-shelf">
    <FormHeader class="shelf-header">NFT上架</FormHeader>
    <div class="shelf-form">
      <FormRow :gap="'32px'" label="封面：" :align="'right'" :verticalAlign="'top'">
        <template v-slot:content>
          <div style="width: 150px; height: 150px; background-color: black"></div>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="简介：" :align="'right'" :verticalAlign="'center'">
        <template v-slot:content>
          <span>NFT简介NFT简介NFT简介NFT简介NFT简介NFT简介NFT简介NFT简介NFT简介</span>
        </template>
      </FormRow>
      <FormRow :gap="'32px'" label="简介：" :align="'right'" :verticalAlign="'center'">
        <template v-slot:content>
          <span>12345678901234</span>
        </template>
      </FormRow>

      <FormRow
        :gap="'32px'"
        label="私钥地址："
        :align="'right'"
        :verticalAlign="'top'"
      >
        <template v-slot:content>
          <FileUploader />
        </template>
      </FormRow>

      <div class="form-footer" style="margin-top: 40px">
        <div>
          <input type="checkbox" name="" id="agreeTransfer" />
          <label for="agreeTransfer">同意将NFT转移给平台</label>
        </div>
        <ColorButton
          class="colorful-btn"
          :textColor="'white'"
          :color="'#c02431'"
          :activeColor="'#c02431'"
          :w="'120px'"
          :h="'32px'"
          style="margin-top:30px"
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
.on-shelf {
  width: 70%;
  margin: 12px auto;
  height: calc(100vh - 120px);
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  .shelf-form {
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
  .shelf-header {
    margin-top: 32px;
    font-size: 18px !important;
  }
}
</style>
