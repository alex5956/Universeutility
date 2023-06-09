"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["index"],{

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

var stripe = Stripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

function registerElements(elements, exampleName) {
  var formClass = '.' + exampleName;
  var example = document.querySelector(formClass);
  var form = example.querySelector('form');
  var resetButton = example.querySelector('a.reset');
  var error = form.querySelector('.error');
  var errorMessage = error.querySelector('.message');

  function enableInputs() {
    Array.prototype.forEach.call(form.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']"), function (input) {
      input.removeAttribute('disabled');
    });
  }

  function disableInputs() {
    Array.prototype.forEach.call(form.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']"), function (input) {
      input.setAttribute('disabled', 'true');
    });
  }

  function triggerBrowserValidation() {
    // The only way to trigger HTML5 form validation UI is to fake a user submit
    // event.
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.style.display = 'none';
    form.appendChild(submit);
    submit.click();
    submit.remove();
  } // Listen for errors from each Element, and show error messages in the UI.


  var savedErrors = {};
  elements.forEach(function (element, idx) {
    element.on('change', function (event) {
      if (event.error) {
        error.classList.add('visible');
        savedErrors[idx] = event.error.message;
        errorMessage.innerText = event.error.message;
      } else {
        savedErrors[idx] = null; // Loop over the saved errors and find the first one, if any.

        var nextError = Object.keys(savedErrors).sort().reduce(function (maybeFoundError, key) {
          return maybeFoundError || savedErrors[key];
        }, null);

        if (nextError) {
          // Now that they've fixed the current error, show another one.
          errorMessage.innerText = nextError;
        } else {
          // The user fixed the last error; no more errors.
          error.classList.remove('visible');
        }
      }
    });
  }); // Listen on the form's 'submit' handler...

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Trigger HTML5 validation UI on the form if any of the inputs fail
    // validation.

    var plainInputsValid = true;
    Array.prototype.forEach.call(form.querySelectorAll('input'), function (input) {
      if (input.checkValidity && !input.checkValidity()) {
        plainInputsValid = false;
        return;
      }
    });

    if (!plainInputsValid) {
      triggerBrowserValidation();
      return;
    } // Show a loading screen...


    example.classList.add('submitting'); // Disable all inputs.

    disableInputs(); // Gather additional customer data we may have collected in our form.

    var name = form.querySelector('#' + exampleName + '-name');
    var address1 = form.querySelector('#' + exampleName + '-address');
    var city = form.querySelector('#' + exampleName + '-city');
    var state = form.querySelector('#' + exampleName + '-state');
    var zip = form.querySelector('#' + exampleName + '-zip');
    var additionalData = {
      name: name ? name.value : undefined,
      address_line1: address1 ? address1.value : undefined,
      address_city: city ? city.value : undefined,
      address_state: state ? state.value : undefined,
      address_zip: zip ? zip.value : undefined
    }; // Use Stripe.js to create a token. We only need to pass in one Element
    // from the Element group in order to create a token. We can also pass
    // in the additional customer data we collected in our form.

    stripe.createToken(elements[0], additionalData).then(function (result) {
      // Stop loading!
      example.classList.remove('submitting');

      if (result.token) {
        // If we received a token, show the token ID.
        example.querySelector('.token').innerText = result.token.id;
        example.classList.add('submitted');
      } else {
        // Otherwise, un-disable inputs.
        enableInputs();
      }
    });
  });
  resetButton.addEventListener('click', function (e) {
    e.preventDefault(); // Resetting the form (instead of setting the value to `''` for each input)
    // helps us clear webkit autofill styles.

    form.reset(); // Clear each Element.

    elements.forEach(function (element) {
      element.clear();
    }); // Reset error state as well.

    error.classList.remove('visible'); // Resetting the form does not un-disable inputs, so we need to do it separately:

    enableInputs();
    example.classList.remove('submitted');
  });
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_function-name_js-node_modules_core-js_internals_object-792382","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-633d96","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c24df9"], () => (__webpack_exec__("./assets/js/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF6RDtBQUNBL0QsUUFBQUEsT0FBTyxDQUFDK0IsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsV0FBdEI7QUFDRCxPQUpELE1BSU87QUFDTDtBQUNBekIsUUFBQUEsWUFBWTtBQUNiO0FBQ0YsS0FaRDtBQWFELEdBdkREO0FBeURBSCxFQUFBQSxXQUFXLENBQUNzQyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFTQyxDQUFULEVBQVk7QUFDaERBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRixHQURnRCxDQUVoRDtBQUNBOztBQUNBekMsSUFBQUEsSUFBSSxDQUFDNkQsS0FBTCxHQUpnRCxDQU1oRDs7QUFDQW5FLElBQUFBLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQixVQUFTaUIsT0FBVCxFQUFrQjtBQUNqQ0EsTUFBQUEsT0FBTyxDQUFDc0MsS0FBUjtBQUNELEtBRkQsRUFQZ0QsQ0FXaEQ7O0FBQ0E1RCxJQUFBQSxLQUFLLENBQUMwQixTQUFOLENBQWdCTixNQUFoQixDQUF1QixTQUF2QixFQVpnRCxDQWNoRDs7QUFDQWxCLElBQUFBLFlBQVk7QUFDWlAsSUFBQUEsT0FBTyxDQUFDK0IsU0FBUixDQUFrQk4sTUFBbEIsQ0FBeUIsV0FBekI7QUFDRCxHQWpCRDtBQWtCRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpcGUgPSBTdHJpcGUoJ3BrX3Rlc3RfNnBSTkFTQ29CT0t0SXNoRmVRZDRYTVVoJyk7XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRWxlbWVudHMoZWxlbWVudHMsIGV4YW1wbGVOYW1lKSB7XG4gIHZhciBmb3JtQ2xhc3MgPSAnLicgKyBleGFtcGxlTmFtZTtcbiAgdmFyIGV4YW1wbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1DbGFzcyk7XG5cbiAgdmFyIGZvcm0gPSBleGFtcGxlLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgdmFyIHJlc2V0QnV0dG9uID0gZXhhbXBsZS5xdWVyeVNlbGVjdG9yKCdhLnJlc2V0Jyk7XG4gIHZhciBlcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG4gIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xuXG4gIGZ1bmN0aW9uIGVuYWJsZUlucHV0cygpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKFxuICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcImlucHV0W3R5cGU9J3RleHQnXSwgaW5wdXRbdHlwZT0nZW1haWwnXSwgaW5wdXRbdHlwZT0ndGVsJ11cIlxuICAgICAgKSxcbiAgICAgIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZUlucHV0cygpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKFxuICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcImlucHV0W3R5cGU9J3RleHQnXSwgaW5wdXRbdHlwZT0nZW1haWwnXSwgaW5wdXRbdHlwZT0ndGVsJ11cIlxuICAgICAgKSxcbiAgICAgIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyQnJvd3NlclZhbGlkYXRpb24oKSB7XG4gICAgLy8gVGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgSFRNTDUgZm9ybSB2YWxpZGF0aW9uIFVJIGlzIHRvIGZha2UgYSB1c2VyIHN1Ym1pdFxuICAgIC8vIGV2ZW50LlxuICAgIHZhciBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgIHN1Ym1pdC5jbGljaygpO1xuICAgIHN1Ym1pdC5yZW1vdmUoKTtcbiAgfVxuXG4gIC8vIExpc3RlbiBmb3IgZXJyb3JzIGZyb20gZWFjaCBFbGVtZW50LCBhbmQgc2hvdyBlcnJvciBtZXNzYWdlcyBpbiB0aGUgVUkuXG4gIHZhciBzYXZlZEVycm9ycyA9IHt9O1xuICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGlkeCkge1xuICAgIGVsZW1lbnQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZXJyb3IpIHtcbiAgICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICBzYXZlZEVycm9yc1tpZHhdID0gZXZlbnQuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IGV2ZW50LmVycm9yLm1lc3NhZ2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYXZlZEVycm9yc1tpZHhdID0gbnVsbDtcblxuICAgICAgICAvLyBMb29wIG92ZXIgdGhlIHNhdmVkIGVycm9ycyBhbmQgZmluZCB0aGUgZmlyc3Qgb25lLCBpZiBhbnkuXG4gICAgICAgIHZhciBuZXh0RXJyb3IgPSBPYmplY3Qua2V5cyhzYXZlZEVycm9ycylcbiAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihtYXliZUZvdW5kRXJyb3IsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIG1heWJlRm91bmRFcnJvciB8fCBzYXZlZEVycm9yc1trZXldO1xuICAgICAgICAgIH0sIG51bGwpO1xuXG4gICAgICAgIGlmIChuZXh0RXJyb3IpIHtcbiAgICAgICAgICAvLyBOb3cgdGhhdCB0aGV5J3ZlIGZpeGVkIHRoZSBjdXJyZW50IGVycm9yLCBzaG93IGFub3RoZXIgb25lLlxuICAgICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBuZXh0RXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGhlIHVzZXIgZml4ZWQgdGhlIGxhc3QgZXJyb3I7IG5vIG1vcmUgZXJyb3JzLlxuICAgICAgICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICAvLyBMaXN0ZW4gb24gdGhlIGZvcm0ncyAnc3VibWl0JyBoYW5kbGVyLi4uXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIFRyaWdnZXIgSFRNTDUgdmFsaWRhdGlvbiBVSSBvbiB0aGUgZm9ybSBpZiBhbnkgb2YgdGhlIGlucHV0cyBmYWlsXG4gICAgLy8gdmFsaWRhdGlvbi5cbiAgICB2YXIgcGxhaW5JbnB1dHNWYWxpZCA9IHRydWU7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JyksIGZ1bmN0aW9uKFxuICAgICAgaW5wdXRcbiAgICApIHtcbiAgICAgIGlmIChpbnB1dC5jaGVja1ZhbGlkaXR5ICYmICFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgcGxhaW5JbnB1dHNWYWxpZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKCFwbGFpbklucHV0c1ZhbGlkKSB7XG4gICAgICB0cmlnZ2VyQnJvd3NlclZhbGlkYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTaG93IGEgbG9hZGluZyBzY3JlZW4uLi5cbiAgICBleGFtcGxlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdHRpbmcnKTtcblxuICAgIC8vIERpc2FibGUgYWxsIGlucHV0cy5cbiAgICBkaXNhYmxlSW5wdXRzKCk7XG5cbiAgICAvLyBHYXRoZXIgYWRkaXRpb25hbCBjdXN0b21lciBkYXRhIHdlIG1heSBoYXZlIGNvbGxlY3RlZCBpbiBvdXIgZm9ybS5cbiAgICB2YXIgbmFtZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignIycgKyBleGFtcGxlTmFtZSArICctbmFtZScpO1xuICAgIHZhciBhZGRyZXNzMSA9IGZvcm0ucXVlcnlTZWxlY3RvcignIycgKyBleGFtcGxlTmFtZSArICctYWRkcmVzcycpO1xuICAgIHZhciBjaXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjJyArIGV4YW1wbGVOYW1lICsgJy1jaXR5Jyk7XG4gICAgdmFyIHN0YXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjJyArIGV4YW1wbGVOYW1lICsgJy1zdGF0ZScpO1xuICAgIHZhciB6aXAgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyMnICsgZXhhbXBsZU5hbWUgKyAnLXppcCcpO1xuICAgIHZhciBhZGRpdGlvbmFsRGF0YSA9IHtcbiAgICAgIG5hbWU6IG5hbWUgPyBuYW1lLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgYWRkcmVzc19saW5lMTogYWRkcmVzczEgPyBhZGRyZXNzMS52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGFkZHJlc3NfY2l0eTogY2l0eSA/IGNpdHkudmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICBhZGRyZXNzX3N0YXRlOiBzdGF0ZSA/IHN0YXRlLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgYWRkcmVzc196aXA6IHppcCA/IHppcC52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgLy8gVXNlIFN0cmlwZS5qcyB0byBjcmVhdGUgYSB0b2tlbi4gV2Ugb25seSBuZWVkIHRvIHBhc3MgaW4gb25lIEVsZW1lbnRcbiAgICAvLyBmcm9tIHRoZSBFbGVtZW50IGdyb3VwIGluIG9yZGVyIHRvIGNyZWF0ZSBhIHRva2VuLiBXZSBjYW4gYWxzbyBwYXNzXG4gICAgLy8gaW4gdGhlIGFkZGl0aW9uYWwgY3VzdG9tZXIgZGF0YSB3ZSBjb2xsZWN0ZWQgaW4gb3VyIGZvcm0uXG4gICAgc3RyaXBlLmNyZWF0ZVRva2VuKGVsZW1lbnRzWzBdLCBhZGRpdGlvbmFsRGF0YSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgIC8vIFN0b3AgbG9hZGluZyFcbiAgICAgIGV4YW1wbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3VibWl0dGluZycpO1xuXG4gICAgICBpZiAocmVzdWx0LnRva2VuKSB7XG4gICAgICAgIC8vIElmIHdlIHJlY2VpdmVkIGEgdG9rZW4sIHNob3cgdGhlIHRva2VuIElELlxuICAgICAgICBleGFtcGxlLnF1ZXJ5U2VsZWN0b3IoJy50b2tlbicpLmlubmVyVGV4dCA9IHJlc3VsdC50b2tlbi5pZDtcbiAgICAgICAgZXhhbXBsZS5jbGFzc0xpc3QuYWRkKCdzdWJtaXR0ZWQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSwgdW4tZGlzYWJsZSBpbnB1dHMuXG4gICAgICAgIGVuYWJsZUlucHV0cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gUmVzZXR0aW5nIHRoZSBmb3JtIChpbnN0ZWFkIG9mIHNldHRpbmcgdGhlIHZhbHVlIHRvIGAnJ2AgZm9yIGVhY2ggaW5wdXQpXG4gICAgLy8gaGVscHMgdXMgY2xlYXIgd2Via2l0IGF1dG9maWxsIHN0eWxlcy5cbiAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAvLyBDbGVhciBlYWNoIEVsZW1lbnQuXG4gICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmNsZWFyKCk7XG4gICAgfSk7XG5cbiAgICAvLyBSZXNldCBlcnJvciBzdGF0ZSBhcyB3ZWxsLlxuICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcblxuICAgIC8vIFJlc2V0dGluZyB0aGUgZm9ybSBkb2VzIG5vdCB1bi1kaXNhYmxlIGlucHV0cywgc28gd2UgbmVlZCB0byBkbyBpdCBzZXBhcmF0ZWx5OlxuICAgIGVuYWJsZUlucHV0cygpO1xuICAgIGV4YW1wbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3VibWl0dGVkJyk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInN0cmlwZSIsIlN0cmlwZSIsInJlZ2lzdGVyRWxlbWVudHMiLCJlbGVtZW50cyIsImV4YW1wbGVOYW1lIiwiZm9ybUNsYXNzIiwiZXhhbXBsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcm0iLCJyZXNldEJ1dHRvbiIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiZW5hYmxlSW5wdXRzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dCIsInJlbW92ZUF0dHJpYnV0ZSIsImRpc2FibGVJbnB1dHMiLCJzZXRBdHRyaWJ1dGUiLCJ0cmlnZ2VyQnJvd3NlclZhbGlkYXRpb24iLCJzdWJtaXQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmUiLCJzYXZlZEVycm9ycyIsImVsZW1lbnQiLCJpZHgiLCJvbiIsImV2ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZSIsImlubmVyVGV4dCIsIm5leHRFcnJvciIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwicmVkdWNlIiwibWF5YmVGb3VuZEVycm9yIiwia2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWluSW5wdXRzVmFsaWQiLCJjaGVja1ZhbGlkaXR5IiwibmFtZSIsImFkZHJlc3MxIiwiY2l0eSIsInN0YXRlIiwiemlwIiwiYWRkaXRpb25hbERhdGEiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImFkZHJlc3NfbGluZTEiLCJhZGRyZXNzX2NpdHkiLCJhZGRyZXNzX3N0YXRlIiwiYWRkcmVzc196aXAiLCJjcmVhdGVUb2tlbiIsInRoZW4iLCJyZXN1bHQiLCJ0b2tlbiIsImlkIiwicmVzZXQiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=