import{d as V,r as b,l as O,k as U,y as se,t as J,h as y,a as P,co as _e,c as M,cH as ye,j as B,b as ge,e as xe,b$ as we,cF as ke,f as De,i as oe,u as Ne,n as ce,ae as Se,o as ue,by as $e,a2 as Ce,q as Ie,cI as Re,T as Pe,x as Te,cJ as ze,bb as q,aS as ee,bI as te,an as A,aq as j,ar as m,aw as l,ap as i,au as D,ax as N,as as L,a7 as E,cK as de,bK as me,a$ as X,aF as ae,cL as Be,ao as Z,az as Q,b4 as Me,b9 as Oe,bR as le,bJ as Ye,C as Ee,aA as Ae,aE as Le,aB as Ve,bO as Fe,cM as ie,aC as Ue,aD as je,cN as qe}from"./index.js";import{T as Xe}from"./table-paginate.js";import{p as G}from"./table-paginate2.js";import{b as fe}from"./record.js";import{_ as pe,a as ve}from"./DescriptionsItem.js";import{N as W}from"./DataTable.js";import{h as We,a as be}from"./Dropdown.js";import{_ as he}from"./Input.js";import{_ as He}from"./Spin.js";import{_ as Ke}from"./_plugin-vue_export-helper.js";import"./use-compitable.js";import"./get-slot.js";import"./format-length.js";import"./Checkbox.js";import"./use-merged-state.js";import"./RadioGroup.js";import"./FocusDetector.js";import"./next-frame-once.js";import"./get.js";import"./ChevronRight.js";import"./Icon.js";const re=V({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(t){const s=b(null),e=b(t.value),h=b(t.value),c=b("up"),r=b(!1),S=O(()=>r.value?`${t.clsPrefix}-base-slot-machine-current-number--${c.value}-scroll`:null),x=O(()=>r.value?`${t.clsPrefix}-base-slot-machine-old-number--${c.value}-scroll`:null);U(J(t,"value"),(d,w)=>{e.value=w,h.value=d,se(g)});function g(){const d=t.newOriginalNumber,w=t.oldOriginalNumber;w===void 0||d===void 0||(d>w?R("up"):w>d&&R("down"))}function R(d){c.value=d,r.value=!1,se(()=>{var w;(w=s.value)===null||w===void 0||w.offsetWidth,r.value=!0})}return()=>{const{clsPrefix:d}=t;return y("span",{ref:s,class:`${d}-base-slot-machine-number`},e.value!==null?y("span",{class:[`${d}-base-slot-machine-old-number ${d}-base-slot-machine-old-number--top`,x.value]},e.value):null,y("span",{class:[`${d}-base-slot-machine-current-number`,S.value]},y("span",{ref:"numberWrapper",class:[`${d}-base-slot-machine-current-number__inner`,typeof t.value!="number"&&`${d}-base-slot-machine-current-number__inner--not-number`]},h.value)),e.value!==null?y("span",{class:[`${d}-base-slot-machine-old-number ${d}-base-slot-machine-old-number--bottom`,x.value]},e.value):null)}}}),{cubicBezierEaseOut:F}=_e;function Ge({duration:t=".2s"}={}){return[P("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${t} ${F},
 max-width ${t} ${F},
 transform ${t} ${F}
 `}),P("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${t} ${F},
 max-width ${t} ${F},
 transform ${t} ${F}
 `}),P("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),P("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),P("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),P("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const Je=P([P("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),P("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),P("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),P("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),M("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[M("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[Ge({duration:".2s"}),ye({duration:".2s",delay:"0s"}),M("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[B("top",{transform:"translateY(-100%)"}),B("bottom",{transform:"translateY(100%)"}),B("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),B("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),M("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[B("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),B("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),ge("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[B("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),Ze=V({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(t){xe("-base-slot-machine",Je,J(t,"clsPrefix"));const s=b(),e=b(),h=O(()=>{if(typeof t.value=="string")return[];if(t.value<1)return[0];const c=[];let r=t.value;for(t.max!==void 0&&(r=Math.min(t.max,r));r>=1;)c.push(r%10),r/=10,r=Math.floor(r);return c.reverse(),c});return U(J(t,"value"),(c,r)=>{typeof c=="string"?(e.value=void 0,s.value=void 0):typeof r=="string"?(e.value=c,s.value=void 0):(e.value=c,s.value=r)}),()=>{const{value:c,clsPrefix:r}=t;return typeof c=="number"?y("span",{class:`${r}-base-slot-machine`},y(ke,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>h.value.map((S,x)=>y(re,{clsPrefix:r,key:h.value.length-x-1,oldOriginalNumber:s.value,newOriginalNumber:e.value,value:S}))}),y(we,{key:"+",width:!0},{default:()=>t.max!==void 0&&t.max<c?y(re,{clsPrefix:r,value:"+"}):null})):y("span",{class:`${r}-base-slot-machine`},c)}}}),Qe=t=>{const{errorColor:s,infoColor:e,successColor:h,warningColor:c,fontFamily:r}=t;return{color:s,colorInfo:e,colorSuccess:h,colorError:s,colorWarning:c,fontSize:"12px",fontFamily:r}},et={name:"Badge",common:De,self:Qe},tt=et,at=P([P("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),M("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[B("as-is",[M("badge-sup",{position:"static",transform:"translateX(0)"},[oe({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),B("dot",[M("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[P("::before","border-radius: 4px;")])]),M("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[oe({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),M("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),P("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),nt=Object.assign(Object.assign({},ce.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),st=V({name:"Badge",props:nt,setup(t,{slots:s}){const{mergedClsPrefixRef:e,inlineThemeDisabled:h,mergedRtlRef:c}=Ne(t),r=ce("Badge","-badge",at,tt,t,e),S=b(!1),x=()=>{S.value=!0},g=()=>{S.value=!1},R=O(()=>t.show&&(t.dot||t.value!==void 0&&!(!t.showZero&&Number(t.value)<=0)||!Se(s.value)));ue(()=>{R.value&&(S.value=!0)});const d=$e("Badge",c,e),w=O(()=>{const{type:a,color:u}=t,{common:{cubicBezierEaseInOut:n,cubicBezierEaseOut:k},self:{[Ce("color",a)]:f,fontFamily:o,fontSize:v}}=r.value;return{"--n-font-size":v,"--n-font-family":o,"--n-color":u||f,"--n-ripple-color":u||f,"--n-bezier":n,"--n-ripple-bezier":k}}),C=h?Ie("badge",O(()=>{let a="";const{type:u,color:n}=t;return u&&(a+=u[0]),n&&(a+=Re(n)),a}),w,t):void 0,p=O(()=>{const{offset:a}=t;if(!a)return;const[u,n]=a,k=typeof u=="number"?`${u}px`:u,f=typeof n=="number"?`${n}px`:n;return{transform:`translate(calc(${d!=null&&d.value?"50%":"-50%"} + ${k}), ${f})`}});return{rtlEnabled:d,mergedClsPrefix:e,appeared:S,showBadge:R,handleAfterEnter:x,handleAfterLeave:g,cssVars:h?void 0:w,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender,offsetStyle:p}},render(){var t;const{mergedClsPrefix:s,onRender:e,themeClass:h,$slots:c}=this;e==null||e();const r=(t=c.default)===null||t===void 0?void 0:t.call(c);return y("div",{class:[`${s}-badge`,this.rtlEnabled&&`${s}-badge--rtl`,h,{[`${s}-badge--dot`]:this.dot,[`${s}-badge--as-is`]:!r}],style:this.cssVars},r,y(Pe,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?y("sup",{class:`${s}-badge-sup`,title:We(this.value),style:this.offsetStyle},Te(c.value,()=>[this.dot?null:y(Ze,{clsPrefix:s,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?y(ze,{clsPrefix:s}):null):null}))}}),ot=i("div",{class:"flex justify-between items-center w-full"},[i("div",{class:"flex items-center"},[i("h2",{class:"text-xl font-bold"},"校正库存"),i("p",{style:{"font-size":"0.8em",color:"#666","margin-left":"10px"}},"库存数量（账面库存）多余实盘数量")])],-1),lt={style:{"text-align":"center","font-weight":"bold","font-size":"1.2em"}},it={class:"mb-2"},rt={class:"mt-4 flex items-center"},ct=i("span",{class:"mr-2"},"校正方式：",-1),ut={class:"mt-4"},dt=i("span",{class:"mr-2"},"校正说明：",-1),mt={class:"flex justify-end mt-4 space-x-4 pr-4 pb-4"},ft=V({__name:"lack",props:{visible:{type:Boolean},cabinetName:{},rowData:{}},emits:["update:visible","submit","cancel","confirm"],setup(t,{emit:s}){const e=t,h=q(),c=ee(),r=te(),S=b(!1);U(()=>e.visible,async a=>{var u;if(a&&((u=e.rowData)!=null&&u.id)){S.value=!0;try{const{data:n}=await fe({rfid:e.rowData.rfid});console.log("====",n),d.value=n.items||[]}finally{S.value=!1}}});const x=b([{label:"放回耗材",value:"putback"},{label:"修库内记录",value:"delete"}]),g=b({method:x.value[0].value}),R=()=>[{title:"序号",key:"index",render:(u,n)=>n+1},{title:"操作时间",key:"date"},{title:"操作人",key:"userName"},{title:"操作类型",key:"type",render:u=>y("span",{take:"取用",return:"归还",inbound:"入库",outbound:"出库",pending:"待上架入库"}[u.type]||"未知操作")},{title:"操作货柜",key:"cabinetName"},{title:"操作记录单据编号",key:"orderNo"}],d=b([]),w=()=>{s("update:visible",!1),s("cancel")},C=b(""),p=async()=>{const a=r.getDeviceByName(e.cabinetName);if(!a){h.error("未找到对应的货柜信息");return}let{error:u}=await de({userID:Number(c.userInfo.userId),rfid:e.rowData.rfid,type:g.value.method,remark:C.value,cabinetID:a,inventoryTime:me().format("YYYY-MM-DD HH:mm:ss"),errorType:"missingData"});u||(h.success("状态修改成功"),s("submit",{method:g.value.method,id:e.rowData.id}),s("update:visible",!1))};return(a,u)=>{const n=pe,k=ve,f=W,o=be,v=he,_=X,$=ae;return A(),j($,{show:a.visible,"onUpdate:show":w,preset:"card",closable:"",style:{width:"80%","max-width":"1200px"}},{header:m(()=>[ot]),default:m(()=>[l(_,null,{default:m(()=>[i("div",null,[i("p",lt,"耗材"+D(e.rowData.name)+"在当前智能柜管理下，但实物缺失，该耗材一码追溯记录如下：",1),i("p",it,"当前状态："+D(e.rowData.checkStatus||"未知"),1),l(k,{column:4,class:"mb-2"},{default:m(()=>[l(n,{label:"耗材子编码"},{default:m(()=>[N(D(e.rowData.code||"无"),1)]),_:1}),l(n,{label:"耗材名称"},{default:m(()=>[N(D(e.rowData.name||"无"),1)]),_:1}),l(n,{label:"规格型号"},{default:m(()=>[N(D(e.rowData.spec||"无"),1)]),_:1}),l(n,{label:"生产厂家"},{default:m(()=>[N(D(e.rowData.manufacturer||"无"),1)]),_:1}),l(n,{label:"品牌"},{default:m(()=>[N(D(e.rowData.brand||"无"),1)]),_:1}),l(n,{label:"单位"},{default:m(()=>[N(D(e.rowData.unit||"无"),1)]),_:1}),l(n,{label:"唯一码"},{default:m(()=>[N(D(e.rowData.rfid||"无"),1)]),_:1}),l(n,{label:"批号"},{default:m(()=>[N(D(e.rowData.batch||"无"),1)]),_:1})]),_:1})]),l(f,{columns:R(),"row-key":T=>T.id,data:d.value},null,8,["columns","row-key","data"]),i("div",rt,[ct,l(o,{value:g.value.method,"onUpdate:value":u[0]||(u[0]=T=>g.value.method=T),options:x.value,placeholder:"请选择校正方式",style:{width:"170px"}},null,8,["value","options"])]),i("div",ut,[dt,l(v,{value:C.value,"onUpdate:value":u[1]||(u[1]=T=>C.value=T),type:"textarea",placeholder:"请输入校正说明"},null,8,["value"])])]),_:1}),i("div",mt,[l(L(E),{onClick:w},{default:m(()=>[N("取消")]),_:1}),l(L(E),{type:"primary",onClick:p},{default:m(()=>[N("确定")]),_:1})])]),_:1},8,["show"])}}});const pt=i("div",{class:"flex justify-between items-center w-full"},[i("div",{class:"flex items-center"},[i("h2",{class:"text-xl font-bold"},"校正库存"),i("p",{style:{"font-size":"0.8em",color:"#666","margin-left":"10px"}},"库存数量(账面库存)少于实盘数量")])],-1),vt={style:{"text-align":"center","font-weight":"bold","font-size":"1.2em"}},bt={class:"mt-4 flex items-center"},ht=i("span",{class:"mr-2"},"校正方式：",-1),_t={class:"mt-4"},yt=i("span",{class:"mr-2"},"校正说明：",-1),gt={class:"flex justify-end mt-4 space-x-4 pr-4 pb-4"},xt=V({__name:"excess",props:{visible:{type:Boolean},cabinetName:{},rowData:{}},emits:["update:visible","submit","cancel","confirm"],setup(t,{emit:s}){const e=t,h=q(),c=ee(),r=te(),S=b([]),x=b(!1);U(()=>e.visible,async n=>{var k;if(n&&((k=e.rowData)!=null&&k.rfid)){x.value=!0;try{const{data:f}=await fe({rfid:e.rowData.rfid});S.value=f.items||[]}finally{x.value=!1}}});const g=b([]),R=b([{label:"取走耗材",value:"takeout"},{label:"修正库存记录",value:"modify"}]),d=b({method:R.value[0].value}),w=()=>[{title:"序号",key:"index",render:(k,f)=>f+1},{title:"操作时间",key:"date"},{title:"操作人",key:"userName"},{title:"操作类型",key:"type",render:k=>y("span",{take:"取用",return:"归还",inbound:"入库",outbound:"出库",pending:"待上架入库"}[k.type]||"未知操作")},{title:"操作货柜",key:"cabinetName"},{title:"操作记录单据编号",key:"orderNo"}],C=n=>{g.value=n},p=()=>{s("update:visible",!1),s("cancel")},a=b(""),u=async()=>{if(d.value.method==="takeout"){Be("请取走该耗材"),s("submit",{method:d.value.method,id:e.rowData.id}),s("update:visible",!1),g.value=[];return}const n=r.getDeviceByName(e.cabinetName);if(!n){h.error("未找到对应的货柜信息");return}let{error:k}=await de({userID:Number(c.userInfo.userId),rfid:e.rowData.rfid,type:d.value.method,remark:a.value,cabinetID:n,inventoryTime:me().format("YYYY-MM-DD HH:mm:ss"),errorType:"overData"});k||(h.success("状态修改成功"),s("submit",{method:d.value.method,id:e.rowData.id}),s("update:visible",!1),g.value=[])};return(n,k)=>{const f=pe,o=ve,v=W,_=be,$=he,T=X,I=ae;return A(),j(I,{show:n.visible,"onUpdate:show":p,preset:"card",closable:"",style:{width:"80%","max-width":"1200px"}},{header:m(()=>[pt]),default:m(()=>[l(T,null,{default:m(()=>[i("div",null,[i("p",vt,"耗材"+D(e.rowData.name)+"耗材XXX不受当前智能柜管理，该耗材一码追溯记录如下： ",1),i("p",null,"当前状态："+D(e.rowData.checkStatus||"未知"),1),l(o,{column:4,class:"mb-2"},{default:m(()=>[l(f,{label:"耗材子编码"},{default:m(()=>[N(D(e.rowData.code||"无"),1)]),_:1}),l(f,{label:"耗材名称"},{default:m(()=>[N(D(e.rowData.name||"无"),1)]),_:1}),l(f,{label:"规格型号"},{default:m(()=>[N(D(e.rowData.spec||"无"),1)]),_:1}),l(f,{label:"生产厂家"},{default:m(()=>[N(D(e.rowData.manufacturer||"无"),1)]),_:1}),l(f,{label:"品牌"},{default:m(()=>[N(D(e.rowData.brand||"无"),1)]),_:1}),l(f,{label:"单位"},{default:m(()=>[N(D(e.rowData.unit||"无"),1)]),_:1}),l(f,{label:"唯一码"},{default:m(()=>[N(D(e.rowData.rfid||"无"),1)]),_:1}),l(f,{label:"批号"},{default:m(()=>[N(D(e.rowData.batch||"无"),1)]),_:1})]),_:1})]),l(v,{columns:w(),"row-key":z=>z.id,data:S.value,"onUpdate:checkedRowKeys":C},null,8,["columns","row-key","data"]),i("div",bt,[ht,l(_,{value:d.value.method,"onUpdate:value":k[0]||(k[0]=z=>d.value.method=z),options:R.value,placeholder:"请选择校正方式",style:{width:"170px"}},null,8,["value","options"])]),i("div",_t,[yt,l($,{value:a.value,"onUpdate:value":k[1]||(k[1]=z=>a.value=z),type:"textarea",placeholder:"请输入校正说明"},null,8,["value"])])]),_:1}),i("div",gt,[l(L(E),{onClick:p},{default:m(()=>[N("取消")]),_:1}),l(L(E),{type:"primary",onClick:u},{default:m(()=>[N("确定")]),_:1})])]),_:1},8,["show"])}}});var Y;(t=>{(s=>{s.Exception="exception",s.Normal="normal"})(t.ValidateResult||(t.ValidateResult={})),(s=>{s.MissingData="missingData",s.Normal="normal",s.OverData="overData"})(t.CheckStatus||(t.CheckStatus={}))})(Y||(Y={}));const wt=i("div",{class:"flex justify-between items-center w-full"},[i("h2",{class:"text-xl font-bold"},"查看明细")],-1),kt={class:"flex justify-end mt-4 space-x-4 pr-4 pb-4"},Dt=V({__name:"dialog",props:{visible:{type:Boolean},rowData:{}},emits:["update:visible","submit","cancel","confirm"],setup(t,{emit:s}){const e=t;q();const h=b(!1),c=b(!1),r=b(),S=p=>{r.value=p,p.checkStatus==="missingData"?h.value=!0:p.checkStatus==="overData"&&(c.value=!0)},x=()=>[{title:"序号",key:"index",render:(p,a)=>a+1},{title:"耗材子编码",key:"code"},{title:"耗材名称",key:"name"},{title:"规格型号",key:"spec"},{title:"生产厂家",key:"manufacturer"},{title:"品牌",key:"brand"},{title:"单位",key:"unit"},{title:"唯一码",key:"rfid"},{title:"批号",key:"batch"},{title:"状态",key:"status",render:p=>{const a={[Y.CheckStatus.MissingData]:"缺失",[Y.CheckStatus.Normal]:"正常",[Y.CheckStatus.OverData]:"超量"};return y("span",a[p.checkStatus]||"未知状态")}},{title:"操作",key:"operations",render:p=>{const a=[];return(p.checkStatus==="missingData"||p.checkStatus==="overData")&&a.push(y(E,{type:"primary",onClick:()=>S(p)},{default:()=>"校正库存"})),y("div",{class:"flex gap-2"},a)}}],g=b({totalItems:0,pageSize:G,currentPage:1});U(()=>e.rowData,p=>{var a;p&&(g.value.currentPage=1,g.value.totalItems=((a=p.detailData)==null?void 0:a.length)||0)},{immediate:!0});const R=O(()=>{var u,n;const p=(g.value.currentPage-1)*G,a=p+G;return((n=(u=e.rowData)==null?void 0:u.detailData)==null?void 0:n.slice(p,a))||[]}),d=p=>{g.value.currentPage=p},w=()=>{s("update:visible",!1),s("cancel")},C=p=>{var u;const a=(u=e.rowData.detailData)==null?void 0:u.findIndex(n=>n.id===p.id);if(a!==void 0&&a>=0){const n=[...e.rowData.detailData];n[a]={...n[a],checkStatus:Y.CheckStatus.Normal},e.rowData.detailData=n}};return(p,a)=>{const u=W,n=X,k=ae;return A(),Z(Q,null,[l(k,{show:p.visible,"onUpdate:show":w,preset:"card",closable:"",style:{width:"fit-content"}},{header:m(()=>[wt]),default:m(()=>[l(n,null,{default:m(()=>[l(u,{columns:x(),"row-key":f=>f.id,data:R.value},null,8,["columns","row-key","data"])]),_:1}),l(Xe,{total:g.value.totalItems,"page-size":g.value.pageSize,"current-page":g.value.currentPage,onPageChange:d},null,8,["total","page-size","current-page"]),i("div",kt,[l(L(E),{type:"primary",onClick:w},{default:m(()=>[N("返回")]),_:1})])]),_:1},8,["show"]),l(ft,{visible:h.value,"onUpdate:visible":a[0]||(a[0]=f=>h.value=f),rowData:r.value,cabinetName:e.rowData.cabinetName,onSubmit:a[1]||(a[1]=f=>C(f))},null,8,["visible","rowData","cabinetName"]),l(xt,{visible:c.value,"onUpdate:visible":a[2]||(a[2]=f=>c.value=f),rowData:r.value,cabinetName:e.rowData.cabinetName,onSubmit:a[3]||(a[3]=f=>C(f))},null,8,["visible","rowData","cabinetName"])],64)}}});const ne=t=>(Ue("data-v-24f64ef3"),t=t(),je(),t),Nt=ne(()=>i("div",{class:"flex items-center mb-4"},[i("h2",{class:"text-xl font-bold"},"库存盘点")],-1)),St={class:"flex h-screen"},$t={class:"flex-4 p-4"},Ct={class:"flex justify-end mb-4"},It={class:"-ml-4 mr-0"},Rt={class:"flex-1 p-4 border-l"},Pt=ne(()=>i("h2",{class:"mb-7"},"货柜在线情况",-1)),Tt={class:"space-y-2"},zt={class:"flex flex-col items-center gap-1 px-4 pt-2 relative"},Bt=ne(()=>i("span",{class:"text-sm font-medium text-primary"},"正在盘点中...",-1)),Mt={class:"text-gray-600 text-lg"},Ot={class:"text-gray-500 text-sm"},Yt=V({__name:"index",setup(t){const s=te();ee();const e=Me(),h=Oe(),c=q(),r=O(()=>{var o;return((o=h.systemSettings)==null?void 0:o.inventoryCountingTime)||5}),S=b([]),x=b({}),g=b(!1),R=b({cabinetName:"",stockNum:0,realStockNum:0,validateResult:Y.ValidateResult.Normal,detailData:[]}),d=o=>{},w=o=>{console.log(`开始对 ${o.cabinetName} 进行重新盘点`);const v=n.value.find(_=>_.name===o.cabinetName);f(v)},C=o=>{R.value=o,g.value=!0},p=b([{title:"货柜名称",key:"cabinetName"},{title:"库存数量",key:"stockNum",render:o=>y("span",o.stockNum)},{title:"实盘数量",key:"realStockNum",render:o=>y("span",o.realStockNum)},{title:"校验结果",key:"validateResult",render:o=>{const v=o.validateResult===Y.ValidateResult.Normal?"green":"orange",_=o.validateResult===Y.ValidateResult.Normal?"正常":"异常";return y("span",{style:{color:v}},_)}},{title:"差异明细",key:"detailData",render:o=>y("span",{onClick:()=>C(o),style:{color:"green",textDecoration:"underline",cursor:"pointer"}},`查看 ${o.detailData.length} 条明细`)},{title:"操作",key:"actions",render:o=>y(E,{type:"primary",onClick:v=>{v.stopPropagation(),w(o)}},"重新盘点")}]),a=b([]),u=b({}),n=b(s.devices.map(o=>({...o,isLoading:!1}))),k=async()=>{try{c.info("开始正在启动盘点程序...");for(const o of n.value)if(o.status==="online"){const{data:v,error:_}=await ie(o.ipAddress,Number(r.value));_||(o.isLoading=!0)}c.success("整库盘点指令已发送")}catch(o){c.error("整库盘点失败: "+o.message)}},f=async o=>{if(o.status==="online"){const{error:v}=ie(o.ipAddress,Number(r.value));v||(o.isLoading=!0)}else c.error(`${o.name} 处于离线状态，无法进行库存盘点`)};return ue(()=>{h.updateInventoryType("validate"),e.subscribe(le.RFID_TAGS,o=>{let{EPC:v,IP:_}=o;try{if(v=v.replace(/\s+/g,"").replace(/0{2}$/,"").padStart(18,"0"),v){if(_)if(x.value[_])x.value[_].rfidList.includes(v)||x.value[_].rfidList.push(v);else{const $=s.getDeviceBymac(_);if($!=null&&$.id&&($!=null&&$.name))x.value[_]={cabinetID:$.id,cabinetName:$.name,rfidList:[v]};else{console.error(`未找到IP为${_}的货柜信息`);return}}}else c.error("mqtt数据中未携带IP地址，请检查消息体结构");S.value.includes(v)||S.value.push(v)}catch($){console.error("数据处理异常:",$)}}),e.subscribe(le.RFID_INVENTORY_RESULT,o=>{let{ReaderId:v}=o;u.value[v]||(u.value[v]=Ye(_=>{if(!x.value[_]){console.warn(`未找到${_}的盘点数据`);return}const $=n.value.find(T=>T.macAddress===_);if($&&($.isLoading=!1),x.value[_]){let T=x.value[_];delete x.value[_],qe(T).then(I=>{if(!I.error){const z=a.value.findIndex(K=>K.cabinetName===I.data.cabinetName);z!==-1?a.value.splice(z,1,I.data):a.value.push(I.data);const H=n.value.findIndex(K=>K.name===I.data.cabinetName);H!==-1&&(n.value[H].isLoading=!1)}})}},3e3)),u.value[v](v)})}),Ee(()=>{h.updateInventoryType("other")}),(o,v)=>{const _=He,$=st,T=X;return A(),Z(Q,null,[Nt,i("div",St,[i("div",$t,[i("div",Ct,[l(L(E),{type:"primary",onClick:k},{default:m(()=>[N("整库盘点")]),_:1})]),i("div",It,[l(L(W),{columns:p.value,data:a.value},null,8,["columns","data"])]),l(Dt,{visible:g.value,"onUpdate:visible":v[0]||(v[0]=I=>g.value=I),rowData:R.value,onSubmit:d},null,8,["visible","rowData"])]),i("div",Rt,[Pt,i("div",Tt,[(A(!0),Z(Q,null,Ae(n.value,(I,z)=>(A(),j(T,{key:z,"footer-style":{padding:0,borderTop:"none"},class:"relative rounded-lg overflow-hidden h-30",onClick:Fe(H=>f(I),["stop"])},{header:m(()=>[i("div",zt,[I.isLoading?(A(),j(_,{key:0,size:"medium",class:"absolute -top-0 -right-0",style:Le({transform:"scale(0.8)"})},{description:m(()=>[Bt]),_:1},8,["style"])):Ve("",!0),i("span",Mt,D(I.name),1),i("span",Ot,D(I.ipAddress),1),l($,{color:I.status==="online"?"#09bb07":"#ff4d4f",value:I.status==="online"?"在线":"离线",size:"large",class:"absolute -right-5 -top-3 text-sm",style:{fontSize:"14px"}},null,8,["color","value"])])]),_:2},1032,["onClick"]))),128))])])])],64)}}});const oa=Ke(Yt,[["__scopeId","data-v-24f64ef3"]]);export{oa as default};
