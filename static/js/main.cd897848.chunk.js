(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{11:function(t,e,i){},18:function(t,e,i){},21:function(t,e,i){"use strict";i.r(e);var n=i(2),a=i.n(n),s=i(12),r=i.n(s),o=(i(18),i(3)),c=i(4),l=i(1),u=i(6),d=i(5),h=i(9),b=i(7),j=i(8),m=i(23),p=i(0),O=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(o.a)(this,i),(n=e.call(this,t)).state=n.props.item||{description:"",date:Object(m.a)(new Date,"yyyy-MM-dd"),priority:"medium",completed:!1},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"handleChange",value:function(t){var e=t.target,i=e.name,n=e.value;this.setState(Object(b.a)(Object(b.a)({},this.state),{},Object(j.a)({},i,n)))}},{key:"render",value:function(){var t=this,e=this.props.item;return Object(p.jsxs)("form",{className:"input-form",onSubmit:function(e){t.props.handleSubmit(e,t.state,t),t.setState({description:"",date:Object(m.a)(new Date,"yyyy-MM-dd"),priority:"medium",completed:!1})},onReset:function(i){t.setState({state:e})},children:[Object(p.jsx)("input",{onChange:this.handleChange,value:this.state.description,name:"description",type:"text",required:!0}),Object(p.jsx)("input",{required:!0,onChange:this.handleChange,value:this.state.date,name:"date",type:"date"}),Object(p.jsxs)("select",{onChange:this.handleChange,value:this.state.priority,name:"priority",required:!0,children:[Object(p.jsx)("option",{value:"low",children:"Low"}),Object(p.jsx)("option",{value:"medium",children:"Medium"}),Object(p.jsx)("option",{value:"high",children:"High"})]}),Object(p.jsx)("label",{children:Object(p.jsx)("input",{type:"submit",value:"submit"})}),Object(p.jsx)("label",{children:Object(p.jsx)("input",{type:"reset",value:"Reset"})})]})}}]),i}(a.a.Component),f=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(o.a)(this,i),(n=e.call(this,t)).state={isEditing:!1,object:n.props.item},n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.editTask=n.editTask.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"editTask",value:function(){var t=this;this.setState((function(e){return Object(b.a)({isEditing:!0},t.prevState)}))}},{key:"handleSubmit",value:function(t,e){var i=this;console.log(e),this.setState({object:e,isEditing:!1},(function(t){return i.props.callSubmit(t,i.props.item.id,i.state.object)}))}},{key:"handleNoSubmission",value:function(t){this.setState(this.cache),t.target.reset()}},{key:"render",value:function(){var t=this;return this.state.isEditing?Object(p.jsx)(O,{item:this.props.item,handleNoSubmission:this.handleNoSubmission,handleSubmit:this.handleSubmit}):Object(p.jsxs)("div",{className:"todo-item",children:[Object(p.jsx)("input",{type:"checkbox",checked:this.props.item.completed,onChange:function(e){t.props.handleChange(t.props.item.id)}}),Object(p.jsxs)("div",{style:this.props.item.completed?{fontSize:"italic",color:"#cdcdcd",textDecoration:"line-through"}:null,children:[Object(p.jsxs)("span",{children:["Note: ",this.props.item.description,", "]}),Object(p.jsxs)("span",{children:["Date: ",this.props.item.date,", "]}),Object(p.jsxs)("span",{children:["Priority: ",this.props.item.priority,"."]})," "]}),Object(p.jsx)("button",{onClick:this.editTask,children:" Edit "}),Object(p.jsx)("button",{onClick:function(e){return t.props.deleteTask(e,t.props.item.id)},children:"Delete"})]})}}]),i}(a.a.Component),y=(i(11),function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(t){var n;return Object(o.a)(this,i),(n=e.call(this,t)).state={todos:n.props.tasksArray||[]},n.handleChange=n.handleChange.bind(Object(l.a)(n)),n.deleteTask=n.deleteTask.bind(Object(l.a)(n)),n.callSubmit=n.callSubmit.bind(Object(l.a)(n)),n}return Object(c.a)(i,[{key:"callSubmit",value:function(t,e,i){var n=this;this.setState((function(t){var n=t.todos.map((function(t){return t.id===e?t=i:t}));return console.log(n),{todos:n}}),(function(t){return localStorage.setItem("tasksArray",JSON.stringify(n.state.todos))}))}},{key:"deleteTask",value:function(t,e){var i=this;this.setState((function(t){var i=t.todos.filter((function(t){return t.id!==e&&t}));return console.log(i),{todos:i}}),(function(t){return localStorage.setItem("tasksArray",JSON.stringify(i.state.todos))}))}},{key:"handleChange",value:function(t){var e=this;this.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(b.a)(Object(b.a)({},e),{},{completed:!e.completed}):e}))}}),(function(t){return localStorage.setItem("tasksArray",JSON.stringify(e.state.todos))}))}},{key:"render",value:function(){var t=this,e=this.state.todos.filter((function(t){return"low"===t.priority})).map((function(e){return Object(p.jsx)(f,{item:e,callSubmit:t.callSubmit,deleteTask:t.deleteTask,handleChange:t.handleChange},e.id)})),i=this.state.todos.filter((function(t){return"medium"===t.priority})).map((function(e){return Object(p.jsx)(f,{item:e,callSubmit:t.callSubmit,deleteTask:t.deleteTask,handleChange:t.handleChange},e.id)})),n=this.state.todos.filter((function(t){return"high"===t.priority})).map((function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(f,{item:e,callSubmit:t.callSubmit,deleteTask:t.deleteTask,handleChange:t.handleChange},e.id),Object(p.jsx)("br",{})]})})),a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),t,Object(p.jsx)("hr",{})]})},s=[a("High Priority")].concat(Object(h.a)(n),[a("Medium Priority")],Object(h.a)(i),[a("Low Priority")],Object(h.a)(e));return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"todo-list",children:s})})}}]),i}(a.a.Component)),g=i(13),v=i.n(g),S=function(t){Object(u.a)(i,t);var e=Object(d.a)(i);function i(){var t,n;return Object(o.a)(this,i),(n=e.call(this)).handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.state={tasksArray:null!==(t=JSON.parse(localStorage.getItem("tasksArray")))&&void 0!==t?t:[]},n}return Object(c.a)(i,[{key:"handleSubmit",value:function(t,e,i){var n=this;e.id=v()(),t.preventDefault(),this.setState((function(t){return{tasksArray:t.tasksArray.concat(e)}}),(function(){localStorage.setItem("tasksArray",JSON.stringify(n.state.tasksArray))})),console.log(this.state.tasksArray),t.target.submit()}},{key:"render",value:function(){return localStorage.setItem("tasksArray",JSON.stringify(this.state.tasksArray)),console.log(this.state.tasksArray),Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{handleSubmit:this.handleSubmit}),Object(p.jsx)(y,{tasksArray:this.state.tasksArray})]})}}]),i}(n.Component),k=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,24)).then((function(e){var i=e.getCLS,n=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;i(t),n(t),a(t),s(t),r(t)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),k()}},[[21,1,2]]]);
//# sourceMappingURL=main.cd897848.chunk.js.map