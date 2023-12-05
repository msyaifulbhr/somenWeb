// Fungsi untuk mengambil data pertanyaan dari file JSON
function fetchQuestionData(questionNumber) {
  return fetch('public/data/quis.json')
    .then(response => response.json())
    .then(data => {
      // Set pertanyaan pada elemen HTML
      document.getElementById('quizNumber').textContent = 'Pertanyaan ' + questionNumber + '/10';
      document.getElementById('quizQuestion').textContent = data[questionNumber - 1].soalquiz;
    })
    .catch(error => console.error('Error fetching quiz data:', error));
}

const handleRadioClick = (event) => {
  const clickedOption = event.target;
  const questionNumber = 10;

  if (clickedOption.checked) {
    const soal10 = localStorage.getItem('soal' + questionNumber);
    if (soal10 && soal10 === clickedOption.value) {
      // Jika pilihan diklik lagi, maka batalkan ceklis
      clickedOption.checked = false;
      localStorage.removeItem('soal' + questionNumber);
    } else {
      localStorage.setItem('soal' + questionNumber, clickedOption.value);
    }
  }
};


export const nextPage = () => {
        var questionNumber = 10;
        var selectedOption = document.querySelector('input[name=q' + questionNumber + ']:checked');
        if (selectedOption) {
          var score10 = parseInt(selectedOption.value);
          localStorage.setItem('soal10', score10);

          if (questionNumber < 10) {
            window.location.href = '#/soal' + (questionNumber + 1);
          } 
        } else {
          alert('Pilih salah satu opsi sebelum melanjutkan.');
        }
      var score1 = parseInt(localStorage.getItem('soal1')) || 0;
      var score2 = parseInt(localStorage.getItem('soal2')) || 0;
      var score3 = parseInt(localStorage.getItem('soal3')) || 0;
      var score4 = parseInt(localStorage.getItem('soal4')) || 0;
      var score5 = parseInt(localStorage.getItem('soal5')) || 0;
      var score6 = parseInt(localStorage.getItem('soal6')) || 0;
      var score7 = parseInt(localStorage.getItem('soal7')) || 0;
      var score8 = parseInt(localStorage.getItem('soal8')) || 0;
      var score9 = parseInt(localStorage.getItem('soal9')) || 0;
      var score10 = parseInt(document.querySelector('input[name=q10]:checked').value) || 0;

      // Menghitung total skor dari soal1 hingga soal10
      var totalScore = score1 + score2 + score3 + score4 + score5 + score6 + score7 + score8 + score9 + score10;

      // Kriteria pengalihan halaman berdasarkan skor
      if (totalScore < 20) {
        window.location.href = '#/rendah';
      } else if (totalScore >= 20 && totalScore < 30) {
        window.location.href = '#/sedang';
      } else if (totalScore >= 30) {
        window.location.href = '#/tinggi';
      }
};

   export const prevPage = () => {
      var questionNumber = 10;
      if (questionNumber > 1) {
        window.location.href = '#/soal' + (questionNumber - 1)
      } else {
        alert('Anda berada pada halaman pertama.');
      }

    };


const Soal10 = {
  async render() {
    return `
  <div class="card p-4">
        <div class="progress mb-4" style="width:100%; background-color: #2196f3">
      <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h5 id="quizNumber" class="mb-4"></h5>
    <h4 id="quizQuestion" class="mb-4"></h4>
    <form id="quizForm">
      <div class="form-group">
        <label class="radio-container">Iya, lebih dari biasanya
          <input type="radio" name="q10" value="4" id="q10_option4">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Sama saja seperti biasanya
          <input type="radio" name="q10" value="3" id="q10_option3">
          <span class="checkmark"></span>
      </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Kurang dari biasanya
          <input type="radio" name="q10" value="2" id="q10_option2">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Sangat berkurang dari biasanya
          <input type="radio" name="q10" value="1" id="q10_option1">
          <span class="checkmark"></span>
        </label>
      </div>
    </form>
    <div class="d-flex justify-content-between">
      <button class="btn btn-warning" id="prevPage">Previous</button>
      <button class="btn btn-primary" id="nextPage">Next</button>
    </div>
  </div>
    `;
  },

  async afterRender() {
    // Ambil elemen button dan tambahkan event listener
    const next = document.getElementById('nextPage');
    next.addEventListener('click', nextPage);

    const prev = document.getElementById('prevPage');
    prev.addEventListener('click', prevPage);

    // Fetch pertanyaan pertama
    fetchQuestionData(10);
    var selectedOption = localStorage.getItem('soal10');
  if (selectedOption) {
    document.getElementById('q10_option' + selectedOption).checked = true;
  }
      var score9 = localStorage.getItem('soal9');
      if (!score9) {

        window.location.href = '#/back';
      }
       const radioButtons = document.querySelectorAll('input[name=q10]');
    radioButtons.forEach(button => {
    button.addEventListener('click', handleRadioClick);
    });
  },

};

export default Soal10;




