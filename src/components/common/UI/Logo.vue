<template>
  <img :src="logo" class="logo-img" :style="calcStyle" />
</template>
<script>
import logo from "@/assets/logo.png";
import { toRefs, computed } from "vue";
export default {
  props: ["w", "h"],
  setup(props) {
    const { w, h } = toRefs(props);
    let process = (val) => {
      if (!val) return undefined;
      val = val + "";
      if (val.match(/\d+/)) {
        return val + "px";
      }
      return val;
    };
    let calcStyle = computed(() => {
      let proW = w && process(w.value);
      let proH = h && process(h.value);
      let res = {};
      if (proW) res.width = proW;
      if (proH) res.height = proH;
      return res;
    });

    return {
      calcStyle,
      logo,
    };
  },
};
</script>
<style scoped lang="scss">
.logo-img {
  display: inline-block;
  object-fit: contain;
  
}
</style>