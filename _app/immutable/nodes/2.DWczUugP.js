import{s as _,n as d,o as S}from"../chunks/scheduler.CtbWrGNo.js";import{S as $,i as q,e as v,c as A,k as x,g as D,d as H}from"../chunks/index.CW0pku6K.js";function M(u){let e;return{c(){e=v("img"),this.h()},l(t){e=A(t,"IMG",{alt:!0,class:!0}),this.h()},h(){x(e,"alt","Jayna logo"),x(e,"class","svelte-xajjwz")},m(t,i){D(t,e,i)},p:d,i:d,o:d,d(t){t&&H(e)}}}let w=.2,j=1;function W(u){let e=0,t=0,i=2,r=2,c,m,l=0,f=0,h=!1,g;const s=["jayna-red.png","jayna-blue.png","jayna-yellow.png","jayna-green.png"];return S(()=>{const a=document.querySelector("img");I();function I(){for(let o of s){const n=new Image;n.onload=()=>{f++,f===s.length&&(h=!0,a.src=s[l],F())},n.src=o}}function F(){h&&(g&&cancelAnimationFrame(g),c=a.naturalWidth*w,m=a.naturalHeight*w,a.width=c,a.height=m,p())}function p(){let o=i*j,n=r*j;(e+o>window.innerWidth-c||e+o<0)&&(i=-i,y()),(t+n>window.innerHeight-m||t+n<0)&&(r=-r,y()),e+=o,t+=n,a.style.left=`${e}px`,a.style.top=`${t}px`,g=requestAnimationFrame(p)}function y(){l=(l+1)%s.length,a.src=s[l]}}),[]}class z extends ${constructor(e){super(),q(this,e,W,M,_,{})}}export{z as component};
