!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["use-polling"]=n():t["use-polling"]=n()}(window,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=40)}([function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(15)("wks"),o=r(9),i=r(0).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,r){var e=r(2),o=r(26),i=r(18),u=Object.defineProperty;n.f=r(5)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){t.exports=!r(14)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=r)},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(61),o=r(62);t.exports=function(t){return e(o(t))}},function(t,n){t.exports=!1},function(t,n,r){var e=r(13);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(6),o=r(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(11)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(3),o=r(19);t.exports=r(5)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(4),o=r(0).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(0),o=r(16),i=r(7),u=r(9)("src"),c=Function.toString,a=(""+c).split("toString");r(6).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var f="function"==typeof r;f&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(f&&(i(r,u)||o(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,r){var e=r(36),o=r(22);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(8),o=r(1)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){var e=r(0),o=r(6),i=r(16),u=r(20),c=r(12),a=function(t,n,r){var f,s,l,p,h=t&a.F,v=t&a.G,y=t&a.S,d=t&a.P,m=t&a.B,g=v?e:y?e[n]||(e[n]={}):(e[n]||{}).prototype,x=v?o:o[n]||(o[n]={}),b=x.prototype||(x.prototype={});for(f in v&&(r=n),r)l=((s=!h&&g&&void 0!==g[f])?g:r)[f],p=m&&s?c(l,e):d&&"function"==typeof l?c(Function.call,l):l,g&&u(g,f,l,t&a.U),x[f]!=l&&i(x,f,p),d&&b[f]!=l&&(b[f]=l)};e.core=o,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,r){t.exports=!r(5)&&!r(14)(function(){return 7!=Object.defineProperty(r(17)("div"),"a",{get:function(){return 7}}).a})},function(t,n){t.exports={}},function(t,n,r){var e=r(29),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e,o,i,u=r(12),c=r(49),a=r(31),f=r(17),s=r(0),l=s.process,p=s.setImmediate,h=s.clearImmediate,v=s.MessageChannel,y=s.Dispatch,d=0,m={},g=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},x=function(t){g.call(t.data)};p&&h||(p=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return m[++d]=function(){c("function"==typeof t?t:Function(t),n)},e(d),d},h=function(t){delete m[t]},"process"==r(8)(l)?e=function(t){l.nextTick(u(g,t,1))}:y&&y.now?e=function(t){y.now(u(g,t,1))}:v?(i=(o=new v).port2,o.port1.onmessage=x,e=u(i.postMessage,i,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",x,!1)):e="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),g.call(t)}}:function(t){setTimeout(u(g,t,1),0)}),t.exports={set:p,clear:h}},function(t,n,r){var e=r(0).document;t.exports=e&&e.documentElement},function(t,n,r){"use strict";var e=r(13);function o(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=e(n),this.reject=e(r)}t.exports.f=function(t){return new o(t)}},function(t,n,r){var e=r(3).f,o=r(7),i=r(1)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n,r){var e=r(0),o=r(6),i=r(11),u=r(35),c=r(3).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){n.f=r(1)},function(t,n,r){var e=r(7),o=r(10),i=r(63)(!1),u=r(37)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)r!=u&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~i(f,r)||f.push(r));return f}},function(t,n,r){var e=r(15)("keys"),o=r(9);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(36),o=r(22).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){"use strict";r.r(n);r(41),r(42),r(57),r(58);function e(t,n,r,e,o,i,u){try{var c=t[i](u),a=c.value}catch(t){return void r(t)}c.done?n(a):Promise.resolve(a).then(e,o)}function o(t){var n;if("function"==typeof Symbol){if(Symbol.asyncIterator&&null!=(n=t[Symbol.asyncIterator]))return n.call(t);if(Symbol.iterator&&null!=(n=t[Symbol.iterator]))return n.call(t)}throw new TypeError("Object is not async iterable")}function i(t){return new c(t)}function u(t){var n,r;function e(n,r){try{var i=t[n](r),u=i.value,a=u instanceof c;Promise.resolve(a?u.wrapped:u).then(function(t){a?e("next",t):o(i.done?"return":"normal",t)},function(t){e("throw",t)})}catch(t){o("throw",t)}}function o(t,o){switch(t){case"return":n.resolve({value:o,done:!0});break;case"throw":n.reject(o);break;default:n.resolve({value:o,done:!1})}(n=n.next)?e(n.key,n.arg):r=null}this._invoke=function(t,o){return new Promise(function(i,u){var c={key:t,arg:o,resolve:i,reject:u,next:null};r?r=r.next=c:(n=r=c,e(t,o))})},"function"!=typeof t.return&&(this.return=void 0)}function c(t){this.wrapped=t}"function"==typeof Symbol&&Symbol.asyncIterator&&(u.prototype[Symbol.asyncIterator]=function(){return this}),u.prototype.next=function(t){return this._invoke("next",t)},u.prototype.throw=function(t){return this._invoke("throw",t)},u.prototype.return=function(t){return this._invoke("return",t)},n.default=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0};if("function"!=typeof t)throw TypeError("You should pass a function as the first param.");if("number"!=typeof n)throw TypeError("You should pass the ms for the cycle of polling.");if("function"!=typeof r)throw TypeError("The predicate is used to determine when to exit polling");var c=(a=regeneratorRuntime.mark(function e(){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=null;case 1:return e.next=4,i(t());case 4:if(o=e.sent,!r(o)){e.next=7;break}return e.abrupt("return",o);case 7:return e.next=9,o;case 9:return e.next=11,i(new Promise(function(t){return setTimeout(t,n)}));case 11:e.next=1;break;case 13:case"end":return e.stop()}},e,this)}),f=function(){return new u(a.apply(this,arguments))},function(){return f.apply(this,arguments)});var a,f;return function(){var t,n=(t=regeneratorRuntime.mark(function t(n){var r,e,i,u,a,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=!0,e=!1,t.prev=2,u=o(c());case 4:return t.next=6,u.next();case 6:return a=t.sent,r=a.done,t.next=10,a.value;case 10:if(f=t.sent,r){t.next=17;break}n(f);case 14:r=!0,t.next=4;break;case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(2),e=!0,i=t.t0;case 23:if(t.prev=23,t.prev=24,r||null==u.return){t.next=28;break}return t.next=28,u.return();case 28:if(t.prev=28,!e){t.next=31;break}throw i;case 31:return t.finish(28);case 32:return t.finish(23);case 33:case"end":return t.stop()}},t,this,[[2,19,23,33],[24,,28,32]])}),function(){var n=this,r=arguments;return new Promise(function(o,i){var u=t.apply(n,r);function c(t){e(u,o,i,c,a,"next",t)}function a(t){e(u,o,i,c,a,"throw",t)}c(void 0)})});return function(t){return n.apply(this,arguments)}}()}},function(t,n){!function(n){"use strict";var r,e=Object.prototype,o=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},u=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag",f="object"==typeof t,s=n.regeneratorRuntime;if(s)f&&(t.exports=s);else{(s=n.regeneratorRuntime=f?t.exports:{}).wrap=b;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",y={},d={};d[u]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(F([])));g&&g!==e&&o.call(g,u)&&(d=g);var x=j.prototype=_.prototype=Object.create(d);O.prototype=x.constructor=j,j.constructor=O,j[a]=O.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===O||"GeneratorFunction"===(n.displayName||n.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(x),t},s.awrap=function(t){return{__await:t}},S(E.prototype),E.prototype[c]=function(){return this},s.AsyncIterator=E,s.async=function(t,n,r,e){var o=new E(b(t,n,r,e));return s.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},S(x),x[a]="Generator",x[u]=function(){return this},x.toString=function(){return"[object Generator]"},s.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},s.values=F,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,o){return c.type="throw",c.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],c=u.completion;if("root"===u.tryLoc)return e("end");if(u.tryLoc<=this.prev){var a=o.call(u,"catchLoc"),f=o.call(u,"finallyLoc");if(a&&f){if(this.prev<u.catchLoc)return e(u.catchLoc,!0);if(this.prev<u.finallyLoc)return e(u.finallyLoc)}else if(a){if(this.prev<u.catchLoc)return e(u.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return e(u.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&o.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:F(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),y}}}function b(t,n,r,e){var o=n&&n.prototype instanceof _?n:_,i=Object.create(o.prototype),u=new L(e||[]);return i._invoke=function(t,n,r){var e=l;return function(o,i){if(e===h)throw new Error("Generator is already running");if(e===v){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var c=P(u,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=h;var a=w(t,n,r);if("normal"===a.type){if(e=r.done?v:p,a.arg===y)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(e=v,r.method="throw",r.arg=a.arg)}}}(t,r,u),i}function w(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function _(){}function O(){}function j(){}function S(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function E(t){var n;this._invoke=function(r,e){function i(){return new Promise(function(n,i){!function n(r,e,i,u){var c=w(t[r],t,e);if("throw"!==c.type){var a=c.arg,f=a.value;return f&&"object"==typeof f&&o.call(f,"__await")?Promise.resolve(f.__await).then(function(t){n("next",t,i,u)},function(t){n("throw",t,i,u)}):Promise.resolve(f).then(function(t){a.value=t,i(a)},u)}u(c.arg)}(r,e,n,i)})}return n=n?n.then(i,i):i()}}function P(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,P(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=w(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function T(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function F(t){if(t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,i=function n(){for(;++e<t.length;)if(o.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=r,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},function(t,n,r){"use strict";var e,o,i,u,c=r(11),a=r(0),f=r(12),s=r(24),l=r(25),p=r(4),h=r(13),v=r(43),y=r(44),d=r(48),m=r(30).set,g=r(50)(),x=r(32),b=r(51),w=r(52),_=r(53),O=a.TypeError,j=a.process,S=j&&j.versions,E=S&&S.v8||"",P=a.Promise,k="process"==s(j),T=function(){},L=o=x.f,F=!!function(){try{var t=P.resolve(1),n=(t.constructor={})[r(1)("species")]=function(t){t(T,T)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof n&&0!==E.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),M=function(t){var n;return!(!p(t)||"function"!=typeof(n=t.then))&&n},N=function(t,n){if(!t._n){t._n=!0;var r=t._c;g(function(){for(var e=t._v,o=1==t._s,i=0,u=function(n){var r,i,u,c=o?n.ok:n.fail,a=n.resolve,f=n.reject,s=n.domain;try{c?(o||(2==t._h&&R(t),t._h=1),!0===c?r=e:(s&&s.enter(),r=c(e),s&&(s.exit(),u=!0)),r===n.promise?f(O("Promise-chain cycle")):(i=M(r))?i.call(r,a,f):a(r)):f(e)}catch(t){s&&!u&&s.exit(),f(t)}};r.length>i;)u(r[i++]);t._c=[],t._n=!1,n&&!t._h&&I(t)})}},I=function(t){m.call(a,function(){var n,r,e,o=t._v,i=A(t);if(i&&(n=b(function(){k?j.emit("unhandledRejection",o,t):(r=a.onunhandledrejection)?r({promise:t,reason:o}):(e=a.console)&&e.error&&e.error("Unhandled promise rejection",o)}),t._h=k||A(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},A=function(t){return 1!==t._h&&0===(t._a||t._c).length},R=function(t){m.call(a,function(){var n;k?j.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},G=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),N(n,!0))},C=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw O("Promise can't be resolved itself");(n=M(t))?g(function(){var e={_w:r,_d:!1};try{n.call(t,f(C,e,1),f(G,e,1))}catch(t){G.call(e,t)}}):(r._v=t,r._s=1,N(r,!1))}catch(t){G.call({_w:r,_d:!1},t)}}};F||(P=function(t){v(this,P,"Promise","_h"),h(t),e.call(this);try{t(f(C,this,1),f(G,this,1))}catch(t){G.call(this,t)}},(e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(54)(P.prototype,{then:function(t,n){var r=L(d(this,P));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=k?j.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&N(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new e;this.promise=t,this.resolve=f(C,t,1),this.reject=f(G,t,1)},x.f=L=function(t){return t===P||t===u?new i(t):o(t)}),l(l.G+l.W+l.F*!F,{Promise:P}),r(33)(P,"Promise"),r(55)("Promise"),u=r(6).Promise,l(l.S+l.F*!F,"Promise",{reject:function(t){var n=L(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(c||!F),"Promise",{resolve:function(t){return _(c&&this===u?P:this,t)}}),l(l.S+l.F*!(F&&r(56)(function(t){P.all(t).catch(T)})),"Promise",{all:function(t){var n=this,r=L(n),e=r.resolve,o=r.reject,i=b(function(){var r=[],i=0,u=1;y(t,!1,function(t){var c=i++,a=!1;r.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,r[c]=t,--u||e(r))},o)}),--u||e(r)});return i.e&&o(i.v),r.promise},race:function(t){var n=this,r=L(n),e=r.reject,o=b(function(){y(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return o.e&&e(o.v),r.promise}})},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var e=r(12),o=r(45),i=r(46),u=r(2),c=r(28),a=r(47),f={},s={};(n=t.exports=function(t,n,r,l,p){var h,v,y,d,m=p?function(){return t}:a(t),g=e(r,l,n?2:1),x=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(i(m)){for(h=c(t.length);h>x;x++)if((d=n?g(u(v=t[x])[0],v[1]):g(t[x]))===f||d===s)return d}else for(y=m.call(t);!(v=y.next()).done;)if((d=o(y,g,v.value,n))===f||d===s)return d}).BREAK=f,n.RETURN=s},function(t,n,r){var e=r(2);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(27),o=r(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},function(t,n,r){var e=r(24),o=r(1)("iterator"),i=r(27);t.exports=r(6).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[e(t)]}},function(t,n,r){var e=r(2),o=r(13),i=r(1)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||null==(r=e(u)[i])?n:o(r)}},function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var e=r(0),o=r(30).set,i=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,a="process"==r(8)(u);t.exports=function(){var t,n,r,f=function(){var e,o;for(a&&(e=u.domain)&&e.exit();t;){o=t.fn,t=t.next;try{o()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(a)r=function(){u.nextTick(f)};else if(!i||e.navigator&&e.navigator.standalone)if(c&&c.resolve){var s=c.resolve(void 0);r=function(){s.then(f)}}else r=function(){o.call(e,f)};else{var l=!0,p=document.createTextNode("");new i(f).observe(p,{characterData:!0}),r=function(){p.data=l=!l}}return function(e){var o={fn:e,next:void 0};n&&(n.next=o),t||(t=o,r()),n=o}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,r){var e=r(0).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){var e=r(2),o=r(4),i=r(32);t.exports=function(t,n){if(e(t),o(n)&&n.constructor===t)return n;var r=i.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){var e=r(20);t.exports=function(t,n,r){for(var o in n)e(t,o,n[o],r);return t}},function(t,n,r){"use strict";var e=r(0),o=r(3),i=r(5),u=r(1)("species");t.exports=function(t){var n=e[t];i&&n&&!n[u]&&o.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n,r){var e=r(1)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],u=i[e]();u.next=function(){return{done:r=!0}},i[e]=function(){return u},t(i)}catch(t){}return r}},function(t,n,r){r(34)("asyncIterator")},function(t,n,r){"use strict";var e=r(0),o=r(7),i=r(5),u=r(25),c=r(20),a=r(59).KEY,f=r(14),s=r(15),l=r(33),p=r(9),h=r(1),v=r(35),y=r(34),d=r(60),m=r(65),g=r(2),x=r(4),b=r(10),w=r(18),_=r(19),O=r(66),j=r(68),S=r(69),E=r(3),P=r(21),k=S.f,T=E.f,L=j.f,F=e.Symbol,M=e.JSON,N=M&&M.stringify,I=h("_hidden"),A=h("toPrimitive"),R={}.propertyIsEnumerable,G=s("symbol-registry"),C=s("symbols"),D=s("op-symbols"),W=Object.prototype,Y="function"==typeof F,K=e.QObject,U=!K||!K.prototype||!K.prototype.findChild,B=i&&f(function(){return 7!=O(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=k(W,n);e&&delete W[n],T(t,n,r),e&&t!==W&&T(W,n,e)}:T,J=function(t){var n=C[t]=O(F.prototype);return n._k=t,n},z=Y&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},H=function(t,n,r){return t===W&&H(D,n,r),g(t),n=w(n,!0),g(r),o(C,n)?(r.enumerable?(o(t,I)&&t[I][n]&&(t[I][n]=!1),r=O(r,{enumerable:_(0,!1)})):(o(t,I)||T(t,I,_(1,{})),t[I][n]=!0),B(t,n,r)):T(t,n,r)},Q=function(t,n){g(t);for(var r,e=d(n=b(n)),o=0,i=e.length;i>o;)H(t,r=e[o++],n[r]);return t},q=function(t){var n=R.call(this,t=w(t,!0));return!(this===W&&o(C,t)&&!o(D,t))&&(!(n||!o(this,t)||!o(C,t)||o(this,I)&&this[I][t])||n)},V=function(t,n){if(t=b(t),n=w(n,!0),t!==W||!o(C,n)||o(D,n)){var r=k(t,n);return!r||!o(C,n)||o(t,I)&&t[I][n]||(r.enumerable=!0),r}},X=function(t){for(var n,r=L(b(t)),e=[],i=0;r.length>i;)o(C,n=r[i++])||n==I||n==a||e.push(n);return e},Z=function(t){for(var n,r=t===W,e=L(r?D:b(t)),i=[],u=0;e.length>u;)!o(C,n=e[u++])||r&&!o(W,n)||i.push(C[n]);return i};Y||(c((F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(r){this===W&&n.call(D,r),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),B(this,t,_(1,r))};return i&&U&&B(W,t,{configurable:!0,set:n}),J(t)}).prototype,"toString",function(){return this._k}),S.f=V,E.f=H,r(39).f=j.f=X,r(23).f=q,r(38).f=Z,i&&!r(11)&&c(W,"propertyIsEnumerable",q,!0),v.f=function(t){return J(h(t))}),u(u.G+u.W+u.F*!Y,{Symbol:F});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)h($[tt++]);for(var nt=P(h.store),rt=0;nt.length>rt;)y(nt[rt++]);u(u.S+u.F*!Y,"Symbol",{for:function(t){return o(G,t+="")?G[t]:G[t]=F(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var n in G)if(G[n]===t)return n},useSetter:function(){U=!0},useSimple:function(){U=!1}}),u(u.S+u.F*!Y,"Object",{create:function(t,n){return void 0===n?O(t):Q(O(t),n)},defineProperty:H,defineProperties:Q,getOwnPropertyDescriptor:V,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),M&&u(u.S+u.F*(!Y||f(function(){var t=F();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){for(var n,r,e=[t],o=1;arguments.length>o;)e.push(arguments[o++]);if(r=n=e[1],(x(n)||void 0!==t)&&!z(t))return m(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!z(n))return n}),e[1]=n,N.apply(M,e)}}),F.prototype[A]||r(16)(F.prototype,A,F.prototype.valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){var e=r(9)("meta"),o=r(4),i=r(7),u=r(3).f,c=0,a=Object.isExtensible||function(){return!0},f=!r(14)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!i(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return f&&l.NEED&&a(t)&&!i(t,e)&&s(t),t}}},function(t,n,r){var e=r(21),o=r(38),i=r(23);t.exports=function(t){var n=e(t),r=o.f;if(r)for(var u,c=r(t),a=i.f,f=0;c.length>f;)a.call(t,u=c[f++])&&n.push(u);return n}},function(t,n,r){var e=r(8);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(10),o=r(28),i=r(64);t.exports=function(t){return function(n,r,u){var c,a=e(n),f=o(a.length),s=i(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(29),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},function(t,n,r){var e=r(8);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(2),o=r(67),i=r(22),u=r(37)("IE_PROTO"),c=function(){},a=function(){var t,n=r(17)("iframe"),e=i.length;for(n.style.display="none",r(31).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;e--;)delete a.prototype[i[e]];return a()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(3),o=r(2),i=r(21);t.exports=r(5)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,a=0;c>a;)e.f(t,r=u[a++],n[r]);return t}},function(t,n,r){var e=r(10),o=r(39).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,n,r){var e=r(23),o=r(19),i=r(10),u=r(18),c=r(7),a=r(26),f=Object.getOwnPropertyDescriptor;n.f=r(5)?f:function(t,n){if(t=i(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(c(t,n))return o(!e.f.call(t,n),t[n])}}])});