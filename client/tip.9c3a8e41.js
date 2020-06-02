import{c as t,d as n,b as e,o,e as s,f as c,i as r,g as a,h as $,j as i,k as p,B as f,l,m,y as g,w as u,C as h,a as d}from"./chunk.3a59a5ff.js";import{I as v,g as k}from"./chunk.9edff6fc.js";import"./chunk.6585e13c.js";import{a as w}from"./chunk.ac03e416.js";import"./chunk.0f1f2b7f.js";import{a as x}from"./chunk.1c70aff2.js";function y(t){var n;return{c(){n=c("Link")},l(t){n=r(t,"Link")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function T(t){var n,e=new k({props:{type:"is-link",$$slots:{default:[y]},$$scope:{ctx:t}}});return{c(){e.$$.fragment.c()},l(t){e.$$.fragment.l(t)},m(t,o){f(e,t,o),n=!0},p(t,n){var o={};t.$$scope&&(o.$$scope={changed:t,ctx:n}),e.$set(o)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function j(t){var n,e,o=new v({props:{content:"你好",$$slots:{default:[T]},$$scope:{ctx:t}}});return{c(){n=s("div"),o.$$.fragment.c(),this.h()},l(t){n=a(t,"DIV",{slot:!0},!1);var e=$(n);o.$$.fragment.l(e),e.forEach(i),this.h()},h(){p(n,"slot","preview")},m(t,s){l(t,n,s),f(o,n,null),e=!0},p(t,n){var e={};t.$$scope&&(e.$$scope={changed:t,ctx:n}),o.$set(e)},i(t){e||(g(o.$$.fragment,t),e=!0)},o(t){u(o.$$.fragment,t),e=!1},d(t){t&&i(n),h(o)}}}function L(t){return{c:d,l:d,m:d,p:d,i:d,o:d,d:d}}function b(t){var n;return{c(){n=c("Link")},l(t){n=r(t,"Link")},m(t,e){l(t,n,e)},d(t){t&&i(n)}}}function E(t){var n,e=new k({props:{type:"is-link",$$slots:{default:[b]},$$scope:{ctx:t}}});return{c(){e.$$.fragment.c()},l(t){e.$$.fragment.l(t)},m(t,o){f(e,t,o),n=!0},p(t,n){var o={};t.$$scope&&(o.$$scope={changed:t,ctx:n}),e.$set(o)},i(t){n||(g(e.$$.fragment,t),n=!0)},o(t){u(e.$$.fragment,t),n=!1},d(t){h(e,t)}}}function S(t){var n,e,o=new v({props:{config:t.config,$$slots:{default:[E]},$$scope:{ctx:t}}});return{c(){n=s("div"),o.$$.fragment.c(),this.h()},l(t){n=a(t,"DIV",{slot:!0},!1);var e=$(n);o.$$.fragment.l(e),e.forEach(i),this.h()},h(){p(n,"slot","preview")},m(t,s){l(t,n,s),f(o,n,null),e=!0},p(t,n){var e={};t.config&&(e.config=n.config),t.$$scope&&(e.$$scope={changed:t,ctx:n}),o.$set(e)},i(t){e||(g(o.$$.fragment,t),e=!0)},o(t){u(o.$$.fragment,t),e=!1},d(t){t&&i(n),h(o)}}}function B(t){return{c:d,l:d,m:d,p:d,i:d,o:d,d:d}}function H(t){var n,e,d,v,k,y,T,b,E,H,I,D,M,P,V=new w({props:{title:"Tip",subtitle:"提示"}}),A=new x({props:{code:"<script>\n  import { Tip } from 'svelma-pro'\n<\/script>\n\n<Tip content=\"你好\"></Tip>\n",$$slots:{default:[L],preview:[j]},$$scope:{ctx:t}}}),C=new x({props:{code:"<script>\nimport { Tip } from 'svelma-pro'\n\nlet config = {\n    content: '<div class=\"tooltip\">Styled tooltip text</div>',\n    allowHTML: true,\n    trigger: 'click',\n    onShow: function(instance) {\n        console.log(instance);\n}\n<\/script>\n\n<style>\n  :global(.tooltip) {\n    color: orange;\n    font-weight: bold;\n    text-transform: uppercase;\n  }\n</style>\n\n<Tip config=\"{config}\">\n   <Button type=\"is-link\">Link</Button>\n</Tip>\n",$$slots:{default:[B],preview:[S]},$$scope:{ctx:t}}});return{c(){V.$$.fragment.c(),n=o(),A.$$.fragment.c(),e=o(),d=s("hr"),v=o(),k=s("p"),y=c("自定义设置"),T=o(),b=s("p"),E=c("更多配置请参考"),H=s("a"),I=c("tippy"),D=c("."),M=o(),C.$$.fragment.c(),this.h()},l(t){V.$$.fragment.l(t),n=r(t,"\n\n"),A.$$.fragment.l(t),e=r(t,"\n\n"),d=a(t,"HR",{class:!0},!1),$(d).forEach(i),v=r(t,"\n\n"),k=a(t,"P",{class:!0},!1);var o=$(k);y=r(o,"自定义设置"),o.forEach(i),T=r(t,"\n"),b=a(t,"P",{class:!0},!1);var s=$(b);E=r(s,"更多配置请参考"),H=a(s,"A",{href:!0},!1);var c=$(H);I=r(c,"tippy"),c.forEach(i),D=r(s,"."),s.forEach(i),M=r(t,"\n\n"),C.$$.fragment.l(t),this.h()},h(){p(d,"class","is-medium"),p(k,"class","title is-4"),p(H,"href","https://atomiks.github.io/tippyjs/"),p(b,"class","content")},m(t,o){f(V,t,o),l(t,n,o),f(A,t,o),l(t,e,o),l(t,d,o),l(t,v,o),l(t,k,o),m(k,y),l(t,T,o),l(t,b,o),m(b,E),m(b,H),m(H,I),m(b,D),l(t,M,o),f(C,t,o),P=!0},p(t,n){var e={};t.$$scope&&(e.$$scope={changed:t,ctx:n}),A.$set(e);var o={};t.$$scope&&(o.$$scope={changed:t,ctx:n}),C.$set(o)},i(t){P||(g(V.$$.fragment,t),g(A.$$.fragment,t),g(C.$$.fragment,t),P=!0)},o(t){u(V.$$.fragment,t),u(A.$$.fragment,t),u(C.$$.fragment,t),P=!1},d(t){h(V,t),t&&i(n),h(A,t),t&&(i(e),i(d),i(v),i(k),i(T),i(b),i(M)),h(C,t)}}}function I(t){return{config:{content:'<div class="tooltip">Styled tooltip text</div>',allowHTML:!0,trigger:"click",onShow:function(t){console.log(t)}}}}export default class extends t{constructor(t){super(),n(this,t,I,H,e,[])}}
//# sourceMappingURL=tip.9c3a8e41.js.map
