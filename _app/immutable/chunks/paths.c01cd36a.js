import{A as c,s as p}from"./scheduler.c7d374df.js";const e=[];function q(i,a=c){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const b=!e.length;for(const s of n)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(i))}function _(t,b=c){const s=[t,b];return n.add(s),n.size===1&&(o=a(r,u)||c),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:u,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_n8wqu1)==null?void 0:f.base)??"/rizki-svelte-portfolio";var l;const d=((l=globalThis.__sveltekit_n8wqu1)==null?void 0:l.assets)??h;export{d as a,h as b,q as w};
