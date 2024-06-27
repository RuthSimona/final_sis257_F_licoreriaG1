<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue';
import http from '@/plugins/axios';
import router from '@/router';

const props = defineProps<{
  ENDPOINT_API: string;
}>();

const ENDPOINT = props.ENDPOINT_API ?? '';
const nombre = ref('');
const apellido = ref('');
const cedulaIdentidad = ref('');
const id = router.currentRoute.value.params['id'];

async function editarCliente() {
  try {
    await http.patch(`${ENDPOINT}/${id}`, {
      nombre: nombre.value,
      apellido: apellido.value,
      cedulaIdentidad: cedulaIdentidad.value 
    });
    router.push('/clientes');
  } catch (error) {
    console.error('Error al editar el cliente:', error);
  }
}

async function getCliente() {
  try {
    const response = await http.get(`${ENDPOINT}/${id}`);
    nombre.value = response.data.nombre;
    apellido.value = response.data.apellido;
    cedulaIdentidad.value = response.data.cedulaIdentidad;
  } catch (error) {
    console.error('Error al obtener el cliente:', error);
  }
}

function goBack() {
  router.go(-1);
}

onMounted(() => {
  getCliente();
});
</script>

<template>
  <div class="container-simpsons">
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center mt-5 mb-5">
        <h2 class="simpsons-font">Editar Cliente</h2>
      </div>
    </div>

    <div class="row justify-content-center align-items-center">
      <form class="col-md-8" @submit.prevent="editarCliente">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="apellido" placeholder="Apellido" required />
          <label for="apellido">Apellido</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="cedulaIdentidad" placeholder="Cédula de Identidad" maxlength="20" required />
          <label for="cedulaIdentidad">Cédula de Identidad</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-floppy-disk" /> Guardar
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
  background-position: center;
  height: 100vh; /* Ajusta la altura para que cubra casi toda la pantalla */
  padding: 20px;
}
.simpsons-font {
  font-family: 'Bangers', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.658);
  transition: all 0.3s ease-in-out;
}

.simpsons-font:hover {
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.7);
}

.form-floating input[type="text"],
.form-floating input[type="text"]:focus {
  background-color: rgba(205, 193, 193, 0.751);
  border: 3px solid #47430b;
  border-radius: 10px;
  color: rgb(15, 11, 11);
  width: 100%;
  padding: 10px;
}

.form-floating label {
  font-weight: bold;
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
