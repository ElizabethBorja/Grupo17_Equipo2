<template>  
  <DefaultHeader />
  <Navbar />

<main>
<hr class="featurette-divider" />
<div class= "container " v-for="noticia  in listaNoticias" 
        :key=noticia._id> 
  
    <div class="row featurette  ">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            {{noticia.titulo}}
            
          </h2>
          <p class="lead" >
           {{noticia.contenido}}
           <br/>
           <span class="fw-bold">{{"Fecha de publicación : (" + noticia.fecha_creacion + ")"}}</span>
          </p>
        </div>
        <img class="
        col-md-5 order-md-1
        img-responsive
        rounded float-right

        "
        width="500"
            height="500"
              :src=noticia.foto_portada
              :alt=noticia.titulo
            >
        
      </div>

      <hr class="featurette-divider" />
      <hr/>
      <hr/>
      <div class="b-example-divider"></div>

</div>

    

</main>
  <Footer />
</template>

<script>
import DefaultHeader from "@/components/DefaultHeader.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";


export default {
  components:{
    Navbar, 
    DefaultHeader,
    Footer,

  },

data(){
        return {
            
            listaNoticias: [
                {titulo:"",
                resumen:"",
                contenido:"",
                foto_portada:"",
                autor:"",
                sitio_publicacion:"",
                fecha_creacion:""}
            ],

    }
 
            
        },
beforeCreate(){
      axios.post('http://127.0.0.1:4201/api/consulta_todas_noticias/')
            .then(res => {
            if(res.status == 200){
             this.listaNoticias = res.data.message;
            }
            console.log(this.listaNoticias);
            });
}
}
</script>


<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}


            
</style>