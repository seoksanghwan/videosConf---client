(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a(252)},146:function(e,t){},248:function(e,t,a){},252:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(15),r=a(256),s=a(16),c=a(37),i=a(51),p=a(9);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m,u=a(101),d=a.n(u),g=a(38),E=a(5),h="ALERT_WARNING",f={items:{},isLoggedIn:!1,error:null,isroom:[],peers:[],inroom:!0,webrtc:null,roomname:"",mute:!1,length:0,pass:!1,popopen:!1,focusid:"",focustitle:"",aboutValueTitle:"",alertMessage:"\ud68c\uc758\uc2e4 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",spinner:!1,alertBoxBottom:"",alertColor:"#3c29aa",channelAlertMessage:!1,loggedPopUp:!1,deleteAelrt:!1,ieCehck:"",pageReturn:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOGIN_USER":return Object(E.a)({},e,{isLoggedIn:!0,items:t.data});case"IS_LOGGED_IN_DATA":var a=Boolean(t.data)?t.data:{},o=!!Boolean(t.data);return Object(E.a)({},e,{isLoggedIn:o,items:a});case"IS_LOGOUT_DATA":return Object(E.a)({},e,{isLoggedIn:!1,items:{}});case"ROOMS_DATA":var n=Object(g.a)(t.data).concat(Object(g.a)(e.isroom));return Object(E.a)({},e,{isroom:n});case"ROOM_ADD":var l=Object(g.a)(e.isroom).concat([t.data]);return Object(E.a)({},e,{isroom:l});case"ROOM_REMOVE_POP":var r=e.isroom,s=t.data,c=r.filter(function(e){return s!==e._id});return Object(E.a)({},e,{isroom:c,deleteAelrt:t.deleteMsg});case"ROOM_REMOVE":return Object(E.a)({},e,{deleteAelrt:t.deleteMsg});case"RTC_SETTING":return Object(E.a)({},e,{webrtc:t.payload});case"ADD_MEDIA":var i=Object(g.a)(e.peers).concat([t.peer]);return Object(E.a)({},e,{peers:i});case"REMOVE_VIDEO":return Object(E.a)({},e,{peers:e.peers.filter(function(e){return!e.closed})});case"READY_TO_CALL":case"LOCAL_VDIEO":case"CONNECTED_LOCAL":case"DISCONNECTED_WEBCAM":return Object(E.a)({},e);case"AUDIO_CHECK":return e.mute?t.func.unmute():t.func.mute(),Object(E.a)({},e,{mute:!e.mute});case"CHANNEL_CHECK":return Object(E.a)({},e);case"PASSWORD_CHECK":return Object(E.a)({},e,{pass:t.result,focustitle:t.title,spinner:!1});case"POP_EVENT_CHECK":return Object(E.a)({},e,{popopen:t.booelan,focusid:t.dataId,aboutValueTitle:t.targetTitle});case"FORMAT_ROOM_PASS":return Object(E.a)({},e,{pass:t.pass});case"POP_ClOSE_CHECK":return Object(E.a)({},e,{popopen:t.booelan,loggedPopUp:t.popBoolean,deleteAelrt:t.deleteMsg});case"ROOM_MAINTENANCE":return Object(E.a)({},e,{pass:t.data,inroom:t.roomBoolean});case"ROOM_TITLE_MATCH":return Object(E.a)({},e,{inroom:t.roomBoolean});case"ALERT_MESSAGE_CHANGE":return Object(E.a)({},e,{alertMessage:t.message});case"SPINNER_ACTION":return Object(E.a)({},e,{spinner:t.check});case h:return Object(E.a)({},e,{alertBoxBottom:t.alert,alertColor:t.color,channelAlertMessage:t.resultBoolean});case"LOGGIN_POP_OPEN":return Object(E.a)({},e,{loggedPopUp:t.popBoolean});case"IE_CHECK":return Object(E.a)({},e,{ieCehck:t.ieBoolean});case"WARNING_CHECK":return Object(E.a)({},e,{pageReturn:t.warningSould});case"GET_ERRORS":return Object(E.a)({},e,{items:{},isLoggedIn:!1});default:return e}},O=a(102),v=a.n(O),b=a(22),N=a(25),R=a(103),A=a.n(R),M=a(34),k=a.n(M),_=a(104),y=a.n(_),I=a(10),j=a(17),B=a(18),S=a(20),P=a(19),D=a(21),w=a(255),L=a(254),T=function(e){var t=e.gochnanelRoom,a=e.spinner,o=e.passCheckRef,l=e.passwordCheck,r=e.popClose,s=e.pass,c=(e.focustitle,e.inputCancel,e.alertMessage),i=e.alertBoxBottom,p=e.alertColor;return n.a.createElement("div",{className:"AlertBox"},n.a.createElement("div",{className:"loginContent"},n.a.createElement("div",{className:"close-btn"},n.a.createElement("i",{className:"fas fa-times",onClick:r})),n.a.createElement("form",null,n.a.createElement("h3",null,c),n.a.createElement("label",{htmlFor:"pass-check"},n.a.createElement("input",{type:"password",name:"pass-check",ref:o,placeholder:"\ud328\uc2a4\uc6cc\ub4dc",autoFocus:!0}),n.a.createElement("button",{name:"pass-check",onClick:l},"check",a?n.a.createElement("i",{className:"fas fa-spinner"}):null))),n.a.createElement("div",{className:"pass-check"},s?n.a.createElement("p",{className:"sucess-password",onClick:t},"\ud328\uc2a4\uc6cc\ub4dc\uac00 \uc77c\uce58\ud569\ub2c8\ub2e4. \ucc38\uc5ec\ud558\uc2e4\ub824\uba74 \ud074\ub9ad\ud574\uc8fc\uc138\uc694."):n.a.createElement("p",{style:{color:p}},i))))},V=function(e){var t=e.gochnanelRoom,a=e.channelAlertMessage,o=e.saveFormData,l=e.inputRef,r=e.passRef,s=e.passCheckRef,c=e.passwordCheck,i=e.popClose,p=e.pass,m=e.focustitle,u=e.inputCancel,d=e.popopen,g=e.alertMessage,E=e.spinner,h=e.alertBoxBottom,f=e.alertColor;return n.a.createElement("div",{className:"meeting-room-create"},n.a.createElement("div",{className:"meeting-form-box"},n.a.createElement("div",{className:"rooms-title"},n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"rooms-title"},n.a.createElement("h1",null,n.a.createElement("img",{src:"https://github.com/seoksanghwan/videosConf---client/blob/master/src/img/logo.png?raw=true",alt:""})),n.a.createElement("div",{className:"inputbox"},n.a.createElement("input",{type:"text",id:"rooms-title",name:"rooms-title",ref:l,placeholder:"\uc548\ub155\ud558\uc138\uc694. \ucc44\ub110\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694."}),n.a.createElement("input",{type:"password",id:"rooms-password",name:"rooms-title",ref:r,placeholder:"\ud328\uc2a4\uc6cc\ub4dc\ub3c4 \uc124\uc815\ud574\uc8fc\uc138\uc694."})),n.a.createElement("button",{name:"rooms-title",onClick:o},"Create!"),a?n.a.createElement("p",{className:"goingChannel-Check-Message",style:{color:f}},h):null)))),d?n.a.createElement(T,{gochnanelRoom:t,alertColor:f,alertBoxBottom:h,spinner:E,alertMessage:g,passCheckRef:s,passwordCheck:c,popClose:i,pass:p,focustitle:m,inputCancel:u}):null)},x=a(253),G=function(e){var t=e.popClose;return n.a.createElement("div",{className:"AlertBox"},n.a.createElement("div",{className:"loginContent"},n.a.createElement("div",{className:"close-btn"},n.a.createElement("i",{className:"fas fa-times",onClick:t})),n.a.createElement("h2",null,"\ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694.")))},H=function(e){var t=e.loggedPopUp,a=(e.popopen,e.popClose),o=e.loginpopEvent,l=e.isLoggedIn,r=e.alertMessageFormat,s=(e.signAlert,e.onLoginButtonClick),c=e.onLogoutButtonClick,i=e.items;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-start"},n.a.createElement("div",{className:"nav-content"},n.a.createElement("div",{className:"nav-menu"},n.a.createElement("dl",null,n.a.createElement("dt",null,n.a.createElement(x.a,{onClick:r,to:"/"},n.a.createElement("img",{src:"https://github.com/seoksanghwan/videosConf---client/blob/master/src/img/logo.png?raw=true",alt:""}))),n.a.createElement("dd",null,n.a.createElement(x.a,{onClick:r,to:"/about"},"About")),n.a.createElement("dd",null,l?n.a.createElement(x.a,{onClick:r,to:"/rooms"},"Channel List"):n.a.createElement("p",{onClick:o},"Channel List")),n.a.createElement("dd",null,l?n.a.createElement("p",{onClick:c},"Sign Out"):n.a.createElement("p",{onClick:s},"Sign In")))),n.a.createElement("div",{className:"user-info-nav"},l?n.a.createElement("p",{className:"userIn"},n.a.createElement("img",{src:i.url})," ",n.a.createElement("strong",null,i.name),"\ub2d8 \uc548\ub155\ud558\uc138\uc694."):n.a.createElement("p",null,"\ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694.")))),t?n.a.createElement(G,{popClose:a}):null)},U=function(e){var t=e.gochnanelRoom,a=e.channelAlertMessage,o=e.goingRef,l=e.goingChannel,r=e.passCheckRef,s=e.passwordCheck,c=e.popClose,i=e.pass,p=e.focustitle,m=e.popopen,u=e.inputCancel,d=e.alertMessage,g=e.spinner,E=e.alertBoxBottom,h=e.alertColor;return n.a.createElement("div",{className:"about"},n.a.createElement("div",{className:"about-content"},n.a.createElement("div",{className:"about-img"}),n.a.createElement("div",{className:"about-info-text"},n.a.createElement("h2",null,"Videos Conf"),n.a.createElement("p",null,"\uc5b8\uc81c \uc5b4\ub514\uc11c\ub4e0 \ub178\ud2b8\ubd81\ub9cc \uc788\uc73c\uba74, \ud654\uc0c1\ud68c\uc758\ub97c",n.a.createElement("br",null),"\uc2dc\uc791\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\uae08 \ubc14\ub85c \uc2dc\uc791\ud574\ubcf4\uc138\uc694."),n.a.createElement("div",{className:"goingChannel"},n.a.createElement("form",null,n.a.createElement("label",{htmlFor:"going-channel"},n.a.createElement("input",{type:"text",id:"going-channel",name:"going-channel",ref:o,placeholder:"\ucc44\ub110 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!"}),n.a.createElement("button",{name:"going-channel",onClick:l},"Go!"),a?n.a.createElement("p",{className:"goingChannel-Check-Message",style:{color:h}},E):null))))),m?n.a.createElement(T,{gochnanelRoom:t,alertColor:h,alertBoxBottom:E,spinner:g,alertMessage:d,passCheckRef:r,passwordCheck:s,popClose:c,pass:i,focustitle:p,inputCancel:u}):null)},F=function(e){e.peers;var t=e.delPopClose,a=e.gochnanelRoom,o=e.deleteAelrt,l=e.spinner,r=e.roomDelete,s=e.roomData,c=e.passCheckRef,i=e.passwordCheck,p=e.items,m=e.popopen,u=e.popEvent,d=e.popClose,g=e.roomDeletePop,E=e.pass,h=e.focustitle,f=e.inputCancel,C=e.alertMessage,O=e.alertBoxBottom,v=e.alertColor;return n.a.createElement("div",{className:"rooms-list"},n.a.createElement("dl",null,n.a.createElement("dt",null,n.a.createElement("h2",{className:"title"},"Enjoy Channel",n.a.createElement("em",null,"\uc5ec\uae30\ub294 \ucc44\ub110 \ub9ac\uc2a4\ud2b8\uc785\ub2c8\ub2e4."))),s.length?Object(b.uniqWith)(s,b.isEqual).map(function(e){return n.a.createElement("dd",{key:e._id},n.a.createElement("h3",null,e.title,n.a.createElement("p",null," Organiser ",e.userName)),n.a.createElement("div",{className:"del-enter"},n.a.createElement("button",{onClick:u,"data-id":e._id},n.a.createElement("i",{className:"fas fa-sign-in-alt","data-id":e._id})),e.userName===p.name?n.a.createElement("button",{onClick:r,"data-mail":e.userMail,"data-id":e._id},n.a.createElement("i",{className:"fas fa-trash",onClick:r,"data-mail":e.userMail,"data-id":e._id})):null))}):n.a.createElement("dd",{className:"no-channel"},"\ud604\uc7ac \ucc44\ub110\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),m?n.a.createElement(T,{gochnanelRoom:a,alertColor:v,alertBoxBottom:O,spinner:l,alertMessage:C,passCheckRef:c,passwordCheck:i,popClose:d,pass:E,focustitle:h,inputCancel:f}):null,o?n.a.createElement("div",{className:"removeAlertBox"},n.a.createElement("div",{className:"loginContent"},n.a.createElement("div",{className:"close-btn"},n.a.createElement("i",{className:"fas fa-times",onClick:t}," ")),n.a.createElement("h2",null,"\ucc44\ub110\uc744 \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"),n.a.createElement("ul",{className:"delbutton"},n.a.createElement("li",null,n.a.createElement("button",{onClick:g},"\uc608")),n.a.createElement("li",null,n.a.createElement("button",{onClick:t},"\uc544\ub2c8\uc694"))))):null)},K=function(e){function t(e){var a;return Object(j.a)(this,t),(a=Object(S.a)(this,Object(P.a)(t).call(this,e))).remoteVideos={},a}return Object(D.a)(t,e),Object(B.a)(t,[{key:"componentDidUpdate",value:function(){this.pass=this.props.pass}},{key:"componentDidMount",value:function(){var e=this.props,t=(e.inroom,e.isroom),a=(e.pass,e.peers,this.props.match.params.room_name);this.webrtc=this.props.webrtc,this.props.startLoclaVideo(this.localVideo),this.props.AddpeerVideo(this.remoteVideos),this.props.joinChat(a,t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.peers,o=t.email,l=t.url,r=(t.AddpeerVideo,t.webrtc),s=t.disconnect,c=t.handleSelfMute,i=t.mute,p=this.props.match.params.room_name;return n.a.createElement("div",{className:"details-box"},n.a.createElement("div",{className:"sidebar local"},n.a.createElement("h2",null,p),n.a.createElement("div",{className:"localBox"},n.a.createElement("video",{id:"localVideo",autoPlay:!0,ref:function(t){return e.localVideo=t}}),n.a.createElement("div",{className:"buttons"},n.a.createElement("button",{onClick:c},i?n.a.createElement("i",{className:"fas fa-volume-up"}):n.a.createElement("i",{className:"fas fa-volume-mute"})),n.a.createElement("button",{onClick:s},n.a.createElement("i",{className:"fas fa-sign-out-alt"}))),n.a.createElement("div",{className:"nick"},n.a.createElement("p",null," ",o," "))),n.a.createElement("div",{className:"remotePeerList"},n.a.createElement("h3",null,n.a.createElement("em",null,n.a.createElement("i",{className:"far fa-user"}),a.length+1),"Member"),n.a.createElement("ul",null,n.a.createElement("li",null," ",n.a.createElement("img",{src:l,alt:""})," ",n.a.createElement("p",null,o)),a.map(function(e){return n.a.createElement("li",{key:e.id}," ",n.a.createElement("img",{src:e.nick.split(",")[1],alt:""})," ",n.a.createElement("p",null,e.nick.split(",")[0]))})))),n.a.createElement("div",{className:"remotevideo"},n.a.createElement("div",{className:"remoteList"},Object(b.uniqWith)(a,b.isEqual).map(function(t){return n.a.createElement("div",{className:"vidContainer",key:t.id,id:"".concat(r.getContainerId(t))},n.a.createElement("video",{id:r.getId(t),autoPlay:!0,ref:function(a){return e.remoteVideos[t.id]=a},playsInline:!0}),n.a.createElement("div",{className:"nick"},n.a.createElement("p",null,t.nick.split(",")[0])))}))))}}]),t}(o.Component),W=function(e){function t(e){return Object(j.a)(this,t),Object(S.a)(this,Object(P.a)(t).call(this,e))}return Object(D.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.props.pageGoback(),this.props.popClose()}},{key:"render",value:function(){var e=this.props.pageReturn;return n.a.createElement("div",{className:"warning-page"},n.a.createElement("div",null,n.a.createElement("p",null,"\uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4.",n.a.createElement("br",null),"\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694 \ucc44\ub110\ub9ac\uc2a4\ud2b8\ub85c \ub3cc\uc544\uac00\uaca0\uc2b5\ub2c8\ub2e4."),n.a.createElement("p",{className:"import"},"\uc8fc\ucd5c\uc790\uac00 \ucc44\ub110\uc744 \uc0ad\uc81c \ud560 \uacbd\uc6b0 \uc790\ub3d9\uc73c\ub85c \ud1b5\uc2e0\uc774 \ub04a\uc5b4 \uc9d1\ub2c8\ub2e4.")),n.a.createElement("div",{className:"loadspin"}),e?n.a.createElement(L.a,{to:"/rooms"}):null)}}]),t}(n.a.Component),J=function(e){function t(e){var a;return Object(j.a)(this,t),a=Object(S.a)(this,Object(P.a)(t).call(this,e)),window.onpopstate=function(e){a.props.popClose(),a.disconnectSet()},a}return Object(D.a)(t,e),Object(B.a)(t,[{key:"componentDidUpdate",value:function(){this.props.location.pathname.split("/rooms/")[1]?this.props.chatRoomUsing(this.props.isroom,this.props.inroom,this.props.peers):this.disconnectSet()}},{key:"disconnectSet",value:function(){this.props.webrtc.connection.disconnect(),this.props.webrtc.stopLocalVideo(),this.props.webrtc.leaveRoom()}},{key:"disconnect",value:function(){this.props.history.push("/rooms"),this.props.alertMessageChange(),this.props.popClose()}},{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedIn,o=t.inputRef,l=t.goingRef,s=t.items,c=t.isroom,i=t.init,p=t.peers,m=t.inroom,u=t.webrtc,d=t.saveFormData,g=t.AddpeerVideo,E=t.joinChat,h=t.startLoclaVideo,f=t.handleSelfMute,C=t.goingChannel,O=t.passRef,v=t.passCheckRef,b=t.passwordCheck,N=t.pass,R=t.mute,A=t.popopen,M=t.popEvent,k=t.popClose,_=t.focustitle,y=t.inputCancel,I=t.alertMessage,j=t.spinner,B=t.alertBoxBottom,S=t.alertColor,P=t.channelAlertMessage,D=t.alertMessageFormat,T=t.onLogoutButtonClick,x=t.onLoginButtonClick,G=t.signAlert,J=t.loginpopEvent,z=t.loggedPopUp,Y=t.deleteAelrt,$=t.roomDeletePop,q=t.gochnanelRoom,Q=t.delPopClose,Z=t.roomDelete,X=t.pageGoback,ee=t.pageReturn;t.validityCheck;return n.a.createElement("div",{id:"app",className:"container"},n.a.createElement(H,{items:s,loginpopEvent:J,loggedPopUp:z,isLoggedIn:a,signAlert:G,onLoginButtonClick:x,onLogoutButtonClick:T,alertMessageFormat:D,alertBoxBottom:B,popEvent:M,popClose:k,popopen:A}),n.a.createElement(w.a,null,n.a.createElement(r.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(V,Object.assign({},e,{spinner:j,isLoggedIn:a,saveFormData:d,inputRef:o,passRef:O,pass:N,popEvent:M,popClose:k,popopen:A,passwordCheck:b,passCheckRef:v,focustitle:_,alertMessage:I,alertBoxBottom:B,alertColor:S,channelAlertMessage:P,gochnanelRoom:q}))}}),n.a.createElement(r.a,{exact:!0,path:"/about",render:function(e){return n.a.createElement(U,Object.assign({},e,{spinner:j,goingRef:l,goingChannel:C,pass:N,channelAlertMessage:P,popEvent:M,popClose:k,popopen:A,passwordCheck:b,passCheckRef:v,focustitle:_,inputCancel:y,alertMessage:I,alertBoxBottom:B,alertColor:S,gochnanelRoom:q}))}}),n.a.createElement(r.a,{exact:!0,path:"/rooms",render:function(e){return a?n.a.createElement(F,{spinner:j,popClose:k,popopen:A,pass:N,items:s,roomData:c,roomDelete:Z,passCheckRef:v,passwordCheck:b,popEvent:M,focustitle:_,inputCancel:y,alertMessage:I,alertBoxBottom:B,alertColor:S,deleteAelrt:Y,roomDeletePop:$,gochnanelRoom:q,delPopClose:Q,peers:p}):n.a.createElement(L.a,{to:"/"})}}),n.a.createElement(r.a,{exact:!0,path:"/rooms/:room_name",render:function(t){var o=s.name?s.name:"null";return a?m?n.a.createElement(K,Object.assign({},t,{init:i,email:o,url:s.url,peers:p,webrtc:u,inroom:m,isroom:c,startLoclaVideo:h,AddpeerVideo:g,joinChat:E,mute:R,pass:N,disconnect:e.disconnect.bind(e),handleSelfMute:f,localref:function(t){return e.localVideo=t}})):n.a.createElement(L.a,{to:"/warning"}):n.a.createElement("span",null,"Loading...")}}),n.a.createElement(r.a,{path:"/warning",render:function(e){return n.a.createElement(W,Object.assign({},e,{pageGoback:X,pageReturn:ee,popClose:k}))}}),n.a.createElement(r.a,{render:function(){return n.a.createElement(L.a,{to:"/"})}})),n.a.createElement("footer",null,n.a.createElement("p",null,"COPYRIGHT@VIDEOS. SEOKSANGHWAN")))}}]),t}(o.Component),z=(a(244),function(){return n.a.createElement("div",{className:"NotSupport"},n.a.createElement("p",null,"\ud604\uc7ac \uc774 \uc11c\ube44\uc2a4\ub294 \uc775\uc2a4\ud50c\ub85c\ub7ec\ub97c \uc9c0\uc6d0 \ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",n.a.createElement("br",null),"\ud06c\ub86c\uc744 \ub2e4\uc6b4 \ud6c4 \uc2e4\ud589\uc2dc\ucf1c\uc8fc\uc138\uc694.",n.a.createElement("a",{href:"https://www.google.com/intl/ko_ALL/chrome/"},"CHROME \ub2e4\uc6b4\ub85c\ub4dc")),n.a.createElement("p",{className:"NotSupportText"},"Not Support"))}),Y=function(e){function t(e){return Object(j.a)(this,t),Object(S.a)(this,Object(P.a)(t).call(this,e))}return Object(D.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){this.props.usingUserData(),this.props.channelData(),this.props.init(),this.props.getVersionOfIE()}},{key:"saveFormDatas",value:function(e){e.preventDefault();var t=this.props,a=t.isLoggedIn,o=t.items,n=t.isroom,l=this.inputNode.value,r=this.passNode.value;this.props.saveFormData(a,o,l,r,n,this.props.aboutPopEvent),this.props.MainAlertMessageChange(),this.inputNode.value="",this.passNode.value=""}},{key:"roomDeletes",value:function(e){e.preventDefault();var t=e.target.dataset.id;this.props.roomDelete(t)}},{key:"goingChannel",value:function(e){e.preventDefault();var t=this.gochannel.value,a=this.props,o=a.isLoggedIn,n=a.isroom,l=n.filter(function(e){return e.title===t})[0];this.props.goingChannels(o,t,n,l,this.props.aboutPopEvent),this.props.aboutAlertMessageChange(),this.gochannel.value=""}},{key:"passwordCheck",value:function(e){e.preventDefault();var t=this.props.aboutValueTitle,a=this.props.focusid,o=this.checkNode.value,n=this.props.isroom;this.props.passpostCheck(o,a,n,t,e)}},{key:"gochnanelRoom",value:function(){var e=this.props.focustitle;this.props.goMoveChannel(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedIn,l=t.items,s=t.isroom,c=t.peers,i=t.inroom,p=t.webrtc,m=t.joinChat,u=t.AddpeerVideo,d=t.startLoclaVideo,g=t.handleSelfMute,E=t.mute,h=t.pass,f=(t.history,t.popopen),C=t.channelcheck,O=t.popEvent,v=t.popClose,b=t.passpostCheck,N=t.focustitle,R=t.roomMatch,A=t.alertHide,M=t.inputCancel,k=t.formatRoomPassword,_=t.alertMessage,y=t.loginUser,j=t.userlogout,B=t.aboutAlertMessageChange,S=t.spinner,P=t.alertBoxBottom,D=t.alertColor,w=t.channelAlertMessage,L=t.alertMessageFormat,T=t.loginpopEvent,V=t.loggedPopUp,x=t.deleteAelrt,G=t.roomDeletePop,H=(t.gochnanelRoom,t.ieCehck),U=t.delPopClose,F=t.chatRoomUsing,K=t.pageGoback,W=t.pageReturn;return n.a.createElement(o.Fragment,null,n.a.createElement(r.a,{path:"/",render:function(t){var o;return H?null!==p&&Boolean(s)?n.a.createElement(J,Object.assign({},t,(o={isLoggedIn:a,items:l,isroom:s,channelcheck:C,chatRoomUsing:F,alertMessageFormat:L,saveFormData:e.saveFormDatas.bind(e),roomDelete:e.roomDeletes.bind(e),roomDeletePop:G.bind(e),goingChannel:e.goingChannel.bind(e),passwordCheck:e.passwordCheck.bind(e),formatRoomPassword:k,handleSelfMute:g.bind(e),inputCancel:M.bind(e),passpostCheck:b,popEvent:O.bind(e),delPopClose:U.bind(e),gochnanelRoom:e.gochnanelRoom.bind(e),loginpopEvent:T.bind(e),loggedPopUp:V,pageGoback:K,popClose:v,focustitle:N,alertHide:A,alertColor:D,pageReturn:W,alertBoxBottom:P,onLoginButtonClick:y,onLogoutButtonClick:j,signAlert:e.signAlertMessage,alertMessageChange:B,webrtc:p,peers:c,inroom:i,pass:h,roomMatch:R,channelAlertMessage:w,startLoclaVideo:d,AddpeerVideo:u,mute:E},Object(I.a)(o,"loginpopEvent",T),Object(I.a)(o,"popopen",f),Object(I.a)(o,"joinChat",m),Object(I.a)(o,"alertMessage",_),Object(I.a)(o,"spinner",S),Object(I.a)(o,"deleteAelrt",x),Object(I.a)(o,"inputRef",function(t){return e.inputNode=t}),Object(I.a)(o,"goingRef",function(t){return e.gochannel=t}),Object(I.a)(o,"passRef",function(t){return e.passNode=t}),Object(I.a)(o,"passCheckRef",function(t){return e.checkNode=t}),o))):n.a.createElement("div",{className:"loadspin"}):n.a.createElement(z,null)}}))}}]),t}(n.a.Component),$=a(105),q=a.n($),Q="https://videos-conf-service.herokuapp.com/",Z="".concat(Q,"api/auth/"),X=new N.auth.GoogleAuthProvider,ee=q()({forceRefresh:!0}),te=v()(Q),ae=function(e){e({type:"ROOM_MAINTENANCE",data:null!==localStorage.removeItem("roomPassResults")&&null})},oe=Object(c.connect)(function(e){return{items:e.items,isLoggedIn:e.isLoggedIn,error:e.error,isroom:e.isroom,inroom:e.inroom,peers:e.peers,webrtc:e.webrtc,mute:e.mute,length:e.length,popopen:e.popopen,focusid:e.focusid,pass:e.pass,focustitle:e.focustitle,aboutValueTitle:e.aboutValueTitle,alertMessage:e.alertMessage,spinner:e.spinner,alertBoxBottom:e.alertBoxBottom,alertColor:e.alertColor,channelAlertMessage:e.channelAlertMessage,loggedPopUp:e.loggedPopUp,deleteAelrt:e.deleteAelrt,ieCehck:e.ieCehck,pageReturn:e.pageReturn}},function(e){return{loginUser:function(t){N.auth().signInWithPopup(X).then(function(t){t.credential.accessToken;var a=t.user,o={uid:a.uid,name:a.displayName,url:a.photoURL,email:a.email};k.a.post("".concat(Z,"login"),o).then(function(t){var a=t.data.token;!function(e){e?k.a.defaults.headers.common.Authorization=e:delete k.a.defaults.headers.common.Authorization}(a);var o=y()(a);e({type:"IS_LOGIN_USER",data:o}),localStorage.setItem("user",JSON.stringify(o))}),e({type:h,alert:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",color:"#3f46ad",resultBoolean:!1})}).catch(function(t){e({type:"GET_ERRORS",error:t})})},usingUserData:function(){var t=JSON.parse(localStorage.getItem("user"));e({type:"IS_LOGGED_IN_DATA",data:t})},userlogout:function(){var t=localStorage.removeItem("user");N.auth().signOut().then(function(){e({type:"IS_LOGOUT_DATA",data:t}),e({type:h,alert:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",color:"#3f46ad",resultBoolean:!1})}).catch(function(t){e({type:"GET_ERRORS",error:t})})},channelData:function(){te.on("initialList",function(t){e({type:"ROOMS_DATA",data:t})}),te.on("itemAdded",function(t){e({type:"ROOM_ADD",data:t})}),te.on("itemRemove",function(t){e({type:"ROOM_REMOVE_POP",data:t})})},saveFormData:function(t,a,o,n,l,r){ae(e);var s=o.replace(/\s|\u3000/gi,""),c=Boolean(l.every(function(e){return e.title!==o}));if(t)if(o.length>1&&o.length<11){var i={title:o,roomPassword:n,userName:a.name,userMail:a.email};c||l===[]?/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/.test(n)?""===s?e({type:h,alert:"\uacf5\ubc31\ub9cc\uc73c\ub85c\ub294 \uc81c\ubaa9\uc744 \uc791\uc131 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",color:"#e30641",resultBoolean:!0}):(te.emit("addItem",i),e({type:"POP_EVENT_CHECK",booelan:!0,title:o}),r(o)):e({type:h,alert:"\ud328\uc2a4\uc6cc\ub4dc\ub294 \uc22b\uc790, \ubb38\uc790, \ud2b9\uc218\ubb38\uc790 \uc870\ud569\uc73c\ub85c 6\uae00\uc790 \uc774\uc0c1 \uc785\ub825\ud574\uc8fc\uc138\uc694.",color:"#e30641",resultBoolean:!0}):e({type:h,alert:"\uc911\ubcf5\ub41c \ucc44\ub110\uc774 \uc788\uc2b5\ub2c8\ub2e4.",color:"#e30641",resultBoolean:!0})}else e({type:h,alert:"\uc81c\ubaa9\uc740 2\uae00\uc790 \uc774\uc0c1 11\uae00\uc790 \ubbf8\ub9cc\uc774\uc5d0\uc694.",color:"#e30641",resultBoolean:!0});else e({type:h,alert:"\ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc154\uc57c, \ucc44\ub110\uc744 \uc0dd\uc131 \ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",color:"#e30641",resultBoolean:!0})},goingChannels:function(t,a,o,n,l){ae(e),t?a.length>1&&a.length<11?void 0!==n?n.title===a&&(l(a),e({type:h,alert:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",color:"#3f46ad",resultBoolean:!1})):e({type:h,alert:"\ucc44\ub110 \ubaa9\ub85d\uc5d0 \uc5c6\ub294 \ucc44\ub110\uc785\ub2c8\ub2e4.",color:"#e30641",resultBoolean:!0}):e({type:h,alert:"\ucc44\ub110 \uc81c\ubaa9\uc740 2\uae00\uc790 \ubbf8\ub9cc\uc774\uac70\ub098, 11\uae00\uc790 \uc774\uc0c1 \uc77c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",color:"#e30641",resultBoolean:!0}):e({type:h,alert:"\ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc154\uc57c, \ucc44\ub110\uc5d0 \uc785\uc7a5 \ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",color:"#e30641",resultBoolean:!0})},goMoveChannel:function(e){ee.push("/rooms/".concat(e))},roomDelete:function(t){localStorage.setItem("roomObjId",JSON.stringify(t)),e({type:"ROOM_REMOVE",deleteMsg:!0})},roomDeletePop:function(){var t=JSON.parse(localStorage.getItem("roomObjId"));e({type:"ROOM_REMOVE_POP",deleteMsg:!1}),te.emit("removeItem",t)},init:function(t){var a=JSON.parse(localStorage.getItem("user")),o=null!==a?"".concat(a.name,",").concat(a.url):"Not user";(m=new A.a({url:"https://sm1.lio.app:443/",localVideoEl:"",dataOnly:!1,debug:!1,nick:o})).on("connectionReady",function(t){e({type:"CONNECTED_LOCAL",sessionId:t})}).on("videoRemoved",function(t){e({type:"REMOVE_VIDEO",peer:t})}),e({type:"RTC_SETTING",payload:m})},startLoclaVideo:function(t){e({type:"LOCAL_VDIEO",start:m.startLocalVideo()}),m.config.localVideoEl=t||t},AddpeerVideo:function(t){m.on("videoAdded",function(a,o){t&&(e({type:"ADD_MEDIA",peer:o,rtc:m}),m.attachStream(a,t[o.id],{autoplay:!0}))})},joinChat:function(t,a){m.on("readyToCall",function(){void 0!==t&&a&&e({type:"READY_TO_CALL",joinroom:m.joinRoom(t)})})},handleSelfMute:function(t){e({type:"AUDIO_CHECK",func:m})},passpostCheck:function(t,a,o,n,l){l.preventDefault(),e({type:"SPINNER_ACTION",check:!0}),o.filter(function(o){if(o._id===a||o.title===n)if(t.length>=1){var l={password:t,roomid:o._id};k.a.post("".concat(Q,"passcheck"),l).then(function(t){var a=t.data.message;e({type:"PASSWORD_CHECK",result:a,title:o.title});var n={item:o,shouldCheck:a};!0===a?(localStorage.setItem("roomPassResults",JSON.stringify(n)),e({type:h,alert:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",color:"#3f46ad"})):(localStorage.setItem("roomPassResults",JSON.stringify(n)),e({type:"SPINNER_ACTION",check:!1}),e({type:h,alert:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc798\ubabb \uc785\ub825\ud558\uc168\uc2b5\ub2c8\ub2e4.",color:"#e30641"}))}).catch(function(t){e({type:"GET_ERRORS",error:t})})}else e({type:"SPINNER_ACTION",check:!1}),e({type:h,alert:"\ud328\uc2a4\uc6cc\ub4dc\uac00 \uc785\ub825\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",color:"#e30641"})})},chatRoomUsing:function(t,a,o){var n=JSON.parse(localStorage.getItem("roomPassResults")),l=ee.location.pathname.split("/rooms/")[1];if(l)if(t.length){var r=t.map(function(e){return e.title}).some(function(e){return e===l});r&&null!==n?l===n.item.title&&n.shouldCheck&&r?e({type:"ROOM_MAINTENANCE",data:n.shouldCheck,roomBoolean:!0}):e({type:"ROOM_MAINTENANCE",data:!1,roomBoolean:!1}):(e({type:"ROOM_MAINTENANCE",data:!1,roomBoolean:!1}),0===t.length&&e({type:"ROOM_MAINTENANCE",data:!1,roomBoolean:!1}))}else e({type:"ROOM_MAINTENANCE",data:!1,roomBoolean:!1});else e({type:"ROOM_MAINTENANCE",data:!1,roomBoolean:!1})},popEvent:function(t){var a=t.target.dataset.id;e({type:"POP_EVENT_CHECK",booelan:!0,dataId:a}),e({type:"ALERT_MESSAGE_CHANGE",message:"\ucc44\ub110 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}),e({type:h,alert:"\ucc44\ub110 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",color:"#3f46ad"})},aboutPopEvent:function(t){e({type:"POP_EVENT_CHECK",booelan:!0,targetTitle:t})},popClose:function(){ae(e),e({type:"POP_ClOSE_CHECK",booelan:!1,popBoolean:!1,deleteMsg:!1}),e({type:h,alert:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",color:"#3f46ad",resultBoolean:!1})},delPopClose:function(){ae(e),e({type:"POP_ClOSE_CHECK",deleteMsg:!1})},inputCancel:function(){e({type:"POP_ClOSE_CHECK",booelan:!1})},formatRoomPassword:function(){localStorage.removeItem("roomPassResults"),ee.location.pathname.split("/rooms/")[1]&&e({type:"FORMAT_ROOM_PASS",data:null,pass:!0})},roomMatch:function(t){var a=ee.location.pathname.split("/rooms/")[1];if(ee.location.pathname.split("/rooms/")[1]){var o=t.map(function(e){return e.title}).some(function(e){return e===a});e(o?{type:"ROOM_TITLE_MATCH",roomBoolean:!0}:{type:"ROOM_TITLE_MATCH",roomBoolean:!1})}},MainAlertMessageChange:function(){e({type:"ALERT_MESSAGE_CHANGE",message:"\ucc44\ub110\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc9c0\uae08 \ubc14\ub85c \uc785\uc7a5\ud558\uc2e4\ub824\uba74 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})},aboutAlertMessageChange:function(){e({type:"ALERT_MESSAGE_CHANGE",message:"\ucc44\ub110 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})},alertMessageFormat:function(){e({type:h,alert:"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",color:"#3f46ad",resultBoolean:!1})},loginpopEvent:function(){e({type:"LOGGIN_POP_OPEN",popBoolean:!0})},getVersionOfIE:function(){var t=function(){var e,t=navigator.userAgent.toLowerCase();if("Microsoft Internet Explorer"==navigator.appName)e="msie ";else if(t.search("trident")>-1)e="trident/.*rv:";else{if(!(t.search("edge/")>-1))return-1;e="edge/"}return null!=new RegExp(e+"([0-9]{1,})(\\.{0,}[0-9]{0,1})").exec(t)?parseFloat(RegExp.$1+RegExp.$2):-1}();e(-1==t?{type:"IE_CHECK",ieBoolean:!0}:{type:"IE_CHECK",ieBoolean:!1})},pageGoback:Object(b.debounce)(function(){e({type:"WARNING_CHECK",warningSould:!0})},3e3)}},null,{withref:!0})(Y);a(248);N.initializeApp({apiKey:"AIzaSyA2aWhmtwcW-HJ80tYyv1Hs2A9MRzY3acQ",authDomain:"videoconference-bf935.firebaseapp.com",databaseURL:"https://videoconference-bf935.firebaseio.com",projectId:"videoconference-bf935",storageBucket:"videoconference-bf935.appspot.com",messagingSenderId:"895553387250"});var ne=Object(p.a)(),le=Object(s.d)(Object(i.connectRouter)(ne)(C),Object(s.c)(Object(s.a)(Object(i.routerMiddleware)(ne),d.a)));Object(l.render)(n.a.createElement(c.Provider,{store:le},n.a.createElement(i.ConnectedRouter,{history:ne},n.a.createElement(r.a,{render:function(e){return n.a.createElement(oe,Object.assign({},e,{history:ne}))}}))),document.getElementById("root"))}},[[106,2,1]]]);
//# sourceMappingURL=main.516e125e.chunk.js.map