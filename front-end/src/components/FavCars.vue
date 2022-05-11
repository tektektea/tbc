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
      arrows
      autoplay
      control-type="regular"
      control-color="primary"
      class="bg-transparent text-dark"
    >
      <q-carousel-slide
        v-for="(item,index) in localState.cars"
        :name="index" class="column no-wrap flex-center">
        <div class="full-width primary-card">
          <q-img :src="item.src" style="height: 200px"/>
          <p class="text-md text-dark">{{item?.title}}</p>
          <p class="text-caption text-dark">{{item?.description}}</p>
          <p class="text-md text-bold text-dark">Kilometer Rate : {{item?.km_rate}}</p>
          <p class="text-md text-bold text-dark">Duty Rate : {{item?.duty_rate}}</p>
        </div>

      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'

export default {
  setup () {
    return {
      slide: ref(0),
      localState:reactive({
        cars:[
          {id:1,src:'https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg',title:'Bolero SUV 300',description:"lorme",km_rate:'15 Per Km',duty_rate:900},
          {id:1,src:'https://img.freepik.com/free-photo/blue-sport-sedan-parked-yard_114579-5078.jpg',title:'Bolero SUV 300',description:"lorme",km_rate:'15 Per Km',duty_rate:900},
        ]
      })
    }
  }
}
</script>
