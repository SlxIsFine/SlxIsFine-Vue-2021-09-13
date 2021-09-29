<template>
  <div class="home-animate" v-show="showSelf">
    <!-- 标题动画 -->
    <transition @enter="logoEnter" name="fade-in">
      <div class="logo" v-show="showLogo">
        <Logo :w="200" />
        <div class="text">福客空间</div>
      </div>
    </transition>

    <!-- 屏风动画 -->
    <transition name="pf-fade">
      <div :class="{ 'pf-container': true, active: showPf }" v-show="showPf">
        <div class="pf-left">
          <div
            :style="{ backgroundImage: `url(${pfs[0]})` }"
            class="pf-img pf-1"
          />
          <div
            :style="{ backgroundImage: `url(${pfs[1]})` }"
            class="pf-img pf-2"
          />
          <div
            :style="{ backgroundImage: `url(${pfs[2]})` }"
            class="pf-img pf-3"
          />
        </div>
        <div class="pf-right">
          <div
            :style="{ backgroundImage: `url(${pfs[3]})` }"
            class="pf-img pf-4"
          />
          <div
            :style="{ backgroundImage: `url(${pfs[4]})` }"
            class="pf-img pf-5"
          />
          <div
            :style="{ backgroundImage: `url(${pfs[5]})` }"
            class="pf-img pf-6"
          />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Logo from "@/components/common/UI/Logo.vue";
import { onMounted, reactive } from "@vue/runtime-core";
import { ref } from "vue";
import pf0 from "@img/pf/pf0.png";
import pf1 from "@img/pf/pf1.png";
import pf2 from "@img/pf/pf2.png";
import pf3 from "@img/pf/pf3.png";
import pf4 from "@img/pf/pf4.png";
import pf5 from "@img/pf/pf5.png";
export default {
  components: {
    Logo,
  },
  setup(props, context) {
    //记录动画的过渡
    let animations = {
      logo: {
        duration: 1800,
      },
      pf: {
        duration: 3000,
      },
    };
    let showLogo = ref(false);
    onMounted(() => {
      setTimeout(() => {
        showLogo.value = true;
        setTimeout(() => {
          showLogo.value = false;
        }, 1000);
      }, 1200);
    });
    //屏风图片
    const pfs = reactive([pf0, pf1, pf2, pf3, pf4, pf5]);
    //显示屏风
    let showPf = ref(false);
    let logoEnter = () => {
      setTimeout(() => {
        showPf.value = true;
        setTimeout(() => {
          showSelf.value = false;
          context.emit("animationEnd");
        }, animations.pf.duration);
      }, animations.logo.duration);
    };
    // 显示自身
    let showSelf = ref(true);
    return {
      showLogo,
      showPf,
      logoEnter,
      pfs,
      showSelf,
    };
  },
};
</script>
<style lang="scss" scoped>
$header: 0px;
.home-animate {
  margin-top: $header;
  width: 98vw;
  height: calc(100vh - 82px);
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  .logo {
    // opacity: 0;
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% - 100px);
    // transform: translate(-50%, -50%);
    width: 200px;
    .text {
      font-size: 50px;
      width: 100%;
      text-align: justify;
    }
    .text::after {
      content: "";
      width: 100%;
      display: inline-block;
    }
  }
}
.pf-container {
  width: 100vw;
  height: 100vh;
  display: flex;

  .pf-img {
    width: 33.3%;
    height: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
    will-change: transform;
  }
}
.fade-in-enter-active {
  opacity: 0;
  animation: fadeIn 0.8s ease-in;
}
.fade-in-leave-active {
  animation: fadeIn 0.8s ease-out reverse;
}
.pf-fade-enter-active {
  opacity: 0;
  animation: fadeIn 1.5s ease-in;
}
.pf-leave-active {
  animation: fadeOut 0.8s ease-out reverse;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(10, 6);
  }
  35% {
    transform: scale(1, 1);
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from{
    opacity: 1;
  }
  80%{
    opacity: 0.4;
    transform: scale(10,6);
  }
  to{
    opacity: 0;
  }
}

$ani-dur: 2s;
.pf-container.active {
  perspective: 10000;
  -webkit-perspective: 10000;
  perspective-origin: center top;
  -webkit-perspective-origin: center top;
  * {
    transform-origin: center center center;
  }
  .pf-1 {
    animation: pf1 ease-in $ani-dur forwards;
    animation-delay: 1s;
  }
  .pf-2 {
    animation: pf2 ease-in $ani-dur forwards;
    animation-delay: 1s;
  }
  .pf-3 {
    animation: pf3 ease-in $ani-dur forwards;
    animation-delay: 1s;
  }
  .pf-left {
    animation: pfLeft $ani-dur + 0.5s linear forwards;
    animation-delay: 1.2s;
  }

  .pf-4 {
    transform-origin: right center;
    animation: pf4 ease-in-out $ani-dur forwards;
    animation-delay: 1s;
  }
  .pf-5 {
    transform-origin: right center;

    animation: pf5 ease-in $ani-dur forwards;
    animation-delay: 1s;
  }
  .pf-6 {
    transform-origin: right center;

    animation: pf6 ease-in $ani-dur forwards;
    animation-delay: 1s;
  }
  .pf-right {
    animation: pfRight $ani-dur + 0.5s linear forwards;
    animation-delay: 1.2s;
  }
}

.pf-left,
.pf-right {
  width: 50%;
  display: flex;
  height: 100%;
}
// .pfTrans-enter{
//   transition:all ease 1s;
//   opacity: 0;
// }
// .pfTrans-enter-active{
//   transition:all ease 1s;
//   opacity: 1;

// }
// .pf-left {
// }
// .pf-right {
// }
@keyframes pfLeft {
  from {
    transform: translateX(0%);
  }
  10% {
    transform: translateX(-8%);
  }
  to {
    transform: translateX(-58%);
  }
}
@keyframes pfRight {
  from {
    transform: translateX(0%);
  }
  10% {
    transform: translateX(8%);
  }
  to {
    transform: translateX(58%);
  }
}
@keyframes pf1 {
  from {
    transform: translateX(0) rotateY(0deg);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  80% {
    transform: translateX(15%) rotateY(30deg);
    animation-timing-function: ease-in;
    opacity: 0.6;
  }
  to {
    transform: translateX(10%) rotateY(30deg);
    opacity: 0;
  }
}
@keyframes pf2 {
  from {
    transform: translateX(0) rotateY(0deg);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  60% {
    transform: translateX(-16%) rotateY(-50deg);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(-17%) rotateY(-51deg);
    animation-timing-function: ease-in;
    opacity: 0.9;
  }
  to {
    transform: translateX(-80%) rotateY(-120deg);
    opacity: 0.5;
  }
}
@keyframes pf3 {
  from {
    transform: translateX(0) translateZ(0) rotateY(0deg);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  //   30% {
  //     transform: translateX(-66.7%) scale(1.02,1.02) rotateY(20deg);

  //   }
  65% {
    transform: translateX(-50%) scale(1.01, 1.01);
    animation-timing-function: ease-in;
    opacity: 0.9;
  }
  66% {
    transform: translateX(-51%) scale(1.01, 1.01);
    animation-timing-function: ease-in;
  }
  to {
    transform: translateX(-150%) scale(1, 1);
    opacity: 0.1;
  }
}

@keyframes pf6 {
  from {
    transform: translateX(0) rotateY(0deg);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  80% {
    transform: translateX(-15%) rotateY(-30deg);
    animation-timing-function: ease-in;
    opacity: 0.6;
  }
  to {
    transform: translateX(-10%) rotateY(-30deg);
    opacity: 0;
  }
}
@keyframes pf5 {
  from {
    transform: translateX(0) rotateY(0deg);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  60% {
    transform: translateX(10%) rotateY(-50deg);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateX(11%) rotateY(-51deg);
    animation-timing-function: ease-in;
    opacity: 0.9;
  }
  to {
    transform: translateX(20%) rotateY(-120deg);
    opacity: 0.5;
  }
}
@keyframes pf4 {
  from {
    transform: translateX(0) translateZ(0) rotateY(0deg);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  //   30% {
  //     transform: translateX(-66.7%) scale(1.02,1.02) rotateY(20deg);

  //   }
  65% {
    transform: translateX(50%) scale(1.01, 1.01);
    animation-timing-function: ease-in;
  }
  66% {
    transform: translateX(51%) scale(1.01, 1.01);
    animation-timing-function: ease-in;
    opacity: 0.8;
  }
  to {
    transform: translateX(150%) scale(1, 1);
    opacity: 0.5;
  }
}
</style>