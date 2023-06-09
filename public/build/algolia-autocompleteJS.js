(self["webpackChunk"] = self["webpackChunk"] || []).push([["algolia-autocompleteJS"],{

/***/ "./assets/js/algolia-autocomplete.js":
/*!*******************************************!*\
  !*** ./assets/js/algolia-autocomplete.js ***!
  \*******************************************/
/***/ (() => {

$(document).ready(function () {
  $('#search').each(function () {
    var autocompleteUrl = $(this).attr('autocomplete-url');
    console.log('autocomplete vaut ' + autocompleteUrl);
    $(this).autocomplete({
      hint: false
    }, [{
      source: function source(query, cb) {
        $.ajax({
          url: autocompleteUrl + '?query=' + query
        }).then(function (data) {
          cb(data.users);
        });
      },
      displayKey: 'email',
      debounce: 500 // only request every 1/2 second

    }]);
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./assets/js/algolia-autocomplete.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxnb2xpYS1hdXRvY29tcGxldGVKUy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFFekJGLEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYUcsSUFBYixDQUFrQixZQUFXO0FBR3pCLFFBQUlDLGVBQWUsR0FBR0osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxJQUFSLENBQWEsa0JBQWIsQ0FBdEI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQXFCSCxlQUFqQztBQUNBSixJQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFRLFlBQVIsQ0FBcUI7QUFBQ0MsTUFBQUEsSUFBSSxFQUFFO0FBQVAsS0FBckIsRUFBb0MsQ0FDaEM7QUFDSUMsTUFBQUEsTUFBTSxFQUFFLGdCQUFTQyxLQUFULEVBQWdCQyxFQUFoQixFQUFvQjtBQUN4QlosUUFBQUEsQ0FBQyxDQUFDYSxJQUFGLENBQU87QUFDSEMsVUFBQUEsR0FBRyxFQUFFVixlQUFlLEdBQUMsU0FBaEIsR0FBMEJPO0FBRDVCLFNBQVAsRUFFR0ksSUFGSCxDQUVRLFVBQVNDLElBQVQsRUFBZTtBQUNuQkosVUFBQUEsRUFBRSxDQUFDSSxJQUFJLENBQUNDLEtBQU4sQ0FBRjtBQUNILFNBSkQ7QUFLSCxPQVBMO0FBUUlDLE1BQUFBLFVBQVUsRUFBRSxPQVJoQjtBQVNJQyxNQUFBQSxRQUFRLEVBQUUsR0FUZCxDQVNpQjs7QUFUakIsS0FEZ0MsQ0FBcEM7QUFhSCxHQWxCRDtBQW9CSCxDQXRCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hbGdvbGlhLWF1dG9jb21wbGV0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gICAgJCgnI3NlYXJjaCcpLmVhY2goZnVuY3Rpb24oKSB7XG5cblxuICAgICAgICB2YXIgYXV0b2NvbXBsZXRlVXJsID0gJCh0aGlzKS5hdHRyKCdhdXRvY29tcGxldGUtdXJsJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhdXRvY29tcGxldGUgdmF1dCAnK2F1dG9jb21wbGV0ZVVybCk7XG4gICAgICAgICQodGhpcykuYXV0b2NvbXBsZXRlKHtoaW50OiBmYWxzZX0sIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IGZ1bmN0aW9uKHF1ZXJ5LCBjYikge1xuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBhdXRvY29tcGxldGVVcmwrJz9xdWVyeT0nK3F1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoZGF0YS51c2Vycyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGlzcGxheUtleTogJ2VtYWlsJyxcbiAgICAgICAgICAgICAgICBkZWJvdW5jZTogNTAwLy8gb25seSByZXF1ZXN0IGV2ZXJ5IDEvMiBzZWNvbmRcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgICB9KTtcblxufSk7Il0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiZWFjaCIsImF1dG9jb21wbGV0ZVVybCIsImF0dHIiLCJjb25zb2xlIiwibG9nIiwiYXV0b2NvbXBsZXRlIiwiaGludCIsInNvdXJjZSIsInF1ZXJ5IiwiY2IiLCJhamF4IiwidXJsIiwidGhlbiIsImRhdGEiLCJ1c2VycyIsImRpc3BsYXlLZXkiLCJkZWJvdW5jZSJdLCJzb3VyY2VSb290IjoiIn0=