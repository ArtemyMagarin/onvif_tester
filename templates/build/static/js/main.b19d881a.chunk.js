(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},27:function(e,t){},28:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wQRFQwgzBdb6QAAAL9JREFUSMfNlssKwjAQRQ9S8IMEm/rNiv6TtO609QeumyxC6COPoZhVnucOA3MnCB6CQdBhNARO8BLcEPQCCSaBM4JPnvlEcBK8LUQi1iho5w6KRBbhCxeyRDbhNSLJ8JUHzgye87AYngKohq+BzOALhfMJ5qPgbFX6YdRZkR8SNY5AE6wbv2cS/UXwnUlRvXcJuijnrZl3zcEtbGUTXi2SAi+xlWx4iZPGcPcXvWCXbrYqskfTv3sR629LL7j+APJRXoh+oaytAAAAAElFTkSuQmCC"},29:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wQRFQs7CTMEwgAAASNJREFUSMft1UFKw1AQxvH/PKFtUJJ4gZbiIQQXggupd+jW2IU9iRcobVMEb+BGcCGtC6EeJ+kidWHGhVGw0heSJrvOOvy+vJl5PNhXTkkdaGvqdRUdKbxJTfgc6ACR1Iingl6bqnBnfNxW9CXDFWS4Dlb3UhWems8F0M3w248gGlUyZBu+c0AeDnBQeqCh31FJrXjpE7RCv6OazvNwAGlM3AcRzkxKPxnE7yVW8WYdrGbbvjci9ICT1PDsjN3TKvHvAJU+SAJ4tpAMXxTBf2fQCo/OVc0TcAhEBq6SIF6W6fnWIf8JUWIj9JIgXu6C/9ui5tS7BB5BHSBSZCDoHdAu0hbrmm6066cK/7n1HmyElMbt+z7zL5pT77Uxcfv7d7nW+gJ2L6x+MkAiEwAAAABJRU5ErkJggg=="},30:function(e,t,a){e.exports=a(47)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getDevicesList",function(){return E}),a.d(n,"getDevice",function(){return f}),a.d(n,"getDeviceSnapshots",function(){return g}),a.d(n,"showCurrentDevice",function(){return N}),a.d(n,"refreshImage",function(){return D}),a.d(n,"killStream",function(){return _});var r={};a.r(r),a.d(r,"runTest",function(){return z}),a.d(r,"startTestAction",function(){return q}),a.d(r,"nextTest",function(){return Z}),a.d(r,"closeTestAction",function(){return $}),a.d(r,"resolveTestManually",function(){return ee});var s=a(0),c=a.n(s),o=a(23),l=a(6),i=a(3),u=a(4),d=a(8),p=a(5),m=a(7),h=a(11),b=a.n(h),v=(a(21),a(39),a(40),a(41),a(42),a(2));function E(){return{type:"GET_DEVICES_LIST",api:{url:"/api/devices",method:"GET"}}}function f(e,t){return{type:"GET_DEVICE",api:{url:"/api/device",method:"GET",data:{ip:e,port:t}}}}function g(e,t){return{type:"GET_DEVICE_SNAPSHOTS",api:{url:"/api/get_snapshots",method:"GET",data:{ip:e,port:t}}}}function N(){return{type:"HIDE_CURRENT_DEVICE"}}function D(e,t){return{type:"REFRESH_SNAPSHOT_IMAGE",api:{url:"/api/current_snapshot",method:"GET",data:{ip:e,port:t}}}}function _(e,t){return{type:"KILL_STREAM",api:{url:"/api/stop_stream",method:"GET",data:{ip:e,port:t}}}}a(22);var O=function(e){var t=e.id,a=e.text,n=e.onClick,r=e.active,s=e.pending;return c.a.createElement("button",{key:t,type:"button",onClick:n,className:"list-group-item d-flex justify-content-between list-group-item-action".concat(r?" active":"")},a,s?c.a.createElement("div",{className:"typing_loader"}):null)},S=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.dashboardActions.getDevicesList()}},{key:"render",value:function(){var e=this,t=this.props.list.map(function(t,a){return c.a.createElement(O,{key:a,text:"".concat(t.ip,":").concat(t.port),onClick:function(){e.props.dashboardActions.getDevice(t.ip,t.port)},active:e.props.currentDevice.data.ip===t.ip&&e.props.currentDevice.data.port===t.port&&e.props.currentDevice.show,pending:e.props.currentDevice.data.ip===t.ip&&e.props.currentDevice.data.port===t.port&&e.props.currentDevice.pending})});return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col d-flex align-items-baseline justify-content-between"},c.a.createElement("span",{className:"h5 m-0"},"Devices",c.a.createElement("i",{className:"d-sm-inline-block d-md-none small align-middle material-icons ml-1","data-toggle":"collapse",href:"#collapseDevicesList",role:"button","aria-expanded":"false","aria-controls":"collapseDevicesList",style:{cursor:"pointer"}},"radio_button_checked")),this.props.devices.pending?c.a.createElement("div",{className:"typing_loader"}):c.a.createElement("span",{className:"m-0"},c.a.createElement("i",{className:"align-middle material-icons",style:{cursor:"pointer"},onClick:function(){e.props.dashboardActions.getDevicesList()}},"refresh")))),c.a.createElement("div",{className:"collapse show",id:"collapseDevicesList"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("div",{className:"list-group"},t)))))}}]),t}(c.a.Component),y=Object(l.b)(function(e){return{list:e.dashboardReducer.list.devices,devices:e.dashboardReducer.list,currentDevice:e.dashboardReducer.currentDevice}},function(e){return{dashboardActions:Object(v.b)(n,e)}})(S),A=(a(43),function(e){return c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Device Information:"),c.a.createElement("div",{className:"card"},c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},"Address: ","".concat(e.currentDeviceData.ip,":").concat(e.currentDeviceData.port)),c.a.createElement("li",{className:"list-group-item"},"Manufacturer: ",e.currentDeviceData.Manufacturer),c.a.createElement("li",{className:"list-group-item"},"Model: ",e.currentDeviceData.Model),c.a.createElement("li",{className:"list-group-item"},"Firmware Version: ",e.currentDeviceData["Firmware Version"]),c.a.createElement("li",{className:"list-group-item"},"Serial Number: ",e.currentDeviceData["Serial Number"]),c.a.createElement("li",{className:"list-group-item"},"Hardware ID: ",e.currentDeviceData["Hardware ID"]))))}),T=a(10),j="http://onvif.auditory.ru",R=a(16),I=a.n(R),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={ip:e.ip,port:e.port,hls:new I.a,loaded:!1,supported:I.a.isSupported()},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.state.supported){var t=document.getElementById("".concat(this.state.ip).concat(this.state.port));console.log(t),this.state.hls.attachMedia(t),this.state.hls.loadSource("".concat(j,"/livestream?ip=").concat(this.state.ip,"&port=").concat(this.state.port)),this.state.hls.on(I.a.Events.MANIFEST_PARSED,function(){e.setState({loaded:!0}),t.play()})}}},{key:"componentWillUnmount",value:function(){!this.props.dontkill&&fetch("".concat(j,"/api/stop_stream?ip=").concat(this.state.ip,"&port=").concat(this.state.port)).then(function(){}).catch(function(){}),!this.props.dontkill&&this.state.hls.stopLoad()}},{key:"render",value:function(){var e=c.a.createElement("video",{controls:!0,className:"w-100",id:"".concat(this.state.ip).concat(this.state.port),style:{display:this.state.loaded?"block":"none"}}),t=this.props.spinner;return this.state.supported?c.a.createElement("div",{className:"position-relative"},e,this.state.loaded?null:t):c.a.createElement("p",null,"Stream is not supported on your device.")}}]),t}(c.a.Component);a(44),a(45);var k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).togglePicture=function(){"snapshot"===a.state.tab?a.setState({tab:"stream"}):a.setState({tab:"snapshot"})},a.refreshImage=function(){a.setState({prevSnapshot:a.props.currentSnapshot&&a.props.currentSnapshot.url||a.state.prevSnapshot}),a.props.dashboardActions.refreshImage(a.props.currentDeviceData.ip,a.props.currentDeviceData.port)},a.state={tab:"snapshot",prevSnapshot:e.snapshot_url},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.currentDeviceData.ip),console.log(this.props.currentDeviceData.port),this.props.dashboardActions.getDeviceSnapshots(this.props.currentDeviceData.ip,this.props.currentDeviceData.port),this.props.dashboardActions.refreshImage(this.props.currentDeviceData.ip,this.props.currentDeviceData.port),console.log(this.props)}},{key:"render",value:function(){var e,t,a=this,n=j+("snapshot"===this.state.tab?this.props.currentSnapshot&&this.props.currentSnapshot.url?this.props.currentSnapshot.url:this.state.prevSnapshot:this.props.stream_url);n=n+(~n.indexOf("?")?"&":"?")+"t=".concat(Date.now());var r=this.props.private_snapshot_url?!this.props.private_snapshot_url.includes("rtsp"):null,s=this.props.snapshotsList?this.props.snapshotsList.map(function(e,t){return c.a.createElement("div",{key:t,className:"carousel-item ".concat(0===t?"active":"")},c.a.createElement("img",{src:"".concat(j).concat(e.url),className:"d-block w-100",alt:"Snapshot".concat(t)}),c.a.createElement("div",{className:"carousel-caption"},c.a.createElement("h5",null,e.camera),c.a.createElement("p",null,e.datetime)))}):[],o=c.a.createElement("div",{className:"switch-wrapper"},"Show snapshot",c.a.createElement("label",{className:"switch"},c.a.createElement("input",{type:"checkbox",checked:"stream"===this.state.tab,onChange:this.togglePicture}),c.a.createElement("span",{className:"slider"})),"Show Stream"),l=c.a.createElement("div",{style:{top:0,pointerEvents:"none"},className:"d-flex justify-content-center align-items-center w-100 h-100 position-absolute"},c.a.createElement("div",{className:"spinner-border text-primary",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))),i="snapshot"===this.state.tab?c.a.createElement("div",{className:"position-relative"},c.a.createElement("img",{src:n,alt:"snapshot",className:"stream-image",onClick:function(){a.refreshImage()}}),!this.props.currentSnapshot||this.props.currentSnapshot.pending?l:null):c.a.createElement(C,{spinner:l,ip:this.props.currentDeviceData.ip,port:this.props.currentDeviceData.port});return c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"RTSP Stream:"),c.a.createElement("div",{className:"card snapshot-card"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-sm-12 col-md-6"},o),c.a.createElement("div",{className:"col-sm-12 col-md-6"},c.a.createElement("div",null,c.a.createElement("button",(e={type:"button",className:"btn btn-sm mr-2 btn-secondary"},Object(T.a)(e,"type","button"),Object(T.a)(e,"data-toggle","collapse"),Object(T.a)(e,"data-target","#showRtspUrl"),Object(T.a)(e,"aria-expanded","false"),Object(T.a)(e,"aria-controls","showRtspUrl"),e),"RTSP Url"),c.a.createElement("button",(t={type:"button",className:"btn btn-sm mr-2 btn-secondary"},Object(T.a)(t,"type","button"),Object(T.a)(t,"data-toggle","collapse"),Object(T.a)(t,"data-target","#showSnapshotUrl"),Object(T.a)(t,"aria-expanded","false"),Object(T.a)(t,"aria-controls","showSnapshotUrl"),t),"Snapshot Url"),c.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary","data-toggle":"modal","data-target":".bd-slideshow-modal-lg"},"Slideshow")))),i),c.a.createElement("div",{className:"collapse",id:"showRtspUrl"},"RTSP avaliable at:",c.a.createElement("a",{href:this.props.private_stream_url}," "+this.props.private_stream_url)),c.a.createElement("div",{className:"collapse",id:"showSnapshotUrl"},this.props.private_snapshot_url&&r?"Snapshot avaliable at:":"Device does not support Snapshot or Snapshot Url content is not valid",this.props.private_snapshot_url&&r?c.a.createElement("a",{href:this.props.private_snapshot_url,target:"_blank",rel:"noopener noreferrer"}," "+this.props.private_snapshot_url):null),c.a.createElement("div",{className:"modal fade bd-slideshow-modal-lg",tabIndex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-lg"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{id:"carousel-slideshow",className:"carousel","data-ride":"carousel"},c.a.createElement("div",{className:"carousel-inner"},s),c.a.createElement("a",{className:"carousel-control-prev",href:"#carousel-slideshow",role:"button","data-slide":"prev"},c.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Previous")),c.a.createElement("a",{className:"carousel-control-next",href:"#carousel-slideshow",role:"button","data-slide":"next"},c.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Next")))))))}}]),t}(c.a.Component),w=Object(l.b)(function(e){return{currentSnapshot:e.dashboardReducer.currentDevice.currentSnapshot,snapshotsList:e.dashboardReducer.snapshotsList.snapshots}},function(e){return{dashboardActions:Object(v.b)(n,e)}})(k),x=function(e){return c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Settings:"))},L=function(e){return c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},"Database:"))},U=a(9),P=(a(46),a(25)),G=a(26),M=a.n(G),F=a(1),B={list:{devices:[],pending:!1,error:!1},currentDevice:{data:{},pending:!1,error:!1,show:!1,currentSnapshot:{url:null,pending:!1,error:!1}},snapshotsList:{snapshots:[],pending:!1,error:!1}};var J={tests:[],currIndex:0,done:!1,testInProgress:!1};var V={authError:null,isAuthenticated:null,currentUser:{}};var H=a(27),X=a.n(H),Q=Object(v.c)({dashboardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_DEVICES_LIST":if(t.data){var a={devices:t.data,pending:!1,error:!1};return Object(F.a)({},e,{list:a})}break;case"GET_DEVICES_LIST__PENDING":return Object(F.a)({},e,{currentDevice:{data:{},pending:!1,error:!1,show:!1},list:{devices:[],pending:!0,error:!1}});case"GET_DEVICES_LIST__ERROR":return Object(F.a)({},e,{list:{devices:[],pending:!1,error:!0}});case"GET_DEVICE":if(t.data){var n={data:t.data,pending:!1,error:!1,show:!0};return Object(F.a)({},e,{currentDevice:n})}break;case"GET_DEVICE__PENDING":var r={data:Object(F.a)({},t.api.data),pending:!0,error:!1,show:!1};return Object(F.a)({},e,{currentDevice:r});case"GET_DEVICE__ERROR":return Object(F.a)({},e,{currentDevice:{data:{},pending:!1,error:!0,show:!1}});case"GET_DEVICE_SNAPSHOTS":var s={snapshots:t.data,pending:!1,error:!1};return Object(F.a)({},e,{snapshotsList:s});case"GET_DEVICE_SNAPSHOTS__PENDING":var c={data:Object(F.a)({},t.api.data),pending:!0,error:!1};return Object(F.a)({},e,{snapshotsList:c});case"GET_DEVICE_SNAPSHOTS__ERROR":return Object(F.a)({},e,{snapshotsList:{data:{},pending:!1,error:!0}});case"HIDE_CURRENT_DEVICE":var o=Object(F.a)({},e.currentDevice,{show:!1});return Object(F.a)({},e,o);case"REFRESH_SNAPSHOT_IMAGE":var l={url:t.data.url,pending:!1,error:!1},i=Object(F.a)({},e.currentDevice,{currentSnapshot:l}),u=[].concat(Object(U.a)(e.snapshotsList.snapshots),[Object(F.a)({},t.data)]),d=Object(F.a)({},e.snapshotsList,{snapshots:u});return Object(F.a)({},e,{currentDevice:i,snapshotsList:d});case"REFRESH_SNAPSHOT_IMAGE__PENDING":var p=Object(F.a)({},e.currentDevice,{currentSnapshot:{url:null,pending:!0,error:!1}});return Object(F.a)({},e,{currentDevice:p});case"REFRESH_SNAPSHOT_IMAGE__ERROR":var m=Object(F.a)({},e.currentDevice,{currentSnapshot:{url:null,pending:!1,error:!0}});return Object(F.a)({},e,{currentDevice:m})}return e},testReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_TESTS":if(t.data){var a=t.data.map(function(e){return Object(F.a)({},e,{pending:!1,error:!1,data:{}})});return Object(F.a)({},e,{tests:a,currIndex:0,testInProgress:!0})}return e;case"CLOSE_TEST":return Object(F.a)({},e,{currIndex:0,testInProgress:!1});case"NEXT_TEST":return Object(F.a)({},e,{currIndex:e.currIndex+1});case"RUN_TEST":if(t.data){var n=Object(U.a)(e.tests),r=Object(F.a)({},n[e.currIndex],{pending:!1,error:!1,data:Object(F.a)({},t.data.response)});n[e.currIndex]=r;var s=~r.name.indexOf("Interactive")?e.currIndex:e.currIndex+1;return Object(F.a)({},e,{tests:n,currIndex:s,done:e.currIndex>=n.length-1})}return e;case"RUN_TEST__PENDING":var c=Object(U.a)(e.tests),o=Object(F.a)({},e.tests[e.currIndex],{pending:!0});return c.splice(e.currIndex,1,o),Object(F.a)({},e,{tests:c});case"RUN_TEST__ERROR":var l=Object(U.a)(e.tests),i=Object(F.a)({},e.tests[e.currIndex],{pending:!1,error:!0,data:Object(F.a)({},t.data.response)});l.splice(e.currIndex,1,i);var u=~i.name.indexOf("Interactive")?e.currIndex:e.currIndex+1;return Object(F.a)({},e,{tests:l,currIndex:u,done:e.currIndex>=l.length-1});case"RESOLVE_TEST_MANUALLY":if(!e.tests[t.data.index].pending){var d=Object(U.a)(e.tests),p=Object(F.a)({},e.tests[t.data.index].data.result,{supported:t.data.resolution}),m=Object(F.a)({},e.tests[t.data.index],{pending:!1,error:!1,data:Object(F.a)({},e.tests[t.data.index].data,{result:p})});return d.splice(t.data.index,1,m),Object(F.a)({},e,{tests:d})}return e;default:return e}},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;switch((arguments.length>1?arguments[1]:void 0).type){case"SIGNIN__ERROR":return console.log("SignIn error"),Object(F.a)({},e);case"SIGNIN__SUCCESS":return console.log("SignIn Success"),Object(F.a)({},e);case"SIGNOUT__SUCCESS":return console.log("SignOut success"),e;case"SIGNUP__SUCCESS":return console.log("SignUp success"),Object(F.a)({},e);case"SIGNUP__ERROR":return console.log("signUp error"),Object(F.a)({},e);default:return e}},databaseReducer:X.a}),W=function(e){var t=h.Deferred();return e.api.url=j+e.api.url,h.ajax(e.api).done(function(e){t.resolve(e)}).fail(function(e){t.reject(e)}),t.promise()},K=function(e){return function(e){return function(t){var a=t.type;t.api?(W(t).done(function(n){t.type=a,t.data=n,delete t.api,e(t)}).fail(function(n){t.type=a+"__ERROR",t.data=n,e(t)}),t.type=a+"__PENDING",e(t)):e(t)}}};var Y=function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],Object(v.d)(Q,Object(v.a)(P.a,K,M.a))}();function z(){var e=Y.getState().testReducer,t=e.tests,a=e.currIndex,n=Y.getState().dashboardReducer.currentDevice.data,r=n.ip,s=n.port,c=t[a];return{type:"RUN_TEST",api:{url:"/api/".concat(c.service,"_test/").concat(c.name,"?ip=").concat(r,"&port=").concat(s),method:"POST",data:{test_type:c.service,test_name:c.name,ip:r,port:s}}}}function q(e){return{type:"INIT_TESTS",data:Object(U.a)(e)}}function Z(){return{type:"NEXT_TEST"}}function $(){return{type:"CLOSE_TEST"}}function ee(e,t){return{type:"RESOLVE_TEST_MANUALLY",data:{resolution:e,index:t}}}var te=function(e){var t=e.id,a=e.text,n=e.onClick;return c.a.createElement("button",{key:t,type:"button",onClick:n,className:"list-group-item d-flex justify-content-between list-group-item-action"},a)},ae=function e(t){return t.reduce(function(t,a){return t.concat(Array.isArray(a)?e(a):a)},[])};var ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selected_test_type:null,left_column:[],right_column:[]},a.chooseTestType=function(e){var t=a.props.currentDeviceData.avaliable_tests.filter(function(t){return t.service===e.target.value}),n=t.length>0?t[0].available_tests:[];a.setState({selected_test_type:e.target.value,left_column:n.filter(function(t){return 0===a.state.right_column.filter(function(t){return t.name===t&&t.service===e.target.value}).length}).map(function(t){return{name:t,service:e.target.value}})})},a.startTest=function(e){a.props.testActions.startTestAction(e)},a.addToRightColumn=function(e,t){0===a.state.right_column.filter(function(a){return a.name===e&&a.service===t}).length&&a.setState({right_column:[{name:e,service:t}].concat(Object(U.a)(a.state.right_column))})},a.removeFromRightColumn=function(e,t){a.setState({right_column:a.state.right_column.filter(function(a){return!(a.name===e&&a.service===t)})})},a.getAddFullListBtn=function(){var e=a.props.currentDeviceData.avaliable_tests,t=ae(e.map(function(e){return e.available_tests.map(function(t){return{name:t,service:e.service}})}));return c.a.createElement("button",{className:"ml-3 btn btn-primary",onClick:function(){a.setState({right_column:Object(U.a)(t)})}},"Add all ".concat(t.length," tests"))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){h('[data-toggle="tooltip"]').tooltip({title:"<em>1.Select test <b><u>type</u></b>.</em> <br><em>2.Choose tests and add them into right column.<br>3.When Run button pressed, tests from the right column will be executed.<br> 4.Click on the test name to add or remove from the list.</em>",placement:"bottom"})}},{key:"render",value:function(){var e=this,t=this.props.currentDeviceData["Supported Services"].map(function(e,t){return c.a.createElement("option",{key:t,value:e},e)}),a=this.state.left_column.filter(function(t){return 0===e.state.right_column.filter(function(e){return e.name===t.name&&e.service===t.service}).length}).map(function(t,a){return c.a.createElement(te,{key:a,text:"".concat(a+1,".").concat(t.name," (").concat(t.service,")"),onClick:function(){e.addToRightColumn(t.name,t.service)}})}),n=this.state.right_column.map(function(t,a){return c.a.createElement(te,{key:a,text:"".concat(a+1,".").concat(t.name," (").concat(t.service,")"),onClick:function(){e.removeFromRightColumn(t.name,t.service)}})}),r=c.a.createElement("button",{className:"ml-3 btn btn-primary",onClick:function(){e.startTest(e.state.right_column)}},"Run ".concat(this.state.right_column.length," test").concat(1===this.state.right_column.length?"":"s")),s=c.a.createElement("button",{className:"ml-3 btn btn-secondary","data-toggle":"modal","data-target":"#aboutTest"},"About test"),o=a.length>0?c.a.createElement("button",{className:"mb-3 btn btn-success",onClick:function(){e.setState({right_column:[].concat(Object(U.a)(e.state.left_column),Object(U.a)(e.state.right_column))})}},"Add all to the right"):null,l=n.length>0?c.a.createElement("button",{className:"mb-3 btn btn-danger",onClick:function(){e.setState({right_column:[]})}},"Empty list"):null,i=this.getAddFullListBtn(),u=c.a.createElement("div",{className:"modal fade",id:"aboutTest",tabIndex:"-1",role:"dialog","aria-labelledby":"aboutTestTitle","aria-hidden":"true"},c.a.createElement("div",{className:"modal-dialog modal-dialog-scrollable",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",id:"aboutTestTitle"},"Modal title"),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},"..."),c.a.createElement("div",{className:"modal-footer"},c.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal"},"Close")))));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row mb-2"},c.a.createElement("div",{className:"col d-flex"},c.a.createElement("span",{className:"h5 m-0"},c.a.createElement("h5",{className:"card-title"},"Device Test:")),c.a.createElement("span",{className:"ml-1"},c.a.createElement("i",{className:"align-middle material-icons","data-toggle":"tooltip","data-placement":"bottom","data-html":"true",style:{cursor:"pointer"},"data-animation":"true"},"info")))),c.a.createElement("div",{className:"form-inline"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"my-1 mr-2",htmlFor:"selectTestDropdown"},"Test type:"),c.a.createElement("select",{id:"selectTestDropdown",value:this.state.selected_test_type?this.state.selected_test_type:"",className:"form-control",onChange:this.chooseTestType},c.a.createElement("option",{value:"not selected"},"not selected"),t)),c.a.createElement("div",{className:"form-group d-flex justify-content-between"},s,u,i,r))),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},o,c.a.createElement("div",{className:this.state.selected_test_type&&"not selected"!==this.state.selected_test_type?"list-group pre-scrollable":"list-group"},a)),c.a.createElement("div",{className:"col"},l,c.a.createElement("div",{className:this.state.selected_test_type&&"not selected"!==this.state.selected_test_type?"list-group pre-scrollable":"list-group"},n)))))}}]),t}(s.Component),re=Object(l.b)(null,function(e){return{testActions:Object(v.b)(r,e)}})(ne);var se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={currentTab:"testing"},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=null;return"info"===this.state.currentTab&&(t=c.a.createElement(A,{currentDeviceData:this.props.currentDeviceData})),"stream"===this.state.currentTab&&(t=c.a.createElement(w,{snapshot_url:this.props.currentDeviceData.snapshot_url,private_snapshot_url:this.props.currentDeviceData.private_snapshot_url,stream_url:this.props.currentDeviceData.stream_url,private_stream_url:this.props.currentDeviceData.private_stream_url,currentDeviceData:this.props.currentDeviceData})),"testing"===this.state.currentTab&&(t=c.a.createElement(re,{currentDeviceData:this.props.currentDeviceData})),"settings"===this.state.currentTab&&(t=c.a.createElement(x,{currentDeviceData:this.props.currentDeviceData})),"database"===this.state.currentTab&&(t=c.a.createElement(L,{currentDeviceData:this.props.currentDeviceData})),this.props.currentDevice.show?c.a.createElement("div",{className:"card text-left"},c.a.createElement("div",{className:"card-header"},c.a.createElement("ul",{className:"nav nav-pills card-header-tabs"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link ".concat("info"===this.state.currentTab?"active":""),onClick:function(){e.setState({currentTab:"info"})},href:"#"},"Information")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link ".concat("stream"===this.state.currentTab?"active":""),onClick:function(){e.setState({currentTab:"stream"})},href:"#"},"Stream")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link ".concat("testing"===this.state.currentTab?"active":""),onClick:function(){e.setState({currentTab:"testing"})},href:"#"},"Testing")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link ".concat("settings"===this.state.currentTab?"active":""),onClick:function(){e.setState({currentTab:"settings"})},href:"#"},"Settings")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link ".concat("database"===this.state.currentTab?"active":""),onClick:function(){e.setState({currentTab:"database"})},href:"#"},"Database")))),t):c.a.createElement("div",{className:"card text-center"},c.a.createElement("div",{className:"card-body d-flex align-items-center justify-content-center"},c.a.createElement("h4",{className:"card-title text-center mb-0"},this.props.currentDevice.pending||this.props.list.pending?"Loading...":"Choose device from the list"),this.props.currentDevice.pending||this.props.list.pending?c.a.createElement("div",{className:"loader"}):null))}}]),t}(c.a.Component),ce=Object(l.b)(function(e){return{list:e.dashboardReducer.list,currentDevice:e.dashboardReducer.currentDevice,currentDeviceData:e.dashboardReducer.currentDevice.data}},function(e){return{dashboardActions:Object(v.b)(n,e)}})(se);var oe=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-12 col-md-3  mb-3"},c.a.createElement(y,null)),c.a.createElement("div",{className:"col-sm-12 col-md-9"},c.a.createElement(ce,null)))}}]),t}(c.a.Component),le=Object(l.b)(function(e){return{dashboard:e.dashboardReducer.list,currentDevice:e.dashboardReducer.currentDevice}},function(e){return{dashboardActions:Object(v.b)(n,e)}})(oe),ie=function(e){return c.a.createElement("nav",{className:"navbar navbar-dark bg-primary mb-3"},c.a.createElement("a",{className:"navbar-brand",href:"#"},"ONVIF Compliance Tester"))},ue=function(e){var t=e.testResponse.reduce(function(e,t){return e[t.service]=e[t.service]||[],e[t.service].push(t),e},{}),a=Object.keys(t).sort().map(function(e,a){return c.a.createElement(c.a.Fragment,{key:a},c.a.createElement("p",null,c.a.createElement("b",null,(n=e).charAt(0).toUpperCase()+n.slice(1),":")),c.a.createElement("table",{className:"table table-bordered table-responsive-md"},c.a.createElement("tbody",null,t[e].map(function(e,t){return c.a.createElement("tr",{className:"row m-0",key:t},c.a.createElement("th",{className:"col-1",scope:"row"},t+1),c.a.createElement("td",{className:"col-5"},e.name),e.data.result?c.a.createElement("td",{className:"col-6 ".concat(e.data.result.supported?"text-success":"text-danger")},e.data.result.supported?"Supported":"Not supported",e.data.result.report?c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"ml-3 btn btn-secondary btn-sm","data-toggle":"collapse","data-target":"#features".concat(t)},"View"),c.a.createElement("div",{id:"features".concat(t),className:"collapse"},e.data.result.report.split("\n").map(function(e,t){return c.a.createElement("p",{style:{lineHeight:"20px"},className:"text-dark mt-2",key:t},e)}))):null):null)}))));var n});return c.a.createElement(c.a.Fragment,null,a)},de=a(28),pe=a.n(de),me=a(29),he=a.n(me),be=function(e){return c.a.createElement("div",{className:"modal fade",id:e.id,tabIndex:"-1",role:"dialog"},c.a.createElement("div",{className:"modal-dialog modal-lg modal-dialog-scrollable",role:"document"},c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"modal-header"},c.a.createElement("h5",{className:"modal-title",onClick:function(){e.onClose&&e.onClose()}},"".concat(e.title)),c.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},c.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),c.a.createElement("div",{className:"modal-body"},c.a.createElement(C,{dontkill:!0,ip:e.ip,port:e.port})),c.a.createElement("div",{className:"modal-footer"},e.testIsDone&&c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){e.onTestFailed&&e.onTestFailed()}},"Failed"),c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.onTestPassed&&e.onTestPassed()}},"Passed")),e.testInProgress&&!e.testIsDone?c.a.createElement("span",null,"Test in progress..."):null,e.testInProgress||e.testIsDone?null:c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){e.onStart&&e.onStart()}},"Start the test")))))};var ve=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleDownload=function(e){a.setState({isReportReady:e})},a.downloadReport=function(){a.handleDownload(!0);var e=Object(F.a)({},a.props.currentDevice),t=a.props.testsList.filter(function(e){return!e.pending&&!e.error}).reduce(function(e,t){return e[t.service]=e[t.service]||[],e[t.service].push(t),e},{}),n={camInfo:Object(F.a)({},e),runnedTests:Object(F.a)({},t)};console.log(n),fetch("".concat(j,"/api/report"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){window.open("".concat(j,"/").concat(e.response),"_blank"),a.handleDownload(!1)})},a.returnBack=function(){fetch("".concat(j,"/api/stop_stream?ip=").concat(a.props.currentDevice.ip,"&port=").concat(a.props.currentDevice.port)).then(function(){}).catch(function(){}),a.props.testActions.closeTestAction()},a.state={isReportReady:!1},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.runTest()}},{key:"componentDidUpdate",value:function(){this.runTest()}},{key:"runTest",value:function(){var e=this.props.testsList[this.props.currTestIndex];this.props.testsDone||!e||e.pending||0!==Object.entries(e.data).length||this.state.showModal||(~e.name.indexOf("Interactive")?b()("#streamModal").modal("show"):(b()("#streamModal").modal("hide"),this.props.testActions.runTest()))}},{key:"resolveTestManually",value:function(e,t){this.props.testActions.nextTest(),this.props.testActions.resolveTestManually(e,t)}},{key:"render",value:function(){var e=this,t=this.state.isReportReady?c.a.createElement("button",{className:"ml-3 btn btn-primary",type:"button",disabled:!0},c.a.createElement("span",{class:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"    Loading..."):c.a.createElement("button",{className:"ml-3 btn btn-primary",onClick:function(){e.downloadReport()}},"Download Report"),a=c.a.createElement("button",{className:"ml-3 btn btn-primary",onClick:function(){e.returnBack()}},"Back"),n=this.props.testsList.map(function(e,t){return c.a.createElement("div",{className:"card",key:t},c.a.createElement("div",{className:"card-header",id:"heading".concat(t)},c.a.createElement("h5",{className:"mb-0 d-flex justify-content-between align-items-center"},c.a.createElement("button",{className:"btn btn-link",style:{color:"black"},"data-toggle":"collapse","data-target":"#collapse".concat(t),"aria-expanded":"true","aria-controls":"#collapse".concat(t)},e.name," (",e.service,")"),c.a.createElement("div",{className:"d-inline-block"},e.pending?c.a.createElement("div",{className:"typing_loader"}):null,e.error?c.a.createElement("img",{src:pe.a,alt:"error"}):null,e.data.result?c.a.createElement("img",{src:he.a}):null))),c.a.createElement("div",{id:"collapse".concat(t),className:"collapse","aria-labelledby":"#heading".concat(t),"data-parent":"#accordion"},c.a.createElement("div",{className:"card-body"},e.data.result?c.a.createElement("p",null,e.data.result.supported?"".concat(e.name," is supported"):"".concat(e.name," is not supported")):null,e.data.result?c.a.createElement("p",null,e.data.result.extension?"Test Feature: ".concat(e.data.result.extension):null):null,e.data.result?c.a.createElement("pre",null,e.data.result.response?"Response: ".concat(e.data.result.response):null):null)))}),r=this.props.testsList[this.props.currTestIndex],s=this.props.currTestIndex,o=r?r.name:"N/A",l=r&&r.pending,i=r&&0!==Object.entries(r.data).length;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",null,"Report:"),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("button",{className:"m-1 btn btn-primary","data-toggle":"collapse","data-target":"#summary"},"Summary"),c.a.createElement("div",{id:"summary",className:"m-2 collapse"},c.a.createElement(ue,{testResponse:this.props.testsList})),c.a.createElement("div",{id:"accordion"},n),c.a.createElement("div",{className:"form-group d-flex justify-content-end mt-4"},t,a))),c.a.createElement(be,{id:"streamModal",title:o,ip:this.props.currentDevice.ip,port:this.props.currentDevice.port,testInProgress:l,testIsDone:i,onStart:function(){e.props.testActions.runTest()},onClose:function(){e.props.testActions.nextTest()},onTestFailed:function(){e.resolveTestManually(!1,s)},onTestPassed:function(){e.resolveTestManually(!0,s)}}))}}]),t}(s.Component),Ee=Object(l.b)(function(e){return{currentDevice:e.dashboardReducer.currentDevice.data,testsList:e.testReducer.tests,testsFetched:e.testReducer.testInProgress,testsDone:e.testReducer.done,currTestIndex:e.testReducer.currIndex}},function(e){return{testActions:Object(v.b)(r,e)}})(ve);var fe=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(ie,null),c.a.createElement("div",{className:"container"},this.props.testInProgress?c.a.createElement(Ee,null):c.a.createElement(le,null)))}}]),t}(s.Component),ge=Object(l.b)(function(e){return{testInProgress:e.testReducer.testInProgress}},null)(fe);Object(o.render)(c.a.createElement(l.a,{store:Y},c.a.createElement(ge,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b19d881a.chunk.js.map