!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="03a907a6-debb-4768-8331-7ec62f3dd1ea",e._sentryDebugIdIdentifier="sentry-dbid-03a907a6-debb-4768-8331-7ec62f3dd1ea")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"67fcafa0e89723987481f6de299b5bd1fcd6618a"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[3914],{39979:function(e,t,n){n.d(t,{Z:function(){return p}});n(47941),n(82526),n(57327),n(41539),n(88449),n(2490),n(59849),n(38880),n(15581),n(34514),n(54747),n(49337),n(33321),n(69070);var r=n(87462),a=n(4942),i=n(45987),o=n(67294),c=n(54005),l=["callback","feature","isStart","isSuccess","isFailure","eventReason","payload"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s=function(e){return(0,o.forwardRef)((function(t,n){var u=t.callback,s=t.feature,g=t.isStart,m=t.isSuccess,f=t.isFailure,h=t.eventReason,p=t.payload,b=void 0===p?{}:p,w=(0,i.Z)(t,l),k=(0,c.Z)(),x=k.sendLog,v=k.isReady,y=(0,o.useCallback)((function(){var e=w[u],t=d(d(d(d(d({feature:s,isStart:g,isSuccess:m,isFailure:f,eventReason:h},b),w["data-ga"]?{dataGa:w["data-ga"]}:{}),w.dataGa?{dataGa:w.dataGa}:{}),w["data-track"]?{dataTrack:w["data-track"]}:{}),w.label?{label:w.label}:{});"function"==typeof e&&e(),x(t,!0)}),[u,x,v,b,w]),E=(0,o.useMemo)((function(){return d(d({},w),{},(0,a.Z)({},u,y))}),[w,u,y]);return o.createElement(e,(0,r.Z)({ref:n},E))}))},g=n(16294),m=["payload"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(e){return(0,o.forwardRef)((function(t,n){var a=t.payload,c=void 0===a?{}:a,l=(0,i.Z)(t,m),u=s(e);return o.createElement(u,(0,r.Z)({},l,{ref:n,callback:"onClick",payload:h(h({},c),{},{action:g.Nw.buttonClicked})}))}))}},87464:function(e,t,n){var r=n(67294),a=n(99113);t.Z=function(e){var t=e.theme,n="default"==t?"grey185":"grey45";return t="dark"==t?a.DarkTheme:a.DefaultTheme,r.createElement(a.Flex,{height:"1px",width:"100%",background:(0,a.getColor)(["neutral",n])({theme:t})})}},91940:function(e,t,n){n.d(t,{Z:function(){return F}});var r=n(87462),a=n(45987),i=n(67294),o=n(14348),c=n(99113),l=(0,n(71893).default)(c.Flex).attrs({flex:{grow:"1",shrink:"0"},width:{max:"100%"}}).withConfig({displayName:"panel__Panel",componentId:"sc-4zlw7c-0"})(["",";",";"],(function(e){var t=e.order;return t&&"order: ".concat(t,";")}),(function(e){return e.bgGradient&&"background: linear-gradient(34.14deg, #536775 -26.52%, #2F3A42 53.66%);\n"})),u=n(26502),d=function(){return i.createElement(c.Flex,{alignItems:"center",column:!0,padding:[0,0,18,0]},i.createElement(u.pR,null))},s=(n(21249),n(57640),n(9924),[{icon:"rocket",title:"Rapid Deployment, Instant Insights",text:"One-command installation, automatic metric discovery, and intuitive out-of-the-box dashboards for every single metric."},{icon:"qualityOfServiceSolid",title:"Advanced Monitoring, Made Accessible",text:"Experience real-time monitoring with 1-second granularity and anomaly detection across 800+ integrations."},{icon:"firewallSolid",title:"On-Prem Data Storage, Transparent Pricing",text:"Unlimited metrics, Infinite scale, Zero hidden costs. Decentralized architecture ensures maximum data security."}]),g=n(29439),m=(n(69826),n(41539),n(31672),n(2490),n(59461),n(5429)),f=n(26398),h=function(){return f.Z.get("https://us-east1-netdata-analytics-bi.cloudfunctions.net/netdata_public_metrics_website")},p=["children"],b=["downScale"],w=function(e){var t,n=e.downScale,c=(0,a.Z)(e,b),l=(0,o.Z)("(min-width: 992px)");return(t=l?n[0]:n[1],function(e){var n=e.children,o=(0,a.Z)(e,p);return i.createElement(t,(0,r.Z)({color:"bright"},o),n)})(c)},k=n(87854),x=n.n(k),v=n(95348),y=n.n(v),E=new(x())({id:"cloudStatistics",use:"cloudStatistics-usage",viewBox:"0 0 194 146",content:'<symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 194 146" id="cloudStatistics"><path stroke="#006729" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M9.557 142.145h174.886a7.576 7.576 0 0 0 7.607-7.577v-.594H1.95v.594c0 4.16 3.43 7.577 7.607 7.577Z" /><path stroke="#006729" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M81.749 137.688h30.577c2.088 0 3.729-1.634 3.729-3.714H78.02a3.733 3.733 0 0 0 3.729 3.714ZM15.374 108.493V34.949c0-4.457 3.58-8.023 8.055-8.023H60.12M178.701 44.83v89.143H15.374v-17.086M140.442 27h30.204c4.475 0 8.055 3.566 8.055 8.023v2.526" /><path stroke="#006729" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M133.879 32.2h38.408c.671 0 1.193.52 1.193 1.189v94.939c0 .668-.522 1.188-1.193 1.188H67.131M20.595 44.086V33.39c0-.669.522-1.189 1.193-1.189h33.187M55.274 129.516H21.863c-.671 0-1.194-.52-1.194-1.188V49.881M78.766 106.487h-7.83c-5.967 0-10.815-4.828-10.815-10.771v-69.83c0-5.943 4.848-10.771 10.814-10.771h19.017M90.698 106.487H86.82" /><path stroke="#006729" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M133.208 67.71V95.64c0 5.943-4.848 10.772-10.814 10.772H93.681M107.851 15.114h14.543c5.966 0 10.814 4.83 10.814 10.772V59.39M101.064 1H92.19a2.319 2.319 0 0 0-2.312 2.303v22.954a2.319 2.319 0 0 0 2.312 2.303h8.874a2.319 2.319 0 0 0 2.312-2.302V3.227c0-1.262-1.044-2.228-2.312-2.228Z" /><path stroke="#006729" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M96.664 24.029a2.977 2.977 0 0 0 2.983-2.972 2.977 2.977 0 0 0-2.983-2.971 2.977 2.977 0 0 0-2.983 2.971 2.977 2.977 0 0 0 2.983 2.972ZM107.851 70.607c-2.834 2.897-6.786 4.68-11.186 4.68-8.652 0-15.662-6.983-15.662-15.6 0-8.618 7.01-15.6 15.662-15.6 8.651 0 15.661 6.982 15.661 15.6 0 2.748-.746 5.348-2.014 7.577" /><path stroke="#006729" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M96.664 64.144c3.296 0 5.967-2.66 5.967-5.943 0-3.282-2.671-5.943-5.967-5.943-3.295 0-5.966 2.66-5.966 5.943 0 3.282 2.671 5.943 5.966 5.943ZM111.207 85.687h3.356M78.766 85.687h28.34M97.037 90.144h10.068M86.224 90.144h7.756M99.424 64.144h-5.519c-2.983 0-5.444 2.451-5.444 5.423v3.491M104.868 73.058v-3.565c0-1.635-.671-3.046-1.79-4.012" /><path fill="#151818" d="M42.808 75.03c-19.315 0-34.915 15.6-34.915 34.914 0 19.315 15.6 34.915 34.915 34.915 19.314 0 34.914-15.6 34.914-34.915 0-19.314-15.6-34.914-34.914-34.914Zm3.714 52.743H34.636L24.98 92.116h21.543c9.88 0 17.829 7.948 17.829 17.828a17.786 17.786 0 0 1-17.829 17.829Z" /><path stroke="#006729" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M45.556 127.773h-10.92L24.98 92.116h21.543c9.88 0 17.829 7.948 17.829 17.828 0 6.463-3.417 12.109-8.617 15.229" /><path stroke="#006729" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M67.768 85.504c6.166 6.314 9.954 14.932 9.954 24.44 0 19.315-15.6 34.915-34.914 34.915-19.315 0-34.915-15.6-34.915-34.915 0-19.314 15.6-34.914 34.915-34.914 6.091 0 11.886 1.56 16.863 4.308" /></symbol>'}),O=(y().add(E),E),Z=function(e){return i.createElement(c.Flex,(0,r.Z)({as:"svg",height:O.height,width:O.width,viewBox:O.viewBox},e),i.createElement("use",{xlinkHref:"#".concat(O.id)}))},S=((0,n(39979).Z)(c.Button),function(){var e=(0,m.Z)((function(){return{fetch:h}}),[]),t=(0,g.Z)(e,1)[0],n=(0,i.useMemo)((function(){var e,n,r;return Array.isArray(t)?{nodesOnline:null===(e=t.find((function(e){return"Nodes Online"===e.key})))||void 0===e?void 0:e.value,githubStars:null===(n=t.find((function(e){return"GitHub Stars"===e.key})))||void 0===n?void 0:n.value,dockerHubPulls:null===(r=t.find((function(e){return"DockerHub Pulls"===e.key})))||void 0===r?void 0:r.value}:{}}),[t]),r=n.nodesOnline,a=n.githubStars,o=n.dockerHubPulls;return i.createElement(c.Flex,{column:!0,gap:6},i.createElement(Z,{height:"160px",padding:[0,0,4,0]}),i.createElement(c.Flex,{column:!0,gap:3},i.createElement(w,{downScale:[c.TextBigger,c.TextBigger],color:"bright",textAlign:"center"},i.createElement(w,{downScale:[c.TextBigger,c.TextBigger],color:r?"primaryHighlight":"bright",textAlign:"center",strong:!0},r||"..."),i.createElement(c.Box,{as:"span",margin:[0,0,0,3]},"Nodes Online")),i.createElement(w,{downScale:[c.TextBigger,c.TextBigger],color:"bright",textAlign:"center"},i.createElement(w,{downScale:[c.TextBigger,c.TextBigger],color:a?"primaryHighlight":"bright",textAlign:"center",strong:!0},a||"..."),i.createElement(c.Box,{as:"span",margin:[0,0,0,3]},"GitHub Stars")),i.createElement(w,{downScale:[c.TextBigger,c.TextBigger],color:"bright",textAlign:"center"},i.createElement(w,{downScale:[c.TextBigger,c.TextBigger],color:o?"primaryHighlight":"bright",textAlign:"center",strong:!0},o||"..."),i.createElement(c.Box,{as:"span",margin:[0,0,0,3]},"DockerHub Pulls"))))}),M=function(e){var t=e.icon,n=e.title,r=e.text,a=(0,o.Z)("(min-width: 475px)");return i.createElement(c.Flex,{gap:4,alignItems:"start"},a&&i.createElement(c.Flex,{background:"transparent",justifyContent:"center",alignItems:"center",height:"64px",width:"64px",round:64,flex:"grow",border:{side:"all",color:"successLite"}},i.createElement(c.Icon,{name:t,height:"20px",widht:"20px",color:"successLite"})),i.createElement(c.Flex,{column:!0,justifyContent:"start",alignItems:"start",gap:2},i.createElement(c.TextBig,{color:"bright",strong:!0},n),i.createElement(c.Text,{color:"selected"},r)))},j=n(87464),P=function(){return i.createElement(c.Flex,{column:!0,padding:[16,4,12],width:{max:"500px"},margin:[0,"auto"],gap:14},i.createElement(S,null),i.createElement(c.Flex,{column:!0,gap:8},s.map((function(e,t){return i.createElement(M,(0,r.Z)({key:t},e))}))),i.createElement(c.Flex,{column:!0,gap:6,alignItems:"center"},i.createElement(j.Z,null),i.createElement(c.Flex,{column:!0,gap:4,alignItems:"center"},i.createElement(u.lR,{theme:"dark"}),i.createElement(c.TextSmall,{textAlign:"center",color:"bright"},"Netdata is a member of the Cloud Native Computing Foundation (CNCF), and is one of the most starred projects in the CNCF landscape."))))},B=["children"],F=function(e){var t=e.children,n=(0,a.Z)(e,B),u=(0,o.Z)("(min-width: 998px)");return i.createElement(c.Flex,(0,r.Z)({height:{min:"100vh"},flexWrap:!0},n),!window.envSettings.onprem&&i.createElement(l,{background:(0,c.getColor)(["neutral","grey25"])({theme:c.DarkTheme}),order:u?0:1},i.createElement(P,null)),i.createElement(l,{background:"mainBackground",order:u?1:0},i.createElement(c.Flex,{background:"transparent",column:!0,gap:8,padding:[12,4],width:{max:"500px"},margin:[0,"auto"]},i.createElement(d,null),t)))}},87562:function(e,t,n){n.d(t,{$:function(){return a},G:function(){return i}});n(26699),n(32023),n(92222),n(74916),n(64765);var r=n(58591),a=function(e,t){var n=(0,r.kG)(["expires_at",t]),a=t.includes("join-callback")?decodeURIComponent(n):n;return"".concat(window.location.origin).concat(e,"#").concat(a)},i=function(e,t){var n=window.location,r=n.search,i=n.hash,o=encodeURIComponent(a("/sign-in".concat(r).concat(r.length?"&":"?","oauth=").concat(e,"&"),i)),c=encodeURIComponent(a("/sign-up/verify".concat(r).concat(r.length?"&":"?","oauth=").concat(e,"&"),i));return"/api/v2/auth/account/".concat(e,"?redirect_uri=").concat(o,"&register_uri=").concat(c).concat(t?"&is_unverified_registration=true":"")}}}]);