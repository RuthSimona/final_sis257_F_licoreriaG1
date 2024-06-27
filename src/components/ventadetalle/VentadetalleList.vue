<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";
import http from '@/plugins/axios';
import type { Venta } from "@/models/ventadetalle";
import type { Detalle } from "@/models/venta";

const props = defineProps<{
  ENDPOINT_API: string;
}>()

const ENDPOINT = props.ENDPOINT_API ?? '';
var ventas = ref<Venta[]>([]);

async function getVentas() {
  ventas.value = await http.get(ENDPOINT).then((response) => response.data);
}

var detalles = ref<Detalle[]>([]);
async function getDetalles() {
  detalles.value = await http.get('clientes').then((response) => response.data);
}
onMounted(() => {
  getDetalles();
});

function toEdit(id: number) {
  router.push(`/ventas/editar/${id}`);
}

async function toDelete(id: number) {
  var r = confirm('¿Está seguro que se desea eliminar la venta?');
  if (r == true) {
    await http.delete(`${ENDPOINT}/${id}`).then(() => getVentas());
  }
}

onMounted(() => {
  getVentas();
});
</script>

<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <RouterLink to="/">Inicio</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Ventas</li>
      </ol>
    </nav>

    <div class="row">
      <div class="col-12 text-center mt-3 mb-3"></div>
      <h2>Lista de Ventas</h2>
      <div class="col-12">
        <RouterLink to="/ventas/crear">
          <font-awesome-icon icon="fa-solid fa-plus" /> CREAR NUEVO
        </RouterLink>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Código de Cliente</th>
            <th scope="col">Cliente</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha de Venta</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(venta, index) in ventas" :key="venta.id">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ venta.cliente.id }}</td>
            <td>{{ venta.cliente.nombre }}</td>
            <td>{{ venta.cliente.apellido }}</td>
            <td>{{ venta.fechaVenta }}</td>
            <td>
              <button class="btn text-success" @click="toEdit(venta.id)">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn text-danger" @click="toDelete(venta.id)">
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

.table {
  background-color: rgba(44, 192, 15, 0.212);
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgb(32, 29, 29);
}

.btn {
  margin-right: 5px;
}
</style>
