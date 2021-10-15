<template>
<Navbar />
    <div class="general" >
    <div class="container">
        <div class="center">
        <h1 class=" fw-bold text-center">Registro de Avistamiento</h1>

        <form class="form row g-3" @submit.prevent="crearAvistamiento()">
            <div class="col-md-6">
            <label for="input1" class="form-label">Nombre</label>
            <input v-model="avistamiento.nombre"
                type="text"
                class="form-control"
                id="input1"
                placeholder="Nombre del colector"
            />
            </div>

            <div class="col-md-6">
            <label for="input2" class="form-label">Especie</label>
            <input v-model="avistamiento.especie"
                type="text"
                class="form-control"
                id="input2"
                placeholder="Nombre cientifíco"
            />
            </div>
            <div class="col-md-6">
            <label for="input3" class="form-label">lugar de avistamiento</label>
            <input v-model="avistamiento.localidad"
            type="text" 
            class="form-control" 
            id="input3" 
            placeholder="" />
            </div>

            <div class="col-md-6">
            <label class="control-label" for="date">Fecha</label>
            <input v-model="avistamiento.fecha"
                class="form-control"
                id="date"
                name="date"
                placeholder="MM/DD/YYY"
                type="text"
            />
            </div>

            <div class="mb-3">
            <label for="formFile" class="form-label"
                >Cargar imagen de la especie</label
            >
            <input v-model="avistamiento.imagen"
            class="form-control"
             type="text" 
             id="formFile" />
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

crearAvistamiento(){
  axios.post('https://anuraindex.herokuapp.com/api/registro_avistamientos',this.avistamiento)
            .then(res => {
            if(res.status == 200){
            this.$router.push("/avistamientos/");
            }
            console.log(res);
            });
}
},
    data(){
    return {

        avistamiento:{
        nombre: '',
        especie: '',
        localidad: '',
        fecha:'',
        imagen:'',
        }


    }

}
}
</script>