(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[186],{2075:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(827),r=a(51),l=a(13),s=a(14),i=a(16),c=a(15),o=a(0),u=a.n(o),m=a(1093),d=a(1094),p=a(1091),f=a(1092),b=a(1095),g=a(173),h=a(1098),v=a(807),y=a(806),E=a(797),O=a(117),j=(a(27),a(808)),N=a.n(j),S=a(56),x=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state);var t=new FormData;t.append("banner_title",s.state.banner_title),t.append("status",s.state.status),t.append("banner_img",s.state.selectedFile,s.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var l=a.value;console.log(l)}}catch(m){r.e(m)}finally{r.f()}var i,c=Object(n.a)(t.keys());try{for(c.s();!(i=c.n()).done;){var o=i.value;console.log(o)}}catch(m){c.e(m)}finally{c.f()}var u=s.props.match.params.id;O.a.post("admin/editBanner/".concat(u),t).then((function(e){console.log(e.data),N()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/pagesetup/banner/bannerList")})).catch((function(e){console.log(e)}))},s.state={banner_title:"",status:"",banner_img:"",selectedName:"",selectedFile:null},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;O.a.get("admin/viewonebanner/".concat(t)).then((function(t){console.log(t),e.setState({banner_title:t.data.data.banner_title,status:t.data.data.status,banner_img:t.data.data.banner_img})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(d.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(p.a,{listTag:"div"},u.a.createElement(f.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(f.a,{href:"/app/pagesetup/banner/bannerList",tag:"a"},"Banner List"),u.a.createElement(f.a,{active:!0},"Edit Banner"))))),u.a.createElement(b.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Banner")),u.a.createElement(d.a,null,u.a.createElement(S.b,{render:function(e){var t=e.history;return u.a.createElement(g.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/pagesetup/banner/bannerList")}},"Back")}}))),u.a.createElement(h.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(m.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Title"),u.a.createElement(E.a,{required:!0,type:"text",name:"banner_title",placeholder:"",value:this.state.banner_title,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Image"),u.a.createElement(E.a,{required:!0,type:"file",name:"banner_img",onChange:this.onChangeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),u.a.createElement(m.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(o.Component)},797:function(e,t,a){"use strict";var n=a(5),r=a(9),l=a(11),s=a(12),i=a(0),c=a.n(i),o=a(1),u=a.n(o),m=a(4),d=a.n(m),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,s=e.bsSize,i=e.valid,o=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,g=e.innerRef,h=Object(r.a)(e,f),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":v&&(O=m?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var j=Object(p.mapToCssModules)(d()(t,o&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,O),a);return("input"===E||u&&"function"===typeof u)&&(h.type=l),h.children&&!b&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(E,Object(n.a)({},h,{ref:g,className:j,"aria-invalid":o}))},t}(c.a.Component);g.propTypes=b,g.defaultProps={type:"text"},t.a=g},827:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(91);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,s=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){i=!0,l=e},f:function(){try{s||null==r.return||r.return()}finally{if(i)throw l}}}}}}]);
//# sourceMappingURL=186.7c0774c3.chunk.js.map