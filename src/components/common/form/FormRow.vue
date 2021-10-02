<template>
  <div class="form-row" :style="{ height: height }">
    <div
      class="label"
      :style="{ marginRight: gap, width: labelWidth, verticalAlign, textAlign: align,textAlignLast:align }"
    >
      <slot name="label">
       <span> {{ label }}</span>
        <!-- <span style="width: 100%; height: 0px; display: inline-block;line-height:0px" v-if="align=='justify'"></span> -->
        <!-- <span class="label-text">{{ label }}</span> -->
      </slot>
    </div>

    <div class="content" :style="{ width: contentWidth }">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const { label, verticalAlign, gap, labelWidth, contentWidth, align } = defineProps({
  label: {
    default: "label",
  },
  verticalAlign: {
    default: "top",
  },
  height: {
    default: "max-content",
  },
  gap: {
    default: "0px",
  },
  labelWidth: {
    default: "64px",
  },
  contentWidth: {
    default: "calc(90% - 64px - 32px)",
  },
  align: {
    default: "justify",
  },
});
</script>
<style lang="scss" scoped>
.form-row {
  display: block;
  width: 100%;
  height: max-content;
  .label {
    display: inline-block;
    *{
      vertical-align: inherit;
    }
  }
  .content {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
