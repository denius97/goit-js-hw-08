var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e,t,n){var o,r,i,a,f,u,l=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function h(e){return l=e,f=setTimeout(w,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=i}function w(){var e=d();if(j(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return g?m(n,i-(e-l)):n}(e))}function O(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function S(){var e=d(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(g)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=p(t)||0,v(n)&&(c=!!n.leading,i=(g="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},S.flush=function(){return void 0===f?a:O(d())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");if(localStorage.getItem("feedback-form-state"))try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));b.email.value=e.email,b.message.value=e.message}catch(e){console.log("Error local storage parse",e)}b.addEventListener("input",t((()=>localStorage.setItem("feedback-form-state",JSON.stringify({email:b.email.value,message:b.message.value}))),500)),b.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:e.target.email.value,message:e.target.message.value}),e.target.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.fbff310b.js.map