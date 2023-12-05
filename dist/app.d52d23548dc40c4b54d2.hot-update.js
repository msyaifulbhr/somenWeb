"use strict";
self["webpackHotUpdatestart0"]("app",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ! Responsive */
@media screen and (min-width: 768px) {
  #navbar img {
    width: 9em;
    margin: 0 1.4em;
  }

  #btnmain {
    width: 35%;
  }

  #btn4 {
    width: 60%;
  }

  #hero-img {
    margin-top: 2em;
  }

  #section2 #hero-content,
  #section3 #hero-content,
  #section4 #hero-content {
    text-align: start;
  }
}

@media screen and (min-width: 1200px) {
  body {
    background-size: 100%;
  }

  #coloumn2,
  #coloumn3 {
    margin-left: 0;
  }

  #hero-content {
    text-align: start;
  }

  #hero-img {
    max-width: auto;
    height: auto;
  }


}


@media screen (max-width: 900px) {
.card {
    margin: auto;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 90%;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

p#phasilquiz.card-text {
    text-align: justify;
    font-size: 15px;
}

h2#h2hasilquiz {
    font-weight: 400;
    font-size: 20px;
}
}
`, "",{"version":3,"sources":["webpack://./src/styles/responsive.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;EACE;IACE,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,eAAe;EACjB;;EAEA;;;IAGE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;;EAEA;;IAEE,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,YAAY;EACd;;;AAGF;;;AAGA;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;IACb,0BAA0B;IAC1B,sBAAsB;IACtB,UAAU;IACV,qBAAqB;IACrB,sBAAsB;IACtB,2BAA2B;IAC3B,kCAAkC;IAClC,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA","sourcesContent":["/* ! Responsive */\r\n@media screen and (min-width: 768px) {\r\n  #navbar img {\r\n    width: 9em;\r\n    margin: 0 1.4em;\r\n  }\r\n\r\n  #btnmain {\r\n    width: 35%;\r\n  }\r\n\r\n  #btn4 {\r\n    width: 60%;\r\n  }\r\n\r\n  #hero-img {\r\n    margin-top: 2em;\r\n  }\r\n\r\n  #section2 #hero-content,\r\n  #section3 #hero-content,\r\n  #section4 #hero-content {\r\n    text-align: start;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  body {\r\n    background-size: 100%;\r\n  }\r\n\r\n  #coloumn2,\r\n  #coloumn3 {\r\n    margin-left: 0;\r\n  }\r\n\r\n  #hero-content {\r\n    text-align: start;\r\n  }\r\n\r\n  #hero-img {\r\n    max-width: auto;\r\n    height: auto;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n@media screen (max-width: 900px) {\r\n.card {\r\n    margin: auto;\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    width: 90%;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: .25rem;\r\n}\r\n\r\np#phasilquiz.card-text {\r\n    text-align: justify;\r\n    font-size: 15px;\r\n}\r\n\r\nh2#h2hasilquiz {\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3b059c40b6d43c0213fe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmQ1MmQyMzU0OGRjNDBjNGI1NGQyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtR0FBbUcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLHFGQUFxRixtQkFBbUIsbUJBQW1CLHdCQUF3QixPQUFPLG9CQUFvQixtQkFBbUIsT0FBTyxpQkFBaUIsbUJBQW1CLE9BQU8scUJBQXFCLHdCQUF3QixPQUFPLCtGQUErRiwwQkFBMEIsT0FBTyxLQUFLLCtDQUErQyxZQUFZLDhCQUE4QixPQUFPLHFDQUFxQyx1QkFBdUIsT0FBTyx5QkFBeUIsMEJBQTBCLE9BQU8scUJBQXFCLHdCQUF3QixxQkFBcUIsT0FBTyxhQUFhLDhDQUE4QyxXQUFXLHFCQUFxQiwyQkFBMkIsNkJBQTZCLHNCQUFzQixtQ0FBbUMsK0JBQStCLG1CQUFtQiw4QkFBOEIsK0JBQStCLG9DQUFvQywyQ0FBMkMsOEJBQThCLEtBQUssZ0NBQWdDLDRCQUE0Qix3QkFBd0IsS0FBSyx3QkFBd0IseUJBQXlCLHdCQUF3QixLQUFLLEtBQUssdUJBQXVCO0FBQzU0RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNsRnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3N0eWxlcy9yZXNwb25zaXZlLmNzcyIsIndlYnBhY2s6Ly9zdGFydDAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAhIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAjbmF2YmFyIGltZyB7XHJcbiAgICB3aWR0aDogOWVtO1xyXG4gICAgbWFyZ2luOiAwIDEuNGVtO1xyXG4gIH1cclxuXHJcbiAgI2J0bm1haW4ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcblxyXG4gICNidG40IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAjaGVyby1pbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIH1cclxuXHJcbiAgI3NlY3Rpb24yICNoZXJvLWNvbnRlbnQsXHJcbiAgI3NlY3Rpb24zICNoZXJvLWNvbnRlbnQsXHJcbiAgI3NlY3Rpb240ICNoZXJvLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICB9XHJcblxyXG4gICNjb2xvdW1uMixcclxuICAjY29sb3VtbjMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAjaGVyby1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgI2hlcm8taW1nIHtcclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gKG1heC13aWR0aDogOTAwcHgpIHtcclxuLmNhcmQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG59XHJcblxyXG5wI3BoYXNpbHF1aXouY2FyZC10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbmgyI2gyaGFzaWxxdWl6IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzcG9uc2l2ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCO0FBQ2pCO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7OztJQUdFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7OztBQUdGOzs7QUFHQTtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGtDQUFrQztJQUNsQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogISBSZXNwb25zaXZlICovXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gICNuYXZiYXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDllbTtcXHJcXG4gICAgbWFyZ2luOiAwIDEuNGVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2J0bm1haW4ge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2J0bjQge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hlcm8taW1nIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3NlY3Rpb24yICNoZXJvLWNvbnRlbnQsXFxyXFxuICAjc2VjdGlvbjMgI2hlcm8tY29udGVudCxcXHJcXG4gICNzZWN0aW9uNCAjaGVyby1jb250ZW50IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNjb2xvdW1uMixcXHJcXG4gICNjb2xvdW1uMyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hlcm8tY29udGVudCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2hlcm8taW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4uY2FyZCB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XFxyXFxufVxcclxcblxcclxcbnAjcGhhc2lscXVpei5jYXJkLXRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmgyI2gyaGFzaWxxdWl6IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNiMDU5YzQwYjZkNDNjMDIxM2ZlXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9