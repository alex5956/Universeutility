(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you require will output into a single css file (app.css in this case)
__webpack_require__(/*! ../css/app.css */ "./assets/css/app.css"); // Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
// const $ = require('jquery');


__webpack_require__(/*! ../js/stripe */ "./assets/js/stripe.js");

console.log('coucou Alex');
console.log('Hello Webpack Encore! Edit me in assets/js/app.js');
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */

/***/ }),

/***/ "./assets/js/stripe.js":
/*!*****************************!*\
  !*** ./assets/js/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");

var stripe = Stripe("pk_live_4ZH0HjhS2O1G84Jll3tW9xMA00wZfoV8fR"); // The items the customer wants to buy

var purchase = {
  items: [{
    id: "xl-tshirt"
  }]
}; // Disable the button until we have Stripe set up on the page

document.querySelector("button").disabled = true;
fetch("/create.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(purchase)
}).then(function (result) {
  return result.json();
}).then(function (data) {
  var elements = stripe.elements();
  var style = {
    base: {
      color: "#32325d",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d"
      }
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };
  var card = elements.create("card", {
    style: style
  }); // Stripe injects an iframe into the DOM

  card.mount("#card-element");
  card.on("change", function (event) {
    // Disable the Pay button if there are no card details in the Element
    document.querySelector("button").disabled = event.empty;
    document.querySelector("#card-error").textContent = event.error ? event.error.message : "";
  });
  var form = document.getElementById("payment-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Complete payment when the submit button is clicked

    payWithCard(stripe, card, data.clientSecret);
  });
}); // Calls stripe.confirmCardPayment
// If the card requires authentication Stripe shows a pop-up modal to
// prompt the user to enter authentication details without leaving your page.

var payWithCard = function payWithCard(stripe, card, clientSecret) {
  loading(true);
  stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card
    }
  }).then(function (result) {
    if (result.error) {
      // Show error to your customer
      showError(result.error.message);
    } else {
      // The payment succeeded!
      orderComplete(result.paymentIntent.id);
    }
  });
};
/* ------- UI helpers ------- */
// Shows a success message when the payment is complete


var orderComplete = function orderComplete(paymentIntentId) {
  loading(false);
  document.querySelector(".result-message a").setAttribute("href", "https://dashboard.stripe.com/test/payments/" + paymentIntentId);
  document.querySelector(".result-message").classList.remove("hidden");
  document.querySelector("button").disabled = true;
}; // Show the customer the error from Stripe if their card fails to charge


var showError = function showError(errorMsgText) {
  loading(false);
  var errorMsg = document.querySelector("#card-error");
  errorMsg.textContent = errorMsgText;
  setTimeout(function () {
    errorMsg.textContent = "";
  }, 4000);
}; // Show a spinner on payment submission


var loading = function loading(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};

/***/ }),

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_function-name_js-node_modules_core-js_internals_object-792382","vendors-node_modules_core-js_internals_export_js-node_modules_core-js_internals_function-bind-633d96","vendors-node_modules_core-js_modules_es_promise_js-node_modules_core-js_modules_web_timers_js"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBZjtBQUVBK0MsRUFBQUEsUUFBUSxDQUFDcEIsV0FBVCxHQUF1Qm1CLFlBQXZCO0FBRUFFLEVBQUFBLFVBQVUsQ0FBQyxZQUFXO0FBRWxCRCxJQUFBQSxRQUFRLENBQUNwQixXQUFULEdBQXVCLEVBQXZCO0FBRUgsR0FKUyxFQUlQLElBSk8sQ0FBVjtBQU1ILENBZEQsRUFnQkE7OztBQUVBLElBQUlTLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQVNhLFNBQVQsRUFBb0I7QUFFOUIsTUFBSUEsU0FBSixFQUFlO0FBRVg7QUFFQWxELElBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixFQUFpQ0MsUUFBakMsR0FBNEMsSUFBNUM7QUFFQUYsSUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLEVBQW1DNEMsU0FBbkMsQ0FBNkNDLE1BQTdDLENBQW9ELFFBQXBEO0FBRUE5QyxJQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUM0QyxTQUF2QyxDQUFpRE0sR0FBakQsQ0FBcUQsUUFBckQ7QUFFSCxHQVZELE1BVU87QUFFSG5ELElBQUFBLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixFQUFpQ0MsUUFBakMsR0FBNEMsS0FBNUM7QUFFQUYsSUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLEVBQW1DNEMsU0FBbkMsQ0FBNkNNLEdBQTdDLENBQWlELFFBQWpEO0FBRUFuRCxJQUFBQSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsRUFBdUM0QyxTQUF2QyxDQUFpREMsTUFBakQsQ0FBd0QsUUFBeEQ7QUFFSDtBQUVKLENBdEJEOzs7Ozs7Ozs7Ozs7QUM1TEEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdHJpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9hcHAuY3NzPzBjMTAiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IHJlcXVpcmUgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5yZXF1aXJlKCcuLi9jc3MvYXBwLmNzcycpO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIHJlcXVpcmUgaXQuXG4vLyBjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5yZXF1aXJlKCcuLi9qcy9zdHJpcGUnKTtcbmNvbnNvbGUubG9nKCdjb3Vjb3UgQWxleCcpO1xuY29uc29sZS5sb2coJ0hlbGxvIFdlYnBhY2sgRW5jb3JlISBFZGl0IG1lIGluIGFzc2V0cy9qcy9hcHAuanMnKTtcbi8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNpZGUgbmF2aWdhdGlvbiB0byAyNTBweCBhbmQgdGhlIGxlZnQgbWFyZ2luIG9mIHRoZSBwYWdlIGNvbnRlbnQgdG8gMjUwcHggYW5kIGFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gYm9keSAqL1xuIiwidmFyIHN0cmlwZSA9IFN0cmlwZShcInBrX2xpdmVfNFpIMEhqaFMyTzFHODRKbGwzdFc5eE1BMDB3WmZvVjhmUlwiKTtcblxuLy8gVGhlIGl0ZW1zIHRoZSBjdXN0b21lciB3YW50cyB0byBidXlcblxudmFyIHB1cmNoYXNlID0ge1xuXG4gICAgaXRlbXM6IFt7IGlkOiBcInhsLXRzaGlydFwiIH1dXG5cbn07XG5cbi8vIERpc2FibGUgdGhlIGJ1dHRvbiB1bnRpbCB3ZSBoYXZlIFN0cmlwZSBzZXQgdXAgb24gdGhlIHBhZ2VcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XG5cbmZldGNoKFwiL2NyZWF0ZS5waHBcIiwge1xuXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcblxuICAgIGhlYWRlcnM6IHtcblxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuXG4gICAgfSxcblxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHB1cmNoYXNlKVxuXG59KVxuXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qc29uKCk7XG5cbiAgICB9KVxuXG4gICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuXG4gICAgICAgIHZhciBlbGVtZW50cyA9IHN0cmlwZS5lbGVtZW50cygpO1xuXG4gICAgICAgIHZhciBzdHlsZSA9IHtcblxuICAgICAgICAgICAgYmFzZToge1xuXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiIzMyMzI1ZFwiLFxuXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ0FyaWFsLCBzYW5zLXNlcmlmJyxcblxuICAgICAgICAgICAgICAgIGZvbnRTbW9vdGhpbmc6IFwiYW50aWFsaWFzZWRcIixcblxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE2cHhcIixcblxuICAgICAgICAgICAgICAgIFwiOjpwbGFjZWhvbGRlclwiOiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzMyMzI1ZFwiXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGludmFsaWQ6IHtcblxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdBcmlhbCwgc2Fucy1zZXJpZicsXG5cbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmE3NTVhXCIsXG5cbiAgICAgICAgICAgICAgICBpY29uQ29sb3I6IFwiI2ZhNzU1YVwiXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjYXJkID0gZWxlbWVudHMuY3JlYXRlKFwiY2FyZFwiLCB7IHN0eWxlOiBzdHlsZSB9KTtcblxuICAgICAgICAvLyBTdHJpcGUgaW5qZWN0cyBhbiBpZnJhbWUgaW50byB0aGUgRE9NXG5cbiAgICAgICAgY2FyZC5tb3VudChcIiNjYXJkLWVsZW1lbnRcIik7XG5cbiAgICAgICAgY2FyZC5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAgICAgLy8gRGlzYWJsZSB0aGUgUGF5IGJ1dHRvbiBpZiB0aGVyZSBhcmUgbm8gY2FyZCBkZXRhaWxzIGluIHRoZSBFbGVtZW50XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikuZGlzYWJsZWQgPSBldmVudC5lbXB0eTtcblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLWVycm9yXCIpLnRleHRDb250ZW50ID0gZXZlbnQuZXJyb3IgPyBldmVudC5lcnJvci5tZXNzYWdlIDogXCJcIjtcblxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF5bWVudC1mb3JtXCIpO1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBDb21wbGV0ZSBwYXltZW50IHdoZW4gdGhlIHN1Ym1pdCBidXR0b24gaXMgY2xpY2tlZFxuXG4gICAgICAgICAgICBwYXlXaXRoQ2FyZChzdHJpcGUsIGNhcmQsIGRhdGEuY2xpZW50U2VjcmV0KTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4vLyBDYWxscyBzdHJpcGUuY29uZmlybUNhcmRQYXltZW50XG5cbi8vIElmIHRoZSBjYXJkIHJlcXVpcmVzIGF1dGhlbnRpY2F0aW9uIFN0cmlwZSBzaG93cyBhIHBvcC11cCBtb2RhbCB0b1xuXG4vLyBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgYXV0aGVudGljYXRpb24gZGV0YWlscyB3aXRob3V0IGxlYXZpbmcgeW91ciBwYWdlLlxuXG52YXIgcGF5V2l0aENhcmQgPSBmdW5jdGlvbihzdHJpcGUsIGNhcmQsIGNsaWVudFNlY3JldCkge1xuXG4gICAgbG9hZGluZyh0cnVlKTtcblxuICAgIHN0cmlwZVxuXG4gICAgICAgIC5jb25maXJtQ2FyZFBheW1lbnQoY2xpZW50U2VjcmV0LCB7XG5cbiAgICAgICAgICAgIHBheW1lbnRfbWV0aG9kOiB7XG5cbiAgICAgICAgICAgICAgICBjYXJkOiBjYXJkXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTaG93IGVycm9yIHRvIHlvdXIgY3VzdG9tZXJcblxuICAgICAgICAgICAgICAgIHNob3dFcnJvcihyZXN1bHQuZXJyb3IubWVzc2FnZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgcGF5bWVudCBzdWNjZWVkZWQhXG5cbiAgICAgICAgICAgICAgICBvcmRlckNvbXBsZXRlKHJlc3VsdC5wYXltZW50SW50ZW50LmlkKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG59O1xuXG4vKiAtLS0tLS0tIFVJIGhlbHBlcnMgLS0tLS0tLSAqL1xuXG4vLyBTaG93cyBhIHN1Y2Nlc3MgbWVzc2FnZSB3aGVuIHRoZSBwYXltZW50IGlzIGNvbXBsZXRlXG5cbnZhciBvcmRlckNvbXBsZXRlID0gZnVuY3Rpb24ocGF5bWVudEludGVudElkKSB7XG5cbiAgICBsb2FkaW5nKGZhbHNlKTtcblxuICAgIGRvY3VtZW50XG5cbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0LW1lc3NhZ2UgYVwiKVxuXG4gICAgICAgIC5zZXRBdHRyaWJ1dGUoXG5cbiAgICAgICAgICAgIFwiaHJlZlwiLFxuXG4gICAgICAgICAgICBcImh0dHBzOi8vZGFzaGJvYXJkLnN0cmlwZS5jb20vdGVzdC9wYXltZW50cy9cIiArIHBheW1lbnRJbnRlbnRJZFxuXG4gICAgICAgICk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdC1tZXNzYWdlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpLmRpc2FibGVkID0gdHJ1ZTtcblxufTtcblxuLy8gU2hvdyB0aGUgY3VzdG9tZXIgdGhlIGVycm9yIGZyb20gU3RyaXBlIGlmIHRoZWlyIGNhcmQgZmFpbHMgdG8gY2hhcmdlXG5cbnZhciBzaG93RXJyb3IgPSBmdW5jdGlvbihlcnJvck1zZ1RleHQpIHtcblxuICAgIGxvYWRpbmcoZmFsc2UpO1xuXG4gICAgdmFyIGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLWVycm9yXCIpO1xuXG4gICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBlcnJvck1zZ1RleHQ7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIH0sIDQwMDApO1xuXG59O1xuXG4vLyBTaG93IGEgc3Bpbm5lciBvbiBwYXltZW50IHN1Ym1pc3Npb25cblxudmFyIGxvYWRpbmcgPSBmdW5jdGlvbihpc0xvYWRpbmcpIHtcblxuICAgIGlmIChpc0xvYWRpbmcpIHtcblxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBidXR0b24gYW5kIHNob3cgYSBzcGlubmVyXG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKS5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGlubmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tdGV4dFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGlubmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tdGV4dFwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gICAgfVxuXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwic3RyaXBlIiwiU3RyaXBlIiwicHVyY2hhc2UiLCJpdGVtcyIsImlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGlzYWJsZWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiZGF0YSIsImVsZW1lbnRzIiwic3R5bGUiLCJiYXNlIiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNtb290aGluZyIsImZvbnRTaXplIiwiaW52YWxpZCIsImljb25Db2xvciIsImNhcmQiLCJjcmVhdGUiLCJtb3VudCIsIm9uIiwiZXZlbnQiLCJlbXB0eSIsInRleHRDb250ZW50IiwiZXJyb3IiLCJtZXNzYWdlIiwiZm9ybSIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwicGF5V2l0aENhcmQiLCJjbGllbnRTZWNyZXQiLCJsb2FkaW5nIiwiY29uZmlybUNhcmRQYXltZW50IiwicGF5bWVudF9tZXRob2QiLCJzaG93RXJyb3IiLCJvcmRlckNvbXBsZXRlIiwicGF5bWVudEludGVudCIsInBheW1lbnRJbnRlbnRJZCIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImVycm9yTXNnVGV4dCIsImVycm9yTXNnIiwic2V0VGltZW91dCIsImlzTG9hZGluZyIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=