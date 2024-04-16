var D=Object.defineProperty;var H=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var v=(e,t,n)=>(H(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function p(){}function B(e){return e()}function S(){return Object.create(null)}function j(e){e.forEach(B)}function C(e){return typeof e=="function"}function R(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function W(e){return Object.keys(e).length===0}function J(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function K(e){return document.createElement(e)}function F(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function U(e){return Array.from(e.childNodes)}let w;function $(e){w=e}function V(){if(!w)throw new Error("Function called outside component initialization");return w}function G(e){V().$$.on_mount.push(e)}const m=[],N=[];let _=[];const L=[],Q=Promise.resolve();let I=!1;function T(){I||(I=!0,Q.then(z))}function O(e){_.push(e)}const E=new Set;let g=0;function z(){if(g!==0)return;const e=w;do{try{for(;g<m.length;){const t=m[g];g++,$(t),X(t.$$)}}catch(t){throw m.length=0,g=0,t}for($(null),m.length=0,g=0;N.length;)N.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];E.has(n)||(E.add(n),n())}_.length=0}while(m.length);for(;L.length;)L.pop()();I=!1,E.clear(),$(e)}function X(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O)}}function Y(e){const t=[],n=[];_.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),_=t}const Z=new Set;function ee(e,t){e&&e.i&&(Z.delete(e),e.i(t))}function te(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),O(()=>{const i=e.$$.on_mount.map(B).filter(C);e.$$.on_destroy?e.$$.on_destroy.push(...i):j(i),e.$$.on_mount=[]}),r.forEach(O)}function ne(e,t){const n=e.$$;n.fragment!==null&&(Y(n.after_update),j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function re(e,t){e.$$.dirty[0]===-1&&(m.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,o,r,i,a=null,f=[-1]){const u=w;$(e);const c=e.$$={fragment:null,ctx:[],props:i,update:p,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:S(),dirty:f,skip_bound:!1,root:t.target||u.$$.root};a&&a(c.root);let d=!1;if(c.ctx=n?n(e,t.props||{},(s,l,...b)=>{const x=b.length?b[0]:l;return c.ctx&&r(c.ctx[s],c.ctx[s]=x)&&(!c.skip_bound&&c.bound[s]&&c.bound[s](x),d&&re(e,s)),l}):[],c.update(),d=!0,j(c.before_update),c.fragment=o?o(c.ctx):!1,t.target){if(t.hydrate){const s=U(t.target);c.fragment&&c.fragment.l(s),s.forEach(M)}else c.fragment&&c.fragment.c();t.intro&&ee(e.$$.fragment),te(e,t.target,t.anchor),z()}$(u)}class ie{constructor(){v(this,"$$");v(this,"$$set")}$destroy(){ne(this,1),this.$destroy=p}$on(t,n){if(!C(n))return p;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!W(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ce="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ce);function se(e){let t;return{c(){t=K("img"),F(t,"alt","Jayna logo"),F(t,"class","svelte-xajjwz")},m(n,o){J(n,t,o)},p,i:p,o:p,d(n){n&&M(t)}}}let P=.2,q=1;function le(e){let t=0,n=0,o=2,r=2,i,a,f=0,u=0,c=!1,d;const s=["jayna-red.png","jayna-blue.png","jayna-yellow.png","jayna-green.png"];return G(()=>{const l=document.querySelector("img");b();function b(){for(let y of s){const h=new Image;h.onload=()=>{u++,u===s.length&&(c=!0,l.src=s[f],x())},h.src=y}}function x(){c&&(d&&cancelAnimationFrame(d),i=l.naturalWidth*P,a=l.naturalHeight*P,l.width=i,l.height=a,k())}function k(){let y=o*q,h=r*q;(t+y>window.innerWidth-i||t+y<0)&&(o=-o,A()),(n+h>window.innerHeight-a||n+h<0)&&(r=-r,A()),t+=y,n+=h,l.style.left=`${t}px`,l.style.top=`${n}px`,d=requestAnimationFrame(k)}function A(){f=(f+1)%s.length,l.src=s[f]}}),[]}class ae extends ie{constructor(t){super(),oe(this,t,le,se,R,{})}}new ae({target:document.getElementById("app")});