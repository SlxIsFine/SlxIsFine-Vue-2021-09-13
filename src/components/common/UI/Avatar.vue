<template>
  <div class="avatar" :style="{backgroundImage:props.src,width:size,height:size}"></div>
</template>
<script setup>
import { defineProps, computed,ref } from "vue";
const props = defineProps({
  src: {
    require: true,
    type: "string"
  },
  size: {
    default: "32px"
  }
});
let size=computed(()=>{
    if(props.size.match(/^\d+(\.\d)*\d*$/)){
        return props.size+"px"
    }
    return props.size
})
</script>
<style lang="scss" scoped>
.avatar {
  background-color: red;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-block;
}
</style>