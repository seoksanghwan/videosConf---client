(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t){},230:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(15),r=a.n(s),l=a(16),i=a(47),c=a(96),p=a.n(c),m=a(35),u=a(5),d=a(60),h=a.n(d),f=a(24),g=a.n(f),E="IS_LOGIN_USER",v="FETCH_PRODUCTS_BEGIN",C="GET_ERRORS",b="IS_LOGGED_IN_DATA",k="IS_LOGOUT_DATA",O="ROOMS_DATA",y="RTC_SETTING",N="ADD_MEDIA",R="REMOVE_VIDEO",_="READY_TO_CALL",j="LOCAL_VDIEO",w="CONNECTED_LOCAL",M="DISCONNECTED_WEBCAM",I="AUDIO_CHECK",L="ROOM_ADD",A="ROOM_REMOVE",D="CHANNEL_CHECK",S="PASSWORD_CHECK",V="POP_EVENT_CHECK",T="POP_ClOSE_CHECK",P="ROOM_MAINTENANCE",B="ROOM_TITLE_MATCH",x="FORMAT_ROOM_PASS",F="ALERT_MESSAGE_CHANGE",H={items:{},isLoggedIn:!1,error:null,isroom:[],peers:[],inroom:!1,webrtc:null,roomname:"",mute:!1,length:0,pass:!1,popopen:!1,focusid:"",focustitle:"",aboutValueTitle:"",alertMessage:"\ud68c\uc758\uc2e4 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."};g()({forceRefresh:!0});var U,G=a(97),J=a.n(G),W=a(17),K=a(18),z=a(32),q=a.n(z),Y=a(98),Q=a.n(Y),X=a(26),Z=a(27),$=a(30),ee=a(28),te=a(31),ae=a(236),ne=a(238),oe=a(239),se=a(237),re=a(235),le=function(e){var t=e.passCheckRef,a=e.passwordCheck,n=e.popClose,s=e.pass,r=e.focustitle,l=(e.inputCancel,e.alertMessage);return o.a.createElement("div",{className:"AlertBox"},o.a.createElement("div",{className:"loginContent"},o.a.createElement("div",{className:"close-btn"},o.a.createElement("i",{className:"fas fa-times",onClick:n})),o.a.createElement("form",null,o.a.createElement("h3",null,l),o.a.createElement("label",{htmlFor:"pass_check"},o.a.createElement("input",{type:"password",name:"pass_check",ref:t,placeholder:"\ud328\uc2a4\uc6cc\ub4dc"}),o.a.createElement("button",{name:"pass_check",onClick:a,type:"button"}," check "))),o.a.createElement("div",{className:"pass-check"},s?o.a.createElement(re.a,{to:"rooms/".concat(r)},"\ud328\uc2a4\uc6cc\ub4dc\uac00 \uc77c\uce58\ud569\ub2c8\ub2e4. \ucc38\uc5ec\ud558\uc2e4\ub824\uba74 \ud074\ub9ad\ud574\uc8fc\uc138\uc694."):o.a.createElement("p",null,"\ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."))))},ie=function(e){var t=e.saveFormData,a=e.inputRef,n=e.passRef,s=e.passCheckRef,r=e.passwordCheck,l=e.popClose,i=e.pass,c=e.focustitle,p=e.inputCancel,m=e.popopen,u=e.alertMessage;return o.a.createElement("div",{className:"meeting-room-create"},o.a.createElement("div",{className:"rooms_title"},o.a.createElement("form",null,o.a.createElement("label",{htmlFor:"rooms_title"},o.a.createElement("h1",null,o.a.createElement("img",{src:"https://github.com/seoksanghwan/videosConf---client/blob/master/src/img/logo.png?raw=true",alt:""}),o.a.createElement(re.a,{className:"navbar-item",to:"/rooms"},"Channel List")),o.a.createElement("div",{className:"inputbox"},o.a.createElement("input",{type:"text",id:"rooms_title",name:"rooms_title",ref:a,placeholder:"\uc548\ub155\ud558\uc138\uc694!! \ud68c\uc758\uc2e4\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694."}),o.a.createElement("input",{type:"password",id:"rooms_password",name:"rooms_title",ref:n,placeholder:"\ube44\ubc00\ubc88\ud638\ub3c4 \uc124\uc815\ud574\ubd10\uc694."})),o.a.createElement("button",{name:"rooms_title",onClick:t},"Create!")))),m?o.a.createElement(le,{alertMessage:u,passCheckRef:s,passwordCheck:r,popClose:l,pass:i,focustitle:c,inputCancel:p}):null)},ce=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"navbar-start"},o.a.createElement("div",{className:"nav-content"},o.a.createElement("div",{className:"nav-menu"},o.a.createElement("dl",null,o.a.createElement("dt",null,o.a.createElement(re.a,{to:"/"},o.a.createElement("img",{src:"https://github.com/seoksanghwan/videosConf---client/blob/master/src/img/logo.png?raw=true",alt:""}))),o.a.createElement("dd",null,o.a.createElement(re.a,{to:"/about"},"About")),o.a.createElement("dd",null,e.isLoggedIn?o.a.createElement(re.a,{to:"/rooms"},"Channel List"):o.a.createElement(re.a,{onClick:e.signAlert,to:"/"},"Channel List")),o.a.createElement("dd",null,e.isLoggedIn?o.a.createElement("p",{onClick:e.onLogoutButtonClick},"Sign Out"):o.a.createElement("p",{onClick:e.onLoginButtonClick},"Sign In")))),o.a.createElement("div",{className:"user-info-nav"},e.isLoggedIn?o.a.createElement("p",null,o.a.createElement("img",{src:e.items.url})," ",o.a.createElement("strong",null,e.items.name),"\ub2d8 \uc548\ub155\ud558\uc138\uc694.!!"):o.a.createElement("p",null,"\ub85c\uadf8\uc778\ud574\uc8fc\uc138\uc694.")))))},pe=function(e){var t=e.goingRef,a=e.goingChannel,n=e.passCheckRef,s=e.passwordCheck,r=e.popClose,l=e.pass,i=e.focustitle,c=e.popopen,p=e.inputCancel,m=e.alertMessage;return o.a.createElement("div",{className:"about"},o.a.createElement("div",{className:"about-content"},o.a.createElement("div",{className:"about-img"},o.a.createElement("img",{src:"https://github.com/seoksanghwan/videosConf---client/blob/master/src/img/webcamconf.png?raw=true",alt:""})),o.a.createElement("div",{className:"about-info-text"},o.a.createElement("h2",null,"Videos Conf"),o.a.createElement("p",null,"\uc5b8\uc81c \uc5b4\ub514\uc11c\ub4e0 \ub178\ud2b8\ubd81\ub9cc \uc788\uc73c\uba74, \ud654\uc0c1\ud68c\uc758\ub97c",o.a.createElement("br",null),"\uc2dc\uc791 \ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\uae08 \ubc14\ub85c \uc2dc\uc791\ud574\ubcf4\uc138\uc694.!!"),o.a.createElement("div",{className:"goingChannel"},o.a.createElement("label",{htmlFor:"going_channel"},o.a.createElement("input",{type:"text",id:"going_channel",name:"going_channel",ref:t,placeholder:"\ucc44\ub110 \uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694!"}),o.a.createElement("button",{name:"going_channel",onClick:a},"Go!"))))),c?o.a.createElement(le,{alertMessage:m,passCheckRef:n,passwordCheck:s,popClose:r,pass:l,focustitle:i,inputCancel:p}):null)},me=function(e){var t=e.roomDelete,a=e.roomData,n=e.passCheckRef,s=e.passwordCheck,r=e.items,l=e.popopen,i=e.popEvent,c=e.popClose,p=e.pass,m=e.focustitle,u=e.inputCancel,d=e.alertMessage;return o.a.createElement("div",{className:"rooms-list"},o.a.createElement("dl",null,o.a.createElement("dt",null,o.a.createElement("h2",{className:"title"},"Enjoy Channel!!",o.a.createElement("em",null,"\uc548\ub155\ud558\uc138\uc694 \ud68c\uc758\uc2e4 \ub9ac\uc2a4\ud2b8\uc785\ub2c8\ub2e4."))),Object(W.uniqWith)(a,W.isEqual).map(function(e){return o.a.createElement("dd",{key:e._id},o.a.createElement("h3",null,e.title,o.a.createElement("p",null," Organiser ",e.userName)),o.a.createElement("div",{className:"del-enter"},o.a.createElement("button",{onClick:i,"data-id":e._id},o.a.createElement("i",{className:"fas fa-sign-in-alt","data-id":e._id})),e.userName===r.name?o.a.createElement("button",{onClick:t,"data-mail":e.userMail,"data-id":e._id},o.a.createElement("i",{className:"fas fa-trash","data-mail":e.userMail,"data-id":e._id})):null))})),l?o.a.createElement(le,{alertMessage:d,passCheckRef:n,passwordCheck:s,popClose:c,pass:p,focustitle:m,inputCancel:u}):null)},ue=function(e){function t(e){var a;return Object(X.a)(this,t),(a=Object($.a)(this,Object(ee.a)(t).call(this,e))).remoteVideos={},a}return Object(te.a)(t,e),Object(Z.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.room_name;this.webrtc=this.props.webrtc,this.props.startLoclaVideo(this.localVideo),this.props.AddpeerVideo(this.remoteVideos),this.props.joinChat(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.peers,n=t.email,s=t.url,r=(t.AddpeerVideo,t.webrtc),l=t.disconnect,i=t.handleSelfMute,c=t.mute,p=t.connectVideo,m=this.props.match.params.room_name;return o.a.createElement("div",{className:"details-box"},o.a.createElement("div",{className:"sidebar local"},o.a.createElement("h2",null,m,o.a.createElement("em",null,o.a.createElement("i",{className:"far fa-user"})," ",a.length+1)),o.a.createElement("div",{className:"localBox"},o.a.createElement("video",{id:"localVideo",autoPlay:!0,ref:function(t){return e.localVideo=t}}),o.a.createElement("div",{className:"nick"},o.a.createElement("p",null," ",n," "))),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:p},o.a.createElement("i",{className:"fas fa-video"})),o.a.createElement("button",{onClick:i},c?o.a.createElement("i",{className:"fas fa-volume-up"}):o.a.createElement("i",{className:"fas fa-volume-mute"})),o.a.createElement("button",{onClick:l},o.a.createElement("i",{className:"fas fa-sign-out-alt"})),o.a.createElement("p",null,"\ud1b5\ud654\ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694.")),o.a.createElement("div",{className:"remotePeerList"},o.a.createElement("h3",null,"Member"),o.a.createElement("ul",null,o.a.createElement("li",null," ",o.a.createElement("img",{src:s,alt:""})," ",o.a.createElement("p",null,n)),a.map(function(e){return o.a.createElement("li",{key:e.id}," ",o.a.createElement("img",{src:e.nick.split(",")[1],alt:""})," ",o.a.createElement("p",null,e.nick.split(",")[0]))})))),o.a.createElement("div",{className:"remotevideo"},Object(W.uniqWith)(a,W.isEqual).map(function(t){return o.a.createElement("div",{className:"vidContainer",key:t.id,id:"".concat(r.getContainerId(t))},o.a.createElement("video",{id:r.getId(t),autoPlay:!0,ref:function(a){return e.remoteVideos[t.id]=a},playsInline:!0}),o.a.createElement("div",{className:"nick"},o.a.createElement("p",null,t.nick.split(",")[0])))})))}}]),t}(n.Component),de=function(e){function t(e){var a;return Object(X.a)(this,t),a=Object($.a)(this,Object(ee.a)(t).call(this,e)),window.onpopstate=function(e){a.props.popClose()},a}return Object(te.a)(t,e),Object(Z.a)(t,[{key:"componentDidUpdate",value:function(){this.props.location.pathname.split("/rooms/")[1]||(this.disconnectSet(),this.props.alertMessageChange()),this.props.roomMatch(this.props.isroom)}},{key:"disconnectSet",value:function(){this.props.webrtc.connection.disconnect(),this.props.webrtc.stopLocalVideo(),this.props.webrtc.leaveRoom()}},{key:"connectVideo",value:function(){this.props.history.go(0)}},{key:"disconnect",value:function(){this.props.history.push("/rooms"),this.props.alertMessageChange(),this.props.popClose()}},{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedIn,n=t.inputRef,s=t.goingRef,r=t.items,l=t.isroom,i=t.init,c=t.peers,p=t.inroom,m=t.webrtc,u=t.saveFormData,d=t.AddpeerVideo,h=t.joinChat,f=t.startLoclaVideo,g=t.handleSelfMute,E=t.goingChannel,v=t.passRef,C=t.passCheckRef,b=t.passwordCheck,k=t.pass,O=t.mute,y=t.popopen,N=t.popEvent,R=t.popClose,_=t.focustitle,j=t.inputCancel,w=t.alertMessage;return o.a.createElement("div",{id:"app",className:"container"},o.a.createElement(ce,{items:r,isLoggedIn:a,signAlert:this.props.signAlert,onLoginButtonClick:this.props.onLoginButtonClick,onLogoutButtonClick:this.props.onLogoutButtonClick}),o.a.createElement(oe.a,null,o.a.createElement(ne.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(ie,Object.assign({},e,{isLoggedIn:a,saveFormData:u,inputRef:n,passRef:v,pass:k,popEvent:N,popClose:R,popopen:y,passwordCheck:b,passCheckRef:C,focustitle:_,alertMessage:w}))}}),o.a.createElement(ne.a,{exact:!0,path:"/about",render:function(e){return o.a.createElement(pe,Object.assign({},e,{goingRef:s,goingChannel:E,pass:k,popEvent:N,popClose:R,popopen:y,passwordCheck:b,passCheckRef:C,focustitle:_,inputCancel:j,alertMessage:w}))}}),o.a.createElement(ne.a,{exact:!0,path:"/rooms",render:function(t){return a?o.a.createElement(me,{popClose:R,popopen:y,pass:k,items:r,roomData:l,roomDelete:e.props.roomDelete,passCheckRef:C,passwordCheck:b,popEvent:N,focustitle:_,inputCancel:j,alertMessage:w}):o.a.createElement(se.a,{to:"/"})}}),o.a.createElement(ne.a,{exact:!0,path:"/rooms/:room_name",render:function(t){var n=r.email?r.email:"null";return a&&l?k?o.a.createElement(ue,Object.assign({},t,{init:i,email:n,url:r.url,peers:c,webrtc:m,inroom:p,isroom:l,startLoclaVideo:f,AddpeerVideo:d,joinChat:h,mute:O,pass:k,connectVideo:e.connectVideo.bind(e),disconnect:e.disconnect.bind(e),handleSelfMute:g,localref:function(t){return e.localVideo=t}})):(alert("\uc798\ubabb\ub41c \uc811\uadfc\uc785\ub2c8\ub2e4."),o.a.createElement(se.a,{to:"/rooms"})):o.a.createElement("span",null,"Loading...")}}),o.a.createElement(ne.a,{render:function(){return o.a.createElement(se.a,{to:"/"})}})))}}]),t}(o.a.Component),he=(a(229),function(e){function t(e){return Object(X.a)(this,t),Object($.a)(this,Object(ee.a)(t).call(this,e))}return Object(te.a)(t,e),Object(Z.a)(t,[{key:"componentDidMount",value:function(){this.props.usingUserData(),this.props.channelData(),this.props.init(),this.props.chatRoomUsing(),this.props.alertMessageChange()}},{key:"signAlertMessage",value:function(){alert("\ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694")}},{key:"saveFormDatas",value:function(e){e.preventDefault();var t=this.props,a=t.isLoggedIn,n=t.items,o=t.isroom,s=this.inputNode.value,r=this.passNode.value;this.props.saveFormData(a,n,s,r,o,this.props.aboutPopEvent),this.props.alertMessageChange(),this.inputNode.value="",this.passNode.value=""}},{key:"roomDeletes",value:function(e){e.preventDefault();var t=e.target.dataset.id,a=e.target.dataset.mail,n=this.props.items;this.props.roomDelete(t,a,n.email)}},{key:"goingChannel",value:function(e){e.preventDefault();var t=this.gochannel.value,a=this.props.isroom.filter(function(e){return e.title===t})[0];t.length>1&&t.length<11?void 0!==a?a.title===t&&this.props.aboutPopEvent(t):(alert("\ucc44\ub110 \ubaa9\ub85d\uc5d0 \uc5c6\ub294 \ucc44\ub110\uc785\ub2c8\ub2e4."),this.gochannel.value=""):(alert("\ucc44\ub110 \uc81c\ubaa9\uc740 2\uae00\uc790 \ubbf8\ub9cc\uc774\uac70\ub098, 11\uae00\uc790 \uc774\uc0c1 \uc77c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),this.gochannel.value="")}},{key:"passwordCheck",value:function(e){e.preventDefault();var t=this.props.aboutValueTitle,a=this.props.focusid,n=this.checkNode.value,o=this.props.isroom;this.props.passpostCheck(n,a,o,t,e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.isLoggedIn,n=t.items,s=t.isroom,r=t.peers,l=t.inroom,i=t.webrtc,c=t.joinChat,p=t.AddpeerVideo,m=t.startLoclaVideo,u=t.handleSelfMute,d=t.mute,h=t.pass,f=(t.history,t.popopen),g=t.channelcheck,E=t.popEvent,v=t.popClose,C=t.passpostCheck,b=t.focustitle,k=t.roomMatch,O=t.alertHide,y=t.inputCancel,N=t.formatRoomPassword,R=t.alertMessage,_=t.loginUser,j=t.userlogout,w=t.alertMessageChange;return o.a.createElement(ae.a,null,o.a.createElement(ne.a,{render:function(t){if(s)return null!==i?o.a.createElement(de,Object.assign({},t,{isLoggedIn:a,items:n,isroom:s,channelcheck:g,saveFormData:e.saveFormDatas.bind(e),roomDelete:e.roomDeletes.bind(e),goingChannel:e.goingChannel.bind(e),passwordCheck:e.passwordCheck.bind(e),formatRoomPassword:N,handleSelfMute:u.bind(e),inputCancel:y.bind(e),passpostCheck:C,popEvent:E.bind(e),popClose:v,focustitle:b,alertHide:O,onLoginButtonClick:_,onLogoutButtonClick:j,signAlert:e.signAlertMessage,alertMessageChange:w,webrtc:i,peers:r,inroom:l,pass:h,roomMatch:k,startLoclaVideo:m,AddpeerVideo:p,mute:d,popopen:f,joinChat:c,alertMessage:R,inputRef:function(t){return e.inputNode=t},goingRef:function(t){return e.gochannel=t},passRef:function(t){return e.passNode=t},passCheckRef:function(t){return e.checkNode=t}})):null}}))}}]),t}(o.a.Component)),fe="https://videos-conf-service.herokuapp.com/",ge="".concat(fe,"api/auth/"),Ee=new K.auth.GoogleAuthProvider,ve=g()({forceRefresh:!0}),Ce=J()(fe),be=Object(i.b)(function(e){return{items:e.items,isLoggedIn:e.isLoggedIn,error:e.error,isroom:e.isroom,inroom:e.inroom,peers:e.peers,webrtc:e.webrtc,mute:e.mute,length:e.length,popopen:e.popopen,focusid:e.focusid,pass:e.pass,focustitle:e.focustitle,aboutValueTitle:e.aboutValueTitle,alertMessage:e.alertMessage}},function(e,t){return{loginUser:function(t){K.auth().signInWithPopup(Ee).then(function(t){t.credential.accessToken;var a=t.user,n={uid:a.uid,name:a.displayName,url:a.photoURL,email:a.email};q.a.post("".concat(ge,"login"),n).then(function(t){var a=t.data.token;!function(e){e?q.a.defaults.headers.common.Authorization=e:delete q.a.defaults.headers.common.Authorization}(a);var n=Q()(a);e({type:E,data:n}),localStorage.setItem("user",JSON.stringify(n))})}).catch(function(t){e({type:C,error:t})})},usingUserData:function(){var t=JSON.parse(localStorage.getItem("user"));e({type:b,data:t})},userlogout:function(){var t=localStorage.removeItem("user");K.auth().signOut().then(function(){ve.push("/"),e({type:k,data:t})}).catch(function(t){e({type:C,error:t})})},channelData:function(){Ce.on("initialList",function(t){e({type:O,data:t})}),Ce.on("itemAdded",function(t){e({type:L,data:t})}),Ce.on("itemRemove",function(t){e({type:A,data:t})})},saveFormData:function(t,a,n,o,s,r){var l=Boolean(s.every(function(e){return e.title!==n}));if(t)if(n.length>1&&n.length<11&&o.length>1&&o.length<11){var i={title:n,roomPassword:o,userName:a.name,userMail:a.email};l||s===[]?(Ce.emit("addItem",i),e({type:V,booelan:!0,title:n}),r(n)):alert("\uc911\ubcf5\ub41c \ud68c\uc758\uc2e4\uc774 \uc788\uc2b5\ub2c8\ub2e4.")}else alert("\ud68c\uc758\ubc29 \uc81c\ubaa9 \ubc0f \ud328\uc2a4\uc6cc\ub4dc\ub294 2\uae00\uc790 \uc774\uc0c1 10\uae00\uc790 \ubbf8\ub9cc\uc774\uc5d0\uc694.\n\ub2e4\uc2dc \ud55c\ubc88 \uc791\uc131\ud574\uc8fc\uc138\uc694");else alert("\ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694")},roomDelete:function(t,a,n){a===n?(Ce.emit("removeItem",t),e({type:A}),alert("\ud68c\uc758\uc2e4\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")):alert("\ud68c\uc758\uc2e4 \uc0ad\uc81c \uad8c\ud55c\uc740 \uc8fc\ucd5c\uc790\uc5d0\uac8c\ub9cc \uc788\uc5b4\uc694.")},init:function(t){var a=JSON.parse(localStorage.getItem("user")),n=null!==a?"".concat(a.email,",").concat(a.url):"Not user";(U=new h.a({url:"https://sm1.lio.app:443/",localVideoEl:"",dataOnly:!1,network:{maxPeers:2,minPeers:1},debug:!1,nick:n})).on("connectionReady",function(t){e({type:w,sessionId:t})}).on("videoRemoved",function(t){e({type:R,peer:t})}),e({type:y,payload:U})},startLoclaVideo:function(t){e({type:j,start:U.startLocalVideo()}),U.config.localVideoEl=t||t},AddpeerVideo:function(t){U.on("videoAdded",function(a,n){t&&(e({type:N,peer:n,rtc:U}),U.attachStream(a,t[n.id],{autoplay:!0}))})},joinChat:function(t){U.on("readyToCall",function(){void 0!==t&&e({type:_,joinroom:U.joinRoom(t)})})},handleSelfMute:function(t){e({type:I,func:U})},passpostCheck:function(t,a,n,o,s){s.preventDefault(),n.filter(function(n){if((n._id===a||n.title===o)&&t.length>=1){var s={password:t,roomid:n._id};q.a.post("".concat(fe,"passcheck"),s).then(function(t){var a=t.data.message;e({type:S,result:a,title:n.title});var o={item:n,shouldCheck:a};localStorage.setItem("roomPassResults",JSON.stringify(o))}).catch(function(t){e({type:C,error:t})})}})},chatRoomUsing:function(){var t=JSON.parse(localStorage.getItem("roomPassResults")),a=ve.location.pathname.split("/rooms/")[1];void 0!==a&&null!==t&&ve.location.pathname.split("/rooms/")[1]&&null!==t&&(a===t.item.title&&t.shouldCheck?e({type:P,data:t.shouldCheck}):e({type:P,data:!1}))},popEvent:function(t){var a=t.target.dataset.id;e({type:V,booelan:!0,dataId:a})},aboutPopEvent:function(t){e({type:V,booelan:!0,targetTitle:t})},popClose:function(){var t=null!==localStorage.removeItem("roomPassResults")&&null;e({type:T,booelan:!1}),e({type:P,data:t})},inputCancel:function(){e({type:T,booelan:!1})},formatRoomPassword:function(){localStorage.removeItem("roomPassResults"),ve.location.pathname.split("/rooms/")[1]&&e({type:x,data:null,pass:!0})},roomMatch:function(t){var a=ve.location.pathname.split("/rooms/")[1];if(ve.location.pathname.split("/rooms/")[1]){var n=t.map(function(e){return e.title}).some(function(e){return e===a});e(n?{type:B,roomBoolean:!0}:{type:B,roomBoolean:!1})}},alertMessageChange:function(){"/"===ve.location.pathname?e({type:F,message:"\ud68c\uc758\uc2e4\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc9c0\uae08 \ubc14\ub85c \uc785\uc7a5\ud558\uc2e4\ub824\uba74 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}):e({type:F,message:"\ud68c\uc758\uc2e4 \ud328\uc2a4\uc6cc\ub4dc\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})}}},null,{withref:!0})(he);a(230);K.initializeApp({apiKey:"AIzaSyA2aWhmtwcW-HJ80tYyv1Hs2A9MRzY3acQ",authDomain:"videoconference-bf935.firebaseapp.com",databaseURL:"https://videoconference-bf935.firebaseio.com",projectId:"videoconference-bf935",storageBucket:"videoconference-bf935.appspot.com",messagingSenderId:"895553387250"});var ke=g()({forceRefresh:!0}),Oe=Object(l.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(u.a)({},e,{islogedin:!1,items:{},isroom:[]});case E:return Object(u.a)({},e,{isLoggedIn:!0,items:t.data});case b:var a=Boolean(t.data)?t.data:{},n=!!Boolean(t.data);return Object(u.a)({},e,{isLoggedIn:n,items:a});case k:return Object(u.a)({},e,{isLoggedIn:!1,items:{},isroom:[]});case O:var o=Object(m.a)(t.data).concat(Object(m.a)(e.isroom));return Object(u.a)({},e,{isroom:o});case L:var s=Object(m.a)(e.isroom).concat([t.data]);return Object(u.a)({},e,{isroom:s});case A:var r=e.isroom,l=t.data,i=r.filter(function(e){return l!==e._id});return Object(u.a)({},e,{isroom:i});case y:return Object(u.a)({},e,{webrtc:t.payload});case N:var c=Object(m.a)(e.peers).concat([t.peer]);return Object(u.a)({},e,{peers:c});case R:return Object(u.a)({},e,{peers:e.peers.filter(function(e){return!e.closed})});case _:case j:case w:case M:return Object(u.a)({},e);case I:return e.mute?t.func.unmute():t.func.mute(),Object(u.a)({},e,{mute:!e.mute});case D:return Object(u.a)({},e);case S:return t.result?e.inroom=!0:e.inroom=!1,Object(u.a)({},e,{pass:t.result,focustitle:t.title});case V:return Object(u.a)({},e,{popopen:t.booelan,focusid:t.dataId,aboutValueTitle:t.targetTitle});case x:return Object(u.a)({},e,{pass:t.pass});case T:return Object(u.a)({},e,{popopen:t.booelan});case P:return Object(u.a)({},e,{popopen:t.booelan,pass:t.data});case B:return Object(u.a)({},e,{inroom:t.roomBoolean});case F:return Object(u.a)({},e,{alertMessage:t.message});case C:return t.payload;default:return e}},Object(l.a)(p.a));r.a.render(o.a.createElement(i.a,{store:Oe},o.a.createElement(be,{history:ke})),document.getElementById("root"))},99:function(e,t,a){e.exports=a(234)}},[[99,2,1]]]);
//# sourceMappingURL=main.08a5d33f.chunk.js.map