(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{16:function(e,t,a){e.exports=a(41)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),o=a.n(r),l=a(3),i=a.n(l),s=a(14),u=a(2),p=a(15),m=a.n(p);a(39);var f=function(e){var t=e.post;return e.loading?c.a.createElement("h2",null,"Loading..."):c.a.createElement("ul",null,t.map((function(e){return c.a.createElement("li",{key:e.id},e.title)})))};var h=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,r=[],o=1;o<Math.ceil(a/t);o++)r.push(o);return c.a.createElement("ul",{className:"pagination"},r.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement("a",{href:"#",onClick:function(){return n(e)}},e))})))};var d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),l=Object(u.a)(o,2),p=l[0],d=l[1],g=Object(n.useState)(1),E=Object(u.a)(g,2),b=E[0],j=E[1],v=Object(n.useState)(10),O=Object(u.a)(v,1)[0];Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,m.a.get("https://jsonplaceholder.typicode.com/posts");case 3:t=e.sent,r(t.data),d(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var P=b*O,y=P-O,S=a.slice(y,P);return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Simple Pagination in React"),c.a.createElement("p",{className:"desc"},"Fetching the following posts form ",c.a.createElement("a",{href:"https://jsonplaceholder.typicode.com/"},"JSON Placeholder")," API"),c.a.createElement(f,{post:S,loading:p}),c.a.createElement(h,{postsPerPage:O,totalPosts:a.length,paginate:function(e){j(e)}}))};a(40);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.22e25278.chunk.js.map