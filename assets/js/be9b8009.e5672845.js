"use strict";(self.webpackChunkproject_temporal=self.webpackChunkproject_temporal||[]).push([[3],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(o),h=a,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return o?n.createElement(f,i(i({ref:t},p),{},{components:o})):n.createElement(f,i({ref:t},p))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},1954:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(7462),a=(o(7294),o(3905));const r={slug:"Samantha Bot",title:"Samantha Bot"},i=void 0,s={permalink:"/project-temporal/blog/Samantha Bot",source:"@site/blog/2023-01-15-Samantha/index.md",title:"Samantha Bot",description:'Samantha is a Twitch bot that utilizes research from Project Temporal to monitor audio from a Twitch stream for the use of profanity. It is built using ffmpeg for audio processing, golang for the backend, and python for the interface. The bot counts the number of times the word "fuck" is used in the stream\'s audio.',date:"2023-01-15T00:00:00.000Z",formattedDate:"January 15, 2023",tags:[],readingTime:3.045,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"Samantha Bot",title:"Samantha Bot"},prevItem:{title:"Project Potential",permalink:"/project-temporal/blog/Project Potential"}},c={authorsImageUrls:[]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Samantha is a Twitch bot that utilizes research from Project Temporal to monitor audio from a Twitch stream for the use of profanity. It is built using ffmpeg for audio processing, golang for the backend, and python for the interface. The bot counts the number of times the word "fuck" is used in the stream\'s audio.'),(0,a.kt)("h1",{id:"what-is-ffmpeg"},"what is ffmpeg"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"audio-wave",src:o(364).Z,width:"7713",height:"5299"}),"\nFFmpeg is a free, open-source, command-line software that can be used to record, convert, and stream audio and video. It supports a wide variety of codecs and file formats, and is commonly used for video encoding, decoding, and manipulation."),(0,a.kt)("code",null,'ffmpeg -i "https://usher.ttvnw.net/api/channel/hls/..." -vn -c:a aac -b:a 128k -segment_time 10 -f segment audio/output_%03d.aac'),(0,a.kt)("p",null,"This command tells ffmpeg to take the input from the specified m3u8 URL, to ignore any video (-vn), and to copy the audio codec into 30-second segments, and to save each segment to a separate file using the %03d pattern.."),(0,a.kt)("h1",{id:"how-does-it-get-the-words"},"How does it get the words?"),(0,a.kt)("p",null,"OpenAI's Whisper is a high-quality voice synthesis model that can be used to generate natural-sounding speech. It is based on the Transformer architecture and can be fine-tuned on a specific speaker's voice, making it capable of generating speech in different accents and languages."),(0,a.kt)("p",null,"In the context of a project, Whisper can be used to loop through an array of files that are added to a directory. The process would involve first converting the text data in the files to speech using Whisper, and then updating a counter in a local file through a post request. The looping mechanism is implemented using python that continuously monitors the directory for new files and processes them as they are added."),(0,a.kt)("p",null,"The time of the segments from the ffmpeg script can be fine used to  allow for real-time conversion of text to speech or just normal processing over time as new files are added to the directory, allowing for automatic processing without human intervention."),(0,a.kt)("p",null,"It's worth noting that OpenAI API's including Whisper are not public anymore, you need to apply for access, pay for usage or run stright from the ground up."),(0,a.kt)("h1",{id:"golang-why"},"Golang? Why?"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"go bot",src:o(4712).Z,width:"500",height:"500"}),"\nGo, is a programming language developed by Google that is often used for building backend systems. In the context of this project its a Twitch bot to send updates to the Twitch chat when a specific command is called. Golang is also being used to process API calls to keep track of the counter allowing for max efficiency."),(0,a.kt)("p",null,"The Go programming language also provides built-in support for concurrency, which allows multiple tasks to be executed simultaneously. This can be useful in a Twitch bot & the api caller because it allows for the processing of multiple commands or requests at the same time, without slowing down the overall performance of the bot."),(0,a.kt)("p",null,"Additionally, Golang is a compiled language which makes it a good choice for performance-sensitive applications, and it also provides good support for cross-compilation, making it easy to deploy the bot on different platforms."),(0,a.kt)("p",null,"In summary, Golang is a suitable choice for building the backend of a Twitch bot because it provides robust support for handling network connections, concurrency, and performance-sensitive applications. It's well suited to handle the api calls and updates to the Twitch chat when the command ",(0,a.kt)("inlineCode",{parentName:"p"},"?fbomb")," is called."),(0,a.kt)("h1",{id:"summary"},"Summary"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"overview",src:o(4074).Z,width:"771",height:"771"})),(0,a.kt)("p",null,"The project architecture for the Twitch bot that uses OpenAI's Whisper, ffmpeg and golang, includes utilizing Whisper for converting text to speech, ffmpeg for extracting audio from a m3u8 stream and splitting it into 30-second segments, and golang for the backend to process API calls, and sending updates to the Twitch chat when the command ",(0,a.kt)("inlineCode",{parentName:"p"},"?fbomb")," is called."))}u.isMDXComponent=!0},4712:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/001-2736037818-3d0bb784c24a4511451f97f652b68290.gif"},364:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/futuristic-sound-wave-vector-a8c4c784b3cbb1415473f1744a8d1898.jpg"},4074:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/overview-f7302ac51de8473e4844f9df1ab280f6.png"}}]);