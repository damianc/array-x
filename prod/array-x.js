(()=>{"use strict";function n(n){let t=null;function i(t){return"function"==typeof n?n(t):t===n}for(let n in this)if(i(this[n])){t=[+n,this[n]];break}return t}function t(n){let t=[];return this.forEach(((i,e)=>{(function(t){return"function"==typeof n?n(t):t===n})(i)&&t.push([e,i])})),t}function i(n){return t=>n&&"function"==typeof n?n(t):t}function e(n=null){i(n);const t=this.x.findMinIndex(n);return-1===t?null:[t,this[t]]}function u(n=null){i(n);const t=this.x.findMaxIndex(n);return-1===t?null:[t,this[t]]}function r(n=null){const t=i(n);return 0===this.length?null:1===this.length?t(this[0]):this.reduce(((n,i,e)=>{const u=1===e?t(n):n;return Math.min(t(i),u)}))}function l(n=null){return 0===this.length?null:n?this.reduce(((t,i)=>n(i)<n(t)?i:t)):Math.min(...this)}function h(n,t,i=null,e){const u=[(n,e,u,r)=>{let l=t(n,e,u,r);return i&&u===r.length-1&&(l=i(l,r)),l}];return void 0!==e&&u.push(e),n.reduce(...u)}function s(n=null){const t=i(n);return 0===this.length?-1:1===this.length?0:h(this,((n,i,e)=>{if(1===e)return t(i)<t(n)?[i,1]:[n,0];let[u]=n;return t(i)<t(u)?[i,e]:n}),(([,n])=>n))}function o(n=null){const t=i(n);return 0===this.length?null:1===this.length?t(this[0]):this.reduce(((n,i,e)=>{const u=1===e?t(n):n;return Math.max(t(i),u)}))}function c(n=null){return 0===this.length?null:n?this.reduce(((t,i)=>n(i)>n(t)?i:t)):Math.max(...this)}function f(n=null){const t=i(n);return 0===this.length?-1:1===this.length?0:h(this,((n,i,e)=>{if(1===e)return t(i)>t(n)?[i,1]:[n,0];let[u]=n;return t(i)>t(u)?[i,e]:n}),(([,n])=>n))}function d(n){return this.reduce(((t,i)=>{return t+(e=i,("function"==typeof n?n(e):e===n)?1:0);var e}),0)}function a(n=null){const t=i(n);return 0===this.length?null:h(this.map((n=>t(n))),((n,t)=>n+t),((n,t)=>n/t.length))}Object.defineProperty(Array.prototype,"x",{get(){const i=this;return{localize:n.bind(i),localizeAll:t.bind(i),localizeMin:e.bind(i),localizeMax:u.bind(i),min:r.bind(i),findMin:l.bind(i),findMinIndex:s.bind(i),max:o.bind(i),findMax:c.bind(i),findMaxIndex:f.bind(i),count:d.bind(i),avg:a.bind(i)}}})})();