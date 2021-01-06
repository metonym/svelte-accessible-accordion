var app=function(){"use strict";function n(){}function t(n,t){for(const s in t)n[s]=t[s];return n}function s(n){return n()}function a(){return Object.create(null)}function e(n){n.forEach(s)}function o(n){return"function"==typeof n}function c(n,t){return n!=n?t==t:n!==t}function p(n,t,s,a){if(n){const e=l(n,t,s,a);return n[0](e)}}function l(n,s,a,e){return n[1]&&e?t(a.ctx.slice(),n[1](e(s))):a.ctx}function i(n,t,s,a,e,o,c){const p=function(n,t,s,a){if(n[2]&&a){const e=n[2](a(s));if(void 0===t.dirty)return e;if("object"==typeof e){const n=[],s=Math.max(t.dirty.length,e.length);for(let a=0;a<s;a+=1)n[a]=t.dirty[a]|e[a];return n}return t.dirty|e}return t.dirty}(t,a,e,o);if(p){const e=l(t,s,a,c);n.p(e,p)}}function r(n){const t={};for(const s in n)"$"!==s[0]&&(t[s]=n[s]);return t}function u(n,t){const s={};t=new Set(t);for(const a in n)t.has(a)||"$"===a[0]||(s[a]=n[a]);return s}function d(n,t){n.appendChild(t)}function f(n,t,s){n.insertBefore(t,s||null)}function $(n){n.parentNode.removeChild(n)}function k(n){return document.createElement(n)}function g(n){return document.createTextNode(n)}function m(){return g(" ")}function h(n,t,s,a){return n.addEventListener(t,s,a),()=>n.removeEventListener(t,s,a)}function x(n,t,s){null==s?n.removeAttribute(t):n.getAttribute(t)!==s&&n.setAttribute(t,s)}function y(n,t){const s=Object.getOwnPropertyDescriptors(n.__proto__);for(const a in t)null==t[a]?n.removeAttribute(a):"style"===a?n.style.cssText=t[a]:"__value"===a?n.value=n[a]=t[a]:s[a]&&s[a].set?n[a]=t[a]:x(n,a,t[a])}let b;function v(n){b=n}function T(){if(!b)throw new Error("Function called outside component initialization");return b}const A=[],C=[],w=[],I=[],M=Promise.resolve();let L=!1;function _(n){w.push(n)}let H=!1;const E=new Set;function S(){if(!H){H=!0;do{for(let n=0;n<A.length;n+=1){const t=A[n];v(t),q(t.$$)}for(v(null),A.length=0;C.length;)C.pop()();for(let n=0;n<w.length;n+=1){const t=w[n];E.has(t)||(E.add(t),t())}w.length=0}while(A.length);for(;I.length;)I.pop()();L=!1,H=!1,E.clear()}}function q(n){if(null!==n.fragment){n.update(),e(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(_)}}const O=new Set;function j(n,t){n&&n.i&&(O.delete(n),n.i(t))}function P(n,t,s,a){if(n&&n.o){if(O.has(n))return;O.add(n),undefined.c.push((()=>{O.delete(n),a&&(s&&n.d(1),a())})),n.o(t)}}function N(n,t){const s={},a={},e={$$scope:1};let o=n.length;for(;o--;){const c=n[o],p=t[o];if(p){for(const n in c)n in p||(a[n]=1);for(const n in p)e[n]||(s[n]=p[n],e[n]=1);n[o]=p}else for(const n in c)e[n]=1}for(const n in a)n in s||(s[n]=void 0);return s}function B(n){n&&n.c()}function R(n,t,a){const{fragment:c,on_mount:p,on_destroy:l,after_update:i}=n.$$;c&&c.m(t,a),_((()=>{const t=p.map(s).filter(o);l?l.push(...t):e(t),n.$$.on_mount=[]})),i.forEach(_)}function D(n,t){const s=n.$$;null!==s.fragment&&(e(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function G(n,t){-1===n.$$.dirty[0]&&(A.push(n),L||(L=!0,M.then(S)),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function U(t,s,o,c,p,l,i=[-1]){const r=b;v(t);const u=s.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:n,not_equal:p,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:[]),callbacks:a(),dirty:i,skip_bound:!1};let f=!1;if(d.ctx=o?o(t,u,((n,s,...a)=>{const e=a.length?a[0]:s;return d.ctx&&p(d.ctx[n],d.ctx[n]=e)&&(!d.skip_bound&&d.bound[n]&&d.bound[n](e),f&&G(t,n)),s})):[],d.update(),f=!0,e(d.before_update),d.fragment=!!c&&c(d.ctx),s.target){if(s.hydrate){const n=function(n){return Array.from(n.childNodes)}(s.target);d.fragment&&d.fragment.l(n),n.forEach($)}else d.fragment&&d.fragment.c();s.intro&&j(t.$$.fragment),R(t,s.target,s.anchor),S()}v(r)}class V{$destroy(){D(this,1),this.$destroy=n}$on(n,t){const s=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return s.push(t),()=>{const n=s.indexOf(t);-1!==n&&s.splice(n,1)}}$set(n){var t;this.$$set&&(t=n,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const F=[];function z(n){let s,a;const e=n[3].default,o=p(e,n,n[2],null);let c=[{"data-accordion":""},n[0]],l={};for(let n=0;n<c.length;n+=1)l=t(l,c[n]);return{c(){s=k("ul"),o&&o.c(),y(s,l)},m(n,t){f(n,s,t),o&&o.m(s,null),a=!0},p(n,[t]){o&&o.p&&4&t&&i(o,e,n,n[2],t,null,null),y(s,l=N(c,[{"data-accordion":""},1&t&&n[0]]))},i(n){a||(j(o,n),a=!0)},o(n){P(o,n),a=!1},d(n){n&&$(s),o&&o.d(n)}}}function W(s,a,e){const o=["multiselect"];let c=u(a,o),{$$slots:p={},$$scope:l}=a,{multiselect:i=!1}=a;const d=function(t,s=n){let a;const e=[];function o(n){if(o=n,((s=t)!=s?o==o:s!==o||s&&"object"==typeof s||"function"==typeof s)&&(t=n,a)){const n=!F.length;for(let n=0;n<e.length;n+=1){const s=e[n];s[1](),F.push(s,t)}if(n){for(let n=0;n<F.length;n+=2)F[n][0](F[n+1]);F.length=0}}var s,o}return{set:o,update:function(n){o(n(t))},subscribe:function(c,p=n){const l=[c,p];return e.push(l),1===e.length&&(a=s(o)||n),c(t),()=>{const n=e.indexOf(l);-1!==n&&e.splice(n,1),0===e.length&&(a(),a=null)}}}}({});var f,$;return f="Accordion",$={items:d,add:n=>{d.update((t=>({...t,[n.id]:n.expanded})))},remove:n=>{d.update((t=>{const s={...t};return delete s[n.id],s}))},toggle:n=>{d.update((t=>(i||Object.keys(t).forEach((n=>t[n]=!1)),{...t,[n.id]:n.expanded})))}},T().$$.context.set(f,$),s.$$set=n=>{a=t(t({},a),r(n)),e(0,c=u(a,o)),"multiselect"in n&&e(1,i=n.multiselect),"$$scope"in n&&e(2,l=n.$$scope)},[c,i,l,p]}class J extends V{constructor(n){super(),U(this,n,W,z,c,{multiselect:1})}}const K=n=>({}),Q=n=>({});function X(n){let s,a,o,c,l,r,u,b;const v=n[9].title,T=p(v,n,n[8],Q),A=T||function(n){let t;return{c(){t=g(n[3])},m(n,s){f(n,t,s)},p(n,s){8&s&&function(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}(t,n[3])},d(n){n&&$(t)}}}(n),C=n[9].default,w=p(C,n,n[8],null);let I=[{"data-accordion-item":""},n[7]],M={};for(let n=0;n<I.length;n+=1)M=t(M,I[n]);return{c(){s=k("li"),a=k("button"),A&&A.c(),o=m(),c=k("div"),w&&w.c(),x(a,"aria-expanded",n[0]),x(a,"aria-controls",n[2]),x(a,"aria-disabled",n[4]),a.disabled=n[4],x(a,"id",n[5]),x(c,"role","region"),x(c,"id",n[2]),x(c,"aria-labelledby",n[5]),c.hidden=l=!n[0],y(s,M)},m(t,e){f(t,s,e),d(s,a),A&&A.m(a,null),n[11](a),d(s,o),d(s,c),w&&w.m(c,null),r=!0,u||(b=[h(a,"click",n[10]),h(a,"click",n[12])],u=!0)},p(n,[t]){T?T.p&&256&t&&i(T,v,n,n[8],t,K,Q):A&&A.p&&8&t&&A.p(n,t),(!r||1&t)&&x(a,"aria-expanded",n[0]),(!r||4&t)&&x(a,"aria-controls",n[2]),(!r||16&t)&&x(a,"aria-disabled",n[4]),(!r||16&t)&&(a.disabled=n[4]),(!r||32&t)&&x(a,"id",n[5]),w&&w.p&&256&t&&i(w,C,n,n[8],t,null,null),(!r||4&t)&&x(c,"id",n[2]),(!r||32&t)&&x(c,"aria-labelledby",n[5]),(!r||1&t&&l!==(l=!n[0]))&&(c.hidden=l),y(s,M=N(I,[{"data-accordion-item":""},128&t&&n[7]]))},i(n){r||(j(A,n),j(w,n),r=!0)},o(n){P(A,n),P(w,n),r=!1},d(t){t&&$(s),A&&A.d(t),n[11](null),w&&w.d(t),u=!1,e(b)}}}function Y(n,s,a){let e;const o=["id","title","expanded","disabled","ref"];let c=u(s,o),{$$slots:p={},$$scope:l}=s,{id:i="item"+Math.random().toString(36)}=s,{title:d="Title"}=s,{expanded:f=!1}=s,{disabled:$=!1}=s,{ref:k=null}=s;const g=(m="Accordion",T().$$.context.get(m));var m;let h;var x;x=()=>{g&&g.remove({id:i}),h&&h()},T().$$.on_destroy.push(x);return n.$$set=n=>{s=t(t({},s),r(n)),a(7,c=u(s,o)),"id"in n&&a(2,i=n.id),"title"in n&&a(3,d=n.title),"expanded"in n&&a(0,f=n.expanded),"disabled"in n&&a(4,$=n.disabled),"ref"in n&&a(1,k=n.ref),"$$scope"in n&&a(8,l=n.$$scope)},n.$$.update=()=>{4&n.$$.dirty&&a(5,e=`button-${i}`),5&n.$$.dirty&&g&&(g.add({id:i,expanded:f}),h=g.items.subscribe((n=>{a(0,f=n[i])})))},[f,k,i,d,$,e,g,c,l,p,function(t){!function(n,t){const s=n.$$.callbacks[t.type];s&&s.slice().forEach((n=>n(t)))}(n,t)},function(n){C[n?"unshift":"push"]((()=>{k=n,a(1,k)}))},()=>{g&&(g.toggle({id:i,expanded:!f}),f&&k.getBoundingClientRect().top<0&&k.scrollIntoView())}]}class Z extends V{constructor(n){super(),U(this,n,Y,X,c,{id:2,title:3,expanded:0,disabled:4,ref:1})}}function nn(n){let t;return{c(){t=g("Content 1")},m(n,s){f(n,t,s)},d(n){n&&$(t)}}}function tn(n){let t;return{c(){t=g("Content 2")},m(n,s){f(n,t,s)},d(n){n&&$(t)}}}function sn(n){let t;return{c(){t=g("Content 2")},m(n,s){f(n,t,s)},d(n){n&&$(t)}}}function an(n){let t,s,a,e,o,c,p;return t=new Z({props:{title:"Title 1",$$slots:{default:[nn]},$$scope:{ctx:n}}}),a=new Z({props:{title:"Title 2",$$slots:{default:[tn]},$$scope:{ctx:n}}}),o=new Z({props:{title:"Title 3",$$slots:{default:[sn]},$$scope:{ctx:n}}}),{c(){B(t.$$.fragment),s=m(),B(a.$$.fragment),e=m(),B(o.$$.fragment),c=m()},m(n,l){R(t,n,l),f(n,s,l),R(a,n,l),f(n,e,l),R(o,n,l),f(n,c,l),p=!0},p(n,s){const e={};1&s&&(e.$$scope={dirty:s,ctx:n}),t.$set(e);const c={};1&s&&(c.$$scope={dirty:s,ctx:n}),a.$set(c);const p={};1&s&&(p.$$scope={dirty:s,ctx:n}),o.$set(p)},i(n){p||(j(t.$$.fragment,n),j(a.$$.fragment,n),j(o.$$.fragment,n),p=!0)},o(n){P(t.$$.fragment,n),P(a.$$.fragment,n),P(o.$$.fragment,n),p=!1},d(n){D(t,n),n&&$(s),D(a,n),n&&$(e),D(o,n),n&&$(c)}}}function en(n){let t;return{c(){t=g("Content 1")},m(n,s){f(n,t,s)},d(n){n&&$(t)}}}function on(n){let t;return{c(){t=g("Content 2")},m(n,s){f(n,t,s)},d(n){n&&$(t)}}}function cn(n){let t;return{c(){t=g("Content 2")},m(n,s){f(n,t,s)},d(n){n&&$(t)}}}function pn(n){let t,s,a,e,o,c,p;return t=new Z({props:{title:"Title 1",$$slots:{default:[en]},$$scope:{ctx:n}}}),a=new Z({props:{title:"Title 2",$$slots:{default:[on]},$$scope:{ctx:n}}}),o=new Z({props:{title:"Title 3",$$slots:{default:[cn]},$$scope:{ctx:n}}}),{c(){B(t.$$.fragment),s=m(),B(a.$$.fragment),e=m(),B(o.$$.fragment),c=m()},m(n,l){R(t,n,l),f(n,s,l),R(a,n,l),f(n,e,l),R(o,n,l),f(n,c,l),p=!0},p(n,s){const e={};1&s&&(e.$$scope={dirty:s,ctx:n}),t.$set(e);const c={};1&s&&(c.$$scope={dirty:s,ctx:n}),a.$set(c);const p={};1&s&&(p.$$scope={dirty:s,ctx:n}),o.$set(p)},i(n){p||(j(t.$$.fragment,n),j(a.$$.fragment,n),j(o.$$.fragment,n),p=!0)},o(n){P(t.$$.fragment,n),P(a.$$.fragment,n),P(o.$$.fragment,n),p=!1},d(n){D(t,n),n&&$(s),D(a,n),n&&$(e),D(o,n),n&&$(c)}}}function ln(n){let t;return{c(){t=g("Content 1")},m(n,s){f(n,t,s)},d(n){n&&$(t)}}}function rn(n){let t;return{c(){t=g("Content 2")},m(n,s){f(n,t,s)},d(n){n&&$(t)}}}function un(n){let t;return{c(){t=g("Content 2")},m(n,s){f(n,t,s)},d(n){n&&$(t)}}}function dn(n){let t,s,a,e,o,c,p;return t=new Z({props:{expanded:!0,title:"Title 1",$$slots:{default:[ln]},$$scope:{ctx:n}}}),a=new Z({props:{expanded:!0,title:"Title 2",$$slots:{default:[rn]},$$scope:{ctx:n}}}),o=new Z({props:{expanded:!0,title:"Title 3",$$slots:{default:[un]},$$scope:{ctx:n}}}),{c(){B(t.$$.fragment),s=m(),B(a.$$.fragment),e=m(),B(o.$$.fragment),c=m()},m(n,l){R(t,n,l),f(n,s,l),R(a,n,l),f(n,e,l),R(o,n,l),f(n,c,l),p=!0},p(n,s){const e={};1&s&&(e.$$scope={dirty:s,ctx:n}),t.$set(e);const c={};1&s&&(c.$$scope={dirty:s,ctx:n}),a.$set(c);const p={};1&s&&(p.$$scope={dirty:s,ctx:n}),o.$set(p)},i(n){p||(j(t.$$.fragment,n),j(a.$$.fragment,n),j(o.$$.fragment,n),p=!0)},o(n){P(t.$$.fragment,n),P(a.$$.fragment,n),P(o.$$.fragment,n),p=!1},d(n){D(t,n),n&&$(s),D(a,n),n&&$(e),D(o,n),n&&$(c)}}}function fn(n){let t,s,a,e,o,c,p,l,i,r,u,g,h,y,b,v,T,A,C,w,I,M,L,_,H,E,S,q,O,N,G,U,V,F,z,W,K,Q,X,Y,Z,nn,tn,sn,en,on,cn,ln,rn,un,fn,$n,kn,gn,mn,hn,xn,yn,bn,vn,Tn,An,Cn,wn,In,Mn,Ln,_n,Hn,En,Sn,qn,On,jn,Pn,Nn,Bn,Rn;return Y=new J({props:{$$slots:{default:[an]},$$scope:{ctx:n}}}),ln=new J({props:{multiselect:!0,$$slots:{default:[pn]},$$scope:{ctx:n}}}),hn=new J({props:{$$slots:{default:[dn]},$$scope:{ctx:n}}}),{c(){t=k("main"),s=k("h1"),s.textContent="svelte-accessible-accordion",a=m(),e=k("p"),e.innerHTML='<a href="https://npmjs.com/package/svelte-accessible-accordion"><img src="https://img.shields.io/npm/v/svelte-accessible-accordion.svg?style=for-the-badge&amp;color=%23ff3e00" alt="NPM"/></a>',o=m(),c=k("blockquote"),c.innerHTML="<p>Accessible accordion component for Svelte.</p>",p=m(),l=k("p"),l.innerHTML='This Svelte component implements <a href="https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html">WAI-ARIA design guidelines for an Accordion</a>.',i=m(),r=k("p"),r.innerHTML="<strong>Note</strong>: This component is <em>unstyled</em> by default.",u=m(),g=k("p"),g.innerHTML='Try it in the <a href="https://svelte.dev/repl/85be3a105c3f4fe0892150380914be96?version=3.30.0">Svelte REPL</a>.',h=m(),y=k("p"),y.innerHTML='<a href="https://github.com/metonym/svelte-accessible-accordion.git">GitHub repo</a>',b=m(),v=k("hr"),T=m(),A=k("p"),A.innerHTML="<strong>Table of Contents</strong>",C=k("ul"),C.innerHTML='<li><a href="#install">Install</a></li> \n<li><a href="#styling">Styling</a></li> \n<li><a href="#usage">Usage</a></li> \n<ul><li><a href="#basic">Basic</a></li> \n<li><a href="#multiselect">Multiselect</a></li> \n<li><a href="#expanded-items">Expanded items</a></li> \n</ul><li><a href="#api">API</a></li> \n<ul><li><a href="#accordion">Accordion</a></li> \n<li><a href="#accordionitem">AccordionItem</a></li> \n</ul><li><a href="#license">License</a></li>',w=m(),I=k("h2"),I.textContent="Install",M=m(),L=k("pre"),_=m(),H=k("h2"),H.textContent="Styling",E=m(),S=k("p"),S.innerHTML="Style the component by targeting the <code>[data-accordion]</code> and <code>[data-accordion-item]</code> attributes.",q=m(),O=k("pre"),N=m(),G=k("p"),G.textContent="The semantic element structure resembles the following:",U=m(),V=k("pre"),V.innerHTML='<code class="language-yml">- ul [data-accordion] # Accordion\n  - li [data-accordion-item] # AccordionItem\n    - button\n    - [role=&quot;region&quot;]</code>',F=m(),z=k("h2"),z.textContent="Usage",W=m(),K=k("h3"),K.textContent="Basic",Q=m(),X=k("div"),B(Y.$$.fragment),Z=k("pre"),nn=m(),tn=k("h3"),tn.textContent="Multiselect",sn=m(),en=k("p"),en.innerHTML="By default, only one accordion item can be expanded at one time. Set <code>multiselect</code> to allow multi-item expansion.",on=m(),cn=k("div"),B(ln.$$.fragment),rn=k("pre"),un=m(),fn=k("h3"),fn.textContent="Expanded items",$n=m(),kn=k("p"),kn.innerHTML="Use the <code>expanded</code> prop to expand an accordion item.",gn=m(),mn=k("div"),B(hn.$$.fragment),xn=k("pre"),yn=m(),bn=k("h2"),bn.textContent="API",vn=m(),Tn=k("h3"),Tn.textContent="Accordion",An=m(),Cn=k("table"),Cn.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">multiselect</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr></tbody>',wn=m(),In=k("h3"),In.textContent="AccordionItem",Mn=m(),Ln=k("table"),Ln.innerHTML='<thead><tr><th style="text-align:left">Prop name</th> \n<th style="text-align:left">Value</th></tr></thead> \n<tbody><tr><td style="text-align:left">id</td> \n<td style="text-align:left"><code>string</code> (default: <code>&quot;item&quot; + Math.random().toString(36)&quot;</code>)</td></tr> \n<tr><td style="text-align:left">title</td> \n<td style="text-align:left"><code>string</code> or <code>slot:title</code> (default: <code>&quot;Title&quot;</code>)</td></tr> \n<tr><td style="text-align:left">expanded</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr> \n<tr><td style="text-align:left">disabled</td> \n<td style="text-align:left"><code>boolean</code> (default: <code>false</code>)</td></tr></tbody>',_n=m(),Hn=k("h4"),Hn.textContent="Forwarded events",En=m(),Sn=k("ul"),Sn.innerHTML="<li>on:click</li>",qn=m(),On=k("h2"),On.innerHTML='<a href="https://github.com/metonym/svelte-accessible-accordion/tree/master/CHANGELOG.md">Changelog</a>',jn=m(),Pn=k("h2"),Pn.textContent="License",Nn=m(),Bn=k("p"),Bn.innerHTML='<a href="https://github.com/metonym/svelte-accessible-accordion/tree/master/LICENSE">MIT</a>',x(s,"id","svelte-accessible-accordion"),x(I,"id","install"),x(L,"class","language-bash"),x(H,"id","styling"),x(O,"class","language-css"),x(z,"id","usage"),x(K,"id","basic"),x(X,"class","code-fence"),x(Z,"class","language-svelte"),x(Z,"data-svelte",""),x(tn,"id","multiselect"),x(cn,"class","code-fence"),x(rn,"class","language-svelte"),x(rn,"data-svelte",""),x(fn,"id","expanded-items"),x(mn,"class","code-fence"),x(xn,"class","language-svelte"),x(xn,"data-svelte",""),x(bn,"id","api"),x(Tn,"id","accordion"),x(In,"id","accordionitem"),x(Hn,"id","forwarded-events"),x(On,"id","changelog"),x(Pn,"id","license"),x(t,"class","markdown-body")},m(n,$){f(n,t,$),d(t,s),d(t,a),d(t,e),d(t,o),d(t,c),d(t,p),d(t,l),d(t,i),d(t,r),d(t,u),d(t,g),d(t,h),d(t,y),d(t,b),d(t,v),d(t,T),d(t,A),d(t,C),d(t,w),d(t,I),d(t,M),d(t,L),L.innerHTML='<span class="token function">yarn</span> <span class="token function">add</span> -D svelte-accessible-accordion\n<span class="token comment"># OR</span>\n<span class="token function">npm</span> i -D svelte-accessible-accordion\n',d(t,_),d(t,H),d(t,E),d(t,S),d(t,q),d(t,O),O.innerHTML='<span class="token selector">[data-accordion]</span> <span class="token punctuation">{</span>\n  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">[data-accordion-item] button</span> <span class="token punctuation">{</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #e0e0e0<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n  <span class="token property">line-height</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>\n  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 0.5rem 1rem<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">[data-accordion-item] [role="region"]</span> <span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n',d(t,N),d(t,G),d(t,U),d(t,V),d(t,F),d(t,z),d(t,W),d(t,K),d(t,Q),d(t,X),R(Y,X,null),d(t,Z),Z.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> Accordion<span class="token punctuation">,</span> AccordionItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"svelte-accessible-accordion"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>\n',d(t,nn),d(t,tn),d(t,sn),d(t,en),d(t,on),d(t,cn),R(ln,cn,null),d(t,rn),rn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span> <span class="token attr-name">multiselect</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>\n',d(t,un),d(t,fn),d(t,$n),d(t,kn),d(t,gn),d(t,mn),R(hn,mn,null),d(t,xn),xn.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Accordion</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">expanded</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">expanded</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AccordionItem</span> <span class="token attr-name">expanded</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Title 3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Content 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AccordionItem</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Accordion</span><span class="token punctuation">></span></span>\n',d(t,yn),d(t,bn),d(t,vn),d(t,Tn),d(t,An),d(t,Cn),d(t,wn),d(t,In),d(t,Mn),d(t,Ln),d(t,_n),d(t,Hn),d(t,En),d(t,Sn),d(t,qn),d(t,On),d(t,jn),d(t,Pn),d(t,Nn),d(t,Bn),Rn=!0},p(n,[t]){const s={};1&t&&(s.$$scope={dirty:t,ctx:n}),Y.$set(s);const a={};1&t&&(a.$$scope={dirty:t,ctx:n}),ln.$set(a);const e={};1&t&&(e.$$scope={dirty:t,ctx:n}),hn.$set(e)},i(n){Rn||(j(Y.$$.fragment,n),j(ln.$$.fragment,n),j(hn.$$.fragment,n),Rn=!0)},o(n){P(Y.$$.fragment,n),P(ln.$$.fragment,n),P(hn.$$.fragment,n),Rn=!1},d(n){n&&$(t),D(Y),D(ln),D(hn)}}}return new class extends V{constructor(n){super(),U(this,n,null,fn,c,{})}}({target:document.body})}();
