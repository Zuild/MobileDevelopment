const __vite__fileDeps=["assets/web-CihXkCud.js","assets/index-Cwenx0lJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a2 as T,d as B,I as V,b as h,f as C,h as $,e as D,g as S,c as L,v as N,s as E,t as H,u as O,n as R,q as U,y as j,z as q,_ as x,i as z,w as n,r as a,o as A,j as t,l as r,k as s,a3 as d,a4 as f}from"./index-Bgcyza6Q.js";import{r as F}from"./index-Cwenx0lJ.js";const b=F("Preferences",{web:()=>T(()=>import("./web-CihXkCud.js"),__vite__mapDeps([0,1])).then(e=>new e.PreferencesWeb)}),G=B({name:"localstorageScreen",components:{IonBackButton:V,IonToolbar:h,IonPage:C,IonFooter:$,IonHeader:D,IonContent:S,IonTitle:L,IonRouterOutlet:N,IonTabBar:E,IonTabButton:H,IonIcon:O,IonLabel:R,IonTabs:U},data(){return{form:{key:"",value:""}}},methods:{async save(){await b.set({key:this.form.key,value:this.form.value})},async getData(){const e=await b.get({key:this.form.key});e.value&&(this.form.value=e.value)}},setup(){return{home:j,person:q}}}),K={class:"p-3"},M={class:"mb-3"},W={class:"mb-3"};function J(e,o,Q,X,Y,Z){const p=a("ion-back-button"),c=a("ion-title"),i=a("ion-toolbar"),v=a("ion-header"),I=a("ion-content"),k=a("ion-router-outlet"),u=a("ion-icon"),_=a("ion-label"),m=a("ion-tab-button"),y=a("ion-tab-bar"),g=a("ion-tabs"),w=a("ion-footer"),P=a("ion-page");return A(),z(P,null,{default:n(()=>[t(v,null,{default:n(()=>[t(i,{color:"warning"},{default:n(()=>[t(p,{slot:"start","default-href":"/home"}),t(c,null,{default:n(()=>o[4]||(o[4]=[r(" Local Storage")])),_:1})]),_:1})]),_:1}),t(I,null,{default:n(()=>[s("div",K,[s("div",M,[o[5]||(o[5]=s("label",{class:"form-label"},"Key",-1)),d(s("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.key=l),type:"text",class:"form-control"},null,512),[[f,e.form.key]])]),s("div",W,[o[6]||(o[6]=s("label",{class:"form-label"},"Value",-1)),d(s("input",{"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.value=l),type:"text",class:"form-control"},null,512),[[f,e.form.value]])]),s("button",{class:"btn btn-primary w-100",onClick:o[2]||(o[2]=l=>e.save())}," Save Storage "),s("button",{class:"btn btn-primary w-100 mt-3",onClick:o[3]||(o[3]=l=>e.getData())}," Get Data ")])]),_:1}),t(w,null,{default:n(()=>[t(i,{class:"p-1"},{default:n(()=>[t(g,null,{default:n(()=>[t(k),t(y,{slot:"bottom"},{default:n(()=>[t(m,{tab:"tab1",href:"/tabs/home"},{default:n(()=>[t(u,{"aria-hidden":"true",icon:e.home},null,8,["icon"]),t(_,null,{default:n(()=>o[7]||(o[7]=[r("Home")])),_:1})]),_:1}),t(m,{tab:"tab2",href:"/tabs/profile"},{default:n(()=>[t(u,{"aria-hidden":"true",icon:e.person},null,8,["icon"]),t(_,null,{default:n(()=>o[8]||(o[8]=[r("Profile")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const eo=x(G,[["render",J],["__scopeId","data-v-55ba88c6"]]);export{eo as default};