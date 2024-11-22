<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title> Swiper-Loop </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <swiper :slides-per-view="1" :space-between="10" @swiper="onSwiper">
        <swiper-slide v-for="(banner, i) in banners" :key="i">
          <img class="banner" :src="banner" />
        </swiper-slide>
      </swiper>
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { home, person } from 'ionicons/icons'

export default defineComponent({
  name: 'SwiperScreen',
  components: {
    Swiper,
    SwiperSlide,
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
      swiper: {} as any,
      banners: [
        'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/d/4/d439c3d37508f9d72abd9444aa5e647511a3f6bff068bf40e0fe0c19806da39b/welcome-slides-slide4_1.png',
        'https://i.ytimg.com/vi/trHMhAqwCfg/maxresdefault.jpg',
        'https://buffalo7.co.uk/wp-content/uploads/2020/06/How-many-slides.jpg',
        'https://www.marieleslie.com/wp-content/uploads/2016/05/How-to-Make-An-Awesome-Slide-Show.jpg',
        'https://cdn.sketchbubble.com/pub/media/catalog/product/optimized1/a/0/a06d4222abc4da5e72c82b0d0a620eef7acea0dfe52a38c7cbb2a628c3838168/welcome-slides-slide1a.png',
        'https://i.pinimg.com/originals/c8/20/22/c820221934fa96823cfa5ea8e88a7340.jpg',
      ],
    }
  },
  methods: {
    async onSwiper(event: any) {
      this.swiper = event
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
