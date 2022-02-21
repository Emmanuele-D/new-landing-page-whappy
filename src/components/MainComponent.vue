<template  >
  <div class="main-container" :style="cssProps">
    <div class="container-header">
      <div class="avatar">
        <img :src="item.url_profile" alt="" />
      </div>
    </div>

    <div class="section">
      <div class="section-title">
        <h2>{{ item.title }}</h2>
      </div>
      <div v-html="item.body" class="section-body"></div>
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
                type="text"
                :id="item.label"
                :placeholder="item.label"
                v-model="item.value"
                :class="{ required: item.error }"
              />
            </div>
          </div>
          <button @click="sendForm">Invia</button>
        </form>
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
  data() {
    return {
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
          console.log(element);
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
</style>