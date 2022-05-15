<template>
  <q-page class="column items-center">
    <div class="row full-width bg-white" style="min-height: 600px">
      <div class="col-xs-12 col-sm-5 column items-center justify-center">
        <div class="typewriter">
          <p class="text-xl text-primary">{{header}}</p>
        </div>
          <q class="text-lg q-ma-md text-grey-6">{{featureText}}</q>
      </div>
      <div class="col-xs-12 col-sm-7 ">
        <FavCars/>
      </div>
    </div>
    <div class="column items-center justify-center full-width q-pa-md bg-grey-1">
        <h1 class="title">Our recent events</h1>
        <RecentEvents class="container"/>
      <q-btn :to="{name:'events'}" class="q-ma-md" color="primary" flat label="Our Events"/>
    </div>
    <div class="column items-center justify-center full-width q-pa-xl bg-white">
        <h1 class="title">Testimonials</h1>
      <br/>
        <Testimonials/>
    </div>

    <div class="column items-center justify-center full-width q-py-xl bg-grey-1">
      <h1 class="title">Contact Us</h1>
      <Contact class="full-width"/>
    </div>

  </q-page>
</template>

<script>
import {defineAsyncComponent, defineComponent} from 'vue'
import {useQuasar} from "quasar";
import {useContentData} from "stores/contentData";

export default defineComponent({
  name: 'IndexPage',
  components: {
    RecentEvents:  defineAsyncComponent(() => import('components/RecentEvents.vue')),
    FavCars:  defineAsyncComponent(() => import('components/FavCars.vue')),
    Testimonials:  defineAsyncComponent(() => import('components/Testimonials.vue')),
    Contact:  defineAsyncComponent(() => import('components/Contact.vue')),
  },
  setup(props, context) {
    const q = useQuasar();
    const {featureText,header} = useContentData();
    return{
      featureText,
      header
    }
  }
})
</script>
