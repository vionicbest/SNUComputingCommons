import{s as J,n as z,r as K}from"../chunks/scheduler.e108d1fd.js";import{S as Q,i as R,g as i,s as T,m as P,h as n,j as k,y as H,c as x,n as A,f as b,k as g,l as F,a as W,x as e,z as G}from"../chunks/index.c1d64499.js";import{b as u}from"../chunks/paths.aa75ab3c.js";function X(h){let s,a,t,f=`<div class="child logo svelte-1gttmy9"><img src="${u}/images/SNUlogo.png" alt="snu logo"/></div> <div class="child title svelte-1gttmy9"><img src="${u}/images/computingcommonslogo.png" alt="cc logo"/></div> <div class="child right svelte-1gttmy9"></div>`,I,l,r,w="<",L,M,d,S="",D,v,U=">",V,$,m,B=`<img src="${u}/images/scroll.png" alt="scroll"/>`,C,p,N=`<div class="blocks svelte-1gttmy9"><a href="${u}/files/sample.pdf" download="" class="svelte-1gttmy9"><img src="${u}/images/button1.png" alt="download pdf" class="svelte-1gttmy9"/></a> <a href="${u}/donate" class="svelte-1gttmy9"><img src="${u}/images/button2.png" alt="donate" class="svelte-1gttmy9"/></a></div> <div class="description svelte-1gttmy9"><div class="child left svelte-1gttmy9"></div> <div class="child snu svelte-1gttmy9">Computer Science Engineering, Seoul National University</div> <div class="child contact svelte-1gttmy9">문의 | (02) 886-7589 (서울대학교 컴퓨터공학부 행정실)</div></div>`,E,q;return{c(){s=i("div"),a=i("div"),t=i("div"),t.innerHTML=f,I=T(),l=i("div"),r=i("button"),L=P(w),M=T(),d=i("div"),d.innerHTML=S,D=T(),v=i("button"),V=P(U),$=T(),m=i("div"),m.innerHTML=B,C=T(),p=i("div"),p.innerHTML=N,this.h()},l(o){s=n(o,"DIV",{class:!0,style:!0});var c=k(s);a=n(c,"DIV",{class:!0});var y=k(a);t=n(y,"DIV",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-17wt0x"&&(t.innerHTML=f),I=x(y),l=n(y,"DIV",{class:!0});var _=k(l);r=n(_,"BUTTON",{class:!0});var O=k(r);L=A(O,w),O.forEach(b),M=x(_),d=n(_,"DIV",{class:!0,"data-svelte-h":!0}),H(d)!=="svelte-upvgy8"&&(d.innerHTML=S),D=x(_),v=n(_,"BUTTON",{class:!0});var j=k(v);V=A(j,U),j.forEach(b),_.forEach(b),$=x(y),m=n(y,"DIV",{class:!0,"data-svelte-h":!0}),H(m)!=="svelte-14prtq3"&&(m.innerHTML=B),y.forEach(b),C=x(c),p=n(c,"DIV",{class:!0,"data-svelte-h":!0}),H(p)!=="svelte-18tsi7k"&&(p.innerHTML=N),c.forEach(b),this.h()},h(){g(t,"class","head svelte-1gttmy9"),g(r,"class","child arrow left svelte-1gttmy9"),g(d,"class","child text svelte-1gttmy9"),g(v,"class","child arrow right svelte-1gttmy9"),g(l,"class","body svelte-1gttmy9"),g(m,"class","pbar svelte-1gttmy9"),g(a,"class","main svelte-1gttmy9"),g(p,"class","footer svelte-1gttmy9"),g(s,"class","page svelte-1gttmy9"),F(s,"background-image","url('"+h[1][h[0]]+"')")},m(o,c){W(o,s,c),e(s,a),e(a,t),e(a,I),e(a,l),e(l,r),e(r,L),e(l,M),e(l,d),e(l,D),e(l,v),e(v,V),e(a,$),e(a,m),e(s,C),e(s,p),E||(q=[G(r,"click",h[3]),G(v,"click",h[2])],E=!0)},p(o,[c]){c&1&&F(s,"background-image","url('"+o[1][o[0]]+"')")},i:z,o:z,d(o){o&&b(s),E=!1,K(q)}}}function Y(h,s,a){let t=0;const f=["/images/page1.png","/images/page2.png","/images/page3.png","/images/page4.png","/images/page5.png","/images/page6.png","/images/page7.png","/images/page8.png","/images/page9.png","/images/page10.png"];function I(){a(0,t=(t+1)%f.length),console.log(t)}function l(){t-1<=0&&a(0,t+=10),a(0,t=(t-1)%f.length),console.log(t)}return[t,f,I,l]}class st extends Q{constructor(s){super(),R(this,s,Y,X,J,{})}}export{st as component};
