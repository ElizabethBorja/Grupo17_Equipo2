import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: () => import("../views/Inicio.vue"),
  },

  {
    path: "/avistamientos",
    name: "Avistamientos",
    component: () => import("../views/Avistamientos.vue"),
  },
  {
    path: "/noticias",
    name: "Noticias",
    component: () => import("../views/Noticias.vue"),
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "/dashboard/",
        component: () => import("../components/Dashboard/FormEspecie.vue"),
      },
      {
        path: "/dashboard/creacionNoticias",
        name:"noticias",
        //component: () => import("../components/Dashboard/Posts/List.vue"), 
        component: () => import("../components/FormNoticia.vue"),
      },
      {
        path: "/dashboard/crearAvistamiento",
        //component: () => import("../components/Dashboard/Products/List.vue"),
        component: () => import("../components/Dashboard/FormEspecie.vue"),

      },
     
    ],
  },


];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
