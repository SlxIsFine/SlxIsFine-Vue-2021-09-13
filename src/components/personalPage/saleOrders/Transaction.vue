<template>
  <OrderItem v-for="i in 10" :key="i" class="order-list-item"/>
</template>
<script setup>
import OrderItem from "./OrderItem.vue";
</script>
<style lang="scss" scoped>

.order-list-item{
margin: 12px 0px;
}
</style>
