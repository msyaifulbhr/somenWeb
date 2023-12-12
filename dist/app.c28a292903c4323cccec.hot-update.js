self["webpackHotUpdatestart0"]("app",{

/***/ "./src/scripts/component/foot-bar.js":
/*!*******************************************!*\
  !*** ./src/scripts/component/foot-bar.js ***!
  \*******************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// footbar.js
var FootBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FootBar, _HTMLElement);
  var _super = _createSuper(FootBar);
  function FootBar() {
    _classCallCheck(this, FootBar);
    return _super.call(this);
  }
  _createClass(FootBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n      <footer class=\"footer\">\n        <div class=\"row mx-0\">\n          <!-- Column 1 -->\n          <div class=\"col-md-3 m-md-auto px-0\" id=\"coloumn1\">\n            <img src=\"icons/logo.png\" alt=\"Logo\" class=\"img-fluid mb-2\" id=\"footer-brand\">\n            <p>Bersama-sama meminimalisir<br>masalah kesehatan mental</p>\n          </div>\n\n          <!-- Column 2 -->\n          <div class=\"col-md-3 px-0\" id=\"coloumn2\">\n            <h5>Features</h5>\n            <ul class=\"list-unstyled\">\n              <li><a href=\"#/mulai\">Tes Psikologi</a></li>\n              <li><a href=\"\">Konsultasi gratis</a></li>\n              <li><a id=\"lokasi\">Temukan Bantuan</a></li>\n            </ul>\n          </div>\n\n          <!-- Column 3 -->\n          <div class=\"col-md-3 px-0\" id=\"coloumn3\">\n            <h5>Connect Us</h5>\n            <ul class=\"list-unstyled\">\n              <li><a href=\"\">somen12@gmail.com</a></li>\n              <li><a href=\"\">Somen, Indonesia</a></li>\n            </ul>\n          </div>\n        </div>\n\n        <p class=\"mb-0 mt-4\" id=\"copyright\">Copyright 2023 \u2022 All rights reserved \u2022 Somen</p>\n      </footer>\n    ";
      this.afterRender();
    }
  }, {
    key: "afterRender",
    value: function afterRender() {
      var lokasiElement = this.querySelector('#lokasi');
      lokasiElement.addEventListener('click', this.findLocation.bind(this));
    }
  }, {
    key: "findLocation",
    value: function findLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          var mapsUrl = "https://www.google.com/maps/search/psikolog+terdekat/@".concat(latitude, ",").concat(longitude);
          window.open(mapsUrl, '_blank');
        }, function (error) {
          Swal.fire({
            title: 'upss!',
            text: 'Gagal mendapatkan lokasi. Pastikan GPS Anda aktif!',
            icon: 'error'
          });
        });
      } else {
        alert('Browser Anda tidak mendukung geolokasi.');
      }
    }
  }]);
  return FootBar;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
customElements.define('foot-bar', FootBar);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a7c81e4d1cfef4297e9a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmMyOGEyOTI5MDNjNDMyM2NjY2VjLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUNNQSxPQUFPLDBCQUFBQyxZQUFBO0VBQUFDLFNBQUEsQ0FBQUYsT0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUUsTUFBQSxHQUFBQyxZQUFBLENBQUFKLE9BQUE7RUFDWCxTQUFBQSxRQUFBLEVBQWM7SUFBQUssZUFBQSxPQUFBTCxPQUFBO0lBQUEsT0FBQUcsTUFBQSxDQUFBRyxJQUFBO0VBRWQ7RUFBQ0MsWUFBQSxDQUFBUCxPQUFBO0lBQUFRLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLGtCQUFBLEVBQW9CO01BQ2xCLElBQUksQ0FBQ0MsU0FBUyx1ckNBK0JiO01BQ0QsSUFBSSxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUNwQjtFQUFDO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFHLFlBQUEsRUFBYztNQUNaLElBQU1DLGFBQWEsR0FBRyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUM7TUFDbkRELGFBQWEsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkU7RUFBQztJQUFBVCxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTyxhQUFBLEVBQWU7TUFDYixJQUFJRSxTQUFTLENBQUNDLFdBQVcsRUFBRTtRQUN6QkQsU0FBUyxDQUFDQyxXQUFXLENBQUNDLGtCQUFrQixDQUN0QyxVQUFVQyxRQUFRLEVBQUU7VUFDbEIsSUFBTUMsUUFBUSxHQUFHRCxRQUFRLENBQUNFLE1BQU0sQ0FBQ0QsUUFBUTtVQUN6QyxJQUFNRSxTQUFTLEdBQUdILFFBQVEsQ0FBQ0UsTUFBTSxDQUFDQyxTQUFTO1VBRTNDLElBQU1DLE9BQU8sNERBQUFDLE1BQUEsQ0FBNERKLFFBQVEsT0FBQUksTUFBQSxDQUFJRixTQUFTLENBQUU7VUFFaEdHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFVSSxLQUFLLEVBQUU7VUFDZkMsSUFBSSxDQUFDQyxJQUFJLENBQUM7WUFDUkMsS0FBSyxFQUFFLE9BQU87WUFDZEMsSUFBSSxFQUFFLG9EQUFvRDtZQUMxREMsSUFBSSxFQUFFO1VBQ1IsQ0FBQyxDQUFDO1FBQ0osQ0FDRixDQUFDO01BQ0gsQ0FBQyxNQUFNO1FBQ0xDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztNQUNsRDtJQUNGO0VBQUM7RUFBQSxPQUFBbkMsT0FBQTtBQUFBLGdCQUFBb0MsZ0JBQUEsQ0FwRW1CQyxXQUFXO0FBdUVqQ0MsY0FBYyxDQUFDQyxNQUFNLENBQUMsVUFBVSxFQUFFdkMsT0FBTyxDQUFDOzs7Ozs7OztVQ3hFMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydDAvLi9zcmMvc2NyaXB0cy9jb21wb25lbnQvZm9vdC1iYXIuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmb290YmFyLmpzXHJcbmNsYXNzIEZvb3RCYXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXgtMFwiPlxyXG4gICAgICAgICAgPCEtLSBDb2x1bW4gMSAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBtLW1kLWF1dG8gcHgtMFwiIGlkPVwiY29sb3VtbjFcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sb2dvLnBuZ1wiIGFsdD1cIkxvZ29cIiBjbGFzcz1cImltZy1mbHVpZCBtYi0yXCIgaWQ9XCJmb290ZXItYnJhbmRcIj5cclxuICAgICAgICAgICAgPHA+QmVyc2FtYS1zYW1hIG1lbWluaW1hbGlzaXI8YnI+bWFzYWxhaCBrZXNlaGF0YW4gbWVudGFsPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPCEtLSBDb2x1bW4gMiAtLT5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBweC0wXCIgaWQ9XCJjb2xvdW1uMlwiPlxyXG4gICAgICAgICAgICA8aDU+RmVhdHVyZXM8L2g1PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjL211bGFpXCI+VGVzIFBzaWtvbG9naTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+S29uc3VsdGFzaSBncmF0aXM8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGEgaWQ9XCJsb2thc2lcIj5UZW11a2FuIEJhbnR1YW48L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwhLS0gQ29sdW1uIDMgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgcHgtMFwiIGlkPVwiY29sb3VtbjNcIj5cclxuICAgICAgICAgICAgPGg1PkNvbm5lY3QgVXM8L2g1PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5zb21lbjEyQGdtYWlsLmNvbTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+U29tZW4sIEluZG9uZXNpYTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzPVwibWItMCBtdC00XCIgaWQ9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgMjAyMyDigKIgQWxsIHJpZ2h0cyByZXNlcnZlZCDigKIgU29tZW48L3A+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgYDtcclxuICAgIHRoaXMuYWZ0ZXJSZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGFmdGVyUmVuZGVyKCkge1xyXG4gICAgY29uc3QgbG9rYXNpRWxlbWVudCA9IHRoaXMucXVlcnlTZWxlY3RvcignI2xva2FzaScpO1xyXG4gICAgbG9rYXNpRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZmluZExvY2F0aW9uLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZmluZExvY2F0aW9uKCkge1xyXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAgIGZ1bmN0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgY29uc3QgbGF0aXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG1hcHNVcmwgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC9wc2lrb2xvZyt0ZXJkZWthdC9AJHtsYXRpdHVkZX0sJHtsb25naXR1ZGV9YDtcclxuXHJcbiAgICAgICAgICB3aW5kb3cub3BlbihtYXBzVXJsLCAnX2JsYW5rJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAndXBzcyEnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnR2FnYWwgbWVuZGFwYXRrYW4gbG9rYXNpLiBQYXN0aWthbiBHUFMgQW5kYSBha3RpZiEnLFxyXG4gICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoJ0Jyb3dzZXIgQW5kYSB0aWRhayBtZW5kdWt1bmcgZ2VvbG9rYXNpLicpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmb290LWJhcicsIEZvb3RCYXIpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhN2M4MWU0ZDFjZmVmNDI5N2U5YVwiKSJdLCJuYW1lcyI6WyJGb290QmFyIiwiX0hUTUxFbGVtZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJpbm5lckhUTUwiLCJhZnRlclJlbmRlciIsImxva2FzaUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbmRMb2NhdGlvbiIsImJpbmQiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJjb29yZHMiLCJsb25naXR1ZGUiLCJtYXBzVXJsIiwiY29uY2F0Iiwid2luZG93Iiwib3BlbiIsImVycm9yIiwiU3dhbCIsImZpcmUiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwiYWxlcnQiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJzb3VyY2VSb290IjoiIn0=