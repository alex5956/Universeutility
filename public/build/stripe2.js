(self["webpackChunk"] = self["webpackChunk"] || []).push([["stripe2"],{

/***/ "./assets/js/stripe2.js":
/*!******************************!*\
  !*** ./assets/js/stripe2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

// Simple localization
var isStripeDev = window.location.hostname === 'stripe.dev';
var localeIndex = isStripeDev ? 2 : 1;
window.__exampleLocale = window.location.pathname.split('/')[localeIndex] || 'en';
var urlPrefix = isStripeDev ? '/elements-examples/' : '/';
document.querySelectorAll('.optionList a').forEach(function (langNode) {
  var langValue = langNode.getAttribute('data-lang');
  var langUrl = langValue === 'en' ? urlPrefix : urlPrefix + langValue + '/';

  if (langUrl === window.location.pathname || langUrl === window.location.pathname + '/') {
    langNode.className += ' selected';
    langNode.parentNode.setAttribute('aria-selected', 'true');
  } else {
    langNode.setAttribute('href', langUrl);
    langNode.parentNode.setAttribute('aria-selected', 'false');
  }
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_function-name_js-node_modules_core-js_internals_object-792382","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-633d96","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_str-13fed2"], () => (__webpack_exec__("./assets/js/stripe2.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaXBlMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxRQUFoQixLQUE2QixZQUFqRDtBQUNBLElBQU1DLFdBQVcsR0FBR0osV0FBVyxHQUFHLENBQUgsR0FBTyxDQUF0QztBQUNBQyxNQUFNLENBQUNJLGVBQVAsR0FBeUJKLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkksUUFBaEIsQ0FBeUJDLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DSCxXQUFwQyxLQUFvRCxJQUE3RTtBQUNBLElBQU1JLFNBQVMsR0FBR1IsV0FBVyxHQUFHLHFCQUFILEdBQTJCLEdBQXhEO0FBRUFTLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkNDLE9BQTNDLENBQW1ELFVBQVNDLFFBQVQsRUFBbUI7QUFDcEUsTUFBTUMsU0FBUyxHQUFHRCxRQUFRLENBQUNFLFlBQVQsQ0FBc0IsV0FBdEIsQ0FBbEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLFNBQVMsS0FBSyxJQUFkLEdBQXFCTCxTQUFyQixHQUFrQ0EsU0FBUyxHQUFHSyxTQUFaLEdBQXdCLEdBQTFFOztBQUVBLE1BQUlFLE9BQU8sS0FBS2QsTUFBTSxDQUFDQyxRQUFQLENBQWdCSSxRQUE1QixJQUF3Q1MsT0FBTyxLQUFLZCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JJLFFBQWhCLEdBQTJCLEdBQW5GLEVBQXdGO0FBQ3RGTSxJQUFBQSxRQUFRLENBQUNJLFNBQVQsSUFBc0IsV0FBdEI7QUFDQUosSUFBQUEsUUFBUSxDQUFDSyxVQUFULENBQW9CQyxZQUFwQixDQUFpQyxlQUFqQyxFQUFrRCxNQUFsRDtBQUNELEdBSEQsTUFHTztBQUNMTixJQUFBQSxRQUFRLENBQUNNLFlBQVQsQ0FBc0IsTUFBdEIsRUFBOEJILE9BQTlCO0FBQ0FILElBQUFBLFFBQVEsQ0FBQ0ssVUFBVCxDQUFvQkMsWUFBcEIsQ0FBaUMsZUFBakMsRUFBa0QsT0FBbEQ7QUFDRDtBQUNGLENBWEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3RyaXBlMi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTaW1wbGUgbG9jYWxpemF0aW9uXG5jb25zdCBpc1N0cmlwZURldiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ3N0cmlwZS5kZXYnO1xuY29uc3QgbG9jYWxlSW5kZXggPSBpc1N0cmlwZURldiA/IDIgOiAxO1xud2luZG93Ll9fZXhhbXBsZUxvY2FsZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpW2xvY2FsZUluZGV4XSB8fCAnZW4nO1xuY29uc3QgdXJsUHJlZml4ID0gaXNTdHJpcGVEZXYgPyAnL2VsZW1lbnRzLWV4YW1wbGVzLycgOiAnLyc7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcHRpb25MaXN0IGEnKS5mb3JFYWNoKGZ1bmN0aW9uKGxhbmdOb2RlKSB7XG4gIGNvbnN0IGxhbmdWYWx1ZSA9IGxhbmdOb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1sYW5nJyk7XG4gIGNvbnN0IGxhbmdVcmwgPSBsYW5nVmFsdWUgPT09ICdlbicgPyB1cmxQcmVmaXggOiAodXJsUHJlZml4ICsgbGFuZ1ZhbHVlICsgJy8nKTtcblxuICBpZiAobGFuZ1VybCA9PT0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIHx8IGxhbmdVcmwgPT09IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICcvJykge1xuICAgIGxhbmdOb2RlLmNsYXNzTmFtZSArPSAnIHNlbGVjdGVkJztcbiAgICBsYW5nTm9kZS5wYXJlbnROb2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gIH0gZWxzZSB7XG4gICAgbGFuZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgbGFuZ1VybCk7XG4gICAgbGFuZ05vZGUucGFyZW50Tm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiaXNTdHJpcGVEZXYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwibG9jYWxlSW5kZXgiLCJfX2V4YW1wbGVMb2NhbGUiLCJwYXRobmFtZSIsInNwbGl0IiwidXJsUHJlZml4IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImxhbmdOb2RlIiwibGFuZ1ZhbHVlIiwiZ2V0QXR0cmlidXRlIiwibGFuZ1VybCIsImNsYXNzTmFtZSIsInBhcmVudE5vZGUiLCJzZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9