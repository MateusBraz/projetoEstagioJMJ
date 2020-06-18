<template>
  <v-card flat height="170px" tile>
    <v-toolbar
      dark
      prominent
      extended
      src="https://ehealthsummit.pt/wp-content/uploads/2019/04/inteligencia-artificial-01.png"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <transition enter-active-class="animated animate__heartBeat" appear>
        <div>
          <img class="imagem" alt="imagemJMJ" src="../assets/imagemJMJ.jpg" />
        </div>
      </transition>

      <v-toolbar-title>Estágio JMJ</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">HOME</v-tab>
          <v-tab to="/sintomas">SINAIS/SINTOMAS</v-tab>
          <v-tab to="/procedimentos">PROCEDIMENTOS</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>

<style>
.imagem {
  margin-right: 5px;
  margin-top: 60px;
  width: 60px;
  height: 60px;
}
</style>