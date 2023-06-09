(self["webpackChunk"] = self["webpackChunk"] || []).push([["example1"],{

/***/ "./assets/js/example1.js":
/*!*******************************!*\
  !*** ./assets/js/example1.js ***!
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
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto'
    }],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });
  var card = elements.create('card', {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': {
          color: '#fce883'
        },
        '::placeholder': {
          color: '#87BBFD'
        }
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE'
      }
    }
  });
  card.mount('#example1-card');
  registerElements([card], 'example1');
})();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_function-name_js-node_modules_core-js_internals_object-792382","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-633d96","vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_arr-c24df9"], () => (__webpack_exec__("./assets/js/example1.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFDLFlBQVc7QUFDVjtBQUNBOztBQUVBLE1BQUlBLE1BQU0sR0FBR0MsTUFBTSxDQUFDLGtDQUFELENBQW5COztBQUVBLFdBQVNDLGdCQUFULENBQTBCQyxRQUExQixFQUFvQ0MsV0FBcEMsRUFBaUQ7QUFDL0MsUUFBSUMsU0FBUyxHQUFHLE1BQU1ELFdBQXRCO0FBQ0EsUUFBSUUsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJILFNBQXZCLENBQWQ7QUFFQSxRQUFJSSxJQUFJLEdBQUdILE9BQU8sQ0FBQ0UsYUFBUixDQUFzQixNQUF0QixDQUFYO0FBQ0EsUUFBSUUsV0FBVyxHQUFHSixPQUFPLENBQUNFLGFBQVIsQ0FBc0IsU0FBdEIsQ0FBbEI7QUFDQSxRQUFJRyxLQUFLLEdBQUdGLElBQUksQ0FBQ0QsYUFBTCxDQUFtQixRQUFuQixDQUFaO0FBQ0EsUUFBSUksWUFBWSxHQUFHRCxLQUFLLENBQUNILGFBQU4sQ0FBb0IsVUFBcEIsQ0FBbkI7O0FBRUEsYUFBU0ssWUFBVCxHQUF3QjtBQUN0QkMsTUFBQUEsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxPQUFoQixDQUF3QkMsSUFBeEIsQ0FDSVIsSUFBSSxDQUFDUyxnQkFBTCxDQUNJLDREQURKLENBREosRUFJSSxVQUFTQyxLQUFULEVBQWdCO0FBQ2RBLFFBQUFBLEtBQUssQ0FBQ0MsZUFBTixDQUFzQixVQUF0QjtBQUNELE9BTkw7QUFRRDs7QUFFRCxhQUFTQyxhQUFULEdBQXlCO0FBQ3ZCUCxNQUFBQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUNJUixJQUFJLENBQUNTLGdCQUFMLENBQ0ksNERBREosQ0FESixFQUlJLFVBQVNDLEtBQVQsRUFBZ0I7QUFDZEEsUUFBQUEsS0FBSyxDQUFDRyxZQUFOLENBQW1CLFVBQW5CLEVBQStCLE1BQS9CO0FBQ0QsT0FOTDtBQVFEOztBQUVELGFBQVNDLHdCQUFULEdBQW9DO0FBQ2xDO0FBQ0E7QUFDQSxVQUFJQyxNQUFNLEdBQUdqQixRQUFRLENBQUNrQixhQUFULENBQXVCLE9BQXZCLENBQWI7QUFDQUQsTUFBQUEsTUFBTSxDQUFDRSxJQUFQLEdBQWMsUUFBZDtBQUNBRixNQUFBQSxNQUFNLENBQUNHLEtBQVAsQ0FBYUMsT0FBYixHQUF1QixNQUF2QjtBQUNBbkIsTUFBQUEsSUFBSSxDQUFDb0IsV0FBTCxDQUFpQkwsTUFBakI7QUFDQUEsTUFBQUEsTUFBTSxDQUFDTSxLQUFQO0FBQ0FOLE1BQUFBLE1BQU0sQ0FBQ08sTUFBUDtBQUNELEtBeEM4QyxDQTBDL0M7OztBQUNBLFFBQUlDLFdBQVcsR0FBRyxFQUFsQjtBQUNBN0IsSUFBQUEsUUFBUSxDQUFDYSxPQUFULENBQWlCLFVBQVNpQixPQUFULEVBQWtCQyxHQUFsQixFQUF1QjtBQUN0Q0QsTUFBQUEsT0FBTyxDQUFDRSxFQUFSLENBQVcsUUFBWCxFQUFxQixVQUFTQyxLQUFULEVBQWdCO0FBQ25DLFlBQUlBLEtBQUssQ0FBQ3pCLEtBQVYsRUFBaUI7QUFDZkEsVUFBQUEsS0FBSyxDQUFDMEIsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7QUFDQU4sVUFBQUEsV0FBVyxDQUFDRSxHQUFELENBQVgsR0FBbUJFLEtBQUssQ0FBQ3pCLEtBQU4sQ0FBWTRCLE9BQS9CO0FBQ0EzQixVQUFBQSxZQUFZLENBQUM0QixTQUFiLEdBQXlCSixLQUFLLENBQUN6QixLQUFOLENBQVk0QixPQUFyQztBQUNELFNBSkQsTUFJTztBQUNMUCxVQUFBQSxXQUFXLENBQUNFLEdBQUQsQ0FBWCxHQUFtQixJQUFuQixDQURLLENBR0w7O0FBQ0EsY0FBSU8sU0FBUyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVgsV0FBWixFQUNYWSxJQURXLEdBRVhDLE1BRlcsQ0FFSixVQUFTQyxlQUFULEVBQTBCQyxHQUExQixFQUErQjtBQUNyQyxtQkFBT0QsZUFBZSxJQUFJZCxXQUFXLENBQUNlLEdBQUQsQ0FBckM7QUFDRCxXQUpXLEVBSVQsSUFKUyxDQUFoQjs7QUFNQSxjQUFJTixTQUFKLEVBQWU7QUFDYjtBQUNBN0IsWUFBQUEsWUFBWSxDQUFDNEIsU0FBYixHQUF5QkMsU0FBekI7QUFDRCxXQUhELE1BR087QUFDTDtBQUNBOUIsWUFBQUEsS0FBSyxDQUFDMEIsU0FBTixDQUFnQk4sTUFBaEIsQ0FBdUIsU0FBdkI7QUFDRDtBQUNGO0FBQ0YsT0F2QkQ7QUF3QkQsS0F6QkQsRUE1QytDLENBdUUvQzs7QUFDQXRCLElBQUFBLElBQUksQ0FBQ3VDLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQVNDLENBQVQsRUFBWTtBQUMxQ0EsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGLEdBRDBDLENBRzFDO0FBQ0E7O0FBQ0EsVUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7QUFDQXJDLE1BQUFBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsT0FBaEIsQ0FBd0JDLElBQXhCLENBQTZCUixJQUFJLENBQUNTLGdCQUFMLENBQXNCLE9BQXRCLENBQTdCLEVBQTZELFVBQ3pEQyxLQUR5RCxFQUUzRDtBQUNBLFlBQUlBLEtBQUssQ0FBQ2lDLGFBQU4sSUFBdUIsQ0FBQ2pDLEtBQUssQ0FBQ2lDLGFBQU4sRUFBNUIsRUFBbUQ7QUFDakRELFVBQUFBLGdCQUFnQixHQUFHLEtBQW5CO0FBQ0E7QUFDRDtBQUNGLE9BUEQ7O0FBUUEsVUFBSSxDQUFDQSxnQkFBTCxFQUF1QjtBQUNyQjVCLFFBQUFBLHdCQUF3QjtBQUN4QjtBQUNELE9BakJ5QyxDQW1CMUM7OztBQUNBakIsTUFBQUEsT0FBTyxDQUFDK0IsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsWUFBdEIsRUFwQjBDLENBc0IxQzs7QUFDQWpCLE1BQUFBLGFBQWEsR0F2QjZCLENBeUIxQzs7QUFDQSxVQUFJZ0MsSUFBSSxHQUFHNUMsSUFBSSxDQUFDRCxhQUFMLENBQW1CLE1BQU1KLFdBQU4sR0FBb0IsT0FBdkMsQ0FBWDtBQUNBLFVBQUlrRCxRQUFRLEdBQUc3QyxJQUFJLENBQUNELGFBQUwsQ0FBbUIsTUFBTUosV0FBTixHQUFvQixVQUF2QyxDQUFmO0FBQ0EsVUFBSW1ELElBQUksR0FBRzlDLElBQUksQ0FBQ0QsYUFBTCxDQUFtQixNQUFNSixXQUFOLEdBQW9CLE9BQXZDLENBQVg7QUFDQSxVQUFJb0QsS0FBSyxHQUFHL0MsSUFBSSxDQUFDRCxhQUFMLENBQW1CLE1BQU1KLFdBQU4sR0FBb0IsUUFBdkMsQ0FBWjtBQUNBLFVBQUlxRCxHQUFHLEdBQUdoRCxJQUFJLENBQUNELGFBQUwsQ0FBbUIsTUFBTUosV0FBTixHQUFvQixNQUF2QyxDQUFWO0FBQ0EsVUFBSXNELGNBQWMsR0FBRztBQUNuQkwsUUFBQUEsSUFBSSxFQUFFQSxJQUFJLEdBQUdBLElBQUksQ0FBQ00sS0FBUixHQUFnQkMsU0FEUDtBQUVuQkMsUUFBQUEsYUFBYSxFQUFFUCxRQUFRLEdBQUdBLFFBQVEsQ0FBQ0ssS0FBWixHQUFvQkMsU0FGeEI7QUFHbkJFLFFBQUFBLFlBQVksRUFBRVAsSUFBSSxHQUFHQSxJQUFJLENBQUNJLEtBQVIsR0FBZ0JDLFNBSGY7QUFJbkJHLFFBQUFBLGFBQWEsRUFBRVAsS0FBSyxHQUFHQSxLQUFLLENBQUNHLEtBQVQsR0FBaUJDLFNBSmxCO0FBS25CSSxRQUFBQSxXQUFXLEVBQUVQLEdBQUcsR0FBR0EsR0FBRyxDQUFDRSxLQUFQLEdBQWVDO0FBTFosT0FBckIsQ0EvQjBDLENBdUMxQztBQUNBO0FBQ0E7O0FBQ0E1RCxNQUFBQSxNQUFNLENBQUNpRSxXQUFQLENBQW1COUQsUUFBUSxDQUFDLENBQUQsQ0FBM0IsRUFBZ0N1RCxjQUFoQyxFQUFnRFEsSUFBaEQsQ0FBcUQsVUFBU0MsTUFBVCxFQUFpQjtBQUNwRTtBQUNBN0QsUUFBQUEsT0FBTyxDQUFDK0IsU0FBUixDQUFrQk4sTUFBbEIsQ0FBeUIsWUFBekI7O0FBRUEsWUFBSW9DLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNoQjtBQUNBOUQsVUFBQUEsT0FBTyxDQUFDRSxhQUFSLENBQXNCLFFBQXRCLEVBQWdDZ0MsU0FBaEMsR0FBNEMyQixNQUFNLENBQUNDLEtBQVAsQ0FBYUMsRUFBekQ7QUFDQS9ELFVBQUFBLE9BQU8sQ0FBQytCLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFdBQXRCO0FBQ0QsU0FKRCxNQUlPO0FBQ0w7QUFDQXpCLFVBQUFBLFlBQVk7QUFDYjtBQUNGLE9BWkQ7QUFhRCxLQXZERDtBQXlEQUgsSUFBQUEsV0FBVyxDQUFDc0MsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hEQSxNQUFBQSxDQUFDLENBQUNDLGNBQUYsR0FEZ0QsQ0FFaEQ7QUFDQTs7QUFDQXpDLE1BQUFBLElBQUksQ0FBQzZELEtBQUwsR0FKZ0QsQ0FNaEQ7O0FBQ0FuRSxNQUFBQSxRQUFRLENBQUNhLE9BQVQsQ0FBaUIsVUFBU2lCLE9BQVQsRUFBa0I7QUFDakNBLFFBQUFBLE9BQU8sQ0FBQ3NDLEtBQVI7QUFDRCxPQUZELEVBUGdELENBV2hEOztBQUNBNUQsTUFBQUEsS0FBSyxDQUFDMEIsU0FBTixDQUFnQk4sTUFBaEIsQ0FBdUIsU0FBdkIsRUFaZ0QsQ0FjaEQ7O0FBQ0FsQixNQUFBQSxZQUFZO0FBQ1pQLE1BQUFBLE9BQU8sQ0FBQytCLFNBQVIsQ0FBa0JOLE1BQWxCLENBQXlCLFdBQXpCO0FBQ0QsS0FqQkQ7QUFrQkQ7O0FBR0QsTUFBSTVCLFFBQVEsR0FBR0gsTUFBTSxDQUFDRyxRQUFQLENBQWdCO0FBQzdCcUUsSUFBQUEsS0FBSyxFQUFFLENBQ0w7QUFDRUMsTUFBQUEsTUFBTSxFQUFFO0FBRFYsS0FESyxDQURzQjtBQU03QjtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsTUFBTSxFQUFFQyxNQUFNLENBQUNDO0FBVGMsR0FBaEIsQ0FBZjtBQVlBLE1BQUlDLElBQUksR0FBRzFFLFFBQVEsQ0FBQzJFLE1BQVQsQ0FBZ0IsTUFBaEIsRUFBd0I7QUFDakNDLElBQUFBLFNBQVMsRUFBRSxPQURzQjtBQUVqQ3BELElBQUFBLEtBQUssRUFBRTtBQUNMcUQsTUFBQUEsSUFBSSxFQUFFO0FBQ0pDLFFBQUFBLFNBQVMsRUFBRSxTQURQO0FBRUpDLFFBQUFBLEtBQUssRUFBRSxNQUZIO0FBR0pDLFFBQUFBLFVBQVUsRUFBRSxHQUhSO0FBSUpDLFFBQUFBLFVBQVUsRUFBRSx5Q0FKUjtBQUtKQyxRQUFBQSxRQUFRLEVBQUUsTUFMTjtBQU1KQyxRQUFBQSxhQUFhLEVBQUUsYUFOWDtBQVFKLDZCQUFxQjtBQUNuQkosVUFBQUEsS0FBSyxFQUFFO0FBRFksU0FSakI7QUFXSix5QkFBaUI7QUFDZkEsVUFBQUEsS0FBSyxFQUFFO0FBRFE7QUFYYixPQUREO0FBZ0JMSyxNQUFBQSxPQUFPLEVBQUU7QUFDUE4sUUFBQUEsU0FBUyxFQUFFLFNBREo7QUFFUEMsUUFBQUEsS0FBSyxFQUFFO0FBRkE7QUFoQko7QUFGMEIsR0FBeEIsQ0FBWDtBQXdCQUwsRUFBQUEsSUFBSSxDQUFDVyxLQUFMLENBQVcsZ0JBQVg7QUFFQXRGLEVBQUFBLGdCQUFnQixDQUFDLENBQUMyRSxJQUFELENBQUQsRUFBUyxVQUFULENBQWhCO0FBQ0QsQ0FuTUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZXhhbXBsZTEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgc3RyaXBlID0gU3RyaXBlKCdwa190ZXN0XzZwUk5BU0NvQk9LdElzaEZlUWQ0WE1VaCcpO1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyRWxlbWVudHMoZWxlbWVudHMsIGV4YW1wbGVOYW1lKSB7XG4gICAgdmFyIGZvcm1DbGFzcyA9ICcuJyArIGV4YW1wbGVOYW1lO1xuICAgIHZhciBleGFtcGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihmb3JtQ2xhc3MpO1xuXG4gICAgdmFyIGZvcm0gPSBleGFtcGxlLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICB2YXIgcmVzZXRCdXR0b24gPSBleGFtcGxlLnF1ZXJ5U2VsZWN0b3IoJ2EucmVzZXQnKTtcbiAgICB2YXIgZXJyb3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBlcnJvci5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xuXG4gICAgZnVuY3Rpb24gZW5hYmxlSW5wdXRzKCkge1xuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcbiAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAgIFwiaW5wdXRbdHlwZT0ndGV4dCddLCBpbnB1dFt0eXBlPSdlbWFpbCddLCBpbnB1dFt0eXBlPSd0ZWwnXVwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBmdW5jdGlvbihpbnB1dCkge1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZUlucHV0cygpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoXG4gICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgICBcImlucHV0W3R5cGU9J3RleHQnXSwgaW5wdXRbdHlwZT0nZW1haWwnXSwgaW5wdXRbdHlwZT0ndGVsJ11cIlxuICAgICAgICAgICksXG4gICAgICAgICAgZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlckJyb3dzZXJWYWxpZGF0aW9uKCkge1xuICAgICAgLy8gVGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgSFRNTDUgZm9ybSB2YWxpZGF0aW9uIFVJIGlzIHRvIGZha2UgYSB1c2VyIHN1Ym1pdFxuICAgICAgLy8gZXZlbnQuXG4gICAgICB2YXIgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgICBzdWJtaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICAgIHN1Ym1pdC5jbGljaygpO1xuICAgICAgc3VibWl0LnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIExpc3RlbiBmb3IgZXJyb3JzIGZyb20gZWFjaCBFbGVtZW50LCBhbmQgc2hvdyBlcnJvciBtZXNzYWdlcyBpbiB0aGUgVUkuXG4gICAgdmFyIHNhdmVkRXJyb3JzID0ge307XG4gICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50LCBpZHgpIHtcbiAgICAgIGVsZW1lbnQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5lcnJvcikge1xuICAgICAgICAgIGVycm9yLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICBzYXZlZEVycm9yc1tpZHhdID0gZXZlbnQuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICBlcnJvck1lc3NhZ2UuaW5uZXJUZXh0ID0gZXZlbnQuZXJyb3IubWVzc2FnZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzYXZlZEVycm9yc1tpZHhdID0gbnVsbDtcblxuICAgICAgICAgIC8vIExvb3Agb3ZlciB0aGUgc2F2ZWQgZXJyb3JzIGFuZCBmaW5kIHRoZSBmaXJzdCBvbmUsIGlmIGFueS5cbiAgICAgICAgICB2YXIgbmV4dEVycm9yID0gT2JqZWN0LmtleXMoc2F2ZWRFcnJvcnMpXG4gICAgICAgICAgICAgIC5zb3J0KClcbiAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbihtYXliZUZvdW5kRXJyb3IsIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXliZUZvdW5kRXJyb3IgfHwgc2F2ZWRFcnJvcnNba2V5XTtcbiAgICAgICAgICAgICAgfSwgbnVsbCk7XG5cbiAgICAgICAgICBpZiAobmV4dEVycm9yKSB7XG4gICAgICAgICAgICAvLyBOb3cgdGhhdCB0aGV5J3ZlIGZpeGVkIHRoZSBjdXJyZW50IGVycm9yLCBzaG93IGFub3RoZXIgb25lLlxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9IG5leHRFcnJvcjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhlIHVzZXIgZml4ZWQgdGhlIGxhc3QgZXJyb3I7IG5vIG1vcmUgZXJyb3JzLlxuICAgICAgICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBMaXN0ZW4gb24gdGhlIGZvcm0ncyAnc3VibWl0JyBoYW5kbGVyLi4uXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIFRyaWdnZXIgSFRNTDUgdmFsaWRhdGlvbiBVSSBvbiB0aGUgZm9ybSBpZiBhbnkgb2YgdGhlIGlucHV0cyBmYWlsXG4gICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgdmFyIHBsYWluSW5wdXRzVmFsaWQgPSB0cnVlO1xuICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JyksIGZ1bmN0aW9uKFxuICAgICAgICAgIGlucHV0XG4gICAgICApIHtcbiAgICAgICAgaWYgKGlucHV0LmNoZWNrVmFsaWRpdHkgJiYgIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgIHBsYWluSW5wdXRzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFwbGFpbklucHV0c1ZhbGlkKSB7XG4gICAgICAgIHRyaWdnZXJCcm93c2VyVmFsaWRhdGlvbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFNob3cgYSBsb2FkaW5nIHNjcmVlbi4uLlxuICAgICAgZXhhbXBsZS5jbGFzc0xpc3QuYWRkKCdzdWJtaXR0aW5nJyk7XG5cbiAgICAgIC8vIERpc2FibGUgYWxsIGlucHV0cy5cbiAgICAgIGRpc2FibGVJbnB1dHMoKTtcblxuICAgICAgLy8gR2F0aGVyIGFkZGl0aW9uYWwgY3VzdG9tZXIgZGF0YSB3ZSBtYXkgaGF2ZSBjb2xsZWN0ZWQgaW4gb3VyIGZvcm0uXG4gICAgICB2YXIgbmFtZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignIycgKyBleGFtcGxlTmFtZSArICctbmFtZScpO1xuICAgICAgdmFyIGFkZHJlc3MxID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjJyArIGV4YW1wbGVOYW1lICsgJy1hZGRyZXNzJyk7XG4gICAgICB2YXIgY2l0eSA9IGZvcm0ucXVlcnlTZWxlY3RvcignIycgKyBleGFtcGxlTmFtZSArICctY2l0eScpO1xuICAgICAgdmFyIHN0YXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjJyArIGV4YW1wbGVOYW1lICsgJy1zdGF0ZScpO1xuICAgICAgdmFyIHppcCA9IGZvcm0ucXVlcnlTZWxlY3RvcignIycgKyBleGFtcGxlTmFtZSArICctemlwJyk7XG4gICAgICB2YXIgYWRkaXRpb25hbERhdGEgPSB7XG4gICAgICAgIG5hbWU6IG5hbWUgPyBuYW1lLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgICBhZGRyZXNzX2xpbmUxOiBhZGRyZXNzMSA/IGFkZHJlc3MxLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgICBhZGRyZXNzX2NpdHk6IGNpdHkgPyBjaXR5LnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgICBhZGRyZXNzX3N0YXRlOiBzdGF0ZSA/IHN0YXRlLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgICBhZGRyZXNzX3ppcDogemlwID8gemlwLnZhbHVlIDogdW5kZWZpbmVkLFxuICAgICAgfTtcblxuICAgICAgLy8gVXNlIFN0cmlwZS5qcyB0byBjcmVhdGUgYSB0b2tlbi4gV2Ugb25seSBuZWVkIHRvIHBhc3MgaW4gb25lIEVsZW1lbnRcbiAgICAgIC8vIGZyb20gdGhlIEVsZW1lbnQgZ3JvdXAgaW4gb3JkZXIgdG8gY3JlYXRlIGEgdG9rZW4uIFdlIGNhbiBhbHNvIHBhc3NcbiAgICAgIC8vIGluIHRoZSBhZGRpdGlvbmFsIGN1c3RvbWVyIGRhdGEgd2UgY29sbGVjdGVkIGluIG91ciBmb3JtLlxuICAgICAgc3RyaXBlLmNyZWF0ZVRva2VuKGVsZW1lbnRzWzBdLCBhZGRpdGlvbmFsRGF0YSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgLy8gU3RvcCBsb2FkaW5nIVxuICAgICAgICBleGFtcGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1pdHRpbmcnKTtcblxuICAgICAgICBpZiAocmVzdWx0LnRva2VuKSB7XG4gICAgICAgICAgLy8gSWYgd2UgcmVjZWl2ZWQgYSB0b2tlbiwgc2hvdyB0aGUgdG9rZW4gSUQuXG4gICAgICAgICAgZXhhbXBsZS5xdWVyeVNlbGVjdG9yKCcudG9rZW4nKS5pbm5lclRleHQgPSByZXN1bHQudG9rZW4uaWQ7XG4gICAgICAgICAgZXhhbXBsZS5jbGFzc0xpc3QuYWRkKCdzdWJtaXR0ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UsIHVuLWRpc2FibGUgaW5wdXRzLlxuICAgICAgICAgIGVuYWJsZUlucHV0cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gUmVzZXR0aW5nIHRoZSBmb3JtIChpbnN0ZWFkIG9mIHNldHRpbmcgdGhlIHZhbHVlIHRvIGAnJ2AgZm9yIGVhY2ggaW5wdXQpXG4gICAgICAvLyBoZWxwcyB1cyBjbGVhciB3ZWJraXQgYXV0b2ZpbGwgc3R5bGVzLlxuICAgICAgZm9ybS5yZXNldCgpO1xuXG4gICAgICAvLyBDbGVhciBlYWNoIEVsZW1lbnQuXG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGVhcigpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFJlc2V0IGVycm9yIHN0YXRlIGFzIHdlbGwuXG4gICAgICBlcnJvci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG5cbiAgICAgIC8vIFJlc2V0dGluZyB0aGUgZm9ybSBkb2VzIG5vdCB1bi1kaXNhYmxlIGlucHV0cywgc28gd2UgbmVlZCB0byBkbyBpdCBzZXBhcmF0ZWx5OlxuICAgICAgZW5hYmxlSW5wdXRzKCk7XG4gICAgICBleGFtcGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Ym1pdHRlZCcpO1xuICAgIH0pO1xuICB9XG5cblxuICB2YXIgZWxlbWVudHMgPSBzdHJpcGUuZWxlbWVudHMoe1xuICAgIGZvbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGNzc1NyYzogJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8nLFxuICAgICAgfSxcbiAgICBdLFxuICAgIC8vIFN0cmlwZSdzIGV4YW1wbGVzIGFyZSBsb2NhbGl6ZWQgdG8gc3BlY2lmaWMgbGFuZ3VhZ2VzLCBidXQgaWZcbiAgICAvLyB5b3Ugd2lzaCB0byBoYXZlIEVsZW1lbnRzIGF1dG9tYXRpY2FsbHkgZGV0ZWN0IHlvdXIgdXNlcidzIGxvY2FsZSxcbiAgICAvLyB1c2UgYGxvY2FsZTogJ2F1dG8nYCBpbnN0ZWFkLlxuICAgIGxvY2FsZTogd2luZG93Ll9fZXhhbXBsZUxvY2FsZVxuICB9KTtcblxuICB2YXIgY2FyZCA9IGVsZW1lbnRzLmNyZWF0ZSgnY2FyZCcsIHtcbiAgICBpY29uU3R5bGU6ICdzb2xpZCcsXG4gICAgc3R5bGU6IHtcbiAgICAgIGJhc2U6IHtcbiAgICAgICAgaWNvbkNvbG9yOiAnI2M0ZjBmZicsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgZm9udEZhbWlseTogJ1JvYm90bywgT3BlbiBTYW5zLCBTZWdvZSBVSSwgc2Fucy1zZXJpZicsXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgIGZvbnRTbW9vdGhpbmc6ICdhbnRpYWxpYXNlZCcsXG5cbiAgICAgICAgJzotd2Via2l0LWF1dG9maWxsJzoge1xuICAgICAgICAgIGNvbG9yOiAnI2ZjZTg4MycsXG4gICAgICAgIH0sXG4gICAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICAgIGNvbG9yOiAnIzg3QkJGRCcsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW52YWxpZDoge1xuICAgICAgICBpY29uQ29sb3I6ICcjRkZDN0VFJyxcbiAgICAgICAgY29sb3I6ICcjRkZDN0VFJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIGNhcmQubW91bnQoJyNleGFtcGxlMS1jYXJkJyk7XG5cbiAgcmVnaXN0ZXJFbGVtZW50cyhbY2FyZF0sICdleGFtcGxlMScpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJzdHJpcGUiLCJTdHJpcGUiLCJyZWdpc3RlckVsZW1lbnRzIiwiZWxlbWVudHMiLCJleGFtcGxlTmFtZSIsImZvcm1DbGFzcyIsImV4YW1wbGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwicmVzZXRCdXR0b24iLCJlcnJvciIsImVycm9yTWVzc2FnZSIsImVuYWJsZUlucHV0cyIsIkFycmF5IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkaXNhYmxlSW5wdXRzIiwic2V0QXR0cmlidXRlIiwidHJpZ2dlckJyb3dzZXJWYWxpZGF0aW9uIiwic3VibWl0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJzdHlsZSIsImRpc3BsYXkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlIiwic2F2ZWRFcnJvcnMiLCJlbGVtZW50IiwiaWR4Iiwib24iLCJldmVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2UiLCJpbm5lclRleHQiLCJuZXh0RXJyb3IiLCJPYmplY3QiLCJrZXlzIiwic29ydCIsInJlZHVjZSIsIm1heWJlRm91bmRFcnJvciIsImtleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJwbGFpbklucHV0c1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsIm5hbWUiLCJhZGRyZXNzMSIsImNpdHkiLCJzdGF0ZSIsInppcCIsImFkZGl0aW9uYWxEYXRhIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJhZGRyZXNzX2xpbmUxIiwiYWRkcmVzc19jaXR5IiwiYWRkcmVzc19zdGF0ZSIsImFkZHJlc3NfemlwIiwiY3JlYXRlVG9rZW4iLCJ0aGVuIiwicmVzdWx0IiwidG9rZW4iLCJpZCIsInJlc2V0IiwiY2xlYXIiLCJmb250cyIsImNzc1NyYyIsImxvY2FsZSIsIndpbmRvdyIsIl9fZXhhbXBsZUxvY2FsZSIsImNhcmQiLCJjcmVhdGUiLCJpY29uU3R5bGUiLCJiYXNlIiwiaWNvbkNvbG9yIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFNtb290aGluZyIsImludmFsaWQiLCJtb3VudCJdLCJzb3VyY2VSb290IjoiIn0=