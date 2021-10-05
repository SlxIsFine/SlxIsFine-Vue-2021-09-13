<script>
import { h, defineComponent, defineProps, computed, toRefs, ref, markRaw } from "vue";
import TabHeader from "./TabHeader.vue";
import Own from "./Own.vue";
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
  props: {
    config: {
      default: {
        data: [
          {
            name: "我拥有的NFT",
            component: Own,
            componentProps: {},
          },
        ],
        headerComponent: TabHeader,
        headerProps: {},
      },
    },
  },
  setup(props) {
    /**
     * {
     * config:{
     * data:[{
     * name:'',
     * component:"",
     * componentProps:{}
     * }]}
     * }
     */
    let { config } = toRefs(props);

    let labels = computed(() =>
      config.value.data.map((v, k) => {
        return { name: v.name, id: k };
      })
    );
    let curCompId = ref(0);
    let curComp = computed(() => config.value.data[curCompId.value].component);
    let curCompProps = computed(() => config.value.data[curCompId.value].componentProps);

    return () =>
      h(
        "div",
        {
          className: "row tab-list",
        },
        [
          h(config.value.headerComponent ||TabHeader, {
            labels: labels.value,
            tabChange: markRaw((val) => {
              curCompId.value = val.id;
            }),
            customProps:config.value.headerProps||{}
          }),
          h(
            "div",
            {
              className: "tab-content",
              change: () => {
                console.log("click div");
              },
            },
            [h(curComp.value, curCompProps.value)]
          ),
        ]
      );
  },
  components: { TabHeader },
});
</script>
<style lang="scss" scoped>
.tab-list {
  height: 100%;
  min-height: 120px;
  .tab-content {
    width: 100%;
    height: max-content;
  }
}
</style>
