/*! For license information please see 131.ec645c67.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[131],{2095:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return B}));var n=a(71),r=a(827),o=a(51),i=a(13),l=a(14),c=a(16),s=a(15),u=a(0),d=a.n(u),h=a(1093),f=a(1094),m=a(1091),g=a(1092),p=a(1095),v=a(173),y=a(1098),b=a(807),E=a(806),w=a(797),L=a(783),N=a(117),x=a(808),S=a.n(x),_=a(56),O=a(829),j=a(828),k=a(805),C=a.n(k);a(846),a(800),a(823),a(803);function F(){F=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),l=new S(r||[]);return n(i,"_invoke",{value:w(e,a,l)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var d={};function h(){}function f(){}function m(){}var g={};c(g,o,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(_([])));v&&v!==t&&a.call(v,o)&&(g=v);var y=m.prototype=h.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(r,i){!function n(r,o,i,l){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return O()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var l=L(i,a);if(l){if(l===d)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function L(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,L(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),d;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function _(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=m,n(y,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:f,configurable:!0}),f.displayName=c(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(s(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=_,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;x(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:_(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),d}},e}var B=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onEditorStateChange=function(e){n.setState({editorState:e,desc:C()(Object(O.convertToRaw)(e.getCurrentContent()))})},n.onChangeHandler=function(e){n.setState({selectedFile:e.target.files[0]}),n.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},n.onChangeHandler=function(e){n.setState({selectedFile:e.target.files}),n.setState({selectedName:e.target.files.name}),console.log(e.target.files)},n.changeHandler1=function(e){n.setState({status:e.target.value})},n.changeHandler=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("blog_title",n.state.blog_title),t.append("desc",n.state.desc),t.append("blogcategory",n.state.blogcategory);var a,o=Object(r.a)(n.state.selectedFile);try{for(o.s();!(a=o.n()).done;){var i=a.value;null!==n.state.selectedFile&&t.append("blogImg",i,i.name)}}catch(m){o.e(m)}finally{o.f()}var l,c=Object(r.a)(t.values());try{for(c.s();!(l=c.n()).done;){var s=l.value;console.log(s)}}catch(m){c.e(m)}finally{c.f()}var u,d=Object(r.a)(t.keys());try{for(d.s();!(u=d.n()).done;){var h=u.value;console.log(h)}}catch(m){d.e(m)}finally{d.f()}var f=n.props.match.params.id;N.a.post("admin/edit_blog_cat/".concat(f),t).then((function(e){console.log(e.data),S()("Success!","Submitted SuccessFull!","success"),n.props.history.push("/app/blogmngment/blog/blogList")})).catch((function(e){console.log(e.response.data)}))},n.state={blog_title:"",desc:"",blogcategory:"",blogImg:"",editorState:O.EditorState.createEmpty(),selectedFile:void 0,selectedName:""},n.state={categoryB:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(n.a)(F().mark((function e(){var t,a=this;return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.a.get("admin/all_blog_category").then((function(e){console.log(e),a.setState({categoryB:e.data.data})})).catch((function(e){console.log(e)})),t=this.props.match.params.id,N.a.get("admin/viewoneBlog/".concat(t)).then((function(e){console.log(e),a.setState({blog_title:e.data.data.blog_title,desc:e.data.data.desc,img:e.data.data.img,blogcategory:e.data.data.blogcategory})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return d.a.createElement("div",null,d.a.createElement(h.a,null,d.a.createElement(f.a,{sm:"12"},d.a.createElement("div",null,d.a.createElement(m.a,{listTag:"div"},d.a.createElement(g.a,{href:"/analyticsDashboard",tag:"a"},"Home"),d.a.createElement(g.a,{href:"/app/blogmngment/blog/blogList",tag:"a"},"Blog List"),d.a.createElement(g.a,{active:!0},"Edit Blog"))))),d.a.createElement(p.a,null,d.a.createElement(h.a,{className:"m-2"},d.a.createElement(f.a,null,d.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Blog")),d.a.createElement(f.a,null,d.a.createElement(_.b,{render:function(e){var t=e.history;return d.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/size/sizeList/app/blogmngment/blog/blogList")}},"Back")}}))),d.a.createElement(y.a,null,d.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(h.a,null,d.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Title"),d.a.createElement(w.a,{required:!0,type:"text",name:"blog_title",placeholder:"",value:this.state.blog_title,onChange:this.changeHandler})),d.a.createElement(f.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},d.a.createElement(E.a,null,"Blog Image"),d.a.createElement(L.a,{type:"file",onChange:this.onChangeHandler})),d.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(E.a,null,"Blog Category"),d.a.createElement(L.a,{type:"select",name:"blogcategory",value:this.state.blogcategory,onChange:this.changeHandler},d.a.createElement("option",null,"select blog category"),null===(e=this.state.categoryB)||void 0===e?void 0:e.map((function(e){return d.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.name)})))),d.a.createElement(f.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},d.a.createElement(E.a,null,"Description"),d.a.createElement(j.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),d.a.createElement("br",null))),d.a.createElement(h.a,null,d.a.createElement(f.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},d.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(u.Component)},803:function(e,t,a){},847:function(e,t){}}]);
//# sourceMappingURL=131.ec645c67.chunk.js.map