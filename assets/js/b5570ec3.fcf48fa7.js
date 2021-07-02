(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9819],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7273:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),s=["components"],i={title:"Advanced Tips",sidebar_position:2},c="Advanced REPL tips",l={unversionedId:"cw-plus/general/tips",id:"cw-plus/general/tips",isDocsHomePage:!1,title:"Advanced Tips",description:"You got your hands dirty with Node REPL. Now let's dig in a bit deeper of some advanced functions you can use.",source:"@site/docs/cw-plus/general/tips.md",sourceDirName:"cw-plus/general",slug:"/cw-plus/general/tips",permalink:"/0.14/cw-plus/general/tips",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/cw-plus/general/tips.md",version:"current",sidebarPosition:2,frontMatter:{title:"Advanced Tips",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/0.14/cw-plus/general/overview"},next:{title:"IBC And CosmWasm",permalink:"/0.14/ibc/overview"}},u=[{value:"Interactive Discovery",id:"interactive-discovery",children:[]},{value:"Multiple Wallets",id:"multiple-wallets",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-repl-tips"},"Advanced REPL tips"),(0,a.kt)("p",null,"::: danger You must read ",(0,a.kt)("a",{parentName:"p",href:"/0.14/cw-plus/cw20/cw20-base-tutorial"},"cw20 tutorial")," first. This section builds on top of it.\n:::"),(0,a.kt)("p",null,"You got your hands dirty with Node REPL. Now let's dig in a bit deeper of some advanced functions you can use."),(0,a.kt)("h2",{id:"interactive-discovery"},"Interactive Discovery"),(0,a.kt)("p",null,"So far you have been cut-and-pasting commands in the tutorials when using node repl. But what else can you do with this\ncontract? Luckily Javascript has some nice introspection. And, we added some extra bonuses there. Just type\n",(0,a.kt)("inlineCode",{parentName:"p"},"mine")," in the REPL and see the list of methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">> mine\n{ contractAddress: 'cosmos1jatwj0hq5qxrmd6y4qnfrg5lstmdk26akcrasl',\n  balance: [AsyncFunction: balance],\n  allowance: [AsyncFunction: allowance],\n  tokenInfo: [AsyncFunction: tokenInfo],\n  minter: [AsyncFunction: minter],\n  mint: [AsyncFunction: mint],\n  transfer: [AsyncFunction: transfer],\n  burn: [AsyncFunction: burn],\n  increaseAllowance: [AsyncFunction: increaseAllowance],\n  decreaseAllowance: [AsyncFunction: decreaseAllowance],\n  transferFrom: [AsyncFunction: transferFrom] }\n")),(0,a.kt)("p",null,"But how do I call them? What arguments do they take? You can always go look up the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-plus/blob/master/contracts/cw20-base/helpers.ts#L151-L167"},"original helper file on the web"),"\nand see all the types defined there."),(0,a.kt)("p",null,"But why switch to a browser and get distracted by something else? There is a great ",(0,a.kt)("inlineCode",{parentName:"p"},".type")," operator to show you this\nwithout ever leaving the REPL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},">>\nconst _i = mine.increaseAllowance\nundefined\n>>\n.\ntype\n_i\nconst _i: (recipient: string, amount: string) => Promise<string>\n\n>>\nconst _a = mine.allowance\nundefined\n>>\n.\ntype\n_a\nconst _a: (owner: string, spender: string) => Promise<string>\n")),(0,a.kt)("p",null,"One note, ",(0,a.kt)("inlineCode",{parentName:"p"},".type")," is a bit finicky and stops at the first dot, so this simpler version doesn't work, just describes\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"mine")," object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">> .type mine.increaseAllowance\nconst mine: cw20Instance\n>> .type mine\nconst mine: cw20Instance\n")),(0,a.kt)("p",null,"Armed with that knowledge, let's try to add an allowance and query it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"mine.increaseAllowance(other, \"5000\")\nmine.allowance(client.senderAddress, other)\n'5000'\n")),(0,a.kt)("h2",{id:"multiple-wallets"},"Multiple Wallets"),(0,a.kt)("p",null,"You know how we keep starting every session with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const client = await useOptions(hackatomOptions).setup(YOUR_PASSWORD_HERE);\n")),(0,a.kt)("p",null,"What if I told you there was more you could do here? Don't believe me, just explore for yourself:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const {setup} = useOptions(hackatomOptions);\n.\ntype\nsetup\n// this gives:\nconst setup: (password: string, filename?\n:\nstring\n) =>\nPromise < SigningCosmWasmClient >\n")),(0,a.kt)("p",null,"Yup... it takes a second argument. You don't HAVE to store your keys in ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.coral.key"),". That's just a default. It also\nmeans we could make 2 clients using different key files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const client = await setup(YOUR_PASSWORD_HERE)\nconst partner = await setup(OTHER_PASSWORD, \"/home/user/.test2.key\")\n\n// let's make sure they are unique\nclient.getAccount()\npartner.getAccount()\n\n// and move some tokens around\npartner.sendTokens(client.senderAddress, [{denom: 'ucosm', amount: '200000'}])\n\nclient.getAccount()\npartner.getAccount()\n")),(0,a.kt)("p",null,"This let's us then try more complex use cases with the cw20 contract. Sending back and forth, ",(0,a.kt)("inlineCode",{parentName:"p"},"transferFrom"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"burnFrom"),"\n, etc"),(0,a.kt)("p",null,"That's enough hints from me. Time for you to go play with the contract on your own..."))}d.isMDXComponent=!0}}]);