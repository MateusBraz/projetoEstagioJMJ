<template>
  <div class="mt-10">
    <v-card dark>
      <v-row align="center">
        <v-col cols="12" class="pl-5 pr-5">
          <v-autocomplete
            dark
            v-model="values"
            :items="items"
            outlined
            dense
            chips
            small-chips
            label="Anamnese"
            multiple
          ></v-autocomplete>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="mt-5 ml-5 mr-5">
          <v-text-field dark :value="values" readonly></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex posicao-centro" cols="12">
          <v-btn outlined color="blue lighten-3" @click="verificarSalvar()">
            <i>SALVAR</i>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      "Dor no olho",
      "Olho vermelho",
      "Secreção ocular",
      "Movimentos oculares anormais",
      "Dor de ouvidos",
      "Problemas de audição",
      "Febre",
      "Dores musculares",
      "Vomito",
      "Outros sinais/sintomas gerais",
      "Convulsões/ataques"
    ],
    values: []
  }),
  methods: {
    verificarSalvar() {
      if (this.values.length == 0) {
        alert("ANAMNESE INVÁLIDA!");
      } else {
        alert("ANAMNESE VÁLIDA!");
      }
    }
  }
};
</script>

<style>
.posicao-centro {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
