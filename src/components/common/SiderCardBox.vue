<template>
  <div class="slider-card-box" ref="el">
    <i class="icon iconfont icon-arrows-left" @click="scrollLeft"> </i>
    <div class="slider-wrapper" ref="content">
      <div
        class="hidden-inner"
        :style="{ transform: `translateX(${left}px)` }"
        ref="scrollContent"
      >
        <slot></slot>
      </div>
    </div>
    <i class="icon iconfont icon-arrows-right" @click="scrollRight"> </i>
  </div>
</template>
<script setup>
import { defineProps, onMounted, ref, useContext } from "vue";
const { expose } = useContext();

let props = defineProps({
  //每次默认滚动的距离
  dw: {
    default: 100,
  },
  //最大滚动宽度
  //   scrollWidth: {
  //     default: 600,
  //   },
  initOffset: {
    default: 0,
  },
});
let scrollWidth = ref(1000);
let left = ref(0);
let offset = ref(props.initOffset);
let initX = ref(props.initOffset);
let contentWidth = ref(0);
let scrollContent = ref(null);
let content = ref(null);
onMounted(() => {
  contentWidth.value = parseFloat(getComputedStyle(content.value).width);
  scrollWidth.value = parseFloat(scrollContent.value.scrollWidth);
});
let scrollLeft = () => {
    // debugger
  if (contentWidth.value - left.value >= scrollWidth.value - 10) {
    return;
  } else {
    offset.value--;
    left.value = initX.value + offset.value * props.dw;
  }
};
let scrollRight = () => {
  //   debugger;
  if (left.value > -10) {
    return;
  } else {
    offset.value++;
    left.value = initX.value + offset.value * props.dw;
  }
};

const el = ref(null);
expose({
  el,
});
</script>
<style lang="scss" scoped>
$icon-w: 32px;
.slider-card-box {
  min-width: 32px;
  min-height: 32px;
  position: relative;
  display: flex;
  //   background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  position: relative;
  .icon {
    // background-color: green;
    font-family: "iconfont" !important;
    width: $icon-w;
    height: 80%;
    cursor: pointer;
    display: table-cell;
    text-align: center;
    position: relative;
  }
  .icon:hover{
      color: $rd;
  }
  .icon::before {
    vertical-align: middle;
    position: absolute;
    top: 50%;
    font-size: 20px;
    transform:translateY(-50%) scaleY(1.5);
  }
  .slider-wrapper {
    height: max-content;
    width: calc(100% - #{$icon-w});
    overflow: hidden;
    // background-color: #fff;
    .hidden-inner {
      transition: transform 0.4s ease-in;
      width: max-content;
      height: max-content;
      display: flex;
      align-items: center;
    }
  }
}
</style>
