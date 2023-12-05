export const sharingFb = () => {
         var urlToShare = 'somen.com';
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(urlToShare), 'sharer', 'width=600,height=400');
};

export const sharingWa = () => {
        var message = 'Aku baru saja tes mengukur tingkat stress di website SOMEN, yuk ikutan!';
        var urlToShare = 'somen.com';
        window.open('https://wa.me/?text=' + encodeURIComponent(message + ' ' + urlToShare));
};

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

const Sedang = {
  async render() {
    return `
<br><br><br><br><br>
<div class="container">
    <div class="card text-center" id="bodyquiz">
        <div class="card-body">
            <img src="images/emot.png" class="emoticon" alt="Gambar emot"><br><br>
            <h2 class="card-title" id="h2hasilquiz">(Hasil: Stress anda dalam level sedang)</h2>
            <p class="card-text" id="phasilquiz">Jika Anda merasa bahwa tingkat stres Anda sedang, segera lakukan langkah-langkah untuk menjaga kesehatan mental. Tetapkan rutinitas harian yang teratur, jadwalkan waktu untuk bersantai dan melakukan kegiatan yang menyenangkan. Berbicaralah dengan orang terdekat Anda atau berkonsultasilah dengan profesional kesehatan mental untuk membantu mengelola stres Anda. Ingatlah untuk menjaga keseimbangan antara pekerjaan, waktu istirahat, dan waktu untuk diri sendiri agar tetap sehat secara mental dan emosional.</p>
           <div class="text-center"><br>
                <p>Yuk share pengalamanmu dari website ini</p>
                <a id="shareFb">
                    <img src="icons/facebook.png" alt="Facebook Logo" style="width: 30px; margin-right: 10px;">
                </a>
                <a id="shareWa">
                    <img src="icons/whatsapp.png" alt="WhatsApp Logo" style="width: 30px;">
                </a>
            </div>
        </div>
    </div>
 <br><br><br><br>

  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="hero-writer">Temukan Psikiater terdekat</h2>
        <p>Klik logo dibawah ini</p>
        <a id="lokasi">
           <img src="icons/lokasi.png" alt="Lokasi Logo" style="width: 60px; margin-right: 10px;">
        </a>        
      </div>
  </div>
</div><br><br>


 
    `;
  },

  async afterRender() {

 var score10 = localStorage.getItem('soal10');
      if (!score10) {

        window.location.href = '#/back';
      }
const fb = document.getElementById('shareFb');
fb.addEventListener('click', sharingFb);

const wa = document.getElementById('shareWa');
wa.addEventListener('click', sharingWa);

const gps = document.getElementById('lokasi');
gps.addEventListener('click', findLocation);
  
  },
};

export default Sedang;



