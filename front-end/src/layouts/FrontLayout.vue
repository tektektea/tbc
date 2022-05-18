<template>
  <q-layout view="hHh lpR fff" @scroll="onScroll">

    <q-header :class="position===0? 'bg-white flex justify-center text-primary':'header flex justify-center text-primary'">
      <q-toolbar class="container" style="height: 70px">
        <q-toolbar-title @click="$router.replace({name:'home'})" class="text-bold cursor-pointer">
          <q-avatar class="q-mr-lg">
            <img src="~assets/logo.jpeg">
          </q-avatar>
          TBC Car Rental
        </q-toolbar-title>
        <q-btn class="xs-hide" :to="{name:'events'}"  flat color="dark" label="Events"/>
        <q-btn class="xs-hide" :to="{name:'gallery'}"  flat color="dark" label="Gallery"/>
        <q-btn class="xs-hide" :to="{name:'about'}"  flat color="dark" label="About us"/>
        <q-btn class="xs-hide" :to="{name:'contact'}"  flat color="dark" label="Contact us"/>
        <q-btn class="text-bold" :to="{name:'booking'}" color="primary" label="Booking" outline rounded/>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-pa-sm bg-grey-1">
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
