import{c as s,d as t,b as n,o as a,i as e,B as o,l as r,y as c,w as p,C as m,j as i,e as $,g as l,h as f,k as u,a as g}from"./chunk.0fbbf14e.js";import{l as d}from"./chunk.54313170.js";import"./chunk.fc46e9cb.js";import{a as j}from"./chunk.890edef0.js";import"./chunk.56a11ef2.js";import{a as h}from"./chunk.a9506246.js";import{a as w}from"./chunk.e7370317.js";function v(s){var t,n,a=new d({props:{options:s.options}});return{c(){t=$("div"),a.$$.fragment.c(),this.h()},l(s){t=l(s,"DIV",{slot:!0,class:!0},!1);var n=f(t);a.$$.fragment.l(n),n.forEach(i),this.h()},h(){u(t,"slot","preview"),u(t,"class","preview svelte-kvaa7e")},m(s,e){r(s,t,e),o(a,t,null),n=!0},p(s,t){var n={};s.options&&(n.options=t.options),a.$set(n)},i(s){n||(c(a.$$.fragment,s),n=!0)},o(s){p(a.$$.fragment,s),n=!1},d(s){s&&i(t),m(a)}}}function b(s){return{c:g,l:g,m:g,p:g,i:g,o:g,d:g}}function k(s){var t,n,$,l=new j({props:{title:"Carousel",subtitle:"跑马灯"}}),f=new h({props:{code:"<script>\n  import { Carousel } from 'svelma-pro'\n\n  let options = [\n  'http://dev.smartmapx.com/assets/source-img/banner/banner.jpg',\n  'http://dev.smartmapx.com/assets/source-img/banner/banner2.jpg',\n  'http://dev.smartmapx.com/assets/source-img/banner/banner3.jpg',\n  'http://dev.smartmapx.com/assets/source-img/banner/banner4.jpg'\n  ];\n  <\/script>\n\n  <Carousel options={options} />\n  ",$$slots:{default:[b],preview:[v]},$$scope:{ctx:s}}}),u=new w({props:{jsdoc:s.jsdoc}});return{c(){l.$$.fragment.c(),t=a(),f.$$.fragment.c(),n=a(),u.$$.fragment.c()},l(s){l.$$.fragment.l(s),t=e(s,"\n\n"),f.$$.fragment.l(s),n=e(s,"\n\n"),u.$$.fragment.l(s)},m(s,a){o(l,s,a),r(s,t,a),o(f,s,a),r(s,n,a),o(u,s,a),$=!0},p(s,t){var n={};s.$$scope&&(n.$$scope={changed:s,ctx:t}),f.$set(n);var a={};s.jsdoc&&(a.jsdoc=t.jsdoc),u.$set(a)},i(s){$||(c(l.$$.fragment,s),c(f.$$.fragment,s),c(u.$$.fragment,s),$=!0)},o(s){p(l.$$.fragment,s),p(f.$$.fragment,s),p(u.$$.fragment,s),$=!1},d(s){m(l,s),s&&i(t),m(f,s),s&&i(n),m(u,s)}}}async function x(){const s=await this.fetch("components/carousel.json");return{jsdoc:await s.json()}}function y(s,t,n){let{jsdoc:a}=t;return s.$set=(s=>{"jsdoc"in s&&n("jsdoc",a=s.jsdoc)}),{jsdoc:a,options:["http://www.myllcn.com/dassets/album/home.jpg","http://www.myllcn.com/dassets/album/page.jpg","http://www.myllcn.com/dassets/album/page_pass.jpg"]}}export default class extends s{constructor(s){super(),t(this,s,y,k,n,["jsdoc"])}}export{x as preload};
//# sourceMappingURL=carousel.c5b188a0.js.map