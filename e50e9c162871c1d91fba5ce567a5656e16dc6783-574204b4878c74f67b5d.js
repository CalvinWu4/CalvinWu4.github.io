/*! For license information please see e50e9c162871c1d91fba5ce567a5656e16dc6783-574204b4878c74f67b5d.js.LICENSE.txt */
(self.webpackChunkcalvin_wu_personal_website=self.webpackChunkcalvin_wu_personal_website||[]).push([[569],{115:function(t){var e="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var s,c,l,f;if(Array.isArray(t)){if((s=t.length)!=i.length)return!1;for(c=s;0!=c--;)if(!a(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(f=t.entries();!(c=f.next()).done;)if(!i.has(c.value[0]))return!1;for(f=t.entries();!(c=f.next()).done;)if(!a(c.value[1],i.get(c.value[0])))return!1;return!0}if(n&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(f=t.entries();!(c=f.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((s=t.length)!=i.length)return!1;for(c=s;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"==typeof t.valueOf&&"function"==typeof i.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString&&"function"==typeof t.toString&&"function"==typeof i.toString)return t.toString()===i.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(e&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!a(t[l[c]],i[l[c]]))return!1;return!0}return t!=t&&i!=i}t.exports=function(t,e){try{return a(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2098:function(t,e,r){"use strict";var n,o=r(6540),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function f(){c=t(l.map((function(t){return t.props}))),u.canUseDOM?e(c):r&&(c=r(c))}var u=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,l=[],t};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),f()},i.componentDidUpdate=function(){f()},i.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),f()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(u,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),i(u,"canUseDOM",s),u}}},2485:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&t.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&t.push(s)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},2799:function(t,e){"use strict";var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,u=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,h=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function x(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case f:case u:case a:case s:case i:case p:return t;default:switch(t=t&&t.$$typeof){case l:case d:case h:case y:case c:return t;default:return e}}case o:return e}}}function S(t){return x(t)===u}e.AsyncMode=f,e.ConcurrentMode=u,e.ContextConsumer=l,e.ContextProvider=c,e.Element=n,e.ForwardRef=d,e.Fragment=a,e.Lazy=h,e.Memo=y,e.Portal=o,e.Profiler=s,e.StrictMode=i,e.Suspense=p,e.isAsyncMode=function(t){return S(t)||x(t)===f},e.isConcurrentMode=S,e.isContextConsumer=function(t){return x(t)===l},e.isContextProvider=function(t){return x(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===n},e.isForwardRef=function(t){return x(t)===d},e.isFragment=function(t){return x(t)===a},e.isLazy=function(t){return x(t)===h},e.isMemo=function(t){return x(t)===y},e.isPortal=function(t){return x(t)===o},e.isProfiler=function(t){return x(t)===s},e.isStrictMode=function(t){return x(t)===i},e.isSuspense=function(t){return x(t)===p},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===a||t===u||t===s||t===i||t===p||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===y||t.$$typeof===c||t.$$typeof===l||t.$$typeof===d||t.$$typeof===b||t.$$typeof===v||t.$$typeof===w||t.$$typeof===g)},e.typeOf=x},3048:function(t,e,r){"use strict";var n=r(2485),o=r.n(n),a=r(6540),i=r(6519),s=r(4848);const c=a.forwardRef((({bsPrefix:t,fluid:e=!1,as:r="div",className:n,...a},c)=>{const l=(0,i.oU)(t,"container"),f="string"==typeof e?`-${e}`:"-fluid";return(0,s.jsx)(r,{ref:c,...a,className:o()(n,e?`${l}${f}`:l)})}));c.displayName="Container",e.A=c},4146:function(t,e,r){"use strict";var n=r(4363),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(t){return n.isMemo(t)?i:s[t.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var l=Object.defineProperty,f=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;t.exports=function t(e,r,n){if("string"!=typeof r){if(m){var o=p(r);o&&o!==m&&t(e,o,n)}var i=f(r);u&&(i=i.concat(u(r)));for(var s=c(e),y=c(r),h=0;h<i.length;++h){var g=i[h];if(!(a[g]||n&&n[g]||y&&y[g]||s&&s[g])){var b=d(r,g);try{l(e,g,b)}catch(v){}}}}return e}},4363:function(t,e,r){"use strict";t.exports=r(2799)},4634:function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(null,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},6519:function(t,e,r){"use strict";r.d(e,{Jm:function(){return f},gy:function(){return l},oU:function(){return c}});var n=r(6540);r(4848);const o=["xxl","xl","lg","md","sm","xs"],a=n.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"}),{Consumer:i,Provider:s}=a;function c(t,e){const{prefixes:r}=(0,n.useContext)(a);return t||r[e]||e}function l(){const{breakpoints:t}=(0,n.useContext)(a);return t}function f(){const{minBreakpoint:t}=(0,n.useContext)(a);return t}},8154:function(t,e,r){"use strict";r.d(e,{m:function(){return pt}});var n,o,a,i,s=r(5556),c=r.n(s),l=r(2098),f=r.n(l),u=r(115),d=r.n(u),p=r(6540),m=r(8828),y=r.n(m),h="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(t){return v[t]})),"charset"),x="cssText",S="href",C="http-equiv",T="innerHTML",k="itemprop",A="name",O="property",E="rel",j="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},$="defaultTitle",N="defer",M="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",z=Object.keys(P).reduce((function(t,e){return t[P[e]]=e,t}),{}),Y=[v.NOSCRIPT,v.SCRIPT,v.STYLE],L="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},X=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},B=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(t){var e=K(t,v.TITLE),r=K(t,R);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=K(t,$);return e||n||void 0},H=function(t){return K(t,_)||function(){}},U=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return F({},t,e)}),{})},q=function(t,e){return e.filter((function(t){return void 0!==t[v.BASE]})).map((function(t){return t[v.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==t.indexOf(a)&&r[a])return e.concat(r)}return e}),[])},G=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&et("Helmet: "+t+' should be of type "Array". Instead found type "'+D(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,a=Object.keys(t),i=0;i<a.length;i++){var s=a[i],c=s.toLowerCase();-1===e.indexOf(c)||r===E&&"canonical"===t[r].toLowerCase()||c===E&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||s!==T&&s!==x&&s!==k||(r=s)}if(!r||!t[r])return!1;var l=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var s=a[i],c=y()({},n[s],o[s]);n[s]=c}return t}),[]).reverse()},K=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},J=(n=Date.now(),function(t){var e=Date.now();e-n>16?(n=e,t(e)):setTimeout((function(){J(t)}),0)}),Z=function(t){return clearTimeout(t)},Q="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,tt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:r.g.cancelAnimationFrame||Z,et=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},rt=null,nt=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,f=t.styleTags,u=t.title,d=t.titleAttributes;it(v.BODY,n),it(v.HTML,o),at(u,d);var p={baseTag:st(v.BASE,r),linkTags:st(v.LINK,a),metaTags:st(v.META,i),noscriptTags:st(v.NOSCRIPT,s),scriptTags:st(v.SCRIPT,l),styleTags:st(v.STYLE,f)},m={},y={};Object.keys(p).forEach((function(t){var e=p[t],r=e.newTags,n=e.oldTags;r.length&&(m[t]=r),n.length&&(y[t]=p[t].oldTags)})),e&&e(),c(t,m,y)},ot=function(t){return Array.isArray(t)?t.join(""):t},at=function(t,e){void 0!==t&&document.title!==t&&(document.title=ot(t)),it(v.TITLE,e)},it=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(L),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(e),s=0;s<i.length;s++){var c=i[s],l=e[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var f=a.indexOf(c);-1!==f&&a.splice(f,1)}for(var u=a.length-1;u>=0;u--)r.removeAttribute(a[u]);o.length===a.length?r.removeAttribute(L):r.getAttribute(L)!==i.join(",")&&r.setAttribute(L,i.join(","))}},st=function(t,e){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(t+"["+L+"]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===T)r.innerHTML=e.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[n]?"":e[n];r.setAttribute(n,s)}r.setAttribute(L,"true"),o.some((function(t,e){return i=e,r.isEqualNode(t)}))?o.splice(i,1):a.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),a.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:a}},ct=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[P[r]||r]=t[r],e}),e)},ft=function(t,e,r){switch(t){case v.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[L]=!0,o=lt(r,n),[p.createElement(v.TITLE,o,t)];var t,r,n,o},toString:function(){return function(t,e,r,n){var o=ct(r),a=ot(e);return o?"<"+t+" "+L+'="true" '+o+">"+B(a,n)+"</"+t+">":"<"+t+" "+L+'="true">'+B(a,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case h:case g:return{toComponent:function(){return lt(e)},toString:function(){return ct(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,o=((n={key:r})[L]=!0,n);return Object.keys(e).forEach((function(t){var r=P[t]||t;if(r===T||r===x){var n=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=e[t]})),p.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===T||t===x)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+B(n[e],r)+'"';return t?t+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===Y.indexOf(t);return e+"<"+t+" "+L+'="true" '+o+(i?"/>":">"+a+"</"+t+">")}),"")}(t,e,r)}}}},ut=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,a=t.linkTags,i=t.metaTags,s=t.noscriptTags,c=t.scriptTags,l=t.styleTags,f=t.title,u=void 0===f?"":f,d=t.titleAttributes;return{base:ft(v.BASE,e,n),bodyAttributes:ft(h,r,n),htmlAttributes:ft(g,o,n),link:ft(v.LINK,a,n),meta:ft(v.META,i,n),noscript:ft(v.NOSCRIPT,s,n),script:ft(v.SCRIPT,c,n),style:ft(v.STYLE,l,n),title:ft(v.TITLE,{title:u,titleAttributes:d},n)}},dt=f()((function(t){return{baseTag:q([S,I],t),bodyAttributes:U(h,t),defer:K(t,N),encode:K(t,M),htmlAttributes:U(g,t),linkTags:G(v.LINK,[E,S],t),metaTags:G(v.META,[A,w,C,O,k],t),noscriptTags:G(v.NOSCRIPT,[T],t),onChangeClientState:H(t),scriptTags:G(v.SCRIPT,[j,T],t),styleTags:G(v.STYLE,[x],t),title:W(t),titleAttributes:U(b,t)}}),(function(t){rt&&tt(rt),t.defer?rt=Q((function(){nt(t,(function(){rt=null}))})):(nt(t),rt=null)}),ut)((function(){return null})),pt=(o=dt,i=a=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:e};case v.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return F({},n,((e={})[r.type]=[].concat(n[r.type]||[],[F({},o,this.mapNestedChildrenToProps(r,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,a=t.newChildProps,i=t.nestedChildren;switch(n.type){case v.TITLE:return F({},o,((e={})[n.type]=i,e.titleAttributes=F({},a),e));case v.BODY:return F({},o,{bodyAttributes:F({},a)});case v.HTML:return F({},o,{htmlAttributes:F({},a)})}return F({},o,((r={})[n.type]=F({},a),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=F({},e);return Object.keys(t).forEach((function(e){var n;r=F({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return p.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,a=o.children,i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[z[r]||r]=t[r],e}),e)}(X(o,["children"]));switch(r.warnOnInvalidChildren(t,a),t.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:i,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=X(t,["children"]),n=F({},r);return e&&(n=this.mapChildrenToProps(e,n)),p.createElement(o,n)},V(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(p.Component),a.propTypes={base:c().object,bodyAttributes:c().object,children:c().oneOfType([c().arrayOf(c().node),c().node]),defaultTitle:c().string,defer:c().bool,encodeSpecialCharacters:c().bool,htmlAttributes:c().object,link:c().arrayOf(c().object),meta:c().arrayOf(c().object),noscript:c().arrayOf(c().object),onChangeClientState:c().func,script:c().arrayOf(c().object),style:c().arrayOf(c().object),title:c().string,titleAttributes:c().object,titleTemplate:c().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var t=o.rewind();return t||(t=ut({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},i);pt.renderStatic=pt.rewind},8338:function(t,e,r){"use strict";t.exports=r(9998)},8433:function(t,e,r){"use strict";r.d(e,{Wx:function(){return u},FJ:function(){return m},CT:function(){return d},aH:function(){return y},$s:function(){return h},Rb:function(){return l},l4:function(){return f},F9:function(){return p}});let n=(t=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(t|=0));for(;t--;)e+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&r[t]];return e};var o=r.p+"static/rit-b68dd47a6b52416d5911bd5b82bafa1b.jpg",a=r.p+"static/trinity-church-a5dc70547cf93b73a6abbb1bd97921eb.jpg",i=r.p+"static/espn-c747c29c8d2c2bbc68df967be0eb20cb.jpg",s=r.p+"static/stuyvesant-7d1b367715be6ec897b52b24f17b9fb8.jpg",c=r.p+"static/docusign-80f519e5c65b0cab0714922a315ad790.jpg";const l={title:"Calvin Wu",lang:"en",description:""},f={title:"Hi, I'm",name:"Calvin Wu",subtitle:"I'm a developer",cta:"Know more"},u={img:"profile.png",paragraphOne:"I was born and raised in Brooklyn but moved to San Francisco after college to start my career in tech.",paragraphTwo:"My passions include snowboarding, live music, reading, and traveling. I have a strong interest in healthy living, and I would say that my workout is my favorite part of the day. I enjoy all types of exercise, from running and lifting weights to practicing yoga. Additionally, I am obsessed with contrast therapy.",resume:"https://1drv.ms/b/c/ab50118a714aae82/EWZwtgCItwZKhm4pxpJZRKEBzzmO7r15QqkZnzd-kDjuvw?e=08aN9X"},d=[{id:n(),img:c,organization:"DocuSign",title:"Front End Software Engineer/QA Engineer",location:"San Francisco, CA",url:"https://www.docusign.com/",date:"Apr '21 - Aug '23",color:"#228B22",description:"DocuSign was my first job after college, and it allowed me to fulfill my dream of moving to California. I started as a software development engineer in test, where I assisted in migrating the existing Selenium-based test automation to Playwright. Later, I transitioned into a front-end software engineer role, where I led the development of the Document Field Assist feature. This feature utilized AI to predict fields for uploaded documents and was rolled out to thousands of enterprise customers, saving them up to 95% of their time in the envelope sending process."},{id:n(),img:o,organization:"Rochester Institute of Technology",title:"BS in Software Engineering, Minor in Business Administration",location:"Rochester, NY",url:"https://www.rit.edu/",date:"Class of 2020",color:"#F76902",description:"I entered RIT as a business major, but soon decided to switch to software engineering. Despite the brutal winters and stressful workloads, I really found a home in the nerdy culture here. For our 4-person senior project, we created a data warehousing ETL service to enable more BI reports from OnGuard, an enterprise grade access control and alarm monitoring system.\n."},{id:n(),img:i,organization:"ESPN (Walt Disney Direct-to-Consumer & International)",title:"Front End Software Engineer Intern",location:"Bristol, Connecticut",url:"https://www.espn.com/",date:"Sep '19 - Dec '19",color:"#CD242E",description:"At ESPN I worked on fixing customer-reported bugs and redesigning watchespn.com. I also wrote helpful scripts that users could activate to easily change from the dev to prod website and vice-versa. During my time here, I shared a hotel with fellow interns and became life-long friends with them."},{id:n(),img:a,organization:"Trinity Church Wall Street",title:"IT Intern",location:"New York, NY",url:"https://www.trinitywallstreet.org/",date:"Jun '18 - Sep '19",color:"black",description:"If you're curious about why a church has an IT department, it's because Trinity was granted land by the queen in 1705 and has since become a non-profit organization funded by its real estate ventures. As a solo developer here, I had the opportunity to make design decisions, work across the stack, and learn front-end development. The main project I focused on was creating a web calendar that displays a year view, intended to replace the whiteboard yearly planner that the rector was using."},{id:n(),img:s,organization:"Stuyvesant High School",title:"Regents Diploma with Advanced Designation with Honors",location:"New York, NY",url:"https://stuy.enschool.org/",date:"Class of 2015",color:"#21366d",description:"If it hadn't been for Stuyvesant, which inspired my love of learning, I wouldn't be the person I am today—someone who enjoys museums, classics, journalism, and politics. This school also instilled a strong go-getter culture in me."}],p=[{id:n(),img:"inDoors.png",title:"inDoors",info:"An extension that displays companies' Glassdoor ratings on LinkedIn and other job sites.",info2:"This was the first extension that I made and it was out of frustration from constantly searching companies on Glassdoor while applying to jobs. I received lots of love from r/cscareerquestions for making this extension which motivated me to continue doing open-source work.",url:"https://github.com/CalvinWu4/inDoors",achievement:"2000+ Users"},{id:n(),img:"rate-my-professor-rit.png",title:"RIT Rate My Professors Extension",info:"An extension for RIT students that shows the Rate My Professors rating of professors while searching for classes.",info2:"I noticed that there are dozens of Rate My Professor extensions out there created for different colleges by their students. Despite having already graduated, I decided to create the best version of this extension yet as a thank you to my alma mater.",url:"https://github.com/CalvinWu4/RIT-Rate-My-Professors-Extension",achievement:"100+ Users"},{id:n(),img:"any-college.png",title:"Any School Rate My Professors Extension",info:"A school-agnostic version of the RIT Rate My Professors Extension that I made. To add support for their college's website, students fill out a public Airtable with the site's URL, CSS selectors for the elements containing the professor names, and name of the college as can be found on ratemyprofessors.com. They can then go to the site and click on the extension which prompts for permission to add the ratings.",info2:"I wanted to bring to this extension to my friends who are attending other schools and save college students everywhere from having to create a Rate My Professors extension ever again.",url:"https://github.com/CalvinWu4/Any-School-Rate-My-Professors-Extension",achievement:"500+ Users"}],m={cta:"Feel free to email me about job opportunities or ideas",btn:"Email",email:"calvinwu4@gmail.com"},y={networks:[{id:n(),name:"linkedin-in",url:"https://www.linkedin.com/in/calvin-wu/"},{id:n(),name:"github",url:"https://github.com/CalvinWu4"},{id:n(),name:"goodreads-g",url:"https://www.goodreads.com/calvinwu"},{id:n(),name:"strava",url:"https://www.strava.com/athletes/calvinwu"}]},h={isEnabled:!1}},8828:function(t){"use strict";t.exports=Object.assign},9731:function(t,e,r){"use strict";r.d(e,{zW:function(){return Pe}});var n=r(4848),o=r(6540),a=r.t(o,2);var i=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),void 0!==t.nonce&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}(this));var e=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(e);try{r.insertRule(t,r.cssRules.length)}catch(n){}}else e.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach((function(t){var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)})),this.tags=[],this.ctr=0},t}(),s=Math.abs,c=String.fromCharCode,l=Object.assign;function f(t){return t.trim()}function u(t,e,r){return t.replace(e,r)}function d(t,e){return t.indexOf(e)}function p(t,e){return 0|t.charCodeAt(e)}function m(t,e,r){return t.slice(e,r)}function y(t){return t.length}function h(t){return t.length}function g(t,e){return e.push(t),t}var b=1,v=1,w=0,x=0,S=0,C="";function T(t,e,r,n,o,a,i){return{value:t,root:e,parent:r,type:n,props:o,children:a,line:b,column:v,length:i,return:""}}function k(t,e){return l(T("",null,null,"",null,null,0),t,{length:-t.length},e)}function A(){return S=x>0?p(C,--x):0,v--,10===S&&(v=1,b--),S}function O(){return S=x<w?p(C,x++):0,v++,10===S&&(v=1,b++),S}function E(){return p(C,x)}function j(){return x}function I(t,e){return m(C,t,e)}function P(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $(t){return b=v=1,w=y(C=t),x=0,[]}function N(t){return C="",t}function M(t){return f(I(x-1,z(91===t?t+2:40===t?t+1:t)))}function _(t){for(;(S=E())&&S<33;)O();return P(t)>2||P(S)>3?"":" "}function R(t,e){for(;--e&&O()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return I(t,j()+(e<6&&32==E()&&32==O()))}function z(t){for(;O();)switch(S){case t:return x;case 34:case 39:34!==t&&39!==t&&z(S);break;case 40:41===t&&z(t);break;case 92:O()}return x}function Y(t,e){for(;O()&&t+S!==57&&(t+S!==84||47!==E()););return"/*"+I(e,x-1)+"*"+c(47===t?t:O())}function L(t){for(;!P(E());)O();return I(t,x)}var D="-ms-",V="-moz-",F="-webkit-",X="comm",B="rule",W="decl",H="@keyframes";function U(t,e){for(var r="",n=h(t),o=0;o<n;o++)r+=e(t[o],o,t,e)||"";return r}function q(t,e,r,n){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case W:return t.return=t.return||t.value;case X:return"";case H:return t.return=t.value+"{"+U(t.children,n)+"}";case B:t.value=t.props.join(",")}return y(r=U(t.children,n))?t.return=t.value+"{"+r+"}":""}function G(t){return N(K("",null,null,null,[""],t=$(t),0,[0],t))}function K(t,e,r,n,o,a,i,s,l){for(var f=0,m=0,h=i,b=0,v=0,w=0,x=1,S=1,C=1,T=0,k="",I=o,P=a,$=n,N=k;S;)switch(w=T,T=O()){case 40:if(108!=w&&58==p(N,h-1)){-1!=d(N+=u(M(T),"&","&\f"),"&\f")&&(C=-1);break}case 34:case 39:case 91:N+=M(T);break;case 9:case 10:case 13:case 32:N+=_(w);break;case 92:N+=R(j()-1,7);continue;case 47:switch(E()){case 42:case 47:g(Z(Y(O(),j()),e,r),l);break;default:N+="/"}break;case 123*x:s[f++]=y(N)*C;case 125*x:case 59:case 0:switch(T){case 0:case 125:S=0;case 59+m:-1==C&&(N=u(N,/\f/g,"")),v>0&&y(N)-h&&g(v>32?Q(N+";",n,r,h-1):Q(u(N," ","")+";",n,r,h-2),l);break;case 59:N+=";";default:if(g($=J(N,e,r,f,m,o,s,k,I=[],P=[],h),a),123===T)if(0===m)K(N,e,$,$,I,a,h,s,P);else switch(99===b&&110===p(N,3)?100:b){case 100:case 108:case 109:case 115:K(t,$,$,n&&g(J(t,$,$,0,0,o,s,k,o,I=[],h),P),o,P,h,s,n?I:P);break;default:K(N,$,$,$,[""],P,0,s,P)}}f=m=v=0,x=C=1,k=N="",h=i;break;case 58:h=1+y(N),v=w;default:if(x<1)if(123==T)--x;else if(125==T&&0==x++&&125==A())continue;switch(N+=c(T),T*x){case 38:C=m>0?1:(N+="\f",-1);break;case 44:s[f++]=(y(N)-1)*C,C=1;break;case 64:45===E()&&(N+=M(O())),b=E(),m=h=y(k=N+=L(j())),T++;break;case 45:45===w&&2==y(N)&&(x=0)}}return a}function J(t,e,r,n,o,a,i,c,l,d,p){for(var y=o-1,g=0===o?a:[""],b=h(g),v=0,w=0,x=0;v<n;++v)for(var S=0,C=m(t,y+1,y=s(w=i[v])),k=t;S<b;++S)(k=f(w>0?g[S]+" "+C:u(C,/&\f/g,g[S])))&&(l[x++]=k);return T(t,e,r,0===o?B:c,l,d,p)}function Z(t,e,r){return T(t,e,r,X,c(S),m(t,2,-2),0)}function Q(t,e,r,n){return T(t,e,r,W,m(t,0,n),m(t,n+1,-1),n)}var tt=function(t,e,r){for(var n=0,o=0;n=o,o=E(),38===n&&12===o&&(e[r]=1),!P(o);)O();return I(t,x)},et=function(t,e){return N(function(t,e){var r=-1,n=44;do{switch(P(n)){case 0:38===n&&12===E()&&(e[r]=1),t[r]+=tt(x-1,e,r);break;case 2:t[r]+=M(n);break;case 4:if(44===n){t[++r]=58===E()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=c(n)}}while(n=O());return t}($(t),e))},rt=new WeakMap,nt=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,n=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||rt.get(r))&&!n){rt.set(t,!0);for(var o=[],a=et(e,o),i=r.props,s=0,c=0;s<a.length;s++)for(var l=0;l<i.length;l++,c++)t.props[c]=o[s]?a[s].replace(/&\f/g,i[l]):i[l]+" "+a[s]}}},ot=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}};function at(t,e){switch(function(t,e){return 45^p(t,0)?(((e<<2^p(t,0))<<2^p(t,1))<<2^p(t,2))<<2^p(t,3):0}(t,e)){case 5103:return F+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return F+t+V+t+D+t+t;case 6828:case 4268:return F+t+D+t+t;case 6165:return F+t+D+"flex-"+t+t;case 5187:return F+t+u(t,/(\w+).+(:[^]+)/,F+"box-$1$2"+D+"flex-$1$2")+t;case 5443:return F+t+D+"flex-item-"+u(t,/flex-|-self/,"")+t;case 4675:return F+t+D+"flex-line-pack"+u(t,/align-content|flex-|-self/,"")+t;case 5548:return F+t+D+u(t,"shrink","negative")+t;case 5292:return F+t+D+u(t,"basis","preferred-size")+t;case 6060:return F+"box-"+u(t,"-grow","")+F+t+D+u(t,"grow","positive")+t;case 4554:return F+u(t,/([^-])(transform)/g,"$1"+F+"$2")+t;case 6187:return u(u(u(t,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),t,"")+t;case 5495:case 3959:return u(t,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return u(u(t,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+t+t;case 4095:case 3583:case 4068:case 2532:return u(t,/(.+)-inline(.+)/,F+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(y(t)-1-e>6)switch(p(t,e+1)){case 109:if(45!==p(t,e+4))break;case 102:return u(t,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+V+(108==p(t,e+3)?"$3":"$2-$3"))+t;case 115:return~d(t,"stretch")?at(u(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(115!==p(t,e+1))break;case 6444:switch(p(t,y(t)-3-(~d(t,"!important")&&10))){case 107:return u(t,":",":"+F)+t;case 101:return u(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(45===p(t,14)?"inline-":"")+"box$3$1"+F+"$2$3$1"+D+"$2box$3")+t}break;case 5936:switch(p(t,e+11)){case 114:return F+t+D+u(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return F+t+D+u(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return F+t+D+u(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return F+t+D+t+t}return t}var it=[function(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case W:t.return=at(t.value,t.length);break;case H:return U([k(t,{value:u(t.value,"@","@"+F)})],n);case B:if(t.length)return function(t,e){return t.map(e).join("")}(t.props,(function(e){switch(function(t,e){return(t=e.exec(t))?t[0]:t}(e,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([k(t,{props:[u(e,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return U([k(t,{props:[u(e,/:(plac\w+)/,":"+F+"input-$1")]}),k(t,{props:[u(e,/:(plac\w+)/,":-moz-$1")]}),k(t,{props:[u(e,/:(plac\w+)/,D+"input-$1")]})],n)}return""}))}}],st=function(t){var e=t.key;if("css"===e){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))}))}var n,o,a=t.stylisPlugins||it,s={},c=[];n=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),(function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)s[e[r]]=!0;c.push(t)}));var l,f,u,d,p=[q,(d=function(t){l.insert(t)},function(t){t.root||(t=t.return)&&d(t)})],m=(f=[nt,ot].concat(a,p),u=h(f),function(t,e,r,n){for(var o="",a=0;a<u;a++)o+=f[a](t,e,r,n)||"";return o});o=function(t,e,r,n){l=r,U(G(t?t+"{"+e.styles+"}":e.styles),m),n&&(y.inserted[e.name]=!0)};var y={key:e,sheet:new i({key:e,container:n,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:o};return y.sheet.hydrate(c),y};function ct(t,e,r){var n="";return r.split(" ").forEach((function(r){void 0!==t[r]?e.push(t[r]+";"):r&&(n+=r+" ")})),n}var lt=function(t,e,r){var n=t.key+"-"+e.name;!1===r&&void 0===t.registered[n]&&(t.registered[n]=e.styles)},ft=function(t,e,r){lt(t,e,r);var n=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var o=e;do{t.insert(e===o?"."+n:"",o,t.sheet,!0),o=o.next}while(void 0!==o)}};var ut={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function dt(t){var e=Object.create(null);return function(r){return void 0===e[r]&&(e[r]=t(r)),e[r]}}var pt=/[A-Z]|^ms/g,mt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,yt=function(t){return 45===t.charCodeAt(1)},ht=function(t){return null!=t&&"boolean"!=typeof t},gt=dt((function(t){return yt(t)?t:t.replace(pt,"-$&").toLowerCase()})),bt=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(mt,(function(t,e,r){return wt={name:e,styles:r,next:wt},e}))}return 1===ut[t]||yt(t)||"number"!=typeof e||0===e?e:e+"px"};function vt(t,e,r){if(null==r)return"";var n=r;if(void 0!==n.__emotion_styles)return n;switch(typeof r){case"boolean":return"";case"object":var o=r;if(1===o.anim)return wt={name:o.name,styles:o.styles,next:wt},o.name;var a=r;if(void 0!==a.styles){var i=a.next;if(void 0!==i)for(;void 0!==i;)wt={name:i.name,styles:i.styles,next:wt},i=i.next;return a.styles+";"}return function(t,e,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=vt(t,e,r[o])+";";else for(var a in r){var i=r[a];if("object"!=typeof i){var s=i;null!=e&&void 0!==e[s]?n+=a+"{"+e[s]+"}":ht(s)&&(n+=gt(a)+":"+bt(a,s)+";")}else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=e&&void 0!==e[i[0]]){var c=vt(t,e,i);switch(a){case"animation":case"animationName":n+=gt(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}else for(var l=0;l<i.length;l++)ht(i[l])&&(n+=gt(a)+":"+bt(a,i[l])+";")}return n}(t,e,r);case"function":if(void 0!==t){var s=wt,c=r(t);return wt=s,vt(t,e,c)}}var l=r;if(null==e)return l;var f=e[l];return void 0!==f?f:l}var wt,xt=/label:\s*([^\s;{]+)\s*(;|$)/g;function St(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var n=!0,o="";wt=void 0;var a=t[0];null==a||void 0===a.raw?(n=!1,o+=vt(r,e,a)):o+=a[0];for(var i=1;i<t.length;i++){if(o+=vt(r,e,t[i]),n)o+=a[i]}xt.lastIndex=0;for(var s,c="";null!==(s=xt.exec(o));)c+="-"+s[1];var l=function(t){for(var e,r=0,n=0,o=t.length;o>=4;++n,o-=4)e=1540483477*(65535&(e=255&t.charCodeAt(n)|(255&t.charCodeAt(++n))<<8|(255&t.charCodeAt(++n))<<16|(255&t.charCodeAt(++n))<<24))+(59797*(e>>>16)<<16),r=1540483477*(65535&(e^=e>>>24))+(59797*(e>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&t.charCodeAt(n+2))<<16;case 2:r^=(255&t.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&t.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)}(o)+c;return{name:l,styles:o,next:wt}}var Ct=!!a.useInsertionEffect&&a.useInsertionEffect,Tt=Ct||function(t){return t()},kt=(Ct||o.useLayoutEffect,o.createContext("undefined"!=typeof HTMLElement?st({key:"css"}):null)),At=(kt.Provider,function(t){return(0,o.forwardRef)((function(e,r){var n=(0,o.useContext)(kt);return t(e,n,r)}))}),Ot=o.createContext({});var Et={}.hasOwnProperty,jt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",It=function(t,e){var r={};for(var n in e)Et.call(e,n)&&(r[n]=e[n]);return r[jt]=t,r},Pt=function(t){var e=t.cache,r=t.serialized,n=t.isStringTag;return lt(e,r,n),Tt((function(){return ft(e,r,n)})),null},$t=At((function(t,e,r){var n=t.css;"string"==typeof n&&void 0!==e.registered[n]&&(n=e.registered[n]);var a=t[jt],i=[n],s="";"string"==typeof t.className?s=ct(e.registered,i,t.className):null!=t.className&&(s=t.className+" ");var c=St(i,void 0,o.useContext(Ot));s+=e.key+"-"+c.name;var l={};for(var f in t)Et.call(t,f)&&"css"!==f&&f!==jt&&(l[f]=t[f]);return l.className=s,r&&(l.ref=r),o.createElement(o.Fragment,null,o.createElement(Pt,{cache:e,serialized:c,isStringTag:"string"==typeof a}),o.createElement(a,l))})),Nt=(r(4634),r(4146),n.Fragment),Mt=function(t,e,r){return Et.call(e,"css")?n.jsx($t,It(t,e),r):n.jsx(t,e,r)},_t=function(t,e){var r=arguments;if(null==e||!Et.call(e,"css"))return o.createElement.apply(void 0,r);var n=r.length,a=new Array(n);a[0]=$t,a[1]=It(t,e);for(var i=2;i<n;i++)a[i]=r[i];return o.createElement.apply(null,a)};!function(t){var e;e||(e=t.JSX||(t.JSX={}))}(_t||(_t={}));function Rt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return St(e)}function zt(){var t=Rt.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var Yt=function t(e){for(var r=e.length,n=0,o="";n<r;n++){var a=e[n];if(null!=a){var i=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))i=t(a);else for(var s in i="",a)a[s]&&s&&(i&&(i+=" "),i+=s);break;default:i=a}i&&(o&&(o+=" "),o+=i)}}return o};var Lt=function(t){var e=t.cache,r=t.serializedArr;return Tt((function(){for(var t=0;t<r.length;t++)ft(e,r[t],!1)})),null},Dt=At((function(t,e){var r=[],n=function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var a=St(n,e.registered);return r.push(a),lt(e,a,!1),e.key+"-"+a.name},a={css:n,cx:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(t,e,r){var n=[],o=ct(t,n,r);return n.length<2?r:o+e(n)}(e.registered,n,Yt(r))},theme:o.useContext(Ot)},i=t.children(a);return o.createElement(o.Fragment,null,o.createElement(Lt,{cache:e,serializedArr:r}),i)})),Vt=Object.defineProperty,Ft=(t,e,r)=>((t,e,r)=>e in t?Vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r)(t,"symbol"!=typeof e?e+"":e,r),Xt=new Map,Bt=new WeakMap,Wt=0,Ht=void 0;function Ut(t){return Object.keys(t).sort().filter((e=>void 0!==t[e])).map((e=>{return`${e}_${"root"===e?(r=t.root,r?(Bt.has(r)||(Wt+=1,Bt.set(r,Wt.toString())),Bt.get(r)):"0"):t[e]}`;var r})).toString()}function qt(t,e,r={},n=Ht){if(void 0===window.IntersectionObserver&&void 0!==n){const o=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:a,elements:i}=function(t){const e=Ut(t);let r=Xt.get(e);if(!r){const n=new Map;let o;const a=new IntersectionObserver((e=>{e.forEach((e=>{var r;const a=e.isIntersecting&&o.some((t=>e.intersectionRatio>=t));t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=a),null==(r=n.get(e.target))||r.forEach((t=>{t(a,e)}))}))}),t);o=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:a,elements:n},Xt.set(e,r)}return r}(r),s=i.get(t)||[];return i.has(t)||i.set(t,s),s.push(e),a.observe(t),function(){s.splice(s.indexOf(e),1),0===s.length&&(i.delete(t),a.unobserve(t)),0===i.size&&(a.disconnect(),Xt.delete(o))}}var Gt=class extends o.Component{constructor(t){super(t),Ft(this,"node",null),Ft(this,"_unobserveCb",null),Ft(this,"handleNode",(t=>{this.node&&(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()})),Ft(this,"handleChange",((t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),function(t){return"function"!=typeof t.children}(this.props)||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)})),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:o,fallbackInView:a}=this.props;this._unobserveCb=qt(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:n,delay:o},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"==typeof t){const{inView:e,entry:r}=this.state;return t({inView:e,entry:r,ref:this.handleNode})}const{as:e,triggerOnce:r,threshold:n,root:a,rootMargin:i,onChange:s,skip:c,trackVisibility:l,delay:f,initialInView:u,fallbackInView:d,...p}=this.props;return o.createElement(e||"div",{ref:this.handleNode,...p},t)}};function Kt({threshold:t,delay:e,trackVisibility:r,rootMargin:n,root:a,triggerOnce:i,skip:s,initialInView:c,fallbackInView:l,onChange:f}={}){var u;const[d,p]=o.useState(null),m=o.useRef(f),[y,h]=o.useState({inView:!!c,entry:void 0});m.current=f,o.useEffect((()=>{if(s||!d)return;let o;return o=qt(d,((t,e)=>{h({inView:t,entry:e}),m.current&&m.current(t,e),e.isIntersecting&&i&&o&&(o(),o=void 0)}),{root:a,rootMargin:n,threshold:t,trackVisibility:r,delay:e},l),()=>{o&&o()}}),[Array.isArray(t)?t.toString():t,d,a,n,i,s,r,l,e]);const g=null==(u=y.entry)?void 0:u.target,b=o.useRef(void 0);d||!g||i||s||b.current===g||(b.current=g,h({inView:!!c,entry:void 0}));const v=[p,y.inView,y.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}var Jt=r(8338);zt`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,zt`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,zt`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,zt`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,zt`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,zt`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,zt`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,zt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,zt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,zt`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,zt`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,zt`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,zt`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Zt=zt`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Qt=zt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,te=zt`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ee=zt`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,re=zt`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ne=zt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oe=zt`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ae=zt`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ie=zt`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=zt`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ce=zt`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=zt`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fe=zt`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ue(t,e){return r=>r?t():e()}function de(t){return ue(t,(()=>null))}function pe(t){return de((()=>({opacity:0})))(t)}const me=t=>{const{cascade:e=!1,damping:r=.5,delay:n=0,duration:a=1e3,fraction:i=0,keyframes:s=ne,triggerOnce:c=!1,className:l,style:f,childClassName:u,childStyle:d,children:p,onVisibilityChange:m}=t,y=(0,o.useMemo)((()=>function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:n=ne,iterationCount:o=1}){return Rt`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:s,duration:a})),[a,s]);return null==p?null:"string"==typeof(h=p)||"number"==typeof h||"boolean"==typeof h?Mt(he,{...t,animationStyles:y,children:String(p)}):(0,Jt.isFragment)(p)?Mt(ge,{...t,animationStyles:y}):Mt(Nt,{children:o.Children.map(p,((s,p)=>{if(!(0,o.isValidElement)(s))return null;const h=n+(e?p*a*r:0);switch(s.type){case"ol":case"ul":return Mt(Dt,{children:({cx:e})=>Mt(s.type,{...s.props,className:e(l,s.props.className),style:Object.assign({},f,s.props.style),children:Mt(me,{...t,children:s.props.children})})});case"li":return Mt(Gt,{threshold:i,triggerOnce:c,onChange:m,children:({inView:t,ref:e})=>Mt(Dt,{children:({cx:r})=>Mt(s.type,{...s.props,ref:e,className:r(u,s.props.className),css:de((()=>y))(t),style:Object.assign({},d,s.props.style,pe(!t),{animationDelay:h+"ms"})})})});default:return Mt(Gt,{threshold:i,triggerOnce:c,onChange:m,children:({inView:t,ref:e})=>Mt("div",{ref:e,className:l,css:de((()=>y))(t),style:Object.assign({},f,pe(!t),{animationDelay:h+"ms"}),children:Mt(Dt,{children:({cx:t})=>Mt(s.type,{...s.props,className:t(u,s.props.className),style:Object.assign({},d,s.props.style)})})})})}}))});var h},ye={display:"inline-block",whiteSpace:"pre"},he=t=>{const{animationStyles:e,cascade:r=!1,damping:n=.5,delay:o=0,duration:a=1e3,fraction:i=0,triggerOnce:s=!1,className:c,style:l,children:f,onVisibilityChange:u}=t,{ref:d,inView:p}=Kt({triggerOnce:s,threshold:i,onChange:u});return ue((()=>Mt("div",{ref:d,className:c,style:Object.assign({},l,ye),children:f.split("").map(((t,r)=>Mt("span",{css:de((()=>e))(p),style:{animationDelay:o+r*a*n+"ms"},children:t},r)))})),(()=>Mt(ge,{...t,children:f})))(r)},ge=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:n=!1,className:o,style:a,children:i,onVisibilityChange:s}=t,{ref:c,inView:l}=Kt({triggerOnce:n,threshold:r,onChange:s});return Mt("div",{ref:c,className:o,css:de((()=>e))(l),style:Object.assign({},a,pe(!l)),children:i})};zt`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,zt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zt`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zt`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,zt`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,zt`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,zt`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,zt`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const be=zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,ve=zt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,we=zt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,xe=zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Se=zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ce=zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Te=zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ke=zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ae=zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Oe=zt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ee=zt`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,je=zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Ie=zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;const Pe=t=>{const{big:e=!1,direction:r,reverse:n=!1,...a}=t,i=(0,o.useMemo)((()=>function(t,e,r){switch(r){case"bottom-left":return e?ve:Qt;case"bottom-right":return e?we:te;case"down":return t?e?Se:re:e?xe:ee;case"left":return t?e?Te:oe:e?Ce:ne;case"right":return t?e?Ae:ie:e?ke:ae;case"top-left":return e?Oe:se;case"top-right":return e?Ee:ce;case"up":return t?e?Ie:fe:e?je:le;default:return e?be:Zt}}(e,n,r)),[e,r,n]);return Mt(me,{keyframes:i,...a})};zt`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,zt`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,zt`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,zt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,zt`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;zt`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,zt`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,zt`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zt`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;zt`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,zt`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,zt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,zt`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,zt`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,zt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,zt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,zt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,zt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,zt`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;zt`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zt`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zt`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zt`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,zt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,zt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,zt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,zt`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;zt`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,zt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,zt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,zt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,zt`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,zt`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,zt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,zt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,zt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,zt`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`},9998:function(t,e){"use strict";var r,n=Symbol.for("react.element"),o=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),f=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),h=Symbol.for("react.offscreen");function g(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case n:switch(t=t.type){case a:case s:case i:case d:case p:return t;default:switch(t=t&&t.$$typeof){case f:case l:case u:case y:case m:case c:return t;default:return e}}case o:return e}}}r=Symbol.for("react.module.reference"),e.isFragment=function(t){return g(t)===a}}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-574204b4878c74f67b5d.js.map