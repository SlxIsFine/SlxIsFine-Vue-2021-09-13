<template>
  <div class="market">
    <TabList :config="tabConfig" />
  </div>
</template>

<script setup>
import TabList from "@/components/personalPage/TabList.vue";
import MarketForm from "@/components/market/MarketForm.vue";
import MarketHeader from "@/components/market/MarketHeader.vue";
import { reactive, markRaw } from "vue";
import {getGoodsInfo} from "@/service/apis.js"
const tabConfig = reactive({
  data: [
    {
      name: "全部",
      component: markRaw(MarketForm),
      componentProps: {},
    },
    {
      name: "京剧",
      component: markRaw(MarketForm),
      componentProps: {},
    },
    {
      name: "武术",
      component: markRaw(MarketForm),
      componentProps: {},
    },
    {
      name: "民谣",
      component: markRaw(MarketForm),
      componentProps: {},
    },
    {
      name: "中华民歌",
      component: markRaw(MarketForm),
      componentProps: {},
    },
    {
      name: "杂技",
      component: markRaw(MarketForm),
      componentProps: {},
    },
    {
      name: "剧本杀",
      component: markRaw(MarketForm),
      componentProps: {},
    },
    {
      name: "其他",
      component: markRaw(MarketForm),
      componentProps: {},
    },
  ],
  headerComponent: markRaw(MarketHeader),
  headerProps:{
    title:"模块:"
  }
});
getGoodsInfo().then((res)=>{
console.log(res)
})
</script>
<style lang="scss" scoped>
.market {
  width: 90%;
  margin: 12px auto;
  height: calc(100vh - 120px);
}
</style>
