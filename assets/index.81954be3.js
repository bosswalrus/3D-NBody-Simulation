(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Va={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Fg=Symbol.for("react.portal"),zg=Symbol.for("react.fragment"),kg=Symbol.for("react.strict_mode"),Og=Symbol.for("react.profiler"),Ug=Symbol.for("react.provider"),Bg=Symbol.for("react.context"),Gg=Symbol.for("react.forward_ref"),Vg=Symbol.for("react.suspense"),Hg=Symbol.for("react.memo"),Wg=Symbol.for("react.lazy"),Ef=Symbol.iterator;function Xg(n){return n===null||typeof n!="object"?null:(n=Ef&&n[Ef]||n["@@iterator"],typeof n=="function"?n:null)}var $h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zh=Object.assign,Kh={};function fs(n,e,t){this.props=n,this.context=e,this.refs=Kh,this.updater=t||$h}fs.prototype.isReactComponent={};fs.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};fs.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Qh(){}Qh.prototype=fs.prototype;function Sc(n,e,t){this.props=n,this.context=e,this.refs=Kh,this.updater=t||$h}var Mc=Sc.prototype=new Qh;Mc.constructor=Sc;Zh(Mc,fs.prototype);Mc.isPureReactComponent=!0;var Tf=Array.isArray,Jh=Object.prototype.hasOwnProperty,wc={current:null},ep={key:!0,ref:!0,__self:!0,__source:!0};function tp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jh.call(e,i)&&!ep.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:uo,type:n,key:s,ref:o,props:r,_owner:wc.current}}function jg(n,e){return{$$typeof:uo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Ec(n){return typeof n=="object"&&n!==null&&n.$$typeof===uo}function qg(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Cf=/\/+/g;function hl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?qg(""+n.key):e.toString(36)}function ia(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case uo:case Fg:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+hl(o,0):i,Tf(r)?(t="",n!=null&&(t=n.replace(Cf,"$&/")+"/"),ia(r,e,t,"",function(u){return u})):r!=null&&(Ec(r)&&(r=jg(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+hl(s,a);o+=ia(s,e,t,l,r)}else if(l=Xg(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+hl(s,a++),o+=ia(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xo(n,e,t){if(n==null)return n;var i=[],r=0;return ia(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Yg(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Pt={current:null},ra={transition:null},$g={ReactCurrentDispatcher:Pt,ReactCurrentBatchConfig:ra,ReactCurrentOwner:wc};be.Children={map:xo,forEach:function(n,e,t){xo(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return xo(n,function(){e++}),e},toArray:function(n){return xo(n,function(e){return e})||[]},only:function(n){if(!Ec(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};be.Component=fs;be.Fragment=zg;be.Profiler=Og;be.PureComponent=Sc;be.StrictMode=kg;be.Suspense=Vg;be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$g;be.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Zh({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Jh.call(e,l)&&!ep.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:uo,type:n.type,key:r,ref:s,props:i,_owner:o}};be.createContext=function(n){return n={$$typeof:Bg,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Ug,_context:n},n.Consumer=n};be.createElement=tp;be.createFactory=function(n){var e=tp.bind(null,n);return e.type=n,e};be.createRef=function(){return{current:null}};be.forwardRef=function(n){return{$$typeof:Gg,render:n}};be.isValidElement=Ec;be.lazy=function(n){return{$$typeof:Wg,_payload:{_status:-1,_result:n},_init:Yg}};be.memo=function(n,e){return{$$typeof:Hg,type:n,compare:e===void 0?null:e}};be.startTransition=function(n){var e=ra.transition;ra.transition={};try{n()}finally{ra.transition=e}};be.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};be.useCallback=function(n,e){return Pt.current.useCallback(n,e)};be.useContext=function(n){return Pt.current.useContext(n)};be.useDebugValue=function(){};be.useDeferredValue=function(n){return Pt.current.useDeferredValue(n)};be.useEffect=function(n,e){return Pt.current.useEffect(n,e)};be.useId=function(){return Pt.current.useId()};be.useImperativeHandle=function(n,e,t){return Pt.current.useImperativeHandle(n,e,t)};be.useInsertionEffect=function(n,e){return Pt.current.useInsertionEffect(n,e)};be.useLayoutEffect=function(n,e){return Pt.current.useLayoutEffect(n,e)};be.useMemo=function(n,e){return Pt.current.useMemo(n,e)};be.useReducer=function(n,e,t){return Pt.current.useReducer(n,e,t)};be.useRef=function(n){return Pt.current.useRef(n)};be.useState=function(n){return Pt.current.useState(n)};be.useSyncExternalStore=function(n,e,t){return Pt.current.useSyncExternalStore(n,e,t)};be.useTransition=function(){return Pt.current.useTransition()};be.version="18.2.0";(function(n){n.exports=be})(Va);var xu={},np={exports:{}},Yt={},ip={exports:{}},rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(R,D){var F=R.length;R.push(D);e:for(;0<F;){var Y=F-1>>>1,j=R[Y];if(0<r(j,D))R[Y]=D,R[F]=j,F=Y;else break e}}function t(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var D=R[0],F=R.pop();if(F!==D){R[0]=F;e:for(var Y=0,j=R.length,K=j>>>1;Y<K;){var ue=2*(Y+1)-1,me=R[ue],W=ue+1,Ae=R[W];if(0>r(me,F))W<j&&0>r(Ae,me)?(R[Y]=Ae,R[W]=F,Y=W):(R[Y]=me,R[ue]=F,Y=ue);else if(W<j&&0>r(Ae,F))R[Y]=Ae,R[W]=F,Y=W;else break e}}return D}function r(R,D){var F=R.sortIndex-D.sortIndex;return F!==0?F:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,v=!1,_=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var D=t(u);D!==null;){if(D.callback===null)i(u);else if(D.startTime<=R)i(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=t(u)}}function M(R){if(p=!1,x(R),!_)if(t(l)!==null)_=!0,G(S);else{var D=t(u);D!==null&&q(M,D.startTime-R)}}function S(R,D){_=!1,p&&(p=!1,m(y),y=-1),v=!0;var F=f;try{for(x(D),c=t(l);c!==null&&(!(c.expirationTime>D)||R&&!O());){var Y=c.callback;if(typeof Y=="function"){c.callback=null,f=c.priorityLevel;var j=Y(c.expirationTime<=D);D=n.unstable_now(),typeof j=="function"?c.callback=j:c===t(l)&&i(l),x(D)}else i(l);c=t(l)}if(c!==null)var K=!0;else{var ue=t(u);ue!==null&&q(M,ue.startTime-D),K=!1}return K}finally{c=null,f=F,v=!1}}var C=!1,L=null,y=-1,A=5,I=-1;function O(){return!(n.unstable_now()-I<A)}function ie(){if(L!==null){var R=n.unstable_now();I=R;var D=!0;try{D=L(!0,R)}finally{D?Q():(C=!1,L=null)}}else C=!1}var Q;if(typeof g=="function")Q=function(){g(ie)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,$=z.port2;z.port1.onmessage=ie,Q=function(){$.postMessage(null)}}else Q=function(){h(ie,0)};function G(R){L=R,C||(C=!0,Q())}function q(R,D){y=h(function(){R(n.unstable_now())},D)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){_||v||(_=!0,G(S))},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(R){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var F=f;f=D;try{return R()}finally{f=F}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=f;f=R;try{return D()}finally{f=F}},n.unstable_scheduleCallback=function(R,D,F){var Y=n.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Y+F:Y):F=Y,R){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=F+j,R={id:d++,callback:D,priorityLevel:R,startTime:F,expirationTime:j,sortIndex:-1},F>Y?(R.sortIndex=F,e(u,R),t(l)===null&&R===t(u)&&(p?(m(y),y=-1):p=!0,q(M,F-Y))):(R.sortIndex=j,e(l,R),_||v||(_=!0,G(S))),R},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(R){var D=f;return function(){var F=f;f=D;try{return R.apply(this,arguments)}finally{f=F}}}})(rp);(function(n){n.exports=rp})(ip);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp=Va.exports,qt=ip.exports;function J(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var op=new Set,Ws={};function ar(n,e){Jr(n,e),Jr(n+"Capture",e)}function Jr(n,e){for(Ws[n]=e,n=0;n<e.length;n++)op.add(e[n])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=Object.prototype.hasOwnProperty,Zg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bf={},Af={};function Kg(n){return yu.call(Af,n)?!0:yu.call(bf,n)?!1:Zg.test(n)?Af[n]=!0:(bf[n]=!0,!1)}function Qg(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Jg(n,e,t,i){if(e===null||typeof e>"u"||Qg(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_t[n]=new Dt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];_t[e]=new Dt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){_t[n]=new Dt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_t[n]=new Dt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_t[n]=new Dt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){_t[n]=new Dt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){_t[n]=new Dt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){_t[n]=new Dt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){_t[n]=new Dt(n,5,!1,n.toLowerCase(),null,!1,!1)});var Tc=/[\-:]([a-z])/g;function Cc(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Tc,Cc);_t[e]=new Dt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Tc,Cc);_t[e]=new Dt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Tc,Cc);_t[e]=new Dt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){_t[n]=new Dt(n,1,!1,n.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){_t[n]=new Dt(n,1,!1,n.toLowerCase(),null,!0,!0)});function bc(n,e,t,i){var r=_t.hasOwnProperty(e)?_t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jg(e,t,r,i)&&(t=null),i||r===null?Kg(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ei=sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),Rr=Symbol.for("react.portal"),Ir=Symbol.for("react.fragment"),Ac=Symbol.for("react.strict_mode"),Su=Symbol.for("react.profiler"),ap=Symbol.for("react.provider"),lp=Symbol.for("react.context"),Lc=Symbol.for("react.forward_ref"),Mu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),Pc=Symbol.for("react.memo"),fi=Symbol.for("react.lazy"),up=Symbol.for("react.offscreen"),Lf=Symbol.iterator;function vs(n){return n===null||typeof n!="object"?null:(n=Lf&&n[Lf]||n["@@iterator"],typeof n=="function"?n:null)}var qe=Object.assign,pl;function As(n){if(pl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);pl=e&&e[1]||""}return`
`+pl+n}var ml=!1;function gl(n,e){if(!n||ml)return"";ml=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?As(n):""}function e0(n){switch(n.tag){case 5:return As(n.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return n=gl(n.type,!1),n;case 11:return n=gl(n.type.render,!1),n;case 1:return n=gl(n.type,!0),n;default:return""}}function Eu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ir:return"Fragment";case Rr:return"Portal";case Su:return"Profiler";case Ac:return"StrictMode";case Mu:return"Suspense";case wu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case lp:return(n.displayName||"Context")+".Consumer";case ap:return(n._context.displayName||"Context")+".Provider";case Lc:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pc:return e=n.displayName||null,e!==null?e:Eu(n.type)||"Memo";case fi:e=n._payload,n=n._init;try{return Eu(n(e))}catch{}}return null}function t0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eu(e);case 8:return e===Ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ci(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function cp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n0(n){var e=cp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function So(n){n._valueTracker||(n._valueTracker=n0(n))}function fp(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=cp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function va(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Tu(n,e){var t=e.checked;return qe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function Pf(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ci(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dp(n,e){e=e.checked,e!=null&&bc(n,"checked",e,!1)}function Cu(n,e){dp(n,e);var t=Ci(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?bu(n,e.type,t):e.hasOwnProperty("defaultValue")&&bu(n,e.type,Ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Df(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function bu(n,e,t){(e!=="number"||va(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ls=Array.isArray;function Xr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ci(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Au(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return qe({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Rf(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(J(92));if(Ls(t)){if(1<t.length)throw Error(J(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ci(t)}}function hp(n,e){var t=Ci(e.value),i=Ci(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function If(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function pp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?pp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Mo,mp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Mo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Xs(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Ns={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i0=["Webkit","ms","Moz","O"];Object.keys(Ns).forEach(function(n){i0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Ns[e]=Ns[n]})});function gp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Ns.hasOwnProperty(n)&&Ns[n]?(""+e).trim():e+"px"}function vp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=gp(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var r0=qe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pu(n,e){if(e){if(r0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Du(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=null;function Dc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Iu=null,jr=null,qr=null;function Nf(n){if(n=ho(n)){if(typeof Iu!="function")throw Error(J(280));var e=n.stateNode;e&&(e=qa(e),Iu(n.stateNode,n.type,e))}}function _p(n){jr?qr?qr.push(n):qr=[n]:jr=n}function xp(){if(jr){var n=jr,e=qr;if(qr=jr=null,Nf(n),e)for(n=0;n<e.length;n++)Nf(e[n])}}function yp(n,e){return n(e)}function Sp(){}var vl=!1;function Mp(n,e,t){if(vl)return n(e,t);vl=!0;try{return yp(n,e,t)}finally{vl=!1,(jr!==null||qr!==null)&&(Sp(),xp())}}function js(n,e){var t=n.stateNode;if(t===null)return null;var i=qa(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(J(231,e,typeof t));return t}var Nu=!1;if(Zn)try{var _s={};Object.defineProperty(_s,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{Nu=!1}function s0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(d){this.onError(d)}}var Fs=!1,_a=null,xa=!1,Fu=null,o0={onError:function(n){Fs=!0,_a=n}};function a0(n,e,t,i,r,s,o,a,l){Fs=!1,_a=null,s0.apply(o0,arguments)}function l0(n,e,t,i,r,s,o,a,l){if(a0.apply(this,arguments),Fs){if(Fs){var u=_a;Fs=!1,_a=null}else throw Error(J(198));xa||(xa=!0,Fu=u)}}function lr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function wp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Ff(n){if(lr(n)!==n)throw Error(J(188))}function u0(n){var e=n.alternate;if(!e){if(e=lr(n),e===null)throw Error(J(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Ff(r),n;if(s===i)return Ff(r),e;s=s.sibling}throw Error(J(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(J(189))}}if(t.alternate!==i)throw Error(J(190))}if(t.tag!==3)throw Error(J(188));return t.stateNode.current===t?n:e}function Ep(n){return n=u0(n),n!==null?Tp(n):null}function Tp(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Tp(n);if(e!==null)return e;n=n.sibling}return null}var Cp=qt.unstable_scheduleCallback,zf=qt.unstable_cancelCallback,c0=qt.unstable_shouldYield,f0=qt.unstable_requestPaint,Je=qt.unstable_now,d0=qt.unstable_getCurrentPriorityLevel,Rc=qt.unstable_ImmediatePriority,bp=qt.unstable_UserBlockingPriority,ya=qt.unstable_NormalPriority,h0=qt.unstable_LowPriority,Ap=qt.unstable_IdlePriority,Ha=null,Dn=null;function p0(n){if(Dn&&typeof Dn.onCommitFiberRoot=="function")try{Dn.onCommitFiberRoot(Ha,n,void 0,(n.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:v0,m0=Math.log,g0=Math.LN2;function v0(n){return n>>>=0,n===0?32:31-(m0(n)/g0|0)|0}var wo=64,Eo=4194304;function Ps(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Sa(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ps(a):(s&=o,s!==0&&(i=Ps(s)))}else o=t&~r,o!==0?i=Ps(o):s!==0&&(i=Ps(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-xn(e),r=1<<t,i|=n[t],e&=~r;return i}function _0(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x0(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-xn(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=_0(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function zu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Lp(){var n=wo;return wo<<=1,(wo&4194240)===0&&(wo=64),n}function _l(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function co(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-xn(e),n[e]=t}function y0(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-xn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ic(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-xn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Oe=0;function Pp(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Dp,Nc,Rp,Ip,Np,ku=!1,To=[],vi=null,_i=null,xi=null,qs=new Map,Ys=new Map,hi=[],S0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kf(n,e){switch(n){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":_i=null;break;case"mouseover":case"mouseout":xi=null;break;case"pointerover":case"pointerout":qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ys.delete(e.pointerId)}}function xs(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ho(e),e!==null&&Nc(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function M0(n,e,t,i,r){switch(e){case"focusin":return vi=xs(vi,n,e,t,i,r),!0;case"dragenter":return _i=xs(_i,n,e,t,i,r),!0;case"mouseover":return xi=xs(xi,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return qs.set(s,xs(qs.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ys.set(s,xs(Ys.get(s)||null,n,e,t,i,r)),!0}return!1}function Fp(n){var e=Gi(n.target);if(e!==null){var t=lr(e);if(t!==null){if(e=t.tag,e===13){if(e=wp(t),e!==null){n.blockedOn=e,Np(n.priority,function(){Rp(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Ou(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ru=i,t.target.dispatchEvent(i),Ru=null}else return e=ho(t),e!==null&&Nc(e),n.blockedOn=t,!1;e.shift()}return!0}function Of(n,e,t){sa(n)&&t.delete(e)}function w0(){ku=!1,vi!==null&&sa(vi)&&(vi=null),_i!==null&&sa(_i)&&(_i=null),xi!==null&&sa(xi)&&(xi=null),qs.forEach(Of),Ys.forEach(Of)}function ys(n,e){n.blockedOn===e&&(n.blockedOn=null,ku||(ku=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,w0)))}function $s(n){function e(r){return ys(r,n)}if(0<To.length){ys(To[0],n);for(var t=1;t<To.length;t++){var i=To[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vi!==null&&ys(vi,n),_i!==null&&ys(_i,n),xi!==null&&ys(xi,n),qs.forEach(e),Ys.forEach(e),t=0;t<hi.length;t++)i=hi[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<hi.length&&(t=hi[0],t.blockedOn===null);)Fp(t),t.blockedOn===null&&hi.shift()}var Yr=ei.ReactCurrentBatchConfig,Ma=!0;function E0(n,e,t,i){var r=Oe,s=Yr.transition;Yr.transition=null;try{Oe=1,Fc(n,e,t,i)}finally{Oe=r,Yr.transition=s}}function T0(n,e,t,i){var r=Oe,s=Yr.transition;Yr.transition=null;try{Oe=4,Fc(n,e,t,i)}finally{Oe=r,Yr.transition=s}}function Fc(n,e,t,i){if(Ma){var r=Ou(n,e,t,i);if(r===null)Al(n,e,i,wa,t),kf(n,i);else if(M0(r,n,e,t,i))i.stopPropagation();else if(kf(n,i),e&4&&-1<S0.indexOf(n)){for(;r!==null;){var s=ho(r);if(s!==null&&Dp(s),s=Ou(n,e,t,i),s===null&&Al(n,e,i,wa,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Al(n,e,i,null,t)}}var wa=null;function Ou(n,e,t,i){if(wa=null,n=Dc(i),n=Gi(n),n!==null)if(e=lr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=wp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return wa=n,null}function zp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d0()){case Rc:return 1;case bp:return 4;case ya:case h0:return 16;case Ap:return 536870912;default:return 16}default:return 16}}var mi=null,zc=null,oa=null;function kp(){if(oa)return oa;var n,e=zc,t=e.length,i,r="value"in mi?mi.value:mi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return oa=r.slice(n,1<i?1-i:void 0)}function aa(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Co(){return!0}function Uf(){return!1}function $t(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Co:Uf,this.isPropagationStopped=Uf,this}return qe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=$t(ds),fo=qe({},ds,{view:0,detail:0}),C0=$t(fo),xl,yl,Ss,Wa=qe({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ss&&(Ss&&n.type==="mousemove"?(xl=n.screenX-Ss.screenX,yl=n.screenY-Ss.screenY):yl=xl=0,Ss=n),xl)},movementY:function(n){return"movementY"in n?n.movementY:yl}}),Bf=$t(Wa),b0=qe({},Wa,{dataTransfer:0}),A0=$t(b0),L0=qe({},fo,{relatedTarget:0}),Sl=$t(L0),P0=qe({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),D0=$t(P0),R0=qe({},ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),I0=$t(R0),N0=qe({},ds,{data:0}),Gf=$t(N0),F0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=k0[n])?!!e[n]:!1}function Oc(){return O0}var U0=qe({},fo,{key:function(n){if(n.key){var e=F0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=aa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?z0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(n){return n.type==="keypress"?aa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?aa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),B0=$t(U0),G0=qe({},Wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=$t(G0),V0=qe({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),H0=$t(V0),W0=qe({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=$t(W0),j0=qe({},Wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),q0=$t(j0),Y0=[9,13,27,32],Uc=Zn&&"CompositionEvent"in window,zs=null;Zn&&"documentMode"in document&&(zs=document.documentMode);var $0=Zn&&"TextEvent"in window&&!zs,Op=Zn&&(!Uc||zs&&8<zs&&11>=zs),Hf=String.fromCharCode(32),Wf=!1;function Up(n,e){switch(n){case"keyup":return Y0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Nr=!1;function Z0(n,e){switch(n){case"compositionend":return Bp(e);case"keypress":return e.which!==32?null:(Wf=!0,Hf);case"textInput":return n=e.data,n===Hf&&Wf?null:n;default:return null}}function K0(n,e){if(Nr)return n==="compositionend"||!Uc&&Up(n,e)?(n=kp(),oa=zc=mi=null,Nr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Op&&e.locale!=="ko"?null:e.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Q0[n.type]:e==="textarea"}function Gp(n,e,t,i){_p(i),e=Ea(e,"onChange"),0<e.length&&(t=new kc("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ks=null,Zs=null;function J0(n){Qp(n,0)}function Xa(n){var e=kr(n);if(fp(e))return n}function ev(n,e){if(n==="change")return e}var Vp=!1;if(Zn){var Ml;if(Zn){var wl="oninput"in document;if(!wl){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),wl=typeof jf.oninput=="function"}Ml=wl}else Ml=!1;Vp=Ml&&(!document.documentMode||9<document.documentMode)}function qf(){ks&&(ks.detachEvent("onpropertychange",Hp),Zs=ks=null)}function Hp(n){if(n.propertyName==="value"&&Xa(Zs)){var e=[];Gp(e,Zs,n,Dc(n)),Mp(J0,e)}}function tv(n,e,t){n==="focusin"?(qf(),ks=e,Zs=t,ks.attachEvent("onpropertychange",Hp)):n==="focusout"&&qf()}function nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Xa(Zs)}function iv(n,e){if(n==="click")return Xa(e)}function rv(n,e){if(n==="input"||n==="change")return Xa(e)}function sv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Mn=typeof Object.is=="function"?Object.is:sv;function Ks(n,e){if(Mn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!yu.call(e,r)||!Mn(n[r],e[r]))return!1}return!0}function Yf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function $f(n,e){var t=Yf(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Yf(t)}}function Wp(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Wp(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Xp(){for(var n=window,e=va();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=va(n.document)}return e}function Bc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ov(n){var e=Xp(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Wp(t.ownerDocument.documentElement,t)){if(i!==null&&Bc(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=$f(t,s);var o=$f(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var av=Zn&&"documentMode"in document&&11>=document.documentMode,Fr=null,Uu=null,Os=null,Bu=!1;function Zf(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Bu||Fr==null||Fr!==va(i)||(i=Fr,"selectionStart"in i&&Bc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Os&&Ks(Os,i)||(Os=i,i=Ea(Uu,"onSelect"),0<i.length&&(e=new kc("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Fr)))}function bo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var zr={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},El={},jp={};Zn&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function ja(n){if(El[n])return El[n];if(!zr[n])return n;var e=zr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in jp)return El[n]=e[t];return n}var qp=ja("animationend"),Yp=ja("animationiteration"),$p=ja("animationstart"),Zp=ja("transitionend"),Kp=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(n,e){Kp.set(n,e),ar(e,[n])}for(var Tl=0;Tl<Kf.length;Tl++){var Cl=Kf[Tl],lv=Cl.toLowerCase(),uv=Cl[0].toUpperCase()+Cl.slice(1);Ai(lv,"on"+uv)}Ai(qp,"onAnimationEnd");Ai(Yp,"onAnimationIteration");Ai($p,"onAnimationStart");Ai("dblclick","onDoubleClick");Ai("focusin","onFocus");Ai("focusout","onBlur");Ai(Zp,"onTransitionEnd");Jr("onMouseEnter",["mouseout","mouseover"]);Jr("onMouseLeave",["mouseout","mouseover"]);Jr("onPointerEnter",["pointerout","pointerover"]);Jr("onPointerLeave",["pointerout","pointerover"]);ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Qf(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,l0(i,e,void 0,n),n.currentTarget=null}function Qp(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qf(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qf(r,a,u),s=l}}}if(xa)throw n=Fu,xa=!1,Fu=null,n}function Be(n,e){var t=e[Xu];t===void 0&&(t=e[Xu]=new Set);var i=n+"__bubble";t.has(i)||(Jp(e,n,2,!1),t.add(i))}function bl(n,e,t){var i=0;e&&(i|=4),Jp(t,n,i,e)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Qs(n){if(!n[Ao]){n[Ao]=!0,op.forEach(function(t){t!=="selectionchange"&&(cv.has(t)||bl(t,!1,n),bl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ao]||(e[Ao]=!0,bl("selectionchange",!1,e))}}function Jp(n,e,t,i){switch(zp(e)){case 1:var r=E0;break;case 4:r=T0;break;default:r=Fc}t=r.bind(null,e,t,n),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Al(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Gi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Mp(function(){var u=s,d=Dc(t),c=[];e:{var f=Kp.get(n);if(f!==void 0){var v=kc,_=n;switch(n){case"keypress":if(aa(t)===0)break e;case"keydown":case"keyup":v=B0;break;case"focusin":_="focus",v=Sl;break;case"focusout":_="blur",v=Sl;break;case"beforeblur":case"afterblur":v=Sl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=H0;break;case qp:case Yp:case $p:v=D0;break;case Zp:v=X0;break;case"scroll":v=C0;break;case"wheel":v=q0;break;case"copy":case"cut":case"paste":v=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vf}var p=(e&4)!==0,h=!p&&n==="scroll",m=p?f!==null?f+"Capture":null:f;p=[];for(var g=u,x;g!==null;){x=g;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,m!==null&&(M=js(g,m),M!=null&&p.push(Js(g,M,x)))),h)break;g=g.return}0<p.length&&(f=new v(f,_,null,t,d),c.push({event:f,listeners:p}))}}if((e&7)===0){e:{if(f=n==="mouseover"||n==="pointerover",v=n==="mouseout"||n==="pointerout",f&&t!==Ru&&(_=t.relatedTarget||t.fromElement)&&(Gi(_)||_[Kn]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(_=t.relatedTarget||t.toElement,v=u,_=_?Gi(_):null,_!==null&&(h=lr(_),_!==h||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(p=Bf,M="onMouseLeave",m="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(p=Vf,M="onPointerLeave",m="onPointerEnter",g="pointer"),h=v==null?f:kr(v),x=_==null?f:kr(_),f=new p(M,g+"leave",v,t,d),f.target=h,f.relatedTarget=x,M=null,Gi(d)===u&&(p=new p(m,g+"enter",_,t,d),p.target=x,p.relatedTarget=h,M=p),h=M,v&&_)t:{for(p=v,m=_,g=0,x=p;x;x=hr(x))g++;for(x=0,M=m;M;M=hr(M))x++;for(;0<g-x;)p=hr(p),g--;for(;0<x-g;)m=hr(m),x--;for(;g--;){if(p===m||m!==null&&p===m.alternate)break t;p=hr(p),m=hr(m)}p=null}else p=null;v!==null&&Jf(c,f,v,p,!1),_!==null&&h!==null&&Jf(c,h,_,p,!0)}}e:{if(f=u?kr(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var S=ev;else if(Xf(f))if(Vp)S=rv;else{S=nv;var C=tv}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=iv);if(S&&(S=S(n,u))){Gp(c,S,t,d);break e}C&&C(n,f,u),n==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&bu(f,"number",f.value)}switch(C=u?kr(u):window,n){case"focusin":(Xf(C)||C.contentEditable==="true")&&(Fr=C,Uu=u,Os=null);break;case"focusout":Os=Uu=Fr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,Zf(c,t,d);break;case"selectionchange":if(av)break;case"keydown":case"keyup":Zf(c,t,d)}var L;if(Uc)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Nr?Up(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(Op&&t.locale!=="ko"&&(Nr||y!=="onCompositionStart"?y==="onCompositionEnd"&&Nr&&(L=kp()):(mi=d,zc="value"in mi?mi.value:mi.textContent,Nr=!0)),C=Ea(u,y),0<C.length&&(y=new Gf(y,n,null,t,d),c.push({event:y,listeners:C}),L?y.data=L:(L=Bp(t),L!==null&&(y.data=L)))),(L=$0?Z0(n,t):K0(n,t))&&(u=Ea(u,"onBeforeInput"),0<u.length&&(d=new Gf("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:u}),d.data=L))}Qp(c,e)})}function Js(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ea(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=js(n,t),s!=null&&i.unshift(Js(n,s,r)),s=js(n,e),s!=null&&i.push(Js(n,s,r))),n=n.return}return i}function hr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jf(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=js(t,s),l!=null&&o.unshift(Js(t,l,a))):r||(l=js(t,s),l!=null&&o.push(Js(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var fv=/\r\n?/g,dv=/\u0000|\uFFFD/g;function ed(n){return(typeof n=="string"?n:""+n).replace(fv,`
`).replace(dv,"")}function Lo(n,e,t){if(e=ed(e),ed(n)!==e&&t)throw Error(J(425))}function Ta(){}var Gu=null,Vu=null;function Hu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(n){return td.resolve(null).then(n).catch(mv)}:Wu;function mv(n){setTimeout(function(){throw n})}function Ll(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),$s(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);$s(e)}function yi(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function nd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var hs=Math.random().toString(36).slice(2),Ln="__reactFiber$"+hs,eo="__reactProps$"+hs,Kn="__reactContainer$"+hs,Xu="__reactEvents$"+hs,gv="__reactListeners$"+hs,vv="__reactHandles$"+hs;function Gi(n){var e=n[Ln];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Kn]||t[Ln]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=nd(n);n!==null;){if(t=n[Ln])return t;n=nd(n)}return e}n=t,t=n.parentNode}return null}function ho(n){return n=n[Ln]||n[Kn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function kr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(J(33))}function qa(n){return n[eo]||null}var ju=[],Or=-1;function Li(n){return{current:n}}function Ge(n){0>Or||(n.current=ju[Or],ju[Or]=null,Or--)}function Ue(n,e){Or++,ju[Or]=n.current,n.current=e}var bi={},Et=Li(bi),zt=Li(!1),Ki=bi;function es(n,e){var t=n.type.contextTypes;if(!t)return bi;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function kt(n){return n=n.childContextTypes,n!=null}function Ca(){Ge(zt),Ge(Et)}function id(n,e,t){if(Et.current!==bi)throw Error(J(168));Ue(Et,e),Ue(zt,t)}function em(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,t0(n)||"Unknown",r));return qe({},t,i)}function ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||bi,Ki=Et.current,Ue(Et,n),Ue(zt,zt.current),!0}function rd(n,e,t){var i=n.stateNode;if(!i)throw Error(J(169));t?(n=em(n,e,Ki),i.__reactInternalMemoizedMergedChildContext=n,Ge(zt),Ge(Et),Ue(Et,n)):Ge(zt),Ue(zt,t)}var Hn=null,Ya=!1,Pl=!1;function tm(n){Hn===null?Hn=[n]:Hn.push(n)}function _v(n){Ya=!0,tm(n)}function Pi(){if(!Pl&&Hn!==null){Pl=!0;var n=0,e=Oe;try{var t=Hn;for(Oe=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Hn=null,Ya=!1}catch(r){throw Hn!==null&&(Hn=Hn.slice(n+1)),Cp(Rc,Pi),r}finally{Oe=e,Pl=!1}}return null}var Ur=[],Br=0,Aa=null,La=0,en=[],tn=0,Qi=null,Xn=1,jn="";function zi(n,e){Ur[Br++]=La,Ur[Br++]=Aa,Aa=n,La=e}function nm(n,e,t){en[tn++]=Xn,en[tn++]=jn,en[tn++]=Qi,Qi=n;var i=Xn;n=jn;var r=32-xn(i)-1;i&=~(1<<r),t+=1;var s=32-xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Xn=1<<32-xn(e)+r|t<<r|i,jn=s+n}else Xn=1<<s|t<<r|i,jn=n}function Gc(n){n.return!==null&&(zi(n,1),nm(n,1,0))}function Vc(n){for(;n===Aa;)Aa=Ur[--Br],Ur[Br]=null,La=Ur[--Br],Ur[Br]=null;for(;n===Qi;)Qi=en[--tn],en[tn]=null,jn=en[--tn],en[tn]=null,Xn=en[--tn],en[tn]=null}var jt=null,Xt=null,He=!1,vn=null;function im(n,e){var t=sn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function sd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,jt=n,Xt=yi(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,jt=n,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Qi!==null?{id:Xn,overflow:jn}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=sn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,jt=n,Xt=null,!0):!1;default:return!1}}function qu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yu(n){if(He){var e=Xt;if(e){var t=e;if(!sd(n,e)){if(qu(n))throw Error(J(418));e=yi(t.nextSibling);var i=jt;e&&sd(n,e)?im(i,t):(n.flags=n.flags&-4097|2,He=!1,jt=n)}}else{if(qu(n))throw Error(J(418));n.flags=n.flags&-4097|2,He=!1,jt=n}}}function od(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;jt=n}function Po(n){if(n!==jt)return!1;if(!He)return od(n),He=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Hu(n.type,n.memoizedProps)),e&&(e=Xt)){if(qu(n))throw rm(),Error(J(418));for(;e;)im(n,e),e=yi(e.nextSibling)}if(od(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(J(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Xt=yi(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Xt=null}}else Xt=jt?yi(n.stateNode.nextSibling):null;return!0}function rm(){for(var n=Xt;n;)n=yi(n.nextSibling)}function ts(){Xt=jt=null,He=!1}function Hc(n){vn===null?vn=[n]:vn.push(n)}var xv=ei.ReactCurrentBatchConfig;function mn(n,e){if(n&&n.defaultProps){e=qe({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Pa=Li(null),Da=null,Gr=null,Wc=null;function Xc(){Wc=Gr=Da=null}function jc(n){var e=Pa.current;Ge(Pa),n._currentValue=e}function $u(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function $r(n,e){Da=n,Wc=Gr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Ft=!0),n.firstContext=null)}function ln(n){var e=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:e,next:null},Gr===null){if(Da===null)throw Error(J(308));Gr=n,Da.dependencies={lanes:0,firstContext:n}}else Gr=Gr.next=n;return e}var Vi=null;function qc(n){Vi===null?Vi=[n]:Vi.push(n)}function sm(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,qc(e)):(t.next=r.next,r.next=t),e.interleaved=t,Qn(n,i)}function Qn(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var di=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Yn(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Si(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(De&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Qn(n,t)}return r=i.interleaved,r===null?(e.next=e,qc(i)):(e.next=r.next,r.next=e),i.interleaved=e,Qn(n,t)}function la(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ic(n,t)}}function ad(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ra(n,e,t,i){var r=n.updateQueue;di=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,v=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,p=a;switch(f=e,v=t,p.tag){case 1:if(_=p.payload,typeof _=="function"){c=_.call(v,c,f);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=p.payload,f=typeof _=="function"?_.call(v,c,f):_,f==null)break e;c=qe({},c,f);break e;case 2:di=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else v={eventTime:v,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=c):d=d.next=v,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(d===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);er|=o,n.lanes=o,n.memoizedState=c}}function ld(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var am=new sp.Component().refs;function Zu(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:qe({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var $a={isMounted:function(n){return(n=n._reactInternals)?lr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=bt(),r=wi(n),s=Yn(i,r);s.payload=e,t!=null&&(s.callback=t),e=Si(n,s,r),e!==null&&(yn(e,n,r,i),la(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=bt(),r=wi(n),s=Yn(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Si(n,s,r),e!==null&&(yn(e,n,r,i),la(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=bt(),i=wi(n),r=Yn(t,i);r.tag=2,e!=null&&(r.callback=e),e=Si(n,r,i),e!==null&&(yn(e,n,i,t),la(e,n,i))}};function ud(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ks(t,i)||!Ks(r,s):!0}function lm(n,e,t){var i=!1,r=bi,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(r=kt(e)?Ki:Et.current,i=e.contextTypes,s=(i=i!=null)?es(n,r):bi),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$a,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function cd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&$a.enqueueReplaceState(e,e.state,null)}function Ku(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=am,Yc(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ln(s):(s=kt(e)?Ki:Et.current,r.context=es(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zu(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&$a.enqueueReplaceState(r,r.state,null),Ra(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ms(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(J(309));var i=t.stateNode}if(!i)throw Error(J(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===am&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(J(284));if(!t._owner)throw Error(J(290,n))}return n}function Do(n,e){throw n=Object.prototype.toString.call(e),Error(J(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function fd(n){var e=n._init;return e(n._payload)}function um(n){function e(m,g){if(n){var x=m.deletions;x===null?(m.deletions=[g],m.flags|=16):x.push(g)}}function t(m,g){if(!n)return null;for(;g!==null;)e(m,g),g=g.sibling;return null}function i(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function r(m,g){return m=Ei(m,g),m.index=0,m.sibling=null,m}function s(m,g,x){return m.index=x,n?(x=m.alternate,x!==null?(x=x.index,x<g?(m.flags|=2,g):x):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return n&&m.alternate===null&&(m.flags|=2),m}function a(m,g,x,M){return g===null||g.tag!==6?(g=kl(x,m.mode,M),g.return=m,g):(g=r(g,x),g.return=m,g)}function l(m,g,x,M){var S=x.type;return S===Ir?d(m,g,x.props.children,M,x.key):g!==null&&(g.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fi&&fd(S)===g.type)?(M=r(g,x.props),M.ref=Ms(m,g,x),M.return=m,M):(M=pa(x.type,x.key,x.props,null,m.mode,M),M.ref=Ms(m,g,x),M.return=m,M)}function u(m,g,x,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Ol(x,m.mode,M),g.return=m,g):(g=r(g,x.children||[]),g.return=m,g)}function d(m,g,x,M,S){return g===null||g.tag!==7?(g=Yi(x,m.mode,M,S),g.return=m,g):(g=r(g,x),g.return=m,g)}function c(m,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=kl(""+g,m.mode,x),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yo:return x=pa(g.type,g.key,g.props,null,m.mode,x),x.ref=Ms(m,null,g),x.return=m,x;case Rr:return g=Ol(g,m.mode,x),g.return=m,g;case fi:var M=g._init;return c(m,M(g._payload),x)}if(Ls(g)||vs(g))return g=Yi(g,m.mode,x,null),g.return=m,g;Do(m,g)}return null}function f(m,g,x,M){var S=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(m,g,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case yo:return x.key===S?l(m,g,x,M):null;case Rr:return x.key===S?u(m,g,x,M):null;case fi:return S=x._init,f(m,g,S(x._payload),M)}if(Ls(x)||vs(x))return S!==null?null:d(m,g,x,M,null);Do(m,x)}return null}function v(m,g,x,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return m=m.get(x)||null,a(g,m,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case yo:return m=m.get(M.key===null?x:M.key)||null,l(g,m,M,S);case Rr:return m=m.get(M.key===null?x:M.key)||null,u(g,m,M,S);case fi:var C=M._init;return v(m,g,x,C(M._payload),S)}if(Ls(M)||vs(M))return m=m.get(x)||null,d(g,m,M,S,null);Do(g,M)}return null}function _(m,g,x,M){for(var S=null,C=null,L=g,y=g=0,A=null;L!==null&&y<x.length;y++){L.index>y?(A=L,L=null):A=L.sibling;var I=f(m,L,x[y],M);if(I===null){L===null&&(L=A);break}n&&L&&I.alternate===null&&e(m,L),g=s(I,g,y),C===null?S=I:C.sibling=I,C=I,L=A}if(y===x.length)return t(m,L),He&&zi(m,y),S;if(L===null){for(;y<x.length;y++)L=c(m,x[y],M),L!==null&&(g=s(L,g,y),C===null?S=L:C.sibling=L,C=L);return He&&zi(m,y),S}for(L=i(m,L);y<x.length;y++)A=v(L,m,y,x[y],M),A!==null&&(n&&A.alternate!==null&&L.delete(A.key===null?y:A.key),g=s(A,g,y),C===null?S=A:C.sibling=A,C=A);return n&&L.forEach(function(O){return e(m,O)}),He&&zi(m,y),S}function p(m,g,x,M){var S=vs(x);if(typeof S!="function")throw Error(J(150));if(x=S.call(x),x==null)throw Error(J(151));for(var C=S=null,L=g,y=g=0,A=null,I=x.next();L!==null&&!I.done;y++,I=x.next()){L.index>y?(A=L,L=null):A=L.sibling;var O=f(m,L,I.value,M);if(O===null){L===null&&(L=A);break}n&&L&&O.alternate===null&&e(m,L),g=s(O,g,y),C===null?S=O:C.sibling=O,C=O,L=A}if(I.done)return t(m,L),He&&zi(m,y),S;if(L===null){for(;!I.done;y++,I=x.next())I=c(m,I.value,M),I!==null&&(g=s(I,g,y),C===null?S=I:C.sibling=I,C=I);return He&&zi(m,y),S}for(L=i(m,L);!I.done;y++,I=x.next())I=v(L,m,y,I.value,M),I!==null&&(n&&I.alternate!==null&&L.delete(I.key===null?y:I.key),g=s(I,g,y),C===null?S=I:C.sibling=I,C=I);return n&&L.forEach(function(ie){return e(m,ie)}),He&&zi(m,y),S}function h(m,g,x,M){if(typeof x=="object"&&x!==null&&x.type===Ir&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case yo:e:{for(var S=x.key,C=g;C!==null;){if(C.key===S){if(S=x.type,S===Ir){if(C.tag===7){t(m,C.sibling),g=r(C,x.props.children),g.return=m,m=g;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===fi&&fd(S)===C.type){t(m,C.sibling),g=r(C,x.props),g.ref=Ms(m,C,x),g.return=m,m=g;break e}t(m,C);break}else e(m,C);C=C.sibling}x.type===Ir?(g=Yi(x.props.children,m.mode,M,x.key),g.return=m,m=g):(M=pa(x.type,x.key,x.props,null,m.mode,M),M.ref=Ms(m,g,x),M.return=m,m=M)}return o(m);case Rr:e:{for(C=x.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){t(m,g.sibling),g=r(g,x.children||[]),g.return=m,m=g;break e}else{t(m,g);break}else e(m,g);g=g.sibling}g=Ol(x,m.mode,M),g.return=m,m=g}return o(m);case fi:return C=x._init,h(m,g,C(x._payload),M)}if(Ls(x))return _(m,g,x,M);if(vs(x))return p(m,g,x,M);Do(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(t(m,g.sibling),g=r(g,x),g.return=m,m=g):(t(m,g),g=kl(x,m.mode,M),g.return=m,m=g),o(m)):t(m,g)}return h}var ns=um(!0),cm=um(!1),po={},Rn=Li(po),to=Li(po),no=Li(po);function Hi(n){if(n===po)throw Error(J(174));return n}function $c(n,e){switch(Ue(no,e),Ue(to,n),Ue(Rn,po),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Lu(e,n)}Ge(Rn),Ue(Rn,e)}function is(){Ge(Rn),Ge(to),Ge(no)}function fm(n){Hi(no.current);var e=Hi(Rn.current),t=Lu(e,n.type);e!==t&&(Ue(to,n),Ue(Rn,t))}function Zc(n){to.current===n&&(Ge(Rn),Ge(to))}var Xe=Li(0);function Ia(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Dl=[];function Kc(){for(var n=0;n<Dl.length;n++)Dl[n]._workInProgressVersionPrimary=null;Dl.length=0}var ua=ei.ReactCurrentDispatcher,Rl=ei.ReactCurrentBatchConfig,Ji=0,je=null,at=null,ft=null,Na=!1,Us=!1,io=0,yv=0;function xt(){throw Error(J(321))}function Qc(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Mn(n[t],e[t]))return!1;return!0}function Jc(n,e,t,i,r,s){if(Ji=s,je=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ua.current=n===null||n.memoizedState===null?Ev:Tv,n=t(i,r),Us){s=0;do{if(Us=!1,io=0,25<=s)throw Error(J(301));s+=1,ft=at=null,e.updateQueue=null,ua.current=Cv,n=t(i,r)}while(Us)}if(ua.current=Fa,e=at!==null&&at.next!==null,Ji=0,ft=at=je=null,Na=!1,e)throw Error(J(300));return n}function ef(){var n=io!==0;return io=0,n}function bn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?je.memoizedState=ft=n:ft=ft.next=n,ft}function un(){if(at===null){var n=je.alternate;n=n!==null?n.memoizedState:null}else n=at.next;var e=ft===null?je.memoizedState:ft.next;if(e!==null)ft=e,at=n;else{if(n===null)throw Error(J(310));at=n,n={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},ft===null?je.memoizedState=ft=n:ft=ft.next=n}return ft}function ro(n,e){return typeof e=="function"?e(n):e}function Il(n){var e=un(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=at,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Ji&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=i):l=l.next=c,je.lanes|=d,er|=d}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Mn(i,e.memoizedState)||(Ft=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,je.lanes|=s,er|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Nl(n){var e=un(),t=e.queue;if(t===null)throw Error(J(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Mn(s,e.memoizedState)||(Ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function dm(){}function hm(n,e){var t=je,i=un(),r=e(),s=!Mn(i.memoizedState,r);if(s&&(i.memoizedState=r,Ft=!0),i=i.queue,tf(gm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||ft!==null&&ft.memoizedState.tag&1){if(t.flags|=2048,so(9,mm.bind(null,t,i,r,e),void 0,null),ht===null)throw Error(J(349));(Ji&30)!==0||pm(t,e,r)}return r}function pm(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function mm(n,e,t,i){e.value=t,e.getSnapshot=i,vm(e)&&_m(n)}function gm(n,e,t){return t(function(){vm(e)&&_m(n)})}function vm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Mn(n,t)}catch{return!0}}function _m(n){var e=Qn(n,1);e!==null&&yn(e,n,1,-1)}function dd(n){var e=bn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:n},e.queue=n,n=n.dispatch=wv.bind(null,je,n),[e.memoizedState,n]}function so(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=je.updateQueue,e===null?(e={lastEffect:null,stores:null},je.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function xm(){return un().memoizedState}function ca(n,e,t,i){var r=bn();je.flags|=n,r.memoizedState=so(1|e,t,void 0,i===void 0?null:i)}function Za(n,e,t,i){var r=un();i=i===void 0?null:i;var s=void 0;if(at!==null){var o=at.memoizedState;if(s=o.destroy,i!==null&&Qc(i,o.deps)){r.memoizedState=so(e,t,s,i);return}}je.flags|=n,r.memoizedState=so(1|e,t,s,i)}function hd(n,e){return ca(8390656,8,n,e)}function tf(n,e){return Za(2048,8,n,e)}function ym(n,e){return Za(4,2,n,e)}function Sm(n,e){return Za(4,4,n,e)}function Mm(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function wm(n,e,t){return t=t!=null?t.concat([n]):null,Za(4,4,Mm.bind(null,e,n),t)}function nf(){}function Em(n,e){var t=un();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Qc(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Tm(n,e){var t=un();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Qc(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Cm(n,e,t){return(Ji&21)===0?(n.baseState&&(n.baseState=!1,Ft=!0),n.memoizedState=t):(Mn(t,e)||(t=Lp(),je.lanes|=t,er|=t,n.baseState=!0),e)}function Sv(n,e){var t=Oe;Oe=t!==0&&4>t?t:4,n(!0);var i=Rl.transition;Rl.transition={};try{n(!1),e()}finally{Oe=t,Rl.transition=i}}function bm(){return un().memoizedState}function Mv(n,e,t){var i=wi(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Am(n))Lm(e,t);else if(t=sm(n,e,t,i),t!==null){var r=bt();yn(t,n,i,r),Pm(t,e,i)}}function wv(n,e,t){var i=wi(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Am(n))Lm(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Mn(a,o)){var l=e.interleaved;l===null?(r.next=r,qc(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=sm(n,e,r,i),t!==null&&(r=bt(),yn(t,n,i,r),Pm(t,e,i))}}function Am(n){var e=n.alternate;return n===je||e!==null&&e===je}function Lm(n,e){Us=Na=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Pm(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ic(n,t)}}var Fa={readContext:ln,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},Ev={readContext:ln,useCallback:function(n,e){return bn().memoizedState=[n,e===void 0?null:e],n},useContext:ln,useEffect:hd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ca(4194308,4,Mm.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ca(4194308,4,n,e)},useInsertionEffect:function(n,e){return ca(4,2,n,e)},useMemo:function(n,e){var t=bn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=bn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Mv.bind(null,je,n),[i.memoizedState,n]},useRef:function(n){var e=bn();return n={current:n},e.memoizedState=n},useState:dd,useDebugValue:nf,useDeferredValue:function(n){return bn().memoizedState=n},useTransition:function(){var n=dd(!1),e=n[0];return n=Sv.bind(null,n[1]),bn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=je,r=bn();if(He){if(t===void 0)throw Error(J(407));t=t()}else{if(t=e(),ht===null)throw Error(J(349));(Ji&30)!==0||pm(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,hd(gm.bind(null,i,s,n),[n]),i.flags|=2048,so(9,mm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=bn(),e=ht.identifierPrefix;if(He){var t=jn,i=Xn;t=(i&~(1<<32-xn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=io++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=yv++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Tv={readContext:ln,useCallback:Em,useContext:ln,useEffect:tf,useImperativeHandle:wm,useInsertionEffect:ym,useLayoutEffect:Sm,useMemo:Tm,useReducer:Il,useRef:xm,useState:function(){return Il(ro)},useDebugValue:nf,useDeferredValue:function(n){var e=un();return Cm(e,at.memoizedState,n)},useTransition:function(){var n=Il(ro)[0],e=un().memoizedState;return[n,e]},useMutableSource:dm,useSyncExternalStore:hm,useId:bm,unstable_isNewReconciler:!1},Cv={readContext:ln,useCallback:Em,useContext:ln,useEffect:tf,useImperativeHandle:wm,useInsertionEffect:ym,useLayoutEffect:Sm,useMemo:Tm,useReducer:Nl,useRef:xm,useState:function(){return Nl(ro)},useDebugValue:nf,useDeferredValue:function(n){var e=un();return at===null?e.memoizedState=n:Cm(e,at.memoizedState,n)},useTransition:function(){var n=Nl(ro)[0],e=un().memoizedState;return[n,e]},useMutableSource:dm,useSyncExternalStore:hm,useId:bm,unstable_isNewReconciler:!1};function rs(n,e){try{var t="",i=e;do t+=e0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Fl(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function Qu(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var bv=typeof WeakMap=="function"?WeakMap:Map;function Dm(n,e,t){t=Yn(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ka||(ka=!0,lc=i),Qu(n,e)},t}function Rm(n,e,t){t=Yn(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Qu(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Qu(n,e),typeof i!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function pd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new bv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Gv.bind(null,n,e,t),e.then(n,n))}function md(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function gd(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Yn(-1,1),e.tag=2,Si(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var Av=ei.ReactCurrentOwner,Ft=!1;function Ct(n,e,t,i){e.child=n===null?cm(e,null,t,i):ns(e,n.child,t,i)}function vd(n,e,t,i,r){t=t.render;var s=e.ref;return $r(e,r),i=Jc(n,e,t,i,s,r),t=ef(),n!==null&&!Ft?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Jn(n,e,r)):(He&&t&&Gc(e),e.flags|=1,Ct(n,e,i,r),e.child)}function _d(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ff(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Im(n,e,s,i,r)):(n=pa(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ks,t(o,i)&&n.ref===e.ref)return Jn(n,e,r)}return e.flags|=1,n=Ei(s,i),n.ref=e.ref,n.return=e,e.child=n}function Im(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ks(s,i)&&n.ref===e.ref)if(Ft=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Ft=!0);else return e.lanes=n.lanes,Jn(n,e,r)}return Ju(n,e,t,i,r)}function Nm(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ue(Hr,Wt),Wt|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Ue(Hr,Wt),Wt|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Ue(Hr,Wt),Wt|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Ue(Hr,Wt),Wt|=i;return Ct(n,e,r,t),e.child}function Fm(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ju(n,e,t,i,r){var s=kt(t)?Ki:Et.current;return s=es(e,s),$r(e,r),t=Jc(n,e,t,i,s,r),i=ef(),n!==null&&!Ft?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Jn(n,e,r)):(He&&i&&Gc(e),e.flags|=1,Ct(n,e,t,r),e.child)}function xd(n,e,t,i,r){if(kt(t)){var s=!0;ba(e)}else s=!1;if($r(e,r),e.stateNode===null)fa(n,e),lm(e,t,i),Ku(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ln(u):(u=kt(t)?Ki:Et.current,u=es(e,u));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&cd(e,o,i,u),di=!1;var f=e.memoizedState;o.state=f,Ra(e,i,o,r),l=e.memoizedState,a!==i||f!==l||zt.current||di?(typeof d=="function"&&(Zu(e,t,d,i),l=e.memoizedState),(a=di||ud(e,t,a,i,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,om(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:mn(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ln(l):(l=kt(t)?Ki:Et.current,l=es(e,l));var v=t.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&cd(e,o,i,l),di=!1,f=e.memoizedState,o.state=f,Ra(e,i,o,r);var _=e.memoizedState;a!==c||f!==_||zt.current||di?(typeof v=="function"&&(Zu(e,t,v,i),_=e.memoizedState),(u=di||ud(e,t,u,i,f,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return ec(n,e,t,i,s,r)}function ec(n,e,t,i,r,s){Fm(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&rd(e,t,!1),Jn(n,e,s);i=e.stateNode,Av.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=ns(e,n.child,null,s),e.child=ns(e,null,a,s)):Ct(n,e,a,s),e.memoizedState=i.state,r&&rd(e,t,!0),e.child}function zm(n){var e=n.stateNode;e.pendingContext?id(n,e.pendingContext,e.pendingContext!==e.context):e.context&&id(n,e.context,!1),$c(n,e.containerInfo)}function yd(n,e,t,i,r){return ts(),Hc(r),e.flags|=256,Ct(n,e,t,i),e.child}var tc={dehydrated:null,treeContext:null,retryLane:0};function nc(n){return{baseLanes:n,cachePool:null,transitions:null}}function km(n,e,t){var i=e.pendingProps,r=Xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Ue(Xe,r&1),n===null)return Yu(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ja(o,i,0,null),n=Yi(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=nc(t),e.memoizedState=tc,n):rf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Lv(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ei(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ei(a,s):(s=Yi(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?nc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=tc,i}return s=n.child,n=s.sibling,i=Ei(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function rf(n,e){return e=Ja({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ro(n,e,t,i){return i!==null&&Hc(i),ns(e,n.child,null,t),n=rf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Lv(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Fl(Error(J(422))),Ro(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ja({mode:"visible",children:i.children},r,0,null),s=Yi(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&ns(e,n.child,null,o),e.child.memoizedState=nc(o),e.memoizedState=tc,s);if((e.mode&1)===0)return Ro(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(J(419)),i=Fl(s,i,void 0),Ro(n,e,o,i)}if(a=(o&n.childLanes)!==0,Ft||a){if(i=ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Qn(n,r),yn(i,n,r,-1))}return cf(),i=Fl(Error(J(421))),Ro(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Vv.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Xt=yi(r.nextSibling),jt=e,He=!0,vn=null,n!==null&&(en[tn++]=Xn,en[tn++]=jn,en[tn++]=Qi,Xn=n.id,jn=n.overflow,Qi=e),e=rf(e,i.children),e.flags|=4096,e)}function Sd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),$u(n.return,e,t)}function zl(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Om(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ct(n,e,i.children,t),i=Xe.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sd(n,t,e);else if(n.tag===19)Sd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Ue(Xe,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ia(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),zl(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ia(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}zl(e,!0,t,null,s);break;case"together":zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fa(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Jn(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),er|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(J(153));if(e.child!==null){for(n=e.child,t=Ei(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ei(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Pv(n,e,t){switch(e.tag){case 3:zm(e),ts();break;case 5:fm(e);break;case 1:kt(e.type)&&ba(e);break;case 4:$c(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ue(Pa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ue(Xe,Xe.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?km(n,e,t):(Ue(Xe,Xe.current&1),n=Jn(n,e,t),n!==null?n.sibling:null);Ue(Xe,Xe.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return Om(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ue(Xe,Xe.current),i)break;return null;case 22:case 23:return e.lanes=0,Nm(n,e,t)}return Jn(n,e,t)}var Um,ic,Bm,Gm;Um=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ic=function(){};Bm=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Hi(Rn.current);var s=null;switch(t){case"input":r=Tu(n,r),i=Tu(n,i),s=[];break;case"select":r=qe({},r,{value:void 0}),i=qe({},i,{value:void 0}),s=[];break;case"textarea":r=Au(n,r),i=Au(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ta)}Pu(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ws.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ws.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Be("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Gm=function(n,e,t,i){t!==i&&(e.flags|=4)};function ws(n,e){if(!He)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Dv(n,e,t){var i=e.pendingProps;switch(Vc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return kt(e.type)&&Ca(),yt(e),null;case 3:return i=e.stateNode,is(),Ge(zt),Ge(Et),Kc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Po(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,vn!==null&&(fc(vn),vn=null))),ic(n,e),yt(e),null;case 5:Zc(e);var r=Hi(no.current);if(t=e.type,n!==null&&e.stateNode!=null)Bm(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return yt(e),null}if(n=Hi(Rn.current),Po(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ln]=e,i[eo]=s,n=(e.mode&1)!==0,t){case"dialog":Be("cancel",i),Be("close",i);break;case"iframe":case"object":case"embed":Be("load",i);break;case"video":case"audio":for(r=0;r<Ds.length;r++)Be(Ds[r],i);break;case"source":Be("error",i);break;case"img":case"image":case"link":Be("error",i),Be("load",i);break;case"details":Be("toggle",i);break;case"input":Pf(i,s),Be("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Be("invalid",i);break;case"textarea":Rf(i,s),Be("invalid",i)}Pu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Lo(i.textContent,a,n),r=["children",""+a]):Ws.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Be("scroll",i)}switch(t){case"input":So(i),Df(i,s,!0);break;case"textarea":So(i),If(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ta)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ln]=e,n[eo]=i,Um(n,e,!1,!1),e.stateNode=n;e:{switch(o=Du(t,i),t){case"dialog":Be("cancel",n),Be("close",n),r=i;break;case"iframe":case"object":case"embed":Be("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ds.length;r++)Be(Ds[r],n);r=i;break;case"source":Be("error",n),r=i;break;case"img":case"image":case"link":Be("error",n),Be("load",n),r=i;break;case"details":Be("toggle",n),r=i;break;case"input":Pf(n,i),r=Tu(n,i),Be("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=qe({},i,{value:void 0}),Be("invalid",n);break;case"textarea":Rf(n,i),r=Au(n,i),Be("invalid",n);break;default:r=i}Pu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?vp(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Xs(n,l):typeof l=="number"&&Xs(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ws.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Be("scroll",n):l!=null&&bc(n,s,l,o))}switch(t){case"input":So(n),Df(n,i,!1);break;case"textarea":So(n),If(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ci(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Xr(n,!!i.multiple,s,!1):i.defaultValue!=null&&Xr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ta)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(n&&e.stateNode!=null)Gm(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(t=Hi(no.current),Hi(Rn.current),Po(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ln]=e,(s=i.nodeValue!==t)&&(n=jt,n!==null))switch(n.tag){case 3:Lo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ln]=e,e.stateNode=i}return yt(e),null;case 13:if(Ge(Xe),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(He&&Xt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)rm(),ts(),e.flags|=98560,s=!1;else if(s=Po(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(J(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(J(317));s[Ln]=e}else ts(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;yt(e),s=!1}else vn!==null&&(fc(vn),vn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(Xe.current&1)!==0?lt===0&&(lt=3):cf())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return is(),ic(n,e),n===null&&Qs(e.stateNode.containerInfo),yt(e),null;case 10:return jc(e.type._context),yt(e),null;case 17:return kt(e.type)&&Ca(),yt(e),null;case 19:if(Ge(Xe),s=e.memoizedState,s===null)return yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ws(s,!1);else{if(lt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=Ia(n),o!==null){for(e.flags|=128,ws(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Ue(Xe,Xe.current&1|2),e.child}n=n.sibling}s.tail!==null&&Je()>ss&&(e.flags|=128,i=!0,ws(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ia(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!He)return yt(e),null}else 2*Je()-s.renderingStartTime>ss&&t!==1073741824&&(e.flags|=128,i=!0,ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Je(),e.sibling=null,t=Xe.current,Ue(Xe,i?t&1|2:t&1),e):(yt(e),null);case 22:case 23:return uf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(Wt&1073741824)!==0&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function Rv(n,e){switch(Vc(e),e.tag){case 1:return kt(e.type)&&Ca(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return is(),Ge(zt),Ge(Et),Kc(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return Zc(e),null;case 13:if(Ge(Xe),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(J(340));ts()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ge(Xe),null;case 4:return is(),null;case 10:return jc(e.type._context),null;case 22:case 23:return uf(),null;case 24:return null;default:return null}}var Io=!1,wt=!1,Iv=typeof WeakSet=="function"?WeakSet:Set,de=null;function Vr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ke(n,e,i)}else t.current=null}function rc(n,e,t){try{t()}catch(i){Ke(n,e,i)}}var Md=!1;function Nv(n,e){if(Gu=Ma,n=Xp(),Bc(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=n,f=null;t:for(;;){for(var v;c!==t||r!==0&&c.nodeType!==3||(a=o+r),c!==s||i!==0&&c.nodeType!==3||(l=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)f=c,c=v;for(;;){if(c===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++d===i&&(l=o),(v=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=v}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vu={focusedElem:n,selectionRange:t},Ma=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var _=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var p=_.memoizedProps,h=_.memoizedState,m=e.stateNode,g=m.getSnapshotBeforeUpdate(e.elementType===e.type?p:mn(e.type,p),h);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(M){Ke(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return _=Md,Md=!1,_}function Bs(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&rc(e,t,s)}r=r.next}while(r!==i)}}function Ka(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function sc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Vm(n){var e=n.alternate;e!==null&&(n.alternate=null,Vm(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ln],delete e[eo],delete e[Xu],delete e[gv],delete e[vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Hm(n){return n.tag===5||n.tag===3||n.tag===4}function wd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Hm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function oc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ta));else if(i!==4&&(n=n.child,n!==null))for(oc(n,e,t),n=n.sibling;n!==null;)oc(n,e,t),n=n.sibling}function ac(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(ac(n,e,t),n=n.sibling;n!==null;)ac(n,e,t),n=n.sibling}var mt=null,gn=!1;function ii(n,e,t){for(t=t.child;t!==null;)Wm(n,e,t),t=t.sibling}function Wm(n,e,t){if(Dn&&typeof Dn.onCommitFiberUnmount=="function")try{Dn.onCommitFiberUnmount(Ha,t)}catch{}switch(t.tag){case 5:wt||Vr(t,e);case 6:var i=mt,r=gn;mt=null,ii(n,e,t),mt=i,gn=r,mt!==null&&(gn?(n=mt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):mt.removeChild(t.stateNode));break;case 18:mt!==null&&(gn?(n=mt,t=t.stateNode,n.nodeType===8?Ll(n.parentNode,t):n.nodeType===1&&Ll(n,t),$s(n)):Ll(mt,t.stateNode));break;case 4:i=mt,r=gn,mt=t.stateNode.containerInfo,gn=!0,ii(n,e,t),mt=i,gn=r;break;case 0:case 11:case 14:case 15:if(!wt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&rc(t,e,o),r=r.next}while(r!==i)}ii(n,e,t);break;case 1:if(!wt&&(Vr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ke(t,e,a)}ii(n,e,t);break;case 21:ii(n,e,t);break;case 22:t.mode&1?(wt=(i=wt)||t.memoizedState!==null,ii(n,e,t),wt=i):ii(n,e,t);break;default:ii(n,e,t)}}function Ed(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Iv),e.forEach(function(i){var r=Hv.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function cn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:mt=a.stateNode,gn=!1;break e;case 3:mt=a.stateNode.containerInfo,gn=!0;break e;case 4:mt=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(mt===null)throw Error(J(160));Wm(s,o,r),mt=null,gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ke(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xm(e,n),e=e.sibling}function Xm(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(cn(e,n),Cn(n),i&4){try{Bs(3,n,n.return),Ka(3,n)}catch(p){Ke(n,n.return,p)}try{Bs(5,n,n.return)}catch(p){Ke(n,n.return,p)}}break;case 1:cn(e,n),Cn(n),i&512&&t!==null&&Vr(t,t.return);break;case 5:if(cn(e,n),Cn(n),i&512&&t!==null&&Vr(t,t.return),n.flags&32){var r=n.stateNode;try{Xs(r,"")}catch(p){Ke(n,n.return,p)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&dp(r,s),Du(a,o);var u=Du(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?vp(r,c):d==="dangerouslySetInnerHTML"?mp(r,c):d==="children"?Xs(r,c):bc(r,d,c,u)}switch(a){case"input":Cu(r,s);break;case"textarea":hp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Xr(r,!!s.multiple,v,!1):f!==!!s.multiple&&(s.defaultValue!=null?Xr(r,!!s.multiple,s.defaultValue,!0):Xr(r,!!s.multiple,s.multiple?[]:"",!1))}r[eo]=s}catch(p){Ke(n,n.return,p)}}break;case 6:if(cn(e,n),Cn(n),i&4){if(n.stateNode===null)throw Error(J(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(p){Ke(n,n.return,p)}}break;case 3:if(cn(e,n),Cn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{$s(e.containerInfo)}catch(p){Ke(n,n.return,p)}break;case 4:cn(e,n),Cn(n);break;case 13:cn(e,n),Cn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(af=Je())),i&4&&Ed(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(wt=(u=wt)||d,cn(e,n),wt=u):cn(e,n),Cn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!d&&(n.mode&1)!==0)for(de=n,d=n.child;d!==null;){for(c=de=d;de!==null;){switch(f=de,v=f.child,f.tag){case 0:case 11:case 14:case 15:Bs(4,f,f.return);break;case 1:Vr(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(p){Ke(i,t,p)}}break;case 5:Vr(f,f.return);break;case 22:if(f.memoizedState!==null){Cd(c);continue}}v!==null?(v.return=f,de=v):Cd(c)}d=d.sibling}e:for(d=null,c=n;;){if(c.tag===5){if(d===null){d=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gp("display",o))}catch(p){Ke(n,n.return,p)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(p){Ke(n,n.return,p)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===n)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:cn(e,n),Cn(n),i&4&&Ed(n);break;case 21:break;default:cn(e,n),Cn(n)}}function Cn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Hm(t)){var i=t;break e}t=t.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xs(r,""),i.flags&=-33);var s=wd(n);ac(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wd(n);oc(n,a,o);break;default:throw Error(J(161))}}catch(l){Ke(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Fv(n,e,t){de=n,jm(n)}function jm(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Io;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||wt;a=Io;var u=wt;if(Io=o,(wt=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?bd(r):l!==null?(l.return=o,de=l):bd(r);for(;s!==null;)de=s,jm(s),s=s.sibling;de=r,Io=a,wt=u}Td(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,de=s):Td(n)}}function Td(n){for(;de!==null;){var e=de;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:wt||Ka(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!wt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:mn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ld(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}ld(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&$s(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}wt||e.flags&512&&sc(e)}catch(f){Ke(e,e.return,f)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Cd(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function bd(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ka(4,e)}catch(l){Ke(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ke(e,r,l)}}var s=e.return;try{sc(e)}catch(l){Ke(e,s,l)}break;case 5:var o=e.return;try{sc(e)}catch(l){Ke(e,o,l)}}}catch(l){Ke(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var zv=Math.ceil,za=ei.ReactCurrentDispatcher,sf=ei.ReactCurrentOwner,an=ei.ReactCurrentBatchConfig,De=0,ht=null,it=null,gt=0,Wt=0,Hr=Li(0),lt=0,oo=null,er=0,Qa=0,of=0,Gs=null,Rt=null,af=0,ss=1/0,Gn=null,ka=!1,lc=null,Mi=null,No=!1,gi=null,Oa=0,Vs=0,uc=null,da=-1,ha=0;function bt(){return(De&6)!==0?Je():da!==-1?da:da=Je()}function wi(n){return(n.mode&1)===0?1:(De&2)!==0&&gt!==0?gt&-gt:xv.transition!==null?(ha===0&&(ha=Lp()),ha):(n=Oe,n!==0||(n=window.event,n=n===void 0?16:zp(n.type)),n)}function yn(n,e,t,i){if(50<Vs)throw Vs=0,uc=null,Error(J(185));co(n,t,i),((De&2)===0||n!==ht)&&(n===ht&&((De&2)===0&&(Qa|=t),lt===4&&pi(n,gt)),Ot(n,i),t===1&&De===0&&(e.mode&1)===0&&(ss=Je()+500,Ya&&Pi()))}function Ot(n,e){var t=n.callbackNode;x0(n,e);var i=Sa(n,n===ht?gt:0);if(i===0)t!==null&&zf(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&zf(t),e===1)n.tag===0?_v(Ad.bind(null,n)):tm(Ad.bind(null,n)),pv(function(){(De&6)===0&&Pi()}),t=null;else{switch(Pp(i)){case 1:t=Rc;break;case 4:t=bp;break;case 16:t=ya;break;case 536870912:t=Ap;break;default:t=ya}t=eg(t,qm.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function qm(n,e){if(da=-1,ha=0,(De&6)!==0)throw Error(J(327));var t=n.callbackNode;if(Zr()&&n.callbackNode!==t)return null;var i=Sa(n,n===ht?gt:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=Ua(n,i);else{e=i;var r=De;De|=2;var s=$m();(ht!==n||gt!==e)&&(Gn=null,ss=Je()+500,qi(n,e));do try{Uv();break}catch(a){Ym(n,a)}while(1);Xc(),za.current=s,De=r,it!==null?e=0:(ht=null,gt=0,e=lt)}if(e!==0){if(e===2&&(r=zu(n),r!==0&&(i=r,e=cc(n,r))),e===1)throw t=oo,qi(n,0),pi(n,i),Ot(n,Je()),t;if(e===6)pi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!kv(r)&&(e=Ua(n,i),e===2&&(s=zu(n),s!==0&&(i=s,e=cc(n,s))),e===1))throw t=oo,qi(n,0),pi(n,i),Ot(n,Je()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:ki(n,Rt,Gn);break;case 3:if(pi(n,i),(i&130023424)===i&&(e=af+500-Je(),10<e)){if(Sa(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){bt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Wu(ki.bind(null,n,Rt,Gn),e);break}ki(n,Rt,Gn);break;case 4:if(pi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Je()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zv(i/1960))-i,10<i){n.timeoutHandle=Wu(ki.bind(null,n,Rt,Gn),i);break}ki(n,Rt,Gn);break;case 5:ki(n,Rt,Gn);break;default:throw Error(J(329))}}}return Ot(n,Je()),n.callbackNode===t?qm.bind(null,n):null}function cc(n,e){var t=Gs;return n.current.memoizedState.isDehydrated&&(qi(n,e).flags|=256),n=Ua(n,e),n!==2&&(e=Rt,Rt=t,e!==null&&fc(e)),n}function fc(n){Rt===null?Rt=n:Rt.push.apply(Rt,n)}function kv(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Mn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pi(n,e){for(e&=~of,e&=~Qa,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-xn(e),i=1<<t;n[t]=-1,e&=~i}}function Ad(n){if((De&6)!==0)throw Error(J(327));Zr();var e=Sa(n,0);if((e&1)===0)return Ot(n,Je()),null;var t=Ua(n,e);if(n.tag!==0&&t===2){var i=zu(n);i!==0&&(e=i,t=cc(n,i))}if(t===1)throw t=oo,qi(n,0),pi(n,e),Ot(n,Je()),t;if(t===6)throw Error(J(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ki(n,Rt,Gn),Ot(n,Je()),null}function lf(n,e){var t=De;De|=1;try{return n(e)}finally{De=t,De===0&&(ss=Je()+500,Ya&&Pi())}}function tr(n){gi!==null&&gi.tag===0&&(De&6)===0&&Zr();var e=De;De|=1;var t=an.transition,i=Oe;try{if(an.transition=null,Oe=1,n)return n()}finally{Oe=i,an.transition=t,De=e,(De&6)===0&&Pi()}}function uf(){Wt=Hr.current,Ge(Hr)}function qi(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,hv(t)),it!==null)for(t=it.return;t!==null;){var i=t;switch(Vc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ca();break;case 3:is(),Ge(zt),Ge(Et),Kc();break;case 5:Zc(i);break;case 4:is();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:jc(i.type._context);break;case 22:case 23:uf()}t=t.return}if(ht=n,it=n=Ei(n.current,null),gt=Wt=e,lt=0,oo=null,of=Qa=er=0,Rt=Gs=null,Vi!==null){for(e=0;e<Vi.length;e++)if(t=Vi[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Vi=null}return n}function Ym(n,e){do{var t=it;try{if(Xc(),ua.current=Fa,Na){for(var i=je.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Na=!1}if(Ji=0,ft=at=je=null,Us=!1,io=0,sf.current=null,t===null||t.return===null){lt=1,oo=e,it=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if((d.mode&1)===0&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=md(o);if(v!==null){v.flags&=-257,gd(v,o,a,s,e),v.mode&1&&pd(s,u,e),e=v,l=u;var _=e.updateQueue;if(_===null){var p=new Set;p.add(l),e.updateQueue=p}else _.add(l);break e}else{if((e&1)===0){pd(s,u,e),cf();break e}l=Error(J(426))}}else if(He&&a.mode&1){var h=md(o);if(h!==null){(h.flags&65536)===0&&(h.flags|=256),gd(h,o,a,s,e),Hc(rs(l,a));break e}}s=l=rs(l,a),lt!==4&&(lt=2),Gs===null?Gs=[s]:Gs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Dm(s,l,e);ad(s,m);break e;case 1:a=l;var g=s.type,x=s.stateNode;if((s.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Mi===null||!Mi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Rm(s,a,e);ad(s,M);break e}}s=s.return}while(s!==null)}Km(t)}catch(S){e=S,it===t&&t!==null&&(it=t=t.return);continue}break}while(1)}function $m(){var n=za.current;return za.current=Fa,n===null?Fa:n}function cf(){(lt===0||lt===3||lt===2)&&(lt=4),ht===null||(er&268435455)===0&&(Qa&268435455)===0||pi(ht,gt)}function Ua(n,e){var t=De;De|=2;var i=$m();(ht!==n||gt!==e)&&(Gn=null,qi(n,e));do try{Ov();break}catch(r){Ym(n,r)}while(1);if(Xc(),De=t,za.current=i,it!==null)throw Error(J(261));return ht=null,gt=0,lt}function Ov(){for(;it!==null;)Zm(it)}function Uv(){for(;it!==null&&!c0();)Zm(it)}function Zm(n){var e=Jm(n.alternate,n,Wt);n.memoizedProps=n.pendingProps,e===null?Km(n):it=e,sf.current=null}function Km(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=Dv(t,e,Wt),t!==null){it=t;return}}else{if(t=Rv(t,e),t!==null){t.flags&=32767,it=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{lt=6,it=null;return}}if(e=e.sibling,e!==null){it=e;return}it=e=n}while(e!==null);lt===0&&(lt=5)}function ki(n,e,t){var i=Oe,r=an.transition;try{an.transition=null,Oe=1,Bv(n,e,t,i)}finally{an.transition=r,Oe=i}return null}function Bv(n,e,t,i){do Zr();while(gi!==null);if((De&6)!==0)throw Error(J(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(J(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(y0(n,s),n===ht&&(it=ht=null,gt=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||No||(No=!0,eg(ya,function(){return Zr(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=an.transition,an.transition=null;var o=Oe;Oe=1;var a=De;De|=4,sf.current=null,Nv(n,t),Xm(t,n),ov(Vu),Ma=!!Gu,Vu=Gu=null,n.current=t,Fv(t),f0(),De=a,Oe=o,an.transition=s}else n.current=t;if(No&&(No=!1,gi=n,Oa=r),s=n.pendingLanes,s===0&&(Mi=null),p0(t.stateNode),Ot(n,Je()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ka)throw ka=!1,n=lc,lc=null,n;return(Oa&1)!==0&&n.tag!==0&&Zr(),s=n.pendingLanes,(s&1)!==0?n===uc?Vs++:(Vs=0,uc=n):Vs=0,Pi(),null}function Zr(){if(gi!==null){var n=Pp(Oa),e=an.transition,t=Oe;try{if(an.transition=null,Oe=16>n?16:n,gi===null)var i=!1;else{if(n=gi,gi=null,Oa=0,(De&6)!==0)throw Error(J(331));var r=De;for(De|=4,de=n.current;de!==null;){var s=de,o=s.child;if((de.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var d=de;switch(d.tag){case 0:case 11:case 15:Bs(8,d,s)}var c=d.child;if(c!==null)c.return=d,de=c;else for(;de!==null;){d=de;var f=d.sibling,v=d.return;if(Vm(d),d===u){de=null;break}if(f!==null){f.return=v,de=f;break}de=v}}}var _=s.alternate;if(_!==null){var p=_.child;if(p!==null){_.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}de=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,de=m;break e}de=s.return}}var g=n.current;for(de=g;de!==null;){o=de;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,de=x;else e:for(o=g;de!==null;){if(a=de,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ka(9,a)}}catch(S){Ke(a,a.return,S)}if(a===o){de=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,de=M;break e}de=a.return}}if(De=r,Pi(),Dn&&typeof Dn.onPostCommitFiberRoot=="function")try{Dn.onPostCommitFiberRoot(Ha,n)}catch{}i=!0}return i}finally{Oe=t,an.transition=e}}return!1}function Ld(n,e,t){e=rs(t,e),e=Dm(n,e,1),n=Si(n,e,1),e=bt(),n!==null&&(co(n,1,e),Ot(n,e))}function Ke(n,e,t){if(n.tag===3)Ld(n,n,t);else for(;e!==null;){if(e.tag===3){Ld(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mi===null||!Mi.has(i))){n=rs(t,n),n=Rm(e,n,1),e=Si(e,n,1),n=bt(),e!==null&&(co(e,1,n),Ot(e,n));break}}e=e.return}}function Gv(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=bt(),n.pingedLanes|=n.suspendedLanes&t,ht===n&&(gt&t)===t&&(lt===4||lt===3&&(gt&130023424)===gt&&500>Je()-af?qi(n,0):of|=t),Ot(n,e)}function Qm(n,e){e===0&&((n.mode&1)===0?e=1:(e=Eo,Eo<<=1,(Eo&130023424)===0&&(Eo=4194304)));var t=bt();n=Qn(n,e),n!==null&&(co(n,e,t),Ot(n,t))}function Vv(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Qm(n,t)}function Hv(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),Qm(n,t)}var Jm;Jm=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||zt.current)Ft=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Ft=!1,Pv(n,e,t);Ft=(n.flags&131072)!==0}else Ft=!1,He&&(e.flags&1048576)!==0&&nm(e,La,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;fa(n,e),n=e.pendingProps;var r=es(e,Et.current);$r(e,t),r=Jc(null,e,i,n,r,t);var s=ef();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,kt(i)?(s=!0,ba(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yc(e),r.updater=$a,e.stateNode=r,r._reactInternals=e,Ku(e,i,n,t),e=ec(null,e,i,!0,s,t)):(e.tag=0,He&&s&&Gc(e),Ct(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(fa(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Xv(i),n=mn(i,n),r){case 0:e=Ju(null,e,i,n,t);break e;case 1:e=xd(null,e,i,n,t);break e;case 11:e=vd(null,e,i,n,t);break e;case 14:e=_d(null,e,i,mn(i.type,n),t);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mn(i,r),Ju(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mn(i,r),xd(n,e,i,r,t);case 3:e:{if(zm(e),n===null)throw Error(J(387));i=e.pendingProps,s=e.memoizedState,r=s.element,om(n,e),Ra(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=rs(Error(J(423)),e),e=yd(n,e,i,t,r);break e}else if(i!==r){r=rs(Error(J(424)),e),e=yd(n,e,i,t,r);break e}else for(Xt=yi(e.stateNode.containerInfo.firstChild),jt=e,He=!0,vn=null,t=cm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ts(),i===r){e=Jn(n,e,t);break e}Ct(n,e,i,t)}e=e.child}return e;case 5:return fm(e),n===null&&Yu(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Hu(i,r)?o=null:s!==null&&Hu(i,s)&&(e.flags|=32),Fm(n,e),Ct(n,e,o,t),e.child;case 6:return n===null&&Yu(e),null;case 13:return km(n,e,t);case 4:return $c(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=ns(e,null,i,t):Ct(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mn(i,r),vd(n,e,i,r,t);case 7:return Ct(n,e,e.pendingProps,t),e.child;case 8:return Ct(n,e,e.pendingProps.children,t),e.child;case 12:return Ct(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ue(Pa,i._currentValue),i._currentValue=o,s!==null)if(Mn(s.value,o)){if(s.children===r.children&&!zt.current){e=Jn(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yn(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),$u(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(J(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),$u(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,$r(e,t),r=ln(r),i=i(r),e.flags|=1,Ct(n,e,i,t),e.child;case 14:return i=e.type,r=mn(i,e.pendingProps),r=mn(i.type,r),_d(n,e,i,r,t);case 15:return Im(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mn(i,r),fa(n,e),e.tag=1,kt(i)?(n=!0,ba(e)):n=!1,$r(e,t),lm(e,i,r),Ku(e,i,r,t),ec(null,e,i,!0,n,t);case 19:return Om(n,e,t);case 22:return Nm(n,e,t)}throw Error(J(156,e.tag))};function eg(n,e){return Cp(n,e)}function Wv(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function sn(n,e,t,i){return new Wv(n,e,t,i)}function ff(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Xv(n){if(typeof n=="function")return ff(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Lc)return 11;if(n===Pc)return 14}return 2}function Ei(n,e){var t=n.alternate;return t===null?(t=sn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function pa(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ff(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ir:return Yi(t.children,r,s,e);case Ac:o=8,r|=8;break;case Su:return n=sn(12,t,e,r|2),n.elementType=Su,n.lanes=s,n;case Mu:return n=sn(13,t,e,r),n.elementType=Mu,n.lanes=s,n;case wu:return n=sn(19,t,e,r),n.elementType=wu,n.lanes=s,n;case up:return Ja(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ap:o=10;break e;case lp:o=9;break e;case Lc:o=11;break e;case Pc:o=14;break e;case fi:o=16,i=null;break e}throw Error(J(130,n==null?n:typeof n,""))}return e=sn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Yi(n,e,t,i){return n=sn(7,n,i,e),n.lanes=t,n}function Ja(n,e,t,i){return n=sn(22,n,i,e),n.elementType=up,n.lanes=t,n.stateNode={isHidden:!1},n}function kl(n,e,t){return n=sn(6,n,null,e),n.lanes=t,n}function Ol(n,e,t){return e=sn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function jv(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function df(n,e,t,i,r,s,o,a,l){return n=new jv(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=sn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(s),n}function qv(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rr,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function tg(n){if(!n)return bi;n=n._reactInternals;e:{if(lr(n)!==n||n.tag!==1)throw Error(J(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(n.tag===1){var t=n.type;if(kt(t))return em(n,t,e)}return e}function ng(n,e,t,i,r,s,o,a,l){return n=df(t,i,!0,n,r,s,o,a,l),n.context=tg(null),t=n.current,i=bt(),r=wi(t),s=Yn(i,r),s.callback=e!=null?e:null,Si(t,s,r),n.current.lanes=r,co(n,r,i),Ot(n,i),n}function el(n,e,t,i){var r=e.current,s=bt(),o=wi(r);return t=tg(t),e.context===null?e.context=t:e.pendingContext=t,e=Yn(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Si(r,e,o),n!==null&&(yn(n,r,o,s),la(n,r,o)),o}function Ba(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function hf(n,e){Pd(n,e),(n=n.alternate)&&Pd(n,e)}function Yv(){return null}var ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function pf(n){this._internalRoot=n}tl.prototype.render=pf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(J(409));el(n,e,null,null)};tl.prototype.unmount=pf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;tr(function(){el(null,n,null,null)}),e[Kn]=null}};function tl(n){this._internalRoot=n}tl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ip();n={blockedOn:null,target:n,priority:e};for(var t=0;t<hi.length&&e!==0&&e<hi[t].priority;t++);hi.splice(t,0,n),t===0&&Fp(n)}};function mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dd(){}function $v(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ba(o);s.call(u)}}var o=ng(e,i,n,0,null,!1,!1,"",Dd);return n._reactRootContainer=o,n[Kn]=o.current,Qs(n.nodeType===8?n.parentNode:n),tr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ba(l);a.call(u)}}var l=df(n,0,!1,null,null,!1,!1,"",Dd);return n._reactRootContainer=l,n[Kn]=l.current,Qs(n.nodeType===8?n.parentNode:n),tr(function(){el(e,l,t,i)}),l}function il(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ba(o);a.call(l)}}el(e,o,n,r)}else o=$v(t,e,n,r,i);return Ba(o)}Dp=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ps(e.pendingLanes);t!==0&&(Ic(e,t|1),Ot(e,Je()),(De&6)===0&&(ss=Je()+500,Pi()))}break;case 13:tr(function(){var i=Qn(n,1);if(i!==null){var r=bt();yn(i,n,1,r)}}),hf(n,1)}};Nc=function(n){if(n.tag===13){var e=Qn(n,134217728);if(e!==null){var t=bt();yn(e,n,134217728,t)}hf(n,134217728)}};Rp=function(n){if(n.tag===13){var e=wi(n),t=Qn(n,e);if(t!==null){var i=bt();yn(t,n,e,i)}hf(n,e)}};Ip=function(){return Oe};Np=function(n,e){var t=Oe;try{return Oe=n,e()}finally{Oe=t}};Iu=function(n,e,t){switch(e){case"input":if(Cu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=qa(i);if(!r)throw Error(J(90));fp(i),Cu(i,r)}}}break;case"textarea":hp(n,t);break;case"select":e=t.value,e!=null&&Xr(n,!!t.multiple,e,!1)}};yp=lf;Sp=tr;var Zv={usingClientEntryPoint:!1,Events:[ho,kr,qa,_p,xp,lf]},Es={findFiberByHostInstance:Gi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Kv={bundleType:Es.bundleType,version:Es.version,rendererPackageName:Es.rendererPackageName,rendererConfig:Es.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ep(n),n===null?null:n.stateNode},findFiberByHostInstance:Es.findFiberByHostInstance||Yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fo.isDisabled&&Fo.supportsFiber)try{Ha=Fo.inject(Kv),Dn=Fo}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv;Yt.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(e))throw Error(J(200));return qv(n,e,null,t)};Yt.createRoot=function(n,e){if(!mf(n))throw Error(J(299));var t=!1,i="",r=ig;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=df(n,1,!1,null,null,t,!1,i,r),n[Kn]=e.current,Qs(n.nodeType===8?n.parentNode:n),new pf(e)};Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(J(188)):(n=Object.keys(n).join(","),Error(J(268,n)));return n=Ep(e),n=n===null?null:n.stateNode,n};Yt.flushSync=function(n){return tr(n)};Yt.hydrate=function(n,e,t){if(!nl(e))throw Error(J(200));return il(null,n,e,!0,t)};Yt.hydrateRoot=function(n,e,t){if(!mf(n))throw Error(J(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ig;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ng(e,null,n,1,t!=null?t:null,r,!1,s,o),n[Kn]=e.current,Qs(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new tl(e)};Yt.render=function(n,e,t){if(!nl(e))throw Error(J(200));return il(null,n,e,!1,t)};Yt.unmountComponentAtNode=function(n){if(!nl(n))throw Error(J(40));return n._reactRootContainer?(tr(function(){il(null,null,n,!1,function(){n._reactRootContainer=null,n[Kn]=null})}),!0):!1};Yt.unstable_batchedUpdates=lf;Yt.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!nl(t))throw Error(J(200));if(n==null||n._reactInternals===void 0)throw Error(J(38));return il(n,e,t,!1,i)};Yt.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=Yt})(np);var Rd=np.exports;xu.createRoot=Rd.createRoot,xu.hydrateRoot=Rd.hydrateRoot;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gf="143",pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qv=0,Id=1,Jv=2,rg=1,e_=2,Rs=3,ao=0,Sn=1,os=2,t_=1,Ti=0,Kr=1,Nd=2,Fd=3,zd=4,n_=5,Dr=100,i_=101,r_=102,kd=103,Od=104,s_=200,o_=201,a_=202,l_=203,sg=204,og=205,u_=206,c_=207,f_=208,d_=209,h_=210,p_=0,m_=1,g_=2,dc=3,v_=4,__=5,x_=6,y_=7,ag=0,S_=1,M_=2,$n=0,w_=1,E_=2,T_=3,C_=4,b_=5,lg=300,as=301,ls=302,hc=303,pc=304,rl=306,mc=1e3,_n=1001,gc=1002,It=1003,Ud=1004,Bd=1005,nn=1006,A_=1007,sl=1008,nr=1009,L_=1010,P_=1011,ug=1012,D_=1013,Wi=1014,Xi=1015,lo=1016,R_=1017,I_=1018,Qr=1020,N_=1021,F_=1022,Pn=1023,z_=1024,k_=1025,$i=1026,us=1027,O_=1028,U_=1029,B_=1030,G_=1031,V_=1033,Ul=33776,Bl=33777,Gl=33778,Vl=33779,Gd=35840,Vd=35841,Hd=35842,Wd=35843,H_=36196,Xd=37492,jd=37496,qd=37808,Yd=37809,$d=37810,Zd=37811,Kd=37812,Qd=37813,Jd=37814,eh=37815,th=37816,nh=37817,ih=37818,rh=37819,sh=37820,oh=37821,ah=36492,ir=3e3,Ze=3001,W_=3200,X_=3201,j_=0,q_=1,Vn="srgb",ji="srgb-linear",Hl=7680,Y_=519,lh=35044,uh="300 es",vc=1035;class ur{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wl=Math.PI/180,ch=180/Math.PI;function mo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Nt(n,e,t){return Math.max(e,Math.min(t,n))}function $_(n,e){return(n%e+e)%e}function Xl(n,e,t){return(1-t)*n+t*e}function fh(n){return(n&n-1)===0&&n!==0}function _c(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class on{constructor(){on.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],d=i[4],c=i[7],f=i[2],v=i[5],_=i[8],p=r[0],h=r[3],m=r[6],g=r[1],x=r[4],M=r[7],S=r[2],C=r[5],L=r[8];return s[0]=o*p+a*g+l*S,s[3]=o*h+a*x+l*C,s[6]=o*m+a*M+l*L,s[1]=u*p+d*g+c*S,s[4]=u*h+d*x+c*C,s[7]=u*m+d*M+c*L,s[2]=f*p+v*g+_*S,s[5]=f*h+v*x+_*C,s[8]=f*m+v*M+_*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8];return t*o*d-t*a*u-i*s*d+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],c=d*o-a*u,f=a*l-d*s,v=u*s-o*l,_=t*c+i*f+r*v;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=c*p,e[1]=(r*u-d*i)*p,e[2]=(a*i-r*o)*p,e[3]=f*p,e[4]=(d*t-r*l)*p,e[5]=(r*s-a*t)*p,e[6]=v*p,e[7]=(i*l-u*t)*p,e[8]=(o*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],d=r[7];return r[0]=t*s+i*l,r[3]=t*o+i*u,r[6]=t*a+i*d,r[1]=-i*s+t*l,r[4]=-i*o+t*u,r[7]=-i*a+t*d,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function cg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ma(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const jl={[Vn]:{[ji]:Zi},[ji]:{[Vn]:ma}},fn={legacyMode:!0,get workingColorSpace(){return ji},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(jl[e]&&jl[e][t]!==void 0){const i=jl[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ot={r:0,g:0,b:0},dn={h:0,s:0,l:0},zo={h:0,s:0,l:0};function ql(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ko(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,fn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ji){return this.r=e,this.g=t,this.b=i,fn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ji){if(e=$_(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ql(o,s,e+1/3),this.g=ql(o,s,e),this.b=ql(o,s,e-1/3)}return fn.toWorkingColorSpace(this,r),this}setStyle(e,t=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,fn.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,fn.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseInt(s[2],10)/100,d=parseInt(s[3],10)/100;return i(s[4]),this.setHSL(l,u,d,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,fn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,fn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Vn){const i=fg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return fn.fromWorkingColorSpace(ko(this,ot),e),Nt(ot.r*255,0,255)<<16^Nt(ot.g*255,0,255)<<8^Nt(ot.b*255,0,255)<<0}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ji){fn.fromWorkingColorSpace(ko(this,ot),t);const i=ot.r,r=ot.g,s=ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const d=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=d<=.5?c/(o+a):c/(2-o-a),o){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,t=ji){return fn.fromWorkingColorSpace(ko(this,ot),t),e.r=ot.r,e.g=ot.g,e.b=ot.b,e}getStyle(e=Vn){return fn.fromWorkingColorSpace(ko(this,ot),e),e!==Vn?`color(${e} ${ot.r} ${ot.g} ${ot.b})`:`rgb(${ot.r*255|0},${ot.g*255|0},${ot.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(dn),dn.h+=e,dn.s+=t,dn.l+=i,this.setHSL(dn.h,dn.s,dn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(zo);const i=Xl(dn.h,zo.h,t),r=Xl(dn.s,zo.s,t),s=Xl(dn.l,zo.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}We.NAMES=fg;let gr;class dg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{gr===void 0&&(gr=Ga("canvas")),gr.width=e.width,gr.height=e.height;const i=gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=gr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ga("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Zi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class hg{constructor(e=null){this.isSource=!0,this.uuid=mo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yl(r[o].image)):s.push(Yl(r[o]))}else s=Yl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Yl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Z_=0;class wn extends ur{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,i=_n,r=_n,s=nn,o=sl,a=Pn,l=nr,u=1,d=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=mo(),this.name="",this.source=new hg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new on,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mc:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mc:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=lg;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],d=l[4],c=l[8],f=l[1],v=l[5],_=l[9],p=l[2],h=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(c-p)<.01&&Math.abs(_-h)<.01){if(Math.abs(d+f)<.1&&Math.abs(c+p)<.1&&Math.abs(_+h)<.1&&Math.abs(u+v+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,M=(v+1)/2,S=(m+1)/2,C=(d+f)/4,L=(c+p)/4,y=(_+h)/4;return x>M&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=L/i):M>S?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=C/r,s=y/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=L/s,r=y/s),this.set(i,r,s,t),this}let g=Math.sqrt((h-_)*(h-_)+(c-p)*(c-p)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(h-_)/g,this.y=(c-p)/g,this.z=(f-d)/g,this.w=Math.acos((u+v+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rr extends ur{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:nn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pg extends wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K_ extends wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],d=i[r+2],c=i[r+3];const f=s[o+0],v=s[o+1],_=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=d,e[t+3]=c;return}if(a===1){e[t+0]=f,e[t+1]=v,e[t+2]=_,e[t+3]=p;return}if(c!==p||l!==f||u!==v||d!==_){let h=1-a;const m=l*f+u*v+d*_+c*p,g=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const S=Math.sqrt(x),C=Math.atan2(S,m*g);h=Math.sin(h*C)/S,a=Math.sin(a*C)/S}const M=a*g;if(l=l*h+f*M,u=u*h+v*M,d=d*h+_*M,c=c*h+p*M,h===1-a){const S=1/Math.sqrt(l*l+u*u+d*d+c*c);l*=S,u*=S,d*=S,c*=S}}e[t]=l,e[t+1]=u,e[t+2]=d,e[t+3]=c}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],d=i[r+3],c=s[o],f=s[o+1],v=s[o+2],_=s[o+3];return e[t]=a*_+d*c+l*v-u*f,e[t+1]=l*_+d*f+u*c-a*v,e[t+2]=u*_+d*v+a*f-l*c,e[t+3]=d*_-a*c-l*f-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),d=a(r/2),c=a(s/2),f=l(i/2),v=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*d*c+u*v*_,this._y=u*v*c-f*d*_,this._z=u*d*_+f*v*c,this._w=u*d*c-f*v*_;break;case"YXZ":this._x=f*d*c+u*v*_,this._y=u*v*c-f*d*_,this._z=u*d*_-f*v*c,this._w=u*d*c+f*v*_;break;case"ZXY":this._x=f*d*c-u*v*_,this._y=u*v*c+f*d*_,this._z=u*d*_+f*v*c,this._w=u*d*c-f*v*_;break;case"ZYX":this._x=f*d*c-u*v*_,this._y=u*v*c+f*d*_,this._z=u*d*_-f*v*c,this._w=u*d*c+f*v*_;break;case"YZX":this._x=f*d*c+u*v*_,this._y=u*v*c+f*d*_,this._z=u*d*_-f*v*c,this._w=u*d*c-f*v*_;break;case"XZY":this._x=f*d*c-u*v*_,this._y=u*v*c-f*d*_,this._z=u*d*_+f*v*c,this._w=u*d*c+f*v*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],d=t[6],c=t[10],f=i+a+c;if(f>0){const v=.5/Math.sqrt(f+1);this._w=.25/v,this._x=(d-l)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(i>a&&i>c){const v=2*Math.sqrt(1+i-a-c);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(a>c){const v=2*Math.sqrt(1+a-i-c);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+c-i-a);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,d=t._w;return this._x=i*d+o*a+r*u-s*l,this._y=r*d+o*l+s*a-i*u,this._z=s*d+o*u+i*l-r*a,this._w=o*d-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),d=Math.atan2(u,a),c=Math.sin((1-t)*d)/u,f=Math.sin(t*d)/u;return this._w=o*c+this._w*f,this._x=i*c+this._x*f,this._y=r*c+this._y*f,this._z=s*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,d=l*i+a*t-s*r,c=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+d*-a-c*-o,this.y=d*l+f*-o+c*-s-u*-a,this.z=c*l+f*-a+u*-o-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $l=new N,dh=new sr;class go{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const d=e[l],c=e[l+1],f=e[l+2];d<t&&(t=d),c<i&&(i=c),f<r&&(r=f),d>s&&(s=d),c>o&&(o=c),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const d=e.getX(l),c=e.getY(l),f=e.getZ(l);d<t&&(t=d),c<i&&(i=c),f<r&&(r=f),d>s&&(s=d),c>o&&(o=c),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Ii.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ii)}else i.boundingBox===null&&i.computeBoundingBox(),Zl.copy(i.boundingBox),Zl.applyMatrix4(e.matrixWorld),this.union(Zl);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Oo.subVectors(this.max,Ts),vr.subVectors(e.a,Ts),_r.subVectors(e.b,Ts),xr.subVectors(e.c,Ts),ri.subVectors(_r,vr),si.subVectors(xr,_r),Ni.subVectors(vr,xr);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ni.z,Ni.y,ri.z,0,-ri.x,si.z,0,-si.x,Ni.z,0,-Ni.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ni.y,Ni.x,0];return!Kl(t,vr,_r,xr,Oo)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,vr,_r,xr,Oo))?!1:(Uo.crossVectors(ri,si),t=[Uo.x,Uo.y,Uo.z],Kl(t,vr,_r,xr,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ii.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new N,new N,new N,new N,new N,new N,new N,new N],Ii=new N,Zl=new go,vr=new N,_r=new N,xr=new N,ri=new N,si=new N,Ni=new N,Ts=new N,Oo=new N,Uo=new N,Fi=new N;function Kl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fi.fromArray(n,s);const a=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),u=t.dot(Fi),d=i.dot(Fi);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>a)return!1}return!0}const Q_=new go,hh=new N,Bo=new N,Ql=new N;class vf{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Q_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ql.subVectors(e,this.center);const t=Ql.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Ql.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Bo.set(0,0,1).multiplyScalar(e.radius):Bo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(hh.copy(e.center).add(Bo)),this.expandByPoint(hh.copy(e.center).sub(Bo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new N,Jl=new N,Go=new N,oi=new N,eu=new N,Vo=new N,tu=new N;class J_{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.direction).multiplyScalar(t).add(this.origin),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Jl.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Jl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Go),a=oi.dot(this.direction),l=-oi.dot(Go),u=oi.lengthSq(),d=Math.abs(1-o*o);let c,f,v,_;if(d>0)if(c=o*l-a,f=o*a-l,_=s*d,c>=0)if(f>=-_)if(f<=_){const p=1/d;c*=p,f*=p,v=c*(c+o*f+2*a)+f*(o*c+f+2*l)+u}else f=s,c=Math.max(0,-(o*f+a)),v=-c*c+f*(f+2*l)+u;else f=-s,c=Math.max(0,-(o*f+a)),v=-c*c+f*(f+2*l)+u;else f<=-_?(c=Math.max(0,-(-o*s+a)),f=c>0?-s:Math.min(Math.max(-s,-l),s),v=-c*c+f*(f+2*l)+u):f<=_?(c=0,f=Math.min(Math.max(-s,-l),s),v=f*(f+2*l)+u):(c=Math.max(0,-(o*s+a)),f=c>0?s:Math.min(Math.max(-s,-l),s),v=-c*c+f*(f+2*l)+u);else f=o>0?-s:s,c=Math.max(0,-(o*f+a)),v=-c*c+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(c).add(this.origin),r&&r.copy(Go).multiplyScalar(f).add(Jl),v}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,d=1/this.direction.y,c=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),c>=0?(a=(e.min.z-f.z)*c,l=(e.max.z-f.z)*c):(a=(e.max.z-f.z)*c,l=(e.min.z-f.z)*c),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){eu.subVectors(t,e),Vo.subVectors(i,e),tu.crossVectors(eu,Vo);let o=this.direction.dot(tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Vo.crossVectors(oi,Vo));if(l<0)return null;const u=a*this.direction.dot(eu.cross(oi));if(u<0||l+u>o)return null;const d=-a*oi.dot(tu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,d,c,f,v,_,p,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=u,m[6]=d,m[10]=c,m[14]=f,m[3]=v,m[7]=_,m[11]=p,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),o=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const f=o*d,v=o*c,_=a*d,p=a*c;t[0]=l*d,t[4]=-l*c,t[8]=u,t[1]=v+_*u,t[5]=f-p*u,t[9]=-a*l,t[2]=p-f*u,t[6]=_+v*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,v=l*c,_=u*d,p=u*c;t[0]=f+p*a,t[4]=_*a-v,t[8]=o*u,t[1]=o*c,t[5]=o*d,t[9]=-a,t[2]=v*a-_,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,v=l*c,_=u*d,p=u*c;t[0]=f-p*a,t[4]=-o*c,t[8]=_+v*a,t[1]=v+_*a,t[5]=o*d,t[9]=p-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,v=o*c,_=a*d,p=a*c;t[0]=l*d,t[4]=_*u-v,t[8]=f*u+p,t[1]=l*c,t[5]=p*u+f,t[9]=v*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,v=o*u,_=a*l,p=a*u;t[0]=l*d,t[4]=p-f*c,t[8]=_*c+v,t[1]=c,t[5]=o*d,t[9]=-a*d,t[2]=-u*d,t[6]=v*c+_,t[10]=f-p*c}else if(e.order==="XZY"){const f=o*l,v=o*u,_=a*l,p=a*u;t[0]=l*d,t[4]=-c,t[8]=u*d,t[1]=f*c+p,t[5]=o*d,t[9]=v*c-_,t[2]=_*c-v,t[6]=a*d,t[10]=p*c+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ex,e,tx)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),ai.crossVectors(i,Vt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),ai.crossVectors(i,Vt)),ai.normalize(),Ho.crossVectors(Vt,ai),r[0]=ai.x,r[4]=Ho.x,r[8]=Vt.x,r[1]=ai.y,r[5]=Ho.y,r[9]=Vt.y,r[2]=ai.z,r[6]=Ho.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],d=i[1],c=i[5],f=i[9],v=i[13],_=i[2],p=i[6],h=i[10],m=i[14],g=i[3],x=i[7],M=i[11],S=i[15],C=r[0],L=r[4],y=r[8],A=r[12],I=r[1],O=r[5],ie=r[9],Q=r[13],z=r[2],$=r[6],G=r[10],q=r[14],R=r[3],D=r[7],F=r[11],Y=r[15];return s[0]=o*C+a*I+l*z+u*R,s[4]=o*L+a*O+l*$+u*D,s[8]=o*y+a*ie+l*G+u*F,s[12]=o*A+a*Q+l*q+u*Y,s[1]=d*C+c*I+f*z+v*R,s[5]=d*L+c*O+f*$+v*D,s[9]=d*y+c*ie+f*G+v*F,s[13]=d*A+c*Q+f*q+v*Y,s[2]=_*C+p*I+h*z+m*R,s[6]=_*L+p*O+h*$+m*D,s[10]=_*y+p*ie+h*G+m*F,s[14]=_*A+p*Q+h*q+m*Y,s[3]=g*C+x*I+M*z+S*R,s[7]=g*L+x*O+M*$+S*D,s[11]=g*y+x*ie+M*G+S*F,s[15]=g*A+x*Q+M*q+S*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],d=e[2],c=e[6],f=e[10],v=e[14],_=e[3],p=e[7],h=e[11],m=e[15];return _*(+s*l*c-r*u*c-s*a*f+i*u*f+r*a*v-i*l*v)+p*(+t*l*v-t*u*f+s*o*f-r*o*v+r*u*d-s*l*d)+h*(+t*u*c-t*a*v-s*o*c+i*o*v+s*a*d-i*u*d)+m*(-r*a*d-t*l*c+t*a*f+r*o*c-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],d=e[8],c=e[9],f=e[10],v=e[11],_=e[12],p=e[13],h=e[14],m=e[15],g=c*h*u-p*f*u+p*l*v-a*h*v-c*l*m+a*f*m,x=_*f*u-d*h*u-_*l*v+o*h*v+d*l*m-o*f*m,M=d*p*u-_*c*u+_*a*v-o*p*v-d*a*m+o*c*m,S=_*c*l-d*p*l-_*a*f+o*p*f+d*a*h-o*c*h,C=t*g+i*x+r*M+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=g*L,e[1]=(p*f*s-c*h*s-p*r*v+i*h*v+c*r*m-i*f*m)*L,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*m+i*l*m)*L,e[3]=(c*l*s-a*f*s-c*r*u+i*f*u+a*r*v-i*l*v)*L,e[4]=x*L,e[5]=(d*h*s-_*f*s+_*r*v-t*h*v-d*r*m+t*f*m)*L,e[6]=(_*l*s-o*h*s-_*r*u+t*h*u+o*r*m-t*l*m)*L,e[7]=(o*f*s-d*l*s+d*r*u-t*f*u-o*r*v+t*l*v)*L,e[8]=M*L,e[9]=(_*c*s-d*p*s-_*i*v+t*p*v+d*i*m-t*c*m)*L,e[10]=(o*p*s-_*a*s+_*i*u-t*p*u-o*i*m+t*a*m)*L,e[11]=(d*a*s-o*c*s-d*i*u+t*c*u+o*i*v-t*a*v)*L,e[12]=S*L,e[13]=(d*p*r-_*c*r+_*i*f-t*p*f-d*i*h+t*c*h)*L,e[14]=(_*a*r-o*p*r-_*i*l+t*p*l+o*i*h-t*a*h)*L,e[15]=(o*c*r-d*a*r+d*i*l-t*c*l-o*i*f+t*a*f)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,d*a+i,d*l-r*o,0,u*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,d=o+o,c=a+a,f=s*u,v=s*d,_=s*c,p=o*d,h=o*c,m=a*c,g=l*u,x=l*d,M=l*c,S=i.x,C=i.y,L=i.z;return r[0]=(1-(p+m))*S,r[1]=(v+M)*S,r[2]=(_-x)*S,r[3]=0,r[4]=(v-M)*C,r[5]=(1-(f+m))*C,r[6]=(h+g)*C,r[7]=0,r[8]=(_+x)*L,r[9]=(h-g)*L,r[10]=(1-(f+p))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=yr.set(r[0],r[1],r[2]).length();const o=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const u=1/s,d=1/o,c=1/a;return hn.elements[0]*=u,hn.elements[1]*=u,hn.elements[2]*=u,hn.elements[4]*=d,hn.elements[5]*=d,hn.elements[6]*=d,hn.elements[8]*=c,hn.elements[9]*=c,hn.elements[10]*=c,t.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),c=(i+r)/(i-r),f=-(o+s)/(o-s),v=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=c,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=v,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),c=(t+e)*l,f=(i+r)*u,v=(o+s)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-c,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-v,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yr=new N,hn=new vt,ex=new N(0,0,0),tx=new N(1,1,1),ai=new N,Ho=new N,Vt=new N,ph=new vt,mh=new sr;class vo{constructor(e=0,t=0,i=0,r=vo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],d=r[9],c=r[2],f=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ph,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mh.setFromEuler(this),this.setFromQuaternion(mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}vo.DefaultOrder="XYZ";vo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nx=0;const gh=new N,Sr=new sr,On=new vt,Wo=new N,Cs=new N,ix=new N,rx=new sr,vh=new N(1,0,0),_h=new N(0,1,0),xh=new N(0,0,1),sx={type:"added"},yh={type:"removed"};class En extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DefaultUp.clone();const e=new N,t=new vo,i=new sr,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new on}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=En.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(xh,e)}translateOnAxis(e,t){return gh.copy(e).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(xh,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wo.copy(e):Wo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Cs,Wo,this.up):On.lookAt(Wo,Cs,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(On),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),c=o(e.shapes),f=o(e.skeletons),v=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),c.length>0&&(i.shapes=c),f.length>0&&(i.skeletons=f),v.length>0&&(i.animations=v),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const d=a[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}En.DefaultUp=new N(0,1,0);En.DefaultMatrixAutoUpdate=!0;const pn=new N,Un=new N,nu=new N,Bn=new N,Mr=new N,wr=new N,Sh=new N,iu=new N,ru=new N,su=new N;class Wn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pn.subVectors(r,t),Un.subVectors(i,t),nu.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(Un),l=pn.dot(nu),u=Un.dot(Un),d=Un.dot(nu),c=o*u-a*a;if(c===0)return s.set(-2,-1,-1);const f=1/c,v=(u*l-a*d)*f,_=(o*d-a*l)*f;return s.set(1-v-_,_,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Bn),l.set(0,0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l}static isFrontFacing(e,t,i,r){return pn.subVectors(i,t),Un.subVectors(e,t),pn.cross(Un).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Wn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Mr.subVectors(r,i),wr.subVectors(s,i),iu.subVectors(e,i);const l=Mr.dot(iu),u=wr.dot(iu);if(l<=0&&u<=0)return t.copy(i);ru.subVectors(e,r);const d=Mr.dot(ru),c=wr.dot(ru);if(d>=0&&c<=d)return t.copy(r);const f=l*c-d*u;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(Mr,o);su.subVectors(e,s);const v=Mr.dot(su),_=wr.dot(su);if(_>=0&&v<=_)return t.copy(s);const p=v*u-l*_;if(p<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(wr,a);const h=d*_-v*c;if(h<=0&&c-d>=0&&v-_>=0)return Sh.subVectors(s,r),a=(c-d)/(c-d+(v-_)),t.copy(r).addScaledVector(Sh,a);const m=1/(h+p+f);return o=p*m,a=f*m,t.copy(i).addScaledVector(Mr,o).addScaledVector(wr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ox=0;class ol extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=Kr,this.side=ao,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sg,this.blendDst=og,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hl,this.stencilZFail=Hl,this.stencilZPass=Hl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===t_;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==ao&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _f extends ol{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ag,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new N,Xo=new Ce;class In{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=lh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),o=new We),t[i++]=o.r,t[i++]=o.g,t[i++]=o.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),o=new Ce),t[i++]=o.x,t[i++]=o.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),o=new N),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,s=e.length;r<s;r++){let o=e[r];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),o=new dt),t[i++]=o.x,t[i++]=o.y,t[i++]=o.z,t[i++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xo.fromBufferAttribute(this,t),Xo.applyMatrix3(e),this.setXY(t,Xo.x,Xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class gg extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vg extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nn extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ax=0;const Jt=new vt,ou=new En,Er=new N,Ht=new go,bs=new go,ct=new N;class Di extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cg(e)?vg:gg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new on().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ht.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Ht.min,bs.min),Ht.expandByPoint(ct),ct.addVectors(Ht.max,bs.max),Ht.expandByPoint(ct)):(Ht.expandByPoint(bs.min),Ht.expandByPoint(bs.max))}Ht.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)ct.fromBufferAttribute(a,u),l&&(Er.fromBufferAttribute(e,u),ct.add(Er)),r=Math.max(r,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],d=[];for(let I=0;I<a;I++)u[I]=new N,d[I]=new N;const c=new N,f=new N,v=new N,_=new Ce,p=new Ce,h=new Ce,m=new N,g=new N;function x(I,O,ie){c.fromArray(r,I*3),f.fromArray(r,O*3),v.fromArray(r,ie*3),_.fromArray(o,I*2),p.fromArray(o,O*2),h.fromArray(o,ie*2),f.sub(c),v.sub(c),p.sub(_),h.sub(_);const Q=1/(p.x*h.y-h.x*p.y);!isFinite(Q)||(m.copy(f).multiplyScalar(h.y).addScaledVector(v,-p.y).multiplyScalar(Q),g.copy(v).multiplyScalar(p.x).addScaledVector(f,-h.x).multiplyScalar(Q),u[I].add(m),u[O].add(m),u[ie].add(m),d[I].add(g),d[O].add(g),d[ie].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let I=0,O=M.length;I<O;++I){const ie=M[I],Q=ie.start,z=ie.count;for(let $=Q,G=Q+z;$<G;$+=3)x(i[$+0],i[$+1],i[$+2])}const S=new N,C=new N,L=new N,y=new N;function A(I){L.fromArray(s,I*3),y.copy(L);const O=u[I];S.copy(O),S.sub(L.multiplyScalar(L.dot(O))).normalize(),C.crossVectors(y,O);const Q=C.dot(d[I])<0?-1:1;l[I*4]=S.x,l[I*4+1]=S.y,l[I*4+2]=S.z,l[I*4+3]=Q}for(let I=0,O=M.length;I<O;++I){const ie=M[I],Q=ie.start,z=ie.count;for(let $=Q,G=Q+z;$<G;$+=3)A(i[$+0]),A(i[$+1]),A(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,v=i.count;f<v;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,d=new N,c=new N;if(e)for(let f=0,v=e.count;f<v;f+=3){const _=e.getX(f+0),p=e.getX(f+1),h=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,h),d.subVectors(o,s),c.subVectors(r,s),d.cross(c),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(d),l.add(d),u.add(d),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let f=0,v=t.count;f<v;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),c.subVectors(r,s),d.cross(c),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const o=i[r].array,a=e.attributes[r],l=a.array,u=a.itemSize*t,d=Math.min(l.length,o.length-u);for(let c=0,f=u;c<d;c++,f++)o[f]=l[c]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const u=a.array,d=a.itemSize,c=a.normalized,f=new u.constructor(l.length*d);let v=0,_=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?v=l[p]*a.data.stride+a.offset:v=l[p]*d;for(let m=0;m<d;m++)f[_++]=u[v++]}return new In(f,d,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let d=0,c=u.length;d<c;d++){const f=u[d],v=e(f,i);l.push(v)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let c=0,f=u.length;c<f;c++){const v=u[c];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(t))}const s=e.morphAttributes;for(const u in s){const d=[],c=s[u];for(let f=0,v=c.length;f<v;f++)d.push(c[f].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new vt,Tr=new J_,au=new vf,li=new N,ui=new N,ci=new N,lu=new N,uu=new N,cu=new N,jo=new N,qo=new N,Yo=new N,$o=new Ce,Zo=new Ce,Ko=new Ce,fu=new N,Qo=new N;class qn extends En{constructor(e=new Di,t=new _f){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),au.copy(i.boundingSphere),au.applyMatrix4(s),e.ray.intersectsSphere(au)===!1)||(Mh.copy(s).invert(),Tr.copy(e.ray).applyMatrix4(Mh),i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,d=i.morphTargetsRelative,c=i.attributes.uv,f=i.attributes.uv2,v=i.groups,_=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=v.length;p<h;p++){const m=v[p],g=r[m.materialIndex],x=Math.max(m.start,_.start),M=Math.min(a.count,Math.min(m.start+m.count,_.start+_.count));for(let S=x,C=M;S<C;S+=3){const L=a.getX(S),y=a.getX(S+1),A=a.getX(S+2);o=Jo(this,g,e,Tr,l,u,d,c,f,L,y,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(a.count,_.start+_.count);for(let m=p,g=h;m<g;m+=3){const x=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);o=Jo(this,r,e,Tr,l,u,d,c,f,x,M,S),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=v.length;p<h;p++){const m=v[p],g=r[m.materialIndex],x=Math.max(m.start,_.start),M=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let S=x,C=M;S<C;S+=3){const L=S,y=S+1,A=S+2;o=Jo(this,g,e,Tr,l,u,d,c,f,L,y,A),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const p=Math.max(0,_.start),h=Math.min(l.count,_.start+_.count);for(let m=p,g=h;m<g;m+=3){const x=m,M=m+1,S=m+2;o=Jo(this,r,e,Tr,l,u,d,c,f,x,M,S),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function lx(n,e,t,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==os,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Qo);return u<t.near||u>t.far?null:{distance:u,point:Qo.clone(),object:n}}function Jo(n,e,t,i,r,s,o,a,l,u,d,c){li.fromBufferAttribute(r,u),ui.fromBufferAttribute(r,d),ci.fromBufferAttribute(r,c);const f=n.morphTargetInfluences;if(s&&f){jo.set(0,0,0),qo.set(0,0,0),Yo.set(0,0,0);for(let _=0,p=s.length;_<p;_++){const h=f[_],m=s[_];h!==0&&(lu.fromBufferAttribute(m,u),uu.fromBufferAttribute(m,d),cu.fromBufferAttribute(m,c),o?(jo.addScaledVector(lu,h),qo.addScaledVector(uu,h),Yo.addScaledVector(cu,h)):(jo.addScaledVector(lu.sub(li),h),qo.addScaledVector(uu.sub(ui),h),Yo.addScaledVector(cu.sub(ci),h)))}li.add(jo),ui.add(qo),ci.add(Yo)}n.isSkinnedMesh&&(n.boneTransform(u,li),n.boneTransform(d,ui),n.boneTransform(c,ci));const v=lx(n,e,t,i,li,ui,ci,fu);if(v){a&&($o.fromBufferAttribute(a,u),Zo.fromBufferAttribute(a,d),Ko.fromBufferAttribute(a,c),v.uv=Wn.getUV(fu,li,ui,ci,$o,Zo,Ko,new Ce)),l&&($o.fromBufferAttribute(l,u),Zo.fromBufferAttribute(l,d),Ko.fromBufferAttribute(l,c),v.uv2=Wn.getUV(fu,li,ui,ci,$o,Zo,Ko,new Ce));const _={a:u,b:d,c,normal:new N,materialIndex:0};Wn.getNormal(li,ui,ci,_.normal),v.face=_}return v}class _o extends Di{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],d=[],c=[];let f=0,v=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(u,3)),this.setAttribute("normal",new Nn(d,3)),this.setAttribute("uv",new Nn(c,2));function _(p,h,m,g,x,M,S,C,L,y,A){const I=M/L,O=S/y,ie=M/2,Q=S/2,z=C/2,$=L+1,G=y+1;let q=0,R=0;const D=new N;for(let F=0;F<G;F++){const Y=F*O-Q;for(let j=0;j<$;j++){const K=j*I-ie;D[p]=K*g,D[h]=Y*x,D[m]=z,u.push(D.x,D.y,D.z),D[p]=0,D[h]=0,D[m]=C>0?1:-1,d.push(D.x,D.y,D.z),c.push(j/L),c.push(1-F/y),q+=1}}for(let F=0;F<y;F++)for(let Y=0;Y<L;Y++){const j=f+Y+$*F,K=f+Y+$*(F+1),ue=f+(Y+1)+$*(F+1),me=f+(Y+1)+$*F;l.push(j,K,me),l.push(K,ue,me),R+=6}a.addGroup(v,R,A),v+=R,f+=q}}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mt(n){const e={};for(let t=0;t<n.length;t++){const i=cs(n[t]);for(const r in i)e[r]=i[r]}return e}function ux(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}const cx={clone:cs,merge:Mt};var fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends ol{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _g extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends _g{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ch*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ch*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cr=90,br=1;class hx extends En{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new rn(Cr,br,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new N(1,0,0)),this.add(r);const s=new rn(Cr,br,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const o=new rn(Cr,br,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new N(0,1,0)),this.add(o);const a=new rn(Cr,br,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new N(0,-1,0)),this.add(a);const l=new rn(Cr,br,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const u=new rn(Cr,br,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new N(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,d=e.getRenderTarget(),c=e.toneMapping,f=e.xr.enabled;e.toneMapping=$n,e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(d),e.toneMapping=c,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class xg extends wn{constructor(e,t,i,r,s,o,a,l,u,d){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,i,r,s,o,a,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class px extends rr{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _o(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Ti});s.uniforms.tEquirect.value=t;const o=new qn(r,s),a=t.minFilter;return t.minFilter===sl&&(t.minFilter=nn),new hx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const du=new N,mx=new N,gx=new on;class Oi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=du.subVectors(i,t).cross(mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(du),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||gx.getNormalMatrix(e),r=this.coplanarPoint(du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ar=new vf,ea=new N;class yg{constructor(e=new Oi,t=new Oi,i=new Oi,r=new Oi,s=new Oi,o=new Oi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],d=i[6],c=i[7],f=i[8],v=i[9],_=i[10],p=i[11],h=i[12],m=i[13],g=i[14],x=i[15];return t[0].setComponents(a-r,c-l,p-f,x-h).normalize(),t[1].setComponents(a+r,c+l,p+f,x+h).normalize(),t[2].setComponents(a+s,c+u,p+v,x+m).normalize(),t[3].setComponents(a-s,c-u,p-v,x-m).normalize(),t[4].setComponents(a-o,c-d,p-_,x-g).normalize(),t[5].setComponents(a+o,c+d,p+_,x+g).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSprite(e){return Ar.center.set(0,0,0),Ar.radius=.7071067811865476,Ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ar)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ea.x=r.normal.x>0?e.max.x:e.min.x,ea.y=r.normal.y>0?e.max.y:e.min.y,ea.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ea)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function vx(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,d){const c=u.array,f=u.usage,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,c,f),u.onUploadCallback();let _;if(c instanceof Float32Array)_=5126;else if(c instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(c instanceof Int16Array)_=5122;else if(c instanceof Uint32Array)_=5125;else if(c instanceof Int32Array)_=5124;else if(c instanceof Int8Array)_=5120;else if(c instanceof Uint8Array)_=5121;else if(c instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:v,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:u.version}}function s(u,d,c){const f=d.array,v=d.updateRange;n.bindBuffer(c,u),v.count===-1?n.bufferSubData(c,0,f):(t?n.bufferSubData(c,v.offset*f.BYTES_PER_ELEMENT,f,v.offset,v.count):n.bufferSubData(c,v.offset*f.BYTES_PER_ELEMENT,f.subarray(v.offset,v.offset+v.count)),v.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d&&(n.deleteBuffer(d.buffer),i.delete(u))}function l(u,d){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c===void 0?i.set(u,r(u,d)):c.version<u.version&&(s(c.buffer,u,d),c.version=u.version)}return{get:o,remove:a,update:l}}class xf extends Di{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,d=l+1,c=e/a,f=t/l,v=[],_=[],p=[],h=[];for(let m=0;m<d;m++){const g=m*f-o;for(let x=0;x<u;x++){const M=x*c-s;_.push(M,-g,0),p.push(0,0,1),h.push(x/a),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let g=0;g<a;g++){const x=g+u*m,M=g+u*(m+1),S=g+1+u*(m+1),C=g+1+u*m;v.push(x,M,C),v.push(M,S,C)}this.setIndex(v),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(p,3)),this.setAttribute("uv",new Nn(h,2))}static fromJSON(e){return new xf(e.width,e.height,e.widthSegments,e.heightSegments)}}var _x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ex="vec3 transformed = vec3( position );",Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cx=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ax=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ox=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ux=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ey=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ty=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,ny=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,iy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ry=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,sy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oy=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ly=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,fy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,dy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,py=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,my=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_y=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,My=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,by=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Dy=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ky=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,By=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yy=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$y=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zy=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oS=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,aS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,lS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,fS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,hS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,pS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gS=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,SS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ES=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,TS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PS=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,XS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:_x,alphamap_pars_fragment:xx,alphatest_fragment:yx,alphatest_pars_fragment:Sx,aomap_fragment:Mx,aomap_pars_fragment:wx,begin_vertex:Ex,beginnormal_vertex:Tx,bsdfs:Cx,iridescence_fragment:bx,bumpmap_pars_fragment:Ax,clipping_planes_fragment:Lx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Rx,color_fragment:Ix,color_pars_fragment:Nx,color_pars_vertex:Fx,color_vertex:zx,common:kx,cube_uv_reflection_fragment:Ox,defaultnormal_vertex:Ux,displacementmap_pars_vertex:Bx,displacementmap_vertex:Gx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Hx,encodings_fragment:Wx,encodings_pars_fragment:Xx,envmap_fragment:jx,envmap_common_pars_fragment:qx,envmap_pars_fragment:Yx,envmap_pars_vertex:$x,envmap_physical_pars_fragment:oy,envmap_vertex:Zx,fog_vertex:Kx,fog_pars_vertex:Qx,fog_fragment:Jx,fog_pars_fragment:ey,gradientmap_pars_fragment:ty,lightmap_fragment:ny,lightmap_pars_fragment:iy,lights_lambert_vertex:ry,lights_pars_begin:sy,lights_toon_fragment:ay,lights_toon_pars_fragment:ly,lights_phong_fragment:uy,lights_phong_pars_fragment:cy,lights_physical_fragment:fy,lights_physical_pars_fragment:dy,lights_fragment_begin:hy,lights_fragment_maps:py,lights_fragment_end:my,logdepthbuf_fragment:gy,logdepthbuf_pars_fragment:vy,logdepthbuf_pars_vertex:_y,logdepthbuf_vertex:xy,map_fragment:yy,map_pars_fragment:Sy,map_particle_fragment:My,map_particle_pars_fragment:wy,metalnessmap_fragment:Ey,metalnessmap_pars_fragment:Ty,morphcolor_vertex:Cy,morphnormal_vertex:by,morphtarget_pars_vertex:Ay,morphtarget_vertex:Ly,normal_fragment_begin:Py,normal_fragment_maps:Dy,normal_pars_fragment:Ry,normal_pars_vertex:Iy,normal_vertex:Ny,normalmap_pars_fragment:Fy,clearcoat_normal_fragment_begin:zy,clearcoat_normal_fragment_maps:ky,clearcoat_pars_fragment:Oy,iridescence_pars_fragment:Uy,output_fragment:By,packing:Gy,premultiplied_alpha_fragment:Vy,project_vertex:Hy,dithering_fragment:Wy,dithering_pars_fragment:Xy,roughnessmap_fragment:jy,roughnessmap_pars_fragment:qy,shadowmap_pars_fragment:Yy,shadowmap_pars_vertex:$y,shadowmap_vertex:Zy,shadowmask_pars_fragment:Ky,skinbase_vertex:Qy,skinning_pars_vertex:Jy,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:oS,transmission_pars_fragment:aS,uv_pars_fragment:lS,uv_pars_vertex:uS,uv_vertex:cS,uv2_pars_fragment:fS,uv2_pars_vertex:dS,uv2_vertex:hS,worldpos_vertex:pS,background_vert:mS,background_frag:gS,cube_vert:vS,cube_frag:_S,depth_vert:xS,depth_frag:yS,distanceRGBA_vert:SS,distanceRGBA_frag:MS,equirect_vert:wS,equirect_frag:ES,linedashed_vert:TS,linedashed_frag:CS,meshbasic_vert:bS,meshbasic_frag:AS,meshlambert_vert:LS,meshlambert_frag:PS,meshmatcap_vert:DS,meshmatcap_frag:RS,meshnormal_vert:IS,meshnormal_frag:NS,meshphong_vert:FS,meshphong_frag:zS,meshphysical_vert:kS,meshphysical_frag:OS,meshtoon_vert:US,meshtoon_frag:BS,points_vert:GS,points_frag:VS,shadow_vert:HS,shadow_frag:WS,sprite_vert:XS,sprite_frag:jS},se={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new on},uv2Transform:{value:new on},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new on}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new on}}},An={basic:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:Mt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:Mt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:Mt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new We(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:Mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:Mt([se.points,se.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:Mt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:Mt([se.common,se.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:Mt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:Mt([se.sprite,se.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new on},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:Mt([se.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:Mt([se.common,se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:Mt([se.lights,se.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};An.physical={uniforms:Mt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function qS(n,e,t,i,r,s){const o=new We(0);let a=r===!0?0:1,l,u,d=null,c=0,f=null;function v(p,h){let m=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=e.get(g));const x=n.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(g=null),g===null?_(o,a):g&&g.isColor&&(_(g,1),m=!0),(n.autoClear||m)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===rl)?(u===void 0&&(u=new qn(new _o(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:cs(An.cube.uniforms),vertexShader:An.cube.vertexShader,fragmentShader:An.cube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,(d!==g||c!==g.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=g,c=g.version,f=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new qn(new xf(2,2),new or({name:"BackgroundMaterial",uniforms:cs(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ao,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||c!==g.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,d=g,c=g.version,f=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,_(o,a)},render:v}}function YS(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,d=!1;function c(z,$,G,q,R){let D=!1;if(o){const F=p(q,G,$);u!==F&&(u=F,v(u.object)),D=m(z,q,G,R),D&&g(z,q,G,R)}else{const F=$.wireframe===!0;(u.geometry!==q.id||u.program!==G.id||u.wireframe!==F)&&(u.geometry=q.id,u.program=G.id,u.wireframe=F,D=!0)}R!==null&&t.update(R,34963),(D||d)&&(d=!1,y(z,$,G,q),R!==null&&n.bindBuffer(34963,t.get(R).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function v(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,$,G){const q=G.wireframe===!0;let R=a[z.id];R===void 0&&(R={},a[z.id]=R);let D=R[$.id];D===void 0&&(D={},R[$.id]=D);let F=D[q];return F===void 0&&(F=h(f()),D[q]=F),F}function h(z){const $=[],G=[],q=[];for(let R=0;R<r;R++)$[R]=0,G[R]=0,q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:G,attributeDivisors:q,object:z,attributes:{},index:null}}function m(z,$,G,q){const R=u.attributes,D=$.attributes;let F=0;const Y=G.getAttributes();for(const j in Y)if(Y[j].location>=0){const ue=R[j];let me=D[j];if(me===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(me=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(me=z.instanceColor)),ue===void 0||ue.attribute!==me||me&&ue.data!==me.data)return!0;F++}return u.attributesNum!==F||u.index!==q}function g(z,$,G,q){const R={},D=$.attributes;let F=0;const Y=G.getAttributes();for(const j in Y)if(Y[j].location>=0){let ue=D[j];ue===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(ue=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(ue=z.instanceColor));const me={};me.attribute=ue,ue&&ue.data&&(me.data=ue.data),R[j]=me,F++}u.attributes=R,u.attributesNum=F,u.index=q}function x(){const z=u.newAttributes;for(let $=0,G=z.length;$<G;$++)z[$]=0}function M(z){S(z,0)}function S(z,$){const G=u.newAttributes,q=u.enabledAttributes,R=u.attributeDivisors;G[z]=1,q[z]===0&&(n.enableVertexAttribArray(z),q[z]=1),R[z]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,$),R[z]=$)}function C(){const z=u.newAttributes,$=u.enabledAttributes;for(let G=0,q=$.length;G<q;G++)$[G]!==z[G]&&(n.disableVertexAttribArray(G),$[G]=0)}function L(z,$,G,q,R,D){i.isWebGL2===!0&&(G===5124||G===5125)?n.vertexAttribIPointer(z,$,G,R,D):n.vertexAttribPointer(z,$,G,q,R,D)}function y(z,$,G,q){if(i.isWebGL2===!1&&(z.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const R=q.attributes,D=G.getAttributes(),F=$.defaultAttributeValues;for(const Y in D){const j=D[Y];if(j.location>=0){let K=R[Y];if(K===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),K!==void 0){const ue=K.normalized,me=K.itemSize,W=t.get(K);if(W===void 0)continue;const Ae=W.buffer,ge=W.type,xe=W.bytesPerElement;if(K.isInterleavedBufferAttribute){const he=K.data,Fe=he.stride,Me=K.offset;if(he.isInstancedInterleavedBuffer){for(let pe=0;pe<j.locationSize;pe++)S(j.location+pe,he.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<j.locationSize;pe++)M(j.location+pe);n.bindBuffer(34962,Ae);for(let pe=0;pe<j.locationSize;pe++)L(j.location+pe,me/j.locationSize,ge,ue,Fe*xe,(Me+me/j.locationSize*pe)*xe)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<j.locationSize;he++)S(j.location+he,K.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<j.locationSize;he++)M(j.location+he);n.bindBuffer(34962,Ae);for(let he=0;he<j.locationSize;he++)L(j.location+he,me/j.locationSize,ge,ue,me*xe,me/j.locationSize*he*xe)}}else if(F!==void 0){const ue=F[Y];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(j.location,ue);break;case 3:n.vertexAttrib3fv(j.location,ue);break;case 4:n.vertexAttrib4fv(j.location,ue);break;default:n.vertexAttrib1fv(j.location,ue)}}}}C()}function A(){ie();for(const z in a){const $=a[z];for(const G in $){const q=$[G];for(const R in q)_(q[R].object),delete q[R];delete $[G]}delete a[z]}}function I(z){if(a[z.id]===void 0)return;const $=a[z.id];for(const G in $){const q=$[G];for(const R in q)_(q[R].object),delete q[R];delete $[G]}delete a[z.id]}function O(z){for(const $ in a){const G=a[$];if(G[z.id]===void 0)continue;const q=G[z.id];for(const R in q)_(q[R].object),delete q[R];delete G[z.id]}}function ie(){Q(),d=!0,u!==l&&(u=l,v(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:ie,resetDefaultState:Q,dispose:A,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:M,disableUnusedAttributes:C}}function $S(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function l(u,d,c){if(c===0)return;let f,v;if(r)f=n,v="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[v](s,u,d,c),t.update(d,s,c)}this.setMode=o,this.render=a,this.renderInstances=l}function ZS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,c=n.getParameter(34930),f=n.getParameter(35660),v=n.getParameter(3379),_=n.getParameter(34076),p=n.getParameter(34921),h=n.getParameter(36347),m=n.getParameter(36348),g=n.getParameter(36349),x=f>0,M=o||e.has("OES_texture_float"),S=x&&M,C=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:c,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:h,maxVaryings:m,maxFragmentUniforms:g,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:C}}function KS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Oi,a=new on,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f,v){const _=c.length!==0||f||i!==0||r;return r=f,t=d(c,v,0),i=c.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1,u()},this.setState=function(c,f,v){const _=c.clippingPlanes,p=c.clipIntersection,h=c.clipShadows,m=n.get(c);if(!r||_===null||_.length===0||s&&!h)s?d(null):u();else{const g=s?0:i,x=g*4;let M=m.clippingState||null;l.value=M,M=d(_,f,x,v);for(let S=0;S!==x;++S)M[S]=t[S];m.clippingState=M,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(c,f,v,_){const p=c!==null?c.length:0;let h=null;if(p!==0){if(h=l.value,_!==!0||h===null){const m=v+p*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(h===null||h.length<m)&&(h=new Float32Array(m));for(let x=0,M=v;x!==p;++x,M+=4)o.copy(c[x]).applyMatrix4(g,a),o.normal.toArray(h,M),h[M+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function QS(n){let e=new WeakMap;function t(o,a){return a===hc?o.mapping=as:a===pc&&(o.mapping=ls),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===hc||a===pc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new px(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class JS extends _g{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wr=4,wh=[.125,.215,.35,.446,.526,.582],Bi=20,hu=new JS,Eh=new We;let pu=null;const Ui=(1+Math.sqrt(5))/2,Lr=1/Ui,Th=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Ui,Lr),new N(0,Ui,-Lr),new N(Lr,0,Ui),new N(-Lr,0,Ui),new N(Ui,Lr,0),new N(-Ui,Lr,0)];class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){pu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pu),e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pu=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:lo,format:Pn,encoding:ir,depthBuffer:!1},r=bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e1(s)),this._blurMaterial=t1(s,e,t)}return r}_compileMaterial(e){const t=new qn(this._lodPlanes[0],e);this._renderer.compile(t,hu)}_sceneToCubeUV(e,t,i,r){const a=new rn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,f=d.toneMapping;d.getClearColor(Eh),d.toneMapping=$n,d.autoClear=!1;const v=new _f({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new qn(new _o,v);let p=!1;const h=e.background;h?h.isColor&&(v.color.copy(h),e.background=null,p=!0):(v.color.copy(Eh),p=!0);for(let m=0;m<6;m++){const g=m%3;g===0?(a.up.set(0,l[m],0),a.lookAt(u[m],0,0)):g===1?(a.up.set(0,0,l[m]),a.lookAt(0,u[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,u[m]));const x=this._cubeSize;ta(r,g*x,m>2?x:0,x,x),d.setRenderTarget(r),p&&d.render(_,a),d.render(e,a)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=c,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===as||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new qn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ta(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,hu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Th[(r-1)%Th.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,c=new qn(this._lodPlanes[r],u),f=u.uniforms,v=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Bi-1),p=s/_,h=isFinite(s)?1+Math.floor(d*p):Bi;h>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Bi}`);const m=[];let g=0;for(let L=0;L<Bi;++L){const y=L/p,A=Math.exp(-y*y/2);m.push(A),L===0?g+=A:L<h&&(g+=2*A)}for(let L=0;L<m.length;L++)m[L]=m[L]/g;f.envMap.value=e.texture,f.samples.value=h,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const M=this._sizeLods[r],S=3*M*(r>x-Wr?r-x+Wr:0),C=4*(this._cubeSize-M);ta(t,S,C,3*M,2*M),l.setRenderTarget(t),l.render(c,hu)}}function e1(n){const e=[],t=[],i=[];let r=n;const s=n-Wr+1+wh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Wr?l=wh[o-n+Wr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),d=-u,c=1+u,f=[d,d,c,d,c,c,d,d,c,c,d,c],v=6,_=6,p=3,h=2,m=1,g=new Float32Array(p*_*v),x=new Float32Array(h*_*v),M=new Float32Array(m*_*v);for(let C=0;C<v;C++){const L=C%3*2/3-1,y=C>2?0:-1,A=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];g.set(A,p*_*C),x.set(f,h*_*C);const I=[C,C,C,C,C,C];M.set(I,m*_*C)}const S=new Di;S.setAttribute("position",new In(g,p)),S.setAttribute("uv",new In(x,h)),S.setAttribute("faceIndex",new In(M,m)),e.push(S),r>Wr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bh(n,e,t){const i=new rr(n,e,t);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ta(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function t1(n,e,t){const i=new Float32Array(Bi),r=new N(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ah(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Lh(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function yf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function n1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hc||l===pc,d=l===as||l===ls;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=e.get(a);return t===null&&(t=new Ch(n)),c=u?t.fromEquirectangular(a,c):t.fromCubemap(a,c),e.set(a,c),c.texture}else{if(e.has(a))return e.get(a).texture;{const c=a.image;if(u&&c&&c.height>0||d&&c&&r(c)){t===null&&(t=new Ch(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function i1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function r1(n,e,t,i){const r={},s=new WeakMap;function o(c){const f=c.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const v=s.get(f);v&&(e.remove(v),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(c,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(c){const f=c.attributes;for(const _ in f)e.update(f[_],34962);const v=c.morphAttributes;for(const _ in v){const p=v[_];for(let h=0,m=p.length;h<m;h++)e.update(p[h],34962)}}function u(c){const f=[],v=c.index,_=c.attributes.position;let p=0;if(v!==null){const g=v.array;p=v.version;for(let x=0,M=g.length;x<M;x+=3){const S=g[x+0],C=g[x+1],L=g[x+2];f.push(S,C,C,L,L,S)}}else{const g=_.array;p=_.version;for(let x=0,M=g.length/3-1;x<M;x+=3){const S=x+0,C=x+1,L=x+2;f.push(S,C,C,L,L,S)}}const h=new(cg(f)?vg:gg)(f,1);h.version=p;const m=s.get(c);m&&e.remove(m),s.set(c,h)}function d(c){const f=s.get(c);if(f){const v=c.index;v!==null&&f.version<v.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:d}}function s1(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function d(f,v){n.drawElements(s,v,a,f*l),t.update(v,s,1)}function c(f,v,_){if(_===0)return;let p,h;if(r)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,v,a,f*l,_),t.update(v,s,_)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=c}function o1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function a1(n,e){return n[0]-e[0]}function l1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function mu(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function u1(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new dt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,d,c,f){const v=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,h=p!==void 0?p.length:0;let m=s.get(d);if(m===void 0||m.count!==h){let G=function(){z.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var _=G;m!==void 0&&m.texture.dispose();const M=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let I=0;M===!0&&(I=1),S===!0&&(I=2),C===!0&&(I=3);let O=d.attributes.position.count*I,ie=1;O>e.maxTextureSize&&(ie=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const Q=new Float32Array(O*ie*4*h),z=new pg(Q,O,ie,h);z.type=Xi,z.needsUpdate=!0;const $=I*4;for(let q=0;q<h;q++){const R=L[q],D=y[q],F=A[q],Y=O*ie*4*q;for(let j=0;j<R.count;j++){const K=j*$;M===!0&&(o.fromBufferAttribute(R,j),R.normalized===!0&&mu(o,R),Q[Y+K+0]=o.x,Q[Y+K+1]=o.y,Q[Y+K+2]=o.z,Q[Y+K+3]=0),S===!0&&(o.fromBufferAttribute(D,j),D.normalized===!0&&mu(o,D),Q[Y+K+4]=o.x,Q[Y+K+5]=o.y,Q[Y+K+6]=o.z,Q[Y+K+7]=0),C===!0&&(o.fromBufferAttribute(F,j),F.normalized===!0&&mu(o,F),Q[Y+K+8]=o.x,Q[Y+K+9]=o.y,Q[Y+K+10]=o.z,Q[Y+K+11]=F.itemSize===4?o.w:1)}}m={count:h,texture:z,size:new Ce(O,ie)},s.set(d,m),d.addEventListener("dispose",G)}let g=0;for(let M=0;M<v.length;M++)g+=v[M];const x=d.morphTargetsRelative?1:1-g;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",v),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const p=v===void 0?0:v.length;let h=i[d.id];if(h===void 0||h.length!==p){h=[];for(let S=0;S<p;S++)h[S]=[S,0];i[d.id]=h}for(let S=0;S<p;S++){const C=h[S];C[0]=S,C[1]=v[S]}h.sort(l1);for(let S=0;S<8;S++)S<p&&h[S][1]?(a[S][0]=h[S][0],a[S][1]=h[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(a1);const m=d.morphAttributes.position,g=d.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const C=a[S],L=C[0],y=C[1];L!==Number.MAX_SAFE_INTEGER&&y?(m&&d.getAttribute("morphTarget"+S)!==m[L]&&d.setAttribute("morphTarget"+S,m[L]),g&&d.getAttribute("morphNormal"+S)!==g[L]&&d.setAttribute("morphNormal"+S,g[L]),r[S]=y,x+=y):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),g&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const M=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function c1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,d=l.geometry,c=e.get(l,d);return r.get(c)!==u&&(e.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),c}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Mg=new wn,wg=new pg,Eg=new K_,Tg=new xg,Ph=[],Dh=[],Rh=new Float32Array(16),Ih=new Float32Array(9),Nh=new Float32Array(4);function ps(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ph[r];if(s===void 0&&(s=new Float32Array(r),Ph[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function al(n,e){let t=Dh[e];t===void 0&&(t=new Int32Array(e),Dh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function f1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function p1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function m1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(At(t,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),Lt(t,i)}}function g1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(At(t,i))return;Ih.set(i),n.uniformMatrix3fv(this.addr,!1,Ih),Lt(t,i)}}function v1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(At(t,i))return;Rh.set(i),n.uniformMatrix4fv(this.addr,!1,Rh),Lt(t,i)}}function _1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function x1(n,e){const t=this.cache;At(t,e)||(n.uniform2iv(this.addr,e),Lt(t,e))}function y1(n,e){const t=this.cache;At(t,e)||(n.uniform3iv(this.addr,e),Lt(t,e))}function S1(n,e){const t=this.cache;At(t,e)||(n.uniform4iv(this.addr,e),Lt(t,e))}function M1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function w1(n,e){const t=this.cache;At(t,e)||(n.uniform2uiv(this.addr,e),Lt(t,e))}function E1(n,e){const t=this.cache;At(t,e)||(n.uniform3uiv(this.addr,e),Lt(t,e))}function T1(n,e){const t=this.cache;At(t,e)||(n.uniform4uiv(this.addr,e),Lt(t,e))}function C1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Mg,r)}function b1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Eg,r)}function A1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Tg,r)}function L1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wg,r)}function P1(n){switch(n){case 5126:return f1;case 35664:return d1;case 35665:return h1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return v1;case 5124:case 35670:return _1;case 35667:case 35671:return x1;case 35668:case 35672:return y1;case 35669:case 35673:return S1;case 5125:return M1;case 36294:return w1;case 36295:return E1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return L1}}function D1(n,e){n.uniform1fv(this.addr,e)}function R1(n,e){const t=ps(e,this.size,2);n.uniform2fv(this.addr,t)}function I1(n,e){const t=ps(e,this.size,3);n.uniform3fv(this.addr,t)}function N1(n,e){const t=ps(e,this.size,4);n.uniform4fv(this.addr,t)}function F1(n,e){const t=ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z1(n,e){const t=ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function k1(n,e){const t=ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function O1(n,e){n.uniform1iv(this.addr,e)}function U1(n,e){n.uniform2iv(this.addr,e)}function B1(n,e){n.uniform3iv(this.addr,e)}function G1(n,e){n.uniform4iv(this.addr,e)}function V1(n,e){n.uniform1uiv(this.addr,e)}function H1(n,e){n.uniform2uiv(this.addr,e)}function W1(n,e){n.uniform3uiv(this.addr,e)}function X1(n,e){n.uniform4uiv(this.addr,e)}function j1(n,e,t){const i=e.length,r=al(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Mg,r[s])}function q1(n,e,t){const i=e.length,r=al(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Eg,r[s])}function Y1(n,e,t){const i=e.length,r=al(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Tg,r[s])}function $1(n,e,t){const i=e.length,r=al(t,i);n.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||wg,r[s])}function Z1(n){switch(n){case 5126:return D1;case 35664:return R1;case 35665:return I1;case 35666:return N1;case 35674:return F1;case 35675:return z1;case 35676:return k1;case 5124:case 35670:return O1;case 35667:case 35671:return U1;case 35668:case 35672:return B1;case 35669:case 35673:return G1;case 5125:return V1;case 36294:return H1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return $1}}class K1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=P1(t.type)}}class Q1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Z1(t.type)}}class J1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const gu=/(\w+)(\])?(\[|\.)?/g;function Fh(n,e){n.seq.push(e),n.map[e.id]=e}function eM(n,e,t){const i=n.name,r=i.length;for(gu.lastIndex=0;;){const s=gu.exec(i),o=gu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Fh(t,u===void 0?new K1(a,n,e):new Q1(a,n,e));break}else{let c=t.map[a];c===void 0&&(c=new J1(a),Fh(t,c)),t=c}}}class ga{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);eM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function zh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let tM=0;function nM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function iM(n){switch(n){case ir:return["Linear","( value )"];case Ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function kh(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+nM(n.getShaderSource(e),o)}else return r}function rM(n,e){const t=iM(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function sM(n,e){let t;switch(e){case w_:t="Linear";break;case E_:t="Reinhard";break;case T_:t="OptimizedCineon";break;case C_:t="ACESFilmic";break;case b_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oM(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function aM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lM(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Is(n){return n!==""}function Oh(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uM=/^[ \t]*#include +<([\w\d./]+)>/gm;function xc(n){return n.replace(uM,cM)}function cM(n,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xc(t)}const fM=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bh(n){return n.replace(dM,Cg).replace(fM,hM)}function hM(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Cg(n,e,t,i)}function Cg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rs&&(e="SHADOWMAP_TYPE_VSM"),e}function mM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function vM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ag:e="ENVMAP_BLENDING_MULTIPLY";break;case S_:e="ENVMAP_BLENDING_MIX";break;case M_:e="ENVMAP_BLENDING_ADD";break}return e}function _M(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xM(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pM(t),u=mM(t),d=gM(t),c=vM(t),f=_M(t),v=t.isWebGL2?"":oM(t),_=aM(s),p=r.createProgram();let h,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[_].filter(Is).join(`
`),h.length>0&&(h+=`
`),m=[v,_].filter(Is).join(`
`),m.length>0&&(m+=`
`)):(h=[Gh(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),m=[v,Gh(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Te.tonemapping_pars_fragment:"",t.toneMapping!==$n?sM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,rM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Is).join(`
`)),o=xc(o),o=Oh(o,t),o=Uh(o,t),a=xc(a),a=Oh(a,t),a=Uh(a,t),o=Bh(o),a=Bh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=g+h+o,M=g+m+a,S=zh(r,35633,x),C=zh(r,35632,M);if(r.attachShader(p,S),r.attachShader(p,C),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const A=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(S).trim(),O=r.getShaderInfoLog(C).trim();let ie=!0,Q=!0;if(r.getProgramParameter(p,35714)===!1){ie=!1;const z=kh(r,S,"vertex"),$=kh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+A+`
`+z+`
`+$)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(I===""||O==="")&&(Q=!1);Q&&(this.diagnostics={runnable:ie,programLog:A,vertexShader:{log:I,prefix:h},fragmentShader:{log:O,prefix:m}})}r.deleteShader(S),r.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new ga(r,p)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=lM(r,p)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=tM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=C,this}let yM=0;class SM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new MM(e);t.set(e,i)}return t.get(e)}}class MM{constructor(e){this.id=yM++,this.code=e,this.usedTimes=0}}function wM(n,e,t,i,r,s,o){const a=new mg,l=new SM,u=[],d=r.isWebGL2,c=r.logarithmicDepthBuffer,f=r.vertexTextures;let v=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y,A,I,O,ie){const Q=O.fog,z=ie.geometry,$=y.isMeshStandardMaterial?O.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||$),q=!!G&&G.mapping===rl?G.image.height:null,R=_[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const D=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,F=D!==void 0?D.length:0;let Y=0;z.morphAttributes.position!==void 0&&(Y=1),z.morphAttributes.normal!==void 0&&(Y=2),z.morphAttributes.color!==void 0&&(Y=3);let j,K,ue,me;if(R){const Fe=An[R];j=Fe.vertexShader,K=Fe.fragmentShader}else j=y.vertexShader,K=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const W=n.getRenderTarget(),Ae=y.alphaTest>0,ge=y.clearcoat>0,xe=y.iridescence>0;return{isWebGL2:d,shaderID:R,shaderName:y.type,vertexShader:j,fragmentShader:K,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,instancing:ie.isInstancedMesh===!0,instancingColor:ie.isInstancedMesh===!0&&ie.instanceColor!==null,supportsVertexTextures:f,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:ir,map:!!y.map,matcap:!!y.matcap,envMap:!!G,envMapMode:G&&G.mapping,envMapCubeUVHeight:q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===q_,tangentSpaceNormalMap:y.normalMapType===j_,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ze,clearcoat:ge,clearcoatMap:ge&&!!y.clearcoatMap,clearcoatRoughnessMap:ge&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!y.clearcoatNormalMap,iridescence:xe,iridescenceMap:xe&&!!y.iridescenceMap,iridescenceThicknessMap:xe&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Kr,alphaMap:!!y.alphaMap,alphaTest:Ae,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!z.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!Q,useFog:y.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:c,skinning:ie.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Y,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:$n,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===os,flipSided:y.side===Sn,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)A.push(I),A.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(m(A,y),g(A,y),A.push(n.outputEncoding)),A.push(y.customProgramCacheKey),A.join()}function m(y,A){y.push(A.precision),y.push(A.outputEncoding),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.combine),y.push(A.vertexUvs),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function g(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),A.fog&&a.enable(33),y.push(a.mask),a.disableAll(),A.useFog&&a.enable(0),A.flatShading&&a.enable(1),A.logarithmicDepthBuffer&&a.enable(2),A.skinning&&a.enable(3),A.morphTargets&&a.enable(4),A.morphNormals&&a.enable(5),A.morphColors&&a.enable(6),A.premultipliedAlpha&&a.enable(7),A.shadowMapEnabled&&a.enable(8),A.physicallyCorrectLights&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.specularIntensityMap&&a.enable(14),A.specularColorMap&&a.enable(15),A.transmission&&a.enable(16),A.transmissionMap&&a.enable(17),A.thicknessMap&&a.enable(18),A.sheen&&a.enable(19),A.sheenColorMap&&a.enable(20),A.sheenRoughnessMap&&a.enable(21),A.decodeVideoTexture&&a.enable(22),A.opaque&&a.enable(23),y.push(a.mask)}function x(y){const A=_[y.type];let I;if(A){const O=An[A];I=cx.clone(O.uniforms)}else I=y.uniforms;return I}function M(y,A){let I;for(let O=0,ie=u.length;O<ie;O++){const Q=u[O];if(Q.cacheKey===A){I=Q,++I.usedTimes;break}}return I===void 0&&(I=new xM(n,A,y,s),u.push(I)),I}function S(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:M,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:L}}function EM(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function TM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(c,f,v,_,p,h){let m=n[e];return m===void 0?(m={id:c.id,object:c,geometry:f,material:v,groupOrder:_,renderOrder:c.renderOrder,z:p,group:h},n[e]=m):(m.id=c.id,m.object=c,m.geometry=f,m.material=v,m.groupOrder=_,m.renderOrder=c.renderOrder,m.z=p,m.group=h),e++,m}function a(c,f,v,_,p,h){const m=o(c,f,v,_,p,h);v.transmission>0?i.push(m):v.transparent===!0?r.push(m):t.push(m)}function l(c,f,v,_,p,h){const m=o(c,f,v,_,p,h);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):t.unshift(m)}function u(c,f){t.length>1&&t.sort(c||TM),i.length>1&&i.sort(f||Vh),r.length>1&&r.sort(f||Vh)}function d(){for(let c=e,f=n.length;c<f;c++){const v=n[c];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:u}}function CM(){let n=new WeakMap;function e(i,r){let s;return n.has(i)===!1?(s=new Hh,n.set(i,[s])):r>=n.get(i).length?(s=new Hh,n.get(i).push(s)):s=n.get(i)[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function bM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new We};break;case"SpotLight":t={position:new N,direction:new N,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function AM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let LM=0;function PM(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function DM(n,e){const t=new bM,i=AM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)r.probe.push(new N);const s=new N,o=new vt,a=new vt;function l(d,c){let f=0,v=0,_=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,h=0,m=0,g=0,x=0,M=0,S=0,C=0;d.sort(PM);const L=c!==!0?Math.PI:1;for(let A=0,I=d.length;A<I;A++){const O=d[A],ie=O.color,Q=O.intensity,z=O.distance,$=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=ie.r*Q*L,v+=ie.g*Q*L,_+=ie.b*Q*L;else if(O.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(O.sh.coefficients[G],Q);else if(O.isDirectionalLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*L),O.castShadow){const q=O.shadow,R=i.get(O);R.shadowBias=q.bias,R.shadowNormalBias=q.normalBias,R.shadowRadius=q.radius,R.shadowMapSize=q.mapSize,r.directionalShadow[p]=R,r.directionalShadowMap[p]=$,r.directionalShadowMatrix[p]=O.shadow.matrix,M++}r.directional[p]=G,p++}else if(O.isSpotLight){const G=t.get(O);if(G.position.setFromMatrixPosition(O.matrixWorld),G.color.copy(ie).multiplyScalar(Q*L),G.distance=z,G.coneCos=Math.cos(O.angle),G.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),G.decay=O.decay,O.castShadow){const q=O.shadow,R=i.get(O);R.shadowBias=q.bias,R.shadowNormalBias=q.normalBias,R.shadowRadius=q.radius,R.shadowMapSize=q.mapSize,r.spotShadow[m]=R,r.spotShadowMap[m]=$,r.spotShadowMatrix[m]=O.shadow.matrix,C++}r.spot[m]=G,m++}else if(O.isRectAreaLight){const G=t.get(O);G.color.copy(ie).multiplyScalar(Q),G.halfWidth.set(O.width*.5,0,0),G.halfHeight.set(0,O.height*.5,0),r.rectArea[g]=G,g++}else if(O.isPointLight){const G=t.get(O);if(G.color.copy(O.color).multiplyScalar(O.intensity*L),G.distance=O.distance,G.decay=O.decay,O.castShadow){const q=O.shadow,R=i.get(O);R.shadowBias=q.bias,R.shadowNormalBias=q.normalBias,R.shadowRadius=q.radius,R.shadowMapSize=q.mapSize,R.shadowCameraNear=q.camera.near,R.shadowCameraFar=q.camera.far,r.pointShadow[h]=R,r.pointShadowMap[h]=$,r.pointShadowMatrix[h]=O.shadow.matrix,S++}r.point[h]=G,h++}else if(O.isHemisphereLight){const G=t.get(O);G.skyColor.copy(O.color).multiplyScalar(Q*L),G.groundColor.copy(O.groundColor).multiplyScalar(Q*L),r.hemi[x]=G,x++}}g>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=v,r.ambient[2]=_;const y=r.hash;(y.directionalLength!==p||y.pointLength!==h||y.spotLength!==m||y.rectAreaLength!==g||y.hemiLength!==x||y.numDirectionalShadows!==M||y.numPointShadows!==S||y.numSpotShadows!==C)&&(r.directional.length=p,r.spot.length=m,r.rectArea.length=g,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotShadowMatrix.length=C,y.directionalLength=p,y.pointLength=h,y.spotLength=m,y.rectAreaLength=g,y.hemiLength=x,y.numDirectionalShadows=M,y.numPointShadows=S,y.numSpotShadows=C,r.version=LM++)}function u(d,c){let f=0,v=0,_=0,p=0,h=0;const m=c.matrixWorldInverse;for(let g=0,x=d.length;g<x;g++){const M=d[g];if(M.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(M.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),_++}else if(M.isRectAreaLight){const S=r.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),o.copy(M.matrixWorld),o.premultiply(m),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),p++}else if(M.isPointLight){const S=r.point[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),v++}else if(M.isHemisphereLight){const S=r.hemi[h];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),h++}}}return{setup:l,setupView:u,state:r}}function Wh(n,e){const t=new DM(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(c){i.push(c)}function a(c){r.push(c)}function l(c){t.setup(i,c)}function u(c){t.setupView(i,c)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function RM(n,e){let t=new WeakMap;function i(s,o=0){let a;return t.has(s)===!1?(a=new Wh(n,e),t.set(s,[a])):o>=t.get(s).length?(a=new Wh(n,e),t.get(s).push(a)):a=t.get(s)[o],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class IM extends ol{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NM extends ol{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kM(n,e,t){let i=new yg;const r=new Ce,s=new Ce,o=new dt,a=new IM({depthPacking:X_}),l=new NM,u={},d=t.maxTextureSize,c={0:Sn,1:ao,2:os},f=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:FM,fragmentShader:zM}),v=f.clone();v.defines.HORIZONTAL_PASS=1;const _=new Di;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new qn(_,f),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rg,this.render=function(M,S,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||M.length===0)return;const L=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Ti),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let O=0,ie=M.length;O<ie;O++){const Q=M[O],z=Q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null){const q=this.type!==Rs?{minFilter:It,magFilter:It}:{};z.map=new rr(r.x,r.y,q),z.map.texture.name=Q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const G=z.getViewportCount();for(let q=0;q<G;q++){const R=z.getViewport(q);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),I.viewport(o),z.updateMatrices(Q,q),i=z.getFrustum(),x(S,C,z.camera,Q,this.type)}z.isPointLightShadow!==!0&&this.type===Rs&&m(z,C),z.needsUpdate=!1}h.needsUpdate=!1,n.setRenderTarget(L,y,A)};function m(M,S){const C=e.update(p);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,v.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,v.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new rr(r.x,r.y)),f.uniforms.shadow_pass.value=M.map.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(S,null,C,f,p,null),v.uniforms.shadow_pass.value=M.mapPass.texture,v.uniforms.resolution.value=M.mapSize,v.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(S,null,C,v,p,null)}function g(M,S,C,L,y,A){let I=null;const O=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(O!==void 0?I=O:I=C.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const ie=I.uuid,Q=S.uuid;let z=u[ie];z===void 0&&(z={},u[ie]=z);let $=z[Q];$===void 0&&($=I.clone(),z[Q]=$),I=$}return I.visible=S.visible,I.wireframe=S.wireframe,A===Rs?I.side=S.shadowSide!==null?S.shadowSide:S.side:I.side=S.shadowSide!==null?S.shadowSide:c[S.side],I.alphaMap=S.alphaMap,I.alphaTest=S.alphaTest,I.clipShadows=S.clipShadows,I.clippingPlanes=S.clippingPlanes,I.clipIntersection=S.clipIntersection,I.displacementMap=S.displacementMap,I.displacementScale=S.displacementScale,I.displacementBias=S.displacementBias,I.wireframeLinewidth=S.wireframeLinewidth,I.linewidth=S.linewidth,C.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(C.matrixWorld),I.nearDistance=L,I.farDistance=y),I}function x(M,S,C,L,y){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&y===Rs)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const O=e.update(M),ie=M.material;if(Array.isArray(ie)){const Q=O.groups;for(let z=0,$=Q.length;z<$;z++){const G=Q[z],q=ie[G.materialIndex];if(q&&q.visible){const R=g(M,q,L,C.near,C.far,y);n.renderBufferDirect(C,null,O,R,M,G)}}}else if(ie.visible){const Q=g(M,ie,L,C.near,C.far,y);n.renderBufferDirect(C,null,O,Q,M,null)}}const I=M.children;for(let O=0,ie=I.length;O<ie;O++)x(I[O],S,C,L,y)}}function OM(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const re=new dt;let V=null;const fe=new dt(0,0,0,0);return{setMask:function(ce){V!==ce&&!P&&(n.colorMask(ce,ce,ce,ce),V=ce)},setLocked:function(ce){P=ce},setClear:function(ce,Re,ut,Qe,ti){ti===!0&&(ce*=Qe,Re*=Qe,ut*=Qe),re.set(ce,Re,ut,Qe),fe.equals(re)===!1&&(n.clearColor(ce,Re,ut,Qe),fe.copy(re))},reset:function(){P=!1,V=null,fe.set(-1,0,0,0)}}}function s(){let P=!1,re=null,V=null,fe=null;return{setTest:function(ce){ce?Ae(2929):ge(2929)},setMask:function(ce){re!==ce&&!P&&(n.depthMask(ce),re=ce)},setFunc:function(ce){if(V!==ce){if(ce)switch(ce){case p_:n.depthFunc(512);break;case m_:n.depthFunc(519);break;case g_:n.depthFunc(513);break;case dc:n.depthFunc(515);break;case v_:n.depthFunc(514);break;case __:n.depthFunc(518);break;case x_:n.depthFunc(516);break;case y_:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);V=ce}},setLocked:function(ce){P=ce},setClear:function(ce){fe!==ce&&(n.clearDepth(ce),fe=ce)},reset:function(){P=!1,re=null,V=null,fe=null}}}function o(){let P=!1,re=null,V=null,fe=null,ce=null,Re=null,ut=null,Qe=null,ti=null;return{setTest:function(Ye){P||(Ye?Ae(2960):ge(2960))},setMask:function(Ye){re!==Ye&&!P&&(n.stencilMask(Ye),re=Ye)},setFunc:function(Ye,Fn,Kt){(V!==Ye||fe!==Fn||ce!==Kt)&&(n.stencilFunc(Ye,Fn,Kt),V=Ye,fe=Fn,ce=Kt)},setOp:function(Ye,Fn,Kt){(Re!==Ye||ut!==Fn||Qe!==Kt)&&(n.stencilOp(Ye,Fn,Kt),Re=Ye,ut=Fn,Qe=Kt)},setLocked:function(Ye){P=Ye},setClear:function(Ye){ti!==Ye&&(n.clearStencil(Ye),ti=Ye)},reset:function(){P=!1,re=null,V=null,fe=null,ce=null,Re=null,ut=null,Qe=null,ti=null}}}const a=new r,l=new s,u=new o,d=new WeakMap,c=new WeakMap;let f={},v={},_=new WeakMap,p=[],h=null,m=!1,g=null,x=null,M=null,S=null,C=null,L=null,y=null,A=!1,I=null,O=null,ie=null,Q=null,z=null;const $=n.getParameter(35661);let G=!1,q=0;const R=n.getParameter(7938);R.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(R)[1]),G=q>=1):R.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),G=q>=2);let D=null,F={};const Y=n.getParameter(3088),j=n.getParameter(2978),K=new dt().fromArray(Y),ue=new dt().fromArray(j);function me(P,re,V){const fe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(P,ce),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let Re=0;Re<V;Re++)n.texImage2D(re+Re,0,6408,1,1,0,6408,5121,fe);return ce}const W={};W[3553]=me(3553,3553,1),W[34067]=me(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ae(2929),l.setFunc(dc),rt(!1),Ut(Id),Ae(2884),et(Ti);function Ae(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function ge(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function xe(P,re){return v[P]!==re?(n.bindFramebuffer(P,re),v[P]=re,i&&(P===36009&&(v[36160]=re),P===36160&&(v[36009]=re)),!0):!1}function he(P,re){let V=p,fe=!1;if(P)if(V=_.get(re),V===void 0&&(V=[],_.set(re,V)),P.isWebGLMultipleRenderTargets){const ce=P.texture;if(V.length!==ce.length||V[0]!==36064){for(let Re=0,ut=ce.length;Re<ut;Re++)V[Re]=36064+Re;V.length=ce.length,fe=!0}}else V[0]!==36064&&(V[0]=36064,fe=!0);else V[0]!==1029&&(V[0]=1029,fe=!0);fe&&(t.isWebGL2?n.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function Fe(P){return h!==P?(n.useProgram(P),h=P,!0):!1}const Me={[Dr]:32774,[i_]:32778,[r_]:32779};if(i)Me[kd]=32775,Me[Od]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Me[kd]=P.MIN_EXT,Me[Od]=P.MAX_EXT)}const pe={[s_]:0,[o_]:1,[a_]:768,[sg]:770,[h_]:776,[f_]:774,[u_]:772,[l_]:769,[og]:771,[d_]:775,[c_]:773};function et(P,re,V,fe,ce,Re,ut,Qe){if(P===Ti){m===!0&&(ge(3042),m=!1);return}if(m===!1&&(Ae(3042),m=!0),P!==n_){if(P!==g||Qe!==A){if((x!==Dr||C!==Dr)&&(n.blendEquation(32774),x=Dr,C=Dr),Qe)switch(P){case Kr:n.blendFuncSeparate(1,771,1,771);break;case Nd:n.blendFunc(1,1);break;case Fd:n.blendFuncSeparate(0,769,0,1);break;case zd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Kr:n.blendFuncSeparate(770,771,1,771);break;case Nd:n.blendFunc(770,1);break;case Fd:n.blendFuncSeparate(0,769,0,1);break;case zd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,S=null,L=null,y=null,g=P,A=Qe}return}ce=ce||re,Re=Re||V,ut=ut||fe,(re!==x||ce!==C)&&(n.blendEquationSeparate(Me[re],Me[ce]),x=re,C=ce),(V!==M||fe!==S||Re!==L||ut!==y)&&(n.blendFuncSeparate(pe[V],pe[fe],pe[Re],pe[ut]),M=V,S=fe,L=Re,y=ut),g=P,A=null}function pt(P,re){P.side===os?ge(2884):Ae(2884);let V=P.side===Sn;re&&(V=!V),rt(V),P.blending===Kr&&P.transparent===!1?et(Ti):et(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const fe=P.stencilWrite;u.setTest(fe),fe&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ze(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ae(32926):ge(32926)}function rt(P){I!==P&&(P?n.frontFace(2304):n.frontFace(2305),I=P)}function Ut(P){P!==Qv?(Ae(2884),P!==O&&(P===Id?n.cullFace(1029):P===Jv?n.cullFace(1028):n.cullFace(1032))):ge(2884),O=P}function st(P){P!==ie&&(G&&n.lineWidth(P),ie=P)}function ze(P,re,V){P?(Ae(32823),(Q!==re||z!==V)&&(n.polygonOffset(re,V),Q=re,z=V)):ge(32823)}function Zt(P){P?Ae(3089):ge(3089)}function Bt(P){P===void 0&&(P=33984+$-1),D!==P&&(n.activeTexture(P),D=P)}function b(P,re){D===null&&Bt();let V=F[D];V===void 0&&(V={type:void 0,texture:void 0},F[D]=V),(V.type!==P||V.texture!==re)&&(n.bindTexture(P,re||W[P]),V.type=P,V.texture=re)}function w(){const P=F[D];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function H(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function E(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(P){K.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function oe(P){ue.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),ue.copy(P))}function _e(P,re){let V=c.get(re);V===void 0&&(V=new WeakMap,c.set(re,V));let fe=V.get(P);fe===void 0&&(fe=n.getUniformBlockIndex(re,P.name),V.set(P,fe))}function Le(P,re){const fe=c.get(re).get(P);d.get(P)!==fe&&(n.uniformBlockBinding(re,fe,P.__bindingPointIndex),d.set(P,fe))}function Ve(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},D=null,F={},v={},_=new WeakMap,p=[],h=null,m=!1,g=null,x=null,M=null,S=null,C=null,L=null,y=null,A=!1,I=null,O=null,ie=null,Q=null,z=null,K.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ae,disable:ge,bindFramebuffer:xe,drawBuffers:he,useProgram:Fe,setBlending:et,setMaterial:pt,setFlipSided:rt,setCullFace:Ut,setLineWidth:st,setPolygonOffset:ze,setScissorTest:Zt,activeTexture:Bt,bindTexture:b,unbindTexture:w,compressedTexImage2D:H,texImage2D:Z,texImage3D:ne,updateUBOMapping:_e,uniformBlockBinding:Le,texStorage2D:ve,texStorage3D:E,texSubImage2D:ee,texSubImage3D:te,compressedTexSubImage2D:ae,scissor:le,viewport:oe,reset:Ve}}function UM(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,d=r.maxTextureSize,c=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,w){return m?new OffscreenCanvas(b,w):Ga("canvas")}function x(b,w,H,ee){let te=1;if((b.width>ee||b.height>ee)&&(te=ee/Math.max(b.width,b.height)),te<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ae=w?_c:Math.floor,ve=ae(te*b.width),E=ae(te*b.height);p===void 0&&(p=g(ve,E));const Z=H?g(ve,E):p;return Z.width=ve,Z.height=E,Z.getContext("2d").drawImage(b,0,0,ve,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+E+")."),Z}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return fh(b.width)&&fh(b.height)}function S(b){return a?!1:b.wrapS!==_n||b.wrapT!==_n||b.minFilter!==It&&b.minFilter!==nn}function C(b,w){return b.generateMipmaps&&w&&b.minFilter!==It&&b.minFilter!==nn}function L(b){n.generateMipmap(b)}function y(b,w,H,ee,te=!1){if(a===!1)return w;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ae=w;return w===6403&&(H===5126&&(ae=33326),H===5131&&(ae=33325),H===5121&&(ae=33321)),w===33319&&(H===5126&&(ae=33328),H===5131&&(ae=33327),H===5121&&(ae=33323)),w===6408&&(H===5126&&(ae=34836),H===5131&&(ae=34842),H===5121&&(ae=ee===Ze&&te===!1?35907:32856),H===32819&&(ae=32854),H===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function A(b,w,H){return C(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==It&&b.minFilter!==nn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function I(b){return b===It||b===Ud||b===Bd?9728:9729}function O(b){const w=b.target;w.removeEventListener("dispose",O),Q(w),w.isVideoTexture&&_.delete(w)}function ie(b){const w=b.target;w.removeEventListener("dispose",ie),$(w)}function Q(b){const w=i.get(b);if(w.__webglInit===void 0)return;const H=b.source,ee=h.get(H);if(ee){const te=ee[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&z(b),Object.keys(ee).length===0&&h.delete(H)}i.remove(b)}function z(b){const w=i.get(b);n.deleteTexture(w.__webglTexture);const H=b.source,ee=h.get(H);delete ee[w.__cacheKey],o.memory.textures--}function $(b){const w=b.texture,H=i.get(b),ee=i.get(w);if(ee.__webglTexture!==void 0&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)n.deleteFramebuffer(H.__webglFramebuffer[te]),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[te]);else{if(n.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let te=0;te<H.__webglColorRenderbuffer.length;te++)H.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[te]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let te=0,ae=w.length;te<ae;te++){const ve=i.get(w[te]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(w[te])}i.remove(w),i.remove(b)}let G=0;function q(){G=0}function R(){const b=G;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),G+=1,b}function D(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function F(b,w){const H=i.get(b);if(b.isVideoTexture&&Zt(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,b,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,H.__webglTexture)}function Y(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ge(H,b,w);return}t.activeTexture(33984+w),t.bindTexture(35866,H.__webglTexture)}function j(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){ge(H,b,w);return}t.activeTexture(33984+w),t.bindTexture(32879,H.__webglTexture)}function K(b,w){const H=i.get(b);if(b.version>0&&H.__version!==b.version){xe(H,b,w);return}t.activeTexture(33984+w),t.bindTexture(34067,H.__webglTexture)}const ue={[mc]:10497,[_n]:33071,[gc]:33648},me={[It]:9728,[Ud]:9984,[Bd]:9986,[nn]:9729,[A_]:9985,[sl]:9987};function W(b,w,H){if(H?(n.texParameteri(b,10242,ue[w.wrapS]),n.texParameteri(b,10243,ue[w.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,ue[w.wrapR]),n.texParameteri(b,10240,me[w.magFilter]),n.texParameteri(b,10241,me[w.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(w.wrapS!==_n||w.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,I(w.magFilter)),n.texParameteri(b,10241,I(w.minFilter)),w.minFilter!==It&&w.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(w.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===lo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(b,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Ae(b,w){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",O));const ee=w.source;let te=h.get(ee);te===void 0&&(te={},h.set(ee,te));const ae=D(w);if(ae!==b.__cacheKey){te[ae]===void 0&&(te[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[ae].usedTimes++;const ve=te[b.__cacheKey];ve!==void 0&&(te[b.__cacheKey].usedTimes--,ve.usedTimes===0&&z(w)),b.__cacheKey=ae,b.__webglTexture=te[ae].texture}return H}function ge(b,w,H){let ee=3553;w.isDataArrayTexture&&(ee=35866),w.isData3DTexture&&(ee=32879);const te=Ae(b,w),ae=w.source;if(t.activeTexture(33984+H),t.bindTexture(ee,b.__webglTexture),ae.version!==ae.__currentVersion||te===!0){n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const ve=S(w)&&M(w.image)===!1;let E=x(w.image,ve,!1,d);E=Bt(w,E);const Z=M(E)||a,ne=s.convert(w.format,w.encoding);let le=s.convert(w.type),oe=y(w.internalFormat,ne,le,w.encoding,w.isVideoTexture);W(ee,w,Z);let _e;const Le=w.mipmaps,Ve=a&&w.isVideoTexture!==!0,P=ae.__currentVersion===void 0||te===!0,re=A(w,E,Z);if(w.isDepthTexture)oe=6402,a?w.type===Xi?oe=36012:w.type===Wi?oe=33190:w.type===Qr?oe=35056:oe=33189:w.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===$i&&oe===6402&&w.type!==ug&&w.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Wi,le=s.convert(w.type)),w.format===us&&oe===6402&&(oe=34041,w.type!==Qr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Qr,le=s.convert(w.type))),P&&(Ve?t.texStorage2D(3553,1,oe,E.width,E.height):t.texImage2D(3553,0,oe,E.width,E.height,0,ne,le,null));else if(w.isDataTexture)if(Le.length>0&&Z){Ve&&P&&t.texStorage2D(3553,re,oe,Le[0].width,Le[0].height);for(let V=0,fe=Le.length;V<fe;V++)_e=Le[V],Ve?t.texSubImage2D(3553,V,0,0,_e.width,_e.height,ne,le,_e.data):t.texImage2D(3553,V,oe,_e.width,_e.height,0,ne,le,_e.data);w.generateMipmaps=!1}else Ve?(P&&t.texStorage2D(3553,re,oe,E.width,E.height),t.texSubImage2D(3553,0,0,0,E.width,E.height,ne,le,E.data)):t.texImage2D(3553,0,oe,E.width,E.height,0,ne,le,E.data);else if(w.isCompressedTexture){Ve&&P&&t.texStorage2D(3553,re,oe,Le[0].width,Le[0].height);for(let V=0,fe=Le.length;V<fe;V++)_e=Le[V],w.format!==Pn?ne!==null?Ve?t.compressedTexSubImage2D(3553,V,0,0,_e.width,_e.height,ne,_e.data):t.compressedTexImage2D(3553,V,oe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(3553,V,0,0,_e.width,_e.height,ne,le,_e.data):t.texImage2D(3553,V,oe,_e.width,_e.height,0,ne,le,_e.data)}else if(w.isDataArrayTexture)Ve?(P&&t.texStorage3D(35866,re,oe,E.width,E.height,E.depth),t.texSubImage3D(35866,0,0,0,0,E.width,E.height,E.depth,ne,le,E.data)):t.texImage3D(35866,0,oe,E.width,E.height,E.depth,0,ne,le,E.data);else if(w.isData3DTexture)Ve?(P&&t.texStorage3D(32879,re,oe,E.width,E.height,E.depth),t.texSubImage3D(32879,0,0,0,0,E.width,E.height,E.depth,ne,le,E.data)):t.texImage3D(32879,0,oe,E.width,E.height,E.depth,0,ne,le,E.data);else if(w.isFramebufferTexture){if(P)if(Ve)t.texStorage2D(3553,re,oe,E.width,E.height);else{let V=E.width,fe=E.height;for(let ce=0;ce<re;ce++)t.texImage2D(3553,ce,oe,V,fe,0,ne,le,null),V>>=1,fe>>=1}}else if(Le.length>0&&Z){Ve&&P&&t.texStorage2D(3553,re,oe,Le[0].width,Le[0].height);for(let V=0,fe=Le.length;V<fe;V++)_e=Le[V],Ve?t.texSubImage2D(3553,V,0,0,ne,le,_e):t.texImage2D(3553,V,oe,ne,le,_e);w.generateMipmaps=!1}else Ve?(P&&t.texStorage2D(3553,re,oe,E.width,E.height),t.texSubImage2D(3553,0,0,0,ne,le,E)):t.texImage2D(3553,0,oe,ne,le,E);C(w,Z)&&L(ee),ae.__currentVersion=ae.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function xe(b,w,H){if(w.image.length!==6)return;const ee=Ae(b,w),te=w.source;if(t.activeTexture(33984+H),t.bindTexture(34067,b.__webglTexture),te.version!==te.__currentVersion||ee===!0){n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const ae=w.isCompressedTexture||w.image[0].isCompressedTexture,ve=w.image[0]&&w.image[0].isDataTexture,E=[];for(let V=0;V<6;V++)!ae&&!ve?E[V]=x(w.image[V],!1,!0,u):E[V]=ve?w.image[V].image:w.image[V],E[V]=Bt(w,E[V]);const Z=E[0],ne=M(Z)||a,le=s.convert(w.format,w.encoding),oe=s.convert(w.type),_e=y(w.internalFormat,le,oe,w.encoding),Le=a&&w.isVideoTexture!==!0,Ve=te.__currentVersion===void 0||ee===!0;let P=A(w,Z,ne);W(34067,w,ne);let re;if(ae){Le&&Ve&&t.texStorage2D(34067,P,_e,Z.width,Z.height);for(let V=0;V<6;V++){re=E[V].mipmaps;for(let fe=0;fe<re.length;fe++){const ce=re[fe];w.format!==Pn?le!==null?Le?t.compressedTexSubImage2D(34069+V,fe,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(34069+V,fe,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(34069+V,fe,0,0,ce.width,ce.height,le,oe,ce.data):t.texImage2D(34069+V,fe,_e,ce.width,ce.height,0,le,oe,ce.data)}}}else{re=w.mipmaps,Le&&Ve&&(re.length>0&&P++,t.texStorage2D(34067,P,_e,E[0].width,E[0].height));for(let V=0;V<6;V++)if(ve){Le?t.texSubImage2D(34069+V,0,0,0,E[V].width,E[V].height,le,oe,E[V].data):t.texImage2D(34069+V,0,_e,E[V].width,E[V].height,0,le,oe,E[V].data);for(let fe=0;fe<re.length;fe++){const Re=re[fe].image[V].image;Le?t.texSubImage2D(34069+V,fe+1,0,0,Re.width,Re.height,le,oe,Re.data):t.texImage2D(34069+V,fe+1,_e,Re.width,Re.height,0,le,oe,Re.data)}}else{Le?t.texSubImage2D(34069+V,0,0,0,le,oe,E[V]):t.texImage2D(34069+V,0,_e,le,oe,E[V]);for(let fe=0;fe<re.length;fe++){const ce=re[fe];Le?t.texSubImage2D(34069+V,fe+1,0,0,le,oe,ce.image[V]):t.texImage2D(34069+V,fe+1,_e,le,oe,ce.image[V])}}}C(w,ne)&&L(34067),te.__currentVersion=te.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function he(b,w,H,ee,te){const ae=s.convert(H.format,H.encoding),ve=s.convert(H.type),E=y(H.internalFormat,ae,ve,H.encoding);i.get(w).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,E,w.width,w.height,w.depth,0,ae,ve,null):t.texImage2D(te,0,E,w.width,w.height,0,ae,ve,null)),t.bindFramebuffer(36160,b),ze(w)?f.framebufferTexture2DMultisampleEXT(36160,ee,te,i.get(H).__webglTexture,0,st(w)):n.framebufferTexture2D(36160,ee,te,i.get(H).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(b,w,H){if(n.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let ee=33189;if(H||ze(w)){const te=w.depthTexture;te&&te.isDepthTexture&&(te.type===Xi?ee=36012:te.type===Wi&&(ee=33190));const ae=st(w);ze(w)?f.renderbufferStorageMultisampleEXT(36161,ae,ee,w.width,w.height):n.renderbufferStorageMultisample(36161,ae,ee,w.width,w.height)}else n.renderbufferStorage(36161,ee,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const ee=st(w);H&&ze(w)===!1?n.renderbufferStorageMultisample(36161,ee,35056,w.width,w.height):ze(w)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const ee=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0;te<ee.length;te++){const ae=ee[te],ve=s.convert(ae.format,ae.encoding),E=s.convert(ae.type),Z=y(ae.internalFormat,ve,E,ae.encoding),ne=st(w);H&&ze(w)===!1?n.renderbufferStorageMultisample(36161,ne,Z,w.width,w.height):ze(w)?f.renderbufferStorageMultisampleEXT(36161,ne,Z,w.width,w.height):n.renderbufferStorage(36161,Z,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Me(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,te=st(w);if(w.depthTexture.format===$i)ze(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,te):n.framebufferTexture2D(36160,36096,3553,ee,0);else if(w.depthTexture.format===us)ze(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,te):n.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function pe(b){const w=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Me(w.__webglFramebuffer,b)}else if(H){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]=n.createRenderbuffer(),Fe(w.__webglDepthbuffer[ee],b,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Fe(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function et(b,w,H){const ee=i.get(b);w!==void 0&&he(ee.__webglFramebuffer,b,b.texture,36064,3553),H!==void 0&&pe(b)}function pt(b){const w=b.texture,H=i.get(b),ee=i.get(w);b.addEventListener("dispose",ie),b.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,o.memory.textures++);const te=b.isWebGLCubeRenderTarget===!0,ae=b.isWebGLMultipleRenderTargets===!0,ve=M(b)||a;if(te){H.__webglFramebuffer=[];for(let E=0;E<6;E++)H.__webglFramebuffer[E]=n.createFramebuffer()}else{if(H.__webglFramebuffer=n.createFramebuffer(),ae)if(r.drawBuffers){const E=b.texture;for(let Z=0,ne=E.length;Z<ne;Z++){const le=i.get(E[Z]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ze(b)===!1){const E=ae?w:[w];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let Z=0;Z<E.length;Z++){const ne=E[Z];H.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(36161,H.__webglColorRenderbuffer[Z]);const le=s.convert(ne.format,ne.encoding),oe=s.convert(ne.type),_e=y(ne.internalFormat,le,oe,ne.encoding),Le=st(b);n.renderbufferStorageMultisample(36161,Le,_e,b.width,b.height),n.framebufferRenderbuffer(36160,36064+Z,36161,H.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,ee.__webglTexture),W(34067,w,ve);for(let E=0;E<6;E++)he(H.__webglFramebuffer[E],b,w,36064,34069+E);C(w,ve)&&L(34067),t.unbindTexture()}else if(ae){const E=b.texture;for(let Z=0,ne=E.length;Z<ne;Z++){const le=E[Z],oe=i.get(le);t.bindTexture(3553,oe.__webglTexture),W(3553,le,ve),he(H.__webglFramebuffer,b,le,36064+Z,3553),C(le,ve)&&L(3553)}t.unbindTexture()}else{let E=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?E=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(E,ee.__webglTexture),W(E,w,ve),he(H.__webglFramebuffer,b,w,36064,E),C(w,ve)&&L(E),t.unbindTexture()}b.depthBuffer&&pe(b)}function rt(b){const w=M(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0,te=H.length;ee<te;ee++){const ae=H[ee];if(C(ae,w)){const ve=b.isWebGLCubeRenderTarget?34067:3553,E=i.get(ae).__webglTexture;t.bindTexture(ve,E),L(ve),t.unbindTexture()}}}function Ut(b){if(a&&b.samples>0&&ze(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,ee=b.height;let te=16384;const ae=[],ve=b.stencilBuffer?33306:36096,E=i.get(b),Z=b.isWebGLMultipleRenderTargets===!0;if(Z)for(let ne=0;ne<w.length;ne++)t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ne,36161,null),t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ne,3553,null,0);t.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,E.__webglFramebuffer);for(let ne=0;ne<w.length;ne++){ae.push(36064+ne),b.depthBuffer&&ae.push(ve);const le=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(le===!1&&(b.depthBuffer&&(te|=256),b.stencilBuffer&&(te|=1024)),Z&&n.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[ne]),le===!0&&(n.invalidateFramebuffer(36008,[ve]),n.invalidateFramebuffer(36009,[ve])),Z){const oe=i.get(w[ne]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,oe,0)}n.blitFramebuffer(0,0,H,ee,0,0,H,ee,te,9728),v&&n.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let ne=0;ne<w.length;ne++){t.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ne,36161,E.__webglColorRenderbuffer[ne]);const le=i.get(w[ne]).__webglTexture;t.bindFramebuffer(36160,E.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ne,3553,le,0)}t.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function st(b){return Math.min(c,b.samples)}function ze(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Zt(b){const w=o.render.frame;_.get(b)!==w&&(_.set(b,w),b.update())}function Bt(b,w){const H=b.encoding,ee=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===vc||H!==ir&&(H===Ze?a===!1?e.has("EXT_sRGB")===!0&&ee===Pn?(b.format=vc,b.minFilter=nn,b.generateMipmaps=!1):w=dg.sRGBToLinear(w):(ee!==Pn||te!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=R,this.resetTextureUnits=q,this.setTexture2D=F,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=et,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ze}function BM(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===nr)return 5121;if(s===R_)return 32819;if(s===I_)return 32820;if(s===L_)return 5120;if(s===P_)return 5122;if(s===ug)return 5123;if(s===D_)return 5124;if(s===Wi)return 5125;if(s===Xi)return 5126;if(s===lo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===N_)return 6406;if(s===Pn)return 6408;if(s===z_)return 6409;if(s===k_)return 6410;if(s===$i)return 6402;if(s===us)return 34041;if(s===O_)return 6403;if(s===F_)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===vc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===U_)return 36244;if(s===B_)return 33319;if(s===G_)return 33320;if(s===V_)return 36249;if(s===Ul||s===Bl||s===Gl||s===Vl)if(o===Ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ul)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ul)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gd||s===Vd||s===Hd||s===Wd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Gd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===H_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xd||s===jd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xd)return o===Ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===jd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qd||s===Yd||s===$d||s===Zd||s===Kd||s===Qd||s===Jd||s===eh||s===th||s===nh||s===ih||s===rh||s===sh||s===oh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===qd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$d)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jd)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===eh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===th)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ih)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===oh)return o===Ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ah)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ah)return o===Ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Qr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class GM extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class na extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const g=new na;g.matrixAutoUpdate=!1,g.visible=!1,u.joints[p.jointName]=g,u.add(g)}const m=u.joints[p.jointName];h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=h.radius),m.visible=h!==null}const d=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],f=d.position.distanceTo(c.position),v=.02,_=.005;u.inputState.pinching&&f>v+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=v-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class HM extends wn{constructor(e,t,i,r,s,o,a,l,u,d){if(d=d!==void 0?d:$i,d!==$i&&d!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===$i&&(i=Wi),i===void 0&&d===us&&(i=Qr),super(null,r,s,o,a,l,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:It,this.minFilter=l!==void 0?l:It,this.flipY=!1,this.generateMipmaps=!1}}class WM extends ur{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,d=null,c=null,f=null,v=null;const _=t.getContextAttributes();let p=null,h=null;const m=[],g=[],x=new rn;x.layers.enable(1),x.viewport=new dt;const M=new rn;M.layers.enable(2),M.viewport=new dt;const S=[x,M],C=new GM;C.layers.enable(1),C.layers.enable(2);let L=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let F=m[D];return F===void 0&&(F=new vu,m[D]=F),F.getTargetRaySpace()},this.getControllerGrip=function(D){let F=m[D];return F===void 0&&(F=new vu,m[D]=F),F.getGripSpace()},this.getHand=function(D){let F=m[D];return F===void 0&&(F=new vu,m[D]=F),F.getHandSpace()};function A(D){const F=g.indexOf(D.inputSource);if(F===-1)return;const Y=m[F];Y!==void 0&&Y.dispatchEvent({type:D.type,data:D.inputSource})}function I(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",O);for(let D=0;D<m.length;D++){const F=g[D];F!==null&&(g[D]=null,m[D].disconnect(F))}L=null,y=null,e.setRenderTarget(p),f=null,c=null,d=null,r=null,h=null,R.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return c!==null?c:f},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",I),r.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,F),r.updateRenderState({baseLayer:f}),h=new rr(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:nr,encoding:e.outputEncoding})}else{let F=null,Y=null,j=null;_.depth&&(j=_.stencil?35056:33190,F=_.stencil?us:$i,Y=_.stencil?Qr:Wi);const K={colorFormat:32856,depthFormat:j,scaleFactor:s};d=new XRWebGLBinding(r,t),c=d.createProjectionLayer(K),r.updateRenderState({layers:[c]}),h=new rr(c.textureWidth,c.textureHeight,{format:Pn,type:nr,depthTexture:new HM(c.textureWidth,c.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const ue=e.properties.get(h);ue.__ignoreDepthValues=c.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),R.setContext(r),R.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(D){for(let F=0;F<D.removed.length;F++){const Y=D.removed[F],j=g.indexOf(Y);j>=0&&(g[j]=null,m[j].dispatchEvent({type:"disconnected",data:Y}))}for(let F=0;F<D.added.length;F++){const Y=D.added[F];let j=g.indexOf(Y);if(j===-1){for(let ue=0;ue<m.length;ue++)if(ue>=g.length){g.push(Y),j=ue;break}else if(g[ue]===null){g[ue]=Y,j=ue;break}if(j===-1)break}const K=m[j];K&&K.dispatchEvent({type:"connected",data:Y})}}const ie=new N,Q=new N;function z(D,F,Y){ie.setFromMatrixPosition(F.matrixWorld),Q.setFromMatrixPosition(Y.matrixWorld);const j=ie.distanceTo(Q),K=F.projectionMatrix.elements,ue=Y.projectionMatrix.elements,me=K[14]/(K[10]-1),W=K[14]/(K[10]+1),Ae=(K[9]+1)/K[5],ge=(K[9]-1)/K[5],xe=(K[8]-1)/K[0],he=(ue[8]+1)/ue[0],Fe=me*xe,Me=me*he,pe=j/(-xe+he),et=pe*-xe;F.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(et),D.translateZ(pe),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const pt=me+pe,rt=W+pe,Ut=Fe-et,st=Me+(j-et),ze=Ae*W/rt*pt,Zt=ge*W/rt*pt;D.projectionMatrix.makePerspective(Ut,st,ze,Zt,pt,rt)}function $(D,F){F===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(F.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;C.near=M.near=x.near=D.near,C.far=M.far=x.far=D.far,(L!==C.near||y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,y=C.far);const F=D.parent,Y=C.cameras;$(C,F);for(let K=0;K<Y.length;K++)$(Y[K],F);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),D.position.copy(C.position),D.quaternion.copy(C.quaternion),D.scale.copy(C.scale),D.matrix.copy(C.matrix),D.matrixWorld.copy(C.matrixWorld);const j=D.children;for(let K=0,ue=j.length;K<ue;K++)j[K].updateMatrixWorld(!0);Y.length===2?z(C,x,M):C.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(c!==null)return c.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(D){c!==null&&(c.fixedFoveation=D),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=D)};let G=null;function q(D,F){if(u=F.getViewerPose(l||o),v=F,u!==null){const Y=u.views;f!==null&&(e.setRenderTargetFramebuffer(h,f.framebuffer),e.setRenderTarget(h));let j=!1;Y.length!==C.cameras.length&&(C.cameras.length=0,j=!0);for(let K=0;K<Y.length;K++){const ue=Y[K];let me=null;if(f!==null)me=f.getViewport(ue);else{const Ae=d.getViewSubImage(c,ue);me=Ae.viewport,K===0&&(e.setRenderTargetTextures(h,Ae.colorTexture,c.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(h))}let W=S[K];W===void 0&&(W=new rn,W.layers.enable(K),W.viewport=new dt,S[K]=W),W.matrix.fromArray(ue.transform.matrix),W.projectionMatrix.fromArray(ue.projectionMatrix),W.viewport.set(me.x,me.y,me.width,me.height),K===0&&C.matrix.copy(W.matrix),j===!0&&C.cameras.push(W)}}for(let Y=0;Y<m.length;Y++){const j=g[Y],K=m[Y];j!==null&&K!==void 0&&K.update(j,F,l||o)}G&&G(D,F),v=null}const R=new Sg;R.setAnimationLoop(q),this.setAnimationLoop=function(D){G=D},this.dispose=function(){}}}function XM(n,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,m,g,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),c(p,h),h.isMeshPhysicalMaterial&&f(p,h,x)):h.isMeshMatcapMaterial?(r(p,h),v(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,m,g):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===Sn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===Sn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const m=e.get(h).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const M=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*M}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let g;h.map?g=h.map:h.specularMap?g=h.specularMap:h.displacementMap?g=h.displacementMap:h.normalMap?g=h.normalMap:h.bumpMap?g=h.bumpMap:h.roughnessMap?g=h.roughnessMap:h.metalnessMap?g=h.metalnessMap:h.alphaMap?g=h.alphaMap:h.emissiveMap?g=h.emissiveMap:h.clearcoatMap?g=h.clearcoatMap:h.clearcoatNormalMap?g=h.clearcoatNormalMap:h.clearcoatRoughnessMap?g=h.clearcoatRoughnessMap:h.iridescenceMap?g=h.iridescenceMap:h.iridescenceThicknessMap?g=h.iridescenceThicknessMap:h.specularIntensityMap?g=h.specularIntensityMap:h.specularColorMap?g=h.specularColorMap:h.transmissionMap?g=h.transmissionMap:h.thicknessMap?g=h.thicknessMap:h.sheenColorMap?g=h.sheenColorMap:h.sheenRoughnessMap&&(g=h.sheenRoughnessMap),g!==void 0&&(g.isWebGLRenderTarget&&(g=g.texture),g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix));let x;h.aoMap?x=h.aoMap:h.lightMap&&(x=h.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,m,g){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*m,p.scale.value=g*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let m;h.map?m=h.map:h.alphaMap&&(m=h.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function c(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,m){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===Sn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function jM(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(g,x){const M=x.program;i.uniformBlockBinding(g,M)}function u(g,x){let M=r[g.id];M===void 0&&(_(g),M=d(g),r[g.id]=M,g.addEventListener("dispose",h));const S=x.program;i.updateUBOMapping(g,S);const C=e.render.frame;s[g.id]!==C&&(f(g),s[g.id]=C)}function d(g){const x=c();g.__bindingPointIndex=x;const M=n.createBuffer(),S=g.__size,C=g.usage;return n.bindBuffer(35345,M),n.bufferData(35345,S,C),n.bindBuffer(35345,null),n.bindBufferBase(35345,x,M),M}function c(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const x=r[g.id],M=g.uniforms,S=g.__cache;n.bindBuffer(35345,x);for(let C=0,L=M.length;C<L;C++){const y=M[C];if(v(y,C,S)===!0){const A=y.value,I=y.__offset;typeof A=="number"?(y.__data[0]=A,n.bufferSubData(35345,I,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):A.toArray(y.__data),n.bufferSubData(35345,I,y.__data))}}n.bindBuffer(35345,null)}function v(g,x,M){const S=g.value;if(M[x]===void 0)return typeof S=="number"?M[x]=S:M[x]=S.clone(),!0;if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const C=M[x];if(C.equals(S)===!1)return C.copy(S),!0}return!1}function _(g){const x=g.uniforms;let M=0;const S=16;let C=0;for(let L=0,y=x.length;L<y;L++){const A=x[L],I=p(A);if(A.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=M,L>0){C=M%S;const O=S-C;C!==0&&O-I.boundary<0&&(M+=S-C,A.__offset=M)}M+=I.storage}return C=M%S,C>0&&(M+=S-C),g.__size=M,g.__cache={},this}function p(g){const x=g.value,M={boundary:0,storage:0};return typeof x=="number"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function h(g){const x=g.target;x.removeEventListener("dispose",h);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:m}}function qM(){const n=Ga("canvas");return n.style.display="block",n}function bg(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:qM(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=n.alpha!==void 0?n.alpha:!1;let c=null,f=null;const v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ir,this.physicallyCorrectLights=!1,this.toneMapping=$n,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,m=0,g=0,x=null,M=-1,S=null;const C=new dt,L=new dt;let y=null,A=e.width,I=e.height,O=1,ie=null,Q=null;const z=new dt(0,0,A,I),$=new dt(0,0,A,I);let G=!1;const q=new yg;let R=!1,D=!1,F=null;const Y=new vt,j=new Ce,K=new N,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function me(){return x===null?O:1}let W=t;function Ae(T,k){for(let B=0;B<T.length;B++){const U=T[B],X=e.getContext(U,k);if(X!==null)return X}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gf}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",Ve,!1),W===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),W=Ae(k,T),W===null)throw Ae(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ge,xe,he,Fe,Me,pe,et,pt,rt,Ut,st,ze,Zt,Bt,b,w,H,ee,te,ae,ve,E,Z,ne;function le(){ge=new i1(W),xe=new ZS(W,ge,n),ge.init(xe),E=new BM(W,ge,xe),he=new OM(W,ge,xe),Fe=new o1,Me=new EM,pe=new UM(W,ge,he,Me,xe,E,Fe),et=new QS(p),pt=new n1(p),rt=new vx(W,xe),Z=new YS(W,ge,rt,xe),Ut=new r1(W,rt,Fe,Z),st=new c1(W,Ut,rt,Fe),te=new u1(W,xe,pe),w=new KS(Me),ze=new wM(p,et,pt,ge,xe,Z,w),Zt=new XM(p,Me),Bt=new CM,b=new RM(ge,xe),ee=new qS(p,et,he,st,d,o),H=new kM(p,st,xe),ne=new jM(W,Fe,xe,he),ae=new $S(W,ge,Fe,xe),ve=new s1(W,ge,Fe,xe),Fe.programs=ze.programs,p.capabilities=xe,p.extensions=ge,p.properties=Me,p.renderLists=Bt,p.shadowMap=H,p.state=he,p.info=Fe}le();const oe=new WM(p,W);this.xr=oe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(A,I,!1))},this.getSize=function(T){return T.set(A,I)},this.setSize=function(T,k,B){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,I=k,e.width=Math.floor(T*O),e.height=Math.floor(k*O),B!==!1&&(e.style.width=T+"px",e.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(A*O,I*O).floor()},this.setDrawingBufferSize=function(T,k,B){A=T,I=k,O=B,e.width=Math.floor(T*B),e.height=Math.floor(k*B),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,k,B,U){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,k,B,U),he.viewport(C.copy(z).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,k,B,U){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,k,B,U),he.scissor(L.copy($).multiplyScalar(O).floor())},this.getScissorTest=function(){return G},this.setScissorTest=function(T){he.setScissorTest(G=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){Q=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,k=!0,B=!0){let U=0;T&&(U|=16384),k&&(U|=256),B&&(U|=1024),W.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Ve,!1),Bt.dispose(),b.dispose(),Me.dispose(),et.dispose(),pt.dispose(),st.dispose(),Z.dispose(),ne.dispose(),ze.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Re),oe.removeEventListener("sessionend",ut),F&&(F.dispose(),F=null),Qe.stop()};function _e(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const T=Fe.autoReset,k=H.enabled,B=H.autoUpdate,U=H.needsUpdate,X=H.type;le(),Fe.autoReset=T,H.enabled=k,H.autoUpdate=B,H.needsUpdate=U,H.type=X}function Ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function P(T){const k=T.target;k.removeEventListener("dispose",P),re(k)}function re(T){V(T),Me.remove(T)}function V(T){const k=Me.get(T).programs;k!==void 0&&(k.forEach(function(B){ze.releaseProgram(B)}),T.isShaderMaterial&&ze.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,B,U,X,ye){k===null&&(k=ue);const Se=X.isMesh&&X.matrixWorld.determinant()<0,Ee=Dg(T,k,B,U,X);he.setMaterial(U,Se);let we=B.index;const ke=B.attributes.position;if(we===null){if(ke===void 0||ke.count===0)return}else if(we.count===0)return;let Pe=1;U.wireframe===!0&&(we=Ut.getWireframeAttribute(B),Pe=2),Z.setup(X,U,Ee,B,we);let Ie,$e=ae;we!==null&&(Ie=rt.get(we),$e=ve,$e.setIndex(Ie));const Ri=we!==null?we.count:ke.count,cr=B.drawRange.start*Pe,fr=B.drawRange.count*Pe,Tn=ye!==null?ye.start*Pe:0,Ne=ye!==null?ye.count*Pe:1/0,dr=Math.max(cr,Tn),tt=Math.min(Ri,cr+fr,Tn+Ne)-1,Qt=Math.max(0,tt-dr+1);if(Qt!==0){if(X.isMesh)U.wireframe===!0?(he.setLineWidth(U.wireframeLinewidth*me()),$e.setMode(1)):$e.setMode(4);else if(X.isLine){let ni=U.linewidth;ni===void 0&&(ni=1),he.setLineWidth(ni*me()),X.isLineSegments?$e.setMode(1):X.isLineLoop?$e.setMode(2):$e.setMode(3)}else X.isPoints?$e.setMode(0):X.isSprite&&$e.setMode(4);if(X.isInstancedMesh)$e.renderInstances(dr,Qt,X.count);else if(B.isInstancedBufferGeometry){const ni=Math.min(B.instanceCount,B._maxInstanceCount);$e.renderInstances(dr,Qt,ni)}else $e.render(dr,Qt)}},this.compile=function(T,k){f=b.get(T),f.init(),_.push(f),T.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(p.physicallyCorrectLights),T.traverse(function(B){const U=B.material;if(U)if(Array.isArray(U))for(let X=0;X<U.length;X++){const ye=U[X];ul(ye,T,B)}else ul(U,T,B)}),_.pop(),f=null};let fe=null;function ce(T){fe&&fe(T)}function Re(){Qe.stop()}function ut(){Qe.start()}const Qe=new Sg;Qe.setAnimationLoop(ce),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(T){fe=T,oe.setAnimationLoop(T),T===null?Qe.stop():Qe.start()},oe.addEventListener("sessionstart",Re),oe.addEventListener("sessionend",ut),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(k),k=oe.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,k,x),f=b.get(T,_.length),f.init(),_.push(f),Y.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(Y),D=this.localClippingEnabled,R=w.init(this.clippingPlanes,D,k),c=Bt.get(T,v.length),c.init(),v.push(c),ti(T,k,0,p.sortObjects),c.finish(),p.sortObjects===!0&&c.sort(ie,Q),R===!0&&w.beginShadows();const B=f.state.shadowsArray;if(H.render(B,T,k),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(c,T),f.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const U=k.cameras;for(let X=0,ye=U.length;X<ye;X++){const Se=U[X];Ye(c,T,Se,Se.viewport)}}else Ye(c,T,k);x!==null&&(pe.updateMultisampleRenderTarget(x),pe.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(p,T,k),Z.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?f=_[_.length-1]:f=null,v.pop(),v.length>0?c=v[v.length-1]:c=null};function ti(T,k,B,U){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)B=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){U&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Se=st.update(T),Ee=T.material;Ee.visible&&c.push(T,Se,Ee,B,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Fe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Fe.render.frame),!T.frustumCulled||q.intersectsObject(T))){U&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const Se=st.update(T),Ee=T.material;if(Array.isArray(Ee)){const we=Se.groups;for(let ke=0,Pe=we.length;ke<Pe;ke++){const Ie=we[ke],$e=Ee[Ie.materialIndex];$e&&$e.visible&&c.push(T,Se,$e,B,K.z,Ie)}}else Ee.visible&&c.push(T,Se,Ee,B,K.z,null)}}const ye=T.children;for(let Se=0,Ee=ye.length;Se<Ee;Se++)ti(ye[Se],k,B,U)}function Ye(T,k,B,U){const X=T.opaque,ye=T.transmissive,Se=T.transparent;f.setupLightsView(B),ye.length>0&&Fn(X,k,B),U&&he.viewport(C.copy(U)),X.length>0&&Kt(X,k,B),ye.length>0&&Kt(ye,k,B),Se.length>0&&Kt(Se,k,B),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Fn(T,k,B){const U=xe.isWebGL2;F===null&&(F=new rr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?lo:nr,minFilter:sl,samples:U&&s===!0?4:0})),p.getDrawingBufferSize(j),U?F.setSize(j.x,j.y):F.setSize(_c(j.x),_c(j.y));const X=p.getRenderTarget();p.setRenderTarget(F),p.clear();const ye=p.toneMapping;p.toneMapping=$n,Kt(T,k,B),p.toneMapping=ye,pe.updateMultisampleRenderTarget(F),pe.updateRenderTargetMipmap(F),p.setRenderTarget(X)}function Kt(T,k,B){const U=k.isScene===!0?k.overrideMaterial:null;for(let X=0,ye=T.length;X<ye;X++){const Se=T[X],Ee=Se.object,we=Se.geometry,ke=U===null?Se.material:U,Pe=Se.group;Ee.layers.test(B.layers)&&Pg(Ee,k,B,we,ke,Pe)}}function Pg(T,k,B,U,X,ye){T.onBeforeRender(p,k,B,U,X,ye),T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(p,k,B,U,T,ye),X.transparent===!0&&X.side===os?(X.side=Sn,X.needsUpdate=!0,p.renderBufferDirect(B,k,U,X,T,ye),X.side=ao,X.needsUpdate=!0,p.renderBufferDirect(B,k,U,X,T,ye),X.side=os):p.renderBufferDirect(B,k,U,X,T,ye),T.onAfterRender(p,k,B,U,X,ye)}function ul(T,k,B){k.isScene!==!0&&(k=ue);const U=Me.get(T),X=f.state.lights,ye=f.state.shadowsArray,Se=X.state.version,Ee=ze.getParameters(T,X.state,ye,k,B),we=ze.getProgramCacheKey(Ee);let ke=U.programs;U.environment=T.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(T.isMeshStandardMaterial?pt:et).get(T.envMap||U.environment),ke===void 0&&(T.addEventListener("dispose",P),ke=new Map,U.programs=ke);let Pe=ke.get(we);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===Se)return Mf(T,Ee),Pe}else Ee.uniforms=ze.getUniforms(T),T.onBuild(B,Ee,p),T.onBeforeCompile(Ee,p),Pe=ze.acquireProgram(Ee,we),ke.set(we,Pe),U.uniforms=Ee.uniforms;const Ie=U.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=w.uniform),Mf(T,Ee),U.needsLights=Ig(T),U.lightsStateVersion=Se,U.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMap.value=X.state.directionalShadowMap,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotShadowMap.value=X.state.spotShadowMap,Ie.spotShadowMatrix.value=X.state.spotShadowMatrix,Ie.pointShadowMap.value=X.state.pointShadowMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix);const $e=Pe.getUniforms(),Ri=ga.seqWithValue($e.seq,Ie);return U.currentProgram=Pe,U.uniformsList=Ri,Pe}function Mf(T,k){const B=Me.get(T);B.outputEncoding=k.outputEncoding,B.instancing=k.instancing,B.skinning=k.skinning,B.morphTargets=k.morphTargets,B.morphNormals=k.morphNormals,B.morphColors=k.morphColors,B.morphTargetsCount=k.morphTargetsCount,B.numClippingPlanes=k.numClippingPlanes,B.numIntersection=k.numClipIntersection,B.vertexAlphas=k.vertexAlphas,B.vertexTangents=k.vertexTangents,B.toneMapping=k.toneMapping}function Dg(T,k,B,U,X){k.isScene!==!0&&(k=ue),pe.resetTextureUnits();const ye=k.fog,Se=U.isMeshStandardMaterial?k.environment:null,Ee=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:ir,we=(U.isMeshStandardMaterial?pt:et).get(U.envMap||Se),ke=U.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pe=!!U.normalMap&&!!B.attributes.tangent,Ie=!!B.morphAttributes.position,$e=!!B.morphAttributes.normal,Ri=!!B.morphAttributes.color,cr=U.toneMapped?p.toneMapping:$n,fr=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Tn=fr!==void 0?fr.length:0,Ne=Me.get(U),dr=f.state.lights;if(R===!0&&(D===!0||T!==S)){const Gt=T===S&&U.id===M;w.setState(U,T,Gt)}let tt=!1;U.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==dr.state.version||Ne.outputEncoding!==Ee||X.isInstancedMesh&&Ne.instancing===!1||!X.isInstancedMesh&&Ne.instancing===!0||X.isSkinnedMesh&&Ne.skinning===!1||!X.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==we||U.fog===!0&&Ne.fog!==ye||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==w.numPlanes||Ne.numIntersection!==w.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Pe||Ne.morphTargets!==Ie||Ne.morphNormals!==$e||Ne.morphColors!==Ri||Ne.toneMapping!==cr||xe.isWebGL2===!0&&Ne.morphTargetsCount!==Tn)&&(tt=!0):(tt=!0,Ne.__version=U.version);let Qt=Ne.currentProgram;tt===!0&&(Qt=ul(U,k,X));let ni=!1,ms=!1,cl=!1;const Tt=Qt.getUniforms(),gs=Ne.uniforms;if(he.useProgram(Qt.program)&&(ni=!0,ms=!0,cl=!0),U.id!==M&&(M=U.id,ms=!0),ni||S!==T){if(Tt.setValue(W,"projectionMatrix",T.projectionMatrix),xe.logarithmicDepthBuffer&&Tt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,ms=!0,cl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Gt=Tt.map.cameraPosition;Gt!==void 0&&Gt.setValue(W,K.setFromMatrixPosition(T.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Tt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||X.isSkinnedMesh)&&Tt.setValue(W,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){Tt.setOptional(W,X,"bindMatrix"),Tt.setOptional(W,X,"bindMatrixInverse");const Gt=X.skeleton;Gt&&(xe.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Tt.setValue(W,"boneTexture",Gt.boneTexture,pe),Tt.setValue(W,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fl=B.morphAttributes;if((fl.position!==void 0||fl.normal!==void 0||fl.color!==void 0&&xe.isWebGL2===!0)&&te.update(X,B,U,Qt),(ms||Ne.receiveShadow!==X.receiveShadow)&&(Ne.receiveShadow=X.receiveShadow,Tt.setValue(W,"receiveShadow",X.receiveShadow)),ms&&(Tt.setValue(W,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&Rg(gs,cl),ye&&U.fog===!0&&Zt.refreshFogUniforms(gs,ye),Zt.refreshMaterialUniforms(gs,U,O,I,F),ga.upload(W,Ne.uniformsList,gs,pe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ga.upload(W,Ne.uniformsList,gs,pe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Tt.setValue(W,"center",X.center),Tt.setValue(W,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(W,"normalMatrix",X.normalMatrix),Tt.setValue(W,"modelMatrix",X.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Gt=U.uniformsGroups;for(let dl=0,Ng=Gt.length;dl<Ng;dl++)if(xe.isWebGL2){const wf=Gt[dl];ne.update(wf,Qt),ne.bind(wf,Qt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Qt}function Rg(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Ig(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,k,B){Me.get(T.texture).__webglTexture=k,Me.get(T.depthTexture).__webglTexture=B;const U=Me.get(T);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=B===void 0,U.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){const B=Me.get(T);B.__webglFramebuffer=k,B.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,B=0){x=T,m=k,g=B;let U=!0;if(T){const we=Me.get(T);we.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),U=!1):we.__webglFramebuffer===void 0?pe.setupRenderTarget(T):we.__hasExternalTextures&&pe.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture)}let X=null,ye=!1,Se=!1;if(T){const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture)&&(Se=!0);const ke=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=ke[k],ye=!0):xe.isWebGL2&&T.samples>0&&pe.useMultisampledRTT(T)===!1?X=Me.get(T).__webglMultisampledFramebuffer:X=ke,C.copy(T.viewport),L.copy(T.scissor),y=T.scissorTest}else C.copy(z).multiplyScalar(O).floor(),L.copy($).multiplyScalar(O).floor(),y=G;if(he.bindFramebuffer(36160,X)&&xe.drawBuffers&&U&&he.drawBuffers(T,X),he.viewport(C),he.scissor(L),he.setScissorTest(y),ye){const we=Me.get(T.texture);W.framebufferTexture2D(36160,36064,34069+k,we.__webglTexture,B)}else if(Se){const we=Me.get(T.texture),ke=k||0;W.framebufferTextureLayer(36160,36064,we.__webglTexture,B||0,ke)}M=-1},this.readRenderTargetPixels=function(T,k,B,U,X,ye,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){he.bindFramebuffer(36160,Ee);try{const we=T.texture,ke=we.format,Pe=we.type;if(ke!==Pn&&E.convert(ke)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=Pe===lo&&(ge.has("EXT_color_buffer_half_float")||xe.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Pe!==nr&&E.convert(Pe)!==W.getParameter(35738)&&!(Pe===Xi&&(xe.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-U&&B>=0&&B<=T.height-X&&W.readPixels(k,B,U,X,E.convert(ke),E.convert(Pe),ye)}finally{const we=x!==null?Me.get(x).__webglFramebuffer:null;he.bindFramebuffer(36160,we)}}},this.copyFramebufferToTexture=function(T,k,B=0){const U=Math.pow(2,-B),X=Math.floor(k.image.width*U),ye=Math.floor(k.image.height*U);pe.setTexture2D(k,0),W.copyTexSubImage2D(3553,B,0,0,T.x,T.y,X,ye),he.unbindTexture()},this.copyTextureToTexture=function(T,k,B,U=0){const X=k.image.width,ye=k.image.height,Se=E.convert(B.format),Ee=E.convert(B.type);pe.setTexture2D(B,0),W.pixelStorei(37440,B.flipY),W.pixelStorei(37441,B.premultiplyAlpha),W.pixelStorei(3317,B.unpackAlignment),k.isDataTexture?W.texSubImage2D(3553,U,T.x,T.y,X,ye,Se,Ee,k.image.data):k.isCompressedTexture?W.compressedTexSubImage2D(3553,U,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,Se,k.mipmaps[0].data):W.texSubImage2D(3553,U,T.x,T.y,Se,Ee,k.image),U===0&&B.generateMipmaps&&W.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(T,k,B,U,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=T.max.x-T.min.x+1,Se=T.max.y-T.min.y+1,Ee=T.max.z-T.min.z+1,we=E.convert(U.format),ke=E.convert(U.type);let Pe;if(U.isData3DTexture)pe.setTexture3D(U,0),Pe=32879;else if(U.isDataArrayTexture)pe.setTexture2DArray(U,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,U.flipY),W.pixelStorei(37441,U.premultiplyAlpha),W.pixelStorei(3317,U.unpackAlignment);const Ie=W.getParameter(3314),$e=W.getParameter(32878),Ri=W.getParameter(3316),cr=W.getParameter(3315),fr=W.getParameter(32877),Tn=B.isCompressedTexture?B.mipmaps[0]:B.image;W.pixelStorei(3314,Tn.width),W.pixelStorei(32878,Tn.height),W.pixelStorei(3316,T.min.x),W.pixelStorei(3315,T.min.y),W.pixelStorei(32877,T.min.z),B.isDataTexture||B.isData3DTexture?W.texSubImage3D(Pe,X,k.x,k.y,k.z,ye,Se,Ee,we,ke,Tn.data):B.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Pe,X,k.x,k.y,k.z,ye,Se,Ee,we,Tn.data)):W.texSubImage3D(Pe,X,k.x,k.y,k.z,ye,Se,Ee,we,ke,Tn),W.pixelStorei(3314,Ie),W.pixelStorei(32878,$e),W.pixelStorei(3316,Ri),W.pixelStorei(3315,cr),W.pixelStorei(32877,fr),X===0&&U.generateMipmaps&&W.generateMipmap(Pe),he.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?pe.setTextureCube(T,0):T.isData3DTexture?pe.setTexture3D(T,0):T.isDataArrayTexture?pe.setTexture2DArray(T,0):pe.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){m=0,g=0,x=null,he.reset(),Z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class YM extends bg{}YM.prototype.isWebGL1Renderer=!0;class $M extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Sf extends Di{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const d=[],c=new N,f=new N,v=[],_=[],p=[],h=[];for(let m=0;m<=i;m++){const g=[],x=m/i;let M=0;m==0&&o==0?M=.5/t:m==i&&l==Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){const C=S/t;c.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),c.y=e*Math.cos(o+x*a),c.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),_.push(c.x,c.y,c.z),f.copy(c).normalize(),p.push(f.x,f.y,f.z),h.push(C+M,1-x),g.push(u++)}d.push(g)}for(let m=0;m<i;m++)for(let g=0;g<t;g++){const x=d[m][g+1],M=d[m][g],S=d[m+1][g],C=d[m+1][g+1];(m!==0||o>0)&&v.push(x,M,C),(m!==i-1||l<Math.PI)&&v.push(M,S,C)}this.setIndex(v),this.setAttribute("position",new Nn(_,3)),this.setAttribute("normal",new Nn(p,3)),this.setAttribute("uv",new Nn(h,2))}static fromJSON(e){return new Sf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ZM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xh(){return(typeof performance>"u"?Date:performance).now()}class jh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gf);const qh={type:"change"},_u={type:"start"},Yh={type:"end"};class KM extends ur{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:mr.ROTATE,TWO:mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",Bt),this._domElementKeyEvents=E},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(qh),i.update(),s=r.NONE},this.update=function(){const E=new N,Z=new sr().setFromUnitVectors(e.up,new N(0,1,0)),ne=Z.clone().invert(),le=new N,oe=new sr,_e=2*Math.PI;return function(){const Ve=i.object.position;E.copy(Ve).sub(i.target),E.applyQuaternion(Z),a.setFromVector3(E),i.autoRotate&&s===r.NONE&&A(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let P=i.minAzimuthAngle,re=i.maxAzimuthAngle;return isFinite(P)&&isFinite(re)&&(P<-Math.PI?P+=_e:P>Math.PI&&(P-=_e),re<-Math.PI?re+=_e:re>Math.PI&&(re-=_e),P<=re?a.theta=Math.max(P,Math.min(re,a.theta)):a.theta=a.theta>(P+re)/2?Math.max(P,a.theta):Math.min(re,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),E.setFromSpherical(a),E.applyQuaternion(ne),Ve.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),u=1,c||le.distanceToSquared(i.object.position)>o||8*(1-oe.dot(i.object.quaternion))>o?(i.dispatchEvent(qh),le.copy(i.object.position),oe.copy(i.object.quaternion),c=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",H),i.domElement.removeEventListener("pointerdown",et),i.domElement.removeEventListener("pointercancel",Ut),i.domElement.removeEventListener("wheel",Zt),i.domElement.removeEventListener("pointermove",pt),i.domElement.removeEventListener("pointerup",rt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Bt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new jh,l=new jh;let u=1;const d=new N;let c=!1;const f=new Ce,v=new Ce,_=new Ce,p=new Ce,h=new Ce,m=new Ce,g=new Ce,x=new Ce,M=new Ce,S=[],C={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function y(){return Math.pow(.95,i.zoomSpeed)}function A(E){l.theta-=E}function I(E){l.phi-=E}const O=function(){const E=new N;return function(ne,le){E.setFromMatrixColumn(le,0),E.multiplyScalar(-ne),d.add(E)}}(),ie=function(){const E=new N;return function(ne,le){i.screenSpacePanning===!0?E.setFromMatrixColumn(le,1):(E.setFromMatrixColumn(le,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(ne),d.add(E)}}(),Q=function(){const E=new N;return function(ne,le){const oe=i.domElement;if(i.object.isPerspectiveCamera){const _e=i.object.position;E.copy(_e).sub(i.target);let Le=E.length();Le*=Math.tan(i.object.fov/2*Math.PI/180),O(2*ne*Le/oe.clientHeight,i.object.matrix),ie(2*le*Le/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(O(ne*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),ie(le*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(E){i.object.isPerspectiveCamera?u/=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*E)),i.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(E){i.object.isPerspectiveCamera?u*=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/E)),i.object.updateProjectionMatrix(),c=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(E){f.set(E.clientX,E.clientY)}function q(E){g.set(E.clientX,E.clientY)}function R(E){p.set(E.clientX,E.clientY)}function D(E){v.set(E.clientX,E.clientY),_.subVectors(v,f).multiplyScalar(i.rotateSpeed);const Z=i.domElement;A(2*Math.PI*_.x/Z.clientHeight),I(2*Math.PI*_.y/Z.clientHeight),f.copy(v),i.update()}function F(E){x.set(E.clientX,E.clientY),M.subVectors(x,g),M.y>0?z(y()):M.y<0&&$(y()),g.copy(x),i.update()}function Y(E){h.set(E.clientX,E.clientY),m.subVectors(h,p).multiplyScalar(i.panSpeed),Q(m.x,m.y),p.copy(h),i.update()}function j(E){E.deltaY<0?$(y()):E.deltaY>0&&z(y()),i.update()}function K(E){let Z=!1;switch(E.code){case i.keys.UP:Q(0,i.keyPanSpeed),Z=!0;break;case i.keys.BOTTOM:Q(0,-i.keyPanSpeed),Z=!0;break;case i.keys.LEFT:Q(i.keyPanSpeed,0),Z=!0;break;case i.keys.RIGHT:Q(-i.keyPanSpeed,0),Z=!0;break}Z&&(E.preventDefault(),i.update())}function ue(){if(S.length===1)f.set(S[0].pageX,S[0].pageY);else{const E=.5*(S[0].pageX+S[1].pageX),Z=.5*(S[0].pageY+S[1].pageY);f.set(E,Z)}}function me(){if(S.length===1)p.set(S[0].pageX,S[0].pageY);else{const E=.5*(S[0].pageX+S[1].pageX),Z=.5*(S[0].pageY+S[1].pageY);p.set(E,Z)}}function W(){const E=S[0].pageX-S[1].pageX,Z=S[0].pageY-S[1].pageY,ne=Math.sqrt(E*E+Z*Z);g.set(0,ne)}function Ae(){i.enableZoom&&W(),i.enablePan&&me()}function ge(){i.enableZoom&&W(),i.enableRotate&&ue()}function xe(E){if(S.length==1)v.set(E.pageX,E.pageY);else{const ne=ve(E),le=.5*(E.pageX+ne.x),oe=.5*(E.pageY+ne.y);v.set(le,oe)}_.subVectors(v,f).multiplyScalar(i.rotateSpeed);const Z=i.domElement;A(2*Math.PI*_.x/Z.clientHeight),I(2*Math.PI*_.y/Z.clientHeight),f.copy(v)}function he(E){if(S.length===1)h.set(E.pageX,E.pageY);else{const Z=ve(E),ne=.5*(E.pageX+Z.x),le=.5*(E.pageY+Z.y);h.set(ne,le)}m.subVectors(h,p).multiplyScalar(i.panSpeed),Q(m.x,m.y),p.copy(h)}function Fe(E){const Z=ve(E),ne=E.pageX-Z.x,le=E.pageY-Z.y,oe=Math.sqrt(ne*ne+le*le);x.set(0,oe),M.set(0,Math.pow(x.y/g.y,i.zoomSpeed)),z(M.y),g.copy(x)}function Me(E){i.enableZoom&&Fe(E),i.enablePan&&he(E)}function pe(E){i.enableZoom&&Fe(E),i.enableRotate&&xe(E)}function et(E){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",pt),i.domElement.addEventListener("pointerup",rt)),ee(E),E.pointerType==="touch"?b(E):st(E))}function pt(E){i.enabled!==!1&&(E.pointerType==="touch"?w(E):ze(E))}function rt(E){te(E),S.length===0&&(i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",pt),i.domElement.removeEventListener("pointerup",rt)),i.dispatchEvent(Yh),s=r.NONE}function Ut(E){te(E)}function st(E){let Z;switch(E.button){case 0:Z=i.mouseButtons.LEFT;break;case 1:Z=i.mouseButtons.MIDDLE;break;case 2:Z=i.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case pr.DOLLY:if(i.enableZoom===!1)return;q(E),s=r.DOLLY;break;case pr.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;R(E),s=r.PAN}else{if(i.enableRotate===!1)return;G(E),s=r.ROTATE}break;case pr.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;G(E),s=r.ROTATE}else{if(i.enablePan===!1)return;R(E),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_u)}function ze(E){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;D(E);break;case r.DOLLY:if(i.enableZoom===!1)return;F(E);break;case r.PAN:if(i.enablePan===!1)return;Y(E);break}}function Zt(E){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(E.preventDefault(),i.dispatchEvent(_u),j(E),i.dispatchEvent(Yh))}function Bt(E){i.enabled===!1||i.enablePan===!1||K(E)}function b(E){switch(ae(E),S.length){case 1:switch(i.touches.ONE){case mr.ROTATE:if(i.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case mr.PAN:if(i.enablePan===!1)return;me(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case mr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ae(),s=r.TOUCH_DOLLY_PAN;break;case mr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ge(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(_u)}function w(E){switch(ae(E),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;xe(E),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;he(E),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Me(E),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;pe(E),i.update();break;default:s=r.NONE}}function H(E){i.enabled!==!1&&E.preventDefault()}function ee(E){S.push(E)}function te(E){delete C[E.pointerId];for(let Z=0;Z<S.length;Z++)if(S[Z].pointerId==E.pointerId){S.splice(Z,1);return}}function ae(E){let Z=C[E.pointerId];Z===void 0&&(Z=new Ce,C[E.pointerId]=Z),Z.set(E.pageX,E.pageY)}function ve(E){const Z=E.pointerId===S[0].pointerId?S[1]:S[0];return C[Z.pointerId]}i.domElement.addEventListener("contextmenu",H),i.domElement.addEventListener("pointerdown",et),i.domElement.addEventListener("pointercancel",Ut),i.domElement.addEventListener("wheel",Zt,{passive:!1}),this.update()}}var Hs=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(d){d.preventDefault(),i(++n%e.children.length)},!1);function t(d){return e.appendChild(d.dom),d}function i(d){for(var c=0;c<e.children.length;c++)e.children[c].style.display=c===d?"block":"none";n=d}var r=(performance||Date).now(),s=r,o=0,a=t(new Hs.Panel("FPS","#0ff","#002")),l=t(new Hs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=t(new Hs.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var d=(performance||Date).now();if(l.update(d-r,200),d>=s+1e3&&(a.update(o*1e3/(d-s),100),s=d,o=0,u)){var c=performance.memory;u.update(c.usedJSHeapSize/1048576,c.jsHeapSizeLimit/1048576)}return d},update:function(){r=this.end()},domElement:e,setMode:i}};Hs.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,u=3*o,d=2*o,c=3*o,f=15*o,v=74*o,_=30*o,p=document.createElement("canvas");p.width=a,p.height=l,p.style.cssText="width:80px;height:48px";var h=p.getContext("2d");return h.font="bold "+9*o+"px Helvetica,Arial,sans-serif",h.textBaseline="top",h.fillStyle=t,h.fillRect(0,0,a,l),h.fillStyle=e,h.fillText(n,u,d),h.fillRect(c,f,v,_),h.fillStyle=t,h.globalAlpha=.9,h.fillRect(c,f,v,_),{dom:p,update:function(m,g){i=Math.min(i,m),r=Math.max(r,m),h.fillStyle=t,h.globalAlpha=1,h.fillRect(0,0,a,f),h.fillStyle=e,h.fillText(s(m)+" "+n+" ("+s(i)+"-"+s(r)+")",u,d),h.drawImage(p,c+o,f,v-o,_,c,f,v-o,_),h.fillRect(c+v-o,f,o,_),h.fillStyle=t,h.globalAlpha=.9,h.fillRect(c+v-o,f,o,s((1-m/g)*_))}}};class QM{constructor(e,t,i,r,s,o){this.scene=e,this.camera=t,this.renderer=i,this.controls=r,this.stats=s,this.simulation=o}init(){this.scene=new $M,this.camera=new rn(45,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.set(0,0,800),this.camera.lookAt(0,0,0);const e=document.getElementById("display");this.renderer=new bg({canvas:e,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(1647143),document.body.appendChild(this.renderer.domElement),this.controls=new KM(this.camera,this.renderer.domElement),this.stats=new Hs,document.body.appendChild(this.stats.dom),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)},!1)}loadSimulation(e){this.simulation=e}animate(){this.stats.update(),this.controls.update(),this.renderer.render(this.scene,this.camera),this.simulation&&this.simulation.update(),window.requestAnimationFrame(this.animate.bind(this))}}class JM{constructor(e,t,i){this.mass=e,this.pos_vec=t,this.vel_vec=i,this.radius=Math.pow(this.mass,1),this.geometry=new Sf(this.radius,32,32),this.material=new _f({color:8440772}),this.mesh=new qn(this.geometry,this.material),this.mesh.position.set(t[0],t[1],t[2])}return_vec(){return this.pos_vec.concat(this.vel_vec)}draw(e){e.add(this.mesh)}remove(e){this.alive=!1,e.remove(this.mesh)}}function Pr(n,e){return Math.random()*(e-n)+n}class ew{constructor(e,t){this.N=t,this.scene=e,this.bodies=[],this.dim=3,this.quant_vec=[],this.mass_vec=[],this.G=6.67408,this.time=0,this.dt=1/60,this.clock=new ZM,this.X_MIN=-200,this.X_MAX=200,this.Y_MIN=-200,this.Y_MAX=200,this.Z_MIN=-200,this.Z_MAX=200,this.VX_MIN=-10,this.VX_MAX=10,this.VY_MIN=-10,this.VY_MAX=10,this.VZ_MIN=-10,this.VZ_MAX=10,this.MASS_MIN=.8,this.MASS_MAX=8,this.iter=0,this.dampening=1e-6}init(){for(let e=0;e<this.N;e++){const t=Pr(0,2*Math.PI),i=Pr(0,Math.PI),r=200*Math.sin(t)*Math.cos(i),s=200*Math.sin(t)*Math.sin(i),o=200*Math.cos(t),a=Pr(this.VX_MIN,this.VX_MAX),l=Pr(this.VY_MIN,this.VY_MAX),u=Pr(this.VZ_MIN,this.VZ_MAX),d=Pr(this.MASS_MIN,this.MASS_MAX),c=new JM(d,[r,s,o],[a,l,u]);this.bodies.push(c),c.draw(this.scene)}this.quant_vec=[].concat(...this.bodies.map(e=>e.return_vec())),this.mass_vec=[].concat(...this.bodies.map(e=>e.mass))}rk4(e,t){const i=this.solve(e,this.quant_vec).map(c=>c*t),r=this.solve(e+.5*t,this.quant_vec.map((c,f)=>c+.5*i[f])).map(c=>c*t),s=this.solve(e+.5*t,this.quant_vec.map((c,f)=>c+.5*r[f])).map(c=>c*t),o=this.solve(e+t,this.quant_vec.map((c,f)=>c+s[f])).map(c=>c*t);let a=r.map(c=>c*2),l=s.map(c=>c*2),d=i.map((c,f)=>c+a[f]+l[f]+o[f]).map(c=>c/6);return this.quant_vec.map((c,f)=>c+d[f])}solve(e,t){let i=t.length/6,r=new Array(t.length).fill(0);for(let s=0;s<i;s++){let o=s*6;for(let a=0;a<i;a++){let l=a*6;if(r[o]=t[o+3],r[o+1]=t[o+4],r[o+2]=t[o+5],s!=a){let u=t[o]-t[l],d=t[o+1]-t[l+1],c=t[o+2]-t[l+2],f=Math.sqrt(u*u+d*d+c*c),v=-this.G*this.mass_vec[a]*u/(f*f+this.dampening),_=-this.G*this.mass_vec[a]*d/(f*f+this.dampening),p=-this.G*this.mass_vec[a]*c/(f*f+this.dampening);r[o+3]+=v,r[o+4]+=_,r[o+5]+=p}}}return r}update(){this.dt=this.clock.getDelta();let e=this.rk4(0,this.dt);for(let t=0;t<this.N;t++){let i=t*6;this.bodies[t]&&(this.bodies[t].pos_vec=[e[i],e[i+1],e[i+2]],this.bodies[t].vel_vec=[e[i+3],e[i+4],e[i+5]],this.bodies[t].mesh.position.set(this.bodies[t].pos_vec[0],this.bodies[t].pos_vec[1],this.bodies[t].pos_vec[2]))}this.quant_vec=[].concat(...this.bodies.map(t=>t.return_vec())),this.iter+=1,console.log("Iteration: ",this.iter)}}var Ag={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tw=Va.exports,nw=Symbol.for("react.element"),iw=Symbol.for("react.fragment"),rw=Object.prototype.hasOwnProperty,sw=tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ow={key:!0,ref:!0,__self:!0,__source:!0};function Lg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)rw.call(e,i)&&!ow.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:nw,type:n,key:s,ref:o,props:r,_owner:sw.current}}ll.Fragment=iw;ll.jsx=Lg;ll.jsxs=Lg;(function(n){n.exports=ll})(Ag);const yc=Ag.exports.jsx;function aw(){return Va.exports.useEffect(()=>{const n=new QM;n.init();const e=new ew(n.scene,700);n.loadSimulation(e),e.init(),n.animate()},[]),yc("div",{children:yc("canvas",{id:"display"})})}xu.createRoot(document.getElementById("root")).render(yc(aw,{}));
