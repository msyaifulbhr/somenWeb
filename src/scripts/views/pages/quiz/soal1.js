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
  const questionNumber = 1;

  if (clickedOption.checked) {
    const soal1 = localStorage.getItem('soal' + questionNumber);
    if (soal1 && soal1 === clickedOption.value) {
      // Jika pilihan diklik lagi, maka batalkan ceklis
      clickedOption.checked = false;
      localStorage.removeItem('soal' + questionNumber);
    } else {
      localStorage.setItem('soal' + questionNumber, clickedOption.value);
    }
  }
};

export const nextPage = () => {
        var questionNumber = 1;
        var selectedOption = document.querySelector('input[name=q' + questionNumber + ']:checked');
        if (selectedOption) {
          var score1 = parseInt(selectedOption.value);
          localStorage.setItem('soal1', score1);

          if (questionNumber < 10) {
            window.location.href = '#/soal' + (questionNumber + 1);
          } 
        } else {
          alert('Pilih salah satu opsi sebelum melanjutkan.');
        }
      
};


const Soal1 = {
  async render() {
    return `
      <div class="card p-4">
        <div class="progress mb-4" style="width:10%; background-color: #2196f3">
          <div class="progress-bar"  role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <!-- Element untuk menampilkan nomor dan pertanyaan -->
        <h5 id="quizNumber" class="mb-4"></h5>
        <h4 id="quizQuestion" class="mb-4"></h4>
        <form id="quizForm">
          <div class="form-group">
            <label class="radio-container">Iya, lebih dari biasanya
              <input type="radio" name="q1" value="4" id="q1_option4">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="form-group">
            <label class="radio-container">Sama saja seperti biasanya
              <input type="radio" name="q1" value="3" id="q1_option3">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="form-group">
            <label class="radio-container">Kurang dari biasanya
              <input type="radio" name="q1" value="2" id="q1_option2">
              <span class="checkmark"></span>
            </label>
          </div>
          <div class="form-group">
            <label class="radio-container">Sangat berkurang dari biasanya
              <input type="radio" name="q1" value="1" id="q1_option1">
              <span class="checkmark"></span>
            </label>
          </div>
        </form>
        <button class="btn btn-primary" id="nextPage">Next</button>
      </div>
    `;
  },

  async afterRender() {
    // Ambil elemen button dan tambahkan event listener
    const next = document.getElementById('nextPage');
    next.addEventListener('click', nextPage);

    // Fetch pertanyaan pertama
    fetchQuestionData(1);
    var selectedOption = localStorage.getItem('soal1');
  if (selectedOption) {
    document.getElementById('q1_option' + selectedOption).checked = true;
  }
 const radioButtons = document.querySelectorAll('input[name=q1]');
    radioButtons.forEach(button => {
    button.addEventListener('click', handleRadioClick);
    });
  },

};

export default Soal1;




