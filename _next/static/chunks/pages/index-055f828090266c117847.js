(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8463:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(5893),a=n(9008),i=n(7294),o=n(7183),s=n(7428),d=n(4246),c=o.Z.Header,l=o.Z.Footer,u=o.Z.Content,p=s.Z.TabPane,f="beds",h=[{id:"oxygen",label:"Oxygen"},{id:f,label:"Beds"}],x=[{key:"Bangalore",district:"Bangalore",state:"Karnataka",o2Demand:200,o2Supply:220,o2Gap:20},{key:"Delhi",district:"Delhi",state:"Delhi",o2Demand:400,o2Supply:370,o2Gap:-30},{key:"Mumbai",district:"Mumbai",state:"Maharashtra",o2Demand:350,o2Supply:325,o2Gap:-25}],y=function(e,t){return"string"===typeof e?e.localeCompare(t):e-t},m=[{title:"District",dataIndex:"district",key:"district",sorter:function(e,t){return y(e.district,t.district)}},{title:"State",dataIndex:"state",key:"state",sorter:function(e,t){return y(e.state,t.state)}},{title:"Projected O2 Demand",dataIndex:"o2Demand",key:"o2Demand",sorter:function(e,t){return y(e.o2Demand,t.o2Demand)}},{title:"O2 Supply",dataIndex:"o2Supply",key:"o2Supply",sorter:function(e,t){return y(e.o2Supply,t.o2Supply)}},{title:"O2 Gap",dataIndex:"o2Gap",key:"o2Gap",defaultSortOrder:"ascend",sorter:function(e,t){return y(e.o2Gap,t.o2Gap)}}],j=function(){return(0,r.jsx)(d.Z,{style:{overflowX:"auto"},columns:m,dataSource:x,bordered:!0})},k=function(){var e=(0,i.useState)(h[0].id),t=e[0],n=e[1];return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(c,{children:(0,r.jsx)("h1",{style:{color:"#fff"},children:"Oxygen Tracker"})}),(0,r.jsx)(u,{style:{marginBlock:20,marginLeft:24,marginRight:24},children:(0,r.jsx)(s.Z,{defaultActiveKey:t,onChange:function(e){return n(e)},children:h.map((function(e){var t=e.id,n=e.label;return(0,r.jsx)(p,{tab:n,children:t===f?"Coming Soon":(0,r.jsx)(j,{})},t)}))})}),(0,r.jsx)(l,{children:"Note: The site is in progress. This isn't real data."})]})};function g(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"O2 Tracker"}),(0,r.jsx)("meta",{name:"description",content:"O2 Tracker"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(k,{})})})]})}},3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8463)}])}},function(e){e.O(0,[774,351,79],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);