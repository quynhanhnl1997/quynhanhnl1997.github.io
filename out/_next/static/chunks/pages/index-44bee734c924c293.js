(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2589)}])},2606:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(5893);function i(e){let{children:t}=e;return(0,s.jsx)("div",{className:"container mx-auto px-6 mt-6",children:t})}},5796:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(5893),i=n(8420),r=n(6159);function l(e){let{dateString:t}=e,n=(0,i.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,r.Z)(n,"LLLL	d, yyyy")})}},8861:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var s=n(5893),i=n(9008),r=n.n(i);let l=()=>(0,s.jsxs)(r(),{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("meta",{name:"theme-color",content:"#000"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,s.jsx)("meta",{name:"description",content:"A twinkle star in the sky."})]}),a=e=>{let{children:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{}),(0,s.jsx)("div",{className:"min-h-screen",children:(0,s.jsx)("main",{children:t})})]})};var c=a},1093:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var s=n(5893),i=n(1664),r=n.n(i),l=n(7294);function a(e){let{content:t,query:n,isTitle:s}=e,i=t.match(RegExp(n,"i")),[r,a]=(0,l.useState)({isBeginString:!1,firstStringDisplay:"",resultStringDisplay:"",isLastString:!1,lastStringDisplay:""});return(0,l.useEffect)(()=>{if(i&&void 0!==i){let e=(null==i?void 0:i.index)!==void 0?i.index:-1,r=e>=0?e+n.length:-1;if(r>=0&&!s){let l=e-60>=0?e-60:0,c=r+60<t.length?r+60:t.length;a({isBeginString:0==l,firstStringDisplay:t.substring(l,e),resultStringDisplay:i[0],isLastString:c==t.length,lastStringDisplay:t.substring(r,c)})}else a({isBeginString:!0,firstStringDisplay:t.substring(0,e),resultStringDisplay:i[0],isLastString:!0,lastStringDisplay:t.substring(r,t.length)})}else s?a({isBeginString:!0,firstStringDisplay:t,resultStringDisplay:"",isLastString:!0,lastStringDisplay:""}):a({isBeginString:!0,firstStringDisplay:t.substring(0,120),resultStringDisplay:"",isLastString:120>t.length,lastStringDisplay:""})},[n]),r}function c(e){let{post:t,query:n}=e,i=a({content:t.title,query:n,isTitle:!0}),l=a({content:t.content,query:n,isTitle:!1});return(0,s.jsx)("div",{className:"p-5 hover:text-pink post_result",children:(0,s.jsxs)(r(),{as:"/posts/".concat(t.slug),href:"/posts/[slug]",children:[(0,s.jsxs)("h1",{className:"font-semibold",children:[i.firstStringDisplay,(0,s.jsx)("span",{className:"bg-pink",children:i.resultStringDisplay}),i.lastStringDisplay]}),(0,s.jsxs)("p",{children:[!1==l.isBeginString?"...":null,l.firstStringDisplay,(0,s.jsx)("span",{className:"bg-pink",children:l.resultStringDisplay}),l.lastStringDisplay,!1==l.isLastString?"...":null]})]})})}function o(e){let{posts:t,query:n}=e;return(0,s.jsx)("div",{className:"p-2",children:t.map(e=>(0,s.jsx)(c,{post:e,query:n},e.slug))})}function u(e){let{show:t,onClose:n,nodeRef:i,allPosts:r}=e,[a,c]=(0,l.useState)(""),[u,d]=(0,l.useState)([]),x=(0,l.useCallback)(e=>{let t=e.target.value,n=[];c(t),0!=t.length&&(r.forEach(e=>{(e.title.toLowerCase().includes(t.toLowerCase())||e.content.toLowerCase().includes(t.toLowerCase()))&&n.push(e)}),d(n))},[r]);return(0,l.useEffect)(()=>{let e=e=>{"Escape"==e.key&&n()};return t?document.body.style.overflow="hidden":document.body.style.overflow="unset",window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t,n]),(0,s.jsx)(s.Fragment,{children:t?(0,s.jsx)("div",{className:"fixed inset-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden h-modal h-screen flex items-center justify-center bg-slate-500 bg-opacity-25 backdrop-blur-sm",children:(0,s.jsxs)("div",{className:"relative bg-white w-full max-w-2xl rounded-lg max-h-full overflow-y-hidden flex flex-col",ref:i,children:[(0,s.jsx)("div",{className:"flex items-start justify-between",children:(0,s.jsx)("form",{className:"w-full",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none",children:(0,s.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),(0,s.jsx)("input",{autoFocus:!0,type:"search",className:"block w-full p-5 pl-14 text-base text-gray-900 rounded-t-lg focus:outline-transparent",placeholder:"Search Blogs...",value:a,onChange:x})]})})}),""!=a&&u.length>0?(0,s.jsx)("div",{className:"overflow-y-auto h-fit border border-white border-t-pink",children:(0,s.jsx)(o,{posts:u,query:a})}):null]})}):null})}function d(e){let{allPosts:t}=e,[n,i]=(0,l.useState)(!1),{triggerRef:a,nodeRef:c}=function(e){let t=(0,l.createRef)(),n=(0,l.createRef)(),s=s=>{t.current&&t.current.contains(s.target)||!n.current||n.current.contains(s.target)||e()};return(0,l.useEffect)(()=>(window.addEventListener("click",s),()=>{window.removeEventListener("click",s)})),{triggerRef:t,nodeRef:n}}(()=>i(!1));return(0,s.jsxs)("div",{className:"container flex flex-wrap items-center justify-between mx-auto",children:[(0,s.jsx)("h1",{className:"flex items-center px-6 py-4 font-black text-2xl md:text-3xl",children:(0,s.jsx)(r(),{href:"/",children:"thi nguyen"})}),(0,s.jsxs)("ul",{className:"flex flex-row px-6",children:[(0,s.jsx)("li",{className:"block px-6 pt-1 m-auto",children:(0,s.jsx)("button",{onClick:()=>i(!0),ref:a,children:(0,s.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"search",className:"w-4 bg-white transition duration-300 hover:invert",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,s.jsx)("path",{fill:"currentColor",d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})})})}),(0,s.jsx)("li",{className:"block text-xl transition duration-300 hover:bg-black hover:text-white",children:(0,s.jsx)(r(),{href:"/about",children:"about me"})})]}),(0,s.jsx)(u,{allPosts:t,nodeRef:c,onClose:()=>i(!1),show:n})]})}},2589:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return g}});var s=n(5893),i=n(1093),r=n(1664),l=n.n(r),a=n(5796);function c(e){let{title:t,date:n,excerpt:i,slug:r}=e;return(0,s.jsx)("div",{className:"break-inside-avoid-column transition duration-300 bg-black text-white p-6 mb-4 hover:text-black hover:bg-pink rounded-lg",children:(0,s.jsxs)(l(),{as:"/posts/".concat(r),href:"/posts/[slug]",children:[(0,s.jsx)("h2",{className:"font-bold text-3xl mb-2",children:t}),(0,s.jsx)("div",{className:"italic text-sm",children:(0,s.jsx)(a.Z,{dateString:n})}),(0,s.jsx)("p",{className:"mt-2",children:i})]})})}function o(e){let{posts:t}=e;return(0,s.jsx)("div",{className:"columns-1 md:columns-3 my-10",children:t.map(e=>(0,s.jsx)(c,{title:e.title,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug))})}var u=n(8861),d=n(2606),x=n(9008),h=n.n(x),f=!0;function g(e){let{allPosts:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(u.Z,{children:[(0,s.jsx)(h(),{children:(0,s.jsx)("title",{children:"Home | Thi Nguyen"})}),(0,s.jsx)(i.Z,{allPosts:t}),(0,s.jsx)(d.Z,{children:t.length>0&&(0,s.jsx)(o,{posts:t})})]})})}}},function(e){e.O(0,[640,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);