<template>
<v-container
fluid>
  <div class="about">
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
  </div>
  </v-container>
</template>
