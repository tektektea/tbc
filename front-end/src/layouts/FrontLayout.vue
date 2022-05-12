<template>
  <q-layout view="hHh lpR fff" @scroll="onScroll">

    <q-header  class="header flex justify-center text-primary">
      <q-toolbar class="container" style="height: 70px">
        <q-toolbar-title @click="$router.replace({name:'home'})" class="text-bold cursor-pointer">
          <q-avatar class="q-mr-lg">
            <img src="~assets/quasar-logo-vertical.svg">
          </q-avatar>
          TBC Car Rental
        </q-toolbar-title>
        <q-btn class="text-bold" :to="{name:'booking'}" color="primary" label="Booking" outline rounded/>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pa-sm">
      <router-view/>
    </q-page-container>
    <q-footer>
      <Footer/>
    </q-footer>
  </q-layout>
</template>
<script>
import {defineAsyncComponent, defineComponent, ref} from "vue";

export default defineComponent({
  components: {Footer: defineAsyncComponent(() => import('components/Footer.vue'))},
  setup(props, context) {
    const position = ref(0);
    const onScroll = detail => {
      position.value = detail.position;
    }
    return {
      onScroll,
      position
    }
  },
})

</script>
