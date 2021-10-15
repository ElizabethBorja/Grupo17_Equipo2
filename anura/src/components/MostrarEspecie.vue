<template>  
    <div class= "container ">
    
<div class="row row-cols-1 row-cols-md-2 g-4 mt-2" id="avistamiento" >
        <article  class= "article-item"  v-for="avistamiento  in listAvistamiento" 
        :key=avistamiento._id> 
        
        <img class="img-fluid img-responsive "
        :src=avistamiento.imagen
        :alt=avistamiento.especie >

        <div class="card-body">
        <h3 class="card-title " >{{avistamiento.especie}}</h3>
        
        <span class="date"> {{avistamiento.fecha}}</span>
        <br/>
        <br/>
        <router-link class="btn btn-lg btn-primary" :to="{name:'noticias'}">
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
    name:"Avistamiento",
   components: {},
  methods: {
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
      axios.post('https://anuraindex.herokuapp.com/api/consultar_todos_avistamientos/')
            .then(res => {
            if(res.status == 200){
             this.listAvistamientos = res.data.message;
            }
            console.log(this.listAvistamientos);
            });
}
}


</script>
