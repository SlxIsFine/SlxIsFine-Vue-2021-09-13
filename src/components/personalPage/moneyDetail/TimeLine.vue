<template>
  <el-timeline>
    <el-timeline-item
      v-for="(item, index) in items"
      :key="index"
      :timestamp="item.timestamp"
    >
      {{ item.content }}
    </el-timeline-item>
  </el-timeline>
</template>
<script setup>
import { defineProps } from "@vue/runtime-core";

let {items}=defineProps({
    items:{
        default:[]
    }
})
</script>
<style lang="scss" scoped>
:deep(.el-timeline-item__timestamp.is-bottom) {
  position: absolute;
  width: max-content;
  right: 100%;
  margin-right: 10px;
  top: 0px;
}
:deep(.el-timeline-item__timestamp.is-bottom){
    margin-top: 0px !important;
}
:deep(.el-timeline-item__node){
    // background-image: radial-gradient(red, white 100%);
    // position: relative;
    
    &::before{
        content: "";
        display: block;
        width: 150%;
        height: 150%;
        background-color: rgb(252, 174, 174);
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translateY(-50%) translateX(-50%);
        border-radius: 50%;
        z-index: 0;
    }
     &::after{
        content: "";
        display: block;
        width: 80%;
        height: 80%;
        background:radial-gradient(red,rgb(252, 174, 174));
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translateY(-50%) translateX(-50%);
        z-index: 1;
        border-radius: 50%;
    }
}
:deep(.el-timeline-item){
    height: 40px;
}
:deep(.el-timeline-item__tail){
    border-left-color: $rd;
}
</style>
