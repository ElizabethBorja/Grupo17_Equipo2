<template>
  <DefaultHeader />
  <Navbar />


<div>
<main>
     

      <hr class="featurette-divider" />
  <div class= "container " v-for="avistamiento  in listAvistamiento" 
        :key=avistamiento._id> 

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
          {{avistamiento.especie}} 
          </h2>
          <p class="lead">
            {{"Esta especie fue vista por: " + avistamiento.nombre}} 
          </p>
           <p class="lead">
            {{"Lugar: " + avistamiento.localidad + " / Fecha: " + avistamiento.fecha}} 
          </p>
        </div>
       <img class="
        col-md-5 order-md-1
        img-responsive
        rounded float-right

        "
        width="500"
            height="500"
              :src=avistamiento.imagen
              :alt=avistamiento.especie
            >
      </div>

      <hr class="featurette-divider" />

      <hr class="featurette-divider" />

    <hr class="featurette-divider" />
  </div>
  </main>
  <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import DefaultHeader from "@/components/DefaultHeader.vue";



import axios from "axios";



export default {
  name: "Avistamientos",
  components: {
    DefaultHeader,
    Navbar,
    Footer,
  },



data(){
        return {
            
        listAvistamiento:[
        {nombre: "",
        especie: "",
        localidad: "",
        fecha:"",
        imagen:"",
        }
        ],

    }

            
        },
beforeCreate(){
      axios.post('http://127.0.0.1:4201/api/consultar_todos_avistamientos/')
            .then(res => {
            if(res.status == 200){
             this.listAvistamiento = res.data.message;
            }
            console.log(this.listAvistamiento);
            });
}
}
</script>

<style scoped>

</style>