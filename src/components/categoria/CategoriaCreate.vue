<template>
  <div class="container-simpsons">
    <!-- Navegación de breadcrumb (actualmente vacía) -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <!-- Los ítems del breadcrumb irían aquí -->
      </ol>
    </nav>

    <!-- Sección del título -->
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center mt-5 mb-5">
        <h2 class="simpsons-font">Crear Nueva Categoría</h2>
      </div>
    </div>

    <!-- Sección del formulario para crear una nueva categoría -->
    <div class="row justify-content-center align-items-center">
      <form class="col-md-6" @submit.prevent="crearCategoria">
        <!-- Campo de entrada para el nombre de la categoría -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <!-- Campo de entrada para la descripción de la categoría -->
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="descripcion" placeholder="Descripción" required />
          <label for="descripcion">Descripción</label>
        </div>
        <!-- Botón para enviar el formulario -->
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <font-awesome-icon icon="fa-solid fa-floppy-disk" /> Crear
          </button>
        </div>
      </form>
    </div>

    <!-- Botón para volver atrás -->
    <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center mt-3">
        <button class="btn btn-link" @click="goBack">Volver</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'

// Define las propiedades usando TypeScript
const props = defineProps<{
  ENDPOINT_API: string
}>()

// Define constantes y variables reactivas
const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const descripcion = ref('')

// Función para manejar el envío del formulario y crear una nueva categoría
async function crearCategoria() {
  try {
    console.log('Datos enviados:', { nombre: nombre.value, descripcion: descripcion.value });
    const response = await http.post(ENDPOINT, { nombre: nombre.value, descripcion: descripcion.value });
    console.log('Respuesta del servidor:', response);
    router.push('/categorias');
  } catch (error) {
    console.error('Error al crear categoría:', error);
  }
}

// Función para volver a la página anterior
function goBack() {
  router.go(-1)
}
</script>

<style scoped>
/* Estilos para el contenedor con imagen de fondo y color de texto */
.container-simpsons {
  background-image: url('https://get.wallhere.com/photo/1920x1200-px-bar-beer-Homer-Simpson-Marge-Simpson-Moe-Szyslak-The-Simpsons-1270019.jpg');
  background-size: cover;
  color: rgb(44, 44, 7);
  padding: 50px 0;
}

/* Estilos para la fuente del título */
.simpsons-font {
  font-family: 'Bangers', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
}

.simpsons-font:hover {
  text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.7);
}

/* Estilos para los campos de entrada */
.form-floating input[type="text"],
.form-floating input[type="text"]:focus {
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid #f5ec42;
  border-radius: 5px;
  color: rgb(228, 5, 5);
}

/* Estilos para el botón principal */
.btn-primary {
  background-color: #ff7300;
  border: none;
}

.btn-primary:hover {
  background-color: #ff7f0e;
}

/* Estilos para el botón de enlace */
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
