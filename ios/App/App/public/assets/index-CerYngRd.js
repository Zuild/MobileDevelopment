const __vite__fileDeps=["assets/web-BOdKwPWe.js","assets/index-Bgcyza6Q.js","assets/index-4rJc_ijy.css","assets/index-Cwenx0lJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a2 as I,d as B,b as P,f as E,h as S,e as D,g as T,c as O,v as W,s as R,t as x,u as z,n as N,q as H,y as A,z as V,_ as $,i as F,w as a,r as c,o as j,j as o,l as y,k as G}from"./index-Bgcyza6Q.js";import{r as K,C as f}from"./index-Cwenx0lJ.js";const n=K("CapacitorGoogleMaps",{web:()=>I(()=>import("./web-BOdKwPWe.js"),__vite__mapDeps([0,1,2,3])).then(s=>new s.CapacitorGoogleMapsWeb)});n.addListener("isMapInFocus",s=>{var e;const i=s.x,t=s.y,r=document.elementFromPoint(i,t),d=((e=r==null?void 0:r.dataset)===null||e===void 0?void 0:e.internalId)===s.mapId;n.dispatchMapEvent({id:s.mapId,focus:d})});class q{constructor(e){this.southwest=e.southwest,this.center=e.center,this.northeast=e.northeast}async contains(e){return(await n.mapBoundsContains({bounds:this,point:e})).contains}async extend(e){const i=await n.mapBoundsExtend({bounds:this,point:e});return this.southwest=i.bounds.southwest,this.center=i.bounds.center,this.northeast=i.bounds.northeast,this}}var v;(function(s){s.Normal="Normal",s.Hybrid="Hybrid",s.Satellite="Satellite",s.Terrain="Terrain",s.None="None"})(v||(v={}));class J extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="",f.getPlatform()=="ios"){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",J);class k{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static async create(e,i){const t=new k(e.id);if(!e.element)throw new Error("container element is required");e.config.androidLiteMode===void 0&&(e.config.androidLiteMode=!1),t.element=e.element,t.element.dataset.internalId=e.id;const r=await k.getElementBounds(e.element);if(e.config.width=r.width,e.config.height=r.height,e.config.x=r.x,e.config.y=r.y,e.config.devicePixelRatio=window.devicePixelRatio,f.getPlatform()=="android"&&t.initScrolling(),f.isNativePlatform()){e.element={};const h=()=>{var l,u;const L=(u=(l=t.element)===null||l===void 0?void 0:l.getBoundingClientRect())!==null&&u!==void 0?u:{};return{x:L.x,y:L.y,width:L.width,height:L.height}},d=()=>{n.onDisplay({id:t.id,mapBounds:h()})},m=()=>{n.onResize({id:t.id,mapBounds:h()})},g=t.element.closest(".ion-page");f.getPlatform()==="ios"&&g&&(g.addEventListener("ionViewWillEnter",()=>{setTimeout(()=>{d()},100)}),g.addEventListener("ionViewDidEnter",()=>{setTimeout(()=>{d()},100)}));const C={width:r.width,height:r.height,isHidden:!1};t.resizeObserver=new ResizeObserver(()=>{if(t.element!=null){const l=t.element.getBoundingClientRect(),u=l.width===0&&l.height===0;u||(C.isHidden?f.getPlatform()==="ios"&&!g&&d():(C.width!==l.width||C.height!==l.height)&&m()),C.width=l.width,C.height=l.height,C.isHidden=u}}),t.resizeObserver.observe(t.element)}if(await new Promise((h,d)=>{setTimeout(async()=>{try{await n.create(e),h(void 0)}catch(m){d(m)}},200)}),i){const h=await n.addListener("onMapReady",d=>{d.mapId==t.id&&(i(d),h.remove())})}return t}static async getElementBounds(e){return new Promise(i=>{let t=e.getBoundingClientRect();if(t.width==0){let r=0;const h=setInterval(function(){t.width==0&&r<30?(t=e.getBoundingClientRect(),r++):(r==30&&console.warn("Map size could not be determined"),clearInterval(h),i(t))},100)}else i(t)})}async enableTouch(){return n.enableTouch({id:this.id})}async disableTouch(){return n.disableTouch({id:this.id})}async enableClustering(e){return n.enableClustering({id:this.id,minClusterSize:e})}async disableClustering(){return n.disableClustering({id:this.id})}async addMarker(e){return(await n.addMarker({id:this.id,marker:e})).id}async addMarkers(e){return(await n.addMarkers({id:this.id,markers:e})).ids}async removeMarker(e){return n.removeMarker({id:this.id,markerId:e})}async removeMarkers(e){return n.removeMarkers({id:this.id,markerIds:e})}async addPolygons(e){return(await n.addPolygons({id:this.id,polygons:e})).ids}async addPolylines(e){return(await n.addPolylines({id:this.id,polylines:e})).ids}async removePolygons(e){return n.removePolygons({id:this.id,polygonIds:e})}async addCircles(e){return(await n.addCircles({id:this.id,circles:e})).ids}async removeCircles(e){return n.removeCircles({id:this.id,circleIds:e})}async removePolylines(e){return n.removePolylines({id:this.id,polylineIds:e})}async destroy(){var e;return f.getPlatform()=="android"&&this.disableScrolling(),f.isNativePlatform()&&((e=this.resizeObserver)===null||e===void 0||e.disconnect()),this.removeAllMapListeners(),n.destroy({id:this.id})}async setCamera(e){return n.setCamera({id:this.id,config:e})}async getMapType(){const{type:e}=await n.getMapType({id:this.id});return v[e]}async setMapType(e){return n.setMapType({id:this.id,mapType:e})}async enableIndoorMaps(e){return n.enableIndoorMaps({id:this.id,enabled:e})}async enableTrafficLayer(e){return n.enableTrafficLayer({id:this.id,enabled:e})}async enableAccessibilityElements(e){return n.enableAccessibilityElements({id:this.id,enabled:e})}async enableCurrentLocation(e){return n.enableCurrentLocation({id:this.id,enabled:e})}async setPadding(e){return n.setPadding({id:this.id,padding:e})}async getMapBounds(){return new q(await n.getMapBounds({id:this.id}))}async fitBounds(e,i){return n.fitBounds({id:this.id,bounds:e,padding:i})}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let i=0;i<e.length;i++)e[i].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",()=>{setTimeout(this.updateMapBounds,500)}):window.addEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,500)})}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",()=>{setTimeout(this.updateMapBounds,1e3)}):window.removeEventListener("orientationchange",()=>{setTimeout(this.updateMapBounds,1e3)})}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();n.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}async setOnCameraIdleListener(e){this.onCameraIdleListener&&this.onCameraIdleListener.remove(),e?this.onCameraIdleListener=await n.addListener("onCameraIdle",this.generateCallback(e)):this.onCameraIdleListener=void 0}async setOnBoundsChangedListener(e){this.onBoundsChangedListener&&this.onBoundsChangedListener.remove(),e?this.onBoundsChangedListener=await n.addListener("onBoundsChanged",this.generateCallback(e)):this.onBoundsChangedListener=void 0}async setOnCameraMoveStartedListener(e){this.onCameraMoveStartedListener&&this.onCameraMoveStartedListener.remove(),e?this.onCameraMoveStartedListener=await n.addListener("onCameraMoveStarted",this.generateCallback(e)):this.onCameraMoveStartedListener=void 0}async setOnClusterClickListener(e){this.onClusterClickListener&&this.onClusterClickListener.remove(),e?this.onClusterClickListener=await n.addListener("onClusterClick",this.generateCallback(e)):this.onClusterClickListener=void 0}async setOnClusterInfoWindowClickListener(e){this.onClusterInfoWindowClickListener&&this.onClusterInfoWindowClickListener.remove(),e?this.onClusterInfoWindowClickListener=await n.addListener("onClusterInfoWindowClick",this.generateCallback(e)):this.onClusterInfoWindowClickListener=void 0}async setOnInfoWindowClickListener(e){this.onInfoWindowClickListener&&this.onInfoWindowClickListener.remove(),e?this.onInfoWindowClickListener=await n.addListener("onInfoWindowClick",this.generateCallback(e)):this.onInfoWindowClickListener=void 0}async setOnMapClickListener(e){this.onMapClickListener&&this.onMapClickListener.remove(),e?this.onMapClickListener=await n.addListener("onMapClick",this.generateCallback(e)):this.onMapClickListener=void 0}async setOnPolygonClickListener(e){this.onPolygonClickListener&&this.onPolygonClickListener.remove(),e?this.onPolygonClickListener=await n.addListener("onPolygonClick",this.generateCallback(e)):this.onPolygonClickListener=void 0}async setOnCircleClickListener(e){this.onCircleClickListener&&this.onCircleClickListener.remove(),e?this.onCircleClickListener=await n.addListener("onCircleClick",this.generateCallback(e)):this.onCircleClickListener=void 0}async setOnMarkerClickListener(e){this.onMarkerClickListener&&this.onMarkerClickListener.remove(),e?this.onMarkerClickListener=await n.addListener("onMarkerClick",this.generateCallback(e)):this.onMarkerClickListener=void 0}async setOnPolylineClickListener(e){this.onPolylineClickListener&&this.onPolylineClickListener.remove(),e?this.onPolylineClickListener=await n.addListener("onPolylineClick",this.generateCallback(e)):this.onPolylineClickListener=void 0}async setOnMarkerDragStartListener(e){this.onMarkerDragStartListener&&this.onMarkerDragStartListener.remove(),e?this.onMarkerDragStartListener=await n.addListener("onMarkerDragStart",this.generateCallback(e)):this.onMarkerDragStartListener=void 0}async setOnMarkerDragListener(e){this.onMarkerDragListener&&this.onMarkerDragListener.remove(),e?this.onMarkerDragListener=await n.addListener("onMarkerDrag",this.generateCallback(e)):this.onMarkerDragListener=void 0}async setOnMarkerDragEndListener(e){this.onMarkerDragEndListener&&this.onMarkerDragEndListener.remove(),e?this.onMarkerDragEndListener=await n.addListener("onMarkerDragEnd",this.generateCallback(e)):this.onMarkerDragEndListener=void 0}async setOnMyLocationButtonClickListener(e){this.onMyLocationButtonClickListener&&this.onMyLocationButtonClickListener.remove(),e?this.onMyLocationButtonClickListener=await n.addListener("onMyLocationButtonClick",this.generateCallback(e)):this.onMyLocationButtonClickListener=void 0}async setOnMyLocationClickListener(e){this.onMyLocationClickListener&&this.onMyLocationClickListener.remove(),e?this.onMyLocationClickListener=await n.addListener("onMyLocationClick",this.generateCallback(e)):this.onMyLocationClickListener=void 0}async removeAllMapListeners(){this.onBoundsChangedListener&&(this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=void 0),this.onCameraIdleListener&&(this.onCameraIdleListener.remove(),this.onCameraIdleListener=void 0),this.onCameraMoveStartedListener&&(this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=void 0),this.onClusterClickListener&&(this.onClusterClickListener.remove(),this.onClusterClickListener=void 0),this.onClusterInfoWindowClickListener&&(this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=void 0),this.onInfoWindowClickListener&&(this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=void 0),this.onMapClickListener&&(this.onMapClickListener.remove(),this.onMapClickListener=void 0),this.onPolylineClickListener&&(this.onPolylineClickListener.remove(),this.onPolylineClickListener=void 0),this.onMarkerClickListener&&(this.onMarkerClickListener.remove(),this.onMarkerClickListener=void 0),this.onPolygonClickListener&&(this.onPolygonClickListener.remove(),this.onPolygonClickListener=void 0),this.onCircleClickListener&&(this.onCircleClickListener.remove(),this.onCircleClickListener=void 0),this.onMarkerDragStartListener&&(this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=void 0),this.onMarkerDragListener&&(this.onMarkerDragListener.remove(),this.onMarkerDragListener=void 0),this.onMarkerDragEndListener&&(this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=void 0),this.onMyLocationButtonClickListener&&(this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=void 0),this.onMyLocationClickListener&&(this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=void 0)}generateCallback(e){const i=this.id;return t=>{t.mapId==i&&e(t)}}}const Z=B({name:"g-mapScreen",components:{IonToolbar:P,IonPage:E,IonFooter:S,IonHeader:D,IonContent:T,IonTitle:O,IonRouterOutlet:W,IonTabBar:R,IonTabButton:x,IonIcon:z,IonLabel:N,IonTabs:H},data(){return{apiKey:"AIzaSyA7nyAevnZcR1GncVAydyO9Nkip0JCBnb8"}},methods:{async initMap(){const s=document.getElementById("map");await k.create({id:"my-map",element:s,apiKey:this.apiKey,config:{center:{lat:10.232030029445621,lng:123.7801877922797},zoom:25}})}},async mounted(){this.initMap()},setup(){return{home:A,person:V}}});function Q(s,e,i,t,r,h){const d=c("ion-title"),m=c("ion-toolbar"),g=c("ion-header"),C=c("ion-content"),l=c("ion-router-outlet"),u=c("ion-icon"),L=c("ion-label"),M=c("ion-tab-button"),p=c("ion-tab-bar"),w=c("ion-tabs"),b=c("ion-footer"),_=c("ion-page");return j(),F(_,null,{default:a(()=>[o(g,null,{default:a(()=>[o(m,{color:"primary"},{default:a(()=>[o(d,null,{default:a(()=>e[0]||(e[0]=[y(" Map ")])),_:1})]),_:1})]),_:1}),o(C,null,{default:a(()=>e[1]||(e[1]=[G("div",{id:"map"},null,-1)])),_:1}),o(b,null,{default:a(()=>[o(m,{class:"p-1"},{default:a(()=>[o(w,null,{default:a(()=>[o(l),o(p,{slot:"bottom"},{default:a(()=>[o(M,{tab:"tab1",href:"/tabs/home"},{default:a(()=>[o(u,{"aria-hidden":"true",icon:s.home},null,8,["icon"]),o(L,null,{default:a(()=>e[2]||(e[2]=[y("Home")])),_:1})]),_:1}),o(M,{tab:"tab2",href:"/tabs/profile"},{default:a(()=>[o(u,{"aria-hidden":"true",icon:s.person},null,8,["icon"]),o(L,null,{default:a(()=>e[3]||(e[3]=[y("Profile")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const U=$(Z,[["render",Q],["__scopeId","data-v-a4f315b6"]]),ee=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"}));export{q as L,v as M,ee as i};