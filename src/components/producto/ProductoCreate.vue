<script setup lang="ts">
import { onMounted, ref } from 'vue'
import http from '@/plugins/axios'
import router from '@/router'
import type { Categoria } from '@/models/categoria';

var categorias = ref<Categoria[]>([])
async function getCategorias() {
  categorias.value = await http.get('categorias').then((response) => response.data)
}
onMounted(() => {
  getCategorias()
})

const props = defineProps<{
  ENDPOINT_API: string
}>()

const ENDPOINT = props.ENDPOINT_API ?? ''
const nombre = ref('')
const precio = ref('')
const stock = ref('')
const idCategoria = ref('')

async function crearProducto() {
  await http.post(ENDPOINT, { nombre: nombre.value, precio: precio.value, stock: stock.value, idCategoria: idCategoria.value })
    .then(() => router.push('/productos'))
}

function goBack() {
  router.go(-1)
}
</script>

<template>
  <div class="container simpsons-style">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb simpsons-breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/productos">Productos</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Crear</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-12 text-center mt-3 mb-3">
        <h2>Crear Nuevo Producto</h2>
      </div>
    </div>

    <div class="row justify-content-center">
      <form class="col-6" @submit.prevent="crearProducto">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="precio" placeholder="Precio" required />
          <label for="precio">Precio</label>
        </div>
        <div class="form-floating mb-3">
          <input type="number" class="form-control" v-model="stock" placeholder="Stock" required />
          <label for="stock">Stock</label>
        </div>
        <div class="form-floating mb-3">
          <select v-model="idCategoria" class="form-select">
            <option v-for="categoria in categorias" :value="categoria.id" :key="categoria.id">{{ categoria.nombre }}
            </option>
          </select>
          <label for="categoria">Categoría</label>
        </div>

        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg simpsons-button">
            <font-awesome-icon icon="fa-solid fa-floppy-disk" /> Crear
          </button>
        </div>
      </form>
    </div>
    <div class="text-left mt-3">
      <button class="btn btn-link simpsons-back" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<style scoped>
.simpsons-style {
  background-image: url('@/assets/images/duuff.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh; /* Ajusta la altura para que cubra casi toda la pantalla */
  padding: 20px;
}

.simpsons-breadcrumb {
  background-color: #ffd700;
}

h2 {
  color: #0056b3;
  text-shadow: 2px 2px 4px #000000;
}

.form-floating {
  margin-bottom: 1.5rem;
}

.form-control {
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #fdd835;
}

.form-select {
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid #fdd835;
}

.simpsons-button {
  background-color: #0056b3;
  color: #fff;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  text-shadow: 1px 1px 2px #000000;
}

.simpsons-back {
  color: #fdd835;
  text-decoration: underline;
}
</style>
