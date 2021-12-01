"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[3011],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6141:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={id:"plugins",title:"Plugins",sidebar_label:"Plugins",original_id:"plugins"},p=void 0,u={unversionedId:"guides/plugins",id:"guides/plugins",isDocsHomePage:!1,title:"Plugins",description:"Overview",source:"@site/docs/guides/guides-plugins.md",sourceDirName:"guides",slug:"/guides/plugins",permalink:"/docs/guides/plugins",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/guides-plugins.md",tags:[],version:"current",frontMatter:{id:"plugins",title:"Plugins",sidebar_label:"Plugins",original_id:"plugins"},sidebar:"tutorialSidebar",previous:{title:"File Extensions",permalink:"/docs/guides/file_extensions"},next:{title:"Runtime",permalink:"/docs/guides/runtime"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Plugin CLI Reference",id:"plugin-cli-reference",children:[],level:2},{value:"Plugin Renative Config Reference",id:"plugin-renative-config-reference",children:[],level:2},{value:"Custom Plugin Support",id:"custom-plugin-support",children:[],level:2},{value:"Support for static frameworks (iOS/tvOS only)",id:"support-for-static-frameworks-iostvos-only",children:[],level:2},{value:"Adapt 3rd party plugins to support rnv",id:"adapt-3rd-party-plugins-to-support-rnv",children:[],level:2}],c={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("img",{className:"header-image",src:"https://renative.org/img/ic_plugins.png",width:"50",height:"50"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"ReNative Supports standard community driven react-native plugins you can use to enhance the functionality of your apps:"),(0,a.kt)("p",null,"Get list of all available community plugins. (NOTE you can always add new one manually into one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"renative.json")," files)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ rnv plugin list")),(0,a.kt)("p",null,"you should get colorised overview similar to this:"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,(0,a.kt)("img",{src:"https://renative.org/img/cli_plugins.png"})))),(0,a.kt)("p",null,"add new plugin to your project:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ rnv plugin add")),(0,a.kt)("p",null,"and follow the command prompt steps"),(0,a.kt)("p",null,"Update your current plugins with latest ones from ReNative"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ rnv plugin update")),(0,a.kt)("p",null,"and follow the command prompt steps"),(0,a.kt)("h2",{id:"plugin-cli-reference"},"Plugin CLI Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/cli-engine-core#plugin-add"},"see: CLI API Reference")),(0,a.kt)("h2",{id:"plugin-renative-config-reference"},"Plugin Renative Config Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/config#plugins"},"see: Config API Reference")),(0,a.kt)("h2",{id:"custom-plugin-support"},"Custom Plugin Support"),(0,a.kt)("p",null,"You can configure multiple React Native plugins without need to update project blueprints.\ndefault location of plugin configs is ",(0,a.kt)("inlineCode",{parentName:"p"},"./renative.json")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins": {\n        "renative": "source:rnv",\n        "react": "source:rnv",\n        "react-art": "source:rnv",\n        "react-dom": "source:rnv",\n        "react-native": "source:rnv",\n        "react-native-web": "source:rnv",\n        "react-native-web-image-loader": "source:rnv",\n        "react-native-gesture-handler": "source:rnv",\n        "react-navigation": "source:rnv",\n        "react-navigation-tabs": "source:rnv",\n        "react-native-reanimated": "source:rnv",\n        "react-native-vector-icons": "source:rnv"\n    }\n}\n')),(0,a.kt)("p",null,"You can also customise default plugin configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins": {\n        "react-native-gesture-handler": {\n            "version": "0.1.0",\n            "ios": {\n                "podName": "RNGestureHandler",\n                "path": "node_modules/react-native-gesture-handler"\n            },\n            "android": {\n                "package": "com.swmansion.gesturehandler.react.RNGestureHandlerPackage",\n                "path": "node_modules/react-native-gesture-handler/android"\n            }\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"support-for-static-frameworks-iostvos-only"},"Support for static frameworks (iOS/tvOS only)"),(0,a.kt)("p",null,"Some cocoapod dependecies required library to be imported as static one. you can configure it for each plugin separately"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugin-name": {\n        "ios": {\n            "isStatic": true\n        },\n        "tvos": {\n            "isStatic": true\n        }\n    }\n}\n')),(0,a.kt)("h2",{id:"adapt-3rd-party-plugins-to-support-rnv"},"Adapt 3rd party plugins to support rnv"),(0,a.kt)("p",null,"You can adapt existing plugin to support rnv projects"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"some-plugin": {\n            "version": "0.1.0",\n            "no-npm": true,\n            "androidtv": {\n                "implementation": "debugImplementation(name:\'Example\', ext:\'aar\')\\nreleaseImplementation(name:\'ExampleProduction\', ext:\'aar\')",\n                 "mainApplication": {\n                    "imports": ["import com.example.Example"],\n                    "createMethods": [\n                        "Example.init(this)"\n                    ]\n                },\n                "BuildGradle": {\n                    "allprojects": {\n                        "repositories": {\n                            "flatDir { dirs \'libs\' }": true\n                        }\n                    }\n                },\n                "AndroidManifest": {\n                    "children": [\n                        {\n                            "tag": "application",\n                            "android:name": ".MainApplication",\n                            "children": [\n                                {\n                                    "tag": "meta-data",\n                                    "android:name": "com.example.ApiKey",\n                                    "android:value": "@EXAMPLE_API_KEY@"\n                                }\n                            ]\n                        }\n                    ]\n                }\n            },\n            "tvos": {\n                "podName": "ExampleInstrumentalApplication",\n                "appDelegateImports": [\n                    "ExampleInstrumentalApplication"\n                ],\n                "appDelegateMethods": {\n                    "application": {\n                        "applicationDidBecomeActive": [\n                            "ExampleInstrumentalApplication.instance.start()"\n                        ]\n                    }\n                },\n                "plist": {\n                    "Example": {\n                        "APIKey": "@EXAMPLE_API_KEY@"\n                    }\n                },\n                "xcodeproj": {\n                    "buildPhases": [\n                        {\n                            "shellPath": "/bin/sh",\n                            "shellScript": "\\"${PODS_ROOT}/Example/run\\" @EXAMPLE_API_KEY@"\n                        }\n                    ]\n                }\n            }\n        }\n    },\n\n')))}d.isMDXComponent=!0}}]);