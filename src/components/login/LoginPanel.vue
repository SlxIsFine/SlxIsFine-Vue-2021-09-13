<template>
  <div class="login-panel">
    <div class="login-container">
      <div class="login-form">
    <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.login-panel {
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container {
    justify-content: center;
    width: 60%;
    height: 50%;
    background-color: rgb(189, 189, 189);
    box-shadow: 0px 0px 6px rgb(184, 184, 184);
    .login-form {
      float: right;
      width: 33%;
      height: 100%;
      background-color: #fff;
      padding: 8px 16px;
      font-size: 16px;
      box-sizing: border-box;

      .form-content {
        height: 75%;
        margin-top: 12px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-direction: column;
      }
      .title {
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        // margin-top: 32px;
      }
      .icon-input {
        font-size: 18px;
      }
      .color-btn {
        font-size: 18px;
        border-radius: 24px;
      }
      .color-btn-login {
        // margin-top: 32px;
        border-radius: 4px;
      }
      .footer {
        height: 9%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        //   margin-top: 12px;
      }
    }
  }
}
</style>
