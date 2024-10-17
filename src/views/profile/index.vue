<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/signin"></ion-back-button>
        </ion-buttons>
        <ion-title>Profile Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="profile-container">
        <p><strong>Name:</strong> Zean Mariuss C. Algarme</p>
        <p><strong>Age:</strong> 22</p>
        <p><strong>Date of Birth:</strong> 2002-11-22</p>
        <p><strong>Address:</strong> Tungkop, Minglanilla</p>
        <p><strong>Gender:</strong> Male</p>
        <p><strong>Department:</strong> BSIT</p>
      </div>
    </ion-content>
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
} from '@ionic/vue'

export default defineComponent({
  name: 'ProfileScreen',
  components: {
    IonButtons,
    IonBackButton,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonPage,
    IonContent,
  },
})
</script>

<style scoped>
.profile-container {
  padding: 16px;
  font-size: 18px;
}
</style>
