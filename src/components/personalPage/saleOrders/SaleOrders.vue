<template>
  <div class="sale-orders">
    <TabList :config="tabConfig" />
  </div>
</template>
<script setup>
import { reactive, markRaw } from "vue";
import TabList from "@/components/personalPage/TabList.vue";
import Transaction from "@/components/personalPage/saleOrders/Transaction.vue";
const tabConfig = reactive({
  data: [
    {
      name: "交易中",
      component: markRaw(Transaction),
      componentProps: {},
    },
    {
      name: "待上线",
      component: markRaw(Transaction),
      componentProps: {},
    },
    {
      name: "待付款",
      component: markRaw(Transaction),
      componentProps: {},
    },
    {
      name: "待转移",
      component: markRaw(Transaction),
      componentProps: {},
    },
    {
      name: "无效订单",
      component: markRaw(Transaction),
      componentProps: {},
    },
    {
      name: "已完成",
      component: markRaw(Transaction),
      componentProps: {},
    },
  ],
});
</script>
<style lang="scss" scoped>
.sale-orders {
  width: 70%;
  margin: 0px auto;
  height: calc(100vh - 96px);
 
    :deep(.tab-header) {
      border: none !important;
    }
  
}
</style>
