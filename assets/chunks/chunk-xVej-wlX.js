const d="modulepreload",m=function(l){return"/capsize/"+l},c={},E=function(u,i,f){let a=Promise.resolve();if(i&&i.length>0){const n=document.getElementsByTagName("link");a=Promise.all(i.map(e=>{if(e=m(e),e in c)return;c[e]=!0;const r=e.endsWith(".css"),h=r?'[rel="stylesheet"]':"";if(!!f)for(let s=n.length-1;s>=0;s--){const o=n[s];if(o.href===e&&(!r||o.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${h}`))return;const t=document.createElement("link");if(t.rel=r?"stylesheet":d,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r)return new Promise((s,o)=>{t.addEventListener("load",s),t.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${e}`)))})}))}return a.then(()=>u()).catch(n=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=n,window.dispatchEvent(e),!e.defaultPrevented)throw n})};export{E as _};
