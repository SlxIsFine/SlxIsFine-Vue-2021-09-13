<template>
  <div class="home-main" v-show="showSelf">
    <div :class="{ 'main-nav': true, active: showSelf }">
     
      <template v-for="(item, k) in pages" :key="item.name">
        <div
          class="nav-bar"
          :style="{
            animationDelay: `${(k + 1) * 0.4}s`,
            backgroundImage: `url(${item.img})`,
          }"
        >
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import Logo from "@/components/common/UI/Logo.vue";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import folk from "@img/pf/main-folk.png";
import jj from "@img/pf/main-jj.png";
import ws from "@img/pf/main-ws.png";
import my from "@img/pf/main-my.png";
import mzts from "@img/pf/main-mzts.png";
import zj from "@img/pf/main-zj.png";
import qt from "@img/pf/main-qt.png";

export default {
  components: {
    Logo,
  },
  setup() {
    const pages = reactive([
      { name: "logo", img: folk, router: "", bg: "" },
      { name: "京剧", img: jj, router: "", bg: "" },
      { name: "武术", img: ws, router: "", bg: "" },
      { name: "民谣", img: my, router: "", bg: "" },
      { name: "民族特色", img: mzts, router: "", bg: "" },
      { name: "杂技", img: zj, router: "", bg: "" },
      { name: "其他", img: qt, router: "", bg: "" },
    ]);

    let showSelf = ref(false);
    // onMounted(() => {
    //   showSelf.value = true;
    // });
    return {
      pages,
      showSelf,
    };
  },
};
</script>
<style lang="scss" scoped>
.home-main {
  position: absolute;
  top: 0px;
  left: 0px;
  //   background-color: red;
  .main-nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .nav-bar {
      width: 14%;
      height: 100%;
      font-size: 28px;
      font-weight: bold;
      word-spacing: 4px;
      writing-mode: vertical-lr;

      display: flex;
      justify-content: center;
      align-items: center;

       border-right: 2px solid black;

      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: center center;

      transition: .3s ease ;
      cursor: pointer;
      &:hover{
          background-size: 120% 120%;
      }
    }
  }
  .main-nav.active {
    .nav-bar {
      opacity: 0;
      animation: fadeIn 0.7s ease-out forwards;
    }
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-600px);
  }
  80%{
      opacity: 0.5;
    transform: translateY(10px);

  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
}
</style>