<template>
  <div
    :style="{ backgroundImage: `url(${curImg})` }"
    @mousedown="mouseDown"
    @mouseleave="mouseLeave"
    @mouseover="mouseOver"
    class="image-button"
  ></div>
</template>
<script setup>
import { defineProps, defineEmit, computed,ref } from "vue";
const props = defineProps(["normalImg", "hoverImg", "activeImg"]);
let isHover = ref(false);
let isActive = ref(false);

let mouseDown = () => {
  isActive.value = !isActive.value;
};
let mouseLeave = () => {
  isHover.value = false;
};
let mouseOver = () => {
  isHover.value = true
};
let curImg = computed(() => {
  let res = props.normalImg;
  if (isActive.value) {
    res = props.activeImg || res;
    return res;
  }
  if (isHover.value) {
    res = props.hoverImg || res;
    return res;
  }
  return res
});
</script>
<style lang="scss" scoped>
.image-button{
    min-width: 16px;
    min-height: 16px;
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
}
</style>
