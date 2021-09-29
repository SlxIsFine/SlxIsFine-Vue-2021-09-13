<script >
import { h, defineComponent, defineProps, computed } from "vue";
import TabHeader from "./TabHeader.vue";
export default defineComponent({
  // setup() {
  //   let props = [
  //     {
  //       name: "test",
  //       component: defineComponent({
  //         setup(props, context) {
  //           console.log(context.slots)
  //           return () => h("div", props, ["hhh", context.slots.default()]);
  //         },
  //       }),
  //     },
  //     {
  //       name: "test1",
  //       component: "div",
  //     },
  //   ];
  //   console.log(props.map((v) => h(v.component, v.name)));
  //   return () =>
  //     h(
  //       "div",
  //       null,
  //       props.map((v) => h(v.component, v.name))
  //     );
  // },
  setup() {
    return () => h("div",{
      className:"row tab-list"
    }, [h(TabHeader)]);
  },
  components: { TabHeader },
});
</script>
<style lang="scss" scoped>
.tab-list{
  height: 100%;
  min-height: 120px;
}
</style>