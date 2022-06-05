<template>
  <div class="q-pa-md full-height">
    <q-carousel
      v-model="slide"
      height="750px"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      navigation-icon="radio_button_unchecked"
      navigation
      padding
      autoplay
      control-color="primary"
      class="bg-transparent  full-height"
    >
      <q-carousel-slide
        v-for="(item,index) in fav_cars"
        :name="index" class="q-pa-none q-ma-none column no-wrap flex-center">
        <div class="full-width primary-card">
          <q-img :src="item.image_url" style="height: 350px"/>
          <p class="text-md text-dark">{{item?.name}}</p>
          <div v-html="item?.description"/>
        </div>

      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import {computed, reactive, ref} from 'vue'
import {useContentData} from "stores/contentData";
import {storeToRefs} from "pinia/dist/pinia";

const slide = ref(0);
const {fav_cars} = storeToRefs(useContentData());

</script>
