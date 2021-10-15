<template>
  <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" :to="{name:'Inicio'}">
            Inicio
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" :to="{name:'Avistamientos'}">
            Avistamientos
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" :to="{name:'Noticias'}">
            Noticias
          </router-link>
        </li>
      
       
      </ul>
      <ul class="nav">
        <li class="nav-item">

          <router-link class="nav-link link-dark px-2" to="/signin">
            Iniciar Sesión
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" to="/signup"> Regístrarse </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.container {
  max-width: 960px;
}
</style>

