<template>
 <DefaultHeader />
  <Navbar />
  <carrusel />
  <hr class="featurette-divider" />
    <VistaNew />
      <hr class="featurette-divider" />
      <hr/>
      <hr/>
      <div class="b-example-divider"></div>
    <Integrantes />



 
<main>
      

      <hr class="featurette-divider" />
  <!--Integrantes /-->
    <hr class="featurette-divider" />
    <!-- /.container -->
  </main>

  <Footer />

</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import DefaultHeader from "@/components/DefaultHeader.vue";
import carrusel from "@/components/carrusel.vue";
import VistaNew from "@/components/VistaNew.vue";
import Integrantes from "@/components/Integrantes.vue";


export default {
  components: {
    Navbar,
    DefaultHeader,
    carrusel,
    VistaNew,
    Integrantes,
    Footer,
  },
};
</script>
