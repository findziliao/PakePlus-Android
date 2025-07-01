import{c as x,a as B,b as v,d as C,u as Ye,e as fo,h as d,f as Ut,g as vo,i as At,j as oe,r as R,w as vt,k as Ke,t as Ve,l as z,m as go,n as Ce,o as gt,p as _o,q as ot,s as Vt,L as xo,T as Lt,v as wo,x as Et,N as ko,y as Tt,z as yo,A as Pt,B as Ht,C as It,D as Co,E as _t,F as ke,G as ge,H as ye,I as dt,J as Me,K as ut,M as _e,O as Le,P as ht,Q as Nt,R as Re,S as we,U as et,V as Ee,W as Te,X as Ze,Y as pt,Z as bt,_ as mt,$ as So,a0 as Ot,a1 as $o,a2 as ve,a3 as Do,a4 as xt,a5 as Fo,a6 as ze,a7 as Be,a8 as zo,a9 as Bo,aa as St,ab as $t,ac as it,ad as fe,ae as ct,af as $e,ag as Mo,ah as Ro,ai as He,aj as W,ak as Uo,al as Ao,am as Vo,an as b,ao as $,ap as k,aq as D,ar as h,as as o,at as Pe,au as K,av as jt,aw as i,ax as ue,ay as y,az as j,aA as Ge,aB as le,aC as Lo,aD as Eo,aE as qt,aF as To,aG as Po,aH as Ho,aI as Wt,aJ as Io,aK as No,aL as Oo,aM as Zt,aN as jo,aO as qo,aP as Wo,aQ as Dt,aR as Zo,aS as Ko,aT as Go,aU as Xo,aV as Ft,aW as Yo,aX as Jo,aY as Qo}from"./index.js";import{_ as el,a as tl,b as ol}from"./dark-mode-switch.vue_vue_type_script_setup_true_lang.js";import{_ as Ie}from"./Divider.js";import{u as tt}from"./use-merged-state.js";import{_ as Ne}from"./Space.js";import{_ as zt}from"./index.vue_vue_type_script_setup_true_lang.js";import{_ as ll,a as Kt,b as wt}from"./Dropdown.js";import{_ as kt}from"./_plugin-vue_export-helper.js";import{_ as nl}from"./GradientText.js";import{N as Gt,a as Xt}from"./Grid.js";import{_ as al,N as rl}from"./Tabs.js";import{_ as sl,u as il}from"./Input.js";import{u as ft,V as cl,a as dl,b as ul}from"./FocusDetector.js";import{_ as hl}from"./InputNumber.js";import{_ as pl,a as bl}from"./DrawerContent.js";import{_ as Oe,a as ml}from"./hover-container.vue_vue_type_script_setup_true_lang.js";/* empty css                                                */import{_ as fl}from"./avatar.js";import{f as Bt}from"./format-length.js";import"./get-slot.js";import"./use-compitable.js";import"./next-frame-once.js";import"./get.js";import"./Icon.js";import"./ChevronRight.js";import"./use-houdini.js";import"./Add.js";function vl(e){return e.nodeType===9?null:e.parentNode}function Yt(e){if(e===null)return null;const t=vl(e);if(t===null)return null;if(t.nodeType===9)return document.documentElement;if(t.nodeType===1){const{overflow:l,overflowX:n,overflowY:a}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(l+a+n))return t}return Yt(t)}function gl(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function Mt(e){return e.nodeName==="#document"}const _l=x("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[B(">",[x("input",[B("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),B("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),x("button",[B("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[v("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),B("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[v("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),B("*",[B("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[B(">",[x("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x("base-selection",[x("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),x("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),B("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[B(">",[x("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),x("base-selection",[x("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),x("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),v("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),xl={},wl=C({name:"InputGroup",props:xl,setup(e){const{mergedClsPrefixRef:t}=Ye(e);return fo("-input-group",_l,t),{mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:`${e}-input-group`},this.$slots)}}),kl=e=>{const{popoverColor:t,textColor2:l,primaryColorHover:n,primaryColorPressed:a}=e;return Object.assign(Object.assign({},vo),{color:t,textColor:l,iconColor:l,iconColorHover:n,iconColorPressed:a,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})},yl={name:"BackTop",common:Ut,self:kl},Cl=yl,Sl=d("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},d("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},d("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},d("g",{transform:"translate(120.000000, 4285.000000)"},d("g",{transform:"translate(7.000000, 126.000000)"},d("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},d("g",{transform:"translate(4.000000, 2.000000)"},d("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),d("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),$l=x("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[At(),oe("transition-disabled",{transition:"none !important"}),x("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),B("svg",{pointerEvents:"none"}),B("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[x("base-icon",{color:"var(--n-icon-color-hover)"})]),B("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[x("base-icon",{color:"var(--n-icon-color-pressed)"})])]),Dl=Object.assign(Object.assign({},Ce.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),Fl=C({name:"BackTop",inheritAttrs:!1,props:Dl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:l}=Ye(e),n=R(null),a=R(!1);vt(()=>{const{value:O}=n;if(O===null){a.value=!1;return}a.value=O>=e.visibilityHeight});const r=R(!1);Ke(a,O=>{var q;r.value&&((q=e["onUpdate:show"])===null||q===void 0||q.call(e,O))});const s=Ve(e,"show"),c=tt(s,a),p=R(!0),m=R(null),_=z(()=>({right:`calc(${Bt(e.right)} + ${go.value})`,bottom:Bt(e.bottom)}));let g,f;Ke(c,O=>{var q,U;r.value&&(O&&((q=e.onShow)===null||q===void 0||q.call(e)),(U=e.onHide)===null||U===void 0||U.call(e))});const S=Ce("BackTop","-back-top",$l,Cl,e,t);function M(){var O;if(f)return;f=!0;const q=((O=e.target)===null||O===void 0?void 0:O.call(e))||gl(e.listenTo)||Yt(m.value);if(!q)return;g=q===document.documentElement?document:q;const{to:U}=e;typeof U=="string"&&document.querySelector(U),g.addEventListener("scroll",ne),ne()}function J(){(Mt(g)?document.documentElement:g).scrollTo({top:0,behavior:"smooth"})}function ne(){n.value=(Mt(g)?document.documentElement:g).scrollTop,r.value||Tt(()=>{r.value=!0})}function P(){p.value=!1}gt(()=>{M(),p.value=c.value}),_o(()=>{g&&g.removeEventListener("scroll",ne)});const ie=z(()=>{const{self:{color:O,boxShadow:q,boxShadowHover:U,boxShadowPressed:ce,iconColor:w,iconColorHover:H,iconColorPressed:Q,width:ee,height:X,iconSize:Y,borderRadius:ae,textColor:Z},common:{cubicBezierEaseInOut:he}}=S.value;return{"--n-bezier":he,"--n-border-radius":ae,"--n-height":X,"--n-width":ee,"--n-box-shadow":q,"--n-box-shadow-hover":U,"--n-box-shadow-pressed":ce,"--n-color":O,"--n-icon-size":Y,"--n-icon-color":w,"--n-icon-color-hover":H,"--n-icon-color-pressed":Q,"--n-text-color":Z}}),N=l?ot("back-top",void 0,ie,e):void 0;return{placeholderRef:m,style:_,mergedShow:c,isMounted:Vt(),scrollElement:R(null),scrollTop:n,DomInfoReady:r,transitionDisabled:p,mergedClsPrefix:t,handleAfterEnter:P,handleScroll:ne,handleClick:J,cssVars:l?void 0:ie,themeClass:N==null?void 0:N.themeClass,onRender:N==null?void 0:N.onRender}},render(){const{mergedClsPrefix:e}=this;return d("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},d(xo,{to:this.to,show:this.mergedShow},{default:()=>d(Lt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var t;return(t=this.onRender)===null||t===void 0||t.call(this),this.mergedShow?d("div",wo(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),Et(this.$slots.default,()=>[d(ko,{clsPrefix:e},{default:()=>Sl})])):null}})}))}}),zl=x("breadcrumb",`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[B("ul",`
 list-style: none;
 padding: 0;
 margin: 0;
 `),B("a",`
 color: inherit;
 text-decoration: inherit;
 `),x("breadcrumb-item",`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[x("icon",`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),B("&:not(:last-child)",[oe("clickable",[v("link",`
 cursor: pointer;
 `,[B("&:hover",`
 background-color: var(--n-item-color-hover);
 `),B("&:active",`
 background-color: var(--n-item-color-pressed); 
 `)])])]),v("link",`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[B("&:hover",`
 color: var(--n-item-text-color-hover);
 `,[x("icon",`
 color: var(--n-item-text-color-hover);
 `)]),B("&:active",`
 color: var(--n-item-text-color-pressed);
 `,[x("icon",`
 color: var(--n-item-text-color-pressed);
 `)])]),v("separator",`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),B("&:last-child",[v("link",`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[x("icon",`
 color: var(--n-item-text-color-active);
 `)]),v("separator",`
 display: none;
 `)])])]),Jt=Ht("n-breadcrumb"),Bl=Object.assign(Object.assign({},Ce.props),{separator:{type:String,default:"/"}}),Ml=C({name:"Breadcrumb",props:Bl,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:l}=Ye(e),n=Ce("Breadcrumb","-breadcrumb",zl,yo,e,t);Pt(Jt,{separatorRef:Ve(e,"separator"),mergedClsPrefixRef:t});const a=z(()=>{const{common:{cubicBezierEaseInOut:s},self:{separatorColor:c,itemTextColor:p,itemTextColorHover:m,itemTextColorPressed:_,itemTextColorActive:g,fontSize:f,fontWeightActive:S,itemBorderRadius:M,itemColorHover:J,itemColorPressed:ne,itemLineHeight:P}}=n.value;return{"--n-font-size":f,"--n-bezier":s,"--n-item-text-color":p,"--n-item-text-color-hover":m,"--n-item-text-color-pressed":_,"--n-item-text-color-active":g,"--n-separator-color":c,"--n-item-color-hover":J,"--n-item-color-pressed":ne,"--n-item-border-radius":M,"--n-font-weight-active":S,"--n-item-line-height":P}}),r=l?ot("breadcrumb",void 0,a,e):void 0;return{mergedClsPrefix:t,cssVars:l?void 0:a,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),d("nav",{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":"Breadcrumb"},d("ul",null,this.$slots))}}),Rl=(e=Co?window:null)=>{const t=()=>{const{hash:a,host:r,hostname:s,href:c,origin:p,pathname:m,port:_,protocol:g,search:f}=(e==null?void 0:e.location)||{};return{hash:a,host:r,hostname:s,href:c,origin:p,pathname:m,port:_,protocol:g,search:f}},l=()=>{n.value=t()},n=R(t());return gt(()=>{e&&(e.addEventListener("popstate",l),e.addEventListener("hashchange",l))}),It(()=>{e&&(e.removeEventListener("popstate",l),e.removeEventListener("hashchange",l))}),n},Ul={separator:String,href:String,clickable:{type:Boolean,default:!0},onClick:Function},Al=C({name:"BreadcrumbItem",props:Ul,setup(e,{slots:t}){const l=_t(Jt,null);if(!l)return()=>null;const{separatorRef:n,mergedClsPrefixRef:a}=l,r=Rl(),s=z(()=>e.href?"a":"span"),c=z(()=>r.value.href===e.href?"location":null);return()=>{const{value:p}=a;return d("li",{class:[`${p}-breadcrumb-item`,e.clickable&&`${p}-breadcrumb-item--clickable`]},d(s.value,{class:`${p}-breadcrumb-item__link`,"aria-current":c.value,href:e.href,onClick:e.onClick},t),d("span",{class:`${p}-breadcrumb-item__separator`,"aria-hidden":"true"},Et(t.separator,()=>{var m;return[(m=e.separator)!==null&&m!==void 0?m:n.value]})))}}});function Vl(e,t){switch(e[0]){case"hex":return t?"#000000FF":"#000000";case"rgb":return t?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return t?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return t?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Xe(e){return e===null?null:/^ *#/.test(e)?"hex":e.includes("rgb")?"rgb":e.includes("hsl")?"hsl":e.includes("hsv")?"hsv":null}function Ll(e){return e=Math.round(e),e>=360?359:e<0?0:e}function El(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}const Tl={rgb:{hex(e){return ke(ge(e))},hsl(e){const[t,l,n,a]=ge(e);return ye([...dt(t,l,n),a])},hsv(e){const[t,l,n,a]=ge(e);return Me([...ut(t,l,n),a])}},hex:{rgb(e){return _e(ge(e))},hsl(e){const[t,l,n,a]=ge(e);return ye([...dt(t,l,n),a])},hsv(e){const[t,l,n,a]=ge(e);return Me([...ut(t,l,n),a])}},hsl:{hex(e){const[t,l,n,a]=Le(e);return ke([...ht(t,l,n),a])},rgb(e){const[t,l,n,a]=Le(e);return _e([...ht(t,l,n),a])},hsv(e){const[t,l,n,a]=Le(e);return Me([...Nt(t,l,n),a])}},hsv:{hex(e){const[t,l,n,a]=Re(e);return ke([...we(t,l,n),a])},rgb(e){const[t,l,n,a]=Re(e);return _e([...we(t,l,n),a])},hsl(e){const[t,l,n,a]=Re(e);return ye([...et(t,l,n),a])}}};function Qt(e,t,l){return l=l||Xe(e),l?l===t?e:Tl[l][t](e):null}const Ae="12px",Pl=12,De="6px",Hl=6,Il="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)",Nl=C({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){const t=R(null);function l(r){t.value&&(Ee("mousemove",document,n),Ee("mouseup",document,a),n(r))}function n(r){const{value:s}=t;if(!s)return;const{width:c,left:p}=s.getBoundingClientRect(),m=Ll((r.clientX-p-Hl)/(c-Pl)*360);e.onUpdateHue(m)}function a(){var r;Te("mousemove",document,n),Te("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,handleMouseDown:l}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,style:{height:Ae,borderRadius:De}},d("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Il,height:Ae,borderRadius:De,position:"relative"},onMousedown:this.handleMouseDown},d("div",{style:{position:"absolute",left:De,right:De,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${De})`,borderRadius:De,width:Ae,height:Ae}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:De,width:Ae,height:Ae}})))))}}),qe="12px",Ol=12,Fe="6px",jl=C({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){const t=R(null);function l(r){!t.value||!e.rgba||(Ee("mousemove",document,n),Ee("mouseup",document,a),n(r))}function n(r){const{value:s}=t;if(!s)return;const{width:c,left:p}=s.getBoundingClientRect(),m=(r.clientX-p)/(c-Ol);e.onUpdateAlpha(El(m))}function a(){var r;Te("mousemove",document,n),Te("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{railRef:t,railBackgroundImage:z(()=>{const{rgba:r}=e;return r?`linear-gradient(to right, rgba(${r[0]}, ${r[1]}, ${r[2]}, 0) 0%, rgba(${r[0]}, ${r[1]}, ${r[2]}, 1) 100%)`:""}),handleMouseDown:l}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-slider`,ref:"railRef",style:{height:qe,borderRadius:Fe},onMousedown:this.handleMouseDown},d("div",{style:{borderRadius:Fe,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},d("div",{class:`${e}-color-picker-checkboard`}),d("div",{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&d("div",{style:{position:"absolute",left:Fe,right:Fe,top:0,bottom:0}},d("div",{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Fe})`,borderRadius:Fe,width:qe,height:qe}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:_e(this.rgba),borderRadius:Fe,width:qe,height:qe}}))))}}),Je="12px",Qe="6px",ql=C({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){const t=R(null);function l(r){t.value&&(Ee("mousemove",document,n),Ee("mouseup",document,a),n(r))}function n(r){const{value:s}=t;if(!s)return;const{width:c,height:p,left:m,bottom:_}=s.getBoundingClientRect(),g=(_-r.clientY)/p,f=(r.clientX-m)/c,S=100*(f>1?1:f<0?0:f),M=100*(g>1?1:g<0?0:g);e.onUpdateSV(S,M)}function a(){var r;Te("mousemove",document,n),Te("mouseup",document,a),(r=e.onComplete)===null||r===void 0||r.call(e)}return{palleteRef:t,handleColor:z(()=>{const{rgba:r}=e;return r?`rgb(${r[0]}, ${r[1]}, ${r[2]})`:""}),handleMouseDown:l}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},d("div",{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),d("div",{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&d("div",{class:`${e}-color-picker-handle`,style:{width:Je,height:Je,borderRadius:Qe,left:`calc(${this.displayedSv[0]}% - ${Qe})`,bottom:`calc(${this.displayedSv[1]}% - ${Qe})`}},d("div",{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Qe,width:Je,height:Je}})))}}),yt=Ht("n-color-picker");function Wl(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),255)):!1}function Zl(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),360)):!1}function Kl(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(parseInt(e),100)):!1}function Gl(e){const t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Xl(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(parseInt(e)/100,100)):!1}const Yl={paddingSmall:"0 4px"},Rt=C({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){const t=R(""),{themeRef:l}=_t(yt,null);vt(()=>{t.value=n()});function n(){const{value:s}=e;if(s===null)return"";const{label:c}=e;return c==="HEX"?s:c==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function a(s){t.value=s}function r(s){let c,p;switch(e.label){case"HEX":p=Gl(s),p&&e.onUpdateValue(s),t.value=n();break;case"H":c=Zl(s),c===!1?t.value=n():e.onUpdateValue(c);break;case"S":case"L":case"V":c=Kl(s),c===!1?t.value=n():e.onUpdateValue(c);break;case"A":c=Xl(s),c===!1?t.value=n():e.onUpdateValue(c);break;case"R":case"G":case"B":c=Wl(s),c===!1?t.value=n():e.onUpdateValue(c);break}}return{mergedTheme:l,inputValue:t,handleInputChange:r,handleInputUpdateValue:a}},render(){const{mergedTheme:e}=this;return d(sl,{size:"small",placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Yl,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Jl=C({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,l){const{showAlpha:n}=e;if(e.mode==="hex"){e.onUpdateValue((n?ke:Ze)(l));return}let a;switch(e.valueArr===null?a=[0,0,0,0]:a=Array.from(e.valueArr),e.mode){case"hsv":a[t]=l,e.onUpdateValue((n?Me:mt)(a));break;case"rgb":a[t]=l,e.onUpdateValue((n?_e:bt)(a));break;case"hsl":a[t]=l,e.onUpdateValue((n?ye:pt)(a));break}}}},render(){const{clsPrefix:e,modes:t}=this;return d("div",{class:`${e}-color-picker-input`},d("div",{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),d(wl,null,{default:()=>{const{mode:l,valueArr:n,showAlpha:a}=this;if(l==="hex"){let r=null;try{r=n===null?null:(a?ke:Ze)(n)}catch{}return d(Rt,{label:"HEX",showAlpha:a,value:r,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(l+(a?"a":"")).split("").map((r,s)=>d(Rt,{label:r.toUpperCase(),value:n===null?null:n[s],onUpdateValue:c=>{this.handleUnitUpdateValue(s,c)}}))}}))}}),Ql=C({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){const{colorPickerSlots:t,renderLabelRef:l}=_t(yt,null);return()=>{const{hsla:n,value:a,clsPrefix:r,onClick:s,disabled:c}=e,p=t.label||l.value;return d("div",{class:[`${r}-color-picker-trigger`,c&&`${r}-color-picker-trigger--disabled`],onClick:c?void 0:s},d("div",{class:`${r}-color-picker-trigger__fill`},d("div",{class:`${r}-color-picker-checkboard`}),d("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:n?ye(n):""}}),a&&n?d("div",{class:`${r}-color-picker-trigger__value`,style:{color:n[2]>50||n[3]<.5?"black":"white"}},p?p(a):a):null))}}});function en(e,t){if(t==="hsv"){const[l,n,a,r]=Re(e);return _e([...we(l,n,a),r])}return e}function tn(e){const t=document.createElement("canvas").getContext("2d");return t.fillStyle=e,t.fillStyle}const on=C({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){const t=z(()=>e.swatches.map(r=>{const s=Xe(r);return{value:r,mode:s,legalValue:en(r,s)}}));function l(r){const{mode:s}=e;let{value:c,mode:p}=r;return p||(p="hex",/^[a-zA-Z]+$/.test(c)?c=tn(c):(So("color-picker",`color ${c} in swatches is invalid.`),c="#000000")),p===s?c:Qt(c,s,p)}function n(r){e.onUpdateColor(l(r))}function a(r,s){r.key==="Enter"&&n(s)}return{parsedSwatchesRef:t,handleSwatchSelect:n,handleSwatchKeyDown:a}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>d("div",{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:l=>{this.handleSwatchKeyDown(l,t)}},d("div",{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),ln=C({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{const t=Xe(e);return!!(!e||t&&t!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(l){var n;const a=l.target.value;(n=e.onUpdateColor)===null||n===void 0||n.call(e,Qt(a.toUpperCase(),e.mode,"hex")),l.stopPropagation()}return{handleChange:t}},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-color-picker-preview__preview`},d("span",{class:`${e}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),d("input",{class:`${e}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),nn=B([x("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),x("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[At(),x("input",`
 text-align: center;
 `)]),x("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[B("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),x("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[v("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),B("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),x("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[v("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),x("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[v("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[oe("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),x("color-picker-preview",`
 display: flex;
 `,[v("sliders",`
 flex: 1 0 auto;
 `),v("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),v("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),v("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),x("color-picker-input",`
 display: flex;
 align-items: center;
 `,[x("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),v("mode",`
 width: 72px;
 text-align: center;
 `)]),x("color-picker-control",`
 padding: 12px;
 `),x("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[x("button","margin-left: 8px;")]),x("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[v("value",`
 white-space: nowrap;
 position: relative;
 `),v("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),oe("disabled","cursor: not-allowed"),x("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[B("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),x("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[x("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[v("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),B("&:focus",`
 outline: none;
 `,[v("fill",[B("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),an=Object.assign(Object.assign({},Ce.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:ft.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),rn=C({name:"ColorPicker",props:an,setup(e,{slots:t}){const l=R(null);let n=null;const a=Ot(e),{mergedSizeRef:r,mergedDisabledRef:s}=a,{localeRef:c}=il("global"),{mergedClsPrefixRef:p,namespaceRef:m,inlineThemeDisabled:_}=Ye(e),g=Ce("ColorPicker","-color-picker",nn,$o,e,p);Pt(yt,{themeRef:g,renderLabelRef:Ve(e,"renderLabel"),colorPickerSlots:t});const f=R(e.defaultShow),S=tt(Ve(e,"show"),f);function M(u){const{onUpdateShow:F,"onUpdate:show":E}=e;F&&ze(F,u),E&&ze(E,u),f.value=u}const{defaultValue:J}=e,ne=R(J===void 0?Vl(e.modes,e.showAlpha):J),P=tt(Ve(e,"value"),ne),ie=R([P.value]),N=R(0),O=z(()=>Xe(P.value)),{modes:q}=e,U=R(Xe(P.value)||q[0]||"rgb");function ce(){const{modes:u}=e,{value:F}=U,E=u.findIndex(T=>T===F);~E?U.value=u[(E+1)%u.length]:U.value="rgb"}let w,H,Q,ee,X,Y,ae,Z;const he=z(()=>{const{value:u}=P;if(!u)return null;switch(O.value){case"hsv":return Re(u);case"hsl":return[w,H,Q,Z]=Le(u),[...Nt(w,H,Q),Z];case"rgb":case"hex":return[X,Y,ae,Z]=ge(u),[...ut(X,Y,ae),Z]}}),pe=z(()=>{const{value:u}=P;if(!u)return null;switch(O.value){case"rgb":case"hex":return ge(u);case"hsv":return[w,H,ee,Z]=Re(u),[...we(w,H,ee),Z];case"hsl":return[w,H,Q,Z]=Le(u),[...ht(w,H,Q),Z]}}),re=z(()=>{const{value:u}=P;if(!u)return null;switch(O.value){case"hsl":return Le(u);case"hsv":return[w,H,ee,Z]=Re(u),[...et(w,H,ee),Z];case"rgb":case"hex":return[X,Y,ae,Z]=ge(u),[...dt(X,Y,ae),Z]}}),lt=z(()=>{switch(U.value){case"rgb":case"hex":return pe.value;case"hsv":return he.value;case"hsl":return re.value}}),Ue=R(0),se=R(1),be=R([0,0]);function nt(u,F){const{value:E}=he,T=Ue.value,I=E?E[3]:1;be.value=[u,F];const{showAlpha:A}=e;switch(U.value){case"hsv":L((A?Me:mt)([T,u,F,I]),"cursor");break;case"hsl":L((A?ye:pt)([...et(T,u,F),I]),"cursor");break;case"rgb":L((A?_e:bt)([...we(T,u,F),I]),"cursor");break;case"hex":L((A?ke:Ze)([...we(T,u,F),I]),"cursor");break}}function at(u){Ue.value=u;const{value:F}=he;if(!F)return;const[,E,T,I]=F,{showAlpha:A}=e;switch(U.value){case"hsv":L((A?Me:mt)([u,E,T,I]),"cursor");break;case"rgb":L((A?_e:bt)([...we(u,E,T),I]),"cursor");break;case"hex":L((A?ke:Ze)([...we(u,E,T),I]),"cursor");break;case"hsl":L((A?ye:pt)([...et(u,E,T),I]),"cursor");break}}function rt(u){switch(U.value){case"hsv":[w,H,ee]=he.value,L(Me([w,H,ee,u]),"cursor");break;case"rgb":[X,Y,ae]=pe.value,L(_e([X,Y,ae,u]),"cursor");break;case"hex":[X,Y,ae]=pe.value,L(ke([X,Y,ae,u]),"cursor");break;case"hsl":[w,H,Q]=re.value,L(ye([w,H,Q,u]),"cursor");break}se.value=u}function L(u,F){F==="cursor"?n=u:n=null;const{nTriggerFormChange:E,nTriggerFormInput:T}=a,{onUpdateValue:I,"onUpdate:value":A}=e;I&&ze(I,u),A&&ze(A,u),E(),T(),ne.value=u}function je(u){L(u,"input"),Tt(de)}function de(u=!0){const{value:F}=P;if(F){const{nTriggerFormChange:E,nTriggerFormInput:T}=a,{onComplete:I}=e;I&&I(F);const{value:A}=ie,{value:te}=N;u&&(A.splice(te+1,A.length,F),N.value=te+1),E(),T()}}function ro(){const{value:u}=N;u-1<0||(L(ie.value[u-1],"input"),de(!1),N.value=u-1)}function so(){const{value:u}=N;u<0||u+1>=ie.value.length||(L(ie.value[u+1],"input"),de(!1),N.value=u+1)}function io(){L(null,"input"),M(!1)}function co(){const{value:u}=P,{onConfirm:F}=e;F&&F(u),M(!1)}const uo=z(()=>N.value>=1),ho=z(()=>{const{value:u}=ie;return u.length>1&&N.value<u.length-1});Ke(S,u=>{u||(ie.value=[P.value],N.value=0)}),vt(()=>{if(!(n&&n===P.value)){const{value:u}=he;u&&(Ue.value=u[0],se.value=u[3],be.value=[u[1],u[2]])}n=null});const st=z(()=>{const{value:u}=r,{common:{cubicBezierEaseInOut:F},self:{textColor:E,color:T,panelFontSize:I,boxShadow:A,border:te,borderRadius:G,dividerColor:Se,[ve("height",u)]:bo,[ve("fontSize",u)]:mo}}=g.value;return{"--n-bezier":F,"--n-text-color":E,"--n-color":T,"--n-panel-font-size":I,"--n-font-size":mo,"--n-box-shadow":A,"--n-border":te,"--n-border-radius":G,"--n-height":bo,"--n-divider-color":Se}}),me=_?ot("color-picker",z(()=>r.value[0]),st,e):void 0;function po(){var u;const{value:F}=pe,{value:E}=Ue,{internalActions:T,modes:I,actions:A}=e,{value:te}=g,{value:G}=p;return d("div",{class:[`${G}-color-picker-panel`,me==null?void 0:me.themeClass.value],onDragstart:Se=>{Se.preventDefault()},style:_?void 0:st.value},d("div",{class:`${G}-color-picker-control`},d(ql,{clsPrefix:G,rgba:F,displayedHue:E,displayedSv:be.value,onUpdateSV:nt,onComplete:de}),d("div",{class:`${G}-color-picker-preview`},d("div",{class:`${G}-color-picker-preview__sliders`},d(Nl,{clsPrefix:G,hue:E,onUpdateHue:at,onComplete:de}),e.showAlpha?d(jl,{clsPrefix:G,rgba:F,alpha:se.value,onUpdateAlpha:rt,onComplete:de}):null),e.showPreview?d(ln,{clsPrefix:G,mode:U.value,color:pe.value&&Ze(pe.value),onUpdateColor:Se=>{L(Se,"input")}}):null),d(Jl,{clsPrefix:G,showAlpha:e.showAlpha,mode:U.value,modes:I,onUpdateMode:ce,value:P.value,valueArr:lt.value,onUpdateValue:je}),((u=e.swatches)===null||u===void 0?void 0:u.length)&&d(on,{clsPrefix:G,mode:U.value,swatches:e.swatches,onUpdateColor:Se=>{L(Se,"input")}})),A!=null&&A.length?d("div",{class:`${G}-color-picker-action`},A.includes("confirm")&&d(Be,{size:"small",onClick:co,theme:te.peers.Button,themeOverrides:te.peerOverrides.Button},{default:()=>c.value.confirm}),A.includes("clear")&&d(Be,{size:"small",onClick:io,disabled:!P.value,theme:te.peers.Button,themeOverrides:te.peerOverrides.Button},{default:()=>c.value.clear})):null,t.action?d("div",{class:`${G}-color-picker-action`},{default:t.action}):T?d("div",{class:`${G}-color-picker-action`},T.includes("undo")&&d(Be,{size:"small",onClick:ro,disabled:!uo.value,theme:te.peers.Button,themeOverrides:te.peerOverrides.Button},{default:()=>c.value.undo}),T.includes("redo")&&d(Be,{size:"small",onClick:so,disabled:!ho.value,theme:te.peers.Button,themeOverrides:te.peerOverrides.Button},{default:()=>c.value.redo})):null)}return{mergedClsPrefix:p,namespace:m,selfRef:l,hsla:re,rgba:pe,mergedShow:S,mergedDisabled:s,isMounted:Vt(),adjustedTo:ft(e),mergedValue:P,handleTriggerClick(){M(!0)},handleClickOutside(u){var F;!((F=l.value)===null||F===void 0)&&F.contains(Do(u))||M(!1)},renderPanel:po,cssVars:_?void 0:st,themeClass:me==null?void 0:me.themeClass,onRender:me==null?void 0:me.onRender}},render(){const{$slots:e,mergedClsPrefix:t,onRender:l}=this;return l==null||l(),d("div",{class:[this.themeClass,`${t}-color-picker`],ref:"selfRef",style:this.cssVars},d(cl,null,{default:()=>[d(dl,null,{default:()=>d(Ql,{clsPrefix:t,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:e.label})}),d(ul,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===ft.tdkey,to:this.adjustedTo},{default:()=>d(Lt,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?xt(this.renderPanel(),[[Fo,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}}),sn=e=>{const{primaryColor:t,opacityDisabled:l,borderRadius:n,textColor3:a}=e,r="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},zo),{iconColor:a,textColor:"white",loadingColor:t,opacityDisabled:l,railColor:r,railColorActive:t,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 0 2px ${Bo(t,{alpha:.2})}`})},cn={name:"Switch",common:Ut,self:sn},dn=cn,un=x("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[v("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),v("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),v("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),x("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[St({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),v("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),v("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),v("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),B("&:focus",[v("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),oe("round",[v("rail","border-radius: calc(var(--n-rail-height) / 2);",[v("button","border-radius: calc(var(--n-button-height) / 2);")])]),$t("disabled",[$t("icon",[oe("rubber-band",[oe("pressed",[v("rail",[v("button","max-width: var(--n-button-width-pressed);")])]),v("rail",[B("&:active",[v("button","max-width: var(--n-button-width-pressed);")])]),oe("active",[oe("pressed",[v("rail",[v("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),v("rail",[B("&:active",[v("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),oe("active",[v("rail",[v("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),v("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[v("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[St()]),v("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),oe("active",[v("rail","background-color: var(--n-rail-color-active);")]),oe("loading",[v("rail",`
 cursor: wait;
 `)]),oe("disabled",[v("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),hn=Object.assign(Object.assign({},Ce.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let We;const Ct=C({name:"Switch",props:hn,setup(e){We===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?We=CSS.supports("width","max(1px)"):We=!1:We=!0);const{mergedClsPrefixRef:t,inlineThemeDisabled:l}=Ye(e),n=Ce("Switch","-switch",un,dn,e,t),a=Ot(e),{mergedSizeRef:r,mergedDisabledRef:s}=a,c=R(e.defaultValue),p=Ve(e,"value"),m=tt(p,c),_=z(()=>m.value===e.checkedValue),g=R(!1),f=R(!1),S=z(()=>{const{railStyle:w}=e;if(w)return w({focused:f.value,checked:_.value})});function M(w){const{"onUpdate:value":H,onChange:Q,onUpdateValue:ee}=e,{nTriggerFormInput:X,nTriggerFormChange:Y}=a;H&&ze(H,w),ee&&ze(ee,w),Q&&ze(Q,w),c.value=w,X(),Y()}function J(){const{nTriggerFormFocus:w}=a;w()}function ne(){const{nTriggerFormBlur:w}=a;w()}function P(){e.loading||s.value||(m.value!==e.checkedValue?M(e.checkedValue):M(e.uncheckedValue))}function ie(){f.value=!0,J()}function N(){f.value=!1,ne(),g.value=!1}function O(w){e.loading||s.value||w.key===" "&&(m.value!==e.checkedValue?M(e.checkedValue):M(e.uncheckedValue),g.value=!1)}function q(w){e.loading||s.value||w.key===" "&&(w.preventDefault(),g.value=!0)}const U=z(()=>{const{value:w}=r,{self:{opacityDisabled:H,railColor:Q,railColorActive:ee,buttonBoxShadow:X,buttonColor:Y,boxShadowFocus:ae,loadingColor:Z,textColor:he,iconColor:pe,[ve("buttonHeight",w)]:re,[ve("buttonWidth",w)]:lt,[ve("buttonWidthPressed",w)]:Ue,[ve("railHeight",w)]:se,[ve("railWidth",w)]:be,[ve("railBorderRadius",w)]:nt,[ve("buttonBorderRadius",w)]:at},common:{cubicBezierEaseInOut:rt}}=n.value;let L,je,de;return We?(L=`calc((${se} - ${re}) / 2)`,je=`max(${se}, ${re})`,de=`max(${be}, calc(${be} + ${re} - ${se}))`):(L=it((fe(se)-fe(re))/2),je=it(Math.max(fe(se),fe(re))),de=fe(se)>fe(re)?be:it(fe(be)+fe(re)-fe(se))),{"--n-bezier":rt,"--n-button-border-radius":at,"--n-button-box-shadow":X,"--n-button-color":Y,"--n-button-width":lt,"--n-button-width-pressed":Ue,"--n-button-height":re,"--n-height":je,"--n-offset":L,"--n-opacity-disabled":H,"--n-rail-border-radius":nt,"--n-rail-color":Q,"--n-rail-color-active":ee,"--n-rail-height":se,"--n-rail-width":be,"--n-width":de,"--n-box-shadow-focus":ae,"--n-loading-color":Z,"--n-text-color":he,"--n-icon-color":pe}}),ce=l?ot("switch",z(()=>r.value[0]),U,e):void 0;return{handleClick:P,handleBlur:N,handleFocus:ie,handleKeyup:O,handleKeydown:q,mergedRailStyle:S,pressed:g,mergedClsPrefix:t,mergedValue:m,checked:_,mergedDisabled:s,cssVars:l?void 0:U,themeClass:ce==null?void 0:ce.themeClass,onRender:ce==null?void 0:ce.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:t,checked:l,mergedRailStyle:n,onRender:a,$slots:r}=this;a==null||a();const{checked:s,unchecked:c,icon:p,"checked-icon":m,"unchecked-icon":_}=r,g=!(ct(p)&&ct(m)&&ct(_));return d("div",{role:"switch","aria-checked":l,class:[`${e}-switch`,this.themeClass,g&&`${e}-switch--icon`,l&&`${e}-switch--active`,t&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},d("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:n},$e(s,f=>$e(c,S=>f||S?d("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),f),d("div",{class:`${e}-switch__rail-placeholder`},d("div",{class:`${e}-switch__button-placeholder`}),S)):null)),d("div",{class:`${e}-switch__button`},$e(p,f=>$e(m,S=>$e(_,M=>d(Mo,null,{default:()=>this.loading?d(Ro,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(S||f)?d("div",{class:`${e}-switch__button-icon`,key:S?"checked-icon":"icon"},S||f):!this.checked&&(M||f)?d("div",{class:`${e}-switch__button-icon`,key:M?"unchecked-icon":"icon"},M||f):null})))),$e(s,f=>f&&d("div",{key:"checked",class:`${e}-switch__checked`},f)),$e(c,f=>f&&d("div",{key:"unchecked",class:`${e}-switch__unchecked`},f)))))}});function eo(){const e=He(),t=W(),l=Uo(Ao),n=z(()=>{const _="vertical",g="horizontal";return t.layout.mode.includes(_)?_:g}),a=l.smaller("sm"),r={vertical:{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!0},"vertical-mix":{showLogo:!1,showHeaderMenu:!1,showMenuCollapse:!1},horizontal:{showLogo:!0,showHeaderMenu:!0,showMenuCollapse:!1},"horizontal-mix":{showLogo:!0,showHeaderMenu:!1,showMenuCollapse:!0}},s=z(()=>r[t.layout.mode]),c=z(()=>t.layout.mode!=="horizontal"),p=z(()=>{const{width:_,mixWidth:g,mixChildMenuWidth:f}=t.sider,S=t.layout.mode==="vertical-mix";let M=S?g:_;return S&&e.mixSiderFixed&&(M+=f),M}),m=z(()=>{const{collapsedWidth:_,mixCollapsedWidth:g,mixChildMenuWidth:f}=t.sider,S=t.layout.mode==="vertical-mix";let M=S?g:_;return S&&e.mixSiderFixed&&(M+=f),M});return Ke(a,_=>{_&&e.setSiderCollapse(!0)},{immediate:!0}),{mode:n,isMobile:a,headerProps:s,siderVisible:c,siderWidth:p,siderCollapsedWidth:m}}function pn(e,t,l){return bn(e,t).map(r=>oo(r,l))}function bn(e,t){const l=[],n=Vo(e,t),a=n?to(e,n):[];return l.push(...a),l}function to(e,t){const l=[];return e===t.routeName&&l.push(t),e.includes(t.routeName)&&t.children&&t.children.length&&(l.push(t),l.push(...t.children.map(n=>to(e,n)).flat(1))),l}function oo(e,t){var a;const l=!!(e.children&&e.children.length),n={key:e.routeName,label:e.label,routeName:e.routeName,disabled:e.routePath===t,hasChildren:l,i18nTitle:e.i18nTitle};return e.icon&&(n.icon=e.icon),l&&(n.options=(a=e.children)==null?void 0:a.map(r=>oo(r,t))),n}const mn=[{label:"红色系",data:[{label:"绾",color:"#A98175"},{label:"檀",color:"#B36D61"},{label:"栗色",color:"#60281E"},{label:"玄",color:"#622A1D"},{label:"胭脂",color:"#9D2933"},{label:"殷红",color:"#BE002F"},{label:"枣红",color:"#C32136"},{label:"赤",color:"#C3272B"},{label:"绯红",color:"#C83C23"},{label:"赫赤",color:"#C91F37"},{label:"樱桃红",color:"#C93756"},{label:"茜色",color:"#CB3A56"},{label:"海棠红",color:"#DB5A6B"},{label:"酡红",color:"#DC3023"},{label:"妃色",color:"#ED5736"},{label:"嫣红",color:"#EF7A82"},{label:"品红",color:"#F00056"},{label:"石榴红",color:"#F20C00"},{label:"银红",color:"#F05654"},{label:"彤",color:"#F35336"},{label:"桃红",color:"#F47983"},{label:"酡颜",color:"#F9906F"},{label:"洋红",color:"#FF0097"},{label:"大红",color:"#FF2121"},{label:"火红",color:"#FF2D51"},{label:"炎",color:"#FF3300"},{label:"朱红",color:"#FF4C00"},{label:"丹",color:"#FF4E20"},{label:"粉红",color:"#FFB3A7"},{label:"藕荷",color:"#E4C6D0"},{label:"藕",color:"#EDD1D8"},{label:"水红",color:"#F3D3E7"},{label:"鱼肚白",color:"#FCEFE8"}]},{label:"橙色系",data:[{label:"褐色",color:"#6E511E"},{label:"棕黑",color:"#7C4B00"},{label:"赭色",color:"#955539"},{label:"棕红",color:"#9B4400"},{label:"赭",color:"#9C5333"},{label:"驼色",color:"#A88462"},{label:"棕色",color:"#B25D25"},{label:"茶色",color:"#B35C44"},{label:"琥珀",color:"#CA6924"},{label:"黄栌",color:"#E29C45"},{label:"橙色",color:"#FA8C35"},{label:"橘红",color:"#FF7500"},{label:"橘黄",color:"#FF8936"},{label:"杏红",color:"#FF8C31"},{label:"橙黄",color:"#FFA400"},{label:"杏黄",color:"#FFA631"},{label:"姜黄",color:"#FFC773"}]},{label:"黄色系",data:[{label:"黧",color:"#5D513C"},{label:"黎",color:"#75664D"},{label:"棕绿",color:"#827100"},{label:"秋色",color:"#896C39"},{label:"苍黄",color:"#A29B7C"},{label:"乌金",color:"#A78E44"},{label:"棕黄",color:"#AE7000"},{label:"昏黄",color:"#C89B40"},{label:"枯黄",color:"#D3B17D"},{label:"秋香色",color:"#D9B611"},{label:"金",color:"#EACD76"},{label:"牙",color:"#EEDEB0"},{label:"缃色",color:"#F0C239"},{label:"赤金",color:"#F2BE45"},{label:"鸭黄",color:"#FAFF72"},{label:"鹅黄",color:"#FFF143"},{label:"缟",color:"#F2ECDE"},{label:"象牙白",color:"#FFFBF0"}]},{label:"绿色系",data:[{label:"竹青",color:"#789262"},{label:"黯",color:"#41555D"},{label:"黛绿",color:"#426666"},{label:"松花绿",color:"#057748"},{label:"绿沈",color:"#0C8918"},{label:"深绿",color:"#009900"},{label:"青葱",color:"#0AA344"},{label:"铜绿",color:"#549688"},{label:"苍翠",color:"#519A73"},{label:"松柏绿",color:"#21A675"},{label:"葱青",color:"#0EB83A"},{label:"油绿",color:"#00BC12"},{label:"绿",color:"#00E500"},{label:"草绿",color:"#40DE5A"},{label:"豆青",color:"#96CE54"},{label:"豆绿",color:"#9ED048"},{label:"葱绿",color:"#9ED900"},{label:"葱黄",color:"#A3D900"},{label:"柳绿",color:"#AFDD22"},{label:"嫩绿",color:"#BDDD22"},{label:"柳黄",color:"#C9DD22"},{label:"松花",color:"#BCE672"},{label:"樱草色",color:"#EAFF56"}]},{label:"青色系",data:[{label:"水",color:"#88ADA6"},{label:"青碧",color:"#48C0A3"},{label:"碧",color:"#1BD1A5"},{label:"石青",color:"#7BCFA6"},{label:"青翠",color:"#00E079"},{label:"青",color:"#00E09E"},{label:"碧绿",color:"#2ADD9C"},{label:"玉",color:"#2EDFA3"},{label:"翡翠",color:"#3DE1AD"},{label:"缥",color:"#7FECAD"},{label:"碧蓝",color:"#3EEDE7"},{label:"湖绿",color:"#25F8CD"},{label:"艾绿",color:"#A4E2C6"},{label:"青白",color:"#C0EBD7"},{label:"水绿",color:"#D4F2E7"},{label:"鸭卵青",color:"#E0EEE8"},{label:"素",color:"#E0F0E9"},{label:"荼白",color:"#F3F9F1"}]},{label:"蓝色系",data:[{label:"藏蓝",color:"#3B2E7E"},{label:"宝蓝",color:"#4B5CC4"},{label:"绀青",color:"#003371"},{label:"藏青",color:"#2E4E7E"},{label:"靛蓝",color:"#065279"},{label:"靛青",color:"#177CB0"},{label:"群青",color:"#4C8DAE"},{label:"蓝",color:"#44CEF6"},{label:"湖蓝",color:"#30DFF3"},{label:"蔚蓝",color:"#70F3FF"},{label:"月白",color:"#D6ECF0"},{label:"水蓝",color:"#D2F0F4"},{label:"莹白",color:"#E3F9FD"},{label:"雪白",color:"#F0FCFF"}]},{label:"紫色系",data:[{label:"黛",color:"#4A4266"},{label:"紫檀",color:"#4C211B"},{label:"紫棠",color:"#56004F"},{label:"黛紫",color:"#574266"},{label:"绛紫",color:"#8C4356"},{label:"紫酱",color:"#815463"},{label:"酱紫",color:"#815476"},{label:"黝",color:"#6B6882"},{label:"青莲",color:"#801DAE"},{label:"紫",color:"#8D4BBB"},{label:"雪青",color:"#B0A4E3"},{label:"丁香",color:"#CCA4E3"}]},{label:"灰色系",data:[{label:"黑",color:"#000000"},{label:"漆黑",color:"#161823"},{label:"象牙黑",color:"#312520"},{label:"乌黑",color:"#392F41"},{label:"玄青",color:"#3D3B4F"},{label:"缁",color:"#493131"},{label:"黝黑",color:"#665757"},{label:"鸦青",color:"#424C50"},{label:"黛蓝",color:"#425066"},{label:"苍黑",color:"#395260"},{label:"墨",color:"#50616D"},{label:"灰",color:"#808080"},{label:"苍",color:"#75878A"},{label:"墨灰",color:"#758A99"},{label:"苍青",color:"#7397AB"},{label:"蓝灰",color:"#A1AFC9"},{label:"老银",color:"#BACAC6"},{label:"蟹壳青",color:"#BBCDC5"},{label:"苍白",color:"#D1D9E0"},{label:"淡青",color:"#D3E0F3"},{label:"银白",color:"#E9E7EF"},{label:"霜",color:"#E9F1F6"},{label:"铅白",color:"#F0F0F4"},{label:"精白",color:"#FFFFFF"}]}],lo=mn;function fn(e){return lo.some(t=>t.data.some(n=>n.color===e))}const vn={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"};function gn(e,t){return b(),$("svg",vn,t[0]||(t[0]=[k("path",{fill:"currentColor",d:"m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"},null,-1)]))}const no={name:"ant-design-setting-outlined",render:gn},_n={class:"inline-block",viewBox:"0 0 1024 1024",width:"1em",height:"1em"};function xn(e,t){return b(),$("svg",_n,t[0]||(t[0]=[k("path",{fill:"currentColor","fill-rule":"evenodd",d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"},null,-1)]))}const wn={name:"ant-design-close-outlined",render:xn},kn=C({name:"DrawerButton",__name:"index",setup(e){const t=He();return(l,n)=>{const a=wn,r=no,s=Be;return b(),D(s,{type:"primary",class:Pe([[{"!right-330px":o(t).settingDrawerVisible},o(t).settingDrawerVisible?"ease-out":"ease-in"],"fixed top-360px right-14px z-10000 w-42px h-42px !p-0 transition-all duration-300"]),onClick:o(t).toggleSettingDrawerVisible},{default:h(()=>[o(t).settingDrawerVisible?(b(),D(a,{key:0,class:"text-24px"})):(b(),D(r,{key:1,class:"text-24px"}))]),_:1},8,["class","onClick"])}}}),yn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function Cn(e,t){return b(),$("svg",yn,t[0]||(t[0]=[k("path",{fill:"currentColor",d:"M12.04 8.04h-.09l-1.6 4.55h3.29z"},null,-1),k("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm3 14.41l-.78-2.22H9.78l-.79 2.22c-.12.35-.46.59-.83.59a.887.887 0 0 1-.83-1.2l3.34-8.88a1.42 1.42 0 0 1 2.66 0l3.34 8.88c.22.58-.21 1.2-.83 1.2c-.38 0-.72-.24-.84-.59z"},null,-1)]))}const Sn={name:"ic-round-hdr-auto",render:Cn},$n={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function Dn(e,t){return b(),$("svg",$n,t[0]||(t[0]=[k("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8c0-1.85.63-3.55 1.69-4.9L16.9 18.31A7.902 7.902 0 0 1 12 20zm6.31-3.1L7.1 5.69A7.902 7.902 0 0 1 12 4c4.42 0 8 3.58 8 8c0 1.85-.63 3.55-1.69 4.9z"},null,-1)]))}const Fn={name:"ic-baseline-do-not-disturb",render:Dn},zn={class:"flex-y-center justify-between"},V=C({name:"SettingMenu",__name:"index",props:{label:{}},setup(e){return(t,l)=>(b(),$("div",zn,[k("span",null,K(t.label),1),jt(t.$slots,"default")]))}}),Bn=C({name:"DarkMode",__name:"index",setup(e){const t=W();return(l,n)=>{const a=Ie,r=el,s=tl,c=Ct,p=Fn,m=Sn,_=Ne;return b(),$(j,null,[i(a,{"title-placement":"center"},{default:h(()=>[ue(K(o(y)("layout.settingDrawer.themeModeTitle")),1)]),_:1}),i(_,{vertical:"",size:"large"},{default:h(()=>[i(V,{label:o(y)("layout.settingDrawer.darkMode")},{default:h(()=>[i(c,{value:o(t).darkMode,"onUpdate:value":o(t).setDarkMode},{checked:h(()=>[i(r,{class:"text-14px text-white"})]),unchecked:h(()=>[i(s,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.followSystemTheme")},{default:h(()=>[i(c,{value:o(t).followSystemTheme,"onUpdate:value":o(t).setFollowSystemTheme},{checked:h(()=>[i(p,{class:"text-14px text-white"})]),unchecked:h(()=>[i(m,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.isCustomizeDarkModeTransition")},{default:h(()=>[i(c,{value:o(t).isCustomizeDarkModeTransition,"onUpdate:value":o(t).setIsCustomizeDarkModeTransition},{checked:h(()=>[i(p,{class:"text-14px text-white"})]),unchecked:h(()=>[i(m,{class:"text-14px text-white"})]),_:1},8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.sider.inverted")},{default:h(()=>[i(c,{value:o(t).sider.inverted,"onUpdate:value":o(t).setSiderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.header.inverted")},{default:h(()=>[i(c,{value:o(t).header.inverted,"onUpdate:value":o(t).setHeaderInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.footer.inverted")},{default:h(()=>[i(c,{value:o(t).footer.inverted,"onUpdate:value":o(t).setFooterInverted},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Mn=C({name:"LayoutCard",__name:"layout-card",props:{mode:{},label:{},checked:{type:Boolean}},setup(e){const t=e,l={vertical:{placement:"bottom-start",headerClass:"",menuClass:"w-1/3 h-full",mainClass:"w-2/3 h-3/4"},"vertical-mix":{placement:"bottom",headerClass:"",menuClass:"w-1/4 h-full",mainClass:"w-2/3 h-3/4"},horizontal:{placement:"bottom",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-full h-3/4"},"horizontal-mix":{placement:"bottom-end",headerClass:"",menuClass:"w-full h-1/4",mainClass:"w-2/3 h-3/4"}},n=z(()=>l[t.mode]);return(a,r)=>{const s=ll;return b(),$("div",{class:Pe(["border-2px rounded-6px cursor-pointer hover:border-primary",[a.checked?"border-primary":"border-transparent"]])},[i(s,{placement:n.value.placement,trigger:"hover"},{trigger:h(()=>[k("div",{class:Pe(["layout-card__shadow gap-6px w-96px h-64px p-6px rd-4px",[a.mode.includes("vertical")?"flex":"flex-col"]])},[jt(a.$slots,"default",{},void 0,!0)],2)]),default:h(()=>[k("span",null,K(a.label),1)]),_:3},8,["placement"])],2)}}}),Rn=kt(Mn,[["__scopeId","data-v-a7b399d6"]]),xe=e=>(Lo("data-v-94546788"),e=e(),Eo(),e),Un=xe(()=>k("div",{class:"w-18px h-full bg-primary:50 rd-4px"},null,-1)),An=xe(()=>k("div",{class:"flex-1 flex-col gap-6px"},[k("div",{class:"h-16px bg-primary rd-4px"}),k("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Vn=xe(()=>k("div",{class:"w-8px h-full bg-primary:50 rd-4px"},null,-1)),Ln=xe(()=>k("div",{class:"w-16px h-full bg-primary:50 rd-4px"},null,-1)),En=xe(()=>k("div",{class:"flex-1 flex-col gap-6px"},[k("div",{class:"h-16px bg-primary rd-4px"}),k("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Tn=xe(()=>k("div",{class:"h-16px bg-primary rd-4px"},null,-1)),Pn=xe(()=>k("div",{class:"flex-1 flex gap-6px"},[k("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Hn=xe(()=>k("div",{class:"h-16px bg-primary rd-4px"},null,-1)),In=xe(()=>k("div",{class:"flex-1 flex gap-6px"},[k("div",{class:"w-18px bg-primary:50 rd-4px"}),k("div",{class:"flex-1 bg-primary:25 rd-4px"})],-1)),Nn=C({name:"LayoutMode",__name:"index",setup(e){const t=W();return(l,n)=>{const a=Ie,r=Ne;return b(),$(j,null,[i(a,{"title-placement":"center"},{default:h(()=>[ue(K(o(y)("layout.settingDrawer.layoutModelTitle")),1)]),_:1}),i(r,{justify:"space-around",wrap:!0,size:24,class:"px-12px"},{default:h(()=>[(b(!0),$(j,null,Ge(o(t).layout.modeList,s=>(b(),D(o(Rn),{key:s.value,mode:s.value,label:s.label,checked:s.value===o(t).layout.mode,onClick:c=>o(t).setLayoutMode(s.value)},{default:h(()=>[s.value==="vertical"?(b(),$(j,{key:0},[Un,An],64)):le("",!0),s.value==="vertical-mix"?(b(),$(j,{key:1},[Vn,Ln,En],64)):le("",!0),s.value==="horizontal"?(b(),$(j,{key:2},[Tn,Pn],64)):le("",!0),s.value==="horizontal-mix"?(b(),$(j,{key:3},[Hn,In],64)):le("",!0)]),_:2},1032,["mode","label","checked","onClick"]))),128))]),_:1})],64)}}}),On=kt(Nn,[["__scopeId","data-v-94546788"]]),jn={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function qn(e,t){return b(),$("svg",jn,t[0]||(t[0]=[k("path",{fill:"currentColor",d:"M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"},null,-1)]))}const Wn={name:"ic-outline-check",render:qn},ao=C({name:"ColorCheckbox",__name:"color-checkbox",props:{color:{},checked:{type:Boolean},iconClass:{default:"text-14px"}},setup(e){const t=e,l=["#ffffff","#fff","rgb(255,255,255)"],n=z(()=>l.includes(t.color));return(a,r)=>{const s=Wn;return b(),$("div",{class:"flex-center w-20px h-20px rounded-2px shadow cursor-pointer",style:qt({backgroundColor:a.color})},[a.checked?(b(),D(s,{key:0,class:Pe([a.iconClass,n.value?"text-gray-700":"text-white"])},null,8,["class"])):le("",!0)],4)}}}),Zn={class:"flex-x-center"},Kn={class:"text-center"},Gn=C({name:"ColorModal",__name:"color-modal",props:{visible:{type:Boolean}},emits:["close"],setup(e,{emit:t}){const l=W();function n(){t("close")}return(a,r)=>{const s=nl,c=Gt,p=Xt,m=al,_=rl,g=To;return b(),D(g,{show:a.visible,preset:"card",class:"w-640px h-480px","z-index":10001,onClose:n},{default:h(()=>[k("div",Zn,[i(s,{type:"primary",size:24},{default:h(()=>[ue("中国传统颜色")]),_:1})]),i(_,null,{default:h(()=>[(b(!0),$(j,null,Ge(o(lo),f=>(b(),D(m,{key:f.label,name:f.label,tab:f.label},{default:h(()=>[i(p,{cols:8,"x-gap":16,"y-gap":8},{default:h(()=>[(b(!0),$(j,null,Ge(f.data,S=>(b(),D(c,{key:S.label},{default:h(()=>[i(ao,{class:"!w-full !h-36px !rounded-4px",color:S.color,checked:S.color===o(l).themeColor,"icon-class":"text-20px",onClick:M=>o(l).setThemeColor(S.color)},null,8,["color","checked","onClick"]),k("p",Kn,K(S.label),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["name","tab"]))),128))]),_:1})]),_:1},8,["show"])}}}),Xn=C({name:"ThemeColorSelect",__name:"index",setup(e){const t=W(),{bool:l,setTrue:n,setFalse:a}=Po(),r=z(()=>fn(t.themeColor)),s=z(()=>r.value?"primary":"default");return(c,p)=>{const m=Ie,_=Gt,g=Xt,f=rn,S=Be,M=Ne;return b(),$(j,null,[i(m,{"title-placement":"center"},{default:h(()=>[ue(K(o(y)("layout.settingDrawer.systemThemeTitle")),1)]),_:1}),i(g,{cols:8,"x-gap":8,"y-gap":12},{default:h(()=>[(b(!0),$(j,null,Ge(o(t).themeColorList,J=>(b(),D(_,{key:J,class:"flex-x-center"},{default:h(()=>[i(o(ao),{color:J,checked:J===o(t).themeColor,onClick:ne=>o(t).setThemeColor(J)},null,8,["color","checked","onClick"])]),_:2},1024))),128))]),_:1}),i(M,{vertical:!0,class:"pt-12px"},{default:h(()=>[i(f,{value:o(t).themeColor,"show-alpha":!1,onUpdateValue:o(t).setThemeColor},null,8,["value","onUpdateValue"]),i(S,{block:!0,type:s.value,onClick:o(n)},{default:h(()=>[ue(K(o(y)("layout.settingDrawer.systemTheme.moreColors")),1)]),_:1},8,["type","onClick"])]),_:1}),i(o(Gn),{visible:o(l),onClose:o(a)},null,8,["visible","onClose"])],64)}}}),Yn=C({name:"PageFunc",__name:"index",setup(e){const t=W();return(l,n)=>{const a=Ie,r=Kt,s=Ct,c=hl,p=Ne;return b(),$(j,null,[i(a,{"title-placement":"center"},{default:h(()=>[ue(K(o(y)("layout.settingDrawer.pageFunctionsTitle")),1)]),_:1}),i(p,{vertical:"",size:"large"},{default:h(()=>[i(V,{label:o(y)("layout.settingDrawer.scrollMode")},{default:h(()=>[i(r,{class:"w-120px",size:"small",value:o(t).scrollMode,options:o(t).scrollModeList,"onUpdate:value":o(t).setScrollMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.fixedHeaderAndTab")},{default:h(()=>[i(s,{value:o(t).fixedHeaderAndTab,"onUpdate:value":o(t).setIsFixedHeaderAndTab},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.menu.horizontalPosition")},{default:h(()=>[i(r,{class:"w-120px",size:"small",value:o(t).menu.horizontalPosition,options:o(t).menu.horizontalPositionList,"onUpdate:value":o(t).setHorizontalMenuPosition},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.header.height")},{default:h(()=>[i(c,{class:"w-120px",size:"small",value:o(t).header.height,step:1,"onUpdate:value":o(t).setHeaderHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.tab.height")},{default:h(()=>[i(c,{class:"w-120px",size:"small",value:o(t).tab.height,step:1,"onUpdate:value":o(t).setTabHeight},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.tab.isCache")},{default:h(()=>[i(s,{value:o(t).tab.isCache,"onUpdate:value":o(t).setTabIsCache},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.sider.width")},{default:h(()=>[i(c,{class:"w-120px",size:"small",value:o(t).sider.width,step:10,"onUpdate:value":o(t).setSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.sider.mixWidth")},{default:h(()=>[i(c,{class:"w-120px",size:"small",value:o(t).sider.mixWidth,step:5,"onUpdate:value":o(t).setMixSiderWidth},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.footer.visible")},{default:h(()=>[i(s,{value:o(t).footer.visible,"onUpdate:value":o(t).setFooterVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.footer.fixed")},{default:h(()=>[i(s,{value:o(t).footer.fixed,"onUpdate:value":o(t).setFooterIsFixed},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.footer.right")},{default:h(()=>[i(s,{value:o(t).footer.right,"onUpdate:value":o(t).setFooterIsRight},null,8,["value","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Jn=C({name:"PageView",__name:"index",setup(e){const t=W();return(l,n)=>{const a=Ie,r=Ct,s=Kt,c=Ne;return b(),$(j,null,[i(a,{"title-placement":"center"},{default:h(()=>[ue(K(o(y)("layout.settingDrawer.pageViewTitle")),1)]),_:1}),i(c,{vertical:"",size:"large"},{default:h(()=>[i(V,{label:o(y)("layout.settingDrawer.header.crumb.visible")},{default:h(()=>[i(r,{value:o(t).header.crumb.visible,"onUpdate:value":o(t).setHeaderCrumbVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.header.crumb.icon")},{default:h(()=>[i(r,{value:o(t).header.crumb.showIcon,"onUpdate:value":o(t).setHeaderCrumbIconVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.tab.visible")},{default:h(()=>[i(r,{value:o(t).tab.visible,"onUpdate:value":o(t).setTabVisible},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.tab.modeList.mode")},{default:h(()=>[i(s,{class:"w-120px",size:"small",value:o(t).tab.mode,options:o(t).tab.modeList,"onUpdate:value":o(t).setTabMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.page.animate")},{default:h(()=>[i(r,{value:o(t).page.animate,"onUpdate:value":o(t).setPageIsAnimate},null,8,["value","onUpdate:value"])]),_:1},8,["label"]),i(V,{label:o(y)("layout.settingDrawer.page.animateMode")},{default:h(()=>[i(s,{class:"w-120px",size:"small",value:o(t).page.animateMode,options:o(t).page.animateModeList,"onUpdate:value":o(t).setPageAnimateMode},null,8,["value","options","onUpdate:value"])]),_:1},8,["label"])]),_:1})],64)}}}),Qn=C({name:"ThemeConfig",__name:"index",setup(e){const t=W(),l=R(),n=R(a());function a(){return JSON.stringify(t.$state)}function r(){var p;t.resetThemeStore(),(p=window.$message)==null||p.success(y("layout.settingDrawer.themeConfiguration.resetSuccess"))}const s=Ke(()=>t.$state,()=>{n.value=a()},{deep:!0}),c=()=>{const p={system_theme_setting:n.value};saveSettings(p).then(()=>{var m;(m=window.$message)==null||m.success("保存成功"),setTimeout(()=>{window.location.reload()},700)})};return gt(()=>{}),It(()=>{s()}),(p,m)=>{const _=Ie,g=Be,f=Ne;return b(),$(j,null,[i(_,{"title-placement":"center"},{default:h(()=>[ue(K(o(y)("layout.settingDrawer.themeConfiguration.title")),1)]),_:1}),xt(k("textarea",{id:"themeConfigCopyTarget","onUpdate:modelValue":m[0]||(m[0]=S=>n.value=S),class:"absolute opacity-0"},null,512),[[Ho,n.value]]),i(f,{vertical:""},{default:h(()=>[k("div",{ref_key:"copyRef",ref:l,"data-clipboard-target":"#themeConfigCopyTarget"},[i(g,{type:"primary",block:!0,onClick:c},{default:h(()=>[ue(K(o(y)("layout.settingDrawer.themeConfiguration.save")),1)]),_:1})],512),i(g,{type:"warning",block:!0,onClick:r},{default:h(()=>[ue(K(o(y)("layout.settingDrawer.themeConfiguration.reset")),1)]),_:1})]),_:1})],64)}}}),ea=C({name:"SettingDrawer",__name:"index",setup(e){const t=He(),l={}.VITE_VERCEL==="Y";return(n,a)=>{const r=pl,s=bl;return b(),$(j,null,[i(s,{show:o(t).settingDrawerVisible,"display-directive":"show",width:330,onMaskClick:o(t).closeSettingDrawer},{default:h(()=>[i(r,{title:o(y)("layout.settingDrawer.title"),"native-scrollbar":!1},{default:h(()=>[i(o(Bn)),i(o(On)),i(o(Xn)),i(o(Yn)),i(o(Jn)),i(o(Qn))]),_:1},8,["title"])]),_:1},8,["show","onMaskClick"]),o(l)?(b(),D(o(kn),{key:0})):le("",!0)],64)}}}),ta=C({name:"GlobalLogo",__name:"index",props:{showTitle:{type:Boolean}},setup(e){const t=Wt("root");return(l,n)=>{const a=Oo,r=Io("router-link");return b(),D(r,{to:o(t),class:"flex-center w-full nowrap-hidden"},{default:h(()=>[i(a,{class:"text-32px text-primary"}),xt(k("h2",{class:"pl-8px text-16px font-bold text-primary transition duration-300 ease-in-out"},K(o(y)("system.title")),513),[[No,l.showTitle]])]),_:1},8,["to"])}}}),oa={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function la(e,t){return b(),$("svg",oa,t[0]||(t[0]=[Zt('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M7 9L4 12L7 15"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M19 12H10"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="16;0"></animate></path></g>',1)]))}const na={name:"line-md-menu-fold-left",render:la},aa={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function ra(e,t){return b(),$("svg",aa,t[0]||(t[0]=[Zt('<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-dasharray="10" stroke-dashoffset="10" d="M21 9L18 12L21 15"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 5H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="16;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M14 12H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="12;0"></animate></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M19 19H5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="16;0"></animate></path></g>',1)]))}const sa={name:"line-md-menu-unfold-left",render:ra},ia=C({name:"MenuCollapse",__name:"menu-collapse",setup(e){const t=He(),l=W();return(n,a)=>{const r=sa,s=na,c=Oe;return b(),D(c,{class:"w-40px h-full",inverted:o(l).header.inverted,onClick:o(t).toggleSiderCollapse},{default:h(()=>[o(t).siderCollapse?(b(),D(r,{key:0,class:"text-16px"})):(b(),D(s,{key:1,class:"text-16px"}))]),_:1},8,["inverted","onClick"])}}}),ca=C({name:"GlobalBreadcrumb",__name:"global-breadcrumb",setup(e){const t=jo(),l=W(),n=qo(),{routerPush:a}=Wo(),r=z(()=>pn(t.name,n.menus,Wt("root")).map(c=>{var p;return{...c,label:c.i18nTitle?y(c.i18nTitle):c.label,options:(p=c.options)==null?void 0:p.map(m=>({...m,label:m.i18nTitle?y(m.i18nTitle):m.label}))}}));function s(c){a({name:c})}return(c,p)=>{const m=wt,_=Al,g=Ml;return b(),D(g,{class:"px-12px"},{default:h(()=>[(b(!0),$(j,null,Ge(r.value,f=>(b(),D(_,{key:f.key},{default:h(()=>[f.hasChildren?(b(),D(m,{key:0,options:f.options,onSelect:s},{default:h(()=>[k("span",null,[o(l).header.crumb.showIcon?(b(),D(Dt(f.icon),{key:0,class:"inline-block align-text-bottom mr-4px text-16px"})):le("",!0),k("span",null,K(f.label),1)])]),_:2},1032,["options"])):(b(),$(j,{key:1},[o(l).header.crumb.showIcon?(b(),D(Dt(f.icon),{key:0,class:Pe(["inline-block align-text-bottom mr-4px text-16px",{"text-#BBBBBB":o(l).header.inverted}])},null,8,["class"])):le("",!0),k("span",{class:Pe({"text-#BBBBBB":o(l).header.inverted})},K(f.label),3)],64))]),_:2},1024))),128))]),_:1})}}}),da={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function ua(e,t){return b(),$("svg",da,t[0]||(t[0]=[k("path",{fill:"currentColor",d:"M21 3v6h-2V6.41l-3.29 3.3l-1.42-1.42L17.59 5H15V3zM3 3v6h2V6.41l3.29 3.3l1.42-1.42L6.41 5H9V3zm18 18v-6h-2v2.59l-3.29-3.29l-1.41 1.41L17.59 19H15v2zM9 21v-2H6.41l3.29-3.29l-1.41-1.42L5 17.59V15H3v6z"},null,-1)]))}const ha={name:"gridicons-fullscreen",render:ua},pa={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"};function ba(e,t){return b(),$("svg",pa,t[0]||(t[0]=[k("path",{fill:"currentColor",d:"M14 10V4h2v2.59l3.29-3.29l1.41 1.41L17.41 8H20v2zM4 10V8h2.59l-3.3-3.29l1.42-1.42L8 6.59V4h2v6zm16 4v2h-2.59l3.29 3.29l-1.41 1.41L16 17.41V20h-2v-6zm-10 0v6H8v-2.59l-3.29 3.3l-1.42-1.42L6.59 16H4v-2z"},null,-1)]))}const ma={name:"gridicons-fullscreen-exit",render:ba},fa=C({name:"FullScreen",__name:"full-screen",setup(e){const{isFullscreen:t,toggle:l}=Zo(),n=W();return(a,r)=>{const s=ma,c=ha,p=Oe;return b(),D(p,{class:"w-40px h-full","tooltip-content":"全屏",inverted:o(n).header.inverted,onClick:o(l)},{default:h(()=>[o(t)?(b(),D(s,{key:0,class:"text-18px"})):(b(),D(c,{key:1,class:"text-18px"}))]),_:1},8,["inverted","onClick"])}}}),va=C({name:"ThemeMode",__name:"theme-mode",setup(e){const t=W();return(l,n)=>{const a=ol,r=Oe;return b(),D(r,{class:"w-40px",inverted:o(t).header.inverted,"tooltip-content":"主题模式"},{default:h(()=>[i(a,{dark:o(t).darkMode,"customize-transition":o(t).isCustomizeDarkModeTransition,class:"wh-full","onUpdate:dark":o(t).setDarkMode},null,8,["dark","customize-transition","onUpdate:dark"])]),_:1},8,["inverted"])}}}),ga={class:"pl-8px text-16px font-medium"},_a=C({name:"UserAvatar",__name:"user-avatar",setup(e){const t=Ko(),l=W(),{iconRender:n}=Go(),a=[{label:"用户中心",key:"user-center",icon:n({icon:"carbon:user-avatar"})},{type:"divider",key:"divider"},{label:"退出登录",key:"logout",icon:n({icon:"carbon:logout"})}];function r(s){var p;s==="logout"&&((p=window.$dialog)==null||p.info({title:"提示",content:"您确定要退出登录吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{t.resetAuthStore()}}))}return(s,c)=>{const p=fl,m=Oe,_=wt;return b(),D(_,{options:a,onSelect:r},{default:h(()=>[i(m,{class:"px-12px",inverted:o(l).header.inverted},{default:h(()=>[i(p,{class:"text-32px"}),k("span",ga,K(o(t).userInfo.userName),1)]),_:1},8,["inverted"])]),_:1})}}}),xa=C({name:"SettingButton",__name:"setting-button",setup(e){const t=He(),l=W();return(n,a)=>{const r=no,s=Oe;return b(),D(s,{class:"w-40px h-full","tooltip-content":"主题配置",inverted:o(l).header.inverted,onClick:o(t).toggleSettingDrawerVisible},{default:h(()=>[i(r,{class:"text-20px"})]),_:1},8,["inverted","onClick"])}}}),wa={class:"inline-block",viewBox:"0 0 512 512",width:"1em",height:"1em"};function ka(e,t){return b(),$("svg",wa,t[0]||(t[0]=[k("path",{fill:"currentColor",d:"M320 24H16v304h176v168h304V192H320ZM148.305 96L98.093 239.3H132l8.166-23.3H192v80H48V56h240v136h-66.668L187.7 96Zm36.317 88h-33.244L168 136.562ZM464 224v240H224V224Z"},null,-1),k("path",{fill:"currentColor",d:"M317.432 368.48a136.761 136.761 0 0 0 10.089 14.12q-17.4 9.384-39.521 9.4v32c24.141 0 45.71-6.408 64-18.824C370.29 417.592 391.859 424 416 424v-32q-22.075 0-39.52-9.407a136.574 136.574 0 0 0 10.088-14.113A166.212 166.212 0 0 0 406.662 320H424v-32h-56v-24h-32v24h-56v32h17.338a166.212 166.212 0 0 0 20.094 48.48ZM373.53 320a133.013 133.013 0 0 1-14.1 31.52a104.39 104.39 0 0 1-7.43 10.448a103.546 103.546 0 0 1-6.93-9.651A132.384 132.384 0 0 1 330.466 320Z"},null,-1)]))}const ya={name:"cil-language",render:ka},Ca=C({__name:"toggle-lang",setup(e){const t=W(),{locale:l}=Xo(),n=R(Ft.get("lang")||"zh-CN"),a=[{label:"中文",key:"zh-CN"},{label:"English",key:"en"},{label:"ភាសាខ្មែរ",key:"km-KH"}],r=s=>{n.value=s,l.value=s,Ft.set("lang",s)};return(s,c)=>{const p=ya,m=wt,_=Oe;return b(),D(_,{class:"w-40px h-full",inverted:o(t).header.inverted},{default:h(()=>[i(m,{options:a,trigger:"hover",value:n.value,onSelect:r},{default:h(()=>[i(p,{class:"text-18px outline-transparent"})]),_:1},8,["value"])]),_:1},8,["inverted"])}}}),Sa={key:1,class:"flex-1 flex-y-center h-full"},$a={class:"flex justify-end h-full toolbar"},Da=C({name:"GlobalHeader",__name:"index",props:{showLogo:{},showHeaderMenu:{},showMenuCollapse:{}},setup(e){const t=W(),{isMobile:l}=eo(),n={}.VITE_VERCEL!=="Y";return(a,r)=>{const s=ml;return b(),D(s,{class:"global-header flex-y-center h-full",inverted:o(t).header.inverted},{default:h(()=>[a.showLogo?(b(),D(ta,{key:0,"show-title":!0,class:"h-full",style:qt({width:o(t).sider.width+"px"})},null,8,["style"])):le("",!0),a.showHeaderMenu?le("",!0):(b(),$("div",Sa,[a.showMenuCollapse||o(l)?(b(),D(o(ia),{key:0})):le("",!0),o(t).header.crumb.visible&&!o(l)?(b(),D(o(ca),{key:1})):le("",!0)])),k("div",$a,[i(o(fa)),i(o(va)),i(o(Ca)),o(n)?(b(),D(o(xa),{key:0})):le("",!0),i(o(_a))])]),_:1},8,["inverted"])}}}),Fa=kt(Da,[["__scopeId","data-v-1861c034"]]),or=C({name:"BasicLayout",__name:"index",setup(e){const t=He(),l=W(),{mode:n,isMobile:a,headerProps:r,siderVisible:s,siderWidth:c,siderCollapsedWidth:p}=eo();return(m,_)=>{const g=Fl;return b(),$(j,null,[i(o(Qo),{mode:o(n),"is-mobile":o(a),"scroll-mode":o(l).scrollMode,"scroll-el-id":o(t).scrollElId,"full-content":o(t).contentFull,"fixed-top":o(l).fixedHeaderAndTab,"header-height":o(l).header.height,"tab-visible":o(l).tab.visible,"tab-height":o(l).tab.height,"content-class":o(t).disableMainXScroll?"overflow-x-hidden":"","sider-visible":o(s),"sider-collapse":o(t).siderCollapse,"sider-width":o(c),"sider-collapsed-width":o(p),"footer-visible":o(l).footer.visible,"fixed-footer":o(l).footer.fixed,"right-footer":o(l).footer.right,onClickMobileSiderMask:_[0]||(_[0]=f=>o(t).setSiderCollapse(!0))},{header:h(()=>[i(o(Fa),Yo(Jo(o(r))),null,16)]),content:h(()=>[i(o(zt))]),default:h(()=>[i(o(zt))]),_:1},8,["mode","is-mobile","scroll-mode","scroll-el-id","full-content","fixed-top","header-height","tab-visible","tab-height","content-class","sider-visible","sider-collapse","sider-width","sider-collapsed-width","footer-visible","fixed-footer","right-footer"]),(b(),D(g,{key:o(l).scrollMode,"listen-to":`#${o(t).scrollElId}`,class:"z-100"},null,8,["listen-to"])),i(o(ea))],64)}}});export{or as default};
