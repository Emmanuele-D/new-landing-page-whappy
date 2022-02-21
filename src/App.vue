<template>
  <div id="app">
    <MainComponent v-if="item != {}" :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: {
    MainComponent,
  },
  created() {
    axios.get("https://api-fdt.whappy.it/api/Landing/2").then((res) => {
      this.item = res.data;
      console.log("CIAO BISSO", this.item);

      this.item.title = this.item.title["it-IT"];
      this.item.body = this.item.body["it-IT"];
    });
  },
  data() {
    return {
      item: {},
    };
  },
};
</script>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;700&display=swap');


<style>
/* * {
  border: 1px solid rgb(189, 255, 187);
} */

html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100%;

  font-family: "Outfit", sans-serif;
  color: #585858;
}
</style>
