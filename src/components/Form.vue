<template>
  <v-row class="flex-column" justify="center" align="center">
    <div class="mt-5">Selecione a CID a ser predito</div>
    <v-radio-group v-model="cidSelecionado" row>
      <v-radio
        v-for="cid in arrayCid"
        :label="cid.label"
        :value="cid.value"
        :key="cid.label"
        color="#5f0f40"
      ></v-radio>
    </v-radio-group>

    <div class="mt-3">Selecione o Sexo</div>
    <v-radio-group v-model="sexoSelecionado" row>
      <v-radio
        v-for="sexo in arraySexo"
        :label="sexo.label"
        :value="sexo.value"
        :key="sexo.label"
        color="#5f0f40"
      ></v-radio>
    </v-radio-group>

    <div class="mt-3">Selecione o Caráter de Atendimento</div>
    <v-radio-group v-model="caraterAtendimentoSelecionado" row>
      <v-radio
        v-for="caraterAtendimento in arrayCaraterAtendimento"
        :label="caraterAtendimento.label"
        :value="caraterAtendimento.value"
        :key="caraterAtendimento.label"
        color="#5f0f40"
      ></v-radio>
    </v-radio-group>

    <div class="mt-3">Selecione a Faixa Etária</div>
    <v-radio-group v-model="faixaEtariaSelecionada" row>
      <v-radio
        v-for="faixaEtaria in arrayFaixaEtaria"
        :label="faixaEtaria.label"
        :value="faixaEtaria.value"
        :key="faixaEtaria.label"
        color="#5f0f40"
      ></v-radio>
    </v-radio-group>

    <div class="mt-3">Selecione os Sintomas</div>
    <!-- background-color="#CE93D8" -->
    <v-autocomplete
      style="width: 80%;"
      v-model="sintomasSelecionados"
      :items="ciap2Sintomas"
      solo
      item-color="#5f0f40"
      dense
      prepend-item
      chips
      small-chips
      label="digite os sintomas"
      multiple
      clearable
    ></v-autocomplete>
    <v-btn :disabled="atributoNulo" color="#5f0f40" class="white--text" @click="submeter">Prever CID</v-btn>

    <Dialog
      @fecharDialog="fecharDialogLimparVariaveis"
      :cidsPreditas="cidsPreditas"
      :dialog="dialog"
      :sintomasSelecionadosString="sintomasSelecionadosString"
    />
  </v-row>
</template>

<script>
import Vue from "vue";
import barramento from "@/barramento";
import Dialog from "./Dialog.vue";

export default {
  props: {
    ciap2Sintomas: {
      type: Array,
      required: true
    }
  },
  components: { Dialog },
  data: () => {
    return {
      dialog: false,
      sintomasSelecionados: [],
      textoDoAutoComplete: "",
      sintomasSelecionadosString: "",
      cidSelecionado: "",
      arrayCid: [
        {
          label: "CID Categoria",
          value: "categoria"
        },
        {
          label: "CID Capítulo",
          value: "capitulo"
        }
      ],
      sexoSelecionado: "",
      arraySexo: [
        {
          label: "Masculino",
          value: "masculino"
        },
        {
          label: "Feminino",
          value: "feminino"
        }
      ],
      caraterAtendimentoSelecionado: "",
      arrayCaraterAtendimento: [
        {
          label: "Eletivo",
          value: "eletivo"
        },
        {
          label: "Urgência",
          value: "urgencia"
        }
      ],
      faixaEtariaSelecionada: "",
      arrayFaixaEtaria: [
        {
          label: "0 a 18",
          value: "zeroaosdezoitoanos"
        },
        {
          label: "19 a 23",
          value: "dezenoveaosvinteetresanos"
        },
        {
          label: "24 a 28",
          value: "vinteequatroaosvinteeoitoanos"
        },
        {
          label: "29 a 33",
          value: "vinteenoveaostrintaetresanos"
        },
        {
          label: "34 a 38",
          value: "trintaequatroaostrintaeoitoanos"
        },
        {
          label: "39 a 43",
          value: "trintaenoveaosquarentaetresanos"
        },
        {
          label: "44 a 48",
          value: "quarentaequatroaosquarentaeoitoanos"
        },
        {
          label: "49 a 53",
          value: "quarentaenoveaoscinquentaetresanos"
        },
        {
          label: "54 a 58",
          value: "cinquentaequatroaoscinquentaeoitoanos"
        },
        {
          label: "59 ou mais",
          value: "cinquentaenovemais"
        }
      ],
      cidsPreditas: [
        {
          cid: "",
          porcentagem: ""
        },
        {
          cid: "",
          porcentagem: ""
        },
        {
          cid: "",
          porcentagem: ""
        }
      ]
    };
  },
  created() {
    barramento.onLimparFormulario(() => {
      this.limparFormulario();
    });
  },
  methods: {
    submeter() {
      console.log(this.cidSelecionado);

      this.sintomasSelecionadosString = this.sintomasSelecionados.join();

      const sintomasComInformacoesDoPaciente =
        this.sexoSelecionado +
        "," +
        this.faixaEtariaSelecionada +
        "," +
        this.caraterAtendimentoSelecionado +
        "," +
        this.sintomasSelecionados.join();
      this.preverCidsMaisProvaveis(
        this.cidSelecionado,
        sintomasComInformacoesDoPaciente
      );
      this.limparFormulario();
      this.dialog = true;
      // setTimeout(() => {
      //   this.dialog = true;
      // }, 500);
    },
    preverCidsMaisProvaveis(cidAserPredito, sintomas) {
      console.log(`/classificar-cid-${cidAserPredito}/${sintomas}`);
      Vue.prototype.$http
        .get(`/classificar-cid-${cidAserPredito}/${sintomas}`)
        .then(response => {
          this.cidsPreditas = response.data;
        });
    },
    limparFormulario() {
      this.cidSelecionado = "";
      this.sexoSelecionado = "";
      this.caraterAtendimentoSelecionado = "";
      this.faixaEtariaSelecionada = "";
      this.sintomasSelecionados = [];
    },
    fecharDialogLimparVariaveis(dialog) {
      this.dialog = dialog;
      this.cidsPreditas = [
        {
          cid: "",
          porcentagem: ""
        },
        {
          cid: "",
          porcentagem: ""
        },
        {
          cid: "",
          porcentagem: ""
        }
      ];
      this.sintomasSelecionadosString = "";
    }
  },
  computed: {
    atributoNulo() {
      return (
        this.cidSelecionado == "" ||
        this.sexoSelecionado == "" ||
        this.caraterAtendimentoSelecionado == "" ||
        this.faixaEtariaSelecionada == "" ||
        this.sintomasSelecionados.length == 0
      );
    }
  }
};
</script>

<style>
</style>