<template>
  <div class="nft-info">
    <div class="info-top">
      <div class="nft-img"></div>
      <div class="nft-info-form">
        <div class="info-title">NFT作品名称</div>
        <div class="nft-org">发行人/单位</div>
        <div style="margin-bottom: 16px">
          <Icon ic="eye" w="24px" mg="0 6px 0 0" />
          <label style="margin-right: 60px; color: grey">s123456</label>
          <Icon it="&#xe798;" w="24px" mg="0 6px 0 0" />
          <span style="color: grey">123456</span>
        </div>
        <div style="margin-bottom: 16px">
          发行人/单位/系列的具体名称，发行人/单位/系列的具体名称，发行人/单位/系列的具体名称，发行人/单位/系列的具体名称，
        </div>
        <div>
          <span style="color: rgb(150, 150, 150); margin-right: 16px">当前价格：</span>
          <span
            ><span style="color: rgb(179, 38, 49); vertical-align: text-bottom"
              >RMB￥</span
            >
            <span style="font-size: 28px; vertical-align: bottom; color: rgb(179, 38, 49)"
              >100</span
            ></span
          >
        </div>
        <ColorButton
          :textColor="'white'"
          :color="'#c02431'"
          :activeColor="'#c02431'"
          :w="'160px'"
          :h="'40px'"
          style="margin-top: 30px"
          @click="buyNft"
        >
          立即购买
        </ColorButton>
      </div>

      <ColorButton
        class="colorful-btn"
        :textColor="'white'"
        :color="'rgb(214,104,104)'"
        :activeColor="'rgb(214,104,104)'"
        :w="'32px'"
        :h="'32px'"
        style="position: absolute; top: 40px; right: 110px"
      >
        <Icon it="&#xe798;" w="24px" />
      </ColorButton>
      <ColorButton
        class="colorful-btn"
        :textColor="'white'"
        :color="'rgb(214,104,104)'"
        :activeColor="'rgb(214,104,104)'"
        :w="'32px'"
        :h="'32px'"
        style="position: absolute; top: 40px; right: 68px"
      >
        <Icon it="&#xe798;" w="24px" />
      </ColorButton>
    </div>
    <div class="info-bottom">
      <table class="nft-table">
        <tr>
          <th v-for="h in th" :key="h">{{ h }}</th>
        </tr>
        <tr v-for="(row, k) in datas" :key="k">
          <td v-for="item in row" :key="item">
            {{ item }}
          </td>
        </tr>
      </table>
    </div>

    <el-dialog
      v-model="showTableDialog"
      :title="'购买明细'"
      width="900px"
      :destroy-on-close="true"
      :show-close="false"
    >
      <div class="dialog-form">
        <div class="form-left">
          <div style="width: 150px; height: 120px; background-color: red"></div>
        </div>
        <div class="form-cl">
          <div>NFT名称NFT名称</div>
          <div>
            <span class="row-label"> 发行人 </span>
            <span class="row-value"> 小明 </span>
          </div>

          <div>
            <span class="row-label"> 合约地址 </span>
            <span class="row-value"> 123456789123456 </span>
          </div>
        </div>

        <div class="form-cr">
          <div class="row-label">
            <div class="tag">地址</div>
          </div>
          <div class="row-values">
            <div class="row">
              <span class="tag1">默认</span>
              <input type="radio" />
              <span>123456789123456</span>
            </div>

            <div class="row">
              <span class="tag1">平台</span>
              <input type="radio" />
              <span>123456789123456</span>
            </div>

            <div class="row">
              <span class="tag1 transparent"></span>
              <input type="radio" />
              <span>123456789123456</span>
            </div>

            <div class="row">
              <span class="tag1 transparent"></span>
              <input type="radio" />
              <span>123456789123456</span>
            </div>
          </div>
        </div>
        <div class="form-right">
          <span style="color: grey"> 价格 </span>
          <span style="color: rgb(179, 38, 49); font-size: 20px">￥1000.00</span>
        </div>
      </div>
      <div class="underline"></div>
      <div class="footer">
        <div>订单号：123456789123</div>
        <div class="right">
          <div class="time">10:59</div>

          <ColorButton
            class="colorful-btn"
            :textColor="'white'"
            :color="'rgb(214,104,104)'"
            :activeColor="'rgb(214,104,104)'"
            :w="'80px'"
            :h="'32px'"
            @click="()=>{showTableDialog = false;showBuy = true}"
          >
            确认支付
          </ColorButton>

          <ColorButton
            class="colorful-btn"
            :textColor="'white'"
            :color="'rgb(214,104,104)'"
            :activeColor="'rgb(214,104,104)'"
            :w="'80px'"
            :h="'32px'"
            @click="showTableDialog = false"
          >
            取消订单
          </ColorButton>
        </div>
      </div>
    </el-dialog>

    <el-dialog
      v-model="showBuy"
      :title="'扫码付款'"
      width="900px"
      :destroy-on-close="true"
      :show-close="false"
    >
      <div class="buyContent">
        <div class="qrCode"></div>
        <div class="form">
          <div>剩余支付时间</div>
          <div style="margin:12px 0px;">支持微信、支付宝、数字人民币App扫码付款</div>
          <div>
            <span style="color: grey">价格</span>
            <span style="color: red">￥1000.00</span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script setup>
import ColorButton from "@/components/common/UI/ColorButton.vue";
import ImageButon from "@/components/common/UI/ImageButton.vue";
import FormHeader from "@/components/common/UI/FormHeader.vue";
import FormRow from "@/components/common/form/FormRow.vue";
import FileUploader from "@/components/common/form/FileUploader.vue";
import { ref } from "vue";
import Icon from "@/components/common/UI/Icon.vue";
let th = ["时间", "用户名", "购买NFT编号", "该NFT区块链地址"];
let datas = [
  ["2020-09-21", "交易者名字", "123456789", "0x0601...266d"],
  ["2020-09-21", "交易者名字", "123456789", "0x0601...266d"],
  ["2020-09-21", "交易者名字", "123456789", "0x0601...266d"],
  ["2020-09-21", "交易者名字", "123456789", "0x0601...266d"],
  ["2020-09-21", "交易者名字", "123456789", "0x0601...266d"],
  ["2020-09-21", "交易者名字", "123456789", "0x0601...266d"],
  ["2020-09-21", "交易者名字", "123456789", "0x0601...266d"],
];
let showTableDialog = ref(false);
let buyNft = () => {
  showTableDialog.value = true;
};
let showBuy = ref(false);
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
    position: relative;
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .nft-img {
      width: 500px;
      height: 400px;
      background-color: red;
    }
    .nft-info-form {
      width: calc(60% - 400px);
      height: 90%;
      padding-left: 32px;
      font-size: 14px;
      .info-title {
        font-size: 28px;
        font-weight: bolder;
        line-height: 28px;
        margin-bottom: 12px;
      }
      .nft-org {
        font-size: 16px;
        margin-bottom: 12px;
        font-weight: bolder;
      }
    }
  }
  .info-bottom {
    width: 100%;
    height: 50%;
    padding: 32px;
    box-sizing: border-box;
    .nft-table {
      width: 100%;
      tr {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin: 12px 0px;
        th {
          width: 200px;
          text-align: center;
          // background-color: grey;
        }
        td {
          width: 200px;
          text-align: center;
        }
      }
      tr {
        td:last-child {
          color: rgb(60, 108, 150);
        }
      }
    }
  }
}
:deep(.dialog-form) {
  display: flex;
  border-radius: 6px;
  .form-left {
    width: 26%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form-cl {
    width: 24%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
  }
  .form-cr {
    width: 32%;
    display: flex;
    .row-label {
      width: 30%;
    }
    .row-values {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
  .form-right {
    width: 18%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.underline {
  width: 100%;
  height: 1px;
  background-color: rgba(209, 208, 208, 0.836);
}
.footer {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  .right {
    display: flex;
    width: 30%;
    justify-content: space-between;
    align-items: center;
  }
}
:deep(.el-dialog__header) {
  background: red;
  color: white;
  margin-bottom: 16px;
  padding: 8px 15px;
  .el-dialog__title {
    color: white;
  }
}
:deep(.el-dialog__body) {
  padding-top: 0px;
  padding-bottom: 0px;
}
.tag {
  width: 60px;
  padding: 4px 8px;
  text-align: center;
  background: rgb(240, 213, 215);
  border-radius: 3px;
}
.tag1 {
  display: inline-block;
  background-color: rgb(170, 100, 114);
  padding: 2px 4px;
  border-radius: 3px;
  width: 32px;
  height: 18px;
  color: white;
  text-align: center;
}
.transparent {
  background-color: transparent;
}
.buyContent {
  width: 100%;
  height: 160px;
  background-color: #fff;
  display: flex;
  align-items: center;
  .qrCode{
    width: 100px;
    height: 100px;
    background-color: red;
    margin-right: 32px;
  }
  .form{

    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

  }
}
</style>
