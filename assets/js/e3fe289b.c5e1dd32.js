"use strict";(self.webpackChunkproject_temporal=self.webpackChunkproject_temporal||[]).push([[454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(h,c(c({ref:t},p),{},{components:r})):o.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1},c="Chat bot",i={unversionedId:"project-idea/chat-bot",id:"project-idea/chat-bot",title:"Chat bot",description:"A Twitch bot using audio only commands from the streamer could allow the streamer to control certain aspects of their stream without needing to use their keyboard or mouse. This could be useful for streamers who want to keep their hands free for other tasks, such as playing a game or drawing.",source:"@site/docs/project-idea/chat-bot.md",sourceDirName:"project-idea",slug:"/project-idea/chat-bot",permalink:"/project-temporal/docs/project-idea/chat-bot",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Project Ideas",permalink:"/project-temporal/docs/category/project-ideas"},next:{title:"Event Bot",permalink:"/project-temporal/docs/project-idea/event-bot"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"chat-bot"},"Chat bot"),(0,n.kt)("p",null,"A Twitch bot using audio only commands from the streamer could allow the streamer to control certain aspects of their stream without needing to use their keyboard or mouse. This could be useful for streamers who want to keep their hands free for other tasks, such as playing a game or drawing."),(0,n.kt)("p",null,"One possible implementation of this bot would be to use vocal range matching to match the voice of the streamer. This could involve analyzing the streamer's voice in real-time and comparing it to a pre-recorded sample of their voice. If a match is detected, the bot could then execute the corresponding command."),(0,n.kt)("p",null,'For example, the streamer could say "start music" or "stop music" to control the background music during the stream. Or "start countdown" to start a countdown timer on the screen.'),(0,n.kt)("p",null,"Another example could be using different pitch and tone of the streamer's voice to control the volume of the stream or other settings."))}u.isMDXComponent=!0}}]);