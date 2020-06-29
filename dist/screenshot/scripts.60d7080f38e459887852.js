window.Modernizr=function(t,e,n){function i(t,e){return typeof t===e}function o(t,e){return!!~(""+t).indexOf(e)}function r(t,e){for(var i in t){var r=t[i];if(!o(r,"-")&&p[r]!==n)return"pfx"!=e||r}return!1}function s(t,e,o){for(var r in t){var s=e[t[r]];if(s!==n)return!1===o?t[r]:i(s,"function")?s.bind(o||e):s}return!1}function a(t,e,n){var o=t.charAt(0).toUpperCase()+t.slice(1),a=(t+" "+m.join(o+" ")+o).split(" ");return i(e,"string")||i(e,"undefined")?r(a,e):s(a=(t+" "+g.join(o+" ")+o).split(" "),e,n)}var c,u,l={},h=e.documentElement,d=e.createElement("modernizr"),p=d.style,f="Webkit Moz O ms",m=f.split(" "),g=f.toLowerCase().split(" "),v={},y=[],x=y.slice,b={}.hasOwnProperty;for(var E in u=i(b,"undefined")||i(b.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return b.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=x.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=e.prototype;var r=new o,s=e.apply(r,n.concat(x.call(arguments)));return Object(s)===s?s:r}return e.apply(t,n.concat(x.call(arguments)))};return i}),v.csstransitions=function(){return a("transition")},v)u(v,E)&&(c=E.toLowerCase(),l[c]=v[E](),y.push((l[c]?"":"no-")+c));return l.addTest=function(t,e){if("object"==typeof t)for(var i in t)u(t,i)&&l.addTest(i,t[i]);else{if(t=t.toLowerCase(),l[t]!==n)return l;e="function"==typeof e?e():e,h.className+=" "+(e?"":"no-")+t,l[t]=e}return l},p.cssText="",d=null,function(t,e){function n(){var t=f.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=p[t[h]];return e||(e={},d++,t[h]=d,p[d]=e),e}function o(t,n,o){return n||(n=e),a?n.createElement(t):(o||(o=i(n)),(r=o.cache[t]?o.cache[t].cloneNode():l.test(t)?(o.cache[t]=o.createElem(t)).cloneNode():o.createElem(t)).canHaveChildren&&!u.test(t)?o.frag.appendChild(r):r);var r}function r(t){t||(t=e);var r=i(t);return f.shivCSS&&!s&&!r.hasCSS&&(r.hasCSS=!!function(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>",i.insertBefore(n.lastChild,i.firstChild)}(t)),a||function(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return f.shivMethods?o(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,(function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'}))+");return n}")(f,e.frag)}(t,r),t}var s,a,c=t.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,l=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",d=0,p={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",s="hidden"in t,a=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return void 0===t.cloneNode||void 0===t.createDocumentFragment||void 0===t.createElement}()}catch(c){s=!0,a=!0}}();var f={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==c.shivCSS,supportsUnknownElements:a,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:r,createElement:o,createDocumentFragment:function(t,o){if(t||(t=e),a)return t.createDocumentFragment();for(var r=(o=o||i(t)).frag.cloneNode(),s=0,c=n(),u=c.length;s<u;s++)r.createElement(c[s]);return r}};t.html5=f,r(e)}(this,e),l._version="2.6.3",l._domPrefixes=g,l._cssomPrefixes=m,l.testProp=function(t){return r([t])},l.testAllProps=a,l.prefixed=function(t,e,n){return e?a(t,e,n):a(t,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+y.join(" "),l}(0,this.document),function(t,e,n){function i(t){return"[object Function]"==g.call(t)}function o(t){return"string"==typeof t}function r(){}function s(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=v.shift();y=1,t?t.t?f((function(){("c"==t.t?d.injectCss:d.injectJs)(t.s,0,t.a,t.x,t.e,1)}),0):(t(),a()):y=0}function c(t,n,i,o,r,c,u){function l(e){if(!p&&s(h.readyState)&&(x.r=p=1,!y&&a(),h.onload=h.onreadystatechange=null,e))for(var i in"img"!=t&&f((function(){E.removeChild(h)}),50),L[n])L[n].hasOwnProperty(i)&&L[n][i].onload()}u=u||d.errorTimeout;var h=e.createElement(t),p=0,g=0,x={t:i,s:n,e:r,a:c,x:u};1===L[n]&&(g=1,L[n]=[]),"object"==t?h.data=n:(h.src=n,h.type=t),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){l.call(this,g)},v.splice(o,0,x),"img"!=t&&(g||2===L[n]?(E.insertBefore(h,b?null:m),f(l,u)):L[n].push(h))}function u(t,e,n,i,r){return y=0,e=e||"j",o(t)?c("c"==e?S:_,t,e,this.i++,n,i,r):(v.splice(this.i++,0,t),1==v.length&&a()),this}function l(){var t=d;return t.loader={load:u,i:0},t}var h,d,p=e.documentElement,f=t.setTimeout,m=e.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,x="MozAppearance"in p.style,b=x&&!!e.createRange().compareNode,E=b?p:m.parentNode,_=(p=t.opera&&"[object Opera]"==g.call(t.opera),p=!!e.attachEvent&&!p,x?"object":p?"script":"img"),S=p?"script":_,P=Array.isArray||function(t){return"[object Array]"==g.call(t)},w=[],L={},M={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};(d=function(t){function e(t,e,n,o,r){var s=function(t){t=t.split("!");var e,n,i,o=w.length,r=t.pop(),s=t.length;for(r={url:r,origUrl:r,prefixes:t},n=0;n<s;n++)i=t[n].split("="),(e=M[i.shift()])&&(r=e(r,i));for(n=0;n<o;n++)r=w[n](r);return r}(t),a=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(e&&(e=i(e)?e:e[t]||e[o]||e[t.split("/").pop().split("?")[0]]),s.instead?s.instead(t,e,n,o,r):(L[s.url]?s.noexec=!0:L[s.url]=1,n.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":void 0,s.noexec,s.attrs,s.timeout),(i(e)||i(a))&&n.load((function(){l(),e&&e(s.origUrl,r,o),a&&a(s.origUrl,r,o),L[s.url]=2}))))}function n(t,n){function s(t,r){if(t){if(o(t))r||(h=function(){var t=[].slice.call(arguments);d.apply(this,t),p()}),e(t,h,n,0,u);else if(Object(t)===t)for(c in a=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(c)&&(!r&&!--a&&(i(h)?h=function(){var t=[].slice.call(arguments);d.apply(this,t),p()}:h[c]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),p()}}(d[c])),e(t[c],h,n,c,u))}else!r&&p()}var a,c,u=!!t.test,l=t.load||t.both,h=t.callback||r,d=h,p=t.complete||r;s(u?t.yep:t.nope,!!l),l&&s(l)}var s,a,c=this.yepnope.loader;if(o(t))e(t,0,c,0);else if(P(t))for(s=0;s<t.length;s++)o(a=t[s])?e(a,0,c,0):P(a)?d(a):Object(a)===a&&n(a,c);else Object(t)===t&&n(t,c)}).addPrefix=function(t,e){M[t]=e},d.addFilter=function(t){w.push(t)},d.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",h=function(){e.removeEventListener("DOMContentLoaded",h,0),e.readyState="complete"},0)),t.yepnope=l(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,n,i,o,c,u){var l,h,p=e.createElement("script");for(h in o=o||d.errorTimeout,p.src=t,i)p.setAttribute(h,i[h]);n=u?a:n||r,p.onreadystatechange=p.onload=function(){!l&&s(p.readyState)&&(l=1,n(),p.onload=p.onreadystatechange=null)},f((function(){l||(l=1,n(1))}),o),c?p.onload():m.parentNode.insertBefore(p,m)},t.yepnope.injectCss=function(t,n,i,o,s,c){var u;for(u in n=c?a:n||r,(o=e.createElement("link")).href=t,o.rel="stylesheet",o.type="text/css",i)o.setAttribute(u,i[u]);s||(m.parentNode.insertBefore(o,m),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(t){"use strict";function e(t){return RegExp("(^|\\s+)"+t+"(\\s+|$)")}function n(t,e){(i(t,e)?r:o)(t,e)}var i,o,r;"classList"in document.documentElement?(i=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(i=function(t,n){return e(n).test(t.className)},o=function(t,e){i(t,e)||(t.className=t.className+" "+e)},r=function(t,n){t.className=t.className.replace(e(n)," ")});var s={hasClass:i,addClass:o,removeClass:r,toggleClass:n,has:i,add:o,remove:r,toggle:n};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(t){"use strict";var e=document.documentElement,n=function(){};e.addEventListener?n=function(t,e,n){t.addEventListener(e,n,!1)}:e.attachEvent&&(n=function(e,n,i){e[n+i]=i.handleEvent?function(){var e=t.event;e.target=e.target||e.srcElement,i.handleEvent.call(i,e)}:function(){var n=t.event;n.target=n.target||n.srcElement,i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var i=function(){};e.removeEventListener?i=function(t,e,n){t.removeEventListener(e,n,!1)}:e.detachEvent&&(i=function(t,e,n){t.detachEvent("on"+e,t[e+n]);try{delete t[e+n]}catch(i){t[e+n]=void 0}});var o={bind:n,unbind:i};"function"==typeof define&&define.amd?define(o):t.eventie=o}(this),(function(){"use strict";function t(){}function e(t,e){for(var n=t.length;n--;)if(t[n].listener===e)return n;return-1}function n(t){return function(){return this[t].apply(this,arguments)}}var i=t.prototype;i.getListeners=function(t){var e,n,i=this._getEvents();if("object"==typeof t)for(n in e={},i)i.hasOwnProperty(n)&&t.test(n)&&(e[n]=i[n]);else e=i[t]||(i[t]=[]);return e},i.flattenListeners=function(t){var e,n=[];for(e=0;t.length>e;e+=1)n.push(t[e].listener);return n},i.getListenersAsObject=function(t){var e,n=this.getListeners(t);return n instanceof Array&&((e={})[t]=n),e||n},i.addListener=function(t,n){var i,o=this.getListenersAsObject(t),r="object"==typeof n;for(i in o)o.hasOwnProperty(i)&&-1===e(o[i],n)&&o[i].push(r?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(t){return this.getListeners(t),this},i.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},i.removeListener=function(t,n){var i,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&-1!==(i=e(r[o],n))&&r[o].splice(i,1);return this},i.off=n("removeListener"),i.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},i.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},i.manipulateListeners=function(t,e,n){var i,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(i=n.length;i--;)r.call(this,e,n[i]);else for(i in e)e.hasOwnProperty(i)&&(o=e[i])&&("function"==typeof o?r.call(this,i,o):s.call(this,i,o));return this},i.removeEvent=function(t){var e,n=typeof t,i=this._getEvents();if("string"===n)delete i[t];else if("object"===n)for(e in i)i.hasOwnProperty(e)&&t.test(e)&&delete i[e];else delete this._events;return this},i.emitEvent=function(t,e){var n,i,o,r=this.getListenersAsObject(t);for(o in r)if(r.hasOwnProperty(o))for(i=r[o].length;i--;)((n=r[o][i]).listener.apply(this,e||[])===this._getOnceReturnValue()||!0===n.once)&&this.removeListener(t,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},i.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},i._getOnceReturnValue=function(){return!this.hasOwnProperty("_onceReturnValue")||this._onceReturnValue},i._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define((function(){return t})):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}).call(this),function(t){"use strict";function e(t){if(t){if("string"==typeof i[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=n.length;r>o;o++)if("string"==typeof i[e=n[o]+t])return e}}var n="Webkit Moz ms Ms O".split(" "),i=document.documentElement.style;"function"==typeof define&&define.amd?define((function(){return e})):t.getStyleProperty=e}(window),function(t){"use strict";function e(t){var e=parseFloat(t);return-1===t.indexOf("%")&&!isNaN(e)&&e}function n(t){var n,i=t("boxSizing");return function(){if(i){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[i]="border-box";var r=document.body||document.documentElement;r.appendChild(t);var s=o(t);n=200===e(s.width),r.removeChild(t)}}(),function(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var s=o(t);if("none"===s.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,n=r.length;n>e;e++)t[r[e]]=0;return t}();var a={};a.width=t.offsetWidth,a.height=t.offsetHeight;for(var c=a.isBorderBox=!(!i||!s[i]||"border-box"!==s[i]),u=0,l=r.length;l>u;u++){var h=r[u],d=parseFloat(s[h]);a[h]=isNaN(d)?0:d}var p=a.paddingLeft+a.paddingRight,f=a.paddingTop+a.paddingBottom,m=a.marginLeft+a.marginRight,g=a.marginTop+a.marginBottom,v=a.borderLeftWidth+a.borderRightWidth,y=a.borderTopWidth+a.borderBottomWidth,x=c&&n,b=e(s.width);!1!==b&&(a.width=b+(x?0:p+v));var E=e(s.height);return!1!==E&&(a.height=E+(x?0:f+y)),a.innerWidth=a.width-(p+v),a.innerHeight=a.height-(f+y),a.outerWidth=a.width+m,a.outerHeight=a.height+g,a}}}var i=document.defaultView,o=i&&i.getComputedStyle?function(t){return i.getComputedStyle(t,null)}:function(t){return t.currentStyle},r=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define(["get-style-property/get-style-property"],n):t.getSize=n(t.getStyleProperty)}(window),function(t){"use strict";function e(t,e){for(var n in e)t[n]=e[n];return t}function n(){}function i(i,o,s,u,l){function d(t,n){this.element=t,this.options=e({},this.options),e(this.options,n),this._create()}function p(){return!1}function f(t,e){t.x=void 0!==e.pageX?e.pageX:e.clientX,t.y=void 0!==e.pageY?e.pageY:e.clientY}var m=u("transform"),g=!!u("perspective");e(d.prototype,o.prototype),d.prototype.options={},d.prototype._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition=e({},this.position);var t=a(this.element);"relative"!==t.position&&"absolute"!==t.position&&(this.element.style.position="relative"),this.enable(),this.setHandles()},d.prototype.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element];for(var t=0,e=this.handles.length;e>t;t++){var n=this.handles[t];s.bind(n,"mousedown",this),s.bind(n,"touchstart",this),v(n)}};var v="attachEvent"in r.documentElement?function(t){"IMG"===t.nodeName&&(t.ondragstart=p);for(var e=t.querySelectorAll("img"),n=0,i=e.length;i>n;n++)e[n].ondragstart=p}:n;d.prototype._getPosition=function(){var t=a(this.element),e=parseInt(t.left,10),n=parseInt(t.top,10);this.position.x=isNaN(e)?0:e,this.position.y=isNaN(n)?0:n,this._addTransformPosition(t)},d.prototype._addTransformPosition=function(t){if(m){var e=t[m];if(0===e.indexOf("matrix")){var n=e.split(","),i=0===e.indexOf("matrix3d")?12:4,o=parseInt(n[i],10),r=parseInt(n[i+1],10);this.position.x+=o,this.position.y+=r}}},d.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.prototype.getTouch=function(t){for(var e=0,n=t.length;n>e;e++){var i=t[e];if(i.identifier===this.pointerIdentifier)return i}},d.prototype.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this.dragStart(t,t)},d.prototype.ontouchstart=function(t){this.isDragging||this.dragStart(t,t.changedTouches[0])},d.prototype.dragStart=function(e,n){if(this.isEnabled){e.preventDefault?e.preventDefault():e.returnValue=!1;var o="touchstart"===e.type;this.pointerIdentifier=n.identifier,this._getPosition(),this.measureContainment(),f(this.startPoint,n),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this._bindEvents({events:o?["touchmove","touchend","touchcancel"]:["mousemove","mouseup"],node:e.preventDefault?t:r}),i.add(this.element,"is-dragging"),this.isDragging=!0,this.emitEvent("dragStart",[this,e,n]),this.animate()}},d.prototype._bindEvents=function(t){for(var e=0,n=t.events.length;n>e;e++)s.bind(t.node,t.events[e],this);this._boundEvents=t},d.prototype._unbindEvents=function(){var t=this._boundEvents;if(t&&t.events){for(var e=0,n=t.events.length;n>e;e++)s.unbind(t.node,t.events[e],this);delete this._boundEvents}},d.prototype.measureContainment=function(){var t=this.options.containment;if(t){this.size=l(this.element);var e=this.element.getBoundingClientRect(),n=c(t)?t:"string"==typeof t?r.querySelector(t):this.element.parentNode;this.containerSize=l(n);var i=n.getBoundingClientRect();this.relativeStartPosition={x:e.left-i.left,y:e.top-i.top}}},d.prototype.onmousemove=function(t){this.dragMove(t,t)},d.prototype.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this.dragMove(t,e)},d.prototype.dragMove=function(t,e){if(f(this.dragPoint,e),this.dragPoint.x-=this.startPoint.x,this.dragPoint.y-=this.startPoint.y,this.options.containment){var n=this.relativeStartPosition.x,i=this.relativeStartPosition.y;this.dragPoint.x=Math.max(this.dragPoint.x,-n),this.dragPoint.y=Math.max(this.dragPoint.y,-i),this.dragPoint.x=Math.min(this.dragPoint.x,this.containerSize.width-n-this.size.width),this.dragPoint.y=Math.min(this.dragPoint.y,this.containerSize.height-i-this.size.height)}this.position.x=this.startPosition.x+this.dragPoint.x,this.position.y=this.startPosition.y+this.dragPoint.y,this.emitEvent("dragMove",[this,t,e])},d.prototype.onmouseup=function(t){this.dragEnd(t,t)},d.prototype.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this.dragEnd(t,e)},d.prototype.dragEnd=function(t,e){this.isDragging=!1,delete this.pointerIdentifier,m&&(this.element.style[m]="",this.setLeftTop()),this._unbindEvents(),i.remove(this.element,"is-dragging"),this.emitEvent("dragEnd",[this,t,e])},d.prototype.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);this.dragEnd(t,e)},d.prototype.animate=function(){if(this.isDragging){this.positionDrag();var t=this;h((function(){t.animate()}))}};var y=g?function(t,e){return"translate3d( "+t+"px, "+e+"px, 0)"}:function(t,e){return"translate( "+t+"px, "+e+"px)"};return d.prototype.setLeftTop=function(){this.element.style.left=this.position.x+"px",this.element.style.top=this.position.y+"px"},d.prototype.positionDrag=m?function(){this.element.style[m]=y(this.dragPoint.x,this.dragPoint.y)}:d.prototype.setLeftTop,d.prototype.enable=function(){this.isEnabled=!0},d.prototype.disable=function(){this.isEnabled=!1,this.isDragging&&this.dragEnd()},d}for(var o,r=t.document,s=r.defaultView,a=s&&s.getComputedStyle?function(t){return s.getComputedStyle(t,null)}:function(t){return t.currentStyle},c="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},u=0,l="webkit moz ms o".split(" "),h=t.requestAnimationFrame,d=t.cancelAnimationFrame,p=0;l.length>p&&(!h||!d);p++)o=l[p],h=h||t[o+"RequestAnimationFrame"],d=d||t[o+"CancelAnimationFrame"]||t[o+"CancelRequestAnimationFrame"];h&&d||(h=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-u)),o=t.setTimeout((function(){e(n+i)}),i);return u=n+i,o},d=function(e){t.clearTimeout(e)}),"function"==typeof define&&define.amd?define(["classie/classie","eventEmitter/EventEmitter","eventie/eventie","get-style-property/get-style-property","get-size/get-size"],i):t.Draggabilly=i(t.classie,t.EventEmitter,t.eventie,t.getStyleProperty,t.getSize)}(window),function(t){"use strict";function e(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var n=!!getStyleProperty("perspective"),i=Modernizr.csstransitions,o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"}[Modernizr.prefixed("transition")];function r(t,n){this.container=t,this.options=e({},this.options),e(this.options,n),this._init()}function s(t,e){t.style.WebkitTransform=e,t.style.msTransform=e,t.style.transform=e}r.prototype.options={distDragBack:200,distDragMax:450,onUpdateStack:function(t){return!1}},r.prototype._init=function(){this.items=[].slice.call(this.container.children),this.itemsCount=this.items.length,this.current=0,this._setStackStyle(),this.itemsCount<=1||(this._initDragg(),this._initEvents())},r.prototype._initEvents=function(){var t=this;this.draggie.on("dragStart",(function(e,n,i){t._onDragStart(e,n,i)})),this.draggie.on("dragMove",(function(e,n,i){t._onDragMove(e,n,i)})),this.draggie.on("dragEnd",(function(e,n,i){t._onDragEnd(e,n,i)}))},r.prototype._setStackStyle=function(){var t=this._firstItem(),e=this._secondItem(),i=this._thirdItem();t&&(t.style.opacity=1,t.style.zIndex=4,s(t,n?"translate3d(0,0,0)":"translate(0,0)")),e&&(e.style.opacity=1,e.style.zIndex=3,s(e,n?"translate3d(0,0,-60px)":"translate(0,0)")),i&&(i.style.opacity=1,i.style.zIndex=2,s(i,n?"translate3d(0,0,-120px)":"translate(0,0)"))},r.prototype._moveAway=function(t){this._disableDragg(),classie.add(t.element,"animate");var e=this._getTranslateVal(t);s(t.element,n?"translate3d("+e.x+"px,"+e.y+"px, 0px)":"translate("+e.x+"px,"+e.y+"px)"),t.element.style.opacity=0;var r=this._secondItem(),a=this._thirdItem();r&&(classie.add(r,"move-back"),classie.add(r,"animate"),s(r,n?"translate3d(0,0,-60px)":"translate(0,0)")),a&&(classie.add(a,"move-back"),classie.add(a,"animate"),s(a,n?"translate3d(0,0,-120px)":"translate(0,0)"));var c=this,u=function(){t.element.removeEventListener(o,u),s(t.element,n?"translate3d(0,0,-180px)":"translate(0,0,0)"),t.element.style.left=t.element.style.top="0px",t.element.style.zIndex=-1,classie.remove(t.element,"animate"),c.current=c.current<c.itemsCount-1?c.current+1:0;var e=c._firstItem(),i=c._secondItem(),r=c._thirdItem();classie.remove(e,"move-back"),i&&classie.remove(i,"move-back"),r&&classie.remove(r,"move-back"),setTimeout((function(){classie.add(c._lastItem(),"animate"),c._setStackStyle()}),25),c._initDragg(),c._initEvents(),c.options.onUpdateStack(c.current)};i?t.element.addEventListener(o,u):u.call()},r.prototype._moveBack=function(t){var e=this._secondItem(),i=this._thirdItem();classie.add(t.element,"move-back"),classie.add(t.element,"animate"),s(t.element,n?"translate3d(0,0,0)":"translate(0,0)"),t.element.style.left="0px",t.element.style.top="0px",e&&(classie.add(e,"move-back"),classie.add(e,"animate"),s(e,n?"translate3d(0,0,-60px)":"translate(0,0)")),i&&(classie.add(i,"move-back"),classie.add(i,"animate"),s(i,n?"translate3d(0,0,-120px)":"translate(0,0)"))},r.prototype._onDragStart=function(t,e,n){var i=this._secondItem(),o=this._thirdItem();classie.remove(t.element,"move-back"),classie.remove(t.element,"animate"),i&&(classie.remove(i,"move-back"),classie.remove(i,"animate")),o&&(classie.remove(o,"move-back"),classie.remove(o,"animate"))},r.prototype._onDragMove=function(t,e,i){if(this._outOfBounds(t))this._moveAway(t);else{var o=this._secondItem(),r=this._thirdItem();o&&s(o,n?"translate3d("+.6*t.position.x+"px,"+.6*t.position.y+"px, -60px)":"translate("+.6*t.position.x+"px,"+.6*t.position.y+"px)"),r&&s(r,n?"translate3d("+.3*t.position.x+"px,"+.3*t.position.y+"px, -120px)":"translate("+.3*t.position.x+"px,"+.3*t.position.y+"px)")}},r.prototype._onDragEnd=function(t,e,n){this._outOfBounds(t)||(this._outOfSight(t)?this._moveAway(t):this._moveBack(t))},r.prototype._initDragg=function(){this.draggie=new Draggabilly(this.items[this.current])},r.prototype._disableDragg=function(){this.draggie.disable()},r.prototype._outOfBounds=function(t){return Math.abs(t.position.x)>this.options.distDragMax||Math.abs(t.position.y)>this.options.distDragMax},r.prototype._outOfSight=function(t){return Math.abs(t.position.x)>this.options.distDragBack||Math.abs(t.position.y)>this.options.distDragBack},r.prototype._getTranslateVal=function(t){var e=Math.sqrt(Math.pow(t.position.x,2)+Math.pow(t.position.y,2)),n=Math.asin(Math.abs(t.position.y)/e)/(Math.PI/180),i=e+this.options.distDragBack,o=Math.cos(n*(Math.PI/180))*i,r=Math.sin(n*(Math.PI/180))*i,s=o-Math.abs(t.position.x),a=r-Math.abs(t.position.y);return{x:t.position.x>0?s:-1*s,y:t.position.y>0?a:-1*a}},r.prototype._firstItem=function(){return this.items[this.current]},r.prototype._secondItem=function(){if(this.itemsCount>=2)return this.current+1<this.itemsCount?this.items[this.current+1]:this.items[Math.abs(this.itemsCount-(this.current+1))]},r.prototype._thirdItem=function(){if(this.itemsCount>=3)return this.current+2<this.itemsCount?this.items[this.current+2]:this.items[Math.abs(this.itemsCount-(this.current+2))]},r.prototype._lastItem=function(){return this.itemsCount>=3?this._thirdItem():this._secondItem()},t.ElastiStack=r}(window);