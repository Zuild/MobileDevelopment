System.register(["./index-legacy-C9i9eVqM.js","./index-legacy-bWGLu6PL.js"],(function(e,t){"use strict";var a,o,n,l,r,u,s,i,c,d,b,f,m,h,p,v,y,I,_,g,k,w,x,j,C,S,T,B;return{setters:[e=>{a=e.a2,o=e.d,n=e.I,l=e.b,r=e.f,u=e.h,s=e.e,i=e.g,c=e.c,d=e.v,b=e.s,f=e.t,m=e.u,h=e.n,p=e.q,v=e.y,y=e.z,I=e._,_=e.i,g=e.w,k=e.r,w=e.o,x=e.j,j=e.l,C=e.k,S=e.a3,T=e.a4},e=>{B=e.r}],execute:function(){var P=document.createElement("style");P.textContent=".banner[data-v-55ba88c6]{width:100vw;height:260px;object-fit:cover;object-position:center}\n",document.head.appendChild(P);const D=B("Preferences",{web:()=>a((()=>t.import("./web-legacy-D-RSdifL.js")),void 0).then((e=>new e.PreferencesWeb))}),V=o({name:"localstorageScreen",components:{IonBackButton:n,IonToolbar:l,IonPage:r,IonFooter:u,IonHeader:s,IonContent:i,IonTitle:c,IonRouterOutlet:d,IonTabBar:b,IonTabButton:f,IonIcon:m,IonLabel:h,IonTabs:p},data:()=>({form:{key:"",value:""}}),methods:{async save(){await D.set({key:this.form.key,value:this.form.value})},async getData(){const e=await D.get({key:this.form.key});e.value&&(this.form.value=e.value)}},setup:()=>({home:v,person:y})}),H={class:"p-3"},L={class:"mb-3"},U={class:"mb-3"};e("default",I(V,[["render",function(e,t,a,o,n,l){const r=k("ion-back-button"),u=k("ion-title"),s=k("ion-toolbar"),i=k("ion-header"),c=k("ion-content"),d=k("ion-router-outlet"),b=k("ion-icon"),f=k("ion-label"),m=k("ion-tab-button"),h=k("ion-tab-bar"),p=k("ion-tabs"),v=k("ion-footer"),y=k("ion-page");return w(),_(y,null,{default:g((()=>[x(i,null,{default:g((()=>[x(s,{color:"warning"},{default:g((()=>[x(r,{slot:"start","default-href":"/home"}),x(u,null,{default:g((()=>t[4]||(t[4]=[j(" Local Storage")]))),_:1})])),_:1})])),_:1}),x(c,null,{default:g((()=>[C("div",H,[C("div",L,[t[5]||(t[5]=C("label",{class:"form-label"},"Key",-1)),S(C("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.key=t),type:"text",class:"form-control"},null,512),[[T,e.form.key]])]),C("div",U,[t[6]||(t[6]=C("label",{class:"form-label"},"Value",-1)),S(C("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.value=t),type:"text",class:"form-control"},null,512),[[T,e.form.value]])]),C("button",{class:"btn btn-primary w-100",onClick:t[2]||(t[2]=t=>e.save())}," Save Storage "),C("button",{class:"btn btn-primary w-100 mt-3",onClick:t[3]||(t[3]=t=>e.getData())}," Get Data ")])])),_:1}),x(v,null,{default:g((()=>[x(s,{class:"p-1"},{default:g((()=>[x(p,null,{default:g((()=>[x(d),x(h,{slot:"bottom"},{default:g((()=>[x(m,{tab:"tab1",href:"/tabs/home"},{default:g((()=>[x(b,{"aria-hidden":"true",icon:e.home},null,8,["icon"]),x(f,null,{default:g((()=>t[7]||(t[7]=[j("Home")]))),_:1})])),_:1}),x(m,{tab:"tab2",href:"/tabs/profile"},{default:g((()=>[x(b,{"aria-hidden":"true",icon:e.person},null,8,["icon"]),x(f,null,{default:g((()=>t[8]||(t[8]=[j("Profile")]))),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-55ba88c6"]]))}}}));