"use strict";(self.webpackChunkproject_temporal=self.webpackChunkproject_temporal||[]).push([[9540],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,b=u["".concat(i,".").concat(m)]||u[m]||g[m]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5037:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:3},l="Create a Blog Post",s={permalink:"/project-temporal/blog/tutorial-basics/create-a-blog-post",source:"@site/blog/tutorial-basics/create-a-blog-post.md",title:"Create a Blog Post",description:"Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...",date:"2023-01-16T09:35:19.000Z",formattedDate:"January 16, 2023",tags:[],readingTime:.475,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:3},prevItem:{title:"Congratulations!",permalink:"/project-temporal/blog/tutorial-basics/congratulations"},nextItem:{title:"Create a Document",permalink:"/project-temporal/blog/tutorial-basics/create-a-document"}},i={authorsImageUrls:[]},p=[{value:"Create your first Post",id:"create-your-first-post",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docusaurus creates a ",(0,a.kt)("strong",{parentName:"p"},"page for each blog post"),", but also a ",(0,a.kt)("strong",{parentName:"p"},"blog index page"),", a ",(0,a.kt)("strong",{parentName:"p"},"tag system"),", an ",(0,a.kt)("strong",{parentName:"p"},"RSS")," feed..."),(0,a.kt)("h2",{id:"create-your-first-post"},"Create your first Post"),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),(0,a.kt)("p",null,"A new blog post is now available at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000/blog/greetings"},"http://localhost:3000/blog/greetings"),"."))}u.isMDXComponent=!0}}]);