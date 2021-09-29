<template>
  <div class="row tab-header">
    <div
      v-for="label in labels"
      :class="[
        'col',
        'header-item',
        'cursor-pointer',
        currentTab && currentTab.name == label.name ? 'active' : '',
      ]"
      :key="label.name + '_' + label.id"
      @click="onCheckLabel(label)"
    >
      <span>{{ label.name }}</span>
    </div>
    <!-- 下方动画 -->
    <transition name="scale-to-show">
      <div
        class="tab-animate"
        v-show="showTabAnimate"
        :style="{ left: tabPos + 'px' }"
      ></div>
    </transition>
  </div>
</template>
<script setup>
import { computed, defineEmit, defineProps, ref } from "vue";
let props = defineProps({
  labels: {
    default: [
      { name: "我拥有的NFT", id: "1" },
      { name: "我发布的NFT", id: "2" },
      { name: "我收藏的NFT", id: "3" },
    ],
  },
});
console.log("hhh", props.labels);
let labels = computed(() => props.labels);
//是否显示下方的动画
let showTabAnimate = computed(
  () => currentTab.value && typeof currentTab.value == "object"
);

// ref(false)
// setInterval(()=>{
//     showTabAnimate.value=!showTabAnimate.value
// },1000)

//计算线的位置
let tabPos = computed(() => {
  console.log(tabPos.value, labels.value, currentTab.value);
  if (showTabAnimate.value && currentTab.value && labels.value) {
    for (let k in labels.value) {
      if (labels.value[k].name == currentTab.value.name) {
        return k * (120 + 12);
      }
    }
  } else {
    return 0;
  }
});
let emit = defineEmit(["tabChange"]);

let currentTab = ref(null);
//点击时切换tab
let onCheckLabel = (label) => {
  currentTab.value = label;

  emit("tabChange");
};
</script>
<style lang="scss" scoped>
$item-w: 120px;
$item-h: 48px;
.tab-header {
  position: relative;
  height: $item-h;
  line-height: $item-h;
  font-size: 16px;
  .header-item {
    width: $item-w;
    margin: 0px 6px;
    height: 90%;
    &.active {
      color: $rd;
    }
  }
}
.tab-animate {
  background-color: $rd;
  bottom: 0px;
  height: 4px;
  border-radius: 2px;
  width: $item-w;
  position: absolute;
  transition: all ease 0.3s;
  transform-origin: left center;
}
.scale-to-show-enter-active,
.scale-to-show-leave-to {
  transform: scaleX(0);
}
.scale-to-show-enter-to,
.scale-to-show-leave {
  transform: scaleX(1);
}
</style>