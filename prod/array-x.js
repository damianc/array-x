(()=>{"use strict";function n(...n){const t={};return this.forEach((e=>{const i=function(t){const e=[];return n.forEach((n=>{const i=n(t);null!==i&&e.push(i)})),e}(e);i.forEach((n=>{n in t||(t[n]=[]),t[n].push(e)}))})),t}function t(n,t=null,e="__unindexed"){return 0===this.length?{}:this.reduce(((i,r,u)=>{let l=function(t,e){let i;try{i="function"==typeof n?n(t,e):t[n]}catch(n){}return i}(r,u);return void 0===l&&(l=e),l in i||(i[l]=[]),i[l].push(function(n,e){return"function"==typeof t?t(n,e):"string"==typeof t?n[t]:n}(r,u)),i}),{})}function e(n,t,e,i,r=null){const u=n.x.index(e,r);return this.map((n=>{const e=n[t];let r;return u[e]&&(r=u[e][0]),{...n,[i]:r}}))}function i(n,t,e,i,r=null){const u=n.x.index(e,r);return this.map((n=>{let e=[];return n[t]&&n[t].length>0&&(e=n[t].map((n=>u[n]&&u[n][0])),e=e.filter((n=>void 0!==n))),{...n,[i]:e}}))}function r(n,t,e,i,r=null){const u=n.x.index(e,r);return this.map((n=>{let e,r=[];return(e=n[t])&&u[e]&&(r=u[e]),{...n,[i]:r}}))}function u(n,t){const e=(""+t).split(/(?:\.|\[(\d+)\])/).filter(Boolean);let i=n;for(let n of e){const t=i[n];if(i=t,void 0===t)break}return i}function l(n,t,e=null,i){const r=[(n,i,r,u)=>{let l=t(n,i,r,u);return e&&r===u.length-1&&(l=e(l,u)),l}];return void 0!==i&&r.push(i),n.reduce(...r)}function s(n){return t=>n&&"function"==typeof n?n(t):t}const o=function(n){return{local(t,e=null){if(t.length<2)return;null===e&&(e=(n,t)=>Math.abs(n-t));let i=e(t[0],t[1]);return t.slice(0,-1).reduce(((i,r,u)=>{if(!u)return i;const l=e(r,t[u+1]);return n(l,i)?l:i}),i)},global(t,e=null){if(t.length<2)return;null===e&&(e=(n,t)=>Math.abs(n-t));let i=e(t[0],t[1]);for(let r in t)for(let u in t){if(r===u)continue;const l=e(t[r],t[u]);n(l,i)&&(i=l)}return i},globalAhead(t,e=null){if(t.length<2)return;null===e&&(e=(n,t)=>Math.abs(n-t));let i=e(t[0],t[1]);for(let r in t)for(let u=+r+1;u<t.length;u++){const l=e(t[r],t[u]);n(l,i)&&(i=l)}return i}}},c=o(((n,t)=>n>t)),h=o(((n,t)=>n<t));function f(n=null){const t=s(n),e={};return this.reduce(((n,i,r)=>{const u=t(i);return u in e?n:(e[u]=!0,[...n,i])}),[])}function d(n=null){const t=s(n);return this.reduce(((n,e,i)=>0===i?[this[0]]:t(e)===t(this[i-1])?n:[...n,e]),[])}function a(n,t=!0){if(0===this.length)return[];const e=this.findIndex((t=>"function"==typeof n?n(t):t===n));return-1===e?this:this.slice(0,e+(t?1:0))}function b(n,t,e,i=!0){const r=[];let u=e;for(let e in this){const l=this[e];if(u=t(u,l,e),n(u,l,+e)){i&&r.push(l);break}r.push(l)}return r}function g(n,t=!0){if(0===this.length)return[];const e=this.findIndex((t=>"function"==typeof n?n(t):t===n));return-1===e?[]:this.slice(e+(t?0:1))}function p(n,t,e,i=!0){const r=[];let u=e;for(let e in this){const l=this[e];if(u=t(u,l,e),n(u,l,+e)){i||r.push(l);break}r.push(l)}return this.slice(r.length)}function y(n){let t=null;function e(t){return"function"==typeof n?n(t):t===n}for(let n in this)if(e(this[n])){t=[+n,this[n]];break}return t}function m(n){let t=[];return this.forEach(((e,i)=>{(function(t){return"function"==typeof n?n(t):t===n})(e)&&t.push([i,e])})),t}function x(n=null){s(n);const t=this.x.findMinIndex(n);return-1===t?null:[t,this[t]]}function A(n=null){s(n);const t=this.x.findMaxIndex(n);return-1===t?null:[t,this[t]]}function v(n=null){const t=s(n);return 0===this.length?null:1===this.length?t(this[0]):this.reduce(((n,e,i)=>{const r=1===i?t(n):n;return Math.min(t(e),r)}))}function M(n=null){return 0===this.length?null:n?this.reduce(((t,e)=>n(e)<n(t)?e:t)):Math.min(...this)}function k(n=null){const t=s(n);return 0===this.length?-1:1===this.length?0:l(this,((n,e,i)=>{if(1===i)return t(e)<t(n)?[e,1]:[n,0];let[r]=n;return t(e)<t(r)?[e,i]:n}),(([,n])=>n))}function E(n=null){const t=s(n);return 0===this.length?null:1===this.length?t(this[0]):this.reduce(((n,e,i)=>{const r=1===i?t(n):n;return Math.max(t(e),r)}))}function z(n=null){return 0===this.length?null:n?this.reduce(((t,e)=>n(e)>n(t)?e:t)):Math.max(...this)}function w(n=null){const t=s(n);return 0===this.length?-1:1===this.length?0:l(this,((n,e,i)=>{if(1===i)return t(e)>t(n)?[e,1]:[n,0];let[r]=n;return t(e)>t(r)?[e,i]:n}),(([,n])=>n))}function I(n){return this.reduce(((t,e)=>{return t+(i=e,("function"==typeof n?n(i):i===n)?1:0);var i}),0)}function S(...n){const t={};return this.forEach((e=>{const i=function(t){if(0===n.length)return[t];const e=[];return n.forEach((n=>{const i=n(t);null!==i&&e.push(i)})),e}(e);i.forEach((n=>{const e=t[n]||0;t[n]=e+1}))})),t}function j(n=null){const t=s(n);return 0===this.length?null:l(this.map((n=>t(n))),((n,t)=>n+t),((n,t)=>n/t.length))}function P(n=[],t=null){const e=s(t);if(0===this.length)return null;let i;Array.isArray(n)&&(i=function(n,t){if(n<=t.length)return t;const e=new Array(n).fill(1);return e.splice(0,t.length,...t),e}(this.length,n));let r=0;return l(this,((t,u,l)=>{const s=function(t,e){return Array.isArray(i)?i[e]:"function"==typeof n?n(t):void 0}(u,l);return r+=s,t+e(u)*s}),(n=>n/r),0)}function D(n=null){const t=s(n);return 0===this.length?null:l(this.map((n=>t(n))),((n,t)=>n+t))}function O(n,t=!1){if(!n||n<=0)return[];const e=this.reduce(((t,e)=>{if(t[t.length-1].length===n)return[...t,[e]];{const n=t.pop();return[...t,[...n,e]]}}),[[]]);return t&&e[e.length-1].length!==n&&e.splice(-1,1),e}function R(n=null,t=!0){return 0===this.length||null===n?[]:this.reduce(((e,i,r)=>{const u=e.pop();return n(i,r)?t?[...e,u,[i]]:[...e,[...u,i],...r===this.length-1?[]:[[]]]:[...e,[...u,i]]}),[[]])}function B(...n){let t=!1;!0===n[n.length-1]&&(t=!0,n.splice(-1,1));const e=n.filter((n=>n>0));if(!e.length)return[...this];let i=0;const r=[...this],u=[];for(;r.length>0;){const n=e[i];u.push(r.splice(0,n)),i<e.length-1?i+=1:i=0}return t&&u[u.length-1].length!==e[i]&&u.splice(-1,1),u}function U(...n){if(0===this.length||0===n.length)return[];let t=this.length;const e=n.filter((n=>!!Array.isArray(n)&&(t=Math.min(t,n.length),!0))),i=[];for(let n=0;n<t;n++){const t=e.map((t=>t[n]));i.push([this[n],...t])}return i}function q(...n){if(0===n.length)return null;let t=this.length>0,e=this.length;const i=n.filter((n=>!!Array.isArray(n)&&(e=Math.max(e,n.length),t=t||n.length>0,!0)));if(!t)return[];const r=[];for(let n=0;n<e;n++){const t=i.map((t=>t[n]));r.push([this[n],...t])}return r}function C(){if(0===this.length)return[];let n;return this.filter((t=>!!Array.isArray(t)&&(n=void 0===n?t.length:Math.min(n,t.length),!0))).reduce(((t,e)=>{for(let i=0;i<n;i++)Array.isArray(t[i])||(t[i]=[]),t[i].push(e[i]);return t}),[])}function T(){if(0===this.length)return[];let n;return this.filter((t=>!!Array.isArray(t)&&(n=void 0===n?t.length:Math.max(n,t.length),!0))).reduce(((t,e)=>{for(let i=0;i<n;i++)Array.isArray(t[i])||(t[i]=[]),t[i].push(e[i]);return t}),[])}function N(n=null){if(null===n)return[...this];let t=0,e=!1;const i=this.reduce(((i,r,u)=>{const l=function(e,i){let r;return r="function"==typeof n?n(e,i):Array.isArray(n)?n.includes(e):e===n,r&&(t+=1),r}(r,u);if(l)return e=!0,i;{let n;if(e)n=[...i,[r]];else{const t=i.slice(0,-1),[e]=i.slice(-1);n=[...t,(e||[]).concat(r)]}return e=!1,n}}),[]);return 0===t?i[0]:i}function _(n,t,e=null,i=!1){const r=[...this];if(n<0&&(n=0),t<0&&(t=0),0===n||0===n&&0===t)return r;null!==e&&r.splice(0,e);const u=[];let l=!0;for(;r.length>0;)l?u.push(r.splice(0,n)):r.splice(0,t),l=!l;return i&&u[u.length-1].length!==n&&u.splice(-1,1),u}function H(n=null){const t=null===n?Math.floor(this.length/2):n;return[this.slice(0,t),this.slice(t)]}function F(...n){if(!n.length)return[...this];const t=n.filter((n=>Math.abs(n)<this.length)).map((n=>n<0?this.length+n:n));t.sort(),0===t[0]&&t.shift();const e=[...new Set(t)];if(t.splice(0,t.length,...e),!t.length)return[...this];const i=[];let r=0;return t.forEach((n=>{i.push(this.slice(r,n)),r=n})),r<this.length&&i.push(this.slice(r)),i}function G(n,...t){const[e,i]=this.x.cut(n);return[...e,...t,...i]}function J(n,...t){const e=[...this];return e.splice(n,t.length,...t),e}function K(n,...t){if(0===this.length)return[];const e=[...this],i=n>=0?this.length-n:-1*n;return e.splice(n,t.length,...t.slice(0,i)),e}function L(n,t,e){const i=[...this],r=i.splice(n,t);return i.splice((n=>n>=0?n:this.length+n)(e),0,...r),i}function Q(){return Math.random(),this.map((n=>({val:n,rand:Math.random()}))).sort(((n,t)=>n.rand-t.rand)).map((({val:n})=>n))}function V(n=1){if(n<1)return;const t=this.x.shuffle();return 1===n?t[0]:t.slice(0,n)}function W(n){const t=[...this];return n(t)||t}function X(n=[],t=1){const e=[...this];-1===t&&(t=Math.max(e.length,n.length));let i=0;for(let r=0;r<e.length&&!(r>=n.length)&&!(e[r]!==n[r]&&(e[r]=n[r],i+=1,i>=t));r++);return e}function Y(n=[],t=null,e=1,i=!1){const r=[...this];-1===e&&(e=Math.max(r.length,n.length)),null===t&&(t=(n,t)=>n!==t);let u=0,l=0;for(let s=0;s<r.length&&!(s>=n.length)&&!(r[s]!==n[s]&&(t(r[s],n[s])&&(r[s]=n[s],u+=1),l+=1,i&&l>=e||!i&&u>=e));s++);return r}function Z(n=[],t=!1){function e(e,i){if("function"==typeof n)return[n(e,i)];if(Array.isArray(n)){const e=[];return t&&e.push(void 0),i in n?[n[i]]:e}return[n]}return this.reduce(((n,t,i)=>[...n,...e(t,i),t]),[])}function $(n=[],t=!1){function e(e,i){if("function"==typeof n)return[n(e,i)];if(Array.isArray(n)){const e=[];return t&&e.push(void 0),i in n?[n[i]]:e}return[n]}return this.reduce(((n,t,i)=>[...n,t,...e(t,i)]),[])}function nn(n=""){return this.map((t=>u(t,n)))}function tn(...n){return this.map((t=>n.map((n=>u(t,n)))))}function en(n=[],t,e){return[...t<=0?[]:this.slice(0,t),...e<=0?[]:n.slice(-e)]}function rn(n=[],t,e=t){return[...t<=0?[]:this.slice(0,t),...e<=0?[]:n.slice(0,e)]}function un(n=[],t,e=t){return[...t<=0?[]:this.slice(-t),...e<=0?[]:n.slice(-e)]}function ln(n,t){return this.length>0&&this.forEach(((n,t)=>{this[t]=e(n)})),new Proxy(this,{set:(n,t,i)=>Reflect.set(n,t,t==+t?e(i):i)});function e(e){return Math.min(Math.max(e,n),t)}}function sn(n=(n=>n)){const t=[...this];return Object.defineProperty(t,"x",{value:{unfold:n=>t[n]}}),Object.defineProperty(t,"unshift",{value:(...n)=>{const e=[...n].reverse();t.reverse(),t.push(...e),t.reverse()}}),new Proxy(t,{get(t,e){if("symbol"==typeof e)return Reflect.get(t,e);if(+e==e){const i=t[e];return i?n(i):i}return Reflect.get(t,e)}})}function on(){return this[Symbol.iterator]()}function cn(){return[...this].reverse()[Symbol.iterator]()}function hn(n,t,e=0){if(0===this.length)return[][Symbol.iterator]();if(1===this.length)return this[Symbol.iterator]();e>=this.length&&(e=this.length-1);const i=[this[e]];let r;for(;r=u.call(this);)i.push(r);return i[Symbol.iterator]();function u(){const e=i[i.length-1];if(e&&void 0!==e[t])return this.find((i=>i[n]===e[t]))}}function fn(){const n=[...this],t=n.length-1;let e=0;return{next(){e+=e<t?1:-e},get current(){return n[e]}}}function dn(n=!1){const t=[...this],e=t.length-1;let i=0,r=1,u=!1;return{next(){n?(i+=r,(i<0||i>e)&&(i-=r,r*=-1)):(!u||i!==e&&0!==i||(r*=-1),i+=r,u=!0)},get current(){return t[i]}}}function an(){return Object.freeze(this)}function bn(){return Object.seal(this)}function gn(){return Object.preventExtensions(this)}function pn(){return[...this]}function yn(){return[...this].reverse()}function mn(n){const t=Symbol("forEach: break"),e={break:t,continue:Symbol("forEach: continue")};for(let i=0;i<this.length;i++){if(n(this[i],i,e,this)===t)break}}function xn(n,t=null,e){const i=[(e,i,r,u)=>{let l=n(e,i,r,u);return r===this.length-1&&"function"==typeof t&&(l=t(l,this)),l}];return void 0!==e&&i.push(e),this.reduce(...i)}function An(n){return this.reduce(((t,e,i)=>{let r=n(e,i);try{return[...t,...r]}catch(n){return[...t,r]}}),[])}function vn(n=null,t=null){return null===n&&(n=n=>n),null===t&&(t=()=>!0),this.filter(((e,i)=>t(n(e),i)))}function Mn(n=(n=>!0),t=(n=>n)){return this.map(((e,i)=>function(t,e){return"function"==typeof n?n(t,e):Array.isArray(n)?n.includes(t):t===n}(e,i)?function(n,e){return"function"==typeof t?t(n,e):t}(e,i):e))}function kn(n=null){if(null===n)return[];const t=[];for(let r=0;r<this.length;r++)e=this[r],i=r,("function"==typeof n?n(e,i):Array.isArray(n)?n.includes(e):e===n)&&t.push(r);var e,i;return t}function En(n=null){return this.x.findIndexes(n).length>0}function zn(n=2,t=null,e=null,i=!1){return null===t&&(t=(n,t)=>n+t),this.x.chunk(n,i).map(((n,i)=>{const r=[t];return null!==e&&r.push(function(n,t){return"function"==typeof e?e(n,t):e}(n,i+1)),n.reduce.call(n,...r)}))}function wn(n=1){return this.splice(-n,n)}function In(n,t){if(!(n<=0))for(let e=0,i=1;e<this.length;e+=n)t(this.slice(e,e+n),i++,this)}function Sn(n,t,e=!1){if(!(n<=0))for(let i=0;i<this.length;i++){const r=this.slice(i,i+n);if(e&&r.length<n)break;t(r,i,this)}}function jn(n=1,t=0,e){const i=this.slice(t,e),r=[];n<=0&&(n=1);for(let t=0;t<i.length;t+=n)r.push(i[t]);return r}function Pn(n=0,t=-1,e=1){const i=[];n<0&&(n=this.length+n),t<0&&(t=this.length+t),e<=0&&(e=1);for(let r=n;r<=t;r+=e)if(!(r<0)){if(r>=this.length)break;i.push(this[r])}return i}function Dn(){return this.reduce(((n,t)=>[...n,t]),[])}function On(n=1){n<0&&(n=0);const t=[];for(let e=0;e<this.length;e++)t[0===e?0:e+e*n]=this[e];return t}function Rn(n=[]){return[...new Set([...this,...n])]}function Bn(n=[]){const t=this.filter((t=>n.includes(t)));return[...new Set(t)]}function Un(n=[]){const t=this.filter((t=>!n.includes(t)));return[...new Set(t)]}function qn(n=[]){return[...this.x.diff(n),...n.x.diff(this)]}function Cn(n=[]){return n.x.diff(this)}function Tn(n=null){return h.local(this,n)}function Nn(n=null){return c.local(this,n)}function _n(n=null){return h.global(this,n)}function Hn(n=null){return c.global(this,n)}function Fn(n=null){return h.globalAhead(this,n)}function Gn(n=null){return c.globalAhead(this,n)}Object.defineProperty(Array.prototype,"x",{get(){const u=this,l={frozen:an.bind(u),forEach:mn.bind(u)};return{group:n.bind(u),index:t.bind(u),join1to1:e.bind(u),joinManyTo1:i.bind(u),join1ToMany:r.bind(u),uniq:f.bind(u),uniqSeq:d.bind(u),collectUntil:a.bind(u),collectUntilReduce:b.bind(u),skipUntil:g.bind(u),skipUntilReduce:p.bind(u),localize:y.bind(u),localizeAll:m.bind(u),localizeMin:x.bind(u),localizeMax:A.bind(u),min:v.bind(u),findMin:M.bind(u),findMinIndex:k.bind(u),max:E.bind(u),findMax:z.bind(u),findMaxIndex:w.bind(u),count:I.bind(u),countAll:S.bind(u),avg:j.bind(u),wavg:P.bind(u),sum:D.bind(u),chunk:O.bind(u),chunkByCallback:R.bind(u),chunkByPattern:B.bind(u),zip:U.bind(u),zipAll:q.bind(u),unzip:C.bind(u),unzipAll:T.bind(u),split:N.bind(u),splitByPattern:_.bind(u),cut:H.bind(u),chop:F.bind(u),insert:G.bind(u),overwrite:J.bind(u),override:K.bind(u),move:L.bind(u),shuffle:Q.bind(u),random:V.bind(u),wrapAlter:W.bind(u),adapt:X.bind(u),adaptByCallback:Y.bind(u),precede:Z.bind(u),follow:$.bind(u),pluck:nn.bind(u),pluckMultiple:tn.bind(u),glue:en.bind(u),glueHeads:rn.bind(u),glueTails:un.bind(u),clamped:ln.bind(u),fold:sn.bind(u),iterator:on.bind(u),revIterator:cn.bind(u),refIterator:hn.bind(u),cyclicIterator:fn.bind(u),echoIterator:dn.bind(u),frozen:l.frozen,readonly:l.frozen,readOnly:l.frozen,fixed:bn.bind(u),dwarf:gn.bind(u),alterable:pn.bind(u),reversed:yn.bind(u),forEach:l.forEach,each:l.forEach,reduce:xn.bind(u),spreadMap:An.bind(u),filterMapped:vn.bind(u),replace:Mn.bind(u),findIndexes:kn.bind(u),includes:En.bind(u),mapReduce:zn.bind(u),pop:wn.bind(u),forEveryChunk:In.bind(u),forEveryN:Sn.bind(u),everyNth:jn.bind(u),select:Pn.bind(u),thick:Dn.bind(u),sparse:On.bind(u),union:Rn.bind(u),intersection:Bn.bind(u),diff:Un.bind(u),symDiff:qn.bind(u),complement:Cn.bind(u),minPairDiff:Tn.bind(u),maxPairDiff:Nn.bind(u),minDiff:_n.bind(u),maxDiff:Hn.bind(u),minDiffAhead:Fn.bind(u),maxDiffAhead:Gn.bind(u)}}})})();