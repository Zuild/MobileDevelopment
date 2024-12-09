import{d as T,b as k,f as x,h as F,e as N,g as O,c as S,v as A,s as q,t as B,u as H,n as M,q as W,y as $,z as D,_ as V,i as j,w as c,r as d,o as z,j as l,l as h,k as v}from"./index-Bgcyza6Q.js";import{W as G,a as _,r as J}from"./index-Cwenx0lJ.js";var u;(function(r){r.Prompt="PROMPT",r.Camera="CAMERA",r.Photos="PHOTOS"})(u||(u={}));var f;(function(r){r.Rear="REAR",r.Front="FRONT"})(f||(f={}));var g;(function(r){r.Uri="uri",r.Base64="base64",r.DataUrl="dataUrl"})(g||(g={}));class E extends G{async getPhoto(e){return new Promise(async(n,a)=>{if(e.webUseInput||e.source===u.Photos)this.fileInputExperience(e,n,a);else if(e.source===u.Prompt){let t=document.querySelector("pwa-action-sheet");t||(t=document.createElement("pwa-action-sheet"),document.body.appendChild(t)),t.header=e.promptLabelHeader||"Photo",t.cancelable=!1,t.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],t.addEventListener("onSelection",async o=>{o.detail===0?this.fileInputExperience(e,n,a):this.cameraExperience(e,n,a)})}else this.cameraExperience(e,n,a)})}async pickImages(e){return new Promise(async(n,a)=>{this.multipleFileInputExperience(n,a)})}async cameraExperience(e,n,a){if(customElements.get("pwa-camera-modal")){const t=document.createElement("pwa-camera-modal");t.facingMode=e.direction===f.Front?"user":"environment",document.body.appendChild(t);try{await t.componentOnReady(),t.addEventListener("onPhoto",async o=>{const i=o.detail;i===null?a(new _("User cancelled photos app")):i instanceof Error?a(i):n(await this._getCameraPhoto(i,e)),t.dismiss(),document.body.removeChild(t)}),t.present()}catch(o){this.fileInputExperience(e,n,a)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),this.fileInputExperience(e,n,a)}fileInputExperience(e,n,a){let t=document.querySelector("#_capacitor-camera-input");const o=()=>{var i;(i=t.parentNode)===null||i===void 0||i.removeChild(t)};t||(t=document.createElement("input"),t.id="_capacitor-camera-input",t.type="file",t.hidden=!0,document.body.appendChild(t),t.addEventListener("change",i=>{const s=t.files[0];let p="jpeg";if(s.type==="image/png"?p="png":s.type==="image/gif"&&(p="gif"),e.resultType==="dataUrl"||e.resultType==="base64"){const m=new FileReader;m.addEventListener("load",()=>{if(e.resultType==="dataUrl")n({dataUrl:m.result,format:p});else if(e.resultType==="base64"){const b=m.result.split(",")[1];n({base64String:b,format:p})}o()}),m.readAsDataURL(s)}else n({webPath:URL.createObjectURL(s),format:p}),o()}),t.addEventListener("cancel",i=>{a(new _("User cancelled photos app")),o()})),t.accept="image/*",t.capture=!0,e.source===u.Photos||e.source===u.Prompt?t.removeAttribute("capture"):e.direction===f.Front?t.capture="user":e.direction===f.Rear&&(t.capture="environment"),t.click()}multipleFileInputExperience(e,n){let a=document.querySelector("#_capacitor-camera-input-multiple");const t=()=>{var o;(o=a.parentNode)===null||o===void 0||o.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input-multiple",a.type="file",a.hidden=!0,a.multiple=!0,document.body.appendChild(a),a.addEventListener("change",o=>{const i=[];for(let s=0;s<a.files.length;s++){const p=a.files[s];let m="jpeg";p.type==="image/png"?m="png":p.type==="image/gif"&&(m="gif"),i.push({webPath:URL.createObjectURL(p),format:m})}e({photos:i}),t()}),a.addEventListener("cancel",o=>{n(new _("User cancelled photos app")),t()})),a.accept="image/*",a.click()}_getCameraPhoto(e,n){return new Promise((a,t)=>{const o=new FileReader,i=e.type.split("/")[1];n.resultType==="uri"?a({webPath:URL.createObjectURL(e),format:i,saved:!1}):(o.readAsDataURL(e),o.onloadend=()=>{const s=o.result;n.resultType==="dataUrl"?a({dataUrl:s,format:i,saved:!1}):a({base64String:s.split(",")[1],format:i,saved:!1})},o.onerror=s=>{t(s)})})}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch(e){throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}new E;const K=J("Camera",{web:()=>new E}),Q=T({name:"CameraScreen",components:{IonToolbar:k,IonPage:x,IonFooter:F,IonHeader:N,IonContent:O,IonTitle:S,IonRouterOutlet:A,IonTabBar:q,IonTabButton:B,IonIcon:H,IonLabel:M,IonTabs:W},data(){return{}},methods:{async takePhoto(){var e=(await K.getPhoto({quality:90,allowEditing:!0,resultType:g.Uri})).webPath;imageElement.src=e}},setup(){return{home:$,person:D}}}),X={class:"p-3"};function Y(r,e,n,a,t,o){const i=d("ion-title"),s=d("ion-toolbar"),p=d("ion-header"),m=d("ion-content"),b=d("ion-router-outlet"),y=d("ion-icon"),w=d("ion-label"),P=d("ion-tab-button"),I=d("ion-tab-bar"),L=d("ion-tabs"),U=d("ion-footer"),C=d("ion-page");return z(),j(C,null,{default:c(()=>[l(p,null,{default:c(()=>[l(s,{color:"primary"},{default:c(()=>[l(i,null,{default:c(()=>e[1]||(e[1]=[h(" Camera ")])),_:1})]),_:1})]),_:1}),l(m,null,{default:c(()=>[v("div",X,[v("button",{class:"btn btn-primary btn-lg w-100",onClick:e[0]||(e[0]=(...R)=>r.takePhoto&&r.takePhoto(...R))}," Take Photo ")])]),_:1}),l(U,null,{default:c(()=>[l(s,{class:"p-1"},{default:c(()=>[l(L,null,{default:c(()=>[l(b),l(I,{slot:"bottom"},{default:c(()=>[l(P,{tab:"tab1",href:"/tabs/home"},{default:c(()=>[l(y,{"aria-hidden":"true",icon:r.home},null,8,["icon"]),l(w,null,{default:c(()=>e[2]||(e[2]=[h("Home")])),_:1})]),_:1}),l(P,{tab:"tab2",href:"/tabs/profile"},{default:c(()=>[l(y,{"aria-hidden":"true",icon:r.person},null,8,["icon"]),l(w,null,{default:c(()=>e[3]||(e[3]=[h("Profile")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const te=V(Q,[["render",Y],["__scopeId","data-v-35aac93c"]]);export{te as default};