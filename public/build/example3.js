(self["webpackChunk"] = self["webpackChunk"] || []).push([["example3"],{

/***/ "./assets/js/example3.js":
/*!*******************************!*\
  !*** ./assets/js/example3.js ***!
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
      cssSrc: 'https://fonts.googleapis.com/css?family=Quicksand'
    }],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });
  var elementStyles = {
    base: {
      color: '#fff',
      fontWeight: 600,
      fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':focus': {
        color: '#424770'
      },
      '::placeholder': {
        color: '#9BACC8'
      },
      ':focus::placeholder': {
        color: '#CFD7DF'
      }
    },
    invalid: {
      color: '#fff',
      ':focus': {
        color: '#FA755A'
      },
      '::placeholder': {
        color: '#FFCCA5'
      }
    }
  };
  var elementClasses = {
    focus: 'focus',
    empty: 'empty',
    invalid: 'invalid'
  };
  var cardNumber = elements.create('cardNumber', {
    style: elementStyles,
    classes: elementClasses
  });
  cardNumber.mount('#example3-card-number');
  var cardExpiry = elements.create('cardExpiry', {
    style: elementStyles,
    classes: elementClasses
  });
  cardExpiry.mount('#example3-card-expiry');
  var cardCvc = elements.create('cardCvc', {
    style: elementStyles,
    classes: elementClasses
  });
  cardCvc.mount('#example3-card-cvc');
  registerElements([cardNumber, cardExpiry, cardCvc], 'example3');
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_function-name_js-node_modules_core-js_internals_object-792382","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-633d96","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c24df9"], () => (__webpack_exec__("./assets/js/example3.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQVEsRUFBQUEsT0FBTyxDQUFDRixLQUFSLENBQWMsb0JBQWQ7QUFFQXpGLEVBQUFBLGdCQUFnQixDQUFDLENBQUNzRixVQUFELEVBQWFJLFVBQWIsRUFBeUJDLE9BQXpCLENBQUQsRUFBb0MsVUFBcEMsQ0FBaEI7QUFDRCxDQS9ORCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9leGFtcGxlMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBzdHJpcGUgPSBTdHJpcGUoJ3BrX3Rlc3RfNnBSTkFTQ29CT0t0SXNoRmVRZDRYTVVoJyk7XG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJFbGVtZW50cyhlbGVtZW50cywgZXhhbXBsZU5hbWUpIHtcbiAgICB2YXIgZm9ybUNsYXNzID0gJy4nICsgZXhhbXBsZU5hbWU7XG4gICAgdmFyIGV4YW1wbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGZvcm1DbGFzcyk7XG5cbiAgICB2YXIgZm9ybSA9IGV4YW1wbGUucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgIHZhciByZXNldEJ1dHRvbiA9IGV4YW1wbGUucXVlcnlTZWxlY3RvcignYS5yZXNldCcpO1xuICAgIHZhciBlcnJvciA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmVycm9yJyk7XG4gICAgdmFyIGVycm9yTWVzc2FnZSA9IGVycm9yLnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG5cbiAgICBmdW5jdGlvbiBlbmFibGVJbnB1dHMoKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKFxuICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgICAgXCJpbnB1dFt0eXBlPSd0ZXh0J10sIGlucHV0W3R5cGU9J2VtYWlsJ10sIGlucHV0W3R5cGU9J3RlbCddXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNhYmxlSW5wdXRzKCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcbiAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgIFwiaW5wdXRbdHlwZT0ndGV4dCddLCBpbnB1dFt0eXBlPSdlbWFpbCddLCBpbnB1dFt0eXBlPSd0ZWwnXVwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyQnJvd3NlclZhbGlkYXRpb24oKSB7XG4gICAgICAvLyBUaGUgb25seSB3YXkgdG8gdHJpZ2dlciBIVE1MNSBmb3JtIHZhbGlkYXRpb24gVUkgaXMgdG8gZmFrZSBhIHVzZXIgc3VibWl0XG4gICAgICAvLyBldmVudC5cbiAgICAgIHZhciBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICAgIHN1Ym1pdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuICAgICAgc3VibWl0LmNsaWNrKCk7XG4gICAgICBzdWJtaXQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gTGlzdGVuIGZvciBlcnJvcnMgZnJvbSBlYWNoIEVsZW1lbnQsIGFuZCBzaG93IGVycm9yIG1lc3NhZ2VzIGluIHRoZSBVSS5cbiAgICB2YXIgc2F2ZWRFcnJvcnMgPSB7fTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGlkeCkge1xuICAgICAgZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmVycm9yKSB7XG4gICAgICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgIHNhdmVkRXJyb3JzW2lkeF0gPSBldmVudC5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgIGVycm9yTWVzc2FnZS5pbm5lclRleHQgPSBldmVudC5lcnJvci5tZXNzYWdlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNhdmVkRXJyb3JzW2lkeF0gPSBudWxsO1xuXG4gICAgICAgICAgLy8gTG9vcCBvdmVyIHRoZSBzYXZlZCBlcnJvcnMgYW5kIGZpbmQgdGhlIGZpcnN0IG9uZSwgaWYgYW55LlxuICAgICAgICAgIHZhciBuZXh0RXJyb3IgPSBPYmplY3Qua2V5cyhzYXZlZEVycm9ycylcbiAgICAgICAgICAgICAgLnNvcnQoKVxuICAgICAgICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKG1heWJlRm91bmRFcnJvciwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlRm91bmRFcnJvciB8fCBzYXZlZEVycm9yc1trZXldO1xuICAgICAgICAgICAgICB9LCBudWxsKTtcblxuICAgICAgICAgIGlmIChuZXh0RXJyb3IpIHtcbiAgICAgICAgICAgIC8vIE5vdyB0aGF0IHRoZXkndmUgZml4ZWQgdGhlIGN1cnJlbnQgZXJyb3IsIHNob3cgYW5vdGhlciBvbmUuXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gbmV4dEVycm9yO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBUaGUgdXNlciBmaXhlZCB0aGUgbGFzdCBlcnJvcjsgbm8gbW9yZSBlcnJvcnMuXG4gICAgICAgICAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIExpc3RlbiBvbiB0aGUgZm9ybSdzICdzdWJtaXQnIGhhbmRsZXIuLi5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gVHJpZ2dlciBIVE1MNSB2YWxpZGF0aW9uIFVJIG9uIHRoZSBmb3JtIGlmIGFueSBvZiB0aGUgaW5wdXRzIGZhaWxcbiAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICB2YXIgcGxhaW5JbnB1dHNWYWxpZCA9IHRydWU7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSwgZnVuY3Rpb24oXG4gICAgICAgICAgaW5wdXRcbiAgICAgICkge1xuICAgICAgICBpZiAoaW5wdXQuY2hlY2tWYWxpZGl0eSAmJiAhaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgcGxhaW5JbnB1dHNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIXBsYWluSW5wdXRzVmFsaWQpIHtcbiAgICAgICAgdHJpZ2dlckJyb3dzZXJWYWxpZGF0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gU2hvdyBhIGxvYWRpbmcgc2NyZWVuLi4uXG4gICAgICBleGFtcGxlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdHRpbmcnKTtcblxuICAgICAgLy8gRGlzYWJsZSBhbGwgaW5wdXRzLlxuICAgICAgZGlzYWJsZUlucHV0cygpO1xuXG4gICAgICAvLyBHYXRoZXIgYWRkaXRpb25hbCBjdXN0b21lciBkYXRhIHdlIG1heSBoYXZlIGNvbGxlY3RlZCBpbiBvdXIgZm9ybS5cbiAgICAgIHZhciBuYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjJyArIGV4YW1wbGVOYW1lICsgJy1uYW1lJyk7XG4gICAgICB2YXIgYWRkcmVzczEgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyMnICsgZXhhbXBsZU5hbWUgKyAnLWFkZHJlc3MnKTtcbiAgICAgIHZhciBjaXR5ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjJyArIGV4YW1wbGVOYW1lICsgJy1jaXR5Jyk7XG4gICAgICB2YXIgc3RhdGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyMnICsgZXhhbXBsZU5hbWUgKyAnLXN0YXRlJyk7XG4gICAgICB2YXIgemlwID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjJyArIGV4YW1wbGVOYW1lICsgJy16aXAnKTtcbiAgICAgIHZhciBhZGRpdGlvbmFsRGF0YSA9IHtcbiAgICAgICAgbmFtZTogbmFtZSA/IG5hbWUudmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICAgIGFkZHJlc3NfbGluZTE6IGFkZHJlc3MxID8gYWRkcmVzczEudmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICAgIGFkZHJlc3NfY2l0eTogY2l0eSA/IGNpdHkudmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICAgIGFkZHJlc3Nfc3RhdGU6IHN0YXRlID8gc3RhdGUudmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICAgIGFkZHJlc3NfemlwOiB6aXAgPyB6aXAudmFsdWUgOiB1bmRlZmluZWQsXG4gICAgICB9O1xuXG4gICAgICAvLyBVc2UgU3RyaXBlLmpzIHRvIGNyZWF0ZSBhIHRva2VuLiBXZSBvbmx5IG5lZWQgdG8gcGFzcyBpbiBvbmUgRWxlbWVudFxuICAgICAgLy8gZnJvbSB0aGUgRWxlbWVudCBncm91cCBpbiBvcmRlciB0byBjcmVhdGUgYSB0b2tlbi4gV2UgY2FuIGFsc28gcGFzc1xuICAgICAgLy8gaW4gdGhlIGFkZGl0aW9uYWwgY3VzdG9tZXIgZGF0YSB3ZSBjb2xsZWN0ZWQgaW4gb3VyIGZvcm0uXG4gICAgICBzdHJpcGUuY3JlYXRlVG9rZW4oZWxlbWVudHNbMF0sIGFkZGl0aW9uYWxEYXRhKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAvLyBTdG9wIGxvYWRpbmchXG4gICAgICAgIGV4YW1wbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3VibWl0dGluZycpO1xuXG4gICAgICAgIGlmIChyZXN1bHQudG9rZW4pIHtcbiAgICAgICAgICAvLyBJZiB3ZSByZWNlaXZlZCBhIHRva2VuLCBzaG93IHRoZSB0b2tlbiBJRC5cbiAgICAgICAgICBleGFtcGxlLnF1ZXJ5U2VsZWN0b3IoJy50b2tlbicpLmlubmVyVGV4dCA9IHJlc3VsdC50b2tlbi5pZDtcbiAgICAgICAgICBleGFtcGxlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdHRlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSwgdW4tZGlzYWJsZSBpbnB1dHMuXG4gICAgICAgICAgZW5hYmxlSW5wdXRzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBSZXNldHRpbmcgdGhlIGZvcm0gKGluc3RlYWQgb2Ygc2V0dGluZyB0aGUgdmFsdWUgdG8gYCcnYCBmb3IgZWFjaCBpbnB1dClcbiAgICAgIC8vIGhlbHBzIHVzIGNsZWFyIHdlYmtpdCBhdXRvZmlsbCBzdHlsZXMuXG4gICAgICBmb3JtLnJlc2V0KCk7XG5cbiAgICAgIC8vIENsZWFyIGVhY2ggRWxlbWVudC5cbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsZWFyKCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gUmVzZXQgZXJyb3Igc3RhdGUgYXMgd2VsbC5cbiAgICAgIGVycm9yLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcblxuICAgICAgLy8gUmVzZXR0aW5nIHRoZSBmb3JtIGRvZXMgbm90IHVuLWRpc2FibGUgaW5wdXRzLCBzbyB3ZSBuZWVkIHRvIGRvIGl0IHNlcGFyYXRlbHk6XG4gICAgICBlbmFibGVJbnB1dHMoKTtcbiAgICAgIGV4YW1wbGUuY2xhc3NMaXN0LnJlbW92ZSgnc3VibWl0dGVkJyk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgZWxlbWVudHMgPSBzdHJpcGUuZWxlbWVudHMoe1xuICAgIGZvbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGNzc1NyYzogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1RdWlja3NhbmQnLFxuICAgICAgfSxcbiAgICBdLFxuICAgIC8vIFN0cmlwZSdzIGV4YW1wbGVzIGFyZSBsb2NhbGl6ZWQgdG8gc3BlY2lmaWMgbGFuZ3VhZ2VzLCBidXQgaWZcbiAgICAvLyB5b3Ugd2lzaCB0byBoYXZlIEVsZW1lbnRzIGF1dG9tYXRpY2FsbHkgZGV0ZWN0IHlvdXIgdXNlcidzIGxvY2FsZSxcbiAgICAvLyB1c2UgYGxvY2FsZTogJ2F1dG8nYCBpbnN0ZWFkLlxuICAgIGxvY2FsZTogd2luZG93Ll9fZXhhbXBsZUxvY2FsZSxcbiAgfSk7XG5cbiAgdmFyIGVsZW1lbnRTdHlsZXMgPSB7XG4gICAgYmFzZToge1xuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgIGZvbnRGYW1pbHk6ICdRdWlja3NhbmQsIE9wZW4gU2FucywgU2Vnb2UgVUksIHNhbnMtc2VyaWYnLFxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG5cbiAgICAgICc6Zm9jdXMnOiB7XG4gICAgICAgIGNvbG9yOiAnIzQyNDc3MCcsXG4gICAgICB9LFxuXG4gICAgICAnOjpwbGFjZWhvbGRlcic6IHtcbiAgICAgICAgY29sb3I6ICcjOUJBQ0M4JyxcbiAgICAgIH0sXG5cbiAgICAgICc6Zm9jdXM6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBjb2xvcjogJyNDRkQ3REYnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGludmFsaWQ6IHtcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAnOmZvY3VzJzoge1xuICAgICAgICBjb2xvcjogJyNGQTc1NUEnLFxuICAgICAgfSxcbiAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBjb2xvcjogJyNGRkNDQTUnLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIHZhciBlbGVtZW50Q2xhc3NlcyA9IHtcbiAgICBmb2N1czogJ2ZvY3VzJyxcbiAgICBlbXB0eTogJ2VtcHR5JyxcbiAgICBpbnZhbGlkOiAnaW52YWxpZCcsXG4gIH07XG5cbiAgdmFyIGNhcmROdW1iZXIgPSBlbGVtZW50cy5jcmVhdGUoJ2NhcmROdW1iZXInLCB7XG4gICAgc3R5bGU6IGVsZW1lbnRTdHlsZXMsXG4gICAgY2xhc3NlczogZWxlbWVudENsYXNzZXMsXG4gIH0pO1xuICBjYXJkTnVtYmVyLm1vdW50KCcjZXhhbXBsZTMtY2FyZC1udW1iZXInKTtcblxuICB2YXIgY2FyZEV4cGlyeSA9IGVsZW1lbnRzLmNyZWF0ZSgnY2FyZEV4cGlyeScsIHtcbiAgICBzdHlsZTogZWxlbWVudFN0eWxlcyxcbiAgICBjbGFzc2VzOiBlbGVtZW50Q2xhc3NlcyxcbiAgfSk7XG4gIGNhcmRFeHBpcnkubW91bnQoJyNleGFtcGxlMy1jYXJkLWV4cGlyeScpO1xuXG4gIHZhciBjYXJkQ3ZjID0gZWxlbWVudHMuY3JlYXRlKCdjYXJkQ3ZjJywge1xuICAgIHN0eWxlOiBlbGVtZW50U3R5bGVzLFxuICAgIGNsYXNzZXM6IGVsZW1lbnRDbGFzc2VzLFxuICB9KTtcbiAgY2FyZEN2Yy5tb3VudCgnI2V4YW1wbGUzLWNhcmQtY3ZjJyk7XG5cbiAgcmVnaXN0ZXJFbGVtZW50cyhbY2FyZE51bWJlciwgY2FyZEV4cGlyeSwgY2FyZEN2Y10sICdleGFtcGxlMycpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJTdHJpcGUiLCJyZWdpc3RlckVsZW1lbnRzIiwiZWxlbWVudHMiLCJleGFtcGxlTmFtZSIsImZvcm1DbGFzcyIsImV4YW1wbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwicmVzZXRCdXR0b24iLCJlcnJvciIsImVycm9yTWVzc2FnZSIsImVuYWJsZUlucHV0cyIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkaXNhYmxlSW5wdXRzIiwic2V0QXR0cmlidXRlIiwidHJpZ2dlckJyb3dzZXJWYWxpZGF0aW9uIiwic3VibWl0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlIiwic2F2ZWRFcnJvcnMiLCJlbGVtZW50IiwiaWR4Iiwib24iLCJldmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2UiLCJpbm5lclRleHQiLCJuZXh0RXJyb3IiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInJlZHVjZSIsIm1heWJlRm91bmRFcnJvciIsImtleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwbGFpbklucHV0c1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsIm5hbWUiLCJhZGRyZXNzMSIsImNpdHkiLCJzdGF0ZSIsInppcCIsImFkZGl0aW9uYWxEYXRhIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJhZGRyZXNzX2xpbmUxIiwiYWRkcmVzc19jaXR5IiwiYWRkcmVzc19zdGF0ZSIsImFkZHJlc3NfemlwIiwiY3JlYXRlVG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwidG9rZW4iLCJpZCIsInJlc2V0IiwiY2xlYXIiLCJmb250cyIsImNzc1NyYyIsImxvY2FsZSIsIndpbmRvdyIsIl9fZXhhbXBsZUxvY2FsZSIsImVsZW1lbnRTdHlsZXMiLCJiYXNlIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFNtb290aGluZyIsImludmFsaWQiLCJlbGVtZW50Q2xhc3NlcyIsImZvY3VzIiwiZW1wdHkiLCJjYXJkTnVtYmVyIiwiY3JlYXRlIiwiY2xhc3NlcyIsIm1vdW50IiwiY2FyZEV4cGlyeSIsImNhcmRDdmMiXSwic291cmNlUm9vdCI6IiJ9