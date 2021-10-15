<template>
  <Navbar />
  <SvgSignUp />
  <main class="form-signup mt-5">
    <form class="text-center"  @submit.prevent="registrarUsuario()">
      <img
        class="mb-4"
        src="@/assets/frog.jpg"
        alt=""
        width="72"
        height="57"
      />
      <h1 class="h3 mb-3 fw-normal">Sign Up</h1>

      <div class="form-floating mb-3">
        <input
          v-model="user.nickname"
          type="text"
          class="form-control rounded-4"
          id="floatingInput"
          placeholder="Fulanito"
        />
        <label for="floatingInput">Nickname</label>
      </div>

      <div class="form-floating mb-3">
        <input
          v-model="user.email"
          type="email"
          class="form-control rounded-4"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          v-model="user.password"
          type="password"
          class="form-control rounded-4"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">
        Sign up
      </button>
      <small class="text-muted"
        >By clicking Sign up, you agree to the terms of use.</small
      >
     
    </form>
  </main>
</template>

<script>
// import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import SvgSignUp from "@/components/Svg/SignUp.vue";

import axios from "axios";


export default {
  components: {
    Navbar, SvgSignUp
  },
  methods: {

registrarUsuario(){
  axios.post('http://127.0.0.1:4201/api/registro_usuario',this.user)
            .then(res => {
            if(res.status == 200){
            this.$router.push("/dashboard/");
            }
            console.log(res);
            });
  },
    handleSubmitForm() {
      this.$router.push("/Dashboard");
    },
  },

  data(){
   return {
    user: {
      nickname: '',
      email: '',
      password:'',
    },
    users: [],
    mostrarToast: false,
   }
  }
};
</script>


<style scoped>
.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.form-signup {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signup .checkbox {
  font-weight: 400;
}

.form-signup .form-floating:focus-within {
  z-index: 2;
}

.form-signup input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>