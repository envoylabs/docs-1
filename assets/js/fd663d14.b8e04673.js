(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3540],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return h}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2005:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a=["components"],l={sidebar_position:2},c="Cosmic dApp logic",p={unversionedId:"learn/frontend-dapp/cosmicdapp-logic",id:"learn/frontend-dapp/cosmicdapp-logic",isDocsHomePage:!1,title:"Cosmic dApp logic",description:"The @cosmicdapp/logic package provides three kinds of",source:"@site/docs/learn/frontend-dapp/cosmicdapp-logic.md",sourceDirName:"learn/frontend-dapp",slug:"/learn/frontend-dapp/cosmicdapp-logic",permalink:"/0.14/learn/frontend-dapp/cosmicdapp-logic",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/learn/frontend-dapp/cosmicdapp-logic.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/0.14/learn/frontend-dapp/intro"},next:{title:"Cosmic dApp design",permalink:"/0.14/learn/frontend-dapp/cosmicdapp-design"}},s=[{value:"Config",id:"config",children:[]},{value:"Utils",id:"utils",children:[]},{value:"Service",id:"service",children:[{value:"Sdk provider",id:"sdk-provider",children:[]},{value:"Account provider",id:"account-provider",children:[]},{value:"ErrorProvider",id:"errorprovider",children:[]},{value:"CW20",id:"cw20",children:[]},{value:"ProtectedSwitch",id:"protectedswitch",children:[]}]}],d={toc:s};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmic-dapp-logic"},"Cosmic dApp logic"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/dApps/tree/master/packages/logic"},(0,o.kt)("inlineCode",{parentName:"a"},"@cosmicdapp/logic"))," package provides three kinds of\nresources that will make it easier to develop CosmJS based dApps: config, utils, and service. In order to better\nunderstand the example balance checker dApp that we'll be developing, we'll go over those utilities that will be used in\nthe app."),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("p",null,"The AppConfig definitions that configure the app to work for a given chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AppConfig {\n  readonly chainId: string;\n  readonly chainName: string;\n  readonly addressPrefix: string;\n  readonly rpcUrl: string;\n  readonly httpUrl: string;\n  readonly faucetUrl: string;\n  readonly feeToken: string;\n  readonly stakingToken: string;\n  readonly faucetToken: string;\n  readonly coinMap: CoinMap;\n  readonly gasPrice: number;\n  readonly codeId?: number;\n}\n")),(0,o.kt)("p",null,"In this tutorial we'll be using configuration for Heldernet."),(0,o.kt)("p",null,"The fields are pretty self-explanatory except ",(0,o.kt)("inlineCode",{parentName:"p"},"coinMap"),", which is a map of native coin names that will allow us to\npretty print the token amounts with ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeCoinToDisplay()"),". It looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  ucosm: {\n    denom: "COSM", fractionalDigits\n  :\n    6\n  }\n,\n  ustake: {\n    denom: "STAKE", fractionalDigits\n  :\n    6\n  }\n,\n}\n')),(0,o.kt)("h2",{id:"utils"},"Utils"),(0,o.kt)("p",null,"Here you can find the definition for a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoinMap")," like the one above, which will come in handy when defining it in your\nconfig file."),(0,o.kt)("p",null,"There are also several utility functions for working with errors and currencies. In this tutorial we'll only be\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeCoinToDisplay()"),", which takes two parameters: a ",(0,o.kt)("inlineCode",{parentName:"p"},"@cosmjs/launchpad")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Coin")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoinMap"),"."),(0,o.kt)("p",null,"It makes use of those parameters and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Decimal")," class from ",(0,o.kt)("inlineCode",{parentName:"p"},"@cosmjs/math")," to return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Coin")," with a more user\nfriendly ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," field, that will be used for printing native coins in the balance checker."),(0,o.kt)("h2",{id:"service"},"Service"),(0,o.kt)("p",null,"This resource offers several React context providers, some utility functions, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"ProtectedSwitch")," React component."),(0,o.kt)("h3",{id:"sdk-provider"},"Sdk provider"),(0,o.kt)("p",null,"We'll be able to interact with this React context provider with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSdk")," hook, which will give us access to\na ",(0,o.kt)("inlineCode",{parentName:"p"},"SigningCosmWasmClient")," in order to query the chain."),(0,o.kt)("h3",{id:"account-provider"},"Account provider"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useAccount")," hook will expose this provider's state, which will be useful for getting the user address and balance."),(0,o.kt)("h3",{id:"errorprovider"},"ErrorProvider"),(0,o.kt)("p",null,"By making use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useError")," hook, we will be able to query and change the value of a global error."),(0,o.kt)("h3",{id:"cw20"},"CW20"),(0,o.kt)("p",null,"This is a utility that will provide several methods for interacting with CW20 contracts. For the balance checker, we'll\nbe querying the balance of a given CW20 contract token."),(0,o.kt)("h3",{id:"protectedswitch"},"ProtectedSwitch"),(0,o.kt)("p",null,"A wrapper around ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Switch"),", that only allows the user to visit the routes inside if the user has\nfinished the login process."))}u.isMDXComponent=!0}}]);