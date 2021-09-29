<template>
  <div class="">
    <ul class="ul-first">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
  </div>
</template>
 <script>
 export default {
  data() {
    return {
    };
  },
 } 
</script>
<style lang='scss' scoped>
// body{
//     -webkit-perspective: 500px ;
//     perspective: 400px;
// }
ul{
    position: relative;
    transform-style: preserve-3d;
    -webkit-perspective: 0;
    width: 200px;
    height: 200px;
    margin: 100px auto;
}
.ul-first:hover{
    transform: rotateX(0deg) rotateY(0deg);
    animation: around 3s ease 1s infinite normal;
    
    // animation: all 3s ease-in-out;
    
// -webkit-transition:all .2s ease-in-out;
 
// transition:all .2s ease-in-out

}
li{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 18px;
    top: 25px;
    line-height: 200px;
    text-align: center;
    font-size: 34px;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    list-style:none;
}
ul:hover li::before{
    // content: "";
    /*box-sizing: border-box;*/
    /*border-bottom: 200px solid black;*/
    width: 100%;
    height: 100%;
    background: #b22631;
    // position: absolute;
    // left: 0;
    // bottom: 0;
    // opacity: .5;
}

ul:hover{
    -webkit-animation-play-state:running;
    animation-play-state: running;
    // animation: around 5s ease 10s infinite normal;
}
/*上*/
li:nth-child(1){
    transform:rotateX(90deg)  translateZ(100px);
    // width: 400px;
    background-image: url("../../assets/img/opera1.png");
}
/*后*/
li:nth-child(2){
    transform: rotateX(180deg)  translateZ(100px);
    // width: 400px;
    background-image: url("../../assets/img/opera1.png");
}
/*下*/
li:nth-child(3){
    transform: rotateX(270deg)  translateZ(100px);
    // width: 400px;
    background-image: url("../../assets/img/opera1.png");
}
/*前*/
li:nth-child(4){
    transform: rotateX(360deg)  translateZ(100px);
    // width: 400px;
    background-image: url("../../assets/img/opera1.png");
}
/*左*/
li:nth-child(5){
    transform: rotateX(0deg) rotateY(-90deg) translateZ(100px);
    background-image: url("../../assets/img/opera1.png");
}
/*右*/
li:nth-child(6){
    transform:rotateX(0deg) rotateY(90deg) translateZ(100px);
    background-image: url("../../assets/img/opera1.png");
}
  
@keyframes around {
    0%{transform: rotateX(-10deg) rotateY(0deg) ;}
    25%{transform:rotateX(-10deg) rotateY(90deg) ;}
    50%{transform:rotateX(-10deg) rotateY(180deg) ;}
    75%{transform:rotateX(-10deg) rotateY(270deg) ;} 
    100%{transform:rotateX(-10deg) rotateY(360deg) ;}
}

// @keyframes in {
//     0%{transform: rotateX(-10deg) rotateY(0deg) ;}
//     25%{transform:rotateX(-10deg) rotateY(90deg) ;}
//     50%{transform:rotateX(-10deg) rotateY(180deg) ;}
//     75%{transform:rotateX(-10deg) rotateY(270deg) ;} 
//     100%{transform:rotateX(-10deg) rotateY(360deg) ;}
// }
// @keyframes out {
//     0%{transform: rotateX(-10deg) rotateY(360deg) ;}
//     25%{transform:rotateX(-10deg) rotateY(270deg) ;}
//     50%{transform:rotateX(-10deg) rotateY(180deg) ;}
//     75%{transform:rotateX(-10deg) rotateY(90deg) ;} 
//     100%{transform:rotateX(-10deg) rotateY(0deg) ;}
// }

</style>