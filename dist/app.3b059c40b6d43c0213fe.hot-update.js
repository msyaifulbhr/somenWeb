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


@media screen and (max-width: 900px) {
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
`, "",{"version":3,"sources":["webpack://./src/styles/responsive.css"],"names":[],"mappings":"AAAA,iBAAiB;AACjB;EACE;IACE,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,eAAe;EACjB;;EAEA;;;IAGE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;;EAEA;;IAEE,cAAc;EAChB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,YAAY;EACd;;;AAGF;;;AAGA;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;IACb,0BAA0B;IAC1B,sBAAsB;IACtB,UAAU;IACV,qBAAqB;IACrB,sBAAsB;IACtB,2BAA2B;IAC3B,kCAAkC;IAClC,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA","sourcesContent":["/* ! Responsive */\r\n@media screen and (min-width: 768px) {\r\n  #navbar img {\r\n    width: 9em;\r\n    margin: 0 1.4em;\r\n  }\r\n\r\n  #btnmain {\r\n    width: 35%;\r\n  }\r\n\r\n  #btn4 {\r\n    width: 60%;\r\n  }\r\n\r\n  #hero-img {\r\n    margin-top: 2em;\r\n  }\r\n\r\n  #section2 #hero-content,\r\n  #section3 #hero-content,\r\n  #section4 #hero-content {\r\n    text-align: start;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  body {\r\n    background-size: 100%;\r\n  }\r\n\r\n  #coloumn2,\r\n  #coloumn3 {\r\n    margin-left: 0;\r\n  }\r\n\r\n  #hero-content {\r\n    text-align: start;\r\n  }\r\n\r\n  #hero-img {\r\n    max-width: auto;\r\n    height: auto;\r\n  }\r\n\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 900px) {\r\n.card {\r\n    margin: auto;\r\n    position: relative;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    width: 90%;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 1px solid rgba(0,0,0,.125);\r\n    border-radius: .25rem;\r\n}\r\n\r\np#phasilquiz.card-text {\r\n    text-align: justify;\r\n    font-size: 15px;\r\n}\r\n\r\nh2#h2hasilquiz {\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ebcf3165596be81c75b5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjNiMDU5YzQwYjZkNDNjMDIxM2ZlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtR0FBbUcsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLHFGQUFxRixtQkFBbUIsbUJBQW1CLHdCQUF3QixPQUFPLG9CQUFvQixtQkFBbUIsT0FBTyxpQkFBaUIsbUJBQW1CLE9BQU8scUJBQXFCLHdCQUF3QixPQUFPLCtGQUErRiwwQkFBMEIsT0FBTyxLQUFLLCtDQUErQyxZQUFZLDhCQUE4QixPQUFPLHFDQUFxQyx1QkFBdUIsT0FBTyx5QkFBeUIsMEJBQTBCLE9BQU8scUJBQXFCLHdCQUF3QixxQkFBcUIsT0FBTyxhQUFhLGtEQUFrRCxXQUFXLHFCQUFxQiwyQkFBMkIsNkJBQTZCLHNCQUFzQixtQ0FBbUMsK0JBQStCLG1CQUFtQiw4QkFBOEIsK0JBQStCLG9DQUFvQywyQ0FBMkMsOEJBQThCLEtBQUssZ0NBQWdDLDRCQUE0Qix3QkFBd0IsS0FBSyx3QkFBd0IseUJBQXlCLHdCQUF3QixLQUFLLEtBQUssdUJBQXVCO0FBQ2g1RDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNsRnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQwLy4vc3JjL3N0eWxlcy9yZXNwb25zaXZlLmNzcyIsIndlYnBhY2s6Ly9zdGFydDAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAhIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAjbmF2YmFyIGltZyB7XHJcbiAgICB3aWR0aDogOWVtO1xyXG4gICAgbWFyZ2luOiAwIDEuNGVtO1xyXG4gIH1cclxuXHJcbiAgI2J0bm1haW4ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcblxyXG4gICNidG40IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAjaGVyby1pbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIH1cclxuXHJcbiAgI3NlY3Rpb24yICNoZXJvLWNvbnRlbnQsXHJcbiAgI3NlY3Rpb24zICNoZXJvLWNvbnRlbnQsXHJcbiAgI3NlY3Rpb240ICNoZXJvLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICB9XHJcblxyXG4gICNjb2xvdW1uMixcclxuICAjY29sb3VtbjMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICAjaGVyby1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgI2hlcm8taW1nIHtcclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxucCNwaGFzaWxxdWl6LmNhcmQtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5oMiNoMmhhc2lscXVpeiB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc3BvbnNpdmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlCQUFpQjtBQUNqQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOzs7SUFHRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBOztJQUVFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkOzs7QUFHRjs7O0FBR0E7QUFDQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qICEgUmVzcG9uc2l2ZSAqL1xcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAjbmF2YmFyIGltZyB7XFxyXFxuICAgIHdpZHRoOiA5ZW07XFxyXFxuICAgIG1hcmdpbjogMCAxLjRlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNidG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNidG40IHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoZXJvLWltZyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNzZWN0aW9uMiAjaGVyby1jb250ZW50LFxcclxcbiAgI3NlY3Rpb24zICNoZXJvLWNvbnRlbnQsXFxyXFxuICAjc2VjdGlvbjQgI2hlcm8tY29udGVudCB7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIGJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjY29sb3VtbjIsXFxyXFxuICAjY29sb3VtbjMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoZXJvLWNvbnRlbnQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNoZXJvLWltZyB7XFxyXFxuICAgIG1heC13aWR0aDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbi5jYXJkIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjEyNSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxucCNwaGFzaWxxdWl6LmNhcmQtdGV4dCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuaDIjaDJoYXNpbHF1aXoge1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWJjZjMxNjU1OTZiZTgxYzc1YjVcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=