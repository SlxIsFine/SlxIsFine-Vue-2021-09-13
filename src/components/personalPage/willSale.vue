<template>
  <div class="will-sale">
    <FormHeader class="sale-header">待上架的NFT</FormHeader>
    <div class="nft-table">
      <div
        class="prodtct-wrapper"
        v-for="(val, key) in ownProducts"
        :key="val.hash + key"
      >
        <ImageButton :normalImg="product" class="product-btn" />
        <div class="sj-btn" @click="route('onShelf')">上架</div>
      </div>
    </div>

    <div class="nft-footer"></div>
  </div>
</template>
<script setup>
import ColorButton from "@/components/common/UI/ColorButton.vue";
import FormHeader from "@/components/common/UI/FormHeader.vue";
import FormRow from "@/components/common/form/FormRow.vue";
import FileUploader from "@/components/common/form/FileUploader.vue";
import { ref } from "vue";
import ImageButton from "@/components/common/UI/ImageButton.vue";
import product from "@img/product.png";
import { useRouter } from "vue-router";

let router = useRouter();
let route = (name) => {
  router.push({ name: name });
};
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
</script>
<style lang="scss" scoped>
.will-sale {
  width: 70%;
  margin: 12px auto;
  height: calc(100vh - 120px);
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  .nft-table {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 100%;
    height: calc(100% - 100px);
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
  .nft-footer {
    width: 100%;
    height: 50px;
    margin-top: 16px;
  }
  .shelf-header {
    margin-top: 32px;
    font-size: 18px !important;
  }
}
</style>
