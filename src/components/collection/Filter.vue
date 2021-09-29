<template>
  <div class="filter">
    <div v-for="(v, k) in options" :key="k">
      <span class="title">{{ k }}:</span>
      <span
        class="option"
        v-for="op in v"
        :key="op"
        :class="{ seleted: op.checked }"
        @click="select(k, op)"
        >{{ op.name }}</span
      >
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const options = reactive({
  筛选条件: [
    {
      name: "全部",
      checked: true,
    },
    {
      name: "发行人1",
      checked: false,
      chnkopen:1,
    },
    {
      name: "发行人2",
      checked: false,
      chnkopen:1,
    },
    {
      name: "发行人3",
      checked: false,
      chnkopen:1,
    },
    {
      name: "发行人4",
      checked: false,
      chnkopen:1,
    },
    {
      name: "发行人5",
      checked: false,
      chnkopen:1,
    },
    {
      name: "发行人6",
      checked: false,
      chnkopen:1,
    },
    {
      name: "发行人7",
      checked: false,
      chnkopen:1,
    },
    {
      name: "发行人8",
      checked: false,
      chnkopen:1,
    },
    {
      name: "发行人9",
      checked: false,
      chnkopen:1,
    },
  ],
});

const select = (k, sop) =>
  options[k].map((op) =>
    op.name == sop.name ? (sop.checked = !sop.checked) : (op.checked = false)
  );
</script>
<style lang='scss' scoped>
.filter {
  @include flex($jc: space-between);
  padding: 20px 70px;
  margin: 20px 0;
  background-color: #fff;
  .title {
    font-size: 20px;
    margin-right: 20px;
  }
  .option {
    display: inline-block;
    margin-right: 20px;
    @include option(90px, 42px, 5px);
  }
}
</style>
