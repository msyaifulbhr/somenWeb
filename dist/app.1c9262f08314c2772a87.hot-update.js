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




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b1299c0b057fdb57c792")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjFjOTI2MmYwODMxNGMyNzcyYTg3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0Q7QUFDQTtBQUNFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2RixTQUFTLEdBQUcsVUFBVTtBQUNuSDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7OztVQzdCQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbWVud2ViLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc29tZW53ZWIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZSc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uY3NzJztcclxuaW1wb3J0ICcuLi9zdHlsZXMvcXVpei5jc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9hcnRpa2VsLmNzcydcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBQYXN0aWthbiBrb2RlIGRpIGRhbGFtIGV2ZW50IGluaSBkaWphbGFua2FuIHNldGVsYWggaGFsYW1hbiBzZWxlc2FpIGRpbXVhdFxyXG4gICAgY29uc3QgYnRuNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG40Jyk7XHJcbiAgICBpZiAoYnRuNCkge1xyXG4gICAgICAgIGJ0bjQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhdGl0dWRlID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvbmdpdHVkZSA9IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFwc1VybCA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoL3BzaWtvbG9nK3RlcmRla2F0L0Ake2xhdGl0dWRlfSwke2xvbmdpdHVkZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKG1hcHNVcmwsICdfYmxhbmsnKTtcclxuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ0dhZ2FsIG1lbmRhcGF0a2FuIGxva2FzaS4gUGFzdGlrYW4gR1BTIEFuZGEgYWt0aWYuJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCdCcm93c2VyIEFuZGEgdGlkYWsgbWVuZHVrdW5nIGdlb2xva2FzaS4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBcclxufSk7XHJcblxyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjEyOTljMGIwNTdmZGI1N2M3OTJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=