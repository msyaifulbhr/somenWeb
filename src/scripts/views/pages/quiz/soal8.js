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
  const questionNumber = 8;

  if (clickedOption.checked) {
    const soal8 = localStorage.getItem('soal' + questionNumber);
    if (soal8 && soal8 === clickedOption.value) {
      // Jika pilihan diklik lagi, maka batalkan ceklis
      clickedOption.checked = false;
      localStorage.removeItem('soal' + questionNumber);
    } else {
      localStorage.setItem('soal' + questionNumber, clickedOption.value);
    }
  }
};


export const nextPage = () => {
        var questionNumber = 8;
        var selectedOption = document.querySelector('input[name=q' + questionNumber + ']:checked');
        if (selectedOption) {
          var score8 = parseInt(selectedOption.value);
          localStorage.setItem('soal8', score8);

          if (questionNumber < 10) {
            window.location.href = '#/soal' + (questionNumber + 1);
          } 
        } else {
          alert('Pilih salah satu opsi sebelum melanjutkan.');
        }
      
};

   export const prevPage = () => {
      var questionNumber = 8;
      if (questionNumber > 1) {
        window.location.href = '#/soal' + (questionNumber - 1)
      } else {
        alert('Anda berada pada halaman pertama.');
      }

    };


const Soal8 = {
  async render() {
    return `
  <div class="card p-4">
        <div class="progress mb-4" style="width:80%; background-color: #2196f3">
      <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <h5 id="quizNumber" class="mb-4"></h5>
    <h4 id="quizQuestion" class="mb-4"></h4>
    <form id="quizForm">
      <div class="form-group">
        <label class="radio-container">Iya, lebih dari biasanya
          <input type="radio" name="q8" value="4" id="q8_option4">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Sama saja seperti biasanya
          <input type="radio" name="q8" value="3" id="q8_option3">
          <span class="checkmark"></span>
      </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Kurang dari biasanya
          <input type="radio" name="q8" value="2" id="q8_option2">
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="form-group">
        <label class="radio-container">Sangat berkurang dari biasanya
          <input type="radio" name="q8" value="1" id="q8_option1">
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
    fetchQuestionData(8);
    var selectedOption = localStorage.getItem('soal8');
  if (selectedOption) {
    document.getElementById('q8_option' + selectedOption).checked = true;
  }
      var score7 = localStorage.getItem('soal7');
      if (!score7) {

        window.location.href = '#/back';
      }
       const radioButtons = document.querySelectorAll('input[name=q8]');
    radioButtons.forEach(button => {
    button.addEventListener('click', handleRadioClick);
    });
  },

};

export default Soal8;




