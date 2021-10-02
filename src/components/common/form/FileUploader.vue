<template>
<el-upload class="file-uploader">
<slot>
    <ImageButton class="default-btn" :normalImg="filePng"></ImageButton>
</slot>
</el-upload>
</template>
<script setup>
import ImageButton from "@/components/common/UI/ImageButton.vue"
import filePng from "@img/file.png"
</script>
<style lang="scss" scoped>
.file-uploader{
    display: inline-block;
    vertical-align: middle;
    .default-btn{
    width: 180px;
    height: 120px;
    background-color: skyblue;
  
}
  :deep(.el-upload-dragger){
        width: max-content;
        height: max-content;
        border: none;

    }
}

</style>