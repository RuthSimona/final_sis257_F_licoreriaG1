<script setup lang="ts">
import { onMounted, ref } from 'vue';
import http from '@/plugins/axios';
import router from '@/router';
import type { Producto } from '@/models/producto';

const props = defineProps<{
  ENDPOINT_API: string;
}>()

const ENDPOINT = props.ENDPOINT_API ?? '';
const productos = ref<Producto[]>([]);

// Función para obtener los productos desde la API
async function getProductos() {
  try {
    const response = await http.get<Producto[]>(ENDPOINT); // Asegúrate de especificar el tipo de datos esperado aquí
    productos.value = response.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    // Manejar el error según sea necesario (mostrar mensaje de error, volver a intentar, etc.)
  }
}

// Función para redirigir a la página de edición de un producto
function toEdit(id: number) {
  router.push(`/productos/editar/${id}`);
}

// Función para formatear la fecha
function formatFecha(fecha: string | number | Date) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(fecha).toLocaleDateString(undefined, options);
}

// Función para eliminar un producto
async function toDelete(id: number) {
  const r = confirm('¿Está seguro que se desea eliminar el Producto?');
  if (r) {
    try {
      await http.delete(`${ENDPOINT}/${id}`);
      await getProductos(); // Actualizar la lista de productos después de la eliminación
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      // Manejar el error según sea necesario
    }
  }
}

// Cargar los productos al montar el componente
onMounted(() => {
  getProductos();
});
</script>

<template>
  <div class="container">
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Inicio</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Productos</li>
      </ol>
    </nav>

    <!-- Título -->
    <div class="row">
      <div class="col-12 text-center mt-3 mb-3">
        <h2 style="font-family: 'Comic Sans MS', cursive;">Lista de Productos</h2>
      </div>
      <!-- Botón para crear nuevo producto -->
      <div class="col-12 text-center">
        <router-link to="/productos/crear">
          <i class="fas fa-plus"></i> CREAR NUEVO
        </router-link>
      </div>
    </div>

    <!-- Tabla de productos -->
    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
            <th scope="col">Fecha de Creación</th>
            <th scope="col">Fecha de Modificación</th>
            <th scope="col">Categoría</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <!-- Iterar sobre los productos y mostrar cada fila -->
          <tr v-for="(producto, index) in productos" :key="producto.id">
            <td>{{ index + 1 }}</td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.precio }}</td>
            <td>{{ producto.stock }}</td>
            <td>{{ formatFecha(producto.fechaCreacion) }}</td>
            <td>{{ formatFecha(producto.fechaModificacion) }}</td>
            <td>{{ producto.categoria?.nombre }}</td> <!-- Usar '?.' para manejar la posible falta de categoría -->
            <td>
              <!-- Botones para editar y eliminar producto -->
              <button class="btn text-success" @click="toEdit(producto.id)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn text-danger" @click="toDelete(producto.id)">
                <i class="fas fa-trash"></i>
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
  background-color: rgba(207, 214, 213, 0.234);
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
