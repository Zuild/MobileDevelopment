System.register(["./index-legacy-C9i9eVqM.js"],(function(l,n){"use strict";var e,t,o,a,u,i,s,d,r,c,f,m,b,_,p,I,g,h,k,v,B,y,C,T,x,D,W,$,H,M,j;return{setters:[l=>{e=l.d,t=l.I,o=l.a,a=l.b,u=l.c,i=l.e,s=l.m,d=l.n,r=l.p,c=l.f,f=l.g,m=l.q,b=l.s,_=l.t,p=l.u,I=l.v,g=l.A,h=l.B,k=l.C,v=l.D,B=l.y,y=l.z,C=l._,T=l.i,x=l.w,D=l.r,W=l.o,$=l.j,H=l.l,M=l.k,j=l.E}],execute:function(){const n=e({name:"card",components:{IonBackButton:t,IonButtons:o,IonToolbar:a,IonTitle:u,IonHeader:i,IonItem:s,IonLabel:d,IonList:r,IonPage:c,IonContent:f,IonTabs:m,IonTabBar:b,IonTabButton:_,IonIcon:p,IonRouterOutlet:I,IonButton:g,IonModal:h,IonInput:k},setup(){const l=v("This modal example uses triggers to automatically open a modal when the button is clicked."),n=v(),e=v();return{home:B,person:y,message:l,modal:n,input:e,cancel:()=>n.value.$el.dismiss(null,"cancel"),confirm:()=>{const l=e.value.$el.value;n.value.$el.dismiss(l,"confirm")},onWillDismiss:n=>{"confirm"===n.detail.role&&(l.value=`Hello, ${n.detail.data}!`)}}}});l("default",C(n,[["render",function(l,n,e,t,o,a){const u=D("ion-back-button"),i=D("ion-buttons"),s=D("ion-title"),d=D("ion-toolbar"),r=D("ion-header"),c=D("ion-button"),f=D("ion-input"),m=D("ion-item"),b=D("ion-content"),_=D("ion-modal"),p=D("ion-router-outlet"),I=D("ion-icon"),g=D("ion-label"),h=D("ion-tab-button"),k=D("ion-tab-bar"),v=D("ion-tabs"),B=D("ion-footer"),y=D("ion-page");return W(),T(y,null,{default:x((()=>[$(r,null,{default:x((()=>[$(d,null,{default:x((()=>[$(i,{slot:"start"},{default:x((()=>[$(u)])),_:1}),$(s,null,{default:x((()=>n[2]||(n[2]=[H("Modal")]))),_:1})])),_:1})])),_:1}),$(b,{class:"ion-padding"},{default:x((()=>[$(c,{id:"open-modal",expand:"block"},{default:x((()=>n[3]||(n[3]=[H("Open Modal")]))),_:1}),M("p",null,j(l.message),1),$(_,{ref:"modal",trigger:"open-modal",onWillDismiss:l.onWillDismiss},{default:x((()=>[$(r,null,{default:x((()=>[$(d,null,{default:x((()=>[$(i,{slot:"start"},{default:x((()=>[$(c,{onClick:n[0]||(n[0]=n=>l.cancel())},{default:x((()=>n[4]||(n[4]=[H("Cancel")]))),_:1})])),_:1}),$(s,null,{default:x((()=>n[5]||(n[5]=[H("Welcome")]))),_:1}),$(i,{slot:"end"},{default:x((()=>[$(c,{strong:!0,onClick:n[1]||(n[1]=n=>l.confirm())},{default:x((()=>n[6]||(n[6]=[H("Confirm")]))),_:1})])),_:1})])),_:1})])),_:1}),$(b,{class:"ion-padding"},{default:x((()=>[$(m,null,{default:x((()=>[$(f,{label:"Enter your name","label-placement":"stacked",ref:"input",type:"text",placeholder:"Your name"},null,512)])),_:1})])),_:1})])),_:1},8,["onWillDismiss"])])),_:1}),$(B,null,{default:x((()=>[$(d,{class:"p-1"},{default:x((()=>[$(v,null,{default:x((()=>[$(p),$(k,{slot:"bottom"},{default:x((()=>[$(h,{tab:"tab1",href:"/tabs/home"},{default:x((()=>[$(I,{"aria-hidden":"true",icon:l.home},null,8,["icon"]),$(g,null,{default:x((()=>n[7]||(n[7]=[H("Home")]))),_:1})])),_:1}),$(h,{tab:"tab2",href:"/tabs/profile"},{default:x((()=>[$(I,{"aria-hidden":"true",icon:l.person},null,8,["icon"]),$(g,null,{default:x((()=>n[8]||(n[8]=[H("Profile")]))),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}]]))}}}));