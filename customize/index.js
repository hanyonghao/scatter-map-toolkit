var _get=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(o===undefined){var r=Object.getPrototypeOf(e);return null===r?undefined:t(r,n,i)}if("value"in o)return o.value;var s=o.get;return s===undefined?undefined:s.call(i)},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}!function e(t,n,i){function o(s,a){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n||e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(t,e,n){var i=t("./module/dom.js"),o=t("./module/toast.js"),r=t("./module/popup.js"),s=t("./module/ajax.js"),a=t("./module/uploader.js"),u=t("./module/canvas.js"),c=t("./module/group-list.js"),l=t("./module/group-item.js"),f=t("./module/area.js");!function(){var t=new a("#upload-file"),e=new c("#group"),n=new u("#canvas","#container"),d=i("#size"),h=i("#sizeWidth"),p=i("#sizeHeight"),v=h.concat(p),m=i("#index"),y=i("#upload-img"),g=i("#upload-option");function j(t){var i=function(i){var o=t[i],r=new l;o.areas.forEach(function(t){var e=new f;e.data(t).addClass("hover").css({top:t.y1,left:t.x1,width:parseFloat(t.x2)-parseFloat(t.x1)+"%",height:parseFloat(t.y2)-parseFloat(t.y1)+"%"}),r.append(e),n.append(e)}),r.name=i,r.isShow=o.isShow,e.append(r)};for(var o in t)i(o);0===e.$groups.size()&&e.append(new l)}function _(t){if(t.resize){d.data("checked",!0,!0);var e=!0;n.ready(function(){e?(h.value(t.width).data("value",t.width),p.value(t.height).data("value",t.height),v.removeAttr("disabled"),n.imgHeight=t.height,n.imgWidth=t.width,e=!1):(h.value(n.imgWidth).data("value",n.imgWidth),p.value(n.imgHeight).data("value",n.imgHeight)),n.update()})}}function k(){var e=arguments.length>0&&arguments[0]!==undefined&&arguments[0],n=arguments[1];t.open({name:"配置文件",accept:"text/json",isText:!0}).success(function(i){var s=i;try{s=JSON.parse(s)}catch(a){throw o("配置文件解析出错","error"),new Error("配置文件解析出错")}!0!==e||s.image?("function"==typeof n&&n(s.image),j(s.data),_(s.setting)):r({content:"当前配置文件缺少图片<br />是否上传图片",confirmText:"是",cancelText:"否",confirm:function(){t.open({name:"图片",accept:"image/*"}).success(function(t){"function"==typeof n&&n(t),j(s.data),_(s.setting)})},cancel:function(){o("加载数据失败，请先上传图片","error")}})})}function x(t,e){var o={};d.data("checked",undefined,!0)&&(o.resize=!0,o.width=n.imgWidth,o.height=n.imgHeight);var r={};t.$groups.forEach(function(t){r[t.name]={isShow:t.isShow,areas:t.$areas.map(function(t){var e=i(t);return{x1:e.data("x1"),x2:e.data("x2"),y1:e.data("y1"),y2:e.data("y2")}})}});var s=n.getImage();return/^http(s)?:\/\//.test(s)||"download"!==e||(s=""),{image:s,data:r,setting:o}}m.on("animationend",function(){return m.remove()}),y.on("click",function(){t.open({name:"图片",accept:"image/*"}).success(function(t){n.setImage(t,function(){m.addClass("hide"),e.append(new l),o("加载成功","success")})})}),g.on("click",function(){return k(!0,function(t){n.setImage(t,function(){m.addClass("hide"),o("加载成功","success")})})});var b=i("#zoom-in"),w=i("#zoom-out"),C=i("#replace-img"),$=i("#preview");n.bind(e),b.on("click",function(){return n.zoomIn()}),w.on("click",function(){return n.zoomOut()}),C.on("click",function(){t.open({name:"图片",accept:"image/*"}).success(function(t){n.setImage(t)})}),$.on("click",function(){s("/save?type=example",{method:"POST",data:x(e),success:function(t){try{var e=JSON.parse(t.responseText);200===e.code?window.open("/example#online"):o(e.errmsg,"error")}catch(n){throw o("数据格式非JSON","error"),new Error("数据格式非JSON")}}})});var O=i("#add-group"),A=i("#search"),S=i("#current");e.on("current",function(t){S.text(t.name),e.$groups.$areas.removeClass("active"),t.$areas.addClass("active")},!0,!1),O.on("click",function(){e.append(new l)}),A.on("input",function(){e.$groups.forEach(function(t){-1!==t.name.indexOf(A.value())?t.show():t.hide()})}),i("#tabs").find(".tab-item").on("click",function(){i("#"+this.attr("data-type")).show().siblings().hide(),this.addClass("active").siblings().removeClass("active")}),d.on("change",function(){d.data("checked",undefined,!0)?v.removeAttr("disabled"):(n.init(),v.attr("disabled","disabled"))}),h.on("blur",function(){var t=h.value();/^\d+$/.test(t)?(h.data("value",t),n.imgWidth=parseFloat(t),n.update()):h.value(h.data("value"))}),p.on("blur",function(){var t=p.value();/^\d+$/.test(t)?(p.data("value",t),n.imgHeight=parseFloat(t),n.update()):p.value(p.data("value"))}),n.ready(function(){h.value(n.imgWidth).data("value",n.imgWidth),p.value(n.imgHeight).data("value",n.imgHeight)});var T=i("#options"),E=T.find(".js-upload");T.find(".js-download").on("click",function(){s("/save?type=customize",{method:"POST",data:x(e,"download"),success:function(t){try{var e=JSON.parse(t.responseText);200===e.code?window.open(e.data):o(e.errmsg,"error")}catch(n){throw o("数据格式非JSON","error"),new Error("数据格式非JSON")}}})}),E.on("click",function(){r({title:"警告",content:"加载成功后将清空当前数据<br />是否继续",confirmText:"是",cancelText:"否",confirm:function(){k(!1,function(){e.$groups.remove(),e.$groups=new l([])})},cancel:function(){o("取消当前操作")}})})}()},{"./module/ajax.js":2,"./module/area.js":3,"./module/canvas.js":4,"./module/dom.js":5,"./module/group-item.js":6,"./module/group-list.js":7,"./module/popup.js":8,"./module/toast.js":9,"./module/uploader.js":10}],2:[function(t,e,n){e.exports=function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&(200==n.status?"function"==typeof e.success&&e.success(n):"function"==typeof e.error&&e.error(n))},n.open(e.method,t,!0),n.setRequestHeader("Content-type","application/json"),n.send(JSON.stringify(e.data||{}))}},{}],3:[function(t,e,n){var i=t("./dom.js"),o=function(t){function e(){_classCallCheck(this,e);var t=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,'<div class="area">\n\t\t\t<i class="icon icon-error"></i>\n\t\t</div>'));return t.find(".icon").on("click",function(){t.remove(),t.emit("delete")}),t}return _inherits(e,i["class"]),e}();e.exports=o},{"./dom.js":5}],4:[function(t,e,n){var i=t("./dom.js"),o=t("./util.js"),r=t("./area.js"),s=function(t){function e(t,n){_classCallCheck(this,e);var s=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));s.$container=i(n),s.$img=s.find(".js-pic"),s.$areas=s.find(".js-areas");var a=s;function u(t,e){var n=o.toFloat(a.width()),i=o.toFloat(a.height());return"width"===e?o.toString(t/n*100,"%"):"height"===e?o.toString(t/i*100,"%"):void 0}return s.on("mousedown",function(t){var e=i(t.target);if(0===t.button&&!e.hasClass("icon")){var n=new r;s.$currentArea=n,s.$currentArea.data({startX:s.getAbs().x,startY:s.getAbs().y}),s.$areas.append(n),s.$groupList.$groups.$areas.removeClass("hover"),s.$groupList.$currentGroup.append(n)}}),i(document).on("mousemove",function(){if(s.$currentArea){var t,e,n,i,r,a=s.getAbs();a.x<0?a.x=0:a.x>o.toFloat(s.width())&&(a.x=o.toFloat(s.width())),a.y<0?a.y=0:a.y>o.toFloat(s.height())&&(a.y=o.toFloat(s.height())),s.$currentArea.data({endX:a.x,endY:a.y}),t=s.$currentArea,e=t.data("startX"),n=t.data("endX"),i=t.data("startY"),r=t.data("endY"),n>=e?(t.css({left:u(e,"width"),width:u(n-e,"width")}),t.data("x1",u(e,"width")),t.data("x2",u(n,"width"))):(t.css({left:u(n,"width"),width:u(e-n,"width")}),t.data("x1",u(n,"width")),t.data("x2",u(e,"width"))),r>=i?(t.css({top:u(i,"height"),height:u(r-i,"height")}),t.data("y1",u(i,"height")),t.data("y2",u(r,"height"))):(t.css({top:u(r,"height"),height:u(i-r,"height")}),t.data("y1",u(r,"height")),t.data("y2",u(i,"height")))}}),i(document).on("mouseup",function(){if(s.$currentArea){s.$groupList.$groups.$areas.addClass("hover");var t=o.toFloat(s.$currentArea.data("x1")),e=o.toFloat(s.$currentArea.data("x2")),n=o.toFloat(s.$currentArea.data("y1")),i=o.toFloat(s.$currentArea.data("y2"));(r(t)||r(e)||r(n)||r(i))&&s.$currentArea.remove().emit("delete"),s.$currentArea.addClass("active"),s.$currentArea=null}function r(t){return t===undefined||t>100||t<0}}),s}return _inherits(e,i["class"]),_createClass(e,[{key:"bind",value:function(t){return o.isGroupList(t)&&(this.$groupList=t),this}},{key:"init",value:function(){return this.$img.css("width",""),this.$img.css("height",""),this.imgScale=1,this.imgWidth=o.toFloat(this.$img.width()),this.imgHeight=o.toFloat(this.$img.height()),this.update(),this.emit("ready"),this}},{key:"getAbs",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.event;return{x:t.pageX+this.$container.scrollLeft()-this.offset().left,y:t.pageY+this.$container.scrollTop()-this.offset().top}}},{key:"update",value:function(){return this.$img.width(o.toString(this.imgWidth*this.imgScale,"px")),this.$img.height(o.toString(this.imgHeight*this.imgScale,"px")),this}},{key:"append",value:function(t){if(!o.isArea(t))return this;this.find(".js-areas").append(t)}},{key:"setImage",value:function(t,e){var n=this;return this.$img.attr("src",t),this.$img.on("load",function(){n.init(),"function"==typeof e&&e()},!0),this}},{key:"getImage",value:function(){return this.$img.attr("src")}},{key:"zoomIn",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:.1;return this.imgScale+=t,this.update(),this}},{key:"zoomOut",value:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:.1;return this.imgScale>2*t&&(this.imgScale-=t,this.update()),this}},{key:"ready",value:function(t){return this.onready=t,this}}]),e}();e.exports=s},{"./area.js":3,"./dom.js":5,"./util.js":11}],5:[function(t,e,n){var i=void 0,o=function(){function t(e){var n=this,i=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(_classCallCheck(this,t),Array.isArray(i)?this.contexts=i:this.contexts=[i],"string"==typeof e)if(/^<[\s\S]+>$/.test(e)){var o=document.createElement("div");o.innerHTML=e,this.nodes=[o.firstChild]}else this.nodes=[],this.contexts.forEach(function(t){var i;(i=n.nodes).push.apply(i,_toConsumableArray(t.querySelectorAll(e)))});else e instanceof t?(this.contexts=e.contexts,this.nodes=e.nodes):Array.isArray(e)?this.nodes=e.filter(function(t){return!!t}):this.nodes=e?[e]:[]}return _createClass(t,[{key:"each",value:function(t){return this.nodes.forEach(t),this}},{key:"map",value:function(t){return this.nodes.map(t)}},{key:"filter",value:function(t){return i(this.nodes.filter(t))}},{key:"get",value:function(t){return this.nodes[t]}},{key:"eq",value:function(t){return i(this.nodes[t])}},{key:"find",value:function(t){return i(t,this.nodes)}},{key:"size",value:function(){return this.nodes.length}},{key:"equals",value:function(t){return this.nodes[0]===i(t).nodes[0]}},{key:"concat",value:function(t){return i([].concat(_toConsumableArray(i(t).nodes),_toConsumableArray(this.nodes)))}},{key:"push",value:function(t){var e;return(e=this.nodes).push.apply(e,_toConsumableArray(i(t).nodes))}},{key:"splice",value:function(t){for(var e,n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1,o=arguments.length,r=Array(o>2?o-2:0),s=2;s<o;s++)r[s-2]=arguments[s];return(e=this.nodes).splice.apply(e,[t,n].concat(_toConsumableArray(i(r).nodes))),this}},{key:"index",value:function(t){return this.nodes.indexOf(i(t).nodes[0])}},{key:"on",value:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined&&arguments[2],o=!(arguments.length>3&&arguments[3]!==undefined)||arguments[3],r=t.split(" ");return n?this.each(function(t){r.forEach(function(n){o?t["on"+n]=function(){return e.call.apply(e,[i(t)].concat(Array.prototype.slice.call(arguments)))}:t["_on"+n]=function(){return e.call.apply(e,[i(t)].concat(Array.prototype.slice.call(arguments)))}})}):this.each(function(t){r.forEach(function(n){t.addEventListener(n,function(){e.call.apply(e,[i(t)].concat(Array.prototype.slice.call(arguments)))})})}),this}},{key:"off",value:function(t,e){return this.each(function(n){n.removeEventListener(t,e),n["on"+t]=null,n["_on"+t]=null}),this}},{key:"emit",value:function(t){for(var e=this,n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];var r=[];return this.each(function(n){"function"==typeof e["on"+t]?r.push(e["on"+t].apply(e,i)):"function"==typeof n["on"+t]?r.push(n["on"+t].apply(n,i)):"function"==typeof n["_on"+t]&&r.push(n["_on"+t].apply(n,i))}),r.length>1?r:r[0]}},{key:"attr",value:function(t,e){if("object"===(void 0===t?"undefined":_typeof(t)))this.each(function(e){for(var n in t)e.setAttribute(n,t[n])});else{if(e===undefined)return this.nodes.map(function(e){return e.getAttribute(t)}).join("");this.each(function(n){n.setAttribute(t,e)})}return this}},{key:"removeAttr",value:function(t){return this.each(function(e){e.removeAttribute(t)}),this}},{key:"data",value:function(t,e){var n=arguments.length>2&&arguments[2]!==undefined&&arguments[2];if("object"===(void 0===t?"undefined":_typeof(t)))this.each(function(e){for(var i in t)n?e[i]=t[i]:e["_"+i]=t[i]});else{if(e===undefined)return n?this.get(0)[t]:this.get(0)["_"+t];this.each(function(i){n?i[t]=e:i["_"+t]=e})}return this}},{key:"addClass",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.each(function(t){var n=t.className.split(" ");e.forEach(function(t){-1===n.indexOf(t)&&n.push(t)}),t.className=n.join(" ")}),this}},{key:"removeClass",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.each(function(t){var n=t.className.split(" ");e.forEach(function(t){var e=n.indexOf(t);-1!==e&&n.splice(e,1)}),t.className=n.join(" ")}),this}},{key:"hasClass",value:function(t){return this.nodes.some(function(e){return-1!==e.className.indexOf(t)})}},{key:"css",value:function(t,e){if("object"===(void 0===t?"undefined":_typeof(t)))this.each(function(e){for(var n in t)e.style[n]=t[n]});else{if(e===undefined)return"getComputedStyle"in window?window.getComputedStyle(this.get(0))[t]:this.get(0).style[t];this.each(function(n){n.style[t]=e})}}},{key:"width",value:function(t){return this.css("width",t)}},{key:"height",value:function(t){return this.css("height",t)}},{key:"append",value:function(t){return this.each(function(e){i(t).each(function(t){e.appendChild(t)})}),this}},{key:"remove",value:function(){return this.each(function(t){t.remove()}),this}},{key:"replace",value:function(t){return this.each(function(e){e.parentNode.replaceChild(i(t).get(0),e)}),this}},{key:"html",value:function(t){return t!==undefined?(this.each(function(e){e.innerHTML=t}),this):this.get(0).innerHTML}},{key:"text",value:function(t){return t!==undefined?(this.each(function(e){e.innerText=t}),this):this.get(0).innerText}},{key:"value",value:function(t){return t!==undefined?(this.each(function(e){e.value=t}),this):this.get(0).value}},{key:"parent",value:function(){return i(this.nodes.map(function(t){return t.parentNode}))}},{key:"children",value:function(){var t=[];return this.each(function(e){t.push.apply(t,_toConsumableArray(e.children))}),i(t)}},{key:"siblings",value:function(){var t=this;return this.parent().children().filter(function(e){return-1===t.nodes.indexOf(e)})}},{key:"show",value:function(){return this.css("display",""),this}},{key:"hide",value:function(){return this.css("display","none"),this}},{key:"offset",value:function(){return{left:this.get(0).offsetLeft,top:this.get(0).offsetTop}}},{key:"scrollLeft",value:function(){return this.get(0).scrollLeft}},{key:"scrollTop",value:function(){return this.get(0).scrollTop}},{key:"click",value:function(){return this.each(function(t){t.click()}),this}}]),t}();(i=function(t,e){return t instanceof o?t:new o(t,e)})["class"]=o,e.exports=i},{}],6:[function(t,e,n){var i=t("./dom.js"),o=t("./util.js"),r=t("./popup.js"),s=function(t){function e(t){var n;if(_classCallCheck(this,e),t)return _possibleConstructorReturn(n=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t)));(n=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,'<li class="item mark">\n\t\t\t<span class="status">\n\t\t\t\t<i class="js-status icon icon-show" title="隐藏"></i>\n\t\t\t</span>\n\t\t\t\n\t\t\t<p class="js-name single-line" title="分组名">分组名</p>\n\t\t\t<input class="js-input edit-text" autocomplete="off" style="display: none;"/>\n\n\t\t\t<span class="ctrl">\n\t\t\t\t<i class="js-edit icon icon-edit" title="重命名"></i>\n\t\t\t\t<i class="js-submit icon icon-submit" title="确定" style="display: none;"></i>\n\t\t\t\t<i class="js-delete icon icon-delete" title="删除"></i>\n\t\t\t</span>\n\t\t</li>'))).$areas=i();var o=n.find(".js-name");o.on("click",function(){n.addClass("active").siblings().removeClass("active"),n.emit("choose")});var s=n.find(".js-status");s.on("click",function(){n.isShow=!s.hasClass("icon-show")});var a=n.find(".js-input"),u=n.find(".js-edit"),c=n.find(".js-submit");return u.on("click",function(){u.hide(),c.show(),o.hide(),a.show().value(o.text())}),c.on("click",function(){var t=a.value();!1===n.emit("rename",t)&&(t=o.text()),u.show(),c.hide(),a.hide(),o.show()}),a.on("blur",function(){return c.click()}),n.find(".js-delete").on("click",function(){r({content:"是否确认删除分组，<br />删除后将不可恢复。",confirm:function(){!1!==n.emit("delete")&&(_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",n).call(n),n.$areas.remove())}})}),_possibleConstructorReturn(n)}return _inherits(e,i["class"]),_createClass(e,[{key:"forEach",value:function(t){_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"each",this).call(this,function(n){t(new e(n))})}},{key:"eq",value:function(t){return new e(_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"eq",this).call(this,t))}},{key:"remove",value:function(){this.$areas.remove(),_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this)}},{key:"append",value:function(t){var e=this;return o.isArea(t)?(t.on("delete",function(){e.$areas.splice(e.$areas.index(t))},!0,!1),this.$areas.push(t),this):this}},{key:"name",set:function(t){this.data("name",t).find(".js-name").attr("title",t).text(t)},get:function(){return this.size()>1?"分组集":this.data("name")}},{key:"isShow",set:function(t){var e=this.find(".js-status");t?(this.$areas.show(),e.addClass("icon-show").removeClass("icon-hide").attr("title","显示")):(this.$areas.hide(),e.addClass("icon-hide").removeClass("icon-show").attr("title","显示")),this.data("isShow",t)},get:function(){var t=this.data("isShow");return t===undefined||t}},{key:"$areas",set:function(t){this.data("$areas",t)},get:function(){if(this.size()>1){var t=i();return this.forEach(function(e){t.push(e.$areas)}),t}return this.data("$areas")}}]),e}();e.exports=s},{"./dom.js":5,"./popup.js":8,"./util.js":11}],7:[function(t,e,n){var i=t("./dom.js"),o=t("./util.js"),r=t("./toast.js"),s=t("./group-item.js"),a=function(t){function e(t){_classCallCheck(this,e);var n=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.$groups=new s([]),n}return _inherits(e,i["class"]),_createClass(e,[{key:"check",value:function(){if(!this.$groups.hasClass("active")&&this.$groups.size()>0){var t=this.$groups.eq(0);this.$currentGroup=t,this.emit("current",t.addClass("active"))}return this}},{key:"findByName",value:function(t){var e=null;return this.$groups.forEach(function(n){n.name===t&&(e=n)}),e}},{key:"append",value:function(t){var n=this;if(!o.isGroupItem(t))return this;for(var i=1;!t.name;i++){var s="分组"+i;this.findByName(s)||(t.name=s)}return t.on("choose",function(){n.$currentGroup=t,n.emit("current",t)},!0,!1),t.on("delete",function(){if(!(n.$groups.size()>1))return r("删除失败，至少保留一个分组","error"),!1;var e=n.$groups.index(t);-1!==e&&n.$groups.splice(e),n.check()},!0,!1),t.on("rename",function(e){var i=n.findByName(e);if(i&&!i.equals(t))return r("名称已存在","error"),!1;t.name=e,n.emit("current",n.$currentGroup)},!0,!1),_get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"append",this).call(this,t),this.$groups.push(t),this.check(),this}}]),e}();e.exports=a},{"./dom.js":5,"./group-item.js":6,"./toast.js":9,"./util.js":11}],8:[function(t,e,n){var i=t("./dom.js"),o=i("body"),r=i('<div class="popup">\n\t<div class="box">\n\t\t<div class="js-title title"></div>\n\t\t<div class="js-content content"></div>\n\t\t<div class="btns">\n\t\t\t<button class="js-cancel cancel">取消</button>\n\t\t\t<button class="js-confirm confirm ml">确定</button>\n\t\t</div>\n\t</div>\n</div>'),s=r.find(".js-title"),a=r.find(".js-content"),u=r.find(".js-cancel"),c=r.find(".js-confirm");r.on("animationend",function(){r.hasClass("fade-out")&&(r.removeClass("fade-out"),r.remove()),r.hasClass("fade-in")&&r.removeClass("fade-in")}),e.exports=function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};"string"==typeof t&&(t={content:t}),s.text(t.title||"提示"),a.html(t.content||""),t.cancelText&&u.text(t.cancelText),u.on("click",function(){if("function"==typeof t.cancel&&"false"===t.cancel())return;r.addClass("fade-out")},!0),t.confirmText&&c.text(t.confirmText),c.on("click",function(){if("function"==typeof t.confirm&&"false"===t.confirm())return;r.addClass("fade-out")},!0),o.append(r.addClass("fade-in"))}},{"./dom.js":5}],9:[function(t,e,n){var i=t("./dom.js"),o=i("body"),r=i('<div class="toast">\n\t<i class="js-icon icon"></i>\n\t<span class="js-text"></span>\n</div>'),s=r.find(".js-icon"),a=r.find(".js-text");r.on("animationend",function(){r.remove()}),e.exports=function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"prompt";r.removeClass("success").removeClass("error").removeClass("prompt").addClass(e),s.removeClass("icon-success").removeClass("icon-error").removeClass("icon-prompt").addClass("icon-"+e),a.text(t),o.append(r)}},{"./dom.js":5}],10:[function(t,e,n){var i=t("./dom.js"),o=t("./toast.js"),r=function(t){function e(t){_classCallCheck(this,e);var n=_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.on("change",function(){var t=n.data("files",undefined,!0)[0];if(!t)return n.value(""),!1;var e=new FileReader;e.onload=function(t){n.emit("success",t.target.result,t)},e.onerror=function(t){n.emit("error",t)},n.isText?e.readAsText(t):e.readAsDataURL(t),n.value("")}),n.onerror=function(){return o((n.options.name||"文件")+"读取错误","error")},n}return _inherits(e,i["class"]),_createClass(e,[{key:"open",value:function(t){return this.options=t||{},this.options.accept?this.attr("accept",t.accept):this.removeAttr("accept"),this.isText=!!this.options.isText,this.click(),this}},{key:"success",value:function(t){return this.onsuccess=t,this}},{key:"error",value:function(t){return this.onerror=t,this}}]),e}();e.exports=r},{"./dom.js":5,"./toast.js":9}],11:[function(t,e,n){var i=t("./uploader.js"),o=t("./canvas.js"),r=t("./group-list.js"),s=t("./group-item.js"),a=t("./area.js"),u=t("./dom.js")["class"];e.exports.toFloat=function(t){if("string"==typeof t){var e=t.match(/\d+/g);return parseFloat(e&&(e.length>1?e:e[0]))}},e.exports.toString=function(t,e){return t+e},e.exports.isCanvas=function(t){return t instanceof o},e.exports.isGroupList=function(t){return t instanceof r},e.exports.isGroupItem=function(t){return t instanceof s},e.exports.isUploader=function(t){return t instanceof i},e.exports.isArea=function(t){return t instanceof a},e.exports.isDOM=function(t){return t instanceof u}},{"./area.js":3,"./canvas.js":4,"./dom.js":5,"./group-item.js":6,"./group-list.js":7,"./uploader.js":10}]},{},[1]);
//# sourceMappingURL=index.js.map