<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title> Geolocation </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="p-3">
        <button class="btn btn-primary btn-lg w-100" @click="getGeo">
          Get Geolocation
        </button>
        <div class="mt-4">
          <p>Latitude</p>
          <input v-model="coords.latitude" class="form-control" type="text" />
        </div>
        <div class="mt-4">
          <p>Longitude</p>
          <input v-model="coords.longitude" class="form-control" type="text" />
        </div>
      </div>
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
import { Geolocation } from '@capacitor/geolocation'

export default defineComponent({
  name: 'MapScreen',
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
      coords: {} as any,
    }
  },
  methods: {
    async getGeo() {
      const coordinates = await Geolocation.getCurrentPosition()
      this.coords = coordinates.coords
      console.log(coordinates.coords)
    },
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
