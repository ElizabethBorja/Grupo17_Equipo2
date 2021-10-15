<template>  

    <div class= "container ">
        <h3 class="display-5 fw-bold" style="text-align:center ">Noticias</h3>
      <br/>
    
<div class="row row-cols-1 row-cols-md-2 g-4 mt-2" id="listaNoticia" >
        <article  class= "article-item"  v-for="noticia  in listaNoticias" 
        :key=noticia._id> 
        
    
        <!--Card image-->
    
        <img class="img-fluid img-responsive "
        :src=noticia.foto_portada
        :alt=noticia.titulo
        >

        <!--Card content-->
        <div class="card-body">
        <!--Title-->
        <h3 class="card-title " >{{noticia.titulo}}</h3>
        <!--Text-->
        
        <span class="date"> {{noticia.fecha_creacion}}</span>
        <br/>
        <br/>
        <router-link class="btn btn-lg btn-primary   " :to="{name:'Noticias'}">
        Leer Noticia
        </router-link>
        </div>
        </article>
    
    </div>
    </div>
</template>

<script>

import axios from "axios";

export default  {
    name:"Noticias",
   components: {},
  methods: {
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
      axios.post('https://anuraindex.herokuapp.com/api/consulta_todas_noticias/')
            .then(res => {
            if(res.status == 200){
             this.listaNoticias = res.data.message;
            }
            console.log(this.listaNoticias);
            });
}
}


</script>
