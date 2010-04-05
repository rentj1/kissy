/*
Copyright 2010, KISSY UI Library v1.0.5
MIT Licensed
build: 521 Apr 5 12:27
*/
(function(h,p,m){if(h[p]===m)h[p]={};p=h[p];var q=h.document,i=function(e,c,o,k){if(!c||!e)return e;if(o===m)o=true;var a,d,b;if(k&&(b=k.length))for(a=0;a<b;a++){d=k[a];if(d in c)if(o||!(d in e))e[d]=c[d]}else for(d in c)if(o||!(d in e))e[d]=c[d];return e},j=false,l=[],t=false;i(p,{version:"1.0.5",_init:function(){this.Env={mods:{}};this.Config={debug:true}},add:function(e,c){this.Env.mods[e]={name:e,fn:c};c(this);return this},ready:function(e){t||this._bindReady();j?e.call(h,this):l.push(e);return this},
_bindReady:function(){var e=this,c=q.documentElement.doScroll,o=c?"onreadystatechange":"DOMContentLoaded";t=true;if(q.attachEvent){if(h!=h.top){var k=function(){if(q.readyState==="complete"){q.detachEvent(o,k);e._fireReady()}};q.attachEvent(o,k)}else{var a=function(){try{c("left");e._fireReady()}catch(b){setTimeout(a,1)}};a()}h.attachEvent("onload",function(){e._fireReady()})}else{var d=function(){q.removeEventListener(o,d,false);e._fireReady()};q.addEventListener(o,d,false)}},_fireReady:function(){if(!j){j=
true;if(l){for(var e,c=0;e=l[c++];)e.call(h,this);l=null}}},mix:i,merge:function(){var e=arguments,c={},o,k=e.length;for(o=0;o<k;++o)i(c,e[o]);return c},extend:function(e,c,o,k){if(!c||!e)return e;var a=Object.prototype,d=c.prototype,b=function(f){function g(){}g.prototype=f;return new g}(d);e.prototype=b;b.constructor=e;e.superclass=d;if(c!==Object&&d.constructor===a.constructor)d.constructor=c;o&&i(b,o);k&&i(e,k);return e},augment:function(e,c,o,k){return i(e.prototype,c.prototype,o,k)},weave:function(e,
c,o,k){var a=[o[k],e];c==="before"&&a.reverse();o[k]=function(){for(var d=0,b;d<2;++d)b=a[d].apply(this,arguments);return b};return this},app:function(e){var c=h[e]||{};i(c,this,true,["_init","add","namespace"]);c._init();return h[e]=c},namespace:function(){var e=arguments,c=e.length,o=null,k,a,d;for(k=0;k<c;++k){d=(""+e[k]).split(".");o=this;for(a=h[d[0]]===o?1:0;a<d.length;++a)o=o[d[a]]=o[d[a]]||{}}return o},log:function(e,c,o){if(this.Config.debug){o&&(e=o+": "+e);if(h.console!==m&&console.log)console[c&&
console[c]?c:"log"](e)}return this},error:function(e){throw e;},now:function(){return(new Date).getTime()}});p._init()})(window,"KISSY");
KISSY.add("lang",function(h){function p(c){var o=typeof c;return c===null|(o!=="object"&&o!=="function")}var m=Array.prototype,q=m.forEach,i=m.indexOf,j=m.slice,l=/^\s+|\s+$/g,t=/^(\w+)\[\]$/,e=Object.prototype.toString;h.mix(h,{each:q?function(c,o,k){q.call(c,o,k);return this}:function(c,o,k){var a=c&&c.length||0,d;for(d=0;d<a;++d)o.call(k||this,c[d],d,c);return this},trim:String.prototype.trim?function(c){return(c||"").trim()}:function(c){return(c||"").replace(l,"")},isEmptyObject:function(c){for(var o in c)return false;
return true},isFunction:function(c){return e.call(c)==="[object Function]"},isArray:function(c){return e.call(c)==="[object Array]"},inArray:i?function(c,o){return i.call(o,c)!==-1}:function(c,o){for(var k=0,a=o.length;k<a;++k)if(o[k]===c)return true;return false},makeArray:function(c){if(c===null)return[];if(h.isArray(c))return c;if(typeof c.length!=="number"||typeof c==="string"||h.isFunction(c))return[c];if(c.item&&h.UA.ie){for(var o=[],k=0,a=c.length;k<a;++k)o[k]=c[k];return o}return j.call(c)},
param:function(c){if(typeof c!=="object")return"";var o=[],k,a;for(k in c){a=c[k];if(p(a))o.push(k,"=",a+"","&");else if(h.isArray(a)&&a.length)for(var d=0,b=a.length;d<b;++d)p(a[d])&&o.push(k+"[]=",a[d]+"","&")}o.pop();return encodeURI(o.join(""))},unparam:function(c,o){if(typeof c!=="string"||(c=decodeURI(h.trim(c))).length===0)return{};var k={};c=c.split(o||"&");for(var a,d,b=0,f=c.length;b<f;++b){a=c[b].split("=");o=a[0];a=a[1]||"";if((d=o.match(t))&&d[1]){k[d[1]]=k[d[1]]||[];k[d[1]].push(a)}else k[o]=
a}return k}})});
KISSY.add("ua",function(h){var p=navigator.userAgent,m,q={ie:0,gecko:0,firefox:0,opera:0,webkit:0,safari:0,chrome:0,mobile:""},i=function(j){var l=0;return parseFloat(j.replace(/\./g,function(){return l++===0?".":""}))};if((m=p.match(/AppleWebKit\/([\d.]*)/))&&m[1]){q.webkit=i(m[1]);if((m=p.match(/Chrome\/([\d.]*)/))&&m[1])q.chrome=i(m[1]);else if((m=p.match(/\/([\d.]*) Safari/))&&m[1])q.safari=i(m[1]);if(/ Mobile\//.test(p))q.mobile="Apple";else if(m=p.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))q.mobile=m[0]}else if((m=
p.match(/Opera\/.* Version\/([\d.]*)/))&&m[1]){q.opera=i(m[1]);if(p.match(/Opera Mini[^;]*/))q.mobile=m[0]}else if((m=p.match(/MSIE\s([^;]*)/))&&m[1])q.ie=i(m[1]);else if(m=p.match(/Gecko/)){q.gecko=1;if((m=p.match(/rv:([\d.]*)/))&&m[1])q.gecko=i(m[1]);if((m=p.match(/Firefox\/([\d.]*)/))&&m[1])q.firefox=i(m[1])}h.UA=q});
KISSY.add("json",function(h){var p=window.JSON;h.JSON={parse:function(m){if(typeof m!=="string"||!m)return null;m=h.trim(m);if(/^[\],:{}\s]*$/.test(m.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return(p||{}).parse?p.parse(m):(new Function("return "+m))();else jQuery.error("Invalid JSON: "+m)}}});
KISSY.add("selector",function(h,p){function m(f,g,n){var s,r=[],u,v;if(typeof f===o){f=h.trim(f);if(d.test(f)){if(g=i(f.slice(1)))r=[g]}else if(s=b.exec(f)){u=s[1];v=s[2];s=s[3];if(g=u?i(u):q(g))if(s){if(!u||f.indexOf(k)!==-1)r=l(s,v,g)}else if(v)r=j(g,v)}else if(f.indexOf(",")>-1)if(c.querySelectorAll)r=c.querySelectorAll(f);else{u=f.split(",");v=[];r=0;for(f=u.length;r<f;++r)v=v.concat(m(u[r],g));r=t(v)}}else if(f&&f.nodeType)r=[f];else if(f&&f.item)r=f;if(r.item)r=h.makeArray(r);n||e(r);return r}
function q(f){if(f===p)f=c;else if(typeof f===o&&d.test(f))f=i(f.slice(1));else if(f&&f.nodeType!==1&&f.nodeType!==9)f=null;return f}function i(f){return c.getElementById(f)}function j(f,g){return f.getElementsByTagName(g)}function l(f,g,n){n=f=n.getElementsByClassName(f);var s=0,r=0,u=f.length,v;if(g&&g!==a){n=[];for(g=g.toUpperCase();s<u;++s){v=f[s];if(v.tagName===g)n[r++]=v}}return n}function t(f){var g=false;f.sort(function(s,r){s=s.sourceIndex-r.sourceIndex;if(s===0)g=true;return s});if(g)for(var n=
1;n<f.length;n++)f[n]===f[n-1]&&f.splice(n--,1);return f}function e(f){f.each=function(g,n){h.each(f,g,n)}}var c=document,o="string",k=" ",a="*",d=/^#[\w-]+$/,b=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var f=c.createElement("div");f.appendChild(c.createComment(""));if(f.getElementsByTagName(a).length>0)j=function(g,n){g=g.getElementsByTagName(n);if(n===a){n=[];for(var s=0,r=0,u;u=g[s++];)if(u.nodeType===1)n[r++]=u;g=n}return g}})();c.getElementsByClassName||(l=c.querySelectorAll?
function(f,g,n){return n.querySelectorAll((g?g:"")+"."+f)}:function(f,g,n){g=n.getElementsByTagName(g||a);n=[];var s=0,r=0,u=g.length,v,w;for(f=k+f+k;s<u;++s){v=g[s];if((w=v.className)&&(k+w+k).indexOf(f)>-1)n[r++]=v}return n});h.query=m;h.get=function(f,g){return m(f,g,true)[0]||null}});
KISSY.add("dom-base",function(h,p){function m(g,n){return n&&n.nodeName.toUpperCase()===g.toUpperCase()}function q(g,n){var s=null,r;if(g&&(g.push||g.item)&&g[0]){n=n||g[0].ownerDocument;s=n.createDocumentFragment();if(g.item)g=h.makeArray(g);n=0;for(r=g.length;n<r;++n)s.appendChild(g[n])}else h.error("unable to convert "+g+" to fragment");return s}var i=document,j=i.documentElement.textContent!==p?"textContent":"innerText",l=h.UA,t=l.ie,e=t&&t<8,c={readonly:"readOnly"},o=/href|src|style/,k=/href|src|colspan|rowspan/,
a=/\r/g,d=/radio|checkbox/,b=i.createElement("DIV"),f=/^[a-z]+$/i;e&&h.mix(c,{"for":"htmlFor","class":"className"});h.DOM={query:h.query,get:h.get,attr:function(g,n,s){if(!g||g.nodeType!==1)return p;var r;n=n.toLowerCase();n=c[n]||n;if(s===p){if(o.test(n)){if(n==="style")r=g.style.cssText}else r=g[n];if(r===p)r=g.getAttribute(n);if(e&&k.test(n))r=g.getAttribute(n,2);return r===null?p:r}if(n==="style")g.style.cssText=s;else g.setAttribute(n,""+s)},removeAttr:function(g,n){g&&g.nodeType===1&&g.removeAttribute(n)},
val:function(g,n){if(!g||g.nodeType!==1)return p;if(n===p){if(m("option",g))return(g.attributes.value||{}).specified?g.value:g.text;if(m("select",g)){n=g.selectedIndex;var s=g.options;if(n<0)return null;else if(g.type==="select-one")return h.DOM.val(s[n]);g=[];n=0;for(var r=s.length;n<r;++n)s[n].selected&&g.push(h.DOM.val(s[n]));return g}if(l.webkit&&d.test(g.type))return g.getAttribute("value")===null?"on":g.value;return(g.value||"").replace(a,"")}if(m("select",g)){s=h.makeArray(n);var u=g.options,
v;n=0;for(r=u.length;n<r;++n){v=u[n];v.selected=h.inArray(h.DOM.val(v),s)}if(!s.length)g.selectedIndex=-1}else g.value=n},css:function(){h.error("not implemented")},text:function(g,n){if(n===p)return(g||{})[j]||"";if(g)g[j]=n},html:function(){h.error("not implemented")},create:function(g,n){if(typeof g==="string")g=h.trim(g);if(f.test(g))return(n||i).createElement(g);var s=null;s=n?n.createElement("DIV"):b;s.innerHTML=g;g=s.childNodes;return s=g.length===1?g[0].parentNode.removeChild(g[0]):q(g,n||
i)}}});KISSY.add("dom-class",function(h,p){h.mix(h.DOM,{hasClass:function(j,l){if(!l||!j.className)return false;return(" "+j.className+" ").indexOf(" "+l+" ")>-1},addClass:function(j,l){if(l)m(j,l)||(j.className+=" "+l)},removeClass:function(j,l){if(m(j,l)){j.className=(" "+j.className+" ").replace(" "+l+" "," ");m(j,l)&&i(j,l)}},replaceClass:function(j,l,t){i(j,l);q(j,t)},toggleClass:function(j,l,t){(t!==p?t:!m(j,l))?q(j,l):i(j,l)}});var m=h.DOM.hasClass,q=h.DOM.addClass,i=h.DOM.removeClass});
KISSY.add("event",function(h,p){function m(b){var f=-1;if(b.nodeType===3||b.nodeType===8)return f;if(b.nodeType)f=j.attr(b,o);else if(b.isCustomEventTarget)f=b.eventTargetId;return f}function q(b,f){if(b.nodeType)j.attr(b,o,f);else if(b.isCustomEventTarget)b.eventTargetId=f}function i(b){if(b.nodeType)j.removeAttr(b,o);else if(b.isCustomEventTarget)b.eventTargetId=p}var j=h.DOM,l=window,t=document,e=t.addEventListener?function(b,f,g){b.addEventListener&&b.addEventListener(f,g,false)}:function(b,f,
g){b.attachEvent&&b.attachEvent("on"+f,g)},c=t.removeEventListener?function(b,f,g){b.removeEventListener&&b.removeEventListener(f,g,false)}:function(b,f,g){b.detachEvent&&b.detachEvent("on"+f,g)},o="data-ks-event-guid",k=h.now(),a={},d={special:{},add:function(b,f,g){var n=m(b),s,r;if(!(n===-1||!f||!h.isFunction(g))){if(!n){q(b,n=k++);a[n]={target:b,events:{}}}r=a[n].events;s=!b.isCustomEventTarget&&d.special[f]||{};if(!r[f]){n=function(u){if(!u||!u.fixed)u=new h.EventObject(b,u,f);s.setup&&s.setup(u);
return(s.handle||d._handle)(b,u,r[f].listeners)};r[f]={handle:n,listeners:[]};if(b.isCustomEventTarget)b._addEvent&&b._addEvent(f,n);else e(b,s.fix||f,n)}r[f].listeners.push(g)}},remove:function(b,f,g){var n=m(b),s,r,u,v,w,x;if(n!==-1)if(n&&(s=a[n]))if(s.target===b){s=s.events||{};if(r=s[f]){u=r.listeners;w=u.length;if(h.isFunction(g)&&w&&h.inArray(g,u)){x=[];for(v=0;v<w;++v)g!==u[v]&&x.push(u[v]);w=x.length}if(g===p||w===0){b.isCustomEventTarget||c(b,f,r.handle);delete a[n].type}}if(f===p||h.isEmptyObject(s)){for(f in s)d.remove(b,
f);delete a[n];i(b)}}},_handle:function(b,f,g){for(var n,s=0,r=g.length;s<r;++s){n=g[s].call(b,f);if(f.isImmediatePropagationStopped)break;n===false&&f.halt()}return n},_getCache:function(b){return a[b]},_simpleAdd:e,_simpleRemove:c};h.Event=d;l.attachEvent&&!l.addEventListener&&l.attachEvent("onunload",function(){var b,f;for(b in a)if(f=a[b].target)try{d.remove(f)}catch(g){}})});
KISSY.add("event-object",function(h,p){function m(j,l,t){this.currentTarget=j;this.originalEvent=l||{};if(l){this.type=l.type;this._fix()}else{this.type=t;this.target=j}this.fixed=true}var q=document,i="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");
h.mix(m.prototype,{_fix:function(){for(var j=this.originalEvent,l=i.length,t;l;){t=i[--l];this[t]=j[t]}if(!this.target)this.target=this.srcElement||q;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===p&&this.clientX!==p){j=q.documentElement;l=q.body;this.pageX=this.clientX+(j&&j.scrollLeft||l&&l.scrollLeft||0)-(j&&j.clientLeft||l&&l.clientLeft||0);
this.pageY=this.clientY+(j&&j.scrollTop||l&&l.scrollTop||0)-(j&&j.clientTop||l&&l.clientTop||0)}if(this.which===p)this.which=this.charCode!==p?this.charCode:this.keyCode;if(this.metaKey===p)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==p)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var j=this.originalEvent;if(j.preventDefault)j.preventDefault();else j.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var j=this.originalEvent;
if(j.stopPropagation)j.stopPropagation();else j.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var j=this.originalEvent;j.stopImmediatePropagation?j.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(j){j?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});h.EventObject=m});
KISSY.add("event-target",function(h,p){var m=h.Event;h.EventTarget={eventTargetId:p,isCustomEventTarget:true,fire:function(q){(q=((m._getCache(this.eventTargetId||-1)||{}).events||{})[q])&&h.isFunction(q.handle)&&q.handle()},on:function(q,i){m.add(this,q,i)},detach:function(q,i){m.remove(this,q,i)}}});
KISSY.add("event-mouseenter",function(h){var p=h.Event;h.UA.ie||h.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(m){p.special[m.name]={fix:m.fix,setup:function(q){q.type=m.name},handle:function(q,i,j){var l=i.relatedTarget;try{for(;l&&l!==q;)l=l.parentNode;l!==q&&p._handle(q,i,j)}catch(t){}}}})});
KISSY.add("node",function(h){function p(i,j,l){var t;if(!(this instanceof p))return new p(i,j,l);if(!i)return null;if(i.nodeType)t=i;else if(typeof i==="string")t=m.create(i,l);j&&h.error("not implemented");this[0]=t}var m=h.DOM,q=p.prototype;h.each(["attr","removeAttr"],function(i){q[i]=function(j,l){var t=this[0];if(l===undefined)return m[i](t,j);else{m[i](t,j,l);return this}}});h.each(["val","text"],function(i){q[i]=function(j){var l=this[0];if(j===undefined)return m[i](l);else{m[i](l,j);return this}}});
h.each(["hasClass","addClass","removeClass","replaceClass","toggleClass"],function(i){q[i]=function(){var j=m[i].apply(m,[this[0]].concat(h.makeArray(arguments)));return typeof j==="boolean"?j:this}});h.mix(q,h.EventTarget);q._addEvent=function(i,j){h.Event._simpleAdd(this[0],i,j)};delete q.fire;h.mix(q,{one:function(i){return h.one(i,this[0])},all:function(i){return h.all(i,this[0])}});h.one=function(i,j){return new p(h.get(i,j))};h.Node=p});
KISSY.add("nodelist",function(h){function p(q){if(!(this instanceof p))return new p(q);m.apply(this,q||[])}var m=Array.prototype.push;h.mix(p.prototype,{length:0,each:function(q,i){for(var j=this.length,l=0,t;l<j;++l){t=new h.Node(this[l]);q.call(i||t,t,l,this)}return this}});h.all=function(q,i){return new p(h.query(q,i,true))};h.NodeList=p});
KISSY.add("cookie",function(h){function p(j){return typeof j==="string"&&j!==""}var m=document,q=encodeURIComponent,i=decodeURIComponent;h.Cookie={get:function(j){var l;if(p(j))if(j=m.cookie.match("(?:^| )"+j+"(?:(?:=([^;]*))|;|$)"))l=j[1]?i(j[1]):"";return l},set:function(j,l,t,e,c,o){l=q(l);var k=t;if(typeof k==="number"){k=new Date;k.setTime(k.getTime()+t*864E5)}if(k instanceof Date)l+="; expires="+k.toUTCString();if(p(e))l+="; domain="+e;if(p(c))l+="; path="+c;if(o)l+="; secure";m.cookie=j+"="+
l},remove:function(j){this.set(j,"",0)}}});KISSY.add("ajax",function(h){var p=document,m=h.UA;h.Ajax={request:function(){h.error("not implemented")},getScript:function(q,i,j){var l=p.getElementsByTagName("head")[0]||p.documentElement,t=p.createElement("script");t.src=q;if(j)t.charset=j;t.async=true;if(h.isFunction(i))if(m.ie)t.onreadystatechange=function(){var e=t.readyState;if(e==="loaded"||e==="complete"){t.onreadystatechange=null;i()}};else t.onload=i;l.appendChild(t)}}});
KISSY.add("datalazyload",function(h,p){function m(k,a){if(!(this instanceof m))return new m(k,a);if(a===p){a=k;k=[e]}l.isArray(k)||(k=[i.get(k)||e]);this.containers=k;this.config=h.merge(o,a||{});this.callbacks={els:[],fns:[]};this._init()}var q=YAHOO.util,i=q.Dom,j=q.Event,l=YAHOO.lang,t=window,e=document,c={AUTO:"auto",MANUAL:"manual"},o={mod:c.MANUAL,diff:"default",placeholder:"http://a.tbcdn.cn/kissy/1.0.4/build/datalazyload/dot.gif"};h.mix(m.prototype,{_init:function(){this.threshold=this._getThreshold();
this._filterItems();this._getItemsLength()&&this._initLoadEvent()},_initLoadEvent:function(){function k(){d||(d=setTimeout(function(){a();d=null},100))}function a(){b._loadItems();if(b._getItemsLength()===0){j.removeListener(t,"scroll",k);j.removeListener(t,"resize",k)}}var d,b=this;j.on(t,"scroll",k);j.on(t,"resize",function(){b.threshold=b._getThreshold();k()});b._getItemsLength()&&j.onDOMReady(function(){a()})},_filterItems:function(){var k=this.containers,a=this.threshold,d=this.config.placeholder,
b=this.config.mod===c.MANUAL,f,g,n,s,r,u,v,w=[],x=[];f=0;for(g=k.length;f<g;++f){n=k[f].getElementsByTagName("img");s=0;for(r=n.length;s<r;++s){u=n[s];v=u.getAttribute("data-lazyload-src");if(b){if(v){u.src=d;w.push(u)}}else if(i.getY(u)>a&&!v){u.setAttribute("data-lazyload-src",u.src);u.src=d;w.push(u)}}n=k[f].getElementsByTagName("textarea");s=0;for(r=n.length;s<r;++s){u=n[s];i.hasClass(u,"ks-datalazyload")&&x.push(u)}}this.images=w;this.areaes=x},_loadItems:function(){this._loadImgs();this._loadAreaes();
this._fireCallbacks()},_loadImgs:function(){var k=this.images,a=this.threshold+i.getDocumentScrollTop(),d,b,f=[];for(d=0;b=k[d++];)i.getY(b)<=a?this._loadImgSrc(b):f.push(b);this.images=f},_loadImgSrc:function(k,a){a=a||"data-lazyload-src";var d=k.getAttribute(a);if(d&&k.src!=d){k.src=d;k.removeAttribute(a)}},_loadAreaes:function(){var k=this.areaes,a=this.threshold+i.getDocumentScrollTop(),d,b,f,g=[];for(d=0;b=k[d++];){f=b.parentNode;i.getY(f)<=a?this._loadDataFromArea(f,b):g.push(b)}this.areaes=
g},_loadDataFromArea:function(k,a){var d=document.createElement("DIV");d.innerHTML=a.value;a.style.display="none";a.className="";k.appendChild(d)},_fireCallbacks:function(){var k=this.callbacks,a=k.els,d=k.fns,b=this.threshold+i.getDocumentScrollTop(),f,g,n,s=[],r=[];for(f=0;(g=a[f])&&(n=d[f++]);)if(i.getY(g)<=b)n.call(g);else{s.push(g);r.push(n)}k.els=s;k.fns=r},addCallback:function(k,a){if((k=i.get(k))&&typeof a==="function"){this.callbacks.els.push(k);this.callbacks.fns.push(a)}},_getThreshold:function(){var k=
this.config.diff,a=i.getViewportHeight();return k==="default"?2*a:a+k},_getItemsLength:function(){return this.images.length+this.areaes.length+this.callbacks.els.length},loadCustomLazyData:function(k,a,d){var b=this,f,g;l.isArray(k)||(k=[i.get(k)]);h.each(k,function(n){switch(a){case "textarea-data":if((f=n.getElementsByTagName("textarea")[0])&&i.hasClass(f,d||"ks-datalazyload-custom"))b._loadDataFromArea(n,f);break;default:g=n.nodeName==="IMG"?[n]:n.getElementsByTagName("img");n=0;for(var s=g.length;n<
s;n++)b._loadImgSrc(g[n],d||"data-lazyload-src-custom")}})}});h.mix(m,m.prototype,true,["loadCustomLazyData","_loadImgSrc","_loadDataFromArea"]);h.DataLazyload=m});
KISSY.add("suggest",function(h,p){function m(a,d,b){if(!(this instanceof m))return new m(a,d,b);this.textInput=i.get(a);this.dataSource=d;this.JSONDataSource=l.isObject(d)?d:null;this.returnedData=null;this.config=l.merge(k,b||{});this.container=null;this.queryParams=this.query="";this._timer=null;this._isRunning=false;this.dataScript=null;this._dataCache={};this._latestScriptTime="";this._onKeyboardSelecting=this._scriptDataIsOut=false;this.selectedItem=null;this._init()}var q=YAHOO.util,i=q.Dom,
j=q.Event,l=YAHOO.lang,t=window,e=document,c=e.getElementsByTagName("head")[0],o=YAHOO.env.ua.ie,k={containerClass:"",containerWidth:"auto",resultFormat:"Լ%result%�����",showCloseBtn:false,closeBtnText:"�ر�",useShim:o===6,timerDelay:200,autoFocus:false,submitFormOnClickSelect:true};h.mix(m.prototype,{_init:function(){this._initTextInput();this._initContainer();this.config.useShim&&this._initShim();this._initStyle();this.createEvent("beforeDataRequest");this.createEvent("onDataReturn");this.createEvent("beforeShow");
this.createEvent("onItemSelect");this._initResizeEvent()},_initTextInput:function(){var a=this;a.textInput.setAttribute("autocomplete","off");j.on(a.textInput,"blur",function(){a.stop();a.hide()});a.config.autoFocus&&a.textInput.focus();var d=0;j.on(a.textInput,"keydown",function(b){b=b.keyCode;switch(b){case 27:a.hide();a.textInput.value=a.query;break;case 13:a.textInput.blur();a._onKeyboardSelecting&&a.textInput.value==a._getSelectedItemKey()&&a.fireEvent("onItemSelect",a.textInput.value);a._submitForm();
break;case 40:case 38:if(d++==0){a._isRunning&&a.stop();a._onKeyboardSelecting=true;a.selectItem(b==40)}else if(d==3)d=0;break}if(b!=40&&b!=38){a._isRunning||a.start();a._onKeyboardSelecting=false}});j.on(a.textInput,"keyup",function(){d=0})},_initContainer:function(){var a=e.createElement("div"),d=this.config.containerClass;a.className="suggest-container";if(d)a.className+=" "+d;a.style.position="absolute";a.style.visibility="hidden";this.container=a;this._setContainerRegion();this._initContainerEvent();
e.body.insertBefore(a,e.body.firstChild)},_setContainerRegion:function(){var a=i.getRegion(this.textInput),d=a.left,b=a.right-d-2;b=b>0?b:0;if(e.documentMode===7&&(o===7||o===8))d-=2;else YAHOO.env.ua.gecko&&d++;this.container.style.left=d+"px";this.container.style.top=a.bottom+"px";this.container.style.width=this.config.containerWidth=="auto"?b+"px":this.config.containerWidth},_initContainerEvent:function(){var a=this;j.on(a.container,"mousemove",function(b){b=j.getTarget(b);if(b.nodeName!="LI")b=
i.getAncestorByTagName(b,"li");if(i.isAncestor(a.container,b))if(b!=a.selectedItem){a._removeSelectedItem();a._setSelectedItem(b)}});var d=null;a.container.onmousedown=function(b){b=b||t.event;d=b.target||b.srcElement;a.textInput.onbeforedeactivate=function(){t.event.returnValue=false;a.textInput.onbeforedeactivate=null};return false};j.on(a.container,"mouseup",function(b){if(a._isInContainer(j.getXY(b))){b=j.getTarget(b);if(b==d)if(b.className=="suggest-close-btn")a.hide();else{if(b.nodeName!="LI")b=
i.getAncestorByTagName(b,"li");if(i.isAncestor(a.container,b)){a._updateInputFromSelectItem(b);a.fireEvent("onItemSelect",a.textInput.value);a.textInput.blur();a._submitForm()}}}})},_submitForm:function(){if(this.config.submitFormOnClickSelect){var a=this.textInput.form;if(a){if(e.createEvent){var d=e.createEvent("MouseEvents");d.initEvent("submit",true,false);a.dispatchEvent(d)}else e.createEventObject&&a.fireEvent("onsubmit");a.submit()}}},_isInContainer:function(a){var d=i.getRegion(this.container);
return a[0]>=d.left&&a[0]<=d.right&&a[1]>=d.top&&a[1]<=d.bottom},_initShim:function(){var a=e.createElement("iframe");a.src="about:blank";a.className="suggest-shim";a.style.position="absolute";a.style.visibility="hidden";a.style.border="none";this.container.shim=a;this._setShimRegion();e.body.insertBefore(a,e.body.firstChild)},_setShimRegion:function(){var a=this.container,d=a.shim;if(d){d.style.left=parseInt(a.style.left)-2+"px";d.style.top=a.style.top;d.style.width=parseInt(a.style.width)+2+"px"}},
_initStyle:function(){var a=i.get("suggest-style");if(!a){a=e.createElement("style");a.id="suggest-style";c.appendChild(a);if(a.styleSheet)a.styleSheet.cssText=".suggest-container{background:white;border:1px solid #999;z-index:99999}.suggest-shim{z-index:99998}.suggest-container li{color:#404040;padding:1px 0 2px;font-size:12px;line-height:18px;float:left;width:100%}.suggest-container li.selected{background-color:#39F;cursor:default}.suggest-key{float:left;text-align:left;padding-left:5px}.suggest-result{float:right;text-align:right;padding-right:5px;color:green}.suggest-container li.selected span{color:#FFF;cursor:default}.suggest-bottom{padding:0 5px 5px}.suggest-close-btn{float:right}.suggest-container li,.suggest-bottom{overflow:hidden;zoom:1;clear:both}.suggest-container{*margin-left:2px;_margin-left:-2px;_margin-top:-3px}";
else a.appendChild(e.createTextNode(".suggest-container{background:white;border:1px solid #999;z-index:99999}.suggest-shim{z-index:99998}.suggest-container li{color:#404040;padding:1px 0 2px;font-size:12px;line-height:18px;float:left;width:100%}.suggest-container li.selected{background-color:#39F;cursor:default}.suggest-key{float:left;text-align:left;padding-left:5px}.suggest-result{float:right;text-align:right;padding-right:5px;color:green}.suggest-container li.selected span{color:#FFF;cursor:default}.suggest-bottom{padding:0 5px 5px}.suggest-close-btn{float:right}.suggest-container li,.suggest-bottom{overflow:hidden;zoom:1;clear:both}.suggest-container{*margin-left:2px;_margin-left:-2px;_margin-top:-3px}"))}},
_initResizeEvent:function(){var a=this,d;j.on(t,"resize",function(){d&&clearTimeout(d);d=setTimeout(function(){a._setContainerRegion();a._setShimRegion()},50)})},start:function(){var a=this;m.focusInstance=a;a._timer=setTimeout(function(){a.updateContent();a._timer=setTimeout(arguments.callee,a.config.timerDelay)},a.config.timerDelay);a._isRunning=true},stop:function(){m.focusInstance=null;clearTimeout(this._timer);this._isRunning=false},show:function(){if(!this.isVisible()){var a=this.container,
d=a.shim;a.style.visibility="";if(d){if(!d.style.height){a=i.getRegion(a);d.style.height=a.bottom-a.top-2+"px"}d.style.visibility=""}}},hide:function(){if(this.isVisible()){var a=this.container,d=a.shim;if(d)d.style.visibility="hidden";a.style.visibility="hidden"}},isVisible:function(){return this.container.style.visibility!="hidden"},updateContent:function(){if(this._needUpdate()){this._updateQueryValueFromInput();var a=this.query;if(l.trim(a).length)if(this._dataCache[a]!==p){this.returnedData=
"using cache";this._fillContainer(this._dataCache[a]);this._displayContainer()}else this.JSONDataSource?this.handleResponse(this.JSONDataSource[a]):this.requestData();else{this._fillContainer("");this.hide()}}},_needUpdate:function(){return this.textInput.value!=this.query},requestData:function(){var a=this;if(!o)a.dataScript=null;if(!a.dataScript){var d=e.createElement("script");d.type="text/javascript";d.charset="utf-8";c.insertBefore(d,c.firstChild);a.dataScript=d;if(!o){var b=(new Date).getTime();
a._latestScriptTime=b;d.setAttribute("time",b);j.on(d,"load",function(){a._scriptDataIsOut=d.getAttribute("time")!=a._latestScriptTime})}}a.queryParams="q="+encodeURIComponent(a.query)+"&code=utf-8&callback=g_ks_suggest_callback";a.fireEvent("beforeDataRequest",a.query);a.dataScript.src=a.dataSource+"?"+a.queryParams},handleResponse:function(a){if(!this._scriptDataIsOut){this.returnedData=a;this.fireEvent("onDataReturn",a);this.returnedData=this.formatData(this.returnedData);var d="";a=this.returnedData.length;
if(a>0){d=e.createElement("ol");for(var b=0;b<a;++b){var f=this.returnedData[b],g=this.formatItem(f.key,f.result);g.setAttribute("key",f.key);d.appendChild(g)}d=d}this._fillContainer(d);a>0&&this.appendBottom();l.trim(this.container.innerHTML)&&this.fireEvent("beforeShow",this.container);this._dataCache[this.query]=this.container.innerHTML;this._displayContainer()}},formatData:function(a){var d=[];if(!a)return d;if(l.isArray(a.result))a=a.result;var b=a.length;if(!b)return d;for(var f,g=0;g<b;++g){f=
a[g];d[g]=l.isString(f)?{key:f}:l.isArray(f)&&f.length>=2?{key:f[0],result:f[1]}:f}return d},formatItem:function(a,d){var b=e.createElement("li"),f=e.createElement("span");f.className="suggest-key";f.appendChild(e.createTextNode(a));b.appendChild(f);if(d!==p){a=this.config.resultFormat.replace("%result%",d);if(l.trim(a)){d=e.createElement("span");d.className="suggest-result";d.appendChild(e.createTextNode(a));b.appendChild(d)}}return b},appendBottom:function(){var a=e.createElement("div");a.className=
"suggest-bottom";if(this.config.showCloseBtn){var d=e.createElement("a");d.href="javascript: void(0)";d.setAttribute("target","_self");d.className="suggest-close-btn";d.appendChild(e.createTextNode(this.config.closeBtnText));a.appendChild(d)}l.trim(a.innerHTML)&&this.container.appendChild(a)},_fillContainer:function(a){if(a.nodeType==1){this.container.innerHTML="";this.container.appendChild(a)}else this.container.innerHTML=a;this.selectedItem=null},_displayContainer:function(){h.trim(this.container.innerHTML)?
this.show():this.hide()},selectItem:function(a){var d=this.container.getElementsByTagName("li");if(d.length!=0)if(this.isVisible()){if(this.selectedItem){a=i[a?"getNextSibling":"getPreviousSibling"](this.selectedItem);if(!a)this.textInput.value=this.query}else a=d[a?0:d.length-1];this._removeSelectedItem();if(a){this._setSelectedItem(a);this._updateInputFromSelectItem()}}else this.show()},_removeSelectedItem:function(){i.removeClass(this.selectedItem,"selected");this.selectedItem=null},_setSelectedItem:function(a){i.addClass(a,
"selected");this.selectedItem=a},_getSelectedItemKey:function(){if(!this.selectedItem)return"";return this.selectedItem.getAttribute("key")},_updateQueryValueFromInput:function(){this.query=this.textInput.value},_updateInputFromSelectItem:function(){this.textInput.value=this._getSelectedItemKey(this.selectedItem)}});h.augment(m,q.EventProvider);t.g_ks_suggest_callback=function(a){m.focusInstance&&setTimeout(function(){m.focusInstance.handleResponse(a)},0)};h.Suggest=m});
KISSY.add("switchable",function(h,p){function m(e,c){c=c||{};if(!("mackupType"in c))if(c.panelCls)c.mackupType=1;else if(c.panels)c.mackupType=2;c=h.merge(m.Config,c);this.container=h.get(e);this.config=c;this.triggers=this.triggers||[];this.panels=this.panels||[];if(this.activeIndex===p)this.activeIndex=c.activeIndex;this._init()}var q=YAHOO.util,i=q.Dom,j=q.Event,l=YAHOO.lang,t=document;m.Config={mackupType:0,navCls:"ks-switchable-nav",contentCls:"ks-switchable-content",triggerCls:"ks-switchable-trigger",
panelCls:"ks-switchable-panel",triggers:[],panels:[],hasTriggers:true,triggerType:"mouse",delay:0.1,activeIndex:0,activeTriggerCls:"active",steps:1,viewSize:[]};m.Plugins=[];h.mix(m.prototype,{_init:function(){var e=this,c=e.config;e.panels.length===0&&e._parseMackup();e.createEvent("beforeSwitch");e.createEvent("onSwitch");c.hasTriggers&&e._bindTriggers();h.each(m.Plugins,function(o){o.init&&o.init(e)})},_parseMackup:function(){var e=this.container,c=this.config,o=c.hasTriggers,k,a=[],d=[];switch(c.mackupType){case 0:if(k=
h.get("."+c.navCls,e))a=i.getChildren(k);k=h.get("."+c.contentCls,e);d=i.getChildren(k);break;case 1:a=h.query("."+c.triggerCls,e);d=h.query("."+c.panelCls,e);break;case 2:a=c.triggers;d=c.panels;break}e=d.length;this.length=e/c.steps;if(o&&e>0&&a.length===0)a=this._generateTriggersMackup(this.length);if(o){c=0;for(o=a.length;c<o;c++)this.triggers.push(a[c])}for(c=0;c<e;c++)this.panels.push(d[c]);this.content=k||d[0].parentNode},_generateTriggersMackup:function(e){var c=this.config,o=t.createElement("UL"),
k,a;o.className=c.navCls;for(a=0;a<e;a++){k=t.createElement("LI");if(a===this.activeIndex)k.className=c.activeTriggerCls;k.innerHTML=a+1;o.appendChild(k)}this.container.appendChild(o);return i.getChildren(o)},_bindTriggers:function(){var e=this,c=e.config,o=e.triggers,k,a,d=o.length;for(a=0;a<d;a++)(function(b){k=o[b];j.on(k,"click",function(){e._onFocusTrigger(b)});j.on(k,"focus",function(){e._onFocusTrigger(b)});if(c.triggerType==="mouse"){j.on(k,"mouseenter",function(){e._onMouseEnterTrigger(b)});
j.on(k,"mouseleave",function(){e._onMouseLeaveTrigger(b)})}})(a)},_onFocusTrigger:function(e){if(this.activeIndex!==e){this.switchTimer&&this.switchTimer.cancel();this.switchTo(e)}},_onMouseEnterTrigger:function(e){var c=this;if(c.activeIndex!==e)c.switchTimer=l.later(c.config.delay*1E3,c,function(){c.switchTo(e)})},_onMouseLeaveTrigger:function(){this.switchTimer&&this.switchTimer.cancel()},switchTo:function(e,c){var o=this.config,k=this.triggers,a=this.panels,d=this.activeIndex,b=o.steps,f=d*b,
g=e*b;if(e===d)return this;if(!this.fireEvent("beforeSwitch",e))return this;if(o.hasTriggers)this._switchTrigger(d>-1?k[d]:null,k[e]);if(c===p)c=e>d?"forward":"forward";this._switchView(a.slice(f,f+b),a.slice(g,g+b),e,c);this.activeIndex=e;return this},_switchTrigger:function(e,c){var o=this.config.activeTriggerCls;e&&i.removeClass(e,o);i.addClass(c,o)},_switchView:function(e,c,o){i.setStyle(e,"display","none");i.setStyle(c,"display","block");this.fireEvent("onSwitch",o)},prev:function(){var e=this.activeIndex;
this.switchTo(e>0?e-1:this.length-1,"backward")},next:function(){var e=this.activeIndex;this.switchTo(e<this.length-1?e+1:0,"forward")}});h.augment(m,q.EventProvider);h.Switchable=m});
KISSY.add("switchable-autoplay",function(h){var p=YAHOO.util.Event,m=YAHOO.lang,q=h.Switchable;h.mix(q.Config,{autoplay:false,interval:5,pauseOnHover:true});q.Plugins.push({name:"autoplay",init:function(i){var j=i.config;if(j.autoplay){if(j.pauseOnHover){p.on(i.container,"mouseenter",function(){i.paused=true});p.on(i.container,"mouseleave",function(){setTimeout(function(){i.paused=false},j.interval*1E3)})}i.autoplayTimer=m.later(j.interval*1E3,i,function(){i.paused||i.switchTo(i.activeIndex<i.length-
1?i.activeIndex+1:0)},null,true)}}})});
KISSY.add("switchable-effect",function(h){var p=YAHOO.util,m=p.Dom,q=h.Switchable,i;h.mix(q.Config,{effect:"none",duration:0.5,easing:p.Easing.easeNone});q.Effects={none:function(j,l,t){m.setStyle(j,"display","none");m.setStyle(l,"display","block");t()},fade:function(j,l,t){if(j.length!==1)throw new Error("fade effect only supports steps == 1.");var e=this,c=e.config,o=j[0],k=l[0];e.anim&&e.anim.stop();m.setStyle(k,"opacity",1);e.anim=new p.Anim(o,{opacity:{to:0}},c.duration,c.easing);e.anim.onComplete.subscribe(function(){e.anim=
null;m.setStyle(k,"z-index",9);m.setStyle(o,"z-index",1);t()});e.anim.animate()},scroll:function(j,l,t,e){var c=this;j=c.config;l=j.effect==="scrollx";var o={};o[l?"left":"top"]={to:-(c.viewSize[l?0:1]*e)};c.anim&&c.anim.stop();c.anim=new p.Anim(c.content,o,j.duration,j.easing);c.anim.onComplete.subscribe(function(){c.anim=null;t()});c.anim.animate()}};i=q.Effects;i.scrollx=i.scrolly=i.scroll;q.Plugins.push({name:"effect",init:function(j){var l=j.config,t=l.effect,e=j.panels,c=l.steps,o=j.activeIndex*
c,k=o+c-1,a=e.length;j.viewSize=[l.viewSize[0]||e[0].offsetWidth*c,l.viewSize[0]||e[0].offsetHeight*c];if(t!=="none"){for(l=0;l<a;l++)e[l].style.display="block";switch(t){case "scrollx":case "scrolly":j.content.style.position="absolute";j.content.parentNode.style.position="relative";if(t==="scrollx"){m.setStyle(e,"float","left");j.content.style.width=j.viewSize[0]*(a/c)+"px"}break;case "fade":for(l=0;l<a;l++){m.setStyle(e[l],"opacity",l>=o&&l<=k?1:0);e[l].style.position="absolute";e[l].style.zIndex=
l>=o&&l<=k?9:1}break}}}});h.mix(q.prototype,{_switchView:function(j,l,t,e){var c=this,o=c.config.effect;(typeof o==="function"?o:i[o]).call(c,j,l,function(){c.fireEvent("onSwitch",t)},t,e)}})});
KISSY.add("switchable-circular",function(h){function p(b,f,g,n,s){var r=this;b=r.config;f=r.length;var u=r.activeIndex,v=b.scrollType===a,w=v?l:t,x=r.viewSize[v?0:1];v=-x*n;var z={},A,y=s===k;if(A=y&&u===0&&n===f-1||s===o&&u===f-1&&n===0)v=m.call(r,r.panels,n,y,w,x);z[w]={to:v};r.anim&&r.anim.stop();r.anim=new i.Anim(r.content,z,b.duration,b.easing);r.anim.onComplete.subscribe(function(){A&&q.call(r,r.panels,n,y,w,x);r.anim=null;g()});r.anim.animate()}function m(b,f,g,n,s){var r=this.config.steps;
f=this.length;var u=g?f-1:0,v=(u+1)*r;for(r=u*r;r<v;r++){b[r].style.position=j;b[r].style[n]=(g?"-":c)+s*f+e}return g?s:-s*f}function q(b,f,g,n,s){var r=this.config.steps;f=this.length;var u=g?f-1:0,v=(u+1)*r;for(r=u*r;r<v;r++){b[r].style.position=c;b[r].style[n]=c}this.content.style[n]=g?-s*(f-1)+e:c}var i=YAHOO.util,j="relative",l="left",t="top",e="px",c="",o="forward",k="backward",a="scrollx",d=h.Switchable;h.mix(d.Config,{circular:false});d.Plugins.push({name:"circular",init:function(b){b=b.config;
if(b.circular&&(b.effect===a||b.effect==="scrolly")){b.scrollType=b.effect;b.effect=p}}})});
KISSY.add("switchable-lazyload",function(h){var p=YAHOO.util.Dom,m="beforeSwitch",q="img-src",i="textarea-data",j={},l=h.Switchable,t=h.DataLazyload;j[q]="data-lazyload-src-custom";j[i]="ks-datalazyload-custom";h.mix(l.Config,{lazyDataType:"",lazyDataFlag:""});l.Plugins.push({name:"autoplay",init:function(e){function c(b){var f=k.steps;b=b*f;t.loadCustomLazyData(e.panels.slice(b,b+f),a,d);o()&&e.unsubscribe(m,c)}function o(){var b,f,g;if(a===q){b=e.container.getElementsByTagName("img");f=0;for(g=
b.length;f<g;f++)if(b[f].getAttribute(d))return false}else if(a===i){b=e.container.getElementsByTagName("textarea");f=0;for(g=b.length;f<g;f++)if(p.hasClass(b[f],d))return false}return true}var k=e.config,a=k.lazyDataType,d=k.lazyDataFlag||j[a];!t||!a||!d||e.subscribe(m,c)}})});KISSY.add("tabs",function(h){function p(m,q){if(!(this instanceof p))return new p(m,q);p.superclass.constructor.call(this,m,q)}h.extend(p,h.Switchable);h.Tabs=p});
KISSY.add("slide",function(h){function p(q,i){if(!(this instanceof p))return new p(q,i);i=h.merge(m,i||{});p.superclass.constructor.call(this,q,i)}var m={autoplay:true,circular:true};h.extend(p,h.Switchable);h.Slide=p});KISSY.add("carousel",function(h){function p(q,i){if(!(this instanceof p))return new p(q,i);i=h.merge(m,i||{});p.superclass.constructor.call(this,q,i)}var m={circular:true};h.extend(p,h.Switchable);h.Carousel=p});
KISSY.add("album",function(h){function p(q,i){if(!(this instanceof p))return new p(q,i);i=h.merge(m,i||{});p.superclass.constructor.call(this,q,i)}var m={circular:true};h.extend(p,h.Switchable);h.Album=p});