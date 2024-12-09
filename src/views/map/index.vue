<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title> Map </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="map"></div>
    </ion-content>
    <ion-footer>
      <ion-toolbar class="p-1">
        <ion-tabs>
          <ion-router-outlet></ion-router-outlet>
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="tab1" href="/tabs/home">
              <ion-icon aria-hidden="true" :icon="home" />
              <ion-label>Home</ion-label>
            </ion-tab-button>

            <ion-tab-button tab="tab2" href="/tabs/profile">
              <ion-icon aria-hidden="true" :icon="person" />
              <ion-label>Profile</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>
<script lang="ts">
/**
 * API key: AIzaSyA7nyAevnZcR1GncVAydyO9Nkip0JCBnb8
 */
import { defineComponent } from 'vue'
import {
  IonToolbar,
  IonPage,
  IonFooter,
  IonHeader,
  IonContent,
  IonTitle,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
} from '@ionic/vue'
import { home, person } from 'ionicons/icons'
import { GoogleMap } from '@capacitor/google-maps'

export default defineComponent({
  name: 'g-mapScreen',
  components: {
    IonToolbar,
    IonPage,
    IonFooter,
    IonHeader,
    IonContent,
    IonTitle,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonTabs,
  },
  data() {
    return {
      apiKey: 'PRIVATE',
    }
  },
  methods: {
    async initMap() {
      const mapRef = document.getElementById('map') as HTMLElement

      const newMap = await GoogleMap.create({
        id: 'my-map',
        element: mapRef,
        apiKey: this.apiKey,
        config: {
          center: {
            lat: 10.232030029445621,
            lng: 123.7801877922797,
          },
          zoom: 25,
        },
      })
    },
  },
  async mounted() {
    this.initMap()
  },
  setup() {
    return {
      home,
      person,
    }
  },
})
</script>
<style scoped>
#map {
  display: inline-block;
  width: 100vw;
  height: 100vh;
}
</style>
