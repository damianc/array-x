(()=>{"use strict";function n(...n){const t={};return this.forEach((e=>{const i=function(t){const e=[];return n.forEach((n=>{const i=n(t);null!==i&&e.push(i)})),e}(e);i.forEach((n=>{n in t||(t[n]=[]),t[n].push(e)}))})),t}function t(n,t=null,e="__unindexed"){return 0===this.length?{}:this.reduce(((i,r,u)=>{let l=function(t,e){let i;try{i="function"==typeof n?n(t,e):t[n]}catch(n){}return i}(r,u);return void 0===l&&(l=e),l in i||(i[l]=[]),i[l].push(function(n,e){return"function"==typeof t?t(n,e):"string"==typeof t?n[t]:n}(r,u)),i}),{})}function e(n,t,e,i,r=null){const u=n.x.index(e,r);return this.map((n=>{const e=n[t];let r;return u[e]&&(r=u[e][0]),{...n,[i]:r}}))}function i(n,t,e,i,r=null){const u=n.x.index(e,r);return this.map((n=>{let e=[];return n[t]&&n[t].length>0&&(e=n[t].map((n=>u[n]&&u[n][0])),e=e.filter((n=>void 0!==n))),{...n,[i]:e}}))}function r(n,t,e,i,r=null){const u=n.x.index(e,r);return this.map((n=>{let e,r=[];return(e=n[t])&&u[e]&&(r=u[e]),{...n,[i]:r}}))}function u(n,t,e=null,i){const r=[(n,i,r,u)=>{let l=t(n,i,r,u);return e&&r===u.length-1&&(l=e(l,u)),l}];return void 0!==i&&r.push(i),n.reduce(...r)}function l(n){return t=>n&&"function"==typeof n?n(t):t}const s=function(n){return{local(t,e=null){if(t.length<2)return;null===e&&(e=(n,t)=>Math.abs(n-t));let i=e(t[0],t[1]);return t.slice(0,-1).reduce(((i,r,u)=>{if(!u)return i;const l=e(r,t[u+1]);return n(l,i)?l:i}),i)},global(t,e=null){if(t.length<2)return;null===e&&(e=(n,t)=>Math.abs(n-t));let i=e(t[0],t[1]);for(let r in t)for(let u in t){if(r===u)continue;const l=e(t[r],t[u]);n(l,i)&&(i=l)}return i},globalAhead(t,e=null){if(t.length<2)return;null===e&&(e=(n,t)=>Math.abs(n-t));let i=e(t[0],t[1]);for(let r in t)for(let u=+r+1;u<t.length;u++){const l=e(t[r],t[u]);n(l,i)&&(i=l)}return i}}},o=s(((n,t)=>n>t)),h=s(((n,t)=>n<t));function c(n=null){const t=l(n),e={};return this.reduce(((n,i,r)=>{const u=t(i);return u in e?n:(e[u]=!0,[...n,i])}),[])}function f(n=null){const t=l(n);return this.reduce(((n,e,i)=>0===i?[this[0]]:t(e)===t(this[i-1])?n:[...n,e]),[])}function d(n,t=!0){if(0===this.length)return[];const e=this.findIndex((t=>"function"==typeof n?n(t):t===n));return-1===e?this:this.slice(0,e+(t?1:0))}function a(n,t,e,i=!0){const r=[];let u=e;for(let e in this){const l=this[e];if(u=t(u,l,e),n(u,l,+e)){i&&r.push(l);break}r.push(l)}return r}function b(n,t=!0){if(0===this.length)return[];const e=this.findIndex((t=>"function"==typeof n?n(t):t===n));return-1===e?[]:this.slice(e+(t?0:1))}function g(n,t,e,i=!0){const r=[];let u=e;for(let e in this){const l=this[e];if(u=t(u,l,e),n(u,l,+e)){i||r.push(l);break}r.push(l)}return this.slice(r.length)}function p(n){let t=null;function e(t){return"function"==typeof n?n(t):t===n}for(let n in this)if(e(this[n])){t=[+n,this[n]];break}return t}function y(n){let t=[];return this.forEach(((e,i)=>{(function(t){return"function"==typeof n?n(t):t===n})(e)&&t.push([i,e])})),t}function m(n=null){l(n);const t=this.x.findMinIndex(n);return-1===t?null:[t,this[t]]}function x(n=null){l(n);const t=this.x.findMaxIndex(n);return-1===t?null:[t,this[t]]}function A(n=null){const t=l(n);return 0===this.length?null:1===this.length?t(this[0]):this.reduce(((n,e,i)=>{const r=1===i?t(n):n;return Math.min(t(e),r)}))}function v(n=null){return 0===this.length?null:n?this.reduce(((t,e)=>n(e)<n(t)?e:t)):Math.min(...this)}function M(n=null){const t=l(n);return 0===this.length?-1:1===this.length?0:u(this,((n,e,i)=>{if(1===i)return t(e)<t(n)?[e,1]:[n,0];let[r]=n;return t(e)<t(r)?[e,i]:n}),(([,n])=>n))}function E(n=null){const t=l(n);return 0===this.length?null:1===this.length?t(this[0]):this.reduce(((n,e,i)=>{const r=1===i?t(n):n;return Math.max(t(e),r)}))}function k(n=null){return 0===this.length?null:n?this.reduce(((t,e)=>n(e)>n(t)?e:t)):Math.max(...this)}function z(n=null){const t=l(n);return 0===this.length?-1:1===this.length?0:u(this,((n,e,i)=>{if(1===i)return t(e)>t(n)?[e,1]:[n,0];let[r]=n;return t(e)>t(r)?[e,i]:n}),(([,n])=>n))}function S(n){return this.reduce(((t,e)=>{return t+(i=e,("function"==typeof n?n(i):i===n)?1:0);var i}),0)}function w(...n){const t={};return this.forEach((e=>{const i=function(t){if(0===n.length)return[t];const e=[];return n.forEach((n=>{const i=n(t);null!==i&&e.push(i)})),e}(e);i.forEach((n=>{const e=t[n]||0;t[n]=e+1}))})),t}function I(n=null){const t=l(n);return 0===this.length?null:u(this.map((n=>t(n))),((n,t)=>n+t),((n,t)=>n/t.length))}function j(n=[],t=null){const e=l(t);if(0===this.length)return null;let i;Array.isArray(n)&&(i=function(n,t){if(n<=t.length)return t;const e=new Array(n).fill(1);return e.splice(0,t.length,...t),e}(this.length,n));let r=0;return u(this,((t,u,l)=>{const s=function(t,e){return Array.isArray(i)?i[e]:"function"==typeof n?n(t):void 0}(u,l);return r+=s,t+e(u)*s}),(n=>n/r),0)}function P(n=null){const t=l(n);return 0===this.length?null:u(this.map((n=>t(n))),((n,t)=>n+t))}function D(n,t=!1){if(!n||n<=0)return[];const e=this.reduce(((t,e)=>{if(t[t.length-1].length===n)return[...t,[e]];{const n=t.pop();return[...t,[...n,e]]}}),[[]]);return t&&e[e.length-1].length!==n&&e.splice(-1,1),e}function O(n=null,t=!0){return 0===this.length||null===n?[]:this.reduce(((e,i,r)=>{const u=e.pop();return n(i,r)?t?[...e,u,[i]]:[...e,[...u,i],...r===this.length-1?[]:[[]]]:[...e,[...u,i]]}),[[]])}function R(...n){let t=!1;!0===n[n.length-1]&&(t=!0,n.splice(-1,1));const e=n.filter((n=>n>0));if(!e.length)return[...this];let i=0;const r=[...this],u=[];for(;r.length>0;){const n=e[i];u.push(r.splice(0,n)),i<e.length-1?i+=1:i=0}return t&&u[u.length-1].length!==e[i]&&u.splice(-1,1),u}function U(...n){if(0===this.length||0===n.length)return[];let t=this.length;const e=n.filter((n=>!!Array.isArray(n)&&(t=Math.min(t,n.length),!0))),i=[];for(let n=0;n<t;n++){const t=e.map((t=>t[n]));i.push([this[n],...t])}return i}function q(...n){if(0===n.length)return null;let t=this.length>0,e=this.length;const i=n.filter((n=>!!Array.isArray(n)&&(e=Math.max(e,n.length),t=t||n.length>0,!0)));if(!t)return[];const r=[];for(let n=0;n<e;n++){const t=i.map((t=>t[n]));r.push([this[n],...t])}return r}function B(){if(0===this.length)return[];let n;return this.filter((t=>!!Array.isArray(t)&&(n=void 0===n?t.length:Math.min(n,t.length),!0))).reduce(((t,e)=>{for(let i=0;i<n;i++)Array.isArray(t[i])||(t[i]=[]),t[i].push(e[i]);return t}),[])}function C(){if(0===this.length)return[];let n;return this.filter((t=>!!Array.isArray(t)&&(n=void 0===n?t.length:Math.max(n,t.length),!0))).reduce(((t,e)=>{for(let i=0;i<n;i++)Array.isArray(t[i])||(t[i]=[]),t[i].push(e[i]);return t}),[])}function N(n=null){if(null===n)return[...this];let t=0,e=!1;const i=this.reduce(((i,r,u)=>{const l=function(e,i){let r;return r="function"==typeof n?n(e,i):Array.isArray(n)?n.includes(e):e===n,r&&(t+=1),r}(r,u);if(l)return e=!0,i;{let n;if(e)n=[...i,[r]];else{const t=i.slice(0,-1),[e]=i.slice(-1);n=[...t,(e||[]).concat(r)]}return e=!1,n}}),[]);return 0===t?i[0]:i}function T(n,t,e=null,i=!1){const r=[...this];if(n<0&&(n=0),t<0&&(t=0),0===n||0===n&&0===t)return r;null!==e&&r.splice(0,e);const u=[];let l=!0;for(;r.length>0;)l?u.push(r.splice(0,n)):r.splice(0,t),l=!l;return i&&u[u.length-1].length!==n&&u.splice(-1,1),u}function _(n=null){const t=null===n?Math.floor(this.length/2):n;return[this.slice(0,t),this.slice(t)]}function F(...n){if(!n.length)return[...this];const t=n.filter((n=>Math.abs(n)<this.length)).map((n=>n<0?this.length+n:n));t.sort(),0===t[0]&&t.shift();const e=[...new Set(t)];if(t.splice(0,t.length,...e),!t.length)return[...this];const i=[];let r=0;return t.forEach((n=>{i.push(this.slice(r,n)),r=n})),r<this.length&&i.push(this.slice(r)),i}function G(n,...t){const[e,i]=this.x.cut(n);return[...e,...t,...i]}function H(n,...t){const e=[...this];return e.splice(n,t.length,...t),e}function J(n,...t){if(0===this.length)return[];const e=[...this],i=n>=0?this.length-n:-1*n;return e.splice(n,t.length,...t.slice(0,i)),e}function K(n,t,e){const i=[...this],r=i.splice(n,t);return i.splice((n=>n>=0?n:this.length+n)(e),0,...r),i}function L(){return Math.random(),this.map((n=>({val:n,rand:Math.random()}))).sort(((n,t)=>n.rand-t.rand)).map((({val:n})=>n))}function Q(n=1){if(n<1)return;const t=this.x.shuffle();return 1===n?t[0]:t.slice(0,n)}function V(n){const t=[...this];return n(t)||t}function W(n,t){return this.length>0&&this.forEach(((n,t)=>{this[t]=e(n)})),new Proxy(this,{set:(n,t,i)=>Reflect.set(n,t,t==+t?e(i):i)});function e(e){return Math.min(Math.max(e,n),t)}}function X(n=(n=>n)){const t=[...this];return Object.defineProperty(t,"x",{value:{unfold:n=>t[n]}}),Object.defineProperty(t,"unshift",{value:(...n)=>{const e=[...n].reverse();t.reverse(),t.push(...e),t.reverse()}}),new Proxy(t,{get(t,e){if("symbol"==typeof e)return Reflect.get(t,e);if(+e==e){const i=t[e];return i?n(i):i}return Reflect.get(t,e)}})}function Y(){return this[Symbol.iterator]()}function Z(){return[...this].reverse()[Symbol.iterator]()}function $(n,t,e=0){if(0===this.length)return[][Symbol.iterator]();if(1===this.length)return this[Symbol.iterator]();e>=this.length&&(e=this.length-1);const i=[this[e]];let r;for(;r=u.call(this);)i.push(r);return i[Symbol.iterator]();function u(){const e=i[i.length-1];if(e&&void 0!==e[t])return this.find((i=>i[n]===e[t]))}}function nn(){const n=[...this],t=n.length-1;let e=0;return{next(){e+=e<t?1:-e},get current(){return n[e]}}}function tn(n=!1){const t=[...this],e=t.length-1;let i=0,r=1,u=!1;return{next(){n?(i+=r,(i<0||i>e)&&(i-=r,r*=-1)):(!u||i!==e&&0!==i||(r*=-1),i+=r,u=!0)},get current(){return t[i]}}}function en(){return Object.freeze(this)}function rn(){return Object.seal(this)}function un(){return Object.preventExtensions(this)}function ln(){return[...this]}function sn(){return[...this].reverse()}function on(n){const t=Symbol("forEach: break"),e={break:t,continue:Symbol("forEach: continue")};for(let i=0;i<this.length;i++){if(n(this[i],i,e,this)===t)break}}function hn(n,t=null,e){const i=[(e,i,r,u)=>{let l=n(e,i,r,u);return r===this.length-1&&"function"==typeof t&&(l=t(l,this)),l}];return void 0!==e&&i.push(e),this.reduce(...i)}function cn(n){return this.reduce(((t,e,i)=>{let r=n(e,i);try{return[...t,...r]}catch(n){return[...t,r]}}),[])}function fn(n=null,t=null){return null===n&&(n=n=>n),null===t&&(t=()=>!0),this.filter(((e,i)=>t(n(e),i)))}function dn(n,t){if(!(n<=0))for(let e=0,i=1;e<this.length;e+=n)t(this.slice(e,e+n),i++,this)}function an(n,t,e=!1){if(!(n<=0))for(let i=0;i<this.length;i++){const r=this.slice(i,i+n);if(e&&r.length<n)break;t(r,i,this)}}function bn(n=1,t=0,e){const i=this.slice(t,e),r=[];n<=0&&(n=1);for(let t=0;t<i.length;t+=n)r.push(i[t]);return r}function gn(n=0,t=-1,e=1){const i=[];n<0&&(n=this.length+n),t<0&&(t=this.length+t),e<=0&&(e=1);for(let r=n;r<=t;r+=e)if(!(r<0)){if(r>=this.length)break;i.push(this[r])}return i}function pn(){return this.reduce(((n,t)=>[...n,t]),[])}function yn(n=1){n<0&&(n=0);const t=[];for(let e=0;e<this.length;e++)t[0===e?0:e+e*n]=this[e];return t}function mn(n=[]){return[...new Set([...this,...n])]}function xn(n=[]){const t=this.filter((t=>n.includes(t)));return[...new Set(t)]}function An(n=[]){const t=this.filter((t=>!n.includes(t)));return[...new Set(t)]}function vn(n=[]){return[...this.x.diff(n),...n.x.diff(this)]}function Mn(n=[]){return n.x.diff(this)}function En(n=null){return h.local(this,n)}function kn(n=null){return o.local(this,n)}function zn(n=null){return h.global(this,n)}function Sn(n=null){return o.global(this,n)}function wn(n=null){return h.globalAhead(this,n)}function In(n=null){return o.globalAhead(this,n)}Object.defineProperty(Array.prototype,"x",{get(){const u=this,l={frozen:en.bind(u),forEach:on.bind(u)};return{group:n.bind(u),index:t.bind(u),join1to1:e.bind(u),joinManyTo1:i.bind(u),join1ToMany:r.bind(u),uniq:c.bind(u),uniqSeq:f.bind(u),collectUntil:d.bind(u),collectUntilReduce:a.bind(u),skipUntil:b.bind(u),skipUntilReduce:g.bind(u),localize:p.bind(u),localizeAll:y.bind(u),localizeMin:m.bind(u),localizeMax:x.bind(u),min:A.bind(u),findMin:v.bind(u),findMinIndex:M.bind(u),max:E.bind(u),findMax:k.bind(u),findMaxIndex:z.bind(u),count:S.bind(u),countAll:w.bind(u),avg:I.bind(u),wavg:j.bind(u),sum:P.bind(u),chunk:D.bind(u),chunkByCallback:O.bind(u),chunkByPattern:R.bind(u),zip:U.bind(u),zipAll:q.bind(u),unzip:B.bind(u),unzipAll:C.bind(u),split:N.bind(u),splitByPattern:T.bind(u),cut:_.bind(u),chop:F.bind(u),insert:G.bind(u),overwrite:H.bind(u),override:J.bind(u),move:K.bind(u),shuffle:L.bind(u),random:Q.bind(u),wrapAlter:V.bind(u),clamped:W.bind(u),fold:X.bind(u),iterator:Y.bind(u),revIterator:Z.bind(u),refIterator:$.bind(u),cyclicIterator:nn.bind(u),echoIterator:tn.bind(u),frozen:l.frozen,readonly:l.frozen,readOnly:l.frozen,fixed:rn.bind(u),dwarf:un.bind(u),alterable:ln.bind(u),reversed:sn.bind(u),forEach:l.forEach,each:l.forEach,reduce:hn.bind(u),spreadMap:cn.bind(u),filterMapped:fn.bind(u),forEveryChunk:dn.bind(u),forEveryN:an.bind(u),everyNth:bn.bind(u),select:gn.bind(u),thick:pn.bind(u),sparse:yn.bind(u),union:mn.bind(u),intersection:xn.bind(u),diff:An.bind(u),symDiff:vn.bind(u),complement:Mn.bind(u),minPairDiff:En.bind(u),maxPairDiff:kn.bind(u),minDiff:zn.bind(u),maxDiff:Sn.bind(u),minDiffAhead:wn.bind(u),maxDiffAhead:In.bind(u)}}})})();