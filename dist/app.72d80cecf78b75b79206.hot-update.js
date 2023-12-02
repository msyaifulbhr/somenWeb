"use strict";
self["webpackHotUpdatesomenweb"]("app",{

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_quiz_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/quiz.css */ "./src/styles/quiz.css");
/* harmony import */ var _styles_artikel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/artikel.css */ "./src/styles/artikel.css");






document.addEventListener('DOMContentLoaded', function() {
    // Pastikan kode di dalam event ini dijalankan setelah halaman selesai dimuat
    const btn4 = document.getElementById('btn4');
    if (btn4) {
        btn4.addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    
                    const mapsUrl = `https://www.google.com/maps/search/psikolog+terdekat/@${latitude},${longitude}`;
                    
                    window.open(mapsUrl, '_blank');
                }, function(error) {
                    alert('Gagal mendapatkan lokasi. Pastikan GPS Anda aktif.');
                });
            } else {
                alert('Browser Anda tidak mendukung geolokasi.');
            }
        });
    } 
});

document.addEventListener("DOMContentLoaded", function() {
  // Set checkbox state based on local storage
  var selectedOption = localStorage.getItem('soal1');
  if (selectedOption) {
    document.getElementById('q1_option' + selectedOption).checked = true;
  }
});

document.addEventListener("DOMContentLoaded", function () {
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

  // Load pertanyaan pertama
  fetchQuestionData(1);
});

function nextPage() {
  var questionNumber = 1;
  var selectedOption = document.querySelector('input[name=q' + questionNumber + ']:checked');
  if (selectedOption) {
    var score1 = parseInt(selectedOption.value);
    localStorage.setItem('soal1', score1);

    if (questionNumber < 10) {
      window.location.href = 'soal' + (questionNumber + 1) + '.html';
    } else {
      // Jika ini adalah halaman terakhir (soal 10), pindah ke halaman hasil
      window.location.href = 'hasil.html';
    }
  } else {
    alert('Pilih salah satu opsi sebelum melanjutkan.');
  }
}



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cd5e3e1eb34e981dcddc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjcyZDgwY2VjZjc4Yjc1Yjc5MjA2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0Q7QUFDQTtBQUNFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2RixTQUFTLEdBQUcsVUFBVTtBQUNuSDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7VUN2RUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb21lbndlYi8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3NvbWVud2ViL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9tYWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3F1aXouY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvYXJ0aWtlbC5jc3MnXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gUGFzdGlrYW4ga29kZSBkaSBkYWxhbSBldmVudCBpbmkgZGlqYWxhbmthbiBzZXRlbGFoIGhhbGFtYW4gc2VsZXNhaSBkaW11YXRcclxuICAgIGNvbnN0IGJ0bjQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuNCcpO1xyXG4gICAgaWYgKGJ0bjQpIHtcclxuICAgICAgICBidG40LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXRpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcHNVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC9wc2lrb2xvZyt0ZXJkZWthdC9AJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihtYXBzVXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdHYWdhbCBtZW5kYXBhdGthbiBsb2thc2kuIFBhc3Rpa2FuIEdQUyBBbmRhIGFrdGlmLicpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnQnJvd3NlciBBbmRhIHRpZGFrIG1lbmR1a3VuZyBnZW9sb2thc2kuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgLy8gU2V0IGNoZWNrYm94IHN0YXRlIGJhc2VkIG9uIGxvY2FsIHN0b3JhZ2VcclxuICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29hbDEnKTtcclxuICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxMV9vcHRpb24nICsgc2VsZWN0ZWRPcHRpb24pLmNoZWNrZWQgPSB0cnVlO1xyXG4gIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gRnVuZ3NpIHVudHVrIG1lbmdhbWJpbCBkYXRhIHBlcnRhbnlhYW4gZGFyaSBmaWxlIEpTT05cclxuICBmdW5jdGlvbiBmZXRjaFF1ZXN0aW9uRGF0YShxdWVzdGlvbk51bWJlcikge1xyXG4gICAgcmV0dXJuIGZldGNoKCdwdWJsaWMvZGF0YS9xdWlzLmpzb24nKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIC8vIFNldCBwZXJ0YW55YWFuIHBhZGEgZWxlbWVuIEhUTUxcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpek51bWJlcicpLnRleHRDb250ZW50ID0gJ1BlcnRhbnlhYW4gJyArIHF1ZXN0aW9uTnVtYmVyICsgJy8xMCc7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpRdWVzdGlvbicpLnRleHRDb250ZW50ID0gZGF0YVtxdWVzdGlvbk51bWJlciAtIDFdLnNvYWxxdWl6O1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcXVpeiBkYXRhOicsIGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICAvLyBMb2FkIHBlcnRhbnlhYW4gcGVydGFtYVxyXG4gIGZldGNoUXVlc3Rpb25EYXRhKDEpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG5leHRQYWdlKCkge1xyXG4gIHZhciBxdWVzdGlvbk51bWJlciA9IDE7XHJcbiAgdmFyIHNlbGVjdGVkT3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1xJyArIHF1ZXN0aW9uTnVtYmVyICsgJ106Y2hlY2tlZCcpO1xyXG4gIGlmIChzZWxlY3RlZE9wdGlvbikge1xyXG4gICAgdmFyIHNjb3JlMSA9IHBhcnNlSW50KHNlbGVjdGVkT3B0aW9uLnZhbHVlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb2FsMScsIHNjb3JlMSk7XHJcblxyXG4gICAgaWYgKHF1ZXN0aW9uTnVtYmVyIDwgMTApIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnc29hbCcgKyAocXVlc3Rpb25OdW1iZXIgKyAxKSArICcuaHRtbCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBKaWthIGluaSBhZGFsYWggaGFsYW1hbiB0ZXJha2hpciAoc29hbCAxMCksIHBpbmRhaCBrZSBoYWxhbWFuIGhhc2lsXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2hhc2lsLmh0bWwnO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBhbGVydCgnUGlsaWggc2FsYWggc2F0dSBvcHNpIHNlYmVsdW0gbWVsYW5qdXRrYW4uJyk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZDVlM2UxZWIzNGU5ODFkY2RkY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==