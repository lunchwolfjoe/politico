!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=112)}({112:function(e,t,n){"use strict";var r,o,c="_c3po-dvmd",a=(r=new RegExp("".concat(c,"=([^&]+)")).exec(location.search))&&r[1]||"",u=((o=document.createElement("a")).href="https://chat.engagement.ai/api/v2/widget/discover",o.search=a&&"".concat(encodeURIComponent(c),"=").concat(encodeURIComponent(a)),o.href);var i,l,d=new XMLHttpRequest;d.open("GET",u),d.onload=(i=function(){if(200===d.status){var e,t,n=JSON.parse(d.response);window.$EP=n.chatSdkConfig,n.chatSdkUrl&&(e=n.chatSdkUrl,(t=document.createElement("script")).type="text/javascript",t.async=!0,t.crossOrigin="anonymous",t.src=e,document.body.appendChild(t))}},l=function e(){return e.called?e.value:(e.called=!0,e.value=i.apply(this,arguments))},l.called=!1,l),d.send()}});