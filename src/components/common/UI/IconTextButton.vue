<template>
  <div class="icon-text-button">
    <div class="icon" :style="{backgroundImage:`url(${icon})`}"></div>
    <div class="text" :style="{color:color}">{{props.text}}</div>
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
let props = defineProps([
  "icon",
  "activeIcon",
  "text",
  "activeColor",
  "color",
  "isActive"
]);
let icon = computed(
  () =>
    (props.isActive ? props.activeIcon : props.icon) ||
    props.icon ||
    props.activeIcon
);
let color = computed(
  () =>
    (props.isActive ? props.activeColor : props.color) ||
    props.color ||
    props.activeColor
);
</script>
<style lang="scss" scoped>
.icon-text-button {
  display: inline-block;
  width: max-content;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .icon {
    width: 32px;
    height: 32px;
    background-size: 100% 100%;
background-repeat: no-repeat;
border-radius: 50%;
    display: block;
  }
  .text {
    font-size: 16px;
  }
}
</style>