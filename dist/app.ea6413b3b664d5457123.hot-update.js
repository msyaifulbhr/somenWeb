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
var FootBar = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FootBar, _HTMLElement);
  var _super = _createSuper(FootBar);
  // eslint-disable-next-line no-useless-constructor
  function FootBar() {
    _classCallCheck(this, FootBar);
    return _super.call(this);
  }
  _createClass(FootBar, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n      <footer class=\"footer\">\n      <div class=\"row mx-0\">\n\n        <!-- Column 1 -->\n        <div class=\"col-md-3 m-md-auto px-0\" id=\"coloumn1\">\n          <img src=\"icons/logo.png\" alt=\"Logo\" class=\"img-fluid mb-2\" id=\"footer-brand\">\n          <p>Bersama-sama meminimalisir<br>masalah kesehatan mental</p>\n        </div>\n\n        <!-- Column 2 -->\n        <div class=\"col-md-3 px-0\" id=\"coloumn2\">\n          <h5>Features</h5>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#/mulai\">Tes Psikologi</a></li>\n            <li><a id=\"lokasi\">Konsultasi gratis</a></li>\n            <li><a id=\"lokasi\">Temukan Bantuan</a></li>\n          </ul>\n        </div>\n\n        <!-- Column 3 -->\n        <div class=\"col-md-3 px-0\" id=\"coloumn3\">\n          <h5>Connect Us</h5>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"\">somen12@gmail.com</a></li>\n            <li><a href=\"\">Somen, Indonesia</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <p class=\"mb-0 mt-4\" id=\"copyright\">Copyright 2023 \u2022 All rights reserved \u2022 Somen</p>\n      </footer>\n      ";
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
/******/ 	__webpack_require__.h = () => ("f8d8ff68f0604cf408be")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmVhNjQxM2IzYjY2NGQ1NDU3MTIzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE9BQU8sMEJBQUFDLFlBQUE7RUFBQUMsU0FBQSxDQUFBRixPQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBRSxNQUFBLEdBQUFDLFlBQUEsQ0FBQUosT0FBQTtFQUNYO0VBQ0EsU0FBQUEsUUFBQSxFQUFjO0lBQUFLLGVBQUEsT0FBQUwsT0FBQTtJQUFBLE9BQUFHLE1BQUEsQ0FBQUcsSUFBQTtFQUVkO0VBQUNDLFlBQUEsQ0FBQVAsT0FBQTtJQUFBUSxHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBQyxrQkFBQSxFQUFvQjtNQUNsQixJQUFJLENBQUNDLFNBQVMsNm9DQWdDWDtJQUNMO0VBQUM7RUFBQSxPQUFBWCxPQUFBO0FBQUEsZ0JBQUFZLGdCQUFBLENBeENtQkMsV0FBVztBQTJDakNDLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDLFVBQVUsRUFBRWYsT0FBTyxDQUFDOzs7Ozs7OztVQzNDMUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydDAvLi9zcmMvc2NyaXB0cy9jb21wb25lbnQvZm9vdC1iYXIuanMiLCJ3ZWJwYWNrOi8vc3RhcnQwL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb290QmFyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNvbnN0cnVjdG9yXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICB0aGlzLmlubmVySFRNTCA9IGBcclxuICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93IG14LTBcIj5cclxuXHJcbiAgICAgICAgPCEtLSBDb2x1bW4gMSAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTMgbS1tZC1hdXRvIHB4LTBcIiBpZD1cImNvbG91bW4xXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xvZ28ucG5nXCIgYWx0PVwiTG9nb1wiIGNsYXNzPVwiaW1nLWZsdWlkIG1iLTJcIiBpZD1cImZvb3Rlci1icmFuZFwiPlxyXG4gICAgICAgICAgPHA+QmVyc2FtYS1zYW1hIG1lbWluaW1hbGlzaXI8YnI+bWFzYWxhaCBrZXNlaGF0YW4gbWVudGFsPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIENvbHVtbiAyIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMyBweC0wXCIgaWQ9XCJjb2xvdW1uMlwiPlxyXG4gICAgICAgICAgPGg1PkZlYXR1cmVzPC9oNT5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtdW5zdHlsZWRcIj5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjL211bGFpXCI+VGVzIFBzaWtvbG9naTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaWQ9XCJsb2thc2lcIj5Lb25zdWx0YXNpIGdyYXRpczwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGk+PGEgaWQ9XCJsb2thc2lcIj5UZW11a2FuIEJhbnR1YW48L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gQ29sdW1uIDMgLS0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zIHB4LTBcIiBpZD1cImNvbG91bW4zXCI+XHJcbiAgICAgICAgICA8aDU+Q29ubmVjdCBVczwvaDU+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LXVuc3R5bGVkXCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBocmVmPVwiXCI+c29tZW4xMkBnbWFpbC5jb208L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJcIj5Tb21lbiwgSW5kb25lc2lhPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxwIGNsYXNzPVwibWItMCBtdC00XCIgaWQ9XCJjb3B5cmlnaHRcIj5Db3B5cmlnaHQgMjAyMyDigKIgQWxsIHJpZ2h0cyByZXNlcnZlZCDigKIgU29tZW48L3A+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmb290LWJhcicsIEZvb3RCYXIpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmOGQ4ZmY2OGYwNjA0Y2Y0MDhiZVwiKSJdLCJuYW1lcyI6WyJGb290QmFyIiwiX0hUTUxFbGVtZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiY2FsbCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJpbm5lckhUTUwiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiSFRNTEVsZW1lbnQiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSJdLCJzb3VyY2VSb290IjoiIn0=