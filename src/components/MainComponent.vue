<template>
  <div class="main-container" :style="cssProps">
    <div class="container-header">
      <div class="avatar">
        <img :src="item.url_profile" alt="" />
      </div>
    </div>

    <div class="container-body">
      <div class="title">
        <h2>{{ item.title }}</h2>
      </div>

      <div class="content" v-html="item.body"></div>

      <div class="social-buttons">
        <SocialButton
          v-for="social in socialsArray"
          :key="social"
          :nameSocial="social"
        ></SocialButton>
      </div>

      <div class="form-template">
        <form id="form-di-contatto">
          <h3>Form di contatto</h3>
          <div
            v-for="(formItem, index) in formContatto"
            :key="index"
            class="item"
          >
            <label :for="formItem.label">
              {{ formItem.label }}
              <span v-if="formItem.required == true"> *</span>
            </label>
            <input
              :class="{ 'input-error': formItem.error }"
              v-model="formItem.value"
              :id="formItem.label"
              type="text"
            />
          </div>
          <button @click.prevent="sendForm" class="send-button">Send</button>
        </form>
        <p><span class="asterisco">* Campi obbligatori</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import SocialButton from "./SocialButton.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram, faTwitter, faLinkedin);

export default {
  name: "MainComponent",
  components: {
    SocialButton,
  },
  created() {
    for (let element in this.item.social) {
      if (this.item.social[element] == true) {
        this.socialsArray.push(element);
      }
    }

    this.item.form.fields.forEach((element) => {
      this.formContatto.push({
        label: element.name["it-IT"],
        value: "",
        required: element.required,
        error: false,
      });
    });
  },
  data() {
    return {
      socialsArray: [],
      formContatto: [],
    };
  },
  props: {
    item: Object,
  },
  methods: {
    sendForm() {
      let error = null;
      let formJson = {};
      this.formContatto.forEach((element) => {
        if (element.required == true && element.value == "") {
          element.error = true;
          error = true;
        } else {
          element.error = false;
        }
      });
      if (error) {
        return alert("ERRORE>> CAMPO OBBLIGATORIO VUOTO");
      } else {
        return alert("OGGETTO RESTITUITO>>" + toString(formJson));
      }
    },
  },
  computed: {
    cssProps() {
      return {
        "--url-bg": "url(" + this.item.url_cover + ")",
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

.container-header {
  position: relative;

  width: 100vw;
  height: 35vh;

  background: var(--url-bg);
  background-size: cover;
  background-position: center;
}

.avatar {
  position: absolute;
  bottom: 0;
  left: 50%;

  width: 50%;
  max-width: 180px;

  border-radius: 50%;
  border: 7px solid white;

  transform: translate(-50%, 50%);
}

.avatar img {
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1;
}

.container-body {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
  padding: 0 2rem;
}

.title {
  align-self: start;
  color: #585858;
  font-size: 2rem;
}

.title * {
  margin-top: 7rem;
}

.social-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.form-template {
  margin: 2rem 0;
  padding: 1rem;
  width: 100%;
  max-width: 500px;
  align-self: center;
  background: #585858;
  color: #ededed;
}

#form-di-contatto {
  display: flex;
  flex-direction: column;
}

.send-button {
  align-self: flex-end;
  margin: 1rem;
  padding: 0.5rem 1rem;
  outline: none;
  display: flex;
  margin: 1rem;
  position: relative;
  border: 1px solid #ededed;
  border-radius: 10px;
  overflow: hidden;
  background: #dedede;
}

.send-button:hover {
  cursor: pointer;
  background: #dedede;
  box-shadow: 0 0 0 2px #fefefe;
}

.asterisco {
  font-size: 0.7rem;
  color: #e8806d;
}

.item {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

span {
  color: #e8806d;
}

.input-error {
  border: 2px solid #e8806d;
}
</style>
