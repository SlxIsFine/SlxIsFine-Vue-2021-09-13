<template>
  <div class="topbar">
    <img class="logo" src="@/assets/logo.png" alt="logo" @click="reroute" />
    <div
      class="tab"
      v-for="tab in tabs"
      :key="tab.name"
      @mouseover="(hover = true), (mouseTarget = tab.name)"
      @mouseleave="hover = false"
    >
      <router-link
        class="router"
        :to="tab.router"
        :class="{
          hoverStyle:
            (hover && mouseTarget == tab.name) ||
            (currentRouter.startsWith(tab.router)&& tab.router !='/'),
        }"
      >{{ tab.name }}</router-link>
      <div class="dropdown-box" :style="`left:-${65 - tab.width / 2}px`">
        <div class="dropdown" v-show="tab.submenu && hover && mouseTarget == tab.name">
          <span v-for="(v, i) in tab.submenu" :key="i" @click="nav(v.name)">
            {{
            v.text
            }}
          </span>
        </div>
      </div>
    </div>
    <div class="info-wrapper">
      <template v-if="isLogin">
        <div class="inline-middle avatar"></div>
        <div class="inline-middle username">Jhon</div>
      </template>
      <template v-else>

        <div class="inline-middle button btn-left">
          <router-link to="register"> 注册</router-link>
          </div>
        <div class="inline-middle button btn-right">
          <router-link to="login"> 登录</router-link>
          </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { opera, opera1, kungfu, kungfu1, folk, folk1 } from "@/assets/img";
let hover = ref(false);
let mouseTarget = ref("");

const router = useRouter();
let currentRouter = ref("");
let isLogin = ref(false);
const reroute = () => router.replace({ path: "/home" });
const nav = name => {
  router.push({ name: "opera", params: { submenu: name } });
};
watchEffect(() => (currentRouter.value = router.currentRoute.value.path));
//reactive好像在这里没用
const tabs = reactive([
  {
    name: "首页",
    router: "/home"
  },
  {
    name: "市场",
    router: "/market",
    submenu: [
      {
        text: "全部",
        name: "all"
      },
      {
        text: "京剧戏曲",
        name: "opera"
      },
      {
        text: "中国武术",
        name: "kungfu"
      },
      {
        text: "民谣歌曲",
        name: "folk"
      }
    ]
  },
  {
    name: "个人主页",
    router: "/personalPage"
  },
  // {
  //   name: "收藏馆",
  //   router: "/Collection",
  // },
  // {
  //   name: "发布",
  //   router: "/publish",
  // },
  // {
  //   name: "统计数据",
  //   router: "/statistic-data",
  // },
  {
    name: "我的钱包",
    router: "/my-wallet"
  }
]);

onMounted(() => {
  [...document.querySelectorAll(".tab")].forEach(
    (cur, idx) => (tabs[idx].width = cur.clientWidth)
  );
});
</script>
<style lang='scss' scoped>
.topbar {
  position: fixed;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;
  height: 5vw;
  background-color: #f8f8f8;
  opacity: 0.8;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 1800px) {
    padding: 0 300px;
  }
  .logo {
    width: 8vw;
    height: 4vw;
    cursor: pointer;
    margin: 0 20px;
  }
  .tab {
    position: relative;
    .router {
      color: #000;
      font-size: 1vw;
      padding: 0.5vw 1vw;
      border-radius: 1vw;
      font-family: "宋体";
      font-weight: bolder;
      white-space: nowrap;
    }
    .hoverStyle {
      background-color: #c02431;
      color: #fff;
    }
    .dropdown-box {
      position: absolute;
      width: 130px;
      padding-bottom: 20px;
      .dropdown {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.8vw;
        font-weight: bold;
        background-color: #fff;
        border-radius: 5px;
        span {
          height: 40px;
          line-height: 40px;
          cursor: default;
          &:first-child {
            color: #b22631;
          }
          &:hover {
            color: #b22631;
          }
        }
      }
    }
  }
  .info-wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    width: 20vw;
    height: 3vw;
    line-height: 3vw;
    .button {
      // margin: 0px 0.5vw;
      width: 2.5vw;
      height: 1.6vw;
      line-height: 1.6vw;
      transition: all ease 0.4s;
     border: 2px solid $rd;

      text-align: center;
      // background: rgb(121, 90, 176);
      color: $rd;
      font-size: 14px;
      cursor: pointer;
     
      a{
        color: inherit !important;
      }
    }
    .btn-left{
      border-right: none;
      border-top-left-radius: .8vw;
      border-bottom-left-radius: .8vw;
    }
    .btn-right{
      border-top-right-radius: .8vw;
      border-bottom-right-radius: .8vw;
    }
    .inline-middle {
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
    }
    .avatar {
      width: 32px;
      height: 32px;
      background-color: pink;
      border-radius: 16px;
      margin-right: 8px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
    }
    .username {
      font-size: 16px;
    }
  }
}
// @media screen and (max-width: 500px) {
//   .topbar {
//     padding: 0;
//   }
// }
</style>
