<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";
import http from '@/plugins/axios';
import type { Venta } from "@/models/ventadetalle";
import type { Cliente } from '@/models/cliente';

const props = defineProps<{
  ENDPOINT_API: string;
}>()

const ENDPOINT = props.ENDPOINT_API ?? '';
const clientes = ref<Cliente[]>([]);

async function getClientes() {
  clientes.value = await http.get('clientes').then((response) => response.data);
}

onMounted(() => {
  getClientes();
});

var ventas = ref<Venta[]>([]);

async function getVentas() {
  ventas.value = await http.get(ENDPOINT).then((response) => response.data);
}

function toEdit(id: number) {
  router.push(`/ventas/editar/${id}`);
}

async function toDelete(id: number) {
  const r = confirm('¿Está seguro que se desea eliminar la venta?');
  if (r) {
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
        <li class="breadcrumb-item active" aria-current="page">Ventas de Venta</li>
      </ol>
    </nav>

    <div class="row">
        <div class="col-12 text-center mt-3 mb-3">
        <h2 style="font-family: 'Comic Sans MS', cursive;">Lista de Ventas</h2>
      </div>
      <div class="col-12 text-center">
        <div class="row">
          <div class="col-12 text-center mt-3 mb-3">
            <router-link to="/ventas/crear" class="btn btn-primary btn-lg animate__animated animate__pulse">
              <font-awesome-icon icon="fa-solid fa-plus" />
              CREAR NUEVA VENTA
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">N°</th>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio por Unidad</th>
            <th scope="col">Total de Venta (bs.)</th>
            <th scope="col">Cliente</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(venta, index) in ventas" :key="venta.id">
            <td scope="row">{{ index + 1 }}</td>
            <td>{{ venta.producto.nombre }}</td>
            <td>{{ venta.cantidad }}</td>
            <td>{{ venta.precioUnitario }}</td>
            <td>{{ venta.totalVenta }}</td>
            <td>{{ venta.cliente.nombre }} {{ venta.cliente.apellido }}</td>
            <td>
              <!-- <button class="btn text-success" @click="toEdit(venta.id)">
                <i class="fas fa-edit"></i>
              </button> -->
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
  background-color: rgba(192, 211, 189, 0.212);
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgb(32, 29, 29);
}

.btn {
  margin-right: 5px;
}
</style>
