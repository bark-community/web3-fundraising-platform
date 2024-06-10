(()=>{var e={};e.id=888,e.ids=[888],e.modules={168:(e,t,r)=>{"use strict";function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(null,arguments)}r.d(t,{Z:()=>o});var p=r(1416),i=r.n(p);function n(e){return String(parseFloat(e)).length===String(e).length}function l(e){return parseFloat(e)}function o(e,t={}){var r;let{breakpoints:p=["sm","md","lg"],disableAlign:o=!1,factor:s=2,variants:x=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=t,u=a({},e);u.typography=a({},u.typography);let d=u.typography,h=(r=d.htmlFontSize,(e,t)=>{let a=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(a===t)return e;let p=l(e);"px"!==a&&("em"===a?p=l(e)*l(r):"rem"===a&&(p=l(e)*l(r)));let i=p;if("px"!==t){if("em"===t)i=p/l(r);else{if("rem"!==t)return e;i=p/l(r)}}return parseFloat(i.toFixed(5))+t}),f=p.map(e=>u.breakpoints.values[e]);return x.forEach(e=>{let t=d[e];if(!t)return;let r=parseFloat(h(t.fontSize,"rem"));if(r<=1)return;let{lineHeight:p}=t;if(!n(p)&&!o)throw Error(i()(6));n(p)||(p=parseFloat(h(p,"rem"))/parseFloat(r));let l=null;o||(l=e=>(function({size:e,grid:t}){let r=e-e%t,a=r+t;return e-r<a-e?r:a})({size:e,grid:function({lineHeight:e,pixels:t,htmlFontSize:r}){return t/(e*r)}({pixels:4,lineHeight:p,htmlFontSize:d.htmlFontSize})})),d[e]=a({},t,function({cssProperty:e,min:t,max:r,unit:a="rem",breakpoints:p=[600,900,1200],transform:i=null}){let n={[e]:`${t}${a}`},l=(r-t)/p[p.length-1];return p.forEach(r=>{let p=t+l*r;null!==i&&(p=i(p)),n[`@media (min-width:${r}px)`]={[e]:`${Math.round(1e4*p)/1e4}${a}`}}),n}({cssProperty:"fontSize",min:1+(r-1)/s,max:r,unit:"rem",breakpoints:f,transform:l}))}),u}},1801:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F});var a=r(997),p=r(6689),i=r.n(p),n=r(580),l=r.n(n),o=r(968),s=r.n(o),x=r(8442),u=r(1598),d=r.n(u),h=r(4960),f=r.n(h),c=r(168);let m=(e="light")=>{let t="light"===e?"#8c98a4":"#000000";return["none",`0 3px 6px 0 ${(0,x.alpha)(t,.25)}`,`0 12px 15px ${(0,x.alpha)(t,.1)}`,`0 6px 24px 0 ${(0,x.alpha)(t,.125)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,x.alpha)(t,.175)}`]},g={alternate:{main:"#f4efea",dark:"#edf1f7"},cardShadow:"rgba(23, 70, 161, .11)",mode:"light",primary:{main:"#171717",light:"#454545",dark:"#454545",contrastText:"#fff"},secondary:{light:"#ffb74d",main:"#f9b934",dark:"#FF9800",contrastText:"rgba(0, 0, 0, 0.87)"},text:{primary:"#1e2022",secondary:"#677788"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:"#ffffff",default:"#ffffff",level2:"#f5f5f5",level1:"#ffffff"}},y={alternate:{main:"#1a2138",dark:"#151a30"},cardShadow:"rgba(0, 0, 0, .11)",common:{black:"#000",white:"#fff"},mode:"dark",primary:{main:"#1976d2",light:"#2196f3",dark:"#0d47a1",contrastText:"#fff"},secondary:{light:"#FFEA41",main:"#FFE102",dark:"#DBBE01",contrastText:"rgba(0, 0, 0, 0.87)"},text:{primary:"#EEEEEF",secondary:"#AEB0B4"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#222B45",default:"#222B45",level2:"#333",level1:"#2D3748"}},b=(e,t)=>(0,c.Z)((0,x.createTheme)({palette:"light"===e?g:y,shadows:m(e),typography:{fontFamily:'"Inter", sans-serif',button:{textTransform:"none",fontWeight:"medium"}},zIndex:{appBar:1200,drawer:1300},components:{MuiButton:{styleOverrides:{root:{fontWeight:400,borderRadius:5,paddingTop:10,paddingBottom:10},containedSecondary:"light"===e?{color:"white"}:{}}},MuiInputBase:{styleOverrides:{root:{borderRadius:5}}},MuiOutlinedInput:{styleOverrides:{root:{borderRadius:5},input:{borderRadius:5}}},MuiCard:{styleOverrides:{root:{borderRadius:8}}}},themeToggler:t}));r(9783);let $=()=>{let[e,t]=(0,p.useState)("light"),[r,a]=(0,p.useState)(!1),i=e=>{try{window.localStorage.setItem("themeMode",e)}catch{}t(e)};return(0,p.useEffect)(()=>{try{let e=window.localStorage.getItem("themeMode");e?t(e):i("light")}catch{i("light")}a(!0)},[]),[e,()=>{"light"===e?i("dark"):i("light")},r]};function v({children:e}){let[t,r,p]=$();return(0,a.jsxs)(x.ThemeProvider,{theme:b(t,r),children:[a.jsx(f(),{}),a.jsx(d(),{elevation:0,children:e})]})}function F({Component:e,pageProps:t}){return(0,a.jsxs)(i().Fragment,{children:[(0,a.jsxs)(s(),{children:[a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),a.jsx("title",{children:"crypto charity"})]}),a.jsx(v,{children:a.jsx(e,{...t})})]})}v.propTypes={children:l().node.isRequired},r(4082),r(8278),r(782),r(4763),r(1759),F.propTypes={Component:l().elementType.isRequired,pageProps:l().object.isRequired}},1759:()=>{},4763:()=>{},4082:()=>{},782:()=>{},8278:()=>{},4960:e=>{"use strict";e.exports=require("@mui/material/CssBaseline")},1598:e=>{"use strict";e.exports=require("@mui/material/Paper")},8442:e=>{"use strict";e.exports=require("@mui/material/styles")},1416:e=>{"use strict";e.exports=require("@mui/utils/formatMuiErrorMessage")},9783:e=>{"use strict";e.exports=require("aos")},968:e=>{"use strict";e.exports=require("next/head")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")}};var t=require("../webpack-runtime.js");t.C(e);var r=t(t.s=1801);module.exports=r})();