<template>
  <v-data-table
    :headers="headers"
    :items="valor"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>   

</template>


<script>

import axios from "axios";

  export default {
    data () {
      return {
        vueRegistro:{
          registros:''
        },
        usuarios: Array,
        valor : [],
    

     headers: [
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
        ],
    desserts: []
      }
      
    },methots:{

     async getInfo(){
          let datos = await  axios.get('https://jsonplaceholder.typicode.com/todos/')
           this.valor = await datos.data
      }

    },


  created(){
    getInfo()
  }
    

  }

  /*
  axios.get('https://jsonplaceholder.typicode.com/todos/')
  .then(function (response) {
    // handle success
    debugger;
    console.log(response);
    this.usuarios = response;
    this.desserts= response.data;
    console.log(this.desserts);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  */ 
</script>


