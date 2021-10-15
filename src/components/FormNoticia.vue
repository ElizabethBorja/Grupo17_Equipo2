<template>
<Navbar />
<div class="general">
    <div class="container">
        <div class="center">
            <h1 class=" fw-bold text-center">Cargar noticia</h1>

        <form class="form row g-3" @submit.prevent="crearNoticia()">
            <div class="col-md-6">
                <label for="input1" class="form-label">Titulo</label>
                <input
                v-model="noticia.titulo"
                type="text"
                class="form-control"
                id="input1"
                placeholder="Titular de la noticia"
                />
            </div>

            <div class="col-md-6">
                <label for="resume" class="form-label">Resumen</label>
                <input
                v-model="noticia.resumen"
                type="text"
                class="form-control"
                id="resume"
                placeholder="De qué se trata"
                />
            </div>

            <div class="col-md-12 form-floating">
                <textarea v-model="noticia.contenido"
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style="height: 100px"
                ></textarea>
                <label for="floatingTextarea2">Contenido</label>
            </div>

            <div class="mb-3">
                <label for="formFile" class="form-label">Foto de la portada</label>
                <input v-model="noticia.foto_portada"
                class="form-control" 
                type="text" 
                id="formFile" 
                placeholder="Url de la foto"
                />
            </div>

            <div class="col-md-6">
                <label for="input3" class="form-label">Autor</label>
                <input v-model="noticia.autor"
                type="text"
                class="form-control"
                id="input3"
                placeholder=""
                />
            </div>

            <div class="col-md-6">
                <label for="input4" class="form-label">Sitio de publicación</label>
                <input v-model="noticia.sitio_publicacion"
                type="text"
                class="form-control"
                id="input4"
                placeholder=""
                />
            </div>

            <div class="col-md-6">
                <label class="control-label" for="date">Fecha</label>
                <input v-model="noticia.fecha_creacion"
                class="form-control"
                id="date"
                name="date"
                placeholder="MM/DD/YYY"
                type="text"
                />

                
            </div>

<button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">
        enviar
      </button>

            </form>
        </div>
    </div>
</div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
    components: {
    Navbar,

},

  methods: {

crearNoticia(){
  axios.post('https://anuraindex.herokuapp.com/api/registro_noticia',this.noticia)
            .then(res => {
            if(res.status == 200){
            this.$router.push("/noticias/");
            }
            console.log(res);
            });
}
},
    data(){
    return {
        noticia: {
        titulo: '',
        resumen: '',
        contenido:'',
        foto_portada:'',
        autor:'',
        sitio_publicacion:'',
        fecha_creacion:''



    },

}
}
}
</script>
