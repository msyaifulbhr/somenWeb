export const findLocation = () => {
         if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              const mapsUrl = `https://www.google.com/maps/search/psikolog+terdekat/@${latitude},${longitude}`;

              window.open(mapsUrl, '_blank');
            },
            function (error) {
              Swal.fire({
                title: 'upss!',
                text: 'Gagal mendapatkan lokasi. Pastikan GPS Anda aktif!',
                icon: 'error',
              });
            }
          );
        } else {
          alert('Browser Anda tidak mendukung geolokasi.');
        }
      
};

export const scrollToSection2 = () => {
        $('html, body').animate(
          {
            scrollTop: $('#section2').offset().top,
          },
          'slow'
        );
      }

const Home = {
  async render() {
    return `
    <!-- Hero Section 1 -->
    <div class="bg">
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
        <button type="button" class="btn btn-primary rounded-pill" id="btnmain">Selengkapnya</button>
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
            <button type="button" class="btn btn-primary rounded-pill" id="btnkuis" onclick="window.location.href='#/mulai'">Ikuti Tes</button>
          </div>
        </div>
      </div>
    </section>
    </div>
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
            <button type="button" class="btn btn-primary rounded-pill" id="btn4" onclick="window.location.href='#/consul'">Konsul sekarang</button>
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
                    <button type="button" class="btn btn-primary rounded-pill" id="lokasi">Temukan sekarang</button>
          </div>
        </div>
      </div>
    </section>
            <!-- Article Section -->
    <article-bar></article-bar>
    `;
  },

  async afterRender() {
  window.scrollTo(0, 0);
  const gps = document.getElementById('lokasi')
    gps.addEventListener('click', findLocation);

  const gulir = document.getElementById('btnmain')
    gulir.addEventListener('click', scrollToSection2);
  },
};

export default Home;