<template>
  <div class="row q-col-gutter-xs">
    <div class="col-xs-12 col-sm-6" v-for="(event,n) in recent_events" :key="`xs-${n}`">
      <div class="tcard" flat bordered>

        <q-card-section horizontal>
          <q-card-section class="q-pt-xs col-7">
            <div class="text-lg text-dark q-mt-sm q-mb-xs">{{ event?.title }}</div>
            <div class="text-caption text-grey">
              {{ event?.description}}
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <q-img
              class="rounded-borders"
              :src="event.thumbnail_path"
            />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn color="dark" flat round icon="event" />
          <q-btn flat>
            {{formatDate(event.created_at)}}
          </q-btn>
          <q-btn :to="{name:'event:detail',params:{id:event.id}}" flat color="primary">
            Read More
          </q-btn>
        </q-card-actions>
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed, reactive} from "vue";
import {useContentData} from "stores/contentData";
import useUtils from "src/utils/useUtils";
import {storeToRefs} from "pinia/dist/pinia";

const {formatDate} = useUtils();
const {recent_events} = storeToRefs(useContentData());


</script>
