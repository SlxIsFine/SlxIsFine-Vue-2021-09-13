<template>
     <div class="header-container"><Header /></div>
     <router-view></router-view>
</template>
<script setup>
import Header from "@/components/common/Header.vue";

</script>
<style lang="scss" scoped>
.header-container {
  padding-bottom: 5vw;
}
</style>