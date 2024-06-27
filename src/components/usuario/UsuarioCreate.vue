<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const usuario = ref('')
const clave = ref('')
const email = ref('')
const rol = ref('')

async function crearUsuario() {
  await http
    .post(ENDPOINT, { usuario: usuario.value, clave: clave.value, email: email.value, rol: rol.value })
    .then(() => router.push('/usuarios'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container-fluid container-simpsons">
    <div class="row">
      <div class="col-12 text-center mt-3 mb-3">
        <h2 class="simpsons-font">Crear Nuevo usuario</h2>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form @submit.prevent="crearUsuario">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="usuario" placeholder="Usuario" required />
            <label for="usuario">Usuario</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="clave" placeholder="Clave" required />
            <label for="clave">Clave</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="email" placeholder="Email" required />
            <label for="email">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" v-model="rol" placeholder="Rol" required />
            <label for="rol">Rol</label>
          </div>
          <div class="text-center mt-3">
            <button type="submit" class="btn btn-primary btn-lg">
              Crear
            </button>
          </div>
        </form>
        <div class="text-left mt-3">
          <button class="btn btn-link" @click="goBack">Volver</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-simpsons {
  background-image: url('https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/bart-prank-texts-moe-on-the-simpsons.jpg?q=70&fit=crop&w=825&dpr=1');
  background-size: cover;
  background-position: center;
  color: rgb(44, 44, 7);
  padding: 50px 0;
  min-height: 100vh; /* Asegura que el contenedor ocupe al menos toda la altura del viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.simpsons-font {
  font-family: 'Bangers', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
}

.simpsons-font:hover {
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.7);
}

.form-floating input[type="text"],
.form-floating input[type="text"]:focus {
  background-color: rgba(255, 255, 255, 0.797);
  border: 3px solid #7f7915;
  border-radius: 5px;
  color: rgb(11, 7, 7);
}

.btn-primary {
  background-color: #ff7300;
  border: none;
}

.btn-primary:hover {
  background-color: #ff7f0e;
}

.btn-link {
  color: #ff6200;
  text-decoration: underline;
  transition: all 0.3s ease-in-out;
}

.btn-link:hover {
  color: #ff7f0e;
  text-decoration: none;
}
</style>
