<template>
  <div class="container simpsons-background">
      <div class="row justify-content-center align-items-center">
      <div class="col-md-6 text-center mt-5 mb-5">
        <h2 class="simpsons-font">Editar Categoría</h2>
      </div>
    </div>

    <div class="row">
      <form @submit.prevent="editarCategoria">
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="nombre" placeholder="Nombre" required />
          <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="text" class="form-control" v-model="descripcion" placeholder="Descripcion" required />
          <label for="descripcion">Descripción</label>
        </div>
        <div class="text-center mt-3">
          <button type="submit" class="btn btn-primary btn-lg">
            <i class="fas fa-floppy-disk"></i> Guardar
          </button>
        </div>
      </form>
    </div>

    <div class="text-left">
      <button class="btn btn-link" @click="goBack">Volver</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import http from '@/plugins/axios'

export default {
  props: {
    ENDPOINT_API: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const ENDPOINT = props.ENDPOINT_API
    const nombre = ref('')
    const descripcion = ref('')
    const id = router.currentRoute.value.params['id']

    async function editarCategoria() {
      await http.patch(`${ENDPOINT}/${id}`, {
        nombre: nombre.value,
        descripcion: descripcion.value,
      })
      router.push('/categorias')
    }

    async function getCategoria() {
      await http.get(`${ENDPOINT}/${id}`).then((response) => {
        nombre.value = response.data.nombre,
        descripcion.value = response.data.descripcion
      })
    }

    function goBack() {
      router.go(-1)
    }

    getCategoria()

    return {
      nombre,descripcion,
      editarCategoria,
      goBack
    }
  }
}
</script>

<style>
.simpsons-background {
  background-image: url('https://get.wallhere.com/photo/1920x1200-px-bar-beer-Homer-Simpson-Marge-Simpson-Moe-Szyslak-The-Simpsons-1270019.jpg');
  background-size: cover;
  color: rgb(17, 17, 7);
  font-family: 'Bangers', cursive;
  padding-top: 50px; /* Agregar espacio adicional en la parte superior para mejorar la visualización de los elementos */
}

/* Para hacer los campos de edición un poco transparentes */
.form-control {
  background-color: rgba(255, 255, 255, 0.7); /* Ajusta el valor alpha (cuarto valor) para cambiar la transparencia */
  border: 1px solid #ced4da; /* Asegura que el borde sea visible */
  border-radius: 5px;
}

/* Para aumentar el tamaño de la imagen */
.simpsons-background::after {
  content: "";
  background-image: url('https://get.wallhere.com/photo/1920x1200-px-bar-beer-Homer-Simpson-Marge-Simpson-Moe-Szyslak-The-Simpsons-1270019.jpg');
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5; /* Ajusta la opacidad de la imagen */
  background-size: cover;
}
</style>
