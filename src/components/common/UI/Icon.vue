<template>
  <i :class="className" :style="style">
    {{ it }}
  </i>
</template>
<script setup>
import { computed, defineProps, toRefs, ref } from "vue";
//icon-class icon-text 任选其一,w,h宽高
let { ic, it, w, h, mg, color, src } = defineProps([
  "ic",
  "it",
  "w",
  "h",
  "mg",
  "color",
  "src",
]);
//em 会导致逐级放大或缩小，将其处理为1em
let processUnit = (val) => {
  if (val.endsWith("em") && !val.endsWith("rem")) {
    return "1em";
  }
  return val;
};
let pw = processUnit(w);
let ph = processUnit(h);
let className = computed(() => {
  let base = "icon iconfont icontent ";
  if (ic) return base + `icon-${ic}`;
  return base;
});
let style = computed(() => {
  return {
    width: pw,
    height: ph || "max-content",
    margin: mg,
    fontSize: pw,
    color: color,
    backgroundImage: `url(${src})`,
  };
});
</script>

<style lang="scss" scoped>
@import "./Icons.scss";
.icontent {
  display: inline-block;
  vertical-align: middle;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  text-align: center;
  line-height: 0px;
  &::before {
    vertical-align: middle;
    font-size: 1em;
    transform: translateY(-1px);
  }
  &::after{
    content: "";
    width:0px;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
