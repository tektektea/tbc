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
        <FavCars class="q-ma-sm"/>
      </div>
    </div>

    <div class="column items-center  full-width q-py-xl bg-grey-1">
      <h1 class="title">Why choose us</h1>
      <Cta class="container"/>
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

    <div class=" column items-center justify-center  full-width q-py-xl bg-grey-1">
      <h1 class="title">Frequently Asked Questions</h1>
      <Faq class="container"/>
    </div>



    <div class="column items-center justify-center full-width q-py-xl bg-grey-1">
      <h1 class="title">Contact Us</h1>
      <Contact class="full-width"/>
    </div>


  </q-page>
</template>

<script>
import {defineAsyncComponent, defineComponent} from 'vue'
import {useMeta, useQuasar} from "quasar";
import {useContentData} from "stores/contentData";

export default defineComponent({
  name: 'IndexPage',
  components: {
    Cta:defineAsyncComponent(() => import('components/Cta.vue')),
    Faq:defineAsyncComponent(() => import('components/Faq.vue')),
    RecentEvents:  defineAsyncComponent(() => import('components/RecentEvents.vue')),
    FavCars:  defineAsyncComponent(() => import('components/FavCars.vue')),
    Testimonials:  defineAsyncComponent(() => import('components/Testimonials.vue')),
    Contact:  defineAsyncComponent(() => import('components/Contact.vue')),
  },
  setup(props, context) {
    const q = useQuasar();
    const metaData = {
      // sets document title
      title: 'Home',
      titleTemplate: title => `${title} -  Welcome TBC Car Rental`,

      // meta tags
      meta: {
        description: { name: 'description', content: "I hahdam nan leh i himzawk nan govt approved car rental service TBC Car rental hi lo pan ve ngei ang che" },
        keywords: { name: 'keywords', content: 'mizo car rental service,mizoram car rental service,mizo car,tbc car rental' },
      }
    }
    const {featureText,header} = useContentData();
    useMeta(()=>metaData)
    return{
      featureText,
      header
    }
  }
})
</script>
