(self.webpackChunk=self.webpackChunk||[]).push([[276],{3009:(e,t,r)=>{r(9554),r(1539),r(4747),r(5827),r(2707),r(7941),function(){"use strict";var e=Stripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");var t=e.elements({fonts:[{cssSrc:"https://rsms.me/inter/inter.css"}],locale:window.__exampleLocale}),r=t.create("card",{style:{base:{color:"#32325D",fontWeight:500,fontFamily:"Inter, Open Sans, Segoe UI, sans-serif",fontSize:"16px",fontSmoothing:"antialiased","::placeholder":{color:"#CFD7DF"}},invalid:{color:"#E25950"}}});r.mount("#example4-card");var n=e.paymentRequest({country:"US",currency:"usd",total:{amount:2e3,label:"Total"}});n.on("token",(function(e){var t=document.querySelector(".example4");t.querySelector(".token").innerText=e.token.id,t.classList.add("submitted"),e.complete("success")}));var o=t.create("paymentRequestButton",{paymentRequest:n,style:{paymentRequestButton:{type:"donate"}}});n.canMakePayment().then((function(e){e&&(document.querySelector(".example4 .card-only").style.display="none",document.querySelector(".example4 .payment-request-available").style.display="block",o.mount("#example4-paymentRequest"))})),function(t,r){var n="."+r,o=document.querySelector(n),a=o.querySelector("form"),i=o.querySelector("a.reset"),s=a.querySelector(".error"),c=s.querySelector(".message");function u(){Array.prototype.forEach.call(a.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']"),(function(e){e.removeAttribute("disabled")}))}var l={};t.forEach((function(e,t){e.on("change",(function(e){if(e.error)s.classList.add("visible"),l[t]=e.error.message,c.innerText=e.error.message;else{l[t]=null;var r=Object.keys(l).sort().reduce((function(e,t){return e||l[t]}),null);r?c.innerText=r:s.classList.remove("visible")}}))})),a.addEventListener("submit",(function(n){n.preventDefault();var i,s=!0;if(Array.prototype.forEach.call(a.querySelectorAll("input"),(function(e){!e.checkValidity||e.checkValidity()||(s=!1)})),!s)return(i=document.createElement("input")).type="submit",i.style.display="none",a.appendChild(i),i.click(),void i.remove();o.classList.add("submitting"),Array.prototype.forEach.call(a.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']"),(function(e){e.setAttribute("disabled","true")}));var c=a.querySelector("#"+r+"-name"),l=a.querySelector("#"+r+"-address"),d=a.querySelector("#"+r+"-city"),f=a.querySelector("#"+r+"-state"),p=a.querySelector("#"+r+"-zip"),v={name:c?c.value:void 0,address_line1:l?l.value:void 0,address_city:d?d.value:void 0,address_state:f?f.value:void 0,address_zip:p?p.value:void 0};e.createToken(t[0],v).then((function(e){o.classList.remove("submitting"),e.token?(o.querySelector(".token").innerText=e.token.id,o.classList.add("submitted")):u()}))})),i.addEventListener("click",(function(e){e.preventDefault(),a.reset(),t.forEach((function(e){e.clear()})),s.classList.remove("visible"),u(),o.classList.remove("submitted")}))}([r,o],"example4")}()},3671:(e,t,r)=>{var n=r(7854),o=r(9662),a=r(7908),i=r(8361),s=r(6244),c=n.TypeError,u=function(e){return function(t,r,n,u){o(r);var l=a(t),d=i(l),f=s(l),p=e?f-1:0,v=e?-1:1;if(n<2)for(;;){if(p in d){u=d[p],p+=v;break}if(p+=v,e?p<0:f<=p)throw c("Reduce of empty array with no initial value")}for(;e?p>=0:f>p;p+=v)p in d&&(u=r(u,d[p],p,l));return u}};e.exports={left:u(!1),right:u(!0)}},4362:(e,t,r)=>{var n=r(1589),o=Math.floor,a=function(e,t){var r=e.length,c=o(r/2);return r<8?i(e,t):s(e,a(n(e,0,c),t),a(n(e,c),t),t)},i=function(e,t){for(var r,n,o=e.length,a=1;a<o;){for(n=a,r=e[a];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==a++&&(e[n]=r)}return e},s=function(e,t,r,n){for(var o=t.length,a=r.length,i=0,s=0;i<o||s<a;)e[i+s]=i<o&&s<a?n(t[i],r[s])<=0?t[i++]:r[s++]:i<o?t[i++]:r[s++];return e};e.exports=a},8886:(e,t,r)=>{var n=r(8113).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},256:(e,t,r)=>{var n=r(8113);e.exports=/MSIE|Trident/.test(n)},5268:(e,t,r)=>{var n=r(4326),o=r(7854);e.exports="process"==n(o.process)},8008:(e,t,r)=>{var n=r(8113).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},5827:(e,t,r)=>{"use strict";var n=r(2109),o=r(3671).left,a=r(9341),i=r(7392),s=r(5268);n({target:"Array",proto:!0,forced:!a("reduce")||!s&&i>79&&i<83},{reduce:function(e){var t=arguments.length;return o(this,e,t,t>1?arguments[1]:void 0)}})},2707:(e,t,r)=>{"use strict";var n=r(2109),o=r(1702),a=r(9662),i=r(7908),s=r(6244),c=r(1340),u=r(7293),l=r(4362),d=r(9341),f=r(8886),p=r(256),v=r(7392),y=r(8008),m=[],h=o(m.sort),S=o(m.push),b=u((function(){m.sort(void 0)})),k=u((function(){m.sort(null)})),q=d("sort"),g=!u((function(){if(v)return v<70;if(!(f&&f>3)){if(p)return!0;if(y)return y<603;var e,t,r,n,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)m.push({k:t+n,v:r})}for(m.sort((function(e,t){return t.v-e.v})),n=0;n<m.length;n++)t=m[n].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));n({target:"Array",proto:!0,forced:b||!k||!q||!g},{sort:function(e){void 0!==e&&a(e);var t=i(this);if(g)return void 0===e?h(t):h(t,e);var r,n,o=[],u=s(t);for(n=0;n<u;n++)n in t&&S(o,t[n]);for(l(o,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:c(t)>c(r)?1:-1}}(e)),r=o.length,n=0;n<r;)t[n]=o[n++];for(;n<u;)delete t[n++];return t}})},7941:(e,t,r)=>{var n=r(2109),o=r(7908),a=r(1956);n({target:"Object",stat:!0,forced:r(7293)((function(){a(1)}))},{keys:function(e){return a(o(e))}})}},e=>{e.O(0,[539,493],(()=>{return t=3009,e(e.s=t);var t}));e.O()}]);