<template>
  <v-carousel hide-delimiters p - applies padding  >
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
</template>

<script>
  export default {
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
      }
    },
  }
</script>