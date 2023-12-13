export const sharingFb = () => {
         var urlToShare = 'https://somen.netlify.app/';
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(urlToShare), 'sharer', 'width=600,height=400');
};

export const sharingWa = () => {
        var message = 'Aku baru saja tes mengukur tingkat stress di website SOMEN, yuk ikutan!';
        var urlToShare = 'https://somen.netlify.app/';
        window.open('https://wa.me/?text=' + encodeURIComponent(message + ' ' + urlToShare));
};
const Rendah = {
  async render() {
    return `
    <br><br><br><br>
<div class="container">
    <div class="card text-center" id="bodyquiz">
        <div class="card-body">
            <img src="images/emot.png" class="emoticon" alt="emot"><br><br>
            <h2 class="card-title" id="h2hasilquiz">(Hasil: Stress anda dalam level rendah)</h2>
            <p class="card-text" id="phasilquiz">Jika Anda merasa bahwa tingkat stres Anda rendah, selamat! Anda telah mencapai tingkat kesehatan mental yang baik. Tetap pertahankan pola hidup sehat, jaga keseimbangan antara pekerjaan dan waktu istirahat, serta tetap terhubung dengan teman dan keluarga. Ingatlah untuk terus menjaga kesehatan mental Anda sebagai bagian integral dari kesejahteraan Anda.</p>
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
  
  },
};

export default Rendah;



