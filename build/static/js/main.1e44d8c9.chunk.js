(this.webpackJsonpreact_admin_dashboard=this.webpackJsonpreact_admin_dashboard||[]).push([[0],{200:function(e,t,a){},201:function(e,t,a){},351:function(e,t,a){},352:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),r=a.n(c),s=a(23),i=a.n(s),l=(a(200),a(32)),o=a(27),d=a(18),j=(a(201),a(67),a.p+"static/media/hello.1a1d3334.svg"),b=(a(124),a(36)),u=a(119),g=(a(297),a(298),a(299),u.a.initializeApp({apiKey:"AIzaSyDQlGeHoJnRw9RifLkHWoZj2MRiPwZYuss",authDomain:"se-project-c93ee.firebaseapp.com",projectId:"se-project-c93ee",storageBucket:"se-project-c93ee.appspot.com",messagingSenderId:"1002598702310",appId:"1:1002598702310:web:d89b9904b9159331366f27"})),h=g.firestore(),p={folders:h.collection("folders"),files:h.collection("files"),a_folders:h.collection("a_folders"),a_files:h.collection("a_files"),s_details:h.collection("s_details"),feedback:h.collection("feedback"),getTime:u.a.firestore.FieldValue.serverTimestamp,formatDoc:function(e){return Object(b.a)({id:e.id},e.data())}},m=g.storage();g.auth();var O=function(e){e.childFile;return Object(n.jsx)("main",{children:Object(n.jsxs)("div",{className:"main__container",children:[Object(n.jsxs)("div",{className:"main__title",children:[Object(n.jsx)("img",{src:j,alt:"hello"}),Object(n.jsx)("div",{className:"main__greeting",children:Object(n.jsx)("h1",{children:"Welcome to Students View!"})})]}),Object(n.jsxs)("div",{className:"main__cards",children:[Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("i",{className:"fa fa-user-o fa-2x text-lightblue","aria-hidden":"true"}),Object(n.jsxs)("div",{className:"card_inner",children:[Object(n.jsx)("p",{className:"text-primary-p",children:"Number of Subscribers"}),Object(n.jsx)("span",{className:"font-bold text-title",children:"578"})]})]}),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("i",{className:"fa fa-calendar fa-2x text-red","aria-hidden":"true"}),Object(n.jsxs)("div",{className:"card_inner",children:[Object(n.jsx)("p",{className:"text-primary-p",children:"Times of Watching"}),Object(n.jsx)("span",{className:"font-bold text-title",children:"2467"})]})]}),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("i",{className:"fa fa-video-camera fa-2x text-yellow","aria-hidden":"true"}),Object(n.jsxs)("div",{className:"card_inner",children:[Object(n.jsx)("p",{className:"text-primary-p",children:"Number of Videos"}),Object(n.jsx)("span",{className:"font-bold text-title",children:"340"})]})]}),Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("i",{className:"fa fa-thumbs-up fa-2x text-green","aria-hidden":"true"}),Object(n.jsxs)("div",{className:"card_inner",children:[Object(n.jsx)("p",{className:"text-primary-p",children:"Number of Likes"}),Object(n.jsx)("span",{className:"font-bold text-title",children:"645"})]})]})]})]})})},f=a(54),x=a.n(f),A=a(55),S=a.n(A),W=(a(85),a(115)),v=a.n(W),w=a(116),C=function(e){var t=e.currentFile;return console.log(t),Object(n.jsxs)("main",{children:[Object(n.jsx)("div",{className:"car",children:Object(n.jsx)("h2",{children:Object(n.jsx)(l.b,{onClick:function(){m.refFromURL(t.url).getDownloadURL().then((function(e){x.a.get(e,{responseType:"blob"}).then((function(e){S()(e.data,t.name)}))})).catch((function(e){console.log("ERROR")}))},style:{alignItems:"center"},children:"Click to download the Image!!!"})})}),Object(n.jsxs)("div",{className:"cards",children:[Object(n.jsx)("br",{}),Object(n.jsx)(w.a,{src:t.url,thumbnail:!0})]})]})},L=function(e){var t=e.currentFile;return console.log(t.url),Object(n.jsx)("main",{children:Object(n.jsxs)("div",{className:"cardss",children:[Object(n.jsx)("h2",{children:Object(n.jsx)(l.b,{onClick:function(){m.refFromURL(t.url).getDownloadURL().then((function(e){x.a.get(e,{responseType:"blob"}).then((function(e){S()(e.data,t.name)}))})).catch((function(e){console.log("ERROR")}))},children:"Click to download the file!!!"})}),Object(n.jsx)("img",{src:"data:image/png;base64,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",height:"75%",width:"60%"})]})})},B=function(e){var t=e.currentFile;return console.log(t),Object(n.jsx)("main",{children:Object(n.jsxs)("div",{className:"cards",children:[Object(n.jsx)("h2",{children:Object(n.jsx)(l.b,{onClick:function(){m.refFromURL(t.url).getDownloadURL().then((function(e){x.a.get(e,{responseType:"blob"}).then((function(e){S()(e.data,t.name)}))})).catch((function(e){console.log("ERROR")}))},style:{alignItems:"center"},children:"Click to download the pdf file!!!"})}),Object(n.jsx)("br",{}),Object(n.jsx)("iframe",{src:t.url,height:"100%"})]})})},J=function(e){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t={SET_CHILD_FILES:"set-child-files"};function a(e,a){var n=a.type,c=a.payload;switch(n){case t.SET_CHILD_FILES:return Object(b.a)(Object(b.a)({},e),{},{currentFile:c.currentFile});default:return e}}var n=Object(c.useReducer)(a,{uniqueid:e,currentFile:[]}),r=Object(d.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){return p.files.doc(e).get().then((function(e){e.exists?i({type:t.SET_CHILD_FILES,payload:{currentFile:e.data()}}):console.log("No such document!")}))}),[e]),s}(e.filename).currentFile,a=Object(c.useState)(""),r=Object(d.a)(a,2),s=(r[0],r[1],""+t.name);return s.includes(".png")||s.includes(".jpeg")||s.includes(".jpg")?(console.log(t,"test"),Object(n.jsx)(C,{currentFile:t})):s.includes(".pdf")?Object(n.jsx)(B,{currentFile:t}):Object(n.jsx)(L,{currentFile:t})},Y=(a(351),a.p,{marginLeft:"550px",textDecoration:"none"}),y=function(e){e.sidebarOpen;var t=e.openSidebar;return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("div",{className:"nav_icon",onClick:function(){return t()},children:Object(n.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})}),Object(n.jsxs)("div",{className:"main__title",children:[Object(n.jsxs)("a",{href:"https://dcfshome.netlify.app",style:{textDecoration:"none"},target:"_blank",children:[" ",Object(n.jsx)("h1",{children:"Digital Course File System"})]}),Object(n.jsx)("a",{href:"https://dcfshome.netlify.app/#contact",style:Y,target:"_blank",children:Object(n.jsx)("h1",{children:"Feedback & Queries"})})]})]})},k=(a(352),a.p+"static/media/logo.69e1ce7a.png");var F=function(e){var t=e.sidebarOpen,a=e.closeSidebar,r=e.topicId,s=e.fileid,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a={SET_CHILD_FILES:"set-child-files"};function n(e,t){var n=t.type,c=t.payload;switch(n){case a.SET_CHILD_FILES:return Object(b.a)(Object(b.a)({},e),{},{childFiles:c.childFiles});default:return e}}var r=Object(c.useReducer)(n,{folderId:e,childFiles:[]}),s=Object(d.a)(r,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){return p.files.where("folderId","==",e).where("userId","==",t).onSnapshot((function(e){l({type:a.SET_CHILD_FILES,payload:{childFiles:e.docs.map(p.formatDoc)}})}))}),[e]),i}(s,r).childFiles;return 0==i.length?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"centered",children:Object(n.jsx)(v.a,{type:"TailSpin",color:"#000000",height:50,width:50,timeout:3e3})})}):Object(n.jsxs)("div",{className:t?"sidebar_responsive":"",id:"sidebar",children:[Object(n.jsxs)("div",{className:"sidebar__title",children:[Object(n.jsxs)("div",{className:"sidebar__img",children:[Object(n.jsx)("img",{src:k,alt:"logo"}),Object(n.jsx)("h1",{children:"\xa0 \xa0 DCFS"})]}),Object(n.jsx)("i",{onClick:function(){return a()},className:"fa fa-times",id:"sidebarIcon","aria-hidden":"true"})]}),Object(n.jsxs)("div",{className:"sidebar__menu",children:[Object(n.jsxs)("div",{className:"sidebar__link active_menu_link",children:[Object(n.jsx)("i",{className:"fa fa-home"}),Object(n.jsx)("a",{href:"#",children:"Dashboard"})]}),Object(n.jsx)("h2",{children:"ALL Files"}),i.length>=0&&Object(n.jsx)("div",{children:i.map((function(e){return Object(n.jsxs)("div",{className:"sidebar__link",children:[Object(n.jsx)("i",{className:"fa fa-archive"}),Object(n.jsx)("a",{href:"/folders/"+r+"/"+s+"/"+e.id,children:e.name})]},e.uniqueid)}))})]})]})},N=function(){var e=Object(o.f)(),t=e.topicId,a=e.fileid,r=e.filename,s=Object(c.useState)(!1),i=Object(d.a)(s,2),l=i[0],j=i[1];return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(y,{sidebarOpen:l,openSidebar:function(){j(!0)}}),r&&Object(n.jsx)(J,{filename:r}),!r&&Object(n.jsx)(O,{filename:r}),Object(n.jsx)(F,{sidebarOpen:l,closeSidebar:function(){j(!1)},fileid:a,topicId:t})]})};function E(){var e=Object(o.g)();return Object(n.jsx)("div",{children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"".concat(e.path,"/:topicId/:fileid/:filename"),children:Object(n.jsx)(N,{})}),Object(n.jsx)(o.a,{path:"".concat(e.path,"/:topicId/:fileid"),children:Object(n.jsx)(N,{})}),Object(n.jsx)(o.a,{path:e.path,children:Object(n.jsx)("h3",{children:"No folderId is provided."})})]})})}var D=a(33),I=a(390),R=a(398),q=a(399),P=a(400),T=a(355),V=a(409),H=a(401),X=a(407),K=a(395),U=a(397),Q=a(179),G=a(394),Z=a(402),_=Object(I.a)((function(e){return{appBar:{position:"relative"},layout:Object(D.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(D.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}}));function z(e){var t=e.topicId,a=e.id,c=e.sendDataToParent,s=r.a.useState(""),i=Object(d.a)(s,2),l=i[0],o=i[1],j=r.a.useState(""),b=Object(d.a)(j,2),u=b[0],g=b[1],h=r.a.useState(""),m=Object(d.a)(h,2),O=m[0],f=m[1],x=r.a.useState(""),A=Object(d.a)(x,2),S=A[0],W=A[1],v=r.a.useState(""),w=Object(d.a)(v,2),C=w[0],L=w[1],B=_();return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(Q.a,{variant:"h6",gutterBottom:!0,children:"Student Details"}),Object(n.jsxs)(G.a,{container:!0,spacing:3,children:[Object(n.jsx)(G.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(Z.a,{required:!0,id:"firstName",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"given-name",value:l,onChange:function(e){return o(e.target.value)}})}),Object(n.jsx)(G.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(Z.a,{required:!0,id:"lastName",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"family-name",value:u,onChange:function(e){return g(e.target.value)}})}),Object(n.jsx)(G.a,{item:!0,xs:12,children:Object(n.jsx)(Z.a,{required:!0,id:"address1",name:"address1",label:"Roll No",fullWidth:!0,autoComplete:"shipping address-line1",value:O,onChange:function(e){return f(e.target.value)}})}),Object(n.jsx)(G.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(Z.a,{required:!0,id:"city",name:"city",label:"Department",fullWidth:!0,autoComplete:"shipping address-level2",value:S,onChange:function(e){return W(e.target.value)}})}),Object(n.jsx)(G.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(Z.a,{id:"state",name:"state",label:"Section",fullWidth:!0,value:C,required:!0,onChange:function(e){return L(e.target.value)}})})]}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{}),Object(n.jsx)(K.a,{variant:"contained",disabled:""===l||""===u||""===O||""===S||""===C,className:B.button,color:"primary",onClick:function(){try{""!==l&&""!==u&&""!==O&&""!==S&&""!==C?(p.s_details.where("sid","==",a).get().then((function(e){var n=e.docs[0];n?n.ref.update({fname:l,lname:u,rollno:O,dept:S,sec:C}):p.s_details.add({sid:a,assgid:t,fname:l,lname:u,rollno:O,dept:S,sec:C})})),alert("Details Added"),c(!1)):alert("All the details required")}catch(e){console.log(e),alert("Error Please try again")}o(""),g(""),f(""),W(""),L("")},children:"Update Details"})]})}var M=a(176),$=a(396),ee=a(405),te=a(406),ae=a(403),ne=a(408),ce=Object(I.a)((function(e){return{appBar:{position:"relative"},layout:Object(D.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(D.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}})),re=!0;function se(e){var t=e.topicId,a=e.sid,c=e.sendDataToParent,s=r.a.useState([]),l=Object(d.a)(s,2),o=l[0],j=l[1],u=ce();return console.log("inside uplode:"),Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(Q.a,{variant:"h6",gutterBottom:!0,children:"Uplode your work here"}),Object(n.jsxs)(G.a,{container:!0,spacing:3,children:[Object(n.jsx)(G.a,{item:!0,xs:12,md:6,children:Object(n.jsx)("input",{className:u.button,type:"file",name:"file",onChange:function(e){var n=e.target.files[0];if(null!=t&&null!=n){var c=Object(te.a)();j((function(e){return[].concat(Object(M.a)(e),[{id:c,name:n.name,progress:0,error:!1}])}));var r=Object(te.a)(),s=m.ref("/a_files/".concat(t,"/").concat(r)).put(n);s.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes;j((function(e){return e.map((function(e){return e.id===c?Object(b.a)(Object(b.a)({},e),{},{progress:t}):e}))}))}),(function(){j((function(e){return e.map((function(e){return e.id===c?Object(b.a)(Object(b.a)({},e),{},{error:!0}):e}))}))}),(function(){j((function(e){return e.filter((function(e){return e.id!==c}))})),s.snapshot.ref.getDownloadURL().then((function(e){p.a_files.where("name","==",n.name).where("folderId","==",t).get().then((function(c){var s=c.docs[0];s?s.ref.update({url:e}):p.a_files.add({url:e,name:n.name,uniqueid:r,createdAt:p.getTime(),folderId:t,Sid:a})}))}))}))}}})}),Object(n.jsx)(G.a,{item:!0,xs:12,children:Object(n.jsx)($.a,{control:Object(n.jsx)(ee.a,{onChange:function(){c(re=!re)},color:"secondary",name:"saveCard",value:"yes",required:!0}),label:"I have not copied my work"})})]}),o.length>0&&i.a.createPortal(Object(n.jsx)("div",{style:{position:"absolute",bottom:"4rem",right:"2rem",maxWidth:"250px"},children:o.map((function(e){return Object(n.jsxs)(ae.a,{onClose:function(){j((function(t){return t.filter((function(t){return t.id!==e.id}))}))},children:[Object(n.jsx)(ae.a.Header,{closeButton:e.error,className:"text-truncate w-100 d-block",children:e.name}),Object(n.jsx)(ae.a.Body,{children:Object(n.jsx)(ne.a,{animated:!e.error,variant:e.error?"danger":"primary",now:e.error?100:100*e.progress,label:e.error?"Error":"".concat(Math.round(100*e.progress),"%")})})]},e.id)}))}),document.body)]})}var ie=Object(te.a)();function le(){return Object(n.jsxs)(Q.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(U.a,{color:"inherit",href:"",children:"Digital Course File"})," ",(new Date).getFullYear(),"."]})}var oe=Object(I.a)((function(e){return{appBar:{position:"relative"},layout:Object(D.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:"75%",marginLeft:"auto",marginRight:"auto"}),paper:Object(D.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)}}}));function de(){var e=oe(),t=r.a.useState(0),a=Object(d.a)(t,2),c=a[0],s=a[1],i=["Student Details","Uploding details"],l=r.a.useState(""),j=Object(d.a)(l,2),b=j[0],u=j[1],g=r.a.useState(""),h=Object(d.a)(g,2),m=h[0],O=h[1],f=r.a.useState(""),x=Object(d.a)(f,2),A=x[0],S=x[1],W=r.a.useState(!0),v=Object(d.a)(W,2),w=v[0],C=v[1],L=r.a.useState(!0),B=Object(d.a)(L,2),J=B[0],Y=B[1],y=function(e){console.log(e),Y(e)},k=Object(o.f)().topicId;p.a_folders.doc(k).get().then((function(e){e.exists?(u(e.data().name),O(e.data().date),S(e.data().desp),C(e.data().toggle)):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)})),console.log(b);var F,N=new Date;return F=N.getMonth()+1<10?N.getFullYear()+"-0"+(N.getMonth()+1)+"-"+N.getDate():N.getFullYear()+"-"+(N.getMonth()+1)+"-"+N.getDate(),Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(R.a,{}),Object(n.jsx)(q.a,{position:"absolute",color:"default",className:e.appBar,children:Object(n.jsx)(P.a,{children:Object(n.jsx)(Q.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Digital Course File System"})})}),Object(n.jsxs)("main",{className:e.layout,children:[Object(n.jsxs)(T.a,{className:e.paper,children:[Object(n.jsxs)(Q.a,{component:"h1",variant:"h4",align:"center",children:["Assignment Portal for ",b]}),Object(n.jsx)("br",{}),Object(n.jsxs)(Q.a,{component:"h1",variant:"h6",align:"left",children:[Object(n.jsx)("b",{children:"Due:"})," ",m]}),Object(n.jsx)("br",{}),Object(n.jsxs)(Q.a,{component:"h1",variant:"h6",align:"left",children:[Object(n.jsx)("b",{children:"Description:"})," ",A]}),Object(n.jsx)(V.a,{activeStep:c,className:e.stepper,children:i.map((function(e){return Object(n.jsx)(H.a,{children:Object(n.jsx)(X.a,{children:e})},e)}))}),m<F&&!w||m>=F&&!w?Object(n.jsx)("h2",{style:{textAlign:"center",color:"red"},children:"No More Submittion Accpected!!"}):Object(n.jsx)(r.a.Fragment,{children:c===i.length?Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(Q.a,{variant:"h5",gutterBottom:!0,children:"Thank you for your Submittion."}),Object(n.jsxs)(Q.a,{variant:"subtitle1",children:["Your Submittion Ref. number is ",ie]})]}):Object(n.jsxs)(r.a.Fragment,{children:[function(e){switch(e){case 0:return Object(n.jsx)(z,{topicId:k,id:ie,sendDataToParent:y});case 1:return Object(n.jsx)(se,{topicId:k,sid:ie,sendDataToParent:y});default:throw new Error("Unknown step")}}(c),Object(n.jsxs)("div",{className:e.buttons,children:[0!==c&&Object(n.jsx)(K.a,{onClick:function(){s(c-1)},className:e.button,children:"Back"}),console.log(J),Object(n.jsx)(K.a,{variant:"contained",color:"primary",onClick:function(){s(c+1),Y(!0)},className:e.button,disabled:J,children:c===i.length-1?"Submit Assignment":"Next"})]})]})})]}),Object(n.jsx)(le,{})]})]})}function je(){var e=Object(o.g)();return Object(n.jsx)("div",{children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"".concat(e.path,"/:topicId"),children:Object(n.jsx)(de,{})}),Object(n.jsx)(o.a,{path:e.path,children:Object(n.jsx)("h3",{children:"No AssignmentId is provided."})})]})})}var be=a(404);function ue(){return Object(n.jsxs)(Q.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(U.a,{color:"inherit",href:"",children:"Digital Course File"})," ",(new Date).getFullYear(),"."]})}var ge=Object(I.a)((function(e){return{appBar:{position:"relative"},layout:Object(D.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:"50%",marginLeft:"auto",marginRight:"auto"}),paper:Object(D.a)({marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),stepper:{padding:e.spacing(3,0,5)},buttons:{marginTop:e.spacing(3),marginLeft:e.spacing(1),paddingRight:"auto",alignItems:"center"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1),paddingRight:"120px",alignItems:"center"}}}));function he(){var e=ge(),t=r.a.useState(""),a=Object(d.a)(t,2),c=a[0],s=a[1],i=r.a.useState(""),l=Object(d.a)(i,2),j=l[0],b=l[1],u=r.a.useState(""),g=Object(d.a)(u,2),h=g[0],m=g[1],O=r.a.useState(""),f=Object(d.a)(O,2),x=f[0],A=f[1],S=r.a.useState(""),W=Object(d.a)(S,2),v=W[0],w=W[1],C=Object(o.f)().topicId;return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(R.a,{}),Object(n.jsx)(q.a,{position:"absolute",color:"default",className:e.appBar,children:Object(n.jsx)(P.a,{children:Object(n.jsx)(Q.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Digital Course File System"})})}),Object(n.jsxs)("main",{className:e.layout,children:[Object(n.jsxs)(T.a,{className:e.paper,children:[Object(n.jsx)(Q.a,{component:"h1",variant:"h4",align:"center",children:"Feedback Portal"}),Object(n.jsx)("br",{}),Object(n.jsxs)(be.a,{children:[Object(n.jsxs)(Q.a,{component:"h1",variant:"h6",align:"center",children:[Object(n.jsx)("b",{children:"Enter the course name:"}),Object(n.jsx)("br",{}),Object(n.jsx)(be.a.Control,{type:"text",required:!0,value:c,onChange:function(e){return s(e.target.value)}})]}),Object(n.jsxs)(Q.a,{component:"h1",variant:"h6",align:"center",children:[Object(n.jsx)("b",{children:"Q1:Rate the course(1-5)"}),Object(n.jsx)("br",{}),Object(n.jsx)(be.a.Control,{type:"number",required:!0,value:j,onChange:function(e){return b(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)(Q.a,{component:"h1",variant:"h6",align:"center",children:[Object(n.jsx)("b",{children:"Q2:Rate the teaching (1-5)"}),Object(n.jsx)("br",{}),Object(n.jsx)(be.a.Control,{type:"number",required:!0,value:h,onChange:function(e){return m(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)(Q.a,{component:"h1",variant:"h6",align:"center",children:[Object(n.jsx)("b",{children:"Q3:Overall Rating (1-10)"}),Object(n.jsx)("br",{}),Object(n.jsx)(be.a.Control,{type:"number",required:!0,value:x,onChange:function(e){return A(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsxs)(Q.a,{component:"h1",variant:"h6",align:"center",children:[Object(n.jsx)("b",{children:"Q4:Anymore suggestion"}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{required:!0,value:v,onChange:function(e){return w(e.target.value)}})]}),Object(n.jsx)("br",{}),Object(n.jsx)(K.a,{variant:"danger",className:e.button,onClick:function(){s(""),b(""),m(""),A(""),w("")},children:"Cancel"}),Object(n.jsx)(K.a,{variant:"contained",color:"primary",onClick:function(e){j&&h&&x&&v?(e.preventDefault(),p.feedback.add({proff_id:C,createdAt:p.getTime(),name:c,q1:j,q2:h,q3:x,q4:v}),b(""),m(""),A(""),w(""),s(""),alert("Feedback Submitted!! :-)")):alert("Plese Enter all fields!! :-(")},className:e.buttons,children:Object(n.jsx)("p",{style:{alignItems:"center"},children:"Submit"})})]})]}),Object(n.jsx)(ue,{})]})]})}function pe(){var e=Object(o.g)();return Object(n.jsx)("div",{children:Object(n.jsxs)(o.c,{children:[Object(n.jsxs)(o.a,{path:"".concat(e.path,"/:topicId"),children:[console.log("init"),Object(n.jsx)(he,{})]}),Object(n.jsx)(o.a,{path:e.path,children:Object(n.jsx)("h3",{children:"No FeedbackID is provided."})})]})})}function me(){return Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{path:"/folders",children:Object(n.jsx)(E,{})}),Object(n.jsx)(o.a,{path:"/assignment",children:Object(n.jsx)(je,{})}),Object(n.jsx)(o.a,{path:"/feedback",children:Object(n.jsx)(pe,{})}),Object(n.jsx)(o.a,{exact:!0,path:"/",render:function(){return window.location="https://dcfshome.netlify.app/"}})]})})})}i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(me,{})}),document.getElementById("root"))},67:function(e,t,a){}},[[354,1,2]]]);
//# sourceMappingURL=main.1e44d8c9.chunk.js.map