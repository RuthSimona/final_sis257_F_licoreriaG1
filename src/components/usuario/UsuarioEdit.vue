<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue';
import http from '@/plugins/axios';
import router from '@/router';

const props = defineProps<{
  ENDPOINT_API: string;
}>();
const ENDPOINT = props.ENDPOINT_API ?? '';
const usuario = ref('');
const clave = ref('');
const email = ref('');
const rol = ref('');
const id = router.currentRoute.value.params['id'];

async function editarUsuario() {
  try {
    await http.patch(`${ENDPOINT}/${id}`, {
      usuario: usuario.value,
      clave: clave.value,
      email: email.value,
      rol: rol.value 
    });
    router.push('/usuarios');
  } catch (error) {
    console.error('Error al editar el Usuario:', error);
  }
}

async function getUsuario() {
  try {
    const response = await http.get(`${ENDPOINT}/${id}`);
    usuario.value = response.data.usuario;
    clave.value = response.data.clave;
    email.value = response.data.email;
    rol.value = response.data.rol;
  } catch (error) {
    console.error('Error al obtener el Usuario:', error);
  }
}

function goBack() {
  router.go(-1);
}

onMounted(() => {
  getUsuario();
});
</script>

<template>
  <div class="container">
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/">Inicio</RouterLink></li>
        <li class="breadcrumb-item"><RouterLink to="/usuarios">Usuarios</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <!-- Título de la página -->
    <div class="row">
      <div class="col-12 text-center mt-3 mb-3">
        <h2 class="simpsons-font">Editar Usuario</h2>
      </div>
    </div>

    <!-- Formulario de edición de usuario -->
    <div class="row justify-content-center">
      <form class="col-md-6" @submit.prevent="editarUsuario">
        <!-- Campo Usuario -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="usuario" placeholder="Usuario" required />
          <label for="usuario">Usuario</label>
        </div>
        <!-- Campo Clave -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="clave" placeholder="Clave" required />
          <label for="clave">Clave</label>
        </div>
        <!-- Campo Email -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="email" placeholder="Email" required />
          <label for="email">Email</label>
        </div>
        <!-- Campo Rol -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="rol" placeholder="Rol" required />
          <label for="rol">Rol</label>
        </div>
        <!-- Botón de guardar -->
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <i class="fas fa-save"></i> Guardar
          </button>
        </div>
      </form>
    </div>

    <!-- Botón de volver -->
    <div class="row justify-content-center mt-3">
      <div class="col-md-6 text-center">
        <button class="btn btn-link" @click="goBack">Volver</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-image: url('https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/bart-prank-texts-moe-on-the-simpsons.jpg?q=70&fit=crop&w=825&dpr=1');
  background-size: cover;
  background-position: center;
  color: rgb(44, 44, 7);
  padding: 50px 0;
  min-height: 100vh;
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
