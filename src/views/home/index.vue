<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> Ionic Components </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <h5 class="text-center py-3">MIDTERM ACTIVITY</h5>
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
        <h5 class="text-center py-3"><b>PRE FINAL ACTIVITY</b></h5>
        <ion-item
          button
          detail="true"
          @click="
            () => {
              $router.push('/swiper')
            }
          "
        >
          <ion-label>
            <h2>Activity 1: Swiper Slider</h2>
            <p>Learn how to implement slider</p>
          </ion-label>
        </ion-item>
        <ion-item
          button
          detail="true"
          @click="
            () => {
              $router.push('/swiperloop')
            }
          "
        >
          <ion-label>
            <h2>Activity 2: For Loop with components</h2>
            <p>Learn how to impliment loop around reusable components</p>
          </ion-label>
        </ion-item>
        <ion-item
          button
          detail="true"
          @click="
            () => {
              $router.push('/localstorage')
            }
          "
        >
          <ion-label>
            <h2>Activity 3: Local device storage</h2>
            <p>Learn how to implement device storage</p>
          </ion-label>
        </ion-item>
        <ion-item
          button
          detail="true"
          @click="
            () => {
              $router.push('/map')
            }
          "
        >
          <ion-label>
            <h2>Activity 4: Map Implementation</h2>
            <p>Learn how to implement map in ionic</p>
          </ion-label>
        </ion-item>
        <ion-item
          button
          detail="true"
          @click="
            () => {
              $router.push('/geolocation')
            }
          "
        >
          <ion-label>
            <h2>Activity 5: GPS|Geo Location</h2>
            <p>Get Latitude and Longitude</p>
          </ion-label>
        </ion-item>
        <ion-item
          button
          detail="true"
          @click="
            () => {
              $router.push('/camera')
            }
          "
        >
          <ion-label>
            <h2>Activity 6: Camera Implementation</h2>
            <p>Learn how to camera in ionic</p>
          </ion-label>
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
