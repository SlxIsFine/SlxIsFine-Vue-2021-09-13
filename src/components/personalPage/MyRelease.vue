<template>
  <div class="own">
    <SiderCardBox ref="sliderBox" class="slider-box" :dw="350">
      <ImageButton 
      v-for="(val, key) in ownProducts" :key="val.hash + key" 
      :normalImg="product"
      class="product-btn"
      />
    </SiderCardBox>
    <div class="view-all">查看全部</div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import SiderCardBox from "@/components/common/SiderCardBox.vue";
import ImageButton from "@/components/common/UI/ImageButton.vue";
import product from "@img/product.png";
let sliderBox = ref(null);
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
  }
];
onMounted(() => {});
</script>
<style lang="scss" scoped>
.own {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .slider-box {
    width: 100%;
    height: 90%;
  }
  .product-btn{
      width: 350px;
      height: 320px;
      margin: 0px 10px;
  }
  .view-all{
position: absolute;
    top: 20px;
    right: 60px;
    color: grey;
    cursor: pointer;
}
}
</style>
