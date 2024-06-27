<script setup lang="ts">
import { onMounted, ref, defineProps } from 'vue';
import http from '@/plugins/axios';
import { RouterLink } from 'vue-router';
import router from '@/router';
import type { Categoria } from '@/models/categoria';

var categorias = ref<Categoria[]>([])
async function getCategorias() {
  categorias.value = await http.get('categorias').then((response) => response.data)
}
onMounted(() => {
  getCategorias()
})

const props = defineProps<{
  ENDPOINT_API: string;
}>();
const ENDPOINT = props.ENDPOINT_API ?? '';
const nombre = ref('');
const precio = ref('');
const stock = ref('');
const idCategoria = ref('');
const id = router.currentRoute.value.params['id'];


async function editarProducto() {
  await http
    .patch(`${ENDPOINT}/${id}`, {
      nombre: nombre.value,
      precio: precio.value,
      stock: stock.value,
      idCategoria: idCategoria.value
    })
    .then(() => router.push('/productos'))
    .catch((error) => {
      console.error('Error al editar el producto:', error)
    })
}


async function getProducto() {
  await http.get(`${ENDPOINT}/${id}`).then((response) => {
    (nombre.value = response.data.nombre),
      (precio.value = response.data.precio),
      (stock.value = response.data.stock),
      (idCategoria.value = response.data.categoria.id)
  })
}

function goBack() {
  router.go(-1);
}

onMounted(() => {
  getProducto();
});
</script>

<template>
  <div class="fondo">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item">
          <RouterLink to="/productos">Productos</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar</li>
      </ol>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col-12 text-center mt-3 mb-3">
          <h2>Editar Producto</h2>
        </div>
      </div>

      <div class="row justify-content-center">
        <form class="col-lg-8 col-md-10 col-sm-12" @submit.prevent="editarProducto">
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
              <option v-for="categoria in categorias" :value="categoria.id" :key="categoria.id">{{ categoria.nombre }}</option>
            </select>
            <label for="categoria">Categoría</label>
          </div>
          <div class="text-center mt-3">
            <button type="submit" class="btn btn-primary btn-lg">
              <font-awesome-icon icon="fa-solid fa-floppy-disk" /> Guardar
            </button>
          </div>
        </form>
      </div>
      <div class="text-left mt-3">
        <button class="btn btn-link" @click="goBack">Volver</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fondo {
  background-image: url('@/assets/images/duuff.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh; /* Ajusta la altura para que cubra casi toda la pantalla */
  padding: 20px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.breadcrumb {
  background-color: #f8f9fa;
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

.btn-primary {
  background-color: #0056b3;
  color: #fff;
  border: none;
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  text-shadow: 1px 1px 2px #000000;
}

.btn-link {
  color: #0056b3;
  text-decoration: underline;
}
</style>
