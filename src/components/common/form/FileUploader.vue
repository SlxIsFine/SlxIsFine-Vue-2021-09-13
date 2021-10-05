<template>
  <el-upload
    class="file-uploader"
    :auto-upload="false"
    :on-change="handleFileChange"
    :drag="true"
    multiple
    ref="fileUpload"
  >
    <slot>
      <ImageButton class="default-btn" :normalImg="filePng"></ImageButton>
    </slot>
  </el-upload>
</template>
<script setup>
import ImageButton from "@/components/common/UI/ImageButton.vue";
import filePng from "@img/file.png";
import { defineEmit, useContext,ref } from "@vue/runtime-core";
let emit = defineEmit(["selectFile"]);
let handleFileChange = (file, fileList) => {
  emit("selectFile", file, fileList);
};
let fileUpload = ref(null);
let clearFiles = () => {
  fileUpload.value.clearFiles();
};
let { expose } = useContext();
expose({
  clearFiles,
});
</script>
<style lang="scss" scoped>
.file-uploader {
  display: inline-block;
  vertical-align: middle;
  .default-btn {
    width: 180px;
    height: 120px;
    background-color: skyblue;
  }
  :deep(.el-upload-dragger) {
    width: max-content;
    height: max-content;
    border: none;
  }
}
</style>
