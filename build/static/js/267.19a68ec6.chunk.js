(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[267],{2030:function(e,a,t){"use strict";t.r(a),t.d(a,"AddPrediction",(function(){return S}));var n=t(51),l=t(13),r=t(14),c=t(16),i=t(15),m=t(0),s=t.n(m),o=t(1095),u=t(1093),d=t(1094),p=t(173),E=t(1098),h=t(808),g=t(806),b=t(797),v=t(117),y=(t(798),t(56)),f=t(794),N=(t(894),t(807)),C=t.n(N),S=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),v.a.post("admin/addPridiction",r.state).then((function(e){console.log(e.data),C()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/prediction/predictionList")})).catch((function(e){console.log(e)}))},r.state={title:"",rashiName:"",pre_type:"",desc:"",status:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(f.a,{breadCrumbTitle:"Add Predictoin",breadCrumbParent:"Home",breadCrumbActive:"Add Predictoin "}),s.a.createElement(o.a,null,s.a.createElement(u.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Prediction")),s.a.createElement(d.a,null,s.a.createElement(y.b,{render:function(e){var a=e.history;return s.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/prediction/predictionList")}},"Back")}}))),s.a.createElement(E.a,null,s.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Title"),s.a.createElement(b.a,{required:!0,type:"text",name:"title",placeholder:"Enter Title",value:this.state.title,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Prediction Type"),s.a.createElement(b.a,{required:!0,type:"select",name:"pre_type",value:this.state.pre_type,onChange:this.changeHandler},s.a.createElement("option",{selected:!0},"---Select---"),s.a.createElement("option",null,"Daily"),s.a.createElement("option",null,"Weekly"),s.a.createElement("option",null,"Monthly"))),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Rashi name"),s.a.createElement(b.a,{required:!0,type:"select",name:"rashiName",value:this.state.rashiName,onChange:this.changeHandler},s.a.createElement("option",null,"---Select Rashi---"),s.a.createElement("option",null,"Aries"),s.a.createElement("option",null,"Taurus"),s.a.createElement("option",null,"Gemini"),s.a.createElement("option",null,"Cancer"),s.a.createElement("option",null,"Leo"),s.a.createElement("option",null,"Virgo"),s.a.createElement("option",null,"Libra"),s.a.createElement("option",null,"Scorpio"),s.a.createElement("option",null,"Saggitarius"),s.a.createElement("option",null,"Capricorn"),s.a.createElement("option",null,"Aquarius"),s.a.createElement("option",null,"Pisces"))),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,null,"Description"),s.a.createElement(b.a,{required:!0,type:"textarea",name:"desc",placeholder:"Enter desc",value:this.state.desc,onChange:this.changeHandler})),s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(g.a,{className:"mb-1"},"Status"),s.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),s.a.createElement("span",{style:{marginRight:"20px"}},"Active"),s.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),s.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),s.a.createElement(u.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component);a.default=S}}]);
//# sourceMappingURL=267.19a68ec6.chunk.js.map