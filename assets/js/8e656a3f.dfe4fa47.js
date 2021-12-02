"use strict";(self.webpackChunkrenative_website=self.webpackChunkrenative_website||[]).push([[5706],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2327:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"vercel",title:"Vercel",sidebar_label:"Vercel",original_id:"vercel"},c=void 0,u={unversionedId:"integrations/vercel",id:"integrations/vercel",isDocsHomePage:!1,title:"Vercel",description:"Overview",source:"@site/docs/integrations/vercel.md",sourceDirName:"integrations",slug:"/integrations/vercel",permalink:"/renative-website/docs/integrations/vercel",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/integrations/vercel.md",tags:[],version:"current",frontMatter:{id:"vercel",title:"Vercel",sidebar_label:"Vercel",original_id:"vercel"},sidebar:"tutorialSidebar",previous:{title:"TestFlight",permalink:"/renative-website/docs/integrations/testflight"},next:{title:"0.29.x",permalink:"/renative-website/docs/upgrades/0.29"}},p=[{value:"Overview",id:"overview",children:[{value:"Deploying to production",id:"deploying-to-production",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_integrations.png",width:"50",height:"50"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"You can automatically deploy your web build to now.sh with ",(0,i.kt)("inlineCode",{parentName:"p"},"rnv")),(0,i.kt)("p",null,"You need to have now CLI installed and configured as per their documentation. (",(0,i.kt)("a",{parentName:"p",href:"https://zeit.co/docs#installing-now-cli"},"https://zeit.co/docs#installing-now-cli"),"). Just follow the 'Installing Now CLI' section, no need to create a project."),(0,i.kt)("p",null,"Now you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"rnv deploy -p web -t now"),". You will be asked some questions if you don't already have a ",(0,i.kt)("inlineCode",{parentName:"p"},"now.json")," file and it will be created for you."),(0,i.kt)("h3",{id:"deploying-to-production"},"Deploying to production"),(0,i.kt)("p",null,"With the default config only the first deploy will go to production, the rest will create a new URL(deployment). If you want for a specific scheme to deploy directly to production you can add ",(0,i.kt)("inlineCode",{parentName:"p"},"nowIsProduction: true")," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"buildScheme")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"appConfigs/<folder>/renative.json")," like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "buildSchemes": {\n        "release": {\n            "nowIsProduction": true\n        }\n    }\n    ...\n}\n')),(0,i.kt)("p",null,"Then use that scheme to deploy your app ",(0,i.kt)("inlineCode",{parentName:"p"},"rnv deploy -p web -t now -s release")))}d.isMDXComponent=!0}}]);