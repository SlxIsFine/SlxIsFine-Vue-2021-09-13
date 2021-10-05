<template>
  <div class="market-form">
    <div class="prodtct-wrapper" v-for="(val, key) in ownProducts" :key="val.hash + key">
      <ImageButton :normalImg="product" class="product-btn" @click="route('nftInfo')" />
      <div class="sj-btn">系列</div>
    </div>
  </div>
</template>
<script setup>
import ImageButton from "@/components/common/UI/ImageButton.vue";
import product from "@img/product.png";
import { useRouter } from "vue-router";

let ownProducts = [
  {
    id: "1",
    owner: "小刘",
    hash: "asjsjiajsis-akdnnd-as11jsa",
    creator: "小刘",
    time: "2021-09-23",
  },
  {
    id: "1",
    owner: "张三",
    hash: "asjsjiajsis-akdnnd-adsjsa",
    creator: "张三",
    time: "2021-09-23",
  },
  {
    id: "1",
    owner: "李四",
    hash: "asjsjiajsis-akdnnd-basjsa",
    creator: "李四",
    time: "2021-09-23",
  },
  {
    id: "1",
    owner: "王五",
    hash: "asjsjiajsis-akdnnd-asmjsa",
    creator: "王五",
    time: "2021-09-23",
  },
  {
    id: "1",
    owner: "王五",
    hash: "asjsjiajsis-akdnnd-asmjsa",
    creator: "王五",
    time: "2021-09-23",
  },
  {
    id: "1",
    owner: "王五",
    hash: "asjsjiajsis-akdnnd-asmjsa",
    creator: "王五",
    time: "2021-09-23",
  },
  {
    id: "1",
    owner: "王五",
    hash: "asjsjiajsis-akdnnd-asmjsa",
    creator: "王五",
    time: "2021-09-23",
  },
  {
    id: "1",
    owner: "王五",
    hash: "asjsjiajsis-akdnnd-asmjsa",
    creator: "王五",
    time: "2021-09-23",
  },
];
let router = useRouter()
let route = (name) => {
  router.push({ name: name });
};
</script>
<style lang="scss" scoped>
.market-form {
  display: grid;
  width: 100%;
  height: 780px;
  margin-top: 16px;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  .prodtct-wrapper {
    width: 90%;
    height: 90%;
    margin: 0px 10px;
    text-align: center;
    .product-btn {
      width: 90%;
      height: 90%;
    }
    .sj-btn {
      display: inline-block;
      width: 80px;
      height: 32px;
      line-height: 32px;
      color: white;
      background-color: $rd;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
    }
  }
}
</style>
