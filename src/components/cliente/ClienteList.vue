<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" />
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import http from '@/plugins/axios';
import router from '@/router';
import type { Cliente } from '@/models/cliente';

const props = defineProps<{
  ENDPOINT_API: string;
}>()

const ENDPOINT = props.ENDPOINT_API ?? '';
const clientes = ref<Cliente[]>([]);

async function getClientes() {
  clientes.value = await http.get(ENDPOINT).then((response) => response.data);
}

function toEdit(id: number) {
  router.push(`/clientes/editar/${id}`);
}

function formatFecha(fecha: string | number | Date) {
  return new Date(fecha).toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' });
}

async function toDelete(id: number) {
  const r = confirm('¿Está seguro que se desea eliminar el cliente?');
  if (r) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getClientes());
  }
}

onMounted(() => {
  getClientes();
});
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Clientes</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-12 text-center mt-3 mb-3">
        <h2 style="font-family: 'Comic Sans MS', cursive;">Lista de Clientes</h2>
      </div>
      <div class="col-12 text-center">
        <RouterLink to="/clientes/crear">
          <font-awesome-icon icon="fa-solid fa-plus" /> CREAR NUEVO
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Cédula de Identidad</th>
            <th scope="col">Fecha de Creación</th>
            <th scope="col">Fecha de Modificación</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cliente, index) in clientes" :key="cliente.id">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.apellido }}</td>
            <td>{{ cliente.cedulaIdentidad }}</td>
            <td>{{ formatFecha(cliente.fechaCreacion) }}</td>
            <td>{{ formatFecha(cliente.fechaModificacion) }}</td>
            <td>
              <button class="btn text-success" @click="toEdit(cliente.id)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn text-danger" @click="toDelete(cliente.id)">
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
