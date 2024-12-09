System.register(["./index-legacy-C9i9eVqM.js","./index-legacy-bWGLu6PL.js"],(function(e,t){"use strict";var i,n,r,s,o,a,l,d,c,h,u,C,L,m,v,k,g,y,M,w,p,b,f,I,B,E;return{setters:[e=>{i=e.a2,n=e.d,r=e.b,s=e.f,o=e.h,a=e.e,l=e.g,d=e.c,c=e.v,h=e.s,u=e.t,C=e.u,L=e.n,m=e.q,v=e.y,k=e.z,g=e._,y=e.i,M=e.w,w=e.r,p=e.o,b=e.j,f=e.l,I=e.k},e=>{B=e.r,E=e.C}],execute:function(){var P=document.createElement("style");P.textContent="#map[data-v-a4f315b6]{display:inline-block;width:100vw;height:100vh}\n",document.head.appendChild(P);const S=B("CapacitorGoogleMaps",{web:()=>i((()=>t.import("./web-legacy-CJhivpRi.js")),void 0).then((e=>new e.CapacitorGoogleMapsWeb))});S.addListener("isMapInFocus",(e=>{var t;const i=e.x,n=e.y,r=document.elementFromPoint(i,n),s=(null===(t=null==r?void 0:r.dataset)||void 0===t?void 0:t.internalId)===e.mapId;S.dispatchMapEvent({id:e.mapId,focus:s})}));class T{constructor(e){this.southwest=e.southwest,this.center=e.center,this.northeast=e.northeast}async contains(e){return(await S.mapBoundsContains({bounds:this,point:e})).contains}async extend(e){const t=await S.mapBoundsExtend({bounds:this,point:e});return this.southwest=t.bounds.southwest,this.center=t.bounds.center,this.northeast=t.bounds.northeast,this}}var D;e("L",T),e("M",D),function(e){e.Normal="Normal",e.Hybrid="Hybrid",e.Satellite="Satellite",e.Terrain="Terrain",e.None="None"}(D||e("M",D={}));class O extends HTMLElement{constructor(){super()}connectedCallback(){if(this.innerHTML="","ios"==E.getPlatform()){this.style.overflow="scroll",this.style["-webkit-overflow-scrolling"]="touch";const e=document.createElement("div");e.style.height="200%",this.appendChild(e)}}}customElements.define("capacitor-google-map",O);class _{constructor(e){this.element=null,this.resizeObserver=null,this.handleScrollEvent=()=>this.updateMapBounds(),this.id=e}static async create(e,t){const i=new _(e.id);if(!e.element)throw new Error("container element is required");void 0===e.config.androidLiteMode&&(e.config.androidLiteMode=!1),i.element=e.element,i.element.dataset.internalId=e.id;const n=await _.getElementBounds(e.element);if(e.config.width=n.width,e.config.height=n.height,e.config.x=n.x,e.config.y=n.y,e.config.devicePixelRatio=window.devicePixelRatio,"android"==E.getPlatform()&&i.initScrolling(),E.isNativePlatform()){e.element={};const t=()=>{var e,t;const n=null!==(t=null===(e=i.element)||void 0===e?void 0:e.getBoundingClientRect())&&void 0!==t?t:{};return{x:n.x,y:n.y,width:n.width,height:n.height}},r=()=>{S.onDisplay({id:i.id,mapBounds:t()})},s=()=>{S.onResize({id:i.id,mapBounds:t()})},o=i.element.closest(".ion-page");"ios"===E.getPlatform()&&o&&(o.addEventListener("ionViewWillEnter",(()=>{setTimeout((()=>{r()}),100)})),o.addEventListener("ionViewDidEnter",(()=>{setTimeout((()=>{r()}),100)})));const a={width:n.width,height:n.height,isHidden:!1};i.resizeObserver=new ResizeObserver((()=>{if(null!=i.element){const e=i.element.getBoundingClientRect(),t=0===e.width&&0===e.height;t||(a.isHidden?"ios"!==E.getPlatform()||o||r():a.width===e.width&&a.height===e.height||s()),a.width=e.width,a.height=e.height,a.isHidden=t}})),i.resizeObserver.observe(i.element)}if(await new Promise(((t,i)=>{setTimeout((async()=>{try{await S.create(e),t(void 0)}catch(n){i(n)}}),200)})),t){const e=await S.addListener("onMapReady",(n=>{n.mapId==i.id&&(t(n),e.remove())}))}return i}static async getElementBounds(e){return new Promise((t=>{let i=e.getBoundingClientRect();if(0==i.width){let n=0;const r=setInterval((function(){0==i.width&&n<30?(i=e.getBoundingClientRect(),n++):(30==n&&console.warn("Map size could not be determined"),clearInterval(r),t(i))}),100)}else t(i)}))}async enableTouch(){return S.enableTouch({id:this.id})}async disableTouch(){return S.disableTouch({id:this.id})}async enableClustering(e){return S.enableClustering({id:this.id,minClusterSize:e})}async disableClustering(){return S.disableClustering({id:this.id})}async addMarker(e){return(await S.addMarker({id:this.id,marker:e})).id}async addMarkers(e){return(await S.addMarkers({id:this.id,markers:e})).ids}async removeMarker(e){return S.removeMarker({id:this.id,markerId:e})}async removeMarkers(e){return S.removeMarkers({id:this.id,markerIds:e})}async addPolygons(e){return(await S.addPolygons({id:this.id,polygons:e})).ids}async addPolylines(e){return(await S.addPolylines({id:this.id,polylines:e})).ids}async removePolygons(e){return S.removePolygons({id:this.id,polygonIds:e})}async addCircles(e){return(await S.addCircles({id:this.id,circles:e})).ids}async removeCircles(e){return S.removeCircles({id:this.id,circleIds:e})}async removePolylines(e){return S.removePolylines({id:this.id,polylineIds:e})}async destroy(){var e;return"android"==E.getPlatform()&&this.disableScrolling(),E.isNativePlatform()&&(null===(e=this.resizeObserver)||void 0===e||e.disconnect()),this.removeAllMapListeners(),S.destroy({id:this.id})}async setCamera(e){return S.setCamera({id:this.id,config:e})}async getMapType(){const{type:e}=await S.getMapType({id:this.id});return D[e]}async setMapType(e){return S.setMapType({id:this.id,mapType:e})}async enableIndoorMaps(e){return S.enableIndoorMaps({id:this.id,enabled:e})}async enableTrafficLayer(e){return S.enableTrafficLayer({id:this.id,enabled:e})}async enableAccessibilityElements(e){return S.enableAccessibilityElements({id:this.id,enabled:e})}async enableCurrentLocation(e){return S.enableCurrentLocation({id:this.id,enabled:e})}async setPadding(e){return S.setPadding({id:this.id,padding:e})}async getMapBounds(){return new T(await S.getMapBounds({id:this.id}))}async fitBounds(e,t){return S.fitBounds({id:this.id,bounds:e,padding:t})}initScrolling(){const e=document.getElementsByTagName("ion-content");for(let t=0;t<e.length;t++)e[t].scrollEvents=!0;window.addEventListener("ionScroll",this.handleScrollEvent),window.addEventListener("scroll",this.handleScrollEvent),window.addEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.addEventListener("change",(()=>{setTimeout(this.updateMapBounds,500)})):window.addEventListener("orientationchange",(()=>{setTimeout(this.updateMapBounds,500)}))}disableScrolling(){window.removeEventListener("ionScroll",this.handleScrollEvent),window.removeEventListener("scroll",this.handleScrollEvent),window.removeEventListener("resize",this.handleScrollEvent),screen.orientation?screen.orientation.removeEventListener("change",(()=>{setTimeout(this.updateMapBounds,1e3)})):window.removeEventListener("orientationchange",(()=>{setTimeout(this.updateMapBounds,1e3)}))}updateMapBounds(){if(this.element){const e=this.element.getBoundingClientRect();S.onScroll({id:this.id,mapBounds:{x:e.x,y:e.y,width:e.width,height:e.height}})}}async setOnCameraIdleListener(e){this.onCameraIdleListener&&this.onCameraIdleListener.remove(),this.onCameraIdleListener=e?await S.addListener("onCameraIdle",this.generateCallback(e)):void 0}async setOnBoundsChangedListener(e){this.onBoundsChangedListener&&this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=e?await S.addListener("onBoundsChanged",this.generateCallback(e)):void 0}async setOnCameraMoveStartedListener(e){this.onCameraMoveStartedListener&&this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=e?await S.addListener("onCameraMoveStarted",this.generateCallback(e)):void 0}async setOnClusterClickListener(e){this.onClusterClickListener&&this.onClusterClickListener.remove(),this.onClusterClickListener=e?await S.addListener("onClusterClick",this.generateCallback(e)):void 0}async setOnClusterInfoWindowClickListener(e){this.onClusterInfoWindowClickListener&&this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=e?await S.addListener("onClusterInfoWindowClick",this.generateCallback(e)):void 0}async setOnInfoWindowClickListener(e){this.onInfoWindowClickListener&&this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=e?await S.addListener("onInfoWindowClick",this.generateCallback(e)):void 0}async setOnMapClickListener(e){this.onMapClickListener&&this.onMapClickListener.remove(),this.onMapClickListener=e?await S.addListener("onMapClick",this.generateCallback(e)):void 0}async setOnPolygonClickListener(e){this.onPolygonClickListener&&this.onPolygonClickListener.remove(),this.onPolygonClickListener=e?await S.addListener("onPolygonClick",this.generateCallback(e)):void 0}async setOnCircleClickListener(e){this.onCircleClickListener&&this.onCircleClickListener.remove(),this.onCircleClickListener=e?await S.addListener("onCircleClick",this.generateCallback(e)):void 0}async setOnMarkerClickListener(e){this.onMarkerClickListener&&this.onMarkerClickListener.remove(),this.onMarkerClickListener=e?await S.addListener("onMarkerClick",this.generateCallback(e)):void 0}async setOnPolylineClickListener(e){this.onPolylineClickListener&&this.onPolylineClickListener.remove(),this.onPolylineClickListener=e?await S.addListener("onPolylineClick",this.generateCallback(e)):void 0}async setOnMarkerDragStartListener(e){this.onMarkerDragStartListener&&this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=e?await S.addListener("onMarkerDragStart",this.generateCallback(e)):void 0}async setOnMarkerDragListener(e){this.onMarkerDragListener&&this.onMarkerDragListener.remove(),this.onMarkerDragListener=e?await S.addListener("onMarkerDrag",this.generateCallback(e)):void 0}async setOnMarkerDragEndListener(e){this.onMarkerDragEndListener&&this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=e?await S.addListener("onMarkerDragEnd",this.generateCallback(e)):void 0}async setOnMyLocationButtonClickListener(e){this.onMyLocationButtonClickListener&&this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=e?await S.addListener("onMyLocationButtonClick",this.generateCallback(e)):void 0}async setOnMyLocationClickListener(e){this.onMyLocationClickListener&&this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=e?await S.addListener("onMyLocationClick",this.generateCallback(e)):void 0}async removeAllMapListeners(){this.onBoundsChangedListener&&(this.onBoundsChangedListener.remove(),this.onBoundsChangedListener=void 0),this.onCameraIdleListener&&(this.onCameraIdleListener.remove(),this.onCameraIdleListener=void 0),this.onCameraMoveStartedListener&&(this.onCameraMoveStartedListener.remove(),this.onCameraMoveStartedListener=void 0),this.onClusterClickListener&&(this.onClusterClickListener.remove(),this.onClusterClickListener=void 0),this.onClusterInfoWindowClickListener&&(this.onClusterInfoWindowClickListener.remove(),this.onClusterInfoWindowClickListener=void 0),this.onInfoWindowClickListener&&(this.onInfoWindowClickListener.remove(),this.onInfoWindowClickListener=void 0),this.onMapClickListener&&(this.onMapClickListener.remove(),this.onMapClickListener=void 0),this.onPolylineClickListener&&(this.onPolylineClickListener.remove(),this.onPolylineClickListener=void 0),this.onMarkerClickListener&&(this.onMarkerClickListener.remove(),this.onMarkerClickListener=void 0),this.onPolygonClickListener&&(this.onPolygonClickListener.remove(),this.onPolygonClickListener=void 0),this.onCircleClickListener&&(this.onCircleClickListener.remove(),this.onCircleClickListener=void 0),this.onMarkerDragStartListener&&(this.onMarkerDragStartListener.remove(),this.onMarkerDragStartListener=void 0),this.onMarkerDragListener&&(this.onMarkerDragListener.remove(),this.onMarkerDragListener=void 0),this.onMarkerDragEndListener&&(this.onMarkerDragEndListener.remove(),this.onMarkerDragEndListener=void 0),this.onMyLocationButtonClickListener&&(this.onMyLocationButtonClickListener.remove(),this.onMyLocationButtonClickListener=void 0),this.onMyLocationClickListener&&(this.onMyLocationClickListener.remove(),this.onMyLocationClickListener=void 0)}generateCallback(e){const t=this.id;return i=>{i.mapId==t&&e(i)}}}const W=n({name:"g-mapScreen",components:{IonToolbar:r,IonPage:s,IonFooter:o,IonHeader:a,IonContent:l,IonTitle:d,IonRouterOutlet:c,IonTabBar:h,IonTabButton:u,IonIcon:C,IonLabel:L,IonTabs:m},data:()=>({apiKey:"AIzaSyA7nyAevnZcR1GncVAydyO9Nkip0JCBnb8"}),methods:{async initMap(){const e=document.getElementById("map");await _.create({id:"my-map",element:e,apiKey:this.apiKey,config:{center:{lat:10.232030029445621,lng:123.7801877922797},zoom:25}})}},async mounted(){this.initMap()},setup:()=>({home:v,person:k})}),x=g(W,[["render",function(e,t,i,n,r,s){const o=w("ion-title"),a=w("ion-toolbar"),l=w("ion-header"),d=w("ion-content"),c=w("ion-router-outlet"),h=w("ion-icon"),u=w("ion-label"),C=w("ion-tab-button"),L=w("ion-tab-bar"),m=w("ion-tabs"),v=w("ion-footer"),k=w("ion-page");return p(),y(k,null,{default:M((()=>[b(l,null,{default:M((()=>[b(a,{color:"primary"},{default:M((()=>[b(o,null,{default:M((()=>t[0]||(t[0]=[f(" Map ")]))),_:1})])),_:1})])),_:1}),b(d,null,{default:M((()=>t[1]||(t[1]=[I("div",{id:"map"},null,-1)]))),_:1}),b(v,null,{default:M((()=>[b(a,{class:"p-1"},{default:M((()=>[b(m,null,{default:M((()=>[b(c),b(L,{slot:"bottom"},{default:M((()=>[b(C,{tab:"tab1",href:"/tabs/home"},{default:M((()=>[b(h,{"aria-hidden":"true",icon:e.home},null,8,["icon"]),b(u,null,{default:M((()=>t[2]||(t[2]=[f("Home")]))),_:1})])),_:1}),b(C,{tab:"tab2",href:"/tabs/profile"},{default:M((()=>[b(h,{"aria-hidden":"true",icon:e.person},null,8,["icon"]),b(u,null,{default:M((()=>t[3]||(t[3]=[f("Profile")]))),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-a4f315b6"]]),z=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));e("i",z)}}}));
