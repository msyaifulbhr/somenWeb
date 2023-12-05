// Export fungsi startQuiz agar dapat diakses dari luar modul
export const startQuiz = () => {
  // Hapus cache skor sebelumnya
  for (let i = 1; i <= 10; i++) {
    localStorage.removeItem('soal' + i);
  }
  // Redirect ke soal 1
  window.location.href = '#/soal1';
};

const Mulai = {
  async render() {
    return `
      <div class="card p-4" id="cardmulai">
        <img id="gambarmulai" src="images/mulai.jpg">
        <h5 class="mb-4" id="labelmulai">Selamat datang! Klik tombol "Mulai" untuk memulai tes.</h5>
        <p id="pmulai">Tes ini dapat menilai tingkat stres yang mungkin Anda alami.<br>
        Hasil tes ini akan memberikan wawasan yang berharga<br>
       untuk memahami kondisi kesehatan mental Anda pada saat ini.</p>
        <button class="btn btn-primary" id="btnmulai">Mulai</button>
      </div>
    `;
  },

  async afterRender() {
    // Ambil elemen button dan tambahkan event listener
    const btnMulai = document.getElementById('btnmulai');
    btnMulai.addEventListener('click', startQuiz);
  },
};

export default Mulai;



