<template>

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
</template>




<script>
  export default {
    data: () => ({
      types: ['INTEGRANTES'],
      cards: ['Good', 'Best', 'Finest','algo'],
      socials: [
      
        {
          icon: 'mdi-linkedin',
          color: 'cyan darken-1',
        },
      ],
    }),

    methods: {
      getImage () {
        const min = 550
        const max = 560

        return Math.floor(Math.random() * (max - min + 1)) + min
      },
    },
  }
</script>