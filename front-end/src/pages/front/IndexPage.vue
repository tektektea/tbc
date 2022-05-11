<template>
  <q-page class="column items-center">
    <div class="row full-width" style="min-height: 480px">
      <div class="col-sm-4 column items-center justify-center">
        <p class="text-lg">{{header}}</p>
        <p class="text-sm">{{featureText}}</p>
      </div>
      <div class="col-sm-8 bg-secondary">
        <FavCars/>
      </div>
    </div>
    <div class="text-center full-width q-pa-md bg-grey-1">
        <h1 class="title">Our recent events</h1>
        <RecentEvents/>
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
