function t(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function u(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((i=i.apply(t,e||[])).next())}))}function e(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var r=function(){return(r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function o(t,e,n,i){return new(n||(n=Promise))((function(r,o){function a(t){try{s(i.next(t))}catch(t){o(t)}}function u(t){try{s(i.throw(t))}catch(t){o(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}s((i=i.apply(t,e||[])).next())}))}function a(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}function u(t,e){void 0===e&&(e=!1);var n=window.crypto.getRandomValues(new Uint32Array(1))[0],i="_".concat(n);return Object.defineProperty(window,i,{value:function(n){return e&&Reflect.deleteProperty(window,i),null==t?void 0:t(n)},writable:!1,configurable:!0}),n}function s(t,e){return void 0===e&&(e={}),o(this,void 0,void 0,(function(){return a(this,(function(n){return[2,new Promise((function(n,i){var o=u((function(t){n(t),Reflect.deleteProperty(window,"_".concat(a))}),!0),a=u((function(t){i(t),Reflect.deleteProperty(window,"_".concat(o))}),!0);window.__TAURI_IPC__(r({cmd:t,callback:o,error:a},e))}))]}))}))}function c(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,s("tauri",t)]}))}))}function l(t,e){return o(this,void 0,void 0,(function(){return a(this,(function(n){return[2,c({__tauriModule:"Event",message:{cmd:"unlisten",event:t,eventId:e}})]}))}))}function d(t,e,n){return o(this,void 0,void 0,(function(){return a(this,(function(i){switch(i.label){case 0:return[4,c({__tauriModule:"Event",message:{cmd:"emit",event:t,windowLabel:e,payload:"string"==typeof n?n:JSON.stringify(n)}})];case 1:return i.sent(),[2]}}))}))}function h(t,e,n){return o(this,void 0,void 0,(function(){var i=this;return a(this,(function(r){return[2,c({__tauriModule:"Event",message:{cmd:"listen",event:t,windowLabel:e,handler:u(n)}}).then((function(e){return function(){return o(i,void 0,void 0,(function(){return a(this,(function(n){return[2,l(t,e)]}))}))}}))]}))}))}function p(t,e,n){return o(this,void 0,void 0,(function(){return a(this,(function(i){return[2,h(t,e,(function(e){n(e),l(t,e.id).catch((function(){}))}))]}))}))}Object.freeze({__proto__:null,transformCallback:u,invoke:s,convertFileSrc:function(t,e){void 0===e&&(e="asset");var n=encodeURIComponent(t);return navigator.userAgent.includes("Windows")?"https://".concat(e,".localhost/").concat(n):"".concat(e,"://").concat(n)}});var f,m=function(t,e){this.type="Logical",this.width=t,this.height=e},y=function(){function t(t,e){this.type="Physical",this.width=t,this.height=e}return t.prototype.toLogical=function(t){return new m(this.width/t,this.height/t)},t}(),v=function(t,e){this.type="Logical",this.x=t,this.y=e},b=function(){function t(t,e){this.type="Physical",this.x=t,this.y=e}return t.prototype.toLogical=function(t){return new v(this.x/t,this.y/t)},t}();function w(){return window.__TAURI_METADATA__.__windows.map((function(t){return new z(t.label,{skip:!0})}))}!function(t){t[t.Critical=1]="Critical",t[t.Informational=2]="Informational"}(f||(f={}));var g,_=["tauri://created","tauri://error"],M=function(){function t(t){this.label=t,this.listeners=Object.create(null)}return t.prototype.listen=function(t,e){return o(this,void 0,void 0,(function(){var n=this;return a(this,(function(i){return this._handleTauriEvent(t,e)?[2,Promise.resolve((function(){var i=n.listeners[t];i.splice(i.indexOf(e),1)}))]:[2,h(t,this.label,e)]}))}))},t.prototype.once=function(t,e){return o(this,void 0,void 0,(function(){var n=this;return a(this,(function(i){return this._handleTauriEvent(t,e)?[2,Promise.resolve((function(){var i=n.listeners[t];i.splice(i.indexOf(e),1)}))]:[2,p(t,this.label,e)]}))}))},t.prototype.emit=function(t,e){return o(this,void 0,void 0,(function(){var n,i;return a(this,(function(r){if(_.includes(t)){for(n=0,i=this.listeners[t]||[];n<i.length;n++)(0,i[n])({event:t,id:-1,windowLabel:this.label,payload:e});return[2,Promise.resolve()]}return[2,d(t,this.label,e)]}))}))},t.prototype._handleTauriEvent=function(t,e){return!!_.includes(t)&&(t in this.listeners?this.listeners[t].push(e):this.listeners[t]=[e],!0)},t}(),P=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.scaleFactor=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})]}))}))},e.prototype.innerPosition=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then((function(t){var e=t.x,n=t.y;return new b(e,n)}))]}))}))},e.prototype.outerPosition=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then((function(t){var e=t.x,n=t.y;return new b(e,n)}))]}))}))},e.prototype.innerSize=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then((function(t){var e=t.width,n=t.height;return new y(e,n)}))]}))}))},e.prototype.outerSize=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then((function(t){var e=t.width,n=t.height;return new y(e,n)}))]}))}))},e.prototype.isFullscreen=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})]}))}))},e.prototype.isMaximized=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})]}))}))},e.prototype.isDecorated=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})]}))}))},e.prototype.isResizable=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})]}))}))},e.prototype.isVisible=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})]}))}))},e.prototype.theme=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})]}))}))},e.prototype.center=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})]}))}))},e.prototype.requestUserAttention=function(t){return o(this,void 0,void 0,(function(){var e;return a(this,(function(n){return e=null,t&&(e=t===f.Critical?{type:"Critical"}:{type:"Informational"}),[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:e}}}})]}))}))},e.prototype.setResizable=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:t}}}})]}))}))},e.prototype.setTitle=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:t}}}})]}))}))},e.prototype.maximize=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})]}))}))},e.prototype.unmaximize=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})]}))}))},e.prototype.toggleMaximize=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})]}))}))},e.prototype.minimize=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})]}))}))},e.prototype.unminimize=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})]}))}))},e.prototype.show=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})]}))}))},e.prototype.hide=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})]}))}))},e.prototype.close=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})]}))}))},e.prototype.setDecorations=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:t}}}})]}))}))},e.prototype.setAlwaysOnTop=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:t}}}})]}))}))},e.prototype.setSize=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:t.type,data:{width:t.width,height:t.height}}}}}})]}))}))},e.prototype.setMinSize=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},e.prototype.setMaxSize=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){if(t&&"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:t?{type:t.type,data:{width:t.width,height:t.height}}:null}}}})]}))}))},e.prototype.setPosition=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},e.prototype.setFullscreen=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:t}}}})]}))}))},e.prototype.setFocus=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})]}))}))},e.prototype.setIcon=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:"string"==typeof t?t:Array.from(t)}}}}})]}))}))},e.prototype.setSkipTaskbar=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:t}}}})]}))}))},e.prototype.setCursorGrab=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:t}}}})]}))}))},e.prototype.setCursorVisible=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:t}}}})]}))}))},e.prototype.setCursorIcon=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:t}}}})]}))}))},e.prototype.setCursorPosition=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){if(!t||"Logical"!==t.type&&"Physical"!==t.type)throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:t.type,data:{x:t.x,y:t.y}}}}}})]}))}))},e.prototype.startDragging=function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})]}))}))},e.prototype.onResized=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.listen("tauri://resize",t)]}))}))},e.prototype.onMoved=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.listen("tauri://move",t)]}))}))},e.prototype.onCloseRequested=function(t){return o(this,void 0,void 0,(function(){var e=this;return a(this,(function(n){return[2,this.listen("tauri://close-requested",(function(n){var i=new W(n);Promise.resolve(t(i)).then((function(){if(!i.isPreventDefault())return e.close()}))}))]}))}))},e.prototype.onFocusChanged=function(t){return o(this,void 0,void 0,(function(){var e,n;return a(this,(function(i){switch(i.label){case 0:return[4,this.listen("tauri://focus",(function(e){t(r(r({},e),{payload:!0}))}))];case 1:return e=i.sent(),[4,this.listen("tauri://blur",(function(e){t(r(r({},e),{payload:!1}))}))];case 2:return n=i.sent(),[2,function(){e(),n()}]}}))}))},e.prototype.onScaleChanged=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.listen("tauri://scale-change",t)]}))}))},e.prototype.onMenuClicked=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.listen("tauri://menu",t)]}))}))},e.prototype.onFileDropEvent=function(t){return o(this,void 0,void 0,(function(){var e,n,i;return a(this,(function(o){switch(o.label){case 0:return[4,this.listen("tauri://file-drop",(function(e){t(r(r({},e),{payload:{type:"drop",paths:e.payload}}))}))];case 1:return e=o.sent(),[4,this.listen("tauri://file-drop-hover",(function(e){t(r(r({},e),{payload:{type:"hover",paths:e.payload}}))}))];case 2:return n=o.sent(),[4,this.listen("tauri://file-drop-cancelled",(function(e){t(r(r({},e),{payload:{type:"cancel"}}))}))];case 3:return i=o.sent(),[2,function(){e(),n(),i()}]}}))}))},e.prototype.onThemeChanged=function(t){return o(this,void 0,void 0,(function(){return a(this,(function(e){return[2,this.listen("tauri://theme-changed",t)]}))}))},e}(M),W=function(){function t(t){this._preventDefault=!1,this.event=t.event,this.windowLabel=t.windowLabel,this.id=t.id}return t.prototype.preventDefault=function(){this._preventDefault=!0},t.prototype.isPreventDefault=function(){return this._preventDefault},t}(),z=function(t){function e(e,n){void 0===n&&(n={});var i=t.call(this,e)||this;return(null==n?void 0:n.skip)||c({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:r({label:e},n)}}}).then((function(){return o(i,void 0,void 0,(function(){return a(this,(function(t){return[2,this.emit("tauri://created")]}))}))})).catch((function(t){return o(i,void 0,void 0,(function(){return a(this,(function(e){return[2,this.emit("tauri://error",t)]}))}))})),i}return i(e,t),e.getByLabel=function(t){return w().some((function(e){return e.label===t}))?new e(t,{skip:!0}):null},e}(P);"__TAURI_METADATA__"in window?g=new z(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn('Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.\nNote that this is not an issue if running this frontend on a browser instead of a Tauri window.'),g=new z("main",{skip:!0})),Object.freeze({__proto__:null,WebviewWindow:z,WebviewWindowHandle:M,WindowManager:P,CloseRequestedEvent:W,getCurrent:function(){return new z(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})},getAll:w,get appWindow(){return g},LogicalSize:m,PhysicalSize:y,LogicalPosition:v,PhysicalPosition:b,get UserAttentionType(){return f},currentMonitor:function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}})]}))}))},primaryMonitor:function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}})]}))}))},availableMonitors:function(){return o(this,void 0,void 0,(function(){return a(this,(function(t){return[2,c({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}})]}))}))}});var x=function(){function n(t){this.isOpen=!1,this.encoding=t.encoding||"utf-8",this.options={path:t.path,baudRate:t.baudRate,dataBits:t.dataBits||8,flowControl:t.flowControl||null,parity:t.parity||null,stopBits:t.stopBits||2,timeout:t.timeout||.2}}return n.available_ports=function(){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s("plugin:serialport|available_ports")];case 1:return[2,e.sent()];case 2:return t=e.sent(),[2,Promise.reject(t)];case 3:return[2]}}))}))},n.prototype.cancelListen=function(){return t(this,void 0,void 0,(function(){return e(this,(function(t){try{return this.unListen&&(this.unListen(),this.unListen=void 0),[2]}catch(t){return[2,Promise.reject("取消串口监听失败: "+t)]}return[2]}))}))},n.prototype.cancelRead=function(){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s("plugin:serialport|cancel_read",{path:this.options.path})];case 1:return[2,e.sent()];case 2:return t=e.sent(),[2,Promise.reject(t)];case 3:return[2]}}))}))},n.prototype.change=function(n){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,5,,6]),t=!1,this.isOpen?(t=!0,[4,this.close()]):[3,2];case 1:e.sent(),e.label=2;case 2:return n.path&&(this.options.path=n.path),n.baudRate&&(this.options.baudRate=n.baudRate),t?[4,this.open()]:[3,4];case 3:e.sent(),e.label=4;case 4:return[2,Promise.resolve()];case 5:return i=e.sent(),[2,Promise.reject(i)];case 6:return[2]}}))}))},n.prototype.close=function(){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,4,,5]),this.isOpen?[4,this.cancelRead()]:[2];case 1:return e.sent(),[4,s("plugin:serialport|close",{path:this.options.path})];case 2:return t=e.sent(),[4,this.cancelListen()];case 3:return e.sent(),this.isOpen=!1,[2,t];case 4:return n=e.sent(),[2,Promise.reject(n)];case 5:return[2]}}))}))},n.prototype.listen=function(n){return t(this,void 0,void 0,(function(){var t,i,r,o=this;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),[4,this.cancelListen()];case 1:return e.sent(),t="plugin-serialport-read-"+this.options.path,i=this,[4,g.listen(t,(function(t){var e=t.payload;try{var i=new TextDecoder(o.encoding).decode(new Uint8Array(e.data));n(i)}catch(t){console.error(t)}}))];case 2:return i.unListen=e.sent(),[2];case 3:return r=e.sent(),[2,Promise.reject("监听串口数据失败: "+r)];case 4:return[2]}}))}))},n.prototype.open=function(){return t(this,void 0,void 0,(function(){var t,n;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),this.options.path?this.options.baudRate?this.isOpen?[2]:[4,s("plugin:serialport|open",{path:this.options.path,baudRate:this.options.baudRate})]:[2,Promise.reject("baudRate 不能为空!")]:[2,Promise.reject("path 不能为空!")];case 1:return t=e.sent(),this.isOpen=!0,[2,Promise.resolve(t)];case 2:return n=e.sent(),[2,Promise.reject(n)];case 3:return[2]}}))}))},n.prototype.read=function(){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,s("plugin:serialport|read",{path:this.options.path})];case 1:return[2,e.sent()];case 2:return t=e.sent(),[2,Promise.reject(t)];case 3:return[2]}}))}))},n.prototype.setBaudRate=function(n){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,5,,6]),t=!1,this.isOpen?(t=!0,[4,this.close()]):[3,2];case 1:e.sent(),e.label=2;case 2:return this.options.baudRate=n,t?[4,this.open()]:[3,4];case 3:e.sent(),e.label=4;case 4:return[2,Promise.resolve()];case 5:return i=e.sent(),[2,Promise.reject(i)];case 6:return[2]}}))}))},n.prototype.setPath=function(n){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,5,,6]),t=!1,this.isOpen?(t=!0,[4,this.close()]):[3,2];case 1:e.sent(),e.label=2;case 2:return this.options.path=n,t?[4,this.open()]:[3,4];case 3:e.sent(),e.label=4;case 4:return[2,Promise.resolve()];case 5:return i=e.sent(),[2,Promise.reject(i)];case 6:return[2]}}))}))},n.prototype.write=function(n){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),this.isOpen?[4,s("plugin:serialport|write",{value:n,path:this.options.path})]:[2,Promise.reject("串口 ".concat(this.options.path," 未打开!"))];case 1:return[2,e.sent()];case 2:return t=e.sent(),[2,Promise.reject(t)];case 3:return[2]}}))}))},n}();export{x as Serialport};
