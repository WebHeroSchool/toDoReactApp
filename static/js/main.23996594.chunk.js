(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{11:function(e,t,M){e.exports={wrap:"About_wrap__1U98E",prelouder:"About_prelouder__3Fkyu",name:"About_name__1vsDZ",email:"About_email__2_dMe",email__img:"About_email__img__1Auxi",email__link:"About_email__link__2Mo8u",title:"About_title__1pBZB",list:"About_list__1cFoz",link:"About_link__16NhT",item:"About_item__20Qh3",language:"About_language__1yqpP",avatar__img:"About_avatar__img__1Dg26",disc:"About_disc__TbGQd",contact:"About_contact__uuk2X",contact__img:"About_contact__img__uFrVD",wrap__arrow:"About_wrap__arrow__21qR2",arrow1__img:"About_arrow1__img__E9liP",arrow2__img:"About_arrow2__img__2IOFZ"}},110:function(e,t,M){"use strict";M.r(t);var i=M(2),N=M(0),j=M.n(N),c=M(9),a=M.n(c),s=M(63),n=M(13),u=M(83),L=M(66),o=M(23),r=M(26),l=M(15),D=M(32),I=M(16),g=M(17),T=M(149),z=M(145),w=M(77),C=M.n(w),x=M(76),y=M.n(x),O=M(42),d=M.n(O),m=function(e){Object(I.a)(M,e);var t=Object(g.a)(M);function M(){var e;Object(l.a)(this,M);for(var i=arguments.length,N=new Array(i),j=0;j<i;j++)N[j]=arguments[j];return(e=t.call.apply(t,[this].concat(N))).state={inputValue:e.props.value,edit:!1},e}return Object(D.a)(M,[{key:"onChangeValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"onSaveEdit",value:function(e){this.setState({edit:!1}),this.props.onUpdateItem(this.state.inputValue,this.props.id)}},{key:"render",value:function(){var e,t=this,M=this.props,N=M.value,j=M.isDone,c=M.onClickDone,a=M.id,s=M.onClickDelete;return Object(i.jsxs)("div",{className:d.a.wrap,children:[Object(i.jsx)("div",{children:Object(i.jsx)(T.a,{checked:j,inputProps:{"aria-label":"uncontrolled-checkbox"},onClick:function(){return c(a)}})}),!this.state.edit&&Object(i.jsx)("div",{className:d.a.case,children:Object(i.jsx)("span",{className:y()((e={},Object(r.a)(e,d.a.item,!0),Object(r.a)(e,d.a.done,j),e)),onDoubleClick:function(){return t.setState({edit:!0})},children:N})}),this.state.edit&&Object(i.jsx)("div",{children:Object(i.jsx)("input",{className:d.a.input,value:this.state.inputValue,onChange:this.onChangeValue.bind(this),autoFocus:!0,onClick:this.onSaveEdit.bind(this)})}),Object(i.jsx)("div",{onClick:function(){return s(a)},className:d.a.delete_icon,children:Object(i.jsx)(z.a,{"aria-label":"delete",children:Object(i.jsx)(C.a,{})})})]})}}]),M}(j.a.Component),A=M(78),b=M.n(A),k=function(e){var t=e.onClickDone,M=e.onClickDelete,N=e.filterItemList,j=e.onUpdateItem;return Object(i.jsx)("ul",{className:b.a.list,children:N().map((function(e){return Object(i.jsx)("li",{children:Object(i.jsx)(m,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:t,onClickDelete:M,filterItemList:N,onUpdateItem:j})},e.id)}))})};k.defaultProps={items:[{value:"\u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"}]};var Q=k,E=M(61),v=M.n(E),Y=M(148),S=M(112),p={fontFamily:"'Balsamiq Sans', cursive",width:"100%",margin:"0 0 5px 0"},h={fontFamily:"'Balsamiq Sans', cursive",fontSize:"10px",borderRadius:3,border:0,color:"white",height:25,padding:"0 30px",background:"#3340b5",boxShadow:"0 3px 5px 2px rgba(82, 90, 163)"},Z=function(e){Object(I.a)(M,e);var t=Object(g.a)(M);function M(){var e;Object(l.a)(this,M);for(var i=arguments.length,N=new Array(i),j=0;j<i;j++)N[j]=arguments[j];return(e=t.call.apply(t,[this].concat(N))).state={inputValue:""},e.onButtonClick=function(){e.props.onClickAdd(e.state.inputValue.toLowerCase()),e.setState({inputValue:""})},e}return Object(D.a)(M,[{key:"render",value:function(){var e,t=this;return e=this.props.error?"\u041e\u0448\u0438\u0431\u043a\u0430: \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c \u0438\u043b\u0438 \u0442\u0430\u043a\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442":"",Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:v.a.wrap,children:Object(i.jsx)("div",{className:v.a.form,children:e})}),Object(i.jsx)("div",{className:v.a.field,children:Object(i.jsx)(Y.a,{style:p,id:"standard-basic",label:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435",value:this.state.inputValue.toUpperCase(),onChange:function(e){return t.setState({inputValue:e.target.value})}})}),Object(i.jsx)("div",{children:Object(i.jsx)(S.a,{variant:"contained",color:"secondary",style:h,onClick:this.onButtonClick,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})}}]),M}(j.a.Component),U=M(62),f=M.n(U),P=M(146),J={fontFamily:"'Balsamiq Sans', cursive",margin:"0 5px 0 0",fontSize:"10px",background:"#3340b5",borderRadius:3,border:0,color:"white",height:25,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(82, 90, 163)"},G=function(e){Object(I.a)(M,e);var t=Object(g.a)(M);function M(){return Object(l.a)(this,M),t.apply(this,arguments)}return Object(D.a)(M,[{key:"render",value:function(){var e=this.props,t=e.count,M=e.id,N=e.onClickDeleteAll,j=e.onClickFilter;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:f.a.counter,children:["\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0432\u043e\u0442 \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u043b: ",t]}),Object(i.jsx)("div",{className:f.a.filter,children:Object(i.jsxs)(P.a,{color:"secondary","aria-label":"outlined secondary button group",children:[Object(i.jsx)(S.a,{style:J,label:"all",onClick:function(){return j("all")},children:"\u0412\u0441\u0435"}),Object(i.jsx)(S.a,{style:J,label:"active",onClick:function(){return j("active")},children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435"}),Object(i.jsx)(S.a,{style:J,label:"completed",onClick:function(){return j("completed")},children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"})]})}),Object(i.jsx)("div",{className:f.a.delete,onClick:function(){return N(M)},children:Object(i.jsx)(S.a,{style:J,variant:"outlined",color:"secondary",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u0434\u0435\u043b\u0430"})})]})}}]),M}(j.a.Component),B=M(67),W=M.n(B),R=function(){var e={items:JSON.parse(localStorage.getItem("items"))||[{value:"\u043a\u043b\u0438\u043a\u043d\u0438, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",isDone:!1,id:1}],count:JSON.parse(localStorage.getItem("count"))||1,error:JSON.parse(localStorage.getItem("error"))||!1,filterItems:JSON.parse(localStorage.getItem("filterItems"))||"all"},t=Object(N.useState)(e.items),M=Object(o.a)(t,2),j=M[0],c=M[1],a=Object(N.useState)(e.filterItems),s=Object(o.a)(a,2),n=s[0],r=s[1],l=Object(N.useState)(e.count),D=Object(o.a)(l,2),I=D[0],g=D[1],T=Object(N.useState)(e.error),z=Object(o.a)(T,2),w=z[0],C=z[1];Object(N.useEffect)((function(){localStorage.setItem("items",JSON.stringify(j))})),Object(N.useEffect)((function(){localStorage.setItem("count",JSON.stringify(I))})),Object(N.useEffect)((function(){localStorage.setItem("error",JSON.stringify(w))})),Object(N.useEffect)((function(){localStorage.setItem("filterItems",JSON.stringify(n))}));return Object(i.jsxs)("div",{className:W.a.wrap,children:[Object(i.jsx)("h1",{className:W.a.title,children:"\u0412\u0430\u0436\u043d\u044b\u0435 \u0434\u0435\u043b\u0430:"}),Object(i.jsx)(Z,{onClickAdd:function(e){if(""===e||j.some((function(t){return e===t.value})))C(!0);else{var t=Math.floor(1e3*Math.random()),M=[].concat(Object(u.a)(j),[{value:e,isDone:!1,id:t+1}]);C(!1),c(M),g((function(e){return e+1}))}},error:w}),Object(i.jsx)(Q,{onClickDone:function(e){var t=j.map((function(t){var M=Object(L.a)({},t);return t.id===e&&(M.isDone=!t.isDone),M})),M=t.filter((function(e){return!1===e.isDone})).length;c(t),g(M)},onClickDelete:function(e){var t=j.filter((function(t){return t.id!==e})),M=t.filter((function(e){return!1===e.isDone})).length;c(t),g(M)},filterItemList:function(){return"active"===n?j.filter((function(e){return!1===e.isDone})):"completed"===n?j.filter((function(e){return!0===e.isDone})):j},onUpdateItem:function(e,t){var M=j.map((function(M){var i=Object(L.a)({},M);return M.id===t&&(i.value=e),i}));c(M)}}),Object(i.jsx)(G,{count:I,onClickDeleteAll:function(e){var t=j.filter((function(e){return!1===e.isDone})),M=t.length;c(t),g(M)},onClickFilter:function(e){r(e)}})]})};R.defaultProps={isDone:!1};var V=R,_=M(11),K=M.n(_),H=M(147),F=new(M(82).a),X=function(e){Object(I.a)(M,e);var t=Object(g.a)(M);function M(){var e;Object(l.a)(this,M);for(var i=arguments.length,N=new Array(i),j=0;j<i;j++)N[j]=arguments[j];return(e=t.call.apply(t,[this].concat(N))).state={isLoading:!0,repolList:[],nameUser:[],infoUser:[],avatarUser:[],isError:!1,error:{},firstRepo:0,lastRepo:1},e.forwardPage=function(){e.state.lastRepo<e.state.repolList.length&&e.setState((function(e){return{firstRepo:e.firstRepo+1,lastRepo:e.lastRepo+1}}))},e.backPage=function(){0!==e.state.firstRepo&&e.setState((function(e){return{firstRepo:e.firstRepo-1,lastRepo:e.lastRepo-1}}))},e}return Object(D.a)(M,[{key:"componentDidMount",value:function(){var e=this;F.repos.listForUser({username:"AnnaSiawa"}).then((function(t){var M=t.data;e.setState({repolList:M,isLoading:!1})})).catch((function(t){e.setState({isError:!0,error:t})})),F.users.getByUsername({username:"AnnaSiawa"}).then((function(t){e.setState({nameUser:t.data.login,avatarUser:t.data.avatar_url,infoUser:t.data.bio,isLoading:!1})})).catch((function(t){e.setState({isError:!0,error:"\u041e\u0448\u0438\u0431\u043a\u0430:"+t})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,M=e.repolList,N=e.nameUser,j=e.infoUser,c=e.avatarUser,a=(e.isError,e.error,e.firstRepo),s=e.lastRepo,n=M.slice(a,s);return Object(i.jsx)("div",{className:K.a.wrap,children:t?Object(i.jsx)("div",{className:K.a.prelouder,children:Object(i.jsx)(H.a,{color:"secondary"})}):Object(i.jsxs)("div",{children:[Object(i.jsxs)("h2",{className:K.a.name,children:["My name is ",N]}),Object(i.jsx)("p",{children:j}),Object(i.jsxs)("div",{className:K.a.email,children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{className:K.a.email__img,alt:"",src:"data:image/png;base64,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"})}),Object(i.jsx)("div",{children:Object(i.jsx)("a",{className:K.a.email__link,href:"mailto:anya.shurshalova@mail.ru",children:"anya.shurshalova@mail.ru"})})]}),Object(i.jsxs)("div",{className:K.a.disc,children:[Object(i.jsx)("div",{className:K.a.avatar,children:Object(i.jsx)("img",{className:K.a.avatar__img,alt:"",src:c})}),Object(i.jsxs)("div",{className:K.a.contact,children:[Object(i.jsx)("div",{className:K.a.contact__img,children:Object(i.jsx)("a",{href:"https://github.com/AnnaSiawa",children:Object(i.jsx)("img",{alt:"",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5NiA0OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5NiA0OTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGlkPSJTVkdDbGVhbmVySWRfMCIgc3R5bGU9ImZpbGw6IzNFNzdCRjsiIGQ9Ik0yNDcuOTkyLDUuMTYzQzExMS4wNDgsNS4xNjMsMCwxMTYuNjI3LDAsMjU0LjE2Mw0KCWMwLDEwOS45OTIsNzEuMDQ4LDIwMy4zMiwxNjkuNjMyLDIzNi4yNGMxMi4zOTIsMi4yOTYsMTYuOTEyLTUuMzkyLDE2LjkxMi0xMmMwLTUuOTA0LTAuMjE2LTIxLjU2LTAuMzM2LTQyLjM0NA0KCWMtNjksMTUuMDY0LTgzLjU1Mi0zMy4zNzYtODMuNTUyLTMzLjM3NmMtMTEuMjY0LTI4Ljc2OC0yNy41Mi0zNi40MDgtMjcuNTItMzYuNDA4Yy0yMi41MjgtMTUuNDU2LDEuNjk2LTE1LjE2LDEuNjk2LTE1LjE2DQoJYzI0Ljg4LDEuNzUyLDM3Ljk3NiwyNS42NzIsMzcuOTc2LDI1LjY3MmMyMi4xNDQsMzguMDQ4LDU4LjA2NCwyNy4wNDgsNzIuMTkyLDIwLjY3MmMyLjIzMi0xNi4wOCw4LjY1Ni0yNy4wNjQsMTUuNzM2LTMzLjI4DQoJYy01NS4wNTYtNi4yOTYtMTEyLjk0NC0yNy42NC0xMTIuOTQ0LTEyMy4wNGMwLTI3LjE3Niw5LjY1Ni00OS40MDgsMjUuNTItNjYuODMyYy0yLjU2OC02LjI5Ni0xMS4wNzItMzEuNiwyLjQxNi02NS44NzINCgljMCwwLDIwLjgzMi02LjY4OCw2OC4yLDI1LjUyYzE5Ljc4NC01LjUyLDQxLTguMjgsNjIuMDk2LTguMzkyYzIxLjA0OCwwLjExMiw0Mi4yOCwyLjg2NCw2Mi4wOTYsOC4zOTINCgljNDcuMzI4LTMyLjIwOCw2OC4xMjgtMjUuNTIsNjguMTI4LTI1LjUyYzEzLjUyLDM0LjI3Miw1LjAxNiw1OS41NzYsMi40NTYsNjUuODcyYzE1LjkwNCwxNy40MjQsMjUuNTA0LDM5LjY0OCwyNS41MDQsNjYuODMyDQoJYzAsOTUuNjQtNTcuOTg0LDExNi42OC0xMTMuMjMyLDEyMi44NTZjOC45MDQsNy42ODgsMTYuODMyLDIyLjg3MiwxNi44MzIsNDYuMTEyYzAsMzMuMjk2LTAuMjk2LDYwLjEyOC0wLjI5Niw2OC4yOTYNCgljMCw2LjY3Miw0LjQ3MiwxNC40MjQsMTcuMDQ4LDExLjk2OEM0MjUuMDE2LDQ1Ny4zODcsNDk2LDM2NC4xMjMsNDk2LDI1NC4xNjNDNDk2LDExNi42MjcsMzg0Ljk1Miw1LjE2MywyNDcuOTkyLDUuMTYzeiIvPg0KPGc+DQoJPHBhdGggaWQ9IlNWR0NsZWFuZXJJZF8wXzFfIiBzdHlsZT0iZmlsbDojM0U3N0JGOyIgZD0iTTI0Ny45OTIsNS4xNjNDMTExLjA0OCw1LjE2MywwLDExNi42MjcsMCwyNTQuMTYzDQoJCWMwLDEwOS45OTIsNzEuMDQ4LDIwMy4zMiwxNjkuNjMyLDIzNi4yNGMxMi4zOTIsMi4yOTYsMTYuOTEyLTUuMzkyLDE2LjkxMi0xMmMwLTUuOTA0LTAuMjE2LTIxLjU2LTAuMzM2LTQyLjM0NA0KCQljLTY5LDE1LjA2NC04My41NTItMzMuMzc2LTgzLjU1Mi0zMy4zNzZjLTExLjI2NC0yOC43NjgtMjcuNTItMzYuNDA4LTI3LjUyLTM2LjQwOGMtMjIuNTI4LTE1LjQ1NiwxLjY5Ni0xNS4xNiwxLjY5Ni0xNS4xNg0KCQljMjQuODgsMS43NTIsMzcuOTc2LDI1LjY3MiwzNy45NzYsMjUuNjcyYzIyLjE0NCwzOC4wNDgsNTguMDY0LDI3LjA0OCw3Mi4xOTIsMjAuNjcyYzIuMjMyLTE2LjA4LDguNjU2LTI3LjA2NCwxNS43MzYtMzMuMjgNCgkJYy01NS4wNTYtNi4yOTYtMTEyLjk0NC0yNy42NC0xMTIuOTQ0LTEyMy4wNGMwLTI3LjE3Niw5LjY1Ni00OS40MDgsMjUuNTItNjYuODMyYy0yLjU2OC02LjI5Ni0xMS4wNzItMzEuNiwyLjQxNi02NS44NzINCgkJYzAsMCwyMC44MzItNi42ODgsNjguMiwyNS41MmMxOS43ODQtNS41Miw0MS04LjI4LDYyLjA5Ni04LjM5MmMyMS4wNDgsMC4xMTIsNDIuMjgsMi44NjQsNjIuMDk2LDguMzkyDQoJCWM0Ny4zMjgtMzIuMjA4LDY4LjEyOC0yNS41Miw2OC4xMjgtMjUuNTJjMTMuNTIsMzQuMjcyLDUuMDE2LDU5LjU3NiwyLjQ1Niw2NS44NzJjMTUuOTA0LDE3LjQyNCwyNS41MDQsMzkuNjQ4LDI1LjUwNCw2Ni44MzINCgkJYzAsOTUuNjQtNTcuOTg0LDExNi42OC0xMTMuMjMyLDEyMi44NTZjOC45MDQsNy42ODgsMTYuODMyLDIyLjg3MiwxNi44MzIsNDYuMTEyYzAsMzMuMjk2LTAuMjk2LDYwLjEyOC0wLjI5Niw2OC4yOTYNCgkJYzAsNi42NzIsNC40NzIsMTQuNDI0LDE3LjA0OCwxMS45NjhDNDI1LjAxNiw0NTcuMzg3LDQ5NiwzNjQuMTIzLDQ5NiwyNTQuMTYzQzQ5NiwxMTYuNjI3LDM4NC45NTIsNS4xNjMsMjQ3Ljk5Miw1LjE2M3oiLz4NCjwvZz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMxMTRDODI7IiBkPSJNMzc4LjQ5NiwxMDkuMTMxYzEzLjEyOCwzMy45MDQsNC43NTIsNTguOTI4LDIuMiw2NS4xNzZjMTUuOTA0LDE3LjQyNCwyNS41MDQsMzkuNjQ4LDI1LjUwNCw2Ni44MzINCgkJYzAsOTUuNjQtNTcuOTg0LDExNi42OC0xMTMuMjMyLDEyMi44NTZjOC45MDQsNy42ODgsMTYuODMyLDIyLjg3MiwxNi44MzIsNDYuMTEyYzAsMzMuMjk2LTAuMjk2LDYwLjEyOC0wLjI5Niw2OC4yOTYNCgkJYzAsNi42NzIsNC40NzIsMTQuNDI0LDE3LjA0OCwxMS45NjhDNDI1LjAxNiw0NTcuMzg3LDQ5NiwzNjQuMTIzLDQ5NiwyNTQuMTYzYzAtMjkuNTYtNS4xNTItNTcuODk2LTE0LjU2OC04NC4yDQoJCUM0NDcuMjQsMTMzLjk2Myw0MDkuMTg0LDEwOS45ODcsMzc4LjQ5NiwxMDkuMTMxeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMxMTRDODI7IiBkPSJNMTkyLjk3NiwzNzcuMzIzYzIuNzg0LTUuNjE2LDYuMTg0LTkuOTg0LDkuNzYtMTMuMTQ0Yy0zMC4xNzYtMy40NTYtNjEuMTY4LTExLjUxMi04My4wNDgtMzMuNzQ0DQoJCUMxMzYuNTIsMzU4LjQ1MSwxNjMuOTI4LDM3MS4xOTUsMTkyLjk3NiwzNzcuMzIzeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzZDQTlFQTsiIGQ9Ik0xMi45MTIsMjcwLjk0N2MwLTEzNy41MzYsMTExLjA0OC0yNDksMjQ3Ljk5Mi0yNDljNzYuMDQsMCwxNDQuMDU2LDM0LjM5MiwxODkuNTM2LDg4LjQ4OA0KCUM0MDUuNTIsNDYuNzU1LDMzMS42MTYsNS4xNjMsMjQ3Ljk5Miw1LjE2M0MxMTEuMDQ4LDUuMTYzLDAsMTE2LjYyNywwLDI1NC4xNjNjMCw2MS4zMiwyMi4xMiwxMTcuNDI0LDU4Ljc1MiwxNjAuNzkyDQoJQzI5Ljk0NCwzNzQuMjkxLDEyLjkxMiwzMjQuNjQzLDEyLjkxMiwyNzAuOTQ3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzA4M0U2NjsiIGQ9Ik0zMjIuNzEyLDQyNi44OTljMC0yMy4yMzItNy45MjgtMzguNDQtMTYuODMyLTQ2LjEyOGM1NS4yNDgtNi4xNiwxMTMuMjQtMjcuMjE2LDExMy4yNC0xMjIuODQ4DQoJYzAtMjcuMTg0LTkuNi00OS40LTI1LjUyLTY2LjgyNGMyLjU3Ni02LjI5NiwxMS4wOTYtMzEuNjA4LTIuNDU2LTY1Ljg3MmMwLDAtMi41NzYtMC43OTItNy44OTYtMC40ODgNCgljNS44MDgsMjUuODQtMC40MTYsNDQuMzItMi41NTIsNDkuNTY4YzE1LjkwNCwxNy40MjQsMjUuNTA0LDM5LjY0OCwyNS41MDQsNjYuODMyYzAsOTUuNjQtNTcuOTg0LDExNi42OC0xMTMuMjMyLDEyMi44NTYNCgljOC45MDQsNy42ODgsMTYuODMyLDIyLjg3MiwxNi44MzIsNDYuMTEyYzAsMzMuMjk2LTAuMjk2LDYwLjEyOC0wLjI5Niw2OC4yOTZjMCw1Ljg3MiwzLjQ5NiwxMi41NjgsMTIuOTIsMTIuNDA4DQoJQzMyMi40ODgsNDc5LjU1NSwzMjIuNzEyLDQ1NS42NTksMzIyLjcxMiw0MjYuODk5eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzExNEM4MjsiIGQ9Ik0xMTcuNDY0LDQyMy45OTVjNS4yMDgsMTAuNzIsMjIuNzEyLDM2LjQsNjguODg4LDMwLjk5MmMtMC4wNjQtNS42NDgtMC4xMTItMTEuOTc2LTAuMTQ0LTE4LjkyOA0KCUMxNTAuNTg0LDQ0My44MzUsMTI5LjU1Miw0MzQuNjY3LDExNy40NjQsNDIzLjk5NXoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiM2Q0E5RUE7IiBkPSJNMTI2LjM2OCwzOTEuMzg3Yy0xLjU5Mi0yLjQtNC41NzYtNi40NzItOC45MDQtMTAuNTQ0DQoJQzEyMC4yNzIsMzg1LjAxMSwxMjMuMjU2LDM4OC41MDcsMTI2LjM2OCwzOTEuMzg3eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="})})}),Object(i.jsx)("div",{className:K.a.contact__img,children:Object(i.jsx)("a",{href:"https://www.instagram.com/annakucheryavenkova?r=nametag",children:Object(i.jsx)("img",{alt:"",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDU1MS4wMzQgNTUxLjAzNCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTUxLjAzNCA1NTEuMDM0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgkNCgkJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNzUuNTE3IiB5MT0iNC41NyIgeDI9IjI3NS41MTciIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UwOUIzRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNzRDNEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MDI0QzQiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV8pOyIgZD0iTTM4Ni44NzgsMEgxNjQuMTU2QzczLjY0LDAsMCw3My42NCwwLDE2NC4xNTZ2MjIyLjcyMg0KCQljMCw5MC41MTYsNzMuNjQsMTY0LjE1NiwxNjQuMTU2LDE2NC4xNTZoMjIyLjcyMmM5MC41MTYsMCwxNjQuMTU2LTczLjY0LDE2NC4xNTYtMTY0LjE1NlYxNjQuMTU2DQoJCUM1NTEuMDMzLDczLjY0LDQ3Ny4zOTMsMCwzODYuODc4LDB6IE00OTUuNiwzODYuODc4YzAsNjAuMDQ1LTQ4LjY3NywxMDguNzIyLTEwOC43MjIsMTA4LjcyMkgxNjQuMTU2DQoJCWMtNjAuMDQ1LDAtMTA4LjcyMi00OC42NzctMTA4LjcyMi0xMDguNzIyVjE2NC4xNTZjMC02MC4wNDYsNDguNjc3LTEwOC43MjIsMTA4LjcyMi0xMDguNzIyaDIyMi43MjINCgkJYzYwLjA0NSwwLDEwOC43MjIsNDguNjc2LDEwOC43MjIsMTA4LjcyMkw0OTUuNiwzODYuODc4TDQ5NS42LDM4Ni44Nzh6Ii8+DQoJDQoJCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjc1LjUxNyIgeTE9IjQuNTciIHgyPSIyNzUuNTE3IiB5Mj0iNTQ5LjcyIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgNTU0KSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMDlCM0QiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC4zIiBzdHlsZT0ic3RvcC1jb2xvcjojQzc0QzREIi8+DQoJCTxzdG9wICBvZmZzZXQ9IjAuNiIgc3R5bGU9InN0b3AtY29sb3I6I0MyMTk3NSIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNzAyNEM0Ii8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzJfKTsiIGQ9Ik0yNzUuNTE3LDEzM0MxOTYuOTMzLDEzMywxMzMsMTk2LjkzMywxMzMsMjc1LjUxNnM2My45MzMsMTQyLjUxNywxNDIuNTE3LDE0Mi41MTcNCgkJUzQxOC4wMzQsMzU0LjEsNDE4LjAzNCwyNzUuNTE2UzM1NC4xMDEsMTMzLDI3NS41MTcsMTMzeiBNMjc1LjUxNywzNjIuNmMtNDguMDk1LDAtODcuMDgzLTM4Ljk4OC04Ny4wODMtODcuMDgzDQoJCXMzOC45ODktODcuMDgzLDg3LjA4My04Ny4wODNjNDguMDk1LDAsODcuMDgzLDM4Ljk4OCw4Ny4wODMsODcuMDgzQzM2Mi42LDMyMy42MTEsMzIzLjYxMSwzNjIuNiwyNzUuNTE3LDM2Mi42eiIvPg0KCQ0KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzNfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjQxOC4zMSIgeTE9IjQuNTciIHgyPSI0MTguMzEiIHkyPSI1NDkuNzIiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1NTQpIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0UwOUIzRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIwLjMiIHN0eWxlPSJzdG9wLWNvbG9yOiNDNzRDNEQiLz4NCgkJPHN0b3AgIG9mZnNldD0iMC42IiBzdHlsZT0ic3RvcC1jb2xvcjojQzIxOTc1Ii8+DQoJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiM3MDI0QzQiLz4NCgk8L2xpbmVhckdyYWRpZW50Pg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8zXyk7IiBjeD0iNDE4LjMxIiBjeT0iMTM0LjA3IiByPSIzNC4xNSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="})})}),Object(i.jsx)("div",{className:K.a.contact__img,children:Object(i.jsx)("a",{href:"https://vk.com/anya.kucheryavenkova",children:Object(i.jsx)("img",{alt:"",src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDExMi4xOTYgMTEyLjE5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTEyLjE5NiAxMTIuMTk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBpZD0iWE1MSURfMTFfIiBzdHlsZT0iZmlsbDojNEQ3NkExOyIgY3g9IjU2LjA5OCIgY3k9IjU2LjA5OCIgcj0iNTYuMDk4Ii8+DQoJPC9nPg0KCTxwYXRoIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNGRkZGRkY7IiBkPSJNNTMuOTc5LDgwLjcwMmg0LjQwM2MwLDAsMS4zMy0wLjE0NiwyLjAwOS0wLjg3OA0KCQljMC42MjUtMC42NzIsMC42MDUtMS45MzQsMC42MDUtMS45MzRzLTAuMDg2LTUuOTA4LDIuNjU2LTYuNzc4YzIuNzAzLTAuODU3LDYuMTc0LDUuNzEsOS44NTMsOC4yMzUNCgkJYzIuNzgyLDEuOTExLDQuODk2LDEuNDkyLDQuODk2LDEuNDkybDkuODM3LTAuMTM3YzAsMCw1LjE0Ni0wLjMxNywyLjcwNi00LjM2M2MtMC4yLTAuMzMxLTEuNDIxLTIuOTkzLTcuMzE0LTguNDYzDQoJCWMtNi4xNjgtNS43MjUtNS4zNDItNC43OTksMi4wODgtMTQuNzAyYzQuNTI1LTYuMDMxLDYuMzM0LTkuNzEzLDUuNzY5LTExLjI5Yy0wLjUzOS0xLjUwMi0zLjg2Ny0xLjEwNS0zLjg2Ny0xLjEwNWwtMTEuMDc2LDAuMDY5DQoJCWMwLDAtMC44MjEtMC4xMTItMS40MywwLjI1MmMtMC41OTUsMC4zNTctMC45NzgsMS4xODktMC45NzgsMS4xODlzLTEuNzUzLDQuNjY3LTQuMDkxLDguNjM2Yy00LjkzMiw4LjM3NS02LjkwNCw4LjgxNy03LjcxLDguMjk3DQoJCWMtMS44NzUtMS4yMTItMS40MDctNC44NjktMS40MDctNy40NjdjMC04LjExNiwxLjIzMS0xMS41LTIuMzk3LTEyLjM3NmMtMS4yMDQtMC4yOTEtMi4wOS0wLjQ4My01LjE2OS0wLjUxNA0KCQljLTMuOTUyLTAuMDQxLTcuMjk3LDAuMDEyLTkuMTkxLDAuOTRjLTEuMjYsMC42MTctMi4yMzIsMS45OTItMS42NCwyLjA3MWMwLjczMiwwLjA5OCwyLjM5LDAuNDQ3LDMuMjY5LDEuNjQ0DQoJCWMxLjEzNSwxLjU0NCwxLjA5NSw1LjAxMiwxLjA5NSw1LjAxMnMwLjY1Miw5LjU1NC0xLjUyMywxMC43NDFjLTEuNDkzLDAuODE0LTMuNTQxLTAuODQ4LTcuOTM4LTguNDQ2DQoJCWMtMi4yNTMtMy44OTItMy45NTQtOC4xOTQtMy45NTQtOC4xOTRzLTAuMzI4LTAuODA0LTAuOTEzLTEuMjM0Yy0wLjcxLTAuNTIxLTEuNzAyLTAuNjg3LTEuNzAyLTAuNjg3bC0xMC41MjUsMC4wNjkNCgkJYzAsMC0xLjU4LDAuMDQ0LTIuMTYsMC43MzFjLTAuNTE2LDAuNjExLTAuMDQxLDEuODc1LTAuMDQxLDEuODc1czguMjQsMTkuMjc4LDE3LjU3LDI4Ljk5Mw0KCQlDNDQuMjY0LDgxLjI4Nyw1My45NzksODAuNzAyLDUzLjk3OSw4MC43MDJMNTMuOTc5LDgwLjcwMnoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"})})})]})]}),Object(i.jsx)("h1",{className:K.a.title,children:"My repositories"}),!t&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("ol",{className:K.a.list,children:n.map((function(e){return Object(i.jsxs)("a",{className:K.a.link,href:e.html_url,children:[Object(i.jsx)("li",{className:K.a.item,children:e.name}),Object(i.jsxs)("p",{className:K.a.language,children:["Language: ",e.language]})]},e.id)}))}),Object(i.jsxs)("div",{className:K.a.wrap__arrow,children:[Object(i.jsx)("div",{className:K.a.arrow1,onClick:this.backPage,children:Object(i.jsx)("img",{className:K.a.arrow1__img,src:"https://w7.pngwing.com/pngs/544/324/png-transparent-kool-aid-neuhauserhof-merano-business-line-arrow-miscellaneous-blue-angle.png",alt:""})}),Object(i.jsx)("div",{className:K.a.arrow2,onClick:this.forwardPage,children:Object(i.jsx)("img",{className:K.a.arrow2__img,src:"https://w7.pngwing.com/pngs/544/324/png-transparent-kool-aid-neuhauserhof-merano-business-line-arrow-miscellaneous-blue-angle.png",alt:""})})]})]})]})})}}]),M}(j.a.Component),q=M(151),$=M(152),ee=M(35),te=M.n(ee),Me={fontFamily:"'Balsamiq Sans', cursive",margin:"0 5px 0 0",fontSize:"20px",opacity:"0.5",background:"#3340b5",borderRadius:3,border:0,color:"white",height:40,padding:"0 30px",boxShadow:"4px 1px 5px #4682B4"},ie=function(){return Object(i.jsx)(s.a,{children:Object(i.jsxs)("div",{className:te.a.wrap,children:[Object(i.jsx)("div",{className:te.a.wrap__menu,children:Object(i.jsxs)($.a,{className:te.a.menu__list,children:[Object(i.jsx)(s.b,{to:"/",className:te.a.link,children:Object(i.jsx)(q.a,{style:Me,children:"\u041e\u0431\u043e \u043c\u043d\u0435"})}),Object(i.jsx)(s.b,{to:"/todo",className:te.a.link,children:Object(i.jsx)(q.a,{style:Me,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0435\u043b"})}),Object(i.jsx)("div",{className:te.a.menu__img,children:Object(i.jsx)("a",{href:"https://webheroschool.ru",children:Object(i.jsx)("div",{className:te.a.img})})})]})}),Object(i.jsxs)("div",{className:te.a.wrap__tab,children:[Object(i.jsx)(n.a,{path:"/",exact:!0,component:X}),Object(i.jsx)(n.a,{path:"/todo",component:V})]})]})})};M(111);a.a.render(Object(i.jsx)(N.Suspense,{fallback:Object(i.jsx)("div",{children:"Loaing ~~~"}),children:Object(i.jsx)(ie,{})}),document.getElementById("root"))},35:function(e,t,M){e.exports={wrap:"App_wrap__1rfhq",menu__list:"App_menu__list__3RVLy",link:"App_link__3r417",wrap__tab:"App_wrap__tab__1wQjU",menu__img:"App_menu__img__1FrmV",img:"App_img__2oDEi",wrap__menu:"App_wrap__menu__3vSif"}},42:function(e,t,M){e.exports={wrap:"Item_wrap__1lqiM",case:"Item_case__17cXj",item:"Item_item__1BzhG",done:"Item_done__h-w7s",input:"Item_input__OgTrf"}},61:function(e,t,M){e.exports={field:"InputItem_field__2S8wJ",form:"InputItem_form__bAePG"}},62:function(e,t,M){e.exports={counter:"Footer_counter__2v_If",filter:"Footer_filter__2BIxo",delete:"Footer_delete__2rZSQ"}},67:function(e,t,M){e.exports={wrap:"Todo_wrap__2lgKY",title:"Todo_title__3Pw4Z"}},78:function(e,t,M){e.exports={list:"ItemList_list__2xKyl"}}},[[110,1,2]]]);
//# sourceMappingURL=main.23996594.chunk.js.map