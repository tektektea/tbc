<template>
  <div class="row full-width q-col-gutter-sm flex justify-center q-col-gutter-xs">
    <div class="col-xs-12 col-sm-3 tcard q-ml-sm column items-center" v-for="(event,n) in testimonials" :key="`xs-${n}`">
          <q-avatar  size="72px">
            <q-img
              class="rounded-borders"
              :src="event?.image_url"
            />
          </q-avatar>
          <p class="text-dark text-bold"> {{ event?.name }}</p>
          <p class="text-grey-5"> {{ event?.designation }}</p>


            <q class="text-dark text-italic">
                {{event?.quote}}
            </q>
    </div>
  </div>
</template>
<script setup>
import {useContentData} from "stores/contentData";
import {computed} from "vue";
import {storeToRefs} from "pinia/dist/pinia";

const {testimonials} = storeToRefs(useContentData());
</script>
