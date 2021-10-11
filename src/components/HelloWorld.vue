<template>
  <v-container
  fluid>

  <v-card class="overflow-hidden">
    <v-app-bar

      color="#096631"
      dark
      shrink-on-scroll
      prominent
      src="https://www.nationalgeographic.com.es/medio/2019/11/12/rana-punta-de-flecha_3bb36531.jpg"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(127,191,63,.1), rgba(127,191,63,.1)"
        ></v-img>
      </template>

  

        <v-app-bar-title class="text-h2  font-weight-black "> ANURA INDEX</v-app-bar-title>
   
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
        <v-icon>mdi-</v-icon>
      </v-btn>

 

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab class="text-h5">Inicio</v-tab>
          <v-tab class="text-h5">Noticias</v-tab>
          <v-tab class="text-h5">Listado de ranas</v-tab>
          <v-tab><router-link to="/">Home</router-link></v-tab> |
          <v-tab><router-link to="/about">About</router-link></v-tab>
    
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="600"
    >

    </v-sheet>
  </v-card>



<!-- TERMINA NAVBAR  -->

<!--CARRUSEL-->

<br>

    <v-carousel hide-delimiters  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :texto="item.rana"
    >
    <div max-width="500">

    {{item.src}}
    </div>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >



          <div class="text-h2 font-weight-black lime lighten-4">


          {{ item.rana }}
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
<br>
    <!--NOTICIAS-->

      <v-layout row>
    <v-flex xs12 sm6>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explorar
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show1 = !show1"
      >
        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show1">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
    </v-flex>

  <v-flex xs12 sm6>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explorar
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show2 = !show2"
      >
        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show2">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
    </v-flex>

    
   

  </v-layout>



<br>
  <v-layout row>
    <v-flex xs12 sm6>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explorar
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show3 = !show3"
      >
        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show3">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
    </v-flex>

  <v-flex xs12 sm6>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explorar
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show4 = !show4"
      >
        <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show4">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  
    </v-flex>

    
   

  </v-layout>


<!-- COMIENZA INTEGRANTES  -->

      <v-card
    flat
    tile
  >


    <v-container 
      v-for="type in types"
      :key="type"
      class="grey lighten-4"
      fluid
    >
      <v-subheader style="text-align='center important'"><p>{{ type }}</p></v-subheader>

      <v-row>
        <v-spacer></v-spacer>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card>
            <v-img
              :src="`img`"
              height="200px"
            >
              <span
                class="text-h2 white--text pl-4 pt-4 d-inline-block"
                v-text="card"
              ></span>
            </v-img>

            <v-card-actions class="white justify-center">
              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                :color="social.color"
                class="white--text"
                fab
                icon
                small
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>



  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

        data () {
      return {
        items: [
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Colostethus_fraterdanieli01.jpg', 
            rana:"Colostethus fraterdanieli"
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Dendropsophus_columbianus.jpg',
             rana:"Dendropsophus colombianus"
          },
          {
            src: 'https://inaturalist-open-data.s3.amazonaws.com/photos/35568/medium.jpg?1545375669',
             rana:"Eleutherodactylus johnstonei"
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Leptodactylus_colombiensis.jpg',
             rana:"Leptodactylus colombiensis"
          }, 
          {
            src: 'https://static.inaturalist.org/photos/23591413/medium.jpg?1534958655',
             rana:"Leptodactylus fragilis"
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Canetoadmale.jpg',
             rana:"Rhinella marina"
          },
        ],

      types: ['INTEGRANTES'],
      cards: ['Good', 'Best', 'Finest','algo'],
      socials: [
      
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
        },
      ],

          methods: {
      getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
      },
    },

    show1: false,
    show2: false,
    show3: false,
    show4: false,




      }
    },


  }
</script>
