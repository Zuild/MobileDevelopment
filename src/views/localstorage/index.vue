<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="warning">
        <ion-back-button slot="start" default-href="/home"></ion-back-button>
        <ion-title> Local Storage</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="p-3">
        <div class="mb-3">
          <label class="form-label">Key</label>
          <input v-model="form.key" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Value</label>
          <input v-model="form.value" type="text" class="form-control" />
        </div>
        <button class="btn btn-primary w-100" @click="save()">
          Save Storage
        </button>
        <button class="btn btn-primary w-100 mt-3" @click="getData()">
          Get Data
        </button>
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
  IonBackButton,
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
import { Preferences } from '@capacitor/preferences'

export default defineComponent({
  name: 'localstorageScreen',
  components: {
    IonBackButton,
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
      form: {
        key: '',
        value: '',
      },
    }
  },
  methods: {
    async save() {
      await Preferences.set({
        key: this.form.key,
        value: this.form.value,
      })
    },
    async getData() {
      const data = await Preferences.get({
        key: this.form.key,
      })
      if (data.value) {
        this.form.value = data.value
      }
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
.banner {
  width: 100vw;
  height: 260px;
  object-fit: cover;
  object-position: center;
}
</style>
