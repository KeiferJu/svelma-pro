import{c as s,d as t,b as o,o as n,i as r,B as a,l as c,y as e,w as i,C as l,j as $,e as p,g as m,h as f,k as d,a as u,f as h,m as g}from"./chunk.0fbbf14e.js";import{m as v}from"./chunk.51d7e463.js";import"./chunk.0d91a229.js";import{a as j}from"./chunk.890edef0.js";import"./chunk.3401b2cf.js";import{a as b}from"./chunk.03d763cb.js";import{a as k}from"./chunk.e7370317.js";function w(s){var t,o;return{c(){t=p("button"),o=h("Click Me!"),this.h()},l(s){t=m(s,"BUTTON",{class:!0,slot:!0},!1);var n=f(t);o=r(n,"Click Me!"),n.forEach($),this.h()},h(){d(t,"class","button is-primary"),d(t,"slot","trigger")},m(s,n){c(s,t,n),g(t,o)},d(s){s&&$(t)}}}function C(s){var t,o,a,e,i,l,v,j;return{c(){t=n(),o=p("div"),a=p("div"),e=p("h3"),i=h("Subtitle"),l=n(),v=p("p"),j=h("Lorem ipsum dolor..."),this.h()},l(s){t=r(s,"\n      "),o=m(s,"DIV",{class:!0},!1);var n=f(o);a=m(n,"DIV",{class:!0},!1);var c=f(a);e=m(c,"H3",{},!1);var p=f(e);i=r(p,"Subtitle"),p.forEach($),l=r(c,"\n          "),v=m(c,"P",{},!1);var d=f(v);j=r(d,"Lorem ipsum dolor..."),d.forEach($),c.forEach($),n.forEach($),this.h()},h(){d(a,"class","content"),d(o,"class","notification")},m(s,n){c(s,t,n),c(s,o,n),g(o,a),g(a,e),g(e,i),g(a,l),g(a,v),g(v,j)},p:u,d(s){s&&($(t),$(o))}}}function x(s){var t,o,n=new v({props:{$$slots:{default:[C],trigger:[w]},$$scope:{ctx:s}}});return{c(){t=p("div"),n.$$.fragment.c(),this.h()},l(s){t=m(s,"DIV",{slot:!0},!1);var o=f(t);n.$$.fragment.l(o),o.forEach($),this.h()},h(){d(t,"slot","preview")},m(s,r){c(s,t,r),a(n,t,null),o=!0},p(s,t){var o={};s.$$scope&&(o.$$scope={changed:s,ctx:t}),n.$set(o)},i(s){o||(e(n.$$.fragment,s),o=!0)},o(s){i(n.$$.fragment,s),o=!1},d(s){s&&$(t),l(n)}}}function E(s){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function y(s){var t,o,p,m=new j({props:{title:"Collapse",subtitle:"可折叠元素"}}),f=new b({props:{code:'<script>\n  import { Collapse } from \'svelma-pro\'\n<\/script>\n\n<Collapse>\n  <button class="button is-primary" slot="trigger">\n    Click Me!\n  </button>\n  <div class="notification">\n    <div class="content">\n      <h3>Subtitle</h3>\n      <p>Lorem ipsum dolor...</p>\n    </div>\n  </div>\n</Collapse>',$$slots:{default:[E],preview:[x]},$$scope:{ctx:s}}}),d=new k({props:{jsdoc:s.jsdoc}});return{c(){m.$$.fragment.c(),t=n(),f.$$.fragment.c(),o=n(),d.$$.fragment.c()},l(s){m.$$.fragment.l(s),t=r(s,"\n\n"),f.$$.fragment.l(s),o=r(s,"\n\n"),d.$$.fragment.l(s)},m(s,n){a(m,s,n),c(s,t,n),a(f,s,n),c(s,o,n),a(d,s,n),p=!0},p(s,t){var o={};s.$$scope&&(o.$$scope={changed:s,ctx:t}),f.$set(o);var n={};s.jsdoc&&(n.jsdoc=t.jsdoc),d.$set(n)},i(s){p||(e(m.$$.fragment,s),e(f.$$.fragment,s),e(d.$$.fragment,s),p=!0)},o(s){i(m.$$.fragment,s),i(f.$$.fragment,s),i(d.$$.fragment,s),p=!1},d(s){l(m,s),s&&$(t),l(f,s),s&&$(o),l(d,s)}}}async function D(){const s=await this.fetch("components/collapse.json");return{jsdoc:await s.json()}}function I(s,t,o){let{jsdoc:n}=t;return s.$set=(s=>{"jsdoc"in s&&o("jsdoc",n=s.jsdoc)}),{jsdoc:n}}export default class extends s{constructor(s){super(),t(this,s,I,y,o,["jsdoc"])}}export{D as preload};
//# sourceMappingURL=collapse.81e617c4.js.map
