(this.webpackJsonphubgant=this.webpackJsonphubgant||[]).push([[0],{10:function(t){t.exports=JSON.parse('{"workspaces":{"projects":[{"updateDates":["8/3/2021"],"files":[],"cards":[{"tasks":[{"id":400,"text":"buy furnitures","start_date":"2021-02-01","duration":5,"progress":0.3,"priority":"high","cardName":"new card"},{"id":500,"text":"check the schedules","start_date":"2021-02-02","duration":4,"progress":1,"priority":"high"},{"id":1,"text":"first","start_date":"2021-02-12","duration":5,"progress":3,"priority":"high"},{"id":3,"text":"second","start_date":"2021-02-16","duration":3,"progress":0.1,"priority":"high"},{"id":4,"text":"third","start_date":"2021-02-12","duration":8,"progress":1,"priority":"high"}],"_id":"6045f52050da7be7735e15ee","project":"6045dc3f066887987959007b","name":"new card","__v":2},{"tasks":[{"id":6,"text":"forth","start_date":"2021-02-22","duration":7,"progress":0.9,"priority":"high","cardName":"one card"},{"id":7,"text":"sport","start_date":"2021-02-04","duration":4,"progress":0.7,"priority":"high"},{"id":8,"text":"wash","start_date":"2021-02-15","duration":2,"progress":1,"priority":"high"}],"_id":"6045f52e50da7be7735e15ef","project":"6045dc3f066887987959007b","name":"one card","__v":1},{"tasks":[{"id":9,"text":"pointing","start_date":"2021-02-08","duration":9,"progress":3,"priority":"high","cardName":"any card"},{"id":10,"text":"walking","start_date":"2021-02-20","duration":5,"progress":0.4,"priority":"high"},{"id":100,"text":"tour and visit","start_date":"2021-02-02","duration":8,"progress":0.2,"priority":"high"},{"id":200,"text":"take care of travel","start_date":"2021-02-25","duration":7,"progress":1,"priority":"high"},{"id":300,"text":"write the book","start_date":"2021-02-10","duration":10,"progress":3,"priority":"high"}],"_id":"6045f52e50da7be7735e15ef","project":"6045dc3f066887987959007b","name":"any card","__v":0}],"teams":[],"_id":"6045dc3f066887987959007b","name":"project1","description":"enb n","dueDate":"08/06/2021","workspace":"6045cf2e802211521d51e020","startDate":"08/03/2021","color":"#BF2E63","__v":2},{"updateDates":["8/3/2021"],"files":[],"cards":[{"tasks":[{"id":1,"text":"some task","start_date":"2021-03-18","duration":2,"progress":0.3,"priority":"high","color":"#44D7B6"},{"id":2,"text":"shopping","start_date":"2021-04-20","duration":5,"progress":0.7,"priority":"high","color":"#8868FC"}],"_id":"6045f52050da7be7735e15ee","project":"6045dc3f066887987959007b","name":"1","__v":2},{"tasks":[],"_id":"6045f52e50da7be7735e15ef","project":"6045dc3f066887987959007b","name":"2","__v":0}],"teams":[],"_id":"6045dc4e066887987959007d","name":"project2","description":"enb n","dueDate":"2021-03-08","workspace":"6045cf2e802211521d51e020","startDate":"08/03/2021","color":"#44D7B6","__v":0},{"updateDates":["8/3/2021"],"files":[],"cards":[],"teams":[],"_id":"6045dc4f066887987959007e","name":"project3","description":"enb n","dueDate":"2021-03-08","workspace":"6045cf2e802211521d51e020","startDate":"08/03/2021","color":"#F8B520","__v":0},{"updateDates":["8/3/2021"],"files":[],"cards":[],"teams":[],"_id":"6045dc51066887987959007f","name":"project4","description":"enb n","dueDate":"2021-03-08","workspace":"6045cf2e802211521d51e020","startDate":"08/03/2021","color":"#8868FC","__v":0}],"teams":[],"_id":"6045cf2e802211521d51e020","userId":"60449956108a053d534ed441","productionDate":"08/03/2021","color":"#C967B6","__v":4}}')},16:function(t,e,r){},28:function(t,e,r){},31:function(t,e,r){},32:function(t,e,r){},33:function(t,e,r){},39:function(t,e,r){},40:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r.n(a),o=r(18),s=r.n(o),c=(r(28),r(19)),i=r(20),d=r(23),l=r(22),p=r(2),u=(r(16),r(29),r(0)),g=function(t){Object(d.a)(r,t);var e=Object(l.a)(r);function r(t){var a;return Object(c.a)(this,r),(a=e.call(this,t)).dataProcessor=null,a.initZoom(),a}return Object(i.a)(r,[{key:"initZoom",value:function(){p.gantt.ext.zoom.init({levels:[{name:"Days",scale_height:60,min_column_width:40,scales:[{unit:"month",step:1,format:"%F %Y"},{unit:"day",step:1,format:"%j"}]}]})}},{key:"setZoom",value:function(t){p.gantt.ext.zoom.setLevel(t)}},{key:"initGanttDataProcessor",value:function(){this.props.onDataUpdated}},{key:"componentDidMount",value:function(){p.gantt.plugins({tooltip:!0}),p.gantt.config.order_branch=!0,p.gantt.config.fit_tasks=!0,p.gantt.setSizes();p.gantt.attachEvent("onBeforeTaskDisplay",(function(t,e){return"high"==e.priority})),p.gantt.config.xml_date="%Y-%m-%d %H:%i";var t=this.props.tasks;p.gantt.init(this.ganttContainer),this.initGanttDataProcessor(),p.gantt.parse(t),p.gantt.templates.scale_cell_class=function(t){return"weekend"},p.gantt.templates.task_class=function(t,e,r){return r.progress>0&&r.progress<1?r.class="pinkBorder":1===r.progress?r.class="greenBorder vv":r.class="orangeBorder"},p.gantt.templates.gantt_grid_data=function(t,e){return"vv"},p.gantt.templates.task_text=function(t,e,r){return r.progress>1?r.text:r.text+" "+"<b>".concat(100*r.progress,"%</b>")},p.gantt.templates.gantt_cell=function(t,e,r){return r.text="knkl"},p.gantt.templates.grid_row_class=function(t,e){return"ll"},p.gantt.config.columns=[{name:"cardName",tree:!0,width:190,min_width:150,height:900,max_width:300,resize:!0,align:"center",template:function(t){if(t.cardName)return"<div class='important'><i  class=\"material-icons  \">\n                arrow_drop_down\n                </i>".concat(t.cardName,"</div>")}}],p.gantt.templates.tooltip_date_format=function(t){return p.gantt.date.date_to_str("%Y-%m-%d")(t)},p.gantt.attachEvent("onGridResizeEnd",(function(t,e){return p.gantt.message("Grid is now <b>"+e+"</b>px width"),!0}))}},{key:"componentWillUnmount",value:function(){this.dataProcessor&&(this.dataProcessor.destructor(),this.dataProcessor=null)}},{key:"showAlert",value:function(){alert("bjkbj")}},{key:"render",value:function(){var t=this,e=this.props.zoom;return this.setZoom(e),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("center",{children:Object(u.jsx)("div",{ref:function(e){t.ganttContainer=e}})})})}}]),r}(a.Component),j=(r(31),r(32),r(10));function h(){var t=this,e="project1";console.log(e);var r={workspaces:j};console.log(r);var a=r.workspaces.workspaces.projects,n=[],o=[],s=[];a.map((function(t,r){t.name===e?t.cards.map((function(t,e){n.push(t),console.log("pppppppp",t)})):console.log("bed",t.cards)})),console.log("the cards",n),n.map((function(t,e){var r=0;t.tasks.map((function(t){r++,o.push(t)})),s.push(r)})),console.log("mone",s);var c,i="3000-01-01",d="1000-01-01";o.map((function(t){var e=t.start_date.split("-")[0];if(e>d.split("-")[0])c=e,console.log("papapap",e),e=e.concat("-01-01"),console.log("tttt",e),d=e;else{if(!(e<i))return;i=e}})),c=parseInt(c),c=(c=(c+=2).toString()).concat("-01-01"),d=c,console.log(),o.push({id:2985730,text:"first",start_date:c,duration:3,progress:.6}),console.log("the tasks",o);var l={data:o,links:[{id:1,source:7,target:7,type:"0"}]},p="Days";return Object(u.jsx)("div",{children:Object(u.jsx)("div",{style:{width:"40rem"},children:Object(u.jsx)(g,{tasks:l,zoom:p,onDataUpdated:function(e,r,a,n){var o=a&&a.text?" (".concat(a.text,")"):"",s="".concat(e," ").concat(r,": ").concat(n," ").concat(o);"link"===e&&"delete"!==r&&(s+=" ( source: ".concat(a.source,", target: ").concat(a.target," )")),t.addMessage(s)}})})})}var m=r(13),b=r(3);r(33);var f=Object(b.f)((function(t){var e={workspaces:j}.workspaces.workspaces.projects;console.log(e);var r=[];return e.map((function(t,e){r[e]=t.name})),console.log(r),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container ",children:[Object(u.jsx)("div",{className:"row  header2"}),Object(u.jsxs)("div",{className:"row header1",children:[Object(u.jsx)("div",{className:"col-3",children:Object(u.jsxs)("div",{className:"btn-group",children:[Object(u.jsx)("div",{className:"dropBtn dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Projects"}),Object(u.jsx)("div",{className:"   dropContainer dropdown-menu dropdown-menu-right container ",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col"}),e.map((function(t){return Object(u.jsxs)("div",{className:" row mt-2",children:[Object(u.jsxs)("div",{className:"col-1  itemCircle ml-3",style:{backgroundColor:t.color?t.color:"blue"},children:["   ",t.name[0]," "]}),Object(u.jsx)("div",{className:"col-1 ",children:Object(u.jsx)("button",{className:" dropdown-item dropItem ",children:t.name})})]})}))]})})]})})," ",Object(u.jsx)("div",{className:"col-3"}),Object(u.jsx)("div",{className:"col-3 gantt",children:"Gantt"})]})]})})}));function x(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)("center",{children:Object(u.jsx)(f,{})}),Object(u.jsx)(b.c,{children:Object(u.jsx)(b.a,{path:"/DisplayGantt/:projectName",children:Object(u.jsx)(h,{})})})]})})}r(39);function v(){return Object(u.jsxs)("div",{className:"configurator",children:[Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("center",{children:[Object(u.jsx)("div",{className:"text_chenge",children:"change the progress color: "}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:["task in process:",Object(u.jsx)("input",{type:"color",onChange:function(t){return e=t.target.value,document.documentElement.style.getPropertyValue("--color1"),void document.documentElement.style.setProperty("--color1",e);var e}})]})," \u200f",Object(u.jsxs)("div",{children:["mission accomplished:",Object(u.jsx)("br",{})," ",Object(u.jsx)("input",{type:"color",onChange:function(t){return e=t.target.value,document.documentElement.style.getPropertyValue("--color2"),void document.documentElement.style.setProperty("--color2",e);var e}})]}),Object(u.jsxs)("div",{children:["Task not started:",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"color",onChange:function(t){return e=t.target.value,document.documentElement.style.getPropertyValue("--color3"),void document.documentElement.style.setProperty("--color3",e);var e}})]})]})]})}function _(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{}),Object(u.jsx)(x,{}),Object(u.jsx)("br",{}),Object(u.jsx)(h,{})]})}var O=function(t){t&&t instanceof Function&&r.e(3).then(r.bind(null,42)).then((function(e){var r=e.getCLS,a=e.getFID,n=e.getFCP,o=e.getLCP,s=e.getTTFB;r(t),a(t),n(t),o(t),s(t)}))};s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),O()}},[[40,1,2]]]);
//# sourceMappingURL=main.93eaaca7.chunk.js.map