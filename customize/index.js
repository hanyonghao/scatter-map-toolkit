var _get=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(o===undefined){var r=Object.getPrototypeOf(e);return null===r?undefined:t(r,n,i)}if("value"in o)return o.value;var a=o.get;return a===undefined?undefined:a.call(i)},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}!function e(t,n,i){function o(a,s){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return o(n||e)},l,l.exports,e,t,n,i)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}({1:[function(t,e,n){var i=t("./module/dom.js"),o=t("./lib/base64.js"),r=t("./module/toast.js"),a=t("./module/popup.js"),s=t("./module/ajax.js"),c=t("./module/uploader.js"),u=t("./module/canvas.js"),l=t("./module/group-list.js"),d=t("./module/group-item.js"),f=t("./module/area.js");!function(){var t=new c("#upload-file"),e=new l("#group"),n=new u("#canvas","#container"),h=i("#size"),p=i("#sizeWidth"),v=i("#sizeHeight"),m=p.concat(v),g=i("#index"),y=i("#upload-img"),j=i("#upload-option");function C(t){var i=function(i){var o=t[i],r=new d;o.areas.forEach(function(t){var e=new f;e.data(t).addClass("hover").css({top:t.y1,left:t.x1,width:parseFloat(t.x2)-parseFloat(t.x1)+"%",height:parseFloat(t.y2)-parseFloat(t.y1)+"%"}),r.append(e),n.append(e)}),r.name=i,r.isShow=o.isShow,e.append(r)};for(var o in t)i(o);0===e.$groups.size()&&e.append(new d)}function _(t){if(t.resize){h.data("checked",!0,!0);var e=!0;n.ready(function(){e?(p.value(t.width).data("value",t.width),v.value(t.height).data("value",t.height),m.removeAttr("disabled"),n.imgHeight=t.height,n.imgWidth=t.width,e=!1):(p.value(n.imgWidth).data("value",n.imgWidth),v.value(n.imgHeight).data("value",n.imgHeight)),n.update()})}}function k(){var e=arguments.length>0&&arguments[0]!==undefined&&arguments[0],n=arguments[1];t.open({name:"配置文件",accept:"text/json"}).success(function(i){var s=o.decode(i.replace("data:;base64,",""));try{s=JSON.parse(s)}catch(c){throw r("配置文件解析出错","error"),new Error("配置文件解析出错")}!0!==e||s.image?("function"==typeof n&&n(s.image),C(s.data),_(s.setting)):a({content:"当前配置文件缺少图片<br />是否上传图片",confirmText:"是",cancelText:"否",confirm:function(){t.open({name:"图片",accept:"image/*"}).success(function(t){"function"==typeof n&&n(t),C(s.data),_(s.setting)})},cancel:function(){r("加载数据失败，请先上传图片","error")}})})}function b(t,e){var o={};h.data("checked",undefined,!0)&&(o.resize=!0,o.width=n.imgWidth,o.height=n.imgHeight);var r={};t.$groups.forEach(function(t){r[t.name]={isShow:t.isShow,areas:t.$areas.map(function(t){var e=i(t);return{x1:e.data("x1"),x2:e.data("x2"),y1:e.data("y1"),y2:e.data("y2")}})}});var a=n.getImage();return/^http(s)?:\/\//.test(a)||"download"!==e||(a=""),{image:a,data:r,setting:o}}g.on("animationend",function(){return g.remove()}),y.on("click",function(){t.open({name:"图片",accept:"image/*"}).success(function(t){n.setImage(t,function(){g.addClass("hide"),e.append(new d),r("加载成功","success")})})}),j.on("click",function(){return k(!0,function(t){n.setImage(t,function(){g.addClass("hide"),r("加载成功","success")})})});var x=i("#zoom-in"),w=i("#zoom-out"),$=i("#replace-img"),A=i("#preview");n.bind(e),x.on("click",function(){return n.zoomIn()}),w.on("click",function(){return n.zoomOut()}),$.on("click",function(){t.open({name:"图片",accept:"image/*"}).success(function(t){n.setImage(t)})}),A.on("click",function(){s("/save?type=example",{method:"POST",data:b(e),success:function(t){try{var e=JSON.parse(t.responseText);200===e.code?window.open("/example#online"):r(e.errmsg,"error")}catch(n){throw r("数据格式非JSON","error"),new Error("数据格式非JSON")}}})});var O=i("#add-group"),S=i("#search"),N=i("#current");e.on("current",function(t){N.text(t.name),e.$groups.$areas.removeClass("active"),t.$areas.addClass("active")},!0,!1),O.on("click",function(){e.append(new d)}),S.on("input",function(){e.$groups.forEach(function(t){-1!==t.name.indexOf(S.value())?t.show():t.hide()})}),i("#tabs").find(".tab-item").on("click",function(){i("#"+this.attr("data-type")).show().siblings().hide(),this.addClass("active").siblings().removeClass("active")}),h.on("change",function(){h.data("checked",undefined,!0)?m.removeAttr("disabled"):(n.init(),m.attr("disabled","disabled"))}),p.on("blur",function(){var t=p.value();/^\d+$/.test(t)?(p.data("value",t),n.imgWidth=parseFloat(t),n.update()):p.value(p.data("value"))}),v.on("blur",function(){var t=v.value();/^\d+$/.test(t)?(v.data("value",t),n.imgHeight=parseFloat(t),n.update()):v.value(v.data("value"))}),n.ready(function(){p.value(n.imgWidth).data("value",n.imgWidth),v.value(n.imgHeight).data("value",n.imgHeight)});var T=i("#options"),E=T.find(".js-upload");T.find(".js-download").on("click",function(){s("/save?type=customize",{method:"POST",data:b(e,"download"),success:function(t){try{var e=JSON.parse(t.responseText);200===e.code?window.open(e.data):r(e.errmsg,"error")}catch(n){throw r("数据格式非JSON","error"),new Error("数据格式非JSON")}}})}),E.on("click",function(){a({title:"警告",content:"加载成功后将清空当前数据<br />是否继续",confirmText:"是",cancelText:"否",confirm:function(){k(!1,function(){e.$groups.remove(),e.$groups=new d([])})},cancel:function(){r("取消当前操作")}})})}()},{"./lib/base64.js":2,"./module/ajax.js":3,"./module/area.js":4,"./module/canvas.js":5,"./module/dom.js":6,"./module/group-item.js":7,"./module/group-list.js":8,"./module/popup.js":9,"./module/toast.js":10,"./module/uploader.js":11}],2:[function(t,e,n){var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";e.exports.encode=function(t){var e="",n=void 0,o=void 0,r=void 0,a=void 0,s=void 0,c=void 0,u=void 0,l=0;for(t=function(t){t=t.replace(/\r\n/g,"\n");for(var e="",n=0;n<t.length;n++){var i=t.charCodeAt(n);i<128?e+=String.fromCharCode(i):i>127&&i<2048?(e+=String.fromCharCode(i>>6|192),e+=String.fromCharCode(63&i|128)):(e+=String.fromCharCode(i>>12|224),e+=String.fromCharCode(i>>6&63|128),e+=String.fromCharCode(63&i|128))}return e}(t);l<t.length;)a=(n=t.charCodeAt(l++))>>2,s=(3&n)<<4|(o=t.charCodeAt(l++))>>4,c=(15&o)<<2|(r=t.charCodeAt(l++))>>6,u=63&r,isNaN(o)?c=u=64:isNaN(r)&&(u=64),e=e+i.charAt(a)+i.charAt(s)+i.charAt(c)+i.charAt(u);return e},e.exports.decode=function(t){var e="",n=void 0,o=void 0,r=void 0,a=void 0,s=void 0,c=void 0,u=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");u<t.length;)n=i.indexOf(t.charAt(u++))<<2|(a=i.indexOf(t.charAt(u++)))>>4,o=(15&a)<<4|(s=i.indexOf(t.charAt(u++)))>>2,r=(3&s)<<6|(c=i.indexOf(t.charAt(u++))),e+=String.fromCharCode(n),64!=s&&(e+=String.fromCharCode(o)),64!=c&&(e+=String.fromCharCode(r));return function(t){var e="",n=0,i=void 0,o=void 0,r=void 0;for(i=o=r=0;n<t.length;)(i=t.charCodeAt(n))<128?(e+=String.fromCharCode(i),n++):i>191&&i<224?(o=t.charCodeAt(n+1),e+=String.fromCharCode((31&i)<<6|63&o),n+=2):(o=t.charCodeAt(n+1),r=t.charCodeAt(n+2),e+=String.fromCharCode((15&i)<<12|(63&o)<<6|63&r),n+=3);return e}(e)}},{}],3:[function(t,e,n){e.exports=function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&(200==n.status?"function"==typeof e.success&&e.success(n):"function"==typeof e.success&&e.error(n))},n.open(e.method,t,!0),n.setRequestHeader("Content-type","application/json"),n.send(JSON.stringify(e.data||{}))}},{}],4:[function(t,e,n){var i=t("./dom.js"),o=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,'<div class="area">\n\t\t\t<i class="icon icon-error"></i>\n\t\t</div>'));return t.find(".icon").on("click",function(){t.remove(),t.emit("delete")}),t}return _inherits(e,i["class"]),e}();e.exports=o},{"./dom.js":6}],5:[function(t,e,n){var i=t("./dom.js"),o=t("./util.js"),r=t("./area.js"),a=function(t){function e(t,n){_classCallCheck(this,e);var a=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));a.$container=i(n),a.$img=a.find(".js-pic"),a.$areas=a.find(".js-areas");var s=a;function c(t,e){var n=o.toFloat(s.width()),i=o.toFloat(s.height());return"width"===e?o.toString(t/n*100,"%"):"height"===e?o.toString(t/i*100,"%"):void 0}return a.on("mousedown",function(t){var e=i(t.target);if(0===t.button&&!e.hasClass("icon")){var n=new r;a.$currentArea=n,a.$currentArea.data({startX:a.getAbs().x,startY:a.getAbs().y}),a.$areas.append(n),a.$groupList.$groups.$areas.removeClass("hover"),a.$groupList.$currentGroup.append(n)}}),i(document).on("mousemove",function(){if(a.$currentArea){var t,e,n,i,r,s=a.getAbs();s.x<0?s.x=0:s.x>o.toFloat(a.width())&&(s.x=o.toFloat(a.width())),s.y<0?s.y=0:s.y>o.toFloat(a.height())&&(s.y=o.toFloat(a.height())),a.$currentArea.data({endX:s.x,endY:s.y}),t=a.$currentArea,e=t.data("startX"),n=t.data("endX"),i=t.data("startY"),r=t.data("endY"),n>=e?(t.css({left:c(e,"width"),width:c(n-e,"width")}),t.data("x1",c(e,"width")),t.data("x2",c(n,"width"))):(t.css({left:c(n,"width"),width:c(e-n,"width")}),t.data("x1",c(n,"width")),t.data("x2",c(e,"width"))),r>=i?(t.css({top:c(i,"height"),height:c(r-i,"height")}),t.data("y1",c(i,"height")),t.data("y2",c(r,"height"))):(t.css({top:c(r,"height"),height:c(i-r,"height")}),t.data("y1",c(r,"height")),t.data("y2",c(i,"height")))}}),i(document).on("mouseup",function(){if(a.$currentArea){a.$groupList.$groups.$areas.addClass("hover");var t=o.toFloat(a.$currentArea.data("x1")),e=o.toFloat(a.$currentArea.data("x2")),n=o.toFloat(a.$currentArea.data("y1")),i=o.toFloat(a.$currentArea.data("y2"));(r(t)||r(e)||r(n)||r(i))&&a.$currentArea.remove().emit("delete"),a.$currentArea.addClass("active"),a.$currentArea=null}function r(t){return t===undefined||t>100||t<0}}),a}return _inherits(e,i["class"]),_createClass(e,[{key:"bind",value:function(t){return o.isGroupList(t)&&(this.$groupList=t),this}},{key:"init",value:function(){return this.$img.css("width",""),this.$img.css("height",""),this.imgScale=1,this.imgWidth=o.toFloat(this.$img.width()),this.imgHeight=o.toFloat(this.$img.height()),this.update(),this.emit("ready"),this}},{key:"getAbs",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.event;return{x:t.pageX+this.$container.scrollLeft()-this.offset().left,y:t.pageY+this.$container.scrollTop()-this.offset().top}}},{key:"update",value:function(){return this.$img.width(o.toString(this.imgWidth*this.imgScale,"px")),this.$img.height(o.toString(this.imgHeight*this.imgScale,"px")),this}},{key:"append",value:function(t){if(!o.isArea(t))return this;this.find(".js-areas").append(t)}},{key:"setImage",value:function(t,e){var n=this;return this.$img.attr("src",t),this.$img.on("load",function(){n.init(),"function"==typeof e&&e()},!0),this}},{key:"getImage",value:function(){return this.$img.attr("src")}},{key:"zoomIn",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:.1;return this.imgScale+=t,this.update(),this}},{key:"zoomOut",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:.1;return this.imgScale>2*t&&(this.imgScale-=t,this.update()),this}},{key:"ready",value:function(t){return this.onready=t,this}}]),e}();e.exports=a},{"./area.js":4,"./dom.js":6,"./util.js":12}],6:[function(t,e,n){var i=void 0,o=function(){function t(e){var n=this,i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(_classCallCheck(this,t),Array.isArray(i)?this.contexts=i:this.contexts=[i],"string"==typeof e)if(/^<[\s\S]+>$/.test(e)){var o=document.createElement("div");o.innerHTML=e,this.nodes=[o.firstChild]}else this.nodes=[],this.contexts.forEach(function(t){var i;(i=n.nodes).push.apply(i,_toConsumableArray(t.querySelectorAll(e)))});else e instanceof t?(this.contexts=e.contexts,this.nodes=e.nodes):Array.isArray(e)?this.nodes=e.filter(function(t){return!!t}):this.nodes=e?[e]:[]}return _createClass(t,[{key:"each",value:function(t){return this.nodes.forEach(t),this}},{key:"map",value:function(t){return this.nodes.map(t)}},{key:"filter",value:function(t){return i(this.nodes.filter(t))}},{key:"get",value:function(t){return this.nodes[t]}},{key:"eq",value:function(t){return i(this.nodes[t])}},{key:"find",value:function(t){return i(t,this.nodes)}},{key:"size",value:function(){return this.nodes.length}},{key:"equals",value:function(t){return this.nodes[0]===i(t).nodes[0]}},{key:"concat",value:function(t){return i([].concat(_toConsumableArray(i(t).nodes),_toConsumableArray(this.nodes)))}},{key:"push",value:function(t){var e;return(e=this.nodes).push.apply(e,_toConsumableArray(i(t).nodes))}},{key:"splice",value:function(t){for(var e,n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1,o=arguments.length,r=Array(o>2?o-2:0),a=2;a<o;a++)r[a-2]=arguments[a];return(e=this.nodes).splice.apply(e,[t,n].concat(_toConsumableArray(i(r).nodes))),this}},{key:"index",value:function(t){return this.nodes.indexOf(i(t).nodes[0])}},{key:"on",value:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined&&arguments[2],o=!(arguments.length>3&&arguments[3]!==undefined)||arguments[3],r=t.split(" ");return n?this.each(function(t){r.forEach(function(n){o?t["on"+n]=function(){return e.call.apply(e,[i(t)].concat(Array.prototype.slice.call(arguments)))}:t["_on"+n]=function(){return e.call.apply(e,[i(t)].concat(Array.prototype.slice.call(arguments)))}})}):this.each(function(t){r.forEach(function(n){t.addEventListener(n,function(){e.call.apply(e,[i(t)].concat(Array.prototype.slice.call(arguments)))})})}),this}},{key:"off",value:function(t,e){return this.each(function(n){n.removeEventListener(t,e),n["on"+t]=null,n["_on"+t]=null}),this}},{key:"emit",value:function(t){for(var e=this,n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var r=[];return this.each(function(n){"function"==typeof e["on"+t]?r.push(e["on"+t].apply(e,i)):"function"==typeof n["on"+t]?r.push(n["on"+t].apply(n,i)):"function"==typeof n["_on"+t]&&r.push(n["_on"+t].apply(n,i))}),r.length>1?r:r[0]}},{key:"attr",value:function(t,e){if("object"===(void 0===t?"undefined":_typeof(t)))this.each(function(e){for(var n in t)e.setAttribute(n,t[n])});else{if(e===undefined)return this.nodes.map(function(e){return e.getAttribute(t)}).join("");this.each(function(n){n.setAttribute(t,e)})}return this}},{key:"removeAttr",value:function(t){return this.each(function(e){e.removeAttribute(t)}),this}},{key:"data",value:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined&&arguments[2];if("object"===(void 0===t?"undefined":_typeof(t)))this.each(function(e){for(var i in t)n?e[i]=t[i]:e["_"+i]=t[i]});else{if(e===undefined)return n?this.get(0)[t]:this.get(0)["_"+t];this.each(function(i){n?i[t]=e:i["_"+t]=e})}return this}},{key:"addClass",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.each(function(t){var n=t.className.split(" ");e.forEach(function(t){-1===n.indexOf(t)&&n.push(t)}),t.className=n.join(" ")}),this}},{key:"removeClass",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.each(function(t){var n=t.className.split(" ");e.forEach(function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}),t.className=n.join(" ")}),this}},{key:"hasClass",value:function(t){return this.nodes.some(function(e){return-1!==e.className.indexOf(t)})}},{key:"css",value:function(t,e){if("object"===(void 0===t?"undefined":_typeof(t)))this.each(function(e){for(var n in t)e.style[n]=t[n]});else{if(e===undefined)return"getComputedStyle"in window?window.getComputedStyle(this.get(0))[t]:this.get(0).style[t];this.each(function(n){n.style[t]=e})}}},{key:"width",value:function(t){return this.css("width",t)}},{key:"height",value:function(t){return this.css("height",t)}},{key:"append",value:function(t){return this.each(function(e){i(t).each(function(t){e.appendChild(t)})}),this}},{key:"remove",value:function(){return this.each(function(t){t.remove()}),this}},{key:"replace",value:function(t){return this.each(function(e){e.parentNode.replaceChild(i(t).get(0),e)}),this}},{key:"html",value:function(t){return t!==undefined?(this.each(function(e){e.innerHTML=t}),this):this.get(0).innerHTML}},{key:"text",value:function(t){return t!==undefined?(this.each(function(e){e.innerText=t}),this):this.get(0).innerText}},{key:"value",value:function(t){return t!==undefined?(this.each(function(e){e.value=t}),this):this.get(0).value}},{key:"parent",value:function(){return i(this.nodes.map(function(t){return t.parentNode}))}},{key:"children",value:function(){var t=[];return this.each(function(e){t.push.apply(t,_toConsumableArray(e.children))}),i(t)}},{key:"siblings",value:function(){var t=this;return this.parent().children().filter(function(e){return-1===t.nodes.indexOf(e)})}},{key:"show",value:function(){return this.css("display",""),this}},{key:"hide",value:function(){return this.css("display","none"),this}},{key:"offset",value:function(){return{left:this.get(0).offsetLeft,top:this.get(0).offsetTop}}},{key:"scrollLeft",value:function(){return this.get(0).scrollLeft}},{key:"scrollTop",value:function(){return this.get(0).scrollTop}},{key:"click",value:function(){return this.each(function(t){t.click()}),this}}]),t}();(i=function(t,e){return t instanceof o?t:new o(t,e)})["class"]=o,e.exports=i},{}],7:[function(t,e,n){var i=t("./dom.js"),o=t("./util.js"),r=t("./popup.js"),a=function(t){function e(t){var n;if(_classCallCheck(this,e),t)return _possibleConstructorReturn(n=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)));(n=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,'<li class="item mark">\n\t\t\t<span class="status">\n\t\t\t\t<i class="js-status icon icon-show" title="隐藏"></i>\n\t\t\t</span>\n\t\t\t\n\t\t\t<p class="js-name single-line" title="分组名">分组名</p>\n\t\t\t<input class="js-input edit-text" autocomplete="off" style="display: none;"/>\n\n\t\t\t<span class="ctrl">\n\t\t\t\t<i class="js-edit icon icon-edit" title="重命名"></i>\n\t\t\t\t<i class="js-submit icon icon-submit" title="确定" style="display: none;"></i>\n\t\t\t\t<i class="js-delete icon icon-delete" title="删除"></i>\n\t\t\t</span>\n\t\t</li>'))).$areas=i();var o=n.find(".js-name");o.on("click",function(){n.addClass("active").siblings().removeClass("active"),n.emit("choose")});var a=n.find(".js-status");a.on("click",function(){n.isShow=!a.hasClass("icon-show")});var s=n.find(".js-input"),c=n.find(".js-edit"),u=n.find(".js-submit");return c.on("click",function(){c.hide(),u.show(),o.hide(),s.show().value(o.text())}),u.on("click",function(){var t=s.value();!1===n.emit("rename",t)&&(t=o.text()),c.show(),u.hide(),s.hide(),o.show()}),s.on("blur",function(){return u.click()}),n.find(".js-delete").on("click",function(){r({content:"是否确认删除分组，<br />删除后将不可恢复。",confirm:function(){!1!==n.emit("delete")&&(_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",n).call(n),n.$areas.remove())}})}),_possibleConstructorReturn(n)}return _inherits(e,i["class"]),_createClass(e,[{key:"forEach",value:function(t){_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"each",this).call(this,function(n){t(new e(n))})}},{key:"eq",value:function(t){return new e(_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"eq",this).call(this,t))}},{key:"remove",value:function(){this.$areas.remove(),_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this)}},{key:"append",value:function(t){var e=this;return o.isArea(t)?(t.on("delete",function(){e.$areas.splice(e.$areas.index(t))},!0,!1),this.$areas.push(t),this):this}},{key:"name",set:function(t){this.data("name",t).find(".js-name").attr("title",t).text(t)},get:function(){return this.size()>1?"分组集":this.data("name")}},{key:"isShow",set:function(t){var e=this.find(".js-status");t?(this.$areas.show(),e.addClass("icon-show").removeClass("icon-hide").attr("title","显示")):(this.$areas.hide(),e.addClass("icon-hide").removeClass("icon-show").attr("title","显示")),this.data("isShow",t)},get:function(){var t=this.data("isShow");return t===undefined||t}},{key:"$areas",set:function(t){this.data("$areas",t)},get:function(){if(this.size()>1){var t=i();return this.forEach(function(e){t.push(e.$areas)}),t}return this.data("$areas")}}]),e}();e.exports=a},{"./dom.js":6,"./popup.js":9,"./util.js":12}],8:[function(t,e,n){var i=t("./dom.js"),o=t("./util.js"),r=t("./toast.js"),a=t("./group-item.js"),s=function(t){function e(t){_classCallCheck(this,e);var n=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.$groups=new a([]),n}return _inherits(e,i["class"]),_createClass(e,[{key:"check",value:function(){if(!this.$groups.hasClass("active")&&this.$groups.size()>0){var t=this.$groups.eq(0);this.$currentGroup=t,this.emit("current",t.addClass("active"))}return this}},{key:"findByName",value:function(t){var e=null;return this.$groups.forEach(function(n){n.name===t&&(e=n)}),e}},{key:"append",value:function(t){var n=this;if(!o.isGroupItem(t))return this;for(var i=1;!t.name;i++){var a="分组"+i;this.findByName(a)||(t.name=a)}return t.on("choose",function(){n.$currentGroup=t,n.emit("current",t)},!0,!1),t.on("delete",function(){if(!(n.$groups.size()>1))return r("删除失败，至少保留一个分组","error"),!1;var e=n.$groups.index(t);-1!==e&&n.$groups.splice(e),n.check()},!0,!1),t.on("rename",function(e){var i=n.findByName(e);if(i&&!i.equals(t))return r("名称已存在","error"),!1;t.name=e,n.emit("current",n.$currentGroup)},!0,!1),_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"append",this).call(this,t),this.$groups.push(t),this.check(),this}}]),e}();e.exports=s},{"./dom.js":6,"./group-item.js":7,"./toast.js":10,"./util.js":12}],9:[function(t,e,n){var i=t("./dom.js"),o=i("body"),r=i('<div class="popup">\n\t<div class="box">\n\t\t<div class="js-title title"></div>\n\t\t<div class="js-content content"></div>\n\t\t<div class="btns">\n\t\t\t<button class="js-cancel cancel">取消</button>\n\t\t\t<button class="js-confirm confirm ml">确定</button>\n\t\t</div>\n\t</div>\n</div>'),a=r.find(".js-title"),s=r.find(".js-content"),c=r.find(".js-cancel"),u=r.find(".js-confirm");r.on("animationend",function(){r.hasClass("fade-out")&&(r.removeClass("fade-out"),r.remove()),r.hasClass("fade-in")&&r.removeClass("fade-in")}),e.exports=function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};"string"==typeof t&&(t={content:t}),a.text(t.title||"提示"),s.html(t.content||""),t.cancelText&&c.text(t.cancelText),c.on("click",function(){if("function"==typeof t.cancel&&"false"===t.cancel())return;r.addClass("fade-out")},!0),t.confirmText&&u.text(t.confirmText),u.on("click",function(){if("function"==typeof t.confirm&&"false"===t.confirm())return;r.addClass("fade-out")},!0),o.append(r.addClass("fade-in"))}},{"./dom.js":6}],10:[function(t,e,n){var i=t("./dom.js"),o=i("body"),r=i('<div class="toast">\n\t<i class="js-icon icon"></i>\n\t<span class="js-text"></span>\n</div>'),a=r.find(".js-icon"),s=r.find(".js-text");r.on("animationend",function(){r.remove()}),e.exports=function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"prompt";r.removeClass("success").removeClass("error").removeClass("prompt").addClass(e),a.removeClass("icon-success").removeClass("icon-error").removeClass("icon-prompt").addClass("icon-"+e),s.text(t),o.append(r)}},{"./dom.js":6}],11:[function(t,e,n){var i=t("./dom.js"),o=t("./toast.js"),r=function(t){function e(t){_classCallCheck(this,e);var n=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.on("change",function(){var t=n.data("files",undefined,!0)[0];if(!t)return n.value(""),!1;var e=new FileReader;e.onload=function(t){n.emit("success",t.target.result,t)},e.onerror=function(t){n.emit("error",t)},e.readAsDataURL(t),n.value("")}),n.onerror=function(){return o((n.options.name||"文件")+"读取错误","error")},n}return _inherits(e,i["class"]),_createClass(e,[{key:"open",value:function(t){return this.options=t||{},this.options.accept?this.attr("accept",t.accept):this.removeAttr("accept"),this.click(),this}},{key:"success",value:function(t){this.onsuccess=t}},{key:"error",value:function(t){this.onerror=t}}]),e}();e.exports=r},{"./dom.js":6,"./toast.js":10}],12:[function(t,e,n){var i=t("./uploader.js"),o=t("./canvas.js"),r=t("./group-list.js"),a=t("./group-item.js"),s=t("./area.js"),c=t("./dom.js")["class"];e.exports.toFloat=function(t){if("string"==typeof t){var e=t.match(/\d+/g);return parseFloat(e&&(e.length>1?e:e[0]))}},e.exports.toString=function(t,e){return t+e},e.exports.isCanvas=function(t){return t instanceof o},e.exports.isGroupList=function(t){return t instanceof r},e.exports.isGroupItem=function(t){return t instanceof a},e.exports.isUploader=function(t){return t instanceof i},e.exports.isArea=function(t){return t instanceof s},e.exports.isDOM=function(t){return t instanceof c}},{"./area.js":4,"./canvas.js":5,"./dom.js":6,"./group-item.js":7,"./group-list.js":8,"./uploader.js":11}]},{},[1]);
//# sourceMappingURL=index.js.map
