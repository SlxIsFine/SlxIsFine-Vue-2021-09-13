<template>
  <div class="release">
    <FormHeader class="release-header">创建您的发布</FormHeader>
    <div class="release-form">
      <FormRow :gap="'32px'" label="上传封面" :labelWidth="'60px'">
        <template v-slot:content>
          <FileUploader drag multiple>
            <!-- <div style="width:200px;height:200px;background-color:green"></div> -->
          </FileUploader>
          <div class="upload-info">图片大小不得超过1M<br />尺寸为274*288px</div>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="名称">
        <template v-slot:content>
          <input type="text" />
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="简介">
        <template v-slot:content>
          <textarea style="width: 344px; height: 92px; resize: none" />
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="上传作品">
        <template v-slot:content>
          <FileUploader drag multiple>
            <!-- <div style="width:200px;height:200px;background-color:green"></div> -->
          </FileUploader>
          <div class="upload-info">注：文件大小不超过5G</div>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="标签">
        <template v-slot:content>
          <div style="color: #c02431">+添加标签</div>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="选择板块">
        <template v-slot:content>
          <radio id="opera" />
          <label for="opera"> 京剧 </label>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="发行地址">
        <template v-slot:content>
          <radio id="opera1" />
          <label for="opera1"> <span>默认</span> 1234567890</label>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="公钥">
        <template v-slot:content>
          <label> 1234567890</label>
        </template>
      </FormRow>

      <FormRow :gap="'32px'" label="私钥">
        <template v-slot:content>
          <FileUploader drag multiple>
            <!-- <div style="width:200px;height:200px;background-color:green"></div> -->
          </FileUploader>
        </template>
      </FormRow>

      <div class="form-footer">
        <ColorButton
          class="colorful-btn"
          :textColor="'white'"
          :color="'#c02431'"
          :activeColor="'#c02431'"
          :w="'120px'"
          :h="'32px'"
        >
          发布
        </ColorButton>

        <div>
          <input type="radio" id="agree-radio" />
          <label for="agree-radio"> 同意《福客空间NFT发布规范》 协议 </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import FormHeader from "@/components/common/UI/FormHeader.vue";
import FormRow from "@/components/common/form/FormRow.vue";
import FileUploader from "@/components/common/form/FileUploader.vue";
import { ref } from "vue";
import ColorButton from "@/components/common/UI/ColorButton.vue";
</script>
<style lang="scss" scoped>
.release {
  width: 70%;
  margin: 12px auto;
  height: calc(100vh - 120px);
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  .release-header {
    margin-top: 32px;
    font-size: 18px !important;
  }
  .release-form {
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
      margin: 6px 0px;
    }
    .form-footer {
      margin-left: 95px;
    }
  }
}
</style>
