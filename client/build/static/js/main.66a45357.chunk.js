(this.webpackJsonpproject3=this.webpackJsonpproject3||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),r=n(18),c=n.n(r),o=(n(71),n(27)),i=n(7),l=n(34),u=n(10),j=n.n(u),h=function(e){e?j.a.defaults.headers.common.Authorization=e:delete j.a.defaults.headers.common.Authorization},d="GET_ERRORS",b="USER_LOADING",p="SET_CURRENT_USER",m=function(e){return{type:p,payload:e}},O=function(){return function(e){localStorage.removeItem("jwtToken"),h(!1),e(m({}))}},x=n(9),v=n(22),g=n(60),f=n(23),y=n(93),N={isAuthenticated:!1,user:{},loading:!1},S={},w=Object(v.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(f.a)(Object(f.a)({},e),{},{isAuthenticated:!y(t.payload),user:t.payload});case b:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload;default:return e}}}),C=[g.a],_=Object(v.e)(w,{},Object(v.d)(v.a.apply(void 0,C),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||v.d)),E=n(28),k=n(14),D=n(15),I=n(17),F=n(16),A=n(4),T=n.n(A),R=n(109),U=n(110),L=n(114),P=n(111),B=function(e){Object(I.a)(n,e);var t=Object(F.a)(n);function n(){var e;return Object(k.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n={email:e.state.email,password:e.state.password};e.props.registerUser(n,e.props.history)},e.state={email:"",password:"",errors:{}},e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(s.jsx)(R.a,{className:"mt-4",children:Object(s.jsxs)(U.a,{children:[Object(s.jsxs)("div",{className:"col-sm-12 pl-11.250px",children:[Object(s.jsxs)("h2",{children:[" ",Object(s.jsx)("b",{children:"Sign up"})," for an account "]}),Object(s.jsxs)("p",{children:["Already a member? ",Object(s.jsx)(o.b,{to:"/login",children:"Log in"})]})]}),Object(s.jsxs)(L.a,{noValidate:!0,onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"input-field col-sm-12",children:[Object(s.jsx)("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:T()("",{invalid:e.email})}),Object(s.jsx)("label",{className:"pl-2",htmlFor:"email",children:" Email"}),Object(s.jsx)("span",{className:"pl-2 text-danger",children:e.email})]}),Object(s.jsxs)("div",{className:"input-field col-sm-12",children:[Object(s.jsx)("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:T()("",{invalid:e.password})}),Object(s.jsx)("label",{className:"pl-2",htmlFor:"password",children:" Password"}),Object(s.jsx)("span",{className:"pl-2 text-danger",children:e.password})]}),Object(s.jsx)("div",{className:"pt-2 col-sm-12 pl-11.250px",children:Object(s.jsx)(P.a,{type:"submit",className:"btn btn-large",children:"Sign up"})})]})]})})}}]),n}(a.Component),V=Object(x.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(n){j.a.post("/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return n({type:d,payload:e.response.data})}))}}})(Object(i.g)(B)),M=(n(96),function(e){Object(I.a)(n,e);var t=Object(F.a)(n);function n(){var e;return Object(k.a)(this,n),(e=t.call(this)).onChange=function(t){e.setState(Object(E.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var n={email:e.state.email,password:e.state.password};console.log(n),e.props.loginUser(n)},e.state={email:"",password:"",errors:{}},e}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return Object(s.jsx)(R.a,{className:"mt-4",children:Object(s.jsxs)(U.a,{children:[Object(s.jsxs)("div",{className:"col-sm-12 pl-11.250px",children:[Object(s.jsxs)("h2",{children:[Object(s.jsx)("b",{children:"Login"})," below"]}),Object(s.jsxs)("p",{children:["Don't have an account? ",Object(s.jsx)(o.b,{to:"/register",children:"Register"})]})]}),Object(s.jsxs)(L.a,{noValidate:!0,onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"input-field col-sm-12",children:[Object(s.jsx)("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:T()("",{invalid:e.email||e.emailnotfound})}),Object(s.jsx)("label",{className:"pl-2",htmlFor:"email",children:" Email"}),Object(s.jsxs)("span",{className:"pl-2 text-danger",children:[e.email,e.emailnotfound]})]}),Object(s.jsxs)("div",{className:"input-field col-sm-12",children:[Object(s.jsx)("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:T()("",{invalid:e.password||e.passwordincorrect})}),Object(s.jsx)("label",{className:"pl-2",htmlFor:"password",children:" Password"}),Object(s.jsxs)("span",{className:"pl-2 text-danger",children:[e.password,e.passwordincorrect]})]}),Object(s.jsx)("div",{className:"pt-2 col-sm-12 pl-11.250px",children:Object(s.jsx)(P.a,{type:"submit",className:"btn btn-large",children:"Login"})})]})]})})}}]),n}(a.Component)),W=Object(x.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){j.a.post("/api/users/login",e).then((function(e){var n=e.data.token;localStorage.setItem("jwtToken",n),h(n);var s=Object(l.a)(n);t(m(s))})).catch((function(e){return t({type:d,payload:e.response.data})}))}}})(M),X=n(65),H=Object(x.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,n=e.auth,a=Object(X.a)(e,["component","auth"]);return Object(s.jsx)(i.b,Object(f.a)(Object(f.a)({},a),{},{render:function(e){return!0===n.isAuthenticated?Object(s.jsx)(t,Object(f.a)({},e)):Object(s.jsx)(i.a,{to:"/login"})}}))})),z=n(113),G=n(115),J=function(e){Object(I.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(k.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onLogout=function(t){t.preventDefault(),e.props.logoutUser()},e}return Object(D.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("header",{children:Object(s.jsxs)(z.a,{collapseOnSelect:!0,expand:"lg",className:"pt-2 pb-2 navbar bg-none",children:[Object(s.jsx)(z.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(s.jsx)(z.a.Collapse,{id:"responsive-navbar-nav",children:Object(s.jsx)(G.a,{className:"ml-auto navlink",children:Object(s.jsx)("i",{onClick:this.onLogout,id:"logout",className:"fa fa-sign-out fa-2x"})})})]})})})}}]),n}(a.Component),Q=Object(x.b)((function(e){return{auth:e.auth}}),{logoutUser:O})(J),Y=n(39),q=function(e){return j.a.get("https://api.teleport.org/api/urban_areas/slug:".concat(e,"/scores"))},K=function(e){return j.a.get("https://api.teleport.org/api/urban_areas/slug:".concat(e,"/images"))},Z=function(e){return j.a.post("/api/survey",e)},$=function(e){return j.a.get("/api/survey/user/"+e)},ee=n(116);var te=function(e){var t=Object(a.useState)({name:"",position:0}),n=Object(Y.a)(t,2),r=n[0];return n[1],console.log(e),Object(a.useEffect)((function(){$(e.user).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(ee.a,{children:[Object(s.jsxs)("h2",{children:[" ",r.name," "]}),console.log(r),console.log(e)]})})},ne=function(e){Object(I.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(k.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onLogoutClick=function(t){t.preventDefault(),e.props.logoutUser()},e}return Object(D.a)(n,[{key:"render",value:function(){var e=this.props.auth.user;return console.log(this.props.auth.user),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Q,{}),Object(s.jsx)(R.a,{className:"mt-4",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsxs)("div",{className:"col-sm-12 center-align",children:[Object(s.jsxs)("h3",{className:"mb-4",children:[Object(s.jsx)("b",{children:"Welcome to your Fresh Start,"})," ",e.email,"!"]}),Object(s.jsxs)(R.a,{className:"justify-content-center",children:[Object(s.jsx)(te,{}),Object(s.jsx)(P.a,{href:"/home",className:"btn btn-primary mt-2 mr-2",children:"Search Cities"}),Object(s.jsx)(P.a,{href:"/survey",className:"btn btn-primary mt-2",children:" Take Survey "})]})]})})})]})}}]),n}(a.Component),se=Object(x.b)((function(e){return{auth:e.auth}}),{logoutUser:O})(ne),ae=n(112),re=n(63),ce=function(e){Object(I.a)(n,e);var t=Object(F.a)(n);function n(e){return Object(k.a)(this,n),t.call(this,e)}return Object(D.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(ee.a,{style:{width:"30rem"},children:[Object(s.jsx)(ee.a.Img,{variant:"top",src:this.props.image.photos[0].image.mobile}),Object(s.jsx)(ee.a.Body,{children:Object(s.jsx)(ee.a.Title,{children:this.props.search})}),Object(s.jsx)(ae.a,{className:"list-group-flush",children:this.props.scores.categories.map((function(e,t){return Object(s.jsxs)(re.a,{children:[Object(s.jsx)("div",{children:e.name}),Object(s.jsx)("div",{children:e.score_out_of_10.toFixed(2)})]},t)}))}),Object(s.jsx)(P.a,{id:"citySaveButton",children:"Save this City"})]})})}}]),n}(a.Component),oe=function(e){Object(I.a)(n,e);var t=Object(F.a)(n);function n(){var e;Object(k.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={scores:{},image:{},search:""},e.handleInputChange=function(t){var n=t.target,s=(n.search,n.value);e.setState({search:s}),console.log(e.state.search)},e.handleFormSubmit=function(t){t.preventDefault(),e.displayCityScores(),e.displayCityImage()},e.displayCityScores=function(){q(e.state.search).then((function(t){e.setState({scores:t.data}),console.log(t.data)})).catch((function(e){return console.log(e)}))},e.displayCityImage=function(){K(e.state.search).then((function(t){e.setState({image:t.data}),console.log(t.data)})).catch((function(e){return console.log(e)}))},e}return Object(D.a)(n,[{key:"render",value:function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(R.a,{children:[Object(s.jsxs)(L.a,{children:[Object(s.jsx)("input",{onChange:this.handleInputChange,id:"cityName",placeholder:"Search City..."}),Object(s.jsx)(P.a,{onClick:this.handleFormSubmit,id:"citySearchButton",children:"Search"})]}),Object.keys(this.state.scores).length>0?Object(s.jsx)(ce,{scores:this.state.scores,search:this.state.search,image:this.state.image}):Object(s.jsx)("div",{children:"Sorry, there are currently no results for this city."})]})})}}]),n}(a.Component);var ie=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("h1",{children:"FAVORITES"})})};var le=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"CITY RESULTS"}),Object(s.jsx)(ce,{})]})},ue=n(47),je=n(64),he=n.n(je);n(105);var de=Object(x.b)((function(e){return{auth:e.auth}}))((function(e){console.log(e);var t=e.auth.user,n=Object(a.useState)([{name:"Safety",position:0,surveyID:0,user:t.id},{name:"Education",position:1,surveyID:1,user:t.id},{name:"Commute",position:2,surveyID:2,user:t.id},{name:"Outdoors",position:3,surveyID:3,user:t.id},{name:"Healthcare",position:4,surveyID:4,user:t.id},{name:"Environmental Quality",position:5,surveyID:5,user:t.id},{name:"Culture",position:6,surveyID:6,user:t.id},{name:"Economy",position:7,surveyID:7,user:t.id},{name:"Housing",position:8,surveyID:8,user:t.id},{name:"Cost of Living",position:9,surveyID:9,user:t.id}]),r=Object(Y.a)(n,2),c=r[0],o=r[1];console.log(c);var i=Object(ue.b)((function(e){var t=e.value,n=e.index;return Object(s.jsx)("div",{className:"list__card",index:n,children:Object(s.jsx)("div",{className:"list__card-right",children:Object(s.jsxs)("div",{className:"list__card-right--name",children:[" ",t.name," "]})})})})),l=Object(ue.a)((function(e){var t=e.items;return Object(s.jsx)("div",{className:"list",children:t.sort((function(e,t){return e.position-t.position})).map((function(e,t){return Object(s.jsx)(i,{value:e,index:t},e.surveyID)}))})}));return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(Q,{}),Object(s.jsxs)(R.a,{className:"mt-4 flex",children:[Object(s.jsx)(U.a,{className:"justify-content-center pt-4",children:Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("h4",{children:" Rank the following from top to bottom"}),Object(s.jsx)("h6",{children:" With the top being the most important to you and the bottom being the least."})]})}),Object(s.jsx)(U.a,{className:"justify-content-center mt-4",children:Object(s.jsx)(ee.a,{className:"mr-3",children:Object(s.jsxs)(ee.a.Body,{children:[Object(s.jsx)("h6",{className:"text-center",children:" Options "}),Object(s.jsx)(l,{items:c,onSortEnd:function(e){for(var t=e.oldIndex,n=e.newIndex,s=he()(c,t,n),a=0;a<s.length;a++)s[a].position=a;o(s)},axis:"xy"})]})})}),Object(s.jsxs)(U.a,{className:"justify-content-center mt-4",children:[Object(s.jsx)(P.a,{className:"mr-2",onClick:function(e){e.preventDefault(),console.log("clicked"),console.log(Z()),Z(c).then((function(e){console.log("survey saved!"),console.log(e)})).catch((function(e){return console.log(e)}))},children:" Save "}),Object(s.jsx)(P.a,{href:"/home",children:" Search Cities "})]})]})]})}));if(localStorage.jwtToken){var be=localStorage.jwtToken;h(be);var pe=Object(l.a)(be);_.dispatch(m(pe));var me=Date.now()/1e3;pe.exp<me&&(_.dispatch(O()),window.location.href="./login")}var Oe=function(){return Object(s.jsx)(x.a,{store:_,children:Object(s.jsxs)(o.a,{children:[Object(s.jsx)(i.b,{exact:!0,path:"/",component:V}),Object(s.jsx)(i.b,{exact:!0,path:"/register",component:V}),Object(s.jsx)(i.b,{exact:!0,path:"/login",component:W}),Object(s.jsxs)(i.d,{children:[Object(s.jsx)(H,{exact:!0,path:"/dashboard",component:se}),Object(s.jsx)(H,{exact:!0,path:"/survey",component:de}),Object(s.jsx)(H,{exact:!0,path:"/Home",component:oe}),Object(s.jsx)(H,{exact:!0,path:"/CityResults",component:le}),Object(s.jsx)(H,{exact:!0,path:"/Favorites",component:ie})]})]})})};n(106);c.a.render(Object(s.jsx)(Oe,{}),document.getElementById("root"))},71:function(e,t,n){},96:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.66a45357.chunk.js.map