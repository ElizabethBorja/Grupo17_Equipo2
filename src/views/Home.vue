<template>
  <Carrusel />
   <Noticias />
</template>

<script>
  import Carrusel from '../components/Carrusel.vue'
  import Noticias from '../components/Noticias.vue'


  export default {
    name: 'Home',

    components: {
      Carrusel,
      Noticias,
    },
  }
</script>
