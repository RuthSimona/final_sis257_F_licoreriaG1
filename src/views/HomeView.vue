<script setup lang="ts"></script>

<template>
  <section class="hero-section" id="section_1">
    <div class="section-overlay"></div>

    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="hero-content">
          <small class="simpson-font hero-small-text">Proyecto de SIS-257</small>

          <h1 class="simpson-font hero-title">Licorería Moe's</h1>

          <a href="#section_2" class="hero-button">
            Comencemos
          </a>
        </div>

        <div class="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
          <div class="date-wrap">
            <h5 class="text-white">
              <i class="custom-icon bi-clock me-2"></i>
              15 de junio 2024
            </h5>
          </div>

          <div class="location-wrap mx-auto py-3 py-lg-0">
            <h5 class="text-white">
              <i class="custom-icon bi-geo-alt me-2"></i>
              Springfield
            </h5>
          </div>

          <div class="social-share">
            <ul class="social-icon d-flex align-items-center justify-content-center">
              <span class="text-white me-3">Redes:</span>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-facebook"></span>
                </a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-twitter"></span>
                </a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="video-wrap">
      <video autoplay loop muted class="custom-video" poster="">
        <source src="@/assets/video/coronas.mp4" type="video/mp4" />
        Moe's
      </video>
    </div>
  </section>

  <section class="about-section section-padding" id="section_2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
          <div class="services-info">
            <h2 class="simpson-font text-white mb-4">Moe's 2024</h2>

            <p class="simpson-font text-white">
              "Moe's Licorería: donde los sabores se encuentran con la diversión de Springfield.
              ¡Descubre un mundo de experiencias inolvidables, al estilo de Los Simpson!"
            </p>

            <h6 class="simpson-font text-white mt-4">Una experiencia única en nuestra licoreria mo'es.</h6>

            <p class="simpson-font text-white">
              "La cerveza alegra el corazón de Homero y las donas reconfortan el alma, en la Licoreria de Moe se
              encuentran tesoros que deleitan los sentidos y fortalecen los lazos de la familia Simpson."
            </p>

            <h6 class="simpson-font text-white mt-4">Una compra en la tienda estras Satisfecho y alegre.</h6>

            <p class="simpson-font text-white">
              En la Licoreira de Moe, cada cerveza cuenta una historia, cada cóctel despierta un recuerdo y cada
              encuentro es una oportunidad para celebrar la vida con camaradería y moderación.</p>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="about-text-wrap">
            <img src="@/assets/images/fondo.jpg" class="about-image img-fluid" />

            <div class="about-text-info d-flex">
              <div class="d-flex">
                <i class="about-text-icon bi-person"></i>
              </div>

              <div class="ms-4">
                <h3 class="simpson-font">Llamarada Homero.</h3>

                <p class="simpson-font mb-0">Lo más sabroso.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>


  <section class="artists-section" id="section_3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="simpson-font mb-4">Bebidas más Vendidas</h2>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img src="@/assets/images/CervezaDuff.jpg" class="artists-image img-fluid" />
            </div>
            <div class="artists-hover">
              <p class="simpson-font"><strong>Nombre:</strong> Cerveza Duff</p>
              <p class="simpson-font"><strong>Hecho:</strong> Springfield</p>
              <p class="simpson-font"><strong>Lata:</strong> litrera, R&amp;B</p>
              <hr />
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img src="@/assets/images/marge.jpeg" class="artists-image img-fluid" />
            </div>
            <div class="artists-hover">
              <p class="simpson-font"><strong>Nombre:</strong> botellas de vino</p>
              <p class="simpson-font"><strong>Hecho:</strong> Springfield</p>
              <p class="simpson-font"><strong>Botella de vidrio:</strong> litrera, R&amp;B</p>
              <hr />
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img src="@/assets/images/buzzcola.jpg" class="artists-image img-fluid" />
            </div>
            <div class="artists-hover">
              <p class="simpson-font"><strong>Nombre:</strong> Bebida energética</p>
              <p class="simpson-font"><strong>Exclusivo:</strong> Exclusivo de los Simpson</p>
              <p class="simpson-font"><strong>Importado:</strong> Springfield</p>
              <hr />
              <p class="simpson-font mb-0"><strong>Sitio web:</strong> <a href="#">buzzcola</a></p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img src="@/assets/images/moe.png" class="artists-image img-fluid" />
            </div>
            <div class="artists-hover">
              <p class="simpson-font"><strong>Nombre:</strong> Flaming Moe</p>
              <p class="simpson-font"><strong>Desde:</strong> 2002</p>
              <p class="simpson-font"><strong>Distribuidora:</strong> Taberna de Moe's</p>
              <hr />
              <p class="simpson-font mb-0"><strong>Sitio web:</strong> <a href="#">moes</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="schedule-section section-padding" id="section_4">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="simpson-font text-white mb-4">NUESTRA LICORERÍA MOE'S</h2>
        </div>
      </div>
    </div>
  </section>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Clientes Frecuentes</h2>
        <h3 class="section-subheading text-muted">buenbos clientes en portada</h3>
      </div>
      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-4">
          <!-- Portfolio item 1-->
          <div class="portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
              </div>
              <img class="img-fluid" src="@/assets/images/1.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Threads</div>
              <div class="portfolio-caption-subheading text-muted">cliente 1</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4">
          <!-- Portfolio item 2-->
          <div class="portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
              </div>
              <img class="img-fluid" src="@/assets/images/2.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Explore</div>
              <div class="portfolio-caption-subheading text-muted">CLiente 2</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4">
          <!-- Portfolio item 3-->
          <div class="portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
              </div>
              <img class="img-fluid" src="@/assets/images/3.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Finish</div>
              <div class="portfolio-caption-subheading text-muted">Cliente 3</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <!-- Portfolio item 4-->
          <div class="portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
              </div>
              <img class="img-fluid" src="@/assets/images/4.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Lines</div>
              <div class="portfolio-caption-subheading text-muted">CLiente 4</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
          <!-- Portfolio item 5-->
          <div class="portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
              </div>
              <img class="img-fluid" src="@/assets/images/5.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Southwest</div>
              <div class="portfolio-caption-subheading text-muted">Cleinte 5</div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <!-- Portfolio item 6-->
          <div class="portfolio-item">
            <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
              </div>
              <img class="img-fluid" src="@/assets/images/6.jpg" alt="..." />
            </a>
            <div class="portfolio-caption">
              <div class="portfolio-caption-heading">Window</div>
              <div class="portfolio-caption-subheading text-muted">Cliente 6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="pricing-section section-padding section-bg" id="section_5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h2 class="simpson-font text-center mb-4">Cerveza Duff</h2>
        </div>

        <div class="col-lg-6 col-12">
          <div class="pricing-thumb">
            <div class="d-flex">
              <div>
                <h3 class="simpson-font"><small>Llamarada moe's</small> 50 bs.</h3>

                <p class="simpson-font">Promociones:</p>
              </div>

              <p class="simpson-font pricing-tag ms-auto">Descuento <span>20%</span></p>
            </div>

            <ul class="simpson-font pricing-list mt-3">
              <li class="pricing-list-item">En las diferentes presentaciones</li>

              <li class="pricing-list-item">Entregas a domicilo</li>



              <li class="pricing-list-item">No te quedes sin tu Llamarada Moe</li>
            </ul>

            <a class="simpson-font link-fx-1 color-contrast-higher mt-4" href="ticket.html">
              <span>Comprar</span>
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div class="col-lg-6 col-12 mt-4 mt-lg-0">
          <div class="pricing-thumb">
            <div class="d-flex">
              <div>
                <h3 class="simpson-font"><small>Llamarada Homero</small> 55 bs.</h3>

                <p class="simpson-font">Promoción</p>
              </div>
              <p class="simpson-font pricing-tag ms-auto">Descuento <span>30%</span></p>
            </div>

            <ul class="simpson-font pricing-list mt-3">
              <li class="pricing-list-item">esata semana con descuentos</li>

              <li class="pricing-list-item">Bebida rica no te la pierdas</li>

              <li class="pricing-list-item">solo por hoy</li>



              <li class="pricing-list-item">Sin recargo y envio a domicilo</li>
            </ul>

            <a class="simpson-font link-fx-1 color-contrast-higher mt-4" href="ticket.html">
              <span>Comprar</span>
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="contact-section section-padding" id="section_6">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h2 class="simpson-font text-center mb-4"> ¿Sobre qué te puedo ayudar?</h2>

          <nav class="d-flex justify-content-center">
            <div class="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-ContactForm-tab" data-bs-toggle="tab"
                data-bs-target="#nav-ContactForm" type="button" role="tab" aria-controls="nav-ContactForm"
                aria-selected="false">
                <h5 class="simpson-font">Contactar</h5>
              </button>

              <button class="nav-link" id="nav-ContactMap-tab" data-bs-toggle="tab" data-bs-target="#nav-ContactMap"
                type="button" role="tab" aria-controls="nav-ContactMap" aria-selected="false">
                <h5 class="simpson-font">Google Maps</h5>
              </button>
            </div>
          </nav>

          <div class="tab-content shadow-lg mt-5" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-ContactForm" role="tabpanel"
              aria-labelledby="nav-ContactForm-tab">
              <form class="custom-form contact-form mb-5 mb-lg-0" action="#" method="post" role="form">
                <div class="contact-form-body">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <input type="text" name="contact-name" id="contact-name" class="form-control simpson-font"
                        placeholder="Nombre" required />
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                      <input type="email" name="contact-email" id="contact-email" pattern="[^ @]*@[^ @]*"
                        class="form-control simpson-font" placeholder="Email " required />
                    </div>
                  </div>

                  <input type="text" name="contact-company" id="contact-company" class="form-control simpson-font"
                    placeholder="Empresa" required />

                  <textarea name="contact-message" rows="3" class="form-control simpson-font" id="contact-message"
                    placeholder="Mensaje"></textarea>

                  <div class="col-lg-4 col-md-10 col-8 mx-auto">
                    <button type="submit" class="form-control simpson-font">Enviar Mensaje</button>
                  </div>
                </div>
              </form>
            </div>

            <div class="tab-pane fade" id="nav-ContactMap" role="tabpanel" aria-labelledby="nav-ContactMap-tab">
              <iframe class="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                width="100%" height="450" style="border: 0" allowfullscreen="true" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
              <!-- You can easily copy the embed code from Google Maps -> Share -> Embed a map // -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
body {
  background-color: #e6bc32;
  color: #333;
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

.simpson-font {
  font-family: 'Simpsonfont', sans-serif;
}

.hero-section {
  background-color: #ffca28;
  color: #333;
  padding: 100px 0;
  position: relative;
  text-align: center;
}

.hero-section .hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-section .hero-title {
  font-size: 3.5em;
  margin-bottom: 20px;
}

.hero-section .hero-button {
  background-color: #e53935;
  border: none;
  border-radius: 50px;
  color: rgb(237, 245, 122);
  font-size: 1.2em;
  padding: 10px 30px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.hero-section .hero-button:hover {
  background-color: #c62828;
}

.about-section {
  background-color: #424242;
  color: #ad2121;
  padding: 50px 0;
}

.about-section .about-image {
  border-radius: 10px;
}

.about-section .about-text-wrap {
  position: relative;
}

.about-section .about-text-info {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  bottom: 0;
  left: 0;
  padding: 20px;
  position: absolute;
  right: 0;
}

.artists-section {
  background-color: #cc9d1d;
  padding: 50px 0;
}

.artists-section .artists-thumb {
  background-color: rgb(243, 9, 9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

.artists-section .artists-image {
  transition: transform 0.3s ease;
}

.artists-section .artists-thumb:hover .artists-image {
  transform: scale(1.05);
}

.artists-section .artists-hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  bottom: 0;
  color: rgb(105, 0, 243);
  left: 0;
  opacity: 0;
  padding: 20px;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.3s ease;
}

.artists-section .artists-thumb:hover .artists-hover {
  opacity: 1;
}



.pricing-section .pricing-thumb {
  background-color: rgb(168, 72, 34);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.pricing-section .pricing-tag {
  background-color: #493d19;
  border-radius: 50px;
  color: #333;
  font-size: 1em;
  padding: 5px 10px;
}

.pricing-section .link-fx-1 {
  color: #e53935;
  text-decoration: none;
  transition: color 0.3s ease;
}

.pricing-section .link-fx-1:hover {
  color: #c62828;
}

.contact-section {
  background-color: #212121;
  color: rgb(22, 19, 182);
  padding: 50px 0;
}

.contact-section .nav-tabs .nav-link {
  border: none;
  color: #bdbdbd;
}

.contact-section .nav-tabs .nav-link.active {
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bold;
}

.contact-section .custom-form {
  background-color: #333;
  border-radius: 10px;
  padding: 30px;
}

.contact-section .form-control {
  background-color: #424242;
  border: none;
  border-radius: 50px;
  color: white;
  margin-bottom: 20px;
  padding: 10px 20px;
}

.contact-section .form-control:focus {
  background-color: #616161;
}

.contact-section button {
  background-color: #e53935;
  border: none;
  border-radius: 50px;
  color: rgb(190, 45, 45);
  padding: 10px 30px;
  transition: background-color 0.3s ease;
}

.contact-section button:hover {
  background-color: #c62828;
}
</style>
<style>
.portfolio-item {
  position: relative;
  overflow: hidden;
}

.portfolio-item img {
  transition: transform 0.5s ease;
}

.portfolio-item:hover img {
  transform: scale(1.1);
}

.modal-image {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(255, 222, 51, 0.9);
  /* Color amarillo característico */
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 35px;
  color: #e4980b;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  font-family: 'Patrick Hand', sans-serif;
  /* Fuente similar a la de Los Simpson */
}

.modal-close:hover,
.modal-close:focus {
  color: #feca1b;
  /* Color amarillo brillante */
  text-decoration: none;
  cursor: pointer;
}
</style>
