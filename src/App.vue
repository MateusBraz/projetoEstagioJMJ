<template>
  <v-app xs>
    <v-img src="./assets/imagem_fundo.png" aspect-ratio="2">
      <v-row align="center" justify="start">
        <v-col cols="12" class="flex-column">
          <div class="ml-15 mt-15">
            <div class="d-flex align-center justify-start">
              <span>
                <a href="https://jmjsistemas.com.br/" class="titulo1 white--text">JMJ</a>
              </span>
              <transition enter-active-class="animate__heartBeat" appear>
                <span
                  class="nao-selecionavel titulo d-none d-sm-flex titulo2 pr-2 pl-2 mb-1"
                >Machine Learning</span>
              </transition>
            </div>

            <div class="flex-column align-center justify-start">
              <p class="nao-selecionavel subtitulo d-none d-sm-flex">
                Uma solução inteligente para cada etapa do processo de
                <br />gestão de Operação de Saúde.
              </p>
            </div>
          </div>
        </v-col>

        <v-col cols="6" class="flex-column justify-start" sm="6">
          <div class="ml-15 mt-15">
            <v-btn color="#5f0f40" @click="dialog = !dialog" dark>Da uma olhada no que podemos fazer</v-btn>
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
            <!-- style="background-color: #CE93D8;" -->
              <v-card >
                <v-toolbar dark color="#5f0f40">
                  <v-btn icon dark @click="fecharDialog">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Settings</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <Form :ciap2Sintomas="ciap2Sintomas" />
              </v-card>
            </v-dialog>
          </div>
        </v-col>
      </v-row>
    </v-img>
  </v-app>
</template>

<script>
import Vue from "vue";
import barramento from "./barramento";
import Form from "./components/Form.vue";
export default {
  name: "App",

  components: { Form },

  data: () => ({
    ciap2Sintomas: [],
    dialog: false
  }),
  methods: {
    fecharDialog() {
      this.dialog = false;
      barramento.setLimparFormulario();
    }
  },
  created() {
    console.error("Então você quis inspecionar algo no nosso site");
    console.log("Você sabe que isso não é muito legal né?");
    console.log(
      "Mas gostamos dessa curiosidade, por quê nao vem para o nosso time?"
    );
    Vue.prototype.$http.get("/ciap-descricao").then(response => {
      this.ciap2Sintomas = response.data;
    });
  }
};
</script>

<style>
.titulo1 {
  font-size: 7.5rem;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  user-select: none;
}

.titulo2 {
  font-size: 3.3rem;
  font-family: "Noto Sans HK", sans-serif;
  background-color: white;
  color: #5f0f40;
}

.subtitulo {
  color: white;
  font-size: 1.7rem;
  font-weight: 100;
}

.nao-selecionavel {
  user-select: none;
}

.estilo {
  background-image: url("https://lh3.googleusercontent.com/FABNwAkRPrrUalg1aQvMhyZSEiBW57etyE6XRky_56iQ7b9GZmhFZ_ilZ9FAPZZJSOmvenFHGN7TvXoBnPGUS1NvX0C7AEzpNKdgYLgV5WRyRCT3n0ugWf7lo585ncnTsP-QVCGB8hCYfntvsrhyZC2P2gyG7e9BQiDqaoGSe-QiGV1a_ofpcM1BfZUXfHW90UQtQzdcJRfr3fIpXukVphy_DDxvCywvWkXhp9WYX9bSYLgoXMXbOfL6SiNExjDsPJZWTQBK-a4BfTQnEKDzbRYnpAQufVopM5oE6A3m6i7hvSt_aTzZDbBHaJBKv4TpZ6nNGot1ejYUfBrjCwSZ3PMhKjf_nw5BYVRHFnqD6C__DovThUT0nE0hQX_rwj2fuMMAy5kQZsBRUzExV0__48R0R7bdirWjdJJqXffivGQcEikOYzcWn0GD4phFu51nsUSrgDVN5IrX4su-jMCPmhqjHgVK9bye_lC0GKPr80DjU-Wuz1tGmw6j8AGGeBA8n7YRQRDfZhExu2eaokWUllqolQO7h4cXfx8uAjIxXtqZCh04yenXuaT3f08EmdX_U7K7Gs4ypMopJa0-8Jv3pZlyCrAqVTlJbBnDCAI-rCJC03eXwlFbiYJx_0Z7CShtSSuPURkOEP6U-7CaTUuRBbLels78ZBqdp1wxfzhr891j71AG3xBjHvlvTM6IiWu2ofQn=w1904-h924-ft");
}

* {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: #5f0f40;
}
</style>