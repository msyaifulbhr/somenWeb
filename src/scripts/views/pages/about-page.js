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
            <div class="col-lg-6">
                <div class="col-lg-12 mb-20">
                    <div class="col-lg-2 team-item">
                        <div class="card">
                            <img src="images/default.jpg" class="avatar" alt="Eldy">
                        </div>
                        <div class="col-lg-10">
                            <div class="card-body">
                                <h5 class="card-title">Eldy Efendy</h5>
                                <p class="card-text">Front-End Developer</p>
                                <a href="#" class="btn btn-primary">Lihat Profil</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 mb-20">
                    <div class="col-lg-2 team-item">
                        <div class="card">
                            <img src="images/default.jpg" class="avatar" alt="Ivan">
                        </div>
                        <div class="col-lg-10">
                            <div class="card-body">
                                <h5 class="card-title">Ivan Prastio</h5>
                                <p class="card-text">Back-End Developer</p>
                                <a href="#" class="btn btn-primary">Lihat Profil</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="col-lg-12 mb-20">
                    <div class="col-lg-2 team-item">
                        <div class="card">
                            <img src="images/default.jpg" class="avatar" alt="Fikri">
                        </div>
                        <div class="col-lg-10">
                            <div class="card-body">
                                <h5 class="card-title">Fikri Haikal Dwi Putra Chaniago</h5>
                                <p class="card-text">Front-End Developer</p>
                                <a href="#" class="btn btn-primary">Lihat Profil</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 mb-20">
                    <div class="col-lg-2 team-item">
                        <div class="card">
                            <img src="images/default.jpg" class="avatar" alt="Syaiful">
                        </div>
                        <div class="col-lg-10">
                            <div class="card-body">
                                <h5 class="card-title">Muhamad Syaiful Bahri</h5>
                                <p class="card-text">Front-End Developer</p>
                                <a href="#" class="btn btn-primary">Lihat Profil</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 mb-20">
                    <div class="col-lg-2 team-item">
                        <div class="card">
                            <img src="images/default.jpg" class="avatar" alt="Ahmad">
                        </div>
                        <div class="col-lg-10">
                            <div class="card-body">
                                <h5 class="card-title">Ahmad Fauzi Ariyanto</h5>
                                <p class="card-text">Front-End Developer</p>
                                <a href="#" class="btn btn-primary">Lihat Profil</a>
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
