(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/175":function(e,t,i){e.exports=i.p+"static/maa-and-de-5148c23c420c32648ed616ae2ea3e0f6.png"},"/eHF":function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function o(e,t){var i=t.distance,n=t.left,o=t.right,s=t.up,a=t.down,r=t.top,d=t.bottom,u=t.big,c=t.mirror,h=t.opposite,f=(i?i.toString():0)+((n?1:0)|(o?2:0)|(r||a?4:0)|(d||s?8:0)|(c?16:0)|(h?32:0)|(e?64:0)|(u?128:0));if(p.hasOwnProperty(f))return p[f];var m=n||o||s||a||r||d,v=void 0,y=void 0;if(m){if(!c!=!(e&&h)){var w=[o,n,d,r,a,s];n=w[0],o=w[1],r=w[2],d=w[3],s=w[4],a=w[5]}var b=i||(u?"2000px":"100%");v=n?"-"+b:o?b:"0",y=a||r?"-"+b:s||d?b:"0"}return p[f]=(0,l.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),p[f]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,s=(e.out,e.forever),a=e.timeout,r=e.duration,d=void 0===r?l.defaults.duration:r,c=e.delay,p=void 0===c?l.defaults.delay:c,h=e.count,f=void 0===h?l.defaults.count:h,m=n(e,["children","out","forever","timeout","duration","delay","count"]),v={make:o,duration:void 0===a?d:a,delay:p,forever:s,count:f,style:{animationFillMode:"both"},reverse:m.left};return t?(0,u.default)(m,v,v,i):v}Object.defineProperty(t,"__esModule",{value:!0});var a,r=i("17x9"),l=i("ar19"),d=i("eH+L"),u=(a=d)&&a.__esModule?a:{default:a},c={out:r.bool,left:r.bool,right:r.bool,top:r.bool,bottom:r.bool,big:r.bool,mirror:r.bool,opposite:r.bool,duration:r.number,timeout:r.number,distance:r.string,delay:r.number,count:r.number,forever:r.bool},p={};s.propTypes=c,t.default=s,e.exports=t.default},"28nh":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,s=void 0;try{for(var a,r=e[Symbol.iterator]();!(n=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&r.return&&r.return()}finally{if(o)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i("q1tI"),d=(n=l)&&n.__esModule?n:{default:n},u=i("17x9"),c=i("ar19"),p=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),h={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:p.isRequired,outEffect:(0,u.oneOfType)([p,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},f={transitionGroup:u.object},m=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,c.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!c.observerMode&&this.props.collapse&&window.document.dispatchEvent(c.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,s=i.count,a=i.delay,r=i.duration;if(!o){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),a+(r+(t?r:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,s=void 0,a=void 0;if(t.collapseOnly)s=i.duration/3,a=i.delay;else{var r=n>>2,l=r>>1;s=r,a=i.delay+(this.isOn?0:n-r-l),e.style.animationDuration=n-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:o,transition:"height "+s+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=d.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),c.ssr&&(0,c.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&c.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];c.globalHide||(0,c.hideAll)(),this&&this.el&&(e||(e=this.props),c.ssr&&(0,c.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):c.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||c.ssr&&!c.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):c.ssr&&(c.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return d.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):d.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=n.duration,r=n.reverse,l=i.length,u=2*s;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),s=u/2);var p=r?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":o(e))&&e?d.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,c.cascade)(r?p--:p++,0,l,s,u))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=d.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:d.default.createElement("div",null,e)}return d.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,o=n.style,s=n.className,r=n.children,l=this.props.disabled?s:(this.props.outEffect?c.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),u=a({},o,{opacity:1})):u=this.props.disabled?o:a({},o,this.state.style);var p=a({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:u},this.props.refProp,this.saveRef)),h=d.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?d.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):d.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,c.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(c.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){c.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!c.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(d.default.Component);m.propTypes=h,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default},"BLS+":function(e,t,i){e.exports=i.p+"static/crowdstrike-6546a2c3e97273a081071b7a53df0dfa.jpg"},J9yo:function(e,t,i){},"Wm+9":function(e,t,i){e.exports=i.p+"static/amazon-cb4c9d6793d028ed19ff181d57e967e0.jpg"},ar19:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",o,!0),n("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,o){var s=Math.log(n),a=(Math.log(o)-s)/(i-t);return Math.exp(s+a*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+p)+"{"+e+"}",i=h[e];return i?""+m+i:(f.insertRule(t,f.cssRules.length),h[e]=p,""+m+p++)},t.hideAll=o,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var s=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},d=t.disableSsr=function(){return t.ssr=a=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,m=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(d,1500),r||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},"eH+L":function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),s.default.Children.count(n)<2?s.default.createElement(a.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=s.default.Children.map(n,(function(n){return s.default.createElement(a.default,o({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(i("q1tI")),a=n(i("28nh"));e.exports=t.default},iYCV:function(e,t,i){e.exports=i.p+"static/espn-c2fc828d26c2b5157c41b7b82e16336c.jpg"},jooN:function(e,t,i){"use strict";i.d(t,"e",(function(){return k})),i.d(t,"f",(function(){return O})),i.d(t,"a",(function(){return S})),i.d(t,"c",(function(){return R})),i.d(t,"g",(function(){return T})),i.d(t,"d",(function(){return x})),i.d(t,"b",(function(){return I}));var n=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",i=crypto.getRandomValues(new Uint8Array(e));e--;){var n=63&i[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t},o=i("nIOW"),s=i.n(o),a=i("mh2W"),r=i.n(a),l=i("BLS+"),d=i.n(l),u=i("iYCV"),c=i.n(u),p=i("tG0a"),h=i.n(p),f=i("r2t7"),m=i.n(f),v=i("Wm+9"),y=i.n(v),w=i("rDMU"),b=i.n(w),g=i("/175"),E=i.n(g),k={title:"Henry Vuong | UT Austin Graduate",lang:"en",description:"Originally from Laredo Texas, Henry attended The University of Texas at Austin (UT) and obtained a Bachelors in Business Administration in Management Information Systems (MIS). This is Henrys personal website to host things he is comfortable with sharing."},O={title:"",name:"Henry",subtitle:"",cta:""},S={img:"profile.jpg",paragraphOne:"Recent UT Austin grad and will be working at Amazon as a Software Engineer in 2021.",paragraphTwo:"A self-proclaimed home chef, I enjoy watching Masterclass/Youtube cooking videos (favorite food show is Bon Appétit) and making home-cooked meals to nourish my friends and family. Popularly acclaimed dishes: Red-braised Chinese Pork Belly, Henry's Risotto, Guacamole, Roasted Salsa, European Style Beans, Chicken Schnitzel, Red Wine Braised Short Ribs, Oven Roasted Chicken",paragraphThree:"I like playing basketball a lot. There's just something about forgetting all your worries, deadlines, and whatever else is going on in your life, to focus on the simple task of putting a ball into a basket. It can be quite therapeutic and of course keeps me off my couch.",paragraphFour:"A big goal of mine is to learn Spanish. I primarily use Duolingo, spending about 20 minutes a day. Due to peer pressure, I listen to a lot of Reggaeton (although, I'm not really proficient enough to understand most of it).",resume:"/resume"},R=[{id:n(),img:s.a,organization:"The University of Texas at Austin",title:"BBA in Management Information Systems",location:"Austin, Texas",url:"https://www.utexas.edu/",date:"Class of 2020",color:"#CC5500",description:"I took my first CS class after my freshmen year, and I quickly fell in love with it. I soon began my career transition, and it has been a journey replete with pleasant surprises and moments more fulfilling than any previous. \nThe pickup basketball games, the late night 888 food runs, the adventures on 6th, and deep talks with my roommates are moments I will miss dearly (except waking up for class). UT helped me grow as a student but also helped me become a better and more mature person.\nThank you Mom and Dad, and Hook 'em 🤘."},{id:n(),img:y.a,organization:"Amazon",title:"Software Development Engineer Intern",location:"S̶e̶a̶t̶t̶l̶e̶,̶ ̶W̶a̶s̶h̶i̶n̶g̶t̶o̶n̶ Remote",url:"https://www.amazon.com/",date:"Jun 2020 - Aug 2020",color:"#232F3E",description:"Created a full-stack self-service internal tool to allow program managers to make changes to customer service agents' permissions. Learned a lot about AWS, backend development, devops, and frontend development. Thankful to my team for helping me work remotely. Fun fact: Jeff Bezos added $47.2423 billion to his wealth during my internship."},{id:n(),img:m.a,organization:"WHU – Otto Beisheim School of Management",title:"Exchange Student",location:"Vallendar, Germany",url:"https://www.whu.edu/",date:"Jan 2020 - April 2020",color:"#054696",description:"Skipped class so I could go see all of Europe; from the Swiss Alps to the Roman Colosseum to Acropolis of Athens to the Van Gogh Musuem to the Sagrada Familia, I will always remember this time as a moment of appreciation to nature and European history. Unfortunately COVID-19 abruptly ended my study abroad and also infected me."},{id:n(),img:c.a,organization:"Disney DTCI - ESPN",title:"Software Engineer Intern",location:"Bristol, Connecticut",url:"https://www.espn.com/",date:"Sept 2019 - Nov 2019",color:"#CD242E",description:"Developed telemetry for the ESPN video playback library to provide greater information on failures. Implemented feature flagging to target specific iOS devices or metrics. Famous people I saw: Matthew Berry, Ryan Clark, Wendi Nix."},{id:n(),img:r.a,organization:"BP",title:"Software Developer Intern",location:"Houston, Texas",url:"https://www.bp.com/",date:"May 2019 - Aug 2019",color:"#00953F",description:"Built a chatbot to relieve senior architects of basic requests. Created infrastructure-as-code templates and deployment pipelines for fast and consistent deployment. Houston is now my hometown for sports. Go Rockets 🚀"},{id:n(),img:d.a,organization:"CrowdStrike",title:"Sales Operations Analyst Intern",location:"Sunnyvale, California",url:"https://www.crowdstrike.com/",date:"Jun 2018 - Aug 2018",color:"#FC0000",description:"Worked on Excel and Tableau programs and analysis to make the sales team more efficient. My first true taste of American capitalism."},{id:n(),img:h.a,organization:"United High School",title:"United Engineering & Technology Magnet",location:"Laredo, Texas",url:"https://uhs.uisd.net/",date:"Class of 2016",color:"#F15A29",description:'Met some of my best friends here. I was the muffin man, I was the "one-stroke-wonder" on the swim team, and I was part of the best robotics club. Thank you Mrs. Rodriguez and Mr. Torres for believing in me.'}],T=[{id:n(),img:b.a,title:"HungryNow",info:"iOS app to help remind users when their favorite restaurants were going to close.",info2:"Never really expected it to take off, but it was fun learning the SwiftUI framework and actually launching it.",url:"https://hungrynow.herokuapp.com/",repo:"https://github.com/mistersquiish/HungryNow",achievement:"54 Downloads, 0 Active Users"},{id:n(),img:E.a,title:"Maa and De",info:"An appreciation website for my parents where I document and tell their journey to America.",info2:"Was always something I wanted to do for my parents, and my parents really enjoyed the gift.",url:"https://henryvuong.com/thank-you-mom-and-dad/",repo:"https://github.com/mistersquiish/thank-you-mom-and-dad",achievement:"190+ Visitors"}],x={networks:[{id:n(),name:"envelope",url:"mailto:henryvuong@utexas.edu"},{id:n(),name:"linkedin",url:"https://www.linkedin.com/in/henry-vuong-texas/"},{id:n(),name:"github",url:"https://github.com/mistersquiish"},{id:n(),name:"facebook",url:"https://www.facebook.com/profile.php?id=100003945593154"},{id:n(),name:"tinder",url:"/tinder"}]},I={whereToFind:"Due to COVID, I'm back at home usually trying out a new recipe in mom's kitchen or playing basketball in my parent's backyard.",contact:"Otherwise, best way to reach me is through my email: ",email:"henryvuong@utexas.edu"}},mh2W:function(e,t,i){e.exports=i.p+"static/bp-b2715f7ec4bb58813a47e1f05edeb4f4.jpg"},nIOW:function(e,t,i){e.exports=i.p+"static/utaustin-59e31775689c66cfd03b8af4524f537d.jpg"},q4sD:function(e,t,i){},r2t7:function(e,t,i){e.exports=i.p+"static/whu-8eae07895f2dbb158276f9973b276359.jpg"},rDMU:function(e,t,i){e.exports=i.p+"static/hungrynow-37a797fc2cf2d9660ad818d52da3eb4c.png"},tG0a:function(e,t,i){e.exports=i.p+"static/unitedhs-da7cbc977592698ae6c1e988d3805b90.jpg"}}]);
//# sourceMappingURL=387c9a099f0595630657cdb1de90200d536b0243-735c01d2358b587fc3c8.js.map