import{c as a,d as t,b as c,o as s,i as e,B as n,l as o,y as r,w as i,C as $,j as l,e as m,g as f,h as p,k as d,m as u,a as g,f as v,O as h,a5 as j,a6 as k}from"./chunk.0fbbf14e.js";import{d as b,t as x}from"./chunk.99dc9135.js";import"./chunk.0a41e55b.js";import{a as w}from"./chunk.890edef0.js";import"./chunk.2749c31c.js";import{a as _}from"./chunk.301af687.js";import{a as M}from"./chunk.e7370317.js";function T(a){var t;return{c(){t=v("Toggle")},l(a){t=e(a,"Toggle")},m(a,c){o(a,t,c)},d(a){a&&l(t)}}}function y(a){var t,c;return{c(){t=m("p"),c=m("img"),this.h()},l(a){t=f(a,"P",{class:!0},!1);var s=p(t);c=f(s,"IMG",{alt:!0,src:!0},!1),p(c).forEach(l),s.forEach(l),this.h()},h(){d(c,"alt","Test image"),d(c,"src","https://via.placeholder.com/1280x920"),d(t,"class","image is-4by3")},m(a,s){o(a,t,s),u(t,c)},d(a){a&&l(t)}}}function B(a){var t,c,g,v,w=new b({props:{class:"block",$$slots:{default:[T]},$$scope:{ctx:a}}});function _(t){a.modal_active_binding.call(null,t),g=!0,k(()=>g=!1)}w.$on("click",a.click_handler);let M={$$slots:{default:[y]},$$scope:{ctx:a}};void 0!==a.active&&(M.active=a.active);var B=new x({props:M});return h.push(()=>j(B,"active",_)),{c(){t=m("div"),w.$$.fragment.c(),c=s(),B.$$.fragment.c(),this.h()},l(a){t=f(a,"DIV",{slot:!0},!1);var s=p(t);w.$$.fragment.l(s),c=e(s,"\n    "),B.$$.fragment.l(s),s.forEach(l),this.h()},h(){d(t,"slot","preview")},m(a,s){o(a,t,s),n(w,t,null),u(t,c),n(B,t,null),v=!0},p(a,t){var c={};a.$$scope&&(c.$$scope={changed:a,ctx:t}),w.$set(c);var s={};a.$$scope&&(s.$$scope={changed:a,ctx:t}),!g&&a.active&&(s.active=t.active),B.$set(s)},i(a){v||(r(w.$$.fragment,a),r(B.$$.fragment,a),v=!0)},o(a){i(w.$$.fragment,a),i(B.$$.fragment,a),v=!1},d(a){a&&l(t),$(w),$(B)}}}function E(a){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function I(a){var t,c,m,f=new w({props:{title:"Modal",subtitle:"模态框"}}),p=new _({props:{code:'<script>\n  import { Button, Modal } from \'svelma-pro\'\n  \n  let active = false\n<\/script>\n\n<Button class="block" on:click={() => active = !active}>Toggle</Button>\n<Modal bind:active={active}>\n  <p class="image is-4by3">\n    <img alt="Test image" src="https://via.placeholder.com/1280x920"/>\n  </p>\n</Modal>',$$slots:{default:[E],preview:[B]},$$scope:{ctx:a}}}),d=new M({props:{jsdoc:a.jsdoc}});return{c(){f.$$.fragment.c(),t=s(),p.$$.fragment.c(),c=s(),d.$$.fragment.c()},l(a){f.$$.fragment.l(a),t=e(a,"\n\n"),p.$$.fragment.l(a),c=e(a,"\n\n"),d.$$.fragment.l(a)},m(a,s){n(f,a,s),o(a,t,s),n(p,a,s),o(a,c,s),n(d,a,s),m=!0},p(a,t){var c={};(a.$$scope||a.active)&&(c.$$scope={changed:a,ctx:t}),p.$set(c);var s={};a.jsdoc&&(s.jsdoc=t.jsdoc),d.$set(s)},i(a){m||(r(f.$$.fragment,a),r(p.$$.fragment,a),r(d.$$.fragment,a),m=!0)},o(a){i(f.$$.fragment,a),i(p.$$.fragment,a),i(d.$$.fragment,a),m=!1},d(a){$(f,a),a&&l(t),$(p,a),a&&l(c),$(d,a)}}}async function C(){const a=await this.fetch("components/modal.json");return{jsdoc:await a.json()}}function D(a,t,c){let{jsdoc:s}=t,e=!1;return a.$set=(a=>{"jsdoc"in a&&c("jsdoc",s=a.jsdoc)}),{jsdoc:s,active:e,click_handler:function(){const a=e=!e;return c("active",e),a},modal_active_binding:function(a){c("active",e=a)}}}export default class extends a{constructor(a){super(),t(this,a,D,I,c,["jsdoc"])}}export{C as preload};
//# sourceMappingURL=modal.669879be.js.map
