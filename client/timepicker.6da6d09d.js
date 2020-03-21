import{c as e,d as t,b as n,o as s,i as r,B as a,l as o,y as i,w as c,C as m,j as $,e as f,g as p,h as u,k as d,a as l,O as g,a5 as h,a6 as j}from"./chunk.0fbbf14e.js";import{h as k}from"./chunk.99dc9135.js";import"./chunk.0a41e55b.js";import{a as v}from"./chunk.890edef0.js";import"./chunk.2749c31c.js";import{a as w}from"./chunk.301af687.js";import{a as b}from"./chunk.e7370317.js";function x(e){var t,n,s;function r(t){e.timepicker_time_binding.call(null,t),n=!0,j(()=>n=!1)}let l={};void 0!==e.time&&(l.time=e.time);var v=new k({props:l});return g.push(()=>h(v,"time",r)),v.$on("change",D),{c(){t=f("div"),v.$$.fragment.c(),this.h()},l(e){t=p(e,"DIV",{slot:!0},!1);var n=u(t);v.$$.fragment.l(n),n.forEach($),this.h()},h(){d(t,"slot","preview")},m(e,n){o(e,t,n),a(v,t,null),s=!0},p(e,t){var s={};!n&&e.time&&(s.time=t.time),v.$set(s)},i(e){s||(i(v.$$.fragment,e),s=!0)},o(e){c(v.$$.fragment,e),s=!1},d(e){e&&$(t),m(v)}}}function _(e){return{c:l,l:l,m:l,p:l,i:l,o:l,d:l}}function T(e){var t,n,f,p=new v({props:{title:"Timepicker",subtitle:"时间选择器"}}),u=new w({props:{code:"<script>\nimport {Timepicker} from 'svelma-pro'\n<\/script>\n\n<Timepicker bind:time />\n",$$slots:{default:[_],preview:[x]},$$scope:{ctx:e}}}),d=new b({props:{jsdoc:e.jsdoc,showEvent:"true"}});return{c(){p.$$.fragment.c(),t=s(),u.$$.fragment.c(),n=s(),d.$$.fragment.c()},l(e){p.$$.fragment.l(e),t=r(e,"\n\n"),u.$$.fragment.l(e),n=r(e,"\n\n"),d.$$.fragment.l(e)},m(e,s){a(p,e,s),o(e,t,s),a(u,e,s),o(e,n,s),a(d,e,s),f=!0},p(e,t){var n={};(e.$$scope||e.time)&&(n.$$scope={changed:e,ctx:t}),u.$set(n);var s={};e.jsdoc&&(s.jsdoc=t.jsdoc),d.$set(s)},i(e){f||(i(p.$$.fragment,e),i(u.$$.fragment,e),i(d.$$.fragment,e),f=!0)},o(e){c(p.$$.fragment,e),c(u.$$.fragment,e),c(d.$$.fragment,e),f=!1},d(e){m(p,e),e&&$(t),m(u,e),e&&$(n),m(d,e)}}}async function y(e,t){const n=await this.fetch("components/timepicker.json");return{jsdoc:await n.json()}}function D(e){console.log(e)}function E(e,t,n){let{jsdoc:s}=t,r=new Date;return e.$set=(e=>{"jsdoc"in e&&n("jsdoc",s=e.jsdoc)}),{jsdoc:s,time:r,timepicker_time_binding:function(e){n("time",r=e)}}}export default class extends e{constructor(e){super(),t(this,e,E,T,n,["jsdoc"])}}export{y as preload};
//# sourceMappingURL=timepicker.6da6d09d.js.map
