<template>
  <div class="icon-input" @mouseover="isHover = true" @mouseleave="isHover = false">
    <Icon :ic="icon" :w="iconSize" :h="iconSize" />
    <input
      type="text"
      :placeholder="placeholder"
      v-model="value"
      class="icon-input__inner"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
    <transition name="fadeIn">
      <span v-show="showTipText" class="tip-text">
        <slot name="tipText"></slot>
      </span>
    </transition>
  </div>
</template>
<script setup>
import Icon from "../UI/Icon.vue";
import { defineEmit, defineProps, watchEffect, ref, computed } from "vue";
let { placeholder, modelValue, icon, iconSize, tipText, tipTextTrigger } = defineProps({
  placeholder: {
    default: "",
  },
  modelValue: {
    default: "",
  },
  icon: {
    default: "",
  },
  iconSize: {
    default: "28px",
  },
  tipTextTrigger: {
    //hover focus
    default: "",
  },
});
let isHover = ref(false);
let isFocus = ref(false);
let showTipText = computed(() => {
  if (!tipTextTrigger) {
    return true;
  } else if (tipTextTrigger == "hover") {
    return isHover.value;
  } else if (tipTextTrigger == "focus") {
    return isFocus.value;
  }
});
let emit = defineEmit({
  "update:modelValue": () => true,
});
let value = ref(modelValue);
watchEffect(() => {
  emit("update:modelValue", value.value);
});
</script>
<style lang="scss" scoped>
$gap: 2px;
$activeColor: $rd;
.icon-input {
  border-bottom: 2px solid rgb(204, 204, 204);
  padding: 4px 0px;
  display: inline-block;
  font-size: inherit;
  transition: all ease-out 0.3s;
  position: relative;
  .icon-input__inner {
    font-size: inherit;
    display: inline-block;
    width: calc(100% - 3em - #{$gap});
    border: none;
    outline: none;
    margin-left: $gap;
    padding: 4px 0px;
    vertical-align: middle;
  }
  &:hover,
  .active {
    border-color: $activeColor;
    color: $activeColor;
    .icon {
      color: $activeColor;
    }
  }
  .tip-text {
    font-size: 12px;
    color: $rd;
    position: absolute;
    right: 0px;
    bottom: -1.5em;
    cursor: pointer;
  }
}
.fadeIn-enter-active{
    transition: all ease .3s;
    opacity: 0;
}
.fadeIn-enter-to{
opacity: 1;
}
</style>
