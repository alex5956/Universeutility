(self["webpackChunk"] = self["webpackChunk"] || []).push([["uploadedVideo"],{

/***/ "./assets/js/uploadedvideo.js":
/*!************************************!*\
  !*** ./assets/js/uploadedvideo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");

var progressBarFill = document.getElementsByClassName('progress');
var progressBarText = document.getElementsByClassName('progress-bar');
var uploadForm = document.getElementById("form2");
inputFile = document.getElementsByClassName("custom-file-label");
inputFile.item(0).innerHTML = "coucou";
uploadForm.addEventListener("submit", uploadFile);

function uploadFile(e) {
  e.preventDefault();
  var inputFile = document.getElementById("user_file").files[0];
  console.log(inputFile);
  console.log(inputFile['name']);
  var uploadDataForm = new FormData();
  uploadDataForm.append('file', inputFile);

  try {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/uploadAjax');
    xhr.upload.addEventListener('progress', function (e) {
      var percent = e.lengthComputable ? e.loaded / e.total * 100 : 0;
      $(".progress-bar").width(percent + '%');
      $(".progress-bar").html(percent + '%');
    });
    xhr.send(uploadDataForm);
  } catch (error) {
    console.error(error);
  }
}

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_function-name_js-node_modules_core-js_internals_object-792382"], () => (__webpack_exec__("./assets/js/uploadedvideo.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZWRWaWRlby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUksSUFBTUEsZUFBZSxHQUFHQyxRQUFRLENBQUNDLHNCQUFULENBQWdDLFVBQWhDLENBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHRixRQUFRLENBQUNDLHNCQUFULENBQWdDLGNBQWhDLENBQXhCO0FBQ0EsSUFBSUUsVUFBVSxHQUFHSCxRQUFRLENBQUNJLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBakI7QUFDQUMsU0FBUyxHQUFDTCxRQUFRLENBQUNDLHNCQUFULENBQWdDLG1CQUFoQyxDQUFWO0FBQ0FJLFNBQVMsQ0FBQ0MsSUFBVixDQUFlLENBQWYsRUFBa0JDLFNBQWxCLEdBQTRCLFFBQTVCO0FBQ0FKLFVBQVUsQ0FBQ0ssZ0JBQVgsQ0FBNEIsUUFBNUIsRUFBc0NDLFVBQXRDOztBQUNBLFNBQVNBLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCO0FBQ25CQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFJTixTQUFTLEdBQUdMLFFBQVEsQ0FBQ0ksY0FBVCxDQUF3QixXQUF4QixFQUFxQ1EsS0FBckMsQ0FBMkMsQ0FBM0MsQ0FBaEI7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULFNBQVo7QUFDQVEsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULFNBQVMsQ0FBQyxNQUFELENBQXJCO0FBQ0EsTUFBSVUsY0FBYyxHQUFHLElBQUlDLFFBQUosRUFBckI7QUFDQUQsRUFBQUEsY0FBYyxDQUFDRSxNQUFmLENBQXNCLE1BQXRCLEVBQThCWixTQUE5Qjs7QUFDQSxNQUFJO0FBQ0EsUUFBTWEsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUNBRCxJQUFBQSxHQUFHLENBQUNFLElBQUosQ0FBUyxNQUFULEVBQWlCLGFBQWpCO0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csTUFBSixDQUFXYixnQkFBWCxDQUE0QixVQUE1QixFQUF3QyxVQUFBRSxDQUFDLEVBQUk7QUFDekMsVUFBTVksT0FBTyxHQUFHWixDQUFDLENBQUNhLGdCQUFGLEdBQXNCYixDQUFDLENBQUNjLE1BQUYsR0FBV2QsQ0FBQyxDQUFDZSxLQUFkLEdBQXVCLEdBQTVDLEdBQWtELENBQWxFO0FBQ0FDLE1BQUFBLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJDLEtBQW5CLENBQXlCTCxPQUFPLEdBQUcsR0FBbkM7QUFDQUksTUFBQUEsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQkUsSUFBbkIsQ0FBd0JOLE9BQU8sR0FBRyxHQUFsQztBQUNILEtBSkQ7QUFLQUosSUFBQUEsR0FBRyxDQUFDVyxJQUFKLENBQVNkLGNBQVQ7QUFDSCxHQVRELENBU0UsT0FBT2UsS0FBUCxFQUFjO0FBQ1pqQixJQUFBQSxPQUFPLENBQUNpQixLQUFSLENBQWNBLEtBQWQ7QUFDSDtBQUNKOzs7Ozs7Ozs7O0FDekJMLGtCQUFrQixtQkFBTyxDQUFDLGlGQUEwQjtBQUNwRCwyQkFBMkIsbUhBQTRDO0FBQ3ZFLGtCQUFrQixtQkFBTyxDQUFDLHFHQUFvQztBQUM5RCxxQkFBcUIsZ0lBQWdEOztBQUVyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3VwbG9hZGVkdmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiAgICBjb25zdCBwcm9ncmVzc0JhckZpbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9ncmVzcycpO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2dyZXNzLWJhcicpO1xuICAgIHZhciB1cGxvYWRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtMlwiKTtcbiAgICBpbnB1dEZpbGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImN1c3RvbS1maWxlLWxhYmVsXCIpO1xuICAgIGlucHV0RmlsZS5pdGVtKDApLmlubmVySFRNTD1cImNvdWNvdVwiO1xuICAgIHVwbG9hZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCB1cGxvYWRGaWxlKTtcbiAgICBmdW5jdGlvbiB1cGxvYWRGaWxlKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgaW5wdXRGaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyX2ZpbGVcIikuZmlsZXNbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0RmlsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0RmlsZVsnbmFtZSddKTtcbiAgICAgICAgbGV0IHVwbG9hZERhdGFGb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIHVwbG9hZERhdGFGb3JtLmFwcGVuZCgnZmlsZScsIGlucHV0RmlsZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgJy91cGxvYWRBamF4Jyk7XG4gICAgICAgICAgICB4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudCA9IGUubGVuZ3RoQ29tcHV0YWJsZSA/IChlLmxvYWRlZCAvIGUudG90YWwpICogMTAwIDogMDtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2dyZXNzLWJhclwiKS53aWR0aChwZXJjZW50ICsgJyUnKTtcbiAgICAgICAgICAgICAgICAkKFwiLnByb2dyZXNzLWJhclwiKS5odG1sKHBlcmNlbnQgKyAnJScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB4aHIuc2VuZCh1cGxvYWREYXRhRm9ybSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIEZVTkNUSU9OX05BTUVfRVhJU1RTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5FWElTVFM7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmcpO1xudmFyIG5hbWVSRSA9IC9mdW5jdGlvblxcYig/Olxcc3xcXC9cXCpbXFxTXFxzXSo/XFwqXFwvfFxcL1xcL1teXFxuXFxyXSpbXFxuXFxyXSspKihbXlxccygvXSopLztcbnZhciByZWdFeHBFeGVjID0gdW5jdXJyeVRoaXMobmFtZVJFLmV4ZWMpO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIUZVTkNUSU9OX05BTUVfRVhJU1RTKSB7XG4gIGRlZmluZVByb3BlcnR5KEZ1bmN0aW9uUHJvdG90eXBlLCBOQU1FLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHJlZ0V4cEV4ZWMobmFtZVJFLCBmdW5jdGlvblRvU3RyaW5nKHRoaXMpKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInByb2dyZXNzQmFyRmlsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb2dyZXNzQmFyVGV4dCIsInVwbG9hZEZvcm0iLCJnZXRFbGVtZW50QnlJZCIsImlucHV0RmlsZSIsIml0ZW0iLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwidXBsb2FkRmlsZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsInVwbG9hZERhdGFGb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJ1cGxvYWQiLCJwZXJjZW50IiwibGVuZ3RoQ29tcHV0YWJsZSIsImxvYWRlZCIsInRvdGFsIiwiJCIsIndpZHRoIiwiaHRtbCIsInNlbmQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=