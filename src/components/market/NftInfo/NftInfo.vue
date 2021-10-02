<template>
  <div class="nft-info">
    <div class="info-top">
      <div class="nft-img"></div>
      <div class="nft-info">
        <div>NFT作品名称</div>
        <div>发行人/单位</div>
        <div>
          <i style="width: 14px; height: 14px; background-color: grey"></i>
          <span>123456</span>
          <i style="width: 14px; height: 14px; background-color: grey"></i>
          <span>123456</span>
        </div>
        <div>
          发行人/单位/系列的具体名称，发行人/单位/系列的具体名称，发行人/单位/系列的具体名称，发行人/单位/系列的具体名称，
        </div>
        <div>
          <span>当前价格</span>
          <span>RMB ￥100</span>
        </div>
        <ColorButton
          class="colorful-btn"
          :textColor="'white'"
          :color="'#c02431'"
          :activeColor="'#c02431'"
          :w="'120px'"
          :h="'32px'"
          style="margin-top: 30px"
        >
          立即购买
        </ColorButton>
      </div>
    </div>
    <div class="info-bottom">
      <table>
      <tr>
          <th></th>
      </tr>
        <tr>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script setup>
import ColorButton from "@/components/common/UI/ColorButton.vue";
import FormHeader from "@/components/common/UI/FormHeader.vue";
import FormRow from "@/components/common/form/FormRow.vue";
import FileUploader from "@/components/common/form/FileUploader.vue";
import { ref } from "vue";
let th=["时间","用户名","购买NFT编号","该NFT区块链地址"]
let datas=[
    ["2020-09-21","交易者名字","123456789","0x0601...266d"]
]
</script>
<style lang="scss" scoped>
.nft-info {
  width: 70%;
  margin: 12px auto;
  height: calc(100vh - 120px);
  background-color: #fff;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;
  overflow: hidden;
  .info-top {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .nft-img {
      width: 400px;
      height: 400px;
      background-color: red;
    }
  }
  .info-bottom {
    width: 100%;
    height: 50%;
  }
}
</style>
