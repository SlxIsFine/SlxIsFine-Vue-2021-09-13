<template>
  <div class="statistic-data">
    <Filter class="filte" />
      <div class="person">
        <div class="persobdiv">
          <img class="faxra" src="../assets/img/colle/1..png" alt="">
        </div>
        <div class="faxr">
          <div class="faxd"> 
            <img class="faxdimg" src="../assets/img/colle/2.jpg" alt="">
          </div>
          <div class="faxname">八极拳传人吴昊</div>
        </div>
        <div class="persobdiv">
          <img class="faxra" src="../assets/img/colle/1.png" alt=""></div>
        </div>
     <div class="tabapp">
        <ul class="tab-tilte">
            <li @click="cur=0" id="lia" :class="{active:cur==0}">NFT收藏品榜单</li>
            <li @click="cur=1" id="lib" :class="{active:cur==1}">收藏家榜单</li>
        </ul>
        <div class="tab-content">
            <div v-show="cur==0">
              <div class="collect">
                <div class="towcoll">
                  <div class="headpho">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="message">
                    <p class="ptexta">名称：NFT名称</p>
                    <p class="ptexta">发行人：发行人名字</p>
                    <p class="ptexta" style="height:55px;">收藏者：<img src="../assets/img/kungfu.jpg" alt=""></p>
                    <p class="ptextb">收藏者姓名</p>
                    <p class="ptextb">ID:12345</p>
                    <p class="ptexta">作品成交价格：RMB￥100</p>
                  </div>
                </div>
                <div class="onecoll">
                  <div class="headpho">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="message">
                    <p class="ptexta">名称：NFT名称</p>
                    <p class="ptexta">发行人：发行人名字</p>
                    <p class="ptexta" style="height:55px;">收藏者：<img src="../assets/img/kungfu.jpg" alt=""></p>
                    <p class="ptextb">收藏者姓名</p>
                    <p class="ptextb">ID:12345</p>
                    <p class="ptexta">作品成交价格：RMB￥100</p>
                  </div>
                </div>
                <div class="trecoll">
                  <div class="headpho">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="message">
                    <p class="ptexta">名称：NFT名称</p>
                    <p class="ptexta">发行人：发行人名字</p>
                    <p class="ptexta" style="height:55px;">收藏者：<img src="../assets/img/kungfu.jpg" alt=""></p>
                    <p class="ptextb">收藏者姓名</p>
                    <p class="ptextb">ID:12345</p>
                    <p class="ptexta">作品成交价格：RMB￥100</p>
                  </div>
                </div>
              </div>
              <!-- 2 -->
              <div class="collList">
                <div class="itemLIsta">
                  <div class="itemleft">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="itemright">
                    <p class="rightta">名称：NFT名称</p>
                    <p class="rightta">发行人：发行人名字</p>
                    <p class="rightta">收藏者：</p>
                    <p class="rightta" style="height:55px; text-align:center;"><img src="../assets/img/kungfu.jpg" alt=""></p>
                    <p class="righttb">收藏者姓名</p>
                    <p class="righttb">ID:12345</p>
                    <p class="rightta">作品成交价格：RMB￥100</p>
                  </div>
                </div>
                <div class="itemLIstb">
                  <div class="itemleft">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="itemright">
                    <p class="rightta">名称：NFT名称</p>
                    <p class="rightta">发行人：发行人名字</p>
                    <p class="rightta">收藏者：</p>
                    <p class="rightta" style="height:55px; text-align:center;"><img src="../assets/img/kungfu.jpg" alt=""></p>
                    <p class="righttb">收藏者姓名</p>
                    <p class="righttb">ID:12345</p>
                    <p class="rightta">作品成交价格：RMB￥100</p>
                  </div>
                </div>
                <div class="itemLIstc">
                  <div class="itemleft">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="itemright">
                    <p class="rightta">名称：NFT名称</p>
                    <p class="rightta">发行人：发行人名字</p>
                    <p class="rightta">收藏者：</p>
                    <p class="rightta" style="height:55px; text-align:center;"><img src="../assets/img/kungfu.jpg" alt=""></p>
                    <p class="righttb">收藏者姓名</p>
                    <p class="righttb">ID:12345</p>
                    <p class="rightta">作品成交价格：RMB￥100</p>
                  </div>
                </div>
                <div class="itemLIstd">
                  <div class="itemleft">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="itemright">
                    <p class="rightta">名称：NFT名称</p>
                    <p class="rightta">发行人：发行人名字</p>
                    <p class="rightta">收藏者：</p>
                    <p class="rightta" style="height:55px; text-align:center;"><img src="../assets/img/kungfu.jpg" alt=""></p>
                    <p class="righttb">收藏者姓名</p>
                    <p class="righttb">ID:12345</p>
                    <p class="rightta">作品成交价格：RMB￥100</p>
                  </div>
                </div>
                <div class="itemLIste">
                  <div class="itemleft">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="itemright">
                    <p class="rightta">名称：NFT名称</p>
                    <p class="rightta">发行人：发行人名字</p>
                    <p class="rightta">收藏者：</p>
                    <p class="rightta" style="height:55px; text-align:center;"><img src="../assets/img/kungfu.jpg" alt=""></p>
                    <p class="righttb">收藏者姓名</p>
                    <p class="righttb">ID:12345</p>
                    <p class="rightta">作品成交价格：RMB￥100</p>
                  </div>
                </div>
                <div class="itemLIstf">
                  <div class="itemleft">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="itemright">
                    <p class="rightta">名称：NFT名称</p>
                    <p class="rightta">发行人：发行人名字</p>
                    <p class="rightta">收藏者：</p>
                    <p class="rightta" style="height:55px; text-align:center;">
                      <img src="../assets/img/kungfu.jpg" alt="">
                    </p>
                    <p class="righttb">收藏者姓名</p>
                    <p class="righttb">ID:12345</p>
                    <p class="rightta">作品成交价格：RMB￥100</p>
                  </div>
                </div>
              </div>
              <div style="clear:both;"></div>
              <div class="collBtn">分享此页面</div>
            </div>
            <div v-show="cur==1">
              <div class="tionList">
                <div class="Listtitle">
                  <div class="titspana">排名</div>
                  <div class="titspana">头像</div>
                  <div class="titspana">姓名</div>
                  <div class="titspana">ID</div>
                  <div class="titspana">收藏的NFT作品</div>
                  <div class="titspanb">NFT作品介绍</div>
                </div>
                <div style="clear: both;"></div>
                <div class="Listcont">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
                <div class="Listcons">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
                <div class="Listcont">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
                <div class="Listcons">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
                <div class="Listcont">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
                <div class="Listcons">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
                <div class="Listcont">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
                <div class="Listcons">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
                <div class="Listcont">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
                <div class="Listcons">
                  <div class="conspanc">
                    <img class="titaimg" src="../assets/img/colle/collone.png" alt="">
                  </div>
                  <div class="conspanc">
                    <div class="ranking">
                      <div class="ranktx">
                        <img class="titbimg" src="../assets/img/colle/2.jpg" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="conspana">收藏者姓名</div>
                  <div class="conspana">ID</div>
                  <div class="conspana">
                    <tdrerr class="tdrerr" />
                  </div>
                  <div class="conspanb">NFT作品介绍NFT作品介绍NFT作品介绍</div>
                  <div style="clear: both;"></div>
                </div>
              </div>
              <div style="clear:both;"></div>
              <div class="collBtn">分享此页面</div>
            </div>
        </div>
    </div>
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
       cur:0 //默认选中第一个tab
    };
  },
 } 
</script>
<script setup>
import Filter from "@/components/collection/Filter.vue";
import tdrerr from "@/components/collection/tdrerr.vue";
</script>
<style lang='scss' scoped>
body{
    -webkit-perspective: 500px ;
    perspective: 400px;
}

.filte{
  position: fixed;
  top:100px;

}
.statistic-data {
  @include flex($fd: column, $ai: center);
  width: 1450px;
  margin: 20px auto;
//   padding: 32px;
}

 ul li {
      margin: 0;
      padding: 0;
      list-style: none;
  }
  .tabapp{
    width:100%;
  }
  .tab-tilte{
      width: 506px;
      margin:30px auto 50px;
      height:58px;
      font-size: 20px;
  }
  .tab-tilte li{
      float: left;
      width: 250px;
      line-height:55px;
      text-align: center;
      background-color:#f4f4f4;
      border: 1px solid #b22631;
      border-radius: 5px 0 0 5px;
      cursor: pointer;
  }
  #lia{
      border-radius: 5px 0 0 5px;
  }
  #lib{
      border-radius:0 5px 5px 0;
  }
/* 点击对应的标题添加对应的背景颜色 */
  .tab-tilte .active{
      background-color: #b22631;
      color: #fff;
      border-radius:0 5px 5px 0;
  }
  // .tab-content div{
      // float: left;
      // width: 50%;
      // line-height: 100px;
      // text-align: center;
  // }
  .collect{
    width:90%;
    margin:0 auto;
  }
  .towcoll{
    width:434px;
    float: left;
    padding-top:40px; 
  }
  .onecoll{
    width:434px;
    float: left;
    padding-bottom:40px; 
  }
  .trecoll{
    width:33%;
    float: left;
    padding-top:40px; 
  }
  // 
  .headpho{
    width:250px;
    height:250px;
    text-align: center;
    background-image:url(../assets/img/colle/fotbk.png);
    background-size:100% 100%;
    margin:0 auto;
  }
  .headpho img{
    width:210px;
    height:210px;
    margin-top:20px;
  }
  .message{
    width:434px;
    height:270px;
    background-image:url(../assets/img/colle/NFT1.png);
    background-size:100% 100%;
    margin:0 auto;
    padding-top:25px;
    margin-top:10px;
  }
  .message p{
    margin:0;
    height:35px;
    line-height: 35px;
    color: #b22631;
    font-size: 22px;
  }
  .ptexta{
    padding-left:110px;
  }
  .ptextb{
    text-align:center;
  }
  p img{
    width:50px;
    height:50px;
    border-radius:50px;
  }
  // 456789
  .collList{
    width:90%;
    margin:20px auto;
  }
  .itemLIsta{
    width:588px;
    height:300px;
    float: left;
    background-image:url(../assets/img/colle/NFT4.png);
    background-size:100% 100%;
    margin:16px 30px;
  }
  .itemLIstb{
    width:588px;
    height:300px;
    float: left;
    background-image:url(../assets/img/colle/NFT5.png);
    background-size:100% 100%;
    margin:16px 30px;
  }
  .itemLIstc{
    width:588px;
    height:300px;
    float: left;
    background-image:url(../assets/img/colle/NFT6.png);
    background-size:100% 100%;
    margin:16px 30px;
  }
  .itemLIstd{
    width:588px;
    height:300px;
    float: left;
    background-image:url(../assets/img/colle/NFT7.png);
    background-size:100% 100%;
    margin:16px 30px;
  }
  .itemLIste{
    width:588px;
    height:300px;
    float: left;
    background-image:url(../assets/img/colle/NFT8.png);
    background-size:100% 100%;
    margin:16px 30px;
  }
  .itemLIstf{
    width:588px;
    height:300px;
    float: left;
    background-image:url(../assets/img/colle/NFT9.png);
    background-size:100% 100%;
    margin:16px 30px;
  }
  .itemleft{
    width:220px;
    float: left;
    margin-left:80px;
    height:220px;
    margin-top:-70px;
    margin-right:30px;
  }
  .itemright{
    width:230px;
    float: left;
    height:220px;
    margin-top:50px;
  }
  .itemleft img{
    width:100%;
    height:100%;
  }
  .itemright p{
    margin:0;
    height:28px;
    line-height: 28px;
    color: #525252;
    font-size: 18px;
  }
  .rightta{
    padding-left:5px;
  }
  .righttb{
    text-align:center;
  }
  // button
  .collBtn{
    width:260px;
    height:70px;
    line-height: 70px;
    background: #b22631;
    color:#fff;
    font-size:22px;
    text-align: center;
    border-radius: 50px;
    margin:50px auto 30px;
  }
  
  .tionList{
    width:100%;
  }
  .Listtitle{
    height:60px;
    line-height: 60px;
    background: #b22631;
    color:#fff;
    text-align: center;
    font-size:22px;
  }
  .titspana{
    width:15%;
    float: left;
  }
  .titspanb{
    width:25%;
    float: left;
  }
  .Listcont{
    background: #ffffff;
    text-align: center;
    font-size:22px;
  }
  .Listcons{
    background:#f7e9ea;
    text-align: center;
    font-size:22px;
  }
  .titaimg{
    text-align: center;
    width:70px;
    height:35px;
    margin-top:60px;
  }
  .ranking{
    width:100px;
    height:130px;
    background-image:url(../assets/img/colle/backimg.png); 
    background-size:55% 25%;
    background-repeat:no-repeat;
    background-position:0px 15px;
    padding-top:40px
  }
  .ranktx{
    width:85px;
    height:85px;
    border-radius: 50px;
    border:4px solid #fbff00;;
  }
  .titbimg{
    width:85px;
    height:85px;
    border-radius: 50px;
  }
  .conspanc{
    width:15%;
    float: left;
  }
  .conspana{
    width:15%;
    line-height:160px;
    float: left;
  }
  .conspanb{
    width:18%;
    float: left;
    padding:50px 20px 0 20px;
    margin-left:20px;
  }
  .ponttx{
    width:100px;
    height: 100px;
  }
  // 发行人
  .person{
    width:100%;
    margin-top:100px; 
  }
  .persobdiv{
    width:33%;
    height:100px;
    line-height: 100px;
    float: left;
  }
  .faxra{
    width:100%;
  }
  .faxr{
    width:33%;
    height:100px;
    line-height: 100px;
    float: left;
    background-image:url(../assets/img/colle/2.png);
    background-size:100% 90%;
    background-position:0px 8px;
    background-repeat:no-repeat;
  }
  .faxd{
    width:55px;
    height:55px;
    border-radius: 50px;
    border:4px solid #b22631;;
    float: left;
    margin-top:22px;
    margin-left:80px;
  }
  .faxdimg{
    width:55px;
    height:55px;
    border-radius: 50px;
    vertical-align:0%
  }
  .faxname{
    width:260px;
    line-height: 100px;
    text-align: center;
    float: left;
    font-size:30px;
  }
</style>