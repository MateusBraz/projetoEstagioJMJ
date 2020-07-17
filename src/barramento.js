import Vue from 'vue'

export default new Vue({
    methods: {
        setLimparFormulario() {
            this.$emit('limparFormulario', () => {});
        },
        onLimparFormulario(callback) {
            this.$on('limparFormulario', callback);
        }
    }
})