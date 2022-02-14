<template>
  <div id="app">
    <MainComponent :item="item" />
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
    axios.get("https://api-fdt.whappy.it/api/Landing/7").then((res) => {
      this.item = res.data;
      console.log(this.item);

      console.log(" CREATED ", this.translate(this.item.title));

      this.item.title = this.item.title["it-IT"];
      this.item.body = this.item.body["it-IT"];
    });
  },
  data() {
    return {
      item: {
        // url_cover: "https://picsum.photos/id/1/1920/800",
        // url_profile: "https://picsum.photos/500/700",
        // title: "Landing page",
        // body: "<h2>Emmanuele</h2><p>Paragrafo di prova</p><p>Paragrafo di prova 2</p><p>Paragrafo di prova 3</p>",
        // social: {
        //   facebook: true,
        //   linkedin: true,
        //   twitter: true,
        //   instagram: false,
        // },
        // form: [
        //   {
        //     nome: "Nome e Cognome",
        //     required: true,
        //   },
        //   {
        //     nome: "Email",
        //     required: true,
        //   },
        //   {
        //     nome: "Campo aggiunto",
        //     required: true,
        //   },
        //   {
        //     nome: "Campo non obbligatorio",
        //     required: false,
        //   },
        // ],
      },
    };
  },
  methods: {
    translate(t) {
      console.log(" - T ", t);
      console.log(" WINDOW ", window);

      // return t[
      //   window.i18n.global.locale.value +
      //     "-" +
      //     window.i18n.global.locale.value.toUpperCase()
      // ];
    },
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
