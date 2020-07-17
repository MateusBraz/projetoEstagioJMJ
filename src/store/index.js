import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ciap2Sintomas: [],
        sintomasSelecionados: [],
        sintomasSelecionadosString: "",
        cidsPreditas: [{
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
        ],
    },
    mutations: {},
    actions: {
        loadData() {

        }
    },
    modules: {}
})