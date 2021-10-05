<template>
  <div class="money-detail">
    <FormHeader class="detail-header"> 金额明细 </FormHeader>
    <div class="detail-timeline">
      <TimeLine :items="items" />
    </div>
  </div>
</template>
<script setup>
import FormHeader from "@/components/common/UI/FormHeader.vue";
import TimeLine from "@/components/personalPage/moneyDetail/TimeLine.vue";
let items = [
  {
    content: "提现到建设银行(8346) 100元 到账时间：2021-09-025 12:01 余额：12345元",
    timestamp: "2021-04-15",
  },
  {
    content: "Approved",
    timestamp: "2018-04-13",
  },
  {
    content: "Success",
    timestamp: "2018-04-11",
  },
  {
    content: "提现到建设银行(8346) 100元 到账时间：2021-09-025 12:01 余额：12345元",
    timestamp: "2021-04-15",
  },
  {
    content: "提现到建设银行(8346) 100元 到账时间：2021-09-025 12:01 余额：12345元",
    timestamp: "2021-04-15",
  },
  {
    content: "提现到建设银行(8346) 100元 到账时间：2021-09-025 12:01 余额：12345元",
    timestamp: "2021-04-15",
  },
  {
    content: "提现到建设银行(8346) 100元 到账时间：2021-09-025 12:01 余额：12345元",
    timestamp: "2021-04-15",
  },
  {
    content: "提现到建设银行(8346) 100元 到账时间：2021-09-025 12:01 余额：12345元",
    timestamp: "2021-04-15",
  },
  {
    content: "余额 +10元",
    timestamp: "2021-04-15",
  },
  {
    content: "提现到建设银行(8346) 100元 到账时间：2021-09-025 12:01 余额：12345元",
    timestamp: "2021-04-15",
  },
];
</script>
<style lang="scss" scoped>
.money-detail {
  width: 70%;
  margin: 12px auto;
  height: calc(100vh - 120px);
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  .detail-header {
    margin-top: 20px;
  }
  .detail-timeline {
    width: 92.5%;
    margin: 0px auto;
    //   background-color: red;
    height: 92%;
    display: flex;
    padding: 20px 0px 0px 60px;
  }
}
</style>
