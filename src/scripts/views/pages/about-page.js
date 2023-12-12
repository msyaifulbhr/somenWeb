const About = {
  async render() {
    return `
<head>
    <title>SOMEN</title>
  <!-- Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet"
    type="text/css" />

  <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
 
</head>

<div class="container mt-70">
        <div class="row">
            <div class="col-lg-12">
                <h3 class="medium-header" id="h3about">
                    Cerita dibalik Somen
                </h3>
                <p class="primary-copy" id="ptitle">
                    Alasan Somen hadir mulai dari obrolan kecil sampai terbentuknya #sobatmental
                </p>
            </div>
        </div>
        <div class="row mt-30">
            <div class="col-lg-6">
                <p id="ps1">
                    Tingkat kesadaran masyarakat terhadap kesehatan mental semakin meningkat, namun masih terdapat hambatan dalam akses informasi dan bantuan yang diperlukan. Banyak individu yang mengalami kesulitan dalam memeriksa kesehatan mental mereka sendiri, sebagian karena stigma dan sebagian karena keterbatasan dalam menghubungi ahli kesehatan mental. Ini menciptakan situasi di mana banyak yang mungkin tidak memahami betapa pentingnya menjaga kesehatan mental mereka dan mencari bantuan jika diperlukan. Oleh karena itu, tim kami telah memilih untuk membangun aplikasi web kesehatan mental yang komprehensif, yang akan memberikan informasi lengkap tentang kesehatan mental, dan self-assessment tools untuk evaluasi diri. Dengan proyek ini, kami berharap dapat mengatasi kesulitan akses dan meningkatkan kesadaran masyarakat tentang pentingnya kesehatan mental serta memberikan bantuan yang diperlukan bagi individu yang membutuhkannya.
                </p>
            </div>
            <div class="col-lg-6">
                <img src="images/service1.png" class="img-fluid" alt="">
            </div>
        </div>
    </div>
    <div class="container mt-70">
        <div class="row">
            <div class="col-lg-6">
                <h3 class="medium-header mb-10">
                    Tim Kami
                </h3>
                <p class="primary-copy mb-30">
                    Dengan pengalaman yang cukup, kami berkomitmen untuk memberikan yang terbaik kepada pengguna Somen.
                </p>
            </div>
        </div>
        <div class="row mt-70">
            <div class="col-lg-6">
                <div class="col-lg-12 mb-20">
                    <div class="row">
                        <div class="col-lg-5" id="col5-about">
                            <div class="card">
                                <img src="images/eldy.png" class="avatar" alt="Eldy">
                            </div>
                        </div>
                        <div class="col-lg-7" id="col-about">
                            <div class="card-body-about">
                                <h5 class="card-title">Eldy Effendi</h5>
                                <p class="card-text">Front-End Developer</p>
                                <a href="https://www.linkedin.com/in/eldy-effendi/" class="btn btn-primary" target="_blank">Lihat Profil</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 mb-20">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="card">
                                <img src="images/default.jpg" class="avatar" alt="Ivan">
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="card-body-about">
                                <h5 class="card-title">Ivan Prastio</h5>
                                <p class="card-text">Back-End Developer</p>
                                <a href="https://www.linkedin.com/in/ivan-prastio-37a57929a" class="btn btn-primary" target="_blank">Lihat Profil</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="col-lg-12 mb-20">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="card">
                                <img src="images/fikri.jpeg" class="avatar" alt="Fikri">
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="card-body-about">
                                <h5 class="card-title">Fikri Haikal Dwi Putra Chaniago</h5>
                                <p class="card-text">Front-End Developer</p>
                                <a href="https://www.linkedin.com/in/fikrihaikaldwiputrach/" class="btn btn-primary" target="_blank">Lihat Profil</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 mb-20">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="card">
                                <img src="images/syaiful.jpg" class="avatar" alt="Syaiful">
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="card-body-about">
                                <h5 class="card-title">Muhamad Syaiful Bahri</h5>
                                <p class="card-text">Back-End Developer</p>
                                <a href="https://www.linkedin.com/in/msyaifulbhr/" class="btn btn-primary" target="_blank">Lihat Profil</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 mb-20">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="card">
                                <img src="images/default.jpg" class="avatar" alt="Ahmad">
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="card-body-about">
                                <h5 class="card-title">Ahmad Fauzi Ariyanto</h5>
                                <p class="card-text">Front-End Developer</p>
                                <a href="linkedin.com/in/ahmadfauziariyanto" class="btn btn-primary" target="_blank">Lihat Profil</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
          `;
  },

  async afterRender() {
    // isi nya
  },
};

export default About;
