(()=>{"use strict";function n(...n){const t={};return this.forEach((i=>{const e=function(t){const i=[];return n.forEach((n=>{const e=n(t);null!==e&&i.push(e)})),i}(i);e.forEach((n=>{n in t||(t[n]=[]),t[n].push(i)}))})),t}function t(n,t=null,i="__unindexed"){return 0===this.length?{}:this.reduce(((e,r,u)=>{let s=function(t,i){let e;try{e="function"==typeof n?n(t,i):t[n]}catch(n){}return e}(r,u);return void 0===s&&(s=i),s in e||(e[s]=[]),e[s].push(function(n,i){return"function"==typeof t?t(n,i):"string"==typeof t?n[t]:n}(r,u)),e}),{})}function i(n,t,i,e,r=null){const u=n.x.index(i,r);return this.map((n=>{const i=n[t];let r;return u[i]&&(r=u[i][0]),{...n,[e]:r}}))}function e(n,t,i,e,r=null){const u=n.x.index(i,r);return this.map((n=>{let i=[];return n[t]&&n[t].length>0&&(i=n[t].map((n=>u[n]&&u[n][0])),i=i.filter((n=>void 0!==n))),{...n,[e]:i}}))}function r(n,t,i,e,r=null){const u=n.x.index(i,r);return this.map((n=>{let i,r=[];return(i=n[t])&&u[i]&&(r=u[i]),{...n,[e]:r}}))}function u(n){return t=>n&&"function"==typeof n?n(t):t}function s(n=null){const t=u(n),i={};return this.reduce(((n,e,r)=>{const u=t(e);return u in i?n:(i[u]=!0,[...n,e])}),[])}function l(n=null){const t=u(n);return this.reduce(((n,i,e)=>0===e?[this[0]]:t(i)===t(this[e-1])?n:[...n,i]),[])}function h(n,t=!0){if(0===this.length)return[];const i=this.findIndex((t=>"function"==typeof n?n(t):t===n));return-1===i?this:this.slice(0,i+(t?1:0))}function o(n,t,i,e=!0){const r=[];let u=i;for(let i in this){const s=this[i];if(u=t(u,s,i),n(u,s,+i)){e&&r.push(s);break}r.push(s)}return r}function c(n,t=!0){if(0===this.length)return[];const i=this.findIndex((t=>"function"==typeof n?n(t):t===n));return-1===i?[]:this.slice(i+(t?0:1))}function f(n,t,i,e=!0){const r=[];let u=i;for(let i in this){const s=this[i];if(u=t(u,s,i),n(u,s,+i)){e||r.push(s);break}r.push(s)}return this.slice(r.length)}function d(n){let t=null;function i(t){return"function"==typeof n?n(t):t===n}for(let n in this)if(i(this[n])){t=[+n,this[n]];break}return t}function a(n){let t=[];return this.forEach(((i,e)=>{(function(t){return"function"==typeof n?n(t):t===n})(i)&&t.push([e,i])})),t}function b(n=null){u(n);const t=this.x.findMinIndex(n);return-1===t?null:[t,this[t]]}function g(n=null){u(n);const t=this.x.findMaxIndex(n);return-1===t?null:[t,this[t]]}function p(n=null){const t=u(n);return 0===this.length?null:1===this.length?t(this[0]):this.reduce(((n,i,e)=>{const r=1===e?t(n):n;return Math.min(t(i),r)}))}function y(n=null){return 0===this.length?null:n?this.reduce(((t,i)=>n(i)<n(t)?i:t)):Math.min(...this)}function x(n,t,i=null,e){const r=[(n,e,r,u)=>{let s=t(n,e,r,u);return i&&r===u.length-1&&(s=i(s,u)),s}];return void 0!==e&&r.push(e),n.reduce(...r)}function m(n=null){const t=u(n);return 0===this.length?-1:1===this.length?0:x(this,((n,i,e)=>{if(1===e)return t(i)<t(n)?[i,1]:[n,0];let[r]=n;return t(i)<t(r)?[i,e]:n}),(([,n])=>n))}function v(n=null){const t=u(n);return 0===this.length?null:1===this.length?t(this[0]):this.reduce(((n,i,e)=>{const r=1===e?t(n):n;return Math.max(t(i),r)}))}function A(n=null){return 0===this.length?null:n?this.reduce(((t,i)=>n(i)>n(t)?i:t)):Math.max(...this)}function M(n=null){const t=u(n);return 0===this.length?-1:1===this.length?0:x(this,((n,i,e)=>{if(1===e)return t(i)>t(n)?[i,1]:[n,0];let[r]=n;return t(i)>t(r)?[i,e]:n}),(([,n])=>n))}function E(n){return this.reduce(((t,i)=>{return t+(e=i,("function"==typeof n?n(e):e===n)?1:0);var e}),0)}function k(...n){const t={};return this.forEach((i=>{const e=function(t){if(0===n.length)return[t];const i=[];return n.forEach((n=>{const e=n(t);null!==e&&i.push(e)})),i}(i);e.forEach((n=>{const i=t[n]||0;t[n]=i+1}))})),t}function z(n=null){const t=u(n);return 0===this.length?null:x(this.map((n=>t(n))),((n,t)=>n+t),((n,t)=>n/t.length))}function j(n=[],t=null){const i=u(t);if(0===this.length)return null;let e;Array.isArray(n)&&(e=function(n,t){if(n<=t.length)return t;const i=new Array(n).fill(1);return i.splice(0,t.length,...t),i}(this.length,n));let r=0;return x(this,((t,u,s)=>{const l=function(t,i){return Array.isArray(e)?e[i]:"function"==typeof n?n(t):void 0}(u,s);return r+=l,t+i(u)*l}),(n=>n/r),0)}function O(n=null){const t=u(n);return 0===this.length?null:x(this.map((n=>t(n))),((n,t)=>n+t))}function w(n){return!n||n<=0?[]:this.reduce(((t,i)=>{if(t[t.length-1].length===n)return[...t,[i]];{const n=t.pop();return[...t,[...n,i]]}}),[[]])}function I(n=null,t=!0){return 0===this.length||null===n?[]:this.reduce(((i,e,r)=>{const u=i.pop();return n(e,r)?t?[...i,u,[e]]:[...i,[...u,e],...r===this.length-1?[]:[[]]]:[...i,[...u,e]]}),[[]])}function P(...n){if(0===this.length||0===n.length)return[];let t=this.length;const i=n.filter((n=>!!Array.isArray(n)&&(t=Math.min(t,n.length),!0))),e=[];for(let n=0;n<t;n++){const t=i.map((t=>t[n]));e.push([this[n],...t])}return e}function R(...n){if(0===n.length)return null;let t=this.length>0,i=this.length;const e=n.filter((n=>!!Array.isArray(n)&&(i=Math.max(i,n.length),t=t||n.length>0,!0)));if(!t)return[];const r=[];for(let n=0;n<i;n++){const t=e.map((t=>t[n]));r.push([this[n],...t])}return r}function S(){if(0===this.length)return[];let n;return this.filter((t=>!!Array.isArray(t)&&(n=void 0===n?t.length:Math.min(n,t.length),!0))).reduce(((t,i)=>{for(let e=0;e<n;e++)Array.isArray(t[e])||(t[e]=[]),t[e].push(i[e]);return t}),[])}function U(){if(0===this.length)return[];let n;return this.filter((t=>!!Array.isArray(t)&&(n=void 0===n?t.length:Math.max(n,t.length),!0))).reduce(((t,i)=>{for(let e=0;e<n;e++)Array.isArray(t[e])||(t[e]=[]),t[e].push(i[e]);return t}),[])}function q(n=null){const t=null===n?Math.floor(this.length/2):n;return[this.slice(0,t),this.slice(t)]}function C(n,...t){const[i,e]=this.x.split(n);return[...i,...t,...e]}function T(n,...t){const i=[...this];return i.splice(n,t.length,...t),i}function _(n,...t){if(0===this.length)return[];const i=[...this],e=n>=0?this.length-n:-1*n;return i.splice(n,t.length,...t.slice(0,e)),i}function B(n,t,i){const e=[...this],r=e.splice(n,t);return e.splice((n=>n>=0?n:this.length+n)(i),0,...r),e}function N(n,t){return this.length>0&&this.forEach(((n,t)=>{this[t]=i(n)})),new Proxy(this,{set:(n,t,e)=>Reflect.set(n,t,t==+t?i(e):e)});function i(i){return Math.min(Math.max(i,n),t)}}function D(n=(n=>n)){return Object.defineProperty(this,"unfold",{value:n=>this[n]}),Object.defineProperty(this,"unshift",{value:(...n)=>{const t=[...n].reverse();this.reverse(),this.push(...t),this.reverse()}}),new Proxy(this,{get(t,i){if("symbol"==typeof i)return Reflect.get(t,i);if(+i==i){const e=t[i];return e?n(e):e}return Reflect.get(t,i)}})}function F(){return this[Symbol.iterator]()}function G(){return Object.freeze(this)}function H(){return Object.seal(this)}function J(){return Object.preventExtensions(this)}function K(){return[...this]}function L(){return[...this].reverse()}function Q(n){const t=Symbol("forEach: break"),i={break:t,continue:Symbol("forEach: continue")};for(let e=0;e<this.length;e++){if(n(this[e],e,i,this)===t)break}}function V(n,t){if(!(n<=0))for(let i=0,e=1;i<this.length;i+=n)t(this.slice(i,i+n),e++,this)}function W(n,t,i=!1){if(!(n<=0))for(let e=0;e<this.length;e++){const r=this.slice(e,e+n);if(i&&r.length<n)break;t(r,e,this)}}function X(n=0,t=-1,i=1){const e=[];n<0&&(n=this.length+n),t<0&&(t=this.length+t),i<=0&&(i=1);for(let r=n;r<=t;r+=i)if(!(r<0)){if(r>=this.length)break;e.push(this[r])}return e}Object.defineProperty(Array.prototype,"x",{get(){const u=this,x={frozen:G.bind(u),forEach:Q.bind(u)};return{group:n.bind(u),index:t.bind(u),join1to1:i.bind(u),joinManyTo1:e.bind(u),join1ToMany:r.bind(u),uniq:s.bind(u),uniqSeq:l.bind(u),collectUntil:h.bind(u),collectUntilReduce:o.bind(u),skipUntil:c.bind(u),skipUntilReduce:f.bind(u),localize:d.bind(u),localizeAll:a.bind(u),localizeMin:b.bind(u),localizeMax:g.bind(u),min:p.bind(u),findMin:y.bind(u),findMinIndex:m.bind(u),max:v.bind(u),findMax:A.bind(u),findMaxIndex:M.bind(u),count:E.bind(u),countAll:k.bind(u),avg:z.bind(u),wavg:j.bind(u),sum:O.bind(u),chunk:w.bind(u),chunkByCallback:I.bind(u),zip:P.bind(u),zipAll:R.bind(u),unzip:S.bind(u),unzipAll:U.bind(u),split:q.bind(u),insert:C.bind(u),overwrite:T.bind(u),override:_.bind(u),move:B.bind(u),clamped:N.bind(u),folded:D.bind(u),iterator:F.bind(u),frozen:x.frozen,readonly:x.frozen,readOnly:x.frozen,fixed:H.bind(u),dwarf:J.bind(u),alterable:K.bind(u),reverse:L.bind(u),forEach:x.forEach,each:x.forEach,forEveryChunk:V.bind(u),forEveryN:W.bind(u),select:X.bind(u)}}})})();