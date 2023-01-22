import{_ as c,a as A}from"./dynamic-import-helper-e113e409.js";(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))h(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&h(d)}).observe(document,{childList:!0,subtree:!0});function m(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function h(e){if(e.ep)return;e.ep=!0;const r=m(e);fetch(e.href,r)}})();const u={lang:void 0,assets:{},components:{}};async function T(i){return(await A(Object.assign({"./config/preset-0.ts":()=>c(()=>import("./preset-0-9cb6c92a.js"),[])}),`./config/preset-${i}.ts`)).default}function P(i,p){if(i==="lang")u.lang=p;else if(i==="assets"){const m={...u.assets};m[p]=!0,u.assets={...m}}else if(i==="components"){const m={...u.components};m[p]=!0,u.components={...m}}return u}async function j(i){i===void 0&&(i=await T("0"));const p=(await c(()=>import("./index-0b306afc.js"),[])).default,m=(await c(()=>import("./index-c6072d23.js"),[])).default,{importAssets:h,getAssets:e}=await c(()=>import("./core.assets-c33bea62.js"),[]);let r;{const{initView:o,mountSplash:a,setView:s,definition:l,injected:f}=await c(()=>import("./core.view-a874b342.js").then(_=>_.i),["assets/core.view-a874b342.js","assets/index-0b306afc.js","assets/index-a8cb8f58.css"]);await h(Object.entries(m).filter(([_])=>l.assets.includes(_)).map(([_,E])=>({identifier:_,manifest:E})),()=>{}),f.assets=e(l.assets),await o(),await a(),r=Date.now(),await s("main")}{const{updateSplash:o}=await c(()=>import("./core.view-a874b342.js").then(t=>t.i),["assets/core.view-a874b342.js","assets/index-0b306afc.js","assets/index-a8cb8f58.css"]),a=t=>{const n=1+Object.keys(t.assets).length+Object.keys(t.components).length,L=(t.lang!==void 0?1:0)+Object.values(t.assets).filter(D=>D).length+Object.values(t.components).filter(D=>D).length;o(L/n*100)},s=i.env.lang,l=i.components.map(({id:t})=>t),f=(()=>{try{return Object.entries(p).map(([t,{definition:{assets:n}}])=>n).reduce((t,n)=>[...new Set([...t,...n])])}catch{return[]}})();u.assets=Object.fromEntries(f.map(t=>[t,!1])),u.components=Object.fromEntries(l.map(t=>[t,!1]));const{importStrings:_}=await c(()=>import("./core.i18n-6f1eaac8.js"),["assets/core.i18n-6f1eaac8.js","assets/dynamic-import-helper-e113e409.js"]),{importComponent:E}=await c(()=>import("./core.config-9bb491de.js"),["assets/core.config-9bb491de.js","assets/dynamic-import-helper-e113e409.js","assets/index-ff3587a5.js"]),{importAsset:g}=await c(()=>import("./core.assets-c33bea62.js"),[]);await Promise.all([_(s).then(()=>a(P("lang",s))),...l.map(t=>new Promise(n=>{E(t,p[t].path).then(()=>{a(P("components",t)),n()})})),...f.map(t=>new Promise(n=>{g(t,m[t]).then(()=>{a(P("assets",t)),n()})}))])}const{getComponent:d}=await c(()=>import("./core.config-9bb491de.js"),["assets/core.config-9bb491de.js","assets/dynamic-import-helper-e113e409.js","assets/index-ff3587a5.js"]),y=i.components.map(({id:o})=>o),v=Object.fromEntries(y.map(o=>[o,d(o)])),w=y.map(o=>[o,p[o].definition]);{const{getStrings:o}=await c(()=>import("./core.i18n-6f1eaac8.js"),["assets/core.i18n-6f1eaac8.js","assets/dynamic-import-helper-e113e409.js"]);w.forEach(([a,{strings:s}])=>v[a].injected.i18n=Object.keys(s).length!==0?o(Object.keys(s)):void 0),w.forEach(([a,{assets:s}])=>v[a].injected.assets=s!==void 0?e(s):void 0),w.forEach(([a])=>{var s;return v[a].injected.flags=(s=i.components.find(({id:l})=>l===a))==null?void 0:s.flags})}let O;{const{mountComponents:o,setupComponents:a,registerElements:s,serializeComponentDependencies:l}=await c(()=>import("./core.config-9bb491de.js"),["assets/core.config-9bb491de.js","assets/dynamic-import-helper-e113e409.js","assets/index-ff3587a5.js"]);O=l(w.map(([t,{dependencies:n}])=>[t,[...new Set([...n.optional,...n.required])]]).map(([t,n])=>({id:t,dependencies:n}))),s(O.map(t=>{var n;return{id:t,filter:(n=i.components.find(({id:L})=>L===t))==null?void 0:n.elements}})),await o(O),await a(O);const{unmountSplash:f}=await c(()=>import("./core.view-a874b342.js").then(t=>t.i),["assets/core.view-a874b342.js","assets/index-0b306afc.js","assets/index-a8cb8f58.css"]),E=Date.now()-r,g=Math.max("1000"-E,0);setTimeout(()=>f(),g)}{const{loadServiceWorker:o}=await c(()=>import("./misc-ecacff45.js"),["assets/misc-ecacff45.js","assets/dynamic-import-helper-e113e409.js"]);o()}}(async function(){{await j();return}})();
//# sourceMappingURL=index-2a917590.js.map
