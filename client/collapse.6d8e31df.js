import{c as s,d as t,b as o,o as a,i as n,B as r,l as c,y as e,w as i,C as l,j as $,e as f,g as p,h as m,k as d,a as u,f as h,m as g}from"./chunk.0fbbf14e.js";import{m as v}from"./chunk.24d5f538.js";import"./chunk.2412ccf0.js";import{a as j}from"./chunk.890edef0.js";import"./chunk.bdabfdac.js";import{a as b}from"./chunk.729e3e71.js";import{a as k}from"./chunk.e7370317.js";function w(s){var t,o;return{c(){t=f("button"),o=h("Click Me!"),this.h()},l(s){t=p(s,"BUTTON",{class:!0,slot:!0},!1);var a=m(t);o=n(a,"Click Me!"),a.forEach($),this.h()},h(){d(t,"class","button is-primary"),d(t,"slot","trigger")},m(s,a){c(s,t,a),g(t,o)},d(s){s&&$(t)}}}function C(s){var t,o,r,e,i,l,v,j;return{c(){t=a(),o=f("div"),r=f("div"),e=f("h3"),i=h("Subtitle"),l=a(),v=f("p"),j=h("Lorem ipsum dolor..."),this.h()},l(s){t=n(s,"\n      "),o=p(s,"DIV",{class:!0},!1);var a=m(o);r=p(a,"DIV",{class:!0},!1);var c=m(r);e=p(c,"H3",{},!1);var f=m(e);i=n(f,"Subtitle"),f.forEach($),l=n(c,"\n          "),v=p(c,"P",{},!1);var d=m(v);j=n(d,"Lorem ipsum dolor..."),d.forEach($),c.forEach($),a.forEach($),this.h()},h(){d(r,"class","content"),d(o,"class","notification")},m(s,a){c(s,t,a),c(s,o,a),g(o,r),g(r,e),g(e,i),g(r,l),g(r,v),g(v,j)},p:u,d(s){s&&($(t),$(o))}}}function x(s){var t,o,a=new v({props:{$$slots:{default:[C],trigger:[w]},$$scope:{ctx:s}}});return{c(){t=f("div"),a.$$.fragment.c(),this.h()},l(s){t=p(s,"DIV",{slot:!0},!1);var o=m(t);a.$$.fragment.l(o),o.forEach($),this.h()},h(){d(t,"slot","preview")},m(s,n){c(s,t,n),r(a,t,null),o=!0},p(s,t){var o={};s.$$scope&&(o.$$scope={changed:s,ctx:t}),a.$set(o)},i(s){o||(e(a.$$.fragment,s),o=!0)},o(s){i(a.$$.fragment,s),o=!1},d(s){s&&$(t),l(a)}}}function E(s){return{c:u,l:u,m:u,p:u,i:u,o:u,d:u}}function y(s){var t,o,f,p=new j({props:{title:"Collapse",subtitle:"可折叠元素"}}),m=new b({props:{code:'<script>\n  import { Collapse } from \'svelma-pro\'\n<\/script>\n\n<Collapse>\n  <button class="button is-primary" slot="trigger">\n    Click Me!\n  </button>\n  <div class="notification">\n    <div class="content">\n      <h3>Subtitle</h3>\n      <p>Lorem ipsum dolor...</p>\n    </div>\n  </div>\n</Collapse>',$$slots:{default:[E],preview:[x]},$$scope:{ctx:s}}}),d=new k({props:{jsdoc:s.jsdoc}});return{c(){p.$$.fragment.c(),t=a(),m.$$.fragment.c(),o=a(),d.$$.fragment.c()},l(s){p.$$.fragment.l(s),t=n(s,"\n\n"),m.$$.fragment.l(s),o=n(s,"\n\n"),d.$$.fragment.l(s)},m(s,a){r(p,s,a),c(s,t,a),r(m,s,a),c(s,o,a),r(d,s,a),f=!0},p(s,t){var o={};s.$$scope&&(o.$$scope={changed:s,ctx:t}),m.$set(o);var a={};s.jsdoc&&(a.jsdoc=t.jsdoc),d.$set(a)},i(s){f||(e(p.$$.fragment,s),e(m.$$.fragment,s),e(d.$$.fragment,s),f=!0)},o(s){i(p.$$.fragment,s),i(m.$$.fragment,s),i(d.$$.fragment,s),f=!1},d(s){l(p,s),s&&$(t),l(m,s),s&&$(o),l(d,s)}}}async function D(){const s=await this.fetch("components/collapse.json");return{jsdoc:await s.json()}}function I(s,t,o){let{jsdoc:a}=t;return s.$set=(s=>{"jsdoc"in s&&o("jsdoc",a=s.jsdoc)}),{jsdoc:a}}export default class extends s{constructor(s){super(),t(this,s,I,y,o,["jsdoc"])}}export{D as preload};
//# sourceMappingURL=collapse.6d8e31df.js.map
