(()=>{"use strict";function t(...t){const n={};return this.forEach((e=>{const i=function(n){const e=[];return t.forEach((t=>{const i=t(n);null!==i&&e.push(i)})),e}(e);i.forEach((t=>{t in n||(n[t]=[]),n[t].push(e)}))})),n}function n(t,n=null,e="__unindexed"){return 0===this.length?{}:this.reduce(((i,r,u)=>{let s=function(n,e){let i;try{i="function"==typeof t?t(n,e):n[t]}catch(t){}return i}(r,u);return void 0===s&&(s=e),s in i||(i[s]=[]),i[s].push(function(t,e){return"function"==typeof n?n(t,e):"string"==typeof n?t[n]:t}(r,u)),i}),{})}function e(t,n,e,i,r=null){const u=t.x.index(e,r);return this.map((t=>{const e=t[n];let r;return u[e]&&(r=u[e][0]),{...t,[i]:r}}))}function i(t,n,e,i,r=null){const u=t.x.index(e,r);return this.map((t=>{let e=[];return t[n]&&t[n].length>0&&(e=t[n].map((t=>u[t]&&u[t][0])),e=e.filter((t=>void 0!==t))),{...t,[i]:e}}))}function r(t,n,e,i,r=null){const u=t.x.index(e,r);return this.map((t=>{let e,r=[];return(e=t[n])&&u[e]&&(r=u[e]),{...t,[i]:r}}))}function u(t){return n=>t&&"function"==typeof t?t(n):n}function s(t=null){const n=u(t),e={};return this.reduce(((t,i,r)=>{const u=n(i);return u in e?t:(e[u]=!0,[...t,i])}),[])}function l(t=null){const n=u(t);return this.reduce(((t,e,i)=>0===i?[this[0]]:n(e)===n(this[i-1])?t:[...t,e]),[])}function h(t,n=!0){if(0===this.length)return[];const e=this.findIndex((n=>"function"==typeof t?t(n):n===t));return-1===e?this:this.slice(0,e+(n?1:0))}function o(t,n,e,i=!0){const r=[];let u=e;for(let e in this){const s=this[e];if(u=n(u,s,e),t(u,s,+e)){i&&r.push(s);break}r.push(s)}return r}function c(t,n=!0){if(0===this.length)return[];const e=this.findIndex((n=>"function"==typeof t?t(n):n===t));return-1===e?[]:this.slice(e+(n?0:1))}function f(t,n,e,i=!0){const r=[];let u=e;for(let e in this){const s=this[e];if(u=n(u,s,e),t(u,s,+e)){i||r.push(s);break}r.push(s)}return this.slice(r.length)}function d(t){let n=null;function e(n){return"function"==typeof t?t(n):n===t}for(let t in this)if(e(this[t])){n=[+t,this[t]];break}return n}function a(t){let n=[];return this.forEach(((e,i)=>{(function(n){return"function"==typeof t?t(n):n===t})(e)&&n.push([i,e])})),n}function b(t=null){u(t);const n=this.x.findMinIndex(t);return-1===n?null:[n,this[n]]}function g(t=null){u(t);const n=this.x.findMaxIndex(t);return-1===n?null:[n,this[n]]}function p(t=null){const n=u(t);return 0===this.length?null:1===this.length?n(this[0]):this.reduce(((t,e,i)=>{const r=1===i?n(t):t;return Math.min(n(e),r)}))}function y(t=null){return 0===this.length?null:t?this.reduce(((n,e)=>t(e)<t(n)?e:n)):Math.min(...this)}function m(t,n,e=null,i){const r=[(t,i,r,u)=>{let s=n(t,i,r,u);return e&&r===u.length-1&&(s=e(s,u)),s}];return void 0!==i&&r.push(i),t.reduce(...r)}function x(t=null){const n=u(t);return 0===this.length?-1:1===this.length?0:m(this,((t,e,i)=>{if(1===i)return n(e)<n(t)?[e,1]:[t,0];let[r]=t;return n(e)<n(r)?[e,i]:t}),(([,t])=>t))}function v(t=null){const n=u(t);return 0===this.length?null:1===this.length?n(this[0]):this.reduce(((t,e,i)=>{const r=1===i?n(t):t;return Math.max(n(e),r)}))}function A(t=null){return 0===this.length?null:t?this.reduce(((n,e)=>t(e)>t(n)?e:n)):Math.max(...this)}function M(t=null){const n=u(t);return 0===this.length?-1:1===this.length?0:m(this,((t,e,i)=>{if(1===i)return n(e)>n(t)?[e,1]:[t,0];let[r]=t;return n(e)>n(r)?[e,i]:t}),(([,t])=>t))}function E(t){return this.reduce(((n,e)=>{return n+(i=e,("function"==typeof t?t(i):i===t)?1:0);var i}),0)}function k(...t){const n={};return this.forEach((e=>{const i=function(n){if(0===t.length)return[n];const e=[];return t.forEach((t=>{const i=t(n);null!==i&&e.push(i)})),e}(e);i.forEach((t=>{const e=n[t]||0;n[t]=e+1}))})),n}function z(t=null){const n=u(t);return 0===this.length?null:m(this.map((t=>n(t))),((t,n)=>t+n),((t,n)=>t/n.length))}function j(t=[],n=null){const e=u(n);if(0===this.length)return null;let i;Array.isArray(t)&&(i=function(t,n){if(t<=n.length)return n;const e=new Array(t).fill(1);return e.splice(0,n.length,...n),e}(this.length,t));let r=0;return m(this,((n,u,s)=>{const l=function(n,e){return Array.isArray(i)?i[e]:"function"==typeof t?t(n):void 0}(u,s);return r+=l,n+e(u)*l}),(t=>t/r),0)}function I(t=null){const n=u(t);return 0===this.length?null:m(this.map((t=>n(t))),((t,n)=>t+n))}function S(t,n=!1){if(!t||t<=0)return[];const e=this.reduce(((n,e)=>{if(n[n.length-1].length===t)return[...n,[e]];{const t=n.pop();return[...n,[...t,e]]}}),[[]]);return n&&e[e.length-1].length!==t&&e.splice(-1,1),e}function w(t=null,n=!0){return 0===this.length||null===t?[]:this.reduce(((e,i,r)=>{const u=e.pop();return t(i,r)?n?[...e,u,[i]]:[...e,[...u,i],...r===this.length-1?[]:[[]]]:[...e,[...u,i]]}),[[]])}function O(...t){let n=!1;!0===t[t.length-1]&&(n=!0,t.splice(-1,1));const e=t.filter((t=>t>0));if(!e.length)return[...this];let i=0;const r=[...this],u=[];for(;r.length>0;){const t=e[i];u.push(r.splice(0,t)),i<e.length-1?i+=1:i=0}return n&&u[u.length-1].length!==e[i]&&u.splice(-1,1),u}function P(...t){if(0===this.length||0===t.length)return[];let n=this.length;const e=t.filter((t=>!!Array.isArray(t)&&(n=Math.min(n,t.length),!0))),i=[];for(let t=0;t<n;t++){const n=e.map((n=>n[t]));i.push([this[t],...n])}return i}function R(...t){if(0===t.length)return null;let n=this.length>0,e=this.length;const i=t.filter((t=>!!Array.isArray(t)&&(e=Math.max(e,t.length),n=n||t.length>0,!0)));if(!n)return[];const r=[];for(let t=0;t<e;t++){const n=i.map((n=>n[t]));r.push([this[t],...n])}return r}function U(){if(0===this.length)return[];let t;return this.filter((n=>!!Array.isArray(n)&&(t=void 0===t?n.length:Math.min(t,n.length),!0))).reduce(((n,e)=>{for(let i=0;i<t;i++)Array.isArray(n[i])||(n[i]=[]),n[i].push(e[i]);return n}),[])}function q(){if(0===this.length)return[];let t;return this.filter((n=>!!Array.isArray(n)&&(t=void 0===t?n.length:Math.max(t,n.length),!0))).reduce(((n,e)=>{for(let i=0;i<t;i++)Array.isArray(n[i])||(n[i]=[]),n[i].push(e[i]);return n}),[])}function B(t=null){if(null===t)return[...this];let n=0,e=!1;const i=this.reduce(((i,r,u)=>{const s=function(e,i){let r;return r="function"==typeof t?t(e,i):Array.isArray(t)?t.includes(e):e===t,r&&(n+=1),r}(r,u);if(s)return e=!0,i;{let t;if(e)t=[...i,[r]];else{const n=i.slice(0,-1),[e]=i.slice(-1);t=[...n,(e||[]).concat(r)]}return e=!1,t}}),[]);return 0===n?i[0]:i}function C(t,n,e=null,i=!1){const r=[...this];if(t<0&&(t=0),n<0&&(n=0),0===t||0===t&&0===n)return r;null!==e&&r.splice(0,e);const u=[];let s=!0;for(;r.length>0;)s?u.push(r.splice(0,t)):r.splice(0,n),s=!s;return i&&u[u.length-1].length!==t&&u.splice(-1,1),u}function N(t=null){const n=null===t?Math.floor(this.length/2):t;return[this.slice(0,n),this.slice(n)]}function T(t,...n){const[e,i]=this.x.cut(t);return[...e,...n,...i]}function _(t,...n){const e=[...this];return e.splice(t,n.length,...n),e}function D(t,...n){if(0===this.length)return[];const e=[...this],i=t>=0?this.length-t:-1*t;return e.splice(t,n.length,...n.slice(0,i)),e}function F(t,n,e){const i=[...this],r=i.splice(t,n);return i.splice((t=>t>=0?t:this.length+t)(e),0,...r),i}function G(){return Math.random(),this.map((t=>({val:t,rand:Math.random()}))).sort(((t,n)=>t.rand-n.rand)).map((({val:t})=>t))}function H(t=1){if(t<1)return;const n=this.x.shuffle();return 1===t?n[0]:n.slice(0,t)}function J(t){const n=[...this];return t(n)||n}function K(t,n){return this.length>0&&this.forEach(((t,n)=>{this[n]=e(t)})),new Proxy(this,{set:(t,n,i)=>Reflect.set(t,n,n==+n?e(i):i)});function e(e){return Math.min(Math.max(e,t),n)}}function L(t=(t=>t)){return Object.defineProperty(this,"unfold",{value:t=>this[t]}),Object.defineProperty(this,"unshift",{value:(...t)=>{const n=[...t].reverse();this.reverse(),this.push(...n),this.reverse()}}),new Proxy(this,{get(n,e){if("symbol"==typeof e)return Reflect.get(n,e);if(+e==e){const i=n[e];return i?t(i):i}return Reflect.get(n,e)}})}function Q(){return this[Symbol.iterator]()}function V(){return[...this].reverse()[Symbol.iterator]()}function W(t,n,e=0){if(0===this.length)return[][Symbol.iterator]();if(1===this.length)return this[Symbol.iterator]();e>=this.length&&(e=this.length-1);const i=[this[e]];let r;for(;r=u.call(this);)i.push(r);return i[Symbol.iterator]();function u(){const e=i[i.length-1];if(e&&void 0!==e[n])return this.find((i=>i[t]===e[n]))}}function X(){return Object.freeze(this)}function Y(){return Object.seal(this)}function Z(){return Object.preventExtensions(this)}function $(){return[...this]}function tt(){return[...this].reverse()}function nt(t){const n=Symbol("forEach: break"),e={break:n,continue:Symbol("forEach: continue")};for(let i=0;i<this.length;i++){if(t(this[i],i,e,this)===n)break}}function et(t,n=null,e){const i=[(e,i,r,u)=>{let s=t(e,i,r,u);return r===this.length-1&&"function"==typeof n&&(s=n(s,this)),s}];return void 0!==e&&i.push(e),this.reduce(...i)}function it(t,n){if(!(t<=0))for(let e=0,i=1;e<this.length;e+=t)n(this.slice(e,e+t),i++,this)}function rt(t,n,e=!1){if(!(t<=0))for(let i=0;i<this.length;i++){const r=this.slice(i,i+t);if(e&&r.length<t)break;n(r,i,this)}}function ut(t=1,n=0,e){const i=this.slice(n,e),r=[];t<=0&&(t=1);for(let n=0;n<i.length;n+=t)r.push(i[n]);return r}function st(t=0,n=-1,e=1){const i=[];t<0&&(t=this.length+t),n<0&&(n=this.length+n),e<=0&&(e=1);for(let r=t;r<=n;r+=e)if(!(r<0)){if(r>=this.length)break;i.push(this[r])}return i}function lt(){return this.reduce(((t,n)=>[...t,n]),[])}function ht(t=1){t<0&&(t=0);const n=[];for(let e=0;e<this.length;e++)n[0===e?0:e+e*t]=this[e];return n}Object.defineProperty(Array.prototype,"x",{get(){const u=this,m={frozen:X.bind(u),forEach:nt.bind(u)};return{group:t.bind(u),index:n.bind(u),join1to1:e.bind(u),joinManyTo1:i.bind(u),join1ToMany:r.bind(u),uniq:s.bind(u),uniqSeq:l.bind(u),collectUntil:h.bind(u),collectUntilReduce:o.bind(u),skipUntil:c.bind(u),skipUntilReduce:f.bind(u),localize:d.bind(u),localizeAll:a.bind(u),localizeMin:b.bind(u),localizeMax:g.bind(u),min:p.bind(u),findMin:y.bind(u),findMinIndex:x.bind(u),max:v.bind(u),findMax:A.bind(u),findMaxIndex:M.bind(u),count:E.bind(u),countAll:k.bind(u),avg:z.bind(u),wavg:j.bind(u),sum:I.bind(u),chunk:S.bind(u),chunkByCallback:w.bind(u),chunkByPattern:O.bind(u),zip:P.bind(u),zipAll:R.bind(u),unzip:U.bind(u),unzipAll:q.bind(u),split:B.bind(u),splitByPattern:C.bind(u),cut:N.bind(u),insert:T.bind(u),overwrite:_.bind(u),override:D.bind(u),move:F.bind(u),shuffle:G.bind(u),random:H.bind(u),wrapAlter:J.bind(u),clamped:K.bind(u),folded:L.bind(u),iterator:Q.bind(u),revIterator:V.bind(u),refIterator:W.bind(u),frozen:m.frozen,readonly:m.frozen,readOnly:m.frozen,fixed:Y.bind(u),dwarf:Z.bind(u),alterable:$.bind(u),reversed:tt.bind(u),forEach:m.forEach,each:m.forEach,reduce:et.bind(u),forEveryChunk:it.bind(u),forEveryN:rt.bind(u),everyNth:ut.bind(u),select:st.bind(u),thick:lt.bind(u),sparse:ht.bind(u)}}})})();