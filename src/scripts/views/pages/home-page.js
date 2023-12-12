const Home = {
  async render() {
    return `
    <!-- Hero Section 1 -->
    <section class="hero-section d-flex align-items-center" id="section1">
      <div class="container">
        <div class="row mx-lg-auto mt-lg-5" id="hero-content">
          <div class="col-md-8 col-lg-6 order-md-2 d-flex align-items-center ml-auto mb-3 mx-md-auto">
            <img src="images/hero.png" alt="Hero Image 1" class="img-fluid hero-img mt-lg-5" id="hero-img">
          </div>
          <div class="col-md-12 col-lg-6 order-md-1">        
            <h1 id="hero-welcome">Selamat datang Sobat Mental,</h1>
            <h2 id="hero-writer">Atasi Masalah Kesehatan<br />
              Mentalmu & Raih Kehidupan<br />
              yang Lebih Bahagia!</h2>
            <p id="hero-desc">
            Saatnya kita bersama-sama menghadapinya dan mengambil<br />
            langkah untuk meningkatkan kualitas hidup kita.
            </p>
            <!-- Tombol Selengkapnya yang menggulir ke section 2 -->
            <button type="button" class="btn btn-primary rounded-pill" id="btnmain" onclick="scrollToSection2()">Selengkapnya</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Hero Section 2 -->
    <section class="hero-section" id="section2">
      <div class="container">
        <div class="row mx-lg-auto mt-lg-5" id="hero-content">
          <div class="col-md-6 order-md-1 d-flex align-items-center ml-auto mb-3 mx-md-auto">
            <img src="images/service1.png" alt="Hero Image 2" class="img-fluid" id="hero-img" />
          </div>
          <div class="col-md-6 order-md-2 m-md-auto">
            <h1 id="hero-title">Periksalah<br />
              Kesehatan Mentalmu
            </h1>
            <p id="hero-desc">
              Luangkan waktu sejenak untuk mengevaluasi keadaan<br />
              pikiran anda.
            </p>
            <button type="button" class="btn btn-primary rounded-pill" id="btn4" onclick="window.location.href='mulai.html'">Ikuti Tes</button>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Hero Section 3 -->
    <section class="hero-section" id="section3">
      <div class="container">
        <div class="row mx-lg-auto mt-lg-5" id="hero-content">
          <div class="col-md-6 order-md-2 d-flex align-items-center ml-auto mb-3 mx-md-auto">
            <img src="images/service2.jpg" alt="Hero Image 3" class="img-fluid" id="hero-img" />
          </div>
          <div class="col-md-6 order-md-1 m-md-auto">
            <h1 id="hero-title">Konsultasi Gratis</h1>
            <p id="hero-desc">
              Ambillah langkah bijak dengan konsultasi personal<br />
              untuk solusi terbaik dan keseimbangan hidup.
            </p>
            <button type="button" class="btn btn-primary rounded-pill" id="btn4" onclick="window.location.href=''">Konsul sekarang</button>
          </div>
        </div>
      </div>
    </section>

    
    <!-- Hero Section 4 -->
    <section class="hero-section" id="section4">
      <div class="container">
        <div class="row mx-lg-auto mt-lg-5" id="hero-content">
          <div class="col-md-6 order-md-1 d-flex align-items-center ml-auto mb-3 mx-md-auto">
            <img src="images/service3.jpg" alt="Hero Image 4" class="img-fluid" id="hero-img" />
          </div>
          <div class="col-md-6 order-md-2 m-md-auto">
            <h1 id="hero-title">Temukan Bantuan <br />di Sekitarmu</h1>
            <p id="hero-desc">Menjelajahi somber daya dan dukungan<br />yang ada di lingkungan Anda</p>
            <button type="button" class="btn btn-primary rounded-pill" id="btn4" onclick="findLocation()">Temukan sekarang</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Section -->
    <article-bar></article-bar>
    `;
  },

  async afterRender() {
    return `
    `;
  },
};

export default Home;
