<template>
  <div class="greetings">
    <h1 class="neon-text">{{ msg }}</h1>
    <h3>
      <span class="neon-link">Licoreria Moe's</span>
      <span class="neon-link">Sis257</span>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '¡Hola, sis257!'
    };
  }
};
</script>

<style scoped>
.greetings {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fd3b0b;
  padding: 1rem;
}

.neon-text {
  font-size: 2rem;
  color: #c42c2c;
  text-shadow: 0 0 10px #ff1100, 0 0 20px #ff1100, 0 0 30px #ff8800;
  margin-bottom: 2rem;
}

.neon-link {
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
}

</style>
