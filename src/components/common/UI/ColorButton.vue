<template>
  <div :class="['color-btn',isActive?'active':'']">
    <slot></slot>
  </div>
</template>
<script setup>
import {ref} from "vue"
let isActive = ref(false);
const focus = function() {
  isActive.value = true;
};
const blur = function() {
  isActive.value = false;
};
</script>
<style lang="scss" scoped>
.color-btn {
  min-width: 32px;
  min-height: 16px;
  background-color: #fff;
  color: black;
  cursor: pointer;
}
.color-btn:hover,
.active {
  color: white;
  background-color: #c02431;
}
</style>