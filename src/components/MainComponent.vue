<template  >
  <div class="main-container margin-bottom" :style="cssProps">
    <div class="container-header">
      <div class="avatar">
        <img :src="item.url_profile" alt="" />
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <h2>{{ item.title }}</h2>
      </div>
      <div class="section-body socialpost-body">
        <div class="ql-editor">
          <div v-html="item.body"></div>
        </div>
      </div>
    </div>

    <div v-if="socialArray" class="section">
      <SocialButton
        v-for="social in socialsArray"
        :key="social"
        :nameSocial="social"
      ></SocialButton>
    </div>

    <div v-if="formContatto.length" class="section">
      <div class="section-form">
        <h3>Form di Contatto</h3>
        <span class="section-didascalia"> * campi obbligatori </span>
        <form>
          <div v-for="item in formContatto" :key="item.label" class="form-item">
            <div>
              <label :for="label">{{ item.label }}</label>
              <span v-if="item.required"> *</span>
            </div>
            <div>
              <input
                @keyup="formClicked"
                type="text"
                :id="item.label"
                :placeholder="item.label"
                v-model="item.value"
                :class="{ required: item.error }"
              />
            </div>
          </div>
          <button @click="sendForm">{{ testoBottone }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import SocialButton from "./SocialButton.vue";

export default {
  name: "MainComponent",
  metaInfo() {
    return {
      title: this.item.title,
      titleTemplate: null,
      meta: [
        {
          property: "og:image",
          content: this.item.url_cover,
          vmid: "og:image",
        },
        { property: "og:title", content: this.item.title, vmid: "og:title" },
        { property: "og:type", content: "website", vmid: "og:type" },
        {
          property: "og:description",
          content: this.item.OgDescription,
          vmid: "og:description",
        },
      ],
    };
  },
  components: {
    SocialButton,
  },
  created() {
    this.paramsFromRoute.titolo = this.$route.params.titolo;
    this.paramsFromRoute.id = this.$route.params.id;
    this.paramsFromRoute.userCode = this.$route.params.code;

    this.getIpAddress();
    window.addEventListener("scroll", this.handleScroll);

    var visibilityChange;
    if (typeof document.hidden !== "undefined") {
      // Opera 12.10 and Firefox 18 and later support
      visibilityChange = "visibilitychange";
    } else if (typeof document.mozHidden !== "undefined") {
      visibilityChange = "mozvisibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      visibilityChange = "webkitvisibilitychange";
    }

    document.addEventListener(visibilityChange, this.checkTime);
  },
  mounted() {
    this.setStartingTime();
    console.log(this.item);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      testoBottone: "Invia",
      formContatto: [],
      pctScrolled: 0,
      startingTime: 0,
      elapsedTime: 0,
      listenFormClicked: true,
      ipFasullo: "192.168.899.899",
      paramsFromRoute: {
        titolo: "",
        id: 0,
        userCode: 0,
      },
    };
  },
  props: {
    item: Object,
  },
  methods: {
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

    setStartingTime() {
      this.startingTime = new Date().getTime();
    },
    checkTime() {
      this.elapsedTime = 0;
      let endTime = new Date().getTime();
      this.elapsedTime = (endTime - this.startingTime) / 1000;

      console.log("ELAPSED TIME", this.elapsedTime);

      if (this.ipFasullo) {
        axios
          .post(
            "https://api-fdt.whappy.it/api/SocialShare/SetLandingTimeOfStay/" +
              this.paramsFromRoute.id +
              "/" +
              this.paramsFromRoute.userCode +
              "/" +
              this.elapsedTime.toFixed(0).toString() +
              "/" +
              this.ipFasullo
          )
          .then((res) => {
            console.log(res);
            var visibilityChange;
            if (typeof document.hidden !== "undefined") {
              // Opera 12.10 and Firefox 18 and later support
              visibilityChange = "visibilitychange";
            } else if (typeof document.mozHidden !== "undefined") {
              visibilityChange = "mozvisibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
              visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
              visibilityChange = "webkitvisibilitychange";
            }

            document.removeEventListener(visibilityChange, this.checkTime);
          });
      }
    },
    handleScroll() {
      function getDocHeight() {
        var D = document;
        return Math.max(
          D.body.scrollHeight,
          D.documentElement.scrollHeight,
          D.body.offsetHeight,
          D.documentElement.offsetHeight,
          D.body.clientHeight,
          D.documentElement.clientHeight
        );
      }

      var winheight =
        window.innerHeight ||
        (document.documentElement || document.body).clientHeight;
      var docheight = getDocHeight();
      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      var trackLength = docheight - winheight;
      var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
      this.pctScrolled = pctScrolled;
      if (this.pctScrolled >= this.item.scrollMin) {
        if (this.ipFasullo) {
          axios
            .post(
              "https://api-fdt.whappy.it/api/SocialShare/SetLandingScroll/" +
                this.paramsFromRoute.id +
                "/" +
                this.paramsFromRoute.userCode +
                "/" +
                this.ipFasullo
            )
            .then((res) => {
              console.log(res);
            });
        }
        window.removeEventListener("scroll", this.handleScroll);
      }
    },
    formClicked() {
      if (this.listenFormClicked) {
        if (this.ipFasullo) {
          axios
            .post(
              "https://api-fdt.whappy.it/api/SocialShare/SetLandingStartForm/" +
                this.paramsFromRoute.id +
                "/" +
                this.paramsFromRoute.userCode +
                "/" +
                this.ipFasullo
            )
            .then((res) => {
              console.log(res);
            });
          this.listenFormClicked = false;
        }
      } else {
        return;
      }
    },
    sendForm(e) {
      e.preventDefault();
      let error = null;
      this.formContatto.forEach((element) => {
        if (element.required == true && element.value == "") {
          element.error = true;
          error = true;
        } else {
          element.error = false;
        }
      });
      if (error) {
        return console.log("ERRORE>> CAMPO OBBLIGATORIO VUOTO");
      } else {
        if (this.ipFasullo) {
          axios
            .post(
              "https://api-fdt.whappy.it/api/SocialShare/SendForm/" +
                this.paramsFromRoute.id +
                "/" +
                this.paramsFromRoute.userCode +
                "/" +
                this.ipFasullo,
              this.formContatto
            )
            .then((res) => {
              if (res) {
                this.testoBottone = "Form inviato correttamente";
                this.formContatto.forEach((element) => {
                  element.value = "";
                });
              }
            });
        }
      }
    },
  },
  computed: {
    cssProps() {
      return {
        "--url-bg": "url(" + this.item.url_cover + ")",
      };
    },
    socialsArray() {
      let array = [];
      this.item.social.forEach((element) => {
        element.nome ? array.push(element) : null;
      });
      return array;
    },
  },
  watch: {
    item: {
      handler(val) {
        this.formContatto = [];
        val.form.fields.forEach((element) => {
          this.formContatto.push({
            label: element.name["it-IT"],
            value: "",
            required: element.required,
            error: false,
          });
        });
      },
      deep: true,
    },
  },
};
</script>


<style scoped>
/* * {
  border: 1px solid palevioletred;
} */

.main-container {
  background: #e9ecef;
}

.container-header {
  position: relative;

  width: 100%;
  height: 35vh;

  background: var(--url-bg);
  background-size: cover;
  background-position: center;

  margin-bottom: 120px;
}

.avatar {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  width: 50%;
  max-width: 180px;

  border-radius: 50%;
}

.avatar img {
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1;
  border: 7px solid white;
}

.section {
  width: 80%;
  border-radius: 20px;
  background: white;
  margin: 0 auto 2rem;
  padding: 2rem;
  overflow: hidden;
}

.section-form {
  max-width: 500px;
  margin: auto;
  color: rgb(20, 20, 20);
  margin: 1rem auto;
}

.section-didascalia {
  font-size: 0.7rem;
}

form {
  margin-top: 2rem;
}

input {
  border: 1px solid grey;
  padding: 0.5rem;
  border-radius: 10px;
}

.form-item * {
  width: 100%;
}

.form-item label {
  font-weight: bolder;
}

.form-item {
  margin-bottom: 1rem;
}

.required {
  border: 1px solid orange;
  border-radius: 10px;
}

button {
  background: white;
  border: 1px solid grey;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

button:hover,
button:active {
  background: rgb(187, 234, 240);
  transform: scale(95%);
}

.padding-bottom {
  padding-bottom: 3rem;
}

.show-modal {
  opacity: 1;
  visibility: visible;
  transform: scale(1);
  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}

.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  z-index: 10;
}

.modal-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem 1.5rem;
  width: 80vw;
  border-radius: 0.5rem;
}
</style>