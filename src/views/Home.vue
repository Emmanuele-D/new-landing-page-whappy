<template>
  <div>
    <MainComponent v-if="item != {}" :item="item" />
  </div>
</template>

<script>
import axios from "axios";
import MainComponent from "../components/MainComponent.vue";

export default {
  name: "Home",
  components: {
    MainComponent,
  },
  created() {
    this.paramsFromRoute.titolo = this.$route.params.titolo;
    this.paramsFromRoute.id = this.$route.params.id;
    this.paramsFromRoute.userCode = this.$route.params.code;

    this.getLandingData();
    this.getIpAddress();
  },
  mounted() {
    this.landingOpen();
  },
  data() {
    return {
      item: {},
      ipFasullo: "135",
      paramsFromRoute: {
        titolo: "",
        id: 0,
        userCode: 0,
      },
    };
  },
  methods: {
    cambiaRoute() {
      this.$route.push("/about");
    },
    getIpAddress() {
      axios
        .get("https://ipinfo.io/json")
        .then(({ data }) => {
          localStorage.getItem("ipAddress") ? "" : (this.ipFasullo = data.ip);
          // localStorage.setItem("ipAddress", data.ip);
        })
        .then((res) => {
          console.log(res);
        });
    },
    getLandingData() {
      axios
        .get("https://api-fdt.whappy.it/api/Landing/" + this.paramsFromRoute.id)
        .then((res) => {
          console.log(res.data);
          this.item = res.data;
          this.item.title = this.item.title["it-IT"];
          this.item.body = this.item.body["it-IT"];
        });
    },
    landingOpen() {
      axios
        .post(
          "https://api-fdt.whappy.it/api/SocialShare/SetLandingOpen/" +
            this.paramsFromRoute.id +
            "/" +
            this.paramsFromRoute.userCode +
            "/" +
            this.ipFasullo
        )
        .then((res) => {
          console.log(res);
        });
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
