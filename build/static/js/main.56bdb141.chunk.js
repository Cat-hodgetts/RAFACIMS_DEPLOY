(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{133:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),s=a.n(n),o=a(12),i=a.n(o),j=a(7),r=(a(59),a(19)),l=a.n(r),b=(a(60),a(135)),O=a(192),u=a(194),d=a(179),h=a(181),p=a(182),x=a(175),S=a(178),m=a(180),f=a(195),g=a(89),k=a(39),C=a.n(k),v=a(13);var y=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),o=Object(j.a)(a,2),i=(o[0],o[1],Object(n.useState)("")),r=Object(j.a)(i,2),k=r[0],y=r[1],I=Object(n.useState)(""),z=Object(j.a)(I,2),T=z[0],w=z[1],N=Object(n.useState)(!1),P=Object(j.a)(N,2),E=P[0],B=P[1],A=Object(n.useState)(""),L=Object(j.a)(A,1)[0],W=s.a.useState(null),H=Object(j.a)(W,2),M=H[0],D=H[1],U=Boolean(M),F=Object(n.useState)(""),J=Object(j.a)(F,1)[0],q=function(){D(null)},G=Object(v.f)();return l.a.defaults.withCredentials=!0,Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(x.a,{position:"static",children:Object(c.jsxs)(S.a,{style:{justifyContent:"center",display:"inline-flex"},children:[Object(c.jsxs)(u.a,{xsDown:!0,children:[Object(c.jsx)(d.a,{color:"inherit",variant:"text","aria-label":"text primary button group",children:Object(c.jsx)(b.a,{onClick:function(){!0===E?G.push("/Pages/home"):G.push("/")},children:"Home"})}),Object(c.jsx)(g.a,{id:"menu-appbar",anchorEl:M,anchorOrigin:{vertical:"top",horizontal:"center"},open:U,onClose:q,children:Object(c.jsx)(f.a,{children:"LogIn"})})]}),Object(c.jsxs)(u.a,{smUp:!0,children:[Object(c.jsxs)(m.a,{"aria-label":"more","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){D(e.currentTarget)},color:"inherit",children:[Object(c.jsx)(C.a,{}),"Menu"]}),Object(c.jsxs)(g.a,{id:"menu-appbar",anchorEl:M,anchorOrigin:{vertical:"top",horizontal:"center"},open:U,onClose:q,children:[Object(c.jsx)(f.a,{onClick:q,children:"Home"}),Object(c.jsx)(f.a,{onClick:q,children:"Log Out"})]})]})]})}),Object(c.jsx)(h.a,{container:!0,direction:"column",alignItems:"center",spacing:1,children:Object(c.jsx)(h.a,{item:!0,xs:3,children:Object(c.jsx)(p.a,{style:{justifyContent:"center",display:"inline-flex",maxWidth:"300px",minWidth:"190px",margin:10},children:Object(c.jsxs)("div",{className:"login",style:{justifyContent:"center",display:"inline-block",margin:12},children:[Object(c.jsx)("h2",{children:"Login"}),Object(c.jsx)(O.a,{id:L,label:"Username",onChange:function(e){y(e.target.value)}}),Object(c.jsx)(O.a,{id:J,label:"Password",type:"password",onChange:function(e){w(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)(b.a,{variant:"contained",color:"primary",style:{justifyContent:"center",display:"inline",margin:12},onClick:function(){l.a.post("https://rafacims-deploy.herokuapp.com/login",{headers:{"Access-Control-Allow-Origin":!0},username:k,password:T}).then((function(e){e.data.auth?(localStorage.setItem("token",e.data.token),B(!0),G.push("/Pages/home")):B(!1)}))},children:"Login"})]})})})})]})},I=a(43),z=a(44),T=a.n(z),w=a(183),N=a(193),P=a(186),E=a(188),B=a(190),A=a(185),L=a(191),W=a(189),H=a(184),M=a(187),D=a(90);var U=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)([]),r=Object(j.a)(i,2),O=r[0],h=r[1],k=Object(n.useState)([]),y=Object(j.a)(k,2),I=y[0],z=y[1],U=Object(n.useState)([]),F=Object(j.a)(U,2),J=F[0],q=F[1],G=Object(n.useState)([]),K=Object(j.a)(G,2),Q=K[0],R=K[1],V=Object(n.useState)([]),X=Object(j.a)(V,2),Y=X[0],Z=X[1],$=Object(n.useState)([]),_=Object(j.a)($,2),ee=_[0],te=_[1],ae=Object(n.useState)([]),ce=Object(j.a)(ae,2),ne=ce[0],se=ce[1],oe=Object(n.useState)([]),ie=Object(j.a)(oe,2),je=ie[0],re=ie[1],le=Object(n.useState)([]),be=Object(j.a)(le,2),Oe=be[0],ue=be[1],de=Object(n.useState)([]),he=Object(j.a)(de,2),pe=he[0],xe=he[1],Se=Object(n.useState)([]),me=Object(j.a)(Se,2),fe=me[0],ge=me[1],ke=Object(n.useState)([]),Ce=Object(j.a)(ke,2),ve=Ce[0],ye=Ce[1],Ie=Object(n.useState)([]),ze=Object(j.a)(Ie,2),Te=ze[0],we=ze[1],Ne=Object(n.useState)([]),Pe=Object(j.a)(Ne,2),Ee=Pe[0],Be=Pe[1],Ae=Object(n.useState)([]),Le=Object(j.a)(Ae,2),We=Le[0],He=Le[1],Me=Object(n.useState)([]),De=Object(j.a)(Me,2),Ue=De[0],Fe=De[1],Je=Object(n.useState)([]),qe=Object(j.a)(Je,2),Ge=qe[0],Ke=qe[1],Qe=Object(n.useState)([]),Re=Object(j.a)(Qe,2),Ve=Re[0],Xe=Re[1],Ye=Object(n.useState)([]),Ze=Object(j.a)(Ye,2),$e=Ze[0],_e=Ze[1],et=Object(n.useState)([]),tt=Object(j.a)(et,2),at=(tt[0],tt[1]),ct=Object(n.useState)([]),nt=Object(j.a)(ct,2),st=(nt[0],nt[1]),ot=Object(n.useState)([]),it=Object(j.a)(ot,2),jt=(it[0],it[1]),rt=Object(n.useState)([]),lt=Object(j.a)(rt,2),bt=(lt[0],lt[1]),Ot=Object(n.useState)([]),ut=Object(j.a)(Ot,2),dt=(ut[0],ut[1]),ht=Object(n.useState)([]),pt=Object(j.a)(ht,2),xt=(pt[0],pt[1],Object(n.useState)([])),St=Object(j.a)(xt,2),mt=(St[0],St[1],Object(n.useState)([])),ft=Object(j.a)(mt,2),gt=(ft[0],ft[1],Object(n.useState)([])),kt=Object(j.a)(gt,2),Ct=(kt[0],kt[1],Object(n.useState)([])),vt=Object(j.a)(Ct,2),yt=(vt[0],vt[1],Object(n.useState)([])),It=Object(j.a)(yt,2),zt=It[0],Tt=It[1],wt=Object(n.useState)([]),Nt=Object(j.a)(wt,2),Pt=Nt[0],Et=Nt[1],Bt=Object(n.useState)([]),At=Object(j.a)(Bt,2),Lt=At[0],Wt=At[1],Ht=Object(n.useState)([]),Mt=Object(j.a)(Ht,2),Dt=Mt[0],Ut=Mt[1],Ft=Object(n.useState)([]),Jt=Object(j.a)(Ft,2),qt=Jt[0],Gt=Jt[1],Kt=Object(n.useState)([]),Qt=Object(j.a)(Kt,2),Rt=Qt[0],Vt=Qt[1],Xt=Object(n.useState)([]),Yt=Object(j.a)(Xt,2),Zt=Yt[0],$t=Yt[1],_t=Object(n.useState)([]),ea=Object(j.a)(_t,2),ta=ea[0],aa=ea[1],ca=Object(n.useState)([]),na=Object(j.a)(ca,2),sa=na[0],oa=na[1],ia=Object(n.useState)([]),ja=Object(j.a)(ia,2),ra=ja[0],la=ja[1];Object(n.useEffect)((function(){l.a.get("https://rafacims-deploy.herokuapp.com/Total").then((function(e){console.log(e),o(e.data[0].TotalStock),h(e.data[1].TotalStock),z(e.data[2].TotalStock),q(e.data[3].TotalStock),R(e.data[4].TotalStock),Z(e.data[5].TotalStock),te(e.data[6].TotalStock),se(e.data[7].TotalStock),re(e.data[8].TotalStock),ue(e.data[9].TotalStock)}))}),[]),Object(n.useEffect)((function(){l.a.get("https://rafacims-deploy.herokuapp.com/Stores").then((function(e){xe(e.data[0].StoresStock),ge(e.data[1].StoresStock),ye(e.data[2].StoresStock),we(e.data[3].StoresStock),Be(e.data[4].StoresStock),He(e.data[5].StoresStock),Fe(e.data[6].StoresStock),Ke(e.data[7].StoresStock),Xe(e.data[8].StoresStock),_e(e.data[9].StoresStock)}))}),[]),console.log(Ee),Object(n.useEffect)((function(){l.a.get("https://rafacims-deploy.herokuapp.com/Issued").then((function(e){Tt(e.data[0].IssuedStock),Et(e.data[1].IssuedStock),Wt(e.data[2].IssuedStock),Ut(e.data[3].IssuedStock),Gt(e.data[4].IssuedStock),Vt(e.data[5].IssuedStock),$t(e.data[6].IssuedStock),aa(e.data[7].IssuedStock),oa(e.data[8].IssuedStock),la(e.data[9].IssuedStock)}))}),[]),Object(n.useEffect)((function(){l.a.get("https://rafacims-deploy.herokuapp.com/Sizes").then((function(e){console.log(e),at(e.data[0].Sizes),st(e.data[1].Sizes),jt(e.data[2].Sizes),bt(e.data[3].Sizes),dt(e.data[4].Sizes)}))}),[]);var ba=Object(n.useState)(!0),Oa=Object(j.a)(ba,2),ua=Oa[0],da=Oa[1],ha=Object(v.f)(),pa=s.a.useState(null),xa=Object(j.a)(pa,2),Sa=xa[0],ma=xa[1],fa=Boolean(Sa),ga=function(e){ma(e.currentTarget)},ka=function(){ma(null)},Ca=Object(w.a)({root:{"& > *":{borderBottom:"unset"}}}),va=function(e,t,a,c){return{name:e,stores:t,issued:a,total:c,details:[{Size:"60/60/60",Stores:43,issued:3,total:46}]}},ya=function(e){var t=e.row,a=s.a.useState(!1),n=Object(j.a)(a,2),o=n[0],i=(n[1],Ca());return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsxs)(H.a,{className:i.root,children:[Object(c.jsx)(A.a,{}),Object(c.jsx)(A.a,{component:"th",scope:"row",children:t.name}),Object(c.jsx)(A.a,{children:t.stores}),Object(c.jsx)(A.a,{children:t.issued}),Object(c.jsx)(A.a,{children:t.total})]}),Object(c.jsx)(H.a,{children:Object(c.jsx)(A.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(c.jsx)(P.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(c.jsxs)(N.a,{margin:1,children:[Object(c.jsx)(M.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Details"}),Object(c.jsxs)(E.a,{size:"small","aria-label":"purchases",children:[Object(c.jsx)(W.a,{children:Object(c.jsxs)(H.a,{children:[Object(c.jsx)(A.a,{children:"Size:"}),Object(c.jsx)(A.a,{children:"Stores:"}),Object(c.jsx)(A.a,{children:"Issued:"}),Object(c.jsx)(A.a,{children:"Total:"})]})}),Object(c.jsx)(B.a,{children:t.details.map((function(e){return Object(c.jsxs)(H.a,{children:[Object(c.jsx)(A.a,{component:"th",scope:"row",children:e.Size}),Object(c.jsx)(A.a,{children:e.Stores}),Object(c.jsx)(A.a,{children:e.issued}),Object(c.jsx)(A.a,{children:e.total})]},e.Size)}))})]})]})})})})]})},Ia=[va("Wedgewood Shirt (M)",pe,zt,a),va("Wedgewood Shirt (F)",fe,Pt,O),va("Working Blue Shirt (M)",ve,Lt,I),va("Working Blue Shirt (F)",Te,Dt,J),va("Trousers",Ee,qt,Q),va("Skirt",We,Rt,Y),va("Slacks",Ue,Zt,ee),va("Tie (Short)",Ge,ta,ne),va("Tie (Long)",Ve,sa,je),va("Beret",$e,ra,Oe)];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(x.a,{position:"static",children:Object(c.jsxs)(S.a,{style:{justifyContent:"center",display:"inline-flex"},children:[Object(c.jsxs)(u.a,{xsDown:!0,children:[Object(c.jsxs)(d.a,{color:"inherit",variant:"text","aria-label":"text primary button group",children:[Object(c.jsx)(b.a,{onClick:function(){!0===ua?ha.push("/Pages/home"):ha.push("/")},children:"Home"}),Object(c.jsx)(b.a,{onClick:function(){!0===ua?ha.push("/Pages/Stock"):ha.push("/")},children:"Add items"})]}),Object(c.jsx)(m.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:ga,color:"inherit",children:Object(c.jsx)(T.a,{})}),Object(c.jsx)(g.a,{id:"menu-appbar",anchorEl:Sa,anchorOrigin:{vertical:"top",horizontal:"center"},open:fa,onClose:ka,children:Object(c.jsx)(f.a,{onClick:function(){da(!1),ha.push("/")},children:"Logout"})})]}),Object(c.jsxs)(u.a,{smUp:!0,children:[Object(c.jsxs)(m.a,{"aria-label":"more","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:ga,color:"inherit",children:[Object(c.jsx)(C.a,{}),"Menu"]}),Object(c.jsx)(g.a,{id:"menu-appbar",anchorEl:Sa,anchorOrigin:{vertical:"top",horizontal:"center"},open:fa,onClose:ka,children:Object(c.jsx)(f.a,{onClick:function(){!0===ua?ha.push("/Pages/home"):ha.push("/")},children:"Home"})})]})]})}),Object(c.jsx)("h1",{children:"Welcome Back!"}),Object(c.jsx)("h3",{children:"Here's an overview of the current stock"}),Object(c.jsx)(p.a,{children:Object(c.jsx)(L.a,{component:D.a,children:Object(c.jsxs)(E.a,{"aria-label":"collapsible table",children:[Object(c.jsx)(W.a,{children:Object(c.jsxs)(H.a,{children:[Object(c.jsx)(A.a,{}),Object(c.jsx)(A.a,{children:"Name:"}),Object(c.jsx)(A.a,{children:"In Stores:"}),Object(c.jsx)(A.a,{children:"Issued:"}),Object(c.jsx)(A.a,{children:"Total:"})]})}),Object(c.jsx)(B.a,{children:Ia.map((function(e){return Object(c.jsx)(ya,{row:e},e.name)}))})]})})})]})},F=a(22);var J=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(0),r=Object(j.a)(i,2),k=r[0],y=r[1],I=Object(n.useState)(0),z=Object(j.a)(I,2),w=z[0],N=z[1],P=Object(n.useState)(0),E=Object(j.a)(P,2),B=E[0],A=E[1],L=Object(n.useState)([]),W=Object(j.a)(L,2),H=W[0],M=W[1],U=s.a.useState(null),J=Object(j.a)(U,2),q=J[0],G=J[1],K=Boolean(q),Q=Object(n.useState)(!0),R=Object(j.a)(Q,2),V=R[0],X=R[1],Y=Object(v.f)(),Z=function(e){G(e.currentTarget)},$=function(){G(null)};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(x.a,{position:"static",children:Object(c.jsxs)(S.a,{style:{justifyContent:"center",display:"inline-flex"},children:[Object(c.jsxs)(u.a,{xsDown:!0,children:[Object(c.jsx)(d.a,{color:"inherit",variant:"text","aria-label":"text primary button group",children:Object(c.jsx)(b.a,{onClick:function(){!0===V?Y.push("/Pages/home"):Y.push("/")},children:"Home"})}),Object(c.jsx)(m.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:Z,color:"inherit",children:Object(c.jsx)(T.a,{})}),Object(c.jsx)(g.a,{id:"menu-appbar",anchorEl:q,anchorOrigin:{vertical:"top",horizontal:"center"},open:K,onClose:$,children:Object(c.jsx)(f.a,{onClick:function(){X(!1),Y.push("/")},children:"Logout"})})]}),Object(c.jsxs)(u.a,{smUp:!0,children:[Object(c.jsxs)(m.a,{"aria-label":"more","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:Z,color:"inherit",children:[Object(c.jsx)(C.a,{}),"Menu"]}),Object(c.jsxs)(g.a,{id:"menu-appbar",anchorEl:q,anchorOrigin:{vertical:"top",horizontal:"center"},open:K,onClose:$,children:[Object(c.jsx)(f.a,{onClick:function(){!0===V?Y.push("/Pages/home"):Y.push("/")},children:"Home"}),Object(c.jsx)(f.a,{onClick:function(){!0===V?Y.push("/Pages/cadets"):Y.push("/")},children:"Cadets"}),Object(c.jsx)(f.a,{onClick:function(){!0===V?Y.push("/Pages/stock"):Y.push("/")},children:"Stock Management"}),Object(c.jsx)(f.a,{onClick:function(){!0===V?Y.push("/Pages/staff"):Y.push("/")},children:"Staff Accounts"})]})]})]})}),Object(c.jsx)("h1",{children:"Welcome back!"}),Object(c.jsxs)("div",{className:"information",children:[Object(c.jsx)(h.a,{container:!0,direction:"column",alignItems:"center",spacing:1,children:Object(c.jsxs)(D.a,{elevation:3,children:[Object(c.jsx)("h3",{children:"Add an Item"}),Object(c.jsx)(h.a,{item:!0,xs:12,children:Object(c.jsx)(O.a,{id:"filled-basic",style:{margin:18},label:"Item Name",placeholder:"Item Name...",margin:"normal",onChange:function(e){o(e.target.value)}})}),Object(c.jsx)(h.a,{item:!0,xs:12,children:Object(c.jsx)(O.a,{id:"filled-text",style:{margin:18},label:"Size",type:"text",onChange:function(e){y(e.target.value)}})}),Object(c.jsx)(h.a,{item:!0,xs:12,children:Object(c.jsx)(O.a,{label:"Location",style:{margin:18},type:"Text",onChange:function(e){N(e.target.value)}})})]})}),Object(c.jsx)(b.a,{onClick:function(){l.a.post("http://localhost:3001/create",{name:a,size:k,location:w}).then((function(){M([].concat(Object(F.a)(H),[{name:a,size:k,location:w}]))}))},children:"Add Items"})]}),Object(c.jsxs)("div",{className:"Items",children:[Object(c.jsx)(b.a,{onClick:function(){l.a.get("http://localhost:3001/employees").then((function(e){M(e.data)}))},children:"Show Items"}),H.map((function(e,t){return Object(c.jsxs)("div",{className:"items",children:[Object(c.jsx)(p.a,{children:Object(c.jsxs)("h2",{children:["Name: ",e.name]})}),Object(c.jsx)(p.a,{children:Object(c.jsxs)("h2",{children:["Size: ",e.size]})}),Object(c.jsx)(p.a,{children:Object(c.jsxs)("h2",{children:["Location: ",e.location]})}),Object(c.jsx)(p.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{type:"text",placeholder:"Name of cadet issued to....",onChange:function(e){A(e.target.value)}}),Object(c.jsxs)(b.a,{onClick:function(){var t;t=e.id,l.a.put("http://localhost:3001/update",{location:B,id:t}).then((function(e){M(H.map((function(e){return e.id===t?{id:e.id,name:e.name,size:e.size,location:B}:e})))}))},children:[" ","Update"]}),Object(c.jsx)(b.a,{onClick:function(){var t;t=e.id,l.a.delete("http://localhost:3001/delete/".concat(t)).then((function(e){M(H.filter((function(e){return e.id!==t})))}))},children:"Delete"})]})})]})}))]})]})};i.a.render(Object(c.jsx)(I.a,{children:Object(c.jsxs)(v.c,{children:[Object(c.jsx)(v.a,{exact:!0,path:"/",component:y}),",",Object(c.jsx)(v.a,{exact:!0,path:"/Pages/home",component:U}),",",Object(c.jsx)(v.a,{exact:!0,path:"/Pages/Stock",component:J}),","]})}),document.getElementById("root"))},59:function(e,t,a){}},[[133,1,2]]]);
//# sourceMappingURL=main.56bdb141.chunk.js.map