<template>
  <div id="app">
    <!-- <ListUser :title="title" />
    <BtnEventUp @changeTitle="changeTitle" />
    <DemoRef />
    <TwoWayBinding />
    <DemoSlot>
      <div slot="demo1" class="slot-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, illo?
          Eaque tempore quibusdam, pariatur at incidunt culpa beatae qui, soluta
          tenetur omnis id iusto dolor et doloremque consequatur ipsam repellat.
        </p>
      </div>
      <div slot="demo2">
        <h1>demo2</h1>
      </div>
    </DemoSlot>
    <hr />
    <h1>Demo event bus</h1>
    <DemoBusComopent1 :title="'this is a title'" />
    <DemoBusComopent2 :title="'this is a title'" />
    <hr />
    <h1>DynamicComponent</h1>
    <component :is="component" />
    <button @click="changeComponent('DynamicComp1')">show DynamicComp1</button>
    <button @click="component = 'DynamicComp2'">show DynamicComp2</button> -->
    <hr />
    <VueAxios />
    <hr />
    <CustomDirectiveAndFilter />
  </div>
</template>

<script>
import CustomDirectiveAndFilter from "./components/CustomDirectiveAndFilter.vue";
import VueAxios from "./components/VueAxios.vue";
import DynamicComp2 from "./components/DynamicComponent/DynamicComp2.vue";
import DynamicComp1 from "./components/DynamicComponent/DynamicComp1.vue";
import TwoWayBinding from "./components/TwoWayBinding.vue";
import DemoBusComopent2 from "./components/DemoBus/DemoBusComopent2.vue";
import DemoBusComopent1 from "./components/DemoBus/DemoBusComopent1.vue";
import DemoSlot from "./components/DemoSlot.vue";
import DemoRef from "./components/DemoRef.vue";
import BtnEventUp from "./components/BtnEventUp.vue";
import ListUser from "./components/ListUser.vue";
export default {
  name: "app",
  components: {
    ListUser,
    BtnEventUp,
    DemoRef,
    DemoSlot,
    DemoBusComopent1,
    DemoBusComopent2,
    TwoWayBinding,
    DynamicComp1,
    DynamicComp2,
    VueAxios,
    CustomDirectiveAndFilter,
  },
  data() {
    return {
      title: "Welcome to Your Vue.js App",
      component: "DynamicComp1",
    };
  },

  methods: {
    changeTitle({ title }) {
      this.title = title;
    },
    changeComponent(data) {
      this.component = data;
    },
  },
};
</script>
