import{c as t,d as s,b as o,o as a,e,f as n,i,g as r,h as p,j as c,k as l,l as h,m as u,n as f,a as m}from"./chunk.0fbbf14e.js";function d(t){var s,o,d,g,b,j,v=t.post.title+"",x=t.post.html+"";return document.title=s=t.post.title,{c(){o=a(),d=e("h1"),g=n(v),b=a(),j=e("div"),this.h()},l(t){o=i(t,"\n\n"),d=r(t,"H1",{},!1);var s=p(d);g=i(s,v),s.forEach(c),b=i(t,"\n\n"),j=r(t,"DIV",{class:!0},!1),p(j).forEach(c),this.h()},h(){l(j,"class","content svelte-o0p7g2")},m(t,s){h(t,o,s),h(t,d,s),u(d,g),h(t,b,s),h(t,j,s),j.innerHTML=x},p(t,o){t.post&&s!==(s=o.post.title)&&(document.title=s),t.post&&v!==(v=o.post.title+"")&&f(g,v),t.post&&x!==(x=o.post.html+"")&&(j.innerHTML=x)},i:m,o:m,d(t){t&&(c(o),c(d),c(b),c(j))}}}async function g({params:t,query:s}){const o=await this.fetch(`blog/${t.slug}.json`),a=await o.json();if(200===o.status)return{post:a};this.error(o.status,a.message)}function b(t,s,o){let{post:a}=s;return t.$set=(t=>{"post"in t&&o("post",a=t.post)}),{post:a}}export default class extends t{constructor(t){super(),s(this,t,b,d,o,["post"])}}export{g as preload};
//# sourceMappingURL=[slug].1981a330.js.map