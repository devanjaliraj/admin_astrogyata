(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[264],{2042:function(e,a,t){"use strict";t.r(a),t.d(a,"CommissionEdit",(function(){return S}));var n=t(51),c=t(13),o=t(14),s=t(16),l=t(15),r=t(0),m=t.n(r),i=t(1095),u=t(1093),d=t(1094),p=t(173),g=t(1098),h=t(808),E=t(806),v=t(783),b=t(797),y=t(117),f=(t(798),t(56)),C=t(794),N=(t(822),t(807)),_=t.n(N),S=function(e){Object(s.a)(t,e);var a=Object(l.a)(t);function t(e){var o;return Object(c.a)(this,t),(o=a.call(this,e)).changeHandler1=function(e){o.setState({status:e.target.value})},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.submitHandler=function(e){e.preventDefault();var a=o.props.match.params.id;y.a.post("admin/editComision/".concat(a),o.state).then((function(e){console.log(e),_()("Success!","Submitted SuccessFull!","success"),o.props.history.push("/app/packagemanager/Commission")})).catch((function(e){console.log(e)}))},o.state={product:"",comision_name:"",comision_rate:"",status:""},o.state={categoryList:[],productList:[]},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/user/productbycategory/".concat(this.state.category)).then((function(a){console.log(a.data.data),e.setState({productList:a.data.data})})).catch((function(e){console.log(e)})),console.log(this.state.category),y.a.get("/admin/getproductcalegory").then((function(a){console.log(a.data.data),e.setState({categoryList:a.data.data})})).catch((function(e){console.log(e)}));var a=this.props.match.params.id;y.a.get("/admin/getOneComision/".concat(a)).then((function(a){console.log(a),e.setState({product:a.data.data.product,comision_name:a.data.data.comision_name,comision_rate:a.data.data.comision_rate,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,a,t=this;return m.a.createElement("div",null,m.a.createElement(C.a,{breadCrumbTitle:"Add Commission ",breadCrumbParent:" home",breadCrumbActive:"Edit Commission "}),m.a.createElement(i.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Commission")),m.a.createElement(d.a,null,m.a.createElement(f.b,{render:function(e){var a=e.history;return m.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/packagemanager/Commission")}},"Back")}}))),m.a.createElement(g.a,null,m.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(E.a,null,"Category Name"),m.a.createElement(v.a,{required:!0,type:"select",name:"category",placeholder:"Enter Title",value:this.state.category,onChange:this.changeHandler},m.a.createElement("option",null,"Select....."),null===(e=this.state.categoryList)||void 0===e?void 0:e.map((function(e){return m.a.createElement("option",{key:e._id,value:e._id},e.name)})))),m.a.createElement(d.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},m.a.createElement(E.a,null,"Product Name"),m.a.createElement(v.a,{required:!0,type:"select",name:"product",placeholder:"Enter Title",value:this.state.product,onChange:this.changeHandler},m.a.createElement("option",null,"Select....."),null===(a=this.state.productList)||void 0===a?void 0:a.map((function(e){return m.a.createElement("option",{key:e._id,value:e._id},e.productname)})))),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a,null,"Commission Name"),m.a.createElement(b.a,{required:!0,type:"text",name:"comision_name",placeholder:"Commission Name",value:this.state.comision_name,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a,null,"Commission Rate"),m.a.createElement(b.a,{required:!0,type:"text",name:"comision_rate",placeholder:"Enter Commision Rate",value:this.state.comision_rate,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(E.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:function(e){return t.changeHandler1(e)}},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),m.a.createElement(u.a,null,m.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},m.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(r.Component);a.default=S}}]);
//# sourceMappingURL=264.e3b2aef1.chunk.js.map