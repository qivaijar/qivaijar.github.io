import{A as b,s as p}from"./scheduler.42ed02a9.js";const e=[];function g(i,l=b){let o;const n=new Set;function r(t){if(p(i,t)&&(i=t,o)){const f=!e.length;for(const s of n)s[1](),e.push(s,i);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(i))}function _(t,f=b){const s=[t,f];return n.add(s),n.size===1&&(o=l(r,c)||b),t(i),()=>{n.delete(s),n.size===0&&o&&(o(),o=null)}}return{set:r,update:c,subscribe:_}}var a;const d=((a=globalThis.__sveltekit_vdt8af)==null?void 0:a.base)??"/rizki-svelte-portfolio";var u;const k=((u=globalThis.__sveltekit_vdt8af)==null?void 0:u.assets)??d;export{k as a,d as b,g as w};