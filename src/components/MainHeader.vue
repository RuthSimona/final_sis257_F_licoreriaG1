<script setup lang="ts">
import { useAuthStore } from '@/stores/index'
const authStore = useAuthStore()
</script>

<template>
  <header class="site-header" style="padding: 10px 0">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-12 d-flex flex-wrap">
          <p class="d-flex me-4 mb-0">
            <i class="bi-person custom-icon animated infinite pulse me-2"></i>
            <strong class="text-dark simpsons-font" style="font-size: 18px"
              >Bienvenido a licoreria Mo'es</strong
            >
          </p>
        </div>
      </div>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg" style="background-color: black">
    <div class="container">
      <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-none ms-auto me-4">
        <i class="fa fa-sign-in custom-icon animated infinite pulse me-2"></i>
        Iniciar Sesión
      </RouterLink>
      <a v-else @click="authStore.logout()" class="btn custom-btn d-lg-none ms-auto me-4">
        <i class="fa fa-sign-out custom-icon animated infinite pulse me-2"></i>
        Salir
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav align-items-lg-center ms-auto me-lg-5">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link click-scroll nav-link-text">
              <i class="fa fa-home custom-icon animated infinite pulse me-2"></i>
              Inicio
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link click-scroll">
              <i class="fa fa-info-circle custom-icon animated infinite pulse me-2"></i>
              Acerca De
            </RouterLink>
          </li>
          <template v-if="authStore.token">
            <li class="nav-item">
              <RouterLink to="/categorias" class="nav-link click-scroll">
                <i class="fa fa-list custom-icon animated infinite pulse me-2"></i>
                Categorías
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/productos" class="nav-link click-scroll">
                <i class="fa fa-box custom-icon animated infinite pulse me-2"></i>
                Productos
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/clientes" class="nav-link click-scroll">
                <i class="fa fa-users custom-icon animated infinite pulse me-2"></i>
                Clientes
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/detalles" class="nav-link click-scroll">
                <i class="fa fa-shopping-cart custom-icon animated infinite pulse me-2"></i>
                Venta
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/usuarios" class="nav-link click-scroll">
                <i class="fa fa-user-friends custom-icon animated infinite pulse me-2"></i>
                Usuarios
              </RouterLink>
            </li>
            <li class="nav-item">
              <a class="nav-link click-scroll" href="#">
                <i class="fa fa-user-circle custom-icon animated infinite pulse me-2"></i>
                Hola {{ authStore.user }}
              </a>
            </li>
          </template>
        </ul>
        <RouterLink v-if="!authStore.token" to="/login" class="btn custom-btn d-lg-block d-none">
          <i class="fa fa-sign-in custom-icon animated infinite pulse me-2"></i>
          Iniciar Sesión
        </RouterLink>
        <a v-else @click="authStore.logout()" class="btn custom-btn d-lg-block d-none">
          <i class="fa fa-sign-out custom-icon animated infinite pulse me-2"></i>
          Salir
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>

@font-face {
  font-family: 'SimpsonsFont';
  src: url('@/assets/fonts/SimpsonsFont.ttf') format('truetype');
}

.simpsons-font {
  font-family: 'SimpsonsFont', sans-serif;
}

.custom-icon {
  font-size: 1.5rem;
}

/* Agrega un estilo para los iconos que tengan el contorno amarillo */
.custom-icon {
  color: white; /* Cambia el color de los iconos a blanco */
  filter: brightness(150%) saturate(200%); /* Ajusta el brillo y la saturación para un efecto fluorescente */
  transition: color 0.5s; /* Agrega una transición para suavizar el cambio de color */
}

/* Cambia el color del texto a amarillo cuando se haga hover */
.custom-icon:hover {
  color: yellow;
  animation: pulse 1s ease-in-out infinite, moveIcon 2s infinite; /* Agrega animación de pulsación y movimiento al pasar el cursor */
}

/* Define la animación de pulsación */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* Define la animación de movimiento */
@keyframes moveIcon {
  0% { transform: translate(0, 0); }
  50% { transform: translate(5px, -5px); }
  100% { transform: translate(0, 0); }
}

/* Estilo para los enlaces de navegación que contienen texto */
.nav-link-text {
  display: flex;
  align-items: center;
  color: white; /* Cambia el color del texto a blanco */
  transition: color 0.5s; /* Agrega una transición para suavizar el cambio de color */
}

/* Cambia el color del texto a amarillo cuando se haga hover */
.nav-link-text:hover {
  color: yellow;
}

.btn.custom-btn {
  background-color: transparent;
  border: none;
}

.navbar-nav .nav-item .nav-link:hover {
  color: yellow;
}

.animated {
  animation-duration: 2s;
  animation-fill-mode: both;
}

/* Define el número de iteraciones para las animaciones infinitas */
.infinite {
  animation-iteration-count: infinite;
}

/* Agrega la animación de pulsación */
.pulse {
  animation-name: pulse;
}
</style>