(window.webpackJsonp=window.webpackJsonp||[]).push([[5,13],{"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var n,r=i(a("PJYZ")),o=i(a("VbXa")),s=i(a("8OQS")),l=i(a("pVnL")),d=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=k([].concat(t.fluid))),t.fixed&&(t.fixed=k([].concat(t.fixed))),t},p=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),m=function(e){var t=c(e),a=p(t);return f[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,g=h&&window.IntersectionObserver,b=new WeakMap;function j(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},i&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:i,sizes:r}),d.default.createElement("source",{media:n,srcSet:a,sizes:r}))}))}function k(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function y(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:i})}))}function z(e,t){var a=e.srcSet,i=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?i:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var S=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+d+o+s+a+i+t+r+n+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=function(e){var t=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,r=d.default.createElement(O,(0,l.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,i(a),r):r},O=d.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,o=e.onLoad,u=e.onError,c=e.onClick,p=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:n},m,{onLoad:o,onError:u,onClick:c,ref:t,loading:p,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));O.propTypes={style:u.default.object,onError:u.default.func,onClick:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&g&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||h&&(v||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=S(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=p(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,p=void 0===u?{}:u,f=e.placeholderClassName,m=e.fluid,v=e.fixed,h=e.backgroundColor,g=e.durationFadeIn,b=e.Tag,k=e.itemProp,z=e.loading,S=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,I=(0,l.default)({opacity:C?1:0,transition:L?"opacity "+g+"ms":"none"},s),V="boolean"==typeof h?"lightgray":h,R={transitionDelay:g+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&R,{},s,{},p),P={title:t,alt:this.state.isVisible?"":a,style:T,className:f,itemProp:k};if(m){var M=m,D=M[0];return d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),V&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&R)}),D.base64&&d.default.createElement(N,{src:D.base64,spreadProps:P,imageVariants:M,generateSources:E}),D.tracedSVG&&d.default.createElement(N,{src:D.tracedSVG,spreadProps:P,imageVariants:M,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,j(M),d.default.createElement(O,{alt:a,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:k,loading:z,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:a,title:t,loading:z},D,{imageVariants:M}))}}))}if(v){var _=v,x=_[0],q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},r);return"inherit"===r.display&&delete q.display,d.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},V&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:V,width:x.width,opacity:this.state.imgLoaded?0:1,height:x.height},L&&R)}),x.base64&&d.default.createElement(N,{src:x.base64,spreadProps:P,imageVariants:_,generateSources:E}),x.tracedSVG&&d.default.createElement(N,{src:x.tracedSVG,spreadProps:P,imageVariants:_,generateSources:y}),this.state.isVisible&&d.default.createElement("picture",null,j(_),d.default.createElement(O,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:I,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:k,loading:z,draggable:S})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,l.default)({alt:a,title:t,loading:z},x,{imageVariants:_}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),I=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});C.propTypes={resolutions:L,sizes:I,fixed:u.default.oneOfType([L,u.default.arrayOf(L)]),fluid:u.default.oneOfType([I,u.default.arrayOf(I)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onClick:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var V=C;t.default=V},Fsc3:function(e,t,a){"use strict";a("pJf4"),a("AqHK"),a("OeI1"),a("n7j8"),a("LagC"),a("pS08"),a("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),n=a("q1tI"),r=l(n),o=l(a("i8i4")),s=l(a("TSYQ"));function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u="Select...",c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={selected:a.parseValue(e.value,e.options)||{label:void 0===e.placeholder?u:e.placeholder,value:""},isOpen:!1},a.mounted=!0,a.handleDocumentClick=a.handleDocumentClick.bind(a),a.fireChangeEvent=a.fireChangeEvent.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentWillReceiveProps",value:function(e){if(e.value){var t=this.parseValue(e.value,e.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:void 0===e.placeholder?u:e.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"==typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var a=void 0;if("string"==typeof e)for(var i=0,n=t.length;i<n;i++)if("group"===t[i].type){var r=t[i].items.filter((function(t){return t.value===e}));r.length&&(a=r[0])}else void 0!==t[i].value&&t[i].value===e&&(a=t[i]);return a||e}},{key:"setValue",value:function(e,t){var a={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(a),this.setState(a)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,a=e.value;void 0===a&&(a=e.label||e);var i=e.label||e.value||e,n=a===this.state.selected.value||a===this.state.selected,o=(d(t={},this.props.baseClassName+"-option",!0),d(t,e.className,!!e.className),d(t,"is-selected",n),t),l=(0,s.default)(o);return r.default.createElement("div",{key:a,className:l,onMouseDown:this.setValue.bind(this,a,i),onClick:this.setValue.bind(this,a,i),role:"option","aria-selected":n?"true":"false"},i)}},{key:"buildMenu",value:function(){var e=this,t=this.props,a=t.options,i=t.baseClassName,n=a.map((function(t){if("group"===t.type){var a=r.default.createElement("div",{className:i+"-title"},t.name),n=t.items.map((function(t){return e.renderOption(t)}));return r.default.createElement("div",{className:i+"-group",key:t.name,role:"listbox",tabIndex:"-1"},a,n)}return e.renderOption(t)}));return n.length?n:r.default.createElement("div",{className:i+"-noresults"},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(o.default.findDOMNode(this).contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"==typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,a,i,n,o=this.props,l=o.baseClassName,u=o.controlClassName,c=o.placeholderClassName,p=o.menuClassName,f=o.arrowClassName,m=o.arrowClosed,v=o.arrowOpen,h=o.className,g=this.props.disabled?"Dropdown-disabled":"",b="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,j=(0,s.default)((d(e={},l+"-root",!0),d(e,h,!!h),d(e,"is-open",this.state.isOpen),e)),k=(0,s.default)((d(t={},l+"-control",!0),d(t,u,!!u),d(t,g,!!g),t)),y=(0,s.default)((d(a={},l+"-placeholder",!0),d(a,c,!!c),d(a,"is-selected",this.isValueSelected()),a)),E=(0,s.default)((d(i={},l+"-menu",!0),d(i,p,!!p),i)),z=(0,s.default)((d(n={},l+"-arrow",!0),d(n,f,!!f),n)),S=r.default.createElement("div",{className:y},b),w=this.state.isOpen?r.default.createElement("div",{className:E,"aria-expanded":"true"},this.buildMenu()):null;return r.default.createElement("div",{className:j},r.default.createElement("div",{className:k,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},S,r.default.createElement("div",{className:l+"-arrow-wrapper"},v&&m?this.state.isOpen?v:m:r.default.createElement("span",{className:z}))),w)}}]),t}(n.Component);c.defaultProps={baseClassName:"Dropdown"},t.default=c},Tcfi:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=a("Bl7J");t.default=function(){return n.a.createElement(r.a,null,n.a.createElement("div",{className:"komunikacija-content"},n.a.createElement("div",{className:"komunikacija-title"},"Komunikacija na delovnem mestu, v šoli, s prijatelji, znanci, lahko tudi neznanci ",n.a.createElement("span",{className:"emoji"},"😉 ")," "),n.a.createElement("div",{className:"komunikacija-item kom-sluzba"},n.a.createElement("br",null),n.a.createElement("div",{className:"komunikacija-text"},"Se zatika, ni vedno tekoča, kar je popolnoma razumljivo, saj nismo vedno v najboljši »izvedbi« samega sebe, vendar si želimo več svetlih trenutkov. Vse se da urediti."),n.a.createElement("img",{className:"kom-sluzba-img",src:"../assets/kom4.png",alt:""}))))}},vx99:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),r=(a("Wbzz"),a("Fsc3")),o=a.n(r);a("44of");var s=["2020","2019","2018","2017"],l=(i.Component,a("9eSz"),a("Bl7J"));a("Tcfi");var d=function(e){var t,a;function i(t){return e.call(this,t)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){return n.a.createElement(l.a,null,n.a.createElement("div",{className:"blog"},n.a.createElement("div",{className:"blog-content"},n.a.createElement("div",{className:"blog-item"},n.a.createElement("div",{className:"blog-title"},"Bel list"),n.a.createElement("div",{className:"blog-text"},"Si kdaj pomislil, da ko se rodiš, si kot bel, nepopisan list. Nato prve zapise, na ta tvoj lep beli list, naredijo tvoji starši, kasneje jim seveda pomagajo tudi stari starši (ker bog ne daj, brez njih res ne gre ;)). Nekaj časa so oni tvoji učitelji, vodiči, »vsevedi« in mogoče še kakšna starejša sestra ali brat, za povrh, da je mera polna ",n.a.createElement("span",{className:"emoji"},"😉"),". Ja, prav vsi te učijo, usmerjajo in itak vedo kaj je najbolje zate. Kasneje se temu »klanu« pridruži vrtec z vsemi pripadajočimi akterji (vrstniki in vzgojitelji), nato šola isti koncept zasedbe, samo v širšem krogu. To se nadaljuje skozi cel tvoj proces šolanja. Zraven pa puščajo svojo sled, na tem čudovitem listu, seveda tudi prijatelji…tisti »ta najboljši« in tisti malo manj »boljši«.",n.a.createElement("br",null),"Potem nastopi »ta resen« del….služba. Okolica in sodelavci pridno igrajo svojo vlogo pri pisanju na tvoj list.",n.a.createElement("br",null),"Nato spoznaš Ljubezen svojega življenja (če ne gre v prvo, pa mogoče v drugo, tretje….no, kakorkoli že ",n.a.createElement("span",{className:"emoji"},"😉"),").",n.a.createElement("br",null),n.a.createElement("br",null),"Takrat nastopiš v svoji najboljši verziji, ki jo potegneš na plano, čez vest ta »balast«.  Na začetku se ti razprejo krila, zadihaš s polnimi pljuči, imaš zalet. In ko imaš občutek, da boš poletel v svoji najboljši verziji…BAM…pristanek na zadnjico in dobrodošel v »realnosti«. Goriva je zmanjkalo ali smetana se je polizala.",n.a.createElement("br",null),"Na plano pridejo vsi ti »tvoji« zapisi. In velikokrat niti ne »porajtaš«, da pravzaprav razmišljaš, občutiš, razumeš kot si bil naučen. Nekje globoko v sebi pa ti tihi glasek govori, da mogoče pa le ni čisto vse tako ali »prav«, kot si vedel in znal da sedaj. Da mogoče obstaja kakšna drugačna realnost, tvoja realnost. Mogoče pa ti to, karkoli že, lahko izpelješ, se lahko naučiš, priučiš, si dovoliš povedati na glas kaj si misliš in kako razmišljaš, si dovoliš drugače občutiti, si dovoliš občutiti na sploh in si določene stvari tudi priznati.",n.a.createElement("br",null),n.a.createElement("br",null),"Mogoče, pa ti stvari LAHKO pelješ skozi življenje drugače kot tvoji starši, prijatelji sodelavci...",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("strong",null,"Vse je mogoče! Kar je v naši domišljiji je mogoče tudi v naši realnosti. Ampak POZOR!"),n.a.createElement("br",null),n.a.createElement("br",null),"Nič se ne spremeni  čez noč in nič se ne bo zgodilo samo od sebe. Vsaka sprememba zahteva svoj čas. Se zavedaš, koliko radirke potrebuješ in časa, da »zradiraš«, kar ti ne služi?",n.a.createElement("br",null),n.a.createElement("br",null),"Potrebno si je RESNIČNO želeti boljši, bolj po tvojih željah naravnan dan in življenje.",n.a.createElement("br",null),n.a.createElement("br",null),"Ker na tem tvoje čudovitem listu je veliko DOBRONAMERNIH zapisov (prepričanj in vzorcev).",n.a.createElement("br",null),n.a.createElement("br",null),"In da prideš do tega, kdo pravzaprav si TI TI in ne kdo si, kot te je definirala okolica in vsi njeni akterji prisotni v tvojem življenju, zato je potrebno delo na sebi. In za preseči vse to, kar te zadržuje, je potrebno zopet delati na sebi.",n.a.createElement("br",null),n.a.createElement("br",null),"Ja, če se odločiš za delo na sebi, ti garantiram, ne bo ti dolgčas in ne bo ti zmanjkalo dela  ",n.a.createElement("span",{className:"emoji"},"😃")," .",n.a.createElement("br",null),n.a.createElement("br",null),"Je pa noro dober OBČUTEK, ko se osvobodiš določenih spon, prepričan, vzorcev...POLETIŠ ",n.a.createElement("span",{className:"emoji"},"😉"))))))},i}(i.Component);t.default=d}}]);
//# sourceMappingURL=component---src-pages-blog-js-f049b09c980d9e926b3c.js.map