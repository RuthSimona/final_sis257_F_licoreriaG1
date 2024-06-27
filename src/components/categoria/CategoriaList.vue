<script setup lang="ts">
import type { Categoria } from "@/models/categoria";
import router from "@/router";
import { onMounted, ref } from "vue";
import http from '@/plugins/axios';

const props = defineProps<{
  ENDPOINT_API: string
}>()
const ENDPOINT = props.ENDPOINT_API ?? ''
var categorias = ref<Categoria[]>([])

async function getCategorias() {
  try {
    const response = await http.get(ENDPOINT)
    categorias.value = response.data
  } catch (error) {
    console.error("Error fetching categories:", error)
  }
}

function toEdit(id: number) {
  router.push(`/categorias/editar/${id}`)
}

function redirectToOtherTable(id: number) {
  router.push(`/categorias/listar/?producto=${id}`)
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la categoría?')
  if (r) {
    try {
      await http.delete(`${ENDPOINT}/${id}`)
      await getCategorias()
    } catch (error) {
      console.error("Error deleting category:", error)
    }
  }
}

onMounted(() => {
  getCategorias()
})

// Función para cambiar el estilo del título h2 a Comic Sans MS
function cambiarEstiloTitulo() {
  const titulo = document.querySelector('h2');
  if (titulo) {
    titulo.style.fontFamily = 'Comic Sans MS';
  }
}

// Llamar a la función al cargar el componente
onMounted(() => {
  cambiarEstiloTitulo();
})
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Categorías</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-12 text-center mt-3 mb-3">
        <h2>Lista de Categorías</h2>
      </div>
      <div class="col-12 text-center">
        <RouterLink to="/categorias/crear">
          <font-awesome-icon icon="fa-solid fa-plus" style="font-size: 40px;" /> <strong>CREAR NUEVA CATEGORÍA</strong>
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">DESCRIPCIÓN</th>
            <th scope="col">ACCIÓN</th>
            <th scope="col">VER PRODUCTOS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(categoria, index) in categorias" :key="categoria.id">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ categoria.nombre }}</td>
            <td>{{ categoria.descripcion }}</td>
            <td>
              <button class="btn text-success" @click="toEdit(categoria.id)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn text-danger" @click="toDelete(categoria.id)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
            <td>
              <button class="btn text-info" @click="redirectToOtherTable(categoria.id)">
                <i class="fas fa-eye"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table {
  background-color: rgba(44, 192, 15, 0.212);
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgb(32, 29, 29);
}

.btn {
  margin-right: 5px;
}

.table {
  background-color: rgba(22, 165, 129, 0.055);
  border: 1px solid black; /* Añadido para hacer que el borde de la tabla sea negro */
}

.table thead th,
.table tbody td {
  border: 1px solid black; /* Añadido para que todos los bordes de las celdas sean negros */
}

.btn {
  margin-right: 5px;
}
</style>
