import{d as q,r as $,cA as it,h as l,cB as st,bJ as lt,B as dt,E as ye,bq as ct,l as Y,v as bt,az as ft,N as pt,bY as ut,cu as vt,cC as ht,c as r,j as o,a as f,b as P,ab as gt,u as xt,n as we,cv as Q,k as Z,A as mt,t as k,w as yt,a2 as B,c1 as X,q as wt,af as pe,cD as ue,cE as Ct,a6 as G,y as ee,a4 as Rt,aK as St,cF as zt,cG as $t}from"./index.js";import{A as Pt}from"./Add.js";import{u as ve}from"./use-compitable.js";import{u as Tt}from"./use-merged-state.js";import{c as _t,d as he,o as Wt}from"./FocusDetector.js";const At=he(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[he("&::-webkit-scrollbar",{width:0,height:0})]),Bt=q({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=$(null);function i(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const c=it();return At.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:_t,ssr:c}),Object.assign({selfRef:e,handleWheel:i},{scrollTo(...d){var g;(g=e.value)===null||g===void 0||g.scrollTo(...d)}})},render(){return l("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Lt="Expected a function";function te(e,i,c){var p=!0,d=!0;if(typeof e!="function")throw new TypeError(Lt);return st(c)&&(p="leading"in c?!!c.leading:p,d="trailing"in c?!!c.trailing:d),lt(e,i,{leading:p,maxWait:i,trailing:d})}const ne=dt("n-tabs"),Ce={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Mt=q({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ce,setup(e){const i=ye(ne,null);return i||ct("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:i.paneStyleRef,class:i.paneClassRef,mergedClsPrefix:i.mergedClsPrefixRef}},render(){return l("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Et=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ht(Ce,["displayDirective"])),re=q({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Et,setup(e){const{mergedClsPrefixRef:i,valueRef:c,typeRef:p,closableRef:d,tabStyleRef:g,tabChangeIdRef:u,onBeforeLeaveRef:w,triggerRef:S,handleAdd:C,activateTab:v,handleClose:R}=ye(ne);return{trigger:S,mergedClosable:Y(()=>{if(e.internalAddable)return!1;const{closable:h}=e;return h===void 0?d.value:h}),style:g,clsPrefix:i,value:c,type:p,handleClose(h){h.stopPropagation(),!e.disabled&&R(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){C();return}const{name:h}=e,x=++u.id;if(h!==c.value){const{value:m}=w;m?Promise.resolve(m(e.name,c.value)).then(W=>{W&&u.id===x&&v(h)}):v(h)}}}},render(){const{internalAddable:e,clsPrefix:i,name:c,disabled:p,label:d,tab:g,value:u,mergedClosable:w,style:S,trigger:C,$slots:{default:v}}=this,R=d??g;return l("div",{class:`${i}-tabs-tab-wrapper`},this.internalLeftPadded?l("div",{class:`${i}-tabs-tab-pad`}):null,l("div",Object.assign({key:c,"data-name":c,"data-disabled":p?!0:void 0},bt({class:[`${i}-tabs-tab`,u===c&&`${i}-tabs-tab--active`,p&&`${i}-tabs-tab--disabled`,w&&`${i}-tabs-tab--closable`,e&&`${i}-tabs-tab--addable`],onClick:C==="click"?this.activateTab:void 0,onMouseenter:C==="hover"?this.activateTab:void 0,style:e?void 0:S},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),l("span",{class:`${i}-tabs-tab__label`},e?l(ft,null,l("div",{class:`${i}-tabs-tab__height-placeholder`}," "),l(pt,{clsPrefix:i},{default:()=>l(Pt,null)})):v?v():typeof R=="object"?R:ut(R??c)),w&&this.type==="card"?l(vt,{clsPrefix:i,class:`${i}-tabs-tab__close`,onClick:this.handleClose,disabled:p}):null))}}),jt=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[o("segment-type",[r("tabs-rail",[f("&.transition-disabled","color: red;",[r("tabs-tab",`
 transition: none;
 `)])])]),o("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),o("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),o("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),o("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),o("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[o("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),f("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),o("flex",[r("tabs-nav",{width:"100%"},[r("tabs-wrapper",{width:"100%"},[r("tabs-tab",{marginRight:0})])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[P("prefix, suffix",`
 display: flex;
 align-items: center;
 `),P("prefix","padding-right: 16px;"),P("suffix","padding-left: 16px;")]),o("top, bottom",[r("tabs-nav-scroll-wrapper",[f("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),f("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),o("shadow-start",[f("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),o("shadow-end",[f("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),o("left, right",[r("tabs-nav-scroll-wrapper",[f("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),f("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),o("shadow-start",[f("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),o("shadow-end",[f("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[f("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),f("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[o("disabled",{cursor:"not-allowed"}),P("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),P("label",`
 display: flex;
 align-items: center;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[f("&.transition-disabled",`
 transition: none;
 `),o("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[f("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),f("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),f("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),f("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),f("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),o("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[f("&:hover",{color:"var(--n-tab-text-color-hover)"}),o("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),o("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[o("line-type",[o("top",[P("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),o("left",[P("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),o("right",[P("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),o("bottom",[P("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),P("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),o("card-type",[P("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[o("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[P("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),gt("disabled",[f("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),o("closable","padding-right: 8px;"),o("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),o("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),o("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),o("top",[o("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),o("left",[o("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),o("right",[o("card-type",[r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),o("bottom",[o("card-type",[r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),kt=Object.assign(Object.assign({},we.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Nt=q({name:"Tabs",props:kt,setup(e,{slots:i}){var c,p,d,g;const{mergedClsPrefixRef:u,inlineThemeDisabled:w}=xt(e),S=we("Tabs","-tabs",jt,Ct,e,u),C=$(null),v=$(null),R=$(null),h=$(null),x=$(null),m=$(!0),W=$(!0),A=ve(e,["labelSize","size"]),H=ve(e,["activeName","value"]),T=$((p=(c=H.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&p!==void 0?p:i.default?(g=(d=Q(i.default())[0])===null||d===void 0?void 0:d.props)===null||g===void 0?void 0:g.name:null),L=Tt(H,T),E={id:0},b=Y(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Z(L,()=>{E.id=0,D(),ie()});function y(){var t;const{value:a}=L;return a===null?null:(t=C.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function I(t){if(e.type==="card")return;const{value:a}=v;if(a&&t){const n=`${u.value}-tabs-bar--disabled`,{barWidth:s,placement:z}=e;if(t.dataset.disabled==="true"?a.classList.add(n):a.classList.remove(n),["top","bottom"].includes(z)){if(oe(["top","maxHeight","height"]),typeof s=="number"&&t.offsetWidth>=s){const _=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${_}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(oe(["left","maxWidth","width"]),typeof s=="number"&&t.offsetHeight>=s){const _=Math.floor((t.offsetHeight-s)/2)+t.offsetTop;a.style.top=`${_}px`,a.style.maxHeight=`${s}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function oe(t){const{value:a}=v;if(a)for(const n of t)a.style[n]=""}function D(){if(e.type==="card")return;const t=y();t&&I(t)}function ie(t){var a;const n=(a=x.value)===null||a===void 0?void 0:a.$el;if(!n)return;const s=y();if(!s)return;const{scrollLeft:z,offsetWidth:_}=n,{offsetLeft:F,offsetWidth:V}=s;z>F?n.scrollTo({top:0,left:F,behavior:"smooth"}):F+V>z+_&&n.scrollTo({top:0,left:F+V-_,behavior:"smooth"})}const M=$(null);let K=0,j=null;function Re(t){const a=M.value;if(a){K=t.getBoundingClientRect().height;const n=`${K}px`,s=()=>{a.style.height=n,a.style.maxHeight=n};j?(s(),j(),j=null):j=s}}function Se(t){const a=M.value;if(a){const n=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${n}px`,a.style.height=`${Math.max(K,n)}px`};j?(j(),j=null,s()):j=s}}function ze(){const t=M.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:a}=e;if(typeof a=="string")t.style.cssText=a;else if(a){const{maxHeight:n,height:s}=a;n!==void 0&&(t.style.maxHeight=n),s!==void 0&&(t.style.height=s)}}}const se={value:[]},le=$("next");function $e(t){const a=L.value;let n="next";for(const s of se.value){if(s===a)break;if(s===t){n="prev";break}}le.value=n,Pe(t)}function Pe(t){const{onActiveNameChange:a,onUpdateValue:n,"onUpdate:value":s}=e;a&&G(a,t),n&&G(n,t),s&&G(s,t),T.value=t}function Te(t){const{onClose:a}=e;a&&G(a,t)}function de(){const{value:t}=v;if(!t)return;const a="transition-disabled";t.classList.add(a),D(),t.classList.remove(a)}let ce=0;function _e(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||ce===t.contentRect.width)return;ce=t.contentRect.width;const{type:n}=e;(n==="line"||n==="bar")&&de(),n!=="segment"&&J((a=x.value)===null||a===void 0?void 0:a.$el)}const We=te(_e,64);Z([()=>e.justifyContent,()=>e.size],()=>{ee(()=>{const{type:t}=e;(t==="line"||t==="bar")&&de()})});const N=$(!1);function Ae(t){var a;const{target:n,contentRect:{width:s}}=t,z=n.parentElement.offsetWidth;if(!N.value)z<s&&(N.value=!0);else{const{value:_}=h;if(!_)return;z-s>_.$el.offsetWidth&&(N.value=!1)}J((a=x.value)===null||a===void 0?void 0:a.$el)}const Be=te(Ae,64);function Le(){const{onAdd:t}=e;t&&t(),ee(()=>{const a=y(),{value:n}=x;!a||!n||n.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function J(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:n,scrollWidth:s,offsetWidth:z}=t;m.value=n<=0,W.value=n+z>=s}else{const{scrollTop:n,scrollHeight:s,offsetHeight:z}=t;m.value=n<=0,W.value=n+z>=s}}const Ee=te(t=>{J(t.target)},64);mt(ne,{triggerRef:k(e,"trigger"),tabStyleRef:k(e,"tabStyle"),paneClassRef:k(e,"paneClass"),paneStyleRef:k(e,"paneStyle"),mergedClsPrefixRef:u,typeRef:k(e,"type"),closableRef:k(e,"closable"),valueRef:L,tabChangeIdRef:E,onBeforeLeaveRef:k(e,"onBeforeLeave"),activateTab:$e,handleClose:Te,handleAdd:Le}),Wt(()=>{D(),ie()}),yt(()=>{const{value:t}=R;if(!t)return;const{value:a}=u,n=`${a}-tabs-nav-scroll-wrapper--shadow-start`,s=`${a}-tabs-nav-scroll-wrapper--shadow-end`;m.value?t.classList.remove(n):t.classList.add(n),W.value?t.classList.remove(s):t.classList.add(s)});const be=$(null);Z(L,()=>{if(e.type==="segment"){const t=be.value;t&&ee(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const je={syncBarPosition:()=>{D()}},fe=Y(()=>{const{value:t}=A,{type:a}=e,n={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${n}`,{self:{barColor:z,closeIconColor:_,closeIconColorHover:F,closeIconColorPressed:V,tabColor:ke,tabBorderColor:He,paneTextColor:Oe,tabFontWeight:Fe,tabBorderRadius:Ie,tabFontWeightActive:De,colorSegment:Me,fontWeightStrong:Ne,tabColorSegment:Ve,closeSize:Ue,closeIconSize:Xe,closeColorHover:Ge,closeColorPressed:Ye,closeBorderRadius:qe,[B("panePadding",t)]:U,[B("tabPadding",s)]:Ke,[B("tabPaddingVertical",s)]:Je,[B("tabGap",s)]:Qe,[B("tabGap",`${s}Vertical`)]:Ze,[B("tabTextColor",a)]:et,[B("tabTextColorActive",a)]:tt,[B("tabTextColorHover",a)]:at,[B("tabTextColorDisabled",a)]:rt,[B("tabFontSize",t)]:nt},common:{cubicBezierEaseInOut:ot}}=S.value;return{"--n-bezier":ot,"--n-color-segment":Me,"--n-bar-color":z,"--n-tab-font-size":nt,"--n-tab-text-color":et,"--n-tab-text-color-active":tt,"--n-tab-text-color-disabled":rt,"--n-tab-text-color-hover":at,"--n-pane-text-color":Oe,"--n-tab-border-color":He,"--n-tab-border-radius":Ie,"--n-close-size":Ue,"--n-close-icon-size":Xe,"--n-close-color-hover":Ge,"--n-close-color-pressed":Ye,"--n-close-border-radius":qe,"--n-close-icon-color":_,"--n-close-icon-color-hover":F,"--n-close-icon-color-pressed":V,"--n-tab-color":ke,"--n-tab-font-weight":Fe,"--n-tab-font-weight-active":De,"--n-tab-padding":Ke,"--n-tab-padding-vertical":Je,"--n-tab-gap":Qe,"--n-tab-gap-vertical":Ze,"--n-pane-padding-left":X(U,"left"),"--n-pane-padding-right":X(U,"right"),"--n-pane-padding-top":X(U,"top"),"--n-pane-padding-bottom":X(U,"bottom"),"--n-font-weight-strong":Ne,"--n-tab-color-segment":Ve}}),O=w?wt("tabs",Y(()=>`${A.value[0]}${e.type[0]}`),fe,e):void 0;return Object.assign({mergedClsPrefix:u,mergedValue:L,renderedNames:new Set,tabsRailElRef:be,tabsPaneWrapperRef:M,tabsElRef:C,barElRef:v,addTabInstRef:h,xScrollInstRef:x,scrollWrapperElRef:R,addTabFixed:N,tabWrapperStyle:b,handleNavResize:We,mergedSize:A,handleScroll:Ee,handleTabsResize:Be,cssVars:w?void 0:fe,themeClass:O==null?void 0:O.themeClass,animationDirection:le,renderNameListRef:se,onAnimationBeforeLeave:Re,onAnimationEnter:Se,onAnimationAfterEnter:ze,onRender:O==null?void 0:O.onRender},je)},render(){const{mergedClsPrefix:e,type:i,placement:c,addTabFixed:p,addable:d,mergedSize:g,renderNameListRef:u,onRender:w,paneWrapperClass:S,paneWrapperStyle:C,$slots:{default:v,prefix:R,suffix:h}}=this;w==null||w();const x=v?Q(v()).filter(b=>b.type.__TAB_PANE__===!0):[],m=v?Q(v()).filter(b=>b.type.__TAB__===!0):[],W=!m.length,A=i==="card",H=i==="segment",T=!A&&!H&&this.justifyContent;u.value=[];const L=()=>{const b=l("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},T?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),W?x.map((y,I)=>(u.value.push(y.props.name),ae(l(re,Object.assign({},y.props,{internalCreatedByPane:!0,internalLeftPadded:I!==0&&(!T||T==="center"||T==="start"||T==="end")}),y.children?{default:y.children.tab}:void 0)))):m.map((y,I)=>(u.value.push(y.props.name),ae(I!==0&&!T?me(y):y))),!p&&d&&A?xe(d,(W?x.length:m.length)!==0):null,T?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return l("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},A&&d?l(ue,{onResize:this.handleTabsResize},{default:()=>b}):b,A?l("div",{class:`${e}-tabs-pad`}):null,A?null:l("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},E=H?"top":c;return l("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${i}-type`,`${e}-tabs--${g}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${E}`],style:this.cssVars},l("div",{class:[`${e}-tabs-nav--${i}-type`,`${e}-tabs-nav--${E}`,`${e}-tabs-nav`]},pe(R,b=>b&&l("div",{class:`${e}-tabs-nav__prefix`},b)),H?l("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},W?x.map((b,y)=>(u.value.push(b.props.name),l(re,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:y!==0}),b.children?{default:b.children.tab}:void 0))):m.map((b,y)=>(u.value.push(b.props.name),y===0?b:me(b)))):l(ue,{onResize:this.handleNavResize},{default:()=>l("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(E)?l(Bt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:L}):l("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},L()))}),p&&d&&A?xe(d,!0):null,pe(h,b=>b&&l("div",{class:`${e}-tabs-nav__suffix`},b))),W&&(this.animated&&(E==="top"||E==="bottom")?l("div",{ref:"tabsPaneWrapperRef",style:C,class:[`${e}-tabs-pane-wrapper`,S]},ge(x,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ge(x,this.mergedValue,this.renderedNames)))}});function ge(e,i,c,p,d,g,u){const w=[];return e.forEach(S=>{const{name:C,displayDirective:v,"display-directive":R}=S.props,h=m=>v===m||R===m,x=i===C;if(S.key!==void 0&&(S.key=C),x||h("show")||h("show:lazy")&&c.has(C)){c.has(C)||c.add(C);const m=!h("if");w.push(m?Rt(S,[[St,x]]):S)}}),u?l(zt,{name:`${u}-transition`,onBeforeLeave:p,onEnter:d,onAfterEnter:g},{default:()=>w}):w}function xe(e,i){return l(re,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:i,disabled:typeof e=="object"&&e.disabled})}function me(e){const i=$t(e);return i.props?i.props.internalLeftPadded=!0:i.props={internalLeftPadded:!0},i}function ae(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{Nt as N,Mt as _,re as a};
