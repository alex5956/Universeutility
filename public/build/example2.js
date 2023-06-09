(self["webpackChunk"] = self["webpackChunk"] || []).push([["example2"],{

/***/ "./assets/js/example2.js":
/*!*******************************!*\
  !*** ./assets/js/example2.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");

__webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");

(function () {
  'use strict';
  'use strict';

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

  var elements = stripe.elements({
    fonts: [{
      cssSrc: 'https://fonts.googleapis.com/css?family=Source+Code+Pro'
    }],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  }); // Floating labels

  var inputs = document.querySelectorAll('.cell.example.example2 .input');
  Array.prototype.forEach.call(inputs, function (input) {
    input.addEventListener('focus', function () {
      input.classList.add('focused');
    });
    input.addEventListener('blur', function () {
      input.classList.remove('focused');
    });
    input.addEventListener('keyup', function () {
      if (input.value.length === 0) {
        input.classList.add('empty');
      } else {
        input.classList.remove('empty');
      }
    });
  });
  var elementStyles = {
    base: {
      color: '#32325D',
      fontWeight: 500,
      fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#CFD7DF'
      },
      ':-webkit-autofill': {
        color: '#e39f48'
      }
    },
    invalid: {
      color: '#E25950',
      '::placeholder': {
        color: '#FFCCA5'
      }
    }
  };
  var elementClasses = {
    focus: 'focused',
    empty: 'empty',
    invalid: 'invalid'
  };
  var cardNumber = elements.create('cardNumber', {
    style: elementStyles,
    classes: elementClasses
  });
  cardNumber.mount('#example2-card-number');
  var cardExpiry = elements.create('cardExpiry', {
    style: elementStyles,
    classes: elementClasses
  });
  cardExpiry.mount('#example2-card-expiry');
  var cardCvc = elements.create('cardCvc', {
    style: elementStyles,
    classes: elementClasses
  });
  cardCvc.mount('#example2-card-cvc');
  registerElements([cardNumber, cardExpiry, cardCvc], 'example2');
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_function-name_js-node_modules_core-js_internals_object-792382","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-633d96","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c24df9"], () => (__webpack_exec__("./assets/js/example2.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlNLGNBQWMsR0FBRztBQUNuQkMsSUFBQUEsS0FBSyxFQUFFLFNBRFk7QUFFbkJDLElBQUFBLEtBQUssRUFBRSxPQUZZO0FBR25CSCxJQUFBQSxPQUFPLEVBQUU7QUFIVSxHQUFyQjtBQU1BLE1BQUlJLFVBQVUsR0FBR3ZGLFFBQVEsQ0FBQ3dGLE1BQVQsQ0FBZ0IsWUFBaEIsRUFBOEI7QUFDN0NoRSxJQUFBQSxLQUFLLEVBQUVvRCxhQURzQztBQUU3Q2EsSUFBQUEsT0FBTyxFQUFFTDtBQUZvQyxHQUE5QixDQUFqQjtBQUlBRyxFQUFBQSxVQUFVLENBQUNHLEtBQVgsQ0FBaUIsdUJBQWpCO0FBRUEsTUFBSUMsVUFBVSxHQUFHM0YsUUFBUSxDQUFDd0YsTUFBVCxDQUFnQixZQUFoQixFQUE4QjtBQUM3Q2hFLElBQUFBLEtBQUssRUFBRW9ELGFBRHNDO0FBRTdDYSxJQUFBQSxPQUFPLEVBQUVMO0FBRm9DLEdBQTlCLENBQWpCO0FBSUFPLEVBQUFBLFVBQVUsQ0FBQ0QsS0FBWCxDQUFpQix1QkFBakI7QUFFQSxNQUFJRSxPQUFPLEdBQUc1RixRQUFRLENBQUN3RixNQUFULENBQWdCLFNBQWhCLEVBQTJCO0FBQ3ZDaEUsSUFBQUEsS0FBSyxFQUFFb0QsYUFEZ0M7QUFFdkNhLElBQUFBLE9BQU8sRUFBRUw7QUFGOEIsR0FBM0IsQ0FBZDtBQUlBUSxFQUFBQSxPQUFPLENBQUNGLEtBQVIsQ0FBYyxvQkFBZDtBQUVBM0YsRUFBQUEsZ0JBQWdCLENBQUMsQ0FBQ3dGLFVBQUQsRUFBYUksVUFBYixFQUF5QkMsT0FBekIsQ0FBRCxFQUFvQyxVQUFwQyxDQUFoQjtBQUNELENBMU9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2V4YW1wbGUyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHN0cmlwZSA9IFN0cmlwZSgncGtfdGVzdF82cFJOQVNDb0JPS3RJc2hGZVFkNFhNVWgnKTtcblxuICBmdW5jdGlvbiByZWdpc3RlckVsZW1lbnRzKGVsZW1lbnRzLCBleGFtcGxlTmFtZSkge1xuICAgIHZhciBmb3JtQ2xhc3MgPSAnLicgKyBleGFtcGxlTmFtZTtcbiAgICB2YXIgZXhhbXBsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZm9ybUNsYXNzKTtcblxuICAgIHZhciBmb3JtID0gZXhhbXBsZS5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgdmFyIHJlc2V0QnV0dG9uID0gZXhhbXBsZS5xdWVyeVNlbGVjdG9yKCdhLnJlc2V0Jyk7XG4gICAgdmFyIGVycm9yID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKTtcbiAgICB2YXIgZXJyb3JNZXNzYWdlID0gZXJyb3IucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcblxuICAgIGZ1bmN0aW9uIGVuYWJsZUlucHV0cygpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoXG4gICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICBcImlucHV0W3R5cGU9J3RleHQnXSwgaW5wdXRbdHlwZT0nZW1haWwnXSwgaW5wdXRbdHlwZT0ndGVsJ11cIlxuICAgICAgICAgICksXG4gICAgICAgICAgZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVJbnB1dHMoKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKFxuICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgXCJpbnB1dFt0eXBlPSd0ZXh0J10sIGlucHV0W3R5cGU9J2VtYWlsJ10sIGlucHV0W3R5cGU9J3RlbCddXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB9XG4gICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJCcm93c2VyVmFsaWRhdGlvbigpIHtcbiAgICAgIC8vIFRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIEhUTUw1IGZvcm0gdmFsaWRhdGlvbiBVSSBpcyB0byBmYWtlIGEgdXNlciBzdWJtaXRcbiAgICAgIC8vIGV2ZW50LlxuICAgICAgdmFyIHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgICAgc3VibWl0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gICAgICBzdWJtaXQuY2xpY2soKTtcbiAgICAgIHN1Ym1pdC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBMaXN0ZW4gZm9yIGVycm9ycyBmcm9tIGVhY2ggRWxlbWVudCwgYW5kIHNob3cgZXJyb3IgbWVzc2FnZXMgaW4gdGhlIFVJLlxuICAgIHZhciBzYXZlZEVycm9ycyA9IHt9O1xuICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCwgaWR4KSB7XG4gICAgICBlbGVtZW50Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZXJyb3IpIHtcbiAgICAgICAgICBlcnJvci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgc2F2ZWRFcnJvcnNbaWR4XSA9IGV2ZW50LmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IGV2ZW50LmVycm9yLm1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2F2ZWRFcnJvcnNbaWR4XSA9IG51bGw7XG5cbiAgICAgICAgICAvLyBMb29wIG92ZXIgdGhlIHNhdmVkIGVycm9ycyBhbmQgZmluZCB0aGUgZmlyc3Qgb25lLCBpZiBhbnkuXG4gICAgICAgICAgdmFyIG5leHRFcnJvciA9IE9iamVjdC5rZXlzKHNhdmVkRXJyb3JzKVxuICAgICAgICAgICAgICAuc29ydCgpXG4gICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24obWF5YmVGb3VuZEVycm9yLCBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF5YmVGb3VuZEVycm9yIHx8IHNhdmVkRXJyb3JzW2tleV07XG4gICAgICAgICAgICAgIH0sIG51bGwpO1xuXG4gICAgICAgICAgaWYgKG5leHRFcnJvcikge1xuICAgICAgICAgICAgLy8gTm93IHRoYXQgdGhleSd2ZSBmaXhlZCB0aGUgY3VycmVudCBlcnJvciwgc2hvdyBhbm90aGVyIG9uZS5cbiAgICAgICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBuZXh0RXJyb3I7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFRoZSB1c2VyIGZpeGVkIHRoZSBsYXN0IGVycm9yOyBubyBtb3JlIGVycm9ycy5cbiAgICAgICAgICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gTGlzdGVuIG9uIHRoZSBmb3JtJ3MgJ3N1Ym1pdCcgaGFuZGxlci4uLlxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyBUcmlnZ2VyIEhUTUw1IHZhbGlkYXRpb24gVUkgb24gdGhlIGZvcm0gaWYgYW55IG9mIHRoZSBpbnB1dHMgZmFpbFxuICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgIHZhciBwbGFpbklucHV0c1ZhbGlkID0gdHJ1ZTtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpLCBmdW5jdGlvbihcbiAgICAgICAgICBpbnB1dFxuICAgICAgKSB7XG4gICAgICAgIGlmIChpbnB1dC5jaGVja1ZhbGlkaXR5ICYmICFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICBwbGFpbklucHV0c1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghcGxhaW5JbnB1dHNWYWxpZCkge1xuICAgICAgICB0cmlnZ2VyQnJvd3NlclZhbGlkYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93IGEgbG9hZGluZyBzY3JlZW4uLi5cbiAgICAgIGV4YW1wbGUuY2xhc3NMaXN0LmFkZCgnc3VibWl0dGluZycpO1xuXG4gICAgICAvLyBEaXNhYmxlIGFsbCBpbnB1dHMuXG4gICAgICBkaXNhYmxlSW5wdXRzKCk7XG5cbiAgICAgIC8vIEdhdGhlciBhZGRpdGlvbmFsIGN1c3RvbWVyIGRhdGEgd2UgbWF5IGhhdmUgY29sbGVjdGVkIGluIG91ciBmb3JtLlxuICAgICAgdmFyIG5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyMnICsgZXhhbXBsZU5hbWUgKyAnLW5hbWUnKTtcbiAgICAgIHZhciBhZGRyZXNzMSA9IGZvcm0ucXVlcnlTZWxlY3RvcignIycgKyBleGFtcGxlTmFtZSArICctYWRkcmVzcycpO1xuICAgICAgdmFyIGNpdHkgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyMnICsgZXhhbXBsZU5hbWUgKyAnLWNpdHknKTtcbiAgICAgIHZhciBzdGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignIycgKyBleGFtcGxlTmFtZSArICctc3RhdGUnKTtcbiAgICAgIHZhciB6aXAgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyMnICsgZXhhbXBsZU5hbWUgKyAnLXppcCcpO1xuICAgICAgdmFyIGFkZGl0aW9uYWxEYXRhID0ge1xuICAgICAgICBuYW1lOiBuYW1lID8gbmFtZS52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgYWRkcmVzc19saW5lMTogYWRkcmVzczEgPyBhZGRyZXNzMS52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgYWRkcmVzc19jaXR5OiBjaXR5ID8gY2l0eS52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgYWRkcmVzc19zdGF0ZTogc3RhdGUgPyBzdGF0ZS52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgYWRkcmVzc196aXA6IHppcCA/IHppcC52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIH07XG5cbiAgICAgIC8vIFVzZSBTdHJpcGUuanMgdG8gY3JlYXRlIGEgdG9rZW4uIFdlIG9ubHkgbmVlZCB0byBwYXNzIGluIG9uZSBFbGVtZW50XG4gICAgICAvLyBmcm9tIHRoZSBFbGVtZW50IGdyb3VwIGluIG9yZGVyIHRvIGNyZWF0ZSBhIHRva2VuLiBXZSBjYW4gYWxzbyBwYXNzXG4gICAgICAvLyBpbiB0aGUgYWRkaXRpb25hbCBjdXN0b21lciBkYXRhIHdlIGNvbGxlY3RlZCBpbiBvdXIgZm9ybS5cbiAgICAgIHN0cmlwZS5jcmVhdGVUb2tlbihlbGVtZW50c1swXSwgYWRkaXRpb25hbERhdGEpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIC8vIFN0b3AgbG9hZGluZyFcbiAgICAgICAgZXhhbXBsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdWJtaXR0aW5nJyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC50b2tlbikge1xuICAgICAgICAgIC8vIElmIHdlIHJlY2VpdmVkIGEgdG9rZW4sIHNob3cgdGhlIHRva2VuIElELlxuICAgICAgICAgIGV4YW1wbGUucXVlcnlTZWxlY3RvcignLnRva2VuJykuaW5uZXJUZXh0ID0gcmVzdWx0LnRva2VuLmlkO1xuICAgICAgICAgIGV4YW1wbGUuY2xhc3NMaXN0LmFkZCgnc3VibWl0dGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlLCB1bi1kaXNhYmxlIGlucHV0cy5cbiAgICAgICAgICBlbmFibGVJbnB1dHMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIFJlc2V0dGluZyB0aGUgZm9ybSAoaW5zdGVhZCBvZiBzZXR0aW5nIHRoZSB2YWx1ZSB0byBgJydgIGZvciBlYWNoIGlucHV0KVxuICAgICAgLy8gaGVscHMgdXMgY2xlYXIgd2Via2l0IGF1dG9maWxsIHN0eWxlcy5cbiAgICAgIGZvcm0ucmVzZXQoKTtcblxuICAgICAgLy8gQ2xlYXIgZWFjaCBFbGVtZW50LlxuICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xlYXIoKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZXNldCBlcnJvciBzdGF0ZSBhcyB3ZWxsLlxuICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuXG4gICAgICAvLyBSZXNldHRpbmcgdGhlIGZvcm0gZG9lcyBub3QgdW4tZGlzYWJsZSBpbnB1dHMsIHNvIHdlIG5lZWQgdG8gZG8gaXQgc2VwYXJhdGVseTpcbiAgICAgIGVuYWJsZUlucHV0cygpO1xuICAgICAgZXhhbXBsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdWJtaXR0ZWQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBlbGVtZW50cyA9IHN0cmlwZS5lbGVtZW50cyh7XG4gICAgZm9udHM6IFtcbiAgICAgIHtcbiAgICAgICAgY3NzU3JjOiAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStDb2RlK1BybycsXG4gICAgICB9LFxuICAgIF0sXG4gICAgLy8gU3RyaXBlJ3MgZXhhbXBsZXMgYXJlIGxvY2FsaXplZCB0byBzcGVjaWZpYyBsYW5ndWFnZXMsIGJ1dCBpZlxuICAgIC8vIHlvdSB3aXNoIHRvIGhhdmUgRWxlbWVudHMgYXV0b21hdGljYWxseSBkZXRlY3QgeW91ciB1c2VyJ3MgbG9jYWxlLFxuICAgIC8vIHVzZSBgbG9jYWxlOiAnYXV0bydgIGluc3RlYWQuXG4gICAgbG9jYWxlOiB3aW5kb3cuX19leGFtcGxlTG9jYWxlXG4gIH0pO1xuXG4gIC8vIEZsb2F0aW5nIGxhYmVsc1xuICB2YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwuZXhhbXBsZS5leGFtcGxlMiAuaW5wdXQnKTtcbiAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpbnB1dHMsIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2ZvY3VzZWQnKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1c2VkJyk7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciBlbGVtZW50U3R5bGVzID0ge1xuICAgIGJhc2U6IHtcbiAgICAgIGNvbG9yOiAnIzMyMzI1RCcsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBmb250RmFtaWx5OiAnU291cmNlIENvZGUgUHJvLCBDb25zb2xhcywgTWVubG8sIG1vbm9zcGFjZScsXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgZm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcblxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XG4gICAgICAgIGNvbG9yOiAnI0NGRDdERicsXG4gICAgICB9LFxuICAgICAgJzotd2Via2l0LWF1dG9maWxsJzoge1xuICAgICAgICBjb2xvcjogJyNlMzlmNDgnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGludmFsaWQ6IHtcbiAgICAgIGNvbG9yOiAnI0UyNTk1MCcsXG5cbiAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBjb2xvcjogJyNGRkNDQTUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBlbGVtZW50Q2xhc3NlcyA9IHtcbiAgICBmb2N1czogJ2ZvY3VzZWQnLFxuICAgIGVtcHR5OiAnZW1wdHknLFxuICAgIGludmFsaWQ6ICdpbnZhbGlkJyxcbiAgfTtcblxuICB2YXIgY2FyZE51bWJlciA9IGVsZW1lbnRzLmNyZWF0ZSgnY2FyZE51bWJlcicsIHtcbiAgICBzdHlsZTogZWxlbWVudFN0eWxlcyxcbiAgICBjbGFzc2VzOiBlbGVtZW50Q2xhc3NlcyxcbiAgfSk7XG4gIGNhcmROdW1iZXIubW91bnQoJyNleGFtcGxlMi1jYXJkLW51bWJlcicpO1xuXG4gIHZhciBjYXJkRXhwaXJ5ID0gZWxlbWVudHMuY3JlYXRlKCdjYXJkRXhwaXJ5Jywge1xuICAgIHN0eWxlOiBlbGVtZW50U3R5bGVzLFxuICAgIGNsYXNzZXM6IGVsZW1lbnRDbGFzc2VzLFxuICB9KTtcbiAgY2FyZEV4cGlyeS5tb3VudCgnI2V4YW1wbGUyLWNhcmQtZXhwaXJ5Jyk7XG5cbiAgdmFyIGNhcmRDdmMgPSBlbGVtZW50cy5jcmVhdGUoJ2NhcmRDdmMnLCB7XG4gICAgc3R5bGU6IGVsZW1lbnRTdHlsZXMsXG4gICAgY2xhc3NlczogZWxlbWVudENsYXNzZXMsXG4gIH0pO1xuICBjYXJkQ3ZjLm1vdW50KCcjZXhhbXBsZTItY2FyZC1jdmMnKTtcblxuICByZWdpc3RlckVsZW1lbnRzKFtjYXJkTnVtYmVyLCBjYXJkRXhwaXJ5LCBjYXJkQ3ZjXSwgJ2V4YW1wbGUyJyk7XG59KSgpO1xuIl0sIm5hbWVzIjpbInN0cmlwZSIsIlN0cmlwZSIsInJlZ2lzdGVyRWxlbWVudHMiLCJlbGVtZW50cyIsImV4YW1wbGVOYW1lIiwiZm9ybUNsYXNzIiwiZXhhbXBsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZvcm0iLCJyZXNldEJ1dHRvbiIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiZW5hYmxlSW5wdXRzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbnB1dCIsInJlbW92ZUF0dHJpYnV0ZSIsImRpc2FibGVJbnB1dHMiLCJzZXRBdHRyaWJ1dGUiLCJ0cmlnZ2VyQnJvd3NlclZhbGlkYXRpb24iLCJzdWJtaXQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInN0eWxlIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmUiLCJzYXZlZEVycm9ycyIsImVsZW1lbnQiLCJpZHgiLCJvbiIsImV2ZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWVzc2FnZSIsImlubmVyVGV4dCIsIm5leHRFcnJvciIsIk9iamVjdCIsImtleXMiLCJzb3J0IiwicmVkdWNlIiwibWF5YmVGb3VuZEVycm9yIiwia2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWluSW5wdXRzVmFsaWQiLCJjaGVja1ZhbGlkaXR5IiwibmFtZSIsImFkZHJlc3MxIiwiY2l0eSIsInN0YXRlIiwiemlwIiwiYWRkaXRpb25hbERhdGEiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImFkZHJlc3NfbGluZTEiLCJhZGRyZXNzX2NpdHkiLCJhZGRyZXNzX3N0YXRlIiwiYWRkcmVzc196aXAiLCJjcmVhdGVUb2tlbiIsInRoZW4iLCJyZXN1bHQiLCJ0b2tlbiIsImlkIiwicmVzZXQiLCJjbGVhciIsImZvbnRzIiwiY3NzU3JjIiwibG9jYWxlIiwid2luZG93IiwiX19leGFtcGxlTG9jYWxlIiwiaW5wdXRzIiwibGVuZ3RoIiwiZWxlbWVudFN0eWxlcyIsImJhc2UiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250U21vb3RoaW5nIiwiaW52YWxpZCIsImVsZW1lbnRDbGFzc2VzIiwiZm9jdXMiLCJlbXB0eSIsImNhcmROdW1iZXIiLCJjcmVhdGUiLCJjbGFzc2VzIiwibW91bnQiLCJjYXJkRXhwaXJ5IiwiY2FyZEN2YyJdLCJzb3VyY2VSb290IjoiIn0=