<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const apellido = ref('')
const cedulaIdentidad = ref('')

async function crearCliente() {
  try {
    const response = await http.post(ENDPOINT, { nombre: nombre.value, apellido: apellido.value, cedulaIdentidad: cedulaIdentidad.value });
    console.log('Respuesta del servidor:', response);
    router.push('/clientes');
  } catch (error) {
    console.error('Error al crear cliente:', error);
    alert('Hubo un error al crear el cliente. Por favor, inténtalo de nuevo.');
  }
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container-simpsons">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center mt-5 mb-5">
        <h2 class="simpsons-font">Crear Nuevo Cliente</h2>
      </div>
    </div>

    <div class="row justify-content-center align-items-center">
      <form class="col-md-6" @submit.prevent="crearCliente">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="nombre" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="apellido" v-model="apellido" placeholder="Apellido" required />
          <label for="apellido">Apellido</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="cedulaIdentidad" v-model="cedulaIdentidad" placeholder="Cédula de Identidad" maxlength="20" required />
          <label for="cedulaIdentidad">Cédula de Identidad</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-floppy-disk" /> Crear
          </button>
        </div>
      </form>
    </div>

    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center mt-3">
        <button class="btn btn-link" @click="goBack">Volver</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-simpsons {
  background-image: url('https://get.wallhere.com/photo/illustration-cartoon-beer-The-Simpsons-bar-comics-Homer-Simpson-play-Moe-Sizlack-games-screenshot-comic-book-fiction-166852.jpg');
  background-size: cover;
  color: rgb(44, 44, 7);
  padding: 50px 0;
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
