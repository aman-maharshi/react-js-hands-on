(this["webpackJsonpbirthday-reminder"]=this["webpackJsonpbirthday-reminder"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t(1),s=t.n(r),i=t(7),c=t.n(i),l=(t(13),t(2)),o=t(3),d=t(5),m=t(4),j=[{id:1,name:"Bertie Yates",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"},{id:2,name:"Hester Hogan",age:32,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"},{id:3,name:"Larry Little",age:36,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"},{id:4,name:"Sean Walsh",age:34,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"},{id:5,name:"Lola Gardner",age:29,image:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"}],h=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return Object(n.jsxs)("p",{className:"footer",children:["Coded by"," ",Object(n.jsx)("a",{href:"http://amanmaharshi.com",rel:"noreferrer",target:"_blank",children:"Aman Maharshi"})," "]})}}]),t}(s.a.Component),p=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={listItems:j},e.clearAll=function(){e.setState({listItems:[]})},e.reload=function(){window.location.reload()},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state.listItems;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("main",{className:"container",children:[Object(n.jsxs)("p",{className:"title",children:[e.length," Birthdays Today"]}),Object(n.jsx)("div",{className:"list",children:e.map((function(e){return Object(n.jsxs)("div",{className:"person",children:[Object(n.jsx)("div",{className:"person__photo",children:Object(n.jsx)("img",{src:e.image,alt:e.name})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"person__name",children:e.name}),Object(n.jsxs)("p",{className:"person__age",children:[e.age," years"]})]})]},e.id)}))}),Object(n.jsx)("button",{onClick:this.clearAll,disabled:!e.length,children:"Clear All"}),!e.length&&Object(n.jsx)("button",{onClick:this.reload,children:"Reload"}),Object(n.jsx)(h,{})]})})}}]),t}(s.a.Component);c.a.render(Object(n.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.64e36a1b.chunk.js.map