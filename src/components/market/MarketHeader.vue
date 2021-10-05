<template>
  <div class="row tab-header">
      <div class="col header-item " style="text-align:right">
        <span >{{title}}</span>  
      </div>
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
  tabChange: {
    default: () => {},
  },
  customProps:{
      default:{
          title:"模块:"
      }
  }
});
let labels = computed(() => props.labels);
let currentTab = ref(props.labels[0]);
console.log(props.customProps)
let title=ref(props.customProps.title)
//点击时切换tab
let onCheckLabel = (label) => {
  currentTab.value = label;
  // debugger
  props.tabChange(label)
};
</script>
<style lang="scss" scoped>
$item-w: 90px;
$item-h: 48px;
.tab-header {
  position: relative;
  height: $item-h;
  line-height: $item-h;
  font-size: 16px;
  padding-left: 80px;
//   border-bottom: 1px solid rgba(156, 156, 156, 0.603);
  .header-item {
    width: $item-w;
    margin: 0px 6px;
    height: 40px;
    line-height: 35px;
 
    &.active {
      color: white;

      background-image: url(@img/icons/market-bg.png);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
}


</style>
