webpackJsonp([2],{MCp7:function(){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function s(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function c(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function u(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function h(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&O(t))this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!g(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(u(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(d)}),this.json=function(){return this.text().then(JSON.parse)},this}function f(t){var e=t.toUpperCase();return w.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=f(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function d(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function y(t){var e=new o;return t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function b(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],O=function(t){return t&&DataView.prototype.isPrototypeOf(t)},g=ArrayBuffer.isView||function(t){return t&&v.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},h.call(p.prototype),h.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];b.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=p,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,n){var o=new p(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL"),r(new b("response"in i?i.response:i.responseText,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},OG7k:function(t,e,r){"use strict";function n(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r("KM04"),s=r("8vpt"),c=r.n(s),u=(r("weoj"),r("sw5u"),function(t){var e=t.product;return Object(a.h)("div",{class:"productItem"},Object(a.h)("div",{class:" col-12 left"},e.attrs.variants.slice(0,1).map(function(){return Object(a.h)("div",null,Object(a.h)("a",{class:"addToCart",href:"/collection/lolo-zouai-x-stickybaby/"+e.attrs.handle},"   ",e.attrs.handle))})))}),l=u,h=(r("MCp7"),c.a.buildClient({accessToken:"720582fbbce8468d4d4724b80a0852d2",domain:"lolozouai.myshopify.com",appId:"6"}));!function(t){function e(e){var r=o(this,t.call(this,e));return r.state={products:[]},r}i(e,t),e.prototype.componentWillMount=function(){var t=this;h.fetchQueryProducts({collection_id:55301079082,sort_by:["manual"]}).then(function(e){t.setState({products:e})})},e.prototype.render=function(t,e){var r=e.products;return n(t),console.log(r),Object(a.h)("div",null,Object(a.h)("div",{class:"list fixed left"},"    ",r.map(function(t,e){return Object(a.h)(l,{key:e,product:t,onClick:window.addToCart})})," "))}}(a.Component)},QcT9:function(t,e,r){"use strict";function n(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=r("KM04"),s=r("weoj"),c=r("sw5u"),u=(r("utkE"),Object(a.h)("br",null)),l=Object(a.h)("br",null),h=Object(a.h)("span",{class:"sold"},"sold out"),f=function(t){var e=t.product,r=t.onClick;return Object(a.h)("div",{class:"col-6  mobile-col-12 productItem vinyl"},Object(a.h)("div",{class:"variants_contain col-12 left"},e.variants.slice(0,1).map(function(t,n){return Object(a.h)("div",null,Object(a.h)(s.a,{onClick:r,variant:t,key:n,isRoute:e.variants.length>1,productTitle:e.title,handle:e.handle}),Object(a.h)("div",null,e.images.slice(0,1).map(function(t){return Object(a.h)("div",null,Object(a.h)(c.Link,{class:"addToCart",href:"/merch/"+e.handle},Object(a.h)("img",{src:t.src}),u,Object(a.h)("h3",null,e.title,l,Object(a.h)("small",null,!1===e.attrs.variants.every.available?h:Object(a.h)("span",{class:"price"}," $",e.variants[0].price)))))})))})))},p=f,d=(r("OG7k"),r("MCp7"),r("qLaj")),y=r("FJnM"),b=r.n(y),m=Object(a.h)("div",{class:"shopLogo"},Object(a.h)("img",{src:"/assets/MERCHLOGO.jpg"})),v=Object(a.h)("img",{class:"dice",src:"/assets/PinkFuzzyDice.gif"}),O=Object(a.h)("div",{className:"shopbg bg"}),g=Object(a.h)("br",null),w=Object(a.h)("div",{class:"clearfix"}),j=Object(a.h)("br",null),_=function(t){function e(e){var r=o(this,t.call(this,e));return r.changeUrl=function(t,e){return t.split(".jpeg").join(e+".jpeg")},r.state={products:[]},r}return i(e,t),e.prototype.componentWillMount=function(){var t=this;d.b.collection.fetchWithProducts("Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzY1Nzg1Mzk3Mjkw").then(function(e){t.setState({products:e.products})})},e.prototype.render=function(t,e){var r=e.products;return n(t),Object(a.h)("div",{className:"page page__shop thin"},m,v,O,Object(a.h)(b.a,{htmlAttributes:{lang:"en",amp:void 0},title:"Shop",titleTemplate:"Lo-Rider - %s"}),Object(a.h)("div",{className:"link-item"},r.map(function(t){return Object(a.h)(c.Link,{href:"/merch/"+t.handle},t.title)})),Object(a.h)("div",{className:"variants"},"    ",r.map(function(t,e){return Object(a.h)(p,{key:e,product:t,onClick:window.addToCart})})," "),g,w,j)},e}(a.Component);e.default=_},utkE:function(t,e,r){"use strict";function n(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r("KM04"),s=(r("5D9O"),r("MCp7"),function(){var t=void 0,e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.buttonClassName,r=void 0===e?"pimg__btn":e,n=t.className,o=void 0===n?"pimg":n,i=t.dataSaver,a=void 0!==i&&i,s=t.fetchOnDemand,c=void 0!==s&&s,u=t.error,l=void 0===u?null:u,h=t.placeholderClassName,f=void 0===h?"pimg__placeholder":h,p=t.wrapperClassName,d=void 0===p?"pimg__wrapper":p;return"object"!=typeof a&&!0===a?a={wrapperClassName:d,buttonClassName:r}:"object"==typeof a&&(a={wrapperClassName:a.wrapperClassName||d,buttonClassName:a.buttonClassName||r}),{onError:function(t){t=t},getClassName:function(){return o},getButtonClassName:function(){return r},getDataSaver:function(){return a},getError:function(t){return t(l)},getFetchOnDemand:function(){return c},getPlaceholderClassName:function(){return f},getWrapperClassName:function(){return d}}};return function(r){return t||(t=e(r))}}()),c=s;r.d(e,!1,function(){return c});var u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};!function(t){function e(){for(var e,r,n,i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return e=r=o(this,t.call.apply(t,[this].concat(a))),r.state={blob:null,loading:!0,delayed:!1,placeholder:null},r.setBlob=function(t){return r.setState({blob:t})},r.setPlaceholder=function(t){return r.setState({placeholder:t})},r.setLoading=function(t){return r.setState({loading:t})},r.delayFetchingImage=function(t){return r.setState({delayed:t})},r.fetchImage=function(t){fetch(t).then(function(t){return t.blob()}).then(function(t){r.setBlob(URL.createObjectURL(t)),r.setLoading(!1),r.delayFetchingImage(!1)})},r.image=function(){return r.imgElement},r.fetchOnDemand=function(t){try{var e=new IntersectionObserver(function(n){n[0].isIntersecting&&(r.fetchImage(t),r.delayFetchingImage(!1),e.disconnect())});e.observe(r.image())}catch(e){console.warn("fetchOnDemand not supported on this browser"),r.fetchImage(t),r.delayFetchingImage(!1)}},n=e,o(r,n)}i(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.dataSaver,r=t.src,n=t.fetchOnDemand,o=c(),i=o.getDataSaver,a=o.getFetchOnDemand;if(r&&r.includes("cloudinary")){var s=s||r.replace("/upload/","/upload/c_thumb,w_30/");this.setPlaceholder(s)}e||i()?this.delayFetchingImage(!0):n||a()?(this.setLoading(!0),this.fetchOnDemand(r)):this.fetchImage(r)},e.prototype.componentWillReceiveProps=function(t){var e=t.dataSaver,r=t.fetchOnDemand,n=t.src,o=c(),i=o.getDataSaver,a=o.getFetchOnDemand;e||i()?this.delayFetchingImage(!0):r||a()?(this.setLoading(!0),this.fetchOnDemand(n)):this.fetchImage(n)},e.prototype.render=function(){var t=this,e=this.props,r=e.className,o=e.dataSaver,i=e.placeholderClassName,s=e.placeholder,l=n(e,["className","dataSaver","fetchOnDemand","placeholderClassName","src","placeholder"]),h=this.state,f=h.blob,p=h.delayed,d=h.loading,y=c(),b=y.getButtonClassName,m=y.getClassName,v=y.getDataSaver,O=y.getPlaceholderClassName,g=y.getWrapperClassName,w=r?r+" "+(i||O()):i?(r||m())+" "+i:m()+" "+O();return(o||v())&&d||p?Object(a.h)("div",{className:g()},Object(a.h)("img",u({className:w,src:s||this.state.placeholder,ref:function(e){return t.imgElement=e}},l)),Object(a.h)("button",{className:b(),onClick:function(){return t.fetchImage(t.props.src)}},"Load image")):d?Object(a.h)("img",u({className:w,src:s||this.state.placeholder,ref:function(e){return t.imgElement=e}},l)):Object(a.h)("img",u({className:r||m(),src:f},l))}}(a.Component)},weoj:function(t,e,r){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var i=r("KM04"),a=(r.n(i),r("sw5u")),s=(r.n(a),Object(i.h)("div",{class:"col-12 left variant_item"}));e.a=function(t){function e(e){var r=n(this,t.call(this,e));return r.state={quantity:1},r}return o(e,t),e.prototype.changeQuantity=function(t){var e=this.state.quantity;e+t>0&&this.setState({quantity:e+t})},e.prototype.render=function(){return s},e}(i.Component)}});
//# sourceMappingURL=route-merch.chunk.9a168.js.map