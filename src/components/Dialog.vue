<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="900px">
      <v-card>
        <v-card-title></v-card-title>
        <v-card-text>
          <v-container class="nao-selecionavel">
            <v-row class="pa-2">
              <v-col>
                <v-row
                  class="flex-column"
                  style="height:100%;"
                  align="start"
                  justify="space-between"
                >
                  <div class="resultado">
                    <strong>CIDS prováveis dos sintomas</strong>
                  </div>
                  <v-card-title style="word-break: normal;">{{ sintomasSelecionadosString }}</v-card-title>
                </v-row>
              </v-col>
              <v-col>
                <v-timeline>
                  <v-timeline-item right color="deep-purple" small>
                    <template v-slot:opposite>
                      <span
                        style="font-size:1.8rem;"
                        class="`headline font-weight-bold cyan--text`"
                        v-text="cidsPreditas[0].porcentagem + '%'"
                      ></span>
                    </template>
                    <div class="py-4">
                      <h2
                        class="`headline font-weight-light mb-4 cyan--text`"
                      >{{ cidsPreditas[0].cid }}</h2>
                      <!-- <div>Doença transmitida por mosquito.</div> -->
                    </div>
                  </v-timeline-item>

                  <v-timeline-item right color="deep-purple lighten-2" small>
                    <template v-slot:opposite>
                      <span
                        style="font-size:1.8rem;"
                        class="`headline font-weight-bold green--text`"
                        v-text="cidsPreditas[1].porcentagem + '%'"
                      ></span>
                    </template>
                    <div class="py-4">
                      <h2
                        class="`headline font-weight-light mb-4 green--text`"
                      >{{ cidsPreditas[1].cid }}</h2>
                      <!-- <div>Doença transmitida por mosquito.</div> -->
                    </div>
                  </v-timeline-item>

                  <v-timeline-item right color="deep-purple lighten-4" small>
                    <template v-slot:opposite>
                      <span
                        style="font-size:1.8rem;"
                        class="`headline font-weight-bold amber--text`"
                        v-text="cidsPreditas[2].porcentagem + '%'"
                      ></span>
                    </template>
                    <div class="py-4">
                      <h2
                        class="`headline font-weight-light mb-4 amber--text`"
                      >{{ cidsPreditas[2].cid }}</h2>
                      <!-- <div>Doença de fácil transmissão entre as pessoas.</div> -->
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn
            bottom
            right
            absolute
            color="#5f0f00"
            dark
            @click="$emit('fecharDialog', false)"
          >Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    cidsPreditas: {
      type: Array,
      required: true
    },
    dialog: {
      type: Boolean,
      required: true
    },
    sintomasSelecionadosString: {
      type: String,
      required: true
    }
  },

  data() {
    return {};
  }
};
</script>


<style >
.resultado {
  font-size: 2rem;
}
</style>

