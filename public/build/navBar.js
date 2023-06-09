"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["navBar"],{

/***/ "./assets/js/navBar.js":
/*!*****************************!*\
  !*** ./assets/js/navBar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var sideBar = document.getElementById("sideBar");

  (jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.myfunction) = function () {
    alert('hello world');
    return this;
  };

  jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sidebarCollapse').on('click', function () {
    // open or close navbar
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#sidebar').toggleClass('active'); // close dropdowns

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.collapse.in').toggleClass('in'); // and also adjust aria-expanded attributes we use for the open/closed arrows
    // in our CSS

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], () => (__webpack_exec__("./assets/js/navBar.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2QmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0FBLDZDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekIsTUFBSUMsT0FBTyxHQUFFRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBYjs7QUFDQUosRUFBQUEsNkRBQUEsR0FBa0IsWUFBVztBQUN6Qk8sSUFBQUEsS0FBSyxDQUFDLGFBQUQsQ0FBTDtBQUNBLFdBQU8sSUFBUDtBQUNILEdBSEQ7O0FBS0FQLEVBQUFBLDZDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlEsRUFBdEIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBWTtBQUMxQztBQUNBUixJQUFBQSw2Q0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjUyxXQUFkLENBQTBCLFFBQTFCLEVBRjBDLENBRzFDOztBQUNBVCxJQUFBQSw2Q0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQlMsV0FBbEIsQ0FBOEIsSUFBOUIsRUFKMEMsQ0FLMUM7QUFDQTs7QUFDQVQsSUFBQUEsNkNBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCVSxJQUEzQixDQUFnQyxlQUFoQyxFQUFpRCxPQUFqRDtBQUNILEdBUkQ7QUFTSCxDQWhCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9uYXZCYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHZhciBzaWRlQmFyPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGVCYXJcIik7XG4gICAgJC5mbi5teWZ1bmN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGFsZXJ0KCdoZWxsbyB3b3JsZCcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgJCgnI3NpZGViYXJDb2xsYXBzZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb3BlbiBvciBjbG9zZSBuYXZiYXJcbiAgICAgICAgJCgnI3NpZGViYXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIC8vIGNsb3NlIGRyb3Bkb3duc1xuICAgICAgICAkKCcuY29sbGFwc2UuaW4nKS50b2dnbGVDbGFzcygnaW4nKTtcbiAgICAgICAgLy8gYW5kIGFsc28gYWRqdXN0IGFyaWEtZXhwYW5kZWQgYXR0cmlidXRlcyB3ZSB1c2UgZm9yIHRoZSBvcGVuL2Nsb3NlZCBhcnJvd3NcbiAgICAgICAgLy8gaW4gb3VyIENTU1xuICAgICAgICAkKCdhW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0nKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgfSk7XG59KTsiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzaWRlQmFyIiwiZ2V0RWxlbWVudEJ5SWQiLCJmbiIsIm15ZnVuY3Rpb24iLCJhbGVydCIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJhdHRyIl0sInNvdXJjZVJvb3QiOiIifQ==