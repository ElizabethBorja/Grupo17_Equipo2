<template>
  <Navbar />
  <main class="form-signin mt-5">
    <form class="text-center" @submit.prevent="login()">
      <img
        class="mb-4"
        src="@/assets/frog.jpg"
        alt=""
        width="72"
        height="57"
      />
      <h1 class="h3 mb-3 fw-normal">Sign In</h1>

      <div class="form-floating">
        <input
          v-model="user.email"
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
        v-model="user.password"
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  methods: {
    login(){
        axios.post('http://127.0.0.1:4201/api/consulta_usuario',this.user)
            .then(res => {
            if(res.status == 200){
               if(res.data.message == "0"){
                 console.log("vacio");
                 this.$router.push("/SignUp/");
               }else{
                 console.log("lleno");
                 this.$router.push("/dashboard/crearAvistamiento");
               }
            }
            
            });
    },
  },
    data(){
   return {
    user: {
      email: '',
      password:'',
    },
   }
  }
};
</script>


<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>