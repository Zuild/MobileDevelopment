<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Modal</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <!-- Trigger to open modal -->
      <ion-button id="open-modal" expand="block">Open Modal</ion-button>
      <p>{{ message }}</p>

      <!-- Modal definition -->
      <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Cancel</ion-button>
            </ion-buttons>
            <ion-title>Welcome</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-item>
            <ion-input
              label="Enter your name"
              label-placement="stacked"
              ref="input"
              type="text"
              placeholder="Your name"
            ></ion-input>
          </ion-item>
        </ion-content>
      </ion-modal>
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
import { defineComponent, ref } from 'vue'
import { home, person } from 'ionicons/icons'
import { OverlayEventDetail } from '@ionic/core/components'

import {
  IonBackButton,
  IonButtons,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonContent,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
  IonButton,
  IonModal,
  IonInput,
} from '@ionic/vue'

export default defineComponent({
  name: 'card',
  components: {
    IonBackButton,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonContent,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonRouterOutlet,
    IonButton,
    IonModal,
    IonInput,
  },

  setup() {
    const message = ref(
      'This modal example uses triggers to automatically open a modal when the button is clicked.'
    )
    const modal = ref()
    const input = ref()

    const cancel = () => modal.value.$el.dismiss(null, 'cancel')

    const confirm = () => {
      const name = input.value.$el.value
      modal.value.$el.dismiss(name, 'confirm')
    }

    const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
      if (ev.detail.role === 'confirm') {
        message.value = `Hello, ${ev.detail.data}!`
      }
    }

    return {
      home,
      person,
      message,
      modal,
      input,
      cancel,
      confirm,
      onWillDismiss,
    }
  },
})
</script>
