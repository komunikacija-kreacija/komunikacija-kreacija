(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),l=i(a("pVnL")),d=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),h=function(e){var t=c(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,g="undefined"!=typeof window,b=g&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),d.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function C(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?C(e,!0):"")+C(e)})).join("")+"<img "+d+s+o+a+i+t+n+r+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,r=e.spreadProps,n=d.default.createElement(N,(0,l.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,i(a),n):n},N=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.onClick,f=e.loading,p=e.draggable,h=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},h,{onLoad:s,onError:u,onClick:c,ref:t,loading:f,draggable:p,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:u.default.object,onError:u.default.func,onClick:u.default.func,onLoad:u.default.func};var I=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=g&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||g&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,g=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,S=e.itemProp,C=e.loading,O=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:I?1:0,transition:V?"opacity "+b+"ms":"none"},o),R="boolean"==typeof g?"lightgray":g,P={transitionDelay:b+"ms"},_=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&P,{},o,{},f),j={title:t,alt:this.state.isVisible?"":a,style:_,className:p,itemProp:S};if(h){var M=h,D=M[0];return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&P)}),D.base64&&d.default.createElement(L,{src:D.base64,spreadProps:j,imageVariants:M,generateSources:E}),D.tracedSVG&&d.default.createElement(L,{src:D.tracedSVG,spreadProps:j,imageVariants:M,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,y(M),d.default.createElement(N,{alt:a,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:C,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:C},D,{imageVariants:M}))}}))}if(m){var T=m,x=T[0],q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete q.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},R&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:R,width:x.width,opacity:this.state.imgLoaded?0:1,height:x.height},V&&P)}),x.base64&&d.default.createElement(L,{src:x.base64,spreadProps:j,imageVariants:T,generateSources:E}),x.tracedSVG&&d.default.createElement(L,{src:x.tracedSVG,spreadProps:j,imageVariants:T,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,y(T),d.default.createElement(N,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:C,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:C},x,{imageVariants:T}))}}))}return null},t}(d.default.Component);I.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),z=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});I.propTypes={resolutions:V,sizes:z,fixed:u.default.oneOfType([V,u.default.arrayOf(V)]),fluid:u.default.oneOfType([z,u.default.arrayOf(z)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onClick:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var R=I;t.default=R},Fsc3:function(e,t,a){"use strict";a("pJf4"),a("AqHK"),a("OeI1"),a("n7j8"),a("LagC"),a("pS08"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),r=a("q1tI"),n=l(r),s=l(a("i8i4")),o=l(a("TSYQ"));function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u="Select...",c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={selected:a.parseValue(e.value,e.options)||{label:void 0===e.placeholder?u:e.placeholder,value:""},isOpen:!1},a.mounted=!0,a.handleDocumentClick=a.handleDocumentClick.bind(a),a.fireChangeEvent=a.fireChangeEvent.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){if(e.value){var t=this.parseValue(e.value,e.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:void 0===e.placeholder?u:e.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"==typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var a=void 0;if("string"==typeof e)for(var i=0,r=t.length;i<r;i++)if("group"===t[i].type){var n=t[i].items.filter((function(t){return t.value===e}));n.length&&(a=n[0])}else void 0!==t[i].value&&t[i].value===e&&(a=t[i]);return a||e}},{key:"setValue",value:function(e,t){var a={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(a),this.setState(a)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,a=e.value;void 0===a&&(a=e.label||e);var i=e.label||e.value||e,r=a===this.state.selected.value||a===this.state.selected,s=(d(t={},this.props.baseClassName+"-option",!0),d(t,e.className,!!e.className),d(t,"is-selected",r),t),l=(0,o.default)(s);return n.default.createElement("div",{key:a,className:l,onMouseDown:this.setValue.bind(this,a,i),onClick:this.setValue.bind(this,a,i),role:"option","aria-selected":r?"true":"false"},i)}},{key:"buildMenu",value:function(){var e=this,t=this.props,a=t.options,i=t.baseClassName,r=a.map((function(t){if("group"===t.type){var a=n.default.createElement("div",{className:i+"-title"},t.name),r=t.items.map((function(t){return e.renderOption(t)}));return n.default.createElement("div",{className:i+"-group",key:t.name,role:"listbox",tabIndex:"-1"},a,r)}return e.renderOption(t)}));return r.length?r:n.default.createElement("div",{className:i+"-noresults"},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(s.default.findDOMNode(this).contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"==typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,a,i,r,s=this.props,l=s.baseClassName,u=s.controlClassName,c=s.placeholderClassName,f=s.menuClassName,p=s.arrowClassName,h=s.arrowClosed,m=s.arrowOpen,g=s.className,b=this.props.disabled?"Dropdown-disabled":"",v="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,y=(0,o.default)((d(e={},l+"-root",!0),d(e,g,!!g),d(e,"is-open",this.state.isOpen),e)),S=(0,o.default)((d(t={},l+"-control",!0),d(t,u,!!u),d(t,b,!!b),t)),w=(0,o.default)((d(a={},l+"-placeholder",!0),d(a,c,!!c),d(a,"is-selected",this.isValueSelected()),a)),E=(0,o.default)((d(i={},l+"-menu",!0),d(i,f,!!f),i)),C=(0,o.default)((d(r={},l+"-arrow",!0),d(r,p,!!p),r)),O=n.default.createElement("div",{className:w},v),k=this.state.isOpen?n.default.createElement("div",{className:E,"aria-expanded":"true"},this.buildMenu()):null;return n.default.createElement("div",{className:y},n.default.createElement("div",{className:S,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},O,n.default.createElement("div",{className:l+"-arrow-wrapper"},m&&h?this.state.isOpen?m:h:n.default.createElement("span",{className:C}))),k)}}]),t}(r.Component);c.defaultProps={baseClassName:"Dropdown"},t.default=c},vx99:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=(a("Wbzz"),a("Fsc3")),s=a.n(n);a("44of");var o=["2020","2019","2018","2017"],l=(i.Component,a("9eSz"),a("Bl7J"));var d=function(e){var t,a;function i(t){return e.call(this,t)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"blog"},r.a.createElement("div",{className:"blog-content"},"BLOG")))},i}(i.Component);t.default=d}}]);
//# sourceMappingURL=component---src-pages-blog-js-553b80724d94965cd692.js.map