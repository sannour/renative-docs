"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[9430],{7878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"tizen",title:"Tizen TV Platform",sidebar_label:"Tizen TV",original_id:"tizen"},p=void 0,u={unversionedId:"platforms/tizen",id:"platforms/tizen",title:"Tizen TV Platform",description:"Overview",source:"@site/docs/platforms/tizen.md",sourceDirName:"platforms",slug:"/platforms/tizen",permalink:"/docs/platforms/tizen",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/platforms/tizen.md",tags:[],version:"current",frontMatter:{id:"tizen",title:"Tizen TV Platform",sidebar_label:"Tizen TV",original_id:"tizen"},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/platforms/overview"},next:{title:"Tizen Mobile",permalink:"/docs/platforms/tizenmobile"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"File Extension Support",id:"file-extension-support",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Project Configuration",id:"project-configuration",children:[],level:2},{value:"Emulator",id:"emulator",children:[],level:2},{value:"Run",id:"run",children:[{value:"Run on Device",id:"run-on-device",children:[],level:5},{value:"Run in Browser",id:"run-in-browser",children:[],level:5}],level:2},{value:"Advanced",id:"advanced",children:[{value:"Clean and Re-build platform project",id:"clean-and-re-build-platform-project",children:[],level:5},{value:"Launch with specific Tizen simulator:",id:"launch-with-specific-tizen-simulator",children:[],level:5},{value:"Launch on a specific Tizen device",id:"launch-on-a-specific-tizen-device",children:[],level:5},{value:"Export production .wgt",id:"export-production-wgt",children:[],level:5}],level:2},{value:"App Config",id:"app-config",children:[],level:2}],c={toc:d};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("img",{src:"https://img.shields.io/badge/Mac-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Windows-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/Linux-yes-brightgreen.svg"}),(0,a.kt)("img",{src:"https://img.shields.io/badge/HostMode-yes-brightgreen.svg"})))),(0,a.kt)("img",{className:"platform-image",src:"https://renative.org/img/rnv_tizen.gif",height:"250"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Latest Tizen project"),(0,a.kt)("li",{parentName:"ul"},"Support for Tizen 5.0, 4.0, 3.0")),(0,a.kt)("h2",{id:"file-extension-support"},"File Extension Support"),(0,a.kt)("p",null,"Extenstions are defined via engines. Engines with tizen support:"),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.tizen.org/ko/development/tizen-studio/configurable-sdk"},"Tizen SDK")," ",(0,a.kt)("inlineCode",{parentName:"li"},"5.0")),(0,a.kt)("li",{parentName:"ul"},"Make sure your CPU supports virtualization. Otherwise Tizen emulator might not start."),(0,a.kt)("li",{parentName:"ul"},"If you are deploying to a TV, follow this guide to set your TV in developer mode ",(0,a.kt)("a",{parentName:"li",href:"https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device"},"Link"))),(0,a.kt)("h2",{id:"project-configuration"},"Project Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Version"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tizen Studio"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"2.5"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tizen SDK"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"5.0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"react-native-web"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"0.9.9"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Babel Core"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"7.1.2"))))),(0,a.kt)("h2",{id:"emulator"},"Emulator"),(0,a.kt)("p",null,"Make sure you have at least 1 TV VM setup"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("img",{src:"https://renative.org/img/tizen4.png"})))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv target launch -p tizen -t T-samsung-5.0-x86\n")),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizen\n")),(0,a.kt)("h5",{id:"run-on-device"},"Run on Device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizen -d\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Before you run on a physical device, make sure you have enabled ",(0,a.kt)("inlineCode",{parentName:"em"},"Dev Mode")," and you set your IP correctly, otherwise the connection will fail. For more informations about ",(0,a.kt)("inlineCode",{parentName:"em"},"Dev Mode")," consult ",(0,a.kt)("a",{parentName:"em",href:"https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device"},"https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device"))),(0,a.kt)("h5",{id:"run-in-browser"},"Run in Browser"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizen --hosted\n")),(0,a.kt)("h2",{id:"advanced"},"Advanced"),(0,a.kt)("h5",{id:"clean-and-re-build-platform-project"},"Clean and Re-build platform project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizen -r\n")),(0,a.kt)("h5",{id:"launch-with-specific-tizen-simulator"},"Launch with specific Tizen simulator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizen -t T-samsung-5.0-x86\n")),(0,a.kt)("h5",{id:"launch-on-a-specific-tizen-device"},"Launch on a specific Tizen device"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv run -p tizen -d -t <IP>\n")),(0,a.kt)("h5",{id:"export-production-wgt"},"Export production .wgt"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rnv build -p tizen -s release\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Before you run on a physical device, make sure you have enabled ",(0,a.kt)("inlineCode",{parentName:"em"},"Dev Mode")," and you set your IP correctly, otherwise the connection will fail. For more informations about ",(0,a.kt)("inlineCode",{parentName:"em"},"Dev Mode")," consult ",(0,a.kt)("a",{parentName:"em",href:"https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device"},"https://developer.samsung.com/tv/develop/getting-started/using-sdk/tv-device"))),(0,a.kt)("h2",{id:"app-config"},"App Config"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/json-config"},"see: Web based config")))}s.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,v=s["".concat(p,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);