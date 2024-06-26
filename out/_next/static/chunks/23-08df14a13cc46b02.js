"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23],{92003:function(e){e.exports=function({mustBeMetaMask:e=!1,silent:t=!1,timeout:n=3e3}={}){!function(){if("boolean"!=typeof e)throw Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");if("boolean"!=typeof t)throw Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");if("number"!=typeof n)throw Error("@metamask/detect-provider: Expected option 'timeout' to be a number.")}();let r=!1;return new Promise(a=>{window.ethereum?i():(window.addEventListener("ethereum#initialized",i,{once:!0}),setTimeout(()=>{i()},n));function i(){if(r)return;r=!0,window.removeEventListener("ethereum#initialized",i);let{ethereum:n}=window;n&&(!e||n.isMetaMask)?a(n):(t||console.error("@metamask/detect-provider:",e&&n?"Non-MetaMask window.ethereum detected.":"Unable to detect window.ethereum."),a(null))}})}},50231:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(64938)),i=n(85893);t.Z=(0,a.default)([(0,i.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,i.jsx)("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98M20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},"1")],"ManageAccounts")},2391:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(64938)),i=n(85893);t.Z=(0,a.default)((0,i.jsx)("path",{d:"M18 17H6v-2h12zm0-4H6v-2h12zm0-4H6V7h12zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2z"}),"Receipt")},58805:function(e,t,n){var r=n(88169),a=n(85893);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M12.89 11.1c-1.78-.59-2.64-.96-2.64-1.9 0-1.02 1.11-1.39 1.81-1.39 1.31 0 1.79.99 1.9 1.34l1.58-.67c-.15-.45-.82-1.92-2.54-2.24V5h-2v1.26c-2.48.56-2.49 2.86-2.49 2.96 0 2.27 2.25 2.91 3.35 3.31 1.58.56 2.28 1.07 2.28 2.03 0 1.13-1.05 1.61-1.98 1.61-1.82 0-2.34-1.87-2.4-2.09l-1.66.67c.63 2.19 2.28 2.78 2.9 2.96V19h2v-1.24c.4-.09 2.9-.59 2.9-3.22 0-1.39-.61-2.61-3.01-3.44M3 21H1v-6h6v2H4.52c1.61 2.41 4.36 4 7.48 4 4.97 0 9-4.03 9-9h2c0 6.08-4.92 11-11 11-3.72 0-7.01-1.85-9-4.67zm-2-9C1 5.92 5.92 1 12 1c3.72 0 7.01 1.85 9 4.67V3h2v6h-6V7h2.48C17.87 4.59 15.12 3 12 3c-4.97 0-9 4.03-9 9z"}),"CurrencyExchange")},38043:function(e,t,n){var r=n(88169),a=n(85893);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"}),"Favorite")},83784:function(e,t,n){var r=n(88169),a=n(85893);t.Z=(0,r.Z)([(0,a.jsx)("circle",{cx:"10",cy:"8",r:"4"},"0"),(0,a.jsx)("path",{d:"M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98M20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63M17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},"1")],"ManageAccounts")},66242:function(e,t,n){n.d(t,{Z:function(){return y}});var r=n(87462),a=n(63366),i=n(67294),o=n(90512),s=n(58510),l=n(90948),c=n(71657),u=n(90629),d=n(1977),m=n(8027);function f(e){return(0,m.ZP)("MuiCard",e)}(0,d.Z)("MuiCard",["root"]);var h=n(85893);let g=["className","raised"],p=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},f,t)},v=(0,l.ZP)(u.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),$=i.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=n,l=(0,a.Z)(n,g),u=(0,r.Z)({},n,{raised:s}),d=p(u);return(0,h.jsx)(v,(0,r.Z)({className:(0,o.Z)(d.root,i),elevation:s?8:void 0,ref:t,ownerState:u},l))});var y=$},83965:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(63366),a=n(87462),i=n(67294),o=n(90512),s=n(58510),l=n(71657),c=n(90948),u=n(1977),d=n(8027);function m(e){return(0,d.ZP)("MuiCardMedia",e)}(0,u.Z)("MuiCardMedia",["root","media","img"]);var f=n(85893);let h=["children","className","component","image","src","style"],g=e=>{let{classes:t,isMediaComponent:n,isImageComponent:r}=e;return(0,s.Z)({root:["root",n&&"media",r&&"img"]},m,t)},p=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver(e,t){let{ownerState:n}=e,{isMediaComponent:r,isImageComponent:a}=n;return[t.root,r&&t.media,a&&t.img]}})(({ownerState:e})=>(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),v=["video","audio","picture","iframe","img"],$=["picture","img"],y=i.forwardRef(function(e,t){let n=(0,l.Z)({props:e,name:"MuiCardMedia"}),{children:i,className:s,component:c="div",image:u,src:d,style:m}=n,y=(0,r.Z)(n,h),x=-1!==v.indexOf(c),b=!x&&u?(0,a.Z)({backgroundImage:`url("${u}")`},m):m,C=(0,a.Z)({},n,{component:c,isMediaComponent:x,isImageComponent:-1!==$.indexOf(c)}),w=g(C);return(0,f.jsx)(p,(0,a.Z)({className:(0,o.Z)(w.root,s),as:c,role:!x&&u?"img":void 0,ref:t,style:b,ownerState:C,src:x?u||d:void 0},y,{children:i}))});var x=y},87109:function(e,t,n){n.d(t,{Z:function(){return M}});var r,a=n(63366),i=n(87462),o=n(67294),s=n(90512),l=n(58510),c=n(98216),u=n(15861),d=n(47167),m=n(74423),f=n(90948),h=n(1977),g=n(8027);function p(e){return(0,g.ZP)("MuiInputAdornment",e)}let v=(0,h.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var $=n(71657),y=n(85893);let x=["children","className","component","disablePointerEvents","disableTypography","position","variant"],b=(e,t)=>{let{ownerState:n}=e;return[t.root,t[`position${(0,c.Z)(n.position)}`],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]},C=e=>{let{classes:t,disablePointerEvents:n,hiddenLabel:r,position:a,size:i,variant:o}=e,s={root:["root",n&&"disablePointerEvents",a&&`position${(0,c.Z)(a)}`,o,r&&"hiddenLabel",i&&`size${(0,c.Z)(i)}`]};return(0,l.Z)(s,p,t)},w=(0,f.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:b})(({theme:e,ownerState:t})=>(0,i.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},"filled"===t.variant&&{[`&.${v.positionStart}&:not(.${v.hiddenLabel})`]:{marginTop:16}},"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})),Z=o.forwardRef(function(e,t){let n=(0,$.Z)({props:e,name:"MuiInputAdornment"}),{children:l,className:c,component:f="div",disablePointerEvents:h=!1,disableTypography:g=!1,position:p,variant:v}=n,b=(0,a.Z)(n,x),Z=(0,m.Z)()||{},M=v;v&&Z.variant,Z&&!M&&(M=Z.variant);let R=(0,i.Z)({},n,{hiddenLabel:Z.hiddenLabel,size:Z.size,disablePointerEvents:h,position:p,variant:M}),T=C(R);return(0,y.jsx)(d.Z.Provider,{value:null,children:(0,y.jsx)(w,(0,i.Z)({as:f,ownerState:R,className:(0,s.Z)(T.root,c),ref:t},b,{children:"string"!=typeof l||g?(0,y.jsxs)(o.Fragment,{children:["start"===p?r||(r=(0,y.jsx)("span",{className:"notranslate",children:"​"})):null,l]}):(0,y.jsx)(u.Z,{color:"text.secondary",children:l})}))})});var M=Z},52668:function(e){let t="https://min-api.cryptocompare.com/data/",n="";function r(e){n=e}function a(e){return""!==n&&(e.indexOf("?")>-1?e+="&api_key=":e+="?api_key=",e+=n),fetch(e).then(e=>{if(!e.ok)throw Error(`${e.status} ${e.statusText}`);return e.json()}).then(e=>{if("Error"===e.Response)throw e.Message;return e})}function i(e){if(!(e instanceof Date))throw Error("timestamp must be an instance of Date.");return Math.floor(e.getTime()/1e3)}e.exports={setApiKey:r,coinList:function(){let e=`${t}all/coinlist`;return a(e)},constituentExchangeList:function(e){let n=`${t}all/includedexchanges`;return(e=e||{}).instrument&&(n+=`?instrument=${e.instrument}`),a(n).then(e=>e.Data)},exchangeList:function(){let e=`${t}all/exchanges`;return a(e)},newsFeedsAndCategories:function(){let e=`${t}news/feedsandcategories`;return a(e).then(e=>e.Data)},newsList:function(e,n){let r=`${t}v2/news/?lang=${e}`;return(n=n||{}).feeds&&(r+=`&feeds=${n.feeds}`),n.categories&&(r+=`&categories=${n.categories}`),n.excludeCategories&&(r+=`&categories=${n.excludeCategories}`),n.lTs&&(n.lTs=i(n.lTs),r+=`&lTs=${n.lTs}`),a(r).then(e=>e.Data)},price:function(e,n,r){let i=`${t}price?fsym=${e}&tsyms=${n}`;return(r=r||{}).exchanges&&(i+=`&e=${r.exchanges}`),!1===r.tryConversion&&(i+="&tryConversion=false"),a(i)},priceMulti:function(e,n,r){let i=`${t}pricemulti?fsyms=${e}&tsyms=${n}`;return(r=r||{}).exchanges&&(i+=`&e=${r.exchanges}`),!1===r.tryConversion&&(i+="&tryConversion=false"),a(i)},priceFull:function(e,n,r){let i=`${t}pricemultifull?fsyms=${e}&tsyms=${n}`;return(r=r||{}).exchanges&&(i+=`&e=${r.exchanges}`),!1===r.tryConversion&&(i+="&tryConversion=false"),a(i).then(e=>e.RAW)},priceHistorical:function(e,n,r,o){o=o||{};let s=`${t}pricehistorical?fsym=${e}&tsyms=${n}&ts=${r=i(r)}`;return o.exchanges&&(s+=`&e=${o.exchanges}`),!1===o.tryConversion&&(s+="&tryConversion=false"),a(s).then(t=>t[e])},generateAvg:function(e,n,r,i){let o=`${t}generateAvg?fsym=${e}&tsym=${n}&e=${r}`;return!1===i&&(o+="&tryConversion=false"),a(o).then(e=>e.RAW)},topPairs:function(e,n){let r=`${t}top/pairs?fsym=${e}`;return n&&(r+=`&limit=${n}`),a(r).then(e=>e.Data)},topExchanges:function(e,n,r){let i=`${t}top/exchanges?fsym=${e}&tsym=${n}`;return r&&(i+=`&limit=${r}`),a(i).then(e=>e.Data)},topExchangesFull:function(e,n,r){let i=`${t}top/exchanges/full?fsym=${e}&tsym=${n}`;return r&&(i+=`&limit=${r}`),a(i).then(e=>e.Data)},histoDay:function(e,n,r){(r=r||{}).timestamp&&(r.timestamp=i(r.timestamp));let o=`${t}histoday?fsym=${e}&tsym=${n}`;return r.exchange&&(o+=`&e=${r.exchange}`),"none"===r.limit?o+="&allData=true":r.limit&&(o+=`&limit=${r.limit}`),!1===r.tryConversion&&(o+="&tryConversion=false"),r.aggregate&&(o+=`&aggregate=${r.aggregate}`),r.timestamp&&(o+=`&toTs=${r.timestamp}`),r.aggregatePredictableTimePeriods&&(o+=`&aggregatePredictableTimePeriods=${r.aggregatePredictableTimePeriods}`),r.allData&&(o+=`&allData=${r.allData}`),r.toTs&&(o+=`&toTs=${r.toTs}`),a(o).then(e=>e.Data)},histoHour:function(e,n,r){(r=r||{}).timestamp&&(r.timestamp=i(r.timestamp));let o=`${t}histohour?fsym=${e}&tsym=${n}`;return r.exchange&&(o+=`&e=${r.exchange}`),r.limit&&(o+=`&limit=${r.limit}`),!1===r.tryConversion&&(o+="&tryConversion=false"),r.aggregate&&(o+=`&aggregate=${r.aggregate}`),r.timestamp&&(o+=`&toTs=${r.timestamp}`),r.allData&&(o+=`&allData=${r.allData}`),r.toTs&&(o+=`&toTs=${r.toTs}`),a(o).then(e=>e.Data)},histoMinute:function(e,n,r){(r=r||{}).timestamp&&(r.timestamp=i(r.timestamp));let o=`${t}histominute?fsym=${e}&tsym=${n}`;return r.exchange&&(o+=`&e=${r.exchange}`),r.limit&&(o+=`&limit=${r.limit}`),!1===r.tryConversion&&(o+="&tryConversion=false"),r.aggregate&&(o+=`&aggregate=${r.aggregate}`),r.timestamp&&(o+=`&toTs=${r.timestamp}`),r.allData&&(o+=`&allData=${r.allData}`),r.toTs&&(o+=`&toTs=${r.toTs}`),a(o).then(e=>e.Data)},latestSocial:function(e){let n=`${t}social/coin/latest`;return(e=e||{}).coinId&&(n+=`?coinId=${e.coinId}`),a(n).then(e=>e.Data)},histoSocial:function(e,n){let r=`${t}social/coin/histo/${"hour"===e?"hour":"day"}`,i=[];return(n=n||{}).coinId&&i.push(`coinId=${n.coinId}`),n.aggregate>=1&&n.aggregate<=30&&i.push(`aggregate=${n.aggregate}`),n.aggregate&&"boolean"==typeof n.aggregatePredictableTimePeriods&&i.push(`&aggregatePredictableTimePeriods=${n.aggregatePredictableTimePeriods}`),n.limit>=1&&n.limit<=2e3&&i.push(`limit=${n.limit}`),n.toTs&&i.push(`toTs=${n.toTs}`),a(`${r}${i.length>0?"?"+i.join("&"):""}`).then(e=>e.Data)}}},12660:function(e,t,n){n.d(t,{rU:function(){return E}});var r,a,i,o,s=n(67294),l=n.t(s,2),c=n(73935),u=n.t(c,2),d=n(12599);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let f=s.createContext(null),h=s.createContext(null),g=s.createContext(null),p=s.createContext({outlet:null,matches:[],isDataRoute:!1});function v(){return null!=s.useContext(g)}function $(){return v()||(0,d.J0)(!1),s.useContext(g).location}function y(e){s.useContext(h).static||s.useLayoutEffect(e)}function x(e,t){let{relative:n}=void 0===t?{}:t,{future:r}=s.useContext(h),{matches:a}=s.useContext(p),{pathname:i}=$(),o=JSON.stringify((0,d.cm)(a,r.v7_relativeSplatPath));return s.useMemo(()=>(0,d.pC)(e,JSON.parse(o),i,"path"===n),[e,o,i,n])}var b,C,w,Z=((b=Z||{}).UseBlocker="useBlocker",b.UseRevalidator="useRevalidator",b.UseNavigateStable="useNavigate",b),M=((C=M||{}).UseBlocker="useBlocker",C.UseLoaderData="useLoaderData",C.UseActionData="useActionData",C.UseRouteError="useRouteError",C.UseNavigation="useNavigation",C.UseRouteLoaderData="useRouteLoaderData",C.UseMatches="useMatches",C.UseRevalidator="useRevalidator",C.UseNavigateStable="useNavigate",C.UseRouteId="useRouteId",C);/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}l.startTransition,(w=AwaitRenderStatus||{})[w.pending=0]="pending",w[w.success=1]="success",w[w.error=2]="error",new Promise(()=>{});let T=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];try{window.__reactRouterVersion="6"}catch(P){}l.startTransition,u.flushSync,l.useId;let D="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,L=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,E=s.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:a,replace:i,state:o,target:l,to:c,preventScrollReset:u,unstable_viewTransition:g}=e,b=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,T),{basename:C}=s.useContext(h),w,P=!1;if("string"==typeof c&&L.test(c)&&(w=c,D))try{let E=new URL(window.location.href),S=new URL(c.startsWith("//")?E.protocol+c:c),k=(0,d.Zn)(S.pathname,C);S.origin===E.origin&&null!=k?c=k+S.search+S.hash:P=!0}catch(U){}let j=function(e,t){let{relative:n}=void 0===t?{}:t;v()||(0,d.J0)(!1);let{basename:r,navigator:a}=s.useContext(h),{hash:i,pathname:o,search:l}=x(e,{relative:n}),c=o;return"/"!==r&&(c="/"===o?r:(0,d.RQ)([r,o])),a.createHref({pathname:c,search:l,hash:i})}(c,{relative:r}),N=function(e,t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l}=void 0===t?{}:t,c=function(){let{isDataRoute:e}=s.useContext(p);return e?function(){var e,t;let n,{router:r}=(Z.UseNavigateStable,(n=s.useContext(f))||(0,d.J0)(!1),n),a,i,o,l=(t=M.UseNavigateStable,(a=s.useContext(p))||(0,d.J0)(!1),(o=a.matches[a.matches.length-1]).route.id||(0,d.J0)(!1),o.route.id),c=s.useRef(!1);return y(()=>{c.current=!0}),s.useCallback(function(e,t){void 0===t&&(t={}),c.current&&("number"==typeof e?r.navigate(e):r.navigate(e,m({fromRouteId:l},t)))},[r,l])}():function(){v()||(0,d.J0)(!1);let e=s.useContext(f),{basename:t,future:n,navigator:r}=s.useContext(h),{matches:a}=s.useContext(p),{pathname:i}=$(),o=JSON.stringify((0,d.cm)(a,n.v7_relativeSplatPath)),l=s.useRef(!1);return y(()=>{l.current=!0}),s.useCallback(function(n,a){if(void 0===a&&(a={}),!l.current)return;if("number"==typeof n){r.go(n);return}let s=(0,d.pC)(n,JSON.parse(o),i,"path"===a.relative);null==e&&"/"!==t&&(s.pathname="/"===s.pathname?t:(0,d.RQ)([t,s.pathname])),(a.replace?r.replace:r.push)(s,a.state,a)},[t,r,o,i,e])}()}(),u=$(),g=x(e,{relative:o});return s.useCallback(t=>{var s,m,f;if(0===t.button&&(!n||"_self"===n)&&!t.metaKey&&!t.altKey&&!t.ctrlKey&&!t.shiftKey){t.preventDefault();let h=void 0!==r?r:(0,d.Ep)(u)===(0,d.Ep)(g);c(e,{replace:h,state:a,preventScrollReset:i,relative:o,unstable_viewTransition:l})}},[u,c,g,r,a,n,e,i,o,l])}(c,{replace:i,state:o,target:l,preventScrollReset:u,relative:r,unstable_viewTransition:g});return s.createElement("a",R({},b,{href:w||j,onClick:P||a?n:function(e){n&&n(e),e.defaultPrevented||N(e)},ref:t,target:l}))});(r=i||(i={})).UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState",(a=o||(o={})).UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration"}}]);