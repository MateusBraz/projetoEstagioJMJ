<template>
  <v-app>
    <BarraAplicativo />
    <v-main class="background-color = blue-grey darken-4">
      <v-container fluid>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BarraAplicativo from "./components/BarraAplicativo.vue";
export default {
  name: "App",

  components: {
    BarraAplicativo
  },

  data: () => ({
    //
  })
};
</script>

<style>
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3s ease;
}
</style>