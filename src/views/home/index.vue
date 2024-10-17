<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/signin"></ion-back-button>
        </ion-buttons>
        <ion-title>Home Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content> </ion-content>

    <ion-footer> </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonButtons,
  IonBackButton,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonContent,
  IonFooter,
} from '@ionic/vue'

export default defineComponent({
  name: 'HomeScreen',
  components: {
    IonButtons,
    IonBackButton,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonPage,
    IonContent,
    IonFooter,
  },
})
</script>
