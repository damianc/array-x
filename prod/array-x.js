(()=>{"use strict";function t(...t){const n={};return this.forEach((e=>{const i=function(n){const e=[];return t.forEach((t=>{const i=t(n);null!==i&&e.push(i)})),e}(e);i.forEach((t=>{t in n||(n[t]=[]),n[t].push(e)}))})),n}function n(t,n=null,e="__unindexed"){return 0===this.length?{}:this.reduce(((i,r,u)=>{let l=function(n,e){let i;try{i="function"==typeof t?t(n,e):n[t]}catch(t){}return i}(r,u);return void 0===l&&(l=e),l in i||(i[l]=[]),i[l].push(function(t,e){return"function"==typeof n?n(t,e):"string"==typeof n?t[n]:t}(r,u)),i}),{})}function e(t=null,n=null,e=null){return null===t?null:this.reduce(((i,r)=>{let u=r[t];"function"==typeof e&&(u=e(u));const l={...i};let s;if(u in l||(l[u]=[]),"function"==typeof n)s=n(r);else if("string"==typeof n||"number"==typeof n)s=r[n];else if(Array.isArray(r)){const n=[...r];n.splice(+t,1),s=n}else{const{[t]:n,...e}=r;s=e}return l[u].push(s),l}),{})}function i(t,n,e,i,r=null){const u=t.x.index(e,r);return this.map((t=>{const e=t[n];let r;return u[e]&&(r=u[e][0]),{...t,[i]:r}}))}function r(t,n,e,i,r=null){const u=t.x.index(e,r);return this.map((t=>{let e=[];return t[n]&&t[n].length>0&&(e=t[n].map((t=>u[t]&&u[t][0])),e=e.filter((t=>void 0!==t))),{...t,[i]:e}}))}function u(t,n,e,i,r=null){const u=t.x.index(e,r);return this.map((t=>{let e,r=[];return(e=t[n])&&u[e]&&(r=u[e]),{...t,[i]:r}}))}function l(t,n){const e=(""+n).split(/(?:\.|\[(\d+)\])/).filter(Boolean);let i=t;for(let t of e){const n=i[t];if(i=n,void 0===n)break}return i}function s(t,n,e=null,i){const r=[(t,i,r,u)=>{let l=n(t,i,r,u);return e&&r===u.length-1&&(l=e(l,u)),l}];return void 0!==i&&r.push(i),t.reduce(...r)}function o(t){return n=>t&&"function"==typeof t?t(n):n}const h=function(t){return{local(n,e=null){if(n.length<2)return;null===e&&(e=(t,n)=>Math.abs(t-n));let i=e(n[0],n[1]);return n.slice(0,-1).reduce(((i,r,u)=>{if(!u)return i;const l=e(r,n[u+1]);return t(l,i)?l:i}),i)},global(n,e=null){if(n.length<2)return;null===e&&(e=(t,n)=>Math.abs(t-n));let i=e(n[0],n[1]);for(let r in n)for(let u in n){if(r===u)continue;const l=e(n[r],n[u]);t(l,i)&&(i=l)}return i},globalAhead(n,e=null){if(n.length<2)return;null===e&&(e=(t,n)=>Math.abs(t-n));let i=e(n[0],n[1]);for(let r in n)for(let u=+r+1;u<n.length;u++){const l=e(n[r],n[u]);t(l,i)&&(i=l)}return i}}},c=h(((t,n)=>t>n)),f=h(((t,n)=>t<n));function a(t=null){const n=o(t),e={};return this.reduce(((t,i,r)=>{const u=n(i);return u in e?t:(e[u]=!0,[...t,i])}),[])}function d(t=null){const n=o(t);return this.reduce(((t,e,i)=>0===i?[this[0]]:n(e)===n(this[i-1])?t:[...t,e]),[])}function p(){const t={onPush:[],onPop:[]};function n(t){if(!["push","pop"].includes(t))throw new Error("Unsupported type of observable array operation: "+t);return"on"+t[0].toUpperCase()+t.slice(1)}const e={push(...n){const e=Array.prototype.push.call(this,...n);return t.onPush.forEach((t=>t(this,n,e))),e},pop(){const n=Array.prototype.pop.call(this);return t.onPop.forEach((t=>t(this,n))),n},on(e,i){const r=n(e),u=t[r];if("function"!=typeof i)throw new Error("Listener of observable array must be a function, "+typeof i+" given");u.push(i)},off(e,i){const r=n(e),u=t[r],l=u.indexOf(i);-1!==l&&u.splice(l,1)},cleanListeners(e){const i=n(e);t[i]=[]},cleanAllListeners(){Object.keys(t).forEach((n=>t[n]=[]))},unobserve(){Object.setPrototypeOf(this,Array.prototype)}};Object.setPrototypeOf(e,Array.prototype),Object.setPrototypeOf(this,e)}function g(t,n=!0){if(0===this.length)return[];const e=this.findIndex((n=>"function"==typeof t?t(n):n===t));return-1===e?this:this.slice(0,e+(n?1:0))}function b(t,n,e,i=!0){const r=[];let u=e;for(let e in this){const l=this[e];if(u=n(u,l,e),t(u,l,+e)){i&&r.push(l);break}r.push(l)}return r}function y(t,n=!0){if(0===this.length)return[];const e=this.findIndex((n=>"function"==typeof t?t(n):n===t));return-1===e?[]:this.slice(e+(n?0:1))}function m(t,n,e,i=!0){const r=[];let u=e;for(let e in this){const l=this[e];if(u=n(u,l,e),t(u,l,+e)){i||r.push(l);break}r.push(l)}return this.slice(r.length)}function x(t,n=!0,e=!0){if(!t||!t.length)return[];const i=[];for(let u=0;u<this.length;){const l=this.slice(u,u+t.length);if(l.length!==t.length)break;if(r(l)){if(!n)return[u,l];i.push([u,l]),u+=e?1:t.length}else u++}return i;function r(n){let e=!0;for(let i=0;i<t.length&&(e="function"==typeof t[i]?t[i](n[i],i):n[i]===t[i],!1!==e);i++);return e}}function A(t){let n=null;function e(n){return"function"==typeof t?t(n):n===t}for(let t in this)if(e(this[t])){n=[+t,this[t]];break}return n}function v(t){let n=[];return this.forEach(((e,i)=>{(function(n){return"function"==typeof t?t(n):n===t})(e)&&n.push([i,e])})),n}function k(t=null){o(t);const n=this.x.findMinIndex(t);return-1===n?null:[n,this[n]]}function O(t=null){o(t);const n=this.x.findMaxIndex(t);return-1===n?null:[n,this[n]]}function M(t=null){const n=o(t);return 0===this.length?null:1===this.length?n(this[0]):this.reduce(((t,e,i)=>{const r=1===i?n(t):t;return Math.min(n(e),r)}))}function j(t=null){return 0===this.length?null:t?this.reduce(((n,e)=>t(e)<t(n)?e:n)):Math.min(...this)}function E(t=null){const n=o(t);return 0===this.length?-1:1===this.length?0:s(this,((t,e,i)=>{if(1===i)return n(e)<n(t)?[e,1]:[t,0];let[r]=t;return n(e)<n(r)?[e,i]:t}),(([,t])=>t))}function w(t=null){const n=o(t);return 0===this.length?null:1===this.length?n(this[0]):this.reduce(((t,e,i)=>{const r=1===i?n(t):t;return Math.max(n(e),r)}))}function P(t=null){return 0===this.length?null:t?this.reduce(((n,e)=>t(e)>t(n)?e:n)):Math.max(...this)}function S(t=null){const n=o(t);return 0===this.length?-1:1===this.length?0:s(this,((t,e,i)=>{if(1===i)return n(e)>n(t)?[e,1]:[t,0];let[r]=t;return n(e)>n(r)?[e,i]:t}),(([,t])=>t))}function z(t){return this.reduce(((n,e)=>{return n+(i=e,("function"==typeof t?t(i):i===t)?1:0);var i}),0)}function I(...t){const n={};return this.forEach((e=>{const i=function(n){if(0===t.length)return[n];const e=[];return t.forEach((t=>{const i=t(n);null!==i&&e.push(i)})),e}(e);i.forEach((t=>{const e=n[t]||0;n[t]=e+1}))})),n}function R(t=null){const n=o(t);return 0===this.length?null:s(this.map((t=>n(t))),((t,n)=>t+n),((t,n)=>t/n.length))}function L(t=[],n=null){const e=o(n);if(0===this.length)return null;let i;Array.isArray(t)&&(i=function(t,n){if(t<=n.length)return n;const e=new Array(t).fill(1);return e.splice(0,n.length,...n),e}(this.length,t));let r=0;return s(this,((n,u,l)=>{const s=function(n,e){return Array.isArray(i)?i[e]:"function"==typeof t?t(n):void 0}(u,l);return r+=s,n+e(u)*s}),(t=>t/r),0)}function B(t=null){const n=o(t);return 0===this.length?null:s(this.map((t=>n(t))),((t,n)=>t+n))}function C(t,n=!1){if(!t||t<=0)return[];const e=this.reduce(((n,e)=>{if(n[n.length-1].length===t)return[...n,[e]];{const t=n.pop();return[...n,[...t,e]]}}),[[]]);return n&&e[e.length-1].length!==t&&e.splice(-1,1),e}function D(t=null,n=!0){return 0===this.length||null===t?[]:this.reduce(((e,i,r)=>{const u=e.pop();return t(i,r)?n?[...e,u,[i]]:[...e,[...u,i],...r===this.length-1?[]:[[]]]:[...e,[...u,i]]}),[[]])}function T(t,n=null,e=null){return t&&null!==e?this.reduce(((i,r,u)=>{if(!u)return[[r]];const l=[...i],s=l.pop(),o=[t];null!==n&&o.push(n);const h=s.reduce(...o);return e(h)?[...i,[r]]:[...l,[...s,r]]}),[]):[...this]}function U(...t){let n=!1;!0===t[t.length-1]&&(n=!0,t.splice(-1,1));const e=t.filter((t=>t>0));if(!e.length)return[...this];let i=0;const r=[...this],u=[];for(;r.length>0;){const t=e[i];u.push(r.splice(0,t)),i<e.length-1?i+=1:i=0}return n&&u[u.length-1].length!==e[i]&&u.splice(-1,1),u}function N(t=(t=>0)){const n=this.x.group(t);return Object.keys(n).sort(((t,n)=>t.localeCompare(n))).reduce(((t,e)=>[...t,n[e]]),[])}function J(t=(t=>0)){const n=this.x.group((n=>+t(n)));return Object.keys(n).sort(((t,n)=>t-n)).reduce(((t,e)=>[...t,n[e]]),[])}function q(...t){if(0===this.length||0===t.length)return[];let n=this.length;const e=t.filter((t=>!!Array.isArray(t)&&(n=Math.min(n,t.length),!0))),i=[];for(let t=0;t<n;t++){const n=e.map((n=>n[t]));i.push([this[t],...n])}return i}function _(...t){if(0===t.length)return null;let n=this.length>0,e=this.length;const i=t.filter((t=>!!Array.isArray(t)&&(e=Math.max(e,t.length),n=n||t.length>0,!0)));if(!n)return[];const r=[];for(let t=0;t<e;t++){const n=i.map((n=>n[t]));r.push([this[t],...n])}return r}function F(){if(0===this.length)return[];let t;return this.filter((n=>!!Array.isArray(n)&&(t=void 0===t?n.length:Math.min(t,n.length),!0))).reduce(((n,e)=>{for(let i=0;i<t;i++)Array.isArray(n[i])||(n[i]=[]),n[i].push(e[i]);return n}),[])}function G(){if(0===this.length)return[];let t;return this.filter((n=>!!Array.isArray(n)&&(t=void 0===t?n.length:Math.max(t,n.length),!0))).reduce(((n,e)=>{for(let i=0;i<t;i++)Array.isArray(n[i])||(n[i]=[]),n[i].push(e[i]);return n}),[])}function H(t=null){if(null===t)return[...this];let n=0,e=!1;const i=this.reduce(((i,r,u)=>{const l=function(e,i){let r;return r="function"==typeof t?t(e,i):Array.isArray(t)?t.includes(e):e===t,r&&(n+=1),r}(r,u);if(l)return e=!0,i;{let t;if(e)t=[...i,[r]];else{const n=i.slice(0,-1),[e]=i.slice(-1);t=[...n,(e||[]).concat(r)]}return e=!1,t}}),[]);return 0===n?i[0]:i}function K(t,n,e=null,i=!1){const r=[...this];if(t<0&&(t=0),n<0&&(n=0),0===t||0===t&&0===n)return r;null!==e&&r.splice(0,e);const u=[];let l=!0;for(;r.length>0;)l?u.push(r.splice(0,t)):r.splice(0,n),l=!l;return i&&u[u.length-1].length!==t&&u.splice(-1,1),u}function Q(t=null){const n=null===t?Math.floor(this.length/2):t;return[this.slice(0,n),this.slice(n)]}function V(...t){if(!t.length)return[...this];const n=t.filter((t=>Math.abs(t)<this.length)).map((t=>t<0?this.length+t:t));n.sort(),0===n[0]&&n.shift();const e=[...new Set(n)];if(n.splice(0,n.length,...e),!n.length)return[...this];const i=[];let r=0;return n.forEach((t=>{i.push(this.slice(r,t)),r=t})),r<this.length&&i.push(this.slice(r)),i}function W(t,...n){const[e,i]=this.x.cut(t);return[...e,...n,...i]}function X(t,...n){const e=[...this];return e.splice(t,n.length,...n),e}function Y(t=null,...n){const e=[...this];null===t&&(t=e.length);const i=e.length,r=e.splice(t,n.length);if(r.length<n.length){const t=n.length-r.length;n.splice(-t,t)}return t<0&&(t+=i),e.splice(t,0,...n),e}function Z(t,n,e){const i=[...this],r=i.splice(t,n);return i.splice((t=>t>=0?t:this.length+t)(e),0,...r),i}function $(){return Math.random(),this.map((t=>({val:t,rand:Math.random()}))).sort(((t,n)=>t.rand-n.rand)).map((({val:t})=>t))}function tt(t=1){if(t<1)return;const n=this.x.shuffle();return 1===t?n[0]:n.slice(0,t)}function nt(t){const n=[...this];return t(n)||n}function et(t=[],n=1){const e=[...this];-1===n&&(n=Math.max(e.length,t.length));let i=0;for(let r=0;r<e.length&&!(r>=t.length)&&!(e[r]!==t[r]&&(e[r]=t[r],i+=1,i>=n));r++);return e}function it(t=[],n=null,e=1,i=!1){const r=[...this];-1===e&&(e=Math.max(r.length,t.length)),null===n&&(n=(t,n)=>t!==n);let u=0,l=0;for(let s=0;s<r.length&&!(s>=t.length)&&!(r[s]!==t[s]&&(n(r[s],t[s])&&(r[s]=t[s],u+=1),l+=1,i&&l>=e||!i&&u>=e));s++);return r}function rt(t){if(0===this.length)return[];if(void 0===t)return[...this];const n=[];let e;Array.isArray(t)&&(e=t.x.cyclicIterator());for(let t=0;t<this.length-1;t++)n.push(this[t],i(this[t],this[t+1],t));return n.push(this[this.length-1]),n;function i(n,i,r){if("function"==typeof t)return t(n,i,r);if(Array.isArray(t)){const t=e.current;return e.next(),t}return t}}function ut(t=[],n=!1){function e(e,i){if("function"==typeof t)return[t(e,i)];if(Array.isArray(t)){const e=[];return n&&e.push(void 0),i in t?[t[i]]:e}return[t]}return this.reduce(((t,n,i)=>[...t,...e(n,i),n]),[])}function lt(t=[],n=!1){function e(e,i){if("function"==typeof t)return[t(e,i)];if(Array.isArray(t)){const e=[];return n&&e.push(void 0),i in t?[t[i]]:e}return[t]}return this.reduce(((t,n,i)=>[...t,n,...e(n,i)]),[])}function st(t){if(void 0!==t)return t>=0?this[t]:this[this.length+t]}function ot(t=[]){return t.map((t=>this.x.nth(t)))}function ht(){return this[this.length-1]}function ct(t=""){return this.map((n=>l(n,t)))}function ft(...t){return this.map((n=>t.map((t=>l(n,t)))))}function at(t=[],n,e=n){return[...n<=0?[]:this.slice(0,n),...e<=0?[]:t.slice(-e)]}function dt(t=[],n,e=n){return[...n<=0?[]:this.slice(0,n),...e<=0?[]:t.slice(0,e)]}function pt(t=[],n,e=n){return[...n<=0?[]:this.slice(-n),...e<=0?[]:t.slice(-e)]}function gt(t,n){return this.length>0&&this.forEach(((t,n)=>{this[n]=e(t)})),new Proxy(this,{set:(t,n,i)=>Reflect.set(t,n,n==+n?e(i):i)});function e(e){return Math.min(Math.max(e,t),n)}}function bt(t=(t=>t)){const n=[...this];return Object.defineProperty(n,"x",{value:{unfold:t=>n[t]}}),Object.defineProperty(n,"unshift",{value:(...t)=>{const e=[...t].reverse();n.reverse(),n.push(...e),n.reverse()}}),new Proxy(n,{get(n,e){if("symbol"==typeof e)return Reflect.get(n,e);if(+e==e){const i=n[e];return i?t(i):i}return Reflect.get(n,e)}})}function yt(){return this[Symbol.iterator]()}function mt(){return[...this].reverse()[Symbol.iterator]()}function xt(t,n,e=0){if(0===this.length)return[][Symbol.iterator]();if(1===this.length)return this[Symbol.iterator]();e>=this.length&&(e=this.length-1);const i=[this[e]];let r;for(;r=u.call(this);)i.push(r);return i[Symbol.iterator]();function u(){const e=i[i.length-1];if(e&&void 0!==e[n])return this.find((i=>i[t]===e[n]))}}function At(){const t=[...this],n=t.length-1;let e=0;return{next(){e+=e<n?1:-e},get current(){return t[e]}}}function vt(t=!1){const n=[...this],e=n.length-1;let i=0,r=1,u=!1;return{next(){t?(i+=r,(i<0||i>e)&&(i-=r,r*=-1)):(!u||i!==e&&0!==i||(r*=-1),i+=r,u=!0)},get current(){return n[i]}}}function kt(){return Object.freeze(this)}function Ot(){return Object.seal(this)}function Mt(){return Object.preventExtensions(this)}function jt(){return[...this]}function Et(t=-1){return function n(e=1){const i=[];for(let r=0;r<this.length;r++){const u=this[r];if(Array.isArray(u))if(-1===t||-1!==t&&e<=t){const r=[u];-1!==t&&r.push(e+1),i.push(...n.call(...r))}else i.push(u);else i.push(u)}return i}.call(this)}function wt(...t){return 0===t.length?this.sort():this.sort(((e,i)=>{let r=0;for(let u of t)if(r=n(u,e,i),0!==r)break;return r}));function n(t,n,e){if("function"==typeof t)return t(n,e);{let i=t=""+t,r=1;/^[-+]\w*/.test(t)&&(i=i.substr(1),"-"===t[0]&&(r=-1));let u=n[i],l=e[i];""===i&&(u=n,l=e);let s=u-l;return"string"!=typeof u&&"string"!=typeof l||(s=u.localeCompare(l)),s*r}}}function Pt(){return[...this].reverse()}function St(t){const n=Symbol("forEach: break"),e={break:n,continue:Symbol("forEach: continue")};for(let i=0;i<this.length;i++){if(t(this[i],i,e,this)===n)break}}function zt(t,n=null,e){const i=[(e,i,r,u)=>{let l=t(e,i,r,u);return r===this.length-1&&"function"==typeof n&&(l=n(l,this)),l}];return void 0!==e&&i.push(e),this.reduce(...i)}function It(t){return this.reduce(((n,e,i)=>{let r=t(e,i);try{return[...n,...r]}catch(t){return[...n,r]}}),[])}function Rt(t=null,n=null){return null===t&&(t=t=>t),null===n&&(n=()=>!0),this.filter(((e,i)=>n(t(e),i)))}function Lt(t=(t=>!0),n=(t=>t)){return this.map(((e,i)=>function(n,e){return"function"==typeof t?t(n,e):Array.isArray(t)?t.includes(n):n===t}(e,i)?function(t,e){return"function"==typeof n?n(t,e):n}(e,i):e))}function Bt(t=null){if(null===t)return[];const n=[];for(let r=0;r<this.length;r++)e=this[r],i=r,("function"==typeof t?t(e,i):Array.isArray(t)?t.includes(e):e===t)&&n.push(r);var e,i;return n}function Ct(t=null){return this.x.findIndexes(t).length>0}function Dt(t=2,n=null,e=null,i=!1){return null===n&&(n=(t,n)=>t+n),this.x.chunk(t,i).map(((t,i)=>{const r=[n];return null!==e&&r.push(function(t,n){return"function"==typeof e?e(t,n):e}(t,i+1)),t.reduce.call(t,...r)}))}function Tt(t=1){return this.splice(-t,t)}function Ut(t=1){return this.splice(0,t)}function Nt(t=-1){if(t<-this.length)return;const[n]=this.splice(t,1);return n}function Jt(t){const n=[];let e;e=Array.isArray(t)?n=>!t.includes(n):"function"==typeof t?(n,e)=>!t(n,e):n=>n!==t;const i=this.filter(((t,i)=>!!e(t,i)||(n.push(t),!1)));return this.splice(0,this.length,...i),n}function qt(t,n=!0){if(!t||t<=0)return[];const e=[];for(let i=0;i<this.length;i++){const r=this.slice(i,i+t);if(n&&r.length<t)break;e.push(r)}return e}function _t(t,n=null){if(!t||0===this.length)return[];const e=[],i=[t];null!==n&&i.push(n);for(let t=1;t<=this.length;t++)e.push(this.slice(0,t).reduce(...i));return e}function Ft(t,n=1){if(!t||!n||t<0||n<0)return[];const e=[];for(let i=0,r=!0;i<this.length;i+=n,r=!1){const n=this.slice(i,i+t);if(!r&&n.length<t)break;e.push(n)}return e}function Gt(t,n=2){if(this.length<n)return!1;for(let e=0;e<this.length-(n-1);e++)if(!t(...this.slice(e,e+n)))return!1;return!0}function Ht(t,n=2,e=!0){if(0===this.length||this.length<n&&e)return!1;const i=this.length%n,r=this.length-(e?i:0);for(let e=0;e<r;e+=n)if(!t(...this.slice(e,e+n)))return!1;return!0}function Kt(t,n,e=0,i=0,r=!1,u=32){const l=[...this];if(l[l.length-1]===t)return l;if(void 0===t||!n)return l;function s(){const t=e||n.length||2,r=l.slice(-t);if(r.length<t){const n=t-r.length,e=new Array(n).fill(i);r.unshift(...e)}return r}let o=0;for(;h(t,l[l.length-1]||s()[0])&&l[l.length-1]!==t&&!(++o>u);){const t=s(),e=n(...t);l.push(e)}return r||"function"!=typeof t&&l[l.length-1]===t||l.pop(),l;function h(n,e){return"function"==typeof t?t(e):e<=n}}function Qt(t,n,e=0,i=0){const r=[...this];if(r.length>=t||!t||!n)return r;for(;r.length<t;){const t=e||n.length||2,u=r.slice(-t);if(u.length<t){const n=t-u.length,e=new Array(n).fill(i);u.unshift(...e)}const l=n(...u);r.push(l)}return r}function Vt(t=null,n=null,e=null){null===t&&(t=t=>t.toString()),null===n&&(n=",");const i=Object.getPrototypeOf(this),r={toString:function(){return this.length>0?this.map(t).join(n):null===e?"":e}};return Object.setPrototypeOf(r,i),Object.setPrototypeOf(this,r),this+""}function Wt(t=null){const n=Object.getPrototypeOf(this),e={toJSON:function(){return null===t&&(t=t=>t),t(this)}};return Object.setPrototypeOf(e,n),Object.setPrototypeOf(this,e),JSON.stringify(this)}function Xt(t){const n=[],e=Array.isArray(t);let i;e&&(i=t.x.cyclicIterator());for(let t=0;t<this.length;t++)n.push(r(+t));return n;function r(n){if("function"==typeof t)return t(n);if(e){const t=i.current;return i.next(),t}return t}}function Yt(t=0,n){if(!t)return[...this];const e=this.slice(0,t);for(let n=0;n<t;n++)e[n]||e.push(i(n));return e;function i(t){return"function"==typeof n?n(t,e):n}}function Zt(t,n){if(t<=0||void 0===n||this.length>=t)return[...this];const e=t-this.length;return[...new Array(e).fill(n),...this]}function $t(t,n){if(t<=0||void 0===n||this.length>=t)return[...this];const e=t-this.length,i=new Array(e).fill(n);return[...this,...i]}function tn(t,n,e="left",i="right"){if(!t||this.length===t)return[...this];if(this.length>t)return"left"===i?this.slice(-t):this.slice(0,t);if(this.length<t){const i=t-this.length,r=new Array(i).fill(n);return"right"===e?[...this,...r]:[...r,...this]}}function nn(t){if("function"!=typeof t)return this.join(t);const n=[...this],e=n.pop();let i="";for(let e=0;e<n.length;e++){const r=t(n[e],e,i);i+=n[e]+r}return i+=e,i}function en(...t){return 0===t.length?[...this]:this.filter(((n,e)=>function(n,e){let i=!1;for(let r of t)if(i=r(n,e),!0===i)break;return i}(n,e)))}function rn(...t){return 0===t.length?[...this]:this.filter(((n,e)=>function(n,e){let i=!0;for(let r of t)if(i=r(n,e),!1===i)break;return i}(n,e)))}function un(t,n=null,e=null,i=!1){return!t||t<=0||!n?[...this]:this.x.chunk(t,i).map(((t,i)=>{const r=[n];return null!==e&&r.push("function"==typeof e?e(t,i+1):e),t.reduce(...r)}))}function ln(t,n=null,e=null,i=!1){return!t||t<=0||!n?[...this]:this.x.frame(t,i).map(((t,i)=>{const r=[n];return null!==e&&r.push("function"==typeof e?e(t,i+1):e),t.reduce(...r)}))}function sn(t,n){if(!(t<=0))for(let e=0,i=1;e<this.length;e+=t)n(this.slice(e,e+t),i++,this)}function on(t,n,e=!1){if(!(t<=0))for(let i=0;i<this.length;i++){const r=this.slice(i,i+t);if(e&&r.length<t)break;n(r,i,this)}}function hn(t=1,n=0,e){const i=this.slice(n,e),r=[];t<=0&&(t=1);for(let n=0;n<i.length;n+=t)r.push(i[n]);return r}function cn(t=0,n=-1,e=1){const i=[];t<0&&(t=this.length+t),n<0&&(n=this.length+n),e<=0&&(e=1);for(let r=t;r<=n;r+=e)if(!(r<0)){if(r>=this.length)break;i.push(this[r])}return i}function fn(){return this.reduce(((t,n)=>[...t,n]),[])}function an(t=1){t<0&&(t=0);const n=[];for(let e=0;e<this.length;e++)n[0===e?0:e+e*t]=this[e];return n}function dn(t=[]){return[...new Set([...this,...t])]}function pn(t=[]){const n=this.filter((n=>t.includes(n)));return[...new Set(n)]}function gn(t=[]){const n=this.filter((n=>!t.includes(n)));return[...new Set(n)]}function bn(t=[]){return[...this.x.diff(t),...t.x.diff(this)]}function yn(t=[]){return t.x.diff(this)}function mn(t=null){return f.local(this,t)}function xn(t=null){return c.local(this,t)}function An(t=null){return f.global(this,t)}function vn(t=null){return c.global(this,t)}function kn(t=null){return f.globalAhead(this,t)}function On(t=null){return c.globalAhead(this,t)}Object.defineProperty(Array.prototype,"x",{get(){const l=this,s={frozen:kt.bind(l),forEach:St.bind(l),padLeft:Zt.bind(l)};return{group:t.bind(l),index:n.bind(l),pivot:e.bind(l),joinOneToOne:i.bind(l),joinManyToOne:r.bind(l),joinOneToMany:u.bind(l),uniq:a.bind(l),uniqAdjacent:d.bind(l),observable:p.bind(l),takeUntil:g.bind(l),takeUntilReduce:b.bind(l),skipUntil:y.bind(l),skipUntilReduce:m.bind(l),extractSub:x.bind(l),localize:A.bind(l),localizeAll:v.bind(l),localizeMin:k.bind(l),localizeMax:O.bind(l),min:M.bind(l),findMin:j.bind(l),findMinIndex:E.bind(l),max:w.bind(l),findMax:P.bind(l),findMaxIndex:S.bind(l),count:z.bind(l),countAll:I.bind(l),avg:R.bind(l),wavg:L.bind(l),sum:B.bind(l),chunk:C.bind(l),chunkByCallback:D.bind(l),chunkByReduce:T.bind(l),chunkByPattern:U.bind(l),chunkByGroup:N.bind(l),partition:J.bind(l),zip:q.bind(l),zipAll:_.bind(l),unzip:F.bind(l),unzipAll:G.bind(l),split:H.bind(l),splitByPattern:K.bind(l),cut:Q.bind(l),chop:V.bind(l),insert:W.bind(l),overwrite:X.bind(l),override:Y.bind(l),move:Z.bind(l),shuffle:$.bind(l),random:tt.bind(l),wrapAlter:nt.bind(l),adapt:et.bind(l),adaptByCallback:it.bind(l),cork:rt.bind(l),precede:ut.bind(l),follow:lt.bind(l),nth:st.bind(l),multiple:ot.bind(l),last:ht.bind(l),pluck:ct.bind(l),pluckMultiple:ft.bind(l),glue:at.bind(l),glueHeads:dt.bind(l),glueTails:pt.bind(l),clamped:gt.bind(l),fold:bt.bind(l),iterator:yt.bind(l),revIterator:mt.bind(l),refIterator:xt.bind(l),cyclicIterator:At.bind(l),echoIterator:vt.bind(l),frozen:s.frozen,readonly:s.frozen,readOnly:s.frozen,fixed:Ot.bind(l),dwarf:Mt.bind(l),alterable:jt.bind(l),flat:Et.bind(l),sort:wt.bind(l),reversed:Pt.bind(l),forEach:s.forEach,each:s.forEach,reduce:zt.bind(l),spreadMap:It.bind(l),filterMapped:Rt.bind(l),replace:Lt.bind(l),findIndexes:Bt.bind(l),includes:Ct.bind(l),mapReduce:Dt.bind(l),pop:Tt.bind(l),shift:Ut.bind(l),pull:Nt.bind(l),remove:Jt.bind(l),frame:qt.bind(l),scan:_t.bind(l),sample:Ft.bind(l),audit:Gt.bind(l),auditChunks:Ht.bind(l),expandTo:Kt.bind(l),expandToLength:Qt.bind(l),toString:Vt.bind(l),toJSON:Wt.bind(l),fill:Xt.bind(l),generate:Yt.bind(l),pad:s.padLeft,padLeft:s.padLeft,padRight:$t.bind(l),align:tn.bind(l),join:nn.bind(l),matchSome:en.bind(l),matchEvery:rn.bind(l),chunkReduce:un.bind(l),frameReduce:ln.bind(l),forEachChunk:sn.bind(l),forEachFrame:on.bind(l),everyNth:hn.bind(l),select:cn.bind(l),thick:fn.bind(l),sparse:an.bind(l),union:dn.bind(l),intersection:pn.bind(l),diff:gn.bind(l),symDiff:bn.bind(l),complement:yn.bind(l),minPairDiff:mn.bind(l),maxPairDiff:xn.bind(l),minDiff:An.bind(l),maxDiff:vn.bind(l),minDiffAhead:kn.bind(l),maxDiffAhead:On.bind(l)}}})})();