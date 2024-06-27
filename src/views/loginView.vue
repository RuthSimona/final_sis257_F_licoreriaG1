<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/index";

const usuario = ref("");
const clave = ref("");
const error = ref(false);

function onSubmit() {
  const authStore = useAuthStore();
  authStore.login(usuario.value, clave.value).catch(() => (error.value = true));
}
</script>

<template>
  <div class="my-5 pt-5" style="font-family: 'Comic Sans MS', cursive, sans-serif; background-color: #000; color: #fff;">
    <h1 class="text-center" style="font-size: 40px; color: yellow;">Iniciar Sesión</h1>
    <form class="form" @submit.prevent="onSubmit">
      <label class="form-label" style="color: yellow;">Usuario:</label>
      <input
        v-model="usuario"
        type="text"
        class="form-input"
        placeholder="Usuario"
        autofocus
        style="font-size: 18px; color: yellow;"
      />

      <label class="form-label" style="color: yellow;">Contraseña:</label>
      <input
        v-model="clave"
        type="password"
        class="form-input"
        placeholder="Contraseña"
        style="font-size: 18px; color: yellow;"
      />

      <p v-if="error" class="text-danger" style="color: red;">Usuario y/o contraseña incorrectos</p>
      <input type="submit" class="form-submit" value="Ingresar" style="background-color: #ffaa00; border: none; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; cursor: pointer;" />
    </form>
  </div>
</template>


<style>
.form {
  margin: 1.5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(23, 50, 71, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(221, 224, 13, 0.3);
}

.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}

.form-submit {
  background: #ee5007;
  border: none;
  border-radius: 5rem;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}
.my-5.pt-5 {
  font-family: 'Comic Sans MS', cursive, sans-serif;
  background-color: #000;
  color: #fff;
  /* Añade la propiedad de fondo aquí */
  background-image: url('https://p4.wallpaperbetter.com/wallpaper/707/999/775/the-simpsons-homer-simpson-moe-szyslak-wallpaper-preview.jpg'); /* Reemplaza esto con la URL de tu imagen */
  background-size: cover; /* Ajusta la imagen para cubrir todo el div */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
}
</style>




