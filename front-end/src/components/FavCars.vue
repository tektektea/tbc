<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
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
      class="bg-transparent text-dark"
    >
      <q-carousel-slide
        v-for="(item,index) in fav_cars"
        :name="index" class="q-pa-none q-ma-none column no-wrap flex-center">
        <div class="full-width primary-card">
          <q-img :src="item.image_url" style="height: 200px"/>
          <p class="text-md text-dark">{{item?.name}}</p>
          <div v-html="item?.description"/>
        </div>

      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {useContentData} from "stores/contentData";

const slide = ref(0);
const {fav_cars} = useContentData();

</script>
