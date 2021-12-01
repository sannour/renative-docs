"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8693],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,v=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3896:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={id:"develop",title:"Develop ReNative",sidebar_label:"Develop ReNative",original_id:"develop"},p=void 0,c={unversionedId:"guides/develop",id:"guides/develop",isDocsHomePage:!1,title:"Develop ReNative",description:"Developing ReNative Locally",source:"@site/docs/guides/guides-develop.md",sourceDirName:"guides",slug:"/guides/develop",permalink:"/docs/guides/develop",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/guides-develop.md",tags:[],version:"current",frontMatter:{id:"develop",title:"Develop ReNative",sidebar_label:"Develop ReNative",original_id:"develop"},sidebar:"tutorialSidebar",previous:{title:"Config Files",permalink:"/docs/guides/config"},next:{title:"Engines",permalink:"/docs/guides/engines"}},u=[{value:"Developing ReNative Locally",id:"developing-renative-locally",children:[{value:"Windows development",id:"windows-development",children:[],level:4}],level:2},{value:"Deployments",id:"deployments",children:[{value:"Feature",id:"feature",children:[],level:3},{value:"Alpha",id:"alpha",children:[],level:3},{value:"Production",id:"production",children:[],level:3}],level:2},{value:"Documentation",id:"documentation",children:[],level:2}],d={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_construction.png",width:"50",height:"50"}),(0,l.kt)("h2",{id:"developing-renative-locally"},"Developing ReNative Locally"),(0,l.kt)("p",null,"If you need full control over whole ReNative build you can clone and develop it locally"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"1) clone git@github.com:pavjacko/renative.git\n2) cd renative\n3) yarn bootstrap\n4) yarn watch\n")),(0,l.kt)("p",null,"At this point your global ",(0,l.kt)("inlineCode",{parentName:"p"},"$ rnv")," command is linked directly into project above."),(0,l.kt)("p",null,"It's also best way to contribute back to RNV! :)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rnv template apply\n=> pick renative-template-hello-world\n")),(0,l.kt)("h4",{id:"windows-development"},"Windows development"),(0,l.kt)("p",null,"Requirements: Python 2.7, Visual Studio installed or install ",(0,l.kt)("inlineCode",{parentName:"p"},"windows-build-tools"),"(",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/windows-build-tools"},"https://www.npmjs.com/package/windows-build-tools"),"). ",(0,l.kt)("strong",{parentName:"p"},"Please make sure you follow the package's instructions, especially running it in PowerShell as Administrator")),(0,l.kt)("h2",{id:"deployments"},"Deployments"),(0,l.kt)("h3",{id:"feature"},"Feature"),(0,l.kt)("p",null,"Features (from ",(0,l.kt)("inlineCode",{parentName:"p"},"feat/xxx")," branches):"),(0,l.kt)("p",null,"npm tag ",(0,l.kt)("inlineCode",{parentName:"p"},"feat")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm run deploy:feat\n")),(0,l.kt)("h3",{id:"alpha"},"Alpha"),(0,l.kt)("p",null,"Alpha Releases (from ",(0,l.kt)("inlineCode",{parentName:"p"},"develop")," branches):"),(0,l.kt)("p",null,"tag format: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.31.0-alpha.1")),(0,l.kt)("p",null,"npm tag ",(0,l.kt)("inlineCode",{parentName:"p"},"alpha")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm run deploy:alpha\n")),(0,l.kt)("h3",{id:"production"},"Production"),(0,l.kt)("p",null,"Production (from ",(0,l.kt)("inlineCode",{parentName:"p"},"release/xx")," branches):"),(0,l.kt)("p",null,"tag format: ",(0,l.kt)("inlineCode",{parentName:"p"},"0.31.0")),(0,l.kt)("p",null,"npm tag: ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm run deploy:prod\n")),(0,l.kt)("h2",{id:"documentation"},"Documentation"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/cli-engine-core"},"Documentation for CLI")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/renative"},"Documentation for RNV")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/config"},"Documentation for Config")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api/renative"},"Documentation for Runtime")))}s.isMDXComponent=!0}}]);