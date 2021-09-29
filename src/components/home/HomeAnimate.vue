<template>
  <transition name="bg-fade">
    <div class="home-animate" v-show="showSelf">
      <div
        :class="{ 'bg-img': true, active: pfAnimation, 'pf-create': pfCreate }"
      >
        <!-- <div class="bg-left">
        <div
          class="bg-block bg-1"
          style="
            width: 33.3333333333%;
            background-position-x: 0%;
            background-size: 600% 100%;
          "
        ></div>
        <div class="bg-wrap wrap-1" style="width: 66.66666666%">
          <div
            class="bg-block bg-2"
            style="
              width: 25%;
              background-position-x: 18.6666666%;
              background-size: 1200% 100%;
            "
          ></div>
          <div class="bg-wrap wrap-2" style="width: 75%">
            <div
              class="bg-block bg-3"
              style="
                width: 33.333%;
                background-position-x: 28%;
                background-size: 1200% 100%;
              "
            ></div>
            <div
              class="bg-block bg-4"
              style="
                width: 66.6667%;
                background-position-x: 40.333%;
                background-size: 600% 100%;
              "
            ></div>
          </div>
        </div>
      </div>

      <div class="bg-right">
        <div class="bg-wrap wrap-3" style="width: 66.6%">
          <div class="bg-wrap wrap-4" style="width: 75%">
            <div
              class="bg-block bg-5"
              style="
                width: 66.6%;
                background-position-x: 60%;
                background-size: 600% 100%;
              "
            ></div>
            <div
              class="bg-block bg-6"
              style="
                width: 33.3%;
                background-position-x: 72.6%;
                background-size: 1200% 100%;
              "
            ></div>
          </div>
          <div
            class="bg-block bg-7"
            style="
              width: 25%;
              background-position-x: 81%;
              background-size: 1200% 100%;
            "
          ></div>
        </div>
        <div
          class="bg-block bg-8"
          style="
            width: 33.3%;
            background-position-x: 99.3%;
            background-size: 600% 100%;
          "
        ></div>
      </div> -->
        <div class="bg-left">
          <div
            class="bg-block bg-1"
            style="
              width: 16.1666vw;
              background-position-x: 0%;
              background-size: 600% 100%;
            "
          ></div>
          <div class="bg-wrap wrap-1" style="width: 33.33333vw">
            <div
              class="bg-block bg-2"
              style="
                width: 8.333333vw;
                background-position-x: 18.6666666%;
                background-size: 1200% 100%;
              "
            ></div>
            <div class="bg-wrap wrap-2" style="width: 25vw">
              <div
                class="bg-block bg-3"
                style="
                  width: 8.333333vw;
                  background-position-x: 28%;
                  background-size: 1200% 100%;
                "
              ></div>
              <div
                class="bg-block bg-4"
                style="
                  width: 16.666666vw;
                  background-position-x: 40.333%;
                  background-size: 600% 100%;
                "
              ></div>
            </div>
          </div>
        </div>

        <div class="bg-right">
          <div class="bg-wrap wrap-3" style="width: 33.33333vw">
            <div class="bg-wrap wrap-4" style="width: 25vw">
              <div
                class="bg-block bg-5"
                style="
                  width: 16.66666vw;
                  background-position-x: 60%;
                  background-size: 600% 100%;
                "
              ></div>
              <div
                class="bg-block bg-6"
                style="
                  width: 8.33333vw;
                  background-position-x: 72.6%;
                  background-size: 1200% 100%;
                "
              ></div>
            </div>
            <div
              class="bg-block bg-7"
              style="
                width: 8.33333vw;
                background-position-x: 81%;
                background-size: 1200% 100%;
              "
            ></div>
          </div>
          <div
            class="bg-block bg-8"
            style="
              width: 16.1686vw;
              background-position-x: 99%;
              background-size: 600% 100%;
            "
          ></div>
        </div>
      </div>
      <!-- 标题动画 -->
      <transition @enter="logoEnter" name="fade-in">
        <div class="logo" v-show="showLogo">
          <Logo :w="200" />
          <div class="text">福客空间</div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import Logo from "@/components/common/UI/Logo.vue";
import { onMounted, reactive, nextTick } from "@vue/runtime-core";
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

    //屏风图片
    const pfs = reactive([pf0, pf1, pf2, pf3, pf4, pf5]);
    //显示屏风
    let showPf = ref(false);
    //创建屏风边框
    let pfCreate = ref(false);
    //显示屏风动画
    let pfAnimation = ref(false);
    let logoEnter = () => {
      // setTimeout(() => {
      //   showPf.value = true;
      //   setTimeout(() => {
      //     showSelf.value = false;
      //     context.emit("animationEnd");
      //   }, animations.pf.duration);
      // }, animations.logo.duration);
    };
    // 显示自身
    let showSelf = ref(false);

    onMounted(() => {
      setTimeout(() => {
        showSelf.value = true;
        setTimeout(() => {
          showLogo.value = true;
          setTimeout(() => {
            showLogo.value = false;
            setTimeout(() => {
              pfCreate.value = true;
              setTimeout(() => {
                pfAnimation.value = true;
                setTimeout(() => {
                  showSelf.value = false;
                  context.emit("animationEnd");
                }, 2500);
              }, 2000);
            }, 1200);
          }, 2500);
        }, 2000);
      }, 20);
    });
    return {
      showLogo,
      showPf,
      pfAnimation,
      logoEnter,
      pfs,
      showSelf,
      pfCreate,
    };
  },
};
</script>
<style lang="scss" scoped>
$header: 0px;
.home-animate {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .bg-img {
    position: absolute;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .bg-left,
  .bg-right {
    display: inline-block;
    height: 100%;
    width: 50%;
  }
  .bg-wrap {
    display: inline-block;
    height: 100%;
    width: 100%;
  }
  .bg-block {
    display: inline-block;
    height: 100%;
    background-size: 600% 100%;
    background-repeat: no-repeat;
    background-image: url(@img/pf/mainBg.jpg);
    background-position-y: center;
  }
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

  // @keyframes fadeIn {
  //   from {
  //     opacity: 0;
  //     transform: scale(2, 1.6);
  //   }
  //   35% {
  //     transform: scale(1, 1);
  //     opacity: 1;
  //   }

  //   100% {
  //     opacity: 1;
  //   }
  // }
  @keyframes fadeIn {
    from {
      // opacity: 1;
      clip: rect(0 0px 200px 0px);
    }
    // 35% {
    //   transform: scale(1, 1);
    //   opacity: 1;
    // }
    60% {
      // opacity: 1;
      clip: rect(0 250px 200px 0px);
    }
    to {
      // opacity: 1;
      clip: rect(0 250px 200px 0px);
    }
  }
  .fade-in-enter-active {
    // opacity: 0;
    animation: fadeIn 3s cubic-bezier(0.2, 0.4, 0.10, 1);
  }
  .fade-in-leave {
    opacity: 1;
  }
  .fade-in-leave-active {
    opacity: 0;
    transition: all ease-out 1s;
  }
  
}
.bg-img.active {
  // perspective: 200;
  // -webkit-perspective: 1900;
  * {
    // perspective: 2000;
    -webkit-perspective: 800;
    -webkit-perspective-origin: 50% 50%;
    backface-visibility: visible;
    overflow: visible;
  }
  .wrap-1 {
    display: flex;
    flex-wrap: nowrap;
    transform-origin: 0% 0%;
    animation: rotate1 2s ease 0.2s forwards;
  }
  .wrap-2 {
    display: flex;
    flex-wrap: nowrap;
    transform-origin: 0% 0%;
    animation: rotate2 2s ease forwards;
  }
  .bg-4 {
    transform-origin: 0% 0%;

    animation: rotate3 2s ease 0.1s forwards;
  }

  .wrap-3 {
    transform-origin: 100% 0%;
    animation: rotate4 2s ease 0.2s forwards;
  }
  .wrap-4 {
    transform-origin: 100% 0%;
    animation: rotate5 2s ease forwards;
  }
  .bg-5 {
    transform-origin: 100% 0%;
    animation: rotate6 2s ease 0.1s forwards;
  }
  .bg-left {
    -webkit-perspective: 800;
    -webkit-perspective-origin: 100% 50%;
    display: flex;
    flex-wrap: nowrap;
    animation: transLeft 1.8s 0.8s ease forwards;
    .bg-block {
      box-sizing: border-box;
      // border: 1px solid red;
    }
  }
  .bg-right {
    display: flex;
    flex-wrap: nowrap;
    -webkit-perspective: 800;
    -webkit-perspective-origin: 0% 50%;
    animation: transRight 1.8s 0.8s ease forwards;

    .bg-block {
      box-sizing: border-box;
      // border: 1px solid red;
    }
  }
  @keyframes transLeft {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-40%);
    }
  }
  @keyframes transRight {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(40%);
    }
  }
  @keyframes rotate1 {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(85deg);
    }
  }
  @keyframes rotate2 {
    from {
      transform: rotateY(0deg);
    }
    60% {
      transform: rotateY(-50deg);
    }
    to {
      transform: rotateY(-50deg);
    }
  }
  @keyframes rotate3 {
    from {
      transform: rotateY(0deg);
    }
    60% {
      transform: rotateY(54deg);
    }
    to {
      transform: rotateY(54deg);
    }
  }
  @keyframes rotate4 {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(-85deg);
    }
  }
  @keyframes rotate5 {
    from {
      transform: rotateY(0deg);
    }
    60% {
      transform: rotateY(50deg);
    }
    to {
      transform: rotateY(50deg);
    }
  }
  @keyframes rotate6 {
    from {
      transform: rotateY(0deg);
    }
    60% {
      transform: rotateY(-54deg);
    }
    to {
      transform: rotateY(-54deg);
    }
  }
}
.bg-img.pf-create {
  .bg-block {
    box-sizing: border-box;
  }
  .bg-1,
  .bg-4,
  .bg-5,
  .bg-8 {
    position: relative;
    backface-visibility: visible;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translateX(-100%);
      border-color: grey;
      border-style: solid;
      z-index: 999;
      animation: borderCreateL 2s ease-out forwards;
      filter: drop-shadow(0px 0px 6px rgba(100, 100, 100, 0.658));
    }
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0px;
      right: 50%;
      transform: translateX(100%);
      border-style: solid;
      border-color: grey;
      animation: borderCreateR 2s ease-out forwards;
      filter: drop-shadow(0px 0px 6px rgba(100, 100, 100, 0.658));
    }
  }
  .bg-2,
  .bg-6 {
    position: relative;
    backface-visibility: visible;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 100%;
      transform: translateX(-100%);
      border-color: grey;
      border-style: solid;
      z-index: 999;
      animation: borderCreateL1 2s ease-out forwards;
      filter: drop-shadow(0px 0px 6px rgba(100, 100, 100, 0.658));
    }
   
  }
  .bg-3,
  .bg-7{
    position: relative;
 &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0px;
      left: 0%;
      // transform: translateX(100%);
      border-style: solid;
      border-color: grey;
      animation: borderCreateR1 2s ease-out forwards;
      filter: drop-shadow(0px 0px 6px rgba(100, 100, 100, 0.658));
    }
  } 
}
@keyframes borderCreateL {
  0% {
    width: 0px;
    height: 1px;
    border-width: 4px 0px 0px 0px;
  }
  33% {
    width: 50%;
    height: 1px;
    border-width: 4px 0px 0px 4px;
  }
  70% {
    border-bottom-width: 0px;
    width: 50%;
    height: 100%;
  }
  to {
    width: 50%;
    height: 100%;
    // border: 4px solid grey;
    border-width: 4px;
    border-right: 0px;
  }
}

@keyframes borderCreateR {
  0% {
    width: 0px;
    height: 1px;
    border-width: 4px 0px 0px 0px;
  }
  32% {
    border-right-width: 4px;
  }
  33% {
    width: 48%;
    height: 1px;
    border-width: 4px 4px 0px 0px;
  }
  70% {
    border-bottom-width: 0px;
    width: 48%;
    height: 100%;
  }
  to {
    width: 48%;
    height: 100%;
    border: 4px solid grey;
    border-width: 4px 4px 4px 0px;
  }
}

@keyframes borderCreateL1 {
  0% {
    width: 0px;
    height: 1px;
    border-width: 4px 0px 0px 0px;
  }
  33% {
    width: 101%;
    height: 1px;
    border-width: 4px 0px 0px 0px;
  }
  69% {
    border-bottom-width: 0px;
  }
  70% {
    border-bottom-width: 0px;
    width: 101%;
    height: 100%;
    border-width: 4px 0px 4px 0px;
  }
  to {
    width: 101%;
    height: 100%;
    border: 4px solid grey;
    border-width: 4px 0px 4px 0px;
  }
}

@keyframes borderCreateR1 {
  0% {
    width: 0px;
    height: 1px;
    border-width: 4px 0px 0px 0px;
  }
  33% {
    width: 98%;
    height: 1px;
    border-width: 4px 0px 0px 0px;
  }
  69% {
    border-bottom-width: 0px;
  }
  70% {
    border-bottom-width: 0px;
    width: 98%;
    height: 100%;
    border-width: 4px 0px 4px 0px;
  }
  to {
    width: 98%;
    height: 100%;
    border: 4px solid grey;
    border-width: 4px 0px 4px 0px;
  }
}

.bg-fade-enter-active {
  animation: bgFade 1.5s ease-out;
}
.bg-fade-leave-active {
  animation: bgFade 1.5s ease-out reverse;
}
@keyframes bgFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>