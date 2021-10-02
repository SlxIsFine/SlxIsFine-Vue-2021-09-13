<template>
  <div :class="['color-btn', isActive ? 'active' : '']" :style="btnStyle">
    <slot></slot>
  </div>
</template>
<script setup>
import { computed, defineProps, ref } from "vue";
const { color, activeColor, textColor, textColorActive, w, h } = defineProps({
  color: {
    default: "white",
  },
  textColor: {
    default: "black",
  },
  textColorActive: {
    default: "white",
  },
  activeColor: {
    default: "#c02431",
  },
  w: {
    default: "64px",
  },
  h: {
    default: "48px",
  },
});
let btnStyle = computed(() => {
  return {
    width: w,
    height: h,
    lineHeight: h,
    "--active-color": activeColor,
    "--normal-color": color,
    "--normal-text-color": textColor,
    "--active-text-color": textColorActive,
  };
});
let isActive = ref(false);
const focus = function () {
  isActive.value = true;
};
const blur = function () {
  isActive.value = false;
};
</script>
<style lang="scss" scoped>
.color-btn {
  min-width: 32px;
  min-height: 16px;
  color: black;
  cursor: pointer;
  width: 48px;
  height: 32px;
  --normal-color: white;
  --active-color: "#c02431";
  --normal-text-color: black;
  --active-text-color: "#c02431";
  background-color: var(--normal-color);
  color: var(--normal-text-color);
text-align: center;
  div,
  span {
    text-align: center;
    vertical-align: middle;
  }
}
.color-btn:hover,
.active {
  color: var(--active-text-color);
  background-color: var(--active-color);
}
</style>
