const Consul = {
  async render() {
    return `
    <h3 id="titlekonsul">Sumber Konseling Mental Gratis</h3>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="cardkonsul">
          <img src="images/konsul112.jpeg" class="card-img-top" alt="Gambar 1">
          <div class="card-body">
            <h5 class="card-title">Layanan darurat 112</h5>
            <p class="card-text">Layanan darurat yang bisa menghubungkanmu dengan Kemenkes</p>
            <a href="https://layanan112.kominfo.go.id/" class="btn btn-primary" target="_blank">Kunjungi</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="cardkonsul">
          <img src="images/konsulbagikta.jpeg" class="card-img-top" alt="Gambar 2">
          <div class="card-body">
            <h5 class="card-title">Bagi Kata</h5>
            <p class="card-text">Layanan yang bisa menghubungkanmu dengan kontributor terpercaya</p>
            <a href="https://bagikata.com/" class="btn btn-primary" target="_blank">Kunjungi</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="cardkonsul">
          <img src="images/konsulbgcerita.jpeg" class="card-img-top" alt="Gambar 3">
          <div class="card-body">
            <h5 class="card-title">Bagi Cerita</h5>
            <p class="card-text">Konseling kesehatan mental dengan berbagi cerita bersama konselor professional</p>
            <a href="https://berbagicerita.id/web/" class="btn btn-primary" target="_blank">Kunjungi</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="cardkonsul">
          <img src="images/konsulhati.jpeg" class="card-img-top" alt="Gambar 4">
          <div class="card-body">
            <h5 class="card-title">Hati Plong</h5>
            <p class="card-text">Menyediakan tempat yang aman untuk kamu bercerita dengan fitur Curhat Line</p>
            <a href="https://www.hatiplong.com/curhat-line/" class="btn btn-primary" target="_blank">Kunjungi</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="cardkonsul">
          <img src="images/konsulteman.jpeg" class="card-img-top" alt="Gambar 5">
          <div class="card-body">
            <h5 class="card-title">Teman Curhat</h5>
            <p class="card-text">Aplikasi layanan konseling untukmu yang mudah dan nyaman untuk digunakan</p>
            <a href="https://temancurhat.app/" class="btn btn-primary" target="_blank">Kunjungi</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div class="cardkonsul">
          <img src="images/konsulunala.jpeg" class="card-img-top" alt="Gambar 6">
          <div class="card-body">
            <h5 class="card-title">Unala Youth</h5>
            <p class=""card-text">Layanan kesehatan ramah remaja dengan dokter, Free konsultasi psikolog</p>
            <a href="https://www.instagram.com/unala_youth/" class="btn btn-primary" target="_blank">Kunjungi</a>
          </div>
        </div>
      </div>
    </div>
  </div>



          `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
  },
};

export default Consul;
