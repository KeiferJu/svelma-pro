import{c as s,d as t,b as o,o as a,i as n,B as r,l as e,y as c,w as i,C as l,j as $,e as p,g as f,h as m,k as u,a as h,f as d,m as g}from"./chunk.0fbbf14e.js";import{m as v}from"./chunk.54313170.js";import"./chunk.fc46e9cb.js";import{a as j}from"./chunk.890edef0.js";import"./chunk.56a11ef2.js";import{a as b}from"./chunk.a9506246.js";import{a as k}from"./chunk.e7370317.js";function w(s){var t,o;return{c(){t=p("button"),o=d("Click Me!"),this.h()},l(s){t=f(s,"BUTTON",{class:!0,slot:!0},!1);var a=m(t);o=n(a,"Click Me!"),a.forEach($),this.h()},h(){u(t,"class","button is-primary"),u(t,"slot","trigger")},m(s,a){e(s,t,a),g(t,o)},d(s){s&&$(t)}}}function C(s){var t,o,r,c,i,l,v,j;return{c(){t=a(),o=p("div"),r=p("div"),c=p("h3"),i=d("Subtitle"),l=a(),v=p("p"),j=d("Lorem ipsum dolor..."),this.h()},l(s){t=n(s,"\n      "),o=f(s,"DIV",{class:!0},!1);var a=m(o);r=f(a,"DIV",{class:!0},!1);var e=m(r);c=f(e,"H3",{},!1);var p=m(c);i=n(p,"Subtitle"),p.forEach($),l=n(e,"\n          "),v=f(e,"P",{},!1);var u=m(v);j=n(u,"Lorem ipsum dolor..."),u.forEach($),e.forEach($),a.forEach($),this.h()},h(){u(r,"class","content"),u(o,"class","notification")},m(s,a){e(s,t,a),e(s,o,a),g(o,r),g(r,c),g(c,i),g(r,l),g(r,v),g(v,j)},p:h,d(s){s&&($(t),$(o))}}}function x(s){var t,o,a=new v({props:{$$slots:{default:[C],trigger:[w]},$$scope:{ctx:s}}});return{c(){t=p("div"),a.$$.fragment.c(),this.h()},l(s){t=f(s,"DIV",{slot:!0},!1);var o=m(t);a.$$.fragment.l(o),o.forEach($),this.h()},h(){u(t,"slot","preview")},m(s,n){e(s,t,n),r(a,t,null),o=!0},p(s,t){var o={};s.$$scope&&(o.$$scope={changed:s,ctx:t}),a.$set(o)},i(s){o||(c(a.$$.fragment,s),o=!0)},o(s){i(a.$$.fragment,s),o=!1},d(s){s&&$(t),l(a)}}}function E(s){return{c:h,l:h,m:h,p:h,i:h,o:h,d:h}}function y(s){var t,o,p,f=new j({props:{title:"Collapse",subtitle:"可折叠元素"}}),m=new b({props:{code:'<script>\n  import { Collapse } from \'svelma-pro\'\n<\/script>\n\n<Collapse>\n  <button class="button is-primary" slot="trigger">\n    Click Me!\n  </button>\n  <div class="notification">\n    <div class="content">\n      <h3>Subtitle</h3>\n      <p>Lorem ipsum dolor...</p>\n    </div>\n  </div>\n</Collapse>',$$slots:{default:[E],preview:[x]},$$scope:{ctx:s}}}),u=new k({props:{jsdoc:s.jsdoc}});return{c(){f.$$.fragment.c(),t=a(),m.$$.fragment.c(),o=a(),u.$$.fragment.c()},l(s){f.$$.fragment.l(s),t=n(s,"\n\n"),m.$$.fragment.l(s),o=n(s,"\n\n"),u.$$.fragment.l(s)},m(s,a){r(f,s,a),e(s,t,a),r(m,s,a),e(s,o,a),r(u,s,a),p=!0},p(s,t){var o={};s.$$scope&&(o.$$scope={changed:s,ctx:t}),m.$set(o);var a={};s.jsdoc&&(a.jsdoc=t.jsdoc),u.$set(a)},i(s){p||(c(f.$$.fragment,s),c(m.$$.fragment,s),c(u.$$.fragment,s),p=!0)},o(s){i(f.$$.fragment,s),i(m.$$.fragment,s),i(u.$$.fragment,s),p=!1},d(s){l(f,s),s&&$(t),l(m,s),s&&$(o),l(u,s)}}}async function D(){const s=await this.fetch("components/collapse.json");return{jsdoc:await s.json()}}function I(s,t,o){let{jsdoc:a}=t;return s.$set=(s=>{"jsdoc"in s&&o("jsdoc",a=s.jsdoc)}),{jsdoc:a}}export default class extends s{constructor(s){super(),t(this,s,I,y,o,["jsdoc"])}}export{D as preload};
//# sourceMappingURL=collapse.dca35cfd.js.map