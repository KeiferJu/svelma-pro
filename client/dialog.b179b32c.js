import{c as t,d as e,b as n,D as o,o as s,e as r,f as a,E as c,p as i,g as l,h as p,i as m,j as u,k as $,F as f,l as h,m as d,A as g,y as w,G as y}from"./chunk.88cd124b.js";import{g as v,r as D,s as k}from"./chunk.a406e8dd.js";import"./chunk.e7ec29b3.js";import{a as b}from"./chunk.1eafa91d.js";import"./chunk.c5cee6e7.js";import{a as E}from"./chunk.67d563de.js";import{a as j}from"./chunk.64fb850a.js";function x(t){let e;return{c(){e=a("Dialog")},l(t){e=m(t,"Dialog")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function P(t){let e;return{c(){e=a("Confirm")},l(t){e=m(t,"Confirm")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function B(t){let e;return{c(){e=a("Confirm (custom)")},l(t){e=m(t,"Confirm (custom)")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function C(t){let e,n,a,m;const D=new v({props:{type:"is-primary",$$slots:{default:[x]},$$scope:{ctx:t}}});D.$on("click",t[4]);const k=new v({props:{type:"is-info",$$slots:{default:[P]},$$scope:{ctx:t}}});k.$on("click",t[5]);const b=new v({props:{type:"is-danger",$$slots:{default:[B]},$$scope:{ctx:t}}});return b.$on("click",t[6]),{c(){e=r("div"),o(D.$$.fragment),n=s(),o(k.$$.fragment),a=s(),o(b.$$.fragment),this.h()},l(t){e=l(t,"DIV",{slot:!0});var o=p(e);c(D.$$.fragment,o),n=i(o),c(k.$$.fragment,o),a=i(o),c(b.$$.fragment,o),o.forEach(u),this.h()},h(){$(e,"slot","preview")},m(t,o){h(t,e,o),f(D,e,null),d(e,n),f(k,e,null),d(e,a),f(b,e,null),m=!0},p(t,e){const n={};1024&e&&(n.$$scope={dirty:e,ctx:t}),D.$set(n);const o={};1024&e&&(o.$$scope={dirty:e,ctx:t}),k.$set(o);const s={};1024&e&&(s.$$scope={dirty:e,ctx:t}),b.$set(s)},i(t){m||(g(D.$$.fragment,t),g(k.$$.fragment,t),g(b.$$.fragment,t),m=!0)},o(t){w(D.$$.fragment,t),w(k.$$.fragment,t),w(b.$$.fragment,t),m=!1},d(t){t&&u(e),y(D),y(k),y(b)}}}function T(t){let e;return{c(){e=a("Prompt")},l(t){e=m(t,"Prompt")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function I(t){let e;return{c(){e=a("Date Prompt")},l(t){e=m(t,"Date Prompt")},m(t,n){h(t,e,n)},d(t){t&&u(e)}}}function O(t){let e,n,a;const m=new v({props:{type:"is-primary",$$slots:{default:[T]},$$scope:{ctx:t}}});m.$on("click",t[7]);const D=new v({props:{type:"is-link",$$slots:{default:[I]},$$scope:{ctx:t}}});return D.$on("click",t[8]),{c(){e=r("div"),o(m.$$.fragment),n=s(),o(D.$$.fragment),this.h()},l(t){e=l(t,"DIV",{slot:!0});var o=p(e);c(m.$$.fragment,o),n=i(o),c(D.$$.fragment,o),o.forEach(u),this.h()},h(){$(e,"slot","preview")},m(t,o){h(t,e,o),f(m,e,null),d(e,n),f(D,e,null),a=!0},p(t,e){const n={};1024&e&&(n.$$scope={dirty:e,ctx:t}),m.$set(n);const o={};1024&e&&(o.$$scope={dirty:e,ctx:t}),D.$set(o)},i(t){a||(g(m.$$.fragment,t),g(D.$$.fragment,t),a=!0)},o(t){w(m.$$.fragment,t),w(D.$$.fragment,t),a=!1},d(t){t&&u(e),y(m),y(D)}}}function Y(t){let e,n,v,D,k,x,P,B,T,I,Y,A,q,H,U,W,S,V,F,G,R,z,J,K,L,M,N,Q,X,Z,_,tt,et,nt,ot,st,rt,at,ct;const it=new b({props:{title:"Dialog",subtitle:"用户警报，提示和确认对话框"}}),lt=new E({props:{code:"<script>\n  import { Button, Dialog, Toast } from 'svelma-pro'\n\n  function alert() {\n    Dialog.alert('Alles ist gut')\n  }\n\n  const thenHandler = result => Toast.create(`You ${result ? 'confirmed' : 'canceled'}`)\n\n  function confirm(type) {\n    switch(type) {\n      case 'custom':\n        return Dialog.confirm({\n          message: 'This is a custom confirmation message',\n          title: \"I'm a title!\",\n          type: 'is-danger',\n          icon: 'times-circle'\n        })\n        .then(thenHandler)\n      default:\n        Dialog.confirm('Shall we dance?')\n        .then(thenHandler)\n    }\n  }\n<\/script>\n\n<Button type=\"is-primary\" on:click={() => alert()}>Dialog</Button>\n<Button type=\"is-info\" on:click={() => confirm()}>Confirm</Button>\n<Button type=\"is-danger\" on:click={() => confirm('custom')}>Confirm (custom)</Button>\n",$$slots:{preview:[C]},$$scope:{ctx:t}}}),pt=new E({props:{code:"<script>\n  import { Button, Dialog, Toast } from 'svelma-pro'\n\n  function prompt(opts) {\n    Dialog.prompt({\n      message: \"What is your quest?\",\n      ...opts\n    })\n    .then(prompt => Toast.create(`Your answer was: '${prompt}'`))\n  }\n<\/script>\n\n<Button type=\"is-primary\" on:click={() => prompt()}>Prompt</Button>\n<Button type=\"is-link\" on:click={() => prompt({ message: 'Which date?', inputProps: { type: 'date' }})}>Date Prompt</Button>",$$slots:{preview:[O]},$$scope:{ctx:t}}}),mt=new j({props:{jsdoc:t[0]}});return{c(){o(it.$$.fragment),e=s(),n=r("p"),v=a("Alert and Dialog"),D=s(),k=r("p"),x=a("Use "),P=r("code"),B=a("Dialog.alert()"),T=a(" and "),I=r("code"),Y=a("Dialog.confirm()"),A=a(" to create these kinds of dialogs.\nThe methods return a promise that is resolved when the user cancels or confirms the alert. If the use closes/cancels the\nvalue will be "),q=r("code"),H=a("false"),U=a(". If the user clicks the confirm button the value will be "),W=r("code"),S=a("true"),V=a(".\n\nThe first argument can either be an object of options or a string to use as the message."),F=s(),o(lt.$$.fragment),G=s(),R=r("hr"),z=s(),J=r("p"),K=a("Prompt"),L=s(),M=r("p"),N=a("Use "),Q=r("code"),X=a("Dialog.prompt()"),Z=a(" to programmatically create prompts for user input. By default the\ndialog will be created with a required text input. You can control the props (attributes) on the prompt with the\n"),_=r("code"),tt=a("inputProps"),et=a(" prop.\n\n"),nt=r("code"),ot=a("prompt()"),st=a(" returns a promise that will be resolved with the prompt input value if the user confirms, or null\nif they cancel/close."),rt=s(),o(pt.$$.fragment),at=s(),o(mt.$$.fragment),this.h()},l(t){c(it.$$.fragment,t),e=i(t),n=l(t,"P",{class:!0});var o=p(n);v=m(o,"Alert and Dialog"),o.forEach(u),D=i(t),k=l(t,"P",{class:!0});var s=p(k);x=m(s,"Use "),P=l(s,"CODE",{});var r=p(P);B=m(r,"Dialog.alert()"),r.forEach(u),T=m(s," and "),I=l(s,"CODE",{});var a=p(I);Y=m(a,"Dialog.confirm()"),a.forEach(u),A=m(s," to create these kinds of dialogs.\nThe methods return a promise that is resolved when the user cancels or confirms the alert. If the use closes/cancels the\nvalue will be "),q=l(s,"CODE",{});var $=p(q);H=m($,"false"),$.forEach(u),U=m(s,". If the user clicks the confirm button the value will be "),W=l(s,"CODE",{});var f=p(W);S=m(f,"true"),f.forEach(u),V=m(s,".\n\nThe first argument can either be an object of options or a string to use as the message."),s.forEach(u),F=i(t),c(lt.$$.fragment,t),G=i(t),R=l(t,"HR",{class:!0}),z=i(t),J=l(t,"P",{class:!0});var h=p(J);K=m(h,"Prompt"),h.forEach(u),L=i(t),M=l(t,"P",{class:!0});var d=p(M);N=m(d,"Use "),Q=l(d,"CODE",{});var g=p(Q);X=m(g,"Dialog.prompt()"),g.forEach(u),Z=m(d," to programmatically create prompts for user input. By default the\ndialog will be created with a required text input. You can control the props (attributes) on the prompt with the\n"),_=l(d,"CODE",{});var w=p(_);tt=m(w,"inputProps"),w.forEach(u),et=m(d," prop.\n\n"),nt=l(d,"CODE",{});var y=p(nt);ot=m(y,"prompt()"),y.forEach(u),st=m(d," returns a promise that will be resolved with the prompt input value if the user confirms, or null\nif they cancel/close."),d.forEach(u),rt=i(t),c(pt.$$.fragment,t),at=i(t),c(mt.$$.fragment,t),this.h()},h(){$(n,"class","title is-4"),$(k,"class","content"),$(R,"class","is-medium"),$(J,"class","title is-4"),$(M,"class","content")},m(t,o){f(it,t,o),h(t,e,o),h(t,n,o),d(n,v),h(t,D,o),h(t,k,o),d(k,x),d(k,P),d(P,B),d(k,T),d(k,I),d(I,Y),d(k,A),d(k,q),d(q,H),d(k,U),d(k,W),d(W,S),d(k,V),h(t,F,o),f(lt,t,o),h(t,G,o),h(t,R,o),h(t,z,o),h(t,J,o),d(J,K),h(t,L,o),h(t,M,o),d(M,N),d(M,Q),d(Q,X),d(M,Z),d(M,_),d(_,tt),d(M,et),d(M,nt),d(nt,ot),d(M,st),h(t,rt,o),f(pt,t,o),h(t,at,o),f(mt,t,o),ct=!0},p(t,[e]){const n={};1024&e&&(n.$$scope={dirty:e,ctx:t}),lt.$set(n);const o={};1024&e&&(o.$$scope={dirty:e,ctx:t}),pt.$set(o);const s={};1&e&&(s.jsdoc=t[0]),mt.$set(s)},i(t){ct||(g(it.$$.fragment,t),g(lt.$$.fragment,t),g(pt.$$.fragment,t),g(mt.$$.fragment,t),ct=!0)},o(t){w(it.$$.fragment,t),w(lt.$$.fragment,t),w(pt.$$.fragment,t),w(mt.$$.fragment,t),ct=!1},d(t){y(it,t),t&&u(e),t&&u(n),t&&u(D),t&&u(k),t&&u(F),y(lt,t),t&&u(G),t&&u(R),t&&u(z),t&&u(J),t&&u(L),t&&u(M),t&&u(rt),y(pt,t),t&&u(at),y(mt,t)}}}async function A(){const t=await this.fetch("components/dialog.json");return{jsdoc:await t.json()}}function q(t,e,n){let{jsdoc:o}=e;function s(){D.alert("Alles ist gut")}const r=t=>k.create(`You ${t?"confirmed":"canceled"}`);function a(t){switch(t){case"custom":return D.confirm({message:"This is a custom confirmation message",title:"I'm a title!",type:"is-danger",icon:"times-circle"}).then(r);default:D.confirm("Shall we dance?").then(r)}}function c(t){D.prompt({message:"What is your quest?",...t}).then(t=>k.create(`Your answer was: '${t}'`))}return t.$set=(t=>{"jsdoc"in t&&n(0,o=t.jsdoc)}),[o,s,a,c,()=>s(),()=>a(),()=>a("custom"),()=>c(),()=>c({message:"Which date?",inputProps:{type:"date"}})]}export default class extends t{constructor(t){super(),e(this,t,q,Y,n,{jsdoc:0})}}export{A as preload};
//# sourceMappingURL=dialog.b179b32c.js.map
