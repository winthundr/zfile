import{b0 as G,r as J}from"./base.d71712f3.js";/* empty css                */import{Z as j,a as H}from"./ZFormItem.1c25cabf.js";/* empty css              */import"./tooltip.f118fcb0.js";import{E as K}from"./popper.f14bfb73.js";import{E as O}from"./image-viewer.c91b57a8.js";/* empty css               */import{E as Q}from"./radio.733399af.js";import{E as W}from"./switch.acf50e50.js";import{g as X,v as x,l as Y,d as $}from"./admin-setting.efbf822c.js";import{r as ee,ay as A,_ as oe,w as F,u as e,P as te,a as m,b as v,e as n,h as l,I,f as T,k as h,J as a,S as ne,U as ie,p as k}from"./index.c87ad23f.js";import{t as ae}from"./vue3-clipboard.esm-bundler.34366eba.js";import{E as p}from"./request.ae06a338.js";import{E as R}from"./index.1f5f78ad.js";import{b as U}from"./route-block.9b0645f8.js";import{E as le}from"./index.e7b2081b.js";import{v as se}from"./directive.c3427ad7.js";import"./index.c92ded65.js";import"./focus-trap.ce567b0c.js";import"./event.3ec63147.js";import"./index.63298b40.js";import"./debounce.ad4d5167.js";import"./scroll.4ddca5bd.js";import"./event.776e7e11.js";import"./validator.7457b7f8.js";import"./index.b38ab156.js";const y=ee({});function re(){const{data:r,reload:o}=A(Y,{formatResult:t=>t.data}),{loading:u,run:g}=A($,{manual:!0,onSuccess(){p({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}}),f=()=>{g(r.value)},d=()=>{X().then(t=>{y.value=t.data})};return{data:r,reload:o,saveData:f,saveLoading:u,load2FAInfo:d,twoFAData:y,copyTwoFASecret:()=>{ae(y.value.secret).then(()=>{p.success("\u590D\u5236\u6210\u529F")})},verifyCodeAndBind:()=>{x(y.value).then(t=>{p.success("\u7ED1\u5B9A\u6210\u529F"),o()})},rebind:()=>{r.value.loginVerifySecret="",d()},cancelBind:()=>{R.confirm("\u662F\u5426\u786E\u8BA4\u53D6\u6D88\u7ED1\u5B9A\uFF0C\u786E\u8BA4\u540E\u5C06\u81EA\u52A8\u6062\u590D\u4E3A\u56FE\u5F62\u9A8C\u8BC1\u7801","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"success",callback:t=>{t==="confirm"&&(r.value.loginVerifySecret="",r.value.loginVerifyMode="image")}})},validBind:()=>{R.prompt("\u8BF7\u8F93\u5165\u53CC\u56E0\u7D20\u8BA4\u8BC1 APP \u4E2D\u7684\u9A8C\u8BC1\u7801","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",inputValidator(t){return!!t},inputErrorMessage:"\u9A8C\u8BC1\u7801\u4E0D\u80FD\u4E3A\u7A7A."}).then(({value:t})=>{let i={secret:r.value.loginVerifySecret,code:t};x(i).then(()=>{p.success("\u9A8C\u8BC1\u6210\u529F")})})}}}const b=r=>(ne("data-v-7666d571"),r=r(),ie(),r),de=a(" \u5B89\u5168\u8BBE\u7F6E "),ce=a(" \u6B64\u5904\u8BBE\u7F6E\u53EF\u4FDD\u62A4\u60A8\u7684\u7AD9\u70B9\u5B89\u5168 "),me=a(" \u542F\u7528\u540E\uFF0C\u4F1A\u5728\u95E8\u6237\u663E\u793A\u540E\u53F0\u767B\u5F55\u5165\u53E3\uFF0C\u8BF7\u6839\u636E\u81EA\u8EAB\u60C5\u51B5\u9009\u62E9\u662F\u5426\u542F\u7528 "),ue=a("\u4E0D\u542F\u7528\u767B\u5F55\u9A8C\u8BC1"),fe=a("\u542F\u7528\u56FE\u7247\u9A8C\u8BC1\u7801"),_e=a("\u542F\u7528\u53CC\u56E0\u7D20\u8BA4\u8BC1"),pe=a(" \u56FE\u7247\u9A8C\u8BC1\u7801\u4E5F\u53EF\u80FD\u4F1A\u88AB\u8BC6\u522B\uFF0C\u4E0D\u80FD\u5B8C\u5168\u62B5\u6321\u66B4\u529B\u7834\u89E3\u3002 "),ye=a(" \u53CC\u56E0\u7D20\u8BA4\u8BC1\u53EF\u5B8C\u7F8E\u4FDD\u62A4\u767B\u5F55\u8BA4\u8BC1\uFF0C\u53EF\u4F7F\u7528\u4EFB\u610F\u652F\u6301 2FA \u8BA4\u8BC1\u7684\u8F6F\u4EF6\uFF0C\u5982 "),ge=b(()=>k("b",null,"Google \u8EAB\u4EFD\u9A8C\u8BC1\u5668",-1)),Ve=a("\u3001"),ve=b(()=>k("b",null,"Microsoft Authenticator",-1)),he=a(" \u7B49\u8F6F\u4EF6. "),ke=b(()=>k("br",null,null,-1)),be={key:0,class:"w-full"},Se=a("\u91CD\u65B0\u7ED1\u5B9A"),Be=a("\u53D6\u6D88\u7ED1\u5B9A"),Ce=a("\u9A8C\u8BC1\u7ED1\u5B9A"),Ee={key:1},we=a(" \u53EF\u626B\u63CF\u4E0A\u65B9\u4E8C\u7EF4\u7801\u6216\u590D\u5236\u4E0B\u65B9\u5BC6\u94A5\u5230\u652F\u6301\u53CC\u56E0\u7D20\u8BA4\u8BC1\u7684\u8F6F\u4EF6\u4E2D\u6DFB\u52A0\u3002 "),Me=a("\u9A8C\u8BC1\u5E76\u7ED1\u5B9A"),xe=a(" \u8BF7\u7ED1\u5B9A\u53CC\u56E0\u7D20\u8BA4\u8BC1\u8F6F\u4EF6\u540E\uFF0C\u8F93\u5165\u663E\u793A\u7684\u9A8C\u8BC1\u7801\u8FDB\u884C\u7ED1\u5B9A "),q={__name:"index",setup(r){const{data:o,saveData:u,saveLoading:g,load2FAInfo:f,twoFAData:d,copyTwoFASecret:S,verifyCodeAndBind:B,rebind:C,cancelBind:E,validBind:w}=re();return F(()=>{var t;return(t=o.value)==null?void 0:t.loginVerifyMode},(t,i)=>{(t==="off"||t==="image")&&i&&u(),t==="2fa"&&!o.value.loginVerifySecret&&f()}),F(()=>{var t;return(t=o.value)==null?void 0:t.showLogin},(t,i)=>{t!==i&&i!==void 0&&u()}),(t,i)=>{const D=W,_=j,V=Q,c=J,L=O,z=K,M=le,N=H,P=se;return e(o)?te((m(),v(N,{key:0,model:e(o)},{"form-title":n(()=>[de]),"form-sub-title":n(()=>[ce]),default:n(()=>[l(_,{label:"\u662F\u5426\u663E\u793A\u767B\u5F55\u5165\u53E3"},{tips:n(()=>[me]),default:n(()=>[l(D,{modelValue:e(o).showLogin,"onUpdate:modelValue":i[0]||(i[0]=s=>e(o).showLogin=s)},null,8,["modelValue"])]),_:1}),l(_,{label:"\u767B\u5F55\u9A8C\u8BC1\u65B9\u5F0F"},I({default:n(()=>[l(V,{modelValue:e(o).loginVerifyMode,"onUpdate:modelValue":i[1]||(i[1]=s=>e(o).loginVerifyMode=s),label:"off"},{default:n(()=>[ue]),_:1},8,["modelValue"]),l(V,{modelValue:e(o).loginVerifyMode,"onUpdate:modelValue":i[2]||(i[2]=s=>e(o).loginVerifyMode=s),label:"image"},{default:n(()=>[fe]),_:1},8,["modelValue"]),l(V,{modelValue:e(o).loginVerifyMode,"onUpdate:modelValue":i[3]||(i[3]=s=>e(o).loginVerifyMode=s),label:"2fa"},{default:n(()=>[_e]),_:1},8,["modelValue"])]),_:2},[e(o).loginVerifyMode==="image"?{name:"tips",fn:n(()=>[pe])}:void 0,e(o).loginVerifyMode==="2fa"?{name:"tips",fn:n(()=>[ye,ge,Ve,ve,he,ke])}:void 0]),1024),e(o).loginVerifyMode==="2fa"?(m(),v(_,{key:0,label:"\u53CC\u56E0\u7D20\u8BA4\u8BC1\u5BC6\u94A5"},I({default:n(()=>{var s;return[e(o).loginVerifySecret?(m(),T("div",be,[l(c,{size:"small",type:"primary",onClick:e(C)},{default:n(()=>[Se]),_:1},8,["onClick"]),l(c,{size:"small",type:"primary",onClick:e(E)},{default:n(()=>[Be]),_:1},8,["onClick"]),l(c,{size:"small",type:"primary",onClick:e(w)},{default:n(()=>[Ce]),_:1},8,["onClick"])])):(m(),T("div",Ee,[l(L,{onClick:e(f),src:(s=e(d))==null?void 0:s.qrcode},null,8,["onClick","src"]),l(M,{readonly:"",modelValue:e(d).secret,"onUpdate:modelValue":i[4]||(i[4]=Z=>e(d).secret=Z)},{append:n(()=>[l(z,{class:"item",effect:"dark",content:"\u590D\u5236",placement:"bottom"},{default:n(()=>[l(c,{onClick:e(S),icon:e(G)},null,8,["onClick","icon"])]),_:1})]),_:1},8,["modelValue"])]))]}),_:2},[e(o).loginVerifySecret?void 0:{name:"tips",fn:n(()=>[we])}]),1024)):h("",!0),e(o).loginVerifyMode==="2fa"&&!e(o).loginVerifySecret?(m(),v(_,{key:1,label:"\u53CC\u56E0\u7D20\u8BA4\u8BC1\u9A8C\u8BC1\u7801"},{tips:n(()=>[xe]),default:n(()=>[l(M,{modelValue:e(d).code,"onUpdate:modelValue":i[5]||(i[5]=s=>e(d).code=s)},null,8,["modelValue"]),l(c,{onClick:e(B),type:"primary"},{default:n(()=>[Me]),_:1},8,["onClick"])]),_:1})):h("",!0)]),_:1},8,["model"])),[[P,e(g)]]):h("",!0)}}};typeof U=="function"&&U(q);var no=oe(q,[["__scopeId","data-v-7666d571"]]);export{no as default};