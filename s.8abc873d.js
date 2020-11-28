var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function s(){return Object.create(null)}function a(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n,e,s){if(t){const a=i(t,n,e,s);return t[0](a)}}function i(t,e,s,a){return t[1]&&a?n(s.ctx.slice(),t[1](a(e))):s.ctx}function p(t,n,e,s,a,o,c){const l=function(t,n,e,s){if(t[2]&&s){const a=t[2](s(e));if(void 0===n.dirty)return a;if("object"==typeof a){const t=[],e=Math.max(n.dirty.length,a.length);for(let s=0;s<e;s+=1)t[s]=n.dirty[s]|a[s];return t}return n.dirty|a}return n.dirty}(n,s,a,o);if(l){const a=i(n,e,s,c);t.p(a,l)}}function r(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function u(t,n){const e={};n=new Set(n);for(const s in t)n.has(s)||"$"===s[0]||(e[s]=t[s]);return e}function d(t){return null==t?"":t}function f(t,n){t.appendChild(n)}function $(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function h(){return k(" ")}function b(t,n,e,s){return t.addEventListener(n,e,s),()=>t.removeEventListener(n,e,s)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in n)null==n[s]?t.removeAttribute(s):"style"===s?t.style.cssText=n[s]:"__value"===s?t.value=t[s]=n[s]:e[s]&&e[s].set?t[s]=n[s]:x(t,s,n[s])}function v(t,n,e){t.classList[e?"add":"remove"](n)}let T;function C(t){T=t}function A(){if(!T)throw new Error("Function called outside component initialization");return T}function w(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const M=[],I=[],L=[],_=[],H=Promise.resolve();let E=!1;function q(t){L.push(t)}let O=!1;const S=new Set;function j(){if(!O){O=!0;do{for(let t=0;t<M.length;t+=1){const n=M[t];C(n),P(n.$$)}for(C(null),M.length=0;I.length;)I.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];S.has(n)||(S.add(n),n())}L.length=0}while(M.length);for(;_.length;)_.pop()();E=!1,O=!1,S.clear()}}function P(t){if(null!==t.fragment){t.update(),a(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}const N=new Set;function B(t,n){t&&t.i&&(N.delete(t),t.i(n))}function R(t,n,e,s){if(t&&t.o){if(N.has(t))return;N.add(t),undefined.c.push((()=>{N.delete(t),s&&(e&&t.d(1),s())})),t.o(n)}}function D(t,n){const e={},s={},a={$$scope:1};let o=t.length;for(;o--;){const c=t[o],l=n[o];if(l){for(const t in c)t in l||(s[t]=1);for(const t in l)a[t]||(e[t]=l[t],a[t]=1);t[o]=l}else for(const t in c)a[t]=1}for(const t in s)t in e||(e[t]=void 0);return e}function V(t){t&&t.c()}function F(t,n,s){const{fragment:c,on_mount:l,on_destroy:i,after_update:p}=t.$$;c&&c.m(n,s),q((()=>{const n=l.map(e).filter(o);i?i.push(...n):a(n),t.$$.on_mount=[]})),p.forEach(q)}function G(t,n){const e=t.$$;null!==e.fragment&&(a(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function U(t,n){-1===t.$$.dirty[0]&&(M.push(t),E||(E=!0,H.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function z(n,e,o,c,l,i,p=[-1]){const r=T;C(n);const u=e.props||{},d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:[]),callbacks:s(),dirty:p,skip_bound:!1};let f=!1;if(d.ctx=o?o(n,u,((t,e,...s)=>{const a=s.length?s[0]:e;return d.ctx&&l(d.ctx[t],d.ctx[t]=a)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](a),f&&U(n,t)),e})):[],d.update(),f=!0,a(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();e.intro&&B(n.$$.fragment),F(n,e.target,e.anchor),j()}C(r)}class W{$destroy(){G(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const J=[];function K(t){let e,s;const a=t[3].default,o=l(a,t,t[2],null);let c=[t[0]],i={};for(let t=0;t<c.length;t+=1)i=n(i,c[t]);return{c(){e=m("ul"),o&&o.c(),y(e,i)},m(t,n){$(t,e,n),o&&o.m(e,null),s=!0},p(t,[n]){o&&o.p&&4&n&&p(o,a,t,t[2],n,null,null),y(e,i=D(c,[1&n&&t[0]]))},i(t){s||(B(o,t),s=!0)},o(t){R(o,t),s=!1},d(t){t&&g(e),o&&o.d(t)}}}function Q(e,s,a){const o=["multiselectable"];let l=u(s,o),{$$slots:i={},$$scope:p}=s,{multiselectable:d=!1}=s;const f=function(n,e=t){let s;const a=[];function o(t){if(c(n,t)&&(n=t,s)){const t=!J.length;for(let t=0;t<a.length;t+=1){const e=a[t];e[1](),J.push(e,n)}if(t){for(let t=0;t<J.length;t+=2)J[t][0](J[t+1]);J.length=0}}}return{set:o,update:function(t){o(t(n))},subscribe:function(c,l=t){const i=[c,l];return a.push(i),1===a.length&&(s=e(o)||t),c(n),()=>{const t=a.indexOf(i);-1!==t&&a.splice(t,1),0===a.length&&(s(),s=null)}}}}({});var $,g;return $="Accordion",g={items:f,add:t=>{f.update((n=>({...n,[t.id]:t.expanded})))},remove:t=>{f.update((n=>(delete n[t.id],n)))},toggle:t=>{f.update((n=>(d||Object.keys(n).forEach((t=>n[t]=!1)),{...n,[t.id]:t.expanded})))}},A().$$.context.set($,g),e.$$set=t=>{s=n(n({},s),r(t)),a(0,l=u(s,o)),"multiselectable"in t&&a(1,d=t.multiselectable),"$$scope"in t&&a(2,p=t.$$scope)},[l,d,p,i]}class X extends W{constructor(t){super(),z(this,t,Q,K,c,{multiselectable:1})}}const Y=t=>({}),Z=t=>({});function tt(t){let e,s,o,c,i,r,u,T,C;const A=t[10].title,w=l(A,t,t[9],Z),M=w||function(t){let n;return{c(){n=k(t[2])},m(t,e){$(t,n,e)},p(t,e){4&e&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(n,t[2])},d(t){t&&g(n)}}}(t),I=t[10].default,L=l(I,t,t[9],null);let _=[t[8]],H={};for(let t=0;t<_.length;t+=1)H=n(H,_[t]);return{c(){e=m("li"),s=m("button"),M&&M.c(),c=h(),i=m("div"),L&&L.c(),x(s,"class",o=d(t[4])+" svelte-1nn74u2"),x(s,"aria-expanded",t[0]),x(s,"aria-controls",t[1]),x(s,"aria-disabled",t[3]),s.disabled=t[3],x(s,"id",t[6]),x(i,"role","region"),x(i,"id",t[1]),x(i,"aria-labelledby",t[6]),i.hidden=r=!t[0],x(i,"class","svelte-1nn74u2"),y(e,H),v(e,"svelte-1nn74u2",!0)},m(n,a){$(n,e,a),f(e,s),M&&M.m(s,null),t[18](s),f(e,c),f(e,i),L&&L.m(i,null),u=!0,T||(C=[b(s,"click",t[11]),b(s,"click",t[19]),b(s,"mouseover",t[12]),b(s,"mouseenter",t[13]),b(s,"mouseout",t[14]),b(s,"focus",t[15]),b(s,"blur",t[16]),b(s,"keydown",t[17])],T=!0)},p(t,[n]){w?w.p&&512&n&&p(w,A,t,t[9],n,Y,Z):M&&M.p&&4&n&&M.p(t,n),(!u||16&n&&o!==(o=d(t[4])+" svelte-1nn74u2"))&&x(s,"class",o),(!u||1&n)&&x(s,"aria-expanded",t[0]),(!u||2&n)&&x(s,"aria-controls",t[1]),(!u||8&n)&&x(s,"aria-disabled",t[3]),(!u||8&n)&&(s.disabled=t[3]),(!u||64&n)&&x(s,"id",t[6]),L&&L.p&&512&n&&p(L,I,t,t[9],n,null,null),(!u||2&n)&&x(i,"id",t[1]),(!u||64&n)&&x(i,"aria-labelledby",t[6]),(!u||1&n&&r!==(r=!t[0]))&&(i.hidden=r),y(e,H=D(_,[256&n&&t[8]])),v(e,"svelte-1nn74u2",!0)},i(t){u||(B(M,t),B(L,t),u=!0)},o(t){R(M,t),R(L,t),u=!1},d(n){n&&g(e),M&&M.d(n),t[18](null),L&&L.d(n),T=!1,a(C)}}}function nt(t,e,s){const a=["id","title","expanded","disabled","buttonClass"];let o=u(e,a),{$$slots:c={},$$scope:l}=e,{id:i="item"+Math.random().toString(36)}=e,{title:p="Title"}=e,{expanded:d=!1}=e,{disabled:f=!1}=e,{buttonClass:$=""}=e;const g=(m="Accordion",A().$$.context.get(m));var m;let k,h=null;var b;b=()=>{g&&g.remove({id:i}),k&&k()},A().$$.on_destroy.push(b);let x;return t.$$set=t=>{e=n(n({},e),r(t)),s(8,o=u(e,a)),"id"in t&&s(1,i=t.id),"title"in t&&s(2,p=t.title),"expanded"in t&&s(0,d=t.expanded),"disabled"in t&&s(3,f=t.disabled),"buttonClass"in t&&s(4,$=t.buttonClass),"$$scope"in t&&s(9,l=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&s(6,x=`button-${i}`),3&t.$$.dirty&&g&&(g.add({id:i,expanded:d}),k=g.items.subscribe((t=>{s(0,d=t[i])})))},[d,i,p,f,$,h,x,g,o,l,c,function(n){w(t,n)},function(n){w(t,n)},function(n){w(t,n)},function(n){w(t,n)},function(n){w(t,n)},function(n){w(t,n)},function(n){w(t,n)},function(t){I[t?"unshift":"push"]((()=>{h=t,s(5,h)}))},()=>{void 0!==g&&(g.toggle({id:i,expanded:!d}),d&&h&&h.getBoundingClientRect().top<0&&h.scrollIntoView())}]}class et extends W{constructor(t){var n;super(),document.getElementById("svelte-1nn74u2-style")||((n=m("style")).id="svelte-1nn74u2-style",n.textContent="li.svelte-1nn74u2{list-style:none;margin:0.25rem 0}button.svelte-1nn74u2{border:2px solid #e0e0e0;background:none;font:inherit;line-height:inherit;color:inherit;cursor:pointer;padding:0.5rem 1rem;width:100%;text-align:left}div.svelte-1nn74u2{padding:1rem}",f(document.head,n)),z(this,t,nt,tt,c,{id:1,title:2,expanded:0,disabled:3,buttonClass:4})}}function st(t){let n;return{c(){n=k("Content 1")},m(t,e){$(t,n,e)},d(t){t&&g(n)}}}function at(t){let n;return{c(){n=k("Content 2")},m(t,e){$(t,n,e)},d(t){t&&g(n)}}}function ot(t){let n;return{c(){n=k("Content 2")},m(t,e){$(t,n,e)},d(t){t&&g(n)}}}function ct(t){let n,e,s,a,o,c,l;return n=new et({props:{title:"Title 1",$$slots:{default:[st]},$$scope:{ctx:t}}}),s=new et({props:{title:"Title 2",$$slots:{default:[at]},$$scope:{ctx:t}}}),o=new et({props:{title:"Title 3",$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c(){V(n.$$.fragment),e=h(),V(s.$$.fragment),a=h(),V(o.$$.fragment),c=h()},m(t,i){F(n,t,i),$(t,e,i),F(s,t,i),$(t,a,i),F(o,t,i),$(t,c,i),l=!0},p(t,e){const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),s.$set(c);const l={};1&e&&(l.$$scope={dirty:e,ctx:t}),o.$set(l)},i(t){l||(B(n.$$.fragment,t),B(s.$$.fragment,t),B(o.$$.fragment,t),l=!0)},o(t){R(n.$$.fragment,t),R(s.$$.fragment,t),R(o.$$.fragment,t),l=!1},d(t){G(n,t),t&&g(e),G(s,t),t&&g(a),G(o,t),t&&g(c)}}}function lt(t){let n;return{c(){n=k("Content 1")},m(t,e){$(t,n,e)},d(t){t&&g(n)}}}function it(t){let n;return{c(){n=k("Content 2")},m(t,e){$(t,n,e)},d(t){t&&g(n)}}}function pt(t){let n,e,s,a,o;return n=new et({props:{title:"Title 1",$$slots:{default:[lt]},$$scope:{ctx:t}}}),s=new et({props:{title:"Title 2",$$slots:{default:[it]},$$scope:{ctx:t}}}),{c(){V(n.$$.fragment),e=h(),V(s.$$.fragment),a=h()},m(t,c){F(n,t,c),$(t,e,c),F(s,t,c),$(t,a,c),o=!0},p(t,e){const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),s.$set(o)},i(t){o||(B(n.$$.fragment,t),B(s.$$.fragment,t),o=!0)},o(t){R(n.$$.fragment,t),R(s.$$.fragment,t),o=!1},d(t){G(n,t),t&&g(e),G(s,t),t&&g(a)}}}function rt(t){let n;return{c(){n=k("Content 1")},m(t,e){$(t,n,e)},d(t){t&&g(n)}}}function ut(t){let n;return{c(){n=k("Content 1")},m(t,e){$(t,n,e)},d(t){t&&g(n)}}}function dt(t){let n,e,s,a,o,c,l,i,p,r,u,d,k,b,y,v,T,C,A,w,M,I,L,_,H,E,q,O,S,j,P,N,D,U,z,W,J,K,Q,Y,Z,tt,nt,st,at,ot,lt,it,dt,ft,$t,gt,mt,kt,ht,bt,xt,yt,vt,Tt,Ct,At,wt;return T=new X({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),H=new X({props:{multiselectable:!0,$$slots:{default:[pt]},$$scope:{ctx:t}}}),D=new et({props:{title:"Title 1",expanded:!0,$$slots:{default:[rt]},$$scope:{ctx:t}}}),Z=new et({props:{buttonClass:"bg-gray-100",$$slots:{default:[ut]},$$scope:{ctx:t}}}),{c(){n=m("main"),e=m("h1"),e.textContent="svelte-accessible-accordion",s=h(),a=m("p"),a.innerHTML='<a href="https://npmjs.com/package/svelte-accessible-accordion"><img src="https://img.shields.io/npm/v/svelte-accessible-accordion.svg?style=for-the-badge&amp;color=%23ff3e00" alt="NPM"/></a> \n<a href="https://travis-ci.com/metonym/svelte-accessible-accordion"><img src="https://img.shields.io/travis/com/metonym/svelte-accessible-accordion?color=28a745&amp;style=for-the-badge" alt="Build"/></a>',o=h(),c=m("blockquote"),c.innerHTML="<p>Accessible accordion component for Svelte.</p>",l=h(),i=m("p"),i.innerHTML='This Svelte component implements <a href="https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html">WAI-ARIA design guidelines for an Accordion</a>.',p=h(),r=m("h2"),r.textContent="Install",u=h(),d=m("pre"),k=h(),b=m("h2"),b.textContent="Usage",y=h(),v=m("div"),V(T.$$.fragment),C=m("pre"),A=h(),w=m("h3"),w.textContent="Multiselectable",M=h(),I=m("p"),I.innerHTML="By default, only one accordion item can be expanded at one time. Set <code>multiselectable</code> to allow multi-item expansion.",L=h(),_=m("div"),V(H.$$.fragment),E=m("pre"),q=h(),O=m("h3"),O.textContent="Expanded items",S=h(),j=m("p"),j.innerHTML="Use the <code>expanded</code> prop to expand an accordion item.",P=h(),N=m("div"),V(D.$$.fragment),U=m("pre"),z=h(),W=m("h3"),W.innerHTML="<code>AccordionItem</code> button class",J=h(),K=m("p"),K.innerHTML="Provide a button class using the <code>buttonClass</code> prop.",Q=h(),Y=m("div"),V(Z.$$.fragment),tt=m("pre"),nt=h(),st=m("h2"),st.textContent="API",at=h(),ot=m("h3"),ot.innerHTML="<code>Accordion</code>",lt=h(),it=m("table"),it.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">multiselectable</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr></tbody>',dt=h(),ft=m("h3"),ft.innerHTML="<code>AccordionItem</code>",$t=h(),gt=m("table"),gt.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">id</td> \n<td style="text-align:left"><code>string</code> (default: <code>&quot;item&quot; + Math.random().toString(36)&quot;</code>)</td></tr> \n<tr><td style="text-align:left">title</td> \n<td style="text-align:left"><code>string</code> or <code>slot:title</code> (default: <code>&quot;Title&quot;</code>)</td></tr> \n<tr><td style="text-align:left">expanded</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr> \n<tr><td style="text-align:left">disabled</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr> \n<tr><td style="text-align:left">buttonClass</td> \n<td style="text-align:left"><code>string</code> (default: <code>&quot;&quot;</code>)</td></tr></tbody>',mt=h(),kt=m("h4"),kt.textContent="Forwarded events",ht=h(),bt=m("ul"),bt.innerHTML="<li>on:click</li> \n<li>on:mouseover</li> \n<li>on:mouseenter</li> \n<li>on:mouseout</li> \n<li>on:focus</li> \n<li>on:blur</li> \n<li>on:keydown</li>",xt=h(),yt=m("h2"),yt.innerHTML='<a href="https://github.com/metonym/svelte-svelte-accessible-accordion/tree/master/CHANGELOG.md">Changelog</a>',vt=h(),Tt=m("h2"),Tt.textContent="License",Ct=h(),At=m("p"),At.innerHTML='<a href="https://github.com/metonym/svelte-svelte-accessible-accordion/tree/master/LICENSE">MIT</a>',x(d,"class","language-bash"),x(v,"class","code-fence"),x(C,"class","language-svelte"),x(C,"data-svelte",""),x(_,"class","code-fence"),x(E,"class","language-svelte"),x(E,"data-svelte",""),x(N,"class","code-fence"),x(U,"class","language-svelte"),x(U,"data-svelte",""),x(Y,"class","code-fence"),x(tt,"class","language-svelte"),x(tt,"data-svelte",""),x(n,"class","markdown-body")},m(t,g){$(t,n,g),f(n,e),f(n,s),f(n,a),f(n,o),f(n,c),f(n,l),f(n,i),f(n,p),f(n,r),f(n,u),f(n,d),d.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-accessible-accordion\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-accessible-accordion\n',f(n,k),f(n,b),f(n,y),f(n,v),F(T,v,null),f(n,C),C.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> Accordion<span class="token punctuation">,</span> <span class="token punctuation">{</span> AccordionItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-accessible-accordion"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>\n',f(n,A),f(n,w),f(n,M),f(n,I),f(n,L),f(n,_),F(H,_,null),f(n,E),E.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name">multiselectable</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>\n',f(n,q),f(n,O),f(n,S),f(n,j),f(n,P),f(n,N),F(D,N,null),f(n,U),U.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span> <span class="token attr-name">expanded</span><span class="token punctuation">></span></span>Content 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n',f(n,z),f(n,W),f(n,J),f(n,K),f(n,Q),f(n,Y),F(Z,Y,null),f(n,tt),tt.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">buttonClass</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gray-100<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n',f(n,nt),f(n,st),f(n,at),f(n,ot),f(n,lt),f(n,it),f(n,dt),f(n,ft),f(n,$t),f(n,gt),f(n,mt),f(n,kt),f(n,ht),f(n,bt),f(n,xt),f(n,yt),f(n,vt),f(n,Tt),f(n,Ct),f(n,At),wt=!0},p(t,[n]){const e={};1&n&&(e.$$scope={dirty:n,ctx:t}),T.$set(e);const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),H.$set(s);const a={};1&n&&(a.$$scope={dirty:n,ctx:t}),D.$set(a);const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),Z.$set(o)},i(t){wt||(B(T.$$.fragment,t),B(H.$$.fragment,t),B(D.$$.fragment,t),B(Z.$$.fragment,t),wt=!0)},o(t){R(T.$$.fragment,t),R(H.$$.fragment,t),R(D.$$.fragment,t),R(Z.$$.fragment,t),wt=!1},d(t){t&&g(n),G(T),G(H),G(D),G(Z)}}}return new class extends W{constructor(t){super(),z(this,t,null,dt,c,{})}}({target:document.body})}();
