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
          <FormItem
            v-for="formItem in item.form"
            :key="formItem"
            :formItem="formItem"
          >
          </FormItem>
          <button @click="sendForm" class="send-button">Send</button>
        </form>
        <p><span class="asterisco">* Campi obbligatori</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import SocialButton from "./SocialButton.vue";
import FormItem from "./FormItem.vue";
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
    FormItem,
  },
  created() {
    for (let element in this.item.social) {
      if (this.item.social[element] == true) {
        this.socialsArray.push(element);
      }
    }

    this.item.form.forEach((element) => {
      this.formContatto.push({
        label: element.nome,
        value: "",
        required: element.required,
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
        if (element.required == true) {
          if (element.value == "") {
            error = true;
          }
        } else {
          formJson[element.label] = element.value;
        }
      });
      if (error) {
        return alert("ERRORE>> CAMPO OBBLIGATORIO VUOTO");
      } else {
        return alert("OGGETTO RESTITUITO>>" + formJson);
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
  bottom: -50px;
  width: 20vw;
  max-width: 200px;
  min-width: 100px;
  height: 20vw;
  max-height: 200px;
  min-height: 100px;

  margin: 0 5vw;

  border-radius: 50%;
  border: 5px solid white;
}

.avatar img {
  width: 100%;
  border-radius: 50%;
}

.container-body {
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
  padding: 0 2rem;
}

.title {
  align-self: end;
  color: #585858;
  font-size: 2rem;
}

.title * {
  margin: 3rem 2rem;
}

.content {
  padding: 1rem;
}

.social-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.social-icon {
  width: 100px;
  margin: 1rem;
  padding: 8px 16px 8px 8px;
}

.form-template {
  margin: 2rem 0;
  padding: 1rem;
  width: 50%;
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
</style>
