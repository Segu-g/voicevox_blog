(self.webpackChunkvoicevox_blog=self.webpackChunkvoicevox_blog||[]).push([[390],{7606:function(e,t,n){"use strict";n.d(t,{G:function(){return p}});var a=n(4694),r=n(5697),o=n.n(r),i=n(7294);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function f(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,a=t.indexOf(":"),r=d(t.slice(0,a)),o=t.slice(a+1).trim();return r.startsWith("webkit")?e[(n=r,n.charAt(0).toUpperCase()+n.slice(1))]=o:e[r]=o,e}),{})}var v=!1;try{v=!0}catch(w){}function g(e){return a.Qc.icon?a.Qc.icon(e):null===e?null:"object"===s(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function E(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?l({},e,t):{}}function p(e){var t=e.forwardedRef,n=u(e,["forwardedRef"]),r=n.icon,o=n.mask,i=n.symbol,s=n.className,c=n.title,d=n.titleId,f=g(r),w=E("classes",[].concat(m(function(e){var t,n=e.spin,a=e.pulse,r=e.fixedWidth,o=e.inverse,i=e.border,s=e.listItem,c=e.flip,A=e.size,u=e.rotation,m=e.pull,d=(l(t={"fa-spin":n,"fa-pulse":a,"fa-fw":r,"fa-inverse":o,"fa-border":i,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(A),null!=A),l(t,"fa-rotate-".concat(u),null!=u&&0!==u),l(t,"fa-pull-".concat(m),null!=m),l(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(n)),m(s.split(" ")))),h=E("transform","string"==typeof n.transform?a.Qc.transform(n.transform):n.transform),y=E("mask",g(o)),C=(0,a.qv)(f,A({},w,{},h,{},y,{symbol:i,title:c,titleId:d}));if(!C)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",f),null;var B=C.abstract,I={ref:t};return Object.keys(n).forEach((function(e){p.defaultProps.hasOwnProperty(e)||(I[e]=n[e])})),b(B[0],I)}p.displayName="FontAwesomeIcon",p.propTypes={border:o().bool,className:o().string,mask:o().oneOfType([o().object,o().array,o().string]),fixedWidth:o().bool,inverse:o().bool,flip:o().oneOf(["horizontal","vertical","both"]),icon:o().oneOfType([o().object,o().array,o().string]),listItem:o().bool,pull:o().oneOf(["right","left"]),pulse:o().bool,rotation:o().oneOf([0,90,180,270]),size:o().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:o().bool,symbol:o().oneOfType([o().bool,o().string]),title:o().string,transform:o().oneOfType([o().string,o().object]),swapOpacity:o().bool},p.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var b=function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var r=(n.children||[]).map((function(n){return e(t,n)})),o=Object.keys(n.attributes||{}).reduce((function(e,t){var a=n.attributes[t];switch(t){case"class":e.attrs.className=a,delete n.attributes.class;break;case"style":e.attrs.style=f(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[d(t)]=a}return e}),{attrs:{}}),i=a.style,s=void 0===i?{}:i,l=u(a,["style"]);return o.attrs.style=A({},o.attrs.style,{},s),t.apply(void 0,[n.tag,A({},o.attrs,{},l)].concat(m(r)))}.bind(null,i.createElement)},2511:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){return a.createElement("div",{className:e.className+" modal"+(e.isActive?" is-active":"")},a.createElement("div",{className:"modal-background",onClick:e.hide}),a.createElement("div",{className:"modal-card"},a.createElement("header",{className:"modal-card-head has-text-centered"},a.createElement("p",{className:"modal-card-title"},e.title),a.createElement("button",{className:"delete","aria-label":"close",onClick:e.hide,type:"button"})),a.createElement("section",{className:"modal-card-body"},a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:e.html}})),a.createElement("footer",{className:"modal-card-foot is-justify-content-flex-end"})))}},4543:function(e,t,n){"use strict";n.d(t,{T:function(){return p}});var a=n(7190),r=n(8014),o=n(7606),i=n(7294),s=n(5444),l=n(2511),c=function(e){var t=(0,s.useStaticQuery)("3903598066").markdownRemark.html;return i.createElement(l.Z,{title:"プライバシーポリシー",html:t,isActive:e.isActive,hide:e.hide})},A=n(4138),u=function(){var e=(0,i.useState)(!1),t=e[0],n=e[1];return{showing:t,show:function(){document.documentElement.classList.add("is-clipped"),n(!0)},hide:function(){document.documentElement.classList.remove("is-clipped"),n(!1)}}},m=function(e){var t=e.label,n=e.selected,a=e.setSelected,r=e.candidates;return(0,i.useEffect)((function(){r.find((function(e){return e==n}))||a(r[0])}),[r]),i.createElement("div",{className:"columns is-tablet is-centered is-vcentered py-0 my-2"},i.createElement("div",{className:"column is-3 py-0 my-1"},i.createElement("p",{className:"has-text-centered is-size-5 has-text-weight-bold"},t)),i.createElement("div",{className:"column is-6 py-0 my-1"},i.createElement("div",{className:"buttons is-centered"},r.map((function(e){return i.createElement("button",{className:"button is-rounded "+(e==n?"is-success has-text-weight-semibold":""),onClick:function(){return a(e)},type:"button"},i.createElement("span",null,e))})))))},d={Windows:["GPU / CPU","CPU"],Linux:["GPU / CPU","CPU"]},f={Windows:["インストーラー","Zip"],Linux:["インストーラー","Zip"]},v=function(e){var t,n,a=(0,s.useStaticQuery)("4236442321").allFile.nodes,r={Windows:{"GPU / CPU":{"インストーラー":{url:"https://github.com/VOICEVOX/voicevox/releases/download/0.9.4/VOICEVOX.Web.Setup.0.9.4.exe",name:"VOICEVOX.Setup.0.9.4.Windows.exe"},Zip:{url:"https://drive.google.com/file/d/18Jdn2KSXrCKF7S3NHtB_8sYNz8HnMHM8/view?usp=sharing",name:"VOICEVOX.0.9.4.Windows.zip"}},CPU:{"インストーラー":{url:"https://github.com/VOICEVOX/voicevox/releases/download/0.9.4/VOICEVOX-CPU.Web.Setup.0.9.4.exe",name:"VOICEVOX-CPU.Setup.0.9.4.Windows.exe"},Zip:{url:"https://drive.google.com/file/d/1JQBSOI7MidYCprGHEIQFqcDnoLhe0IBl/view?usp=sharing",name:"VOICEVOX-CPU.0.9.4.Windows.zip"}}},Linux:{"GPU / CPU":{"インストーラー":{url:a.find((function(e){return"linuxInstallNvidia"==e.name})).publicURL,name:"VOICEVOX.Installer.0.9.4.Linux.sh"},Zip:{url:"https://drive.google.com/file/d/1IS6RH5aZMYRyLh1J4uwBpZTy9yXucUYr/view?usp=sharing",name:"VOICEVOX.0.9.4.Linux.zip"}},CPU:{"インストーラー":{url:a.find((function(e){return"linuxInstallCpu"==e.name})).publicURL,name:"VOICEVOX-CPU.Installer.0.9.4.Linux.sh"},Zip:{url:"https://drive.google.com/file/d/1IS6RH5aZMYRyLh1J4uwBpZTy9yXucUYr/view?usp=sharing",name:"VOICEVOX-CPU.0.9.4.Linux.zip"}}}},o=(0,i.useState)("Windows"),l=o[0],c=o[1],A=(0,i.useState)("GPU / CPU"),u=A[0],v=A[1],g=(0,i.useState)("インストーラー"),E=g[0],p=g[1];return i.createElement("div",{className:"modal"+(e.isActive?" is-active":"")},i.createElement("div",{className:"modal-background",onClick:e.hide,role:"presentation"}),i.createElement("div",{className:"modal-card"},i.createElement(i.Fragment,null,i.createElement("header",{className:"modal-card-head has-text-centered"},i.createElement("p",{className:"modal-card-title"},"ダウンロード選択"),i.createElement("button",{className:"delete","aria-label":"close",onClick:e.hide,type:"button"})),i.createElement("section",{className:"modal-card-body"},i.createElement(m,{label:"OS",selected:l,setSelected:c,candidates:["Windows","Linux"]}),i.createElement("hr",{className:"my-3"}),i.createElement(m,{label:"対応モード",selected:u,setSelected:v,candidates:d[l]}),i.createElement("p",{className:"has-text-centered is-size-7"},"※ GPUモードの方が快適ですが、利用するためにはNvidia製GPUが必要です"),i.createElement("hr",{className:"my-3"}),i.createElement(m,{label:"パッケージ",selected:E,setSelected:p,candidates:f[l]}),i.createElement("p",{className:"has-text-centered is-size-7"},"※ 推奨パッケージはインストーラー版です"),i.createElement("p",{className:"has-text-centered is-size-7"},"※ Zip版がダウンロードできない場合はインストーラー版をご利用ください")),i.createElement("footer",{className:"modal-card-foot is-justify-content-flex-end"},i.createElement("button",{onClick:e.showReadme,className:"button",type:"button"},i.createElement("span",null,"利用規約")),i.createElement("button",{onClick:e.showHowToUse,className:"button",type:"button"},i.createElement("span",null,"使い方")),i.createElement("a",{href:null===(t=r[l][u][E])||void 0===t?void 0:t.url,download:null===(n=r[l][u][E])||void 0===n?void 0:n.name,target:"_blank",rel:"noreferrer",className:"button is-primary",type:"button",role:"button"},i.createElement("span",{className:"has-text-weight-semibold"},"ダウンロード"))))))},g=function(e){var t=(0,s.useStaticQuery)("2556604404").markdownRemark.html;return i.createElement(l.Z,{title:"使い方",html:t,isActive:e.isActive,hide:e.hide,className:"modal-how-to-use"})},E=function(e){var t=(0,s.useStaticQuery)("2384855707").markdownRemark.html;return i.createElement(l.Z,{title:"ソフトウェア利用規約",html:t,isActive:e.isActive,hide:e.hide})},p=function(e){var t=e.showingHeader,n=void 0===t||t,s=e.children;(0,i.useEffect)((function(){var e="has-navbar-fixed-top";n?document.body.classList.add(e):document.body.classList.remove(e)}),[]);var l=(0,i.useContext)(A.k);l.downloadModal=u();var m=u(),d=m.showing,f=m.show,p=m.hide,b=u(),w=b.showing,h=b.show,y=b.hide,C=u(),B=C.showing,I=C.show,Q=C.hide;return i.createElement(i.Fragment,null,n&&i.createElement("nav",{className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation"},i.createElement("div",{className:"navbar-brand"},i.createElement("a",{className:"navbar-item",href:"/"},i.createElement("img",{src:"data:image/png;base64,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"}),i.createElement("span",{className:"has-text-weight-bold is-size-5 pl-2"},"VOICEVOX"))),i.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},i.createElement("div",{className:"navbar-end"},i.createElement("div",{className:"navbar-item"},i.createElement("a",{className:"button is-primary is-rounded",onClick:function(){var e,t;l.downloadModal.show(),e="download",t="software","undefined"!=typeof window&&window.gtag&&window.gtag("event",e,{event_category:t})},target:"_blank",rel:"noreferrer",tabIndex:0},i.createElement("span",{className:"icon"},i.createElement(o.G,{icon:r.q7m})),i.createElement("span",{className:"has-text-weight-semibold"},"ダウンロード")))))),i.createElement(A.k.Provider,{value:l},s),i.createElement(v,{isActive:l.downloadModal.showing,hide:l.downloadModal.hide,showReadme:f,showHowToUse:h}),i.createElement(E,{isActive:d,hide:p}),i.createElement(c,{isActive:B,hide:Q}),i.createElement(g,{isActive:w,hide:y}),i.createElement("footer",{className:"footer"},i.createElement("div",{className:"container is-flex is-justify-content-center"},i.createElement("a",{className:"button is-outlined ml-1 mr-1",href:"https://github.com/VOICEVOX/voicevox",target:"_blank",rel:"noreferrer",type:"button",role:"button"},i.createElement("span",{className:"icon"},i.createElement(o.G,{icon:a.zhw})),i.createElement("span",null,"GitHub")),i.createElement("a",{className:"button is-outlined is-info ml-1 mr-1",href:"https://twitter.com/hiho_karuta",target:"_blank",rel:"noreferrer",type:"button",role:"button"},i.createElement("span",{className:"icon"},i.createElement(o.G,{icon:a.mdU})),i.createElement("span",null,"Twitter"))),i.createElement("div",{className:"container is-flex is-justify-content-center mt-2"},i.createElement("a",{className:"is-size-7\tml-1 mr-1",onClick:I},"プライバシーポリシー"),i.createElement("p",{className:"is-size-7\tml-1 mr-1"},"© 2021 Hiroshiba Kazuyuki"))))}},389:function(e,t,n){"use strict";var a=n(8014),r=n(7606),o=n(7294);t.Z=function(e){var t=e.url,n=e.color,i=e.className,s=e.style,l=(0,o.useState)(null),c=l[0],A=l[1],u=(0,o.useState)(!1),m=u[0],d=u[1],f=(0,o.useState)(!1),v=f[0],g=f[1];(0,o.useEffect)((function(){A(new Audio(t))}),[t]);var E=(0,o.useMemo)((function(){return n?Object.assign({},s,{backgroundColor:"white",borderColor:n,color:n}):s}),[n,s]);(0,o.useEffect)((function(){if(c){var e=function(){d(!0)},t=function(){d(!1)},n=function(){g(!0)};return c.addEventListener("play",e),c.addEventListener("pause",t),c.addEventListener("canplaythrough",n),function(){c.removeEventListener("play",e),c.removeEventListener("pause",t),c.removeEventListener("canplaythrough",n)}}}),[c]),(0,o.useEffect)((function(){return function(){c&&(c.pause(),d(!1),g(!1))}}),[c]);return o.createElement("button",{onClick:m?function(){c.pause(),c.currentTime=0}:function(){c.play()},className:"button circle-icon "+(n||"is-primary")+" "+(v?"":"is-loading")+" "+i,disabled:!v,style:E,type:"button"},v?o.createElement(r.G,{icon:m?a.Bg$:a.zc}):void 0)}},4138:function(e,t,n){"use strict";n.d(t,{k:function(){return a}});var a=n(7294).createContext({sendEvent:function(e,t){"undefined"!=typeof window&&window.gtag&&window.gtag("event",e,{event_category:t})},downloadModal:{showing:!1,show:function(){},hide:function(){}}})}}]);
//# sourceMappingURL=fcd9572d1947afb19d0722526b7e2048c308f308-68ac40f2c9707e9ef7e9.js.map