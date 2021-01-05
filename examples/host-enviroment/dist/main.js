!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){!function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function e(t,e,n,r){return new(n||(n=Promise))((function(i,o){function s(t){try{u(r.next(t))}catch(t){o(t)}}function a(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((r=r.apply(t,e||[])).next())}))}function n(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}var i=function(t){return"[object Object]"===Object.prototype.toString.call(t)},o=function(t){return"[obvious] you are trying to remove a listener of the broadcast event "+t+", but "+t+" hasn't been registed as a broadcast event"},s=function(t){return"[obvious] you are trying to remove a listener of the broadcast event "+t+", but the listener hasn't been registed"},a=function(t){return"[obvious] one of the callbacks of the broadcast event "+t+" throws an uncaught error"},u=function(t){return"[obvious] you are trying to remove a listener of the unicast event "+t+", but "+t+" hasn't been registed as a unicast event"},c=function(t){return"[obvious] you are trying to remove a listener of the unicast event "+t+", but the listener hasn't been registed"},h=function(t){return"[obvious] you are trying to regist a unicast event "+t+", but it has been registed before"},l=function(t){return"[obvious] "+t+" is existing, you are not allowed to create it again"},p=function(t,e){return"[obvious] can not find any assets of the app "+t+" on the bus "+e},f=function(t){return"[obvious] you are trying to activate app "+t+", but it was not created"},d=function(t){return"[obvious] state "+t+" is private, you are not allowed to set it"},v=function(t){return"[obvious] it's not allowed to set, watch or unwatch state "+t+" before it is initialized"},b=function(t){return"[obvious] wait for states "+JSON.stringify(t)+" timeout"},y=function(t){return"[obvious] duplicated initialized state "+t},w=function(t){return"[obvious] state "+t+" can't be initialized to undefined, please initial it to null instead"},m=function(){return"[obvious] bus.state is readonly"},g=function(t){return"[obvious] "+t+" is not a valid asset"},E=function(){return"[obvious] the number of apps bootstraped at a time is greater than the maximum value of 100, it means that there may be circular dependencies, please check the app dependencies declaration or reset the bus's maxDependencyDepth"},_=function(t,e){return"[obvious] state."+t+' is an Array, but the subscript you set("'+e+'") is not a number, therefore, the state will not be changed'},j=function(t,e){return"[obvious] state."+t+" is a "+e+", buy you regard it as a object and try to traverse it while setting state, therefore, the state will not be changed"},B=function(t){return"[obvious] you have emitted "+t+" event, but there is no listener of this event"},A=function(t){var e={};return Object.keys(t).forEach((function(n){e[n]=t[n].value})),JSON.parse(JSON.stringify(e))},O=function(t,e){for(var n=t,r=0,o=e;r<o.length;r++){var s=o[r];if(Array.isArray(n)){var a=Number(s);if(isNaN(a))return;n=n[a]}else{if(!i(n))return;n=n[s]}}return n},S=function(){function t(){this.broadcastEvents={},this.unicastEvents={}}return t.prototype.getBroadcastEvents=function(){return this.broadcastEvents},t.prototype.addBroadcastEventListener=function(t,e){this.broadcastEvents[t]=this.broadcastEvents[t]||[],this.broadcastEvents[t].push(e)},t.prototype.addUnicastEventListener=function(t,e){if(this.unicastEvents[t])throw new Error(h(t));this.unicastEvents[t]=e},t.prototype.removeBroadcastEventListener=function(t,e){var n=this.broadcastEvents[t];if(!n)throw a=o(t),new Error(a);for(var r=-1,i=0;i<n.length;i++)if(n[i]===e){r=i;break}if(-1===r){var a=s(t);throw new Error(a)}n.splice(r,1)},t.prototype.removeUnicastEventListener=function(t,e){if(!this.unicastEvents[t]){var n=u(t);throw new Error(n)}if(this.unicastEvents[t]!==e)throw n=c(t),new Error(n);delete this.unicastEvents[t]},t.prototype.emitBroadcast=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.broadcastEvents[t],i=t.startsWith("$state");r&&0!==r.length?r.forEach((function(t){try{t.apply(void 0,e)}catch(t){console.error(a),console.error(t)}})):i||console.warn(B(t))},t.prototype.emitUnicast=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.unicastEvents[t];return r.apply(void 0,e)},t}(),x=function(){function t(t,e){this.eventEmitter=t,this._state=e,this.eventEmitter=t,this._state=e}return t.prototype.onBroadcast=function(t,e){this.eventEmitter.addBroadcastEventListener(t,e)},t.prototype.offBroadcast=function(t,e){this.eventEmitter.removeBroadcastEventListener(t,e)},t.prototype.broadcast=function(t){for(var e,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];(e=this.eventEmitter).emitBroadcast.apply(e,r([t],n))},t.prototype.onUnicast=function(t,e){this.eventEmitter.addUnicastEventListener(t,e)},t.prototype.offUnicast=function(t,e){this.eventEmitter.removeUnicastEventListener(t,e)},t.prototype.unicast=function(t){for(var e,n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return(e=this.eventEmitter).emitUnicast.apply(e,r([t],n))},t.prototype.existState=function(t){return void 0!==this._state[t]},t.prototype.initState=function(t,e,n){if(void 0===n&&(n=!1),void 0!==this._state[t])throw new Error(y(t));if(void 0===e)throw new Error(w(t));this._state[t]={value:e,owner:n?this:null},this.broadcast("$state-initial",t)},t.prototype.getState=function(t){var e=A(this._state);return O(e,t.split("."))},t.prototype.setState=function(t,e){var n=this,r=t.split("."),o=r[0];if(void 0===this._state[o]){var s=v(o);throw new Error(s)}var a=this._state[o].owner;if(a!==this&&null!==a)throw s=d(o),new Error(s);var u=A(this._state),c="function"==typeof e,h=this.getState(t),l=c?e(h):e;if(1===r.length)this._state[o].value=l;else{var p=r.slice(1);if(!function(t,e,n,r){for(var o=e,s=0;s<n.length;s++){var a=n[s],u=Number(a);if(s===n.length-1)if(Array.isArray(o)){if(isNaN(u)){var c=t+"."+n.slice(0,s).join(".");return console.error(_(c,a)),!1}o[u]=r}else o[a]=r;else{var h=null;if(Array.isArray(o)){if(isNaN(u))return c=t+"."+n.slice(0,s).join("."),console.error(_(c,a)),!1;h=u}else h=a;if(void 0===o[h]||null===o[h])o[h]={};else if(!Array.isArray(o[h])&&!i(o[h])){c=t+"."+n.slice(0,s+1).join(".");var l=typeof o[h];return console.error(j(c,l)),!1}o=o[h]}}return!0}(o,this._state[o].value,p,l))return}var f=A(this._state);(function(t,e){var n=/^\$state-(.+)-change$/,r=[];return e.forEach((function(e){var i=n.exec(e);if(i){var o=i[1];o.startsWith(t)&&r.push(o),t.startsWith(o)&&!r.includes(o)&&r.push(o)}})),r})(t,Object.keys(this.eventEmitter.getBroadcastEvents())).forEach((function(t){n.broadcast("$state-"+t+"-change",O(f,t.split(".")),O(u,t.split(".")))}))},t.prototype.watchState=function(t,e){var n=t.split(".")[0];if(void 0===this._state[n]){var r=v(n);throw new Error(r)}this.eventEmitter.addBroadcastEventListener("$state-"+t+"-change",e)},t.prototype.unwatchState=function(t,e){var n=t.split(".")[0];if(void 0===this._state[n])throw new Error(v(t));this.eventEmitter.removeBroadcastEventListener("$state-"+t+"-change",e)},t.prototype.waitState=function(t,e){var n=this;return void 0===e&&(e=1e4),0===(t=t.filter((function(t){return void 0===n._state[t]}))).length?Promise.resolve(A(this._state)):new Promise((function(r,i){var o=setTimeout((function(){clearTimeout(o);var e=b(t);i(new Error(e))}),e),s=function(e){var i=t.indexOf(e);-1!==i&&t.splice(i,1),0===t.length&&(clearTimeout(o),n.offBroadcast("$state-initial",s),r(A(n._state)))};n.onBroadcast("$state-initial",s)}))},t}(),k=function(){function t(t){this.name=t,this.dependenciesReady=!1,this.bootstrapped=!1,this.dependencies=[],this.name=t}return t.prototype.relyOn=function(t){return this.dependencies=t,this},t.prototype.bootstrap=function(t){return this.doBootstrap=t,this},t.prototype.activate=function(t){return this.doActivate=t,this},t.prototype.destroy=function(t){return this.doDestroy=t,this},t.prototype.activateDependenciesApp=function(t){return e(this,void 0,void 0,(function(){var e,r,i,o,s,a,u;return n(this,(function(n){switch(n.label){case 0:if(this.dependenciesReady||0===this.dependencies.length)return[3,9];e=0,r=this.dependencies,n.label=1;case 1:return e<r.length?"string"!=typeof(i=r[e])?[3,3]:[4,t(i)]:[3,8];case 2:return n.sent(),[3,7];case 3:if("object"!=typeof i)return[3,7];o=0,s=Object.keys(i),n.label=4;case 4:return o<s.length?(a=s[o],u=i[a],[4,t(a,u)]):[3,7];case 5:n.sent(),n.label=6;case 6:return o++,[3,4];case 7:return e++,[3,1];case 8:this.dependenciesReady=!0,n.label=9;case 9:return[2]}}))}))},t}(),D=function(){function t(t,r,i){var o=this;void 0===t&&(t=""),void 0===r&&(r={}),void 0===i&&(i={}),this.name=t,this.assets=r,this.middleware=i,this.eventEmitter=new S,this._state={},this.apps={},this.dependencyDepth=0,this.allowCrossOriginScript=!0,this.maxDependencyDepth=100,this.fetchJs=function(t){return e(o,void 0,void 0,(function(){var e,r,i;return n(this,(function(n){switch(n.label){case 0:return[4,fetch(t)];case 1:return[4,n.sent().text()];case 2:return e=n.sent(),r=new Function(e),(null===(i=this.middleware)||void 0===i?void 0:i.handleExecute)?this.middleware.handleExecute(e,t):r(),[2]}}))}))},this.loadJs=function(t){return e(o,void 0,void 0,(function(){return n(this,(function(e){return[2,new Promise((function(e){var n=document.createElement("script");n.type="text/javascript",n.src=t,n.onload=function(){e()},document.body.appendChild(n)}))]}))}))},this.loadCss=function(t){return e(o,void 0,void 0,(function(){var e;return n(this,(function(n){return(e=document.createElement("link")).rel="stylesheet",e.type="text/css",e.href=t,document.head.appendChild(e),[2]}))}))},this.assets=r,this.name=t,this.middleware=i,Object.defineProperty(this,"state",{get:function(){return A(o._state)},set:function(){throw new Error(m())}})}return t.prototype.loadResourcesFromAssetsConfig=function(t){return e(this,void 0,void 0,(function(){var e,r,i,o,s=this;return n(this,(function(n){switch(n.label){case 0:if((e=this.assets)[t].css&&e[t].css.forEach((function(t){/^.+\.css$/.test(t)?s.loadCss(t):console.error(g(t))})),!e[t].js)return[3,8];r=0,i=e[t].js,n.label=1;case 1:return r<i.length?(o=i[r],/^.+\.js$/.test(o)?this.allowCrossOriginScript?[4,this.loadJs(o)]:[3,3]:[3,6]):[3,8];case 2:return n.sent(),[3,5];case 3:return[4,this.fetchJs(o)];case 4:n.sent(),n.label=5;case 5:return[3,7];case 6:console.error(g(o)),n.label=7;case 7:return r++,[3,1];case 8:return e[t].isLib&&(this.apps[t]=!0),[2]}}))}))},t.prototype.createSocket=function(){return new x(this.eventEmitter,this._state)},t.prototype.createApp=function(t){if(this.apps[t])throw new Error(l(t));var e=new k(t);return this.apps[t]=e,e},t.prototype.loadApp=function(t){var r,i;return e(this,void 0,void 0,(function(){return n(this,(function(e){switch(e.label){case 0:return this.assets&&this.assets[t]?[4,this.loadResourcesFromAssetsConfig(t)]:[3,2];case 1:return e.sent(),[3,5];case 2:return(null===(r=this.middleware)||void 0===r?void 0:r.handleLoad)?[4,null===(i=this.middleware)||void 0===i?void 0:i.handleLoad(t,this.allowCrossOriginScript?this.loadJs:this.fetchJs,this.loadCss)]:[3,4];case 3:return e.sent(),[3,5];case 4:throw new Error(p(t,this.name));case 5:return[2]}}))}))},t.prototype.activateApp=function(t,r){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return this.apps[t]?[3,2]:[4,this.loadApp(t)];case 1:n.sent(),n.label=2;case 2:if(!this.apps[t])throw new Error(f(t));if("boolean"==typeof this.apps[t])return[3,11];if((e=this.apps[t]).bootstrapped)return[3,8];if(this.dependencyDepth>this.maxDependencyDepth)throw this.dependencyDepth=0,new Error(E());return this.dependencyDepth++,[4,e.activateDependenciesApp(this.activateApp.bind(this))];case 3:return n.sent(),e.doBootstrap?[4,e.doBootstrap(r)]:[3,5];case 4:return n.sent(),[3,7];case 5:return e.doActivate?[4,e.doActivate(r)]:[3,7];case 6:n.sent(),n.label=7;case 7:return e.bootstrapped=!0,this.dependencyDepth--,[3,11];case 8:return e.doActivate?[4,e.doActivate(r)]:[3,10];case 9:n.sent(),n.label=10;case 10:n.label=11;case 11:return[2]}}))}))},t.prototype.destroyApp=function(t,r){return e(this,void 0,void 0,(function(){var e;return n(this,(function(n){switch(n.label){case 0:return(e=this.apps[t])&&"boolean"!=typeof e?e.doDestroy?[4,e.doDestroy(r)]:[3,2]:[3,3];case 1:n.sent(),n.label=2;case 2:e.bootstrapped=!1,e.dependenciesReady=!1,n.label=3;case 3:return[2]}}))}))},t}(),P={},L=function(t,e,n){if(void 0===self.__Bus__&&Object.defineProperty(self,"__Bus__",{value:P,writable:!1}),self.__Bus__[t])throw new Error("[obvious] the bus named "+t+" has been defined before, please rename your bus");var r=new D(t,e,n);return Object.defineProperty(self.__Bus__,t,{value:r,writable:!1}),r},N=function(t){return self.__Bus__&&self.__Bus__[t]},$={createBus:L,getBus:N};t.App=k,t.Bus=D,t.Socket=x,t.createBus=L,t.default=$,t.getBus=N,Object.defineProperty(t,"__esModule",{value:!0})}(e)},function(t,e,n){"use strict";n.r(e);var r=n(0);const i=Object(r.createBus)("host",{"react-app":{js:["http://localhost:3000/static/js/bundle.js","http://localhost:3000/static/js/0.chunk.js","http://localhost:3000/static/js/1.chunk.js","http://localhost:3000/static/js/main.chunk.js"]},"vue-app":{js:["http://localhost:8080/js/app.js","http://localhost:8080/js/chunk-vendors.js"]}});i.createApp("unit-app").relyOn([{"vue-app":{mountPoint:"#vue-app"}},{"react-app":{mountPoint:"#react-app"}}]).bootstrap(async()=>{setTimeout(()=>{alert("I can not wait to star obvious.js")},2e3)}),i.activateApp("unit-app")}]);
//# sourceMappingURL=main.js.map