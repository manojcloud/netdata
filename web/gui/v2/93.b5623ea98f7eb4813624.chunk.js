!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="57f3097f-a6df-4105-bce4-a8618adacb9d",e._sentryDebugIdIdentifier="sentry-dbid-57f3097f-a6df-4105-bce4-a8618adacb9d")}catch(e){}}(),(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[93],{99093:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ge});var r=n(29439),a=n(67294),o=n(54851),c=n(5771),l=n(4942),i=n(60677),s=n(55354),u=n(15267),d=n(50955),m=n(45987),p=n(89250),g=n(22464),f=n(38700),h=["active","spaceId","testIdPrefix","local"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var E=[],v=(0,i.default)(o.Flex).attrs((function(e){return{width:7,height:7,background:e.active?"selected":"elementBackground",justifyContent:"center",alignItems:"center",round:.5}})).withConfig({displayName:"spaceLabel__SpaceBox",componentId:"sc-1e67mnq-0"})(["cursor:pointer;"]);const w=function(e){var t=e.active,n=e.spaceId,c=e.testIdPrefix,i=e.local,s=void 0!==i&&i,u=(0,m.Z)(e,h),d=(0,p.s0)(),w=(0,f.vu)(n),y=function(e){if(!e)return E;var t=e.split(" "),n=(0,r.Z)(t,2),a=n[0],o=n[1];return[a[0],o?o[0]:""]}(w.name),k=(0,r.Z)(y,2),O=k[0],x=k[1],I=(0,a.useCallback)((function(){return d(s?"/overview":"/spaces/".concat(w.slug))}),[w.slug,s]);return a.createElement(g.Z,{content:w.name,align:"right",isBasic:!0},a.createElement(v,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({active:t,"data-testid":"".concat(c||"spaceLabel-space","-").concat(w.slug),onClick:I},u),s?a.createElement(o.Icon,{name:"node",color:t?"main":"textLite"}):a.createElement(a.Fragment,null,a.createElement(o.TextSmall,{strong:!0,color:t?"main":"textLite"},O),a.createElement(o.TextSmall,{strong:!0,color:t?"textLite":"textDescription"},x))))};var y=n(36459),k=n(87462),O=n(16654),x=n(89328),I=n(26503);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const P=function(e,t){var n=t.tooltipProps;return function(t){return t.disabled?a.createElement(g.Z,Z({},n),a.createElement(o.Flex,{opacity:"weak",padding:[0,1]},a.createElement(e,Z({},t)))):a.createElement(o.Flex,{padding:[0,1]},a.createElement(e,Z({},t)))}}((function(e){var t=(0,k.Z)({},((0,y.Z)(e),e)),n=(0,O.Z)();return a.createElement(g.Z,{content:"Space settings"},a.createElement(x.Z,Z({permission:I.mk.openSettings,flavour:"borderless",icon:"gear",neutral:!0,onClick:n,small:!0,"data-ga":"left-sidebar::click-space-settings::global-view","data-testid":"workspaceBar-manageSpace"},t)))}),{tooltipProps:{content:"Only available to admins",align:"right",plain:!0}});var S=n(21011),j=n(6792),D=n(40924),F=n(53843),_=n(16702),B=n(73575),T=n(78473),L=new RegExp(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[!@#$%^&*()_+=\-])/),N=(0,T.A)([function(e){var t=e.length>=B.Pf;return(0,T.f)(t,"Please enter a name for the Space that is at least 5 characters.")},function(e){var t=e.length<=B.Qy;return(0,T.f)(t,"A Space's name can't exceed 20 characters.")},function(e){return L.test(e)?{isValid:!1,message:"There's an unexpected character in the Space's name. Use only alphanumberic characters (A-Z, a-z, 0-9) and spaces."}:{isValid:!0}}]),W=function(e){var t=e.value,n=e.isValid,c=e.setIsValid,l=e.charsIndicator,i=e.isDirty,s=e.handleChange,u=e.validationMessage,d=e.setValidationMessage,m=e.onKeyDown,p=(0,o.useTouchedState)({}),g=(0,r.Z)(p,2),f=g[0],h=g[1];return(0,a.useEffect)((function(){var e=N(t),r=e.isValid,a=e.messages&&e.messages.length?e.messages[0]:void 0;!n&&r?c(!0):n&&!r&&c(!1),a&&d(a)}),[n,t,f,c,d]),a.createElement(o.TextInput,{label:"Space name",name:"createWorkspace",placeholder:"Enter your Space's name",fieldMessage:"Give your Space a name that's between 5-20 characters. This cannot change.",fieldIndicator:l,value:t,touched:f,onBlur:h,onChange:s,success:n,error:!n&&u,instantFeedback:"positiveFirst",isDirty:i,onKeyDown:m})};const R=function(e){var t=e.onClose,n=(0,p.s0)(),c=(0,a.useState)(!1),l=(0,r.Z)(c,2),i=l[0],s=l[1],u=(0,a.useState)(!1),d=(0,r.Z)(u,2),m=d[0],g=d[1],f=(0,o.useInputValue)({maxChars:B.Qy}),h=(0,r.Z)(f,4),b=h[0],E=h[1],v=h[2],w=h[3],y=(0,a.useState)(""),k=(0,r.Z)(y,2),O=k[0],x=k[1],I=(0,a.useCallback)((function(e){var r=e.slug;g(!1),t(),n("/spaces/".concat(r))}),[t]),C=(0,S.Z)({onSuccess:I,onError:function(){return g(!1)}}),Z=(0,a.useCallback)((function(){i&&(g(!0),C({name:b}))}),[b,i]);return a.createElement(D.u6,{right:!0,closeOnEsc:!0,closeOnOverlayClick:!0,onClose:t},a.createElement(F.x,{onClose:t,title:"Create Space"},a.createElement(o.Button,{disabled:!i,isLoading:m,loadingLabel:"Creating",label:"Save",onClick:Z})),a.createElement(_.B,null,"Create a new Space"),a.createElement(D.TZ,null,a.createElement(W,{isDirty:w,isValid:i,setIsValid:s,value:b,handleChange:E,charsIndicator:v,validationMessage:O,setValidationMessage:x,onKeyDown:function(e){e.keyCode===j.DV&&i&&Z()}})))};var A=n(35970),V=n(28317),M=n(74009),z=n(43266),U=n(64783),q=function(){var e=(0,U.hd)("email"),t=(0,z.Z)().handleOpenProfileModal;return"loading"===e.state||e.state.hasError?null:a.createElement(o.IconButton,{flavour:"borderless","data-testid":"open-email-notification",cursor:"pointer",width:"20px",height:"20px",onClick:function(){return t("notifications")},icon:e.contents.email?"notification_shortcut_enabled":"notification_shortcut_disabled",tooltip:"Email Notifications","data-ga":"left-sidebar::click-user-notification-settings::global-view",iconColor:"iconColor"})};const H=(0,a.memo)(q);var G=n(44446);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var Q=i.default.div.withConfig({displayName:"spaces__Separator",componentId:"sc-8de8pq-0"})(["height:1px;width:",";background:",";"],(0,o.getSizeBy)(3),(0,o.getColor)("border")),$=(0,i.default)(o.Button).withConfig({displayName:"spaces__DocButton",componentId:"sc-8de8pq-1"})(["&&{> .button-icon{width:20px;height:20px;}}"]),J=(0,i.default)(o.Button).withConfig({displayName:"spaces__ExpandButton",componentId:"sc-8de8pq-2"})(["&&{> .button-icon{width:6px;height:9px;}}"]),X={onClickOut:function(){return(0,V.L)("header-help","click-out-modal","global-view")},onCloseClick:function(){return(0,V.L)("header-help","click-close","global-view")},onOpenIssueClick:function(){return(0,V.L)("header-help","click-\u03bfpen-issue","global-view")},onContributeClick:function(){return(0,V.L)("header-help","click-contribute","global-view")},onOpenBugClick:function(){return(0,V.L)("header-help","click-bug","global-view")},onSupportClick:function(){return(0,V.L)("header-help","click-support","global-view")},onVisitDocumentClick:function(){return(0,V.L)("header-help","click-visit-doc","global-view")},onGoToDemoClick:function(){return(0,V.L)("header-help","click-go-to-demo","global-view")}};const Y=function(e){var t=e.spacePanelCollapsed,n=e.toggleSpacePanel,c=(0,f.Iw)(),i=(0,f.th)(),m=(0,u.Z)(),p=(0,r.Z)(m,4),h=p[0],b=p[2],E=p[3];return a.createElement(o.Flex,{background:"sideBarMini","data-testid":"workspaceBar",padding:[3,2],column:!0,alignItems:"center",gap:6,height:"100vh",justifyContent:"between"},a.createElement(o.Flex,{column:!0,"data-testid":"workspaceBar-spaces-list",gap:4,alignItems:"center",overflow:"hidden"},a.createElement(d.Z,{"data-testid":"workspaceBar-netdataLogo"}),t&&a.createElement(J,{"data-testid":"workspaceBar-expandButton",onClick:n,icon:"chevron_right_s",neutral:!0,flavour:"borderless",small:!0}),a.createElement(o.Flex,{column:!0,"data-testid":"workspaceBar-spacesList",gap:4,overflow:{vertical:"auto"}},c.map((function(e){return a.createElement(w,{testIdPrefix:"workspaceBar-space",key:e,spaceId:e,active:e===i})}))),a.createElement(M.Z,{permission:I.mk.userCreateSpace},a.createElement(Q,{"data-testid":"workspaceBar-separator"})),a.createElement(g.Z,{content:"Create a new Space",align:"right"},a.createElement(x.Z,{permission:I.mk.userCreateSpace,ifForbidden:"hide",icon:"plus",onClick:b,"data-testid":"workspaceBar-addSpace-button"}))),a.createElement(o.Flex,{column:!0,"data-testid":"workspaceBar-actionsList",gap:4,alignItems:"center"},a.createElement(o.Flex,{column:!0,gap:1,alignItems:"center"},!G.ZP&&a.createElement(M.Z,{permission:I.mk.userChangeSpaceRoomNotifications},a.createElement(H,null)),a.createElement(o.Documentation,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({app:"cloud",demoUrl:s.Z.demoUrl},X),(function(e){return a.createElement(g.Z,{content:"Read documentation, engage with the community and let us know about features and bugs for the Agent or the Cloud",align:"right"},a.createElement($,{neutral:!0,flavour:"borderless",icon:"question",onClick:e,"data-ga":"header-help::click-help::global-view","data-testid":"documentation-button",title:"Need help?"}))})),!G.ZP&&a.createElement(P,null)),a.createElement(A.Z,null)),h&&a.createElement(R,{onClose:E}))};var ee=n(93433),te=n(15861),ne=n(64687),re=n.n(ne),ae=n(27856),oe=n(35835),ce=n(51066),le=n(32802),ie=n(23172),se=n(34586),ue=n(58060),de=n(23250),me=n(60506),pe=n(20036),ge=(0,i.default)(o.Icon).withConfig({displayName:"styled__TrashIcon",componentId:"sc-1hr9uxl-0"})(["&:hover{fill:",";opacity:0.6;}"],(0,o.getColor)("textFocus")),fe=(0,i.default)(o.TextSmall).withConfig({displayName:"styled__UrlWrapper",componentId:"sc-1hr9uxl-1"})(["overflow-wrap:anywhere;"]),he=(0,i.default)(o.Icon).withConfig({displayName:"styled__StyledIcon",componentId:"sc-1hr9uxl-2"})(["transform:",";"],(function(e){return e.right?"rotate(0)":"rotate(180deg)"})),be=function(){var e=(0,te.Z)(re().mark((function e(t,n){var r,a,o,c,l,i,s;return re().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.spaces,a=void 0===r?[]:r,o=n.id,e.next=3,(0,ce.kq)(o);case 3:if(c=e.sent,!(l=c.data).length){e.next=9;break}return e.next=8,Promise.any(a.map((function(e){return oe.Z.get((0,pe.W)({spaceId:e.id})).then((function(t){var n=t.data;return Promise.any(n.map((function(t){return oe.Z.get.apply(oe.Z,(0,ee.Z)((0,pe.y)({roomId:t.id,spaceId:e.id}))).then((function(n){var r=n.data.find((function(e){var t=e.id;return l.includes(t)}));if(!r)throw new Error("can't find matching node");var a=window.location,o=a.protocol,c=a.host;return"".concat(o,"//").concat(c,"/spaces/").concat(e.slug,"/rooms/").concat(t.slug,"/nodes/").concat(r.id)}))})))}))}))).then((function(e){return e})).catch((function(){}));case 8:i=e.sent;case 9:if(!i){e.next=11;break}return e.abrupt("return",i);case 11:if(!(s=t.filter((function(e){return!/netdata\.cloud\//.test(e)}))).length){e.next=16;break}return e.next=15,Promise.any(s.map((function(e){var t=/^https?:\/\//.test(e)?e:"http://".concat(e);return t=t.replace(/\/+$/,""),oe.Z.get("".concat(t,"/api/v1/info")).then((function(){return t}))}))).then((function(e){return e})).catch((function(){}));case 15:return e.abrupt("return",e.sent);case 16:return e.abrupt("return");case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ee=function(e){/https?:\/\//.test(e)||(e="http://".concat(e)),/netdata\.cloud\//.test(e)?location.assign(e):window.open(e,"_blank")},ve=function(e){var t=e.id,n=e.selectedId,c=e.setSelectedId,l=(0,le.bV)(t,"name"),i=(0,u.Z)(),s=(0,r.Z)(i,4),d=s[0],m=s[2],p=s[3],g=(0,ie.lL)(),h=(0,le.bV)(t,"urls"),b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.openList,o=n.setSelectedId,c=(0,a.useRef)(),l=(0,f.GM)("ids"),i=(0,f.Zu)(l);return(0,a.useCallback)((0,te.Z)(re().mark((function n(){return re().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o(e),c.current){n.next=5;break}return n.next=4,be(t,{spaces:i,id:e});case 4:c.current=n.sent;case 5:if(o(),c.current){n.next=8;break}return n.abrupt("return",r());case 8:Ee(c.current);case 9:case"end":return n.stop()}}),n)}))),[t,i])}(t,h,{openList:m,setSelectedId:c}),E=(0,a.useCallback)((function(){d?p():b()}),[d,b]),v=n===t;return a.createElement(a.Fragment,null,a.createElement(se.Z,{onClick:E,isSidebar:!0,padding:[1,2,1,4],testid:"visitedNodes-".concat(l),disabled:!!n&&!v,selected:v,loading:v,iconColor:"menuItem",textColor:"menuItem",Wrapper:o.TextSmall},l),d&&a.createElement(o.Flex,{column:!0,margin:[1,3],padding:[2],border:{side:"all",color:"separator"},round:2},a.createElement(o.Text,{textAlign:"center"},"We couldn't connect to any of your instances, here is the list:"),h.map((function(e){return a.createElement(se.Z,{key:e,onClick:function(){return Ee(e)},isSidebar:!0,testid:"visitedNodes-node-".concat(e),actions:a.createElement(o.Flex,{flex:!1,margin:[0,0,0,1]},a.createElement(ge,{name:"trashcan",size:"small",color:"menuItem",onClick:function(n){n.stopPropagation(),g(t,e)},width:"16px",height:"16px"})),padding:[2],Wrapper:fe,iconColor:"menuItem",textColor:"menuItem"},e)}))))},we=function(){var e=(0,ie.z2)(),t=(0,u.Z)(e.length>0),n=(0,r.Z)(t,2),c=n[0],l=n[1];(0,a.useEffect)((function(){c||l()}),[e.length]);var i=(0,a.useState)(""),s=(0,r.Z)(i,2),d=s[0],m=s[1],p=(0,ie.H3)(d),g=(0,a.useCallback)((0,ae.D)(300,(function(e){return m(e.target.value)})),[]),f=(0,a.useState)(),h=(0,r.Z)(f,2),b=h[0],E=h[1];return e.length?a.createElement(ue.Z,{isOpen:c,toggleOpen:l,label:a.createElement(o.Flex,{padding:[1,0],flex:!0,justifyContent:"between",alignItems:"center"},a.createElement(o.Flex,{alignItems:"center",gap:2},a.createElement(o.Icon,{name:"node_hollow",color:"menuItem",width:"14px",height:"14px"}),a.createElement(o.TextSmall,{color:"menuItem"},"Visited Nodes")),a.createElement(he,{right:!c,name:"chevron_down",size:"small",color:"menuItem"})),headerTestId:"visitedNodes"},e.length>3&&a.createElement(o.Flex,{padding:[1,2,2,4]},a.createElement(me.Z,{"data-testid":"search-visited-nodes-input",onChange:g,size:"tiny"})),a.createElement(o.Flex,{padding:[0,0,2],column:!0},p.length?p.map((function(e){return a.createElement(ve,{key:e,id:e,selectedId:b,setSelectedId:E})})):a.createElement(o.Text,{padding:[3,5]},"No nodes match your search"))):null};const ye=(0,a.memo)((function(){return a.createElement(de.ZP,{fallback:""},a.createElement(a.Suspense,{fallback:""},a.createElement(we,null)))}));var ke=n(21197),Oe=n(37027),xe=n(28969);function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const Ze=function(e){return function(t){var n=(0,f.th)();return a.createElement(e,Ce(Ce({},t),{},{key:n}))}};var Pe=n(36806);function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var je={isSidebar:!0,padding:[1,2,1,4],textColor:"menuItem",Wrapper:o.TextSmall};const De=Ze((function(){var e=(0,xe.gI)(I.mk.roomCreate),t=(0,xe.gI)(I.mk.roomRead),n=(0,u.Z)(t),c=(0,r.Z)(n,2),i=c[0],s=c[1],d=(0,u.Z)(!1),m=(0,r.Z)(d,4),p=m[0],f=m[2],h=m[3],b=(0,a.useCallback)((function(t){t.stopPropagation(),e&&f()}),[e]);return a.createElement(a.Fragment,null,a.createElement(ue.Z,{"data-testid":"workspaceRooms-menuList",disabled:!t,headerTestId:"workspaceRooms-warRooms",isOpen:i,label:a.createElement(o.Flex,{padding:[1,0],margin:[0,0,1,0],flex:!0,justifyContent:"between",alignItems:"center",height:"24px"},a.createElement(o.Flex,{alignItems:"center",gap:2},a.createElement(o.Icon,{name:"space_new",color:"menuItem",width:"14px",height:"14px"}),a.createElement(o.TextSmall,{color:"menuItem"},"War Rooms")),a.createElement(o.Flex,{alignItems:"center",gap:2},a.createElement(g.Z,{content:"Create a new War Room",align:"right"},a.createElement(x.Z,{permission:I.mk.roomCreate,tiny:!0,icon:"plus",onClick:b,"data-testid":"workspaceRooms-addWarRoom-button"})),a.createElement(Oe.x,{right:!i,name:"chevron_down",size:"small",color:"menuItem"}))),toggleOpen:s},a.createElement(o.Flex,{column:!0,"data-testid":"workspaceRooms-warRoomsList",padding:[0,0,1]},a.createElement(Pe.Z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},je)))),p&&a.createElement(ke.U,{onClose:h,isSubmodal:!1}))}));var Fe=n(96477),_e=n(87060),Be=(0,i.default)(o.Icon).withConfig({displayName:"styled__StyledIcon",componentId:"sc-1916a4h-0"})(["transform:",";"],(function(e){return e.right?"rotate(0)":"rotate(180deg)"})),Te=function(e){var t=e.appName,n=e.spaceId,r=(0,Fe.XW)(n,t);return a.createElement(se.Z,{key:r.url,onClick:function(){return window.open(r.url)},testid:"workspaceApps-bookmark-item",padding:[1,2,1,4],isSidebar:!0,iconColor:"menuItem",textColor:"menuItem",Wrapper:o.TextSmall},r.name)};const Le=function(){var e=(0,f.th)(),t=(0,xe.gI)(I.mk.bookmarkCreate),n=(0,xe.gI)(I.mk.bookmarkReadAll),c=(0,Fe.ZE)(e),l=(0,u.Z)(),i=(0,r.Z)(l,2),d=i[0],m=i[1],p=(0,a.useState)(!1),g=(0,r.Z)(p,2),h=g[0],b=g[1],E="".concat(s.Z.assetsBaseURL,"/img/no-bookmarks.svg");return c.length||t?a.createElement(a.Fragment,null,a.createElement(ue.Z,{disabled:!n,isOpen:d,toggleOpen:m,label:a.createElement(o.Flex,{padding:[1,0],flex:!0,justifyContent:"between",alignItems:"center"},a.createElement(o.Flex,{alignItems:"center",gap:2},a.createElement(o.Icon,{name:"bookmark",color:"menuItem",width:"14px",height:"14px"}),a.createElement(o.TextSmall,{color:"menuItem"},"Bookmarks")),a.createElement(Be,{right:!d,name:"chevron_down",size:"small",color:"menuItem"})),headerTestId:"workspaceApps-bookmarks"},a.createElement(o.Flex,{padding:[0,0,1],column:!0},c.map((function(t){return a.createElement(Te,{appName:t,spaceId:e,key:t})})),t&&a.createElement(o.Flex,{column:!0,alignItems:"center",justifyContent:"center",gap:4},!c.length&&a.createElement(a.Fragment,null,a.createElement("img",{src:E,alt:"No bookmarks",title:"No bookmarks",width:"70%"}),a.createElement(o.Text,{textAlign:"center"},"Store here the URLs of the tools that your team needs."),a.createElement("a",{style:{color:"#00AB44"},href:"https://learn.netdata.cloud/docs/cloud/get-started#add-bookmarks-to-essential-resources",target:"_blank",rel:"noopener noreferrer"},"More about bookmarks")),a.createElement(o.Flex,{gap:1,alignItems:"center"},a.createElement(o.Button,{flavour:"borderless",small:!0,icon:"plus",onClick:function(){b(!h)},"data-testid":"workspaceApps-addBookmark-button",label:"Add bookmark"}))))),h&&a.createElement(_e.J,{onToggle:b,isSubDialog:!1})):null};var Ne=n(32685),We=(0,i.default)(o.Flex).attrs({alignItems:"center",justifyContent:"center",width:10,height:4,round:.5,background:"sideBarMini"}).withConfig({displayName:"styled__AdminPill",componentId:"sc-1ps23b1-0"})(["opacity:0;",":hover &{opacity:1;}"],se.z);const Re=function(e){var t=e.children,n=e.onToggle;return a.createElement(o.Flex,{justifyContent:"between",alignItems:"center"},a.createElement(o.Flex,{alignItems:"center"},t),a.createElement(o.Button,{onClick:n,icon:"chevron_left",neutral:!0,flavour:"hollow",small:!0}))};var Ae=n(41635),Ve=n(41582);function Me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ze=(0,i.default)(ue.g).attrs({padding:[2],color:"textLite"}).withConfig({displayName:"spacePanel__ListHeader",componentId:"sc-1275zgk-0"})([""]),Ue=function(e){return a.createElement(o.Flex,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Me(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({alignItems:"center",gap:2},e),a.createElement(We,null,a.createElement(o.TextFemto,{strong:!0,color:"text"},"ADMIN")),a.createElement(o.Flex,{opacity:"medium"},a.createElement(o.Icon,{name:"padlock",size:"small",width:"18px",height:"18px",color:"text"})))};const qe=function(e){var t=e.toggleSpacePanel,n=(0,f.OS)(),c=(0,u.Z)(),l=(0,r.Z)(c,4),i=l[0],s=l[2],d=l[3],m=(0,Ne.Z)("manageInvitations"),p=(0,r.Z)(m,2)[1];return a.createElement(a.Fragment,null,i&&a.createElement(Ae.Z,{onClose:d}),a.createElement(ue.Z,{"data-testid":"spacesPanel",isOpen:!0,label:a.createElement(Re,{onToggle:t},n.name),headerTestId:"spacesPanel-activeSpaceHeader",Header:ze},a.createElement(o.Flex,{column:!0,padding:[2,0,1],"data-testid":"spacesPanel-menuList"},a.createElement(Ve.Z,{permission:I.mk.nodeCreate},(function(e){return a.createElement(se.Z,{actions:e?null:a.createElement(Ue,{"data-testid":"adminWarning-notAdmin"}),disabled:!e,onClick:s,testid:"spacesPanel-claimNodes",icon:"nodes_hollow",iconWidth:"14px",iconHeight:"14px",padding:[1,2],gap:2,isSidebar:!0,textColor:"menuItem",iconColor:"menuItem",Wrapper:o.TextSmall},"Connect Nodes")})),a.createElement(Ve.Z,{permission:I.mk.spaceInviteUser},(function(e){return a.createElement(se.Z,{actions:e?null:a.createElement(Ue,{"data-testid":"adminWarning-cannotInvite"}),disabled:!e,onClick:p,testid:"spacesPanel-inviteUsers",icon:"user",iconWidth:"14px",iconHeight:"14px",padding:[1,2],gap:2,isSidebar:!0,textColor:"menuItem",iconColor:"menuItem",Wrapper:o.TextSmall},"Invite Users")})))))};const He=function(e){var t=e.spacePanelCollapsed,n=e.toggleSpacePanel;return a.createElement(o.Collapsible,{width:56,background:"sideBar",open:!t,direction:"horizontal"},a.createElement(o.Flex,{flex:!0,width:56,column:!0,overflow:{vertical:"hidden"},padding:[2,0]},a.createElement(qe,{toggleSpacePanel:n}),a.createElement(o.Flex,{overflow:{vertical:"auto"},flex:!0,column:!0},a.createElement(De,null),a.createElement(Le,null),a.createElement(ye,null))))};const Ge=(0,a.memo)((function(){var e=(0,c.kq)("spacePanelCollapsed"),t=(0,r.Z)(e,2),n=t[0],l=t[1],i=(0,a.useCallback)((function(){return l(!n)}),[n]);return(0,a.useLayoutEffect)((function(){var e=setTimeout((function(){return window.dispatchEvent(new Event("resize"))}),400);return function(){return clearTimeout(e)}}),[n]),a.createElement(o.Flex,null,a.createElement(Y,{spacePanelCollapsed:n,toggleSpacePanel:i}),a.createElement(He,{spacePanelCollapsed:n,toggleSpacePanel:i}))}))},32685:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(27046);const a=function(e,t){var n=(0,r.Z)(e,t),a=n.isModalOpen,o=n.handleOpenModal,c=n.handleCloseModal;return[a,a?c:o,o,c,n.params]}}}]);