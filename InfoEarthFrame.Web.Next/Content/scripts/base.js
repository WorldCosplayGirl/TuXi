﻿/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);   
;
/*! jQuery UI - v1.10.4 - 2014-01-17
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(t,e){function i(e,i){var n,o,a,r=e.nodeName.toLowerCase();return"area"===r?(n=e.parentNode,o=n.name,e.href&&o&&"map"===n.nodeName.toLowerCase()?(a=t("img[usemap=#"+o+"]")[0],!!a&&s(a)):!1):(/input|select|textarea|button|object/.test(r)?!e.disabled:"a"===r?e.href||i:i)&&s(e)}function s(e){return t.expr.filters.visible(e)&&!t(e).parents().addBack().filter(function(){return"hidden"===t.css(this,"visibility")}).length}var n=0,o=/^ui-id-\d+$/;t.ui=t.ui||{},t.extend(t.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),t.fn.extend({focus:function(e){return function(i,s){return"number"==typeof i?this.each(function(){var e=this;setTimeout(function(){t(e).focus(),s&&s.call(e)},i)}):e.apply(this,arguments)}}(t.fn.focus),scrollParent:function(){var e;return e=t.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(t.css(this,"position"))&&/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(t.css(this,"overflow")+t.css(this,"overflow-y")+t.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!e.length?t(document):e},zIndex:function(i){if(i!==e)return this.css("zIndex",i);if(this.length)for(var s,n,o=t(this[0]);o.length&&o[0]!==document;){if(s=o.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(o.css("zIndex"),10),!isNaN(n)&&0!==n))return n;o=o.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){o.test(this.id)&&t(this).removeAttr("id")})}}),t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])},focusable:function(e){return i(e,!isNaN(t.attr(e,"tabindex")))},tabbable:function(e){var s=t.attr(e,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(e,!n)}}),t("<a>").outerWidth(1).jquery||t.each(["Width","Height"],function(i,s){function n(e,i,s,n){return t.each(o,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),n&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var o="Width"===s?["Left","Right"]:["Top","Bottom"],a=s.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight};t.fn["inner"+s]=function(i){return i===e?r["inner"+s].call(this):this.each(function(){t(this).css(a,n(this,i)+"px")})},t.fn["outer"+s]=function(e,i){return"number"!=typeof e?r["outer"+s].call(this,e):this.each(function(){t(this).css(a,n(this,e,!0,i)+"px")})}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(t.fn.removeData=function(e){return function(i){return arguments.length?e.call(this,t.camelCase(i)):e.call(this)}}(t.fn.removeData)),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),t.support.selectstart="onselectstart"in document.createElement("div"),t.fn.extend({disableSelection:function(){return this.bind((t.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(t){t.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),t.extend(t.ui,{plugin:{add:function(e,i,s){var n,o=t.ui[e].prototype;for(n in s)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([i,s[n]])},call:function(t,e,i){var s,n=t.plugins[e];if(n&&t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)t.options[n[s][0]]&&n[s][1].apply(t.element,i)}},hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return e[s]>0?!0:(e[s]=1,n=e[s]>0,e[s]=0,n)}})})(jQuery),function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})}(jQuery),function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,o="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}(jQuery),function(t){t.widget("ui.draggable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(e){var i=this.options;return this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(e),this.handle?(t(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(t(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(e){var i=this.options;return this.helper=this._createHelper(e),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_mouseDrag:function(e,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",e,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1;return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||t.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1):!1},_mouseUp:function(e){return t("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(e){return this.options.handle?!!t(e.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.element.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,t(document).width()-this.helperProportions.width-this.margins.left,(t(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=t(n.containment),s=i[0],s&&(e="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(e){var i,s,n,o,a=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=e.pageX,l=e.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),a.grid&&(n=a.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/a.grid[1])*a.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-a.grid[1]:n+a.grid[1]:n,o=a.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/a.grid[0])*a.grid[0]:this.originalPageX,h=i?o-this.offset.click.left>=i[0]||o-this.offset.click.left>i[2]?o:o-this.offset.click.left>=i[0]?o-a.grid[0]:o+a.grid[0]:o)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s]),"drag"===e&&(this.positionAbs=this._convertPositionTo("absolute")),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i){var s=t(this).data("ui-draggable"),n=s.options,o=t.extend({},i,{item:s.element});s.sortables=[],t(n.connectToSortable).each(function(){var i=t.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",e,o))})},stop:function(e,i){var s=t(this).data("ui-draggable"),n=t.extend({},i,{item:s.element});t.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(e),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",e,n))})},drag:function(e,i){var s=t(this).data("ui-draggable"),n=this;t.each(s.sortables,function(){var o=!1,a=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(o=!0,t.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==a&&this.instance._intersectsWith(this.instance.containerCache)&&t.contains(a.instance.element[0],this.instance.element[0])&&(o=!1),o})),o?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},e.target=this.instance.currentItem[0],this.instance._mouseCapture(e,!0),this.instance._mouseStart(e,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",e),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(e)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",e,this.instance._uiHash(this.instance)),this.instance._mouseStop(e,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",e),s.dropped=!1)})}}),t.ui.plugin.add("draggable","cursor",{start:function(){var e=t("body"),i=t(this).data("ui-draggable").options;e.css("cursor")&&(i._cursor=e.css("cursor")),e.css("cursor",i.cursor)},stop:function(){var e=t(this).data("ui-draggable").options;e._cursor&&t("body").css("cursor",e._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._opacity&&t(i.helper).css("opacity",s._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(){var e=t(this).data("ui-draggable");e.scrollParent[0]!==document&&"HTML"!==e.scrollParent[0].tagName&&(e.overflowOffset=e.scrollParent.offset())},drag:function(e){var i=t(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-e.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:e.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-e.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:e.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(e.pageY-t(document).scrollTop()<s.scrollSensitivity?n=t(document).scrollTop(t(document).scrollTop()-s.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<s.scrollSensitivity&&(n=t(document).scrollTop(t(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(e.pageX-t(document).scrollLeft()<s.scrollSensitivity?n=t(document).scrollLeft(t(document).scrollLeft()-s.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<s.scrollSensitivity&&(n=t(document).scrollLeft(t(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!s.dropBehaviour&&t.ui.ddmanager.prepareOffsets(i,e)}}),t.ui.plugin.add("draggable","snap",{start:function(){var e=t(this).data("ui-draggable"),i=e.options;e.snapElements=[],t(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=t(this),s=i.offset();this!==e.element[0]&&e.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(e,i){var s,n,o,a,r,h,l,c,u,d,p=t(this).data("ui-draggable"),f=p.options,g=f.snapTolerance,m=i.offset.left,v=m+p.helperProportions.width,_=i.offset.top,b=_+p.helperProportions.height;for(u=p.snapElements.length-1;u>=0;u--)r=p.snapElements[u].left,h=r+p.snapElements[u].width,l=p.snapElements[u].top,c=l+p.snapElements[u].height,r-g>v||m>h+g||l-g>b||_>c+g||!t.contains(p.snapElements[u].item.ownerDocument,p.snapElements[u].item)?(p.snapElements[u].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=!1):("inner"!==f.snapMode&&(s=g>=Math.abs(l-b),n=g>=Math.abs(c-_),o=g>=Math.abs(r-v),a=g>=Math.abs(h-m),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||o||a,"outer"!==f.snapMode&&(s=g>=Math.abs(l-_),n=g>=Math.abs(c-b),o=g>=Math.abs(r-m),a=g>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:c-p.helperProportions.height,left:0}).top-p.margins.top),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[u].snapping&&(s||n||o||a||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,e,t.extend(p._uiHash(),{snapItem:p.snapElements[u].item})),p.snapElements[u].snapping=s||n||o||a||d)}}),t.ui.plugin.add("draggable","stack",{start:function(){var e,i=this.data("ui-draggable").options,s=t.makeArray(t(i.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)});s.length&&(e=parseInt(t(s[0]).css("zIndex"),10)||0,t(s).each(function(i){t(this).css("zIndex",e+i)}),this.css("zIndex",e+s.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i){var s=t(i.helper),n=t(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(e,i){var s=t(this).data("ui-draggable").options;s._zIndex&&t(i.helper).css("zIndex",s._zIndex)}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}t.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e,i=this.options,s=i.accept;
this.isover=!1,this.isout=!0,this.accept=t.isFunction(s)?s:function(t){return t.is(s)},this.proportions=function(){return arguments.length?(e=arguments[0],undefined):e?e:e={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},t.ui.ddmanager.droppables[i.scope]=t.ui.ddmanager.droppables[i.scope]||[],t.ui.ddmanager.droppables[i.scope].push(this),i.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var e=0,i=t.ui.ddmanager.droppables[this.options.scope];i.length>e;e++)i[e]===this&&i.splice(e,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(e,i){"accept"===e&&(this.accept=t.isFunction(i)?i:function(t){return t.is(i)}),t.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",e,this.ui(i))},_deactivate:function(e){var i=t.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",e,this.ui(i))},_over:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",e,this.ui(i)))},_out:function(e){var i=t.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",e,this.ui(i)))},_drop:function(e,i){var s=i||t.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=t.data(this,"ui-droppable");return e.options.greedy&&!e.options.disabled&&e.options.scope===s.options.scope&&e.accept.call(e.element[0],s.currentItem||s.element)&&t.ui.intersect(s,t.extend(e,{offset:e.element.offset()}),e.options.tolerance)?(n=!0,!1):undefined}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",e,this.ui(s)),this.element):!1):!1},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}}}),t.ui.intersect=function(t,i,s){if(!i.offset)return!1;var n,o,a=(t.positionAbs||t.position.absolute).left,r=(t.positionAbs||t.position.absolute).top,h=a+t.helperProportions.width,l=r+t.helperProportions.height,c=i.offset.left,u=i.offset.top,d=c+i.proportions().width,p=u+i.proportions().height;switch(s){case"fit":return a>=c&&d>=h&&r>=u&&p>=l;case"intersect":return a+t.helperProportions.width/2>c&&d>h-t.helperProportions.width/2&&r+t.helperProportions.height/2>u&&p>l-t.helperProportions.height/2;case"pointer":return n=(t.positionAbs||t.position.absolute).left+(t.clickOffset||t.offset.click).left,o=(t.positionAbs||t.position.absolute).top+(t.clickOffset||t.offset.click).top,e(o,u,i.proportions().height)&&e(n,c,i.proportions().width);case"touch":return(r>=u&&p>=r||l>=u&&p>=l||u>r&&l>p)&&(a>=c&&d>=a||h>=c&&d>=h||c>a&&h>d);default:return!1}},t.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(e,i){var s,n,o=t.ui.ddmanager.droppables[e.options.scope]||[],a=i?i.type:null,r=(e.currentItem||e.element).find(":data(ui-droppable)").addBack();t:for(s=0;o.length>s;s++)if(!(o[s].options.disabled||e&&!o[s].accept.call(o[s].element[0],e.currentItem||e.element))){for(n=0;r.length>n;n++)if(r[n]===o[s].element[0]){o[s].proportions().height=0;continue t}o[s].visible="none"!==o[s].element.css("display"),o[s].visible&&("mousedown"===a&&o[s]._activate.call(o[s],i),o[s].offset=o[s].element.offset(),o[s].proportions({width:o[s].element[0].offsetWidth,height:o[s].element[0].offsetHeight}))}},drop:function(e,i){var s=!1;return t.each((t.ui.ddmanager.droppables[e.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&t.ui.intersect(e,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(e,i){e.element.parentsUntil("body").bind("scroll.droppable",function(){e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)})},drag:function(e,i){e.options.refreshPositions&&t.ui.ddmanager.prepareOffsets(e,i),t.each(t.ui.ddmanager.droppables[e.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,o,a=t.ui.intersect(e,this,this.options.tolerance),r=!a&&this.isover?"isout":a&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,o=this.element.parents(":data(ui-droppable)").filter(function(){return t.data(this,"ui-droppable").options.scope===n}),o.length&&(s=t.data(o[0],"ui-droppable"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(e,i){e.element.parentsUntil("body").unbind("scroll.droppable"),e.options.refreshPositions||t.ui.ddmanager.prepareOffsets(e,i)}}}(jQuery),function(t){function e(t){return parseInt(t,10)||0}function i(t){return!isNaN(parseInt(t,10))}t.widget("ui.resizable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var e,i,s,n,o,a=this,r=this.options;if(this.element.addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),e=this.handles.split(","),this.handles={},i=0;e.length>i;i++)s=t.trim(e[i]),o="ui-resizable-"+s,n=t("<div class='ui-resizable-handle "+o+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(e){var i,s,n,o;e=e||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=t(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=t(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(n,o),this._proportionallyResize()),t(this.handles[i]).length},this._renderAxis(this.element),this._handles=t(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),t(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(t(this).removeClass("ui-resizable-autohide"),a._handles.show())}).mouseleave(function(){r.disabled||a.resizing||(t(this).addClass("ui-resizable-autohide"),a._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var e,i=function(e){t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(e){var i,s,n=!1;for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,o,a=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=e(this.helper.css("left")),n=e(this.helper.css("top")),a.containment&&(s+=t(a.containment).scrollLeft()||0,n+=t(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,o=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===o?this.axis+"-resize":o),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(e){var i,s=this.helper,n={},o=this.originalMousePosition,a=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,c=this.size.height,u=e.pageX-o.left||0,d=e.pageY-o.top||0,p=this._change[a];return p?(i=p.apply(this,[e,u,d]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==c&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(n)||this._trigger("resize",e,this.ui()),!1):!1},_mouseStop:function(e){this.resizing=!1;var i,s,n,o,a,r,h,l=this.options,c=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&t.ui.hasScroll(i[0],"left")?0:c.sizeDiff.height,o=s?0:c.sizeDiff.width,a={width:c.helper.width()-o,height:c.helper.height()-n},r=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null,h=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(a,{top:h,left:r})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(t){var e,s,n,o,a,r=this.options;a={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=a.minHeight*this.aspectRatio,n=a.minWidth/this.aspectRatio,s=a.maxHeight*this.aspectRatio,o=a.maxWidth/this.aspectRatio,e>a.minWidth&&(a.minWidth=e),n>a.minHeight&&(a.minHeight=n),a.maxWidth>s&&(a.maxWidth=s),a.maxHeight>o&&(a.maxHeight=o)),this._vBoundaries=a},_updateCache:function(t){this.offset=this.helper.offset(),i(t.left)&&(this.position.left=t.left),i(t.top)&&(this.position.top=t.top),i(t.height)&&(this.size.height=t.height),i(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,s=this.size,n=this.axis;return i(t.height)?t.width=t.height*this.aspectRatio:i(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===n&&(t.left=e.left+(s.width-t.width),t.top=null),"nw"===n&&(t.top=e.top+(s.height-t.height),t.left=e.left+(s.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,s=this.axis,n=i(t.width)&&e.maxWidth&&e.maxWidth<t.width,o=i(t.height)&&e.maxHeight&&e.maxHeight<t.height,a=i(t.width)&&e.minWidth&&e.minWidth>t.width,r=i(t.height)&&e.minHeight&&e.minHeight>t.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,c=/sw|nw|w/.test(s),u=/nw|ne|n/.test(s);return a&&(t.width=e.minWidth),r&&(t.height=e.minHeight),n&&(t.width=e.maxWidth),o&&(t.height=e.maxHeight),a&&c&&(t.left=h-e.minWidth),n&&c&&(t.left=h-e.maxWidth),r&&u&&(t.top=l-e.minHeight),o&&u&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var t,e,i,s,n,o=this.helper||this.element;for(t=0;this._proportionallyResizeElements.length>t;t++){if(n=this._proportionallyResizeElements[t],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],e=0;i.length>e;e++)this.borderDif[e]=(parseInt(i[e],10)||0)+(parseInt(s[e],10)||0);n.css({height:o.height()-this.borderDif[0]-this.borderDif[2]||0,width:o.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var e=this.element,i=this.options;this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition;return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,o=n.length&&/textarea/i.test(n[0].nodeName),a=o&&t.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=o?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-a},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,c=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(t.extend(h,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&t(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,o,a,r,h,l=t(this).data("ui-resizable"),c=l.options,u=l.element,d=c.containment,p=d instanceof t?d.get(0):/parent/.test(d)?u.parent().get(0):d;p&&(l.containerElement=t(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(i=t(p),s=[],t(["Top","Right","Left","Bottom"]).each(function(t,n){s[t]=e(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,o=l.containerSize.height,a=l.containerSize.width,r=t.ui.hasScroll(p,"left")?p.scrollWidth:a,h=t.ui.hasScroll(p)?p.scrollHeight:o,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(e){var i,s,n,o,a=t(this).data("ui-resizable"),r=a.options,h=a.containerOffset,l=a.position,c=a._aspectRatio||e.shiftKey,u={top:0,left:0},d=a.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(u=h),l.left<(a._helper?h.left:0)&&(a.size.width=a.size.width+(a._helper?a.position.left-h.left:a.position.left-u.left),c&&(a.size.height=a.size.width/a.aspectRatio),a.position.left=r.helper?h.left:0),l.top<(a._helper?h.top:0)&&(a.size.height=a.size.height+(a._helper?a.position.top-h.top:a.position.top),c&&(a.size.width=a.size.height*a.aspectRatio),a.position.top=a._helper?h.top:0),a.offset.left=a.parentData.left+a.position.left,a.offset.top=a.parentData.top+a.position.top,i=Math.abs((a._helper?a.offset.left-u.left:a.offset.left-u.left)+a.sizeDiff.width),s=Math.abs((a._helper?a.offset.top-u.top:a.offset.top-h.top)+a.sizeDiff.height),n=a.containerElement.get(0)===a.element.parent().get(0),o=/relative|absolute/.test(a.containerElement.css("position")),n&&o&&(i-=Math.abs(a.parentData.left)),i+a.size.width>=a.parentData.width&&(a.size.width=a.parentData.width-i,c&&(a.size.height=a.size.width/a.aspectRatio)),s+a.size.height>=a.parentData.height&&(a.size.height=a.parentData.height-s,c&&(a.size.width=a.size.height*a.aspectRatio))},stop:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.containerOffset,n=e.containerPosition,o=e.containerElement,a=t(e.helper),r=a.offset(),h=a.outerWidth()-e.sizeDiff.width,l=a.outerHeight()-e.sizeDiff.height;e._helper&&!i.animate&&/relative/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l}),e._helper&&!i.animate&&/static/.test(o.css("position"))&&t(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=function(e){t(e).each(function(){var e=t(this);e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):t.each(i.alsoResize,function(t){s(t)})},resize:function(e,i){var s=t(this).data("ui-resizable"),n=s.options,o=s.originalSize,a=s.originalPosition,r={height:s.size.height-o.height||0,width:s.size.width-o.width||0,top:s.position.top-a.top||0,left:s.position.left-a.left||0},h=function(e,s){t(e).each(function(){var e=t(this),n=t(this).data("ui-resizable-alsoresize"),o={},a=s&&s.length?s:e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];t.each(a,function(t,e){var i=(n[e]||0)+(r[e]||0);i&&i>=0&&(o[e]=i||null)}),e.css(o)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):t.each(n.alsoResize,function(t,e){h(t,e)})},stop:function(){t(this).removeData("resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size;e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).data("ui-resizable");e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).data("ui-resizable");e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e=t(this).data("ui-resizable"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,c=Math.round((s.width-n.width)/h)*h,u=Math.round((s.height-n.height)/l)*l,d=n.width+c,p=n.height+u,f=i.maxWidth&&d>i.maxWidth,g=i.maxHeight&&p>i.maxHeight,m=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,m&&(d+=h),v&&(p+=l),f&&(d-=h),g&&(p-=l),/^(se|s|e)$/.test(a)?(e.size.width=d,e.size.height=p):/^(ne)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.top=o.top-u):/^(sw)$/.test(a)?(e.size.width=d,e.size.height=p,e.position.left=o.left-c):(p-l>0?(e.size.height=p,e.position.top=o.top-u):(e.size.height=l,e.position.top=o.top+n.height-l),d-h>0?(e.size.width=d,e.position.left=o.left-c):(e.size.width=h,e.position.left=o.left+n.width-h))}})}(jQuery),function(t){t.widget("ui.selectable",t.ui.mouse,{version:"1.10.4",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var e,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){e=t(i.options.filter,i.element[0]),e.addClass("ui-selectee"),e.each(function(){var e=t(this),i=e.offset();t.data(this,"selectable-item",{element:this,$element:e,left:i.left,top:i.top,right:i.left+e.outerWidth(),bottom:i.top+e.outerHeight(),startselected:!1,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=e.addClass("ui-selectee"),this._mouseInit(),this.helper=t("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(e){var i=this,s=this.options;this.opos=[e.pageX,e.pageY],this.options.disabled||(this.selectees=t(s.filter,this.element[0]),this._trigger("start",e),t(s.appendTo).append(this.helper),this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=t.data(this,"selectable-item");s.startselected=!0,e.metaKey||e.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",e,{unselecting:s.element}))}),t(e.target).parents().addBack().each(function(){var s,n=t.data(this,"selectable-item");return n?(s=!e.metaKey&&!e.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",e,{selecting:n.element}):i._trigger("unselecting",e,{unselecting:n.element}),!1):undefined}))},_mouseDrag:function(e){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,o=this.opos[0],a=this.opos[1],r=e.pageX,h=e.pageY;return o>r&&(i=r,r=o,o=i),a>h&&(i=h,h=a,a=i),this.helper.css({left:o,top:a,width:r-o,height:h-a}),this.selectees.each(function(){var i=t.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||o>i.right||i.top>h||a>i.bottom):"fit"===n.tolerance&&(l=i.left>o&&r>i.right&&i.top>a&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",e,{selecting:i.element}))):(i.selecting&&((e.metaKey||e.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",e,{unselecting:i.element}))),i.selected&&(e.metaKey||e.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",e,{unselecting:i.element})))))}),!1}},_mouseStop:function(e){var i=this;return this.dragged=!1,t(".ui-unselecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",e,{unselected:s.element})}),t(".ui-selecting",this.element[0]).each(function(){var s=t.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",e,{selected:s.element})}),this._trigger("stop",e),this.helper.remove(),!1}})}(jQuery),function(t){function e(t,e,i){return t>e&&e+i>t}function i(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))}t.widget("ui.sortable",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var t=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===t.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var t=this.items.length-1;t>=0;t--)this.items[t].item.removeData(this.widgetName+"-item");return this},_setOption:function(e,i){"disabled"===e?(this.options[e]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):t.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(e,i){var s=null,n=!1,o=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,o.widgetName+"-item")===o?(s=t(this),!1):undefined}),t.data(e.target,o.widgetName+"-item")===o&&(s=t(e.target)),s?!this.options.handle||i||(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(e,i,s){var n,o,a=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),a.containment&&this._setContainment(),a.cursor&&"auto"!==a.cursor&&(o=this.document.find("body"),this.storedCursor=o.css("cursor"),o.css("cursor",a.cursor),this.storedStylesheet=t("<style>*{ cursor: "+a.cursor+" !important; }</style>").appendTo(o)),a.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",a.opacity)),a.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",a.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",e,this._uiHash(this));return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,n,o,a=this.options,r=!1;for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<a.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+a.scrollSpeed:e.pageY-this.overflowOffset.top<a.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-a.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<a.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+a.scrollSpeed:e.pageX-this.overflowOffset.left<a.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-a.scrollSpeed)):(e.pageY-t(document).scrollTop()<a.scrollSensitivity?r=t(document).scrollTop(t(document).scrollTop()-a.scrollSpeed):t(window).height()-(e.pageY-t(document).scrollTop())<a.scrollSensitivity&&(r=t(document).scrollTop(t(document).scrollTop()+a.scrollSpeed)),e.pageX-t(document).scrollLeft()<a.scrollSensitivity?r=t(document).scrollLeft(t(document).scrollLeft()-a.scrollSpeed):t(window).width()-(e.pageX-t(document).scrollLeft())<a.scrollSensitivity&&(r=t(document).scrollLeft(t(document).scrollLeft()+a.scrollSpeed))),r!==!1&&t.ui.ddmanager&&!a.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],o=this._intersectsWithPointer(s),o&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===o?"next":"prev"]()[0]!==n&&!t.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!t.contains(this.element[0],n):!0)){if(this.direction=1===o?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;
this._rearrange(e,s),this._trigger("change",e,this._uiHash());break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,n=this.placeholder.offset(),o=this.options.axis,a={};o&&"x"!==o||(a.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),o&&"y"!==o||(a.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(a,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var e=this.containers.length-1;e>=0;e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/);i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[];return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,o=t.left,a=o+t.width,r=t.top,h=r+t.height,l=this.offset.click.top,c=this.offset.click.left,u="x"===this.options.axis||s+l>r&&h>s+l,d="y"===this.options.axis||e+c>o&&a>e+c,p=u&&d;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?p:e+this.helperProportions.width/2>o&&a>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(t){var i="x"===this.options.axis||e(this.positionAbs.top+this.offset.click.top,t.top,t.height),s="y"===this.options.axis||e(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=i&&s,o=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return n?this.floating?a&&"right"===a||"down"===o?2:1:o&&("down"===o?2:1):!1},_intersectsWithSides:function(t){var i=e(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),s=e(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),n=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return this.floating&&o?"right"===o&&s||"left"===o&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top;return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left;return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this.refreshPositions(),this},_connectWith:function(){var t=this.options;return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){r.push(this)}var s,n,o,a,r=[],h=[],l=this._connectWith();if(l&&e)for(s=l.length-1;s>=0;s--)for(o=t(l[s]),n=o.length-1;n>=0;n--)a=t.data(o[n],this.widgetFullName),a&&a!==this&&!a.options.disabled&&h.push([t.isFunction(a.options.items)?a.options.items.call(a.element):t(a.options.items,a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),a]);for(h.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return t(r)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=t.grep(this.items,function(t){for(var i=0;e.length>i;i++)if(e[i]===t.item[0])return!1;return!0})},_refreshItems:function(e){this.items=[],this.containers=[this];var i,s,n,o,a,r,h,l,c=this.items,u=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],d=this._connectWith();if(d&&this.ready)for(i=d.length-1;i>=0;i--)for(n=t(d[i]),s=n.length-1;s>=0;s--)o=t.data(n[s],this.widgetFullName),o&&o!==this&&!o.options.disabled&&(u.push([t.isFunction(o.options.items)?o.options.items.call(o.element[0],e,{item:this.currentItem}):t(o.options.items,o.element),o]),this.containers.push(o));for(i=u.length-1;i>=0;i--)for(a=u[i][1],r=u[i][0],s=0,l=r.length;l>s;s++)h=t(r[s]),h.data(this.widgetName+"-item",a),c.push({item:h,instance:a,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,o;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=n.outerWidth(),s.height=n.outerHeight()),o=n.offset(),s.left=o.left,s.top=o.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)o=this.containers[i].element.offset(),this.containers[i].containerCache.left=o.left,this.containers[i].containerCache.top=o.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(e){e=e||this;var i,s=e.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),n=t("<"+s+">",e.document[0]).addClass(i||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?e.currentItem.children().each(function(){t("<td>&#160;</td>",e.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",e.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(t,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_contactContainers:function(s){var n,o,a,r,h,l,c,u,d,p,f=null,g=null;for(n=this.containers.length-1;n>=0;n--)if(!t.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&t.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],g=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[g].containerCache.over||(this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1);else{for(a=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",c=this.positionAbs[h]+this.offset.click[h],o=this.items.length-1;o>=0;o--)t.contains(this.containers[g].element[0],this.items[o].item[0])&&this.items[o].item[0]!==this.currentItem[0]&&(!p||e(this.positionAbs.top+this.offset.click.top,this.items[o].top,this.items[o].height))&&(u=this.items[o].item.offset()[h],d=!1,Math.abs(u-c)>Math.abs(u+this.items[o][l]-c)&&(d=!0,u+=this.items[o][l]),a>Math.abs(u-c)&&(a=Math.abs(u-c),r=this.items[o],this.direction=d?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[g])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[g].element,!0),this._trigger("change",s,this._uiHash()),this.containers[g]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[g],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[g]._trigger("over",s,this._uiHash(this)),this.containers[g].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var e=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position();return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,t("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(t("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(e=t(n.containment)[0],i=t(n.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position);var s="absolute"===e?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,o=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():o?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():o?0:n.scrollLeft())*s}},_generatePosition:function(e){var i,s,n=this.options,o=e.pageX,a=e.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(o=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(a=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(o=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(a=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((a-this.originalPageY)/n.grid[1])*n.grid[1],a=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((o-this.originalPageX)/n.grid[0])*n.grid[0],o=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!e&&n.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||n.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(n.push(function(t){this._trigger("remove",t,this._uiHash())}),n.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)e||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!e){for(this._trigger("beforeStop",t,this._uiHash()),s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}if(e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!e){for(s=0;n.length>s;s++)n[s].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this;return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})}(jQuery),function(t,e){var i="ui-effects-";t.effects={effect:{}},function(t,e){function i(t,e,i){var s=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:t>s.max?s.max:t)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(t,o){var a,r=o.re.exec(i),h=r&&o.parse(r),l=o.space||"rgba";return h?(a=s[l](h),s[c[l].cache]=a[c[l].cache],n=s._rgba=a._rgba,!1):e}),n.length?("0,0,0,0"===n.join()&&t.extend(n,o.transparent),s):o[i]}function n(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var o,a="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],l=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=l.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),l.fn=t.extend(l.prototype,{parse:function(n,a,r,h){if(n===e)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=t(n).css(a),a=e);var u=this,d=t.type(n),p=this._rgba=[];return a!==e&&(n=[n,a,r,h],d="array"),"string"===d?this.parse(s(n)||o._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(n[e.idx],e)}),this):"object"===d?(n instanceof l?f(c,function(t,e){n[e.cache]&&(u[e.cache]=n[e.cache].slice())}):f(c,function(e,s){var o=s.cache;f(s.props,function(t,e){if(!u[o]&&s.to){if("alpha"===t||null==n[t])return;u[o]=s.to(u._rgba)}u[o][e.idx]=i(n[t],e,!0)}),u[o]&&0>t.inArray(null,u[o].slice(0,3))&&(u[o][3]=1,s.from&&(u._rgba=s.from(u[o])))}),this):e},is:function(t){var i=l(t),s=!0,n=this;return f(c,function(t,o){var a,r=i[o.cache];return r&&(a=n[o.cache]||o.to&&o.to(n._rgba)||[],f(o.props,function(t,i){return null!=r[i.idx]?s=r[i.idx]===a[i.idx]:e})),s}),s},_space:function(){var t=[],e=this;return f(c,function(i,s){e[s.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var s=l(t),n=s._space(),o=c[n],a=0===this.alpha()?l("transparent"):this,r=a[o.cache]||o.to(a._rgba),h=r.slice();return s=s[o.cache],f(o.props,function(t,n){var o=n.idx,a=r[o],l=s[o],c=u[n.type]||{};null!==l&&(null===a?h[o]=l:(c.mod&&(l-a>c.mod/2?a+=c.mod:a-l>c.mod/2&&(a-=c.mod)),h[o]=i((l-a)*e+a,n)))}),this[n](h)},blend:function(e){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(e)._rgba;return l(t.map(i,function(t,e){return(1-s)*n[e]+s*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,function(t){return t=(t||0).toString(16),1===t.length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,o=t[2]/255,a=t[3],r=Math.max(s,n,o),h=Math.min(s,n,o),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-o)/l+360:n===r?60*(o-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=u?l/c:l/(2-c),[Math.round(e)%360,i,u,null==a?1:a]},c.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],o=t[3],a=.5>=s?s*(1+i):s+i-s*i,r=2*s-a;return[Math.round(255*n(r,a,e+1/3)),Math.round(255*n(r,a,e)),Math.round(255*n(r,a,e-1/3)),o]},f(c,function(s,n){var o=n.props,a=n.cache,h=n.to,c=n.from;l.fn[s]=function(s){if(h&&!this[a]&&(this[a]=h(this._rgba)),s===e)return this[a].slice();var n,r=t.type(s),u="array"===r||"object"===r?s:arguments,d=this[a].slice();return f(o,function(t,e){var s=u["object"===r?t:e.idx];null==s&&(s=d[e.idx]),d[e.idx]=i(s,e)}),c?(n=l(c(d)),n[a]=d,n):l(d)},f(o,function(e,i){l.fn[e]||(l.fn[e]=function(n){var o,a=t.type(n),h="alpha"===e?this._hsla?"hsla":"rgba":s,l=this[h](),c=l[i.idx];return"undefined"===a?c:("function"===a&&(n=n.call(this,c),a=t.type(n)),null==n&&i.empty?this:("string"===a&&(o=r.exec(n),o&&(n=c+parseFloat(o[2])*("+"===o[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,n){var o,a,r="";if("transparent"!==n&&("string"!==t.type(n)||(o=s(n)))){if(n=l(o||n),!d.rgba&&1!==n._rgba[3]){for(a="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&a&&a.style;)try{r=t.css(a,"backgroundColor"),a=a.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{e.style[i]=n}catch(h){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=l(e.elem,i),e.end=l(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},l.hook(a),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,s){e["border"+s+"Color"]=t}),e}},o=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,o={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(o[t.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(o[i]=n[i]);return o}function s(e,i){var s,n,a={};for(s in i)n=i[s],e[s]!==n&&(o[s]||(t.fx.step[s]||!isNaN(parseFloat(n)))&&(a[s]=n));return a}var n=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,o,a,r){var h=t.speed(o,a,r);return this.queue(function(){var o,a=t(this),r=a.attr("class")||"",l=h.children?a.find("*").addBack():a;l=l.map(function(){var e=t(this);return{el:e,start:i(this)}}),o=function(){t.each(n,function(t,i){e[i]&&a[i+"Class"](e[i])})},o(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),a.attr("class",r),l=l.map(function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()}),t.when.apply(t,l.get()).done(function(){o(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),h.complete.call(a[0])})})},t.fn.extend({addClass:function(e){return function(i,s,n,o){return s?t.effects.animateClass.call(this,{add:i},s,n,o):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,s,n,o){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,o):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(s,n,o,a,r){return"boolean"==typeof n||n===e?o?t.effects.animateClass.call(this,n?{add:s}:{remove:s},o,a,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:s},n,o,a)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,o){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,o)}})}(),function(){function s(e,i,s,n){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),t.isFunction(s)&&(n=s,s=null),i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function n(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.4",save:function(t,e){for(var s=0;e.length>s;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},restore:function(t,s){var n,o;for(o=0;s.length>o;o++)null!==s[o]&&(n=t.data(i+s[o]),n===e&&(n=""),t.css(s[o],n))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:e.width(),height:e.height()},o=document.activeElement;try{o.id}catch(a){o=document.body}return e.wrap(s),(e[0]===o||t.contains(e[0],o))&&t(o).focus(),s=e.parent(),"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,s,n){return n=n||{},t.each(i,function(t,i){var o=e.cssUnit(i);o[0]>0&&(n[i]=o[0]*s+o[1])}),n}}),t.fn.extend({effect:function(){function e(e){function s(){t.isFunction(o)&&o.call(n[0]),t.isFunction(e)&&e()}var n=t(this),o=i.complete,r=i.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),s()):a.call(n[0],i,s)}var i=s.apply(this,arguments),n=i.mode,o=i.queue,a=t.effects.effect[i.effect];return t.fx.off||!a?n?this[n](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):o===!1?this.each(e):this.queue(o||"fx",e)},show:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(n(e))return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(n(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])}),s}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;((e=Math.pow(2,--i))-1)/11>t;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()}(jQuery),function(t){var e=0,i={},s={};i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="hide",s.height=s.paddingTop=s.paddingBottom=s.borderTopWidth=s.borderBottomWidth="show",t.widget("ui.accordion",{version:"1.10.4",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),e.collapsible||e.active!==!1&&null!=e.active||(e.active=0),this._processPanels(),0>e.active&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t(),content:this.active.length?this.active.next():t()}},_createIcons:function(){var e=this.options.icons;e&&(t("<span>").addClass("ui-accordion-header-icon ui-icon "+e.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader),this.headers.addClass("ui-accordion-icons"))
},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),t=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){return"active"===t?(this._activate(e),undefined):("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),"collapsible"!==t||e||this.options.active!==!1||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons()),"disabled"===t&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!e),undefined)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),o=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:o=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:o=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:o=this.headers[0];break;case i.END:o=this.headers[s-1]}o&&(t(e.target).attr("tabIndex",-1),t(o).attr("tabIndex",0),o.focus(),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().focus()},refresh:function(){var e=this.options;this._processPanels(),e.active===!1&&e.collapsible===!0||!this.headers.length?(e.active=!1,this.active=t()):e.active===!1?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var i,s=this.options,n=s.heightStyle,o=this.element.parent(),a=this.accordionId="ui-accordion-"+(this.element.attr("id")||++e);this.active=this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(e){var i=t(this),s=i.attr("id"),n=i.next(),o=n.attr("id");s||(s=a+"-header-"+e,i.attr("id",s)),o||(o=a+"-panel-"+e,n.attr("id",o)),i.attr("aria-controls",o),n.attr("aria-labelledby",s)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(s.event),"fill"===n?(i=o.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.headers.each(function(){i-=t(this).outerHeight(!0)}),this.headers.next().each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===n&&(i=0,this.headers.next().each(function(){i=Math.max(i,t(this).css("height","").height())}).height(i))},_activate:function(e){var i=this._findActive(e)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n[0]===s[0],a=o&&i.collapsible,r=a?t():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:a?t():n,newPanel:r};e.preventDefault(),o&&!i.collapsible||this._trigger("beforeActivate",e,l)===!1||(i.active=a?!1:this.headers.index(n),this.active=o?t():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),o||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr("aria-selected","false"),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})},_animate:function(t,e,n){var o,a,r,h=this,l=0,c=t.length&&(!e.length||t.index()<e.index()),u=this.options.animate||{},d=c&&u.down||u,p=function(){h._toggleComplete(n)};return"number"==typeof d&&(r=d),"string"==typeof d&&(a=d),a=a||d.easing||u.easing,r=r||d.duration||u.duration,e.length?t.length?(o=t.show().outerHeight(),e.animate(i,{duration:r,easing:a,step:function(t,e){e.now=Math.round(t)}}),t.hide().animate(s,{duration:r,easing:a,complete:p,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?l+=i.now:"content"!==h.options.heightStyle&&(i.now=Math.round(o-e.outerHeight()-l),l=0)}}),undefined):e.animate(i,r,a,p):t.animate(s,r,a,p)},_toggleComplete:function(t){var e=t.oldPanel;e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}})}(jQuery),function(t){t.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o?!0:a?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,undefined;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:case o.NUMPAD_ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),undefined):(this._searchTimeout(t),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(t),this._change(t),undefined)}}),this._initSource(),this.menu=t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];t(e.target).closest(".ui-menu-item").length||this._delay(function(){var e=this;this.document.one("mousedown",function(s){s.target===e.element[0]||s.target===i||t.contains(i,s.target)||e.close()})})},menufocus:function(e,i){if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",e,{item:s})?e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=t("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e||(e=this.element.closest(".ui-front")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):undefined},_search:function(t){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<a>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[t](e),undefined):(this.search(null,e),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.text(e))}})}(jQuery),function(t){var e,i="ui-button ui-widget ui-state-default ui-corner-all",s="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",n=function(){var e=t(this);setTimeout(function(){e.find(":ui-button").button("refresh")},1)},o=function(e){var i=e.name,s=e.form,n=t([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?t(s).find("[name='"+i+"']"):t("[name='"+i+"']",e.ownerDocument).filter(function(){return!this.form})),n};t.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,n),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var s=this,a=this.options,r="checkbox"===this.type||"radio"===this.type,h=r?"":"ui-state-active";null===a.label&&(a.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){a.disabled||this===e&&t(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){a.disabled||t(this).removeClass(h)}).bind("click"+this.eventNamespace,function(t){a.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),r&&this.element.bind("change"+this.eventNamespace,function(){s.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return a.disabled?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled)return!1;t(this).addClass("ui-state-active"),s.buttonElement.attr("aria-pressed","true");var e=s.element[0];o(e).not(e).map(function(){return t(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return a.disabled?!1:(t(this).addClass("ui-state-active"),e=this,s.document.one("mouseup",function(){e=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return a.disabled?!1:(t(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(e){return a.disabled?!1:((e.keyCode===t.ui.keyCode.SPACE||e.keyCode===t.ui.keyCode.ENTER)&&t(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){t(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===t.ui.keyCode.SPACE&&t(this).click()})),this._setOption("disabled",a.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(i+" ui-state-active "+s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){return this._super(t,e),"disabled"===t?(this.element.prop("disabled",!!e),e&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh:function(){var e=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");e!==this.options.disabled&&this._setOption("disabled",e),"radio"===this.type?o(this.element[0]).each(function(){t(this).is(":checked")?t(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var e=this.buttonElement.removeClass(s),i=t("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),n=this.options.icons,o=n.primary&&n.secondary,a=[];n.primary||n.secondary?(this.options.text&&a.push("ui-button-text-icon"+(o?"s":n.primary?"-primary":"-secondary")),n.primary&&e.prepend("<span class='ui-button-icon-primary ui-icon "+n.primary+"'></span>"),n.secondary&&e.append("<span class='ui-button-icon-secondary ui-icon "+n.secondary+"'></span>"),this.options.text||(a.push(o?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||e.attr("title",t.trim(i)))):a.push("ui-button-text-only"),e.addClass(a.join(" "))}}),t.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var e="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(e?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return t(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})}(jQuery),function(t,e){function i(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},t.extend(this._defaults,this.regional[""]),this.dpDiv=s(t("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function s(e){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(i,"mouseout",function(){t(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",function(){t.datepicker._isDisabledDatepicker(o.inline?e.parent()[0]:o.input[0])||(t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),t(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&t(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&t(this).addClass("ui-datepicker-next-hover"))})}function n(e,i){t.extend(e,i);for(var s in i)null==i[s]&&(e[s]=i[s]);return e}t.extend(t.ui,{datepicker:{version:"1.10.4"}});var o,a="datepicker";t.extend(i.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(t){return n(this._defaults,t||{}),this},_attachDatepicker:function(e,i){var s,n,o;s=e.nodeName.toLowerCase(),n="div"===s||"span"===s,e.id||(this.uuid+=1,e.id="dp"+this.uuid),o=this._newInst(t(e),n),o.settings=t.extend({},i||{}),"input"===s?this._connectDatepicker(e,o):n&&this._inlineDatepicker(e,o)},_newInst:function(e,i){var n=e[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:n,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?s(t("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(e,i){var s=t(e);i.append=t([]),i.trigger=t([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),t.data(e,a,i),i.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,i){var s,n,o,a=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),a&&(i.append=t("<span class='"+this._appendClass+"'>"+a+"</span>"),e[r?"before":"after"](i.append)),e.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&e.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),o=this._get(i,"buttonImage"),i.trigger=t(this._get(i,"buttonImageOnly")?t("<img/>").addClass(this._triggerClass).attr({src:o,alt:n,title:n}):t("<button type='button'></button>").addClass(this._triggerClass).html(o?t("<img/>").attr({src:o,alt:n,title:n}):n)),e[r?"before":"after"](i.trigger),i.trigger.click(function(){return t.datepicker._datepickerShowing&&t.datepicker._lastInput===e[0]?t.datepicker._hideDatepicker():t.datepicker._datepickerShowing&&t.datepicker._lastInput!==e[0]?(t.datepicker._hideDatepicker(),t.datepicker._showDatepicker(e[0])):t.datepicker._showDatepicker(e[0]),!1}))},_autoSize:function(t){if(this._get(t,"autoSize")&&!t.inline){var e,i,s,n,o=new Date(2009,11,20),a=this._get(t,"dateFormat");a.match(/[DM]/)&&(e=function(t){for(i=0,s=0,n=0;t.length>n;n++)t[n].length>i&&(i=t[n].length,s=n);return s},o.setMonth(e(this._get(t,a.match(/MM/)?"monthNames":"monthNamesShort"))),o.setDate(e(this._get(t,a.match(/DD/)?"dayNames":"dayNamesShort"))+20-o.getDay())),t.input.attr("size",this._formatDate(t,o).length)}},_inlineDatepicker:function(e,i){var s=t(e);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),t.data(e,a,i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(e),i.dpDiv.css("display","block"))},_dialogDatepicker:function(e,i,s,o,r){var h,l,c,u,d,p=this._dialogInst;return p||(this.uuid+=1,h="dp"+this.uuid,this._dialogInput=t("<input type='text' id='"+h+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),t("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},t.data(this._dialogInput[0],a,p)),n(p.settings,o||{}),i=i&&i.constructor===Date?this._formatDate(p,i):i,this._dialogInput.val(i),this._pos=r?r.length?r:[r.pageX,r.pageY]:null,this._pos||(l=document.documentElement.clientWidth,c=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[l/2-100+u,c/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),t.blockUI&&t.blockUI(this.dpDiv),t.data(this._dialogInput[0],a,p),this},_destroyDatepicker:function(e){var i,s=t(e),n=t.data(e,a);s.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),t.removeData(e,a),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty())},_enableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}))},_disableDatepicker:function(e){var i,s,n=t(e),o=t.data(e,a);n.hasClass(this.markerClassName)&&(i=e.nodeName.toLowerCase(),"input"===i?(e.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=t.map(this._disabledInputs,function(t){return t===e?null:t}),this._disabledInputs[this._disabledInputs.length]=e)},_isDisabledDatepicker:function(t){if(!t)return!1;for(var e=0;this._disabledInputs.length>e;e++)if(this._disabledInputs[e]===t)return!0;return!1},_getInst:function(e){try{return t.data(e,a)}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(i,s,o){var a,r,h,l,c=this._getInst(i);return 2===arguments.length&&"string"==typeof s?"defaults"===s?t.extend({},t.datepicker._defaults):c?"all"===s?t.extend({},c.settings):this._get(c,s):null:(a=s||{},"string"==typeof s&&(a={},a[s]=o),c&&(this._curInst===c&&this._hideDatepicker(),r=this._getDateDatepicker(i,!0),h=this._getMinMaxDate(c,"min"),l=this._getMinMaxDate(c,"max"),n(c.settings,a),null!==h&&a.dateFormat!==e&&a.minDate===e&&(c.settings.minDate=this._formatDate(c,h)),null!==l&&a.dateFormat!==e&&a.maxDate===e&&(c.settings.maxDate=this._formatDate(c,l)),"disabled"in a&&(a.disabled?this._disableDatepicker(i):this._enableDatepicker(i)),this._attachments(t(i),c),this._autoSize(c),this._setDate(c,r),this._updateAlternate(c),this._updateDatepicker(c)),e)},_changeDatepicker:function(t,e,i){this._optionDatepicker(t,e,i)},_refreshDatepicker:function(t){var e=this._getInst(t);e&&this._updateDatepicker(e)},_setDateDatepicker:function(t,e){var i=this._getInst(t);i&&(this._setDate(i,e),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(t,e){var i=this._getInst(t);return i&&!i.inline&&this._setDateFromField(i,e),i?this._getDate(i):null},_doKeyDown:function(e){var i,s,n,o=t.datepicker._getInst(e.target),a=!0,r=o.dpDiv.is(".ui-datepicker-rtl");if(o._keyEvent=!0,t.datepicker._datepickerShowing)switch(e.keyCode){case 9:t.datepicker._hideDatepicker(),a=!1;break;case 13:return n=t("td."+t.datepicker._dayOverClass+":not(."+t.datepicker._currentClass+")",o.dpDiv),n[0]&&t.datepicker._selectDay(e.target,o.selectedMonth,o.selectedYear,n[0]),i=t.datepicker._get(o,"onSelect"),i?(s=t.datepicker._formatDate(o),i.apply(o.input?o.input[0]:null,[s,o])):t.datepicker._hideDatepicker(),!1;case 27:t.datepicker._hideDatepicker();break;case 33:t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 34:t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");
break;case 35:(e.ctrlKey||e.metaKey)&&t.datepicker._clearDate(e.target),a=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&t.datepicker._gotoToday(e.target),a=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?1:-1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?-t.datepicker._get(o,"stepBigMonths"):-t.datepicker._get(o,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,-7,"D"),a=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,r?-1:1,"D"),a=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&t.datepicker._adjustDate(e.target,e.ctrlKey?+t.datepicker._get(o,"stepBigMonths"):+t.datepicker._get(o,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&t.datepicker._adjustDate(e.target,7,"D"),a=e.ctrlKey||e.metaKey;break;default:a=!1}else 36===e.keyCode&&e.ctrlKey?t.datepicker._showDatepicker(this):a=!1;a&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(i){var s,n,o=t.datepicker._getInst(i.target);return t.datepicker._get(o,"constrainInput")?(s=t.datepicker._possibleChars(t.datepicker._get(o,"dateFormat")),n=String.fromCharCode(null==i.charCode?i.keyCode:i.charCode),i.ctrlKey||i.metaKey||" ">n||!s||s.indexOf(n)>-1):e},_doKeyUp:function(e){var i,s=t.datepicker._getInst(e.target);if(s.input.val()!==s.lastVal)try{i=t.datepicker.parseDate(t.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,t.datepicker._getFormatConfig(s)),i&&(t.datepicker._setDateFromField(s),t.datepicker._updateAlternate(s),t.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!==e.nodeName.toLowerCase()&&(e=t("input",e.parentNode)[0]),!t.datepicker._isDisabledDatepicker(e)&&t.datepicker._lastInput!==e){var i,s,o,a,r,h,l;i=t.datepicker._getInst(e),t.datepicker._curInst&&t.datepicker._curInst!==i&&(t.datepicker._curInst.dpDiv.stop(!0,!0),i&&t.datepicker._datepickerShowing&&t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),s=t.datepicker._get(i,"beforeShow"),o=s?s.apply(e,[e,i]):{},o!==!1&&(n(i.settings,o),i.lastVal=null,t.datepicker._lastInput=e,t.datepicker._setDateFromField(i),t.datepicker._inDialog&&(e.value=""),t.datepicker._pos||(t.datepicker._pos=t.datepicker._findPos(e),t.datepicker._pos[1]+=e.offsetHeight),a=!1,t(e).parents().each(function(){return a|="fixed"===t(this).css("position"),!a}),r={left:t.datepicker._pos[0],top:t.datepicker._pos[1]},t.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),t.datepicker._updateDatepicker(i),r=t.datepicker._checkOffset(i,r,a),i.dpDiv.css({position:t.datepicker._inDialog&&t.blockUI?"static":a?"fixed":"absolute",display:"none",left:r.left+"px",top:r.top+"px"}),i.inline||(h=t.datepicker._get(i,"showAnim"),l=t.datepicker._get(i,"duration"),i.dpDiv.zIndex(t(e).zIndex()+1),t.datepicker._datepickerShowing=!0,t.effects&&t.effects.effect[h]?i.dpDiv.show(h,t.datepicker._get(i,"showOptions"),l):i.dpDiv[h||"show"](h?l:null),t.datepicker._shouldFocusInput(i)&&i.input.focus(),t.datepicker._curInst=i))}},_updateDatepicker:function(e){this.maxRows=4,o=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var i,s=this._getNumberOfMonths(e),n=s[1],a=17;e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&e.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),e.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e===t.datepicker._curInst&&t.datepicker._datepickerShowing&&t.datepicker._shouldFocusInput(e)&&e.input.focus(),e.yearshtml&&(i=e.yearshtml,setTimeout(function(){i===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),i=e.yearshtml=null},0))},_shouldFocusInput:function(t){return t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&!t.input.is(":focus")},_checkOffset:function(e,i,s){var n=e.dpDiv.outerWidth(),o=e.dpDiv.outerHeight(),a=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:t(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:t(document).scrollTop());return i.left-=this._get(e,"isRTL")?n-a:0,i.left-=s&&i.left===e.input.offset().left?t(document).scrollLeft():0,i.top-=s&&i.top===e.input.offset().top+r?t(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+o>l&&l>o?Math.abs(o+r):0),i},_findPos:function(e){for(var i,s=this._getInst(e),n=this._get(s,"isRTL");e&&("hidden"===e.type||1!==e.nodeType||t.expr.filters.hidden(e));)e=e[n?"previousSibling":"nextSibling"];return i=t(e).offset(),[i.left,i.top]},_hideDatepicker:function(e){var i,s,n,o,r=this._curInst;!r||e&&r!==t.data(e,a)||this._datepickerShowing&&(i=this._get(r,"showAnim"),s=this._get(r,"duration"),n=function(){t.datepicker._tidyDialog(r)},t.effects&&(t.effects.effect[i]||t.effects[i])?r.dpDiv.hide(i,t.datepicker._get(r,"showOptions"),s,n):r.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,o=this._get(r,"onClose"),o&&o.apply(r.input?r.input[0]:null,[r.input?r.input.val():"",r]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),t.blockUI&&(t.unblockUI(),t("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(t){t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if(t.datepicker._curInst){var i=t(e.target),s=t.datepicker._getInst(i[0]);(i[0].id!==t.datepicker._mainDivId&&0===i.parents("#"+t.datepicker._mainDivId).length&&!i.hasClass(t.datepicker.markerClassName)&&!i.closest("."+t.datepicker._triggerClass).length&&t.datepicker._datepickerShowing&&(!t.datepicker._inDialog||!t.blockUI)||i.hasClass(t.datepicker.markerClassName)&&t.datepicker._curInst!==s)&&t.datepicker._hideDatepicker()}},_adjustDate:function(e,i,s){var n=t(e),o=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(o,i+("M"===s?this._get(o,"showCurrentAtPos"):0),s),this._updateDatepicker(o))},_gotoToday:function(e){var i,s=t(e),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(e,i,s){var n=t(e),o=this._getInst(n[0]);o["selected"+("M"===s?"Month":"Year")]=o["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(o),this._adjustDate(n)},_selectDay:function(e,i,s,n){var o,a=t(e);t(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(a[0])||(o=this._getInst(a[0]),o.selectedDay=o.currentDay=t("a",n).html(),o.selectedMonth=o.currentMonth=i,o.selectedYear=o.currentYear=s,this._selectDate(e,this._formatDate(o,o.currentDay,o.currentMonth,o.currentYear)))},_clearDate:function(e){var i=t(e);this._selectDate(i,"")},_selectDate:function(e,i){var s,n=t(e),o=this._getInst(n[0]);i=null!=i?i:this._formatDate(o),o.input&&o.input.val(i),this._updateAlternate(o),s=this._get(o,"onSelect"),s?s.apply(o.input?o.input[0]:null,[i,o]):o.input&&o.input.trigger("change"),o.inline?this._updateDatepicker(o):(this._hideDatepicker(),this._lastInput=o.input[0],"object"!=typeof o.input[0]&&o.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var i,s,n,o=this._get(e,"altField");o&&(i=this._get(e,"altFormat")||this._get(e,"dateFormat"),s=this._getDate(e),n=this.formatDate(i,s,this._getFormatConfig(e)),t(o).each(function(){t(this).val(n)}))},noWeekends:function(t){var e=t.getDay();return[e>0&&6>e,""]},iso8601Week:function(t){var e,i=new Date(t.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),e=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((e-i)/864e5)/7)+1},parseDate:function(i,s,n){if(null==i||null==s)throw"Invalid arguments";if(s="object"==typeof s?""+s:s+"",""===s)return null;var o,a,r,h,l=0,c=(n?n.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof c?c:(new Date).getFullYear()%100+parseInt(c,10),d=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,p=(n?n.dayNames:null)||this._defaults.dayNames,f=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,g=(n?n.monthNames:null)||this._defaults.monthNames,m=-1,v=-1,_=-1,b=-1,y=!1,w=function(t){var e=i.length>o+1&&i.charAt(o+1)===t;return e&&o++,e},x=function(t){var e=w(t),i="@"===t?14:"!"===t?20:"y"===t&&e?4:"o"===t?3:2,n=RegExp("^\\d{1,"+i+"}"),o=s.substring(l).match(n);if(!o)throw"Missing number at position "+l;return l+=o[0].length,parseInt(o[0],10)},k=function(i,n,o){var a=-1,r=t.map(w(i)?o:n,function(t,e){return[[e,t]]}).sort(function(t,e){return-(t[1].length-e[1].length)});if(t.each(r,function(t,i){var n=i[1];return s.substr(l,n.length).toLowerCase()===n.toLowerCase()?(a=i[0],l+=n.length,!1):e}),-1!==a)return a+1;throw"Unknown name at position "+l},D=function(){if(s.charAt(l)!==i.charAt(o))throw"Unexpected literal at position "+l;l++};for(o=0;i.length>o;o++)if(y)"'"!==i.charAt(o)||w("'")?D():y=!1;else switch(i.charAt(o)){case"d":_=x("d");break;case"D":k("D",d,p);break;case"o":b=x("o");break;case"m":v=x("m");break;case"M":v=k("M",f,g);break;case"y":m=x("y");break;case"@":h=new Date(x("@")),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"!":h=new Date((x("!")-this._ticksTo1970)/1e4),m=h.getFullYear(),v=h.getMonth()+1,_=h.getDate();break;case"'":w("'")?D():y=!0;break;default:D()}if(s.length>l&&(r=s.substr(l),!/^\s+/.test(r)))throw"Extra/unparsed characters found in date: "+r;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),b>-1)for(v=1,_=b;;){if(a=this._getDaysInMonth(m,v-1),a>=_)break;v++,_-=a}if(h=this._daylightSavingAdjust(new Date(m,v-1,_)),h.getFullYear()!==m||h.getMonth()+1!==v||h.getDate()!==_)throw"Invalid date";return h},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(t,e,i){if(!e)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,o=(i?i.dayNames:null)||this._defaults.dayNames,a=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(e){var i=t.length>s+1&&t.charAt(s+1)===e;return i&&s++,i},l=function(t,e,i){var s=""+e;if(h(t))for(;i>s.length;)s="0"+s;return s},c=function(t,e,i,s){return h(t)?s[e]:i[e]},u="",d=!1;if(e)for(s=0;t.length>s;s++)if(d)"'"!==t.charAt(s)||h("'")?u+=t.charAt(s):d=!1;else switch(t.charAt(s)){case"d":u+=l("d",e.getDate(),2);break;case"D":u+=c("D",e.getDay(),n,o);break;case"o":u+=l("o",Math.round((new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime()-new Date(e.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=l("m",e.getMonth()+1,2);break;case"M":u+=c("M",e.getMonth(),a,r);break;case"y":u+=h("y")?e.getFullYear():(10>e.getYear()%100?"0":"")+e.getYear()%100;break;case"@":u+=e.getTime();break;case"!":u+=1e4*e.getTime()+this._ticksTo1970;break;case"'":h("'")?u+="'":d=!0;break;default:u+=t.charAt(s)}return u},_possibleChars:function(t){var e,i="",s=!1,n=function(i){var s=t.length>e+1&&t.charAt(e+1)===i;return s&&e++,s};for(e=0;t.length>e;e++)if(s)"'"!==t.charAt(e)||n("'")?i+=t.charAt(e):s=!1;else switch(t.charAt(e)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=t.charAt(e)}return i},_get:function(t,i){return t.settings[i]!==e?t.settings[i]:this._defaults[i]},_setDateFromField:function(t,e){if(t.input.val()!==t.lastVal){var i=this._get(t,"dateFormat"),s=t.lastVal=t.input?t.input.val():null,n=this._getDefaultDate(t),o=n,a=this._getFormatConfig(t);try{o=this.parseDate(i,s,a)||n}catch(r){s=e?"":s}t.selectedDay=o.getDate(),t.drawMonth=t.selectedMonth=o.getMonth(),t.drawYear=t.selectedYear=o.getFullYear(),t.currentDay=s?o.getDate():0,t.currentMonth=s?o.getMonth():0,t.currentYear=s?o.getFullYear():0,this._adjustInstDate(t)}},_getDefaultDate:function(t){return this._restrictMinMax(t,this._determineDate(t,this._get(t,"defaultDate"),new Date))},_determineDate:function(e,i,s){var n=function(t){var e=new Date;return e.setDate(e.getDate()+t),e},o=function(i){try{return t.datepicker.parseDate(t.datepicker._get(e,"dateFormat"),i,t.datepicker._getFormatConfig(e))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?t.datepicker._getDate(e):null)||new Date,o=n.getFullYear(),a=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":a+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a));break;case"y":case"Y":o+=parseInt(l[1],10),r=Math.min(r,t.datepicker._getDaysInMonth(o,a))}l=h.exec(i)}return new Date(o,a,r)},a=null==i||""===i?s:"string"==typeof i?o(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return a=a&&"Invalid Date"==""+a?s:a,a&&(a.setHours(0),a.setMinutes(0),a.setSeconds(0),a.setMilliseconds(0)),this._daylightSavingAdjust(a)},_daylightSavingAdjust:function(t){return t?(t.setHours(t.getHours()>12?t.getHours()+2:0),t):null},_setDate:function(t,e,i){var s=!e,n=t.selectedMonth,o=t.selectedYear,a=this._restrictMinMax(t,this._determineDate(t,e,new Date));t.selectedDay=t.currentDay=a.getDate(),t.drawMonth=t.selectedMonth=t.currentMonth=a.getMonth(),t.drawYear=t.selectedYear=t.currentYear=a.getFullYear(),n===t.selectedMonth&&o===t.selectedYear||i||this._notifyChange(t),this._adjustInstDate(t),t.input&&t.input.val(s?"":this._formatDate(t))},_getDate:function(t){var e=!t.currentYear||t.input&&""===t.input.val()?null:this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return e},_attachHandlers:function(e){var i=this._get(e,"stepMonths"),s="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){t.datepicker._adjustDate(s,-i,"M")},next:function(){t.datepicker._adjustDate(s,+i,"M")},hide:function(){t.datepicker._hideDatepicker()},today:function(){t.datepicker._gotoToday(s)},selectDay:function(){return t.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return t.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return t.datepicker._selectMonthYear(s,this,"Y"),!1}};t(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(t){var e,i,s,n,o,a,r,h,l,c,u,d,p,f,g,m,v,_,b,y,w,x,k,D,C,I,P,T,M,S,z,A,E,H,N,W,O,F,R,L=new Date,j=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(t,"isRTL"),B=this._get(t,"showButtonPanel"),V=this._get(t,"hideIfNoPrevNext"),K=this._get(t,"navigationAsDateFormat"),q=this._getNumberOfMonths(t),U=this._get(t,"showCurrentAtPos"),Q=this._get(t,"stepMonths"),X=1!==q[0]||1!==q[1],$=this._daylightSavingAdjust(t.currentDay?new Date(t.currentYear,t.currentMonth,t.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(t,"min"),J=this._getMinMaxDate(t,"max"),Z=t.drawMonth-U,te=t.drawYear;if(0>Z&&(Z+=12,te--),J)for(e=this._daylightSavingAdjust(new Date(J.getFullYear(),J.getMonth()-q[0]*q[1]+1,J.getDate())),e=G&&G>e?G:e;this._daylightSavingAdjust(new Date(te,Z,1))>e;)Z--,0>Z&&(Z=11,te--);for(t.drawMonth=Z,t.drawYear=te,i=this._get(t,"prevText"),i=K?this.formatDate(i,this._daylightSavingAdjust(new Date(te,Z-Q,1)),this._getFormatConfig(t)):i,s=this._canAdjustMonth(t,-1,te,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":V?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(t,"nextText"),n=K?this.formatDate(n,this._daylightSavingAdjust(new Date(te,Z+Q,1)),this._getFormatConfig(t)):n,o=this._canAdjustMonth(t,1,te,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":V?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",a=this._get(t,"currentText"),r=this._get(t,"gotoCurrent")&&t.currentDay?$:j,a=K?this.formatDate(a,r,this._getFormatConfig(t)):a,h=t.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(t,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(t,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+a+"</button>":"")+(Y?"":h)+"</div>":"",c=parseInt(this._get(t,"firstDay"),10),c=isNaN(c)?0:c,u=this._get(t,"showWeek"),d=this._get(t,"dayNames"),p=this._get(t,"dayNamesMin"),f=this._get(t,"monthNames"),g=this._get(t,"monthNamesShort"),m=this._get(t,"beforeShowDay"),v=this._get(t,"showOtherMonths"),_=this._get(t,"selectOtherMonths"),b=this._getDefaultDate(t),y="",x=0;q[0]>x;x++){for(k="",this.maxRows=4,D=0;q[1]>D;D++){if(C=this._daylightSavingAdjust(new Date(te,Z,t.selectedDay)),I=" ui-corner-all",P="",X){if(P+="<div class='ui-datepicker-group",q[1]>1)switch(D){case 0:P+=" ui-datepicker-group-first",I=" ui-corner-"+(Y?"right":"left");break;case q[1]-1:P+=" ui-datepicker-group-last",I=" ui-corner-"+(Y?"left":"right");break;default:P+=" ui-datepicker-group-middle",I=""}P+="'>"}for(P+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+I+"'>"+(/all|left/.test(I)&&0===x?Y?o:s:"")+(/all|right/.test(I)&&0===x?Y?s:o:"")+this._generateMonthYearHeader(t,Z,te,G,J,x>0||D>0,f,g)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",T=u?"<th class='ui-datepicker-week-col'>"+this._get(t,"weekHeader")+"</th>":"",w=0;7>w;w++)M=(w+c)%7,T+="<th"+((w+c+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+d[M]+"'>"+p[M]+"</span></th>";for(P+=T+"</tr></thead><tbody>",S=this._getDaysInMonth(te,Z),te===t.selectedYear&&Z===t.selectedMonth&&(t.selectedDay=Math.min(t.selectedDay,S)),z=(this._getFirstDayOfMonth(te,Z)-c+7)%7,A=Math.ceil((z+S)/7),E=X?this.maxRows>A?this.maxRows:A:A,this.maxRows=E,H=this._daylightSavingAdjust(new Date(te,Z,1-z)),N=0;E>N;N++){for(P+="<tr>",W=u?"<td class='ui-datepicker-week-col'>"+this._get(t,"calculateWeek")(H)+"</td>":"",w=0;7>w;w++)O=m?m.apply(t.input?t.input[0]:null,[H]):[!0,""],F=H.getMonth()!==Z,R=F&&!_||!O[0]||G&&G>H||J&&H>J,W+="<td class='"+((w+c+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(H.getTime()===C.getTime()&&Z===t.selectedMonth&&t._keyEvent||b.getTime()===H.getTime()&&b.getTime()===C.getTime()?" "+this._dayOverClass:"")+(R?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!v?"":" "+O[1]+(H.getTime()===$.getTime()?" "+this._currentClass:"")+(H.getTime()===j.getTime()?" ui-datepicker-today":""))+"'"+(F&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(R?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(F&&!v?"&#xa0;":R?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===j.getTime()?" ui-state-highlight":"")+(H.getTime()===$.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);P+=W+"</tr>"}Z++,Z>11&&(Z=0,te++),P+="</tbody></table>"+(X?"</div>"+(q[0]>0&&D===q[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=P}y+=k}return y+=l,t._keyEvent=!1,y},_generateMonthYearHeader:function(t,e,i,s,n,o,a,r){var h,l,c,u,d,p,f,g,m=this._get(t,"changeMonth"),v=this._get(t,"changeYear"),_=this._get(t,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",y="";if(o||!m)y+="<span class='ui-datepicker-month'>"+a[e]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",c=0;12>c;c++)(!h||c>=s.getMonth())&&(!l||n.getMonth()>=c)&&(y+="<option value='"+c+"'"+(c===e?" selected='selected'":"")+">"+r[c]+"</option>");y+="</select>"}if(_||(b+=y+(!o&&m&&v?"":"&#xa0;")),!t.yearshtml)if(t.yearshtml="",o||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(u=this._get(t,"yearRange").split(":"),d=(new Date).getFullYear(),p=function(t){var e=t.match(/c[+\-].*/)?i+parseInt(t.substring(1),10):t.match(/[+\-].*/)?d+parseInt(t,10):parseInt(t,10);return isNaN(e)?d:e},f=p(u[0]),g=Math.max(f,p(u[1]||"")),f=s?Math.max(f,s.getFullYear()):f,g=n?Math.min(g,n.getFullYear()):g,t.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";g>=f;f++)t.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";t.yearshtml+="</select>",b+=t.yearshtml,t.yearshtml=null}return b+=this._get(t,"yearSuffix"),_&&(b+=(!o&&m&&v?"":"&#xa0;")+y),b+="</div>"},_adjustInstDate:function(t,e,i){var s=t.drawYear+("Y"===i?e:0),n=t.drawMonth+("M"===i?e:0),o=Math.min(t.selectedDay,this._getDaysInMonth(s,n))+("D"===i?e:0),a=this._restrictMinMax(t,this._daylightSavingAdjust(new Date(s,n,o)));t.selectedDay=a.getDate(),t.drawMonth=t.selectedMonth=a.getMonth(),t.drawYear=t.selectedYear=a.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(t)},_restrictMinMax:function(t,e){var i=this._getMinMaxDate(t,"min"),s=this._getMinMaxDate(t,"max"),n=i&&i>e?i:e;return s&&n>s?s:n},_notifyChange:function(t){var e=this._get(t,"onChangeMonthYear");e&&e.apply(t.input?t.input[0]:null,[t.selectedYear,t.selectedMonth+1,t])},_getNumberOfMonths:function(t){var e=this._get(t,"numberOfMonths");return null==e?[1,1]:"number"==typeof e?[1,e]:e},_getMinMaxDate:function(t,e){return this._determineDate(t,this._get(t,e+"Date"),null)},_getDaysInMonth:function(t,e){return 32-this._daylightSavingAdjust(new Date(t,e,32)).getDate()},_getFirstDayOfMonth:function(t,e){return new Date(t,e,1).getDay()},_canAdjustMonth:function(t,e,i,s){var n=this._getNumberOfMonths(t),o=this._daylightSavingAdjust(new Date(i,s+(0>e?e:n[0]*n[1]),1));return 0>e&&o.setDate(this._getDaysInMonth(o.getFullYear(),o.getMonth())),this._isInRange(t,o)},_isInRange:function(t,e){var i,s,n=this._getMinMaxDate(t,"min"),o=this._getMinMaxDate(t,"max"),a=null,r=null,h=this._get(t,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),a=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(a+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||e.getTime()>=n.getTime())&&(!o||e.getTime()<=o.getTime())&&(!a||e.getFullYear()>=a)&&(!r||r>=e.getFullYear())},_getFormatConfig:function(t){var e=this._get(t,"shortYearCutoff");return e="string"!=typeof e?e:(new Date).getFullYear()%100+parseInt(e,10),{shortYearCutoff:e,dayNamesShort:this._get(t,"dayNamesShort"),dayNames:this._get(t,"dayNames"),monthNamesShort:this._get(t,"monthNamesShort"),monthNames:this._get(t,"monthNames")}},_formatDate:function(t,e,i,s){e||(t.currentDay=t.selectedDay,t.currentMonth=t.selectedMonth,t.currentYear=t.selectedYear);var n=e?"object"==typeof e?e:this._daylightSavingAdjust(new Date(s,i,e)):this._daylightSavingAdjust(new Date(t.currentYear,t.currentMonth,t.currentDay));return this.formatDate(this._get(t,"dateFormat"),n,this._getFormatConfig(t))}}),t.fn.datepicker=function(e){if(!this.length)return this;t.datepicker.initialized||(t(document).mousedown(t.datepicker._checkExternalClick),t.datepicker.initialized=!0),0===t("#"+t.datepicker._mainDivId).length&&t("body").append(t.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!==e&&"getDate"!==e&&"widget"!==e?"option"===e&&2===arguments.length&&"string"==typeof arguments[1]?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof e?t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this].concat(i)):t.datepicker._attachDatepicker(this,e)}):t.datepicker["_"+e+"Datepicker"].apply(t.datepicker,[this[0]].concat(i))},t.datepicker=new i,t.datepicker.initialized=!1,t.datepicker.uuid=(new Date).getTime(),t.datepicker.version="1.10.4"}(jQuery),function(t){var e={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};t.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top;0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo;return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",e)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&t(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",e)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!e&&this._trigger("focus",t),i},open:function(){var e=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=t(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var t=this.element.find("[autofocus]");t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).focus()},_keepFocus:function(e){function i(){var e=this.document[0].activeElement,i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e);i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),this.close(e),undefined;if(e.keyCode===t.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");e.target!==n[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(n.focus(1),e.preventDefault()):(s.focus(1),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e;this.uiDialogTitlebar=t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(e),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title||t.html("&#160;"),t.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(t.each(i,function(i,s){var n,o;s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(e.element[0],arguments)},o={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,t("<button></button>",s).button(o).appendTo(e.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){t(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(n))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(n,o){s.position=[o.position.left-i.document.scrollLeft(),o.position.top-i.document.scrollTop()],t(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,e(o))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,n=s.resizable,o=this.uiDialog.css("position"),a="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:a,start:function(s,n){t(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(n))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(n,o){s.height=t(this).height(),s.width=t(this).width(),t(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,e(o))}}).css("position",o)},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(s){var n=this,o=!1,a={};t.each(s,function(t,s){n._setOption(t,s),t in e&&(o=!0),t in i&&(a[t]=s)}),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",a)},_setOption:function(t,e){var i,s,n=this.uiDialog;"dialogClass"===t&&n.removeClass(this.options.dialogClass).addClass(e),"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:""+e}),"draggable"===t&&(i=n.is(":data(ui-draggable)"),i&&!e&&n.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&(s=n.is(":data(ui-resizable)"),s&&!e&&n.resizable("destroy"),s&&"string"==typeof e&&n.resizable("option","handles",e),s||e===!1||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this);return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return t(e.target).closest(".ui-dialog").length?!0:!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=this,i=this.widgetFullName;t.ui.dialog.overlayInstances||this._delay(function(){t.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){e._allowInteraction(s)||(s.preventDefault(),t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),t.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(t.ui.dialog.overlayInstances--,t.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),t.ui.dialog.overlayInstances=0,t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{_position:function(){var e,i=this.options.position,s=[],n=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),t.each(["left","top"],function(t,e){+s[t]===s[t]&&(n[t]=s[t],s[t]=e)}),i={my:s[0]+(0>n[0]?n[0]:"+"+n[0])+" "+s[1]+(0>n[1]?n[1]:"+"+n[1]),at:s.join(" ")}),i=t.extend({},t.ui.dialog.prototype.options.position,i)):i=t.ui.dialog.prototype.options.position,e=this.uiDialog.is(":visible"),e||this.uiDialog.show(),this.uiDialog.position(i),e||this.uiDialog.hide()}})}(jQuery),function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(s,n){var o,a,r,h=t(this),l=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(h,s.mode||"hide"),u=s.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",g=i.test(u),m={},v="show"===c;h.parent().is(".ui-effects-wrapper")?t.effects.save(h.parent(),l):t.effects.save(h,l),h.show(),o=t.effects.createWrapper(h).css({overflow:"hidden"}),a=o[p](),r=parseFloat(o.css(f))||0,m[p]=v?a:0,g||(h.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),m[f]=v?r:a+r),v&&(o.css(p,0),g||o.css(f,r+a)),o.animate(m,{duration:s.duration,easing:s.easing,queue:!1,complete:function(){"hide"===c&&h.hide(),t.effects.restore(h,l),t.effects.removeWrapper(h),n()}})}}(jQuery),function(t){t.effects.effect.bounce=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"effect"),l="hide"===h,c="show"===h,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||l?1:0),g=e.duration/f,m=e.easing,v="up"===u||"down"===u?"top":"left",_="up"===u||"left"===u,b=a.queue(),y=b.length;for((c||l)&&r.push("opacity"),t.effects.save(a,r),a.show(),t.effects.createWrapper(a),d||(d=a["top"===v?"outerHeight":"outerWidth"]()/3),c&&(o={opacity:1},o[v]=0,a.css("opacity",0).css(v,_?2*-d:2*d).animate(o,g,m)),l&&(d/=Math.pow(2,p-1)),o={},o[v]=0,s=0;p>s;s++)n={},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m).animate(o,g,m),d=l?2*d:d/2;l&&(n={opacity:0},n[v]=(_?"-=":"+=")+d,a.animate(n,g,m)),a.queue(function(){l&&a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}),y>1&&b.splice.apply(b,[1,0].concat(b.splice(y,f+1))),a.dequeue()}}(jQuery),function(t){t.effects.effect.clip=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","height","width"],h=t.effects.setMode(a,e.mode||"hide"),l="show"===h,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(a,r),a.show(),s=t.effects.createWrapper(a).css({overflow:"hidden"}),n="IMG"===a[0].tagName?s:a,o=n[d](),l&&(n.css(d,0),n.css(p,o/2)),f[d]=l?o:0,f[p]=l?0:o/2,n.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){l||a.hide(),t.effects.restore(a,r),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.drop=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","opacity","height","width"],a=t.effects.setMode(n,e.mode||"hide"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h?"pos":"neg",u={opacity:r?1:0};t.effects.save(n,o),n.show(),t.effects.createWrapper(n),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===c?-s:s),u[l]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.explode=function(e,i){function s(){b.push(this),b.length===u*d&&n()}function n(){p.css({visibility:"visible"}),t(b).remove(),g||p.hide(),i()}var o,a,r,h,l,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),g="show"===f,m=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),_=Math.ceil(p.outerHeight()/u),b=[];for(o=0;u>o;o++)for(h=m.top+o*_,c=o-(u-1)/2,a=0;d>a;a++)r=m.left+a*v,l=a-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-a*v,top:-o*_}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:_,left:r+(g?l*v:0),top:h+(g?c*_:0),opacity:g?0:1}).animate({left:r+(g?0:l*v),top:h+(g?0:c*_),opacity:g?1:0},e.duration||500,e.easing,s)}}(jQuery),function(t){t.effects.effect.fade=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}}(jQuery),function(t){t.effects.effect.fold=function(e,i){var s,n,o=t(this),a=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(o,e.mode||"hide"),h="show"===r,l="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=h!==d,f=p?["width","height"]:["height","width"],g=e.duration/2,m={},v={};t.effects.save(o,a),o.show(),s=t.effects.createWrapper(o).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],u&&(c=parseInt(u[1],10)/100*n[l?0:1]),h&&s.css(d?{height:0,width:c}:{height:c,width:0}),m[f[0]]=h?n[0]:c,v[f[1]]=h?n[1]:0,s.animate(m,g,e.easing).animate(v,g,e.easing,function(){l&&o.hide(),t.effects.restore(o,a),t.effects.removeWrapper(o),i()})}}(jQuery),function(t){t.effects.effect.highlight=function(e,i){var s=t(this),n=["backgroundImage","backgroundColor","opacity"],o=t.effects.setMode(s,e.mode||"show"),a={backgroundColor:s.css("backgroundColor")};"hide"===o&&(a.opacity=0),t.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(a,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,n),i()}})}}(jQuery),function(t){t.effects.effect.pulsate=function(e,i){var s,n=t(this),o=t.effects.setMode(n,e.mode||"show"),a="show"===o,r="hide"===o,h=a||"hide"===o,l=2*(e.times||5)+(h?1:0),c=e.duration/l,u=0,d=n.queue(),p=d.length;for((a||!n.is(":visible"))&&(n.css("opacity",0).show(),u=1),s=1;l>s;s++)n.animate({opacity:u},c,e.easing),u=1-u;n.animate({opacity:u},c,e.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,l+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.puff=function(e,i){var s=t(this),n=t.effects.setMode(s,e.mode||"hide"),o="hide"===n,a=parseInt(e.percent,10)||150,r=a/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:o?a:100,from:o?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(e)},t.effects.effect.scale=function(e,i){var s=t(this),n=t.extend(!0,{},e),o=t.effects.setMode(s,e.mode||"effect"),a=parseInt(e.percent,10)||(0===parseInt(e.percent,10)?0:"hide"===o?0:100),r=e.direction||"both",h=e.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},c={y:"horizontal"!==r?a/100:1,x:"vertical"!==r?a/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==o&&(n.origin=h||["middle","center"],n.restore=!0),n.from=e.from||("show"===o?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*c.y,width:l.width*c.x,outerHeight:l.outerHeight*c.y,outerWidth:l.outerWidth*c.x},n.fade&&("show"===o&&(n.from.opacity=0,n.to.opacity=1),"hide"===o&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},t.effects.effect.size=function(e,i){var s,n,o,a=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(a,e.mode||"effect"),f=e.restore||"effect"!==p,g=e.scale||"both",m=e.origin||["middle","center"],v=a.css("position"),_=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&a.show(),s={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()},"toggle"===e.mode&&"show"===p?(a.from=e.to||b,a.to=e.from||s):(a.from=e.from||("show"===p?b:s),a.to=e.to||("hide"===p?b:s)),o={from:{y:a.from.height/s.height,x:a.from.width/s.width},to:{y:a.to.height/s.height,x:a.to.width/s.width}},("box"===g||"both"===g)&&(o.from.y!==o.to.y&&(_=_.concat(u),a.from=t.effects.setTransition(a,u,o.from.y,a.from),a.to=t.effects.setTransition(a,u,o.to.y,a.to)),o.from.x!==o.to.x&&(_=_.concat(d),a.from=t.effects.setTransition(a,d,o.from.x,a.from),a.to=t.effects.setTransition(a,d,o.to.x,a.to))),("content"===g||"both"===g)&&o.from.y!==o.to.y&&(_=_.concat(c).concat(l),a.from=t.effects.setTransition(a,c,o.from.y,a.from),a.to=t.effects.setTransition(a,c,o.to.y,a.to)),t.effects.save(a,_),a.show(),t.effects.createWrapper(a),a.css("overflow","hidden").css(a.from),m&&(n=t.effects.getBaseline(m,s),a.from.top=(s.outerHeight-a.outerHeight())*n.y,a.from.left=(s.outerWidth-a.outerWidth())*n.x,a.to.top=(s.outerHeight-a.to.outerHeight)*n.y,a.to.left=(s.outerWidth-a.to.outerWidth)*n.x),a.css(a.from),("content"===g||"both"===g)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),l=r.concat(u).concat(d),a.find("*[width]").each(function(){var i=t(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,l),i.from={height:s.height*o.from.y,width:s.width*o.from.x,outerHeight:s.outerHeight*o.from.y,outerWidth:s.outerWidth*o.from.x},i.to={height:s.height*o.to.y,width:s.width*o.to.x,outerHeight:s.height*o.to.y,outerWidth:s.width*o.to.x},o.from.y!==o.to.y&&(i.from=t.effects.setTransition(i,u,o.from.y,i.from),i.to=t.effects.setTransition(i,u,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=t.effects.setTransition(i,d,o.from.x,i.from),i.to=t.effects.setTransition(i,d,o.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,l)})})),a.animate(a.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){0===a.to.opacity&&a.css("opacity",a.from.opacity),"hide"===p&&a.hide(),t.effects.restore(a,_),f||("static"===v?a.css({position:"relative",top:a.to.top,left:a.to.left}):t.each(["top","left"],function(t,e){a.css(e,function(e,i){var s=parseInt(i,10),n=t?a.to.left:a.to.top;return"auto"===i?n+"px":s+n+"px"})})),t.effects.removeWrapper(a),i()}})}}(jQuery),function(t){t.effects.effect.shake=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","height","width"],a=t.effects.setMode(n,e.mode||"effect"),r=e.direction||"left",h=e.distance||20,l=e.times||3,c=2*l+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},g={},m={},v=n.queue(),_=v.length;for(t.effects.save(n,o),n.show(),t.effects.createWrapper(n),f[d]=(p?"-=":"+=")+h,g[d]=(p?"+=":"-=")+2*h,m[d]=(p?"-=":"+=")+2*h,n.animate(f,u,e.easing),s=1;l>s;s++)n.animate(g,u,e.easing).animate(m,u,e.easing);n.animate(g,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}),_>1&&v.splice.apply(v,[1,0].concat(v.splice(_,c+1))),n.dequeue()}}(jQuery),function(t){t.effects.effect.slide=function(e,i){var s,n=t(this),o=["position","top","bottom","left","right","width","height"],a=t.effects.setMode(n,e.mode||"show"),r="show"===a,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u={};t.effects.save(n,o),n.show(),s=e.distance||n["top"===l?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,c?isNaN(s)?"-"+s:-s:s),u[l]=(r?c?"+=":"-=":c?"-=":"+=")+s,n.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,o),t.effects.removeWrapper(n),i()}})}}(jQuery),function(t){t.effects.effect.transfer=function(e,i){var s=t(this),n=t(e.to),o="fixed"===n.css("position"),a=t("body"),r=o?a.scrollTop():0,h=o?a.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:o?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}}(jQuery),function(t){t.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,t.proxy(function(t){this.options.disabled&&t.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(t){t.preventDefault()},"click .ui-state-disabled > a":function(t){t.preventDefault()},"click .ui-menu-item:has(a)":function(e){var i=t(e.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&t(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){var i=t(e.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(e,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.children(".ui-menu-item").eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){t.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){t(e.target).closest(".ui-menu").length||this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var e=t(this);e.data("ui-menu-submenu-carat")&&e.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(e){function i(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,n,o,a,r,h=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:h=!1,n=this.previousFilter||"",o=String.fromCharCode(e.keyCode),a=!1,clearTimeout(this.filterTimer),o===n?a=!0:o=n+o,r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())}),s=a&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(o=String.fromCharCode(e.keyCode),r=RegExp("^"+i(o),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return r.test(t(this).children("a").text())})),s.length?(this.focus(e,s),s.length>1?(this.previousFilter=o,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&e.preventDefault()},_activate:function(t){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),s=e.prev("a"),n=t("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(n),e.attr("aria-labelledby",s.attr("id"))}),e=s.add(this.element),e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),e.children(":not(.ui-menu-item)").each(function(){var e=t(this);/[^\-\u2014\u2013\s]/.test(e.text())||e.addClass("ui-widget-content ui-menu-divider")}),e.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){"icons"===t&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu),this._super(t,e)},focus:function(t,e){var i,s;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.height(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",t,{item:this.active}))},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(e),undefined)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(e),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)}})}(jQuery),function(t,e){function i(t,e,i){return[parseFloat(t[0])*(p.test(t[0])?e/100:1),parseFloat(t[1])*(p.test(t[1])?i/100:1)]}function s(e,i){return parseInt(t.css(e,i),10)||0}function n(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}t.ui=t.ui||{};var o,a=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,c=/top|center|bottom/,u=/[\+\-]\d+(\.[\d]+)?%?/,d=/^\w+/,p=/%$/,f=t.fn.position;t.position={scrollbarWidth:function(){if(o!==e)return o;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=n.children()[0];return t("body").append(n),i=a.offsetWidth,n.css("overflow","scroll"),s=a.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),o=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return f.apply(this,arguments);e=t.extend({},e);var o,p,g,m,v,_,b=t(e.of),y=t.position.getWithinInfo(e.within),w=t.position.getScrollInfo(y),x=(e.collision||"flip").split(" "),k={};return _=n(b),b[0].preventDefault&&(e.at="left top"),p=_.width,g=_.height,m=_.offset,v=t.extend({},m),t.each(["my","at"],function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):c.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=c.test(s[1])?s[1]:"center",t=u.exec(s[0]),i=u.exec(s[1]),k[this]=[t?t[0]:0,i?i[0]:0],e[this]=[d.exec(s[0])[0],d.exec(s[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?v.left+=p:"center"===e.at[0]&&(v.left+=p/2),"bottom"===e.at[1]?v.top+=g:"center"===e.at[1]&&(v.top+=g/2),o=i(k.at,p,g),v.left+=o[0],v.top+=o[1],this.each(function(){var n,l,c=t(this),u=c.outerWidth(),d=c.outerHeight(),f=s(this,"marginLeft"),_=s(this,"marginTop"),D=u+f+s(this,"marginRight")+w.width,C=d+_+s(this,"marginBottom")+w.height,I=t.extend({},v),P=i(k.my,c.outerWidth(),c.outerHeight());"right"===e.my[0]?I.left-=u:"center"===e.my[0]&&(I.left-=u/2),"bottom"===e.my[1]?I.top-=d:"center"===e.my[1]&&(I.top-=d/2),I.left+=P[0],I.top+=P[1],t.support.offsetFractions||(I.left=h(I.left),I.top=h(I.top)),n={marginLeft:f,marginTop:_},t.each(["left","top"],function(i,s){t.ui.position[x[i]]&&t.ui.position[x[i]][s](I,{targetWidth:p,targetHeight:g,elemWidth:u,elemHeight:d,collisionPosition:n,collisionWidth:D,collisionHeight:C,offset:[o[0]+P[0],o[1]+P[1]],my:e.my,at:e.at,within:y,elem:c})}),e.using&&(l=function(t){var i=m.left-I.left,s=i+p-u,n=m.top-I.top,o=n+g-d,h={target:{element:b,left:m.left,top:m.top,width:p,height:g},element:{element:c,left:I.left,top:I.top,width:u,height:d},horizontal:0>s?"left":i>0?"right":"center",vertical:0>o?"top":n>0?"bottom":"middle"};u>p&&p>r(i+s)&&(h.horizontal="center"),d>g&&g>r(n+o)&&(h.vertical="middle"),h.important=a(r(i),r(s))>a(r(n),r(o))?"horizontal":"vertical",e.using.call(this,t,h)}),c.offset(t.extend(I,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,o=s.width,r=t.left-e.collisionPosition.marginLeft,h=n-r,l=r+e.collisionWidth-o-n;e.collisionWidth>o?h>0&&0>=l?(i=t.left+h+e.collisionWidth-o-n,t.left+=h-i):t.left=l>0&&0>=h?n:h>l?n+o-e.collisionWidth:n:h>0?t.left+=h:l>0?t.left-=l:t.left=a(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,h=n-r,l=r+e.collisionHeight-o-n;e.collisionHeight>o?h>0&&0>=l?(i=t.top+h+e.collisionHeight-o-n,t.top+=h-i):t.top=l>0&&0>=h?n:h>l?n+o-e.collisionHeight:n:h>0?t.top+=h:l>0?t.top-=l:t.top=a(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,a=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-a-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-a-o,(0>i||r(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-h,(s>0||u>r(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,a=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-a-h,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-a-o,t.top+p+f+g>c&&(0>s||r(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-h,t.top+p+f+g>u&&(i>0||u>r(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}},function(){var e,i,s,n,o,a=document.getElementsByTagName("body")[0],r=document.createElement("div");e=document.createElement(a?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},a&&t.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)e.style[o]=s[o];e.appendChild(r),i=a||document.documentElement,i.insertBefore(e,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=t(r).offset().left,t.support.offsetFractions=n>10&&11>n,e.innerHTML="",i.removeChild(e)}()}(jQuery),function(t,e){t.widget("ui.progressbar",{version:"1.10.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(t){return t===e?this.options.value:(this.options.value=this._constrainedValue(t),this._refreshValue(),e)},_constrainedValue:function(t){return t===e&&(t=this.options.value),this.indeterminate=t===!1,"number"!=typeof t&&(t=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==e&&(this.oldValue=e,this._trigger("change")),e===this.options.max&&this._trigger("complete")}})}(jQuery),function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),o="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,h,l,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,o.addClass("ui-state-active").focus(),h=o.offset(),l=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:e.pageX-h.left-o.width()/2,top:e.pageY-h.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,o;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,o=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),o!==!1&&this.values(e,i))):i!==this.value()&&(o=this._trigger("slide",t,{handle:this.handles[e],value:i}),o!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,c={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),c["horizontal"===h.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[l?"animate":"css"](c,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,o,a,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(a=this.options.step,n=o=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:o=this._valueMin();break;case t.ui.keyCode.END:o=this._valueMax();break;case t.ui.keyCode.PAGE_UP:o=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:o=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;o=this._trimAlignValue(n+a);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;o=this._trimAlignValue(n-a)}this._slide(i,r,o)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})}(jQuery),function(t){function e(t){return function(){var e=this.element.val();t.apply(this,arguments),this._refresh(),e!==this.element.val()&&this._trigger("change")}}t.widget("ui.spinner",{version:"1.10.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var e={},i=this.element;return t.each(["min","max","step"],function(t,s){var n=i.attr(s);void 0!==n&&n.length&&(e[s]=n)}),e},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t),void 0)},mousewheel:function(t,e){if(e){if(!this.spinning&&!this._start(t))return!1;this._spin((e>0?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(e){function i(){var t=this.element[0]===this.document[0].activeElement;t||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),e.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(e)!==!1&&this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(e){return t(e.currentTarget).hasClass("ui-state-active")?this._start(e)===!1?!1:(this._repeat(null,t(e.currentTarget).hasClass("ui-spinner-up")?1:-1,e),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var t=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=t.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*t.height())&&t.height()>0&&t.height(t.height()),this.options.disabled&&this.disable()},_keydown:function(e){var i=this.options,s=t.ui.keyCode;switch(e.keyCode){case s.UP:return this._repeat(null,1,e),!0;case s.DOWN:return this._repeat(null,-1,e),!0;case s.PAGE_UP:return this._repeat(null,i.page,e),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,e),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(t){return this.spinning||this._trigger("start",t)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&this._trigger("spin",e,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(e){var i=this.options.incremental;return i?t.isFunction(i)?i(e):Math.floor(e*e*e/5e4-e*e/500+17*e/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_adjustValue:function(t){var e,i,s=this.options;return e=null!==s.min?s.min:0,i=t-e,i=Math.round(i/s.step)*s.step,t=e+i,t=parseFloat(t.toFixed(this._precision())),null!==s.max&&t>s.max?s.max:null!==s.min&&s.min>t?s.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){if("culture"===t||"numberFormat"===t){var i=this._parse(this.element.val());return this.options[t]=e,this.element.val(this._format(i)),void 0}("max"===t||"min"===t||"step"===t)&&"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),this._super(t,e),"disabled"===t&&(e?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:e(function(t){this._super(t),this._value(this.element.val())}),_parse:function(t){return"string"==typeof t&&""!==t&&(t=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t),""===t||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(t,e){var i;""!==t&&(i=this._parse(t),null!==i&&(e||(i=this._adjustValue(i)),t=this._format(i))),this.element.val(t),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:e(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:e(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:e(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:e(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){return arguments.length?(e(this._value).call(this,t),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}})}(jQuery),function(t,e){function i(){return++n}function s(t){return t=t.cloneNode(!1),t.hash.length>1&&decodeURIComponent(t.href.replace(o,""))===decodeURIComponent(location.href.replace(o,""))}var n=0,o=/#.*$/;t.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var e=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),function(t){return e.tabs.index(t)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,n=location.hash.substring(1);return null===i&&(n&&this.tabs.each(function(s,o){return t(o).attr("aria-controls")===n?(i=s,!1):e}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(i){var s=t(this.document[0].activeElement).closest("li"),n=this.tabs.index(s),o=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:n++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:o=!1,n--;break;case t.ui.keyCode.END:n=this.anchors.length-1;break;case t.ui.keyCode.HOME:n=0;break;case t.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(n),e;case t.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(n===this.options.active?!1:n),e;default:return}i.preventDefault(),clearTimeout(this.activating),n=this._focusNextTab(n,o),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(n).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",n)},this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):e},_findNextTab:function(e,i){function s(){return e>n&&(e=0),0>e&&(e=n),e}for(var n=this.tabs.length-1;-1!==t.inArray(s(),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).focus(),t},_setOption:function(t,i){return"active"===t?(this._activate(i),e):"disabled"===t?(this._setupDisabled(i),e):(this._super(t,i),"collapsible"===t&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===t&&this._setupEvents(i),"heightStyle"===t&&this._setupHeightStyle(i),e)},_tabId:function(t){return t.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");e.disabled=t.map(i.filter(".ui-state-disabled"),function(t){return i.index(t)}),this._processTabs(),e.active!==!1&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return t("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=t(),this.anchors.each(function(i,n){var o,a,r,h=t(n).uniqueId().attr("id"),l=t(n).closest("li"),c=l.attr("aria-controls");s(n)?(o=n.hash,a=e.element.find(e._sanitizeSelector(o))):(r=e._tabId(l),o="#"+r,a=e.element.find(o),a.length||(a=e._createPanel(r),a.insertAfter(e.panels[i-1]||e.tablist)),a.attr("aria-live","polite")),a.length&&(e.panels=e.panels.add(a)),c&&l.data("ui-tabs-aria-controls",c),l.attr({"aria-controls":o.substring(1),"aria-labelledby":h}),a.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(e){t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1);for(var i,s=0;i=this.tabs[s];s++)e===!0||-1!==t.inArray(s,e)?t(i).addClass("ui-state-disabled").attr("aria-disabled","true"):t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=e},_setupEvents:function(e){var i={click:function(t){t.preventDefault()}};e&&t.each(e.split(" "),function(t,e){i[e]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=t(this).outerHeight(!0)}),this.panels.each(function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))}).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each(function(){i=Math.max(i,t(this).height("").height())}).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget),o=n.closest("li"),a=o[0]===s[0],r=a&&i.collapsible,h=r?t():this._getPanelForTab(o),l=s.length?this._getPanelForTab(s):t(),c={oldTab:s,oldPanel:l,newTab:r?t():o,newPanel:h};e.preventDefault(),o.hasClass("ui-state-disabled")||o.hasClass("ui-tabs-loading")||this.running||a&&!i.collapsible||this._trigger("beforeActivate",e,c)===!1||(i.active=r?!1:this.tabs.index(o),this.active=a?t():o,this.xhr&&this.xhr.abort(),l.length||h.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(o),e),this._toggle(e,c))},_toggle:function(e,i){function s(){o.running=!1,o._trigger("activate",e,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),a.length&&o.options.show?o._show(a,o.options.show,s):(a.show(),s())}var o=this,a=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),a.length&&r.length?i.oldTab.attr("tabIndex",-1):a.length&&this.tabs.filter(function(){return 0===t(this).attr("tabIndex")}).attr("tabIndex",-1),a.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return e===!1?t():this.tabs.eq(e)},_getIndex:function(t){return"string"==typeof t&&(t=this.anchors.index(this.anchors.filter("[href$='"+t+"']"))),t},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===e?s=!1:(i=this._getIndex(i),s=t.isArray(s)?t.map(s,function(t){return t!==i?t:null}):t.map(this.tabs,function(t,e){return e!==i?e:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===e)s=!0;else{if(i=this._getIndex(i),-1!==t.inArray(i,s))return;s=t.isArray(s)?t.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(e,i){e=this._getIndex(e);var n=this,o=this.tabs.eq(e),a=o.find(".ui-tabs-anchor"),r=this._getPanelForTab(o),h={tab:o,panel:r};s(a[0])||(this.xhr=t.ajax(this._ajaxSettings(a,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(o.addClass("ui-tabs-loading"),r.attr("aria-busy","true"),this.xhr.success(function(t){setTimeout(function(){r.html(t),n._trigger("load",i,h)},1)}).complete(function(t,e){setTimeout(function(){"abort"===e&&n.panels.stop(!1,!0),o.removeClass("ui-tabs-loading"),r.removeAttr("aria-busy"),t===n.xhr&&delete n.xhr},1)})))},_ajaxSettings:function(e,i,s){var n=this;return{url:e.attr("href"),beforeSend:function(e,o){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:o},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})}(jQuery),function(t){function e(e,i){var s=(e.attr("aria-describedby")||"").split(/\s+/);s.push(i),e.data("ui-tooltip-id",i).attr("aria-describedby",t.trim(s.join(" ")))}function i(e){var i=e.data("ui-tooltip-id"),s=(e.attr("aria-describedby")||"").split(/\s+/),n=t.inArray(i,s);-1!==n&&s.splice(n,1),e.removeData("ui-tooltip-id"),s=t.trim(s.join(" ")),s?e.attr("aria-describedby",s):e.removeAttr("aria-describedby")}var s=0;t.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var e=t(this).attr("title")||"";return t("<a>").text(e).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(e,i){var s=this;return"disabled"===e?(this[i?"_disable":"_enable"](),this.options[e]=i,void 0):(this._super(e,i),"content"===e&&t.each(this.tooltips,function(t,e){s._updateContent(e)}),void 0)},_disable:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.is("[title]")&&e.data("ui-tooltip-title",e.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var e=t(this);e.data("ui-tooltip-title")&&e.attr("title",e.data("ui-tooltip-title"))})},open:function(e){var i=this,s=t(e?e.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),e&&"mouseover"===e.type&&s.parents().each(function(){var e,s=t(this);s.data("ui-tooltip-open")&&(e=t.Event("blur"),e.target=e.currentTarget=this,i.close(e,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,e))},_updateContent:function(t,e){var i,s=this.options.content,n=this,o=e?e.type:null;
return"string"==typeof s?this._open(e,t,s):(i=s.call(t[0],function(i){t.data("ui-tooltip-open")&&n._delay(function(){e&&(e.type=o),this._open(e,t,i)})}),i&&this._open(e,t,i),void 0)},_open:function(i,s,n){function o(t){l.of=t,a.is(":hidden")||a.position(l)}var a,r,h,l=t.extend({},this.options.position);if(n){if(a=this._find(s),a.length)return a.find(".ui-tooltip-content").html(n),void 0;s.is("[title]")&&(i&&"mouseover"===i.type?s.attr("title",""):s.removeAttr("title")),a=this._tooltip(s),e(s,a.attr("id")),a.find(".ui-tooltip-content").html(n),this.options.track&&i&&/^mouse/.test(i.type)?(this._on(this.document,{mousemove:o}),o(i)):a.position(t.extend({of:s},this.options.position)),a.hide(),this._show(a,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){a.is(":visible")&&(o(l.of),clearInterval(h))},t.fx.interval)),this._trigger("open",i,{tooltip:a}),r={keyup:function(e){if(e.keyCode===t.ui.keyCode.ESCAPE){var i=t.Event(e);i.currentTarget=s[0],this.close(i,!0)}},remove:function(){this._removeTooltip(a)}},i&&"mouseover"!==i.type||(r.mouseleave="close"),i&&"focusin"!==i.type||(r.focusout="close"),this._on(!0,s,r)}},close:function(e){var s=this,n=t(e?e.currentTarget:this.element),o=this._find(n);this.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&n.attr("title",n.data("ui-tooltip-title")),i(n),o.stop(!0),this._hide(o,this.options.hide,function(){s._removeTooltip(t(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),e&&"mouseleave"===e.type&&t.each(this.parents,function(e,i){t(i.element).attr("title",i.title),delete s.parents[e]}),this.closing=!0,this._trigger("close",e,{tooltip:o}),this.closing=!1)},_tooltip:function(e){var i="ui-tooltip-"+s++,n=t("<div>").attr({id:i,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return t("<div>").addClass("ui-tooltip-content").appendTo(n),n.appendTo(this.document[0].body),this.tooltips[i]=e,n},_find:function(e){var i=e.data("ui-tooltip-id");return i?t("#"+i):t()},_removeTooltip:function(t){t.remove(),delete this.tooltips[t.attr("id")]},_destroy:function(){var e=this;t.each(this.tooltips,function(i,s){var n=t.Event("blur");n.target=n.currentTarget=s[0],e.close(n,!0),t("#"+i).remove(),s.data("ui-tooltip-title")&&(s.attr("title",s.data("ui-tooltip-title")),s.removeData("ui-tooltip-title"))})}})}(jQuery);;
/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);;
/**
 * @preserve
 * jquery.layout 1.4.4
 * $Date: 2014-11-29 08:00:00 (Sat, 29 November 2014) $
 * $Rev: 1.0404 $
 *
 * Copyright (c) 2014 Kevin Dalman (http://jquery-dev.com)
 * Based on work by Fabrizio Balliano (http://www.fabrizioballiano.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * SEE: http://layout.jquery-dev.com/LICENSE.txt
 *
 * Changelog: http://layout.jquery-dev.com/changelog.cfm
 *
 * Docs: http://layout.jquery-dev.com/documentation.html
 * Tips: http://layout.jquery-dev.com/tips.html
 * Help: http://groups.google.com/group/jquery-ui-layout
 */

/* JavaDoc Info: http://code.google.com/closure/compiler/docs/js-for-compiler.html
 * {!Object}	non-nullable type (never NULL)
 * {?string}	nullable type (sometimes NULL) - default for {Object}
 * {number=}	optional parameter
 * {*}			ALL types
 */
/*	TODO for jQ 2.x 
 *	check $.fn.disableSelection - this is in jQuery UI 1.9.x
 */

// NOTE: For best readability, view with a fixed-width font and tabs equal to 4-chars

; (function ($) {

    // alias Math methods - used a lot!
    var min = Math.min
    , max = Math.max
    , round = Math.floor

    , isStr = function (v) { return $.type(v) === "string"; }

        /**
         * @param {!Object}			Instance
         * @param {Array.<string>}	a_fn
         */
    , runPluginCallbacks = function (Instance, a_fn) {
        if ($.isArray(a_fn))
            for (var i = 0, c = a_fn.length; i < c; i++) {
                var fn = a_fn[i];
                try {
                    if (isStr(fn)) // 'name' of a function
                        fn = eval(fn);
                    if ($.isFunction(fn))
                        g(fn)(Instance);
                } catch (ex) { }
            }
        function g(f) { return f; }; // compiler hack
    }
    ;

    /*
     *	GENERIC $.layout METHODS - used by all layouts
     */
    $.layout = {

        version: "1.4.4"
    , revision: 1.0404 // eg: ver 1.4.4 = rev 1.0404 - major(n+).minor(nn)+patch(nn+)

        // $.layout.browser REPLACES $.browser
    , browser: {} // set below

        // *PREDEFINED* EFFECTS & DEFAULTS 
        // MUST list effect here - OR MUST set an fxSettings option (can be an empty hash: {})
    , effects: {

        //	Pane Open/Close Animations
        slide: {
            all: { duration: "fast" } // eg: duration: 1000, easing: "easeOutBounce"
		, north: { direction: "up" }
		, south: { direction: "down" }
		, east: { direction: "right" }
		, west: { direction: "left" }
        }
        , drop: {
            all: { duration: "slow" }
            , north: { direction: "up" }
            , south: { direction: "down" }
            , east: { direction: "right" }
            , west: { direction: "left" }
        }
        , scale: {
            all: { duration: "fast" }
        }
        //	these are not recommended, but can be used
        , blind: {}
        , clip: {}
        , explode: {}
        , fade: {}
        , fold: {}
        , puff: {}

        //	Pane Resize Animations
        , size: {
            all: { easing: "swing" }
        }
    }

        // INTERNAL CONFIG DATA - DO NOT CHANGE THIS!
    , config: {
        optionRootKeys: "effects,panes,north,south,west,east,center".split(",")
        , allPanes: "north,south,west,east,center".split(",")
        , borderPanes: "north,south,west,east".split(",")
        , oppositeEdge: {
            north: "south"
            , south: "north"
            , east: "west"
            , west: "east"
        }
        //	offscreen data
        , offscreenCSS: { left: "-99999px", right: "auto" } // used by hide/close if useOffscreenClose=true
        , offscreenReset: "offscreenReset" // key used for data
        //	CSS used in multiple places
        , hidden: { visibility: "hidden" }
        , visible: { visibility: "visible" }
        //	layout element settings
        , resizers: {
            cssReq: {
                position: "absolute"
			, padding: 0
			, margin: 0
			, fontSize: "1px"
			, textAlign: "left"	// to counter-act "center" alignment!
			, overflow: "hidden" // prevent toggler-button from overflowing
                //	SEE $.layout.defaults.zIndexes.resizer_normal
            }
            , cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
                background: "transparent"
                , border: "none"
            }
        }
        , togglers: {
            cssReq: {
                position: "absolute"
			, display: "block"
			, padding: 0
			, margin: 0
			, overflow: "hidden"
			, textAlign: "center"
			, fontSize: "1px"
			, cursor: "pointer"
			, zIndex: 1
            }
            , cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
                background: "#AAA"
            }
        }
        , content: {
            cssReq: {
                position: "relative" /* contain floated or positioned elements */
            }
            , cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
                overflow: "auto"
                , padding: "10px"
            }
            , cssDemoPane: { // DEMO CSS - REMOVE scrolling from 'pane' when it has a content-div
                overflow: "hidden"
                , padding: 0
            }
        }
        , panes: { // defaults for ALL panes - overridden by 'per-pane settings' below
            cssReq: {
                position: "absolute"
			, margin: 0
                //	$.layout.defaults.zIndexes.pane_normal
            }
            , cssDemo: { // DEMO CSS - applied if: options.PANE.applyDemoStyles=true
                padding: "0px"
                , background: "transparent"
                , border: "0px solid #BBB"
                , overflow: "auto"
            }
        }
        , north: {
            side: "top"
            , sizeType: "Height"
            , dir: "horz"
            , cssReq: {
                top: 0
                , bottom: "auto"
                , left: 0
                , right: 0
                , width: "auto"
                //	height: 	DYNAMIC
            }
        }
        , south: {
            side: "bottom"
            , sizeType: "Height"
            , dir: "horz"
            , cssReq: {
                top: "auto"
                , bottom: 0
                , left: 0
                , right: 0
                , width: "auto"
                //	height: 	DYNAMIC
            }
        }
        , east: {
            side: "right"
            , sizeType: "Width"
            , dir: "vert"
            , cssReq: {
                left: "auto"
                , right: 0
                , top: "auto" // DYNAMIC
                , bottom: "auto" // DYNAMIC
                , height: "auto"
                //	width: 		DYNAMIC
            }
        }
        , west: {
            side: "left"
            , sizeType: "Width"
            , dir: "vert"
            , cssReq: {
                left: 0
                , right: "auto"
                , top: "auto" // DYNAMIC
                , bottom: "auto" // DYNAMIC
                , height: "auto"
                //	width: 		DYNAMIC
            }
        }
        , center: {
            dir: "center"
            , cssReq: {
                left: "auto" // DYNAMIC
                , right: "auto" // DYNAMIC
                , top: "auto" // DYNAMIC
                , bottom: "auto" // DYNAMIC
                , height: "auto"
                , width: "auto"
            }
        }
    }

        // CALLBACK FUNCTION NAMESPACE - used to store reusable callback functions
    , callbacks: {}

    , getParentPaneElem: function (el) {
        // must pass either a container or pane element
        var $el = $(el)
		, layout = $el.data("layout") || $el.data("parentLayout");
        if (layout) {
            var $cont = layout.container;
            // see if this container is directly-nested inside an outer-pane
            if ($cont.data("layoutPane")) return $cont;
            var $pane = $cont.closest("." + $.layout.defaults.panes.paneClass);
            // if a pane was found, return it
            if ($pane.data("layoutPane")) return $pane;
        }
        return null;
    }

    , getParentPaneInstance: function (el) {
        // must pass either a container or pane element
        var $pane = $.layout.getParentPaneElem(el);
        return $pane ? $pane.data("layoutPane") : null;
    }

    , getParentLayoutInstance: function (el) {
        // must pass either a container or pane element
        var $pane = $.layout.getParentPaneElem(el);
        return $pane ? $pane.data("parentLayout") : null;
    }

    , getEventObject: function (evt) {
        return typeof evt === "object" && evt.stopPropagation ? evt : null;
    }
    , parsePaneName: function (evt_or_pane) {
        var evt = $.layout.getEventObject(evt_or_pane)
		, pane = evt_or_pane;
        if (evt) {
            // ALWAYS stop propagation of events triggered in Layout!
            evt.stopPropagation();
            pane = $(this).data("layoutEdge");
        }
        if (pane && !/^(west|east|north|south|center)$/.test(pane)) {
            $.layout.msg('LAYOUT ERROR - Invalid pane-name: "' + pane + '"');
            pane = "error";
        }
        return pane;
    }


        // LAYOUT-PLUGIN REGISTRATION
        // more plugins can added beyond this default list
    , plugins: {
        draggable: !!$.fn.draggable // resizing
        , effects: {
            core: !!$.effects		// animimations (specific effects tested by initOptions)
            , slide: $.effects && ($.effects.slide || ($.effects.effect && $.effects.effect.slide)) // default effect
        }
    }

        //	arrays of plugin or other methods to be triggered for events in *each layout* - will be passed 'Instance'
    , onCreate: []	// runs when layout is just starting to be created - right after options are set
    , onLoad: []	// runs after layout container and global events init, but before initPanes is called
    , onReady: []	// runs after initialization *completes* - ie, after initPanes completes successfully
    , onDestroy: []	// runs after layout is destroyed
    , onUnload: []	// runs after layout is destroyed OR when page unloads
    , afterOpen: []	// runs after setAsOpen() completes
    , afterClose: []	// runs after setAsClosed() completes

        /*
         *	GENERIC UTILITY METHODS
         */

        // calculate and return the scrollbar width, as an integer
    , scrollbarWidth: function () { return window.scrollbarWidth || $.layout.getScrollbarSize('width'); }
    , scrollbarHeight: function () { return window.scrollbarHeight || $.layout.getScrollbarSize('height'); }
    , getScrollbarSize: function (dim) {
        var $c = $('<div style="position: absolute; top: -10000px; left: -10000px; width: 100px; height: 100px; border: 0; overflow: scroll;"></div>').appendTo("body")
		, d = { width: $c.outerWidth - $c[0].clientWidth, height: 100 - $c[0].clientHeight };
        $c.remove();
        window.scrollbarWidth = d.width;
        window.scrollbarHeight = d.height;
        return dim.match(/^(width|height)$/) ? d[dim] : d;
    }


    , disableTextSelection: function () {
        var $d = $(document)
		, s = 'textSelectionDisabled'
		, x = 'textSelectionInitialized'
        ;
        if ($.fn.disableSelection) {
            if (!$d.data(x)) // document hasn't been initialized yet
                $d.on('mouseup', $.layout.enableTextSelection).data(x, true);
            if (!$d.data(s))
                $d.disableSelection().data(s, true);
        }
    }
    , enableTextSelection: function () {
        var $d = $(document)
		, s = 'textSelectionDisabled';
        if ($.fn.enableSelection && $d.data(s))
            $d.enableSelection().data(s, false);
    }


        /**
         * Returns hash container 'display' and 'visibility'
         *
         * @see	$.swap() - swaps CSS, runs callback, resets CSS
         * @param  {!Object}		$E				jQuery element
         * @param  {boolean=}	[force=false]	Run even if display != none
         * @return {!Object}						Returns current style props, if applicable
         */
    , showInvisibly: function ($E, force) {
        if ($E && $E.length && (force || $E.css("display") === "none")) { // only if not *already hidden*
            var s = $E[0].style
				// save ONLY the 'style' props because that is what we must restore
			, CSS = { display: s.display || '', visibility: s.visibility || '' };
            // show element 'invisibly' so can be measured
            $E.css({ display: "block", visibility: "hidden" });
            return CSS;
        }
        return {};
    }

        /**
         * Returns data for setting size of an element (container or a pane).
         *
         * @see  _create(), onWindowResize() for container, plus others for pane
         * @return JSON  Returns a hash of all dimensions: top, bottom, left, right, outerWidth, innerHeight, etc
         */
    , getElementDimensions: function ($E, inset) {
        var
		//	dimensions hash - start with current data IF passed
			d = { css: {}, inset: {} }
		, x = d.css			// CSS hash
		, i = { bottom: 0 }	// TEMP insets (bottom = complier hack)
		, N = $.layout.cssNum
		, R = Math.round
		, off = $E.offset()
		, b, p, ei			// TEMP border, padding
        ;
        d.offsetLeft = off.left;
        d.offsetTop = off.top;

        if (!inset) inset = {}; // simplify logic below

        $.each("Left,Right,Top,Bottom".split(","), function (idx, e) { // e = edge
            b = x["border" + e] = $.layout.borderWidth($E, e);
            p = x["padding" + e] = $.layout.cssNum($E, "padding" + e);
            ei = e.toLowerCase();
            d.inset[ei] = inset[ei] >= 0 ? inset[ei] : p; // any missing insetX value = paddingX
            i[ei] = d.inset[ei] + b; // total offset of content from outer side
        });

        x.width = R($E.width());
        x.height = R($E.height());
        x.top = N($E, "top", true);
        x.bottom = N($E, "bottom", true);
        x.left = N($E, "left", true);
        x.right = N($E, "right", true);

        d.outerWidth = R($E.outerWidth());
        d.outerHeight = R($E.outerHeight());
        // calc the TRUE inner-dimensions, even in quirks-mode!
        d.innerWidth = max(0, d.outerWidth - i.left - i.right);
        d.innerHeight = max(0, d.outerHeight - i.top - i.bottom);
        // layoutWidth/Height is used in calcs for manual resizing
        // layoutW/H only differs from innerW/H when in quirks-mode - then is like outerW/H
        d.layoutWidth = R($E.innerWidth());
        d.layoutHeight = R($E.innerHeight());

        //if ($E.prop('tagName') === 'BODY') { debugData( d, $E.prop('tagName') ); } // DEBUG

        //d.visible	= $E.is(":visible");// && x.width > 0 && x.height > 0;

        return d;
    }

    , getElementStyles: function ($E, list) {
        var
			CSS = {}
		, style = $E[0].style
		, props = list.split(",")
		, sides = "Top,Bottom,Left,Right".split(",")
		, attrs = "Color,Style,Width".split(",")
		, p, s, a, i, j, k
        ;
        for (i = 0; i < props.length; i++) {
            p = props[i];
            if (p.match(/(border|padding|margin)$/))
                for (j = 0; j < 4; j++) {
                    s = sides[j];
                    if (p === "border")
                        for (k = 0; k < 3; k++) {
                            a = attrs[k];
                            CSS[p + s + a] = style[p + s + a];
                        }
                    else
                        CSS[p + s] = style[p + s];
                }
            else
                CSS[p] = style[p];
        };
        return CSS
    }

        /**
         * Return the innerWidth for the current browser/doctype
         *
         * @see  initPanes(), sizeMidPanes(), initHandles(), sizeHandles()
         * @param  {Array.<Object>}	$E  Must pass a jQuery object - first element is processed
         * @param  {number=}			outerWidth (optional) Can pass a width, allowing calculations BEFORE element is resized
         * @return {number}			Returns the innerWidth of the elem by subtracting padding and borders
         */
    , cssWidth: function ($E, outerWidth) {
        // a 'calculated' outerHeight can be passed so borders and/or padding are removed if needed
        if (outerWidth <= 0) return 0;

        var lb = $.layout.browser
		, bs = !lb.boxModel ? "border-box" : lb.boxSizing ? $E.css("boxSizing") : "content-box"
		, b = $.layout.borderWidth
		, n = $.layout.cssNum
		, W = outerWidth
        ;
        // strip border and/or padding from outerWidth to get CSS Width
        if (bs !== "border-box")
            W -= (b($E, "Left") + b($E, "Right"));
        if (bs === "content-box")
            W -= (n($E, "paddingLeft") + n($E, "paddingRight"));
        return max(0, W);
    }

        /**
         * Return the innerHeight for the current browser/doctype
         *
         * @see  initPanes(), sizeMidPanes(), initHandles(), sizeHandles()
         * @param  {Array.<Object>}	$E  Must pass a jQuery object - first element is processed
         * @param  {number=}			outerHeight  (optional) Can pass a width, allowing calculations BEFORE element is resized
         * @return {number}			Returns the innerHeight of the elem by subtracting padding and borders
         */
    , cssHeight: function ($E, outerHeight) {
        // a 'calculated' outerHeight can be passed so borders and/or padding are removed if needed
        if (outerHeight <= 0) return 0;

        var lb = $.layout.browser
		, bs = !lb.boxModel ? "border-box" : lb.boxSizing ? $E.css("boxSizing") : "content-box"
		, b = $.layout.borderWidth
		, n = $.layout.cssNum
		, H = outerHeight
        ;
        // strip border and/or padding from outerHeight to get CSS Height
        if (bs !== "border-box")
            H -= (b($E, "Top") + b($E, "Bottom"));
        if (bs === "content-box")
            H -= (n($E, "paddingTop") + n($E, "paddingBottom"));
        return max(0, H);
    }

        /**
         * Returns the 'current CSS numeric value' for a CSS property - 0 if property does not exist
         *
         * @see  Called by many methods
         * @param {Array.<Object>}	$E					Must pass a jQuery object - first element is processed
         * @param {string}			prop				The name of the CSS property, eg: top, width, etc.
         * @param {boolean=}			[allowAuto=false]	true = return 'auto' if that is value; false = return 0
         * @return {(string|number)}						Usually used to get an integer value for position (top, left) or size (height, width)
         */
    , cssNum: function ($E, prop, allowAuto) {
        if (!$E.jquery) $E = $($E);
        var CSS = $.layout.showInvisibly($E)
		, p = $.css($E[0], prop, true)
		, v = allowAuto && p == "auto" ? p : Math.round(parseFloat(p) || 0);
        $E.css(CSS); // RESET
        return v;
    }

    , borderWidth: function (el, side) {
        if (el.jquery) el = el[0];
        var b = "border" + side.substr(0, 1).toUpperCase() + side.substr(1); // left => Left
        return $.css(el, b + "Style", true) === "none" ? 0 : Math.round(parseFloat($.css(el, b + "Width", true)) || 0);
    }

        /**
         * Mouse-tracking utility - FUTURE REFERENCE
         *
         * init: if (!window.mouse) {
         *			window.mouse = { x: 0, y: 0 };
         *			$(document).mousemove( $.layout.trackMouse );
         *		}
         *
         * @param {Object}		evt
         *
    ,	trackMouse: function (evt) {
            window.mouse = { x: evt.clientX, y: evt.clientY };
        }
        */

        /**
         * SUBROUTINE for preventPrematureSlideClose option
         *
         * @param {Object}		evt
         * @param {Object=}		el
         */
    , isMouseOverElem: function (evt, el) {
        var
			$E = $(el || this)
		, d = $E.offset()
		, T = d.top
		, L = d.left
		, R = L + $E.outerWidth()
		, B = T + $E.outerHeight()
		, x = evt.pageX	// evt.clientX ?
		, y = evt.pageY	// evt.clientY ?
        ;
        // if X & Y are < 0, probably means is over an open SELECT
        return ($.layout.browser.msie && x < 0 && y < 0) || ((x >= L && x <= R) && (y >= T && y <= B));
    }

        /**
         * Message/Logging Utility
         *
         * @example $.layout.msg("My message");				// log text
         * @example $.layout.msg("My message", true);		// alert text
         * @example $.layout.msg({ foo: "bar" }, "Title");	// log hash-data, with custom title
         * @example $.layout.msg({ foo: "bar" }, true, "Title", { sort: false }); -OR-
         * @example $.layout.msg({ foo: "bar" }, "Title", { sort: false, display: true }); // alert hash-data
         *
         * @param {(Object|string)}			info			String message OR Hash/Array
         * @param {(Boolean|string|Object)=}	[popup=false]	True means alert-box - can be skipped
         * @param {(Object|string)=}			[debugTitle=""]	Title for Hash data - can be skipped
         * @param {Object=}					[debugOpts]		Extra options for debug output
         */
    , msg: function (info, popup, debugTitle, debugOpts) {
        if ($.isPlainObject(info) && window.debugData) {
            if (typeof popup === "string") {
                debugOpts = debugTitle;
                debugTitle = popup;
            }
            else if (typeof debugTitle === "object") {
                debugOpts = debugTitle;
                debugTitle = null;
            }
            var t = debugTitle || "log( <object> )"
			, o = $.extend({ sort: false, returnHTML: false, display: false }, debugOpts);
            if (popup === true || o.display)
                debugData(info, t, o);
            else if (window.console)
                console.log(debugData(info, t, o));
        }
        else if (popup)
            alert(info);
        else if (window.console)
            console.log(info);
        else {
            var id = "#layoutLogger"
			, $l = $(id);
            if (!$l.length)
                $l = createLog();
            $l.children("ul").append('<li style="padding: 4px 10px; margin: 0; border-top: 1px solid #CCC;">' + info.replace(/\</g, "&lt;").replace(/\>/g, "&gt;") + '</li>');
        }

        function createLog() {
            var pos = $.support.fixedPosition ? 'fixed' : 'absolute'
			, $e = $('<div id="layoutLogger" style="position: ' + pos + '; top: 5px; z-index: 999999; max-width: 25%; overflow: hidden; border: 1px solid #000; border-radius: 5px; background: #FBFBFB; box-shadow: 0 2px 10px rgba(0,0,0,0.3);">'
				+ '<div style="font-size: 13px; font-weight: bold; padding: 5px 10px; background: #F6F6F6; border-radius: 5px 5px 0 0; cursor: move;">'
				+ '<span style="float: right; padding-left: 7px; cursor: pointer;" title="Remove Console" onclick="$(this).closest(\'#layoutLogger\').remove()">X</span>Layout console.log</div>'
				+ '<ul style="font-size: 13px; font-weight: none; list-style: none; margin: 0; padding: 0 0 2px;"></ul>'
				+ '</div>'
				).appendTo("body");
            $e.css('left', $(window).width() - $e.outerWidth() - 5)
            if ($.ui.draggable) $e.draggable({ handle: ':first-child' });
            return $e;
        };
    }

    };


    /*
     *	$.layout.browser REPLACES removed $.browser, with extra data
     *	Parsing code here adapted from jQuery 1.8 $.browse
     */
    (function () {
        var u = navigator.userAgent.toLowerCase()
        , m = /(chrome)[ \/]([\w.]+)/.exec(u)
            || /(webkit)[ \/]([\w.]+)/.exec(u)
            || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(u)
            || /(msie) ([\w.]+)/.exec(u)
            || u.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(u)
            || []
        , b = m[1] || ""
        , v = m[2] || 0
        , ie = b === "msie"
        , cm = document.compatMode
        , $s = $.support
        , bs = $s.boxSizing !== undefined ? $s.boxSizing : $s.boxSizingReliable
        , bm = !ie || !cm || cm === "CSS1Compat" || $s.boxModel || false
        , lb = $.layout.browser = {
            version: v
            , safari: b === "webkit"	// webkit (NOT chrome) = safari
            , webkit: b === "chrome"	// chrome = webkit
            , msie: ie
            , isIE6: ie && v == 6
            // ONLY IE reverts to old box-model - Note that compatMode was deprecated as of IE8
            , boxModel: bm
            , boxSizing: !!(typeof bs === "function" ? bs() : bs)
        };
        ;
        if (b) lb[b] = true; // set CURRENT browser
        /*	OLD versions of jQuery only set $.support.boxModel after page is loaded
         *	so if this is IE, use support.boxModel to test for quirks-mode (ONLY IE changes boxModel) */
        if (!bm && !cm) $(function () { lb.boxModel = $s.boxModel; });
    })();


    // DEFAULT OPTIONS
    $.layout.defaults = {
        /*
         *	LAYOUT & LAYOUT-CONTAINER OPTIONS
         *	- none of these options are applicable to individual panes
         */
        name: ""			// Not required, but useful for buttons and used for the state-cookie
    , containerClass: "ui-layout-container" // layout-container element
    , inset: null		// custom container-inset values (override padding)
    , scrollToBookmarkOnLoad: true		// after creating a layout, scroll to bookmark in URL (.../page.htm#myBookmark)
    , resizeWithWindow: true		// bind thisLayout.resizeAll() to the window.resize event
    , resizeWithWindowDelay: 200			// delay calling resizeAll because makes window resizing very jerky
    , resizeWithWindowMaxDelay: 0			// 0 = none - force resize every XX ms while window is being resized
    , maskPanesEarly: false		// true = create pane-masks on resizer.mouseDown instead of waiting for resizer.dragstart
    , onresizeall_start: null		// CALLBACK when resizeAll() STARTS	- NOT pane-specific
    , onresizeall_end: null		// CALLBACK when resizeAll() ENDS	- NOT pane-specific
    , onload_start: null		// CALLBACK when Layout inits - after options initialized, but before elements
    , onload_end: null		// CALLBACK when Layout inits - after EVERYTHING has been initialized
    , onunload_start: null		// CALLBACK when Layout is destroyed OR onWindowUnload
    , onunload_end: null		// CALLBACK when Layout is destroyed OR onWindowUnload
    , initPanes: true		// false = DO NOT initialize the panes onLoad - will init later
    , showErrorMessages: true		// enables fatal error messages to warn developers of common errors
    , showDebugMessages: false		// display console-and-alert debug msgs - IF this Layout version _has_ debugging code!
        //	Changing this zIndex value will cause other zIndex values to automatically change
    , zIndex: null		// the PANE zIndex - resizers and masks will be +1
        //	DO NOT CHANGE the zIndex values below unless you clearly understand their relationships
    , zIndexes: {								// set _default_ z-index values here...
        pane_normal: 0			// normal z-index for panes
        , content_mask: 1			// applied to overlays used to mask content INSIDE panes during resizing
        , resizer_normal: 2			// normal z-index for resizer-bars
        , pane_sliding: 100			// applied to *BOTH* the pane and its resizer when a pane is 'slid open'
        , pane_animate: 1000		// applied to the pane when being animated - not applied to the resizer
        , resizer_drag: 10000		// applied to the CLONED resizer-bar when being 'dragged'
    }
    , errors: {
        pane: "pane"		// description of "layout pane element" - used only in error messages
        , selector: "selector"	// description of "jQuery-selector" - used only in error messages
        , addButtonError: "Error Adding Button\nInvalid "
        , containerMissing: "UI Layout Initialization Error\nThe specified layout-container does not exist."
        , centerPaneMissing: "UI Layout Initialization Error\nThe center-pane element does not exist.\nThe center-pane is a required element."
        , noContainerHeight: "UI Layout Initialization Warning\nThe layout-container \"CONTAINER\" has no height.\nTherefore the layout is 0-height and hence 'invisible'!"
        , callbackError: "UI Layout Callback Error\nThe EVENT callback is not a valid function."
    }
        /*
         *	PANE DEFAULT SETTINGS
         *	- settings under the 'panes' key become the default settings for *all panes*
         *	- ALL pane-options can also be set specifically for each panes, which will override these 'default values'
         */
    , panes: { // default options for 'all panes' - will be overridden by 'per-pane settings'
        applyDemoStyles: false		// NOTE: renamed from applyDefaultStyles for clarity
        , closable: false		// pane can open & close
        , resizable: true		// when open, pane can be resized 
        , slidable: true		// when closed, pane can 'slide open' over other panes - closes on mouse-out
        , initClosed: false		// true = init pane as 'closed'
        , initHidden: false 		// true = init pane as 'hidden' - no resizer-bar/spacing
        //	SELECTORS
        //,	paneSelector:			""			// MUST be pane-specific - jQuery selector for pane
        , contentSelector: ".ui-layout-content" // INNER div/element to auto-size so only it scrolls, not the entire pane!
        , contentIgnoreSelector: ".ui-layout-ignore"	// element(s) to 'ignore' when measuring 'content'
        , findNestedContent: false		// true = $P.find(contentSelector), false = $P.children(contentSelector)
        //	GENERIC ROOT-CLASSES - for auto-generated classNames
        , paneClass: "ui-layout-pane"	// Layout Pane
        , resizerClass: "ui-layout-resizer"	// Resizer Bar
        , togglerClass: "ui-layout-toggler"	// Toggler Button
        , buttonClass: "ui-layout-button"	// CUSTOM Buttons	- eg: '[ui-layout-button]-toggle/-open/-close/-pin'
        //	ELEMENT SIZE & SPACING
        //,	size:					100			// MUST be pane-specific -initial size of pane
        , minSize: 0			// when manually resizing a pane
        , maxSize: 0			// ditto, 0 = no limit
        , spacing_open: 5			// space between pane and adjacent panes - when pane is 'open'
        , spacing_closed: 5			// ditto - when pane is 'closed'
        , togglerLength_open: 50			// Length = WIDTH of toggler button on north/south sides - HEIGHT on east/west sides
        , togglerLength_closed: 50			// 100% OR -1 means 'full height/width of resizer bar' - 0 means 'hidden'
        , togglerAlign_open: "center"	// top/left, bottom/right, center, OR...
        , togglerAlign_closed: "center"	// 1 => nn = offset from top/left, -1 => -nn == offset from bottom/right
        , togglerContent_open: ""			// text or HTML to put INSIDE the toggler
        , togglerContent_closed: ""			// ditto
        //	RESIZING OPTIONS
        , resizerDblClickToggle: true		// 
        , autoResize: true		// IF size is 'auto' or a percentage, then recalc 'pixel size' whenever the layout resizes
        , autoReopen: true		// IF a pane was auto-closed due to noRoom, reopen it when there is room? False = leave it closed
        , resizerDragOpacity: 1			// option for ui.draggable
        //,	resizerCursor:			""			// MUST be pane-specific - cursor when over resizer-bar
        , maskContents: false		// true = add DIV-mask over-or-inside this pane so can 'drag' over IFRAMES
        , maskObjects: false		// true = add IFRAME-mask over-or-inside this pane to cover objects/applets - content-mask will overlay this mask
        , maskZindex: null		// will override zIndexes.content_mask if specified - not applicable to iframe-panes
        , resizingGrid: false		// grid size that the resizers will snap-to during resizing, eg: [20,20]
        , livePaneResizing: false		// true = LIVE Resizing as resizer is dragged
        , liveContentResizing: false		// true = re-measure header/footer heights as resizer is dragged
        , liveResizingTolerance: 1			// how many px change before pane resizes, to control performance
        //	SLIDING OPTIONS
        , sliderCursor: "pointer"	// cursor when resizer-bar will trigger 'sliding'
        , slideTrigger_open: "click"		// click, dblclick, mouseenter
        , slideTrigger_close: "mouseleave"// click, mouseleave
        , slideDelay_open: 300			// applies only for mouseenter event - 0 = instant open
        , slideDelay_close: 300			// applies only for mouseleave event (300ms is the minimum!)
        , hideTogglerOnSlide: false		// when pane is slid-open, should the toggler show?
        , preventQuickSlideClose: $.layout.browser.webkit // Chrome triggers slideClosed as it is opening
        , preventPrematureSlideClose: false	// handle incorrect mouseleave trigger, like when over a SELECT-list in IE
        //	PANE-SPECIFIC TIPS & MESSAGES
        , tips: {
            Open: "Open"		// eg: "Open Pane"
            , Close: "Close"
            , Resize: "Resize"
            , Slide: "Slide Open"
            , Pin: "Pin"
            , Unpin: "Un-Pin"
            , noRoomToOpen: "Not enough room to show this panel."	// alert if user tries to open a pane that cannot
            , minSizeWarning: "Panel has reached its minimum size"	// displays in browser statusbar
            , maxSizeWarning: "Panel has reached its maximum size"	// ditto
        }
        //	HOT-KEYS & MISC
        , showOverflowOnHover: false		// will bind allowOverflow() utility to pane.onMouseOver
        , enableCursorHotkey: true		// enabled 'cursor' hotkeys
        //,	customHotkey:			""			// MUST be pane-specific - EITHER a charCode OR a character
        , customHotkeyModifier: "SHIFT"		// either 'SHIFT', 'CTRL' or 'CTRL+SHIFT' - NOT 'ALT'
        //	PANE ANIMATION
        //	NOTE: fxSss_open, fxSss_close & fxSss_size options (eg: fxName_open) are auto-generated if not passed
        , fxName: "slide" 	// ('none' or blank), slide, drop, scale -- only relevant to 'open' & 'close', NOT 'size'
        , fxSpeed: null		// slow, normal, fast, 200, nnn - if passed, will OVERRIDE fxSettings.duration
        , fxSettings: {}			// can be passed, eg: { easing: "easeOutBounce", duration: 1500 }
        , fxOpacityFix: true		// tries to fix opacity in IE to restore anti-aliasing after animation
        , animatePaneSizing: false		// true = animate resizing after dragging resizer-bar OR sizePane() is called
        /*  NOTE: Action-specific FX options are auto-generated from the options above if not specifically set:
            fxName_open:			"slide"		// 'Open' pane animation
            fnName_close:			"slide"		// 'Close' pane animation
            fxName_size:			"slide"		// 'Size' pane animation - when animatePaneSizing = true
            fxSpeed_open:			null
            fxSpeed_close:			null
            fxSpeed_size:			null
            fxSettings_open:		{}
            fxSettings_close:		{}
            fxSettings_size:		{}
        */
        //	CHILD/NESTED LAYOUTS
        , children: null		// Layout-options for nested/child layout - even {} is valid as options
        , containerSelector: ''			// if child is NOT 'directly nested', a selector to find it/them (can have more than one child layout!)
        , initChildren: true		// true = child layout will be created as soon as _this_ layout completes initialization
        , destroyChildren: true		// true = destroy child-layout if this pane is destroyed
        , resizeChildren: true		// true = trigger child-layout.resizeAll() when this pane is resized
        //	EVENT TRIGGERING
        , triggerEventsOnLoad: false		// true = trigger onopen OR onclose callbacks when layout initializes
        , triggerEventsDuringLiveResize: true	// true = trigger onresize callback REPEATEDLY if livePaneResizing==true
        //	PANE CALLBACKS
        , onshow_start: null		// CALLBACK when pane STARTS to Show	- BEFORE onopen/onhide_start
        , onshow_end: null		// CALLBACK when pane ENDS being Shown	- AFTER  onopen/onhide_end
        , onhide_start: null		// CALLBACK when pane STARTS to Close	- BEFORE onclose_start
        , onhide_end: null		// CALLBACK when pane ENDS being Closed	- AFTER  onclose_end
        , onopen_start: null		// CALLBACK when pane STARTS to Open
        , onopen_end: null		// CALLBACK when pane ENDS being Opened
        , onclose_start: null		// CALLBACK when pane STARTS to Close
        , onclose_end: null		// CALLBACK when pane ENDS being Closed
        , onresize_start: null		// CALLBACK when pane STARTS being Resized ***FOR ANY REASON***
        , onresize_end: null		// CALLBACK when pane ENDS being Resized ***FOR ANY REASON***
        , onsizecontent_start: null		// CALLBACK when sizing of content-element STARTS
        , onsizecontent_end: null		// CALLBACK when sizing of content-element ENDS
        , onswap_start: null		// CALLBACK when pane STARTS to Swap
        , onswap_end: null		// CALLBACK when pane ENDS being Swapped
        , ondrag_start: null		// CALLBACK when pane STARTS being ***MANUALLY*** Resized
        , ondrag_end: null		// CALLBACK when pane ENDS being ***MANUALLY*** Resized
    }
        /*
         *	PANE-SPECIFIC SETTINGS
         *	- options listed below MUST be specified per-pane - they CANNOT be set under 'panes'
         *	- all options under the 'panes' key can also be set specifically for any pane
         *	- most options under the 'panes' key apply only to 'border-panes' - NOT the the center-pane
         */
    , north: {
        paneSelector: ".ui-layout-north"
        , size: "auto"		// eg: "auto", "30%", .30, 200
        , resizerCursor: "n-resize"	// custom = url(myCursor.cur)
        , customHotkey: ""			// EITHER a charCode (43) OR a character ("o")
    }
    , south: {
        paneSelector: ".ui-layout-south"
        , size: "auto"
        , resizerCursor: "s-resize"
        , customHotkey: ""
    }
    , east: {
        paneSelector: ".ui-layout-east"
        , size: 200
        , resizerCursor: "e-resize"
        , customHotkey: ""
    }
    , west: {
        paneSelector: ".ui-layout-west"
        , size: 200
        , resizerCursor: "col-resize"
        , customHotkey: ""
    }
    , center: {
        paneSelector: ".ui-layout-center"
        , minWidth: 0
        , minHeight: 0
    }
    };

    $.layout.optionsMap = {
        // layout/global options - NOT pane-options
        layout: ("name,instanceKey,stateManagement,effects,inset,zIndexes,errors,"
        + "zIndex,scrollToBookmarkOnLoad,showErrorMessages,maskPanesEarly,"
        + "outset,resizeWithWindow,resizeWithWindowDelay,resizeWithWindowMaxDelay,"
        + "onresizeall,onresizeall_start,onresizeall_end,onload,onload_start,onload_end,onunload,onunload_start,onunload_end").split(",")
        //	borderPanes: [ ALL options that are NOT specified as 'layout' ]
        // default.panes options that apply to the center-pane (most options apply _only_ to border-panes)
    , center: ("paneClass,contentSelector,contentIgnoreSelector,findNestedContent,applyDemoStyles,triggerEventsOnLoad,"
        + "showOverflowOnHover,maskContents,maskObjects,liveContentResizing,"
        + "containerSelector,children,initChildren,resizeChildren,destroyChildren,"
        + "onresize,onresize_start,onresize_end,onsizecontent,onsizecontent_start,onsizecontent_end").split(",")
        // options that MUST be specifically set 'per-pane' - CANNOT set in the panes (defaults) key
    , noDefault: ("paneSelector,resizerCursor,customHotkey").split(",")
    };

    /**
     * Processes options passed in converts flat-format data into subkey (JSON) format
     * In flat-format, subkeys are _currently_ separated with 2 underscores, like north__optName
     * Plugins may also call this method so they can transform their own data
     *
     * @param  {!Object}	hash			Data/options passed by user - may be a single level or nested levels
     * @param  {boolean=}	[addKeys=false]	Should the primary layout.options keys be added if they do not exist?
     * @return {Object}						Returns hash of minWidth & minHeight
     */
    $.layout.transformData = function (hash, addKeys) {
        var json = addKeys ? { panes: {}, center: {} } : {} // init return object
        , branch, optKey, keys, key, val, i, c;

        if (typeof hash !== "object") return json; // no options passed

        // convert all 'flat-keys' to 'sub-key' format
        for (optKey in hash) {
            branch = json;
            val = hash[optKey];
            keys = optKey.split("__"); // eg: west__size or north__fxSettings__duration
            c = keys.length - 1;
            // convert underscore-delimited to subkeys
            for (i = 0; i <= c; i++) {
                key = keys[i];
                if (i === c) {	// last key = value
                    if ($.isPlainObject(val))
                        branch[key] = $.layout.transformData(val); // RECURSE
                    else
                        branch[key] = val;
                }
                else {
                    if (!branch[key])
                        branch[key] = {}; // create the subkey
                    // recurse to sub-key for next loop - if not done
                    branch = branch[key];
                }
            }
        }
        return json;
    };

    // INTERNAL CONFIG DATA - DO NOT CHANGE THIS!
    $.layout.backwardCompatibility = {
        // data used by renameOldOptions()
        map: {
            //	OLD Option Name:			NEW Option Name
            applyDefaultStyles: "applyDemoStyles"
            //	CHILD/NESTED LAYOUTS
        , childOptions: "children"
        , initChildLayout: "initChildren"
        , destroyChildLayout: "destroyChildren"
        , resizeChildLayout: "resizeChildren"
        , resizeNestedLayout: "resizeChildren"
            //	MISC Options
        , resizeWhileDragging: "livePaneResizing"
        , resizeContentWhileDragging: "liveContentResizing"
        , triggerEventsWhileDragging: "triggerEventsDuringLiveResize"
        , maskIframesOnResize: "maskContents"
            //	STATE MANAGEMENT
        , useStateCookie: "stateManagement.enabled"
        , "cookie.autoLoad": "stateManagement.autoLoad"
        , "cookie.autoSave": "stateManagement.autoSave"
        , "cookie.keys": "stateManagement.stateKeys"
        , "cookie.name": "stateManagement.cookie.name"
        , "cookie.domain": "stateManagement.cookie.domain"
        , "cookie.path": "stateManagement.cookie.path"
        , "cookie.expires": "stateManagement.cookie.expires"
        , "cookie.secure": "stateManagement.cookie.secure"
            //	OLD Language options
        , noRoomToOpenTip: "tips.noRoomToOpen"
        , togglerTip_open: "tips.Close"	// open   = Close
        , togglerTip_closed: "tips.Open"		// closed = Open
        , resizerTip: "tips.Resize"
        , sliderTip: "tips.Slide"
        }

        /**
        * @param {Object}	opts
        */
    , renameOptions: function (opts) {
        var map = $.layout.backwardCompatibility.map
		, oldData, newData, value
        ;
        for (var itemPath in map) {
            oldData = getBranch(itemPath);
            value = oldData.branch[oldData.key];
            if (value !== undefined) {
                newData = getBranch(map[itemPath], true);
                newData.branch[newData.key] = value;
                delete oldData.branch[oldData.key];
            }
        }

        /**
		 * @param {string}	path
		 * @param {boolean=}	[create=false]	Create path if does not exist
		 */
        function getBranch(path, create) {
            var a = path.split(".") // split keys into array
			, c = a.length - 1
			, D = { branch: opts, key: a[c] } // init branch at top & set key (last item)
			, i = 0, k, undef;
            for (; i < c; i++) { // skip the last key (data)
                k = a[i];
                if (D.branch[k] == undefined) { // child-key does not exist
                    if (create) {
                        D.branch = D.branch[k] = {}; // create child-branch
                    }
                    else // can't go any farther
                        D.branch = {}; // branch is undefined
                }
                else
                    D.branch = D.branch[k]; // get child-branch
            }
            return D;
        };
    }

        /**
        * @param {Object}	opts
        */
    , renameAllOptions: function (opts) {
        var ren = $.layout.backwardCompatibility.renameOptions;
        // rename root (layout) options
        ren(opts);
        // rename 'defaults' to 'panes'
        if (opts.defaults) {
            if (typeof opts.panes !== "object")
                opts.panes = {};
            $.extend(true, opts.panes, opts.defaults);
            delete opts.defaults;
        }
        // rename options in the the options.panes key
        if (opts.panes) ren(opts.panes);
        // rename options inside *each pane key*, eg: options.west
        $.each($.layout.config.allPanes, function (i, pane) {
            if (opts[pane]) ren(opts[pane]);
        });
        return opts;
    }
    };




    /*	============================================================
     *	BEGIN WIDGET: $( selector ).layout( {options} );
     *	============================================================
     */
    $.fn.layout = function (opts) {
        var

        // local aliases to global data
        browser = $.layout.browser
    , _c = $.layout.config

        // local aliases to utlity methods
    , cssW = $.layout.cssWidth
    , cssH = $.layout.cssHeight
    , elDims = $.layout.getElementDimensions
    , styles = $.layout.getElementStyles
    , evtObj = $.layout.getEventObject
    , evtPane = $.layout.parsePaneName

    /**
     * options - populated by initOptions()
     */
    , options = $.extend(true, {}, $.layout.defaults)
    , effects = options.effects = $.extend(true, {}, $.layout.effects)

    /**
     * layout-state object
     */
    , state = {
        // generate unique ID to use for event.namespace so can unbind only events added by 'this layout'
        id: "layout" + $.now()	// code uses alias: sID
        , initialized: false
        , paneResizing: false
        , panesSliding: {}
        , container: { 	// list all keys referenced in code to avoid compiler error msgs
            innerWidth: 0
            , innerHeight: 0
            , outerWidth: 0
            , outerHeight: 0
            , layoutWidth: 0
            , layoutHeight: 0
        }
        , north: { childIdx: 0 }
        , south: { childIdx: 0 }
        , east: { childIdx: 0 }
        , west: { childIdx: 0 }
        , center: { childIdx: 0 }
    }

    /**
     * parent/child-layout pointers
     */
    //,	hasParentLayout	= false	- exists ONLY inside Instance so can be set externally
    , children = {
        north: null
        , south: null
        , east: null
        , west: null
        , center: null
    }

    /*
     * ###########################
     *  INTERNAL HELPER FUNCTIONS
     * ###########################
     */

        /**
         * Manages all internal timers
         */
    , timer = {
        data: {}
        , set: function (s, fn, ms) { timer.clear(s); timer.data[s] = setTimeout(fn, ms); }
        , clear: function (s) { var t = timer.data; if (t[s]) { clearTimeout(t[s]); delete t[s]; } }
    }

        /**
         * Alert or console.log a message - IF option is enabled.
         *
         * @param {(string|!Object)}	msg				Message (or debug-data) to display
         * @param {boolean=}			[popup=false]	True by default, means 'alert', false means use console.log
         * @param {boolean=}			[debug=false]	True means is a widget debugging message
         */
    , _log = function (msg, popup, debug) {
        var o = options;
        if ((o.showErrorMessages && !debug) || (debug && o.showDebugMessages))
            $.layout.msg(o.name + ' / ' + msg, (popup !== false));
        return false;
    }

        /**
         * Executes a Callback function after a trigger event, like resize, open or close
         *
         * @param {string}				evtName					Name of the layout callback, eg "onresize_start"
         * @param {(string|boolean)=}	[pane=""]				This is passed only so we can pass the 'pane object' to the callback
         * @param {(string|boolean)=}	[skipBoundEvents=false]	True = do not run events bound to the elements - only the callbacks set in options
         */
    , _runCallbacks = function (evtName, pane, skipBoundEvents) {
        var hasPane = pane && isStr(pane)
		, s = hasPane ? state[pane] : state
		, o = hasPane ? options[pane] : options
		, lName = options.name
			// names like onopen and onopen_end separate are interchangeable in options...
		, lng = evtName + (evtName.match(/_/) ? "" : "_end")
		, shrt = lng.match(/_end$/) ? lng.substr(0, lng.length - 4) : ""
		, fn = o[lng] || o[shrt]
		, retVal = "NC" // NC = No Callback
		, args = []
		, $P = hasPane ? $Ps[pane] : 0
        ;
        if (hasPane && !$P) // a pane is specified, but does not exist!
            return retVal;
        if (!hasPane && $.type(pane) === "boolean") {
            skipBoundEvents = pane; // allow pane param to be skipped for Layout callback
            pane = "";
        }

        // first trigger the callback set in the options
        if (fn) {
            try {
                // convert function name (string) to function object
                if (isStr(fn)) {
                    if (fn.match(/,/)) {
                        // function name cannot contain a comma, 
                        // so must be a function name AND a parameter to pass
                        args = fn.split(",")
						, fn = eval(args[0]);
                    }
                    else // just the name of an external function?
                        fn = eval(fn);
                }
                // execute the callback, if exists
                if ($.isFunction(fn)) {
                    if (args.length)
                        retVal = g(fn)(args[1]); // pass the argument parsed from 'list'
                    else if (hasPane)
                        // pass data: pane-name, pane-element, pane-state, pane-options, and layout-name
                        retVal = g(fn)(pane, $Ps[pane], s, o, lName);
                    else // must be a layout/container callback - pass suitable info
                        retVal = g(fn)(Instance, s, o, lName);
                }
            }
            catch (ex) {
                _log(options.errors.callbackError.replace(/EVENT/, $.trim((pane || "") + " " + lng)), false);
                if ($.type(ex) === "string" && string.length)
                    _log("Exception:  " + ex, false);
            }
        }

        // trigger additional events bound directly to the pane
        if (!skipBoundEvents && retVal !== false) {
            if (hasPane) { // PANE events can be bound to each pane-elements
                o = options[pane];
                s = state[pane];
                $P.triggerHandler("layoutpane" + lng, [pane, $P, s, o, lName]);
                if (shrt)
                    $P.triggerHandler("layoutpane" + shrt, [pane, $P, s, o, lName]);
            }
            else { // LAYOUT events can be bound to the container-element
                $N.triggerHandler("layout" + lng, [Instance, s, o, lName]);
                if (shrt)
                    $N.triggerHandler("layout" + shrt, [Instance, s, o, lName]);
            }
        }

        // ALWAYS resizeChildren after an onresize_end event - even during initialization
        // IGNORE onsizecontent_end event because causes child-layouts to resize TWICE
        if (hasPane && evtName === "onresize_end") // BAD: || evtName === "onsizecontent_end"
            resizeChildren(pane + "", true); // compiler hack -force string

        return retVal;

        function g(f) { return f; }; // compiler hack
    }


        /**
         * cure iframe display issues in IE & other browsers
         */
    , _fixIframe = function (pane) {
        if (browser.mozilla) return; // skip FireFox - it auto-refreshes iframes onShow
        var $P = $Ps[pane];
        // if the 'pane' is an iframe, do it
        if (state[pane].tagName === "IFRAME")
            $P.css(_c.hidden).css(_c.visible);
        else // ditto for any iframes INSIDE the pane
            $P.find('IFRAME').css(_c.hidden).css(_c.visible);
    }

        /**
         * @param  {string}		pane		Can accept ONLY a 'pane' (east, west, etc)
         * @param  {number=}		outerSize	(optional) Can pass a width, allowing calculations BEFORE element is resized
         * @return {number}		Returns the innerHeight/Width of el by subtracting padding and borders
         */
    , cssSize = function (pane, outerSize) {
        var fn = _c[pane].dir == "horz" ? cssH : cssW;
        return fn($Ps[pane], outerSize);
    }

        /**
         * @param  {string}		pane		Can accept ONLY a 'pane' (east, west, etc)
         * @return {Object}		Returns hash of minWidth & minHeight
         */
    , cssMinDims = function (pane) {
        // minWidth/Height means CSS width/height = 1px
        var $P = $Ps[pane]
		, dir = _c[pane].dir
		, d = {
		    minWidth: 1001 - cssW($P, 1000)
			, minHeight: 1001 - cssH($P, 1000)
		}
        ;
        if (dir === "horz") d.minSize = d.minHeight;
        if (dir === "vert") d.minSize = d.minWidth;
        return d;
    }

        // TODO: see if these methods can be made more useful...
        // TODO: *maybe* return cssW/H from these so caller can use this info

        /**
         * @param {(string|!Object)}		el
         * @param {number=}				outerWidth
         * @param {boolean=}				[autoHide=false]
         */
    , setOuterWidth = function (el, outerWidth, autoHide) {
        var $E = el, w;
        if (isStr(el)) $E = $Ps[el]; // west
        else if (!el.jquery) $E = $(el);
        w = cssW($E, outerWidth);
        $E.css({ width: w });
        if (w > 0) {
            if (autoHide && $E.data('autoHidden') && $E.innerHeight() > 0) {
                $E.show().data('autoHidden', false);
                if (!browser.mozilla) // FireFox refreshes iframes - IE does not
                    // make hidden, then visible to 'refresh' display after animation
                    $E.css(_c.hidden).css(_c.visible);
            }
        }
        else if (autoHide && !$E.data('autoHidden'))
            $E.hide().data('autoHidden', true);
    }

        /**
         * @param {(string|!Object)}		el
         * @param {number=}				outerHeight
         * @param {boolean=}				[autoHide=false]
         */
    , setOuterHeight = function (el, outerHeight, autoHide) {
        var $E = el, h;
        if (isStr(el)) $E = $Ps[el]; // west
        else if (!el.jquery) $E = $(el);
        h = cssH($E, outerHeight);
        $E.css({ height: h, visibility: "visible" }); // may have been 'hidden' by sizeContent
        if (h > 0 && $E.innerWidth() > 0) {
            if (autoHide && $E.data('autoHidden')) {
                $E.show().data('autoHidden', false);
                if (!browser.mozilla) // FireFox refreshes iframes - IE does not
                    $E.css(_c.hidden).css(_c.visible);
            }
        }
        else if (autoHide && !$E.data('autoHidden'))
            $E.hide().data('autoHidden', true);
    }


        /**
         * Converts any 'size' params to a pixel/integer size, if not already
         * If 'auto' or a decimal/percentage is passed as 'size', a pixel-size is calculated
         *
        /**
         * @param  {string}				pane
         * @param  {(string|number)=}	size
         * @param  {string=}				[dir]
         * @return {number}
         */
    , _parseSize = function (pane, size, dir) {
        if (!dir) dir = _c[pane].dir;

        if (isStr(size) && size.match(/%/))
            size = (size === '100%') ? -1 : parseInt(size, 10) / 100; // convert % to decimal

        if (size === 0)
            return 0;
        else if (size >= 1)
            return parseInt(size, 10);

        var o = options, avail = 0;
        if (dir == "horz") // north or south or center.minHeight
            avail = sC.innerHeight - ($Ps.north ? o.north.spacing_open : 0) - ($Ps.south ? o.south.spacing_open : 0);
        else if (dir == "vert") // east or west or center.minWidth
            avail = sC.innerWidth - ($Ps.west ? o.west.spacing_open : 0) - ($Ps.east ? o.east.spacing_open : 0);

        if (size === -1) // -1 == 100%
            return avail;
        else if (size > 0) // percentage, eg: .25
            return round(avail * size);
        else if (pane == "center")
            return 0;
        else { // size < 0 || size=='auto' || size==Missing || size==Invalid
            // auto-size the pane
            var dim = (dir === "horz" ? "height" : "width")
			, $P = $Ps[pane]
			, $C = dim === 'height' ? $Cs[pane] : false
			, vis = $.layout.showInvisibly($P) // show pane invisibly if hidden
			, szP = $P.css(dim) // SAVE current pane size
			, szC = $C ? $C.css(dim) : 0 // SAVE current content size
            ;
            $P.css(dim, "auto");
            if ($C) $C.css(dim, "auto");
            size = (dim === "height") ? $P.outerHeight() : $P.outerWidth(); // MEASURE
            $P.css(dim, szP).css(vis); // RESET size & visibility
            if ($C) $C.css(dim, szC);
            return size;
        }
    }

        /**
         * Calculates current 'size' (outer-width or outer-height) of a border-pane - optionally with 'pane-spacing' added
         *
         * @param  {(string|!Object)}	pane
         * @param  {boolean=}			[inclSpace=false]
         * @return {number}				Returns EITHER Width for east/west panes OR Height for north/south panes
         */
    , getPaneSize = function (pane, inclSpace) {
        var
			$P = $Ps[pane]
		, o = options[pane]
		, s = state[pane]
		, oSp = (inclSpace ? o.spacing_open : 0)
		, cSp = (inclSpace ? o.spacing_closed : 0)
        ;
        if (!$P || s.isHidden)
            return 0;
        else if (s.isClosed || (s.isSliding && inclSpace))
            return cSp;
        else if (_c[pane].dir === "horz")
            return $P.outerHeight() + oSp;
        else // dir === "vert"
            return $P.outerWidth() + oSp;
    }

        /**
         * Calculate min/max pane dimensions and limits for resizing
         *
         * @param  {string}		pane
         * @param  {boolean=}	[slide=false]
         */
    , setSizeLimits = function (pane, slide) {
        if (!isInitialized()) return;
        var
			o = options[pane]
		, s = state[pane]
		, c = _c[pane]
		, dir = c.dir
		, type = c.sizeType.toLowerCase()
		, isSliding = (slide != undefined ? slide : s.isSliding) // only open() passes 'slide' param
		, $P = $Ps[pane]
		, paneSpacing = o.spacing_open
		//	measure the pane on the *opposite side* from this pane
		, altPane = _c.oppositeEdge[pane]
		, altS = state[altPane]
		, $altP = $Ps[altPane]
		, altPaneSize = (!$altP || altS.isVisible === false || altS.isSliding ? 0 : (dir == "horz" ? $altP.outerHeight() : $altP.outerWidth()))
		, altPaneSpacing = ((!$altP || altS.isHidden ? 0 : options[altPane][altS.isClosed !== false ? "spacing_closed" : "spacing_open"]) || 0)
		//	limitSize prevents this pane from 'overlapping' opposite pane
		, containerSize = (dir == "horz" ? sC.innerHeight : sC.innerWidth)
		, minCenterDims = cssMinDims("center")
		, minCenterSize = dir == "horz" ? max(options.center.minHeight, minCenterDims.minHeight) : max(options.center.minWidth, minCenterDims.minWidth)
		//	if pane is 'sliding', then ignore center and alt-pane sizes - because 'overlays' them
		, limitSize = (containerSize - paneSpacing - (isSliding ? 0 : (_parseSize("center", minCenterSize, dir) + altPaneSize + altPaneSpacing)))
		, minSize = s.minSize = max(_parseSize(pane, o.minSize), cssMinDims(pane).minSize)
		, maxSize = s.maxSize = min((o.maxSize ? _parseSize(pane, o.maxSize) : 100000), limitSize)
		, r = s.resizerPosition = {} // used to set resizing limits
		, top = sC.inset.top
		, left = sC.inset.left
		, W = sC.innerWidth
		, H = sC.innerHeight
		, rW = o.spacing_open // subtract resizer-width to get top/left position for south/east
        ;
        switch (pane) {
            case "north": r.min = top + minSize;
                r.max = top + maxSize;
                break;
            case "west": r.min = left + minSize;
                r.max = left + maxSize;
                break;
            case "south": r.min = top + H - maxSize - rW;
                r.max = top + H - minSize - rW;
                break;
            case "east": r.min = left + W - maxSize - rW;
                r.max = left + W - minSize - rW;
                break;
        };
    }

        /**
         * Returns data for setting the size/position of center pane. Also used to set Height for east/west panes
         *
         * @return JSON  Returns a hash of all dimensions: top, bottom, left, right, (outer) width and (outer) height
         */
    , calcNewCenterPaneDims = function () {
        var d = {
            top: getPaneSize("north", true) // true = include 'spacing' value for pane
		, bottom: getPaneSize("south", true)
		, left: getPaneSize("west", true)
		, right: getPaneSize("east", true)
		, width: 0
		, height: 0
        };

        // NOTE: sC = state.container
        // calc center-pane outer dimensions
        d.width = sC.innerWidth - d.left - d.right;  // outerWidth
        d.height = sC.innerHeight - d.bottom - d.top; // outerHeight
        // add the 'container border/padding' to get final positions relative to the container
        d.top += sC.inset.top;
        d.bottom += sC.inset.bottom;
        d.left += sC.inset.left;
        d.right += sC.inset.right;

        return d;
    }


        /**
         * @param {!Object}		el
         * @param {boolean=}		[allStates=false]
         */
    , getHoverClasses = function (el, allStates) {
        var
			$El = $(el)
		, type = $El.data("layoutRole")
		, pane = $El.data("layoutEdge")
		, o = options[pane]
		, root = o[type + "Class"]
		, _pane = "-" + pane // eg: "-west"
		, _open = "-open"
		, _closed = "-closed"
		, _slide = "-sliding"
		, _hover = "-hover " // NOTE the trailing space
		, _state = $El.hasClass(root + _closed) ? _closed : _open
		, _alt = _state === _closed ? _open : _closed
		, classes = (root + _hover) + (root + _pane + _hover) + (root + _state + _hover) + (root + _pane + _state + _hover)
        ;
        if (allStates) // when 'removing' classes, also remove alternate-state classes
            classes += (root + _alt + _hover) + (root + _pane + _alt + _hover);

        if (type == "resizer" && $El.hasClass(root + _slide))
            classes += (root + _slide + _hover) + (root + _pane + _slide + _hover);

        return $.trim(classes);
    }
    , addHover = function (evt, el) {
        var $E = $(el || this);
        if (evt && $E.data("layoutRole") === "toggler")
            evt.stopPropagation(); // prevent triggering 'slide' on Resizer-bar
        $E.addClass(getHoverClasses($E));
    }
    , removeHover = function (evt, el) {
        var $E = $(el || this);
        $E.removeClass(getHoverClasses($E, true));
    }

    , onResizerEnter = function (evt) { // ALSO called by toggler.mouseenter
        var pane = $(this).data("layoutEdge")
		, s = state[pane]
		, $d = $(document)
        ;
        // ignore closed-panes and mouse moving back & forth over resizer!
        // also ignore if ANY pane is currently resizing
        if (s.isResizing || state.paneResizing) return;

        if (options.maskPanesEarly)
            showMasks(pane, { resizing: true });
    }
    , onResizerLeave = function (evt, el) {
        var e = el || this // el is only passed when called by the timer
		, pane = $(e).data("layoutEdge")
		, name = pane + "ResizerLeave"
		, $d = $(document)
        ;
        timer.clear(pane + "_openSlider"); // cancel slideOpen timer, if set
        timer.clear(name); // cancel enableSelection timer - may re/set below
        // this method calls itself on a timer because it needs to allow
        // enough time for dragging to kick-in and set the isResizing flag
        // dragging has a 100ms delay set, so this delay must be >100
        if (!el) // 1st call - mouseleave event
            timer.set(name, function () { onResizerLeave(evt, e); }, 200);
            // if user is resizing, dragStop will reset everything, so skip it here
        else if (options.maskPanesEarly && !state.paneResizing) // 2nd call - by timer
            hideMasks();
    }

    /*
     * ###########################
     *   INITIALIZATION METHODS
     * ###########################
     */

        /**
         * Initialize the layout - called automatically whenever an instance of layout is created
         *
         * @see  none - triggered onInit
         * @return  mixed	true = fully initialized | false = panes not initialized (yet) | 'cancel' = abort
         */
    , _create = function () {
        // initialize config/options
        initOptions();
        var o = options
		, s = state;

        // TEMP state so isInitialized returns true during init process
        s.creatingLayout = true;

        // init plugins for this layout, if there are any (eg: stateManagement)
        runPluginCallbacks(Instance, $.layout.onCreate);

        // options & state have been initialized, so now run beforeLoad callback
        // onload will CANCEL layout creation if it returns false
        if (false === _runCallbacks("onload_start"))
            return 'cancel';

        // initialize the container element
        _initContainer();

        // bind hotkey function - keyDown - if required
        initHotkeys();

        // bind window.onunload
        $(window).bind("unload." + sID, unload);

        // init plugins for this layout, if there are any (eg: customButtons)
        runPluginCallbacks(Instance, $.layout.onLoad);

        // if layout elements are hidden, then layout WILL NOT complete initialization!
        // initLayoutElements will set initialized=true and run the onload callback IF successful
        if (o.initPanes) _initLayoutElements();

        delete s.creatingLayout;

        return state.initialized;
    }

        /**
         * Initialize the layout IF not already
         *
         * @see  All methods in Instance run this test
         * @return  boolean	true = layoutElements have been initialized | false = panes are not initialized (yet)
         */
    , isInitialized = function () {
        if (state.initialized || state.creatingLayout) return true;	// already initialized
        else return _initLayoutElements();	// try to init panes NOW
    }

        /**
         * Initialize the layout - called automatically whenever an instance of layout is created
         *
         * @see  _create() & isInitialized
         * @param {boolean=}		[retry=false]	// indicates this is a 2nd try
         * @return  An object pointer to the instance created
         */
    , _initLayoutElements = function (retry) {
        // initialize config/options
        var o = options;
        // CANNOT init panes inside a hidden container!
        if (!$N.is(":visible")) {
            // handle Chrome bug where popup window 'has no height'
            // if layout is BODY element, try again in 50ms
            // SEE: http://layout.jquery-dev.com/samples/test_popup_window.html
            if (!retry && browser.webkit && $N[0].tagName === "BODY")
                setTimeout(function () { _initLayoutElements(true); }, 50);
            return false;
        }

        // a center pane is required, so make sure it exists
        if (!getPane("center").length) {
            return _log(o.errors.centerPaneMissing);
        }

        // TEMP state so isInitialized returns true during init process
        state.creatingLayout = true;

        // update Container dims
        $.extend(sC, elDims($N, o.inset)); // passing inset means DO NOT include insetX values

        // initialize all layout elements
        initPanes();	// size & position panes - calls initHandles() - which calls initResizable()

        if (o.scrollToBookmarkOnLoad) {
            var l = self.location;
            if (l.hash) l.replace(l.hash); // scrollTo Bookmark
        }

        // check to see if this layout 'nested' inside a pane
        if (Instance.hasParentLayout)
            o.resizeWithWindow = false;
            // bind resizeAll() for 'this layout instance' to window.resize event
        else if (o.resizeWithWindow)
            $(window).bind("resize." + sID, windowResize);

        delete state.creatingLayout;
        state.initialized = true;

        // init plugins for this layout, if there are any
        runPluginCallbacks(Instance, $.layout.onReady);

        // now run the onload callback, if exists
        _runCallbacks("onload_end");

        return true; // elements initialized successfully
    }

        /**
         * Initialize nested layouts for a specific pane - can optionally pass layout-options
         *
         * @param {(string|Object)}	evt_or_pane	The pane being opened, ie: north, south, east, or west
         * @param {Object=}			[opts]		Layout-options - if passed, will OVERRRIDE options[pane].children
         * @return  An object pointer to the layout instance created - or null
         */
    , createChildren = function (evt_or_pane, opts) {
        var pane = evtPane.call(this, evt_or_pane)
		, $P = $Ps[pane]
        ;
        if (!$P) return;
        var $C = $Cs[pane]
		, s = state[pane]
		, o = options[pane]
		, sm = options.stateManagement || {}
		, cos = opts ? (o.children = opts) : o.children
        ;
        if ($.isPlainObject(cos))
            cos = [cos]; // convert a hash to a 1-elem array
        else if (!cos || !$.isArray(cos))
            return;

        $.each(cos, function (idx, co) {
            if (!$.isPlainObject(co)) return;

            // determine which element is supposed to be the 'child container'
            // if pane has a 'containerSelector' OR a 'content-div', use those instead of the pane
            var $containers = co.containerSelector ? $P.find(co.containerSelector) : ($C || $P);

            $containers.each(function () {
                var $cont = $(this)
				, child = $cont.data("layout") //	see if a child-layout ALREADY exists on this element
                ;
                // if no layout exists, but children are set, try to create the layout now
                if (!child) {
                    // TODO: see about moving this to the stateManagement plugin, as a method
                    // set a unique child-instance key for this layout, if not already set
                    setInstanceKey({ container: $cont, options: co }, s);
                    // If THIS layout has a hash in stateManagement.autoLoad,
                    // then see if it also contains state-data for this child-layout
                    // If so, copy the stateData to child.options.stateManagement.autoLoad
                    if (sm.includeChildren && state.stateData[pane]) {
                        //	THIS layout's state was cached when its state was loaded
                        var paneChildren = state.stateData[pane].children || {}
						, childState = paneChildren[co.instanceKey]
						, co_sm = co.stateManagement || (co.stateManagement = { autoLoad: true })
                        ;
                        // COPY the stateData into the autoLoad key
                        if (co_sm.autoLoad === true && childState) {
                            co_sm.autoSave = false; // disable autoSave because saving handled by parent-layout
                            co_sm.includeChildren = true;  // cascade option - FOR NOW
                            co_sm.autoLoad = $.extend(true, {}, childState); // COPY the state-hash
                        }
                    }

                    // create the layout
                    child = $cont.layout(co);

                    // if successful, update data
                    if (child) {
                        // add the child and update all layout-pointers
                        // MAY have already been done by child-layout calling parent.refreshChildren()
                        refreshChildren(pane, child);
                    }
                }
            });
        });
    }

    , setInstanceKey = function (child, parentPaneState) {
        // create a named key for use in state and instance branches
        var $c = child.container
		, o = child.options
		, sm = o.stateManagement
		, key = o.instanceKey || $c.data("layoutInstanceKey")
        ;
        if (!key) key = (sm && sm.cookie ? sm.cookie.name : '') || o.name; // look for a name/key
        if (!key) key = "layout" + (++parentPaneState.childIdx);	// if no name/key found, generate one
        else key = key.replace(/[^\w-]/gi, '_').replace(/_{2,}/g, '_');	 // ensure is valid as a hash key
        o.instanceKey = key;
        $c.data("layoutInstanceKey", key); // useful if layout is destroyed and then recreated
        return key;
    }

        /**
         * @param {string}		pane		The pane being opened, ie: north, south, east, or west
         * @param {Object=}		newChild	New child-layout Instance to add to this pane
         */
    , refreshChildren = function (pane, newChild) {
        var $P = $Ps[pane]
		, pC = children[pane]
		, s = state[pane]
		, o
        ;
        // check for destroy()ed layouts and update the child pointers & arrays
        if ($.isPlainObject(pC)) {
            $.each(pC, function (key, child) {
                if (child.destroyed) delete pC[key]
            });
            // if no more children, remove the children hash
            if ($.isEmptyObject(pC))
                pC = children[pane] = null; // clear children hash
        }

        // see if there is a directly-nested layout inside this pane
        // if there is, then there can be only ONE child-layout, so check that...
        if (!newChild && !pC) {
            newChild = $P.data("layout");
        }

        // if a newChild instance was passed, add it to children[pane]
        if (newChild) {
            // update child.state
            newChild.hasParentLayout = true; // set parent-flag in child
            // instanceKey is a key-name used in both state and children
            o = newChild.options;
            // set a unique child-instance key for this layout, if not already set
            setInstanceKey(newChild, s);
            // add pointer to pane.children hash
            if (!pC) pC = children[pane] = {}; // create an empty children hash
            pC[o.instanceKey] = newChild.container.data("layout"); // add childLayout instance
        }

        // ALWAYS refresh the pane.children alias, even if null
        Instance[pane].children = children[pane];

        // if newChild was NOT passed - see if there is a child layout NOW
        if (!newChild) {
            createChildren(pane); // MAY create a child and re-call this method
        }
    }

    , windowResize = function () {
        var o = options
		, delay = Number(o.resizeWithWindowDelay);
        if (delay < 10) delay = 100; // MUST have a delay!
        // resizing uses a delay-loop because the resize event fires repeatly - except in FF, but delay anyway
        timer.clear("winResize"); // if already running
        timer.set("winResize", function () {
            timer.clear("winResize");
            timer.clear("winResizeRepeater");
            var dims = elDims($N, o.inset);
            // only trigger resizeAll() if container has changed size
            if (dims.innerWidth !== sC.innerWidth || dims.innerHeight !== sC.innerHeight)
                resizeAll();
        }, delay);
        // ALSO set fixed-delay timer, if not already running
        if (!timer.data["winResizeRepeater"]) setWindowResizeRepeater();
    }

    , setWindowResizeRepeater = function () {
        var delay = Number(options.resizeWithWindowMaxDelay);
        if (delay > 0)
            timer.set("winResizeRepeater", function () { setWindowResizeRepeater(); resizeAll(); }, delay);
    }

    , unload = function () {
        var o = options;

        _runCallbacks("onunload_start");

        // trigger plugin callabacks for this layout (eg: stateManagement)
        runPluginCallbacks(Instance, $.layout.onUnload);

        _runCallbacks("onunload_end");
    }

        /**
         * Validate and initialize container CSS and events
         *
         * @see  _create()
         */
    , _initContainer = function () {
        var
			N = $N[0]
		, $H = $("html")
		, tag = sC.tagName = N.tagName
		, id = sC.id = N.id
		, cls = sC.className = N.className
		, o = options
		, name = o.name
		, props = "position,margin,padding,border"
		, css = "layoutCSS"
		, CSS = {}
		, hid = "hidden" // used A LOT!
		//	see if this container is a 'pane' inside an outer-layout
		, parent = $N.data("parentLayout")	// parent-layout Instance
		, pane = $N.data("layoutEdge")		// pane-name in parent-layout
		, isChild = parent && pane
		, num = $.layout.cssNum
		, $parent, n
        ;
        // sC = state.container
        sC.selector = $N.selector.split(".slice")[0];
        sC.ref = (o.name ? o.name + ' layout / ' : '') + tag + (id ? "#" + id : cls ? '.[' + cls + ']' : ''); // used in messages
        sC.isBody = (tag === "BODY");

        // try to find a parent-layout
        if (!isChild && !sC.isBody) {
            $parent = $N.closest("." + $.layout.defaults.panes.paneClass);
            parent = $parent.data("parentLayout");
            pane = $parent.data("layoutEdge");
            isChild = parent && pane;
        }

        $N.data({
            layout: Instance
			, layoutContainer: sID // FLAG to indicate this is a layout-container - contains unique internal ID
        })
			.addClass(o.containerClass)
        ;
        var layoutMethods = {
            destroy: ''
		, initPanes: ''
		, resizeAll: 'resizeAll'
		, resize: 'resizeAll'
        };
        // loop hash and bind all methods - include layoutID namespacing
        for (name in layoutMethods) {
            $N.bind("layout" + name.toLowerCase() + "." + sID, Instance[layoutMethods[name] || name]);
        }

        // if this container is another layout's 'pane', then set child/parent pointers
        if (isChild) {
            // update parent flag
            Instance.hasParentLayout = true;
            // set pointers to THIS child-layout (Instance) in parent-layout
            parent.refreshChildren(pane, Instance);
        }

        // SAVE original container CSS for use in destroy()
        if (!$N.data(css)) {
            // handle props like overflow different for BODY & HTML - has 'system default' values
            if (sC.isBody) {
                // SAVE <BODY> CSS
                $N.data(css, $.extend(styles($N, props), {
                    height: $N.css("height")
				, overflow: $N.css("overflow")
				, overflowX: $N.css("overflowX")
				, overflowY: $N.css("overflowY")
                }));
                // ALSO SAVE <HTML> CSS
                $H.data(css, $.extend(styles($H, 'padding'), {
                    height: "auto" // FF would return a fixed px-size!
				, overflow: $H.css("overflow")
				, overflowX: $H.css("overflowX")
				, overflowY: $H.css("overflowY")
                }));
            }
            else // handle props normally for non-body elements
                $N.data(css, styles($N, props + ",top,bottom,left,right,width,height,overflow,overflowX,overflowY"));
        }

        try {
            // common container CSS
            CSS = {
                overflow: hid
			, overflowX: hid
			, overflowY: hid
            };
            $N.css(CSS);

            if (o.inset && !$.isPlainObject(o.inset)) {
                // can specify a single number for equal outset all-around
                n = parseInt(o.inset, 10) || 0
                o.inset = {
                    top: n
				, bottom: n
				, left: n
				, right: n
                };
            }

            // format html & body if this is a full page layout
            if (sC.isBody) {
                // if HTML has padding, use this as an outer-spacing around BODY
                if (!o.outset) {
                    // use padding from parent-elem (HTML) as outset
                    o.outset = {
                        top: num($H, "paddingTop")
					, bottom: num($H, "paddingBottom")
					, left: num($H, "paddingLeft")
					, right: num($H, "paddingRight")
                    };
                }
                else if (!$.isPlainObject(o.outset)) {
                    // can specify a single number for equal outset all-around
                    n = parseInt(o.outset, 10) || 0
                    o.outset = {
                        top: n
					, bottom: n
					, left: n
					, right: n
                    };
                }
                // HTML
                $H.css(CSS).css({
                    height: "100%"
				, border: "none"	// no border or padding allowed when using height = 100%
				, padding: 0		// ditto
				, margin: 0
                });
                // BODY
                if (browser.isIE6) {
                    // IE6 CANNOT use the trick of setting absolute positioning on all 4 sides - must have 'height'
                    $N.css({
                        width: "100%"
					, height: "100%"
					, border: "none"	// no border or padding allowed when using height = 100%
					, padding: 0		// ditto
					, margin: 0
					, position: "relative"
                    });
                    // convert body padding to an inset option - the border cannot be measured in IE6!
                    if (!o.inset) o.inset = elDims($N).inset;
                }
                else { // use absolute positioning for BODY to allow borders & padding without overflow
                    $N.css({
                        width: "auto"
					, height: "auto"
					, margin: 0
					, position: "absolute"	// allows for border and padding on BODY
                    });
                    // apply edge-positioning created above
                    $N.css(o.outset);
                }
                // set current layout-container dimensions
                $.extend(sC, elDims($N, o.inset)); // passing inset means DO NOT include insetX values
            }
            else {
                // container MUST have 'position'
                var p = $N.css("position");
                if (!p || !p.match(/(fixed|absolute|relative)/))
                    $N.css("position", "relative");

                // set current layout-container dimensions
                if ($N.is(":visible")) {
                    $.extend(sC, elDims($N, o.inset)); // passing inset means DO NOT change insetX (padding) values
                    if (sC.innerHeight < 1) // container has no 'height' - warn developer
                        _log(o.errors.noContainerHeight.replace(/CONTAINER/, sC.ref));
                }
            }

            // if container has min-width/height, then enable scrollbar(s)
            if (num($N, "minWidth")) $N.parent().css("overflowX", "auto");
            if (num($N, "minHeight")) $N.parent().css("overflowY", "auto");

        } catch (ex) { }
    }

        /**
         * Bind layout hotkeys - if options enabled
         *
         * @see  _create() and addPane()
         * @param {string=}	[panes=""]	The edge(s) to process
         */
    , initHotkeys = function (panes) {
        panes = panes ? panes.split(",") : _c.borderPanes;
        // bind keyDown to capture hotkeys, if option enabled for ANY pane
        $.each(panes, function (i, pane) {
            var o = options[pane];
            if (o.enableCursorHotkey || o.customHotkey) {
                $(document).bind("keydown." + sID, keyDown); // only need to bind this ONCE
                return false; // BREAK - binding was done
            }
        });
    }

        /**
         * Build final OPTIONS data
         *
         * @see  _create()
         */
    , initOptions = function () {
        var data, d, pane, key, val, i, c, o;

        // reprocess user's layout-options to have correct options sub-key structure
        opts = $.layout.transformData(opts, true); // panes = default subkey

        // auto-rename old options for backward compatibility
        opts = $.layout.backwardCompatibility.renameAllOptions(opts);

        // if user-options has 'panes' key (pane-defaults), clean it...
        if (!$.isEmptyObject(opts.panes)) {
            // REMOVE any pane-defaults that MUST be set per-pane
            data = $.layout.optionsMap.noDefault;
            for (i = 0, c = data.length; i < c; i++) {
                key = data[i];
                delete opts.panes[key]; // OK if does not exist
            }
            // REMOVE any layout-options specified under opts.panes
            data = $.layout.optionsMap.layout;
            for (i = 0, c = data.length; i < c; i++) {
                key = data[i];
                delete opts.panes[key]; // OK if does not exist
            }
        }

        // MOVE any NON-layout-options from opts-root to opts.panes
        data = $.layout.optionsMap.layout;
        var rootKeys = $.layout.config.optionRootKeys;
        for (key in opts) {
            val = opts[key];
            if ($.inArray(key, rootKeys) < 0 && $.inArray(key, data) < 0) {
                if (!opts.panes[key])
                    opts.panes[key] = $.isPlainObject(val) ? $.extend(true, {}, val) : val;
                delete opts[key]
            }
        }

        // START by updating ALL options from opts
        $.extend(true, options, opts);

        // CREATE final options (and config) for EACH pane
        $.each(_c.allPanes, function (i, pane) {

            // apply 'pane-defaults' to CONFIG.[PANE]
            _c[pane] = $.extend(true, {}, _c.panes, _c[pane]);

            d = options.panes;
            o = options[pane];

            // center-pane uses SOME keys in defaults.panes branch
            if (pane === 'center') {
                // ONLY copy keys from opts.panes listed in: $.layout.optionsMap.center
                data = $.layout.optionsMap.center;		// list of 'center-pane keys'
                for (i = 0, c = data.length; i < c; i++) {	// loop the list...
                    key = data[i];
                    // only need to use pane-default if pane-specific value not set
                    if (!opts.center[key] && (opts.panes[key] || !o[key]))
                        o[key] = d[key]; // pane-default
                }
            }
            else {
                // border-panes use ALL keys in defaults.panes branch
                o = options[pane] = $.extend(true, {}, d, o); // re-apply pane-specific opts AFTER pane-defaults
                createFxOptions(pane);
                // ensure all border-pane-specific base-classes exist
                if (!o.resizerClass) o.resizerClass = "ui-layout-resizer";
                if (!o.togglerClass) o.togglerClass = "ui-layout-toggler";
            }
            // ensure we have base pane-class (ALL panes)
            if (!o.paneClass) o.paneClass = "ui-layout-pane";
        });

        // update options.zIndexes if a zIndex-option specified
        var zo = opts.zIndex
		, z = options.zIndexes;
        if (zo > 0) {
            z.pane_normal = zo;
            z.content_mask = max(zo + 1, z.content_mask);	// MIN = +1
            z.resizer_normal = max(zo + 2, z.resizer_normal);	// MIN = +2
        }

        // DELETE 'panes' key now that we are done - values were copied to EACH pane
        delete options.panes;


        function createFxOptions(pane) {
            var o = options[pane]
			, d = options.panes;
            // ensure fxSettings key to avoid errors
            if (!o.fxSettings) o.fxSettings = {};
            if (!d.fxSettings) d.fxSettings = {};

            $.each(["_open", "_close", "_size"], function (i, n) {
                var
					sName = "fxName" + n
				, sSpeed = "fxSpeed" + n
				, sSettings = "fxSettings" + n
					// recalculate fxName according to specificity rules
				, fxName = o[sName] =
						o[sName]	// options.west.fxName_open
					|| d[sName]	// options.panes.fxName_open
					|| o.fxName	// options.west.fxName
					|| d.fxName	// options.panes.fxName
					|| "none"		// MEANS $.layout.defaults.panes.fxName == "" || false || null || 0
				, fxExists = $.effects && ($.effects[fxName] || ($.effects.effect && $.effects.effect[fxName]))
                ;
                // validate fxName to ensure is valid effect - MUST have effect-config data in options.effects
                if (fxName === "none" || !options.effects[fxName] || !fxExists)
                    fxName = o[sName] = "none"; // effect not loaded OR unrecognized fxName

                // set vars for effects subkeys to simplify logic
                var fx = options.effects[fxName] || {}	// effects.slide
				, fx_all = fx.all || null				// effects.slide.all
				, fx_pane = fx[pane] || null				// effects.slide.west
                ;
                // create fxSpeed[_open|_close|_size]
                o[sSpeed] =
					o[sSpeed]				// options.west.fxSpeed_open
				|| d[sSpeed]				// options.west.fxSpeed_open
				|| o.fxSpeed				// options.west.fxSpeed
				|| d.fxSpeed				// options.panes.fxSpeed
				|| null					// DEFAULT - let fxSetting.duration control speed
                ;
                // create fxSettings[_open|_close|_size]
                o[sSettings] = $.extend(
					true
				, {}
				, fx_all					// effects.slide.all
				, fx_pane					// effects.slide.west
				, d.fxSettings			// options.panes.fxSettings
				, o.fxSettings			// options.west.fxSettings
				, d[sSettings]			// options.panes.fxSettings_open
				, o[sSettings]			// options.west.fxSettings_open
				);
            });

            // DONE creating action-specific-settings for this pane,
            // so DELETE generic options - are no longer meaningful
            delete o.fxName;
            delete o.fxSpeed;
            delete o.fxSettings;
        }
    }

        /**
         * Initialize module objects, styling, size and position for all panes
         *
         * @see  _initElements()
         * @param {string}	pane		The pane to process
         */
    , getPane = function (pane) {
        var sel = options[pane].paneSelector
        if (sel.substr(0, 1) === "#") // ID selector
            // NOTE: elements selected 'by ID' DO NOT have to be 'children'
            return $N.find(sel).eq(0);
        else { // class or other selector
            var $P = $N.children(sel).eq(0);
            // look for the pane nested inside a 'form' element
            return $P.length ? $P : $N.children("form:first").children(sel).eq(0);
        }
    }

        /**
         * @param {Object=}		evt
         */
    , initPanes = function (evt) {
        // stopPropagation if called by trigger("layoutinitpanes") - use evtPane utility 
        evtPane(evt);

        // NOTE: do north & south FIRST so we can measure their height - do center LAST
        $.each(_c.allPanes, function (idx, pane) {
            addPane(pane, true);
        });

        // init the pane-handles NOW in case we have to hide or close the pane below
        initHandles();

        // now that all panes have been initialized and initially-sized,
        // make sure there is really enough space available for each pane
        $.each(_c.borderPanes, function (i, pane) {
            if ($Ps[pane] && state[pane].isVisible) { // pane is OPEN
                setSizeLimits(pane);
                makePaneFit(pane); // pane may be Closed, Hidden or Resized by makePaneFit()
            }
        });
        // size center-pane AGAIN in case we 'closed' a border-pane in loop above
        sizeMidPanes("center");

        //	Chrome/Webkit sometimes fires callbacks BEFORE it completes resizing!
        //	Before RC30.3, there was a 10ms delay here, but that caused layout 
        //	to load asynchrously, which is BAD, so try skipping delay for now

        // process pane contents and callbacks, and init/resize child-layout if exists
        $.each(_c.allPanes, function (idx, pane) {
            afterInitPane(pane);
        });
    }

        /**
         * Add a pane to the layout - subroutine of initPanes()
         *
         * @see  initPanes()
         * @param {string}	pane			The pane to process
         * @param {boolean=}	[force=false]	Size content after init
         */
    , addPane = function (pane, force) {
        if (!force && !isInitialized()) return;
        var
			o = options[pane]
		, s = state[pane]
		, c = _c[pane]
		, dir = c.dir
		, fx = s.fx
		, spacing = o.spacing_open || 0
		, isCenter = (pane === "center")
		, CSS = {}
		, $P = $Ps[pane]
		, size, minSize, maxSize, child
        ;
        // if pane-pointer already exists, remove the old one first
        if ($P)
            removePane(pane, false, true, false);
        else
            $Cs[pane] = false; // init

        $P = $Ps[pane] = getPane(pane);
        if (!$P.length) {
            $Ps[pane] = false; // logic
            return;
        }

        // SAVE original Pane CSS
        if (!$P.data("layoutCSS")) {
            var props = "position,top,left,bottom,right,width,height,overflow,zIndex,display,backgroundColor,padding,margin,border";
            $P.data("layoutCSS", styles($P, props));
        }

        // create alias for pane data in Instance - initHandles will add more
        Instance[pane] = {
            name: pane
		, pane: $Ps[pane]
		, content: $Cs[pane]
		, options: options[pane]
		, state: state[pane]
		, children: children[pane]
        };

        // add classes, attributes & events
        $P.data({
            parentLayout: Instance		// pointer to Layout Instance
			, layoutPane: Instance[pane]	// NEW pointer to pane-alias-object
			, layoutEdge: pane
			, layoutRole: "pane"
        })
			.css(c.cssReq).css("zIndex", options.zIndexes.pane_normal)
			.css(o.applyDemoStyles ? c.cssDemo : {}) // demo styles
			.addClass(o.paneClass + " " + o.paneClass + "-" + pane) // default = "ui-layout-pane ui-layout-pane-west" - may be a dupe of 'paneSelector'
			.bind("mouseenter." + sID, addHover)
			.bind("mouseleave." + sID, removeHover)
        ;
        var paneMethods = {
            hide: ''
			, show: ''
			, toggle: ''
			, close: ''
			, open: ''
			, slideOpen: ''
			, slideClose: ''
			, slideToggle: ''
			, size: 'sizePane'
			, sizePane: 'sizePane'
			, sizeContent: ''
			, sizeHandles: ''
			, enableClosable: ''
			, disableClosable: ''
			, enableSlideable: ''
			, disableSlideable: ''
			, enableResizable: ''
			, disableResizable: ''
			, swapPanes: 'swapPanes'
			, swap: 'swapPanes'
			, move: 'swapPanes'
			, removePane: 'removePane'
			, remove: 'removePane'
			, createChildren: ''
			, resizeChildren: ''
			, resizeAll: 'resizeAll'
			, resizeLayout: 'resizeAll'
        }
		, name;
        // loop hash and bind all methods - include layoutID namespacing
        for (name in paneMethods) {
            $P.bind("layoutpane" + name.toLowerCase() + "." + sID, Instance[paneMethods[name] || name]);
        }

        // see if this pane has a 'scrolling-content element'
        initContent(pane, false); // false = do NOT sizeContent() - called later

        if (!isCenter) {
            // call _parseSize AFTER applying pane classes & styles - but before making visible (if hidden)
            // if o.size is auto or not valid, then MEASURE the pane and use that as its 'size'
            size = s.size = _parseSize(pane, o.size);
            minSize = _parseSize(pane, o.minSize) || 1;
            maxSize = _parseSize(pane, o.maxSize) || 100000;
            if (size > 0) size = max(min(size, maxSize), minSize);
            s.autoResize = o.autoResize; // used with percentage sizes

            // state for border-panes
            s.isClosed = false; // true = pane is closed
            s.isSliding = false; // true = pane is currently open by 'sliding' over adjacent panes
            s.isResizing = false; // true = pane is in process of being resized
            s.isHidden = false; // true = pane is hidden - no spacing, resizer or toggler is visible!

            // array for 'pin buttons' whose classNames are auto-updated on pane-open/-close
            if (!s.pins) s.pins = [];
        }
        //	states common to ALL panes
        s.tagName = $P[0].tagName;
        s.edge = pane;		// useful if pane is (or about to be) 'swapped' - easy find out where it is (or is going)
        s.noRoom = false;	// true = pane 'automatically' hidden due to insufficient room - will unhide automatically
        s.isVisible = true;		// false = pane is invisible - closed OR hidden - simplify logic

        // init pane positioning
        setPanePosition(pane);

        // if pane is not visible, 
        if (dir === "horz") // north or south pane
            CSS.height = cssH($P, size);
        else if (dir === "vert") // east or west pane
            CSS.width = cssW($P, size);
        //else if (isCenter) {}

        $P.css(CSS); // apply size -- top, bottom & height will be set by sizeMidPanes
        if (dir != "horz") sizeMidPanes(pane, true); // true = skipCallback

        // if manually adding a pane AFTER layout initialization, then...
        if (state.initialized) {
            initHandles(pane);
            initHotkeys(pane);
        }

        // close or hide the pane if specified in settings
        if (o.initClosed && o.closable && !o.initHidden)
            close(pane, true, true); // true, true = force, noAnimation
        else if (o.initHidden || o.initClosed)
            hide(pane); // will be completely invisible - no resizer or spacing
        else if (!s.noRoom)
            // make the pane visible - in case was initially hidden
            $P.css("display", "block");
        // ELSE setAsOpen() - called later by initHandles()

        // RESET visibility now - pane will appear IF display:block
        $P.css("visibility", "visible");

        // check option for auto-handling of pop-ups & drop-downs
        if (o.showOverflowOnHover)
            $P.hover(allowOverflow, resetOverflow);

        // if manually adding a pane AFTER layout initialization, then...
        if (state.initialized) {
            afterInitPane(pane);
        }
    }

    , afterInitPane = function (pane) {
        var $P = $Ps[pane]
		, s = state[pane]
		, o = options[pane]
        ;
        if (!$P) return;

        // see if there is a directly-nested layout inside this pane
        if ($P.data("layout"))
            refreshChildren(pane, $P.data("layout"));

        // process pane contents and callbacks, and init/resize child-layout if exists
        if (s.isVisible) { // pane is OPEN
            if (state.initialized) // this pane was added AFTER layout was created
                resizeAll(); // will also sizeContent
            else
                sizeContent(pane);

            if (o.triggerEventsOnLoad)
                _runCallbacks("onresize_end", pane);
            else // automatic if onresize called, otherwise call it specifically
                // resize child - IF inner-layout already exists (created before this layout)
                resizeChildren(pane, true); // a previously existing childLayout
        }

        // init childLayouts - even if pane is not visible
        if (o.initChildren && o.children)
            createChildren(pane);
    }

        /**
         * @param {string=}	panes		The pane(s) to process
         */
    , setPanePosition = function (panes) {
        panes = panes ? panes.split(",") : _c.borderPanes;

        // create toggler DIVs for each pane, and set object pointers for them, eg: $R.north = north toggler DIV
        $.each(panes, function (i, pane) {
            var $P = $Ps[pane]
			, $R = $Rs[pane]
			, o = options[pane]
			, s = state[pane]
			, side = _c[pane].side
			, CSS = {}
            ;
            if (!$P) return; // pane does not exist - skip

            // set css-position to account for container borders & padding
            switch (pane) {
                case "north": CSS.top = sC.inset.top;
                    CSS.left = sC.inset.left;
                    CSS.right = sC.inset.right;
                    break;
                case "south": CSS.bottom = sC.inset.bottom;
                    CSS.left = sC.inset.left;
                    CSS.right = sC.inset.right;
                    break;
                case "west": CSS.left = sC.inset.left; // top, bottom & height set by sizeMidPanes()
                    break;
                case "east": CSS.right = sC.inset.right; // ditto
                    break;
                case "center":	// top, left, width & height set by sizeMidPanes()
            }
            // apply position
            $P.css(CSS);

            // update resizer position
            if ($R && s.isClosed)
                $R.css(side, sC.inset[side]);
            else if ($R && !s.isHidden)
                $R.css(side, sC.inset[side] + getPaneSize(pane));
        });
    }

        /**
         * Initialize module objects, styling, size and position for all resize bars and toggler buttons
         *
         * @see  _create()
         * @param {string=}	[panes=""]	The edge(s) to process
         */
    , initHandles = function (panes) {
        panes = panes ? panes.split(",") : _c.borderPanes;

        // create toggler DIVs for each pane, and set object pointers for them, eg: $R.north = north toggler DIV
        $.each(panes, function (i, pane) {
            var $P = $Ps[pane];
            $Rs[pane] = false; // INIT
            $Ts[pane] = false;
            if (!$P) return; // pane does not exist - skip

            var o = options[pane]
			, s = state[pane]
			, c = _c[pane]
			, paneId = o.paneSelector.substr(0, 1) === "#" ? o.paneSelector.substr(1) : ""
			, rClass = o.resizerClass
			, tClass = o.togglerClass
			, spacing = (s.isVisible ? o.spacing_open : o.spacing_closed)
			, _pane = "-" + pane // used for classNames
			, _state = (s.isVisible ? "-open" : "-closed") // used for classNames
			, I = Instance[pane]
				// INIT RESIZER BAR
			, $R = I.resizer = $Rs[pane] = $("<div></div>")
				// INIT TOGGLER BUTTON
			, $T = I.toggler = (o.closable ? $Ts[pane] = $("<div></div>") : false)
            ;

            //if (s.isVisible && o.resizable) ... handled by initResizable
            if (!s.isVisible && o.slidable)
                $R.attr("title", o.tips.Slide).css("cursor", o.sliderCursor);

            $R	// if paneSelector is an ID, then create a matching ID for the resizer, eg: "#paneLeft" => "paneLeft-resizer"
				.attr("id", paneId ? paneId + "-resizer" : "")
				.data({
				    parentLayout: Instance
				, layoutPane: Instance[pane]	// NEW pointer to pane-alias-object
				, layoutEdge: pane
				, layoutRole: "resizer"
				})
				.css(_c.resizers.cssReq).css("zIndex", options.zIndexes.resizer_normal)
				.css(o.applyDemoStyles ? _c.resizers.cssDemo : {}) // add demo styles
				.addClass(rClass + " " + rClass + _pane)
				.hover(addHover, removeHover) // ALWAYS add hover-classes, even if resizing is not enabled - handle with CSS instead
				.hover(onResizerEnter, onResizerLeave) // ALWAYS NEED resizer.mouseleave to balance toggler.mouseenter
				.mousedown($.layout.disableTextSelection)	// prevent text-selection OUTSIDE resizer
				.mouseup($.layout.enableTextSelection)		// not really necessary, but just in case
				.appendTo($N) // append DIV to container
            ;
            if ($.fn.disableSelection)
                $R.disableSelection(); // prevent text-selection INSIDE resizer
            if (o.resizerDblClickToggle)
                $R.bind("dblclick." + sID, toggle);

            if ($T) {
                $T	// if paneSelector is an ID, then create a matching ID for the resizer, eg: "#paneLeft" => "#paneLeft-toggler"
					.attr("id", paneId ? paneId + "-toggler" : "")
					.data({
					    parentLayout: Instance
					, layoutPane: Instance[pane]	// NEW pointer to pane-alias-object
					, layoutEdge: pane
					, layoutRole: "toggler"
					})
					.css(_c.togglers.cssReq) // add base/required styles
					.css(o.applyDemoStyles ? _c.togglers.cssDemo : {}) // add demo styles
					.addClass(tClass + " " + tClass + _pane)
					.hover(addHover, removeHover) // ALWAYS add hover-classes, even if toggling is not enabled - handle with CSS instead
					.bind("mouseenter", onResizerEnter) // NEED toggler.mouseenter because mouseenter MAY NOT fire on resizer
					.appendTo($R) // append SPAN to resizer DIV
                ;
                // ADD INNER-SPANS TO TOGGLER
                if (o.togglerContent_open) // ui-layout-open
                    $("<span>" + o.togglerContent_open + "</span>")
						.data({
						    layoutEdge: pane
						, layoutRole: "togglerContent"
						})
						.data("layoutRole", "togglerContent")
						.data("layoutEdge", pane)
						.addClass("content content-open")
						.css("display", "none")
						.appendTo($T)
                //.hover( addHover, removeHover ) // use ui-layout-toggler-west-hover .content-open instead!
                ;
                if (o.togglerContent_closed) // ui-layout-closed
                    $("<span>" + o.togglerContent_closed + "</span>")
						.data({
						    layoutEdge: pane
						, layoutRole: "togglerContent"
						})
						.addClass("content content-closed")
						.css("display", "none")
						.appendTo($T)
                //.hover( addHover, removeHover ) // use ui-layout-toggler-west-hover .content-closed instead!
                ;
                // ADD TOGGLER.click/.hover
                enableClosable(pane);
            }

            // add Draggable events
            initResizable(pane);

            // ADD CLASSNAMES & SLIDE-BINDINGS - eg: class="resizer resizer-west resizer-open"
            if (s.isVisible)
                setAsOpen(pane);	// onOpen will be called, but NOT onResize
            else {
                setAsClosed(pane);	// onClose will be called
                bindStartSlidingEvents(pane, true); // will enable events IF option is set
            }

        });

        // SET ALL HANDLE DIMENSIONS
        sizeHandles();
    }


        /**
         * Initialize scrolling ui-layout-content div - if exists
         *
         * @see  initPane() - or externally after an Ajax injection
         * @param {string}	pane			The pane to process
         * @param {boolean=}	[resize=true]	Size content after init
         */
    , initContent = function (pane, resize) {
        if (!isInitialized()) return;
        var
			o = options[pane]
		, sel = o.contentSelector
		, I = Instance[pane]
		, $P = $Ps[pane]
		, $C
        ;
        if (sel) $C = I.content = $Cs[pane] = (o.findNestedContent)
			? $P.find(sel).eq(0) // match 1-element only
			: $P.children(sel).eq(0)
        ;
        if ($C && $C.length) {
            $C.data("layoutRole", "content");
            // SAVE original Content CSS
            if (!$C.data("layoutCSS"))
                $C.data("layoutCSS", styles($C, "height"));
            $C.css(_c.content.cssReq);
            if (o.applyDemoStyles) {
                $C.css(_c.content.cssDemo); // add padding & overflow: auto to content-div
                $P.css(_c.content.cssDemoPane); // REMOVE padding/scrolling from pane
            }
            // ensure no vertical scrollbar on pane - will mess up measurements
            if ($P.css("overflowX").match(/(scroll|auto)/)) {
                $P.css("overflow", "hidden");
            }
            state[pane].content = {}; // init content state
            if (resize !== false) sizeContent(pane);
            // sizeContent() is called AFTER init of all elements
        }
        else
            I.content = $Cs[pane] = false;
    }


        /**
         * Add resize-bars to all panes that specify it in options
         * -dependancy: $.fn.resizable - will skip if not found
         *
         * @see  _create()
         * @param {string=}	[panes=""]	The edge(s) to process
         */
    , initResizable = function (panes) {
        var draggingAvailable = $.layout.plugins.draggable
		, side // set in start()
        ;
        panes = panes ? panes.split(",") : _c.borderPanes;

        $.each(panes, function (idx, pane) {
            var o = options[pane];
            if (!draggingAvailable || !$Ps[pane] || !o.resizable) {
                o.resizable = false;
                return true; // skip to next
            }

            var s = state[pane]
			, z = options.zIndexes
			, c = _c[pane]
			, side = c.dir == "horz" ? "top" : "left"
			, $P = $Ps[pane]
			, $R = $Rs[pane]
			, base = o.resizerClass
			, lastPos = 0 // used when live-resizing
			, r, live // set in start because may change
			//	'drag' classes are applied to the ORIGINAL resizer-bar while dragging is in process
			, resizerClass = base + "-drag"				// resizer-drag
			, resizerPaneClass = base + "-" + pane + "-drag"		// resizer-north-drag
			//	'helper' class is applied to the CLONED resizer-bar while it is being dragged
			, helperClass = base + "-dragging"			// resizer-dragging
			, helperPaneClass = base + "-" + pane + "-dragging" // resizer-north-dragging
			, helperLimitClass = base + "-dragging-limit"	// resizer-drag
			, helperPaneLimitClass = base + "-" + pane + "-dragging-limit"	// resizer-north-drag
			, helperClassesSet = false 					// logic var
            ;

            if (!s.isClosed)
                $R.attr("title", o.tips.Resize)
				  .css("cursor", o.resizerCursor); // n-resize, s-resize, etc

            $R.draggable({
                containment: $N[0] // limit resizing to layout container
			, axis: (c.dir == "horz" ? "y" : "x") // limit resizing to horz or vert axis
			, delay: 0
			, distance: 1
			, grid: o.resizingGrid
                //	basic format for helper - style it using class: .ui-draggable-dragging
			, helper: "clone"
			, opacity: o.resizerDragOpacity
			, addClasses: false // avoid ui-state-disabled class when disabled
                //,	iframeFix:		o.draggableIframeFix // TODO: consider using when bug is fixed
			, zIndex: z.resizer_drag

			, start: function (e, ui) {
			    // REFRESH options & state pointers in case we used swapPanes
			    o = options[pane];
			    s = state[pane];
			    // re-read options
			    live = o.livePaneResizing;

			    // ondrag_start callback - will CANCEL hide if returns false
			    // TODO: dragging CANNOT be cancelled like this, so see if there is a way?
			    if (false === _runCallbacks("ondrag_start", pane)) return false;

			    s.isResizing = true; // prevent pane from closing while resizing
			    state.paneResizing = pane; // easy to see if ANY pane is resizing
			    timer.clear(pane + "_closeSlider"); // just in case already triggered

			    // SET RESIZER LIMITS - used in drag()
			    setSizeLimits(pane); // update pane/resizer state
			    r = s.resizerPosition;
			    lastPos = ui.position[side]

			    $R.addClass(resizerClass + " " + resizerPaneClass); // add drag classes
			    helperClassesSet = false; // reset logic var - see drag()

			    // MASK PANES CONTAINING IFRAMES, APPLETS OR OTHER TROUBLESOME ELEMENTS
			    showMasks(pane, { resizing: true });
			}

			, drag: function (e, ui) {
			    if (!helperClassesSet) { // can only add classes after clone has been added to the DOM
			        //$(".ui-draggable-dragging")
			        ui.helper
                        .addClass(helperClass + " " + helperPaneClass) // add helper classes
                        .css({ right: "auto", bottom: "auto" })	// fix dir="rtl" issue
                        .children().css("visibility", "hidden")	// hide toggler inside dragged resizer-bar
			        ;
			        helperClassesSet = true;
			        // draggable bug!? RE-SET zIndex to prevent E/W resize-bar showing through N/S pane!
			        if (s.isSliding) $Ps[pane].css("zIndex", z.pane_sliding);
			    }
			    // CONTAIN RESIZER-BAR TO RESIZING LIMITS
			    var limit = 0;
			    if (ui.position[side] < r.min) {
			        ui.position[side] = r.min;
			        limit = -1;
			    }
			    else if (ui.position[side] > r.max) {
			        ui.position[side] = r.max;
			        limit = 1;
			    }
			    // ADD/REMOVE dragging-limit CLASS
			    if (limit) {
			        ui.helper.addClass(helperLimitClass + " " + helperPaneLimitClass); // at dragging-limit
			        window.defaultStatus = (limit > 0 && pane.match(/(north|west)/)) || (limit < 0 && pane.match(/(south|east)/)) ? o.tips.maxSizeWarning : o.tips.minSizeWarning;
			    }
			    else {
			        ui.helper.removeClass(helperLimitClass + " " + helperPaneLimitClass); // not at dragging-limit
			        window.defaultStatus = "";
			    }
			    // DYNAMICALLY RESIZE PANES IF OPTION ENABLED
			    // won't trigger unless resizer has actually moved!
			    if (live && Math.abs(ui.position[side] - lastPos) >= o.liveResizingTolerance) {
			        lastPos = ui.position[side];
			        resizePanes(e, ui, pane)
			    }
			}

			, stop: function (e, ui) {
			    $('body').enableSelection(); // RE-ENABLE TEXT SELECTION
			    window.defaultStatus = ""; // clear 'resizing limit' message from statusbar
			    $R.removeClass(resizerClass + " " + resizerPaneClass); // remove drag classes from Resizer
			    s.isResizing = false;
			    state.paneResizing = false; // easy to see if ANY pane is resizing
			    resizePanes(e, ui, pane, true); // true = resizingDone
			}

            });
        });

        /**
		 * resizePanes
		 *
		 * Sub-routine called from stop() - and drag() if livePaneResizing
		 *
		 * @param {!Object}		evt
		 * @param {!Object}		ui
		 * @param {string}		pane
		 * @param {boolean=}		[resizingDone=false]
		 */
        var resizePanes = function (evt, ui, pane, resizingDone) {
            var dragPos = ui.position
			, c = _c[pane]
			, o = options[pane]
			, s = state[pane]
			, resizerPos
            ;
            switch (pane) {
                case "north": resizerPos = dragPos.top; break;
                case "west": resizerPos = dragPos.left; break;
                case "south": resizerPos = sC.layoutHeight - dragPos.top - o.spacing_open; break;
                case "east": resizerPos = sC.layoutWidth - dragPos.left - o.spacing_open; break;
            };
            // remove container margin from resizer position to get the pane size
            var newSize = resizerPos - sC.inset[c.side];

            // Disable OR Resize Mask(s) created in drag.start
            if (!resizingDone) {
                // ensure we meet liveResizingTolerance criteria
                if (Math.abs(newSize - s.size) < o.liveResizingTolerance)
                    return; // SKIP resize this time
                // resize the pane
                manualSizePane(pane, newSize, false, true); // true = noAnimation
                sizeMasks(); // resize all visible masks
            }
            else { // resizingDone
                // ondrag_end callback
                if (false !== _runCallbacks("ondrag_end", pane))
                    manualSizePane(pane, newSize, false, true); // true = noAnimation
                hideMasks(true); // true = force hiding all masks even if one is 'sliding'
                if (s.isSliding) // RE-SHOW 'object-masks' so objects won't show through sliding pane
                    showMasks(pane, { resizing: true });
            }
        };
    }

        /**
         *	sizeMask
         *
         *	Needed to overlay a DIV over an IFRAME-pane because mask CANNOT be *inside* the pane
         *	Called when mask created, and during livePaneResizing
         */
    , sizeMask = function () {
        var $M = $(this)
		, pane = $M.data("layoutMask") // eg: "west"
		, s = state[pane]
        ;
        // only masks over an IFRAME-pane need manual resizing
        if (s.tagName == "IFRAME" && s.isVisible) // no need to mask closed/hidden panes
            $M.css({
                top: s.offsetTop
			, left: s.offsetLeft
			, width: s.outerWidth
			, height: s.outerHeight
            });
        /* ALT Method...
		var $P = $Ps[pane];
		$M.css( $P.position() ).css({ width: $P[0].offsetWidth, height: $P[0].offsetHeight });
		*/
    }
    , sizeMasks = function () {
        $Ms.each(sizeMask); // resize all 'visible' masks
    }

        /**
         * @param {string}	pane		The pane being resized, animated or isSliding
         * @param {Object=}	[args]		(optional) Options: which masks to apply, and to which panes
         */
    , showMasks = function (pane, args) {
        var c = _c[pane]
		, panes = ["center"]
		, z = options.zIndexes
		, a = $.extend({
		    objectsOnly: false
					, animation: false
					, resizing: true
					, sliding: state[pane].isSliding
		}, args)
		, o, s
        ;
        if (a.resizing)
            panes.push(pane);
        if (a.sliding)
            panes.push(_c.oppositeEdge[pane]); // ADD the oppositeEdge-pane

        if (c.dir === "horz") {
            panes.push("west");
            panes.push("east");
        }

        $.each(panes, function (i, p) {
            s = state[p];
            o = options[p];
            if (s.isVisible && (o.maskObjects || (!a.objectsOnly && o.maskContents))) {
                getMasks(p).each(function () {
                    sizeMask.call(this);
                    this.style.zIndex = s.isSliding ? z.pane_sliding + 1 : z.pane_normal + 1
                    this.style.display = "block";
                });
            }
        });
    }

        /**
         * @param {boolean=}	force		Hide masks even if a pane is sliding
         */
    , hideMasks = function (force) {
        // ensure no pane is resizing - could be a timing issue
        if (force || !state.paneResizing) {
            $Ms.hide(); // hide ALL masks
        }
            // if ANY pane is sliding, then DO NOT remove masks from panes with maskObjects enabled
        else if (!force && !$.isEmptyObject(state.panesSliding)) {
            var i = $Ms.length - 1
			, p, $M;
            for (; i >= 0; i--) {
                $M = $Ms.eq(i);
                p = $M.data("layoutMask");
                if (!options[p].maskObjects) {
                    $M.hide();
                }
            }
        }
    }

        /**
         * @param {string}	pane
         */
    , getMasks = function (pane) {
        var $Masks = $([])
		, $M, i = 0, c = $Ms.length
        ;
        for (; i < c; i++) {
            $M = $Ms.eq(i);
            if ($M.data("layoutMask") === pane)
                $Masks = $Masks.add($M);
        }
        if ($Masks.length)
            return $Masks;
        else
            return createMasks(pane);
    }

        /**
         * createMasks
         *
         * Generates both DIV (ALWAYS used) and IFRAME (optional) elements as masks
         * An IFRAME mask is created *under* the DIV when maskObjects=true, because a DIV cannot mask an applet
         *
         * @param {string}	pane
         */
    , createMasks = function (pane) {
        var
			$P = $Ps[pane]
		, s = state[pane]
		, o = options[pane]
		, z = options.zIndexes
		, isIframe, el, $M, css, i
        ;
        if (!o.maskContents && !o.maskObjects) return $([]);
        // if o.maskObjects=true, then loop TWICE to create BOTH kinds of mask, else only create a DIV
        for (i = 0; i < (o.maskObjects ? 2 : 1) ; i++) {
            isIframe = o.maskObjects && i == 0;
            el = document.createElement(isIframe ? "iframe" : "div");
            $M = $(el).data("layoutMask", pane); // add data to relate mask to pane
            el.className = "ui-layout-mask ui-layout-mask-" + pane; // for user styling
            css = el.style;
            // Both DIVs and IFRAMES
            css.background = "#FFF";
            css.position = "absolute";
            css.display = "block";
            if (isIframe) { // IFRAME-only props
                el.src = "about:blank";
                el.frameborder = 0;
                css.border = 0;
                css.opacity = 0;
                css.filter = "Alpha(Opacity='0')";
                //el.allowTransparency = true; - for IE, but breaks masking ability!
            }
            else { // DIV-only props
                css.opacity = 0.001;
                css.filter = "Alpha(Opacity='1')";
            }
            // if pane IS an IFRAME, then must mask the pane itself
            if (s.tagName == "IFRAME") {
                // NOTE sizing done by a subroutine so can be called during live-resizing
                css.zIndex = z.pane_normal + 1; // 1-higher than pane
                $N.append(el); // append to LAYOUT CONTAINER
            }
                // otherwise put masks *inside the pane* to mask its contents
            else {
                $M.addClass("ui-layout-mask-inside-pane");
                css.zIndex = o.maskZindex || z.content_mask; // usually 1, but customizable
                css.top = 0;
                css.left = 0;
                css.width = "100%";
                css.height = "100%";
                $P.append(el); // append INSIDE pane element
            }
            // add Mask to cached array so can be resized & reused
            $Ms = $Ms.add(el);
        }
        return $Ms;
    }


        /**
         * Destroy this layout and reset all elements
         *
         * @param {boolean=}	[destroyChildren=false]		Destory Child-Layouts first?
         */
    , destroy = function (evt_or_destroyChildren, destroyChildren) {
        // UNBIND layout events and remove global object
        $(window).unbind("." + sID);		// resize & unload
        $(document).unbind("." + sID);	// keyDown (hotkeys)

        if (typeof evt_or_destroyChildren === "object")
            // stopPropagation if called by trigger("layoutdestroy") - use evtPane utility 
            evtPane(evt_or_destroyChildren);
        else // no event, so transfer 1st param to destroyChildren param
            destroyChildren = evt_or_destroyChildren;

        // need to look for parent layout BEFORE we remove the container data, else skips a level
        //var parentPane = Instance.hasParentLayout ? $.layout.getParentPaneInstance( $N ) : null;

        // reset layout-container
        $N.clearQueue()
			.removeData("layout")
			.removeData("layoutContainer")
			.removeClass(options.containerClass)
			.unbind("." + sID) // remove ALL Layout events
        ;

        // remove all mask elements that have been created
        $Ms.remove();

        // loop all panes to remove layout classes, attributes and bindings
        $.each(_c.allPanes, function (i, pane) {
            removePane(pane, false, true, destroyChildren); // true = skipResize
        });

        // do NOT reset container CSS if is a 'pane' (or 'content') in an outer-layout - ie, THIS layout is 'nested'
        var css = "layoutCSS";
        if ($N.data(css) && !$N.data("layoutRole")) // RESET CSS
            $N.css($N.data(css)).removeData(css);

        // for full-page layouts, also reset the <HTML> CSS
        if (sC.tagName === "BODY" && ($N = $("html")).data(css)) // RESET <HTML> CSS
            $N.css($N.data(css)).removeData(css);

        // trigger plugins for this layout, if there are any
        runPluginCallbacks(Instance, $.layout.onDestroy);

        // trigger state-management and onunload callback
        unload();

        // clear the Instance of everything except for container & options (so could recreate)
        // RE-CREATE: myLayout = myLayout.container.layout( myLayout.options );
        for (var n in Instance)
            if (!n.match(/^(container|options)$/)) delete Instance[n];
        // add a 'destroyed' flag to make it easy to check
        Instance.destroyed = true;

        // if this is a child layout, CLEAR the child-pointer in the parent
        /* for now the pointer REMAINS, but with only container, options and destroyed keys
		if (parentPane) {
			var layout	= parentPane.pane.data("parentLayout")
			,	key		= layout.options.instanceKey || 'error';
			// THIS SYNTAX MAY BE WRONG!
			parentPane.children[key] = layout.children[ parentPane.name ].children[key] = null;
		}
		*/

        return Instance; // for coding convenience
    }

        /**
         * Remove a pane from the layout - subroutine of destroy()
         *
         * @see  destroy()
         * @param {(string|Object)}	evt_or_pane			The pane to process
         * @param {boolean=}			[remove=false]		Remove the DOM element?
         * @param {boolean=}			[skipResize=false]	Skip calling resizeAll()?
         * @param {boolean=}			[destroyChild=true]	Destroy Child-layouts? If not passed, obeys options setting
         */
    , removePane = function (evt_or_pane, remove, skipResize, destroyChild) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, $P = $Ps[pane]
		, $C = $Cs[pane]
		, $R = $Rs[pane]
		, $T = $Ts[pane]
        ;
        // NOTE: elements can still exist even after remove()
        //		so check for missing data(), which is cleared by removed()
        if ($P && $.isEmptyObject($P.data())) $P = false;
        if ($C && $.isEmptyObject($C.data())) $C = false;
        if ($R && $.isEmptyObject($R.data())) $R = false;
        if ($T && $.isEmptyObject($T.data())) $T = false;

        if ($P) $P.stop(true, true);

        var o = options[pane]
		, s = state[pane]
		, d = "layout"
		, css = "layoutCSS"
		, pC = children[pane]
		, hasChildren = $.isPlainObject(pC) && !$.isEmptyObject(pC)
		, destroy = destroyChild !== undefined ? destroyChild : o.destroyChildren
        ;
        // FIRST destroy the child-layout(s)
        if (hasChildren && destroy) {
            $.each(pC, function (key, child) {
                if (!child.destroyed)
                    child.destroy(true);// tell child-layout to destroy ALL its child-layouts too
                if (child.destroyed)	// destroy was successful
                    delete pC[key];
            });
            // if no more children, remove the children hash
            if ($.isEmptyObject(pC)) {
                pC = children[pane] = null; // clear children hash
                hasChildren = false;
            }
        }

        // Note: can't 'remove' a pane element with non-destroyed children
        if ($P && remove && !hasChildren)
            $P.remove(); // remove the pane-element and everything inside it
        else if ($P && $P[0]) {
            //	create list of ALL pane-classes that need to be removed
            var root = o.paneClass // default="ui-layout-pane"
			, pRoot = root + "-" + pane // eg: "ui-layout-pane-west"
			, _open = "-open"
			, _sliding = "-sliding"
			, _closed = "-closed"
			, classes = [root, root + _open, root + _closed, root + _sliding,		// generic classes
							pRoot, pRoot + _open, pRoot + _closed, pRoot + _sliding]	// pane-specific classes
            ;
            $.merge(classes, getHoverClasses($P, true)); // ADD hover-classes
            // remove all Layout classes from pane-element
            $P.removeClass(classes.join(" ")) // remove ALL pane-classes
				.removeData("parentLayout")
				.removeData("layoutPane")
				.removeData("layoutRole")
				.removeData("layoutEdge")
				.removeData("autoHidden")	// in case set
				.unbind("." + sID) // remove ALL Layout events
            // TODO: remove these extra unbind commands when jQuery is fixed
            //.unbind("mouseenter"+ sID)
            //.unbind("mouseleave"+ sID)
            ;
            // do NOT reset CSS if this pane/content is STILL the container of a nested layout!
            // the nested layout will reset its 'container' CSS when/if it is destroyed
            if (hasChildren && $C) {
                // a content-div may not have a specific width, so give it one to contain the Layout
                $C.width($C.width());
                $.each(pC, function (key, child) {
                    child.resizeAll(); // resize the Layout
                });
            }
            else if ($C)
                $C.css($C.data(css)).removeData(css).removeData("layoutRole");
            // remove pane AFTER content in case there was a nested layout
            if (!$P.data(d))
                $P.css($P.data(css)).removeData(css);
        }

        // REMOVE pane resizer and toggler elements
        if ($T) $T.remove();
        if ($R) $R.remove();

        // CLEAR all pointers and state data
        Instance[pane] = $Ps[pane] = $Cs[pane] = $Rs[pane] = $Ts[pane] = false;
        s = { removed: true };

        if (!skipResize)
            resizeAll();
    }


    /*
     * ###########################
     *	   ACTION METHODS
     * ###########################
     */

        /**
         * @param {string}	pane
         */
    , _hidePane = function (pane) {
        var $P = $Ps[pane]
		, o = options[pane]
		, s = $P[0].style
        ;
        if (o.useOffscreenClose) {
            if (!$P.data(_c.offscreenReset))
                $P.data(_c.offscreenReset, { left: s.left, right: s.right });
            $P.css(_c.offscreenCSS);
        }
        else
            $P.hide().removeData(_c.offscreenReset);
    }

        /**
         * @param {string}	pane
         */
    , _showPane = function (pane) {
        var $P = $Ps[pane]
		, o = options[pane]
		, off = _c.offscreenCSS
		, old = $P.data(_c.offscreenReset)
		, s = $P[0].style
        ;
        $P.show() // ALWAYS show, just in case
			.removeData(_c.offscreenReset);
        if (o.useOffscreenClose && old) {
            if (s.left == off.left)
                s.left = old.left;
            if (s.right == off.right)
                s.right = old.right;
        }
    }


        /**
         * Completely 'hides' a pane, including its spacing - as if it does not exist
         * The pane is not actually 'removed' from the source, so can use 'show' to un-hide it
         *
         * @param {(string|Object)}	evt_or_pane			The pane being hidden, ie: north, south, east, or west
         * @param {boolean=}			[noAnimation=false]	
         */
    , hide = function (evt_or_pane, noAnimation) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, o = options[pane]
		, s = state[pane]
		, $P = $Ps[pane]
		, $R = $Rs[pane]
        ;
        if (pane === "center" || !$P || s.isHidden) return; // pane does not exist OR is already hidden

        // onhide_start callback - will CANCEL hide if returns false
        if (state.initialized && false === _runCallbacks("onhide_start", pane)) return;

        s.isSliding = false; // just in case
        delete state.panesSliding[pane];

        // now hide the elements
        if ($R) $R.hide(); // hide resizer-bar
        if (!state.initialized || s.isClosed) {
            s.isClosed = true; // to trigger open-animation on show()
            s.isHidden = true;
            s.isVisible = false;
            if (!state.initialized)
                _hidePane(pane); // no animation when loading page
            sizeMidPanes(_c[pane].dir === "horz" ? "" : "center");
            if (state.initialized || o.triggerEventsOnLoad)
                _runCallbacks("onhide_end", pane);
        }
        else {
            s.isHiding = true; // used by onclose
            close(pane, false, noAnimation); // adjust all panes to fit
        }
    }

        /**
         * Show a hidden pane - show as 'closed' by default unless openPane = true
         *
         * @param {(string|Object)}	evt_or_pane			The pane being opened, ie: north, south, east, or west
         * @param {boolean=}			[openPane=false]
         * @param {boolean=}			[noAnimation=false]
         * @param {boolean=}			[noAlert=false]
         */
    , show = function (evt_or_pane, openPane, noAnimation, noAlert) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, o = options[pane]
		, s = state[pane]
		, $P = $Ps[pane]
		, $R = $Rs[pane]
        ;
        if (pane === "center" || !$P || !s.isHidden) return; // pane does not exist OR is not hidden

        // onshow_start callback - will CANCEL show if returns false
        if (false === _runCallbacks("onshow_start", pane)) return;

        s.isShowing = true; // used by onopen/onclose
        //s.isHidden  = false; - will be set by open/close - if not cancelled
        s.isSliding = false; // just in case
        delete state.panesSliding[pane];

        // now show the elements
        //if ($R) $R.show(); - will be shown by open/close
        if (openPane === false)
            close(pane, true); // true = force
        else
            open(pane, false, noAnimation, noAlert); // adjust all panes to fit
    }


        /**
         * Toggles a pane open/closed by calling either open or close
         *
         * @param {(string|Object)}	evt_or_pane		The pane being toggled, ie: north, south, east, or west
         * @param {boolean=}			[slide=false]
         */
    , toggle = function (evt_or_pane, slide) {
        if (!isInitialized()) return;
        var evt = evtObj(evt_or_pane)
		, pane = evtPane.call(this, evt_or_pane)
		, s = state[pane]
        ;
        if (evt) // called from to $R.dblclick OR triggerPaneEvent
            evt.stopImmediatePropagation();
        if (s.isHidden)
            show(pane); // will call 'open' after unhiding it
        else if (s.isClosed)
            open(pane, !!slide);
        else
            close(pane);
    }


        /**
         * Utility method used during init or other auto-processes
         *
         * @param {string}	pane   The pane being closed
         * @param {boolean=}	[setHandles=false]
         */
    , _closePane = function (pane, setHandles) {
        var
			$P = $Ps[pane]
		, s = state[pane]
        ;
        _hidePane(pane);
        s.isClosed = true;
        s.isVisible = false;
        if (setHandles) setAsClosed(pane);
    }

        /**
         * Close the specified pane (animation optional), and resize all other panes as needed
         *
         * @param {(string|Object)}	evt_or_pane			The pane being closed, ie: north, south, east, or west
         * @param {boolean=}			[force=false]
         * @param {boolean=}			[noAnimation=false]
         * @param {boolean=}			[skipCallback=false]
         */
    , close = function (evt_or_pane, force, noAnimation, skipCallback) {
        var pane = evtPane.call(this, evt_or_pane);
        if (pane === "center") return; // validate
        // if pane has been initialized, but NOT the complete layout, close pane instantly
        if (!state.initialized && $Ps[pane]) {
            _closePane(pane, true); // INIT pane as closed
            return;
        }
        if (!isInitialized()) return;

        var
			$P = $Ps[pane]
		, $R = $Rs[pane]
		, $T = $Ts[pane]
		, o = options[pane]
		, s = state[pane]
		, c = _c[pane]
		, doFX, isShowing, isHiding, wasSliding;

        // QUEUE in case another action/animation is in progress
        $N.queue(function (queueNext) {

            if (!$P
			|| (!o.closable && !s.isShowing && !s.isHiding)	// invalid request // (!o.resizable && !o.closable) ???
			|| (!force && s.isClosed && !s.isShowing)			// already closed
			) return queueNext();

            // onclose_start callback - will CANCEL hide if returns false
            // SKIP if just 'showing' a hidden pane as 'closed'
            var abort = !s.isShowing && false === _runCallbacks("onclose_start", pane);

            // transfer logic vars to temp vars
            isShowing = s.isShowing;
            isHiding = s.isHiding;
            wasSliding = s.isSliding;
            // now clear the logic vars (REQUIRED before aborting)
            delete s.isShowing;
            delete s.isHiding;

            if (abort) return queueNext();

            doFX = !noAnimation && !s.isClosed && (o.fxName_close != "none");
            s.isMoving = true;
            s.isClosed = true;
            s.isVisible = false;
            // update isHidden BEFORE sizing panes
            if (isHiding) s.isHidden = true;
            else if (isShowing) s.isHidden = false;

            if (s.isSliding) // pane is being closed, so UNBIND trigger events
                bindStopSlidingEvents(pane, false); // will set isSliding=false
            else // resize panes adjacent to this one
                sizeMidPanes(_c[pane].dir === "horz" ? "" : "center", false); // false = NOT skipCallback

            // if this pane has a resizer bar, move it NOW - before animation
            setAsClosed(pane);

            // CLOSE THE PANE
            if (doFX) { // animate the close
                lockPaneForFX(pane, true);	// need to set left/top so animation will work
                $P.hide(o.fxName_close, o.fxSettings_close, o.fxSpeed_close, function () {
                    lockPaneForFX(pane, false); // undo
                    if (s.isClosed) close_2();
                    queueNext();
                });
            }
            else { // hide the pane without animation
                _hidePane(pane);
                close_2();
                queueNext();
            };
        });

        // SUBROUTINE
        function close_2() {
            s.isMoving = false;
            bindStartSlidingEvents(pane, true); // will enable if o.slidable = true

            // if opposite-pane was autoClosed, see if it can be autoOpened now
            var altPane = _c.oppositeEdge[pane];
            if (state[altPane].noRoom) {
                setSizeLimits(altPane);
                makePaneFit(altPane);
            }

            if (!skipCallback && (state.initialized || o.triggerEventsOnLoad)) {
                // onclose callback - UNLESS just 'showing' a hidden pane as 'closed'
                if (!isShowing) _runCallbacks("onclose_end", pane);
                // onhide OR onshow callback
                if (isShowing) _runCallbacks("onshow_end", pane);
                if (isHiding) _runCallbacks("onhide_end", pane);
            }
        }
    }

        /**
         * @param {string}	pane	The pane just closed, ie: north, south, east, or west
         */
    , setAsClosed = function (pane) {
        if (!$Rs[pane]) return; // handles not initialized yet!
        var
			$P = $Ps[pane]
		, $R = $Rs[pane]
		, $T = $Ts[pane]
		, o = options[pane]
		, s = state[pane]
		, side = _c[pane].side
		, rClass = o.resizerClass
		, tClass = o.togglerClass
		, _pane = "-" + pane // used for classNames
		, _open = "-open"
		, _sliding = "-sliding"
		, _closed = "-closed"
        ;
        $R
			.css(side, sC.inset[side]) // move the resizer
			.removeClass(rClass + _open + " " + rClass + _pane + _open)
			.removeClass(rClass + _sliding + " " + rClass + _pane + _sliding)
			.addClass(rClass + _closed + " " + rClass + _pane + _closed)
        ;
        // handle already-hidden panes in case called by swap() or a similar method 
        if (s.isHidden) $R.hide(); // hide resizer-bar 

        // DISABLE 'resizing' when closed - do this BEFORE bindStartSlidingEvents?
        if (o.resizable && $.layout.plugins.draggable)
            $R
				.draggable("disable")
				.removeClass("ui-state-disabled") // do NOT apply disabled styling - not suitable here
				.css("cursor", "default")
				.attr("title", "")
        ;

        // if pane has a toggler button, adjust that too
        if ($T) {
            $T
				.removeClass(tClass + _open + " " + tClass + _pane + _open)
				.addClass(tClass + _closed + " " + tClass + _pane + _closed)
				.attr("title", o.tips.Open) // may be blank
            ;
            // toggler-content - if exists
            $T.children(".content-open").hide();
            $T.children(".content-closed").css("display", "block");
        }

        // sync any 'pin buttons'
        syncPinBtns(pane, false);

        if (state.initialized) {
            // resize 'length' and position togglers for adjacent panes
            sizeHandles();
        }
    }

        /**
         * Open the specified pane (animation optional), and resize all other panes as needed
         *
         * @param {(string|Object)}	evt_or_pane			The pane being opened, ie: north, south, east, or west
         * @param {boolean=}			[slide=false]
         * @param {boolean=}			[noAnimation=false]
         * @param {boolean=}			[noAlert=false]
         */
    , open = function (evt_or_pane, slide, noAnimation, noAlert) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, $P = $Ps[pane]
		, $R = $Rs[pane]
		, $T = $Ts[pane]
		, o = options[pane]
		, s = state[pane]
		, c = _c[pane]
		, doFX, isShowing
        ;
        if (pane === "center") return; // validate
        // QUEUE in case another action/animation is in progress
        $N.queue(function (queueNext) {

            if (!$P
			|| (!o.resizable && !o.closable && !s.isShowing)	// invalid request
			|| (s.isVisible && !s.isSliding)					// already open
			) return queueNext();

            // pane can ALSO be unhidden by just calling show(), so handle this scenario
            if (s.isHidden && !s.isShowing) {
                queueNext(); // call before show() because it needs the queue free
                show(pane, true);
                return;
            }

            if (s.autoResize && s.size != o.size) // resize pane to original size set in options
                sizePane(pane, o.size, true, true, true); // true=skipCallback/noAnimation/forceResize
            else
                // make sure there is enough space available to open the pane
                setSizeLimits(pane, slide);

            // onopen_start callback - will CANCEL open if returns false
            var cbReturn = _runCallbacks("onopen_start", pane);

            if (cbReturn === "abort")
                return queueNext();

            // update pane-state again in case options were changed in onopen_start
            if (cbReturn !== "NC") // NC = "No Callback"
                setSizeLimits(pane, slide);

            if (s.minSize > s.maxSize) { // INSUFFICIENT ROOM FOR PANE TO OPEN!
                syncPinBtns(pane, false); // make sure pin-buttons are reset
                if (!noAlert && o.tips.noRoomToOpen)
                    alert(o.tips.noRoomToOpen);
                return queueNext(); // ABORT
            }

            if (slide) // START Sliding - will set isSliding=true
                bindStopSlidingEvents(pane, true); // BIND trigger events to close sliding-pane
            else if (s.isSliding) // PIN PANE (stop sliding) - open pane 'normally' instead
                bindStopSlidingEvents(pane, false); // UNBIND trigger events - will set isSliding=false
            else if (o.slidable)
                bindStartSlidingEvents(pane, false); // UNBIND trigger events

            s.noRoom = false; // will be reset by makePaneFit if 'noRoom'
            makePaneFit(pane);

            // transfer logic var to temp var
            isShowing = s.isShowing;
            // now clear the logic var
            delete s.isShowing;

            doFX = !noAnimation && s.isClosed && (o.fxName_open != "none");
            s.isMoving = true;
            s.isVisible = true;
            s.isClosed = false;
            // update isHidden BEFORE sizing panes - WHY??? Old?
            if (isShowing) s.isHidden = false;

            if (doFX) { // ANIMATE
                // mask adjacent panes with objects
                lockPaneForFX(pane, true);	// need to set left/top so animation will work
                $P.show(o.fxName_open, o.fxSettings_open, o.fxSpeed_open, function () {
                    lockPaneForFX(pane, false); // undo
                    if (s.isVisible) open_2(); // continue
                    queueNext();
                });
            }
            else { // no animation
                _showPane(pane);// just show pane and...
                open_2();		// continue
                queueNext();
            };
        });

        // SUBROUTINE
        function open_2() {
            s.isMoving = false;

            // cure iframe display issues
            _fixIframe(pane);

            // NOTE: if isSliding, then other panes are NOT 'resized'
            if (!s.isSliding) { // resize all panes adjacent to this one
                sizeMidPanes(_c[pane].dir == "vert" ? "center" : "", false); // false = NOT skipCallback
            }

            // set classes, position handles and execute callbacks...
            setAsOpen(pane);
        };

    }

        /**
         * @param {string}	pane		The pane just opened, ie: north, south, east, or west
         * @param {boolean=}	[skipCallback=false]
         */
    , setAsOpen = function (pane, skipCallback) {
        var
			$P = $Ps[pane]
		, $R = $Rs[pane]
		, $T = $Ts[pane]
		, o = options[pane]
		, s = state[pane]
		, side = _c[pane].side
		, rClass = o.resizerClass
		, tClass = o.togglerClass
		, _pane = "-" + pane // used for classNames
		, _open = "-open"
		, _closed = "-closed"
		, _sliding = "-sliding"
        ;
        $R
			.css(side, sC.inset[side] + getPaneSize(pane)) // move the resizer
			.removeClass(rClass + _closed + " " + rClass + _pane + _closed)
			.addClass(rClass + _open + " " + rClass + _pane + _open)
        ;
        if (s.isSliding)
            $R.addClass(rClass + _sliding + " " + rClass + _pane + _sliding)
        else // in case 'was sliding'
            $R.removeClass(rClass + _sliding + " " + rClass + _pane + _sliding)

        removeHover(0, $R); // remove hover classes
        if (o.resizable && $.layout.plugins.draggable)
            $R.draggable("enable")
				.css("cursor", o.resizerCursor)
				.attr("title", o.tips.Resize);
        else if (!s.isSliding)
            $R.css("cursor", "default"); // n-resize, s-resize, etc

        // if pane also has a toggler button, adjust that too
        if ($T) {
            $T.removeClass(tClass + _closed + " " + tClass + _pane + _closed)
				.addClass(tClass + _open + " " + tClass + _pane + _open)
				.attr("title", o.tips.Close); // may be blank
            removeHover(0, $T); // remove hover classes
            // toggler-content - if exists
            $T.children(".content-closed").hide();
            $T.children(".content-open").css("display", "block");
        }

        // sync any 'pin buttons'
        syncPinBtns(pane, !s.isSliding);

        // update pane-state dimensions - BEFORE resizing content
        $.extend(s, elDims($P));

        if (state.initialized) {
            // resize resizer & toggler sizes for all panes
            sizeHandles();
            // resize content every time pane opens - to be sure
            sizeContent(pane, true); // true = remeasure headers/footers, even if 'pane.isMoving'
        }

        if (!skipCallback && (state.initialized || o.triggerEventsOnLoad) && $P.is(":visible")) {
            // onopen callback
            _runCallbacks("onopen_end", pane);
            // onshow callback - TODO: should this be here?
            if (s.isShowing) _runCallbacks("onshow_end", pane);

            // ALSO call onresize because layout-size *may* have changed while pane was closed
            if (state.initialized)
                _runCallbacks("onresize_end", pane);
        }

        // TODO: Somehow sizePane("north") is being called after this point???
    }


        /**
         * slideOpen / slideClose / slideToggle
         *
         * Pass-though methods for sliding
         */
    , slideOpen = function (evt_or_pane) {
        if (!isInitialized()) return;
        var evt = evtObj(evt_or_pane)
		, pane = evtPane.call(this, evt_or_pane)
		, s = state[pane]
		, delay = options[pane].slideDelay_open
        ;
        if (pane === "center") return; // validate
        // prevent event from triggering on NEW resizer binding created below
        if (evt) evt.stopImmediatePropagation();

        if (s.isClosed && evt && evt.type === "mouseenter" && delay > 0)
            // trigger = mouseenter - use a delay
            timer.set(pane + "_openSlider", open_NOW, delay);
        else
            open_NOW(); // will unbind events if is already open

        /**
		 * SUBROUTINE for timed open
		 */
        function open_NOW() {
            if (!s.isClosed) // skip if no longer closed!
                bindStopSlidingEvents(pane, true); // BIND trigger events to close sliding-pane
            else if (!s.isMoving)
                open(pane, true); // true = slide - open() will handle binding
        };
    }

    , slideClose = function (evt_or_pane) {
        if (!isInitialized()) return;
        var evt = evtObj(evt_or_pane)
		, pane = evtPane.call(this, evt_or_pane)
		, o = options[pane]
		, s = state[pane]
		, delay = s.isMoving ? 1000 : 300 // MINIMUM delay - option may override
        ;
        if (pane === "center") return; // validate
        if (s.isClosed || s.isResizing)
            return; // skip if already closed OR in process of resizing
        else if (o.slideTrigger_close === "click")
            close_NOW(); // close immediately onClick
        else if (o.preventQuickSlideClose && s.isMoving)
            return; // handle Chrome quick-close on slide-open
        else if (o.preventPrematureSlideClose && evt && $.layout.isMouseOverElem(evt, $Ps[pane]))
            return; // handle incorrect mouseleave trigger, like when over a SELECT-list in IE
        else if (evt) // trigger = mouseleave - use a delay
            // 1 sec delay if 'opening', else .3 sec
            timer.set(pane + "_closeSlider", close_NOW, max(o.slideDelay_close, delay));
        else // called programically
            close_NOW();

        /**
		 * SUBROUTINE for timed close
		 */
        function close_NOW() {
            if (s.isClosed) // skip 'close' if already closed!
                bindStopSlidingEvents(pane, false); // UNBIND trigger events - TODO: is this needed here?
            else if (!s.isMoving)
                close(pane); // close will handle unbinding
        };
    }

        /**
         * @param {(string|Object)}	evt_or_pane		The pane being opened, ie: north, south, east, or west
         */
    , slideToggle = function (evt_or_pane) {
        var pane = evtPane.call(this, evt_or_pane);
        toggle(pane, true);
    }


        /**
         * Must set left/top on East/South panes so animation will work properly
         *
         * @param {string}	pane	The pane to lock, 'east' or 'south' - any other is ignored!
         * @param {boolean}	doLock  true = set left/top, false = remove
         */
    , lockPaneForFX = function (pane, doLock) {
        var $P = $Ps[pane]
		, s = state[pane]
		, o = options[pane]
		, z = options.zIndexes
        ;
        if (doLock) {
            showMasks(pane, { animation: true, objectsOnly: true });
            $P.css({ zIndex: z.pane_animate }); // overlay all elements during animation
            if (pane == "south")
                $P.css({ top: sC.inset.top + sC.innerHeight - $P.outerHeight() });
            else if (pane == "east")
                $P.css({ left: sC.inset.left + sC.innerWidth - $P.outerWidth() });
        }
        else { // animation DONE - RESET CSS
            hideMasks();
            $P.css({ zIndex: (s.isSliding ? z.pane_sliding : z.pane_normal) });
            if (pane == "south")
                $P.css({ top: "auto" });
                // if pane is positioned 'off-screen', then DO NOT screw with it!
            else if (pane == "east" && !$P.css("left").match(/\-99999/))
                $P.css({ left: "auto" });
            // fix anti-aliasing in IE - only needed for animations that change opacity
            if (browser.msie && o.fxOpacityFix && o.fxName_open != "slide" && $P.css("filter") && $P.css("opacity") == 1)
                $P[0].style.removeAttribute('filter');
        }
    }


        /**
         * Toggle sliding functionality of a specific pane on/off by adding removing 'slide open' trigger
         *
         * @see  open(), close()
         * @param {string}	pane	The pane to enable/disable, 'north', 'south', etc.
         * @param {boolean}	enable	Enable or Disable sliding?
         */
    , bindStartSlidingEvents = function (pane, enable) {
        var o = options[pane]
		, $P = $Ps[pane]
		, $R = $Rs[pane]
		, evtName = o.slideTrigger_open.toLowerCase()
        ;
        if (!$R || (enable && !o.slidable)) return;

        // make sure we have a valid event
        if (evtName.match(/mouseover/))
            evtName = o.slideTrigger_open = "mouseenter";
        else if (!evtName.match(/(click|dblclick|mouseenter)/))
            evtName = o.slideTrigger_open = "click";

        // must remove double-click-toggle when using dblclick-slide
        if (o.resizerDblClickToggle && evtName.match(/click/)) {
            $R[enable ? "unbind" : "bind"]('dblclick.' + sID, toggle)
        }

        $R
			// add or remove event
			[enable ? "bind" : "unbind"](evtName + '.' + sID, slideOpen)
			// set the appropriate cursor & title/tip
			.css("cursor", enable ? o.sliderCursor : "default")
			.attr("title", enable ? o.tips.Slide : "")
        ;
    }

        /**
         * Add or remove 'mouseleave' events to 'slide close' when pane is 'sliding' open or closed
         * Also increases zIndex when pane is sliding open
         * See bindStartSlidingEvents for code to control 'slide open'
         *
         * @see  slideOpen(), slideClose()
         * @param {string}	pane	The pane to process, 'north', 'south', etc.
         * @param {boolean}	enable	Enable or Disable events?
         */
    , bindStopSlidingEvents = function (pane, enable) {
        var o = options[pane]
		, s = state[pane]
		, c = _c[pane]
		, z = options.zIndexes
		, evtName = o.slideTrigger_close.toLowerCase()
		, action = (enable ? "bind" : "unbind")
		, $P = $Ps[pane]
		, $R = $Rs[pane]
        ;
        timer.clear(pane + "_closeSlider"); // just in case

        if (enable) {
            s.isSliding = true;
            state.panesSliding[pane] = true;
            // remove 'slideOpen' event from resizer
            // ALSO will raise the zIndex of the pane & resizer
            bindStartSlidingEvents(pane, false);
        }
        else {
            s.isSliding = false;
            delete state.panesSliding[pane];
        }

        // RE/SET zIndex - increases when pane is sliding-open, resets to normal when not
        $P.css("zIndex", enable ? z.pane_sliding : z.pane_normal);
        $R.css("zIndex", enable ? z.pane_sliding + 2 : z.resizer_normal); // NOTE: mask = pane_sliding+1

        // make sure we have a valid event
        if (!evtName.match(/(click|mouseleave)/))
            evtName = o.slideTrigger_close = "mouseleave"; // also catches 'mouseout'

        // add/remove slide triggers
        $R[action](evtName, slideClose); // base event on resize
        // need extra events for mouseleave
        if (evtName === "mouseleave") {
            // also close on pane.mouseleave
            $P[action]("mouseleave." + sID, slideClose);
            // cancel timer when mouse moves between 'pane' and 'resizer'
            $R[action]("mouseenter." + sID, cancelMouseOut);
            $P[action]("mouseenter." + sID, cancelMouseOut);
        }

        if (!enable)
            timer.clear(pane + "_closeSlider");
        else if (evtName === "click" && !o.resizable) {
            // IF pane is not resizable (which already has a cursor and tip) 
            // then set the a cursor & title/tip on resizer when sliding
            $R.css("cursor", enable ? o.sliderCursor : "default");
            $R.attr("title", enable ? o.tips.Close : ""); // use Toggler-tip, eg: "Close Pane"
        }

        // SUBROUTINE for mouseleave timer clearing
        function cancelMouseOut(evt) {
            timer.clear(pane + "_closeSlider");
            evt.stopPropagation();
        }
    }


        /**
         * Hides/closes a pane if there is insufficient room - reverses this when there is room again
         * MUST have already called setSizeLimits() before calling this method
         *
         * @param {string}	pane					The pane being resized
         * @param {boolean=}	[isOpening=false]		Called from onOpen?
         * @param {boolean=}	[skipCallback=false]	Should the onresize callback be run?
         * @param {boolean=}	[force=false]
         */
    , makePaneFit = function (pane, isOpening, skipCallback, force) {
        var o = options[pane]
		, s = state[pane]
		, c = _c[pane]
		, $P = $Ps[pane]
		, $R = $Rs[pane]
		, isSidePane = c.dir === "vert"
		, hasRoom = false
        ;
        // special handling for center & east/west panes
        if (pane === "center" || (isSidePane && s.noVerticalRoom)) {
            // see if there is enough room to display the pane
            // ERROR: hasRoom = s.minHeight <= s.maxHeight && (isSidePane || s.minWidth <= s.maxWidth);
            hasRoom = (s.maxHeight >= 0);
            if (hasRoom && s.noRoom) { // previously hidden due to noRoom, so show now
                _showPane(pane);
                if ($R) $R.show();
                s.isVisible = true;
                s.noRoom = false;
                if (isSidePane) s.noVerticalRoom = false;
                _fixIframe(pane);
            }
            else if (!hasRoom && !s.noRoom) { // not currently hidden, so hide now
                _hidePane(pane);
                if ($R) $R.hide();
                s.isVisible = false;
                s.noRoom = true;
            }
        }

        // see if there is enough room to fit the border-pane
        if (pane === "center") {
            // ignore center in this block
        }
        else if (s.minSize <= s.maxSize) { // pane CAN fit
            hasRoom = true;
            if (s.size > s.maxSize) // pane is too big - shrink it
                sizePane(pane, s.maxSize, skipCallback, true, force); // true = noAnimation
            else if (s.size < s.minSize) // pane is too small - enlarge it
                sizePane(pane, s.minSize, skipCallback, true, force); // true = noAnimation
                // need s.isVisible because new pseudoClose method keeps pane visible, but off-screen
            else if ($R && s.isVisible && $P.is(":visible")) {
                // make sure resizer-bar is positioned correctly
                // handles situation where nested layout was 'hidden' when initialized
                var pos = s.size + sC.inset[c.side];
                if ($.layout.cssNum($R, c.side) != pos) $R.css(c.side, pos);
            }

            // if was previously hidden due to noRoom, then RESET because NOW there is room
            if (s.noRoom) {
                // s.noRoom state will be set by open or show
                if (s.wasOpen && o.closable) {
                    if (o.autoReopen)
                        open(pane, false, true, true); // true = noAnimation, true = noAlert
                    else // leave the pane closed, so just update state
                        s.noRoom = false;
                }
                else
                    show(pane, s.wasOpen, true, true); // true = noAnimation, true = noAlert
            }
        }
        else { // !hasRoom - pane CANNOT fit
            if (!s.noRoom) { // pane not set as noRoom yet, so hide or close it now...
                s.noRoom = true; // update state
                s.wasOpen = !s.isClosed && !s.isSliding;
                if (s.isClosed) { } // SKIP
                else if (o.closable) // 'close' if possible
                    close(pane, true, true); // true = force, true = noAnimation
                else // 'hide' pane if cannot just be closed
                    hide(pane, true); // true = noAnimation
            }
        }
    }


        /**
         * manualSizePane is an exposed flow-through method allowing extra code when pane is 'manually resized'
         *
         * @param {(string|Object)}	evt_or_pane				The pane being resized
         * @param {number}			size					The *desired* new size for this pane - will be validated
         * @param {boolean=}			[skipCallback=false]	Should the onresize callback be run?
         * @param {boolean=}			[noAnimation=false]
         * @param {boolean=}			[force=false]			Force resizing even if does not seem necessary
         */
    , manualSizePane = function (evt_or_pane, size, skipCallback, noAnimation, force) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, o = options[pane]
		, s = state[pane]
		//	if resizing callbacks have been delayed and resizing is now DONE, force resizing to complete...
		, forceResize = force || (o.livePaneResizing && !s.isResizing)
        ;
        if (pane === "center") return; // validate
        // ANY call to manualSizePane disables autoResize - ie, percentage sizing
        s.autoResize = false;
        // flow-through...
        sizePane(pane, size, skipCallback, noAnimation, forceResize); // will animate resize if option enabled
    }

        /**
         * sizePane is called only by internal methods whenever a pane needs to be resized
         *
         * @param {(string|Object)}	evt_or_pane				The pane being resized
         * @param {number}			size					The *desired* new size for this pane - will be validated
         * @param {boolean=}			[skipCallback=false]	Should the onresize callback be run?
         * @param {boolean=}			[noAnimation=false]
         * @param {boolean=}			[force=false]			Force resizing even if does not seem necessary
         */
    , sizePane = function (evt_or_pane, size, skipCallback, noAnimation, force) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane) // probably NEVER called from event?
		, o = options[pane]
		, s = state[pane]
		, $P = $Ps[pane]
		, $R = $Rs[pane]
		, side = _c[pane].side
		, dimName = _c[pane].sizeType.toLowerCase()
		, skipResizeWhileDragging = s.isResizing && !o.triggerEventsDuringLiveResize
		, doFX = noAnimation !== true && o.animatePaneSizing
		, oldSize, newSize
        ;
        if (pane === "center") return; // validate
        // QUEUE in case another action/animation is in progress
        $N.queue(function (queueNext) {
            // calculate 'current' min/max sizes
            setSizeLimits(pane); // update pane-state
            oldSize = s.size;
            size = _parseSize(pane, size); // handle percentages & auto
            size = max(size, _parseSize(pane, o.minSize));
            size = min(size, s.maxSize);
            if (size < s.minSize) { // not enough room for pane!
                queueNext(); // call before makePaneFit() because it needs the queue free
                makePaneFit(pane, false, skipCallback);	// will hide or close pane
                return;
            }

            // IF newSize is same as oldSize, then nothing to do - abort
            if (!force && size === oldSize)
                return queueNext();

            s.newSize = size;

            // onresize_start callback CANNOT cancel resizing because this would break the layout!
            if (!skipCallback && state.initialized && s.isVisible)
                _runCallbacks("onresize_start", pane);

            // resize the pane, and make sure its visible
            newSize = cssSize(pane, size);

            if (doFX && $P.is(":visible")) { // ANIMATE
                var fx = $.layout.effects.size[pane] || $.layout.effects.size.all
				, easing = o.fxSettings_size.easing || fx.easing
				, z = options.zIndexes
				, props = {};
                props[dimName] = newSize + 'px';
                s.isMoving = true;
                // overlay all elements during animation
                $P.css({ zIndex: z.pane_animate })
				  .show().animate(props, o.fxSpeed_size, easing, function () {
				      // reset zIndex after animation
				      $P.css({ zIndex: (s.isSliding ? z.pane_sliding : z.pane_normal) });
				      s.isMoving = false;
				      delete s.newSize;
				      sizePane_2(); // continue
				      queueNext();
				  });
            }
            else { // no animation
                $P.css(dimName, newSize);	// resize pane
                delete s.newSize;
                // if pane is visible, then 
                if ($P.is(":visible"))
                    sizePane_2(); // continue
                else {
                    // pane is NOT VISIBLE, so just update state data...
                    // when pane is *next opened*, it will have the new size
                    s.size = size;				// update state.size
                    //$.extend(s, elDims($P));	// update state dimensions - CANNOT do this when not visible!				}
                }
                queueNext();
            };

        });

        // SUBROUTINE
        function sizePane_2() {
            /*	Panes are sometimes not sized precisely in some browsers!?
			 *	This code will resize the pane up to 3 times to nudge the pane to the correct size
			 */
            var actual = dimName === 'width' ? $P.outerWidth() : $P.outerHeight()
			, tries = [{
			    pane: pane
						, count: 1
						, target: size
						, actual: actual
						, correct: (size === actual)
						, attempt: size
						, cssSize: newSize
			}]
			, lastTry = tries[0]
			, thisTry = {}
			, msg = 'Inaccurate size after resizing the ' + pane + '-pane.'
            ;
            while (!lastTry.correct) {
                thisTry = { pane: pane, count: lastTry.count + 1, target: size };

                if (lastTry.actual > size)
                    thisTry.attempt = max(0, lastTry.attempt - (lastTry.actual - size));
                else // lastTry.actual < size
                    thisTry.attempt = max(0, lastTry.attempt + (size - lastTry.actual));

                thisTry.cssSize = cssSize(pane, thisTry.attempt);
                $P.css(dimName, thisTry.cssSize);

                thisTry.actual = dimName == 'width' ? $P.outerWidth() : $P.outerHeight();
                thisTry.correct = (size === thisTry.actual);

                // log attempts and alert the user of this *non-fatal error* (if showDebugMessages)
                if (tries.length === 1) {
                    _log(msg, false, true);
                    _log(lastTry, false, true);
                }
                _log(thisTry, false, true);
                // after 4 tries, is as close as its gonna get!
                if (tries.length > 3) break;

                tries.push(thisTry);
                lastTry = tries[tries.length - 1];
            }
            // END TESTING CODE

            // update pane-state dimensions
            s.size = size;
            $.extend(s, elDims($P));

            if (s.isVisible && $P.is(":visible")) {
                // reposition the resizer-bar
                if ($R) $R.css(side, size + sC.inset[side]);
                // resize the content-div
                sizeContent(pane);
            }

            if (!skipCallback && !skipResizeWhileDragging && state.initialized && s.isVisible)
                _runCallbacks("onresize_end", pane);

            // resize all the adjacent panes, and adjust their toggler buttons
            // when skipCallback passed, it means the controlling method will handle 'other panes'
            if (!skipCallback) {
                // also no callback if live-resize is in progress and NOT triggerEventsDuringLiveResize
                if (!s.isSliding) sizeMidPanes(_c[pane].dir == "horz" ? "" : "center", skipResizeWhileDragging, force);
                sizeHandles();
            }

            // if opposite-pane was autoClosed, see if it can be autoOpened now
            var altPane = _c.oppositeEdge[pane];
            if (size < oldSize && state[altPane].noRoom) {
                setSizeLimits(altPane);
                makePaneFit(altPane, false, skipCallback);
            }

            // DEBUG - ALERT user/developer so they know there was a sizing problem
            if (tries.length > 1)
                _log(msg + '\nSee the Error Console for details.', true, true);
        }
    }

        /**
         * @see  initPanes(), sizePane(), 	resizeAll(), open(), close(), hide()
         * @param {(Array.<string>|string)}	panes					The pane(s) being resized, comma-delmited string
         * @param {boolean=}					[skipCallback=false]	Should the onresize callback be run?
         * @param {boolean=}					[force=false]
         */
    , sizeMidPanes = function (panes, skipCallback, force) {
        panes = (panes ? panes : "east,west,center").split(",");

        $.each(panes, function (i, pane) {
            if (!$Ps[pane]) return; // NO PANE - skip
            var
				o = options[pane]
			, s = state[pane]
			, $P = $Ps[pane]
			, $R = $Rs[pane]
			, isCenter = (pane == "center")
			, hasRoom = true
			, CSS = {}
			//	if pane is not visible, show it invisibly NOW rather than for *each call* in this script
			, visCSS = $.layout.showInvisibly($P)

			, newCenter = calcNewCenterPaneDims()
            ;

            // update pane-state dimensions
            $.extend(s, elDims($P));

            if (pane === "center") {
                if (!force && s.isVisible && newCenter.width === s.outerWidth && newCenter.height === s.outerHeight) {
                    $P.css(visCSS);
                    return true; // SKIP - pane already the correct size
                }
                // set state for makePaneFit() logic
                $.extend(s, cssMinDims(pane), {
                    maxWidth: newCenter.width
				, maxHeight: newCenter.height
                });
                CSS = newCenter;
                s.newWidth = CSS.width;
                s.newHeight = CSS.height;
                // convert OUTER width/height to CSS width/height 
                CSS.width = cssW($P, CSS.width);
                // NEW - allow pane to extend 'below' visible area rather than hide it
                CSS.height = cssH($P, CSS.height);
                hasRoom = CSS.width >= 0 && CSS.height >= 0; // height >= 0 = ALWAYS TRUE NOW

                // during layout init, try to shrink east/west panes to make room for center
                if (!state.initialized && o.minWidth > newCenter.width) {
                    var
						reqPx = o.minWidth - s.outerWidth
					, minE = options.east.minSize || 0
					, minW = options.west.minSize || 0
					, sizeE = state.east.size
					, sizeW = state.west.size
					, newE = sizeE
					, newW = sizeW
                    ;
                    if (reqPx > 0 && state.east.isVisible && sizeE > minE) {
                        newE = max(sizeE - minE, sizeE - reqPx);
                        reqPx -= sizeE - newE;
                    }
                    if (reqPx > 0 && state.west.isVisible && sizeW > minW) {
                        newW = max(sizeW - minW, sizeW - reqPx);
                        reqPx -= sizeW - newW;
                    }
                    // IF we found enough extra space, then resize the border panes as calculated
                    if (reqPx === 0) {
                        if (sizeE && sizeE != minE)
                            sizePane('east', newE, true, true, force); // true = skipCallback/noAnimation - initPanes will handle when done
                        if (sizeW && sizeW != minW)
                            sizePane('west', newW, true, true, force); // true = skipCallback/noAnimation
                        // now start over!
                        sizeMidPanes('center', skipCallback, force);
                        $P.css(visCSS);
                        return; // abort this loop
                    }
                }
            }
            else { // for east and west, set only the height, which is same as center height
                // set state.min/maxWidth/Height for makePaneFit() logic
                if (s.isVisible && !s.noVerticalRoom)
                    $.extend(s, elDims($P), cssMinDims(pane))
                if (!force && !s.noVerticalRoom && newCenter.height === s.outerHeight) {
                    $P.css(visCSS);
                    return true; // SKIP - pane already the correct size
                }
                // east/west have same top, bottom & height as center
                CSS.top = newCenter.top;
                CSS.bottom = newCenter.bottom;
                s.newSize = newCenter.height
                // NEW - allow pane to extend 'below' visible area rather than hide it
                CSS.height = cssH($P, newCenter.height);
                s.maxHeight = CSS.height;
                hasRoom = (s.maxHeight >= 0); // ALWAYS TRUE NOW
                if (!hasRoom) s.noVerticalRoom = true; // makePaneFit() logic
            }

            if (hasRoom) {
                // resizeAll passes skipCallback because it triggers callbacks after ALL panes are resized
                if (!skipCallback && state.initialized)
                    _runCallbacks("onresize_start", pane);

                $P.css(CSS); // apply the CSS to pane
                if (pane !== "center")
                    sizeHandles(pane); // also update resizer length
                if (s.noRoom && !s.isClosed && !s.isHidden)
                    makePaneFit(pane); // will re-open/show auto-closed/hidden pane
                if (s.isVisible) {
                    $.extend(s, elDims($P)); // update pane dimensions
                    if (state.initialized) sizeContent(pane); // also resize the contents, if exists
                }
            }
            else if (!s.noRoom && s.isVisible) // no room for pane
                makePaneFit(pane); // will hide or close pane

            // reset visibility, if necessary
            $P.css(visCSS);

            delete s.newSize;
            delete s.newWidth;
            delete s.newHeight;

            if (!s.isVisible)
                return true; // DONE - next pane

            /*
			 * Extra CSS for IE6 or IE7 in Quirks-mode - add 'width' to NORTH/SOUTH panes
			 * Normally these panes have only 'left' & 'right' positions so pane auto-sizes
			 * ALSO required when pane is an IFRAME because will NOT default to 'full width'
			 *	TODO: Can I use width:100% for a north/south iframe?
			 *	TODO: Sounds like a job for $P.outerWidth( sC.innerWidth ) SETTER METHOD
			 */
            if (pane === "center") { // finished processing midPanes
                var fix = browser.isIE6 || !browser.boxModel;
                if ($Ps.north && (fix || state.north.tagName == "IFRAME"))
                    $Ps.north.css("width", cssW($Ps.north, sC.innerWidth));
                if ($Ps.south && (fix || state.south.tagName == "IFRAME"))
                    $Ps.south.css("width", cssW($Ps.south, sC.innerWidth));
            }

            // resizeAll passes skipCallback because it triggers callbacks after ALL panes are resized
            if (!skipCallback && state.initialized)
                _runCallbacks("onresize_end", pane);
        });
    }


        /**
         * @see  window.onresize(), callbacks or custom code
         * @param {(Object|boolean)=}	evt_or_refresh	If 'true', then also reset pane-positioning
         */
    , resizeAll = function (evt_or_refresh) {
        var oldW = sC.innerWidth
		, oldH = sC.innerHeight
        ;
        // stopPropagation if called by trigger("layoutdestroy") - use evtPane utility 
        evtPane(evt_or_refresh);

        // cannot size layout when 'container' is hidden or collapsed
        if (!$N.is(":visible")) return;

        if (!state.initialized) {
            _initLayoutElements();
            return; // no need to resize since we just initialized!
        }

        if (evt_or_refresh === true && $.isPlainObject(options.outset)) {
            // update container CSS in case outset option has changed
            $N.css(options.outset);
        }
        // UPDATE container dimensions
        $.extend(sC, elDims($N, options.inset));
        if (!sC.outerHeight) return;

        // if 'true' passed, refresh pane & handle positioning too
        if (evt_or_refresh === true) {
            setPanePosition();
        }

        // onresizeall_start will CANCEL resizing if returns false
        // state.container has already been set, so user can access this info for calcuations
        if (false === _runCallbacks("onresizeall_start")) return false;

        var	// see if container is now 'smaller' than before
			shrunkH = (sC.innerHeight < oldH)
		, shrunkW = (sC.innerWidth < oldW)
		, $P, o, s
        ;
        // NOTE special order for sizing: S-N-E-W
        $.each(["south", "north", "east", "west"], function (i, pane) {
            if (!$Ps[pane]) return; // no pane - SKIP
            o = options[pane];
            s = state[pane];
            if (s.autoResize && s.size != o.size) // resize pane to original size set in options
                sizePane(pane, o.size, true, true, true); // true=skipCallback/noAnimation/forceResize
            else {
                setSizeLimits(pane);
                makePaneFit(pane, false, true, true); // true=skipCallback/forceResize
            }
        });

        sizeMidPanes("", true, true); // true=skipCallback/forceResize
        sizeHandles(); // reposition the toggler elements

        // trigger all individual pane callbacks AFTER layout has finished resizing
        $.each(_c.allPanes, function (i, pane) {
            $P = $Ps[pane];
            if (!$P) return; // SKIP
            if (state[pane].isVisible) // undefined for non-existent panes
                _runCallbacks("onresize_end", pane); // callback - if exists
        });

        _runCallbacks("onresizeall_end");
        //_triggerLayoutEvent(pane, 'resizeall');
    }

        /**
         * Whenever a pane resizes or opens that has a nested layout, trigger resizeAll
         *
         * @param {(string|Object)}	evt_or_pane		The pane just resized or opened
         */
    , resizeChildren = function (evt_or_pane, skipRefresh) {
        var pane = evtPane.call(this, evt_or_pane);

        if (!options[pane].resizeChildren) return;

        // ensure the pane-children are up-to-date
        if (!skipRefresh) refreshChildren(pane);
        var pC = children[pane];
        if ($.isPlainObject(pC)) {
            // resize one or more children
            $.each(pC, function (key, child) {
                if (!child.destroyed) child.resizeAll();
            });
        }
    }

        /**
         * IF pane has a content-div, then resize all elements inside pane to fit pane-height
         *
         * @param {(string|Object)}	evt_or_panes		The pane(s) being resized
         * @param {boolean=}			[remeasure=false]	Should the content (header/footer) be remeasured?
         */
    , sizeContent = function (evt_or_panes, remeasure) {
        if (!isInitialized()) return;

        var panes = evtPane.call(this, evt_or_panes);
        panes = panes ? panes.split(",") : _c.allPanes;

        $.each(panes, function (idx, pane) {
            var
				$P = $Ps[pane]
			, $C = $Cs[pane]
			, o = options[pane]
			, s = state[pane]
			, m = s.content // m = measurements
            ;
            if (!$P || !$C || !$P.is(":visible")) return true; // NOT VISIBLE - skip

            // if content-element was REMOVED, update OR remove the pointer
            if (!$C.length) {
                initContent(pane, false);	// false = do NOT sizeContent() - already there!
                if (!$C) return;			// no replacement element found - pointer have been removed
            }

            // onsizecontent_start will CANCEL resizing if returns false
            if (false === _runCallbacks("onsizecontent_start", pane)) return;

            // skip re-measuring offsets if live-resizing
            if ((!s.isMoving && !s.isResizing) || o.liveContentResizing || remeasure || m.top == undefined) {
                _measure();
                // if any footers are below pane-bottom, they may not measure correctly,
                // so allow pane overflow and re-measure
                if (m.hiddenFooters > 0 && $P.css("overflow") === "hidden") {
                    $P.css("overflow", "visible");
                    _measure(); // remeasure while overflowing
                    $P.css("overflow", "hidden");
                }
            }
            // NOTE: spaceAbove/Below *includes* the pane paddingTop/Bottom, but not pane.borders
            var newH = s.innerHeight - (m.spaceAbove - s.css.paddingTop) - (m.spaceBelow - s.css.paddingBottom);

            if (!$C.is(":visible") || m.height != newH) {
                // size the Content element to fit new pane-size - will autoHide if not enough room
                setOuterHeight($C, newH, true); // true=autoHide
                m.height = newH; // save new height
            };

            if (state.initialized)
                _runCallbacks("onsizecontent_end", pane);

            function _below($E) {
                return max(s.css.paddingBottom, (parseInt($E.css("marginBottom"), 10) || 0));
            };

            function _measure() {
                var
					ignore = options[pane].contentIgnoreSelector
				, $Fs = $C.nextAll().not(".ui-layout-mask").not(ignore || ":lt(0)") // not :lt(0) = ALL
				, $Fs_vis = $Fs.filter(':visible')
				, $F = $Fs_vis.filter(':last')
                ;
                m = {
                    top: $C[0].offsetTop
				, height: $C.outerHeight()
				, numFooters: $Fs.length
				, hiddenFooters: $Fs.length - $Fs_vis.length
				, spaceBelow: 0 // correct if no content footer ($E)
                }
                m.spaceAbove = m.top; // just for state - not used in calc
                m.bottom = m.top + m.height;
                if ($F.length)
                    //spaceBelow = (LastFooter.top + LastFooter.height) [footerBottom] - Content.bottom + max(LastFooter.marginBottom, pane.paddingBotom)
                    m.spaceBelow = ($F[0].offsetTop + $F.outerHeight()) - m.bottom + _below($F);
                else // no footer - check marginBottom on Content element itself
                    m.spaceBelow = _below($C);
            };
        });
    }


        /**
         * Called every time a pane is opened, closed, or resized to slide the togglers to 'center' and adjust their length if necessary
         *
         * @see  initHandles(), open(), close(), resizeAll()
         * @param {(string|Object)=}		evt_or_panes	The pane(s) being resized
         */
    , sizeHandles = function (evt_or_panes) {
        var panes = evtPane.call(this, evt_or_panes)
        panes = panes ? panes.split(",") : _c.borderPanes;

        $.each(panes, function (i, pane) {
            var
				o = options[pane]
			, s = state[pane]
			, $P = $Ps[pane]
			, $R = $Rs[pane]
			, $T = $Ts[pane]
			, $TC
            ;
            if (!$P || !$R) return;

            var
				dir = _c[pane].dir
			, _state = (s.isClosed ? "_closed" : "_open")
			, spacing = o["spacing" + _state]
			, togAlign = o["togglerAlign" + _state]
			, togLen = o["togglerLength" + _state]
			, paneLen
			, left
			, offset
			, CSS = {}
            ;

            if (spacing === 0) {
                $R.hide();
                return;
            }
            else if (!s.noRoom && !s.isHidden) // skip if resizer was hidden for any reason
                $R.show(); // in case was previously hidden

            // Resizer Bar is ALWAYS same width/height of pane it is attached to
            if (dir === "horz") { // north/south
                //paneLen = $P.outerWidth(); // s.outerWidth || 
                paneLen = sC.innerWidth; // handle offscreen-panes
                s.resizerLength = paneLen;
                left = $.layout.cssNum($P, "left")
                $R.css({
                    width: cssW($R, paneLen) // account for borders & padding
				, height: cssH($R, spacing) // ditto
				, left: left > -9999 ? left : sC.inset.left // handle offscreen-panes
                });
            }
            else { // east/west
                paneLen = $P.outerHeight(); // s.outerHeight || 
                s.resizerLength = paneLen;
                $R.css({
                    height: cssH($R, paneLen) // account for borders & padding
				, width: cssW($R, spacing) // ditto
				, top: sC.inset.top + getPaneSize("north", true) // TODO: what if no North pane?
                    //,	top:	$.layout.cssNum($Ps["center"], "top")
                });
            }

            // remove hover classes
            removeHover(o, $R);

            if ($T) {
                if (togLen === 0 || (s.isSliding && o.hideTogglerOnSlide)) {
                    $T.hide(); // always HIDE the toggler when 'sliding'
                    return;
                }
                else
                    $T.show(); // in case was previously hidden

                if (!(togLen > 0) || togLen === "100%" || togLen > paneLen) {
                    togLen = paneLen;
                    offset = 0;
                }
                else { // calculate 'offset' based on options.PANE.togglerAlign_open/closed
                    if (isStr(togAlign)) {
                        switch (togAlign) {
                            case "top":
                            case "left": offset = 0;
                                break;
                            case "bottom":
                            case "right": offset = paneLen - togLen;
                                break;
                            case "middle":
                            case "center":
                            default: offset = round((paneLen - togLen) / 2); // 'default' catches typos
                        }
                    }
                    else { // togAlign = number
                        var x = parseInt(togAlign, 10); //
                        if (togAlign >= 0) offset = x;
                        else offset = paneLen - togLen + x; // NOTE: x is negative!
                    }
                }

                if (dir === "horz") { // north/south
                    var width = cssW($T, togLen);
                    $T.css({
                        width: width  // account for borders & padding
					, height: cssH($T, spacing) // ditto
					, left: offset // TODO: VERIFY that toggler  positions correctly for ALL values
					, top: 0
                    });
                    // CENTER the toggler content SPAN
                    $T.children(".content").each(function () {
                        $TC = $(this);
                        $TC.css("marginLeft", round((width - $TC.outerWidth()) / 2)); // could be negative
                    });
                }
                else { // east/west
                    var height = cssH($T, togLen);
                    $T.css({
                        height: height // account for borders & padding
					, width: cssW($T, spacing) // ditto
					, top: offset // POSITION the toggler
					, left: 0
                    });
                    // CENTER the toggler content SPAN
                    $T.children(".content").each(function () {
                        $TC = $(this);
                        $TC.css("marginTop", round((height - $TC.outerHeight()) / 2)); // could be negative
                    });
                }

                // remove ALL hover classes
                removeHover(0, $T);
            }

            // DONE measuring and sizing this resizer/toggler, so can be 'hidden' now
            if (!state.initialized && (o.initHidden || s.isHidden)) {
                $R.hide();
                if ($T) $T.hide();
            }
        });
    }


        /**
         * @param {(string|Object)}	evt_or_pane
         */
    , enableClosable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, $T = $Ts[pane]
		, o = options[pane]
        ;
        if (!$T) return;
        o.closable = true;
        $T.bind("click." + sID, function (evt) { evt.stopPropagation(); toggle(pane); })
			.css("visibility", "visible")
			.css("cursor", "pointer")
			.attr("title", state[pane].isClosed ? o.tips.Open : o.tips.Close) // may be blank
			.show();
    }
        /**
         * @param {(string|Object)}	evt_or_pane
         * @param {boolean=}			[hide=false]
         */
    , disableClosable = function (evt_or_pane, hide) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, $T = $Ts[pane]
        ;
        if (!$T) return;
        options[pane].closable = false;
        // is closable is disable, then pane MUST be open!
        if (state[pane].isClosed) open(pane, false, true);
        $T.unbind("." + sID)
			.css("visibility", hide ? "hidden" : "visible") // instead of hide(), which creates logic issues
			.css("cursor", "default")
			.attr("title", "");
    }


        /**
         * @param {(string|Object)}	evt_or_pane
         */
    , enableSlidable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, $R = $Rs[pane]
        ;
        if (!$R || !$R.data('draggable')) return;
        options[pane].slidable = true;
        if (state[pane].isClosed)
            bindStartSlidingEvents(pane, true);
    }
        /**
         * @param {(string|Object)}	evt_or_pane
         */
    , disableSlidable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, $R = $Rs[pane]
        ;
        if (!$R) return;
        options[pane].slidable = false;
        if (state[pane].isSliding)
            close(pane, false, true);
        else {
            bindStartSlidingEvents(pane, false);
            $R.css("cursor", "default")
				.attr("title", "");
            removeHover(null, $R[0]); // in case currently hovered
        }
    }


        /**
         * @param {(string|Object)}	evt_or_pane
         */
    , enableResizable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, $R = $Rs[pane]
		, o = options[pane]
        ;
        if (!$R || !$R.data('draggable')) return;
        o.resizable = true;
        $R.draggable("enable");
        if (!state[pane].isClosed)
            $R.css("cursor", o.resizerCursor)
			 	.attr("title", o.tips.Resize);
    }
        /**
         * @param {(string|Object)}	evt_or_pane
         */
    , disableResizable = function (evt_or_pane) {
        if (!isInitialized()) return;
        var pane = evtPane.call(this, evt_or_pane)
		, $R = $Rs[pane]
        ;
        if (!$R || !$R.data('draggable')) return;
        options[pane].resizable = false;
        $R.draggable("disable")
			.css("cursor", "default")
			.attr("title", "");
        removeHover(null, $R[0]); // in case currently hovered
    }


        /**
         * Move a pane from source-side (eg, west) to target-side (eg, east)
         * If pane exists on target-side, move that to source-side, ie, 'swap' the panes
         *
         * @param {(string|Object)}	evt_or_pane1	The pane/edge being swapped
         * @param {string}			pane2			ditto
         */
    , swapPanes = function (evt_or_pane1, pane2) {
        if (!isInitialized()) return;
        var pane1 = evtPane.call(this, evt_or_pane1);
        // change state.edge NOW so callbacks can know where pane is headed...
        state[pane1].edge = pane2;
        state[pane2].edge = pane1;
        // run these even if NOT state.initialized
        if (false === _runCallbacks("onswap_start", pane1)
		 || false === _runCallbacks("onswap_start", pane2)
		) {
            state[pane1].edge = pane1; // reset
            state[pane2].edge = pane2;
            return;
        }

        var
			oPane1 = copy(pane1)
		, oPane2 = copy(pane2)
		, sizes = {}
        ;
        sizes[pane1] = oPane1 ? oPane1.state.size : 0;
        sizes[pane2] = oPane2 ? oPane2.state.size : 0;

        // clear pointers & state
        $Ps[pane1] = false;
        $Ps[pane2] = false;
        state[pane1] = {};
        state[pane2] = {};

        // ALWAYS remove the resizer & toggler elements
        if ($Ts[pane1]) $Ts[pane1].remove();
        if ($Ts[pane2]) $Ts[pane2].remove();
        if ($Rs[pane1]) $Rs[pane1].remove();
        if ($Rs[pane2]) $Rs[pane2].remove();
        $Rs[pane1] = $Rs[pane2] = $Ts[pane1] = $Ts[pane2] = false;

        // transfer element pointers and data to NEW Layout keys
        move(oPane1, pane2);
        move(oPane2, pane1);

        // cleanup objects
        oPane1 = oPane2 = sizes = null;

        // make panes 'visible' again
        if ($Ps[pane1]) $Ps[pane1].css(_c.visible);
        if ($Ps[pane2]) $Ps[pane2].css(_c.visible);

        // fix any size discrepancies caused by swap
        resizeAll();

        // run these even if NOT state.initialized
        _runCallbacks("onswap_end", pane1);
        _runCallbacks("onswap_end", pane2);

        return;

        function copy(n) { // n = pane
            var
				$P = $Ps[n]
			, $C = $Cs[n]
            ;
            return !$P ? false : {
                pane: n
			, P: $P ? $P[0] : false
			, C: $C ? $C[0] : false
			, state: $.extend(true, {}, state[n])
			, options: $.extend(true, {}, options[n])
            }
        };

        function move(oPane, pane) {
            if (!oPane) return;
            var
				P = oPane.P
			, C = oPane.C
			, oldPane = oPane.pane
			, c = _c[pane]
			//	save pane-options that should be retained
			, s = $.extend(true, {}, state[pane])
			, o = options[pane]
			//	RETAIN side-specific FX Settings - more below
			, fx = { resizerCursor: o.resizerCursor }
			, re, size, pos
            ;
            $.each("fxName,fxSpeed,fxSettings".split(","), function (i, k) {
                fx[k + "_open"] = o[k + "_open"];
                fx[k + "_close"] = o[k + "_close"];
                fx[k + "_size"] = o[k + "_size"];
            });

            // update object pointers and attributes
            $Ps[pane] = $(P)
				.data({
				    layoutPane: Instance[pane]	// NEW pointer to pane-alias-object
				, layoutEdge: pane
				})
				.css(_c.hidden)
				.css(c.cssReq)
            ;
            $Cs[pane] = C ? $(C) : false;

            // set options and state
            options[pane] = $.extend(true, {}, oPane.options, fx);
            state[pane] = $.extend(true, {}, oPane.state);

            // change classNames on the pane, eg: ui-layout-pane-east ==> ui-layout-pane-west
            re = new RegExp(o.paneClass + "-" + oldPane, "g");
            P.className = P.className.replace(re, o.paneClass + "-" + pane);

            // ALWAYS regenerate the resizer & toggler elements
            initHandles(pane); // create the required resizer & toggler

            // if moving to different orientation, then keep 'target' pane size
            if (c.dir != _c[oldPane].dir) {
                size = sizes[pane] || 0;
                setSizeLimits(pane); // update pane-state
                size = max(size, state[pane].minSize);
                // use manualSizePane to disable autoResize - not useful after panes are swapped
                manualSizePane(pane, size, true, true); // true/true = skipCallback/noAnimation
            }
            else // move the resizer here
                $Rs[pane].css(c.side, sC.inset[c.side] + (state[pane].isVisible ? getPaneSize(pane) : 0));


            // ADD CLASSNAMES & SLIDE-BINDINGS
            if (oPane.state.isVisible && !s.isVisible)
                setAsOpen(pane, true); // true = skipCallback
            else {
                setAsClosed(pane);
                bindStartSlidingEvents(pane, true); // will enable events IF option is set
            }

            // DESTROY the object
            oPane = null;
        };
    }


        /**
         * INTERNAL method to sync pin-buttons when pane is opened or closed
         * Unpinned means the pane is 'sliding' - ie, over-top of the adjacent panes
         *
         * @see  open(), setAsOpen(), setAsClosed()
         * @param {string}	pane   These are the params returned to callbacks by layout()
         * @param {boolean}	doPin  True means set the pin 'down', False means 'up'
         */
    , syncPinBtns = function (pane, doPin) {
        if ($.layout.plugins.buttons)
            $.each(state[pane].pins, function (i, selector) {
                $.layout.buttons.setPinState(Instance, $(selector), pane, doPin);
            });
    }

        ;	// END var DECLARATIONS

        /**
         * Capture keys when enableCursorHotkey - toggle pane if hotkey pressed
         *
         * @see  document.keydown()
         */
        function keyDown(evt) {
            if (!evt) return true;
            var code = evt.keyCode;
            if (code < 33) return true; // ignore special keys: ENTER, TAB, etc

            var
                PANE = {
                    38: "north" // Up Cursor	- $.ui.keyCode.UP
                , 40: "south" // Down Cursor	- $.ui.keyCode.DOWN
                , 37: "west"  // Left Cursor	- $.ui.keyCode.LEFT
                , 39: "east"  // Right Cursor	- $.ui.keyCode.RIGHT
                }
            , ALT = evt.altKey // no worky!
            , SHIFT = evt.shiftKey
            , CTRL = evt.ctrlKey
            , CURSOR = (CTRL && code >= 37 && code <= 40)
            , o, k, m, pane
            ;

            if (CURSOR && options[PANE[code]].enableCursorHotkey) // valid cursor-hotkey
                pane = PANE[code];
            else if (CTRL || SHIFT) // check to see if this matches a custom-hotkey
                $.each(_c.borderPanes, function (i, p) { // loop each pane to check its hotkey
                    o = options[p];
                    k = o.customHotkey;
                    m = o.customHotkeyModifier; // if missing or invalid, treated as "CTRL+SHIFT"
                    if ((SHIFT && m == "SHIFT") || (CTRL && m == "CTRL") || (CTRL && SHIFT)) { // Modifier matches
                        if (k && code === (isNaN(k) || k <= 9 ? k.toUpperCase().charCodeAt(0) : k)) { // Key matches
                            pane = p;
                            return false; // BREAK
                        }
                    }
                });

            // validate pane
            if (!pane || !$Ps[pane] || !options[pane].closable || state[pane].isHidden)
                return true;

            toggle(pane);

            evt.stopPropagation();
            evt.returnValue = false; // CANCEL key
            return false;
        };


        /*
         * ######################################
         *	UTILITY METHODS
         *	called externally or by initButtons
         * ######################################
         */

        /**
         * Change/reset a pane overflow setting & zIndex to allow popups/drop-downs to work
         *
         * @param {Object=}   [el]	(optional) Can also be 'bound' to a click, mouseOver, or other event
         */
        function allowOverflow(el) {
            if (!isInitialized()) return;
            if (this && this.tagName) el = this; // BOUND to element
            var $P;
            if (isStr(el))
                $P = $Ps[el];
            else if ($(el).data("layoutRole"))
                $P = $(el);
            else
                $(el).parents().each(function () {
                    if ($(this).data("layoutRole")) {
                        $P = $(this);
                        return false; // BREAK
                    }
                });
            if (!$P || !$P.length) return; // INVALID

            var
                pane = $P.data("layoutEdge")
            , s = state[pane]
            ;

            // if pane is already raised, then reset it before doing it again!
            // this would happen if allowOverflow is attached to BOTH the pane and an element 
            if (s.cssSaved)
                resetOverflow(pane); // reset previous CSS before continuing

            // if pane is raised by sliding or resizing, or its closed, then abort
            if (s.isSliding || s.isResizing || s.isClosed) {
                s.cssSaved = false;
                return;
            }

            var
                newCSS = { zIndex: (options.zIndexes.resizer_normal + 1) }
            , curCSS = {}
            , of = $P.css("overflow")
            , ofX = $P.css("overflowX")
            , ofY = $P.css("overflowY")
            ;
            // determine which, if any, overflow settings need to be changed
            if (of != "visible") {
                curCSS.overflow = of;
                newCSS.overflow = "visible";
            }
            if (ofX && !ofX.match(/(visible|auto)/)) {
                curCSS.overflowX = ofX;
                newCSS.overflowX = "visible";
            }
            if (ofY && !ofY.match(/(visible|auto)/)) {
                curCSS.overflowY = ofX;
                newCSS.overflowY = "visible";
            }

            // save the current overflow settings - even if blank!
            s.cssSaved = curCSS;

            // apply new CSS to raise zIndex and, if necessary, make overflow 'visible'
            $P.css(newCSS);

            // make sure the zIndex of all other panes is normal
            $.each(_c.allPanes, function (i, p) {
                if (p != pane) resetOverflow(p);
            });

        };
        /**
         * @param {Object=}   [el]	(optional) Can also be 'bound' to a click, mouseOver, or other event
         */
        function resetOverflow(el) {
            if (!isInitialized()) return;
            if (this && this.tagName) el = this; // BOUND to element
            var $P;
            if (isStr(el))
                $P = $Ps[el];
            else if ($(el).data("layoutRole"))
                $P = $(el);
            else
                $(el).parents().each(function () {
                    if ($(this).data("layoutRole")) {
                        $P = $(this);
                        return false; // BREAK
                    }
                });
            if (!$P || !$P.length) return; // INVALID

            var
                pane = $P.data("layoutEdge")
            , s = state[pane]
            , CSS = s.cssSaved || {}
            ;
            // reset the zIndex
            if (!s.isSliding && !s.isResizing)
                $P.css("zIndex", options.zIndexes.pane_normal);

            // reset Overflow - if necessary
            $P.css(CSS);

            // clear var
            s.cssSaved = false;
        };

        /*
         * #####################
         * CREATE/RETURN LAYOUT
         * #####################
         */

        // validate that container exists
        var $N = $(this).eq(0); // FIRST matching Container element
        if (!$N.length) {
            return _log(options.errors.containerMissing);
        };

        // Users retrieve Instance of a layout with: $N.layout() OR $N.data("layout")
        // return the Instance-pointer if layout has already been initialized
        if ($N.data("layoutContainer") && $N.data("layout"))
            return $N.data("layout"); // cached pointer

        // init global vars
        var
            $Ps = {}	// Panes x5		- set in initPanes()
        , $Cs = {}	// Content x5	- set in initPanes()
        , $Rs = {}	// Resizers x4	- set in initHandles()
        , $Ts = {}	// Togglers x4	- set in initHandles()
        , $Ms = $([])	// Masks - up to 2 masks per pane (IFRAME + DIV)
        //	aliases for code brevity
        , sC = state.container // alias for easy access to 'container dimensions'
        , sID = state.id // alias for unique layout ID/namespace - eg: "layout435"
        ;

        // create Instance object to expose data & option Properties, and primary action Methods
        var Instance = {
            //	layout data
            options: options			// property - options hash
        , state: state			// property - dimensions hash
            //	object pointers
        , container: $N				// property - object pointers for layout container
        , panes: $Ps				// property - object pointers for ALL Panes: panes.north, panes.center
        , contents: $Cs				// property - object pointers for ALL Content: contents.north, contents.center
        , resizers: $Rs				// property - object pointers for ALL Resizers, eg: resizers.north
        , togglers: $Ts				// property - object pointers for ALL Togglers, eg: togglers.north
            //	border-pane open/close
        , hide: hide			// method - ditto
        , show: show			// method - ditto
        , toggle: toggle			// method - pass a 'pane' ("north", "west", etc)
        , open: open			// method - ditto
        , close: close			// method - ditto
        , slideOpen: slideOpen		// method - ditto
        , slideClose: slideClose		// method - ditto
        , slideToggle: slideToggle		// method - ditto
            //	pane actions
        , setSizeLimits: setSizeLimits	// method - pass a 'pane' - update state min/max data
        , _sizePane: sizePane		// method -intended for user by plugins only!
        , sizePane: manualSizePane	// method - pass a 'pane' AND an 'outer-size' in pixels or percent, or 'auto'
        , sizeContent: sizeContent		// method - pass a 'pane'
        , swapPanes: swapPanes		// method - pass TWO 'panes' - will swap them
        , showMasks: showMasks		// method - pass a 'pane' OR list of panes - default = all panes with mask option set
        , hideMasks: hideMasks		// method - ditto'
            //	pane element methods
        , initContent: initContent		// method - ditto
        , addPane: addPane			// method - pass a 'pane'
        , removePane: removePane		// method - pass a 'pane' to remove from layout, add 'true' to delete the pane-elem
        , createChildren: createChildren	// method - pass a 'pane' and (optional) layout-options (OVERRIDES options[pane].children
        , refreshChildren: refreshChildren	// method - pass a 'pane' and a layout-instance
            //	special pane option setting
        , enableClosable: enableClosable	// method - pass a 'pane'
        , disableClosable: disableClosable	// method - ditto
        , enableSlidable: enableSlidable	// method - ditto
        , disableSlidable: disableSlidable	// method - ditto
        , enableResizable: enableResizable	// method - ditto
        , disableResizable: disableResizable// method - ditto
            //	utility methods for panes
        , allowOverflow: allowOverflow	// utility - pass calling element (this)
        , resetOverflow: resetOverflow	// utility - ditto
            //	layout control
        , destroy: destroy			// method - no parameters
        , initPanes: isInitialized	// method - no parameters
        , resizeAll: resizeAll		// method - no parameters
            //	callback triggering
        , runCallbacks: _runCallbacks	// method - pass evtName & pane (if a pane-event), eg: trigger("onopen", "west")
            //	alias collections of options, state and children - created in addPane and extended elsewhere
        , hasParentLayout: false			// set by initContainer()
        , children: children		// pointers to child-layouts, eg: Instance.children.west.layoutName
        , north: false			// alias group: { name: pane, pane: $Ps[pane], options: options[pane], state: state[pane], children: children[pane] }
        , south: false			// ditto
        , west: false			// ditto
        , east: false			// ditto
        , center: false			// ditto
        };

        // create the border layout NOW
        if (_create() === 'cancel') // onload_start callback returned false to CANCEL layout creation
            return null;
        else // true OR false -- if layout-elements did NOT init (hidden or do not exist), can auto-init later
            return Instance; // return the Instance object

    }


})(jQuery);




/**
 * jquery.layout.state 1.2
 * $Date: 2014-08-30 08:00:00 (Sat, 30 Aug 2014) $
 *
 * Copyright (c) 2014 
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.4.0 or higher
 * @requires: $.ui.cookie (above)
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 */
; (function ($) {

    if (!$.layout) return;


    /**
     *	UI COOKIE UTILITY
     *
     *	A $.cookie OR $.ui.cookie namespace *should be standard*, but until then...
     *	This creates $.ui.cookie so Layout does not need the cookie.jquery.js plugin
     *	NOTE: This utility is REQUIRED by the layout.state plugin
     *
     *	Cookie methods in Layout are created as part of State Management 
     */
    if (!$.ui) $.ui = {};
    $.ui.cookie = {

        // cookieEnabled is not in DOM specs, but DOES works in all browsers,including IE6
        acceptsCookies: !!navigator.cookieEnabled

    , read: function (name) {
        var
			c = document.cookie
		, cs = c ? c.split(';') : []
		, pair, data, i
        ;
        for (i = 0; pair = cs[i]; i++) {
            data = $.trim(pair).split('='); // name=value => [ name, value ]
            if (data[0] == name) // found the layout cookie
                return decodeURIComponent(data[1]);
        }
        return null;
    }

    , write: function (name, val, cookieOpts) {
        var params = ""
		, date = ""
		, clear = false
		, o = cookieOpts || {}
		, x = o.expires || null
		, t = $.type(x)
        ;
        if (t === "date")
            date = x;
        else if (t === "string" && x > 0) {
            x = parseInt(x, 10);
            t = "number";
        }
        if (t === "number") {
            date = new Date();
            if (x > 0)
                date.setDate(date.getDate() + x);
            else {
                date.setFullYear(1970);
                clear = true;
            }
        }
        if (date) params += ";expires=" + date.toUTCString();
        if (o.path) params += ";path=" + o.path;
        if (o.domain) params += ";domain=" + o.domain;
        if (o.secure) params += ";secure";
        document.cookie = name + "=" + (clear ? "" : encodeURIComponent(val)) + params; // write or clear cookie
    }

    , clear: function (name) {
        $.ui.cookie.write(name, "", { expires: -1 });
    }

    };
    // if cookie.jquery.js is not loaded, create an alias to replicate it
    // this may be useful to other plugins or code dependent on that plugin
    if (!$.cookie) $.cookie = function (k, v, o) {
        var C = $.ui.cookie;
        if (v === null)
            C.clear(k);
        else if (v === undefined)
            return C.read(k);
        else
            C.write(k, v, o);
    };



    /**
     *	State-management options stored in options.stateManagement, which includes a .cookie hash
     *	Default options saves ALL KEYS for ALL PANES, ie: pane.size, pane.isClosed, pane.isHidden
     *
     *	// STATE/COOKIE OPTIONS
     *	@example $(el).layout({
                    stateManagement: {
                        enabled:	true
                    ,	stateKeys:	"east.size,west.size,east.isClosed,west.isClosed"
                    ,	cookie:		{ name: "appLayout", path: "/" }
                    }
                })
     *	@example $(el).layout({ stateManagement__enabled: true }) // enable auto-state-management using cookies
     *	@example $(el).layout({ stateManagement__cookie: { name: "appLayout", path: "/" } })
     *	@example $(el).layout({ stateManagement__cookie__name: "appLayout", stateManagement__cookie__path: "/" })
     *
     *	// STATE/COOKIE METHODS
     *	@example myLayout.saveCookie( "west.isClosed,north.size,south.isHidden", {expires: 7} );
     *	@example myLayout.loadCookie();
     *	@example myLayout.deleteCookie();
     *	@example var JSON = myLayout.readState();	// CURRENT Layout State
     *	@example var JSON = myLayout.readCookie();	// SAVED Layout State (from cookie)
     *	@example var JSON = myLayout.state.stateData;	// LAST LOADED Layout State (cookie saved in layout.state hash)
     *
     *	CUSTOM STATE-MANAGEMENT (eg, saved in a database)
     *	@example var JSON = myLayout.readState( "west.isClosed,north.size,south.isHidden" );
     *	@example myLayout.loadState( JSON );
     */

    // tell Layout that the state plugin is available
    $.layout.plugins.stateManagement = true;

    //	Add State-Management options to layout.defaults
    $.layout.defaults.stateManagement = {
        enabled: false	// true = enable state-management, even if not using cookies
    , autoSave: true	// Save a state-cookie when page exits?
    , autoLoad: true	// Load the state-cookie when Layout inits?
    , animateLoad: true	// animate panes when loading state into an active layout
    , includeChildren: true	// recurse into child layouts to include their state as well
        // List state-data to save - must be pane-specific
    , stateKeys: "north.size,south.size,east.size,west.size," +
                    "north.isClosed,south.isClosed,east.isClosed,west.isClosed," +
                    "north.isHidden,south.isHidden,east.isHidden,west.isHidden"
    , cookie: {
        name: ""	// If not specified, will use Layout.name, else just "Layout"
        , domain: ""	// blank = current domain
        , path: ""	// blank = current page, "/" = entire website
        , expires: ""	// 'days' to keep cookie - leave blank for 'session cookie'
        , secure: false
    }
    };

    // Set stateManagement as a 'layout-option', NOT a 'pane-option'
    $.layout.optionsMap.layout.push("stateManagement");
    // Update config so layout does not move options into the pane-default branch (panes)
    $.layout.config.optionRootKeys.push("stateManagement");

    /*
     *	State Management methods
     */
    $.layout.state = {

        /**
         * Get the current layout state and save it to a cookie
         *
         * myLayout.saveCookie( keys, cookieOpts )
         *
         * @param {Object}			inst
         * @param {(string|Array)=}	keys
         * @param {Object=}			cookieOpts
         */
        saveCookie: function (inst, keys, cookieOpts) {
            var o = inst.options
            , sm = o.stateManagement
            , oC = $.extend(true, {}, sm.cookie, cookieOpts || null)
            , data = inst.state.stateData = inst.readState(keys || sm.stateKeys) // read current panes-state
            ;
            $.ui.cookie.write(oC.name || o.name || "Layout", $.layout.state.encodeJSON(data), oC);
            return $.extend(true, {}, data); // return COPY of state.stateData data
        }

        /**
         * Remove the state cookie
         *
         * @param {Object}	inst
         */
    , deleteCookie: function (inst) {
        var o = inst.options;
        $.ui.cookie.clear(o.stateManagement.cookie.name || o.name || "Layout");
    }

        /**
         * Read & return data from the cookie - as JSON
         *
         * @param {Object}	inst
         */
    , readCookie: function (inst) {
        var o = inst.options;
        var c = $.ui.cookie.read(o.stateManagement.cookie.name || o.name || "Layout");
        // convert cookie string back to a hash and return it
        return c ? $.layout.state.decodeJSON(c) : {};
    }

        /**
         * Get data from the cookie and USE IT to loadState
         *
         * @param {Object}	inst
         */
    , loadCookie: function (inst) {
        var c = $.layout.state.readCookie(inst); // READ the cookie
        if (c && !$.isEmptyObject(c)) {
            inst.state.stateData = $.extend(true, {}, c); // SET state.stateData
            inst.loadState(c); // LOAD the retrieved state
        }
        return c;
    }

        /**
         * Update layout options from the cookie, if one exists
         *
         * @param {Object}		inst
         * @param {Object=}		stateData
         * @param {boolean=}	animate
         */
    , loadState: function (inst, data, opts) {
        if (!$.isPlainObject(data) || $.isEmptyObject(data)) return;

        // normalize data & cache in the state object
        data = inst.state.stateData = $.layout.transformData(data); // panes = default subkey

        // add missing/default state-restore options
        var smo = inst.options.stateManagement;
        opts = $.extend({
            animateLoad: false //smo.animateLoad
		, includeChildren: smo.includeChildren
        }, opts);

        if (!inst.state.initialized) {
            /*
			 *	layout NOT initialized, so just update its options
			 */
            // MUST remove pane.children keys before applying to options
            // use a copy so we don't remove keys from original data
            var o = $.extend(true, {}, data);
            //delete o.center; // center has no state-data - only children
            $.each($.layout.config.allPanes, function (idx, pane) {
                if (o[pane]) delete o[pane].children;
            });
            // update CURRENT layout-options with saved state data
            $.extend(true, inst.options, o);
        }
        else {
            /*
			 *	layout already initialized, so modify layout's configuration
			 */
            var noAnimate = !opts.animateLoad
			, o, c, h, state, open
            ;
            $.each($.layout.config.borderPanes, function (idx, pane) {
                o = data[pane];
                if (!$.isPlainObject(o)) return; // no key, skip pane

                s = o.size;
                c = o.initClosed;
                h = o.initHidden;
                ar = o.autoResize
                state = inst.state[pane];
                open = state.isVisible;

                // reset autoResize
                if (ar)
                    state.autoResize = ar;
                // resize BEFORE opening
                if (!open)
                    inst._sizePane(pane, s, false, false, false); // false=skipCallback/noAnimation/forceResize
                // open/close as necessary - DO NOT CHANGE THIS ORDER!
                if (h === true) inst.hide(pane, noAnimate);
                else if (c === true) inst.close(pane, false, noAnimate);
                else if (c === false) inst.open(pane, false, noAnimate);
                else if (h === false) inst.show(pane, false, noAnimate);
                // resize AFTER any other actions
                if (open)
                    inst._sizePane(pane, s, false, false, noAnimate); // animate resize if option passed
            });

            /*
			 *	RECURSE INTO CHILD-LAYOUTS
			 */
            if (opts.includeChildren) {
                var paneStateChildren, childState;
                $.each(inst.children, function (pane, paneChildren) {
                    paneStateChildren = data[pane] ? data[pane].children : 0;
                    if (paneStateChildren && paneChildren) {
                        $.each(paneChildren, function (stateKey, child) {
                            childState = paneStateChildren[stateKey];
                            if (child && childState)
                                child.loadState(childState);
                        });
                    }
                });
            }
        }
    }

        /**
         * Get the *current layout state* and return it as a hash
         *
         * @param {Object=}		inst	// Layout instance to get state for
         * @param {object=}		[opts]	// State-Managements override options
         */
    , readState: function (inst, opts) {
        // backward compatility
        if ($.type(opts) === 'string') opts = { keys: opts };
        if (!opts) opts = {};
        var sm = inst.options.stateManagement
		, ic = opts.includeChildren
		, recurse = ic !== undefined ? ic : sm.includeChildren
		, keys = opts.stateKeys || sm.stateKeys
		, alt = { isClosed: 'initClosed', isHidden: 'initHidden' }
		, state = inst.state
		, panes = $.layout.config.allPanes
		, data = {}
		, pair, pane, key, val
		, ps, pC, child, array, count, branch
        ;
        if ($.isArray(keys)) keys = keys.join(",");
        // convert keys to an array and change delimiters from '__' to '.'
        keys = keys.replace(/__/g, ".").split(',');
        // loop keys and create a data hash
        for (var i = 0, n = keys.length; i < n; i++) {
            pair = keys[i].split(".");
            pane = pair[0];
            key = pair[1];
            if ($.inArray(pane, panes) < 0) continue; // bad pane!
            val = state[pane][key];
            if (val == undefined) continue;
            if (key == "isClosed" && state[pane]["isSliding"])
                val = true; // if sliding, then *really* isClosed
            (data[pane] || (data[pane] = {}))[alt[key] ? alt[key] : key] = val;
        }

        // recurse into the child-layouts for each pane
        if (recurse) {
            $.each(panes, function (idx, pane) {
                pC = inst.children[pane];
                ps = state.stateData[pane];
                if ($.isPlainObject(pC) && !$.isEmptyObject(pC)) {
                    // ensure a key exists for this 'pane', eg: branch = data.center
                    branch = data[pane] || (data[pane] = {});
                    if (!branch.children) branch.children = {};
                    $.each(pC, function (key, child) {
                        // ONLY read state from an initialize layout
                        if (child.state.initialized)
                            branch.children[key] = $.layout.state.readState(child);
                            // if we have PREVIOUS (onLoad) state for this child-layout, KEEP IT!
                        else if (ps && ps.children && ps.children[key]) {
                            branch.children[key] = $.extend(true, {}, ps.children[key]);
                        }
                    });
                }
            });
        }

        return data;
    }

        /**
         *	Stringify a JSON hash so can save in a cookie or db-field
         */
    , encodeJSON: function (json) {
        var local = window.JSON || {};
        return (local.stringify || stringify)(json);

        function stringify(h) {
            var D = [], i = 0, k, v, t // k = key, v = value
			, a = $.isArray(h)
            ;
            for (k in h) {
                v = h[k];
                t = typeof v;
                if (t == 'string')		// STRING - add quotes
                    v = '"' + v + '"';
                else if (t == 'object')	// SUB-KEY - recurse into it
                    v = parse(v);
                D[i++] = (!a ? '"' + k + '":' : '') + v;
            }
            return (a ? '[' : '{') + D.join(',') + (a ? ']' : '}');
        };
    }

        /**
         *	Convert stringified JSON back to a hash object
         *	@see		$.parseJSON(), adding in jQuery 1.4.1
         */
    , decodeJSON: function (str) {
        try { return $.parseJSON ? $.parseJSON(str) : window["eval"]("(" + str + ")") || {}; }
        catch (e) { return {}; }
    }


    , _create: function (inst) {
        var s = $.layout.state
		, o = inst.options
		, sm = o.stateManagement
        ;
        //	ADD State-Management plugin methods to inst
        $.extend(inst, {
            //	readCookie - update options from cookie - returns hash of cookie data
            readCookie: function () { return s.readCookie(inst); }
            //	deleteCookie
       , deleteCookie: function () { s.deleteCookie(inst); }
            //	saveCookie - optionally pass keys-list and cookie-options (hash)
       , saveCookie: function (keys, cookieOpts) { return s.saveCookie(inst, keys, cookieOpts); }
            //	loadCookie - readCookie and use to loadState() - returns hash of cookie data
       , loadCookie: function () { return s.loadCookie(inst); }
            //	loadState - pass a hash of state to use to update options
       , loadState: function (stateData, opts) { s.loadState(inst, stateData, opts); }
            //	readState - returns hash of current layout-state
       , readState: function (keys) { return s.readState(inst, keys); }
            //	add JSON utility methods too...
       , encodeJSON: s.encodeJSON
       , decodeJSON: s.decodeJSON
        });

        // init state.stateData key, even if plugin is initially disabled
        inst.state.stateData = {};

        // autoLoad MUST BE one of: data-array, data-hash, callback-function, or TRUE
        if (!sm.autoLoad) return;

        //	When state-data exists in the autoLoad key USE IT,
        //	even if stateManagement.enabled == false
        if ($.isPlainObject(sm.autoLoad)) {
            if (!$.isEmptyObject(sm.autoLoad)) {
                inst.loadState(sm.autoLoad);
            }
        }
        else if (sm.enabled) {
            // update the options from cookie or callback
            // if options is a function, call it to get stateData
            if ($.isFunction(sm.autoLoad)) {
                var d = {};
                try {
                    d = sm.autoLoad(inst, inst.state, inst.options, inst.options.name || ''); // try to get data from fn
                } catch (e) { }
                if (d && $.isPlainObject(d) && !$.isEmptyObject(d))
                    inst.loadState(d);
            }
            else // any other truthy value will trigger loadCookie
                inst.loadCookie();
        }
    }

    , _unload: function (inst) {
        var sm = inst.options.stateManagement;
        if (sm.enabled && sm.autoSave) {
            // if options is a function, call it to save the stateData
            if ($.isFunction(sm.autoSave)) {
                try {
                    sm.autoSave(inst, inst.state, inst.options, inst.options.name || ''); // try to get data from fn
                } catch (e) { }
            }
            else // any truthy value will trigger saveCookie
                inst.saveCookie();
        }
    }

    };

    // add state initialization method to Layout's onCreate array of functions
    $.layout.onCreate.push($.layout.state._create);
    $.layout.onUnload.push($.layout.state._unload);

})(jQuery);



/**
 * @preserve jquery.layout.buttons 1.0
 * $Date: 2011-07-16 08:00:00 (Sat, 16 July 2011) $
 *
 * Copyright (c) 2011 
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @dependancies: UI Layout 1.3.0.rc30.1 or higher
 *
 * @support: http://groups.google.com/group/jquery-ui-layout
 *
 * Docs: [ to come ]
 * Tips: [ to come ]
 */
; (function ($) {

    if (!$.layout) return;


    // tell Layout that the state plugin is available
    $.layout.plugins.buttons = true;

    //	Add State-Management options to layout.defaults
    $.layout.defaults.autoBindCustomButtons = false;
    // Set stateManagement as a layout-option, NOT a pane-option
    $.layout.optionsMap.layout.push("autoBindCustomButtons");

    /*
     *	Button methods
     */
    $.layout.buttons = {
        // set data used by multiple methods below
        config: {
            borderPanes: "north,south,west,east"
        }

        /**
        * Searches for .ui-layout-button-xxx elements and auto-binds them as layout-buttons
        *
        * @see  _create()
        */
    , init: function (inst) {
        var pre = "ui-layout-button-"
		, layout = inst.options.name || ""
		, name;
        $.each("toggle,open,close,pin,toggle-slide,open-slide".split(","), function (i, action) {
            $.each($.layout.buttons.config.borderPanes.split(","), function (ii, pane) {
                $("." + pre + action + "-" + pane).each(function () {
                    // if button was previously 'bound', data.layoutName was set, but is blank if layout has no 'name'
                    name = $(this).data("layoutName") || $(this).attr("layoutName");
                    if (name == undefined || name === layout)
                        inst.bindButton(this, action, pane);
                });
            });
        });
    }

        /**
        * Helper function to validate params received by addButton utilities
        *
        * Two classes are added to the element, based on the buttonClass...
        * The type of button is appended to create the 2nd className:
        *  - ui-layout-button-pin
        *  - ui-layout-pane-button-toggle
        *  - ui-layout-pane-button-open
        *  - ui-layout-pane-button-close
        *
        * @param  {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
        * @param  {string}   			pane 		Name of the pane the button is for: 'north', 'south', etc.
        * @return {Array.<Object>}		If both params valid, the element matching 'selector' in a jQuery wrapper - otherwise returns null
        */
    , get: function (inst, selector, pane, action) {
        var $E = $(selector)
		, o = inst.options
        //,	err	= o.showErrorMessages
        ;
        if ($E.length && $.layout.buttons.config.borderPanes.indexOf(pane) >= 0) {
            var btn = o[pane].buttonClass + "-" + action;
            $E.addClass(btn + " " + btn + "-" + pane)
				.data("layoutName", o.name); // add layout identifier - even if blank!
        }
        return $E;
    }


        /**
        * NEW syntax for binding layout-buttons - will eventually replace addToggle, addOpen, etc.
        *
        * @param {(string|!Object)}	sel		jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
        * @param {string}			action
        * @param {string}			pane
        */
    , bind: function (inst, sel, action, pane) {
        var _ = $.layout.buttons;
        switch (action.toLowerCase()) {
            case "toggle": _.addToggle(inst, sel, pane); break;
            case "open": _.addOpen(inst, sel, pane); break;
            case "close": _.addClose(inst, sel, pane); break;
            case "pin": _.addPin(inst, sel, pane); break;
            case "toggle-slide": _.addToggle(inst, sel, pane, true); break;
            case "open-slide": _.addOpen(inst, sel, pane, true); break;
        }
        return inst;
    }

        /**
        * Add a custom Toggler button for a pane
        *
        * @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
        * @param {string}  			pane 		Name of the pane the button is for: 'north', 'south', etc.
        * @param {boolean=}			slide 		true = slide-open, false = pin-open
        */
    , addToggle: function (inst, selector, pane, slide) {
        $.layout.buttons.get(inst, selector, pane, "toggle")
			.click(function (evt) {
			    inst.toggle(pane, !!slide);
			    evt.stopPropagation();
			});
        return inst;
    }

        /**
        * Add a custom Open button for a pane
        *
        * @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
        * @param {string}			pane 		Name of the pane the button is for: 'north', 'south', etc.
        * @param {boolean=}			slide 		true = slide-open, false = pin-open
        */
    , addOpen: function (inst, selector, pane, slide) {
        $.layout.buttons.get(inst, selector, pane, "open")
			.attr("title", inst.options[pane].tips.Open)
			.click(function (evt) {
			    inst.open(pane, !!slide);
			    evt.stopPropagation();
			});
        return inst;
    }

        /**
        * Add a custom Close button for a pane
        *
        * @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
        * @param {string}   		pane 		Name of the pane the button is for: 'north', 'south', etc.
        */
    , addClose: function (inst, selector, pane) {
        $.layout.buttons.get(inst, selector, pane, "close")
			.attr("title", inst.options[pane].tips.Close)
			.click(function (evt) {
			    inst.close(pane);
			    evt.stopPropagation();
			});
        return inst;
    }

        /**
        * Add a custom Pin button for a pane
        *
        * Four classes are added to the element, based on the paneClass for the associated pane...
        * Assuming the default paneClass and the pin is 'up', these classes are added for a west-pane pin:
        *  - ui-layout-pane-pin
        *  - ui-layout-pane-west-pin
        *  - ui-layout-pane-pin-up
        *  - ui-layout-pane-west-pin-up
        *
        * @param {(string|!Object)}	selector	jQuery selector (or element) for button, eg: ".ui-layout-north .toggle-button"
        * @param {string}   		pane 		Name of the pane the pin is for: 'north', 'south', etc.
        */
    , addPin: function (inst, selector, pane) {
        var $E = $.layout.buttons.get(inst, selector, pane, "pin");
        if ($E.length) {
            var s = inst.state[pane];
            $E.click(function (evt) {
                $.layout.buttons.setPinState(inst, $(this), pane, (s.isSliding || s.isClosed));
                if (s.isSliding || s.isClosed) inst.open(pane); // change from sliding to open
                else inst.close(pane); // slide-closed
                evt.stopPropagation();
            });
            // add up/down pin attributes and classes
            $.layout.buttons.setPinState(inst, $E, pane, (!s.isClosed && !s.isSliding));
            // add this pin to the pane data so we can 'sync it' automatically
            // PANE.pins key is an array so we can store multiple pins for each pane
            s.pins.push(selector); // just save the selector string
        }
        return inst;
    }

        /**
        * Change the class of the pin button to make it look 'up' or 'down'
        *
        * @see  addPin(), syncPins()
        * @param {Array.<Object>}	$Pin	The pin-span element in a jQuery wrapper
        * @param {string}	pane	These are the params returned to callbacks by layout()
        * @param {boolean}	doPin	true = set the pin 'down', false = set it 'up'
        */
    , setPinState: function (inst, $Pin, pane, doPin) {
        var updown = $Pin.attr("pin");
        if (updown && doPin === (updown == "down")) return; // already in correct state
        var
			po = inst.options[pane]
		, lang = po.tips
		, pin = po.buttonClass + "-pin"
		, side = pin + "-" + pane
		, UP = pin + "-up " + side + "-up"
		, DN = pin + "-down " + side + "-down"
        ;
        $Pin
			.attr("pin", doPin ? "down" : "up") // logic
			.attr("title", doPin ? lang.Unpin : lang.Pin)
			.removeClass(doPin ? UP : DN)
			.addClass(doPin ? DN : UP)
        ;
    }

        /**
        * INTERNAL function to sync 'pin buttons' when pane is opened or closed
        * Unpinned means the pane is 'sliding' - ie, over-top of the adjacent panes
        *
        * @see  open(), close()
        * @param {string}	pane   These are the params returned to callbacks by layout()
        * @param {boolean}	doPin  True means set the pin 'down', False means 'up'
        */
    , syncPinBtns: function (inst, pane, doPin) {
        // REAL METHOD IS _INSIDE_ LAYOUT - THIS IS HERE JUST FOR REFERENCE
        $.each(state[pane].pins, function (i, selector) {
            $.layout.buttons.setPinState(inst, $(selector), pane, doPin);
        });
    }


    , _load: function (inst) {
        //	ADD Button methods to Layout Instance
        $.extend(inst, {
            bindButton: function (selector, action, pane) { return $.layout.buttons.bind(inst, selector, action, pane); }
            //	DEPRECATED METHODS...
		, addToggleBtn: function (selector, pane, slide) { return $.layout.buttons.addToggle(inst, selector, pane, slide); }
		, addOpenBtn: function (selector, pane, slide) { return $.layout.buttons.addOpen(inst, selector, pane, slide); }
		, addCloseBtn: function (selector, pane) { return $.layout.buttons.addClose(inst, selector, pane); }
		, addPinBtn: function (selector, pane) { return $.layout.buttons.addPin(inst, selector, pane); }
        });

        // init state array to hold pin-buttons
        for (var i = 0; i < 4; i++) {
            var pane = $.layout.buttons.config.borderPanes[i];
            inst.state[pane].pins = [];
        }

        // auto-init buttons onLoad if option is enabled
        if (inst.options.autoBindCustomButtons)
            $.layout.buttons.init(inst);
    }

    , _unload: function (inst) {
        // TODO: unbind all buttons???
    }

    };

    // add initialization method to Layout's onLoad array of functions
    $.layout.onLoad.push($.layout.buttons._load);
    //$.layout.onUnload.push( $.layout.buttons._unload );

})(jQuery);




/**
 * jquery.layout.browserZoom 1.0
 * $Date: 2011-12-29 08:00:00 (Thu, 29 Dec 2011) $
 *
 * Copyright (c) 2012 
 *   Kevin Dalman (http://allpro.net)
 *
 * Dual licensed under the GPL (http://www.gnu.org/licenses/gpl.html)
 * and MIT (http://www.opensource.org/licenses/mit-license.php) licenses.
 *
 * @requires: UI Layout 1.3.0.rc30.1 or higher
 *
 * @see: http://groups.google.com/group/jquery-ui-layout
 *
 * TODO: Extend logic to handle other problematic zooming in browsers
 * TODO: Add hotkey/mousewheel bindings to _instantly_ respond to these zoom event
 */
(function ($) {

    // tell Layout that the plugin is available
    $.layout.plugins.browserZoom = true;

    $.layout.defaults.browserZoomCheckInterval = 1000;
    $.layout.optionsMap.layout.push("browserZoomCheckInterval");

    /*
     *	browserZoom methods
     */
    $.layout.browserZoom = {

        _init: function (inst) {
            // abort if browser does not need this check
            if ($.layout.browserZoom.ratio() !== false)
                $.layout.browserZoom._setTimer(inst);
        }

    , _setTimer: function (inst) {
        // abort if layout destroyed or browser does not need this check
        if (inst.destroyed) return;
        var o = inst.options
		, s = inst.state
		//	don't need check if inst has parentLayout, but check occassionally in case parent destroyed!
		//	MINIMUM 100ms interval, for performance
		, ms = inst.hasParentLayout ? 5000 : Math.max(o.browserZoomCheckInterval, 100)
        ;
        // set the timer
        setTimeout(function () {
            if (inst.destroyed || !o.resizeWithWindow) return;
            var d = $.layout.browserZoom.ratio();
            if (d !== s.browserZoom) {
                s.browserZoom = d;
                inst.resizeAll();
            }
            // set a NEW timeout
            $.layout.browserZoom._setTimer(inst);
        }
		, ms);
    }

    , ratio: function () {
        var w = window
		, s = screen
		, d = document
		, dE = d.documentElement || d.body
		, b = $.layout.browser
		, v = b.version
		, r, sW, cW
        ;
        // we can ignore all browsers that fire window.resize event onZoom
        if (!b.msie || v > 8)
            return false; // don't need to track zoom
        if (s.deviceXDPI && s.systemXDPI) // syntax compiler hack
            return calc(s.deviceXDPI, s.systemXDPI);
        // everything below is just for future reference!
        if (b.webkit && (r = d.body.getBoundingClientRect))
            return calc((r.left - r.right), d.body.offsetWidth);
        if (b.webkit && (sW = w.outerWidth))
            return calc(sW, w.innerWidth);
        if ((sW = s.width) && (cW = dE.clientWidth))
            return calc(sW, cW);
        return false; // no match, so cannot - or don't need to - track zoom

        function calc(x, y) { return (parseInt(x, 10) / parseInt(y, 10) * 100).toFixed(); }
    }

    };
    // add initialization method to Layout's onLoad array of functions
    $.layout.onReady.push($.layout.browserZoom._init);


})(jQuery);




/**
 *	UI Layout Plugin: Slide-Offscreen Animation
 *
 *	Prevent panes from being 'hidden' so that an iframes/objects 
 *	does not reload/refresh when pane 'opens' again.
 *	This plug-in adds a new animation called "slideOffscreen".
 *	It is identical to the normal "slide" effect, but avoids hiding the element
 *
 *	Requires Layout 1.3.0.RC30.1 or later for Close offscreen
 *	Requires Layout 1.3.0.RC30.5 or later for Hide, initClosed & initHidden offscreen
 *
 *	Version:	1.1 - 2012-11-18
 *	Author:		Kevin Dalman (kevin@jquery-dev.com)
 *	@preserve	jquery.layout.slideOffscreen-1.1.js
 */
; (function ($) {

    // Add a new "slideOffscreen" effect
    if ($.effects) {

        // add an option so initClosed and initHidden will work
        $.layout.defaults.panes.useOffscreenClose = false; // user must enable when needed
        /* set the new animation as the default for all panes
        $.layout.defaults.panes.fxName = "slideOffscreen";
        */

        if ($.layout.plugins)
            $.layout.plugins.effects.slideOffscreen = true;

        // dupe 'slide' effect defaults as new effect defaults
        $.layout.effects.slideOffscreen = $.extend(true, {}, $.layout.effects.slide);

        // add new effect to jQuery UI
        $.effects.slideOffscreen = function (o) {
            return this.queue(function () {

                var fx = $.effects
                , opt = o.options
                , $el = $(this)
                , pane = $el.data('layoutEdge')
                , state = $el.data('parentLayout').state
                , dist = state[pane].size
                , s = this.style
                , props = ['top', 'bottom', 'left', 'right']
                    // Set options
                , mode = fx.setMode($el, opt.mode || 'show') // Set Mode
                , show = (mode == 'show')
                , dir = opt.direction || 'left' // Default Direction
                , ref = (dir == 'up' || dir == 'down') ? 'top' : 'left'
                , pos = (dir == 'up' || dir == 'left')
                , offscrn = $.layout.config.offscreenCSS || {}
                , keyLR = $.layout.config.offscreenReset
                , keyTB = 'offscreenResetTop' // only used internally
                , animation = {}
                ;
                // Animation settings
                animation[ref] = (show ? (pos ? '+=' : '-=') : (pos ? '-=' : '+=')) + dist;

                if (show) { // show() animation, so save top/bottom but retain left/right set when 'hidden'
                    $el.data(keyTB, { top: s.top, bottom: s.bottom });

                    // set the top or left offset in preparation for animation
                    // Note: ALL animations work by shifting the top or left edges
                    if (pos) { // top (north) or left (west)
                        $el.css(ref, isNaN(dist) ? "-" + dist : -dist); // Shift outside the left/top edge
                    }
                    else { // bottom (south) or right (east) - shift all the way across container
                        if (dir === 'right')
                            $el.css({ left: state.container.layoutWidth, right: 'auto' });
                        else // dir === bottom
                            $el.css({ top: state.container.layoutHeight, bottom: 'auto' });
                    }
                    // restore the left/right setting if is a top/bottom animation
                    if (ref === 'top')
                        $el.css($el.data(keyLR) || {});
                }
                else { // hide() animation, so save ALL CSS
                    $el.data(keyTB, { top: s.top, bottom: s.bottom });
                    $el.data(keyLR, { left: s.left, right: s.right });
                }

                // Animate
                $el.show().animate(animation, {
                    queue: false, duration: o.duration, easing: opt.easing, complete: function () {
                        // Restore top/bottom
                        if ($el.data(keyTB))
                            $el.css($el.data(keyTB)).removeData(keyTB);
                        if (show) // Restore left/right too
                            $el.css($el.data(keyLR) || {}).removeData(keyLR);
                        else // Move the pane off-screen (left: -99999, right: 'auto')
                            $el.css(offscrn);

                        if (o.callback) o.callback.apply(this, arguments); // Callback
                        $el.dequeue();
                    }
                });

            });
        };

    }

})(jQuery);;
	/**
	 * jQuery MD5 hash algorithm function
	 * 
	 * 	<code>
	 * 		Calculate the md5 hash of a String 
	 * 		String $.md5 ( String str )
	 * 	</code>
	 * 
	 * Calculates the MD5 hash of str using the » RSA Data Security, Inc. MD5 Message-Digest Algorithm, and returns that hash. 
	 * MD5 (Message-Digest algorithm 5) is a widely-used cryptographic hash function with a 128-bit hash value. MD5 has been employed in a wide variety of security applications, and is also commonly used to check the integrity of data. The generated hash is also non-reversable. Data cannot be retrieved from the message digest, the digest uniquely identifies the data.
	 * MD5 was developed by Professor Ronald L. Rivest in 1994. Its 128 bit (16 byte) message digest makes it a faster implementation than SHA-1.
	 * This script is used to process a variable length message into a fixed-length output of 128 bits using the MD5 algorithm. It is fully compatible with UTF-8 encoding. It is very useful when u want to transfer encrypted passwords over the internet. If you plan using UTF-8 encoding in your project don't forget to set the page encoding to UTF-8 (Content-Type meta tag). 
	 * This function orginally get from the WebToolkit and rewrite for using as the jQuery plugin.
	 * 
	 * Example
	 * 	Code
	 * 		<code>
	 * 			$.md5("I'm Persian."); 
	 * 		</code>
	 * 	Result
	 * 		<code>
	 * 			"b8c901d0f02223f9761016cfff9d68df"
	 * 		</code>
	 * 
	 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
	 * @link http://www.semnanweb.com/jquery-plugin/md5.html
	 * @see http://www.webtoolkit.info/
	 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
	 * @param {jQuery} {md5:function(string))
	 * @return string
	 */
	(function($){
		var rotateLeft = function(lValue, iShiftBits) {
			return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
		}
		var addUnsigned = function(lX, lY) {
			var lX4, lY4, lX8, lY8, lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
			if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			if (lX4 | lY4) {
				if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		}
		var F = function(x, y, z) {
			return (x & y) | ((~ x) & z);
		}
		var G = function(x, y, z) {
			return (x & z) | (y & (~ z));
		}
		var H = function(x, y, z) {
			return (x ^ y ^ z);
		}
		var I = function(x, y, z) {
			return (y ^ (x | (~ z)));
		}
		var FF = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		var GG = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		var HH = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		var II = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		var convertToWordArray = function(string) {
			var lWordCount;
			var lMessageLength = string.length;
			var lNumberOfWordsTempOne = lMessageLength + 8;
			var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
			var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
			var lWordArray = Array(lNumberOfWords - 1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while (lByteCount < lMessageLength) {
				lWordCount = (lByteCount - (lByteCount % 4)) / 4;
				lBytePosition = (lByteCount % 4) * 8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
			lBytePosition = (lByteCount % 4) * 8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
			lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
			lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
			return lWordArray;
		};
		var wordToHex = function(lValue) {
			var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
			for (lCount = 0; lCount <= 3; lCount++) {
				lByte = (lValue >>> (lCount * 8)) & 255;
				WordToHexValueTemp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
			}
			return WordToHexValue;
		};
		var uTF8Encode = function(string) {
			string = string.replace(/\x0d\x0a/g, "\x0a");
			var output = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					output += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					output += String.fromCharCode((c >> 6) | 192);
					output += String.fromCharCode((c & 63) | 128);
				} else {
					output += String.fromCharCode((c >> 12) | 224);
					output += String.fromCharCode(((c >> 6) & 63) | 128);
					output += String.fromCharCode((c & 63) | 128);
				}
			}
			return output;
		};
		$.extend({
			md5: function(string) {
				var x = Array();
				var k, AA, BB, CC, DD, a, b, c, d;
				var S11=7, S12=12, S13=17, S14=22;
				var S21=5, S22=9 , S23=14, S24=20;
				var S31=4, S32=11, S33=16, S34=23;
				var S41=6, S42=10, S43=15, S44=21;
				string = uTF8Encode(string);
				x = convertToWordArray(string);
				a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
				for (k = 0; k < x.length; k += 16) {
					AA = a; BB = b; CC = c; DD = d;
					a = FF(a, b, c, d, x[k+0],  S11, 0xD76AA478);
					d = FF(d, a, b, c, x[k+1],  S12, 0xE8C7B756);
					c = FF(c, d, a, b, x[k+2],  S13, 0x242070DB);
					b = FF(b, c, d, a, x[k+3],  S14, 0xC1BDCEEE);
					a = FF(a, b, c, d, x[k+4],  S11, 0xF57C0FAF);
					d = FF(d, a, b, c, x[k+5],  S12, 0x4787C62A);
					c = FF(c, d, a, b, x[k+6],  S13, 0xA8304613);
					b = FF(b, c, d, a, x[k+7],  S14, 0xFD469501);
					a = FF(a, b, c, d, x[k+8],  S11, 0x698098D8);
					d = FF(d, a, b, c, x[k+9],  S12, 0x8B44F7AF);
					c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
					b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
					a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
					d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
					c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
					b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
					a = GG(a, b, c, d, x[k+1],  S21, 0xF61E2562);
					d = GG(d, a, b, c, x[k+6],  S22, 0xC040B340);
					c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
					b = GG(b, c, d, a, x[k+0],  S24, 0xE9B6C7AA);
					a = GG(a, b, c, d, x[k+5],  S21, 0xD62F105D);
					d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
					c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
					b = GG(b, c, d, a, x[k+4],  S24, 0xE7D3FBC8);
					a = GG(a, b, c, d, x[k+9],  S21, 0x21E1CDE6);
					d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
					c = GG(c, d, a, b, x[k+3],  S23, 0xF4D50D87);
					b = GG(b, c, d, a, x[k+8],  S24, 0x455A14ED);
					a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
					d = GG(d, a, b, c, x[k+2],  S22, 0xFCEFA3F8);
					c = GG(c, d, a, b, x[k+7],  S23, 0x676F02D9);
					b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
					a = HH(a, b, c, d, x[k+5],  S31, 0xFFFA3942);
					d = HH(d, a, b, c, x[k+8],  S32, 0x8771F681);
					c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
					b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
					a = HH(a, b, c, d, x[k+1],  S31, 0xA4BEEA44);
					d = HH(d, a, b, c, x[k+4],  S32, 0x4BDECFA9);
					c = HH(c, d, a, b, x[k+7],  S33, 0xF6BB4B60);
					b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
					a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
					d = HH(d, a, b, c, x[k+0],  S32, 0xEAA127FA);
					c = HH(c, d, a, b, x[k+3],  S33, 0xD4EF3085);
					b = HH(b, c, d, a, x[k+6],  S34, 0x4881D05);
					a = HH(a, b, c, d, x[k+9],  S31, 0xD9D4D039);
					d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
					c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
					b = HH(b, c, d, a, x[k+2],  S34, 0xC4AC5665);
					a = II(a, b, c, d, x[k+0],  S41, 0xF4292244);
					d = II(d, a, b, c, x[k+7],  S42, 0x432AFF97);
					c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
					b = II(b, c, d, a, x[k+5],  S44, 0xFC93A039);
					a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
					d = II(d, a, b, c, x[k+3],  S42, 0x8F0CCC92);
					c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
					b = II(b, c, d, a, x[k+1],  S44, 0x85845DD1);
					a = II(a, b, c, d, x[k+8],  S41, 0x6FA87E4F);
					d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
					c = II(c, d, a, b, x[k+6],  S43, 0xA3014314);
					b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
					a = II(a, b, c, d, x[k+4],  S41, 0xF7537E82);
					d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
					c = II(c, d, a, b, x[k+2],  S43, 0x2AD7D2BB);
					b = II(b, c, d, a, x[k+9],  S44, 0xEB86D391);
					a = addUnsigned(a, AA);
					b = addUnsigned(b, BB);
					c = addUnsigned(c, CC);
					d = addUnsigned(d, DD);
				}
				var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
				return tempValue.toLowerCase();
			}
		});
	})(jQuery);
;
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', {expires: 7, path: '/', domain: 'jquery.com', secure: true});
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        var path = options.path ? '; path=' + options.path : '';
        var domain = options.domain ? '; domain=' + options.domain : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};;