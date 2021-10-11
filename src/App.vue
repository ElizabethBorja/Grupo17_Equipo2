<template>
  <v-app>
    <v-main>
      <barra/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import barra from './components/barra.vue'
import carrusel from './components/carrusel.vue'
import noticias from './components/Noticias.vue'
import integrantes from './components/integrantes.vue'
import registro from './components/registro.vue'

export default {
  name: 'App',
  components:{
    barra, carrusel, noticias, integrantes, registro
  },

  data: () => ({
    //
  }),
};
</script>
