<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Ionic Components </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item :button="true" @click="CardScreen()">
          <ion-label> Cards </ion-label>
        </ion-item>
        <ion-item :button="true" @click="ModalScreen()">
          <ion-label> Modal </ion-label>
        </ion-item>
        <ion-item :button="true" @click="ReorderScreen()">
          <ion-label> Reorder </ion-label>
        </ion-item>
        <ion-item :button="true" @click="FloatScreen()">
          <ion-label> Floating Action Buttons</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonToolbar,
  IonTitle,
  IonHeader,
  IonPage,
  IonContent,
  IonFooter,
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/vue'

export default defineComponent({
  name: 'home',
  components: {
    IonToolbar,
    IonTitle,
    IonHeader,
    IonPage,
    IonContent,
    IonFooter,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
  },
  methods: {
    async CardScreen() {
      this.$router.push('/cards')
    },
    async ModalScreen() {
      this.$router.push('/modal')
    },
    async ReorderScreen() {
      this.$router.push('/reorder')
    },
    async FloatScreen() {
      this.$router.push('/float')
    },
  },
})
</script>
