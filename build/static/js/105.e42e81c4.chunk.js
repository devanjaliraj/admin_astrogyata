(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[105],{2108:function(e,a,t){"use strict";t.r(a);var n=t(13),c=t(14),s=t(16),l=t(15),r=t(0),m=t.n(r),o=t(1093),i=t(1094),d=t(1095),u=t(173),h=t(1098),E=(t(27),t(837),t(795),t(794)),p=t(56),b=t(117),f=t(846),v=t.n(f),N=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var c;return Object(n.a)(this,t),(c=a.call(this,e)).state={data:{}},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;b.a.get("/admin/getone_Rhscope/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(E.a,{breadCrumbTitle:"Rashi Management",breadCrumbParent:"Home",breadCrumbActive:"View Rashi Horoscope"}),m.a.createElement(o.a,null,m.a.createElement(i.a,{sm:"12"})),m.a.createElement(d.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(o.a,{className:"m-2"},m.a.createElement(i.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Rashi Horoscope")),m.a.createElement(i.a,null,m.a.createElement(p.b,{render:function(e){var a=e.history;return m.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/rashimanagement/rashihoroscope/rashiHoroscopeList")}},"Back")}}))),m.a.createElement(h.a,{className:"pb-0"},m.a.createElement(o.a,{className:"mb-5 mt-2"},m.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Title"),m.a.createElement("h6",{className:""}," ",this.state.data.title)),m.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Rashi Title"),m.a.createElement("div",{className:"text-truncate"},null===(e=this.state.data.rashiId)||void 0===e?void 0:e.map((function(e){return m.a.createElement("span",{key:e._id},null===e||void 0===e?void 0:e.rashi_title)})))),m.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Short Description"),m.a.createElement("h6",{className:""}," ",v()(this.state.data.sort_desc))),m.a.createElement(i.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Long Description"),m.a.createElement("h6",{className:""}," ",v()(this.state.data.long_desc))))))))}}]),t}(m.a.Component);a.default=N},795:function(e,a,t){},837:function(e,a,t){},847:function(e,a){}}]);
//# sourceMappingURL=105.e42e81c4.chunk.js.map