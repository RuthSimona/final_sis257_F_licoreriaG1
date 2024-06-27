<template>
  <div class="about">
    <div class="video-wrap">
      <video autoplay loop muted class="custom-video" poster="">
        <source src="@/assets/video/1.mp4" type="video/mp4" />
        Moe's
      </video>
    </div>
    <div class="content">
      <h3>LICORERIA MOE'S es una Licoreria que permite embriagarte con sus bebidas</h3>
    </div>
  </div>
</template>

<style>
.about {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  text-align: center;
}

h3 {
  font-family: Arial, sans-serif;
  color: #333;
  font-size: 1.5em;
}
</style>
