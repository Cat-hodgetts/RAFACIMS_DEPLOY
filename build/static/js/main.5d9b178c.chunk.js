(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),i=n.n(c),s=n(10),o=n.n(s),r=n(11),l=(n(59),n(26)),j=n.n(l),h=(n(68),n(125)),d=n(163),b=n(164),u=n(159),p=n(161),O=n(162),x=n(154),m=n(158),f=n(160),g=n(165),y=n(75),C=n(47),k=n.n(C),v=n(12);var S=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),l=Object(r.a)(o,2),C=l[0],S=l[1],w=Object(c.useState)(""),z=Object(r.a)(w,2),I=z[0],N=z[1],P=Object(c.useState)(""),L=Object(r.a)(P,2),A=L[0],E=L[1],U=Object(c.useState)(!1),W=Object(r.a)(U,2),H=W[0],M=W[1],B=Object(c.useState)(""),D=Object(r.a)(B,1)[0],T=i.a.useState(null),J=Object(r.a)(T,2),R=J[0],q=J[1],F=Boolean(R),G=Object(c.useState)(""),K=Object(r.a)(G,1)[0],Q=function(){q(null)},V=Object(v.f)();return j.a.defaults.withCredentials=!0,Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(x.a,{position:"static",children:Object(a.jsxs)(m.a,{style:{justifyContent:"center",display:"inline-flex"},children:[Object(a.jsxs)(b.a,{xsDown:!0,children:[Object(a.jsxs)(u.a,{color:"inherit",variant:"text","aria-label":"text primary button group",children:[Object(a.jsx)(h.a,{onClick:function(){!0===H?V.push("/Pages/home"):V.push("/")},children:"Home"}),Object(a.jsx)(h.a,{children:"Log Out"})]}),Object(a.jsx)(y.a,{id:"menu-appbar",anchorEl:R,anchorOrigin:{vertical:"top",horizontal:"center"},open:F,onClose:Q,children:Object(a.jsx)(g.a,{children:"LogIn"})})]}),Object(a.jsxs)(b.a,{smUp:!0,children:[Object(a.jsxs)(f.a,{"aria-label":"more","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){q(e.currentTarget)},color:"inherit",children:[Object(a.jsx)(k.a,{}),"Menu"]}),Object(a.jsxs)(y.a,{id:"menu-appbar",anchorEl:R,anchorOrigin:{vertical:"top",horizontal:"center"},open:F,onClose:Q,children:[Object(a.jsx)(g.a,{onClick:Q,children:"Home"}),Object(a.jsx)(g.a,{onClick:Q,children:"Cadets"}),Object(a.jsx)(g.a,{onClick:Q,children:"Stock Management"}),Object(a.jsx)(g.a,{onClick:Q,children:"Staff Accounts"})]})]})]})}),Object(a.jsxs)(p.a,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[Object(a.jsx)(p.a,{item:!0,xs:3,children:Object(a.jsx)(O.a,{style:{justifyContent:"center",display:"inline-flex",maxWidth:"300px",minWidth:"190px",margin:10},children:Object(a.jsxs)("div",{className:"registration",style:{margin:10},children:[Object(a.jsx)("h2",{children:"Registration"}),Object(a.jsx)(d.a,{id:D,label:"Username",onChange:function(e){s(e.target.value)}}),Object(a.jsx)(d.a,{id:K,label:"Password",type:"password",onChange:function(e){S(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)(h.a,{variant:"contained",color:"primary",style:{justifyContent:"center",display:"inline-flex",margin:12},onClick:function(){j.a.post("https://rafacims-deploy.herokuapp.com/register",{username:n,password:C}).then((function(e){console.log(e.data)})),window.location.reload()},children:"Register"})]})})}),Object(a.jsx)(p.a,{item:!0,xs:3,children:Object(a.jsx)(O.a,{style:{justifyContent:"center",display:"inline-flex",maxWidth:"300px",minWidth:"190px",margin:10},children:Object(a.jsxs)("div",{className:"login",style:{justifyContent:"center",display:"inline-block",margin:12},children:[Object(a.jsx)("h2",{children:"Login"}),Object(a.jsx)(d.a,{id:D,label:"Username",onChange:function(e){N(e.target.value)}}),Object(a.jsx)(d.a,{id:K,label:"Password",type:"password",onChange:function(e){E(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)(h.a,{variant:"contained",color:"primary",style:{justifyContent:"center",display:"inline",margin:12},onClick:function(){j.a.post("https://rafacims-deploy.herokuapp.com/login",{username:I,password:A}).then((function(e){e.data.auth?(localStorage.setItem("token",e.data.token),M(!0),V.push("/Pages/home")):M(!1)}))},children:"Login"})]})})})]})]})},w=n(43),z=n(25),I=n(76),N=n(51),P=n.n(N);var L=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(0),l=Object(r.a)(o,2),C=l[0],S=l[1],w=Object(c.useState)(0),N=Object(r.a)(w,2),L=N[0],A=N[1],E=Object(c.useState)(0),U=Object(r.a)(E,2),W=U[0],H=U[1],M=Object(c.useState)([]),B=Object(r.a)(M,2),D=B[0],T=B[1],J=i.a.useState(null),R=Object(r.a)(J,2),q=R[0],F=R[1],G=Boolean(q),K=Object(c.useState)(!0),Q=Object(r.a)(K,2),V=Q[0],X=Q[1],Y=Object(v.f)(),Z=function(e){F(e.currentTarget)},$=function(){F(null)};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(x.a,{position:"static",children:Object(a.jsxs)(m.a,{style:{justifyContent:"center",display:"inline-flex"},children:[Object(a.jsxs)(b.a,{xsDown:!0,children:[Object(a.jsx)(u.a,{color:"inherit",variant:"text","aria-label":"text primary button group",children:Object(a.jsx)(h.a,{onClick:function(){!0===V?Y.push("/Pages/home"):Y.push("/")},children:"Home"})}),Object(a.jsx)(f.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:Z,color:"inherit",children:Object(a.jsx)(P.a,{})}),Object(a.jsx)(y.a,{id:"menu-appbar",anchorEl:q,anchorOrigin:{vertical:"top",horizontal:"center"},open:G,onClose:$,children:Object(a.jsx)(g.a,{onClick:function(){X(!1),Y.push("/")},children:"Logout"})})]}),Object(a.jsxs)(b.a,{smUp:!0,children:[Object(a.jsxs)(f.a,{"aria-label":"more","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:Z,color:"inherit",children:[Object(a.jsx)(k.a,{}),"Menu"]}),Object(a.jsxs)(y.a,{id:"menu-appbar",anchorEl:q,anchorOrigin:{vertical:"top",horizontal:"center"},open:G,onClose:$,children:[Object(a.jsx)(g.a,{onClick:function(){!0===V?Y.push("/Pages/home"):Y.push("/")},children:"Home"}),Object(a.jsx)(g.a,{onClick:function(){!0===V?Y.push("/Pages/cadets"):Y.push("/")},children:"Cadets"}),Object(a.jsx)(g.a,{onClick:function(){!0===V?Y.push("/Pages/stock"):Y.push("/")},children:"Stock Management"}),Object(a.jsx)(g.a,{onClick:function(){!0===V?Y.push("/Pages/staff"):Y.push("/")},children:"Staff Accounts"})]})]})]})}),Object(a.jsx)("h1",{children:"Welcome back!"}),Object(a.jsxs)("div",{className:"information",children:[Object(a.jsx)(p.a,{container:!0,direction:"column",alignItems:"center",spacing:1,children:Object(a.jsxs)(I.a,{elevation:3,children:[Object(a.jsx)("h3",{children:"Add an Item"}),Object(a.jsx)(p.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{id:"filled-basic",style:{margin:18},label:"Item Name",placeholder:"Item Name...",margin:"normal",onChange:function(e){s(e.target.value)}})}),Object(a.jsx)(p.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{id:"filled-text",style:{margin:18,justifyContent:"center",display:"inline-flex"},label:"Size",type:"text",onChange:function(e){S(e.target.value)}})}),Object(a.jsx)(p.a,{item:!0,xs:12,children:Object(a.jsx)(d.a,{label:"Location",style:{margin:18},type:"Text",onChange:function(e){A(e.target.value)}})}),Object(a.jsxs)(p.a,{children:[Object(a.jsx)(h.a,{variant:"contained",color:"primary",style:{justifyContent:"center",display:"inline-flex",margin:12},onClick:function(){j.a.post("https://rafacims-deploy.herokuapp.com/create",{name:n,size:C,location:L}).then((function(){T([].concat(Object(z.a)(D),[{name:n,size:C,location:L}]))}))},children:"Add Items"}),Object(a.jsx)(h.a,{variant:"contained",color:"primary",style:{justifyContent:"center",display:"inline-flex",margin:12},onClick:function(){j.a.get("https://rafacims-deploy.herokuapp.com/items").then((function(e){T(e.data)}))},children:"Show Items"})]})]})}),D.map((function(e,t){return Object(a.jsxs)("div",{className:"items",children:[Object(a.jsx)(O.a,{children:Object(a.jsxs)("h2",{children:["Name: ",e.name]})}),Object(a.jsx)(O.a,{children:Object(a.jsxs)("h2",{children:["Size: ",e.size]})}),Object(a.jsx)(O.a,{children:Object(a.jsxs)("h2",{children:["Location: ",e.location]})}),Object(a.jsx)(O.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(d.a,{type:"text",placeholder:"Name of cadet issued to....",onChange:function(e){H(e.target.value)}}),Object(a.jsxs)(h.a,{onClick:function(){var t;t=e.id,j.a.put("https://rafacims-deploy.herokuapp.com/update",{location:W,id:t}).then((function(e){T(D.map((function(e){return e.id===t?{id:e.id,name:e.name,size:e.size,location:W}:e})))}))},children:[" ","Update"]}),Object(a.jsx)(h.a,{onClick:function(){var t;t=e.id,j.a.delete("https://rafacims-deploy.herokuapp.com/delete/".concat(t)).then((function(e){T(D.filter((function(e){return e.id!==t})))}))},children:"Delete"})]})})]})}))]})]})};o.a.render(Object(a.jsx)(w.a,{children:Object(a.jsxs)(v.c,{children:[Object(a.jsx)(v.a,{exact:!0,path:"/",component:S}),",",Object(a.jsx)(v.a,{exact:!0,path:"/Pages/home",component:L}),","]})}),document.getElementById("root"))},59:function(e,t,n){}},[[124,1,2]]]);
//# sourceMappingURL=main.5d9b178c.chunk.js.map