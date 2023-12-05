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
  const questionNumber = 4;

  if (clickedOption.checked) {
    const soal4 = localStorage.getItem('soal' + questionNumber);
    if (soal4 && soal4 === clickedOption.value) {
      // Jika pilihan diklik lagi, maka batalkan ceklis
      clickedOption.checked = false;
      localStorage.removeItem('soal' + questionNumber);
    } else {
      localStorage.setItem('soal' + questionNumber, clickedOption.value);
    }
  }
};


export const nextPage = () => {
        var questionNumber = 4;
        var selectedOption = document.querySelector('input[name=q' + questionNumber + ']:checked');
        if (selectedOption) {
          var score4 = parseInt(selectedOption.value);
          localStorage.setItem('soal4', score4);

          if (questionNumber < 10) {
            window.location.href = '#/soal' + (questionNumber + 1);
          } 
        } else {
          alert('Pilih salah satu opsi sebelum melanjutkan.');
        }
      
};

   export const prevPage = () => {
      var questionNumber = 4;
      if (questionNumber > 1) {
        window.location.href = '#/soal' + (questionNumber - 1)
      } else {
        alert('Anda berada pada halaman pertama.');
      }

    };


const Soal4 = {
  async render() {
    return `
  <div class="card p-4">
        <div class="progress mb-4" style="width:40%; background-color: #2196f3">
      <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h5 id="quizNumber" class="mb-4"></h5>
    <h4 id="quizQuestion" class="mb-4"></h4>
    <form id="quizForm">
      <div class="form-group">
        <label class="radio-container">Iya, lebih dari biasanya
          <input type="radio" name="q4" value="4" id="q4_option4">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Sama saja seperti biasanya
          <input type="radio" name="q4" value="3" id="q4_option3">
          <span class="checkmark"></span>
      </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Kurang dari biasanya
          <input type="radio" name="q4" value="2" id="q4_option2">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Sangat berkurang dari biasanya
          <input type="radio" name="q4" value="1" id="q4_option1">
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
    fetchQuestionData(4);
    var selectedOption = localStorage.getItem('soal4');
  if (selectedOption) {
    document.getElementById('q4_option' + selectedOption).checked = true;
  }
      var score3 = localStorage.getItem('soal3');
      if (!score3) {
        // Jika skor untuk pertanyaan sebelumnya tidak ada, redirect ke back.html
        window.location.href = '#/back';
      }
     const radioButtons = document.querySelectorAll('input[name=q4]');
    radioButtons.forEach(button => {
    button.addEventListener('click', handleRadioClick);
    });
  },

};

export default Soal4;




